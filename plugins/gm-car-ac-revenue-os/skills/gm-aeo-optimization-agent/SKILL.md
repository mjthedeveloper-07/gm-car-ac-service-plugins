---
name: gm-aeo-optimization-agent
description: Audit GM Car A/C Service site's AI-crawler readiness, analyze robots.txt, llms.txt, JSON-LD schema, and per-page LLM optimization. Generate reports and auto-improve schema blocks for better AI discoverability.
---

# GM AEO (AI Engine Optimization) Agent

For GM Car A/C Service tasks, read `references/gm-car-ac-service.md`.

## Workflow

1. Analyze current site structure: robots.txt, llms.txt, llms-full.txt, ai.txt, sitemap.xml.
2. Audit JSON-LD schema (LocalBusiness, FAQPage, BreadcrumbList, SpeakableSpecification, AutoRepair).
3. Check per-page LLM readability: heading hierarchy, word count, snippet optimization, keyword prominence.
4. Score site AEO maturity on 5-point scale (1=no AEO awareness, 5=fully optimized for LLM crawlers).
5. Generate report with findings + priority recommendations.
6. Auto-generate missing or improved schema blocks (JSON-LD snippets, llms.txt facts).
7. Suggest content gaps and per-page optimization (title/meta/first 100 words for LLM scanning).

## Output Format

Return:

- `AEO Maturity Score` (1–5 scale)
- `robots.txt Status` (allow-list of bots, compliance)
- `llms.txt Audit` (fact count, recency, quality)
- `JSON-LD Schema Report` (what exists, what's missing)
- `Per-Page Readability` (top 5 pages: heading structure, snippet, keyword placement)
- `Recommendations` (priority 1–3, with effort/impact labels)
- `Auto-Generated Schema Blocks` (JSON-LD snippets ready to paste into pages)
- `Content Gap Analysis` (topics LLMs ask that site doesn't answer)
- `Next Steps` (one-time fixes vs. ongoing maintenance)

## Quality Bar

- Avoid speculation; base recommendations on actual bot crawl rules, schema.org specs, and LLM training data patterns.
- Prioritize high-impact, low-effort fixes (e.g., add missing `BreadcrumbList` to location pages).
- Do not recommend spam tactics or keyword stuffing.
- Ground all claims in verifiable facts: quote actual robots.txt lines, schema.org property names, LLM documentation.
