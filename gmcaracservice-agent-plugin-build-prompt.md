# Detailed Build Prompt: GM Car A/C Service Agent, Skill, Plugin, and MCP System

You are a senior Codex plugin architect and AI agent systems builder. Analyze and use the GM Car A/C Service website and existing local workspace to create a complete, free-first agent marketplace/plugin system for GM Car A/C Service.

Primary site: `https://gmcaracservice.com/`

Local workspace root:
`/Users/jagathratchagan/Documents/gmcaracservice company skills`

Important constraint: only mention and use the logo as the brand asset image. Do not use, reference, list, or include hero, gallery, workshop, slider, service, or other website images as brand assets. The only allowed brand image asset is:
`plugins/revenue-skills-marketplace/assets/brand/logo-bgrem.png`

## Site Analysis To Preserve

GM Car A/C Service is a Chennai local-service business focused on car AC repair, AC gas filling, compressor repair, condenser replacement, cooling coil service, general car service, car oil change, brake pad cleaning, oil filter replacement, diesel filter replacement, air filter replacement, all car electrical services, auto electrical diagnostics, bus/commercial vehicle AC repair, and hands-on AC technician training.

Core positioning:
- Chennai's trusted diagnostic-first car AC and auto electrical specialist.
- 10 crore revenue growth target: build every agent, skill, offer, campaign, and reporting workflow toward reaching INR 10 crore in annual revenue through service bookings, fleet contracts, care plans, general service upsells, electrical repair jobs, and training workshop enrollments.
- Location: Ambattur, Chennai.
- Founder and lead technician: Manigandan G.
- Strong buying triggers: Chennai heat, AC not cooling, compressor faults, repeat gas filling, bad smell, electrical issues, fleet downtime, dealer overpricing.
- Primary conversion actions: call, WhatsApp, appointment booking, free callback, free 30-point checkup, training enrollment.

Proof and trust signals:
- 7+ years experience.
- Work booked into the next available slot.
- Free pickup and drop across Chennai.
- Transparent pricing and no hidden charges.
- Approved refrigerants (R134a and R1234yf).

Offers to encode:
- AC gas filling from INR 1,500 for single module, leak check included.
- AC gas filling from INR 2,200 for double module, leak check included.
- 1-year care plan: Essential INR 2,999 (2 visits) or Complete INR 6,499 petrol / INR 7,699 diesel (4 visits incl. general service, 10% parts) or Master INR 9,999 (4 visits, pick-up and drop, 15% parts).
- General car service add-ons: car oil change, brake pad cleaning, oil filter replacement, diesel filter replacement, and air filter replacement.
- Full car electrical services: battery testing, alternator diagnosis, wiring fault repair, AC compressor relay repair, blower motor repair, fuse diagnosis, lighting issues, sensor-related electrical checks, and in-house auto electrical troubleshooting.
- Free 30-point A/C and electrical checkup (30 points, written report, ~15 min) as the lead magnet. Never say "free diagnosis" or "free estimate" — both are banned claims. The free 30-point A/C and electrical checkup IS approved and is the lead magnet.
- Free pickup and drop across Chennai.
- 27-day hands-on technician course for INR 52,999.
- Fleet Cooling Care for taxis, vans, delivery fleets, buses, and commercial vehicles.

Primary contacts:
- Phone and WhatsApp: `+91 8428000085`
- Secondary phone: `+91 8889360888`
- Email: `gmautocool@gmail.com`
- Website: `https://gmcaracservice.com/`
- YouTube: `https://www.youtube.com/@gmcaracservice`
- Instagram: `https://www.instagram.com/gmcaracservice/`
- Facebook: `https://www.facebook.com/gmcaracservice/`
- Google Maps: `https://maps.app.goo.gl/8ffysYmwHSAEcdNn8`

Brand style:
- Use the logo only as the brand asset image.
- Use site colors when needed: dark navy `#0d1f3c`, deep navy `#0a1628`, blue `#2563eb`, service green `#51be78`, WhatsApp green `#25D366`, gold `#fbbf24`, alert red `#DC2626`, white `#ffffff`.
- Typography guidance: Lexend, Source Sans 3, Space Mono.

## Goal

