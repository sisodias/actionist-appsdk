#!/usr/bin/env python3
"""P04 S2-L1 post-write smoke.

Structural, count, boundary and CROSS-ARTIFACT consistency checks over this run
directory only. Read-only. Exit 0 = pass, 1 = fail.

The cross-artifact checks are the point: any lane can write seven internally
consistent files that disagree with each other. These assert that the surgery
IDs cited in the traces exist in the taxonomy, that the shapes the taxonomy
references exist in the contract enum, and that every boundary flag agrees
across all three machine-readable artifacts.
"""
import json, os, re, sys

FAIL = []
PASS = []

def check(name, cond, detail=""):
    (PASS if cond else FAIL).append(f"{name}{(' — ' + detail) if detail else ''}")

D = os.path.dirname(os.path.abspath(__file__))
p = lambda f: os.path.join(D, f)

# ---------- 1. presence ----------
REQUIRED = ["repo-to-module-framework.md", "module-contract-family.json",
            "normalization-surgery-taxonomy.jsonl", "worked-traces.md",
            "decision-ledger.json", "lane-state.json", "smoke.py"]
for f in REQUIRED:
    check(f"present:{f}", os.path.isfile(p(f)))

# ---------- 2. parse ----------
try:
    fam = json.load(open(p("module-contract-family.json"))); check("parse:family", True)
except Exception as e:
    fam = {}; check("parse:family", False, str(e))
try:
    led = json.load(open(p("decision-ledger.json"))); check("parse:ledger", True)
except Exception as e:
    led = {}; check("parse:ledger", False, str(e))
try:
    lane = json.load(open(p("lane-state.json"))); check("parse:lane", True)
except Exception as e:
    lane = {}; check("parse:lane", False, str(e))

rows, bad = [], []
for i, line in enumerate(open(p("normalization-surgery-taxonomy.jsonl")), 1):
    if not line.strip(): continue
    try: rows.append(json.loads(line))
    except Exception as e: bad.append(f"L{i}:{e}")
check("parse:taxonomy_jsonl", not bad, "; ".join(bad))

fw = open(p("repo-to-module-framework.md")).read()
wt = open(p("worked-traces.md")).read()

# ---------- 3. contract family structure ----------
SEVEN = ["CapabilityContract", "PackagingProfile", "HostContract", "BindingPlan",
         "QualificationDossier", "RegistryRecord", "ReleaseManifest"]
recs = fam.get("records", {})
check("family:seven_records", len(recs) == 7, f"got {len(recs)}")
for r in SEVEN:
    check(f"family:has:{r}", r in recs)
    if r in recs:
        check(f"family:{r}:has_owner", "owner_domain" in recs[r])
        check(f"family:{r}:has_mutability", "mutability_rule" in recs[r])
check("family:composition_rules_7", len(fam.get("composition_rules", {})) == 7)
check("family:defects_fixed_5", len(fam.get("inherited_defects_fixed", [])) == 5)

# separation invariant: semantic record must not carry proof/rights/runtime fields
cap_props = set(recs.get("CapabilityContract", {}).get("properties", {}))
leaked = cap_props & {"evidence_receipts", "receipts", "rights_state", "source_identity",
                      "runtime_profile", "artifact_digest", "admission_scope", "rollback_plan"}
check("family:capability_has_no_leaked_concerns", not leaked, f"leaked: {sorted(leaked)}")

# X-1 fix: id pattern must not hardcode major 1
capid = recs.get("CapabilityContract", {}).get("properties", {}).get("capability_id", {}).get("pattern", "")
check("family:X-1_fixed", "@1\\." not in capid, capid)
# X-2 fix: dependency edge restored
check("family:X-2_fixed", "requires_capabilities" in cap_props)

# ---------- 4. taxonomy ----------
check("taxonomy:28_rows", len(rows) == 28, f"got {len(rows)}")
ids = [r["surgery_id"] for r in rows]
check("taxonomy:ids_unique", len(set(ids)) == len(ids))
REQ_FIELDS = {"surgery_id","category","name","determinism","mechanism","applies_to_shapes",
              "cost_class","failure_mode","evidence","judgment_required","falsifier"}
