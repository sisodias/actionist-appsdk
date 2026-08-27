#!/usr/bin/env python3
"""No-bytecode structural verifier for P9-L02 closure outputs."""
import hashlib, json, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent
REQ = ["feature-ontology.jsonl", "surface-feature-denominator.jsonl",
       "unmapped-feature-ledger.jsonl", "competitor-taxonomy-closure.md",
       "lane-state.json"]
DISP = {"direct", "inherited", "inferred", "unknown", "blocked", "not_applicable"}

def rows(name):
    with (ROOT / name).open() as f:
        return [json.loads(x) for x in f if x.strip()]

def main():
    missing = [x for x in REQ if not (ROOT / x).is_file()]
    if missing:
        raise SystemExit("MISSING " + ",".join(missing))
    ontology = rows("feature-ontology.jsonl")
    matrix = rows("surface-feature-denominator.jsonl")
    ledger = rows("unmapped-feature-ledger.jsonl")
    features = [r for r in ontology if r.get("record_type") == "canonical_feature"]
    surfaces = sorted({r["surface_ref"] for r in matrix})
    keys = sorted({r["canonical_feature_id"] for r in matrix})
    if len(features) != 144 or len(surfaces) != 118 or len(keys) != 144:
        raise SystemExit(f"DENOMINATOR features={len(features)} surfaces={len(surfaces)}")
    expected = 118 * 144
    if len(matrix) != expected or len({(r["surface_ref"], r["canonical_feature_id"]) for r in matrix}) != expected:
        raise SystemExit("MATRIX_NOT_FULL")
    bad = [r for r in matrix if r.get("disposition") not in DISP]
    if bad:
        raise SystemExit("BAD_DISPOSITION")
    if not any(r.get("record_type") == "stated_68_aggregate_unmapped" and r.get("unmapped_count") == 68 for r in ledger):
        raise SystemExit("MISSING_68_LEDGER")
    if list(ROOT.glob("*.pyc")) or list((ROOT / "__pycache__").glob("*.pyc")) if (ROOT / "__pycache__").exists() else False:
        raise SystemExit("BYTECODE_PRESENT")
    print(json.dumps({"status":"PASS", "surfaces":len(surfaces), "features":len(features),
                      "cells":len(matrix), "dispositions":{d:sum(r['disposition']==d for r in matrix) for d in sorted(DISP)},
                      "unmapped_records":len(ledger)}, sort_keys=True))

if __name__ == "__main__":
    main()
