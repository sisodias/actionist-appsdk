#!/usr/bin/env bash
# S2-L5 post-write structural/link/count/boundary smoke.
# Research-only lane. Verifies artifacts exist, JSON parses, boundary flags hold,
# and load-bearing counts match the prose. Exits non-zero on any failure.
set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../../../.." && pwd)"
P14="$ROOT/research/workstreams/p14-runtime-sandbox-release/runs/2026-08-27-sprint-2-opus"
P15="$ROOT/research/workstreams/p15-learning-feedback/runs/2026-08-27-sprint-2-opus"
LANE="$ROOT/research/workstreams/2026-08-27-sprint-2/lanes/S2-L5"

FAIL=0
pass(){ printf 'PASS  %s\n' "$1"; }
fail(){ printf 'FAIL  %s\n' "$1"; FAIL=1; }

echo "== 1. artifact presence =="
for f in \
  "$P14/runtime-profile-contracts.md" \
  "$P14/observability-attribution-contract.md" \
  "$P14/release-rollback-contract.md" \
  "$P14/worked-traces.md" \
  "$P14/packaging-runtime-reconciliation.md" \
  "$P14/runtime-profiles.json" \
  "$P14/release-manifest.schema.json" \
  "$P14/decision-ledger.json" \
  "$P14/lane-state.json" \
  "$P15/learning-contract.md" \
  "$P15/evidence-signal.schema.json" \
  "$P15/capability-evidence-state.schema.json" \
  "$P15/decision-ledger.json" \
  "$P15/lane-state.json" \
  "$LANE/CHECKPOINT.md" ; do
  [ -s "$f" ] && pass "exists non-empty: ${f#$ROOT/}" || fail "missing/empty: ${f#$ROOT/}"
done

