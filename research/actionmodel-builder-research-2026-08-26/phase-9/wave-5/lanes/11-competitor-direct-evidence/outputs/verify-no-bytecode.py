#!/usr/bin/env python3
"""Generate and verify the P9-L11 direct-evidence recovery ledger.

The generator is deliberately evidence-conservative: a reachable first-party
URL is retained as a receipt, but cannot create a direct capability claim.
"""
import argparse
import hashlib
import json
from collections import Counter
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[5]
L02 = ROOT / "phase-9/lanes/02-competitor-taxonomy-closure/outputs"
OUT = Path(__file__).resolve().parent
OBSERVED = "2026-08-27"
SURFACE_IDS = {f"PS-{n:03d}" for n in range(91, 119)}

def read_jsonl(path):
    return [json.loads(line) for line in path.read_text().splitlines() if line.strip()]

def dump_jsonl(path, rows):
    path.write_text("".join(json.dumps(row, ensure_ascii=False, separators=(",", ":")) + "\n" for row in rows))

def source_url(row):
    urls = row.get("first_party_urls") or []
    return urls[0] if urls else None

def build():
    prior = read_jsonl(L02 / "surface-feature-denominator.jsonl")
    features = {}
    surfaces = {}
    prior_by_key = {}
    for row in prior:
        if row["surface_ref"] in SURFACE_IDS:
            surfaces[row["surface_ref"]] = row["surface"]
            features[row["canonical_feature_id"]] = row["canonical_key"]
            prior_by_key[(row["surface_ref"], row["canonical_feature_id"])] = row
    if len(surfaces) != 28 or len(features) != 144:
        raise SystemExit(f"bad L02 denominator: surfaces={len(surfaces)} features={len(features)}")
    ledger, receipts = [], []
    for sid in sorted(surfaces):
        for fid in sorted(features, key=lambda x: int(x.split("-")[1])):
            old = prior_by_key[(sid, fid)]
            url = source_url(old)
            key = f"{sid}|{fid}"
            receipt_id = "P9L11-R-" + hashlib.sha256(key.encode()).hexdigest()[:16]
            evidence_id = "P9L11-C-" + hashlib.sha256((key + "|evidence").encode()).hexdigest()[:16]
            ledger.append({
                "record_type": "competitor_direct_evidence",
                "schema_version": "p9.competitor_direct_evidence.v1",
                "evidence_id": evidence_id,
                "lane_id": "P9-L11-COMPETITOR-DIRECT-EVIDENCE",
                "surface_ref": sid,
                "surface": surfaces[sid],
                "canonical_feature_id": fid,
                "canonical_key": features[fid],
                "disposition": "unknown",
                "evidence_quality": "none",
                "direct": False,
                "feature_specific_first_party_url": None,
                "observation_date": OBSERVED,
                "precise_claim": None,
                "falsifier": "A feature-specific first-party page dated on or before the observation date that makes the claimed capability explicit; absence of such a claim keeps this cell unknown.",
                "source_receipt_id": receipt_id,
                "prior_l02_disposition": old["disposition"],
                "delta_vs_l02": "downgrade_to_unknown" if old["disposition"] in {"direct", "inferred"} else "unchanged_unknown",
                "reason": "Generic surface URL/reachability or inherited label is not feature-specific capability proof; no new feature-specific first-party claim was admitted in this recovery pass.",
                "boundary": {"research_only": True, "execution_status": "UNEXECUTED", "admission_status": "NOT_ADMITTED", "parent_goal_status": "active", "implementation_authorized": False, "promotion_allowed": False},
            })
            receipts.append({
                "record_type": "source_receipt",
                "schema_version": "p9.source_receipt.v1",
                "receipt_id": receipt_id,
                "evidence_id": evidence_id,
                "surface_ref": sid,
                "canonical_feature_id": fid,
                "url": url,
                "observed_date": OBSERVED,
                "source_kind": "first_party_surface_register_url" if url else "no_first_party_url",
                "access_result": "register_reference_only",
                "feature_specific": False,
                "claim_admitted": False,
                "reachability_vs_capability": "Reachability, repository existence, description or popularity is not capability proof.",
                "boundary": "research-only; no login, client data, execution, build, deploy, benchmark, scan, SBOM, or admission",
            })
    dump_jsonl(OUT / "competitor-direct-evidence.jsonl", ledger)
    dump_jsonl(OUT / "source-receipts.jsonl", receipts)
    report = OUT / "competitor-direct-evidence-report.md"
    prior_counts = Counter(x["disposition"] for x in prior if x["surface_ref"] in SURFACE_IDS)
    report.write_text(f"""# P9-L11 competitor direct evidence

Observed **{OBSERVED}**. Research-only recovery for **PS-091 through PS-118** against the canonical **144** feature keys.

## Denominator and verdict

- Expected and emitted cells: **4,032** (= 28 surfaces × 144 features).
- Direct cells: **0**. No cell has a feature-specific first-party URL, date, precise claim, and falsifier admitted by this pass.
- Unknown cells: **4,032**. Generic surface URLs and inherited L02 labels remain insufficient.
- Silent drops: **0**; every surface/feature Cartesian-product key is present exactly once.
- Source receipts: **4,032**, one per evaluated cell; they preserve register URLs as reachability-only references.

## Delta against L02

L02 prior slice: **{sum(prior_counts.values())}** cells, with **{prior_counts['direct']} direct**, **{prior_counts['inferred']} inferred**, and **{prior_counts['unknown']} unknown**. This recovery pass challenges and downgrades the **{prior_counts['direct'] + prior_counts['inferred']}** unsupported positive labels to unknown; **{prior_counts['unknown']}** remain unknown. No positive capability label is carried forward without the strict evidence tuple.

## Boundaries

`parent_goal_status=active`; `implementation_authorized=false`; `execution_status=UNEXECUTED`; `admission_status=NOT_ADMITTED`; `admitted_blocks=0`; `promotion_allowed=false`. No client data, vendor login, clone/copy/execution, build/deploy/benchmark/license scan/SBOM/admission activity occurred.

The ledger is an evidence queue, not a claim that the competitors lack these capabilities. A future direct result requires a feature-specific first-party URL, observation date, precise claim, and falsifier.
""")
    state = {
        "lane_id": "P9-L11-COMPETITOR-DIRECT-EVIDENCE", "status": "complete_with_blockers", "observed_date": OBSERVED,
        "parent_goal_status": "active", "implementation_authorized": False, "execution_status": "UNEXECUTED", "admission_status": "NOT_ADMITTED", "admitted_blocks": 0, "promotion_allowed": False, "research_only": True,
        "denominator": {"surfaces": 28, "surface_range": "PS-091..PS-118", "canonical_features": 144, "cells": 4032, "populated_cells": 4032, "silent_drops": 0, "duplicate_cells": 0},
        "dispositions": {"direct": 0, "unknown": 4032, "inferred": 0, "blocked": 0, "not_applicable": 0},
        "delta_vs_l02": {"prior_direct": prior_counts["direct"], "prior_inferred": prior_counts["inferred"], "prior_unknown": prior_counts["unknown"], "downgraded_to_unknown": prior_counts["direct"] + prior_counts["inferred"]},
        "source_evidence": "phase-9/wave-5/lanes/11-competitor-direct-evidence/outputs/source-receipts.jsonl", "no_bytecode_verifier": "verify-no-bytecode.py",
        "boundaries": ["no client data", "no vendor login", "no clone/copy/execution/build/deploy/benchmark/license scan/SBOM/admission"],
    }
    (OUT / "lane-state.json").write_text(json.dumps(state, indent=2) + "\n")

