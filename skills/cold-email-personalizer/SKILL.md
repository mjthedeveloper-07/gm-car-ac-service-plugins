---
name: cold-email-personalizer
description: Create personalized cold email, LinkedIn DM, WhatsApp, and follow-up sequences for B2B, agencies, local services, creators, and sales teams. Use when the task asks for ICP research prompts, outreach copy, personalization angles, follow-up sequences, CRM notes, or lead generation campaigns.
---

# Cold Email Personalizer

## Core Workflow

1. Define the ICP, trigger event, pain, current workaround, and desired business result.
2. Choose a personalization angle based on observable evidence, not flattery.
3. Write a short first touch with one problem, one proof point, one relevant offer, and one low-friction ask.
4. Build follow-ups that add new value instead of repeating the same pitch.
5. Include CRM notes so a salesperson knows why the prospect was contacted.

For GM Car AC Service tasks, read `references/gm-car-ac-service.md`.

## Personalization Sources

Use only details the sender could reasonably know:

- Company website, role, location, hiring, ads, reviews, inventory, recent launch, job posts, case studies
- For local service partnerships: fleet size, vehicle type, delivery routes, location, seasonality, maintenance pain
- For agencies or SaaS: funnel gaps, ad angle, landing page issue, email capture issue, conversion leak

If research is missing, produce placeholders in brackets and state what to research.

## Sequence Structure

Create:

1. First email: 70 to 120 words, direct, specific, one CTA.
2. Follow-up 1: proof or example.
3. Follow-up 2: useful idea, audit, or quick win.
4. Follow-up 3: objection-aware bump.
5. Breakup: polite close with permission to stop.

For LinkedIn DM, keep each message under 450 characters. For WhatsApp, keep each message conversational and consent-aware.

## Output Format

Return:

- `ICP`
- `Trigger or reason to reach out`
- `Personalization fields`
- `Value proposition`
- `Email sequence`
- `LinkedIn or WhatsApp variant` when useful
- `CRM note`
- `Follow-up timing`
- `Compliance notes`: avoid deceptive claims, fake familiarity, scraped sensitive data, or spammy pressure

## Quality Bar

Prefer relevance over cleverness. Every message should make it clear why this prospect, why now, and why this sender.
