#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListPromptsRequestSchema,
  GetPromptRequestSchema
} from "@modelcontextprotocol/sdk/types.js";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Simple frontmatter parser
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  if (!match) {
    return { frontmatter: {}, body: content };
  }
  const yamlBlock = match[1];
  const body = match[2];
  const frontmatter = {};
  yamlBlock.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      frontmatter[key] = value.replace(/^['"]|['"]$/g, ''); // strip optional quotes
    }
  });
  return { frontmatter, body };
}

// Recursive directory copy helper
function copyDirectoryRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirectoryRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Function to install the MCP server
function installMcpServer() {
  const home = os.homedir();
  let configPath = '';

  if (process.platform === 'win32') {
    configPath = join(home, 'AppData', 'Roaming', 'Claude', 'claude_desktop_config.json');
  } else if (process.platform === 'darwin') {
    configPath = join(home, 'Library', 'Application Support', 'Claude', 'claude_desktop_config.json');
  } else {
    console.error('Claude Desktop configuration is only supported on macOS and Windows.');
    process.exit(1);
  }

  console.log(`Searching for Claude Desktop config at: ${configPath}`);

  let config = {};
  if (fs.existsSync(configPath)) {
    try {
      config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    } catch (e) {
      console.error(`Error parsing existing config at ${configPath}:`, e);
      process.exit(1);
    }
  }

  if (!config.mcpServers) {
    config.mcpServers = {};
  }

  // Add the server configuration
  config.mcpServers['revenue-skills'] = {
    command: 'npx',
    args: [
      '-y',
      'github:mjthedeveloper-07/gm-car-ac-service-plugins'
    ]
  };

  const configDir = dirname(configPath);
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
  }

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf-8');
  console.log('\n======================================================================');
  console.log('Successfully installed Revenue Skills MCP server into Claude Desktop config!');
  console.log('Please restart Claude Desktop for the changes to take effect.');

  // Write .mcp.json locally for Claude Code
  const localMcpPath = join(process.cwd(), '.mcp.json');
  const localMcpConfig = {
    mcpServers: {
      'revenue-skills': {
        command: 'npx',
        args: [
          '-y',
          'github:mjthedeveloper-07/gm-car-ac-service-plugins'
        ]
      }
    }
  };
  fs.writeFileSync(localMcpPath, JSON.stringify(localMcpConfig, null, 2), 'utf-8');
  console.log('\nSuccessfully created local .mcp.json for Claude Code!');
  console.log('Claude Code will automatically load these tools in this directory.');

  // Copy skills and plugins to the global customizations root (~/.gemini/config) for local agents
  const globalCustomizationsRoot = join(home, '.gemini', 'config');
  if (fs.existsSync(globalCustomizationsRoot)) {
    console.log(`\nDetected global customizations root at: ${globalCustomizationsRoot}`);
    
    // Copy skills
    const sourceSkillsDir = join(__dirname, 'skills');
    const destSkillsDir = join(globalCustomizationsRoot, 'skills');
    if (fs.existsSync(sourceSkillsDir)) {
      console.log(`Copying generic skills to ${destSkillsDir}...`);
      copyDirectoryRecursive(sourceSkillsDir, destSkillsDir);
    }
    
    // Copy plugins
    const sourcePluginsDir = join(__dirname, 'plugins');
    const destPluginsDir = join(globalCustomizationsRoot, 'plugins');
    if (fs.existsSync(sourcePluginsDir)) {
      console.log(`Copying marketplace plugins to ${destPluginsDir}...`);
      copyDirectoryRecursive(sourcePluginsDir, destPluginsDir);
    }
    
    console.log('\nSuccessfully installed all agents and skills into global agent customizations!');
  }
  console.log('======================================================================\n');
}

