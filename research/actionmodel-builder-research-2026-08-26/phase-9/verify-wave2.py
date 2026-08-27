#!/usr/bin/env python3
"""Independent structural gate for Phase 9 Wave 2 strict-evidence backfill."""

from __future__ import annotations

import json
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parent
STATE_PATH = ROOT / "phase-9-state.json"
DISPATCH_PATH = ROOT / "wave-2-dispatch-receipt.json"

LANES = {
    "P9-L04-TARGET-IDENTITY-BACKFILL": {
        "dir": ROOT / "wave-2/lanes/04-target-identity-backfill/outputs",
        "files": {
            "target-identity-assignments.jsonl",
            "identity-edges.jsonl",
            "source-receipts.jsonl",
            "target-identity-backfill.md",
            "lane-state.json",
        },
    },
    "P9-L05-COMPETITOR-DIRECT-EVIDENCE": {
        "dir": ROOT / "wave-2/lanes/05-competitor-direct-evidence/outputs",
        "files": {
            "competitor-direct-evidence.jsonl",
            "source-receipts.jsonl",
            "competitor-direct-evidence-report.md",
            "lane-state.json",
        },
    },
    "P9-L06-LOCAL-STAGE0-IDENTITY": {
        "dir": ROOT / "wave-2/lanes/06-local-stage0-identity/outputs",
        "files": {
            "stage0-identity-receipts.jsonl",
            "input-overlap-ledger.jsonl",
            "unresolved-identity-ledger.jsonl",
            "local-stage0-identity-report.md",
            "lane-state.json",
        },
    },
}


def load_json(path: Path) -> dict:
    value = json.loads(path.read_text(encoding="utf-8"))
    assert isinstance(value, dict), path
    return value


def load_jsonl(path: Path) -> list[dict]:
    rows = []
    for line_number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        if not line.strip():
            continue
        row = json.loads(line)
        assert isinstance(row, dict), f"{path}:{line_number}"
        rows.append(row)
    return rows


def boundary(state: dict, lane_id: str) -> None:
    assert state["parent_goal_status"] == "active", lane_id
    assert state["research_only"] is True, lane_id
    assert state["implementation_authorized"] is False, lane_id
    assert state["execution_status"] == "UNEXECUTED", lane_id
    assert state["admission_status"] == "NOT_ADMITTED", lane_id
    assert state["admitted_blocks"] == 0, lane_id
    assert state["promotion_allowed"] is False, lane_id


def verify_l04(output: Path) -> str:
    rows = load_jsonl(output / "target-identity-assignments.jsonl")
    assert len(rows) == 170
    keys = [row.get("target_pair_id") or row.get("pair_id") or row.get("target_id") for row in rows]
    assert None not in keys and len(set(keys)) == 170
    industries = [row.get("industry_id") or (row.get("industry") or {}).get("industry_id") or (row.get("industry") or {}).get("id") for row in rows]
    assert None not in industries
    counts = Counter(industries)
    assert len(counts) == 17 and set(counts.values()) == {10}
    resolved = [row for row in rows if row.get("status") in {"resolved", "assigned", "complete"}]
    by_industry: dict[str, list[str]] = {}
    for row in resolved:
        industry = row.get("industry_id") or (row.get("industry") or {}).get("industry_id") or (row.get("industry") or {}).get("id")
        repository = row.get("canonical_repository") or row.get("repository") or {}
        url = row.get("canonical_url") or repository.get("canonical_url") or repository.get("url")
        assert isinstance(url, str) and url.startswith("https://github.com/")
        revision = row.get("immutable_revision") or {}
        sha = row.get("commit_sha") or revision.get("sha")
        assert isinstance(sha, str) and len(sha) == 40
        by_industry.setdefault(industry, []).append(url.rstrip("/").lower())
    assert all(len(urls) == len(set(urls)) for urls in by_industry.values())
    return f"L04 rows=170 resolved={len(resolved)} unresolved={170-len(resolved)} industries=17x10"


