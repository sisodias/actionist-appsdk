#!/usr/bin/env python3
"""
P07 S2-L2 post-write smoke.

Structural, link, count and boundary checks over the owned run directory, plus
POSITIVE and NEGATIVE schema fixtures.

The negative fixtures are the point. A schema that only accepts valid documents
proves nothing; these assert that the schema actively REJECTS the specific
defects P07 exists to prevent:

  N1  :root-scoped donor binding            (I4 namespace collision)
  N2  aliased encoding mismatch             (I5 -- parses, renders, is wrong)
  N3  cross-origin frame claiming parity    (I6 -- structurally impossible)
  N4  cross-origin topology on a B3 binding (physics violation)
  N5  B4 declaring stable upgrade fragility (selector coupling cannot be stable)
  N6  'observed' evidence with no receipt   (evidence discipline)
  N7  B2 binding with no retokenization     (required record absent)

Exit 0 = pass, 1 = fail. Research-only; nothing is executed, built or deployed.
"""
import json
import sys
import pathlib

RUN = pathlib.Path(__file__).resolve().parent
failures = []
checks = 0


def check(label, condition, detail=""):
    global checks
    checks += 1
    if not condition:
        failures.append(f"{label}: {detail}")
    return condition


# ---------------------------------------------------------------- 1. presence
REQUIRED = [
    "design-harmonization-framework.md",
    "semantic-token-contract.json",
    "donor-token-binding.schema.json",
    "cross-donor-experiments.md",
    "decision-ledger.json",
    "lane-state.json",
    "smoke.py",
]
for name in REQUIRED:
    p = RUN / name
    check(f"present:{name}", p.exists(), "missing")
    if p.exists():
        check(f"nonempty:{name}", p.stat().st_size > 0, "empty file")

# ------------------------------------------------------------------ 2. parses
docs = {}
for name in REQUIRED:
    if name.endswith(".json") and (RUN / name).exists():
        try:
            docs[name] = json.loads((RUN / name).read_text())
            check(f"json:{name}", True)
        except json.JSONDecodeError as e:
            check(f"json:{name}", False, str(e))

contract = docs.get("semantic-token-contract.json", {})
schema = docs.get("donor-token-binding.schema.json", {})
ledger = docs.get("decision-ledger.json", {})
lane = docs.get("lane-state.json", {})

# --------------------------------------------------- 3. semantic contract shape
if contract:
    fams = contract.get("role_families", {})
    check("contract:families", len(fams) >= 15, f"only {len(fams)}")
    check(
        "contract:donor_bindable_declared",
        all("donor_bindable" in v for v in fams.values()),
        "a family omits donor_bindable",
    )
    unbindable = [k for k, v in fams.items() if not v.get("donor_bindable")]
    check(
        "contract:unbindable_have_reason",
        all("donor_bindable_reason" in fams[k] for k in unbindable),
        "a non-bindable family lacks a stated reason",
    )
    check("contract:nav_not_bindable", "nav" in unbindable, "nav must be host-owned")
    check("contract:shell_not_bindable", "shell" in unbindable, "shell geometry must be host-owned")
    check(
        "contract:root_policy",
        ":root" in contract.get("namespace", {}).get("root_policy", ""),
        "root policy not stated",
    )
    check(
        "contract:inversion_forbidden",
        "FORBIDDEN" in contract.get("mode_policy", {}).get("inversion_rule", ""),
        "gate F inversion rule not encoded",
    )
    added = contract.get("gates", {}).get("added_by_p07", {})
    check("contract:gates_KLMN", set(added) == {"K", "L", "M", "N"}, f"got {sorted(added)}")
    # every unresolved item carries an explicit state
    for u in contract.get("unresolved", []):
        check(
            f"contract:unresolved_state:{u.get('id')}",
            u.get("state") in {"unmeasured", "unknown", "hypothesis"},
            f"bad state {u.get('state')!r}",
        )

