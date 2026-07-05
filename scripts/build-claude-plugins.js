import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Helper to recursively copy directories
function copyDirectoryRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirectoryRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

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
      frontmatter[key] = value.replace(/^['"]|['"]$/g, '');
    }
  });
  return { frontmatter, body };
}

// Function to generate frontmatter string
function stringifyFrontmatter(frontmatter) {
  let str = '---\n';
  for (const [key, value] of Object.entries(frontmatter)) {
    str += `${key}: ${value}\n`;
  }
  str += '---\n';
  return str;
}

async function build() {
  const plugins = ['gm-car-ac-revenue-os', 'revenue-skills-marketplace'];

  for (const plugin of plugins) {
    const pluginPath = path.join(rootDir, 'plugins', plugin);
    if (!fs.existsSync(pluginPath)) continue;

    const sourceSkillsDir = path.join(pluginPath, 'skills');
    const targetAgentsDir = path.join(pluginPath, 'agents');

    // Recreate agents directory
    if (fs.existsSync(targetAgentsDir)) {
      fs.rmSync(targetAgentsDir, { recursive: true, force: true });
    }
    fs.mkdirSync(targetAgentsDir, { recursive: true });

    if (!fs.existsSync(sourceSkillsDir)) continue;

    const skillFolders = fs.readdirSync(sourceSkillsDir);
    for (const folder of skillFolders) {
      const folderPath = path.join(sourceSkillsDir, folder);
      if (!fs.statSync(folderPath).isDirectory()) continue;

      const skillMdPath = path.join(folderPath, 'SKILL.md');
      if (!fs.existsSync(skillMdPath)) continue;

      console.log(`Processing skill for plugin ${plugin}: ${folder}`);

      const content = fs.readFileSync(skillMdPath, 'utf-8');
      const { frontmatter, body } = parseFrontmatter(content);

      // Check for reference files to inline
      let referenceContent = '';
      const refsDir = path.join(folderPath, 'references');
      if (fs.existsSync(refsDir)) {
        const refFiles = fs.readdirSync(refsDir);
        for (const refFile of refFiles) {
          if (refFile.endsWith('.md')) {
            const refPath = path.join(refsDir, refFile);
            referenceContent += `\n\n### Business Context Reference (${refFile})\n\n` + fs.readFileSync(refPath, 'utf-8') + '\n';
          }
        }
      }

      // Compile subagent markdown
      let agentPrompt = body.trim();
      if (referenceContent) {
        agentPrompt += '\n\n' + referenceContent.trim();
      }

      // Prepare subagent configuration
      const agentFrontmatter = {
        name: frontmatter.name || folder,
        description: frontmatter.description || `Specialized agent for ${folder}`
      };

      // Set default models for subagents
      if (plugin === 'gm-car-ac-revenue-os') {
        agentFrontmatter.model = 'sonnet'; // GM specific agents use Sonnet for high precision
      } else {
        agentFrontmatter.model = 'inherit';
      }

      // Build the final markdown content
      const finalContent = stringifyFrontmatter(agentFrontmatter) + '\n' + agentPrompt;

      // Write agent file
      const agentFilePath = path.join(targetAgentsDir, `${folder}.md`);
      fs.writeFileSync(agentFilePath, finalContent, 'utf-8');
      console.log(`- Created subagent: plugins/${plugin}/agents/${folder}.md`);
    }
  }

  console.log('\nBuild completed successfully!');
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
