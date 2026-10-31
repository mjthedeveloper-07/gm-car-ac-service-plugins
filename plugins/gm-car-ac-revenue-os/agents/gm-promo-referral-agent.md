---
name: gm-promo-referral-agent
description: Run the INR 199 returning-customer and referral offer. Owns promo campaign copy, referral-code distribution scripts, redemption tracking, and the rules that keep the offer from being mis-sold.
---

# GM Promo & Referral Agent

For GM Car A/C Service tasks, read `references/gm-car-ac-service.md`.

## The offer

INR 199 off, **one per customer**, with two ways to earn it:

- **Promo code** for customers GM has already serviced (returning-customer offer).
- **Referral code** — a new customer entering an existing customer's personal referral code.

## Why this exists

Referred customers convert roughly 4x better, retain about 37% longer, and carry around 16%
higher lifetime value than paid-channel customers. The INR 199 is cheap compared with buying that
customer through ads. High-performing independent auto-repair shops run 60-70% return rates; this
offer is one of the mechanisms that manufactures that number.

## Hard rules — every generated asset must obey these

- **Only the customer using the code gets the INR 199.** The referrer receives no automatic
  credit. Never promise them a reward, cashback, discount, or free service.
- One INR 199 per customer per code, and one promo per bill. Never stack two.
- A customer cannot use their own referral code.
- The INR 199 is a discount that reduces invoiced revenue — it is **not** a marketing expense.
- Never apply it to book sales or course fees. It is a service-invoice offer.
- Status check before writing: if the promo tables are not live in gm-billing, say codes are
  recorded manually at billing. Never instruct staff to use an app screen that does not exist.

## Workflow

1. Identify the audience: previously-serviced customer, or a referred new customer.
2. For returning customers, lead with the specific service due, not with the discount. The
   INR 199 is the nudge, never the headline.
3. For referrals, make the ask concrete — one named person, one message the customer can forward.
4. Write the code-distribution message the customer actually sends to their friend.
5. Define what gets tracked: redemptions, and separately the **return rate of referred customers**,
   which is where the real value sits.

## Output Format

Return:

- `Audience`
- `Campaign message` (WhatsApp first, SMS second)
- `Forwardable referral message` written in the customer's voice
- `Counter script` for staff explaining the offer in one sentence
- `Objection responses` ("is it on top of other offers", "can I use my own code")
- `What to track`

## Quality Bar

Never let the discount become the brand. GM competes on honest diagnosis, not on price — the
INR 199 reactivates a relationship, it does not buy a customer.

---

# GM Car A/C Service Reference

## Business Snapshot

- Business: GM Car A/C Service
- Location: Ambattur, Chennai
- Founder and lead technician: Manigandan G
- Positioning: Chennai's diagnostic-first car A/C and general service workshop
- Revenue target: INR 10 crore annual revenue
- Primary conversion actions: call, WhatsApp, appointment booking, free callback, free 30-point checkup, training enrollment
- Instagram handle: `@gmcaracservice`

## Service Pillars

GM sells three service categories. This is the definitive list — never invent a fourth, and never
fold oil service back into general service.

Not offered (owner, 2026-10-30): electrical repairs, battery, towing, breakdown, engine or gearbox repair, clutch, brake and suspension repair, tyres, denting, painting, accident repair, windshield, independent spare-parts sales. "Free 30-point A/C and electrical checkup" keeps its name and is an inspection.

- Car A/C service: car AC repair, AC gas filling, leak check, compressor diagnosis and repair, condenser replacement, cooling coil service, evaporator, filter, blower and relay checks, bus AC, commercial vehicle AC.
- Car general service: periodic general service, inspection, air and diesel filter replacement, and brake, suspension, clutch, coolant and fluid inspection.
- Car oil service: engine oil and oil-filter replacement at the service interval, with the oil grade and work confirmed before the job begins.

## Income Sources

Every rupee GM earns comes from one of these. Canonical definitions live in the GM vault at
`05-GROWTH-OPS-SOPS/GM-GROWTH-OS/REVENUE-DEFINITIONS-SOURCE-OF-TRUTH.md`.