Build a complete GM Car A/C Service AI revenue operating system as a Codex-compatible plugin and skill marketplace. It should include:
- One plugin bundle.
- A main orchestrator agent.
- Specialist sub-agents.
- Production-ready skills.
- Free-first MCP/server integrations.
- References and lightweight scripts where useful.
- Validation instructions.
- Marketplace/plugin metadata.
- Clear default prompts.

Business target:
- Make the top-level revenue goal INR 10 crore annual revenue.
- Every agent must connect its outputs to at least one revenue path: service bookings, higher average order value, care plan sales, fleet contracts, general service upsells, electrical repair jobs, workshop enrollments, retargeting, referrals, or retention.
- Include tracking and decision rules that help the owner understand which channels, offers, services, and agents are moving the business toward the INR 10 crore target.

Do not make a generic chatbot. Build an operational system that can generate leads, improve conversion, create ad campaigns, handle sales conversations, support WhatsApp workflows, produce social content, improve landing pages, organize local SEO content, and support the training workshop funnel.

## Existing Workspace To Inspect First

Inspect these paths before editing:
- `plugins/revenue-skills-marketplace/.codex-plugin/plugin.json`
- `plugins/revenue-skills-marketplace/assets/brand-info.md`
- `plugins/revenue-skills-marketplace/assets/marketplace-brief.md`
- `marketplace-brief.md`
- `skills/revenue-offer-builder/SKILL.md`
- `skills/landing-page-rewriter/SKILL.md`
- `skills/cold-email-personalizer/SKILL.md`
- `skills/sales-objection-handler/SKILL.md`
- `skills/ad-hook-generator/SKILL.md`
- `skills/sales-script-agent/SKILL.md`
- `skills/marketing-campaign-agent/SKILL.md`
- `skills/social-media-handler/SKILL.md`

Treat `sales-script-agent`, `marketing-campaign-agent`, and `social-media-handler` as incomplete if they still contain TODO/template text. Replace placeholders with production instructions.

## Plugin To Create Or Update

Plugin name:
`gm-car-ac-revenue-os`

Alternative if updating existing bundle:
`revenue-skills-marketplace`

Plugin positioning:
“A free-first AI revenue operating system for GM Car A/C Service: offers, ads, landing pages, local SEO, WhatsApp sales, call scripts, follow-up, fleet outreach, and training workshop growth.”

Required plugin structure:
- `.codex-plugin/plugin.json`
- `skills/`
- `assets/brand/logo-bgrem.png`
- `assets/brand-info.md`
- `assets/marketplace-brief.md`
- optional `scripts/`
- optional `.mcp.json` only if configured with actual free/local MCP servers

Plugin manifest rules:
- Use `GM Car AC Service` as developer/publisher.
- Use only the logo path for `composerIcon` and `logo`.
- Do not include screenshots unless the only screenshot/image is the logo. Prefer omitting screenshots.
- Do not include unsupported manifest fields.
- Keep skills path as `./skills/`.
- Validate the plugin after edits.

## Main Agent

Create a main orchestrator agent named:
`gm-car-ac-growth-orchestrator`

Purpose:
Coordinate all GM Car A/C Service revenue workflows. It should decide which specialist skill or sub-agent to use based on the user’s request and produce a finished business artifact, not just advice.

Responsibilities:
- Route requests to the right specialist.
- Preserve GM Car A/C Service facts and proof.
- Ask only for missing information that materially changes the output.
- Keep claims factual and avoid invented proof.
- Prefer call/WhatsApp conversion paths.
- Separate service funnel, fleet funnel, and training workshop funnel.
- Maintain local Chennai context and service-specific buyer intent.

Default prompt:
“Use the GM Car AC Growth Orchestrator to improve leads, sales, ads, landing pages, WhatsApp conversations, local SEO, fleet outreach, or training workshop enrollment for GM Car A/C Service.”

## Specialist Agents And Sub-Agents

Create or complete the following specialist agents as skills. Each skill must have:
- Valid `SKILL.md` frontmatter with only `name` and `description`.
- Clear trigger description in frontmatter.
- A concise workflow.
- Output format.
- Quality bar.
- `agents/openai.yaml` metadata.
- A reference to `references/gm-car-ac-service.md` when GM-specific details are needed.

### 1. `gm-service-offer-builder`

