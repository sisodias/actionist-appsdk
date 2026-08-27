#!/bin/sh
set -eu
BASE=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
python3 -B - "$BASE" <<'PY'
import json, os, sys, glob, hashlib, re
base=sys.argv[1]
def rows(name):
    with open(os.path.join(base,name)) as f: return [json.loads(x) for x in f if x.strip()]
a=rows('target-identity-assignments.jsonl'); e=rows('identity-edges.jsonl'); s=rows('source-receipts.jsonl')
assert len(a)==170 and len(s)==170 and len({x['assignment_id'] for x in a})==170
assert len({x['pair_id'] for x in a})==170
by={}
for x in a:
    ind=x['industry']['id']; by.setdefault(ind,[]).append(x)
assert len(by)==17 and all(len(v)==10 for v in by.values())
assert all(len({x['canonical_repository']['url'] for x in v})==10 for v in by.values())
root=os.path.abspath(os.path.join(base,'../../../../../'))
prior=[]
for p in [
    os.path.join(root,'phase-9/wave-2/lanes/04-target-identity-backfill/outputs/target-identity-assignments.jsonl'),
    os.path.join(root,'phase-9/wave-6/lanes/12-target-identity-backfill/outputs/target-identity-assignments.jsonl')]:
    with open(p) as f: prior += [json.loads(x) for x in f]
assert not ({x['pair_id'] for x in a} & {x['pair_id'] for x in prior})
prior_urls={(x['industry']['id'],(x.get('canonical_repository') or {}).get('url')) for x in prior if x.get('canonical_repository')}
assert not {(x['industry']['id'],x['canonical_repository']['url']) for x in a} & prior_urls
for x in a:
    if x['status']=='resolved': assert re.fullmatch(r'[0-9a-f]{40}',x['immutable_revision']['sha'])
assert {x['pair_id'] for x in e}=={x['pair_id'] for x in a if x['status']=='resolved'}
assert {x['assignment_id'] for x in s}=={x['assignment_id'] for x in a}
assert not (glob.glob(os.path.join(base,'**','*.pyc'),recursive=True)+glob.glob(os.path.join(base,'**','*.pyo'),recursive=True)+glob.glob(os.path.join(base,'**','__pycache__'),recursive=True))
print('PASS assignments=170 industries=17 rows_per_industry=10 edges=%d receipts=170 unique_url_violations=0 L04_pair_overlap=0 L12_pair_overlap=0 prior_url_overlap=0'%len(e))
for name in ['target-identity-assignments.jsonl','identity-edges.jsonl','source-receipts.jsonl','target-identity-backfill.md','lane-state.json','no-bytecode-verifier.sh']:
    h=hashlib.sha256(open(os.path.join(base,name),'rb').read()).hexdigest(); print(name+' sha256='+h)
PY
