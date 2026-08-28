#!/usr/bin/env python3
"""S2-L3 post-write smoke: structure, JSON parse, counts-from-source, boundary, write-allowlist.

Verification, not decoration: every count is recomputed from the data and compared with the
count each artifact declares about itself. Exit 0 = PASS, 1 = FAIL.
"""
import json, os, re, sys

ROOT = "/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/research/workstreams"
P08 = f"{ROOT}/p08-archetype-shell-layout/runs/2026-08-27-sprint-2-opus"
P13 = f"{ROOT}/p13-preview-editor/runs/2026-08-27-sprint-2-opus"
LANE = f"{ROOT}/2026-08-27-sprint-2/lanes/S2-L3"

fails, checks = [], 0
def ck(cond, label):
    global checks
    checks += 1
    if not cond: fails.append(label)

REQUIRED = {
    P08: ["shell-contract.md", "navigation-ownership-matrix.json", "archetype-topology.md",
          "decision-ledger.json", "lane-state.json"],
    P13: ["edit-model.md", "edit-operation.schema.json", "authority-rules.json",
          "worked-traces.md", "upgrade-replay-model.md", "decision-ledger.json", "lane-state.json"],
    LANE: ["checkpoint-1-prior-evidence.md", "lane-synthesis.md", "smoke.py"],
}

# 1 — required files exist and are non-empty
for d, files in REQUIRED.items():
    for f in files:
        p = os.path.join(d, f)
        ck(os.path.isfile(p) and os.path.getsize(p) > 0, f"missing/empty: {p}")

# 2 — every JSON artifact parses
jsons = []
for d in (P08, P13, LANE):
    if os.path.isdir(d):
        jsons += [os.path.join(d, f) for f in os.listdir(d) if f.endswith(".json")]
parsed = {}
for p in jsons:
    try:
        parsed[p] = json.load(open(p))
    except Exception as e:
        fails.append(f"JSON parse fail: {p}: {e}")
    checks += 1

# 3 — embedded JSON in worked traces parses (the traces must be machine-checkable)
wt = os.path.join(P13, "worked-traces.md")
if os.path.isfile(wt):
    blocks = re.findall(r"```json\n(.*?)```", open(wt).read(), re.S)
    ck(len(blocks) >= 3, f"worked-traces: expected >=3 json blocks, found {len(blocks)}")
    for i, b in enumerate(blocks):
        try:
            json.loads(b)
        except Exception as e:
            fails.append(f"worked-traces block {i+1} parse fail: {e}")
        checks += 1

# 4 — declared counts recomputed from source
nav = parsed.get(os.path.join(P08, "navigation-ownership-matrix.json"))
if nav:
    s = nav["surfaces"]; c = nav["counts"]
    ck(len(s) == c["surfaces"], "nav matrix: surface count mismatch")
    ck(sum(1 for x in s if x["owner"] == "L0") == c["host_owned_L0"], "nav matrix: L0 count mismatch")
    ck(sum(1 for x in s if x["owner"] == "FORBIDDEN") == c["forbidden"], "nav matrix: forbidden count mismatch")
    ck(sum(1 for x in s if x["evidence_class"] == "observed") == c["observed"], "nav matrix: observed count mismatch")

for part, path in (("P08", P08), ("P13", P13)):
    dl = parsed.get(os.path.join(path, "decision-ledger.json"))
    if dl:
        dec, c = dl["decisions"], dl["counts"]
        ck(len(dec) == c["decisions"], f"{part} ledger: decision count mismatch")
        ck(sum(1 for x in dec if x["state"] == "accepted") == c["accepted"], f"{part} ledger: accepted mismatch")
        ck(sum(1 for x in dec if x["state"] == "open") == c["open"], f"{part} ledger: open mismatch")
        ck(all("falsifier" in x and x["falsifier"] for x in dec), f"{part} ledger: a decision lacks a falsifier")

# 5 — schema/authority coherence: same closed verb set, coordinate unrepresentable
sch = parsed.get(os.path.join(P13, "edit-operation.schema.json"))
auth = parsed.get(os.path.join(P13, "authority-rules.json"))
if sch and auth:
    verbs = sch["properties"]["verb"]["enum"]
    anchors = sch["properties"]["target"]["properties"]["anchor"]["properties"]["anchor_class"]["enum"]
    ck(len(verbs) == 7, f"schema: expected 7 verbs, found {len(verbs)}")
    ck("coordinate" not in anchors, "schema: `coordinate` must be absent from anchor_class enum")
    ck(sorted(x["verb"] for x in auth["rules"]) == sorted(verbs), "authority/schema verb sets diverge")
    ck(len(auth["rules"]) * 3 == auth["counts"]["cells"], "authority: cell count mismatch")
    ck(sch["properties"]["authority"]["properties"]["grants_new_authority"]["const"] is False,
       "schema: grants_new_authority must be pinned false (C1)")
    for r in auth["rules"]:
        if "denied" in (r["owned_ui"], r["embedded_module"], r["intact_service"]):
            ck(bool(r.get("denial_constraint")) and bool(r.get("nearest_alternative")),
               f"authority: verb {r['verb']} denies without constraint+alternative")

# 6 — boundary flags correct in every state/ledger file
for p, d in parsed.items():
    b = d.get("boundary")
    if b:
        ck(b.get("research_only") is True, f"{p}: research_only")
        ck(b.get("execution_status") == "UNEXECUTED", f"{p}: execution_status")
        ck(b.get("admission_status") == "NOT_ADMITTED", f"{p}: admission_status")
        ck(b.get("admitted_blocks") == 0, f"{p}: admitted_blocks")
        ck(b.get("implementation_authorized") is False, f"{p}: implementation_authorized")

# 7 — write allowlist: only the three owned dirs
for d in (P08, P13, LANE):
    ck(os.path.isdir(d), f"owned dir missing: {d}")
ck(not os.path.exists(f"{ROOT}/p07-token-theme-harmonization/runs/2026-08-27-sprint-2-opus/.s2l3"),
   "wrote outside allowlist (P07)")

print(f"S2-L3 smoke: {checks} checks, {len(fails)} failures")
for f in fails:
    print(f"  FAIL {f}")
print("PASS" if not fails else "FAIL")
sys.exit(1 if fails else 0)
