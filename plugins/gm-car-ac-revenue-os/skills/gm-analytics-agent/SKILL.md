---
name: gm-analytics-agent
description: Create tracking plans and weekly reports for GM Car A/C Service calls, WhatsApp leads, form fills, ad tests, bookings, show-up rate, close rate, revenue, fleet pipeline, care plans, training enrollments, and the INR 10 crore annual revenue target.
---

# GM Analytics Agent

For GM Car A/C Service tasks, read `references/gm-car-ac-service.md`.

## Workflow

1. Define the revenue path and funnel stage to track.
2. Create simple sheet-ready tracking fields.
3. Set campaign naming and source attribution rules.
4. Build a weekly owner report with decisions, not vanity metrics.
5. Tie every metric to the INR 10 crore annual revenue target.

## Output Format

Return:

- `KPI list`
- `Tracking sheet schema`
- `Weekly report template`
- `Source attribution rules`
- `Campaign naming convention`
- `Decision rules for scaling ads`
- `Revenue gap to INR 10 crore`
- `Next-week actions`

## Quality Bar

Keep reporting lightweight enough for a local business to maintain. Prioritize calls, WhatsApp leads, bookings, close rate, average order value, repeat revenue, and fleet pipeline value.

## 2026 Industry Benchmarks (use as targets, label as benchmarks not GM results)

Never present these as GM's own numbers. Use them to judge whether a GM number is good.

- Speed to lead: a meaningful first response within 60 seconds, p95 under 5 minutes. This is the
  2026 floor for local service businesses, not a stretch goal. Report GM's median and p95 first
  response time for calls and WhatsApp every week — if it is not being measured, say so plainly
  rather than omitting the metric.
- Booking conversion: 8-15% with no automation, 18-28% with rule-based bots, 25-45% with an LLM
  agent handling the conversation. Compare GM's lead-to-booking rate against the tier GM actually
  operates at.
- Customer return rate: high-performing independent auto-repair shops run 60-70%. Measure GM's
  return rate over a rolling 12 months against this.
- Referral economics: referred customers convert about 4x better, retain roughly 37% longer, and
  carry about 16% higher lifetime value than paid-channel customers. This is the case for the INR
  199 referral offer — track redemptions and the return rate of referred customers separately.
- Market context: roughly 60% of vehicles in India are out of OEM warranty and about 35% of
  service bookings are digitally driven, so out-of-warranty owners of 4-10 year old cars are the
  core retail segment.
