#!/usr/bin/env python3
"""Build and smoke-test the Phase-7 corpus-integrity Wave-6 selection.

Wave 6 selects the next ten *partial* closure-queue pairs per industry after
excluding Wave-1 T1 queue IDs and Wave-2 through Wave-5 dimension-selected
queue IDs, plus every prior industry/canonical-repository identity. It
records evidence metadata but never promotes a pair to complete. All inputs
are existing local public-metadata artifacts; this script does not log in,
clone, copy source, execute source, build, deploy, benchmark, scan, or admit.
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
W2_COORD_JSON = P7 / "wave-2-coordinator-receipt.json"
W2_COORD_MD = P7 / "wave-2-coordinator-receipt.md"
W3_COORD_JSON = P7 / "wave-3-coordinator-receipt.json"
W3_COORD_MD = P7 / "wave-3-coordinator-receipt.md"
W4_COORD_JSON = P7 / "wave-4-coordinator-receipt.json"
W4_COORD_MD = P7 / "wave-4-coordinator-receipt.md"
W5_COORD_JSON = P7 / "wave-5-coordinator-receipt.json"
W5_COORD_MD = P7 / "wave-5-coordinator-receipt.md"
DISPATCH = P7 / "wave-6-dispatch-receipt.json"
MATRIX_MASTER = RUN / "expansion/outputs/repo-matrix-observations.jsonl"
MATRIX_WAVES = sorted((RUN / "expansion").glob("wave-*/outputs/repo-matrix-wave-*.jsonl"))

W1_DIR = P7 / "lanes/01-corpus-integrity/outputs"
W1_LEDGER = W1_DIR / "repository-selection-ledger.jsonl"
W1_EDGES = W1_DIR / "repository-identity-edges.jsonl"
W1_REPORT = W1_DIR / "corpus-integrity-report.md"
W1_STATE = W1_DIR / "lane-state.json"
W2_CORPUS_DIR = W1_DIR / "wave-2"
W2_CORPUS_LEDGER = W2_CORPUS_DIR / "selection-assignment-wave-2.jsonl"
W2_CORPUS_REPORT = W2_CORPUS_DIR / "corpus-integrity-wave-2-report.md"
W2_CORPUS_STATE = W2_CORPUS_DIR / "lane-state.json"

W2_DIM_DIR = P7 / "lanes/02-dimension-evidence/outputs/wave-2"
W2_DIM_LEDGER = W2_DIM_DIR / "dimension-evidence-ledger.jsonl"
W2_DIM_REPORT = W2_DIM_DIR / "dimension-depth-report.md"
W2_DIM_STATE = W2_DIM_DIR / "lane-state.json"

W3_CORPUS_DIR = W1_DIR / "wave-3"
W3_CORPUS_LEDGER = W3_CORPUS_DIR / "selection-ledger-wave-3.jsonl"
W3_CORPUS_REPORT = W3_CORPUS_DIR / "corpus-integrity-wave-3-report.md"
W3_CORPUS_STATE = W3_CORPUS_DIR / "lane-state.json"

W3_DIM_DIR = P7 / "lanes/02-dimension-evidence/outputs/wave-3"
W3_DIM_LEDGER = W3_DIM_DIR / "dimension-evidence-ledger.jsonl"
W3_DIM_REPORT = W3_DIM_DIR / "dimension-depth-report.md"
W3_DIM_STATE = W3_DIM_DIR / "lane-state.json"

W2_JOIN_DIR = P7 / "lanes/04-industry-joins/outputs/wave-2"
W2_JOIN_LEDGER = W2_JOIN_DIR / "industry-repository-joins.jsonl"
W2_JOIN_REPORT = W2_JOIN_DIR / "industry-coverage-report.md"
W2_JOIN_STATE = W2_JOIN_DIR / "lane-state.json"

W3_JOIN_DIR = P7 / "lanes/04-industry-joins/outputs/wave-3"
W3_JOIN_LEDGER = W3_JOIN_DIR / "industry-repository-joins.jsonl"
W3_JOIN_REPORT = W3_JOIN_DIR / "industry-coverage-report.md"
W3_JOIN_STATE = W3_JOIN_DIR / "lane-state.json"

W4_CORPUS_DIR = W1_DIR / "wave-4"
W4_CORPUS_LEDGER = W4_CORPUS_DIR / "selection-ledger-wave-4.jsonl"
W4_CORPUS_REPORT = W4_CORPUS_DIR / "corpus-integrity-wave-4-report.md"
W4_CORPUS_STATE = W4_CORPUS_DIR / "lane-state.json"

W4_DIM_DIR = P7 / "lanes/02-dimension-evidence/outputs/wave-4"
W4_DIM_LEDGER = W4_DIM_DIR / "dimension-evidence-ledger.jsonl"
W4_DIM_REPORT = W4_DIM_DIR / "dimension-depth-report.md"
W4_DIM_STATE = W4_DIM_DIR / "lane-state.json"

W4_JOIN_DIR = P7 / "lanes/04-industry-joins/outputs/wave-4"
W4_JOIN_LEDGER = W4_JOIN_DIR / "industry-repository-joins.jsonl"
W4_JOIN_REPORT = W4_JOIN_DIR / "industry-coverage-report.md"
W4_JOIN_STATE = W4_JOIN_DIR / "lane-state.json"

W5_CORPUS_DIR = W1_DIR / "wave-5"
W5_CORPUS_LEDGER = W5_CORPUS_DIR / "selection-ledger-wave-5.jsonl"
W5_CORPUS_REPORT = W5_CORPUS_DIR / "corpus-integrity-wave-5-report.md"
W5_CORPUS_STATE = W5_CORPUS_DIR / "lane-state.json"

W5_DIM_DIR = P7 / "lanes/02-dimension-evidence/outputs/wave-5"
W5_DIM_LEDGER = W5_DIM_DIR / "dimension-evidence-ledger.jsonl"
W5_DIM_REPORT = W5_DIM_DIR / "dimension-depth-report.md"
W5_DIM_STATE = W5_DIM_DIR / "lane-state.json"

W5_JOIN_DIR = P7 / "lanes/04-industry-joins/outputs/wave-5"
W5_JOIN_LEDGER = W5_JOIN_DIR / "industry-repository-joins.jsonl"
W5_JOIN_REPORT = W5_JOIN_DIR / "industry-coverage-report.md"
W5_JOIN_STATE = W5_JOIN_DIR / "lane-state.json"

LEDGER = OUT / "selection-ledger-wave-6.jsonl"
EDGES = OUT / "identity-edges-wave-6.jsonl"
REPORT = OUT / "corpus-integrity-wave-6-report.md"
STATE = OUT / "lane-state.json"

LANE_ID = "P7-CORPUS-INTEGRITY-W6"
OBSERVED_DATE = "2026-08-27"
SCHEMA_VERSION = 1
SELECTION_RULE = "dimension_count descending then queue_id ascending; exclude every Wave-1 T1 queue_id and every Wave-2 through Wave-5 dimension-selected queue_id, and exclude every prior industry/canonical-repository identity; take next 10 partial rows per industry"
BOUNDARY = {
    "research_only": True,
    "vendor_login": False,
    "client_data": False,
    "private_data": False,
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
    "authenticated_behavior": "U",
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


def write_jsonl(path: Path, rows: list[dict[str, Any]]) -> None:
    path.write_text("\n".join(json.dumps(row, sort_keys=True, separators=(",", ":")) for row in rows) + "\n", encoding="utf-8")


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def canonical_repo(url: str) -> tuple[str, str, str]:
    clean = url.strip().split("#", 1)[0].split("?", 1)[0].rstrip("/")
    match = re.fullmatch(r"https?://github\.com/([^/]+)/([^/]+?)(?:\.git)?", clean, re.I)
    if not match:
        raise AssertionError(f"malformed GitHub repository URL: {url}")
    owner, name = match.group(1).lower(), match.group(2).lower()
    return owner, name, f"https://github.com/{owner}/{name}"


def registry_identity(row: dict[str, Any]) -> dict[str, Any]:
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


def queue_identity(row: dict[str, Any]) -> tuple[str, dict[str, Any]]:
    repo = row.get("repository") or {}
    if not isinstance(repo, dict) or not isinstance(repo.get("repo_url"), str):
        raise AssertionError(f"queue row lacks repository URL: {row.get('queue_id')}")
    owner, name, url = canonical_repo(repo["repo_url"])
    return f"{owner}/{name}", {
        "canonical_key": f"{owner}/{name}",
        "owner": owner,
        "name": name,
        "canonical_url": url,
        "source_repo_url": repo["repo_url"].rstrip("/"),
    }


def source_hashes() -> dict[str, str]:
    paths = [
        DISPATCH, PROGRAM, W2_COORD_JSON, W2_COORD_MD, W3_COORD_JSON, W3_COORD_MD,
        W4_COORD_JSON, W4_COORD_MD, W5_COORD_JSON, W5_COORD_MD,
        COVERAGE, MANIFEST, BASELINE, EXPANSION, CLOSURE,
        MATRIX_MASTER, *MATRIX_WAVES,
        W1_LEDGER, W1_EDGES, W1_REPORT, W1_STATE,
        W2_CORPUS_LEDGER, W2_CORPUS_REPORT, W2_CORPUS_STATE,
        W2_DIM_LEDGER, W2_DIM_REPORT, W2_DIM_STATE,
        W2_JOIN_LEDGER, W2_JOIN_REPORT, W2_JOIN_STATE,
        W3_CORPUS_LEDGER, W3_CORPUS_REPORT, W3_CORPUS_STATE,
        W3_DIM_LEDGER, W3_DIM_REPORT, W3_DIM_STATE,
        W3_JOIN_LEDGER, W3_JOIN_REPORT, W3_JOIN_STATE,
        W4_CORPUS_LEDGER, W4_CORPUS_REPORT, W4_CORPUS_STATE,
        W4_DIM_LEDGER, W4_DIM_REPORT, W4_DIM_STATE,
        W4_JOIN_LEDGER, W4_JOIN_REPORT, W4_JOIN_STATE,
        W5_CORPUS_LEDGER, W5_CORPUS_REPORT, W5_CORPUS_STATE,
        W5_DIM_LEDGER, W5_DIM_REPORT, W5_DIM_STATE,
        W5_JOIN_LEDGER, W5_JOIN_REPORT, W5_JOIN_STATE,
    ]
    return {str(path.relative_to(RUN)): sha256(path) for path in paths}


def load_inputs() -> dict[str, Any]:
    matrices: list[dict[str, Any]] = []
    for path in [MATRIX_MASTER, *MATRIX_WAVES]:
        matrices.extend(read_jsonl(path))
    return {
        "baseline": read_jsonl(BASELINE),
        "expansion": read_jsonl(EXPANSION),
        "closure": read_jsonl(CLOSURE),
        "matrices": matrices,
        "coverage": json.loads(COVERAGE.read_text(encoding="utf-8")),
        "manifest": json.loads(MANIFEST.read_text(encoding="utf-8")),
        "dispatch": json.loads(DISPATCH.read_text(encoding="utf-8")),
        "wave1_ledger": read_jsonl(W1_LEDGER),
        "wave2_corpus_ledger": read_jsonl(W2_CORPUS_LEDGER),
        "wave2_corpus_state": json.loads(W2_CORPUS_STATE.read_text(encoding="utf-8")),
        "wave2_dimension_ledger": read_jsonl(W2_DIM_LEDGER),
        "wave2_dimension_state": json.loads(W2_DIM_STATE.read_text(encoding="utf-8")),
        "wave2_join_ledger": read_jsonl(W2_JOIN_LEDGER),
        "wave2_join_state": json.loads(W2_JOIN_STATE.read_text(encoding="utf-8")),
        "wave3_corpus_ledger": read_jsonl(W3_CORPUS_LEDGER),
        "wave3_corpus_report": W3_CORPUS_REPORT.read_text(encoding="utf-8"),
        "wave3_corpus_state": json.loads(W3_CORPUS_STATE.read_text(encoding="utf-8")),
        "wave3_dimension_ledger": read_jsonl(W3_DIM_LEDGER),
        "wave3_dimension_report": W3_DIM_REPORT.read_text(encoding="utf-8"),
        "wave3_dimension_state": json.loads(W3_DIM_STATE.read_text(encoding="utf-8")),
        "wave3_join_ledger": read_jsonl(W3_JOIN_LEDGER),
        "wave3_join_report": W3_JOIN_REPORT.read_text(encoding="utf-8"),
        "wave3_join_state": json.loads(W3_JOIN_STATE.read_text(encoding="utf-8")),
        "wave4_corpus_ledger": read_jsonl(W4_CORPUS_LEDGER),
        "wave4_corpus_report": W4_CORPUS_REPORT.read_text(encoding="utf-8"),
        "wave4_corpus_state": json.loads(W4_CORPUS_STATE.read_text(encoding="utf-8")),
        "wave4_dimension_ledger": read_jsonl(W4_DIM_LEDGER),
        "wave4_dimension_report": W4_DIM_REPORT.read_text(encoding="utf-8"),
        "wave4_dimension_state": json.loads(W4_DIM_STATE.read_text(encoding="utf-8")),
        "wave4_join_ledger": read_jsonl(W4_JOIN_LEDGER),
        "wave4_join_report": W4_JOIN_REPORT.read_text(encoding="utf-8"),
        "wave4_join_state": json.loads(W4_JOIN_STATE.read_text(encoding="utf-8")),
        "wave5_corpus_ledger": read_jsonl(W5_CORPUS_LEDGER),
        "wave5_corpus_report": W5_CORPUS_REPORT.read_text(encoding="utf-8"),
        "wave5_corpus_state": json.loads(W5_CORPUS_STATE.read_text(encoding="utf-8")),
        "wave5_dimension_ledger": read_jsonl(W5_DIM_LEDGER),
        "wave5_dimension_report": W5_DIM_REPORT.read_text(encoding="utf-8"),
        "wave5_dimension_state": json.loads(W5_DIM_STATE.read_text(encoding="utf-8")),
        "wave5_join_ledger": read_jsonl(W5_JOIN_LEDGER),
        "wave5_join_report": W5_JOIN_REPORT.read_text(encoding="utf-8"),
        "wave5_join_state": json.loads(W5_JOIN_STATE.read_text(encoding="utf-8")),
    }


def maps(data: dict[str, Any]) -> tuple[dict[str, dict[str, Any]], dict[str, dict[str, Any]], set[str], dict[str, list[dict[str, Any]]]]:
    baseline: dict[str, dict[str, Any]] = {}
    expansion: dict[str, dict[str, Any]] = {}
    for row in data["baseline"]:
        ident = registry_identity(row)
        assert ident["canonical_key"] not in baseline
        baseline[ident["canonical_key"]] = {**row, "_identity": ident}
    for row in data["expansion"]:
        ident = registry_identity(row)
        assert ident["canonical_key"] not in expansion
        expansion[ident["canonical_key"]] = {**row, "_identity": ident}
    matrix_keys = {key for row in data["matrices"] if (parsed := row.get("repo_ref")) and isinstance(parsed, dict) and isinstance(parsed.get("repo_url"), str) for key, _ in [queue_identity({"repository": parsed})]}
    by_industry: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for row in data["closure"]:
        key, _ = queue_identity(row)
        item = dict(row)
        item["_canonical_key"] = key
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


def prior_identity_keys(data: dict[str, Any]) -> set[tuple[str, str]]:
    """Return prior industry/canonical-URL pairs from corpus and dimension records."""
    queue_by_id = {row["queue_id"]: row for row in data["closure"]}
    pairs: set[tuple[str, str]] = set()

    def add_queue_id(queue_id: str | None) -> None:
        if not queue_id or queue_id not in queue_by_id:
            return
        row = queue_by_id[queue_id]
        _, identity = queue_identity(row)
        pairs.add((row["industry_id"], identity["canonical_url"]))

    for rows in (
        data["wave1_ledger"],
        data["wave2_corpus_ledger"],
        data["wave3_corpus_ledger"],
        data["wave4_corpus_ledger"],
        data["wave5_corpus_ledger"],
    ):
        for row in rows:
            closure = row.get("closure_input", {})
            add_queue_id(row.get("queue_id") or closure.get("queue_id") or closure.get("source_receipt", {}).get("queue_id"))
    for ids in (
        set(data["wave2_dimension_state"]["excluded_wave1_t1_queue_ids"]),
        {row["queue_id"] for row in data["wave2_dimension_ledger"] if row.get("queue_id")},
        {row["queue_id"] for row in data["wave3_dimension_ledger"] if row.get("queue_id")},
        {row["queue_id"] for row in data["wave4_dimension_ledger"] if row.get("queue_id")},
        {row["queue_id"] for row in data["wave5_dimension_ledger"] if row.get("queue_id")},
    ):
        for queue_id in ids:
            add_queue_id(queue_id)
    return pairs


def build_selection(
    data: dict[str, Any],
    baseline: dict[str, dict[str, Any]],
    expansion: dict[str, dict[str, Any]],
    matrix_keys: set[str],
    by_industry: dict[str, list[dict[str, Any]]],
) -> tuple[list[dict[str, Any]], set[str], set[str], set[str], set[str], set[str], set[tuple[str, str]]]:
    wave1_t1_ids = set(data["wave2_dimension_state"]["excluded_wave1_t1_queue_ids"])
    wave2_dimension_ids = {row["queue_id"] for row in data["wave2_dimension_ledger"] if row.get("queue_id")}
    wave3_dimension_ids = {row["queue_id"] for row in data["wave3_dimension_ledger"] if row.get("queue_id")}
    wave4_dimension_ids = {row["queue_id"] for row in data["wave4_dimension_ledger"] if row.get("queue_id")}
    wave5_dimension_ids = {row["queue_id"] for row in data["wave5_dimension_ledger"] if row.get("queue_id")}
    assert len(wave1_t1_ids) == 10
    assert len(wave2_dimension_ids) == 170
    assert len(wave3_dimension_ids) == 170
    assert len(wave4_dimension_ids) == 170
    assert len(wave5_dimension_ids) == 170
    assert not wave1_t1_ids & wave2_dimension_ids
    assert not wave1_t1_ids & wave3_dimension_ids
    assert not wave2_dimension_ids & wave3_dimension_ids
    assert not wave1_t1_ids & wave4_dimension_ids
    assert not wave2_dimension_ids & wave4_dimension_ids
    assert not wave3_dimension_ids & wave4_dimension_ids
    assert not wave1_t1_ids & wave5_dimension_ids
    assert not wave2_dimension_ids & wave5_dimension_ids
    assert not wave3_dimension_ids & wave5_dimension_ids
    assert not wave4_dimension_ids & wave5_dimension_ids
    excluded = wave1_t1_ids | wave2_dimension_ids | wave3_dimension_ids | wave4_dimension_ids | wave5_dimension_ids
    prior_ids = prior_identity_keys(data)
    wave2_corpus_ids = {row["closure_input"]["queue_id"] for row in data["wave2_corpus_ledger"] if row.get("closure_input", {}).get("queue_id")}
    wave3_corpus_ids = {row["closure_input"]["queue_id"] for row in data["wave3_corpus_ledger"] if row.get("closure_input", {}).get("queue_id")}
    wave4_corpus_ids = {row["closure_input"]["queue_id"] for row in data["wave4_corpus_ledger"] if row.get("closure_input", {}).get("queue_id")}
    wave5_corpus_ids = {row["closure_input"]["queue_id"] for row in data["wave5_corpus_ledger"] if row.get("closure_input", {}).get("queue_id")}
    output: list[dict[str, Any]] = []
    for industry in sorted(by_industry):
        qrows = by_industry[industry]
        available = sorted(
            (row for row in qrows if row.get("status") == "partial" and row.get("queue_id") not in excluded and (industry, f"https://github.com/{row['_canonical_key']}") not in prior_ids),
            key=lambda row: (-row["dimension_count"], row["queue_id"]),
        )
        assert len(available) >= 10, (industry, len(available))
        selected = available[:10]
        assert len({row["_canonical_key"] for row in selected}) == 10
        for order, row in enumerate(selected, 1):
            key = row["_canonical_key"]
            assert key in expansion and key in matrix_keys
            repo = row["repository"]
            ident = expansion[key]["_identity"]
            assert row["dimension_count"] < 10 and row.get("dimensions_missing")
            output.append({
                "schema_version": SCHEMA_VERSION,
                "artifact_id": f"P7-CI-W6-SEL-{len(output)+1:04d}",
                "lane_id": LANE_ID,
                "record_type": "wave6_partial_selection",
                "observed_date": OBSERVED_DATE,
                "industry": {"id": industry, "label": row["industry_label"]},
                "selection": {
                    "order_within_industry": order,
                    "selection_rule": SELECTION_RULE,
                    "excluded_wave1_t1": row["queue_id"] in wave1_t1_ids,
                    "excluded_wave2_dimension": row["queue_id"] in wave2_dimension_ids,
                    "excluded_wave3_dimension": row["queue_id"] in wave3_dimension_ids,
                    "excluded_wave4_dimension": row["queue_id"] in wave4_dimension_ids,
                    "excluded_wave5_dimension": row["queue_id"] in wave5_dimension_ids,
                    "prior_wave2_corpus_assignment": row["queue_id"] in wave2_corpus_ids,
                    "prior_wave3_corpus_selection": row["queue_id"] in wave3_corpus_ids,
                    "prior_wave4_corpus_selection": row["queue_id"] in wave4_corpus_ids,
                    "prior_wave5_corpus_selection": row["queue_id"] in wave5_corpus_ids,
                    "prior_identity_overlap": False,
                },
                "repository": {
                    "owner": ident["owner"],
                    "name": ident["name"],
                    "canonical_url": ident["canonical_url"],
                    "source_repo_url": repo["repo_url"].rstrip("/"),
                },
                "identity_reconciliation": {
                    "canonical_key": key,
                    "registry_presence": "baseline_and_expansion" if key in baseline else "expansion_only",
                    "expansion_disposition": expansion[key].get("disposition", "unknown"),
                    "matrix_identity": True,
                    "canonical_url_match": True,
                    "wave1_t1_queue_id": False,
                    "wave2_dimension_queue_id": False,
                    "wave3_dimension_queue_id": False,
                    "wave4_dimension_queue_id": False,
                    "wave5_dimension_queue_id": False,
                    "prior_identity_overlap": False,
                },
                "closure_input": {
                    "queue_id": row["queue_id"],
                    "status": row["status"],
                    "dimension_count": row["dimension_count"],
                    "dimensions_present": sorted(row.get("dimensions_present", [])),
                    "dimensions_missing": sorted(row.get("dimensions_missing", [])),
                    "source_receipt": source_receipt(row),
                },
                "evidence_quality": {
                    "evidence_class": "E",
                    "direct_claims": [
                        "The existing closure queue records this canonical repository pair with status=partial.",
                        f"The closure queue contains {row['dimension_count']} repository-specific dimension records and preserves source URLs/date metadata for those records.",
                    ],
                    "inferred_claims": [
                        "INFERENCE: This is a candidate for future dimension closure, not a complete repository or capability proof.",
                        "INFERENCE: Industry relevance remains bounded by the inherited queue relation and is not independently validated here.",
                    ],
                    "access_limits": "Existing public GitHub metadata/queue context only; no login, repository checkout, source copy, source execution, runtime, build, deployment, benchmark, scan, or admission.",
                },
                "unknown_block_contract_fields": sorted(set(row.get("dimensions_missing", [])) | {
                    "rights_provenance",
                    "license_notice_contributor_provenance",
                    "dependency_sbom",
                    "runtime_behavior",
                    "capability_proof",
                    "authority_side_effects",
                    "portability",
                    "maintenance_support",
                    "rollback_recovery",
                    "economics",
                }),
                "rights_unknowns": {
                    "registry_license": expansion[key].get("license", "unknown"),
                    "registry_disposition": expansion[key].get("disposition", "unknown"),
                    "rights_clearance": "unknown_or_unresolved",
                    "notice_contributor_provenance": "unknown_or_not_reviewed",
                    "dependency_sbom": "unknown_not_scanned",
                    "admission": "NOT_ADMITTED",
                },
                "limitation": "Wave-6 selection is an identity/coverage tranche only. A partial queue row cannot satisfy the ten-dimension completion contract, and assignment does not establish rights, capability, runtime behavior, production safety, or admission.",
                "falsifier": "A conflicting canonical URL/owner/name, a queue correction, a missing or contradicted source record, or a rights/provenance finding would invalidate or hold this selection.",
                "next_read_only_gate": "Produce repository-specific public evidence for every listed missing dimension, with source/date/evidence class/limitation/falsifier, then perform separate rights, SBOM, evaluation, runtime, authority, maintenance, and rollback review.",
                "stop_condition": "Do not change complete_status or claim completion until exactly ten repository-specific dimension records satisfy the Phase-7 contract; do not copy generic cell evidence.",
                "complete_status": "NOT_COMPLETE",
                "is_complete": False,
                "boundary": dict(BOUNDARY),
            })
    assert len(output) == 170
    assert all((row["industry"]["id"], row["repository"]["canonical_url"]) not in prior_ids for row in output)
    return output, wave1_t1_ids, wave2_dimension_ids, wave3_dimension_ids, wave4_dimension_ids, wave5_dimension_ids, prior_ids


def build_edges(ledger: list[dict[str, Any]]) -> list[dict[str, Any]]:
    edges: list[dict[str, Any]] = []
    for row in ledger:
        edges.append({
            "schema_version": SCHEMA_VERSION,
            "artifact_id": f"P7-CI-W6-EDGE-{len(edges)+1:04d}",
            "lane_id": LANE_ID,
            "record_type": "identity_edge",
            "edge_type": "wave6_partial_selection",
            "observed_date": OBSERVED_DATE,
            "subject": {
                "industry_id": row["industry"]["id"],
                "order_within_industry": row["selection"]["order_within_industry"],
                "queue_id": row["closure_input"]["queue_id"],
            },
            "object": row["repository"],
            "relationship": {
                "canonical_identity": row["identity_reconciliation"],
                "selection": row["selection"],
                "complete_status": row["complete_status"],
            },
            "source_urls": row["closure_input"]["source_receipt"]["source_urls"],
            "observed_dates": row["closure_input"]["source_receipt"]["observed_dates"],
            "evidence_class": row["evidence_quality"]["evidence_class"],
            "unknown_block_contract_fields": row["unknown_block_contract_fields"],
            "rights_unknowns": row["rights_unknowns"],
            "limitation": row["limitation"],
            "falsifier": row["falsifier"],
            "next_read_only_gate": row["next_read_only_gate"],
            "boundary": dict(BOUNDARY),
        })
    return edges


def render_report(
    data: dict[str, Any],
    by_industry: dict[str, list[dict[str, Any]]],
    ledger: list[dict[str, Any]],
    wave1_ids: set[str],
    wave2_ids: set[str],
    wave3_ids: set[str],
    wave4_ids: set[str],
    wave5_ids: set[str],
    prior_ids: set[tuple[str, str]],
) -> str:
    prior_w2_corpus = sum(row["selection"]["prior_wave2_corpus_assignment"] for row in ledger)
    prior_w3_corpus = sum(row["selection"]["prior_wave3_corpus_selection"] for row in ledger)
    prior_w4_corpus = sum(row["selection"]["prior_wave4_corpus_selection"] for row in ledger)
    prior_w5_corpus = sum(row["selection"]["prior_wave5_corpus_selection"] for row in ledger)
    dim_counts = Counter(row["closure_input"]["dimension_count"] for row in ledger)
    state_anchor = data["dispatch"]["immutable_inputs"].get("phase_7_state_after_wave_5")
    state_anchor_text = state_anchor["sha256"] if isinstance(state_anchor, dict) and state_anchor.get("sha256") else "NOT_DECLARED_IN_LIVE_DISPATCH"
    lines = [
        "# Phase 7 corpus-integrity Wave 6 report",
        "",
        "Lane: `P7-CORPUS-INTEGRITY-W6`  ",
        f"Observed: `{OBSERVED_DATE}`  ",
        "Mode: research-only; parent goal active; no overall completion claim.",
        "",
        "## Outcome",
        "",
        "Wave 6 selects exactly the next 10 remaining partial closure-queue pairs in each of 17 industries, for 170 distinct canonical industry–repository pairs. The queue-ID exclusion set is the 10 Wave-1 T1 IDs plus the 170 dimension-selected IDs from each of Waves 2–5, for 690 IDs. A separate pair-level prior-identity guard excludes every industry/canonical-repository identity already present in Waves 1–5. Every selected row remains `complete_status=NOT_COMPLETE`, `is_complete=false`, and carries its actual missing dimensions.",
        "",
        "This tranche advances selection coverage only. It preserves the current complete count of 270 and the complete-pair gap of 1,430. Prior Wave-2 through Wave-5 corpus selections are tracked explicitly; the pair-level prior-identity guard yields zero overlap in the selected tranche. No pair is promoted or completed.",
        "",
        "## Inputs and method",
        "",
        "Read: the Wave-2 through Wave-5 coordinator receipts and Wave-6 dispatch receipt, closure queue/coverage audit/manifest, Wave-1 through Wave-5 corpus artifacts, Wave-2 through Wave-5 dimension state/ledger, Wave-2 through Wave-5 industry-joins state/ledger, the 284-row baseline register, the 500-row expansion register, and current matrix inputs. Only existing public-metadata artifacts were used; no login, credentials, client/private data, clone/copy, source execution, implementation, build, deployment, benchmark, scan, external write, or admission occurred.",
        "",
        f"Selection rule: `{SELECTION_RULE}`. Canonical identity is case-folded GitHub `owner/name` plus normalized `https://github.com/owner/name`. Queue status, dimension count, source URLs, observed dates, and evidence classes are preserved. W1 T1 plus W2–W5 dimension sets are queue exclusions; prior W1–W5 corpus identities are a separate pair-level exclusion.",
        f"The dispatch's historical Phase-7 state anchor is `{state_anchor_text}`; the live state observed before this lane write was `{sha256(P7 / 'phase-7-state.json')}`. If the anchor is absent or differs, that condition is preserved as coordinator activity; this lane did not write central state and does not use the live state to select pairs.",
        "",
        "## Exact counters",
        "",
        "| Measure | Count |",
        "|---|---:|",
        "| Industries | 17 |",
        "| Selected pairs per industry | 10 |",
        "| Wave-6 selection rows | 170 |",
        "| Wave-6 identity edges | 170 |",
        f"| Wave-1 T1 queue IDs excluded | {len(wave1_ids)} |",
        f"| Wave-2 dimension queue IDs excluded | {len(wave2_ids)} |",
        f"| Wave-3 dimension queue IDs excluded | {len(wave3_ids)} |",
        f"| Wave-4 dimension queue IDs excluded | {len(wave4_ids)} |",
        f"| Wave-5 dimension queue IDs excluded | {len(wave5_ids)} |",
        f"| Prior identity pairs excluded | {len(prior_ids)} |",
        f"| Prior Wave-2 corpus-assignment overlap, flagged only | {prior_w2_corpus} |",
        f"| Prior Wave-3 corpus-selection overlap, flagged only | {prior_w3_corpus} |",
        f"| Prior Wave-4 corpus-selection overlap, flagged only | {prior_w4_corpus} |",
        f"| Prior Wave-5 corpus-selection overlap, flagged only | {prior_w5_corpus} |",
        "| Prior identity overlap in selected tranche | 0 |",
        "| Complete pairs preserved | 270 |",
        "| Partial pairs preserved | 3,076 |",
        "| Complete-pair gap preserved | 1,430 |",
        f"| Assigned dimension counts | {', '.join(f'{key}={value}' for key, value in sorted(dim_counts.items(), reverse=True))} |",
        "",
        "The 170 selected rows are not 170 complete pairs. The dimension evidence lane owns completion; this lane owns canonical selection and exclusion integrity.",
        "",
        "## Per-industry selection",
        "",
        "| Industry | Partial queue pool | W1 T1 excluded | W2 dimension excluded | W3 dimension excluded | W4 dimension excluded | W5 dimension excluded | Prior identity excluded | Remaining after exclusions | Selected | Dimension counts |",
        "|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|",
    ]
    for industry in sorted(by_industry):
        qrows = by_industry[industry]
        partial = [row for row in qrows if row.get("status") == "partial"]
        w1 = sum(row.get("queue_id") in wave1_ids for row in partial)
        w2 = sum(row.get("queue_id") in wave2_ids for row in partial)
        w3 = sum(row.get("queue_id") in wave3_ids for row in partial)
        w4 = sum(row.get("queue_id") in wave4_ids for row in partial)
        w5 = sum(row.get("queue_id") in wave5_ids for row in partial)
        prior_identity_count = sum((industry, f"https://github.com/{row['_canonical_key']}") in prior_ids for row in partial)
        remaining = [row for row in partial if row.get("queue_id") not in wave1_ids | wave2_ids | wave3_ids | wave4_ids | wave5_ids and (industry, f"https://github.com/{row['_canonical_key']}") not in prior_ids]
        selected = [row for row in ledger if row["industry"]["id"] == industry]
        dist = Counter(row["closure_input"]["dimension_count"] for row in selected)
        dist_text = ", ".join(f"{key}:{value}" for key, value in sorted(dist.items(), reverse=True))
        lines.append(f"| {industry} | {len(partial)} | {w1} | {w2} | {w3} | {w4} | {w5} | {prior_identity_count} | {len(remaining)} | {len(selected)} | {dist_text} |")
    lines += [
        "",
        "## Evidence, rights, and falsifier boundary",
        "",
        "The queue records are repository-specific public metadata context with evidence class `E`, but they are not runtime or authenticated proof. Direct claims are limited to what the queue records; industry/capability implications are explicitly inferred. Every row has source URLs, source dates, evidence-class counts, missing dimensions, access limits, unknown Block Contract fields, rights/license/SBOM unknowns, falsifier, smallest next read-only gate, and a stop condition.",
        "",
        "Registry dispositions (`candidate`, `hold`, `reject`, `reference`, `unknown`) and license signals remain unchanged and are not rights clearance. Fork/mirror/alias/rebrand status is not re-inferred in this tranche. Runtime behavior, capability, authority, source provenance, SBOM, maintenance, support, rollback, portability, and admission remain unknown or not run.",
        "",
        "## Boundaries",
        "",
        "All Wave-6 records carry `research_only=true`, `authenticated_behavior=U`, `execution_status=UNEXECUTED`, `admission_status=NOT_ADMITTED`, `implementation_authorized=false`, `admitted_blocks=0`, and `parent_goal_status=active`. The 1,430 complete-pair gap is preserved; this report does not claim the target is complete.",
        "",
        "`CORPUS_INTEGRITY_W6_POSTWRITE_SMOKE_PENDING`",
        "",
    ]
    return "\n".join(lines)


def build() -> None:
    data = load_inputs()
    baseline, expansion, matrix_keys, by_industry = maps(data)
    dispatch = data["dispatch"]
    assert dispatch["wave"] == 6 and dispatch["phase_verified"] is False
    assert dispatch["parent_goal_status"] == "active"
    assert dispatch["contracts"][0]["lane_id"] == LANE_ID
    assert dispatch["contracts"][0]["target"]["prior_exclusion_union"] == 690
    assert dispatch["contracts"][0]["target"]["identity_overlap_with_waves_1_to_5"] == 0
    assert len(baseline) == 284 and len(expansion) == 500 and len(matrix_keys) == 216
    assert len(data["closure"]) == 3346
    assert sum(row.get("status") == "complete" for row in data["closure"]) == 270
    assert sum(row.get("status") == "partial" for row in data["closure"]) == 3076
    assert data["coverage"]["measured_current"]["complete_pair_gap"] == 1430
    assert data["manifest"]["complete_pair_gap"] == 1430
    assert len(data["wave2_join_ledger"]) == 1248
    assert len(data["wave3_join_ledger"]) == 1056
    ledger, wave1_ids, wave2_ids, wave3_ids, wave4_ids, wave5_ids, prior_ids = build_selection(data, baseline, expansion, matrix_keys, by_industry)
    edges = build_edges(ledger)
    write_jsonl(LEDGER, ledger)
    write_jsonl(EDGES, edges)
    REPORT.write_text(render_report(data, by_industry, ledger, wave1_ids, wave2_ids, wave3_ids, wave4_ids, wave5_ids, prior_ids), encoding="utf-8")
    state = {
        "schema_version": SCHEMA_VERSION,
        "artifact_id": "P7-CORPUS-INTEGRITY-W6-001",
        "lane_id": LANE_ID,
        "status": "written_pending_smoke",
        "tasks_completed": 0,
        "scope": "next 10 remaining partial queue pairs per industry after Wave-1 T1 and Wave-2 through Wave-5 dimension exclusions plus all prior Wave-1 through Wave-5 industry/canonical-repository identities",
        "observed_date": OBSERVED_DATE,
        "output_directory": str(OUT.relative_to(P7)),
        "outputs": {
            "selection_ledger": LEDGER.name,
            "identity_edges": EDGES.name,
            "report": REPORT.name,
            "post_write_smoke": Path(__file__).name,
        },
        "counts": {
            "industries": 17,
            "selected_pairs_per_industry": 10,
            "selection_rows": len(ledger),
            "identity_edges": len(edges),
            "wave1_t1_excluded_queue_ids": len(wave1_ids),
            "wave2_dimension_excluded_queue_ids": len(wave2_ids),
            "wave3_dimension_excluded_queue_ids": len(wave3_ids),
            "wave4_dimension_excluded_queue_ids": len(wave4_ids),
            "wave5_dimension_excluded_queue_ids": len(wave5_ids),
            "prior_identity_pairs_excluded": len(prior_ids),
            "prior_wave2_corpus_assignment_overlap": sum(row["selection"]["prior_wave2_corpus_assignment"] for row in ledger),
            "prior_wave3_corpus_selection_overlap": sum(row["selection"]["prior_wave3_corpus_selection"] for row in ledger),
            "prior_wave4_corpus_selection_overlap": sum(row["selection"]["prior_wave4_corpus_selection"] for row in ledger),
            "prior_wave5_corpus_selection_overlap": sum(row["selection"]["prior_wave5_corpus_selection"] for row in ledger),
            "prior_identity_overlap_selected": sum(row["selection"]["prior_identity_overlap"] for row in ledger),
            "complete_pairs_preserved": 270,
            "partial_pairs_preserved": 3076,
            "complete_pair_gap_preserved": 1430,
            "dimension_count_distribution": dict(sorted(Counter(row["closure_input"]["dimension_count"] for row in ledger).items())),
        },
        "selection_rule": SELECTION_RULE,
        "input_sha256": source_hashes(),
        "dispatch_phase7_state_anchor": dispatch["immutable_inputs"].get("phase_7_state_after_wave_5", {"status": "not_declared_in_live_dispatch"}),
        "observed_phase7_state_sha256": sha256(P7 / "phase-7-state.json"),
        "observed_phase7_state_anchor_match": bool(dispatch["immutable_inputs"].get("phase_7_state_after_wave_5", {}).get("sha256")) and sha256(P7 / "phase-7-state.json") == dispatch["immutable_inputs"]["phase_7_state_after_wave_5"]["sha256"],
        "research_only": True,
        "callback_status": "pending",
        "verification": {"status": "pending_post_write_smoke"},
        "boundary": dict(BOUNDARY),
        "overall_completion_claim": False,
    }
    STATE.write_text(json.dumps(state, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print(f"BUILD_PASS selections={len(ledger)} edges={len(edges)} gap_preserved=1430")


def smoke() -> None:
    data = load_inputs()
    baseline, expansion, matrix_keys, by_industry = maps(data)
    ledger = read_jsonl(LEDGER)
    edges = read_jsonl(EDGES)
    report = REPORT.read_text(encoding="utf-8")
    state = json.loads(STATE.read_text(encoding="utf-8"))
    assert len(ledger) == 170 and len(edges) == 170
    assert len({row["artifact_id"] for row in ledger}) == 170
    assert len({row["artifact_id"] for row in edges}) == 170
    assert all(row["lane_id"] == LANE_ID for row in ledger + edges)
    assert all(row["record_type"] == "wave6_partial_selection" for row in ledger)
    assert all(row["record_type"] == "identity_edge" and row["edge_type"] == "wave6_partial_selection" for row in edges)
    assert all(row["complete_status"] == "NOT_COMPLETE" and row["is_complete"] is False for row in ledger)
    assert all(row["boundary"] == BOUNDARY for row in ledger + edges)
    wave1_ids = set(data["wave2_dimension_state"]["excluded_wave1_t1_queue_ids"])
    wave2_ids = {row["queue_id"] for row in data["wave2_dimension_ledger"] if row.get("queue_id")}
    wave3_ids = {row["queue_id"] for row in data["wave3_dimension_ledger"] if row.get("queue_id")}
    wave4_ids = {row["queue_id"] for row in data["wave4_dimension_ledger"] if row.get("queue_id")}
    wave5_ids = {row["queue_id"] for row in data["wave5_dimension_ledger"] if row.get("queue_id")}
    assert len(wave1_ids) == 10 and len(wave2_ids) == 170 and len(wave3_ids) == 170 and len(wave4_ids) == 170 and len(wave5_ids) == 170
    assert not wave1_ids & wave2_ids and not wave1_ids & wave3_ids and not wave1_ids & wave4_ids and not wave1_ids & wave5_ids
    assert not wave2_ids & wave3_ids and not wave2_ids & wave4_ids and not wave2_ids & wave5_ids
    assert not wave3_ids & wave4_ids and not wave3_ids & wave5_ids and not wave4_ids & wave5_ids
    excluded = wave1_ids | wave2_ids | wave3_ids | wave4_ids | wave5_ids
    prior_ids = prior_identity_keys(data)
    assert len(excluded) == 690
    assert all(row["closure_input"]["queue_id"] not in excluded for row in ledger)
    assert all((row["industry"]["id"], row["repository"]["canonical_url"]) not in prior_ids for row in ledger)
    assert len({(row["industry"]["id"], row["repository"]["canonical_url"]) for row in ledger}) == 170
    for industry, qrows in by_industry.items():
        partial = sorted((row for row in qrows if row.get("status") == "partial" and row.get("queue_id") not in excluded and (industry, f"https://github.com/{row['_canonical_key']}") not in prior_ids), key=lambda row: (-row["dimension_count"], row["queue_id"]))
        selected = [row for row in ledger if row["industry"]["id"] == industry]
        assert len(selected) == 10
        assert [row["closure_input"]["queue_id"] for row in selected] == [row["queue_id"] for row in partial[:10]]
        assert len({row["repository"]["canonical_url"] for row in selected}) == 10
        assert all(row["closure_input"]["status"] == "partial" and row["closure_input"]["dimension_count"] < 10 and row["closure_input"]["dimensions_missing"] for row in selected)
    assert sum(row.get("status") == "complete" for row in data["closure"]) == 270
    assert sum(row.get("status") == "partial" for row in data["closure"]) == 3076
    assert state["input_sha256"] == source_hashes()
    assert state["boundary"] == BOUNDARY
    assert state["overall_completion_claim"] is False
    assert "CORPUS_INTEGRITY_W6_POSTWRITE_SMOKE_PENDING" in report
    REPORT.write_text(report.replace("CORPUS_INTEGRITY_W6_POSTWRITE_SMOKE_PENDING", "CORPUS_INTEGRITY_W6_POSTWRITE_SMOKE_PASS"), encoding="utf-8")
    state.update({
        "status": "complete",
        "tasks_completed": 8,
        "report_sha256": sha256(REPORT),
        "ledger_sha256": sha256(LEDGER),
        "edges_sha256": sha256(EDGES),
        "callback_status": "pending",
        "verification": {
            "status": "PASS",
            "structural": "PASS: 170 records = 10 per industry across 17 industries",
            "identity_dedupe": "PASS: 170 distinct industry/canonical-repository pairs; zero overlap with prior W1-W5 identities",
            "exclusion_parity": "PASS: no Wave-1 T1 or Wave-2 through Wave-5 dimension-selected queue IDs reused",
            "source_parity": "PASS: every row maps to closure queue, expansion identity, and matrix identity",
            "complete_guard": "PASS: all rows partial, dimension_count<10, NOT_COMPLETE",
            "gap_preservation": "PASS: complete=270 partial=3076 complete_pair_gap=1430",
            "boundary": "PASS: research_only; authenticated=U; UNEXECUTED; NOT_ADMITTED; implementation=false; admitted_blocks=0; parent-active",
            "source_link_shape": "PASS: source URLs/date/evidence metadata retained; no network side effect",
            "wave1_wave5_preservation": "PASS: prior artifacts hashed and not overwritten",
            "report_marker": "PASS: CORPUS_INTEGRITY_W6_POSTWRITE_SMOKE_PASS",
        },
        "boundary": BOUNDARY,
    })
    STATE.write_text(json.dumps(state, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print("CORPUS_INTEGRITY_W6_POSTWRITE_SMOKE_PASS")
    print("STRUCTURE_PASS selections=170 industries=17 selected_per_industry=10")
    print("IDENTITY_PASS distinct_pairs=170 prior_identity_overlap=0 exclusions_wave1_t1=10 exclusions_wave2_dimension=170 exclusions_wave3_dimension=170 exclusions_wave4_dimension=170 exclusions_wave5_dimension=170")
    print("COMPLETE_GUARD_PASS all_partial_NOT_COMPLETE dimension_count_lt_10")
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
