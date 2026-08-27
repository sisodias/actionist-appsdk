#!/bin/sh
set -eu
out="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
python3 - "$out" <<'PY'
import json, pathlib, sys
o=pathlib.Path(sys.argv[1])
e=[json.loads(x) for x in (o/'pair-dimension-evidence.jsonl').read_text().splitlines()]
r=[json.loads(x) for x in (o/'source-receipts.jsonl').read_text().splitlines()]
assert len(e)==800 and len(r)==800
assert len({x['pair_id'] for x in e})==80
assert len({x['pair_id'] for x in r})==80
assert all(x['evidence_class'] in ('direct','inferred','unknown','blocked') for x in e+r)
assert all(x.get('evidence_excerpt') and x.get('evidence_source_url','').startswith('https://') for x in e+r)
assert all(x['evidence_class']!='blocked' or 'access-blocked' in x['observed_claim'] for x in e)
assert sum(x['evidence_class']=='direct' for x in e)==379
assert sum(x['evidence_class']=='unknown' for x in e)==421
assert all(x['boundary']['execution_status']=='UNEXECUTED' and x['boundary']['admission_status']=='NOT_ADMITTED' for x in e+r)
assert not list(o.glob('*.pyc')) and not list(o.rglob('__pycache__'))
print('PASS no-bytecode/verifier: evidence=800 receipts=800 pairs=80 direct=379 unknown=421 blocked=0 bytecode=0')
PY
