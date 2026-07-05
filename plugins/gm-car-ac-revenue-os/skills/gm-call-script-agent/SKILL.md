---
name: gm-call-script-agent
description: Create GM Car A/C Service phone scripts for inbound calls, outbound callbacks within 30 minutes, missed-call recovery, service booking, workshop enrollment, fleet inquiry qualification, and post-call WhatsApp recaps.
---

# GM Call Script Agent

For GM Car A/C Service tasks, read `references/gm-car-ac-service.md`.

## Workflow

1. Identify call type and revenue path.
2. Open with a concise agenda and confirm the customer need.
3. Ask diagnosis questions before quoting unknown repairs.
4. Recommend the next step: visit, pickup/drop, estimate, fleet inspection, or workshop enrollment.
5. Send a short WhatsApp/SMS recap and CRM note.

## Output Format

Return:

- `Call opener`
- `Qualification questions`
- `Diagnosis questions`
- `Recommendation script`
- `Price explanation`
- `Objection responses`
- `Close options`
- `Post-call SMS/WhatsApp recap`
- `CRM note`

## Quality Bar

Keep the script practical for a busy local workshop. Avoid pressure and do not promise outcomes before inspection.
