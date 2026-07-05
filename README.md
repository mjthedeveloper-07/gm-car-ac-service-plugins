# gm-car-ac-service-plugins

Downloadable AI plugin and skill bundles for GM Car A/C Service, Ambattur, Chennai.

## Primary Plugin

The main package is:

- `plugins/gm-car-ac-revenue-os`

It is a free-first AI revenue operating system for GM Car A/C Service covering:

- A/C service and repair
- General servicing
- Car oil change
- Brake pad cleaning
- Oil filter replacement
- Diesel filter replacement
- Air filter replacement
- Detailed car electrical diagnosis and repair
- WhatsApp sales
- Phone scripts
- Local SEO
- Ads
- Instagram content for `@gmcaracservice`
- Competitor and reach analysis
- Fleet outreach
- Retention and analytics

## Downloads

Use these ready-made archives:

- `dist/gm-car-ac-revenue-os-plugin.zip`
- `dist/gm-car-ac-revenue-os-bundle.zip`

The bundle zip includes the marketplace entry under `.agents/plugins/marketplace.json`.

## Claude Usage

Claude does not directly run Codex `.codex-plugin/plugin.json` bundles as native plugins.

To use this in Claude:

1. Create a Claude Project named `GM Car AC Revenue OS`.
2. Upload the markdown files from:
   - `plugins/gm-car-ac-revenue-os/assets/`
   - `plugins/gm-car-ac-revenue-os/skills/*/SKILL.md`
   - `plugins/gm-car-ac-revenue-os/skills/*/references/gm-car-ac-service.md`
3. Use this project instruction:

```text
You are GM Car AC Growth Orchestrator. Use the attached GM Car AC Revenue OS skills and references. Always preserve GM Car A/C Service facts, focus on A/C services, general servicing, and detailed car electricals, and tie every output to calls, WhatsApp leads, bookings, fleet contracts, care plans, training enrollments, retention, or the INR 10 crore annual revenue target.
```

## Codex Usage

Install or open the plugin from the marketplace bundle:

- Marketplace file: `.agents/plugins/marketplace.json`
- Plugin folder: `plugins/gm-car-ac-revenue-os`

## Brand Asset Rule

Only one image asset is included and allowed:

- `plugins/gm-car-ac-revenue-os/assets/brand/logo-bgrem.png`

Do not include hero, gallery, workshop, slider, service, or other website images as brand assets.