Build high-converting service offers for AC gas filling, diagnostic-first repair, compressor repair, general car service, car oil change, brake pad cleaning, oil filter replacement, diesel filter replacement, air filter replacement, all car electrical services, 1-year care plan, fleet cooling care, and workshop training.

Outputs:
- Offer name.
- One-line promise.
- Best-fit audience.
- Core deliverables.
- Pricing frame.
- Risk reversal.
- Proof to show.
- CTA.
- WhatsApp variant.
- Landing page variant.
- Ad variant.

### 2. `gm-landing-page-conversion-agent`

Diagnose and rewrite landing pages for GM Car A/C Service. Focus on clarity, CTA strength, pricing, trust proof, local SEO, FAQ objections, and lead form friction.

Outputs:
- Conversion diagnosis.
- Rewritten hero.
- Section-by-section copy.
- CTA variants.
- FAQ expansion.
- Local SEO improvements.
- Form field recommendations.
- A/B tests.

### 3. `gm-ad-creative-agent`

Create Meta, Google, YouTube Shorts, Instagram Reels, and local awareness ad creative.

Campaign types:
- Summer AC rescue.
- Gas filling with leak check.
- Compressor diagnosis.
- General service: oil change, brake pad cleaning, oil filter, diesel filter, and air filter replacement.
- Full car electrical service and auto electrical diagnostics.
- Free pickup/drop.
- Fleet cooling care.
- 3-day workshop enrollment.
- Auto electrical diagnostics.

Outputs:
- Campaign goal.
- Audience.
- 15 hooks.
- 5 video scripts.
- 5 static ad variants.
- Google search ad groups.
- UGC brief.
- Do-not-say list.
- Test plan.

### 4. `gm-whatsapp-sales-agent`

Write WhatsApp sales flows, estimate flows, callback flows, missed-call follow-up, appointment booking, and objection handling.

Outputs:
- Intake questions.
- First reply templates.
- Quote/estimate flow.
- Pickup/drop scheduling flow.
- Objection responses.
- Follow-up sequence.
- Booking confirmation.
- No-show recovery.
- Consent and privacy notes.

### 5. `gm-call-script-agent`

Create phone scripts for inbound service calls, outbound callback within 30 minutes, missed-call recovery, workshop enrollment, and fleet inquiry qualification.

Outputs:
- Call opener.
- Qualification questions.
- Diagnosis questions.
- Recommendation script.
- Price explanation.
- Objection responses.
- Close options.
- Post-call SMS/WhatsApp recap.
- CRM note.

### 6. `gm-local-seo-agent`

Create local SEO pages, Google Business Profile post ideas, FAQ content, schema suggestions, service-area pages, and Chennai neighborhood content.

Targets:
- Ambattur.
- Avadi.
- Anna Nagar.
- Padi.
- Mogappair.
- Thirumangalam.
- Kolathur.
- Villivakkam.
- Korattur.
- Chennai-wide car AC service terms.

Outputs:
- Keyword clusters.
- Page outline.
- SEO title and meta description.
- FAQ.
- Internal link suggestions.
- GBP post.
- Review response templates.
- Schema recommendations.

### 7. `gm-fleet-outreach-agent`

Create B2B outreach for taxis, delivery fleets, school buses, vans, tourist coaches, used-car dealers, garages, and logistics businesses.

Outputs:
- ICP.
- Trigger.
- Personalization fields.
- Email sequence.
- WhatsApp variant.
- Phone opener.
- Fleet offer.
- Proposal outline.
- Follow-up plan.
- CRM note.

### 8. `gm-training-workshop-agent`

Build growth assets for the 27-day INR 52,999 hands-on technician course.

Outputs:
- Workshop offer.
- Landing page copy.
- WhatsApp enrollment flow.
- Instagram/Reels content.
- Student objections.
- Batch scarcity messaging.
- Certificate positioning.
- Follow-up sequence.

### 9. `gm-social-media-agent`

Create organic content calendars and posts for Instagram, YouTube Shorts, Facebook, and Google Business Profile.

Outputs:
- 30-day content calendar.
- Reel scripts.
- Carousel copy.
- YouTube Shorts scripts.
- GBP posts.
- Caption variants.
- Hashtags.
- Comment reply templates.

### 10. `gm-retention-agent`

Create post-service retention, care plan upsell, review request, reminder, referral, and reactivation campaigns.