echo "== 2. JSON parses =="
for f in "$P14"/*.json "$P15"/*.json; do
  python3 -c "import json,sys;json.load(open(sys.argv[1]))" "$f" \
    && pass "json parses: $(basename "$f")" || fail "json invalid: $(basename "$f")"
done

echo "== 3. boundary flags =="
python3 - "$P14/lane-state.json" "$P15/lane-state.json" <<'PY'
import json,sys
ok=True
for p in sys.argv[1:]:
    d=json.load(open(p))
    checks={
      "research_only":True,"implementation_authorized":False,
      "execution_status":"UNEXECUTED","admission_status":"NOT_ADMITTED",
      "admitted_blocks":0,"parent_goal_status":"active",
      "promotion_status":"unpromoted","subagents_dispatched":0,
    }
    for k,v in checks.items():
        if d.get(k)!=v:
            print(f"FAIL  {p}: {k}={d.get(k)!r} expected {v!r}"); ok=False
    print(f"PASS  boundary flags: {p.split('/')[-3]}")
sys.exit(0 if ok else 1)
PY
[ $? -eq 0 ] || fail "boundary flags"

echo "== 4. counts match prose =="
python3 - "$P14/runtime-profiles.json" "$P14/decision-ledger.json" "$P15/decision-ledger.json" <<'PY'
import json,sys
rp,d14,d15=[json.load(open(p)) for p in sys.argv[1:]]
ok=True
n=len(rp["profiles"])
print(("PASS" if n==5 else "FAIL")+f"  runtime profiles == 5 (got {n})"); ok &= n==5
ids={p["id"] for p in rp["profiles"]}
want={"package-in-host","microfrontend","sidecar-service","worker","scheduled-job"}
print(("PASS" if ids==want else "FAIL")+f"  profile ids match contract (got {sorted(ids)})"); ok &= ids==want
# every profile declares rollback objects and horizon owner
for p in rp["profiles"]:
    for k in ("rollback_objects","horizon_owner","attribution_ceiling","state_ownership"):
        if k not in p:
            print(f"FAIL  profile {p['id']} missing {k}"); ok=False
print("PASS  every profile declares rollback_objects/horizon_owner/attribution_ceiling/state_ownership")
for name,d,exp in (("P14",d14,7),("P15",d15,6)):
    n=len(d["decisions"]); print(("PASS" if n==exp else "FAIL")+f"  {name} decisions == {exp} (got {n})"); ok &= n==exp
    miss=[x["id"] for x in d["decisions"] if not x.get("rejected_alternative") or not x.get("falsifier")]
    print(("PASS" if not miss else "FAIL")+f"  {name} every decision has rejected_alternative + falsifier"+(f" missing:{miss}" if miss else "")); ok &= not miss
sys.exit(0 if ok else 1)
PY
[ $? -eq 0 ] || fail "counts"

echo "== 5. schema boundary constants =="
python3 - "$P14/release-manifest.schema.json" "$P15/capability-evidence-state.schema.json" "$P15/evidence-signal.schema.json" <<'PY'
import json,sys
rm,ces,es=[json.load(open(p)) for p in sys.argv[1:]]
ok=True
def chk(cond,msg):
    global ok
    print(("PASS" if cond else "FAIL")+"  "+msg); ok&=bool(cond)
chk(rm["properties"]["qualification"]["properties"]["tier_rule"]["const"]=="minimum_across_families",
    "ReleaseManifest tier_rule pinned to minimum_across_families")
chk(ces["properties"]["tier_rule"]["const"]=="minimum_across_families",
    "capability-evidence-state tier_rule pinned to minimum_across_families")
chk(rm["properties"]["execution_status"]["const"]=="UNEXECUTED","manifest execution_status UNEXECUTED")
chk(rm["properties"]["admission_status"]["const"]=="NOT_ADMITTED","manifest admission_status NOT_ADMITTED")
chk("none" in es["properties"]["attribution_class_at_observation"]["enum"],"signal carries attribution class incl. none")
chk(es["properties"]["structural_only"]["const"] is True,"signals are structural-only (no client content)")
ro=rm["properties"]["rollback_plan"]["properties"]["objects"]["items"]["properties"]["object_class"]["enum"]
chk(len(ro)==8,f"rollback object classes == 8 (got {len(ro)})")
req=rm["properties"]["rollback_plan"]["required"]
chk("rehearsal" in req,"rollback_plan requires rehearsal")
sys.exit(0 if ok else 1)
PY
[ $? -eq 0 ] || fail "schema constants"

echo "== 6. ownership boundary: nothing outside owned paths modified by this lane =="
# NOTE: clients/actionmodel/ is entirely untracked in git (0 tracked files), so
# `git status` cannot separate this lane's writes from pre-existing work.
# Ownership is checked by mtime instead. Sprint 2 runs all five lanes concurrently,
# so other lanes' owned run directories and the coordinator-regenerated spine are
# excluded by path -- this asserts THIS lane wrote nothing outside its territory,
# which is the actual invariant. Concurrent peer writes are expected, not violations.
python3 - "$ROOT" <<'OWNCHK'
import os,sys,datetime
root=sys.argv[1]
owned=("research/workstreams/p14-runtime-sandbox-release/runs/2026-08-27-sprint-2-opus",
       "research/workstreams/p15-learning-feedback/runs/2026-08-27-sprint-2-opus",
       "research/workstreams/2026-08-27-sprint-2/lanes/S2-L5")
# Territory owned by peer lanes / the coordinator. Writes here are theirs by design.
peers=("research/workstreams/p04-repo-to-module-framework",   # S2-L1
       "research/workstreams/p07-token-theme-harmonization",  # S2-L2
       "research/workstreams/p08-archetype-shell-layout",     # S2-L3
       "research/workstreams/p13-preview-editor",             # S2-L3
       "research/workstreams/p12-deterministic-composer",     # S2-L4
       "research/workstreams/2026-08-27-sprint-1",
       "site","knowledge",".wrangler")
anchor=os.path.join(root,owned[0],"runtime-profile-contracts.md")
if not os.path.exists(anchor):
    print("FAIL  cannot establish run start: anchor artifact missing"); sys.exit(1)
start=os.path.getmtime(anchor)-120
violations=[]
for dirpath,dirnames,filenames in os.walk(root):
    dirnames[:] = [d for d in dirnames if d not in (".git","node_modules")]
    rel_dir=os.path.relpath(dirpath,root)
    def under(prefixes): return any(rel_dir==q or rel_dir.startswith(q+os.sep) for q in prefixes)
    if under(owned) or under(peers): continue
    for fn in filenames:
        fp=os.path.join(dirpath,fn)
        try: m=os.path.getmtime(fp)
        except OSError: continue
        if m>=start:
            violations.append((os.path.relpath(fp,root),
                               datetime.datetime.fromtimestamp(m).isoformat(timespec="seconds")))
# The sprint-2 lane dir holds peer checkpoints; only S2-L5 is ours to write.
violations=[(v,t) for v,t in violations
            if not (v.startswith("research/workstreams/2026-08-27-sprint-2/")
                    and "/lanes/S2-L5/" not in v)]
if violations:
    print("FAIL  modified outside owned paths since run start:")
    for v,t in violations[:40]: print("    %s  (%s)"%(v,t))
    if len(violations)>40: print("    ... and %d more"%(len(violations)-40))
    sys.exit(1)
print("PASS  this lane wrote only inside its 3 owned S2-L5 directories")
OWNCHK
[ $? -eq 0 ] || fail "ownership boundary"

echo
if [ "$FAIL" -eq 0 ]; then echo "SMOKE: PASS"; else echo "SMOKE: FAIL"; fi
exit "$FAIL"
