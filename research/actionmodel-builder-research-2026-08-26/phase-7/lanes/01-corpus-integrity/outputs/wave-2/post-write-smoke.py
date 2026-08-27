#!/usr/bin/env python3
"""Build and independently smoke-test the Phase-7 corpus Wave-2 assignment.

Only existing local public-metadata registers are read. This script performs
no vendor login, client-data access, clone, source copy, source execution,
build, deployment, benchmark, scan, or admission. Wave 2 assigns existing
partial pairs to target positions but never upgrades a partial pair to
complete.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any


OUT = Path(__file__).resolve().parent
RUN = OUT.parents[4]
P7 = RUN / "phase-7"
BASELINE = RUN / "outputs/github-corpus.jsonl"
EXPANSION = RUN / "expansion/outputs/github-expansion.jsonl"
CLOSURE = P7 / "outputs/closure-queue.jsonl"
COVERAGE = P7 / "outputs/coverage-gap-audit.json"
MANIFEST = P7 / "outputs/closure-queue-manifest.json"
PROGRAM = P7 / "PHASE-7-PROGRAM.md"
MATRIX_MASTER = RUN / "expansion/outputs/repo-matrix-observations.jsonl"
MATRIX_WAVES = sorted((RUN / "expansion").glob("wave-*/outputs/repo-matrix-wave-*.jsonl"))
W1_DIR = P7 / "lanes/01-corpus-integrity/outputs"
W1_LEDGER = W1_DIR / "repository-selection-ledger.jsonl"
W1_EDGES = W1_DIR / "repository-identity-edges.jsonl"
W1_REPORT = W1_DIR / "corpus-integrity-report.md"
W1_STATE = W1_DIR / "lane-state.json"

LEDGER = OUT / "selection-assignment-wave-2.jsonl"
EDGES = OUT / "identity-edges-wave-2.jsonl"
REPORT = OUT / "corpus-integrity-wave-2-report.md"
STATE = OUT / "lane-state.json"

LANE_ID = "P7-CORPUS-INTEGRITY-W2"
OBSERVED_DATE = "2026-08-27"
SCHEMA_VERSION = 1
BOUNDARY = {
    "research_only": True,
    "vendor_login": False,
    "client_data": False,
    "clone_or_copy": False,
    "source_execution": False,
    "execution": False,
    "build": False,
    "deployment": False,
    "benchmark": False,
    "scan": False,
    "implementation": False,
    "implementation_authorized": False,
    "admission": False,
    "admitted_blocks": 0,
    "execution_status": "UNEXECUTED",
    "admission_status": "NOT_ADMITTED",
    "parent_goal_status": "active",
}


def read_jsonl(path: Path) -> list[dict[str, Any]]:
    rows: list[dict[str, Any]] = []
    for line_no, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        if not line.strip():
            continue
        value = json.loads(line)
        if not isinstance(value, dict):
            raise AssertionError(f"non-object JSONL {path}:{line_no}")
        rows.append(value)
    return rows


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def write_jsonl(path: Path, rows: list[dict[str, Any]]) -> None:
    path.write_text("\n".join(json.dumps(row, sort_keys=True, separators=(",", ":")) for row in rows) + "\n", encoding="utf-8")


def canonical_repo(url: str) -> tuple[str, str, str]:
    clean = url.strip().split("#", 1)[0].split("?", 1)[0].rstrip("/")
    match = re.fullmatch(r"https?://github\.com/([^/]+)/([^/]+?)(?:\.git)?", clean, re.I)
    if not match:
        raise AssertionError(f"non-GitHub or malformed repository URL: {url}")
    owner, name = match.group(1).lower(), match.group(2).lower()
    return owner, name, f"https://github.com/{owner}/{name}"


def identity(row: dict[str, Any]) -> dict[str, Any]:
    owner, name, url = canonical_repo(row["repo_url"])
    return {
        "canonical_key": f"{owner}/{name}",
        "owner": owner,
        "name": name,
        "canonical_url": url,
        "source_repo_url": row["repo_url"].rstrip("/"),
        "display_owner": row.get("owner"),
        "display_name": row.get("name"),
    }


def matrix_key(row: dict[str, Any]) -> str | None:
    ref = row.get("repo_ref")
    if not isinstance(ref, dict) or not isinstance(ref.get("repo_url"), str):
        return None
    return canonical_repo(ref["repo_url"])[0] + "/" + canonical_repo(ref["repo_url"])[1]


def source_hashes() -> dict[str, str]:
    paths = [PROGRAM, COVERAGE, MANIFEST, BASELINE, EXPANSION, CLOSURE, MATRIX_MASTER, *MATRIX_WAVES, W1_LEDGER, W1_EDGES, W1_REPORT, W1_STATE]
    return {str(path.relative_to(RUN)): sha256(path) for path in paths}


def load() -> dict[str, Any]:
    matrices: list[dict[str, Any]] = []
    matrix_counts: dict[str, int] = {}
    matrix_nulls: dict[str, int] = {}
    for path in [MATRIX_MASTER, *MATRIX_WAVES]:
        rows = read_jsonl(path)
        matrices.extend(rows)
        matrix_counts[str(path.relative_to(RUN))] = len(rows)
        matrix_nulls[str(path.relative_to(RUN))] = sum(matrix_key(row) is None for row in rows)
    return {
        "baseline": read_jsonl(BASELINE),
        "expansion": read_jsonl(EXPANSION),
        "closure": read_jsonl(CLOSURE),
        "matrices": matrices,
        "coverage": json.loads(COVERAGE.read_text(encoding="utf-8")),
        "manifest": json.loads(MANIFEST.read_text(encoding="utf-8")),
        "wave1_ledger": read_jsonl(W1_LEDGER),
        "wave1_edges": read_jsonl(W1_EDGES),
        "matrix_counts": matrix_counts,
        "matrix_nulls": matrix_nulls,
    }


def maps(data: dict[str, Any]) -> tuple[dict[str, dict[str, Any]], dict[str, dict[str, Any]], set[str], dict[str, list[dict[str, Any]]]]:
    baseline: dict[str, dict[str, Any]] = {}
    expansion: dict[str, dict[str, Any]] = {}
    for row in data["baseline"]:
        item = identity(row)
        assert item["canonical_key"] not in baseline
        baseline[item["canonical_key"]] = {**row, "_identity": item}
    for row in data["expansion"]:
        item = identity(row)
        assert item["canonical_key"] not in expansion
        expansion[item["canonical_key"]] = {**row, "_identity": item}
    matrix_keys = {key for row in data["matrices"] if (key := matrix_key(row)) is not None}
    by_industry: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for row in data["closure"]:
        repo = row.get("repository") or {}
        assert isinstance(repo, dict) and isinstance(repo.get("repo_url"), str)
        owner, name, _ = canonical_repo(repo["repo_url"])
        item = dict(row)
        item["_canonical_key"] = f"{owner}/{name}"
        by_industry[row["industry_id"]].append(item)
    return baseline, expansion, matrix_keys, by_industry


def source_receipt(row: dict[str, Any]) -> dict[str, Any]:
    records = row.get("dimension_records", [])
    return {
        "queue_id": row.get("queue_id"),
        "source_urls": sorted(set(row.get("source_urls", []))),
        "source_url_count": len(set(row.get("source_urls", []))),
        "observed_dates": sorted(set(item.get("observed_date") for item in records if item.get("observed_date"))),
        "evidence_class_counts": dict(sorted(Counter(item.get("evidence_class", "unknown") for item in records).items())),
        "dimension_ids": sorted(item.get("dimension_id") for item in records),
    }


def build_ledger(data: dict[str, Any], expansion: dict[str, dict[str, Any]], by_industry: dict[str, list[dict[str, Any]]]) -> list[dict[str, Any]]:
    output: list[dict[str, Any]] = []
    baseline_keys = {identity(row)["canonical_key"] for row in data["baseline"]}
    for industry in sorted(by_industry):
        qrows = by_industry[industry]
        complete_count = sum(row.get("status") == "complete" for row in qrows)
        partial = sorted((row for row in qrows if row.get("status") == "partial"), key=lambda row: row["_canonical_key"])
        deficit = 100 - complete_count
        assert len(partial) >= deficit, (industry, len(partial), deficit)
        assigned = partial[:deficit]
        assert len({row["_canonical_key"] for row in assigned}) == deficit
        for offset, row in enumerate(assigned, complete_count + 1):
            key = row["_canonical_key"]
            assert key in expansion
            repo = row["repository"]
            ident = expansion[key]["_identity"]
            assert row["dimension_count"] < 10 and row.get("dimensions_missing")
            output.append({
                "schema_version": SCHEMA_VERSION,
                "artifact_id": f"P7-CI-W2-ASSIGN-{len(output)+1:04d}",
                "lane_id": LANE_ID,
                "record_type": "partial_pair_assignment",
                "observed_date": OBSERVED_DATE,
                "industry": {"id": industry, "label": row["industry_label"]},
                "target": {
                    "required_complete_repositories": 100,
                    "target_position": offset,
                    "wave_1_complete_count": complete_count,
                    "wave_2_assignment": True,
                },
                "assignment_status": "assigned_existing_partial",
                "complete_status": "NOT_COMPLETE",
                "is_complete": False,
                "selection_order_key": key,
                "repository": {
                    "owner": ident["owner"],
                    "name": ident["name"],
                    "canonical_url": ident["canonical_url"],
                    "source_repo_url": repo["repo_url"].rstrip("/"),
                },
                "identity_reconciliation": {
                    "canonical_key": key,
                    "registry_presence": "baseline_and_expansion" if key in baseline_keys else "expansion_only",
                    "expansion_disposition": expansion[key].get("disposition", "unknown"),
                    "matrix_identity": True,
                    "wave_1_complete_assignment": False,
                },
                "closure_input": {
                    "queue_id": row["queue_id"],
                    "status": row["status"],
                    "dimension_count": row["dimension_count"],
                    "dimensions_present": sorted(row.get("dimensions_present", [])),
                    "dimensions_missing": sorted(row.get("dimensions_missing", [])),
                    "source_receipt": source_receipt(row),
                },
                "rights_state": {
                    "registry_license": expansion[key].get("license", "unknown"),
                    "registry_disposition": expansion[key].get("disposition", "unknown"),
                    "rights_clearance": "unknown_or_unresolved",
                    "notice_contributor_sbom": "unknown_or_not_scanned",
                    "admission": "NOT_ADMITTED",
                },
                "limitation": "Assignment reuses a current partial closure-queue pair for target planning only. It does not complete any missing dimension and does not prove rights, license clearance, capability, runtime behavior, or admission.",
                "falsifier_or_next_read_only_gate": "A repository-specific record showing a missing dimension is absent, contradicted, stale, or identity-mismatched changes this assignment; the smallest next gate is direct public evidence for every listed missing dimension plus rights/provenance review.",
                "stop_condition": "Do not change complete_status until exactly ten repository-specific dimension records with source, date, evidence class, limitation, and falsifier/next gate exist; do not reuse generic matrix evidence.",
                "boundary": dict(BOUNDARY, authenticated_behavior="U"),
            })
    assert len(output) == 1430
    return output


def build_edges(ledger: list[dict[str, Any]]) -> list[dict[str, Any]]:
    edges: list[dict[str, Any]] = []
    for row in ledger:
        edges.append({
            "schema_version": SCHEMA_VERSION,
            "artifact_id": f"P7-CI-W2-EDGE-{len(edges)+1:04d}",
            "lane_id": LANE_ID,
            "record_type": "identity_edge",
            "edge_type": "partial_pair_assignment",
            "observed_date": OBSERVED_DATE,
            "subject": {
                "industry_id": row["industry"]["id"],
                "target_position": row["target"]["target_position"],
                "assignment_status": row["assignment_status"],
            },
            "object": row["repository"],
            "identity": row["identity_reconciliation"],
            "closure_status": row["closure_input"],
            "evidence_class": "E",
            "source_urls": row["closure_input"]["source_receipt"]["source_urls"],
            "observed_dates": row["closure_input"]["source_receipt"]["observed_dates"],
            "rights_unknowns": row["rights_state"],
            "limitation": row["limitation"],
            "falsifier_or_next_read_only_gate": row["falsifier_or_next_read_only_gate"],
            "stop_condition": row["stop_condition"],
            "boundary": dict(BOUNDARY, authenticated_behavior="U"),
        })
    return edges


def render_report(data: dict[str, Any], by_industry: dict[str, list[dict[str, Any]]], ledger: list[dict[str, Any]], edges: list[dict[str, Any]], matrix_keys: set[str]) -> str:
    selected = len(ledger)
    partial_dim = Counter(row["closure_input"]["dimension_count"] for row in ledger)
    registry_disp = Counter(row["identity_reconciliation"]["expansion_disposition"] for row in ledger)
    lines = [
        "# Phase 7 corpus-integrity Wave 2 report",
        "",
        "Lane: `P7-CORPUS-INTEGRITY-W2`  ",
        f"Observed: `{OBSERVED_DATE}`  ",
        "Mode: research-only; parent goal active; no overall completion claim.",
        "",
        "## Outcome",
        "",
        f"Wave 2 deterministically assigns **{selected} existing partial industry–repository pairs** to the remaining target positions: one distinct canonical pair per position within each industry. These assignments close the identity/position layer only. Every row remains `complete_status=NOT_COMPLETE`, `is_complete=false`, and retains its actual missing dimensions. The measured complete-pair deficit remains **1,430**.",
        "",
        "No repository was fabricated, padded, cloned, copied, executed, built, deployed, benchmarked, scanned, admitted, or upgraded from partial to complete. The 270 Wave-1 complete pairs remain outside this output and were read as immutable context.",
        "",
        "## Inputs and deterministic method",
        "",
        "Inputs read: Phase-7 program and current state, coverage-gap audit, closure queue/manifest, 284-row baseline GitHub register, 500-row expansion register, merged and wave matrix inputs, and Wave-1 corpus-integrity artifacts. The source registers and matrix are public-metadata artifacts already present in the workspace; this lane performed no external write or authenticated access.",
        "",
        "Canonical identity is lowercase GitHub `owner/name` plus normalized `https://github.com/owner/name`; original source URL and display fields are retained. For each industry, the script sorts only closure rows with `status=partial` by canonical key and takes the first `100 - complete_count`. The queue’s `status=partial`, `dimension_count`, `dimensions_missing`, source URLs, dates, and evidence classes are copied as evidence metadata, not capability proof.",
        "",
        "A target position with an assigned partial pair is still an unresolved complete-pair deficit. A future dimension lane may close it only with ten repository-specific dimension records; generic matrix values, snippets, stars, tags, or assignment presence cannot do so.",
        "",
        "## Counts",
        "",
        "| Measure | Count |",
        "|---|---:|",
        f"| Industries | {len(by_industry)} |",
        "| Target positions per industry | 100 |",
        f"| Wave-2 assignment rows | {selected} |",
        f"| Distinct assigned `(industry, canonical_repo)` pairs | {len({(row['industry']['id'], row['repository']['canonical_url']) for row in ledger})} |",
        "| Wave-1 complete pairs preserved as context | 270 |",
        "| Current complete pairs | 270 |",
        "| Current partial pairs | 3,076 |",
        "| Complete-pair gap | 1,430 |",
        f"| Matrix canonical identities used by the queue | {len(matrix_keys)} |",
        "",
        "Assigned partial dimension-count distribution: " + ", ".join(f"`{key}={value}`" for key, value in sorted(partial_dim.items())) + ".",
        "Assigned expansion disposition states (not clearance): " + ", ".join(f"`{key}={value}`" for key, value in sorted(registry_disp.items())) + ".",
        "",
        "## Per-industry assignment and remaining complete deficit",
        "",
        "| Industry | Wave-1 complete | Partial pool | Wave-2 assigned | Complete still missing |",
        "|---|---:|---:|---:|---:|",
    ]
    for industry in sorted(by_industry):
        rows = by_industry[industry]
        complete = sum(row.get("status") == "complete" for row in rows)
        partial = sum(row.get("status") == "partial" for row in rows)
        lines.append(f"| {industry} | {complete} | {partial} | {100-complete} | {100-complete} |")
    lines += [
        "",
        "The two last columns are intentionally equal: Wave 2 fills target positions with unresolved partial pairs, so it does not reduce the complete-pair deficit.",
        "",
        "## Identity, rights, and unknown-state handling",
        "",
        "- Every assignment is matrix-aligned through the existing closure queue and expansion register; no matrix-only or synthetic identity is added.",
        "- Wave-1 complete assignments are not reused as Wave-2 partial assignments. The Wave-1 ledger and hashes are recorded in `lane-state.json`.",
        "- Registry `candidate`, `hold`, `reject`, `reference`, and `unknown` states remain visible in each assignment’s `rights_state`; none is a rights decision or admission.",
        "- Fork, mirror, alias, rebrand, notice, contributor, SBOM, runtime, support, maintenance, rollback, and exit questions remain unresolved unless directly represented by the preserved input record. This lane does not infer identity relationships from stars, fork counts, names, or capability tags.",
        "- The assignment edge file contains one edge per assigned target position and carries source URLs, observation dates, evidence classes, missing dimensions, rights unknowns, limitation, falsifier, and stop condition.",
        "",
        "## Boundaries and next gate",
        "",
        "All rows retain `research_only=true`, `execution_status=UNEXECUTED`, `admission_status=NOT_ADMITTED`, `implementation_authorized=false`, `admitted_blocks=0`, `authenticated_behavior=U`, and `parent_goal_status=active`. The next read-only gate is direct repository-specific evidence for each assignment’s missing dimensions, then independent rights/provenance/evaluation/runtime review. Until then, the complete-pair deficit is unchanged.",
        "",
        "`CORPUS_INTEGRITY_W2_POSTWRITE_SMOKE_PENDING`",
        "",
    ]
    return "\n".join(lines)


def build() -> None:
    data = load()
    baseline, expansion, matrix_keys, by_industry = maps(data)
    assert len(baseline) == 284 and len(expansion) == 500
    assert len(matrix_keys) == 216
    assert len(by_industry) == 17
    assert len(data["closure"]) == 3346
    assert sum(row.get("status") == "complete" for row in data["closure"]) == 270
    assert sum(row.get("status") == "partial" for row in data["closure"]) == 3076
    assert data["coverage"]["measured_current"]["complete_pair_gap"] == 1430
    assert data["manifest"]["complete_pair_gap"] == 1430
    ledger = build_ledger(data, expansion, by_industry)
    edges = build_edges(ledger)
    write_jsonl(LEDGER, ledger)
    write_jsonl(EDGES, edges)
    REPORT.write_text(render_report(data, by_industry, ledger, edges, matrix_keys), encoding="utf-8")
    state = {
        "schema_version": SCHEMA_VERSION,
        "artifact_id": "P7-CORPUS-INTEGRITY-W2-001",
        "lane_id": LANE_ID,
        "status": "written_pending_smoke",
        "tasks_completed": 0,
        "scope": "assign existing partial canonical industry-repository pairs to remaining target positions",
        "observed_date": OBSERVED_DATE,
        "output_directory": str(OUT.relative_to(P7)),
        "outputs": {
            "selection_assignment": LEDGER.name,
            "identity_edges": EDGES.name,
            "report": REPORT.name,
            "post_write_smoke": Path(__file__).name,
        },
        "counts": {
            "industries": 17,
            "target_positions_per_industry": 100,
            "wave_2_assignments": len(ledger),
            "distinct_industry_repository_pairs": len({(row["industry"]["id"], row["repository"]["canonical_url"]) for row in ledger}),
            "complete_pairs_preserved": 270,
            "partial_pairs_preserved": 3076,
            "complete_pair_gap_preserved": 1430,
            "matrix_identities": len(matrix_keys),
            "identity_edges": len(edges),
        },
        "assignment_policy": {
            "sort": "canonical owner/name ascending within industry",
            "source_status": "partial only",
            "complete_status": "NOT_COMPLETE for every Wave-2 assignment",
            "padding": False,
        },
        "input_sha256": source_hashes(),
        "research_only": True,
        "callback_status": "pending",
        "verification": {"status": "pending_post_write_smoke"},
        "boundary": dict(BOUNDARY, authenticated_behavior="U"),
    }
    STATE.write_text(json.dumps(state, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print(f"BUILD_PASS assignments={len(ledger)} edges={len(edges)} gap_preserved=1430")


def smoke() -> None:
    data = load()
    baseline, expansion, matrix_keys, by_industry = maps(data)
    ledger = read_jsonl(LEDGER)
    edges = read_jsonl(EDGES)
    report = REPORT.read_text(encoding="utf-8")
    state = json.loads(STATE.read_text(encoding="utf-8"))
    assert len(ledger) == 1430
    assert len(edges) == 1430
    assert len({row["artifact_id"] for row in ledger}) == 1430
    assert len({row["artifact_id"] for row in edges}) == 1430
    assert all(row["lane_id"] == LANE_ID for row in ledger + edges)
    assert all(row["record_type"] == "partial_pair_assignment" for row in ledger)
    assert all(row["record_type"] == "identity_edge" and row["edge_type"] == "partial_pair_assignment" for row in edges)
    assert all(row["complete_status"] == "NOT_COMPLETE" and row["is_complete"] is False for row in ledger)
    assert all(row["boundary"] == dict(BOUNDARY, authenticated_behavior="U") for row in ledger + edges)
    assert len({(row["industry"]["id"], row["repository"]["canonical_url"]) for row in ledger}) == 1430
    assigned_by_industry = defaultdict(list)
    for row in ledger:
        assigned_by_industry[row["industry"]["id"]].append(row)
        assert row["closure_input"]["status"] == "partial"
        assert row["closure_input"]["dimension_count"] < 10
        assert row["closure_input"]["dimensions_missing"]
        assert row["repository"]["canonical_url"].startswith("https://github.com/")
        assert row["identity_reconciliation"]["canonical_key"] in expansion
        assert row["identity_reconciliation"]["canonical_key"] in matrix_keys
        assert row["closure_input"]["source_receipt"]["source_url_count"] >= 1
    for industry, qrows in by_industry.items():
        complete = sum(row.get("status") == "complete" for row in qrows)
        assigned = assigned_by_industry[industry]
        assert len(assigned) == 100 - complete
        assert [row["target"]["target_position"] for row in assigned] == list(range(complete + 1, 101))
        assert len({row["repository"]["canonical_url"] for row in assigned}) == len(assigned)
        expected = sorted(row["_canonical_key"] for row in qrows if row.get("status") == "partial")[: 100 - complete]
        assert [row["selection_order_key"] for row in assigned] == expected
    assert sum(row.get("status") == "complete" for row in data["closure"]) == 270
    assert sum(row.get("status") == "partial" for row in data["closure"]) == 3076
    assert state["input_sha256"] == source_hashes()
    assert state["boundary"] == dict(BOUNDARY, authenticated_behavior="U")
    assert "CORPUS_INTEGRITY_W2_POSTWRITE_SMOKE_PENDING" in report
    REPORT.write_text(report.replace("CORPUS_INTEGRITY_W2_POSTWRITE_SMOKE_PENDING", "CORPUS_INTEGRITY_W2_POSTWRITE_SMOKE_PASS"), encoding="utf-8")
    state.update({
        "status": "complete",
        "tasks_completed": 8,
        "report_sha256": sha256(REPORT),
        "ledger_sha256": sha256(LEDGER),
        "edges_sha256": sha256(EDGES),
        "callback_status": "pending",
        "verification": {
            "status": "PASS",
            "structural": "PASS: 1,430 assignments across 17 industries; 100 target positions reconciled per industry",
            "identity_dedupe": "PASS: 1,430 distinct industry/canonical-repository pairs",
            "source_parity": "PASS: every assignment maps to a closure-queue partial row, expansion identity, and matrix identity",
            "complete_guard": "PASS: every Wave-2 row remains NOT_COMPLETE with dimension_count<10 and missing dimensions",
            "gap_preservation": "PASS: complete=270 partial=3076 complete_pair_gap=1430",
            "boundary": "PASS: research_only; authenticated=U; UNEXECUTED; NOT_ADMITTED; implementation=false; admitted_blocks=0; parent-active",
            "source_link_shape": "PASS: source URLs/date/evidence metadata retained; no network side effect",
            "wave_1_preservation": "PASS: Wave-1 inputs hashed and not overwritten",
            "report_marker": "PASS: CORPUS_INTEGRITY_W2_POSTWRITE_SMOKE_PASS",
        },
        "boundary": dict(BOUNDARY, authenticated_behavior="U"),
    })
    STATE.write_text(json.dumps(state, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print("CORPUS_INTEGRITY_W2_POSTWRITE_SMOKE_PASS")
    print("STRUCTURE_PASS assignments=1430 industries=17 target_per_industry=100")
    print("IDENTITY_PASS distinct_industry_repo_pairs=1430 matrix_aligned=1430")
    print("COMPLETE_GUARD_PASS all_assignments_partial_and_NOT_COMPLETE")
    print("GAP_PASS complete=270 partial=3076 gap=1430")
    print("BOUNDARY_PASS research_only=true authenticated=U execution=UNEXECUTED admission=NOT_ADMITTED implementation=false admitted_blocks=0 parent=active")
    print(f"HASHES report={state['report_sha256']} ledger={state['ledger_sha256']} edges={state['edges_sha256']}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--build", action="store_true")
    parser.add_argument("--smoke", action="store_true")
    args = parser.parse_args()
    if args.build == args.smoke:
        parser.error("choose exactly one of --build or --smoke")
    if args.build:
        build()
    else:
        smoke()


if __name__ == "__main__":
    main()
