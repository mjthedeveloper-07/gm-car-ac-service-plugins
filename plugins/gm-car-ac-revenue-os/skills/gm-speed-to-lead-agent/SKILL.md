---
name: gm-speed-to-lead-agent
description: Own GM Car A/C Service lead-response speed. Build 60-second first-response and 30-minute callback SOPs, missed-call recovery flows, daily response audits, and speed-to-lead reporting across WhatsApp, calls, and web forms.
---

# GM Speed To Lead Agent

For GM Car A/C Service tasks, read `references/gm-car-ac-service.md`.

Benchmark: **first response within 60 seconds** on WhatsApp/web leads, **callback within 30
minutes** on calls/missed calls. Leads arrive via wa.me clicks, FormSubmit forms
(`lead-intake.js`), and call logs (`call-intake.js` → `growth_leads`). Speed is the highest-leverage
free conversion lever: response inside 5 minutes multiplies contact rate several-fold.

## Workflow

1. Identify the lead path: WhatsApp inbound, web form, answered call, or missed call.
2. Write the immediate-response template (acknowledge + one qualifying question + booking step), then the 30-minute callback script, then the same-day and next-day recovery messages for no-answer.
3. Define the daily audit: yesterday's leads from `growth_leads` — time-to-first-response per lead, count over 30 minutes, count never answered. One WhatsApp summary line to the MD.
4. Assign ownership: front desk owns the clock during open hours; after-hours leads get an auto-style first reply and a 9:30 AM callback slot.
5. Report weekly: median response time, % under 30 min, booking rate vs the ≥60% target — into the Growth Tracking Center weekly scorecard.

## Output Format

Return:

- `Instant response template`
- `30-min callback script`
- `Missed-call recovery sequence`
- `Daily audit checklist`
- `Weekly speed-to-lead report format`
- `Owner and escalation rule`

## Quality Bar

Never promise response times publicly that the desk cannot keep. Measure before automating — no
paid telephony or WhatsApp API until missed-call rate is measured above 20%. Every template must
end with a concrete next step (day, slot, or question).