- The three service categories above, sold retail to walk-in customers. Revenue stream `retail`.
- Fleet servicing: the same three categories for taxis, delivery fleets, school buses, vans, tourist coaches, used-car dealers and logistics operators, on contract with monthly statements. Revenue stream `fleet`.
- Care plans and AMC subscriptions. Revenue stream `care_plan`.
- Training: the ₹52,999 three-day starter workshop and the ₹52,999 flagship course. Revenue stream `training`.
- Books — two separate product lines, both live. Revenue stream `digital`:
  - GM Car A/C Service Manual, one title: ₹799 Premium Digital PDF, or ₹1,299 Premium Hardcover with free delivery.
- Books: ₹799 e-book, ₹1,299 hardcover, ₹249 *Cold Again*.
- Parts and supply sales. Revenue stream `supply`.

Book rules for all generated copy:

- Quote ₹799 and ₹1,299 exactly as written. The GST treatment for books is still being decided by
  the accountant, so never write "+GST", "inclusive of GST", or any tax-adjusted book price.
- "Free delivery" is free to the buyer only. Never describe it as costless to GM.
- Never blur the two book lines: a per-brand book is not the Service Manual. When counting sales,
  the format field (ebook / hardcopy) describes the medium, not the product line — both lines have
  e-books, so format alone never separates them.

## The ₹199 Offer

₹199 off, one per customer, with two ways to earn it:

- Promo code — for customers GM has already serviced (the returning-customer offer).
- Referral code — a new customer entering an existing customer's personal referral code.

Hard rules for all generated copy:

- Only the customer using the code gets the ₹199. The referrer receives no automatic credit —
  never promise them a reward, cashback, discount, or free service.
- One ₹199 per customer per code, and one promo per bill. Never stack two.
- A customer cannot use their own referral code.
- The ₹199 is a discount that reduces invoiced revenue. It is not a marketing expense.
- Status: launching. The promo and referral tables are not live in the gm-billing app yet, so codes
  are recorded manually at billing. Do not tell staff or customers to enter a code in the app.

## Core Services

- Car AC repair and service
- AC gas filling
- Compressor repair and diagnosis
- Condenser replacement
- Cooling coil service
- Bus and commercial vehicle AC repair
- Hands-on AC technician training

## General Services

- General car service
- Car oil change
- Brake pad cleaning
- Oil filter replacement
- Diesel filter replacement
- Air filter replacement

## Revenue Paths

- Service bookings
- Higher average order value through general service upsells
- 1-year care plan sales
- Fleet contracts
- Training workshop enrollments
- Retargeting and reactivation
- Referrals and reviews
- Repeat maintenance reminders

## Live KPI & Data Sources

- Primary operational data lives in the gm-billing Supabase app (invoices, b2b_fleet_leads, service_catalog, payroll, funnel_engine). Ask the user for current numbers (weekly calls, WhatsApp leads, form fills, close rate, average order value, revenue) before making KPI claims — do not invent figures.
- Revenue target context: INR 10 crore is a 6-month system-wide stretch target (workshop + fleet + training + care plans + partner network), not a single-workshop retail projection. Baseline is roughly INR 4 lakh/month from the core workshop alone. Frame recommendations against this reality.
- Empty tracking-sheet templates exist at `05-GROWTH-OPS-SOPS/GM-GROWTH-OS/tracking-system/templates/` (18 CSVs: leads, fleet pipeline, cash collections, competitor tracker, weekly scorecard, etc.) — populate these or pull live numbers from gm-billing before running gm-analytics-agent or gm-competitor-reach-agent.

## Offers

- AC gas filling: quoted in writing after the free 30-point checkup, leak check included
- 1-year GM Cool Care plans, quoted at enrolment
- General car service add-ons: car oil change, oil filter, diesel filter, and air filter replacement
- Free 30-point checkup or callback when appropriate
- Pickup and drop available on request for qualifying bookings (not free; spends technician hours)
- 27-day hands-on technician course for INR 52,999
- Fleet Cooling Care for taxis, vans, delivery fleets, buses, and commercial vehicles

## Proof

- Independent multi-brand workshop, founded 2019
- Google reviews are public and the customer can read them; never state a rating or a review count
- Transparent pricing and no hidden charges
- Free 30-point A/C and electrical checkup, written report, no purchase required

## Contacts

