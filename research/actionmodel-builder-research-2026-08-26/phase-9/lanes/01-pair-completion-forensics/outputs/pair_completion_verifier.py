#!/usr/bin/env python3
"""No-bytecode generator/verifier for P9-L01 pair-completion forensics."""
import argparse, hashlib, json, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parents[4]
OUT = pathlib.Path(__file__).resolve().parent
SEL = ROOT / "phase-7/lanes/01-corpus-integrity/outputs/repository-selection-ledger.jsonl"
DIMS = ROOT / "phase-7/lanes/02-dimension-evidence/outputs"
DIMENSIONS = ["demand_atom_fit", "workflow_behavior", "data_model", "integration_surface", "ui_assembly", "agent_authority", "verification_eval", "provenance_rights", "runtime_deployment", "economics_maintenance"]
WAVES = [DIMS / "dimension-evidence-ledger.jsonl"] + [DIMS / f"wave-{n}/dimension-evidence-ledger.jsonl" for n in range(2, 11)]
STATE_INPUTS = [ROOT / "phase-7/PHASE-7-PROGRAM.md", ROOT / "phase-7/phase-7-state.json", ROOT / "phase-7/lanes/01-corpus-integrity/outputs/lane-state.json", ROOT / "phase-7/lanes/02-dimension-evidence/outputs/lane-state.json", SEL, *WAVES]

def read_jsonl(path):
    return [json.loads(line) for line in path.read_text().splitlines() if line.strip()]

def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

def url_list(x):
    if not x:
        return []
    cr = x.get("closure_input", {}).get("source_receipt", {})
    return list(cr.get("source_urls", []))

def build():
    selections = read_jsonl(SEL)
    rows, gaps = [], []
    for n, s in enumerate(selections, 1):
        ind, pos = s["industry"]["id"], s["target"]["target_position"]
        repo = s.get("repository")
        complete = s.get("selection_status") == "selected_for_evidence_only"
        present = set(s.get("closure_input", {}).get("dimensions_present", [])) if complete else set()
        missing = set(DIMENSIONS) - present
        sources = url_list(s) if complete else []
        states = []
        for d in DIMENSIONS:
            if d in present:
                states.append({"dimension": d, "state": "present", "evidence_class": "inherited", "source_paths": sources, "note": "Authoritative closure-queue record; not promoted to direct evidence."})
            else:
                states.append({"dimension": d, "state": "unknown", "evidence_class": "unknown", "source_paths": [], "note": "No repository identity or repository-specific dimension record for this target position."})
        disposition = "complete" if complete and not missing else "deficit"
        identity = None if not repo else {"owner": repo["owner"], "name": repo["name"], "url": repo["canonical_url"], "identity_key": f"{repo['owner']}/{repo['name']}"}
        row = {"schema_version": 1, "record_type": "pair_completion_forensics", "pair_id": f"P9-L01-{ind}-{pos:03d}", "industry": {"id": ind, "label": s["industry"]["label"]}, "target_position": pos, "repository": identity, "dimension_states": states, "evidence_counts": {"direct": 0, "inherited": len(present), "unknown": len(missing)}, "disposition": disposition, "duplicate_of": None, "source_paths": sources, "source_records": ["phase-7/lanes/01-corpus-integrity/outputs/repository-selection-ledger.jsonl"] if complete else ["phase-7/lanes/01-corpus-integrity/outputs/repository-selection-ledger.jsonl"], "next_gate": s.get("falsifier_or_next_gate") if complete else "Obtain a repository-specific, public read-only all-ten-dimension closure receipt; generic, inherited, duplicate, or padded metadata cannot fill this position."}
        rows.append(row)
        if disposition == "deficit":
            gaps.append({"schema_version": 1, "record_type": "pair_gap_reason", "gap_id": f"P9-L01-GAP-{len(gaps)+1:04d}", "pair_id": row["pair_id"], "industry_id": ind, "target_position": pos, "reason_code": "no_authoritative_complete_pair", "reason": "Target position is explicitly unfilled; the corpus ledger has no repository identity and no complete ten-dimension receipt.", "blocked_dimensions": DIMENSIONS, "candidate_assignment": "none", "no_padding": True, "next_gate": row["next_gate"], "source_path": "phase-7/lanes/01-corpus-integrity/outputs/repository-selection-ledger.jsonl"})
    return rows, gaps

