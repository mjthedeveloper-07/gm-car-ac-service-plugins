# gmcaracservice mcp Server

A Model Context Protocol (MCP) server that packages 22 advanced revenue-generation and local-service operations skills for Claude. Built from the brand context of `gmcaracservice.com` (Chennai car A/C and general service workshop) and elite business growth frameworks.

With this plugin installed, Claude gains direct access to tools for building offers, rewriting landing pages, handling objections, scripting WhatsApp/calls, creating ad creatives, scheduling content calendars, and running local SEO campaigns.

## 🚀 Single-Command Installation in Claude Desktop

You can download, configure, and install this plugin into your Claude Desktop application in a single command. 

Run the following command in your terminal:

```bash
npx -y github:mjthedeveloper-07/gm-car-ac-service-plugins --install
```

### What this does:
1. Downloads the plugin and its dependencies.
2. Locates your Claude Desktop configuration file (`claude_desktop_config.json`).
3. Automatically inserts the `gmcaracservice-mcp` configuration under the `mcpServers` block.
4. Tells Claude to run the MCP server on startup.

*Note: Please restart your Claude Desktop application after running the command for the new tools and prompts to appear.*

---

## 🛠️ Available MCP Tools

Once installed, Claude will have access to the following dynamic tools. You can invoke them in any conversation:

### 📦 Generic Revenue Skills
* `revenue_offer_builder` - Build Hormozi-style high-converting offers with value stacks, guarantees, and risk reversals.
* `landing_page_rewriter` - Diagnose and rewrite landing page sections for CRO and clarity.
* `cold_email_personalizer` - Generate personalized B2B cold emails and outreach variants.
* `sales_objection_handler` - Handle sales objections with discovery scripts and closing frameworks.
* `ad_hook_generator` - Create high-performance ad hooks, video scripts, and UGC briefs.
* `sales_script_agent` - Write scripts for phone, WhatsApp, discovery, and CRM notes.
* `ads_generation_agent` - Create paid search ad campaigns, retargeting briefs, and tests.
* `marketing_campaign_agent` - Plan campaigns and launch calendars.
* `social_media_handler` - Generate organic content calendars, captions, and comments.

### 🚗 GM Car AC Specific Skills
* `gm_car_ac_growth_orchestrator` - Main orchestrator routing requests to specialized GM agents.
* `gm_service_offer_builder` - Build specialized AC service, general service and workshop offers.
* `gm_landing_page_conversion_agent` - Review and rewrite gmcaracservice.com landing page content.
* `gm_ad_creative_agent` - Generate Facebook, Google, and Instagram ads for GM Car AC.
* `gm_whatsapp_sales_agent` - Write interactive WhatsApp chats, quotes, and booking confirmations.
* `gm_call_script_agent` - Standardize phone scripts for incoming calls and workshop enrollments.
* `gm_local_seo_agent` - Optimize content for Chennai local areas (Ambattur, Avadi, Anna Nagar, etc.).
* `gm_fleet_outreach_agent` - Create B2B fleet cooling contract outreach.
* `gm_training_workshop_agent` - Grow the 27-day INR 52,999 hands-on technician course.
* `gm_social_media_agent` - Schedule 30-day Instagram Reels, YouTube Shorts, and GBP posts.
* `gm_retention_agent` - Send post-service review requests and care plan upsells.
* `gm_analytics_agent` - Setup tracking sheets and weekly reporting conventions.
* `gm_competitor_reach_agent` - Analyze competitor positioning and outline reach campaigns.

---

## 📝 Manual Installation (Alternative)

If you prefer to configure Claude Desktop manually, add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "gmcaracservice-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "github:mjthedeveloper-07/gm-car-ac-service-plugins"
      ]
    }
  }
}
```

* File location on macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
* File location on Windows: `%APPDATA%\Claude\claude_desktop_config.json`

---

## 🔌 Claude Code Native Plugin Marketplace

This repository is structured as an official Claude Code plugin marketplace. You can register it and install all compiled skills, custom subagents, and assets in your Claude Code CLI.

### Step 1: Add the Marketplace
Run the following command in Claude Code to add this repository as a plugin source:
```bash
claude plugin marketplace add mjthedeveloper-07/gm-car-ac-service-plugins
```

### Step 2: Install the Plugins
Once registered, install either or both plugins directly:
```bash
# Install the GM Car AC Revenue OS plugin (includes 13 Chennai-focused skills & subagents)
claude plugin install gm-car-ac-revenue-os

# Install the generic Revenue Skills Marketplace plugin (includes 9 generic growth skills & subagents)
claude plugin install revenue-skills-marketplace
```

### What this loads:
*   **Skills**: Run tools directly via namespaces (e.g., `/gm-car-ac-revenue-os:gm-local-seo-agent` or `/revenue-skills-marketplace:revenue-offer-builder`).
*   **Custom Subagents**: Delegate to custom subagents (e.g., `@gm-car-ac-growth-orchestrator` or `@revenue-offer-builder`) by @-mentioning them or asking Claude to run them.

---

## 📁 Repository Structure

* `index.js` - Main MCP Server entry point and installer script.
* `package.json` - Node.js configuration and dependencies.
* `skills/` - Raw markdown definitions of generic revenue growth playbooks.
* `plugins/gm-car-ac-revenue-os/` - Brand Assets, reference guides, and specialized skill workflows for GM Car AC Service.
* `plugins/revenue-skills-marketplace/` - Alternate package formatting matching Codex guidelines.
