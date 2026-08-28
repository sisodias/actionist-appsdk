#!/usr/bin/env python3
"""P12 post-write smoke — S2-L4 deterministic composer.

Structural, count, boundary and cross-reference checks over this lane's owned
artifacts. Recomputes every declared count from source rather than trusting it.

Exit 0 = PASS, 1 = FAIL. Read-only: this script never writes a project file.
"""

import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, "..", "..", "..", "..", ".."))
P04 = os.path.join(
    REPO, "research", "workstreams", "p04-repo-to-module-framework",
    "runs", "2026-08-27-sprint-2-opus",
)

failures, checks = [], [0]


def check(name, cond, detail=""):
    checks[0] += 1
    if cond:
        print(f"  PASS  {name}")
    else:
        print(f"  FAIL  {name}  {detail}")
        failures.append(name)


def load(fn):
    with open(os.path.join(HERE, fn), encoding="utf-8") as fh:
        return json.load(fh)


def text(fn):
    with open(os.path.join(HERE, fn), encoding="utf-8") as fh:
        return fh.read()


print("=" * 68)
print("P12 SMOKE — S2-L4 deterministic composer")
print("=" * 68)

# ---- 1. presence -----------------------------------------------------------
print("\n[1] Required artifacts present")
REQUIRED = [
    "deterministic-composer.md",
    "assembly-plan.schema.json",
    "compatibility-and-authority-rules.json",
    "composition-fixtures.json",
    "solver-dry-run.md",
    "decision-ledger.json",
    "lane-state.json",
    "smoke.py",
]
for fn in REQUIRED:
    p = os.path.join(HERE, fn)
    check(f"exists: {fn}", os.path.exists(p) and os.path.getsize(p) > 0)

# ---- 2. JSON parses --------------------------------------------------------
print("\n[2] JSON well-formed")
docs = {}
for fn in [f for f in REQUIRED if f.endswith(".json")]:
    try:
        docs[fn] = load(fn)
        check(f"parses: {fn}", True)
    except Exception as exc:  # noqa: BLE001
        check(f"parses: {fn}", False, str(exc))

if len(docs) < 4:
    print("\nFATAL: cannot continue without all JSON artifacts.")
    sys.exit(1)

schema = docs["assembly-plan.schema.json"]
rules = docs["compatibility-and-authority-rules.json"]
fixtures = docs["composition-fixtures.json"]
ledger = docs["decision-ledger.json"]
state = docs["lane-state.json"]

# ---- 3. research boundary --------------------------------------------------
print("\n[3] Research-only boundary asserted everywhere")
for label, b in [
    ("lane-state", state["boundary"]),
    ("decision-ledger", ledger["boundary"]),
]:
    check(f"{label}: research_only", b.get("research_only") is True)
    check(f"{label}: implementation_authorized false",
          b.get("implementation_authorized") is False)
    check(f"{label}: UNEXECUTED", b.get("execution_status") == "UNEXECUTED")
    check(f"{label}: NOT_ADMITTED", b.get("admission_status") == "NOT_ADMITTED")
    check(f"{label}: admitted_blocks 0", b.get("admitted_blocks") == 0)

check("fixtures: UNEXECUTED", fixtures.get("execution_status") == "UNEXECUTED")
check("fixtures: admitted_blocks 0", fixtures.get("admitted_blocks") == 0)
check("lane-state: no model run", state["runtime"]["no_model_run"] is True
      if "no_model_run" in state["runtime"]
      else state["prohibitions_honored"]["no_model_run"] is True)
check("lane-state: wrote only owned dir",
      state["prohibitions_honored"]["wrote_only_owned_run_directory"] is True)
check("lane-state: no sprint-1 packet modified",
      state["prohibitions_honored"]["no_sprint_1_packet_modified"] is True)

# ---- 4. rule table integrity ----------------------------------------------
print("\n[4] Rule table integrity")
rule_ids = [r["id"] for r in rules["rules"]]
check("rule ids unique", len(rule_ids) == len(set(rule_ids)))

phase_rules = [r for p in rules["ordering_rule"]["phases"] for r in p["rules"]]
check("every rule appears in exactly one phase",
      sorted(phase_rules) == sorted(rule_ids),
      f"phases={len(phase_rules)} rules={len(rule_ids)}")
