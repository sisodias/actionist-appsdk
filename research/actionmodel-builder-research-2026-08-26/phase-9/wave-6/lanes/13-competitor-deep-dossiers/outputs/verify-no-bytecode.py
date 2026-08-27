#!/usr/bin/env python3
import json
from pathlib import Path

root = Path(__file__).parent
state = json.loads((root / "lane-state.json").read_text())
assert state["parent_goal_status"] == "active"
assert state["research_only"] is True
assert state["implementation_authorized"] is False
assert state["execution_status"] == "UNEXECUTED"
assert state["admission_status"] == "NOT_ADMITTED"
assert state["admitted_blocks"] == 0
assert state["promotion_allowed"] is False
files = {
    "competitor-dossiers.jsonl": 10,
    "feature-claim-receipts.jsonl": 25,
    "source-register.jsonl": 10,
}
for name, expected in files.items():
    rows = [json.loads(line) for line in (root / name).read_text().splitlines() if line.strip()]
    assert len(rows) == expected, (name, len(rows), expected)
assert len({r["surface_ref"] for r in [json.loads(x) for x in (root / "competitor-dossiers.jsonl").read_text().splitlines()]}) == 10
assert not list(root.rglob("*.pyc"))
assert not list(root.rglob("__pycache__"))
print("PASS no-bytecode; dossier=10 receipts=25 sources=10")
