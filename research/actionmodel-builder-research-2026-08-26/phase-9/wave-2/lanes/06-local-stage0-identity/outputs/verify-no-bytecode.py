import hashlib
import json
from pathlib import Path

OUT = Path(__file__).parent
receipts = [json.loads(line) for line in (OUT / "stage0-identity-receipts.jsonl").read_text().splitlines() if line.strip()]
overlaps = [json.loads(line) for line in (OUT / "input-overlap-ledger.jsonl").read_text().splitlines() if line.strip()]
unresolved = [line for line in (OUT / "unresolved-identity-ledger.jsonl").read_text().splitlines() if line.strip()]
state = json.loads((OUT / "lane-state.json").read_text())
assert len(receipts) == 76 and len({r["candidate_key"] for r in receipts}) == 76
assert all(r["strict_stage0_identity"] and len(r["immutable_default_branch_commit_sha"]) == 40 for r in receipts)
assert sum(r["input_count"] for r in overlaps) == 87 and len(overlaps) == 76 and len(unresolved) == 0
for field, value in {"parent_goal_status": "active", "research_only": True, "implementation_authorized": False, "execution_status": "UNEXECUTED", "admission_status": "NOT_ADMITTED", "admitted_blocks": 0, "promotion_allowed": False}.items():
    assert state[field] == value
assert not list(OUT.glob("__pycache__/*.pyc"))
print("PASS no-bytecode; inputs=87; unique=76; strict_stage0=76; unresolved=0")