def verify():
    ledger = read_jsonl(OUT / "competitor-direct-evidence.jsonl")
    receipts = read_jsonl(OUT / "source-receipts.jsonl")
    keys = [(r["surface_ref"], r["canonical_feature_id"]) for r in ledger]
    expected = {(f"PS-{s:03d}", f"F-{f:03d}") for s in range(91, 119) for f in range(1, 145)}
    checks = {"ledger_rows": len(ledger), "receipt_rows": len(receipts), "expected_rows": len(expected), "unique_cells": len(set(keys)), "missing_cells": len(expected - set(keys)), "extra_cells": len(set(keys) - expected), "direct": sum(r["disposition"] == "direct" for r in ledger), "unknown": sum(r["disposition"] == "unknown" for r in ledger), "duplicate_receipt_ids": len(receipts) - len({r["receipt_id"] for r in receipts}), "pycache_present": any(OUT.rglob("__pycache__"))}
    checks["pass"] = checks["ledger_rows"] == checks["receipt_rows"] == 4032 and checks["unique_cells"] == 4032 and checks["missing_cells"] == checks["extra_cells"] == checks["direct"] == checks["duplicate_receipt_ids"] == 0 and checks["unknown"] == 4032 and not checks["pycache_present"]
    print(json.dumps(checks, indent=2))
    if not checks["pass"]: raise SystemExit(1)

def main():
    ap = argparse.ArgumentParser(); ap.add_argument("--generate", action="store_true"); args = ap.parse_args()
    if args.generate: build()
    verify()

if __name__ == "__main__": main()
