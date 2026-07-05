#!/usr/bin/env python3
"""Create lightweight CSV tracking templates for GM Car AC Revenue OS."""

from __future__ import annotations

import csv
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "templates"

FILES = {
    "lead_tracker.csv": [
        "date",
        "source",
        "campaign",
        "customer_name",
        "phone",
        "area",
        "vehicle",
        "service_interest",
        "funnel",
        "status",
        "booking_date",
        "estimated_value_inr",
        "actual_revenue_inr",
        "next_action",
        "owner_notes",
    ],
    "weekly_revenue_report.csv": [
        "week_start",
        "calls",
        "whatsapp_leads",
        "form_fills",
        "bookings",
        "show_ups",
        "closed_jobs",
        "revenue_inr",
        "average_order_value_inr",
        "care_plans_sold",
        "fleet_pipeline_value_inr",
        "workshop_enrollments",
        "decision",
    ],
    "campaign_tests.csv": [
        "campaign",
        "channel",
        "angle",
        "offer",
        "spend_inr",
        "leads",
        "bookings",
        "cost_per_lead_inr",
        "cost_per_booking_inr",
        "revenue_inr",
        "scale_pause_or_iterate",
    ],
    "competitor_tracker.csv": [
        "date_checked",
        "competitor_name",
        "area",
        "distance_from_gm",
        "competitor_type",
        "google_rating",
        "review_count",
        "services_promoted",
        "price_hooks",
        "instagram_handle",
        "posting_frequency",
        "cta_quality",
        "weak_review_themes",
        "gm_counter_positioning",
        "next_action",
    ],
}


def main() -> None:
    OUT.mkdir(exist_ok=True)
    for filename, headers in FILES.items():
        path = OUT / filename
        with path.open("w", newline="") as handle:
            writer = csv.writer(handle)
            writer.writerow(headers)
        print(path)


if __name__ == "__main__":
    main()
