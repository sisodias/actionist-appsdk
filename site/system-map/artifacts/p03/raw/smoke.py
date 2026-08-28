#!/usr/bin/env python3
"""S1-L2 / P03 post-write structural smoke.

Checks STRUCTURE and INTERNAL CONSISTENCY, not truth. Exit 0 = PASS, 1 = FAIL.
Run from the run directory:  python3 smoke.py
"""
import json, os, sys, collections

FAIL = []
WARN = []


def fail(msg):
    FAIL.append(msg)


def warn(msg):
    WARN.append(msg)


def load_jsonl(path):
    rows = []
    with open(path) as f:
        for i, line in enumerate(f, 1):
            line = line.strip()
            if not line:
                continue
            try:
                rows.append(json.loads(line))
            except Exception as e:
                fail(f"{path}:{i} JSON parse error: {e}")
    return rows


REQUIRED_FILES = [
    "research-report.md",
    "source-register.jsonl",
    "top-companies.jsonl",
    "top-repos.jsonl",
    "innovation-register.jsonl",
    "first-principles.md",
    "decision-ledger.json",
    "lane-state.json",
]

# 1. required packet present
for fn in REQUIRED_FILES:
    if not os.path.exists(fn):
        fail(f"required packet file missing: {fn}")

# 2. every JSONL record carries the program-mandated fields
REQ_FIELDS = ["id", "evidence_class", "observed_date", "claim", "limitations", "disposition"]
IDENTITY_FIELDS = ["source_identity", "repo", "vendor", "url", "source"]

for fn in ["source-register.jsonl", "top-companies.jsonl", "top-repos.jsonl", "innovation-register.jsonl"]:
    if not os.path.exists(fn):
        continue
    rows = load_jsonl(fn)
    if not rows:
        fail(f"{fn}: no records")
        continue
    data = [r for r in rows if str(r.get("id", "")).upper() not in ("SUMMARY", "COM-SUMMARY")
            and r.get("record_type") != "summary"]
    summ = [r for r in rows if r not in data]
    if len(summ) != 1:
        fail(f"{fn}: expected exactly 1 summary record, found {len(summ)}")
    ids = [r.get("id") for r in data]
    dupes = [k for k, v in collections.Counter(ids).items() if v > 1]
    if dupes:
        fail(f"{fn}: duplicate ids {dupes[:5]}")
    if any(i is None for i in ids):
        fail(f"{fn}: record(s) with no id")
    for r in data:
        missing = [k for k in REQ_FIELDS if k not in r]
        if missing:
            fail(f"{fn}:{r.get('id')}: missing required fields {missing}")
            break
    for r in data:
        if not any(k in r for k in IDENTITY_FIELDS):
            fail(f"{fn}:{r.get('id')}: no source identity/URL/path field")
            break
    # summary counts must reconcile with the actual file
    if summ:
        s = summ[0]
        for key in ("total_records", "verified_records_written", "total_vendor_records"):
            if key in s and isinstance(s[key], int) and s[key] != len(data):
                fail(f"{fn}: summary {key}={s[key]} but file holds {len(data)} data records")

# 3. cross-file consistency: lane-state counts must match the files
if os.path.exists("lane-state.json"):
    ls = json.load(open("lane-state.json"))
    counts = ls.get("exact_counts", {})
    actual = {}
    for key, fn in [("top_repos_records", "top-repos.jsonl"),
                    ("top_companies_records", "top-companies.jsonl"),
                    ("innovation_records", "innovation-register.jsonl"),
                    ("source_register_records", "source-register.jsonl")]:
        if os.path.exists(fn):
            rows = load_jsonl(fn)
            actual[key] = len([r for r in rows if str(r.get("id", "")).upper() not in ("SUMMARY", "COM-SUMMARY")
                               and r.get("record_type") != "summary"])
    for k, v in actual.items():
        if k in counts and counts[k] != v:
            fail(f"lane-state.json {k}={counts[k]} but {k.replace('_records','')} file holds {v}")
        if k not in counts:
            warn(f"lane-state.json missing exact_counts.{k}")
    # boundary invariants must be declared and correct
    b = ls.get("boundaries", {})
    for k, expected in [("research_only", True), ("implementation_authorized", False),
                        ("admitted_blocks", 0), ("execution_status", "UNEXECUTED"),
                        ("admission_status", "NOT_ADMITTED")]:
        if k not in b:
            fail(f"lane-state.json boundaries.{k} not declared")
        elif b[k] != expected:
            fail(f"lane-state.json boundaries.{k}={b[k]!r}, expected {expected!r}")
    if ls.get("subagent_model_policy") != "opus_only":
        fail("lane-state.json does not declare subagent_model_policy=opus_only")
    if ls.get("promotion_status") == "promoted":
        fail("lane-state.json claims promotion; lane may not self-promote")

