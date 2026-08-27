#!/usr/bin/env python3
"""Independent pre-promotion and promotion audit for Phase 7."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "outputs"
LANES = ROOT / "lanes"
EXPECTED_LANES = {
    "P7-CORPUS-INTEGRITY": "01-corpus-integrity",
    "P7-DIMENSION-EVIDENCE": "02-dimension-evidence",
    "P7-COMPETITOR-FEATURES": "03-competitor-features",
    "P7-INDUSTRY-JOINS": "04-industry-joins",
    "P7-RIGHTS-EVAL-READINESS": "05-rights-eval-readiness",
}
FAILURES: list[str] = []
PASSES: list[str] = []


def check(label: str, condition: bool, detail: str = "") -> None:
    if condition:
        PASSES.append(label)
        print("PASS", label, detail)
    else:
        FAILURES.append(label)
        print("FAIL", label, detail)


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def load_jsonl(path: Path) -> list[dict]:
    rows: list[dict] = []
    with path.open(encoding="utf-8") as handle:
        for number, line in enumerate(handle, 1):
            if not line.strip():
                continue
            if line.startswith("Traceback") or "Traceback (most recent call last)" in line:
                raise ValueError(f"traceback at line {number}")
            value = json.loads(line)
            if not isinstance(value, dict):
                raise ValueError(f"non-object at line {number}")
            rows.append(value)
    return rows


parser = argparse.ArgumentParser()
parser.add_argument("--promoted", action="store_true")
args = parser.parse_args()
mode = "PROMOTED" if args.promoted else "PREPROMOTION"

state_path = ROOT / "phase-7-state.json"
dispatch_path = ROOT / "dispatch-receipt.json"
program_path = ROOT / "PHASE-7-PROGRAM.md"
state = load_json(state_path) if state_path.is_file() else {}
dispatch = load_json(dispatch_path) if dispatch_path.is_file() else {}

check("state_shape", bool(state) and state.get("phase") == "full-fidelity-corpus-closure-and-competitor-feature-census")
check("program_present", program_path.is_file())
check("program_lanes", all(lane in program_path.read_text(encoding="utf-8") for lane in EXPECTED_LANES))
check("research_boundary", state.get("mode") == "research_only" and state.get("implementation_authorized") is False)
check("execution_boundary", state.get("execution_status") == "UNEXECUTED" and state.get("admission_status") == "NOT_ADMITTED")
check("parent_active", state.get("parent_goal_status") == "active" and state.get("admitted_blocks") == 0)
check("target_shape", state.get("target", {}).get("industry_count") == 17 and state.get("target", {}).get("dimension_count") == 10)
check("unpromoted_state", not args.promoted or state.get("phase_verified") is True, f"mode={mode}")
if not args.promoted:
    check("prepromotion_state", state.get("status") == "dispatched_parent_goal_active" and state.get("phase_verified") is False)
else:
    check("promotion_receipt", state.get("status") == "phase_verified_parent_goal_active" and state.get("coordinator_verification", {}).get("status") == "PASS")

check("dispatch_shape", dispatch.get("receipt_id") == "P7-COORD-DISPATCH-001" and len(dispatch.get("lanes", [])) == 5)
check("dispatch_lanes", {lane.get("lane_id") for lane in dispatch.get("lanes", [])} == set(EXPECTED_LANES))
for lane_id in EXPECTED_LANES:
    lane = state.get("lanes", {}).get(lane_id, {})
    check(f"{lane_id}_state", lane.get("status") in {"dispatched", "working", "complete", "completed"}, str(lane.get("status")))
    check(f"{lane_id}_boundary", lane.get("execution_status") == "UNEXECUTED" and lane.get("admission_status") == "NOT_ADMITTED")

gap_path = OUT / "coverage-gap-audit.json"
gap = load_json(gap_path) if gap_path.is_file() else {}
measured = gap.get("measured_current", {})
check("gap_measurements", measured.get("merged_observed_rows") == 17000 and measured.get("merged_distinct_repository_urls") == 216)
check("gap_is_preserved", measured.get("complete_industry_repository_pairs") == 270 and measured.get("complete_pair_gap") == 1430)
check("gap_target", gap.get("target", {}).get("complete_industry_repository_pairs") == 1700)

queue_path = OUT / "closure-queue.jsonl"
manifest_path = OUT / "closure-queue-manifest.json"
try:
    queue_rows = load_jsonl(queue_path)
    manifest = load_json(manifest_path)
    queue_hash = hashlib.sha256(queue_path.read_bytes()).hexdigest()
    check("queue_schema", len(queue_rows) == 3346 and all(row.get("record_type") == "industry_repository_closure" for row in queue_rows), f"rows={len(queue_rows)}")
    check("queue_hash", queue_hash == manifest.get("queue_sha256"))
    check("queue_counts", manifest.get("complete_pairs") == 270 and manifest.get("partial_pairs") == 3076 and manifest.get("complete_pair_gap") == 1430)
    check("queue_boundaries", all(row.get("research_only") is True and row.get("execution_status") == "UNEXECUTED" and row.get("admission_status") == "NOT_ADMITTED" for row in queue_rows))
except Exception as exc:
    queue_rows = []
    check("queue_parse", False, str(exc))

lane_pending = []
lane_files = {
    "P7-CORPUS-INTEGRITY": ["repository-selection-ledger.jsonl", "repository-identity-edges.jsonl", "corpus-integrity-report.md", "lane-state.json"],
    "P7-DIMENSION-EVIDENCE": ["dimension-evidence-ledger.jsonl", "source-receipts.jsonl", "dimension-depth-report.md", "lane-state.json"],
    "P7-COMPETITOR-FEATURES": ["product-surface-universe.jsonl", "feature-dictionary.jsonl", "competitor-feature-evidence.jsonl", "feature-census-report.md", "lane-state.json"],
    "P7-INDUSTRY-JOINS": ["industry-repository-joins.jsonl", "industry-coverage-report.md", "underfilled-bucket-ledger.jsonl", "lane-state.json"],
    "P7-RIGHTS-EVAL-READINESS": ["rights-provenance-ledger.jsonl", "evaluation-readiness-ledger.jsonl", "rights-eval-report.md", "lane-state.json"],
}
for lane_id, directory in EXPECTED_LANES.items():
    lane_dir = LANES / directory / "outputs"
    existing = sorted(lane_dir.iterdir()) if lane_dir.is_dir() else []
    for path in existing:
        if path.suffix != ".jsonl":
            continue
        try:
            rows = load_jsonl(path)
            check(f"{lane_id}_{path.name}_jsonl", bool(rows), f"rows={len(rows)}")
        except Exception as exc:
            check(f"{lane_id}_{path.name}_jsonl", False, str(exc))
    missing = [name for name in lane_files[lane_id] if not (lane_dir / name).is_file()]
    if missing:
        lane_pending.append(f"{lane_id}:{','.join(missing)}")
        print("PENDING", f"{lane_id}_artifacts", ",".join(missing))
    else:
        check(f"{lane_id}_artifacts", True)
        lane_state = load_json(lane_dir / "lane-state.json")
        callback_status = lane_state.get("callback_status") or lane_state.get("verification", {}).get("callback_status")
        check(f"{lane_id}_lane_receipt", lane_state.get("status") in {"complete", "completed"} and callback_status in {"DONE", "sent_and_verified", "verified_delivery"})
if args.promoted:
    check("all_lane_artifacts", not lane_pending, "; ".join(lane_pending))
else:
    print("PENDING lanes", len(lane_pending))

if FAILURES:
    print(f"PHASE7_COORDINATOR_AUDIT_FAIL mode={mode} failures={len(FAILURES)}")
    raise SystemExit(1)
print(f"PHASE7_COORDINATOR_AUDIT_PASS mode={mode} checks={len(PASSES)} pending_lanes={len(lane_pending)}")
