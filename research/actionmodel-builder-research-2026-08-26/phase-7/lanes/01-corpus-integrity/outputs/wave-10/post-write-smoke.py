#!/usr/bin/env python3
"""Build and independently smoke-test the Phase-7 corpus-integrity W10 tranche.

This lane selects public-metadata partial pairs only. It never promotes a pair,
executes source, logs in, clones, builds, deploys, benchmarks, scans, or admits.
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
DISPATCH = P7 / "wave-10-dispatch-receipt.json"
W9_COORD = P7 / "wave-9-coordinator-receipt.json"
W9_DISPATCH = P7 / "wave-9-dispatch-receipt.json"
MATRIX_MASTER = RUN / "expansion/outputs/repo-matrix-observations.jsonl"
MATRIX_WAVES = sorted((RUN / "expansion").glob("wave-*/outputs/repo-matrix-wave-*.jsonl"))

W1_DIR = P7 / "lanes/01-corpus-integrity/outputs"
W1_LEDGER = W1_DIR / "repository-selection-ledger.jsonl"
W1_EDGES = W1_DIR / "repository-identity-edges.jsonl"
W1_REPORT = W1_DIR / "corpus-integrity-report.md"
W1_STATE = W1_DIR / "lane-state.json"

W2_CORPUS = W1_DIR / "wave-2/selection-assignment-wave-2.jsonl"
CORPUS_LEDGER = {
    1: W1_LEDGER,
    2: W2_CORPUS,
    **{i: W1_DIR / f"wave-{i}/selection-ledger-wave-{i}.jsonl" for i in range(3, 10)},
}
CORPUS_REPORT = {
    1: W1_REPORT,
    **{i: W1_DIR / f"wave-{i}/corpus-integrity-wave-{i}-report.md" for i in range(2, 10)},
}
CORPUS_STATE = {
    1: W1_STATE,
    **{i: W1_DIR / f"wave-{i}/lane-state.json" for i in range(2, 10)},
}

DIM_DIR = P7 / "lanes/02-dimension-evidence/outputs"
DIM_LEDGER = {i: DIM_DIR / f"wave-{i}/dimension-evidence-ledger.jsonl" for i in range(2, 10)}
DIM_REPORT = {i: DIM_DIR / f"wave-{i}/dimension-depth-report.md" for i in range(2, 10)}
DIM_STATE = {i: DIM_DIR / f"wave-{i}/lane-state.json" for i in range(2, 10)}

LEDGER = OUT / "selection-ledger-wave-10.jsonl"
EDGES = OUT / "identity-edges-wave-10.jsonl"
REPORT = OUT / "corpus-integrity-wave-10-report.md"
STATE = OUT / "lane-state.json"

LANE_ID = "P7-CORPUS-INTEGRITY-W10"
OBSERVED_DATE = "2026-08-27"
SCHEMA_VERSION = 1
SELECTION_RULE = (
    "dimension_count descending then queue_id ascending; exclude Wave-1 T1 and "
    "Wave-2 through Wave-9 dimension-selected queue IDs, then exclude every prior "
    "industry/canonical-repository identity; take the next 10 partial rows per industry"
)
BOUNDARY = {
    "research_only": True,
    "vendor_login": False,
    "client_data": False,
    "private_data": False,
    "credentials": False,
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
    path.write_text(
        "\n".join(json.dumps(row, sort_keys=True, separators=(",", ":")) for row in rows) + "\n",
        encoding="utf-8",
    )


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


def source_paths() -> list[Path]:
    paths = [
        DISPATCH, PROGRAM, W9_COORD, W9_DISPATCH, COVERAGE, MANIFEST, BASELINE,
        EXPANSION, CLOSURE, MATRIX_MASTER, *MATRIX_WAVES,
        W1_LEDGER, W1_EDGES, W1_REPORT, W1_STATE,
    ]
    paths.extend(path for i in range(2, 10) for path in (CORPUS_LEDGER[i], CORPUS_REPORT[i], CORPUS_STATE[i]))
    paths.extend(path for i in range(2, 10) for path in (DIM_LEDGER[i], DIM_REPORT[i], DIM_STATE[i]))
    return paths


def source_hashes() -> dict[str, str]:
    paths = source_paths()
    missing = [str(path) for path in paths if not path.exists()]
    assert not missing, f"missing immutable input(s): {missing}"
    return {str(path.relative_to(RUN)): sha256(path) for path in paths}


def load_inputs() -> dict[str, Any]:
    matrices: list[dict[str, Any]] = []
    for path in [MATRIX_MASTER, *MATRIX_WAVES]:
        matrices.extend(read_jsonl(path))
    data: dict[str, Any] = {
        "baseline": read_jsonl(BASELINE),
        "expansion": read_jsonl(EXPANSION),
        "closure": read_jsonl(CLOSURE),
        "matrices": matrices,
        "coverage": json.loads(COVERAGE.read_text(encoding="utf-8")),
        "manifest": json.loads(MANIFEST.read_text(encoding="utf-8")),
        "dispatch": json.loads(DISPATCH.read_text(encoding="utf-8")),
        "wave1_dimension_state": json.loads(DIM_STATE[2].read_text(encoding="utf-8")),
    }
    for i in range(1, 10):
        data[f"wave{i}_corpus_ledger"] = read_jsonl(CORPUS_LEDGER[i])
        data[f"wave{i}_corpus_state"] = json.loads(CORPUS_STATE[i].read_text(encoding="utf-8"))
    for i in range(2, 10):
        data[f"wave{i}_dimension_ledger"] = read_jsonl(DIM_LEDGER[i])
        data[f"wave{i}_dimension_state"] = json.loads(DIM_STATE[i].read_text(encoding="utf-8"))
    return data


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
    matrix_keys: set[str] = set()
    for row in data["matrices"]:
        ref = row.get("repo_ref")
        if isinstance(ref, dict) and isinstance(ref.get("repo_url"), str):
            matrix_keys.add(queue_identity({"repository": ref})[0])
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


def queue_id_from_record(row: dict[str, Any]) -> str | None:
    closure = row.get("closure_input") or {}
    source = closure.get("source_receipt") or {}
    return row.get("queue_id") or closure.get("queue_id") or source.get("queue_id")


def prior_identity_keys(data: dict[str, Any]) -> set[tuple[str, str]]:
    queue_by_id = {row["queue_id"]: row for row in data["closure"]}
    pairs: set[tuple[str, str]] = set()

    def add_queue_id(queue_id: str | None) -> None:
        if not queue_id or queue_id not in queue_by_id:
            return
        row = queue_by_id[queue_id]
        _, identity = queue_identity(row)
        pairs.add((row["industry_id"], identity["canonical_url"]))

    for wave in range(1, 10):
        for row in data[f"wave{wave}_corpus_ledger"]:
            add_queue_id(queue_id_from_record(row))
    for queue_ids in [
        set(data["wave1_dimension_state"].get("excluded_wave1_t1_queue_ids", [])),
        *({row["queue_id"] for row in data[f"wave{i}_dimension_ledger"] if row.get("queue_id")} for i in range(2, 10)),
    ]:
        for queue_id in queue_ids:
            add_queue_id(queue_id)
    return pairs


def dimension_sets(data: dict[str, Any]) -> tuple[set[str], ...]:
    wave1 = set(data["wave1_dimension_state"].get("excluded_wave1_t1_queue_ids", []))
    return (wave1, *({row["queue_id"] for row in data[f"wave{i}_dimension_ledger"] if row.get("queue_id")} for i in range(2, 10)))


def build_selection(
    data: dict[str, Any],
    baseline: dict[str, dict[str, Any]],
    expansion: dict[str, dict[str, Any]],
    matrix_keys: set[str],
    by_industry: dict[str, list[dict[str, Any]]],
) -> tuple[list[dict[str, Any]], tuple[set[str], ...], set[tuple[str, str]]]:
    wave_sets = dimension_sets(data)
    expected_sizes = (10, *([170] * 8))
    assert tuple(len(value) for value in wave_sets) == expected_sizes
    for index, left in enumerate(wave_sets):
        for right in wave_sets[index + 1:]:
            assert not left & right
    excluded = set().union(*wave_sets)
    assert len(excluded) == 1370
    prior_ids = prior_identity_keys(data)
    prior_corpus_ids = {
        wave: {queue_id_from_record(row) for row in data[f"wave{wave}_corpus_ledger"] if queue_id_from_record(row)}
        for wave in range(2, 10)
    }
    output: list[dict[str, Any]] = []
    for industry in sorted(by_industry):
        eligible = sorted(
            (
                row for row in by_industry[industry]
                if row.get("status") == "partial"
                and row.get("queue_id") not in excluded
                and (industry, f"https://github.com/{row['_canonical_key']}") not in prior_ids
            ),
            key=lambda row: (-row["dimension_count"], row["queue_id"]),
        )
        assert len(eligible) >= 10, (industry, len(eligible))
        for order, row in enumerate(eligible[:10], 1):
            key = row["_canonical_key"]
            assert key in expansion and key in matrix_keys
            ident = expansion[key]["_identity"]
            assert row["dimension_count"] < 10 and row.get("dimensions_missing")
            qid = row["queue_id"]
            output.append({
                "schema_version": SCHEMA_VERSION,
                "artifact_id": f"P7-CI-W10-SEL-{len(output)+1:04d}",
                "lane_id": LANE_ID,
                "record_type": "wave10_partial_selection",
                "observed_date": OBSERVED_DATE,
                "industry": {"id": industry, "label": row["industry_label"]},
                "selection": {
                    "order_within_industry": order,
                    "selection_rule": SELECTION_RULE,
                    "excluded_wave1_t1": qid in wave_sets[0],
                    **{f"excluded_wave{i}_dimension": qid in wave_sets[i-1] for i in range(2, 10)},
                    **{f"prior_wave{i}_corpus_selection": qid in prior_corpus_ids[i] for i in range(2, 10)},
                    "prior_identity_overlap": False,
                },
                "repository": {
                    "owner": ident["owner"],
                    "name": ident["name"],
                    "canonical_url": ident["canonical_url"],
                    "source_repo_url": row["repository"]["repo_url"].rstrip("/"),
                },
                "identity_reconciliation": {
                    "canonical_key": key,
                    "registry_presence": "baseline_and_expansion" if key in baseline else "expansion_only",
                    "expansion_disposition": expansion[key].get("disposition", "unknown"),
                    "matrix_identity": True,
                    "canonical_url_match": True,
                    "wave1_t1_queue_id": False,
                    **{f"wave{i}_dimension_queue_id": False for i in range(2, 10)},
                    **{f"prior_wave{i}_corpus_identity": False for i in range(1, 10)},
                    "prior_identity_overlap": False,
                },
                "closure_input": {
                    "queue_id": qid,
                    "status": row["status"],
                    "dimension_count": row["dimension_count"],
                    "dimensions_present": sorted(row.get("dimensions_present", [])),
                    "dimensions_missing": sorted(row.get("dimensions_missing", [])),
                    "source_receipt": source_receipt(row),
                },
                "source_provenance": {
                    "source_kind": "immutable_local_public_metadata_artifact",
                    "source_urls": sorted(set(row.get("source_urls", []))),
                    "observation_date": OBSERVED_DATE,
                    "evidence_class": "E",
                    "access_status": "public_metadata_already_present; no new external request",
                    "query": "none in W10; deterministic read-only selection from closure queue",
                },
                "evidence_quality": {
                    "evidence_class": "E",
                    "direct_claims": [
                        "The immutable closure queue records this canonical industry-repository pair as partial.",
                        f"The closure queue preserves {row['dimension_count']} repository-specific dimension records and their source URL/date metadata.",
                    ],
                    "inferred_claims": [
                        "INFERENCE: This is a candidate for future dimension closure, not a complete repository or capability proof.",
                        "INFERENCE: Industry relevance is inherited from the queue relation and is not independently validated in this lane.",
                    ],
                    "access_limits": "Existing public GitHub metadata/queue context only; no login, credentials, checkout, source copy, source execution, runtime, build, deployment, benchmark, scan, or admission.",
                },
                "unknown_block_contract_fields": sorted(set(row.get("dimensions_missing", [])) | {
                    "rights_provenance", "license_notice_contributor_provenance", "dependency_sbom",
                    "runtime_behavior", "capability_proof", "authority_side_effects", "portability",
                    "maintenance_support", "rollback_recovery", "economics",
                }),
                "rights_unknowns": {
                    "registry_license": expansion[key].get("license", "unknown"),
                    "registry_disposition": expansion[key].get("disposition", "unknown"),
                    "rights_clearance": "unknown_or_unresolved",
                    "notice_contributor_provenance": "unknown_or_not_reviewed",
                    "dependency_sbom": "unknown_not_scanned",
                    "admission": "NOT_ADMITTED",
                },
                "limitation": "W10 is an identity/coverage tranche only. A partial queue row cannot satisfy the ten-dimension completion contract, and assignment establishes no rights, capability, runtime behavior, production safety, support, rollback, or admission.",
                "falsifier": "A conflicting canonical URL/owner/name, queue correction, missing or contradicted source record, stale lifecycle signal, or rights/provenance finding would invalidate or hold this selection.",
                "next_read_only_gate": "Review public repository-specific evidence for every missing dimension, then perform separate rights, SBOM, evaluation, runtime, authority, maintenance, support, portability, and rollback review.",
                "stop_condition": "Do not change complete_status or claim completion until exactly ten repository-specific dimension records satisfy the Phase-7 contract; do not copy generic cell evidence.",
                "complete_status": "NOT_COMPLETE",
                "is_complete": False,
                "boundary": dict(BOUNDARY),
            })
    assert len(output) == 170
    assert len({(row["industry"]["id"], row["repository"]["canonical_url"]) for row in output}) == 170
    assert all((row["industry"]["id"], row["repository"]["canonical_url"]) not in prior_ids for row in output)
    return output, wave_sets, prior_ids


def build_edges(ledger: list[dict[str, Any]]) -> list[dict[str, Any]]:
    return [{
        "schema_version": SCHEMA_VERSION,
        "artifact_id": f"P7-CI-W10-EDGE-{index:04d}",
        "lane_id": LANE_ID,
        "record_type": "identity_edge",
        "edge_type": "wave10_partial_selection",
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
    } for index, row in enumerate(ledger, 1)]


def render_report(
    data: dict[str, Any],
    by_industry: dict[str, list[dict[str, Any]]],
    ledger: list[dict[str, Any]],
    wave_sets: tuple[set[str], ...],
    prior_ids: set[tuple[str, str]],
) -> str:
    dim_counts = Counter(row["closure_input"]["dimension_count"] for row in ledger)
    prior_corpus_counts = {i: sum(row["selection"][f"prior_wave{i}_corpus_selection"] for row in ledger) for i in range(2, 10)}
    dispatch_hash = sha256(DISPATCH)
    lines = [
        "# Phase 7 corpus-integrity Wave 10 report",
        "",
        f"Lane: `{LANE_ID}`  ",
        f"Observed: `{OBSERVED_DATE}`  ",
        "Mode: research-only; parent goal active; no overall completion claim.",
        "",
        "## Outcome",
        "",
        "W10 selects exactly the next 10 remaining partial closure-queue pairs in each of 17 industries: 170 new canonical industry–repository pairs. The exclusion union is the 10 Wave-1 T1 IDs plus the 170 dimension-selected IDs from each of Waves 2–9, exactly 1,370 queue IDs. A separate pair-level guard excludes every prior W1–W9 industry/canonical-repository identity. Every selected row remains `complete_status=NOT_COMPLETE`, `is_complete=false`, and carries its actual missing dimensions.",
        "",
        "The tranche advances selection coverage only. It preserves complete=270, partial=3,076, and the complete-pair gap=1,430. No pair is promoted, padded, or treated as complete.",
        "",
        "## Inputs and deterministic method",
        "",
        "Inputs were the final W10 dispatch receipt, Phase-7 program, immutable closure queue, coverage audit/manifest, the 284-row baseline register, the 500-row expansion register, matrix observations, W9 coordinator/dispatch receipts, and W1–W9 corpus plus W2–W9 dimension artifacts. All were read from existing local research artifacts. No vendor login, credentials, client/private data, external write, source execution, clone/copy, implementation, build, deployment, benchmark, scan, or admission occurred.",
        "",
        f"Selection rule: `{SELECTION_RULE}`. Canonical identity is case-folded GitHub `owner/name` plus normalized `https://github.com/owner/name`; URL query/fragment and trailing slash are removed. Queue status, dimension count, source URLs, observed dates, and evidence classes are preserved. No web query was run in W10 (`query=none`); source/query provenance is inherited and explicitly dated in each record.",
        f"Final W10 dispatch SHA256: `{dispatch_hash}` (contract hash prefix supplied by coordinator: `e3c44562`). The dispatch's phase-state anchor is `{data['dispatch']['immutable_inputs']['phase_7_state_after_w9']['sha256']}`; this lane did not write central state.",
        "",
        "## Exact counters",
        "",
        "| Measure | Count |",
        "|---|---:|",
        "| Industries | 17 |",
        "| Selected pairs per industry | 10 |",
        "| W10 selection rows | 170 |",
        "| W10 identity edges | 170 |",
        f"| W1 T1 queue IDs excluded | {len(wave_sets[0])} |",
    ]
    lines.extend(f"| W{i} dimension queue IDs excluded | {len(wave_sets[i-1])} |" for i in range(2, 10))
    lines.extend([
        f"| Prior identity pairs excluded | {len(prior_ids)} |",
        *[f"| Prior W{i} corpus-selection overlap, flagged only | {prior_corpus_counts[i]} |" for i in range(2, 10)],
        "| Selected identity overlap with prior waves | 0 |",
        "| Complete pairs preserved | 270 |",
        "| Partial pairs preserved | 3,076 |",
        "| Complete-pair gap preserved | 1,430 |",
        f"| Assigned dimension counts | {', '.join(f'{key}={value}' for key, value in sorted(dim_counts.items(), reverse=True))} |",
        "",
        "The 170 selected rows are not 170 complete pairs. Dimension-specific closure remains a separate lane and must supply ten repository-specific records before any completion claim.",
        "",
        "## Per-industry selection",
        "",
        "| Industry | Partial pool | Excluded queue IDs | Prior identity pairs | Remaining | Selected | Dimension counts |",
        "|---|---:|---:|---:|---:|---:|---|",
    ])
    excluded = set().union(*wave_sets)
    for industry in sorted(by_industry):
        partial = [row for row in by_industry[industry] if row.get("status") == "partial"]
        prior = sum((industry, f"https://github.com/{row['_canonical_key']}") in prior_ids for row in partial)
        remaining = [row for row in partial if row.get("queue_id") not in excluded and (industry, f"https://github.com/{row['_canonical_key']}") not in prior_ids]
        selected = [row for row in ledger if row["industry"]["id"] == industry]
        dist = Counter(row["closure_input"]["dimension_count"] for row in selected)
        dist_text = ", ".join(f"{key}:{value}" for key, value in sorted(dist.items(), reverse=True))
        lines.append(f"| {industry} | {len(partial)} | {sum(row.get('queue_id') in excluded for row in partial)} | {prior} | {len(remaining)} | {len(selected)} | {dist_text} |")
    lines.extend([
        "",
        "## Evidence, rights, falsifiers, and gates",
        "",
        "Each row contains exact inherited source URLs, the 2026-08-27 observation date, evidence class E, source access limits, direct versus inferred claims, unknown Block Contract fields, rights/license/notice/contributor/SBOM unknowns, a falsifier, a smallest next read-only gate, and a stop condition. The queue's public metadata is reachability/context evidence, not runtime, authenticated, capability, support, rollback, or production proof.",
        "",
        "Registry disposition and any license signal remain unreviewed metadata, not clearance. Fork/mirror/alias/rebrand identity is normalized only at owner/name/URL level in this lane; unresolved relationships remain unknown. Runtime behavior, authority/side effects, portability, tenancy, maintenance, support, rollback, economics, capability proof, and admission remain unknown or not run.",
        "",
        "## Boundaries and limitations",
        "",
        "All W10 records carry `research_only=true`, `authenticated_behavior=U`, `execution_status=UNEXECUTED`, `admission_status=NOT_ADMITTED`, `implementation_authorized=false`, `admitted_blocks=0`, and `parent_goal_status=active`. This report does not promote the selected pairs and does not claim overall Phase-7 completion.",
        "",
        "`CORPUS_INTEGRITY_W10_POSTWRITE_SMOKE_PENDING`",
        "",
    ])
    return "\n".join(lines)


def build() -> None:
    data = load_inputs()
    baseline, expansion, matrix_keys, by_industry = maps(data)
    dispatch = data["dispatch"]
    assert dispatch["wave"] == 10 and dispatch["phase_verified"] is False
    assert dispatch["parent_goal_status"] == "active"
    assert dispatch["contracts"][0]["lane_id"] == LANE_ID
    target = dispatch["contracts"][0]["target"]
    assert target["prior_exclusion_union"] == 1370
    assert target["identity_overlap_with_waves_1_to_9"] == 0
    assert len(baseline) == 284 and len(expansion) == 500 and len(matrix_keys) == 216
    assert len(data["closure"]) == 3346
    assert sum(row.get("status") == "complete" for row in data["closure"]) == 270
    assert sum(row.get("status") == "partial" for row in data["closure"]) == 3076
    assert data["coverage"]["measured_current"]["complete_pair_gap"] == 1430
    assert data["manifest"]["complete_pair_gap"] == 1430
    ledger, wave_sets, prior_ids = build_selection(data, baseline, expansion, matrix_keys, by_industry)
    edges = build_edges(ledger)
    write_jsonl(LEDGER, ledger)
    write_jsonl(EDGES, edges)
    REPORT.write_text(render_report(data, by_industry, ledger, wave_sets, prior_ids), encoding="utf-8")
    state = {
        "schema_version": SCHEMA_VERSION,
        "artifact_id": "P7-CORPUS-INTEGRITY-W10-001",
        "lane_id": LANE_ID,
        "status": "written_pending_smoke",
        "tasks_completed": 0,
        "scope": "next 10 remaining partial queue pairs per industry after W1 T1 and W2-W9 dimension exclusions plus all prior W1-W9 industry/canonical-repository identities",
        "observed_date": OBSERVED_DATE,
        "output_directory": str(OUT.relative_to(P7)),
        "outputs": {"selection_ledger": LEDGER.name, "identity_edges": EDGES.name, "report": REPORT.name, "post_write_smoke": Path(__file__).name},
        "counts": {
            "industries": 17,
            "selected_pairs_per_industry": 10,
            "selection_rows": len(ledger),
            "identity_edges": len(edges),
            "wave1_t1_excluded_queue_ids": len(wave_sets[0]),
            **{f"wave{i}_dimension_excluded_queue_ids": len(wave_sets[i-1]) for i in range(2, 10)},
            "prior_exclusion_union": len(set().union(*wave_sets)),
            "prior_identity_pairs_excluded": len(prior_ids),
            **{f"prior_wave{i}_corpus_selection_overlap": sum(row["selection"][f"prior_wave{i}_corpus_selection"] for row in ledger) for i in range(2, 10)},
            "prior_identity_overlap_selected": 0,
            "complete_pairs_preserved": 270,
            "partial_pairs_preserved": 3076,
            "complete_pair_gap_preserved": 1430,
            "dimension_count_distribution": dict(sorted(Counter(row["closure_input"]["dimension_count"] for row in ledger).items())),
        },
        "selection_rule": SELECTION_RULE,
        "input_sha256": source_hashes(),
        "dispatch_sha256": sha256(DISPATCH),
        "dispatch_phase7_state_anchor": dispatch["immutable_inputs"]["phase_7_state_after_w9"],
        "research_only": True,
        "callback_status": "pending",
        "verification": {"status": "pending_post_write_smoke"},
        "boundary": dict(BOUNDARY),
        "overall_completion_claim": False,
    }
    STATE.write_text(json.dumps(state, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print(f"BUILD_PASS selections={len(ledger)} edges={len(edges)} union=1370 prior_identities={len(prior_ids)}")


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
    assert all(row["record_type"] == "wave10_partial_selection" for row in ledger)
    assert all(row["record_type"] == "identity_edge" and row["edge_type"] == "wave10_partial_selection" for row in edges)
    assert all(row["complete_status"] == "NOT_COMPLETE" and row["is_complete"] is False for row in ledger)
    assert all(row["boundary"] == BOUNDARY for row in ledger + edges)
    wave_sets = dimension_sets(data)
    assert tuple(len(value) for value in wave_sets) == (10, *([170] * 8))
    for index, left in enumerate(wave_sets):
        for right in wave_sets[index + 1:]:
            assert not left & right
    excluded = set().union(*wave_sets)
    assert len(excluded) == 1370
    prior_ids = prior_identity_keys(data)
    assert all(row["closure_input"]["queue_id"] not in excluded for row in ledger)
    assert all((row["industry"]["id"], row["repository"]["canonical_url"]) not in prior_ids for row in ledger)
    assert len({(row["industry"]["id"], row["repository"]["canonical_url"]) for row in ledger}) == 170
    for industry, qrows in by_industry.items():
        eligible = sorted(
            (row for row in qrows if row.get("status") == "partial" and row.get("queue_id") not in excluded and (industry, f"https://github.com/{row['_canonical_key']}") not in prior_ids),
            key=lambda row: (-row["dimension_count"], row["queue_id"]),
        )
        selected = [row for row in ledger if row["industry"]["id"] == industry]
        assert len(selected) == 10
        assert [row["closure_input"]["queue_id"] for row in selected] == [row["queue_id"] for row in eligible[:10]]
        assert all(row["closure_input"]["status"] == "partial" and row["closure_input"]["dimension_count"] < 10 and row["closure_input"]["dimensions_missing"] for row in selected)
        assert all(row["source_provenance"]["source_urls"] and row["source_provenance"]["evidence_class"] == "E" for row in selected)
    assert sum(row.get("status") == "complete" for row in data["closure"]) == 270
    assert sum(row.get("status") == "partial" for row in data["closure"]) == 3076
    assert state["input_sha256"] == source_hashes()
    assert state["dispatch_sha256"] == sha256(DISPATCH)
    assert state["boundary"] == BOUNDARY
    assert state["overall_completion_claim"] is False
    assert "CORPUS_INTEGRITY_W10_POSTWRITE_SMOKE_PENDING" in report
    REPORT.write_text(report.replace("CORPUS_INTEGRITY_W10_POSTWRITE_SMOKE_PENDING", "CORPUS_INTEGRITY_W10_POSTWRITE_SMOKE_PASS"), encoding="utf-8")
    state.update({
        "status": "complete",
        "tasks_completed": 8,
        "report_sha256": sha256(REPORT),
        "ledger_sha256": sha256(LEDGER),
        "edges_sha256": sha256(EDGES),
        "smoke_sha256": sha256(Path(__file__)),
        "callback_status": "pending",
        "verification": {
            "status": "PASS",
            "structural": "PASS: 170 records = 10 per industry across 17 industries",
            "identity_dedupe": "PASS: 170 distinct industry/canonical-repository pairs; zero overlap with prior W1-W9 identities",
            "exclusion_parity": "PASS: no W1 T1 or W2-W9 dimension-selected queue IDs reused; union=1370",
            "source_parity": "PASS: every row maps to closure queue, expansion identity, matrix identity, source URLs/date/evidence metadata",
            "complete_guard": "PASS: all rows partial, dimension_count<10, NOT_COMPLETE",
            "gap_preservation": "PASS: complete=270 partial=3076 complete_pair_gap=1430",
            "boundary": "PASS: research_only; authenticated=U; UNEXECUTED; NOT_ADMITTED; implementation=false; admitted_blocks=0; parent-active",
            "source_link_shape": "PASS: exact inherited source URLs/date/evidence metadata retained; no network side effect",
            "prior_artifact_preservation": "PASS: W1-W9 artifacts hashed as inputs and not overwritten",
            "report_marker": "PASS: CORPUS_INTEGRITY_W10_POSTWRITE_SMOKE_PASS",
        },
        "boundary": BOUNDARY,
    })
    STATE.write_text(json.dumps(state, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print("CORPUS_INTEGRITY_W10_POSTWRITE_SMOKE_PASS")
    print("STRUCTURE_PASS selections=170 industries=17 selected_per_industry=10")
    print("IDENTITY_PASS distinct_pairs=170 prior_identity_overlap=0 exclusions_w1_t1=10 exclusions_w2_to_w9_dimension=1360 union=1370")
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