miss = [r["surgery_id"] for r in rows if REQ_FIELDS - set(r)]
check("taxonomy:all_required_fields", not miss, f"incomplete: {miss}")

REQ_CATS = {"branding","onboarding","identity","tenant","settings","navigation",
            "data_ownership","migrations","events","connectors","token_mapping",
            "runtime","upgrade","rollback"}
cats = {r["category"] for r in rows}
check("taxonomy:14_required_categories", REQ_CATS <= cats, f"missing: {sorted(REQ_CATS - cats)}")
check("taxonomy:determinism_enum", all(r["determinism"] in {"DET","SEMI","HUM"} for r in rows))
check("taxonomy:cost_enum", all(r["cost_class"] in {"cosmetic","boundary","architectural"} for r in rows))

# counts quoted in the framework prose must match the data
det = sum(1 for r in rows if r["determinism"] == "DET")
semi = sum(1 for r in rows if r["determinism"] == "SEMI")
hum = sum(1 for r in rows if r["determinism"] == "HUM")
cos = sum(1 for r in rows if r["cost_class"] == "cosmetic")
bnd = sum(1 for r in rows if r["cost_class"] == "boundary")
arch = sum(1 for r in rows if r["cost_class"] == "architectural")
check("prose_matches_data:DET", f"| `DET` fully deterministic | {det} |" in fw, f"data={det}")
check("prose_matches_data:SEMI", f"| `SEMI` mechanically computable, policy-thresholded | {semi} |" in fw, f"data={semi}")
check("prose_matches_data:HUM", f"| `HUM` irreducibly judgment | {hum} |" in fw, f"data={hum}")
check("prose_matches_data:cosmetic", f"| `cosmetic` | {cos} |" in fw, f"data={cos}")
check("prose_matches_data:boundary", f"| `boundary` | {bnd} |" in fw, f"data={bnd}")
check("prose_matches_data:architectural", f"| `architectural` | {arch} |" in fw, f"data={arch}")
check("prose_matches_data:total", f"**{len(rows)} surgeries across {len(cats)} categories**" in fw)
check("prose_matches_data:cosmetic_claim", f"Only {cos} of {len(rows)} surgeries are cosmetic" in fw)

# exactly one unrecoverable and one highest-risk surgery
unrec = [r["surgery_id"] for r in rows if r.get("recoverable") is False]
check("taxonomy:one_unrecoverable", unrec == ["NS-TENANT-01"], str(unrec))
risky = [r["surgery_id"] for r in rows if r.get("risk") == "HIGHEST_UNKNOWN_IN_TAXONOMY"]
check("taxonomy:one_highest_risk", risky == ["NS-SETTINGS-01"], str(risky))

# ---------- 5. CROSS-ARTIFACT: shapes referenced must exist in the contract enum ----------
shape_enum = set(recs.get("PackagingProfile", {}).get("properties", {})
                    .get("reuse_shape", {}).get("enum", []))
check("family:reuse_shape_enum_present", bool(shape_enum))
used = set()
for r in rows:
    used |= set(r.get("applies_to_shapes", [])) | set(r.get("not_applicable_to", []))
unknown = used - shape_enum
check("xref:taxonomy_shapes_in_contract_enum", not unknown, f"unknown shapes: {sorted(unknown)}")

# ---------- 6. CROSS-ARTIFACT: surgery IDs cited in traces must exist ----------
cited = set(re.findall(r"NS-[A-Z]+-\d{2}", wt))
missing_cited = cited - set(ids)
check("xref:trace_surgeries_exist", not missing_cited, f"undefined: {sorted(missing_cited)}")
check("xref:traces_cite_surgeries", len(cited) >= 15, f"only {len(cited)} cited")