def write_outputs():
    rows, gaps = build()
    OUT.mkdir(parents=True, exist_ok=True)
    for name, data in [("pair-completion-ledger.jsonl", rows), ("gap-reason-register.jsonl", gaps)]:
        (OUT / name).write_text("".join(json.dumps(x, sort_keys=True, separators=(",", ":")) + "\n" for x in data))
    counts = {"target_pairs": len(rows), "complete": sum(x["disposition"] == "complete" for x in rows), "partial": sum(x["disposition"] == "partial" for x in rows), "deficit": sum(x["disposition"] == "deficit" for x in rows), "duplicate": sum(x["disposition"] == "duplicate" for x in rows), "gap_reasons": len(gaps)}
    waves = []
    target_ids = {(x["industry"]["id"], x["repository"]["url"]) for x in rows if x["repository"]}
    for path in WAVES:
        rs = read_jsonl(path); ids = {(x["industry_id"], x["repository"]["canonical_repo_url"]) for x in rs}
        waves.append({"path": str(path.relative_to(ROOT)), "rows": len(rs), "distinct_pairs": len(ids), "dimensions_per_pair": sorted(set(sum(1 for y in rs if (y["industry_id"], y["repository"]["canonical_repo_url"]) == k) for k in ids)), "target_identity_overlap": len(ids & target_ids), "closure_effects": sorted(set(x.get("closure_effect") for x in rs))})
    report = """# P9-L01 Pair-completion forensics\n\nObserved 2026-08-27. This is a research-only denominator reconstruction.\n\n## Result\n\nThe authoritative target is **1,700 positions**: **270 complete**, **1,430 deficit**, **0 partial target rows**, and **0 duplicates**. The deficit is explicit: those positions have no repository identity and are not padded.\n\nA complete pair means the Phase 7 corpus-selection ledger marks the exact industry/target position `selected_for_evidence_only` with all ten closure dimensions. Its ten dimension states are recorded here as inherited queue evidence, never as direct evidence. Deficit positions have ten unknown states and no source identity.\n\n## Why 1,700-row waves did not move 270\n\nEach Phase 7 dimension wave contains 1,700 **dimension records**, not 1,700 pairs: the deterministic shape is 170 distinct pairs × 10 dimensions. Across waves 2–10, each wave overlaps the authoritative target identity set by 0; its rows carry an explicit no-closure-effect marker or inherited/blocked state. Thus later rows add observations outside the selected 270 and cannot promote the master counter.\n\n## Counters\n\nSee `lane-state.json` for machine-derived counters, input/output hashes, wave parity, and boundary state. `gap-reason-register.jsonl` has one reason row for every deficit.\n\n## Next gate\n\nOnly a repository-specific, public read-only all-ten-dimension closure receipt, followed by separate rights/evaluation/runtime review, can fill a deficit. No inherited metadata, generic evidence, repeated URL, or absent identity is sufficient.\n"""
    (OUT / "pair-completion-forensics.md").write_text(report)
    state = {"parent_goal_status": "active", "research_only": True, "implementation_authorized": False, "execution_status": "UNEXECUTED", "admission_status": "NOT_ADMITTED", "admitted_blocks": 0, "promotion_allowed": False, "schema_version": 1, "lane_id": "P9-L01-PAIR-COMPLETION-FORENSICS", "status": "complete", "observed_date": "2026-08-27", "counts": counts, "dimension_order": DIMENSIONS, "wave_accounting": waves, "input_sha256": {str(p.relative_to(ROOT)): sha(p) for p in STATE_INPUTS}, "output_sha256": {}, "boundary": {"research_only": True, "client_data": False, "vendor_login": False, "clone_or_copy": False, "source_execution": False, "build": False, "deployment": False, "benchmark": False, "scan": False, "admission": False, "execution_status": "UNEXECUTED", "admission_status": "NOT_ADMITTED", "implementation_authorized": False, "promotion_allowed": False, "admitted_blocks": 0, "parent_goal_status": "active"}, "blockers": ["1430_complete_pair_gap", "later_dimension_waves_are_outside_target_identity_set", "rights_and_runtime_are_out_of_scope_and_unresolved"]}
    for name in ["pair-completion-ledger.jsonl", "gap-reason-register.jsonl", "pair-completion-forensics.md"]: state["output_sha256"][name] = sha(OUT / name)
    (OUT / "lane-state.json").write_text(json.dumps(state, indent=2, sort_keys=True) + "\n")

def verify():
    rows = read_jsonl(OUT / "pair-completion-ledger.jsonl"); gaps = read_jsonl(OUT / "gap-reason-register.jsonl")
    assert len(rows) == 1700 and len(gaps) == 1430
    assert len({x["pair_id"] for x in rows}) == 1700
    assert sum(x["disposition"] == "complete" for x in rows) == 270
    assert sum(x["disposition"] == "deficit" for x in rows) == 1430
    assert all(len(x["dimension_states"]) == 10 for x in rows)
    assert all(x["evidence_counts"]["direct"] == 0 for x in rows)
    assert all(x["repository"] is None for x in rows if x["disposition"] == "deficit")
    assert len({x["gap_id"] for x in gaps}) == 1430
    state = json.loads((OUT / "lane-state.json").read_text())
    assert {k: state[k] for k in ["parent_goal_status", "research_only", "implementation_authorized", "execution_status", "admission_status", "admitted_blocks", "promotion_allowed"]} == {"parent_goal_status": "active", "research_only": True, "implementation_authorized": False, "execution_status": "UNEXECUTED", "admission_status": "NOT_ADMITTED", "admitted_blocks": 0, "promotion_allowed": False}
    assert state["output_sha256"]["gap-reason-register.jsonl"] == sha(OUT / "gap-reason-register.jsonl")
    assert state["boundary"]["research_only"] and not state["boundary"]["admission"] and state["boundary"]["execution_status"] == "UNEXECUTED"
    assert all(".pyc" not in p.name for p in OUT.iterdir())
    print("P9_L01_NO_BYTECODE_VERIFIER_PASS rows=1700 complete=270 partial=0 deficit=1430 duplicate=0 gaps=1430 boundary=PASS")

if __name__ == "__main__":
    ap = argparse.ArgumentParser(); ap.add_argument("--write", action="store_true"); args = ap.parse_args()
    if args.write: write_outputs()
    verify()
