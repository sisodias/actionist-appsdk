#!/bin/sh
set -eu
D=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
python3 - "$D" <<'PY'
import json,re,sys,pathlib
from collections import Counter
d=pathlib.Path(sys.argv[1]); L=lambda n:[json.loads(x) for x in (d/n).read_text().splitlines()]
a=L('target-identity-assignments.jsonl'); e=L('identity-edges.jsonl'); s=L('source-receipts.jsonl')
assert len(a)==len(s)==170 and len({x['industry']['id'] for x in a})==17 and set(Counter(x['industry']['id'] for x in a).values())=={10}
r=d.parents[3]; p=[]
for q in [r/'wave-2/lanes/04-target-identity-backfill/outputs/target-identity-assignments.jsonl',r/'wave-6/lanes/12-target-identity-backfill/outputs/target-identity-assignments.jsonl',r/'wave-8/lanes/17-target-identity-backfill/outputs/target-identity-assignments.jsonl']: p += [json.loads(x) for x in q.read_text().splitlines()]
assert not ({x['pair_id'] for x in a}&{x['pair_id'] for x in p})
U=lambda z:{x['canonical_repository']['url'].rstrip('/') for x in z if isinstance(x.get('canonical_repository'),dict)}
assert not (U(a)&U(p)); by={}
for x in a:
 if x.get('canonical_repository'): by.setdefault(x['industry']['id'],[]).append(x['canonical_repository']['url'].rstrip('/'))
assert all(len(v)==len(set(v)) for v in by.values()) and len(e)==sum(x['status']=='resolved' for x in a)
for x in a:
 b=x['boundary']; assert b['execution_status']=='UNEXECUTED' and b['admission_status']=='NOT_ADMITTED' and b['admitted_blocks']==0 and not b['promotion_allowed']
 if x['status']=='resolved': assert re.fullmatch(r'[0-9a-f]{40}',x['immutable_revision']['sha'])
print('PASS assignments=170 industries=17x10 edges=%d receipts=170 unresolved=%d'%(len(e),sum(x['status']=='unresolved' for x in a)))
PY
