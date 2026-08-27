#!/usr/bin/env python3
import json
from pathlib import Path

root = Path(__file__).parent
state = json.loads((root / "lane-state.json").read_text())
assert state["parent_goal_status"] == "active"
assert state["research_only"] is True
assert state["implementation_authorized"] is False
assert state["implementation"] is False
assert state["execution_status"] == "UNEXECUTED"
assert state["admission_status"] == "NOT_ADMITTED"
assert state["admitted_blocks"] == 0 and state["admitted"] == 0
assert state["promotion_allowed"] is False and state["promotion"] is False
expected = {"competitor-dossiers.jsonl": 10, "feature-claim-receipts.jsonl": 26, "source-register.jsonl": 10}
for name, count in expected.items():
    rows = [json.loads(line) for line in (root / name).read_text().splitlines() if line.strip()]
    assert len(rows) == count, (name, len(rows), count)
dossiers = [json.loads(line) for line in (root / "competitor-dossiers.jsonl").read_text().splitlines() if line.strip()]
receipts = [json.loads(line) for line in (root / "feature-claim-receipts.jsonl").read_text().splitlines() if line.strip()]
sources = [json.loads(line) for line in (root / "source-register.jsonl").read_text().splitlines() if line.strip()]
assert {r["surface_ref"] for r in dossiers} == {f"PS-{i:03d}" for i in range(11, 21)}
assert {r["surface_ref"] for r in receipts} == {f"PS-{i:03d}" for i in range(11, 21)}
assert {r["surface_ref"] for r in sources} == {f"PS-{i:03d}" for i in range(11, 21)}
assert all(r["canonical_feature_id"].startswith("F-") and r["source_url"].startswith("https://") and r["observed_date"] == "2026-08-27" and r["claim"] and r["falsifier"] for r in receipts)
assert not list(root.rglob("*.pyc"))
assert not list(root.rglob("__pycache__"))
print("PASS no-bytecode; dossier=10 receipts=26 sources=10")