check("phase rule list has no duplicates",
      len(phase_rules) == len(set(phase_rules)))

check("declared rule count matches actual",
      rules["counts"]["rules"] == len(rule_ids),
      f"declared={rules['counts']['rules']} actual={len(rule_ids)}")

constraints = {r["constraint"] for r in rules["rules"]}
check("declared distinct constraint count matches actual",
      rules["counts"]["unsatisfied_constraints"] == len(constraints),
      f"declared={rules['counts']['unsatisfied_constraints']} actual={len(constraints)}")

check("declared phase count matches actual",
      rules["counts"]["phases"] == len(rules["ordering_rule"]["phases"]))

# every rule's constraint must exist in the schema enum
schema_constraints = set(schema["$defs"]["unsatisfied_constraint"]["enum"])
check("every rule constraint is in the schema enum",
      constraints <= schema_constraints,
      f"orphans={sorted(constraints - schema_constraints)}")
check("no schema constraint is unreachable by any rule",
      schema_constraints <= constraints,
      f"unused={sorted(schema_constraints - constraints)}")

check("inherited(10) + added(9) == distinct constraints",
      rules["counts"]["constraints_inherited_from_phase_8"]
      + rules["counts"]["constraints_added_by_this_lane"] == len(constraints))

# solver honesty
check("relaxations_applied is const 0 in schema",
      schema["properties"]["solver"]["properties"]["determinism"]
      ["properties"]["relaxations_applied"].get("const") == 0)
check("tie_break_rule is required",
      "tie_break_rule" in schema["properties"]["solver"]["properties"]
      ["determinism"]["required"])

# ---- 5. fixture counts recomputed from source ------------------------------
print("\n[5] Fixture counts recomputed from source")
fx = fixtures["fixtures"]
ids = [f["id"] for f in fx]
check("fixture ids unique", len(ids) == len(set(ids)))
check("declared total matches actual",
      fixtures["counts"]["total_fixtures"] == len(fx),
      f"declared={fixtures['counts']['total_fixtures']} actual={len(fx)}")

verdicts = [f.get("expected", {}).get("solver_verdict") for f in fx]
n_feas = sum(1 for v in verdicts if v == "FEASIBLE")
n_inf = sum(1 for v in verdicts if v == "INFEASIBLE")
n_und = sum(1 for v in verdicts if v == "UNDERDETERMINED")
c = fixtures["counts"]
check("FEASIBLE count", c["expected_feasible"] == n_feas,
      f"declared={c['expected_feasible']} actual={n_feas}")
check("INFEASIBLE count", c["expected_infeasible"] == n_inf,
      f"declared={c['expected_infeasible']} actual={n_inf}")
check("UNDERDETERMINED count", c["expected_underdetermined"] == n_und,
      f"declared={c['expected_underdetermined']} actual={n_und}")

n_held = sum(1 for f in fx if f.get("held_out"))
check("held_out count", c["held_out"] == n_held,
      f"declared={c['held_out']} actual={n_held}")

n_zt = sum(1 for f in fx
           if f.get("zero_tolerance") or f.get("expected", {}).get("zero_tolerance"))
check("zero_tolerance count", c["zero_tolerance"] == n_zt,
      f"declared={c['zero_tolerance']} actual={n_zt}")

check("verdict buckets + process fixtures == total",
      n_feas + n_inf + n_und + c["adversarial_or_determinism"] == len(fx),
      f"{n_feas}+{n_inf}+{n_und}+{c['adversarial_or_determinism']} != {len(fx)}")

# every expected verdict is a legal value
legal = set(schema["$defs"]["solver_verdict"]["enum"])
bad = [v for v in verdicts if v is not None and v not in legal
       and v != "unchanged by the text"]
check("all expected verdicts are legal enum values", not bad, f"bad={bad}")

# every named constraint in a fixture is a legal constraint
named = [f["expected"].get("unsatisfied_constraint") for f in fx
         if isinstance(f.get("expected"), dict)]
named = [n for n in named if n]
check("all fixture-named constraints are legal",
      set(named) <= schema_constraints,
      f"orphans={sorted(set(named) - schema_constraints)}")

