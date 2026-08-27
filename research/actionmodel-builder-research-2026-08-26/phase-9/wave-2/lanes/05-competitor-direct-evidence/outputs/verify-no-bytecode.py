import hashlib
import json
from collections import Counter
from pathlib import Path

OUT = Path(__file__).parent
ledger = OUT / 'competitor-direct-evidence.jsonl'
state = json.loads((OUT / 'lane-state.json').read_text())
rows = [json.loads(x) for x in ledger.read_text().splitlines() if x.strip()]
keys = [(r['surface_ref'], r['canonical_feature_id']) for r in rows]
assert len(rows) == 4320, len(rows)
assert len(set(keys)) == 4320, 'duplicate cells'
assert {r['surface_rank'] for r in rows} == set(range(1, 31))
assert Counter(r['disposition'] for r in rows) == Counter(state['dispositions_l05'])
corrected = next(r for r in rows if r['surface_ref'] == 'PS-005' and r['canonical_feature_id'] == 'F-047')
assert corrected['disposition'] == 'unknown'
assert corrected['direct_claim'] is None
assert state['parent_goal_status'] == 'active'
assert state['research_only'] is True
assert state['implementation_authorized'] is False
assert state['execution_status'] == 'UNEXECUTED'
assert state['admission_status'] == 'NOT_ADMITTED'
assert state['admitted_blocks'] == 0
assert state['promotion_allowed'] is False
for r in rows:
    assert r['falsifier']
    if r['disposition'] == 'direct':
        c = r['direct_claim']
        assert c and c['source_url'].startswith('https://') and c['evidence_date'] and c['claim']
        assert r['source_url'] == c['source_url']
    else:
        assert r['direct_claim'] is None
assert not list(OUT.glob('__pycache__/*.pyc'))
print('PASS no-bytecode; rows=4320; unique_cells=4320; direct_claims_have_url_date_text=yes')
