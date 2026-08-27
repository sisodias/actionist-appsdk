#!/usr/bin/env python3
"""Structural prepromotion verifier for the Phase-8 research sprint."""

from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parent
REQUIRED = {
    "P8-UNIVERSAL-BLOCK-FRAMEWORK": (
        ROOT / "lanes/01-universal-block-framework/outputs",
        ("universal-block-framework.md", "universal-block-contract-delta.json", "lane-state.json"),
    ),
    "P8-LOCAL-CORPUS-JOIN": (
        ROOT / "lanes/02-local-corpus-join/outputs",
        ("local-corpus-join.jsonl", "local-corpus-join-report.md", "overlap-and-dedupe.jsonl", "lane-state.json"),
    ),
    "P8-B2B-TEMPLATE-SHELF": (
        ROOT / "lanes/03-b2b-template-shelf/outputs",
        ("b2b-template-shelf.jsonl", "b2b-template-shelf-report.md", "template-contract-v1.json", "lane-state.json"),
    ),
    "P8-REPO-TO-BLOCK-MECHANICS": (
        ROOT / "lanes/04-repo-to-block-mechanics/outputs",
        ("repo-to-block-pipeline.md", "mechanism-and-tool-census.jsonl", "receipt-schema.json", "lane-state.json"),
    ),
    "P8-COMPOSITION-AGENT-EVALS": (
        ROOT / "lanes/05-composition-agent-evals/outputs",
        ("composition-agent-architecture.md", "composition-eval-suite.json", "synthetic-pilot-plan.md", "lane-state.json"),
    ),
}


def load_json(path: Path) -> object:
    return json.loads(path.read_text(encoding="utf-8"))


def verify_jsonl(path: Path) -> int:
    count = 0
    for number, raw in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        if not raw.strip():
            raise AssertionError(f"{path}: blank JSONL row {number}")
        json.loads(raw)
        count += 1
    if count == 0:
        raise AssertionError(f"{path}: empty JSONL")
    return count


def verify_boundary(state_path: Path) -> None:
    lane = load_json(state_path)
    assert isinstance(lane, dict), state_path
    expected = {
        "research_only": True,
        "execution_status": "UNEXECUTED",
        "admission_status": "NOT_ADMITTED",
        "admitted_blocks": 0,
        "parent_goal_status": "active",
    }
    for key, value in expected.items():
        assert lane.get(key) == value, f"{state_path}: {key}={lane.get(key)!r}, expected {value!r}"


def main() -> None:
    state = load_json(ROOT / "phase-8-state.json")
    receipt = load_json(ROOT / "dispatch-receipt.json")
    assert isinstance(state, dict) and isinstance(receipt, dict)
    assert state["research_only"] is True
    assert state["implementation_authorized"] is False
    assert state["execution_status"] == "UNEXECUTED"
    assert state["admission_status"] == "NOT_ADMITTED"
    assert state["admitted_blocks"] == 0
    assert state["parent_goal_status"] == "active"
    assert state["promotion_allowed"] is False
    assert len(state["lanes"]) == len(receipt["lanes"]) == len(REQUIRED) == 5
    assert (ROOT / "PHASE-8-PROGRAM.md").stat().st_size > 1_000
    assert (ROOT / "CONVERGENCE-GATE.md").stat().st_size > 1_000

    pending: list[str] = []
    checked = 0
    for lane_id, (output_dir, required_files) in REQUIRED.items():
        missing = [name for name in required_files if not (output_dir / name).is_file()]
        if missing:
            pending.append(f"{lane_id}: {', '.join(missing)}")
            continue
        for name in required_files:
            path = output_dir / name
            assert path.stat().st_size > 0, path
            if path.suffix == ".json":
                load_json(path)
            elif path.suffix == ".jsonl":
                verify_jsonl(path)
            elif path.suffix == ".md":
                assert path.stat().st_size > 1_000, f"{path}: report too small"
        verify_boundary(output_dir / "lane-state.json")
        checked += 1
        print(f"PASS {lane_id} artifacts={len(required_files)}")

    if state["phase_verified"]:
        assert checked == 5 and not pending
        assert state["status"] == "research_complete_unpromoted"
        assert (ROOT / "PHASE-8-SYNTHESIS.md").stat().st_size > 5_000
        join = load_json(ROOT / "cross-lane-join.json")
        assert isinstance(join, dict) and join["lanes_joined"] == 5
        assert join["status"] == "VERIFIED_RESEARCH_UNPROMOTED"
        assert join["admitted_blocks"] == 0
        print("PHASE8_VERIFIED_RESEARCH_PASS complete_lanes=5/5 promotion_allowed=false")
    else:
        print(f"PHASE8_PREPROMOTION_PASS complete_lanes={checked}/5 pending_lanes={len(pending)}")
    for item in pending:
        print(f"PENDING {item}")


if __name__ == "__main__":
    main()