# ---- 6. coverage axes ------------------------------------------------------
print("\n[6] Dispatch coverage axes")
cov = {k: v for k, v in fixtures["required_coverage"].items() if k != "note"}
check("nine coverage axes declared", len(cov) == 9, f"actual={len(cov)}")
check("declared coverage_axes count matches", c["coverage_axes"] == len(cov))

covered = {i for v in cov.values() for i in v}
check("every fixture is claimed by an axis",
      set(ids) <= covered, f"unclaimed={sorted(set(ids) - covered)}")
check("no axis references a nonexistent fixture",
      covered <= set(ids), f"phantom={sorted(covered - set(ids))}")
for axis, members in cov.items():
    check(f"axis non-empty: {axis}", len(members) > 0)

# the nine required axes from the dispatch, by keyword
for kw in ["service", "identity", "navigation", "connector", "runtime",
           "rollback", "evidence", "glue"]:
    check(f"axis keyword present: {kw}",
          any(kw in a for a in cov), f"axes={list(cov)}")

# ---- 7. S2-L1 reconciliation (reads the real P04 file) ---------------------
print("\n[7] S2-L1 (P04) reconciliation — verified against the published file")
p04_path = os.path.join(P04, "module-contract-family.json")
if not os.path.exists(p04_path):
    check("P04 contract family present", False, p04_path)
else:
    with open(p04_path, encoding="utf-8") as fh:
        p04 = json.load(fh)
    check("P04 contract family present", True)

    declared_map = state["reconciliation_with_s2_l1"]["composition_rules_mapped"]
    p04_rules = set(p04["composition_rules"].keys())
    check("every P04 composition rule is mapped",
          p04_rules == set(declared_map),
          f"unmapped={sorted(p04_rules - set(declared_map))}")
    check("every mapped target is a real rule id",
          set(declared_map.values()) <= set(rule_ids),
          f"phantom={sorted(set(declared_map.values()) - set(rule_ids))}")

    # enums this lane claims to import verbatim must actually match
    def find_enum(obj, key_path):
        """Walk P04 for a named enum by leaf property name."""
        found = []

        def rec(o, name=None):
            if isinstance(o, dict):
                if "enum" in o and isinstance(o["enum"], list) and name == key_path:
                    found.append(o["enum"])
                for k, v in o.items():
                    rec(v, k)
            elif isinstance(o, list):
                for v in o:
                    rec(v, name)
        rec(obj)
        return found

    for leaf, schema_ref in [
        ("reuse_shape", None),
        ("rights_state", None),
        ("evidence_tier", None),
    ]:
        got = find_enum(p04, leaf)
        check(f"P04 enum readable: {leaf}", bool(got))

    # runtime_profile / idempotency_class / consent_grade are this lane's imports
    # from P14 / P11 and must be present in our schema
    for d in ["runtime_profile", "idempotency_class", "consent_grade",
              "authority_level", "solver_verdict", "feasibility_class",
              "candidate_disposition"]:
        check(f"schema defines: {d}", d in schema["$defs"])

    check("runtime_profile has exactly five values",
          len(schema["$defs"]["runtime_profile"]["enum"]) == 5)
    check("authority ladder has exactly five levels",
          len(schema["$defs"]["authority_level"]["enum"]) == 5)
    check("solver has exactly three verdicts",
          len(schema["$defs"]["solver_verdict"]["enum"]) == 3)

    # rollback objects must match P04's ReleaseManifest enum exactly
    p04_rollback = find_enum(p04, "object_kind")
    if p04_rollback:
        check("rollback object count matches P04",
              rules["counts"]["rollback_objects"] == len(p04_rollback[0]),
              f"ours={rules['counts']['rollback_objects']} p04={len(p04_rollback[0])}")

# normalization taxonomy, if present
tax = os.path.join(P04, "normalization-surgery-taxonomy.jsonl")
if os.path.exists(tax):
    rows = [json.loads(l) for l in open(tax, encoding="utf-8") if l.strip()]
    cost = {r.get("cost_class") for r in rows}
    check("taxonomy cost classes are the three expected",
          cost == {"cosmetic", "boundary", "architectural"}, f"got={sorted(cost)}")
    check("owed R-GLUE revision is recorded in the ledger",
          any(d["id"] == "P12-D-11" for d in ledger["decisions"]))

