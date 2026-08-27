#!/usr/bin/env python3
"""Structural convergence gate for the Phase 9 evidence-closure programme."""

from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parent
STATE = ROOT / "phase-9-state.json"
PROGRAM = ROOT / "PHASE-9-PROGRAM.md"
DISPATCH = ROOT / "wave-1-dispatch-receipt.json"

EXPECTED = {
    "P9-L01-PAIR-COMPLETION-FORENSICS": (
        "lanes/01-pair-completion-forensics/outputs",
        {
            "pair-completion-ledger.jsonl",
            "gap-reason-register.jsonl",
            "pair-completion-forensics.md",
            "lane-state.json",
        },
    ),
    "P9-L02-COMPETITOR-TAXONOMY-CLOSURE": (
        "lanes/02-competitor-taxonomy-closure/outputs",
        {
            "feature-ontology.jsonl",
            "surface-feature-denominator.jsonl",
            "unmapped-feature-ledger.jsonl",
            "competitor-taxonomy-closure.md",
            "lane-state.json",
        },
    ),
    "P9-L03-LOCAL-CORPUS-BLOCK-JOIN": (
        "lanes/03-local-corpus-block-join/outputs",
        {
            "local-asset-block-join.jsonl",
            "rights-and-source-gap-ledger.jsonl",
            "mini-corpus-location-receipt.json",
            "local-corpus-block-join.md",
            "lane-state.json",
        },
    ),
}


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def jsonl_rows(path: Path) -> int:
    rows = 0
    for number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        if not line.strip():
            continue
        value = json.loads(line)
        assert isinstance(value, dict), f"{path}:{number} must be an object"
        rows += 1
    return rows


def main() -> None:
    state = load_json(STATE)
    dispatch = load_json(DISPATCH)
    program = PROGRAM.read_text(encoding="utf-8")

    assert state["parent_goal_status"] == "active"
    assert state["research_only"] is True
    assert state["implementation_authorized"] is False
    assert state["execution_status"] == "UNEXECUTED"
    assert state["admission_status"] == "NOT_ADMITTED"
    assert state["admitted_blocks"] == 0
    assert state["promotion_allowed"] is False
    assert state["objective_counters"]["complete_pairs_target"] == 1700
    assert state["objective_counters"]["complete_pairs_observed"] == 270
    assert state["objective_counters"]["complete_pair_gap"] == 1430
    assert "100000000" in json.dumps(state)
    assert "17 industries × 100 distinct repositories × 10 dimensions" in program
    assert set(state["lanes"]) == set(EXPECTED)
    assert dispatch["status"] in {"dispatched", "complete_verified_unpromoted"}
    assert dispatch["role"] == "gpt-5.6-luna"
    assert len(dispatch["agent_receipts"]) == 3
    assert len({item["agent_id"] for item in dispatch["agent_receipts"]}) == 3

    complete = 0
    for lane_id, (relative_dir, required) in EXPECTED.items():
        lane = state["lanes"][lane_id]
        assert lane["output_dir"] == relative_dir
        status = lane["status"]
        assert status in {"working", "complete", "complete_verified", "blocked"}
        if status not in {"complete", "complete_verified"}:
            continue
        output = ROOT / relative_dir
        present = {path.name for path in output.iterdir() if path.is_file()}
        missing = required - present
        assert not missing, f"{lane_id} missing {sorted(missing)}"
        lane_state = load_json(output / "lane-state.json")
        assert lane_state["research_only"] is True
        assert lane_state["parent_goal_status"] == "active"
        assert lane_state["admitted_blocks"] == 0
        for path in output.glob("*.jsonl"):
            jsonl_rows(path)
        complete += 1

    if complete == len(EXPECTED):
        assert state["status"] in {
            "wave_1_complete_unpromoted",
            "wave_2_dispatching",
            "wave_2_active",
            "wave_2_complete_unpromoted",
            "wave_3_dispatching",
            "wave_3_active",
            "wave_3_complete_unpromoted",
            "wave_6_dispatching",
            "wave_6_active",
            "wave_6_complete_unpromoted",
            "research_complete_unpromoted",
        }
        print(f"PHASE9_VERIFIED_RESEARCH_PASS lanes=3/3 status={state['status']} promotion_allowed=false")
    else:
        assert state["status"] == "wave_1_active"
        print(f"PHASE9_ACTIVE_PASS lanes_complete={complete}/3 parent_goal_status=active")


if __name__ == "__main__":
    main()
