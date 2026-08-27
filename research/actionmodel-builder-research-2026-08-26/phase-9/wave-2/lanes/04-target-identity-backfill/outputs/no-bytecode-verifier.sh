#!/bin/sh
set -eu
OUT=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
python3 - "$OUT" <<'PY'
import json, os, sys
from collections import defaultdict
out=sys.argv[1]
expected={'target-identity-assignments.jsonl','identity-edges.jsonl','source-receipts.jsonl','target-identity-backfill.md','lane-state.json','no-bytecode-verifier.sh'}
assert set(os.listdir(out)) == expected
def read(name):
 rows=[]
 with open(os.path.join(out,name),encoding='utf-8') as f:
  for line in f:
   assert line.strip()
   rows.append(json.loads(line))
 return rows
a=read('target-identity-assignments.jsonl'); e=read('identity-edges.jsonl'); s=read('source-receipts.jsonl')
assert len(a)==170 and len(s)==170
assert len({x['assignment_id'] for x in a})==170
assert len({(x['industry']['id'],x['target_position']) for x in a})==170
by=defaultdict(list)
for x in a: by[x['industry']['id']].append(x)
assert len(by)==17 and all(len(v)==10 for v in by.values())
assert all(len({x['canonical_repository']['url'].lower() for x in v})==len(v) for v in by.values())
assert all(x['deficit_before_backfill'] and x['status'] in {'resolved','unresolved'} for x in a)
assert len(e)==sum(x['status']=='resolved' for x in a)
assert {x['assignment_id'] for x in s}=={x['assignment_id'] for x in a}
am={x['pair_id']:x for x in a}
for x in e: assert x['immutable_revision_sha']==am[x['pair_id']]['immutable_revision']['sha']
for x in a:
 if x['status']=='resolved': assert len(x['immutable_revision']['sha'])==40 and all(c in '0123456789abcdef' for c in x['immutable_revision']['sha'])
 else: assert x['immutable_revision']['sha'] is None and x['attempted_sources'] and x['next_gate']
st=json.load(open(os.path.join(out,'lane-state.json')))
for k,v in {'parent_goal_status':'active','research_only':True,'implementation_authorized':False,'execution_status':'UNEXECUTED','admission_status':'NOT_ADMITTED','admitted_blocks':0,'promotion_allowed':False}.items(): assert st[k]==v
assert not any(n.endswith(('.pyc','.pyo')) or n=='__pycache__' for n in os.listdir(out))
print('PASS no-bytecode; assignments=170; industries=17; resolved=%d; unresolved=%d; edges=%d; receipts=170; within_industry_duplicates=0' % (sum(x['status']=='resolved' for x in a),sum(x['status']=='unresolved' for x in a),len(e)))
PY