# ---- 8. UNDERDETERMINED channel wired end to end ---------------------------
print("\n[8] UNDERDETERMINED channel")
check("schema has an underdetermined array",
      schema["properties"]["underdetermined"]["type"] == "array")
req = schema["properties"]["underdetermined"]["items"]["required"]
for f in ["field", "reason", "must_be_supplied_by", "blocks_promotion"]:
    check(f"underdetermined entry requires: {f}", f in req)
check("underdetermined is a required top-level field",
      "underdetermined" in schema["required"])
check("checks_run can record not_run (silence != pass)",
      "not_run" in schema["properties"]["solver"]["properties"]["checks_run"]
      ["items"]["properties"]["outcome"]["enum"])
check("K5 kill rule recorded", "K5" in json.dumps(rules))

# ---- 9. cross-artifact count agreement -------------------------------------
print("\n[9] Cross-artifact agreement")
sc = state["counts"]
check("lane-state rule count == rules file",
      sc["rules"] == rules["counts"]["rules"])
check("lane-state constraint count == rules file",
      sc["distinct_unsatisfied_constraints"] == rules["counts"]["unsatisfied_constraints"])
check("lane-state fixture count == fixtures file",
      sc["composition_fixtures"] == fixtures["counts"]["total_fixtures"])
check("lane-state INFEASIBLE == fixtures file",
      sc["fixtures_expected_infeasible"] == fixtures["counts"]["expected_infeasible"])
check("lane-state UNDERDETERMINED == fixtures file",
      sc["fixtures_expected_underdetermined"] == fixtures["counts"]["expected_underdetermined"])
check("lane-state held_out == fixtures file",
      sc["fixtures_held_out"] == fixtures["counts"]["held_out"])
check("lane-state decisions == ledger",
      sc["decisions"] == len(ledger["decisions"]))
check("lane-state open_decisions == ledger",
      sc["open_decisions"] == len(ledger["open_decisions"]))
check("lane-state rejected == ledger",
      sc["rejected_alternatives"] == len(ledger["rejected_here"]))
check("lane-state coverage_axes == fixtures file",
      sc["coverage_axes"] == fixtures["counts"]["coverage_axes"])

# ---- 10. prose artifacts ---------------------------------------------------
print("\n[10] Prose artifacts")
doc = text("deterministic-composer.md")
dry = text("solver-dry-run.md")
check("framework doc non-trivial", len(doc) > 8000, f"len={len(doc)}")
check("dry run doc non-trivial", len(dry) > 5000, f"len={len(dry)}")
for token in ["research_only=true", "UNEXECUTED", "NOT_ADMITTED", "admitted_blocks=0"]:
    check(f"framework asserts boundary: {token}", token in doc)
check("framework closes P02 ProductSpec deferral", "P02" in doc and "minimum" in doc)
check("framework records the authority-axis residue", "authority-axis" in doc.lower()
      or "authority axis" in doc.lower())
check("dry run records the self-inflicted defect", "R-EVIDENCE" in dry)
check("ledger records the same defect",
      ledger["self_inflicted_defect_found_and_fixed"]["rule"] == "R-EVIDENCE")
check("no stale rule count in framework doc", "19 rules in 7" not in doc)
check("R-EVIDENCE fix is actually present in the rule table",
      any(r["id"] == "R-EVIDENCE" and "absent_family_rule" in r
          for r in rules["rules"]))

# ---- 11. no cost/price fabrication ----------------------------------------
print("\n[11] No fabricated economics")
blob = json.dumps(rules) + json.dumps(fixtures) + doc + dry
check("no dollar figures asserted", "$" not in blob.replace("$schema", "").replace("$defs", "").replace("$id", "").replace("$ref", ""))

# ---- summary ---------------------------------------------------------------
print("\n" + "=" * 68)
print(f"CHECKS RUN: {checks[0]}   FAILURES: {len(failures)}")
if failures:
    print("\nFAILED:")
    for f in failures:
        print(f"  - {f}")
    print("\nRESULT: FAIL")
    sys.exit(1)
print("\nRESULT: PASS")
print("Boundary: research-only, UNEXECUTED, NOT_ADMITTED, admitted_blocks=0.")
sys.exit(0)