# --------------------------------------------------------- 4. ledger discipline
if ledger:
    decisions = ledger.get("decisions", [])
    check("ledger:count", len(decisions) >= 10, f"only {len(decisions)}")
    for d in decisions:
        check(f"ledger:falsifier:{d.get('id')}", bool(d.get("falsifier")), "no falsifier")
        check(f"ledger:evidence:{d.get('id')}", bool(d.get("evidence")), "no evidence")
        check(f"ledger:options:{d.get('id')}", len(d.get("options_considered", [])) >= 2,
              "fewer than two options considered")
    ids = [d.get("id") for d in decisions]
    check("ledger:unique_ids", len(ids) == len(set(ids)), "duplicate decision id")
    check("ledger:convergence_qs", len(ledger.get("open_questions_for_convergence", [])) >= 4,
          "too few convergence edges")

# -------------------------------------------------------- 5. boundary assertions
if lane:
    for key, want in [
        ("research_only", True),
        ("implementation_authorized", False),
        ("execution_status", "UNEXECUTED"),
        ("admission_status", "NOT_ADMITTED"),
        ("admitted_blocks", 0),
        ("parent_goal_status", "active"),
    ]:
        check(f"boundary:{key}", lane.get(key) == want, f"got {lane.get(key)!r}, want {want!r}")

# ---------------------------------------------- 6. sampled-rate honesty check
# Any occurrence of the inherited sampled rates must appear with its denominator.
SAMPLED_MARKERS = ["86.7", "91.7", "55/60"]
for name in ("design-harmonization-framework.md", "cross-donor-experiments.md",
             "semantic-token-contract.json", "decision-ledger.json"):
    p = RUN / name
    if not p.exists():
        continue
    text = p.read_text()
    for marker in SAMPLED_MARKERS:
        if marker in text:
            check(
                f"honesty:{name}:{marker}",
                ("n=25" in text) or ("n=60" in text) or ("SAMPLED" in text),
                "a sampled rate appears without its denominator",
            )

# ------------------------------------------------------- 7. schema fixtures
def base_binding(**over):
    b = {
        "binding_id": "fixture-binding",
        "donor": {
            "name": "Fixture donor",
            "upstream": "https://example.invalid/donor",
            "version_pin": "v0.0.0-fixture",
            "token_system": "shadcn/ui",
            "variable_count": 23,
        },
        "binding_class": "B3",
        "mount_topology": "native",
        "coherence_ceiling": "high",
        "scope": {
            "selector": ".donor-surface",
            "applies_to": "Mounted donor subtree",
            "single_seam": True,
        },
        "encoding": {
            "host": "rgb-triplet",
            "donor": "hsl-triplet",
            "conversion": "convert",
            "conversion_method": "rgb-triplet -> hsl-triplet, pinned",
            "alpha_preserved": True,
        },
        "mappings": [
            {"donor_variable": "--background", "host_role": "background", "verified": "observed"}
        ],
        "dark_mirror": {
            "required": True,
            "selector": ".dark .donor-surface",
            "coverage": "complete",
            "uncovered_roles": [],
        },
        "unstylable": [],
        "upgrade_fragility": "stable",
        "evidence": [
            {"claim": "Donor is token-driven", "state": "observed",
             "receipt": "donor source: global.shadcn.css", "sample_size": None}
        ],
    }
    b.update(over)
    return b


POSITIVE = {
    "P1 B3 scoped bridge with conversion": base_binding(),
    "P2 B5 cross-origin bounded ceiling": base_binding(
        binding_class="B5",
        mount_topology="iframe_cross_origin",
        coherence_ceiling="bounded",
        encoding={"host": "oklch", "donor": "unknown",
                  "conversion": "not_applicable", "alpha_preserved": False},
        mappings=[],
        scope={"selector": "[data-am-donor='svc'] > .frame-chrome",
               "applies_to": "Host-side chrome around the frame", "single_seam": True},
        dark_mirror={"required": True, "selector": None, "coverage": "donor_native",
                     "uncovered_roles": ["all donor-internal roles"]},
        unstylable=[{"surface": "Everything inside the frame",
                     "reason": "cross_origin_boundary"}],
        frame_negotiation={"channel": "postMessage", "negotiated": ["mode"],
                           "escape_available": "reuse_shape_change"},
    ),
    "P3 B2 retokenized corpus component": base_binding(
        binding_class="B2",
        coherence_ceiling="parity",
        encoding={"host": "oklch", "donor": "srgb-hex", "conversion": "convert",
                  "conversion_method": "literal -> semantic role", "alpha_preserved": True},
        retokenization={"failure_class": "ok", "source_available": True,
                        "review_required": True},
    ),
    "P4 identical-encoding alias is legal": base_binding(
        encoding={"host": "oklch", "donor": "oklch", "conversion": "alias",
                  "alpha_preserved": True},
    ),
}