# 4. decision ledger structure
if os.path.exists("decision-ledger.json"):
    dl = json.load(open("decision-ledger.json"))
    ds = dl.get("decisions", [])
    if not ds:
        fail("decision-ledger.json has no decisions")
    for d in ds:
        for k in ("id", "decision", "rationale", "evidence", "falsifier", "status"):
            if k not in d:
                fail(f"decision-ledger.json {d.get('id','?')}: missing {k}")
                break

# 5. provenance lanes must stay distinct — no record may claim two lanes,
#    and the user_provided lane must never be silently backfilled from a survey
for fn in ["top-repos.jsonl", "top-companies.jsonl", "source-register.jsonl"]:
    if not os.path.exists(fn):
        continue
    for r in load_jsonl(fn):
        pl = r.get("provenance_lane")
        if isinstance(pl, list) and len(pl) > 1:
            fail(f"{fn}:{r.get('id')}: multiple provenance lanes {pl}")
        if pl == "user_provided" and fn != "source-register.jsonl":
            fail(f"{fn}:{r.get('id')}: survey record claims user_provided lane")

# 6. forbidden-claim scan: this lane may not assert admission/execution/promotion.
#    Matches POSITIVE claims only — "admitted blocks 0" and "NOT_ADMITTED" are the
#    required boundary declarations, not violations.
import re as _re
FORBIDDEN_PATTERNS = [
    r"\badmitted\s+blocks?\s*[:=]?\s*(?!0\b)[1-9]",   # admitted blocks: 3
    r"\b(is|are|has been|have been)\s+admitted\b",
    r"\bsprint\s*1?\s+(is\s+)?complete\b",
    r"\bpromoted\s+to\s+\w+",
    r"\bproduction[- ]ready\b",
    r"\bcleared\s+for\s+production\b",
]
for fn in sorted(set([f for f in REQUIRED_FILES if f.endswith(".md")] + ["research-report.md"])):
    if not os.path.exists(fn):
        continue
    text = open(fn).read().lower()
    for pat in FORBIDDEN_PATTERNS:
        m = _re.search(pat, text)
        if m:
            fail(f"{fn}: positive admission/promotion claim matched {pat!r} -> {m.group(0)!r}")

import re as _re2

