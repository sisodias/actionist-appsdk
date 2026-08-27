#!/usr/bin/env python3
"""Structural and evidence-boundary gate for Phase 9 Wave 3."""

from __future__ import annotations

import json
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parent
STATE_PATH = ROOT / "phase-9-state.json"
DISPATCH_PATH = ROOT / "wave-3-dispatch-receipt.json"

SPECS = {
    "P9-L07-PAIR-DIMENSION-DEPTH": (
        ROOT / "wave-3/lanes/07-pair-dimension-depth/outputs",
        {"pair-dimension-evidence.jsonl", "source-receipts.jsonl", "pair-dimension-depth-report.md", "lane-state.json"},
    ),
    "P9-L08-COMPETITOR-DIRECT-EVIDENCE": (
        ROOT / "wave-3/lanes/08-competitor-direct-evidence/outputs",
        {"competitor-direct-evidence.jsonl", "source-receipts.jsonl", "competitor-direct-evidence-report.md", "lane-state.json"},
    ),
    "P9-L09-LOCAL-STAGE2-STAGE3": (
        ROOT / "wave-3/lanes/09-local-stage2-stage3/outputs",
        {"shape-receipts.jsonl", "dependency-closure-receipts.jsonl", "source-receipts.jsonl", "unresolved-depth-ledger.jsonl", "local-stage2-stage3-report.md", "lane-state.json"},
    ),
}


def json_obj(path: Path) -> dict:
    value = json.loads(path.read_text(encoding="utf-8"))
    assert isinstance(value, dict), path
    return value


def jsonl(path: Path) -> list[dict]:
    rows = []
    for number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        if not line.strip():
            continue
        row = json.loads(line)
        assert isinstance(row, dict), f"{path}:{number}"
        rows.append(row)
    return rows


def canonical_boundary(state: dict, lane_id: str) -> None:
    assert state["parent_goal_status"] == "active", lane_id
    assert state["research_only"] is True, lane_id
    assert state["implementation_authorized"] is False, lane_id
    assert state["execution_status"] == "UNEXECUTED", lane_id
    assert state["admission_status"] == "NOT_ADMITTED", lane_id
    assert state["admitted_blocks"] == 0, lane_id
    assert state["promotion_allowed"] is False, lane_id


def verify_l07(output: Path) -> str:
    rows = jsonl(output / "pair-dimension-evidence.jsonl")
    assert len(rows) == 1660
    pairs = []
    pair_ids = set()
    dimensions = set()
    for row in rows:
        pair = row.get("pair_id") or row.get("target_pair_id")
        dimension = row.get("dimension") or row.get("dimension_id")
        assert pair and dimension
        pairs.append((pair, dimension))
        pair_ids.add(pair)
        dimensions.add(dimension)
        url = row.get("canonical_url") or (row.get("repository") or {}).get("url")
        revision = row.get("immutable_revision") or {}
        sha = row.get("commit_sha") or (revision if isinstance(revision, str) else revision.get("sha"))
        assert isinstance(url, str) and url.startswith("https://github.com/")
        assert isinstance(sha, str) and len(sha) == 40
    assert len(set(pairs)) == 1660
    assert len(pair_ids) == 166 and len(dimensions) == 10
    statuses = Counter(row.get("evidence_class") or row.get("disposition") for row in rows)
    return f"L07 cells=1660 pairs=166 dimensions=10 classes={dict(statuses)}"


def verify_l08(output: Path) -> str:
    rows = jsonl(output / "competitor-direct-evidence.jsonl")
    assert len(rows) == 4320
    pairs = []
    for row in rows:
        surface = row.get("surface_ref") or row.get("surface_id")
        feature = row.get("canonical_feature_id") or row.get("feature_id")
        assert surface and feature
        pairs.append((surface, feature))
        if row.get("disposition") == "direct":
            claim = row.get("direct_claim") or {}
            claim_object = claim if isinstance(claim, dict) else {}
            assert row.get("source_url") or claim_object.get("source_url")
            assert row.get("evidence_date") or claim_object.get("evidence_date")
            assert row.get("claim") or row.get("claim_text") or (isinstance(claim, str) and claim) or claim_object.get("claim")
    assert len(set(pairs)) == 4320
    surfaces = {surface for surface, _ in pairs}
    assert surfaces == {f"PS-{rank:03d}" for rank in range(31, 61)}
    assert len({feature for _, feature in pairs}) == 144
    dispositions = Counter(row.get("disposition") for row in rows)
    return f"L08 cells=4320 surfaces=PS031-060 dispositions={dict(dispositions)}"


def verify_l09(output: Path) -> str:
    shapes = jsonl(output / "shape-receipts.jsonl")
    dependencies = jsonl(output / "dependency-closure-receipts.jsonl")
    gaps = jsonl(output / "unresolved-depth-ledger.jsonl")
    assert len(shapes) == 76 and len(dependencies) == 76
    shape_ids = [row.get("candidate_key") or row.get("candidate_id") for row in shapes]
    dependency_ids = [row.get("candidate_key") or row.get("candidate_id") for row in dependencies]
    assert None not in shape_ids and None not in dependency_ids
    assert len(set(shape_ids)) == 76 and set(shape_ids) == set(dependency_ids)
    allowed = {"intact_service", "intact_fork", "extracted_slice", "generated_from_pattern", "reference_only", "unknown"}
    for row in shapes:
        classification = row.get("packaging_mode") or row.get("shape") or row.get("classification") or row.get("source_shape")
        assert classification in allowed
    complete_closure = sum(bool(row.get("closure_complete") or row.get("dependency_closure_complete")) for row in dependencies)
    return f"L09 shapes=76 dependencies=76 complete_closure={complete_closure} gaps={len(gaps)}"


def main() -> None:
    state = json_obj(STATE_PATH)
    dispatch = json_obj(DISPATCH_PATH)
    assert state["parent_goal_status"] == "active"
    assert state["promotion_allowed"] is False
    assert dispatch["role"] == "gpt-5.6-luna"
    assert len(dispatch["agent_receipts"]) == 3
    wave = state["wave_3_lanes"]
    assert set(wave) == set(SPECS)
    checks = {
        "P9-L07-PAIR-DIMENSION-DEPTH": verify_l07,
        "P9-L08-COMPETITOR-DIRECT-EVIDENCE": verify_l08,
        "P9-L09-LOCAL-STAGE2-STAGE3": verify_l09,
    }
    completed = 0
    details = []
    for lane_id, (output, required) in SPECS.items():
        status = wave[lane_id]["status"]
        assert status in {"working", "complete", "complete_verified", "blocked"}
        if status not in {"complete", "complete_verified"}:
            continue
        present = {path.name for path in output.iterdir() if path.is_file()}
        assert not (required - present), f"{lane_id} missing {sorted(required-present)}"
        canonical_boundary(json_obj(output / "lane-state.json"), lane_id)
        details.append(checks[lane_id](output))
        completed += 1
    if completed == 3:
        assert state["status"] in {"wave_3_complete_unpromoted", "wave_6_dispatching", "wave_6_active", "wave_6_complete_unpromoted", "research_complete_unpromoted"}
        print("PHASE9_WAVE3_VERIFIED_PASS " + " | ".join(details))
    else:
        assert state["status"] == "wave_3_active"
        print(f"PHASE9_WAVE3_ACTIVE_PASS lanes_complete={completed}/3")


if __name__ == "__main__":
    main()