NEGATIVE = {
    "N1 :root-scoped donor binding": base_binding(
        scope={"selector": ":root", "applies_to": "global", "single_seam": True}),
    "N2 aliased encoding mismatch": base_binding(
        encoding={"host": "rgb-triplet", "donor": "hsl-triplet",
                  "conversion": "alias", "alpha_preserved": True}),
    "N3 cross-origin claiming parity": base_binding(
        binding_class="B5", mount_topology="iframe_cross_origin",
        coherence_ceiling="parity",
        encoding={"host": "oklch", "donor": "unknown",
                  "conversion": "not_applicable", "alpha_preserved": False},
        mappings=[],
        frame_negotiation={"channel": "postMessage", "negotiated": ["mode"],
                           "escape_available": "none"}),
    "N4 cross-origin topology on a B3 binding": base_binding(
        mount_topology="iframe_cross_origin"),
    "N5 B4 claiming stable fragility": base_binding(
        binding_class="B4", upgrade_fragility="stable"),
    "N6 observed evidence without a receipt": base_binding(
        evidence=[{"claim": "Asserted without proof", "state": "observed"}]),
    "N7 B2 without a retokenization record": base_binding(
        binding_class="B2", coherence_ceiling="parity"),
}

try:
    import jsonschema

    validator = jsonschema.Draft202012Validator(schema)
    for label, doc in POSITIVE.items():
        errs = list(validator.iter_errors(doc))
        check(f"fixture:positive:{label}", not errs,
              "; ".join(e.message for e in errs[:2]))
    for label, doc in NEGATIVE.items():
        errs = list(validator.iter_errors(doc))
        check(f"fixture:negative:{label}", bool(errs),
              "schema ACCEPTED a document it must reject")
    print(f"schema fixtures: {len(POSITIVE)} positive, {len(NEGATIVE)} negative, validated")
except ImportError:
    print("NOTE: jsonschema unavailable — fixtures parsed but not validated")
    for label, doc in {**POSITIVE, **NEGATIVE}.items():
        check(f"fixture:parses:{label}", isinstance(doc, dict), "not an object")

# ---------------------------------------------------------------- 8. link check
# Cross-document references between the owned artifacts must resolve.
fw = (RUN / "design-harmonization-framework.md")
if fw.exists():
    text = fw.read_text()
    for name in ("semantic-token-contract.json", "donor-token-binding.schema.json",
                 "cross-donor-experiments.md"):
        check(f"link:framework->{name}", name in text, "framework does not reference it")
    for cls in ("B1", "B2", "B3", "B4", "B5"):
        check(f"framework:defines:{cls}", cls in text, "binding class not described")
    for g in ("Gate K", "Gate L", "Gate M", "Gate N"):
        check(f"framework:defines:{g}", g in text, "composition gate not described")

exp = (RUN / "cross-donor-experiments.md")
if exp.exists():
    t = exp.read_text()
    for x in ("X-1", "X-2", "X-3"):
        check(f"experiments:{x}", x in t, "experiment missing")
    check("experiments:three_classes",
          all(c in t for c in ("B2", "B3", "B5")),
          "three donor shapes must span three binding classes")
    check("experiments:unexecuted", "UNEXECUTED" in t, "execution state not declared")

# ------------------------------------------------------------------- 9. report
print(f"checks run: {checks}")
if failures:
    print(f"SMOKE FAIL ({len(failures)}):")
    for f in failures:
        print(f"  - {f}")
    sys.exit(1)
print("SMOKE PASS")
sys.exit(0)