# ---------- 7. worked traces: 3 traces x 14 concerns ----------
check("traces:three", len(re.findall(r"^## Trace ", wt, re.M)) == 3)
CONCERNS = ["Branding","Onboarding","Identity","Tenant","Settings","Navigation",
            "Data ownership","Migrations","Events","Connectors","Token mapping",
            "Runtime","Upgrade","Rollback"]
for c in CONCERNS:
    n = len(re.findall(r"^\| " + re.escape(c) + r" \|", wt, re.M))
    check(f"traces:concern:{c}", n == 3, f"rows={n}")

# ---------- 8. ledger ----------
check("ledger:15_decisions", len(led.get("decisions", [])) == 15, str(len(led.get("decisions", []))))
dids = [d["id"] for d in led.get("decisions", [])]
check("ledger:ids_unique", len(set(dids)) == len(dids))
check("ledger:all_have_state", all("state" in d for d in led.get("decisions", [])))
check("ledger:contradictions_recorded", len(led.get("contradictions_carried", [])) >= 4)
check("ledger:unknowns_preserved", len(led.get("unknowns_preserved", [])) >= 5)
# unknowns must not be silently promoted
classes = {u.get("class") for u in led.get("unknowns_preserved", [])}
check("ledger:unknowns_stay_unknown", classes <= {"U", "BLOCKED"}, str(classes))

# ---------- 9. BOUNDARY: identical across all three machine-readable artifacts ----------
MUST_FALSE = ["implementation_authorized", "research_only"]
b_lane, b_led = lane.get("boundary", {}), led.get("boundary", {})
check("boundary:research_only:lane", b_lane.get("research_only") is True)
check("boundary:research_only:ledger", b_led.get("research_only") is True)
check("boundary:impl_unauthorized:lane", b_lane.get("implementation_authorized") is False)
check("boundary:impl_unauthorized:ledger", b_led.get("implementation_authorized") is False)
check("boundary:UNEXECUTED:lane", b_lane.get("execution_status") == "UNEXECUTED")
check("boundary:UNEXECUTED:ledger", b_led.get("execution_status") == "UNEXECUTED")
check("boundary:NOT_ADMITTED:lane", b_lane.get("admission_status") == "NOT_ADMITTED")
check("boundary:NOT_ADMITTED:ledger", b_led.get("admission_status") == "NOT_ADMITTED")
check("boundary:zero_blocks:lane", b_lane.get("admitted_blocks") == 0)
check("boundary:zero_blocks:ledger", b_led.get("admitted_blocks") == 0)
for flag in ["source_cloned","source_executed","build_run","license_scan_run",
             "deployment_run","client_data_accessed","sprint_1_packets_modified",
             "other_lane_directories_written"]:
    check(f"boundary:{flag}_false", b_lane.get(flag) is False)
check("boundary:no_foreign_writes", b_lane.get("files_written_outside_own_run_dir") == 0)
check("boundary:in_framework_md", "admitted_modules: 0" in fw and "research_only: true" in fw)

# ---------- 10. OWNERSHIP: this lane wrote only its own run directory ----------
here = set(os.listdir(D))
check("ownership:no_unexpected_files", here <= set(REQUIRED) | {"__pycache__"},
      f"unexpected: {sorted(here - set(REQUIRED) - {'__pycache__'})}")
check("ownership:dir_is_p04_run", D.endswith("p04-repo-to-module-framework/runs/2026-08-27-sprint-2-opus"), D)

# ---------- 11. no unsupported cost claim ----------
check("honesty:no_1_2_percent_claim",
      not re.search(r"adaptation is (only )?1[-–]2\s?%", fw, re.I))
check("honesty:A07_still_unknown", "A07 stays `unknown`" in fw)
check("honesty:settings_not_promoted", "research bet, not an engineering estimate" in fw)

# ---------- report ----------
print(f"PASS {len(PASS)}   FAIL {len(FAIL)}")
if FAIL:
    print("\nFAILURES:")
    for f in FAIL: print("  ✗", f)
    sys.exit(1)
print("\nAll structural, count, cross-artifact, boundary and ownership checks passed.")
sys.exit(0)
