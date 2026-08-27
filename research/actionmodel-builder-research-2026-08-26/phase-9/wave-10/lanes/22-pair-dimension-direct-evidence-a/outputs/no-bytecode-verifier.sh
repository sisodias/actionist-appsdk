#!/bin/sh
set -eu
BASE=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
IN=/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-9/wave-8/lanes/17-target-identity-backfill/outputs/target-identity-assignments.jsonl
E="$BASE/pair-dimension-evidence.jsonl"
R="$BASE/source-receipts.jsonl"
python3 -B - "$IN" "$E" "$R" <<'PY'
import json,sys,collections
inp,ep,rp=sys.argv[1:]
dims=['demand_atom_fit','workflow_behavior','ui_assembly','data_model','integration_surface','agent_authority','runtime_deployment','verification_eval','provenance_rights','economics_maintenance']
assign=[json.loads(x) for x in open(inp) if x.strip() and json.loads(x).get('status')=='resolved'][:80]
e=[json.loads(x) for x in open(ep) if x.strip()]
r=[json.loads(x) for x in open(rp) if x.strip()]
assert len(assign)==80 and len(e)==800 and len(r)==800
assert collections.Counter(x['dimension'] for x in e)==collections.Counter({d:80 for d in dims})
assert len({(x['pair_id'],x['dimension']) for x in e})==800
assert len({(x['pair_id'],x['dimension']) for x in r})==800
assert {(x['pair_id'],x['dimension']) for x in e}=={(x['pair_id'],x['dimension']) for x in r}
assert {x['assignment_id'] for x in e}=={x['assignment_id'] for x in assign}
assert all(x['evidence_class'] in {'direct','inference','unknown','blocked'} for x in e)
assert all(x['falsifier'] and 'rights_unknown' in x and 'sbom_unknown' in x for x in e+r)
assert all(x['boundary']['research_only'] and x['boundary']['execution_status']=='UNEXECUTED' and x['boundary']['admission_status']=='NOT_ADMITTED' and x['boundary']['admitted_blocks']==0 and x['boundary']['promotion_allowed'] is False for x in e+r)
assert all(x.get('evidence_excerpt') for x in e if x['evidence_class']=='direct')
assert all(x['evidence_class']!='inference' or 'inference' in x['evidence_basis'].lower() for x in e)
print('PASS 80x10 rows/parity/uniqueness/evidence-quality/boundary')
print('evidence_classes',dict(collections.Counter(x['evidence_class'] for x in e)))
PY