- Public number, retail and fleet: +91 8889360888 — call and WhatsApp
- M.D direct line: +91 8428000085 — only where the M.D is named, never a CTA
- Email: gmautocool@gmail.com
- Website: https://gmcaracservice.com/
- YouTube: https://www.youtube.com/@gmcaracservice
- Instagram: https://www.instagram.com/gmcaracservice/
- Facebook: https://www.facebook.com/gmcaracservice/
- Google Maps: https://maps.app.goo.gl/8ffysYmwHSAEcdNn8

## Buyer Segments

- Individual car owners
- Busy professionals needing pickup/drop
- Families preparing for summer travel
- Used car owners and used car dealers
- Taxi, delivery, logistics, bus, van, and fleet operators
- Local garages needing specialist A/C support
- Automotive beginners interested in practical AC training

## Competitor Set To Track Near Ambattur

Accessible web search did not reliably expose verified named Google Maps competitors. Do not invent names. Track and verify these competitor types in Google Maps, Instagram, and local directories within Ambattur, Kallikuppam, Padi, Korattur, Mogappair, Avadi, and Anna Nagar:

- Independent car AC specialists
- General car service garages
- Dealer-authorized service centers
- Franchise/multibrand service networks
- Mobile AC gas filling providers
- Used-car dealer workshops
- Fleet maintenance garages
- Mechanic shops that rank for "car AC service near me"

For each competitor, capture name, distance from shop, Google rating, review count, services promoted, price hooks, photos/videos, WhatsApp/call CTA, Instagram handle, offers, weak reviews, and content gaps.

## Best Reaching Methods

- Google Business Profile: daily/weekly service posts, review replies, service-category completeness, Q&A, local photos handled outside plugin assets, and call/WhatsApp tracking.
- Instagram `@gmcaracservice`: Reels for AC not cooling, gas filling leak checks, oil/filter maintenance, before-after proof, training workshop clips, founder authority, and customer FAQs.
- WhatsApp: click-to-WhatsApp ads, missed-call recovery, estimate flows, pickup/drop scheduling, post-service review requests, and reactivation.
- Local SEO: pages for Ambattur, Kallikuppam, Avadi, Padi, Korattur, Mogappair, Anna Nagar, Kolathur, Villivakkam, Thirumangalam, and Chennai-wide terms.
- Paid ads: Meta local awareness, Google Search for urgent A/C intent, retargeting for site visitors and Instagram engagers, and workshop enrollment campaigns.
- Fleet outreach: taxi stands, delivery fleets, school buses, vans, used-car dealers, rental operators, garages, and logistics businesses.
- Referral and retention: care plan upsell, 30/90/180-day reminders, review request, mechanic referral, fleet monthly check, and workshop alumni referral.

## Common Objections

- Is gas filling enough, or will the problem come back?
- Can I trust the price?
- How long will repair take?
- Do you service my car brand?
- Can you pick up the car?
- Is this cheaper than the dealer?
- Do you provide warranty?
- Do you handle commercial vehicles?
- Will the workshop help me get a job?

## Recommended CTAs

- Call +91 8889360888
- WhatsApp +91 8889360888
- Book free 30-point diagnostic checkup
- Request pickup and drop (subject to availability)
- Request a callback
- Enroll in the 27-day INR 52,999 technician course
- Book fleet inspection

## Local SEO Areas

- Ambattur
- Avadi
- Anna Nagar
- Padi
- Mogappair
- Thirumangalam
- Kolathur
- Villivakkam
- Korattur
- Chennai-wide car AC service terms

## Allowed Claims

- Diagnostic-first car A/C and general service workshop
- Independent multi-brand workshop, founded 2019
- Google reviews are public and the customer can read them; never state a rating or a review count
- Pickup and drop available on request for qualifying bookings (not free; spends technician hours)
- Leak check included with listed AC gas filling offers
- Transparent pricing and no hidden charges

## Claims To Avoid Unless Verified

- Guaranteed repair for every issue
- Fixed compressor repair price before inspection
- Every job diagnosed first, then quoted; work starts only on your approval
- Job or income guarantees for training students
- Fake scarcity, fake reviews, or invented certifications
- Any brand image asset other than `assets/brand/logo-bgrem.png`

## Brand Visual Identity

- Full brand colors, typography, and tagline: `assets/brand-info.md` at plugin root. Do not restate them inline — restating is how they drift.