# 7. product-vs-primitive split (only checked once the pass has run)
if os.path.exists("product-primitive-split.json"):
    pp = json.load(open("product-primitive-split.json"))
    repos = load_jsonl("top-repos.jsonl")
    data = [r for r in repos if str(r.get("id", "")).upper() != "SUMMARY"]
    VALID_TIERS = {"product", "framework", "primitive"}
    missing_tier = [r.get("id") for r in data if r.get("supply_tier") not in VALID_TIERS]
    if missing_tier:
        fail(f"top-repos.jsonl: {len(missing_tier)} rows lack a valid supply_tier (first: {missing_tier[:3]})")
    no_ev = [r.get("id") for r in data if r.get("supply_tier") and not r.get("supply_tier_evidence")]
    if no_ev:
        fail(f"top-repos.jsonl: {len(no_ev)} rows have supply_tier with no supply_tier_evidence")
    # per-kind arithmetic must tie out internally
    for k in pp.get("per_kind", []):
        tot = k.get("total_rows")
        parts = (k.get("product_rows", 0) + k.get("framework_rows", 0) + k.get("primitive_rows", 0))
        if tot is not None and parts != tot:
            fail(f"product-primitive-split {k.get('kind')}: tiers sum to {parts} but total_rows={tot}")
        # the classification rule must match its own numbers
        cp = k.get("clean_products")
        rc = k.get("revised_classification")
        if cp is not None and rc == "commodity" and cp < 2:
            fail(f"product-primitive-split {k.get('kind')}: classified commodity with clean_products={cp}")
        if cp is not None and cp == 0 and k.get("product_rows", 0) > 0 \
           and rc not in ("product_layer_missing_under_permissive_terms", "UNDERDETERMINED"):
            fail(f"product-primitive-split {k.get('kind')}: 0 clean products but classified {rc!r}")
    # 7b. PROSE-VS-COUNTER: any number stated in a note must match its own counters.
    #     Added after a verifier found e_sign.note asserting "6 runnable products"
    #     while product_rows=5. Prose drifts when counters are recomputed; this binds them.
    # Longest-qualifier-first: "clean permissive product" must win over bare "product".
    NUM_WORD = _re2.compile(
        r"\b(\d+)\s+("
        r"clean\s+permissive\s+products?"
        r"|clean\s+permissive\s+rows?"
        r"|runnable\s+products?"
        r"|products?"
        r"|primitives?"
        r"|frameworks?"
        r"|rows?"
        r")\b")
    for k in pp.get("per_kind", []):
        note = k.get("note") or ""
        for m in NUM_WORD.finditer(note):
            stated = int(m.group(1))
            noun = _re2.sub(r"s$", "", m.group(2).lower().replace("  ", " "))
            if noun.startswith("clean permissive product"):
                expected, label = k.get("clean_products"), "clean permissive product"
            elif noun.startswith("clean permissive row"):
                # "the N clean permissive row(s) ... are primitives"
                expected, label = k.get("clean_primitives"), "clean permissive row"
            elif noun.startswith("runnable product") or noun.startswith("product"):
                expected, label = k.get("product_rows"), "product"
            elif noun.startswith("primitive"):
                expected, label = k.get("primitive_rows"), "primitive"
            elif noun.startswith("framework"):
                expected, label = k.get("framework_rows"), "framework"
            else:
                expected, label = k.get("total_rows"), "row"
            if expected is not None and stated != expected:
                fail(f"product-primitive-split {k.get('kind')}: note says {stated} {label}(s) "
                     f"but counter is {expected} — prose/counter drift")
        # a note must not claim clean supply when clean_products is 0
        if k.get("clean_products") == 0 and _re2.search(r"\bdeploy one and ship\b", note):
            fail(f"product-primitive-split {k.get('kind')}: note claims deployable supply with clean_products=0")

    # summary tier counts must match the file
    s = pp.get("summary", {})
    actual_tiers = collections.Counter(r.get("supply_tier") for r in data)
    for tier in ("product", "framework", "primitive"):
        if tier in s and s[tier] != actual_tiers.get(tier, 0):
            fail(f"product-primitive-split summary {tier}={s[tier]} but file holds {actual_tiers.get(tier, 0)}")
else:
    warn("product-primitive-split.json not present yet (pass still running or not run)")

print("=" * 60)
print("S1-L2 / P03 POST-WRITE STRUCTURAL SMOKE")
print("=" * 60)
for w in WARN:
    print(f"  WARN  {w}")
for f_ in FAIL:
    print(f"  FAIL  {f_}")
print("-" * 60)
if FAIL:
    print(f"VERDICT: FAIL ({len(FAIL)} failures, {len(WARN)} warnings)")
    sys.exit(1)
print(f"VERDICT: PASS (0 failures, {len(WARN)} warnings)")
print("Note: this checks structure and internal consistency only. It does not")
print("verify that any claim is true, that any licence reading is correct, or")
print("that any capability exists as described.")
sys.exit(0)