// Main execution block
async function main() {
  if (process.argv.includes('--install')) {
    installMcpServer();
    return;
  }

  // Load all skills dynamically
  const skills = [];
  const searchDirs = [
    join(__dirname, 'skills'),
    join(__dirname, 'plugins', 'gm-car-ac-revenue-os', 'skills'),
    join(__dirname, 'plugins', 'revenue-skills-marketplace', 'skills')
  ];

  const processedNames = new Set();

  for (const dir of searchDirs) {
    if (!fs.existsSync(dir)) continue;

    const items = fs.readdirSync(dir);
    for (const item of items) {
      const itemPath = join(dir, item);
      if (!fs.statSync(itemPath).isDirectory()) continue;

      const skillMdPath = join(itemPath, 'SKILL.md');
      if (!fs.existsSync(skillMdPath)) continue;

      try {
        const skillContent = fs.readFileSync(skillMdPath, 'utf-8');
        const { frontmatter, body } = parseFrontmatter(skillContent);
        
        const name = frontmatter.name || item;
        
        // Deduplicate by name
        if (processedNames.has(name)) continue;
        processedNames.add(name);

        // Check for reference files in the skill directory
        let referenceContent = '';
        const refsDir = join(itemPath, 'references');
        if (fs.existsSync(refsDir)) {
          const refFiles = fs.readdirSync(refsDir);
          for (const refFile of refFiles) {
            if (refFile.endsWith('.md')) {
              const refPath = join(refsDir, refFile);
              referenceContent += `\n--- REFERENCE: ${refFile} ---\n` + fs.readFileSync(refPath, 'utf-8') + '\n';
            }
          }
        }

        skills.push({
          name,
          description: frontmatter.description || `Revenue skill: ${name}`,
          body: body.trim(),
          referenceContent: referenceContent.trim(),
          path: skillMdPath
        });
      } catch (err) {
        console.error(`Error parsing skill at ${skillMdPath}:`, err);
      }
    }
  }

  // Initialize MCP Server
  const server = new Server(
    {
      name: "revenue-skills-mcp",
      version: "1.0.0",
    },
    {
      capabilities: {
        tools: {},
        prompts: {},
      },
    }
  );

  // Register tools list
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: skills.map(skill => ({
        name: skill.name.replace(/-/g, '_'), // MCP tools prefer underscores or alphanumeric
        description: skill.description,
        inputSchema: {
          type: "object",
          properties: {
            userInput: {
              type: "string",
              description: "Your specific business details, request context, or constraints to apply to this skill"
            }
          },
          required: ["userInput"]
        }
      }))
    };
  });

  // Register tool calls
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    // Map underscore back to hyphen for matching
    const hyphenatedName = name.replace(/_/g, '-');
    const skill = skills.find(s => s.name === hyphenatedName || s.name === name);
    if (!skill) {
      throw new Error(`Skill ${name} not found`);
    }

    let promptContent = `# Skill: ${skill.name}\n\n${skill.body}\n`;
    if (skill.referenceContent) {
      promptContent += `\n## Business Context & Reference Information:\n${skill.referenceContent}\n`;
    }
    promptContent += `\n## User Input & Request Details:\n${args.userInput}\n`;

    return {
      content: [
        {
          type: "text",
          text: promptContent
        }
      ]
    };
  });

  // Register prompts list
  server.setRequestHandler(ListPromptsRequestSchema, async () => {
    return {
      prompts: skills.map(skill => ({
        name: skill.name,
        description: skill.description,
        arguments: [
          {
            name: "userInput",
            description: "Your specific business details, request context, or constraints to apply to this skill",
            required: true
          }
        ]
      }))
    };
  });

  // Register prompt getter
  server.setRequestHandler(GetPromptRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const skill = skills.find(s => s.name === name);
    if (!skill) {
      throw new Error(`Prompt ${name} not found`);
    }

    let promptContent = `# Skill: ${skill.name}\n\n${skill.body}\n`;
    if (skill.referenceContent) {
      promptContent += `\n## Business Context & Reference Information:\n${skill.referenceContent}\n`;
    }
    promptContent += `\n## User Input & Request Details:\n${args?.userInput || "Please write your specific request here."}\n`;

    return {
      description: skill.description,
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: promptContent
          }
        }
      ]
    };
  });

  // Start the server using Stdio transport
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Revenue Skills MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main:", error);
  process.exit(1);
});
