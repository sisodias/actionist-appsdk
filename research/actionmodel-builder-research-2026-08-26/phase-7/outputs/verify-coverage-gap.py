#!/usr/bin/env python3
"""Reproduce the Phase-7 coverage-gap measurements from local JSONL inputs."""

from __future__ import annotations

import json
from collections import Counter, defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUTPUTS = ROOT / "outputs"
RESEARCH_ROOT = ROOT.parent


def read_jsonl(path: Path) -> list[dict]:
    with path.open(encoding="utf-8") as handle:
        return [json.loads(line) for line in handle if line.strip()]


def repo_url(row: dict) -> str | None:
    ref = row.get("repo_ref") or {}
    if isinstance(ref, dict):
        return ref.get("repo_url")
    return None


parent_path = RESEARCH_ROOT / "expansion" / "outputs" / "repo-matrix-observations.jsonl"
wave_paths = sorted(
    RESEARCH_ROOT.glob("expansion/wave-*/outputs/repo-matrix-wave-*.jsonl")
)
parent_rows = read_jsonl(parent_path)
wave_rows = [row for path in wave_paths for row in read_jsonl(path)]
observed_rows = [row for row in parent_rows if row.get("slot_status") == "observed"]
observed_rows.extend(wave_rows)

assert len(parent_rows) == 17_000, len(parent_rows)
assert len(observed_rows) == 17_000, len(observed_rows)
assert len(wave_paths) == 10, len(wave_paths)
assert len(wave_rows) == 16_250, len(wave_rows)

cell_repos: defaultdict[tuple[str, str], set[str]] = defaultdict(set)
pair_dimensions: defaultdict[tuple[str, str], set[str]] = defaultdict(set)
repo_industries: defaultdict[str, set[str]] = defaultdict(set)
for row in observed_rows:
    url = repo_url(row)
    assert url, row.get("slot_id")
    cell = (row["industry_id"], row["dimension_id"])
    pair = (row["industry_id"], url)
    cell_repos[cell].add(url)
    pair_dimensions[pair].add(row["dimension_id"])
    repo_industries[url].add(row["industry_id"])

assert len(cell_repos) == 170, len(cell_repos)
assert {len(urls) for urls in cell_repos.values()} == {100}

complete_pairs = sum(len(dimensions) == 10 for dimensions in pair_dimensions.values())
assert len(pair_dimensions) == 3346, len(pair_dimensions)
assert complete_pairs == 270, complete_pairs
assert sum(len(industries) == 17 for industries in repo_industries.values()) == 171

expansion_rows = read_jsonl(RESEARCH_ROOT / "expansion" / "outputs" / "github-expansion.jsonl")
platform_rows = read_jsonl(
    RESEARCH_ROOT / "phase-2" / "outputs" / "platform-deepdives-register.jsonl"
)
assert len(expansion_rows) == 500
assert len(platform_rows) == 117

by_industry: dict[str, int] = {}
for industry in sorted({row["industry_id"] for row in observed_rows}):
    by_industry[industry] = sum(
        len(dimensions) == 10
        for (candidate_industry, _), dimensions in pair_dimensions.items()
        if candidate_industry == industry
    )

expected_by_industry = {
    "accounting_firms": 14,
    "construction": 15,
    "course_creators": 19,
    "ecommerce": 18,
    "education_training": 17,
    "healthcare_medical_practices": 13,
    "hospitality": 13,
    "insurance_agencies": 14,
    "it_services_msps": 14,
    "law_firms": 16,
    "logistics_freight": 19,
    "marketing_social_media_agencies": 13,
    "mortgage_brokers": 12,
    "property_management": 16,
    "real_estate": 15,
    "recruiting_staffing": 22,
    "saas": 20,
}
assert by_industry == expected_by_industry, by_industry

print(
    "P7_COVERAGE_GAP_AUDIT_PASS",
    f"parent_slots={len(parent_rows)}",
    f"merged_observed={len(observed_rows)}",
    f"cells={len(cell_repos)}",
    "distinct_per_cell=100",
    f"repo_urls={len(repo_industries)}",
    f"industry_repo_pairs={len(pair_dimensions)}",
    f"complete_pairs={complete_pairs}",
    "target_complete_pairs=1700",
    "gap=1430",
    f"platform_records={len(platform_rows)}",
)