def verify_l05(output: Path) -> str:
    rows = load_jsonl(output / "competitor-direct-evidence.jsonl")
    assert len(rows) == 4320
    pairs = []
    for row in rows:
        surface = row.get("surface_ref") or row.get("surface_id")
        feature = row.get("canonical_feature_id") or row.get("feature_id")
        assert surface and feature
        pairs.append((surface, feature))
        if row.get("disposition") == "direct":
            assert row.get("source_url") or row.get("first_party_url") or row.get("first_party_urls")
            assert row.get("evidence_date") or row.get("observed_at")
            direct_claim = row.get("direct_claim") or {}
            assert row.get("claim") or row.get("claim_text") or direct_claim.get("claim")
    assert len(set(pairs)) == 4320
    assert len({surface for surface, _ in pairs}) == 30
    assert len({feature for _, feature in pairs}) == 144
    dispositions = Counter(row.get("disposition") for row in rows)
    return f"L05 cells=4320 surfaces=30 features=144 dispositions={dict(dispositions)}"


def verify_l06(output: Path) -> str:
    overlap = load_jsonl(output / "input-overlap-ledger.jsonl")
    receipts = load_jsonl(output / "stage0-identity-receipts.jsonl")
    unresolved = load_jsonl(output / "unresolved-identity-ledger.jsonl")
    assert sum(row.get("input_count", 1) for row in overlap) == 87
    input_ids = [item for row in overlap for item in row.get("input_refs", [])]
    assert len(input_ids) == 87 and len(set(input_ids)) == 87
    receipt_ids = [row.get("receipt_id") or row.get("candidate_id") or row.get("candidate_key") for row in receipts]
    assert None not in receipt_ids and len(set(receipt_ids)) == len(receipts)
    strict = 0
    for row in receipts:
        url = row.get("canonical_url") or (row.get("source_identity") or {}).get("canonical_url")
        commit = row.get("commit_sha") or row.get("immutable_revision") or row.get("immutable_default_branch_commit_sha") or (row.get("source_identity") or {}).get("commit_sha")
        evidence = row.get("identity_evidence") or {}
        method = row.get("digest_method") or row.get("identity_method") or evidence.get("digest_method") or (row.get("source_identity") or {}).get("digest_method")
        if isinstance(url, str) and url.startswith("https://github.com/") and isinstance(commit, str) and len(commit) == 40 and method:
            strict += 1
    assert len(receipts) + len(unresolved) > 0
    return f"L06 inputs=87 unique_candidates={len(receipts)} unresolved={len(unresolved)} strict_stage0={strict}"


def main() -> None:
    state = load_json(STATE_PATH)
    dispatch = load_json(DISPATCH_PATH)
    assert state["parent_goal_status"] == "active"
    assert state["promotion_allowed"] is False
    assert dispatch["role"] == "gpt-5.6-luna"
    assert len(dispatch["agent_receipts"]) == 3
    wave = state["wave_2_lanes"]
    assert set(wave) == set(LANES)

    completed = 0
    details = []
    verifiers = {
        "P9-L04-TARGET-IDENTITY-BACKFILL": verify_l04,
        "P9-L05-COMPETITOR-DIRECT-EVIDENCE": verify_l05,
        "P9-L06-LOCAL-STAGE0-IDENTITY": verify_l06,
    }
    for lane_id, spec in LANES.items():
        lane_status = wave[lane_id]["status"]
        assert lane_status in {"working", "complete", "complete_verified", "blocked"}
        if lane_status not in {"complete", "complete_verified"}:
            continue
        output = spec["dir"]
        present = {path.name for path in output.iterdir() if path.is_file()}
        assert not (spec["files"] - present), f"{lane_id} missing {sorted(spec['files'] - present)}"
        lane_state = load_json(output / "lane-state.json")
        boundary(lane_state, lane_id)
        details.append(verifiers[lane_id](output))
        completed += 1

    if completed == 3:
        assert state["status"] in {
            "wave_2_complete_unpromoted",
            "wave_3_dispatching",
            "wave_3_active",
            "wave_3_complete_unpromoted",
            "wave_6_dispatching",
            "wave_6_active",
            "wave_6_complete_unpromoted",
            "research_complete_unpromoted",
        }
        print("PHASE9_WAVE2_VERIFIED_PASS " + " | ".join(details))
    else:
        assert state["status"] == "wave_2_active"
        print(f"PHASE9_WAVE2_ACTIVE_PASS lanes_complete={completed}/3")


if __name__ == "__main__":
    main()