Outputs:
- Post-service message.
- Review request.
- 30/90/180-day follow-up.
- Care plan upsell.
- Referral ask.
- Dormant customer reactivation.
- CRM tags.

### 11. `gm-analytics-agent`

Create simple tracking plans and weekly reporting for calls, WhatsApp leads, form fills, ad tests, bookings, show-up rate, close rate, and revenue.

Outputs:
- KPI list.
- Tracking sheet schema.
- Weekly report template.
- Source attribution rules.
- Campaign naming convention.
- Decision rules for scaling ads.

## Free-First MCP And Tooling Plan

Use only free, local, open-source, or free-tier tools unless the user explicitly provides a paid account/API key.

Recommended MCP/server layer:
- Filesystem MCP: read/write local plugin, skill, reference, and asset files.
- Git MCP or local git CLI: inspect diffs, branch, commit, and package changes.
- Browser/fetch MCP or Playwright MCP: inspect `gmcaracservice.com`, test landing pages, and capture structured page facts.
- SQLite MCP: maintain a local lightweight lead/content/campaign database if needed.
- Google Drive/Sheets MCP, free account optional: export lead trackers, campaign calendars, and weekly reports.
- Gmail MCP, free account optional: draft outreach and follow-up emails only with explicit user approval.
- GitHub MCP, free account optional: store plugin source, issues, and releases.
- Supabase MCP, free tier optional: only if the user wants hosted lead/campaign storage.
- Vercel MCP, free tier optional: only if the user wants a hosted landing page preview.
- Notion MCP, free account optional: only if the user wants a lightweight content calendar or CRM workspace.

Do not require paid services for core functionality. Do not send emails, publish social posts, modify live websites, or message customers without explicit user approval.

## References To Include

Create or update:
`references/gm-car-ac-service.md`

It must include:
- Business snapshot.
- Core services.
- General services: car oil change, brake pad cleaning, oil filter replacement, diesel filter replacement, air filter replacement.
- All car electrical services and auto electrical diagnostics.
- INR 10 crore annual revenue target and the main revenue paths.
- Offers.
- Proof.
- Contacts.
- Buyer segments.
- Common objections.
- Recommended CTAs.
- Local SEO areas.
- Claims that are allowed.
- Claims that must be avoided unless verified.

Every GM-specific skill should say:
“For GM Car A/C Service tasks, read `references/gm-car-ac-service.md`.”

## Skill Quality Rules

Each skill must:
- Be usable by another Codex instance without extra explanation.
- Avoid generic marketing filler.
- Use specific Chennai/local-service context.
- Preserve real business facts.
- Ask only necessary questions.
- Produce finished outputs, not vague strategy.
- Include direct WhatsApp/call CTA options where relevant.
- Keep service, fleet, and training workshop funnels distinct.
- Include compliance notes for outreach, privacy, and claims where relevant.

Do not:
- Invent reviews, testimonials, certifications, warranties, or guarantees beyond the source.
- Say “best” unless grounded as a positioning claim or existing site claim.
- Use fake scarcity.
- Use manipulative pressure.
- Mention any brand image asset other than the logo.

## Suggested Marketplace Categories

Use these categories internally or in metadata where useful:
- Offers.
- Leads.
- Ads.
- Landing Pages.
- WhatsApp Sales.
- Phone Sales.
- Cold Outreach.
- Local SEO.
- Retention.
- Analytics.
- Training Funnel.

## Validation Requirements

After creating or editing skills:
- Run the skill validation script if available.
- Check every `SKILL.md` for valid YAML frontmatter.
- Remove all TODO placeholders.
- Check that every `agents/openai.yaml` matches the skill.
- Confirm no non-logo image is referenced as a brand asset.

After creating or editing the plugin:
- Validate `.codex-plugin/plugin.json`.
- Confirm `composerIcon` and `logo` point to the logo only.
- Remove screenshots or set them only if the logo is acceptable as the sole image.
- Confirm the plugin references real skill folders.
- Build a zip only after validation passes.

## Final Deliverables

Return:
- Summary of plugin created or updated.
- List of agents and sub-agents created.
- List of skills created or completed.
- MCP/free-tooling plan implemented or recommended.
- Files changed.
- Validation commands run and results.
- Any remaining manual steps.

The final system should feel like a practical revenue control center for GM Car A/C Service, not a generic AI assistant bundle.
