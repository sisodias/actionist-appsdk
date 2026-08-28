#!/usr/bin/env python3
"""S1-L3 post-write structural smoke.

Read-only. Verifies the three owned part packets against the Sprint-1 packet
schema and reports a per-part verdict plus a lane verdict.

Checks:
  1. presence of the 8 required packet files per part
  2. every .jsonl line parses as JSON
  3. every JSONL record carries the required keys
  4. evidence_class values are from the allowed vocabulary
  5. decision-ledger.json / lane-state.json parse as JSON objects
  6. lane-state.json counts, where present, match files actually on disk

Exit codes: 0 = PASS, 1 = PARTIAL (some part incomplete), 2 = FAIL (structural defect).
Usage: python3 smoke.py [--json]
"""
import json
import os
import sys

ROOT = "/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/research/workstreams"
RUN = "runs/2026-08-27-sprint-1-fable"

PARTS = {
    "P05": "p05-living-component-layer",
    "P06": "p06-preference-science",
    "P08": "p08-archetype-shell-layout",
}

REQUIRED = [
    "research-report.md",
    "source-register.jsonl",
    "top-companies.jsonl",
    "top-repos.jsonl",
    "innovation-register.jsonl",
    "first-principles.md",
    "decision-ledger.json",
    "lane-state.json",
]

JSONL_REQUIRED_KEYS = {"id", "evidence_class"}
ALLOWED_EC = {"observed", "inferred", "hypothesis", "unknown", "rejected"}


def check_jsonl(path):
    """Return (n_records, [defects], {evidence_class: count})."""
    defects, ec = [], {}
    n = 0
    with open(path, "r", encoding="utf-8") as fh:
        for lineno, line in enumerate(fh, 1):
            line = line.strip()
            if not line:
                continue
            try:
                rec = json.loads(line)
            except json.JSONDecodeError as exc:
                defects.append(f"line {lineno}: malformed JSON ({exc.msg})")
                continue
            n += 1
            if not isinstance(rec, dict):
                defects.append(f"line {lineno}: not a JSON object")
                continue
            missing = JSONL_REQUIRED_KEYS - rec.keys()
            if missing:
                defects.append(f"line {lineno}: missing key(s) {sorted(missing)}")
            val = rec.get("evidence_class")
            if val is not None:
                ec[val] = ec.get(val, 0) + 1
                if val not in ALLOWED_EC:
                    defects.append(f"line {lineno}: bad evidence_class {val!r}")
    return n, defects, ec


def check_part(part_id, slug):
    base = os.path.join(ROOT, slug, RUN)
    result = {
        "part": part_id,
        "dir": base,
        "present": [],
        "missing": [],
        "records": {},
        "evidence_class": {},
        "defects": [],
    }
    if not os.path.isdir(base):
        result["defects"].append("run directory does not exist")
        result["missing"] = list(REQUIRED)
        result["verdict"] = "FAIL"
        return result

    for name in REQUIRED:
        path = os.path.join(base, name)
        if os.path.isfile(path) and os.path.getsize(path) > 0:
            result["present"].append(name)
        else:
            result["missing"].append(name)

    for name in result["present"]:
        path = os.path.join(base, name)
        if name.endswith(".jsonl"):
            n, defects, ec = check_jsonl(path)
            result["records"][name] = n
            result["defects"] += [f"{name}: {d}" for d in defects]
            for k, v in ec.items():
                result["evidence_class"][k] = result["evidence_class"].get(k, 0) + v
        elif name.endswith(".json"):
            try:
                with open(path, "r", encoding="utf-8") as fh:
                    json.load(fh)
            except json.JSONDecodeError as exc:
                result["defects"].append(f"{name}: malformed JSON ({exc.msg})")

    # cross-check lane-state.json counts against what is really on disk
    ls = os.path.join(base, "lane-state.json")
    if os.path.isfile(ls):
        try:
            with open(ls, "r", encoding="utf-8") as fh:
                state = json.load(fh)
            counts = state.get("counts", {}) or {}
            # Only compare TOTAL-record keys against file line counts. Parts may also
            # declare finer-grained breakdown keys (e.g. top_companies_verified_observed)
            # that legitimately sum to the total rather than equalling it; comparing those
            # against the file total is a false positive.
            for fname, actual in result["records"].items():
                stem = fname.replace(".jsonl", "").replace("-", "_")
                candidates = {stem, f"{stem}_records", stem.replace("_register", "")}
                candidates |= {f"{c}_records" for c in list(candidates)}
                for key in candidates:
                    claimed = counts.get(key)
                    if isinstance(claimed, int) and claimed != actual:
                        result["defects"].append(
                            f"lane-state counts.{key}={claimed} != {fname} actual {actual}"
                        )
            # Report, without failing, any breakdown keys that do not sum to their total.
            for fname, actual in result["records"].items():
                stem = fname.replace(".jsonl", "").replace("-", "_")
                parts = {
                    k: v for k, v in counts.items()
                    if isinstance(v, int)
                    and k.startswith(stem + "_")
                    and not k.endswith("_records")
                    and not k.endswith("_ranked")
                }
                if parts and sum(parts.values()) != actual:
                    result["notes"] = result.get("notes", [])
                    result["notes"].append(
                        f"{fname}: breakdown {sum(parts.values())} != total {actual} "
                        f"({', '.join(sorted(parts))}) — may be overlapping categories, review"
                    )
        except json.JSONDecodeError:
            pass  # already reported above

    if result["defects"]:
        result["verdict"] = "FAIL"
    elif result["missing"]:
        result["verdict"] = "PARTIAL"
    else:
        result["verdict"] = "PASS"
    return result


def main():
    as_json = "--json" in sys.argv
    results = [check_part(pid, slug) for pid, slug in sorted(PARTS.items())]

    if any(r["verdict"] == "FAIL" for r in results):
        lane = "FAIL"
        code = 2
    elif any(r["verdict"] == "PARTIAL" for r in results):
        lane = "PARTIAL"
        code = 1
    else:
        lane = "PASS"
        code = 0

    if as_json:
        print(json.dumps({"lane_verdict": lane, "parts": results}, indent=2))
        return code

    print(f"S1-L3 post-write structural smoke — LANE VERDICT: {lane}\n")
    for r in results:
        total = sum(r["records"].values())
        print(f"[{r['verdict']}] {r['part']}  ({len(r['present'])}/8 files, {total} JSONL records)")
        if r["missing"]:
            print(f"    missing: {', '.join(r['missing'])}")
        if r["records"]:
            print("    records: " + ", ".join(f"{k}={v}" for k, v in sorted(r["records"].items())))
        if r["evidence_class"]:
            print("    evidence: " + ", ".join(f"{k}={v}" for k, v in sorted(r["evidence_class"].items())))
        for d in r["defects"][:10]:
            print(f"    DEFECT: {d}")
        if len(r["defects"]) > 10:
            print(f"    ... and {len(r['defects']) - 10} more defects")
        for n in r.get("notes", []):
            print(f"    note: {n}")
        print()
    return code


if __name__ == "__main__":
    sys.exit(main())
