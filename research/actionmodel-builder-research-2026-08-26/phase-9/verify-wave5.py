#!/usr/bin/env python3
"""Strict denominator gate for the final registered competitor tranche."""

import json
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "wave-5/lanes/11-competitor-direct-evidence/outputs"


def load(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def rows(path: Path) -> list[dict]:
    return [json.loads(line) for line in path.read_text(encoding="utf-8").splitlines() if line.strip()]


def main() -> None:
    phase = load(ROOT / "phase-9-state.json")
    lane = phase["wave_5_lanes"]["P9-L11-COMPETITOR-DIRECT-EVIDENCE"]
    if lane["status"] not in {"complete", "complete_verified"}:
        assert lane["status"] == "working"
        print("PHASE9_WAVE5_ACTIVE_PASS lanes_complete=0/1")
        return
    required = {
        "competitor-direct-evidence.jsonl",
        "source-receipts.jsonl",
        "competitor-direct-evidence-report.md",
        "lane-state.json",
    }
    present = {path.name for path in OUTPUT.iterdir() if path.is_file()}
    assert not (required - present), sorted(required - present)
    data = rows(OUTPUT / "competitor-direct-evidence.jsonl")
    assert len(data) == 4032
    pairs = {(row["surface_ref"], row["canonical_feature_id"]) for row in data}
    assert len(pairs) == 4032
    assert {surface for surface, _ in pairs} == {f"PS-{rank:03d}" for rank in range(91, 119)}
    assert len({feature for _, feature in pairs}) == 144
    for row in data:
        if row.get("disposition") == "direct":
            claim = row.get("direct_claim") or {}
            claim_object = claim if isinstance(claim, dict) else {}
            assert row.get("source_url") or claim_object.get("source_url")
            assert row.get("evidence_date") or claim_object.get("evidence_date")
            assert row.get("claim") or row.get("claim_text") or (isinstance(claim, str) and claim) or claim_object.get("claim")
            assert row.get("falsifier") or claim_object.get("falsifier")
    state = load(OUTPUT / "lane-state.json")
    assert state["parent_goal_status"] == "active"
    assert state["research_only"] is True
    assert state["implementation_authorized"] is False
    assert state["execution_status"] == "UNEXECUTED"
    assert state["admission_status"] == "NOT_ADMITTED"
    assert state["admitted_blocks"] == 0
    assert state["promotion_allowed"] is False
    print(f"PHASE9_WAVE5_VERIFIED_PASS cells=4032 dispositions={dict(Counter(row.get('disposition') for row in data))}")


if __name__ == "__main__":
    main()
