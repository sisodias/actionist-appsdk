#!/bin/sh
set -eu
OUT=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
test "$(find "$OUT" -type f \( -name '*.pyc' -o -name '*.pyo' \) -print | wc -l | tr -d ' ')" = 0
python3 -B - "$OUT" <<'PY'
import json, pathlib, sys
out=pathlib.Path(sys.argv[1])
cells=[json.loads(x) for x in (out/'pair-dimension-evidence.jsonl').read_text().splitlines()]
receipts=[json.loads(x) for x in (out/'source-receipts.jsonl').read_text().splitlines()]
assert len(cells)==1660 and len(receipts)==166
keys={(x['pair_id'],x['dimension']) for x in cells}
assert len(keys)==1660 and len({x['pair_id'] for x in cells})==166
assert all(x['immutable_revision'] and len(x['immutable_revision'])==40 for x in cells)
assert all(x['canonical_url'].startswith('https://github.com/') and x['source_url'].startswith(('https://raw.githubusercontent.com/','https://api.github.com/')) for x in cells)
assert all(x['observed_claim'] and x['falsifier'] for x in cells)
assert sum(x['evidence_class']=='direct' for x in cells)==683
assert sum(x['evidence_class']=='inherited' for x in cells)==0
assert sum(x['evidence_class']=='inferred' for x in cells)==0
assert sum(x['evidence_class']=='unknown' for x in cells)==977
state=json.loads((out/'lane-state.json').read_text())
for k,v in {'parent_goal_status':'active','research_only':True,'implementation_authorized':False,'execution_status':'UNEXECUTED','admission_status':'NOT_ADMITTED','admitted_blocks':0,'promotion_allowed':False}.items(): assert state[k]==v
print('PASS: 1660 unique cells, 166 receipts, required boundary, no bytecode')
PY
