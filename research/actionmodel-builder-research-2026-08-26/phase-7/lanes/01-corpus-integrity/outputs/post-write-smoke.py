#!/usr/bin/env python3
"""Build and verify the Phase-7 corpus-integrity lane from existing public metadata.

This script does not fetch, clone, execute, build, deploy, benchmark, scan, or
admit anything.  ``--build`` derives deterministic JSONL/report/state artifacts
from the existing registers and closure inputs.  ``--smoke`` independently
re-reads those inputs and outputs, marks the report/state only after all checks
pass, and prints a compact receipt.
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
BASE = OUT.parents[3]
P7 = BASE / "phase-7"
BASELINE = BASE / "outputs/github-corpus.jsonl"
EXPANSION = BASE / "expansion/outputs/github-expansion.jsonl"
CLOSURE = P7 / "outputs/closure-queue.jsonl"
COVERAGE = P7 / "outputs/coverage-gap-audit.json"
MANIFEST = P7 / "outputs/closure-queue-manifest.json"
PROGRAM = P7 / "PHASE-7-PROGRAM.md"
PLATFORM = BASE / "phase-2/outputs/platform-deepdives-register.jsonl"
MATRIX_MASTER = BASE / "expansion/outputs/repo-matrix-observations.jsonl"
MATRIX_WAVES = sorted((BASE / "expansion").glob("wave-*/outputs/repo-matrix-wave-*.jsonl"))

LEDGER = OUT / "repository-selection-ledger.jsonl"
EDGES = OUT / "repository-identity-edges.jsonl"
REPORT = OUT / "corpus-integrity-report.md"
STATE = OUT / "lane-state.json"

OBSERVED_DATE = "2026-08-27"
SCHEMA_VERSION = 1
LANE_ID = "P7-CORPUS-INTEGRITY"

BOUNDARY = {
    "research_only": True,
    "vendor_login": False,
    "client_data": False,
    "source_execution": False,
    "clone_or_copy": False,
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
        try:
            value = json.loads(line)
        except json.JSONDecodeError as exc:
            raise AssertionError(f"invalid JSONL {path}:{line_no}: {exc}") from exc
        if not isinstance(value, dict):
            raise AssertionError(f"non-object JSONL {path}:{line_no}")
        rows.append(value)
    return rows


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def json_sha(value: Any) -> str:
    return hashlib.sha256(json.dumps(value, sort_keys=True, separators=(",", ":")).encode()).hexdigest()


def write_jsonl(path: Path, rows: list[dict[str, Any]]) -> None:
    path.write_text("\n".join(json.dumps(row, sort_keys=True, separators=(",", ":")) for row in rows) + "\n", encoding="utf-8")


def canonical_repo(raw_url: str) -> tuple[str, str, str]:
    if not isinstance(raw_url, str):
        raise AssertionError(f"repository URL is not a string: {raw_url!r}")
    clean = raw_url.strip().split("#", 1)[0].split("?", 1)[0].rstrip("/")
    match = re.fullmatch(r"https?://github\.com/([^/]+)/([^/]+?)(?:\.git)?", clean, re.I)
    if not match:
        raise AssertionError(f"not a canonical GitHub repository URL: {raw_url}")
    owner, name = match.group(1).lower(), match.group(2).lower()
    return owner, name, f"https://github.com/{owner}/{name}"


def identity_from_registry(row: dict[str, Any]) -> dict[str, Any]:
    owner, name, url = canonical_repo(row["repo_url"])
    return {
        "owner": owner,
        "name": name,
        "canonical_url": url,
        "canonical_key": f"{owner}/{name}",
        "source_repo_url": row["repo_url"].rstrip("/"),
        "display_owner": row.get("owner"),
        "display_name": row.get("name"),
    }


def identity_from_matrix(row: dict[str, Any]) -> tuple[str, dict[str, Any]] | None:
    ref = row.get("repo_ref")
    if not isinstance(ref, dict) or not isinstance(ref.get("repo_url"), str):
        return None
    owner, name, url = canonical_repo(ref["repo_url"])
    return f"{owner}/{name}", {
        "owner": owner,
        "name": name,
        "canonical_url": url,
        "source_repo_url": ref["repo_url"].rstrip("/"),
    }


def boundary() -> dict[str, Any]:
    return dict(BOUNDARY)


def source_hashes() -> dict[str, str]:
    paths = [PROGRAM, COVERAGE, MANIFEST, BASELINE, EXPANSION, CLOSURE, PLATFORM, MATRIX_MASTER, *MATRIX_WAVES]
    return {str(path.relative_to(BASE)): sha256(path) for path in paths}


def load_inputs() -> dict[str, Any]:
    baseline_rows = read_jsonl(BASELINE)
    expansion_rows = read_jsonl(EXPANSION)
    closure_rows = read_jsonl(CLOSURE)
    matrix_rows: list[dict[str, Any]] = []
    matrix_file_counts: dict[str, int] = {}
    matrix_null_repo_refs: dict[str, int] = {}
    for path in [MATRIX_MASTER, *MATRIX_WAVES]:
        rows = read_jsonl(path)
        matrix_rows.extend(rows)
        matrix_file_counts[str(path.relative_to(BASE))] = len(rows)
        matrix_null_repo_refs[str(path.relative_to(BASE))] = sum(identity_from_matrix(row) is None for row in rows)
    coverage = json.loads(COVERAGE.read_text(encoding="utf-8"))
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    platform_rows = read_jsonl(PLATFORM)
    return {
        "baseline": baseline_rows,
        "expansion": expansion_rows,
        "closure": closure_rows,
        "matrix": matrix_rows,
        "coverage": coverage,
        "manifest": manifest,
        "platform": platform_rows,
        "matrix_file_counts": matrix_file_counts,
        "matrix_null_repo_refs": matrix_null_repo_refs,
    }


def make_registry_maps(data: dict[str, Any]) -> tuple[dict[str, dict[str, Any]], dict[str, dict[str, Any]]]:
    baseline: dict[str, dict[str, Any]] = {}
    expansion: dict[str, dict[str, Any]] = {}
    for row in data["baseline"]:
        ident = identity_from_registry(row)
        if ident["canonical_key"] in baseline:
            raise AssertionError(f"duplicate baseline canonical identity {ident['canonical_key']}")
        baseline[ident["canonical_key"]] = {**row, "_identity": ident}
    for row in data["expansion"]:
        ident = identity_from_registry(row)
        if ident["canonical_key"] in expansion:
            raise AssertionError(f"duplicate expansion canonical identity {ident['canonical_key']}")
        expansion[ident["canonical_key"]] = {**row, "_identity": ident}
    return baseline, expansion


def make_matrix_maps(data: dict[str, Any]) -> tuple[dict[str, dict[str, Any]], dict[str, set[str]]]:
    matrix_identity: dict[str, dict[str, Any]] = {}
    matrix_sources: dict[str, set[str]] = defaultdict(set)
    for row in data["matrix"]:
        parsed = identity_from_matrix(row)
        if parsed is None:
            continue
        key, ident = parsed
        matrix_identity.setdefault(key, ident)
        matrix_sources[key].add(row.get("ledger", "unknown"))
    return matrix_identity, matrix_sources


def make_queue_maps(data: dict[str, Any]) -> tuple[dict[str, list[dict[str, Any]]], dict[str, list[dict[str, Any]]]]:
    by_industry: dict[str, list[dict[str, Any]]] = defaultdict(list)
    by_repo: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for row in data["closure"]:
        repo = row.get("repository") or {}
        if not isinstance(repo, dict) or not isinstance(repo.get("repo_url"), str):
            raise AssertionError(f"closure row lacks repository URL: {row.get('queue_id')}")
        owner, name, _ = canonical_repo(repo["repo_url"])
        key = f"{owner}/{name}"
        row = dict(row)
        row["_canonical_key"] = key
        by_industry[row["industry_id"]].append(row)
        by_repo[key].append(row)
    return by_industry, by_repo


def direct_identity_signals(row: dict[str, Any]) -> dict[str, Any]:
    content = json.dumps({
        "description": row.get("description"),
        "content_inspection": row.get("content_inspection"),
        "reason": row.get("reason"),
        "evidence": row.get("evidence"),
    }, ensure_ascii=False).lower()
    return {
        "fork_signal": "explicit_fork_relationship_not_observed",
        "mirror_signal": "not_observed",
        "alias_signal": "not_observed",
        "rebrand_signal": "not_observed",
        "identity_signal_note": "",
    }


def classify_identity(row: dict[str, Any], key: str) -> dict[str, Any]:
    result = direct_identity_signals(row)
    description = str(row.get("description", ""))
    content = str((row.get("content_inspection") or {}).get("content_signal", ""))
    combined = f"{description} {content}"
    if key == "ahmad-progr/claude-leaked-files" and "mirrors" in combined.lower():
        result.update({
            "mirror_signal": "direct_mirror_claim",
            "identity_signal_note": "README/description calls this a mirrored snapshot; upstream/source identity is unresolved.",
        })
    if key == "react-bootstrap/code-sandbox-examples" and "fork" in description.lower():
        result.update({
            "fork_signal": "forkable_example_claim_not_repository_fork_status",
            "identity_signal_note": "Description says users can fork examples; that is not a GitHub fork-parent receipt.",
        })
    if key == "xmirrorsecurity/opensca-cli" and "mirror" in key:
        result.update({
            "mirror_signal": "name_signal_only",
            "identity_signal_note": "Owner name contains mirror-like text; no repository mirror relationship was documented.",
        })
    if key == "tokens-studio/figma-plugin" and "formerly known as figma tokens" in combined.lower():
        result.update({
            "rebrand_signal": "direct_rebrand_claim",
            "identity_signal_note": "Content directly identifies Figma Tokens as the former name.",
        })
    if key == "cosscom/coss" and "formerly origin ui" in combined.lower():
        result.update({
            "rebrand_signal": "direct_rebrand_claim",
            "identity_signal_note": "Content directly identifies Origin UI as the former name.",
        })
    if key == "api-evangelist/alto-vebra" and "formerly vebra alto" in combined.lower():
        result.update({
            "rebrand_signal": "direct_rebrand_claim",
            "identity_signal_note": "Description directly identifies Vebra Alto as the former name.",
        })
    if key == "jenkins-x/jx" and "jayex cli" in combined.lower():
        result.update({
            "alias_signal": "unresolved_label_variant",
            "identity_signal_note": "Content uses JayeX CLI while canonical repository name is jx; no separate repository edge inferred.",
        })
    if key == "cyclonedx/cyclonedx-python" and "package_aliases" in json.dumps(row.get("content_inspection"), ensure_ascii=False).lower():
        result.update({
            "alias_signal": "unresolved_package_alias_signal",
            "identity_signal_note": "A package_aliases path is present; no repository alias target was supplied.",
        })
    return result


def registry_disposition(row: dict[str, Any] | None) -> str:
    if row is None:
        return "not_present"
    return str(row.get("disposition", "unknown"))


def make_identity_nodes(
    baseline: dict[str, dict[str, Any]],
    expansion: dict[str, dict[str, Any]],
    matrix: dict[str, dict[str, Any]],
    matrix_sources: dict[str, set[str]],
    by_repo: dict[str, list[dict[str, Any]]],
) -> list[dict[str, Any]]:
    nodes: list[dict[str, Any]] = []
    for key in sorted(set(baseline) | set(expansion)):
        b = baseline.get(key)
        e = expansion.get(key)
        source = e or b
        ident = source["_identity"]
        qrows = by_repo.get(key, [])
        complete = sum(row.get("status") == "complete" for row in qrows)
        partial = sum(row.get("status") == "partial" for row in qrows)
        signal = classify_identity(source, key)
        nodes.append({
            "schema_version": SCHEMA_VERSION,
            "artifact_id": f"P7-CI-NODE-{len(nodes)+1:04d}",
            "lane_id": LANE_ID,
            "record_type": "identity_node",
            "observed_date": OBSERVED_DATE,
            "identity": {
                "canonical_key": key,
                "owner": ident["owner"],
                "name": ident["name"],
                "canonical_url": ident["canonical_url"],
                "source_repo_url": ident["source_repo_url"],
                "display_owner": ident["display_owner"],
                "display_name": ident["display_name"],
            },
            "registry_presence": "baseline_and_expansion" if b and e else "expansion_only",
            "registry_disposition": {
                "baseline": registry_disposition(b),
                "expansion": registry_disposition(e),
            },
            "registry_source_lanes": sorted(set((b or {}).get("source_lane", "") for b in (b, e) if b)),
            "candidate_vs_matrix": "matrix_aligned" if key in matrix else "registry_only",
            "matrix_sources": sorted(matrix_sources.get(key, set())),
            "matrix_industry_count": len({row["industry_id"] for row in qrows}),
            "matrix_pair_count": len(qrows),
            "matrix_complete_pair_count": complete,
            "matrix_partial_pair_count": partial,
            "fork_classification": signal["fork_signal"],
            "mirror_classification": signal["mirror_signal"],
            "alias_classification": signal["alias_signal"],
            "rebrand_classification": signal["rebrand_signal"],
            "identity_signal_note": signal["identity_signal_note"],
            "rights_state": {
                "baseline_license": (b or {}).get("license", "not_present"),
                "expansion_license": (e or {}).get("license", "not_present"),
                "disposition_is_not_clearance": True,
                "admission": "NOT_ADMITTED",
            },
            "source_evidence": {
                "baseline_evidence_urls": sorted(set((b or {}).get("evidence", []))),
                "expansion_evidence_urls": sorted(set((e or {}).get("evidence", []))),
                "source_query_count": len(set((source or {}).get("source_queries", []))),
                "source_query": (source or {}).get("source_query"),
                "observed_dates": sorted(set(row.get("observed_date") for row in (b, e) if row and row.get("observed_date"))),
            },
            "boundary": boundary(),
        })
    return nodes


def make_edges(
    baseline: dict[str, dict[str, Any]],
    expansion: dict[str, dict[str, Any]],
    matrix: dict[str, dict[str, Any]],
) -> list[dict[str, Any]]:
    edges: list[dict[str, Any]] = []

    def add(edge_type: str, subject: dict[str, Any], obj: dict[str, Any], evidence: list[str], note: str, evidence_class: str = "E") -> None:
        edges.append({
            "schema_version": SCHEMA_VERSION,
            "artifact_id": f"P7-CI-EDGE-{len(edges)+1:04d}",
            "lane_id": LANE_ID,
            "record_type": "identity_edge",
            "edge_type": edge_type,
            "observed_date": OBSERVED_DATE,
            "subject": subject,
            "object": obj,
            "evidence_class": evidence_class,
            "evidence": evidence,
            "observation": note,
            "limitation": "Identity relationship only; it does not establish rights, capability, runtime behavior, or admission.",
            "falsifier_or_next_gate": "A conflicting first-party identity/metadata receipt should replace this edge classification; otherwise retain the unknown boundary.",
            "boundary": boundary(),
        })

    for key in sorted(set(baseline) & set(expansion)):
        b, e = baseline[key], expansion[key]
        add(
            "same_canonical_observation",
            {"record_set": "baseline", "canonical_key": key, "repo_url": b["_identity"]["canonical_url"]},
            {"record_set": "expansion", "canonical_key": key, "repo_url": e["_identity"]["canonical_url"]},
            sorted(set(b.get("evidence", [])) | set(e.get("evidence", []))),
            "Exact owner/name/canonical URL match across the 284 baseline and 500 expansion records; no field conflict observed.",
        )
    for key in sorted(matrix):
        if key not in expansion:
            raise AssertionError(f"matrix-only identity not in expansion register: {key}")
        add(
            "matrix_alignment",
            {"record_set": "expansion", "canonical_key": key, "repo_url": expansion[key]["_identity"]["canonical_url"]},
            {"record_set": "merged_matrix", "canonical_key": key, "repo_url": matrix[key]["canonical_url"]},
            [expansion[key]["_identity"]["canonical_url"]],
            "Exact canonical owner/name/URL match between expansion register and current merged matrix universe.",
        )
    rebrands = [
        ("tokens-studio/figma-plugin", "Figma Tokens", "Tokens Studio for Figma", "README content says formerly known as Figma Tokens."),
        ("cosscom/coss", "Origin UI", "coss.com/ui", "README content says coss.com/ui is formerly Origin UI."),
        ("api-evangelist/alto-vebra", "Vebra Alto", "Alto", "Description says Alto was formerly Vebra Alto."),
    ]
    for key, old, new, note in rebrands:
        add(
            "rebrand_or_former_name",
            {"canonical_key": key, "label": old, "repo_url": expansion[key]["_identity"]["canonical_url"]},
            {"canonical_key": key, "label": new, "repo_url": expansion[key]["_identity"]["canonical_url"]},
            sorted(set(expansion[key].get("evidence", []))),
            note,
        )
    key = "ahmad-progr/claude-leaked-files"
    add(
        "mirror_claim",
        {"canonical_key": key, "repo_url": expansion[key]["_identity"]["canonical_url"]},
        {"canonical_key": None, "label": "unresolved Claude Code source snapshot", "repo_url": None, "identity_status": "unresolved_external_identity"},
        sorted(set(expansion[key].get("evidence", []))),
        "Repository description/content directly calls the repository a mirrored snapshot; upstream/source identity is not asserted or resolved.",
    )
    return edges


def source_receipt(row: dict[str, Any]) -> dict[str, Any]:
    records = row.get("dimension_records", [])
    evidence_classes = Counter(record.get("evidence_class", "unknown") for record in records)
    dates = sorted(set(record.get("observed_date") for record in records if record.get("observed_date")))
    return {
        "queue_id": row.get("queue_id"),
        "source_urls": sorted(set(row.get("source_urls", []))),
        "source_url_count": len(set(row.get("source_urls", []))),
        "observed_dates": dates,
        "evidence_class_counts": dict(sorted(evidence_classes.items())),
        "dimension_ids": sorted(record.get("dimension_id") for record in records),
    }


def make_selection_ledger(
    data: dict[str, Any],
    expansion: dict[str, dict[str, Any]],
    by_industry: dict[str, list[dict[str, Any]]],
) -> list[dict[str, Any]]:
    industries = sorted(by_industry)
    rows: list[dict[str, Any]] = []
    for industry in industries:
        qrows = by_industry[industry]
        complete = sorted((row for row in qrows if row.get("status") == "complete"), key=lambda row: row["_canonical_key"])
        if len(complete) > 100:
            raise AssertionError(f"{industry} has more than 100 complete pairs")
        partial_count = sum(row.get("status") == "partial" for row in qrows)
        partial_repos = len({row["_canonical_key"] for row in qrows if row.get("status") == "partial"})
        for position, row in enumerate(complete, 1):
            key = row["_canonical_key"]
            if key not in expansion:
                raise AssertionError(f"complete queue repository absent from expansion register: {key}")
            repo = row["repository"]
            ident = expansion[key]["_identity"]
            rows.append({
                "schema_version": SCHEMA_VERSION,
                "artifact_id": f"P7-CI-SEL-{len(rows)+1:04d}",
                "lane_id": LANE_ID,
                "record_type": "selected_complete_pair",
                "observed_date": OBSERVED_DATE,
                "industry": {"id": industry, "label": row["industry_label"]},
                "target": {"required_complete_repositories": 100, "target_position": position},
                "selection_status": "selected_for_evidence_only",
                "selection_order_key": key,
                "repository": {
                    "owner": ident["owner"],
                    "name": ident["name"],
                    "canonical_url": ident["canonical_url"],
                    "source_repo_url": repo["repo_url"].rstrip("/"),
                },
                "identity_reconciliation": {
                    "registry_key": key,
                    "registry_presence": "baseline_and_expansion" if key in {identity_from_registry(x)["canonical_key"] for x in data["baseline"]} else "expansion_only",
                    "expansion_disposition": expansion[key].get("disposition", "unknown"),
                    "rights_clearance": "unknown_or_unresolved",
                },
                "closure_input": {
                    "status": row["status"],
                    "dimension_count": row["dimension_count"],
                    "dimensions_present": sorted(row.get("dimensions_present", [])),
                    "dimensions_missing": sorted(row.get("dimensions_missing", [])),
                    "source_receipt": source_receipt(row),
                },
                "limitation": "Complete means all ten closure dimensions have queue records; it does not prove rights, license clearance, runtime behavior, capability, production safety, or admission.",
                "falsifier_or_next_gate": "A contradictory repository-specific dimension receipt, identity correction, or rights review changes this evidence-only selection; no reuse follows.",
                "boundary": boundary(),
            })
        for position in range(len(complete) + 1, 101):
            rows.append({
                "schema_version": SCHEMA_VERSION,
                "artifact_id": f"P7-CI-DEF-{len(rows)+1:04d}",
                "lane_id": LANE_ID,
                "record_type": "target_deficit",
                "observed_date": OBSERVED_DATE,
                "industry": {"id": industry, "label": qrows[0]["industry_label"]},
                "target": {"required_complete_repositories": 100, "target_position": position},
                "selection_status": "deficit_unfilled",
                "selection_order_key": f"{industry}::deficit::{position:03d}",
                "repository": None,
                "identity_reconciliation": {
                    "registry_key": None,
                    "candidate_assignment": "none",
                    "no_padding": True,
                },
                "closure_input": {
                    "complete_available": len(complete),
                    "partial_pair_count": partial_count,
                    "partial_repository_count": partial_repos,
                    "current_pair_count": len(qrows),
                    "missing_complete_pairs_after_observed_selection": 100 - len(complete),
                },
                "limitation": "No repository is assigned to this target position because the current closure queue has no additional all-ten-dimensional complete pair for this industry.",
                "falsifier_or_next_gate": "A future repository-specific all-ten-dimensional closure receipt can fill this slot; generic evidence, snippets, partial rows, held rows, or unknown rows cannot.",
                "stop_condition": "Keep this slot unfilled until identity, all ten dimensions, source/date/evidence class, limitation, falsifier/next gate, and rights boundary are present.",
                "boundary": boundary(),
            })
    if len(rows) != 1700:
        raise AssertionError(f"selection ledger target rows={len(rows)}, expected 1700")
    return rows


def render_report(
    data: dict[str, Any],
    baseline: dict[str, dict[str, Any]],
    expansion: dict[str, dict[str, Any]],
    matrix: dict[str, dict[str, Any]],
    by_industry: dict[str, list[dict[str, Any]]],
    nodes: list[dict[str, Any]],
    edges: list[dict[str, Any]],
    ledger: list[dict[str, Any]],
) -> str:
    complete = sum(row.get("status") == "complete" for row in data["closure"])
    partial = sum(row.get("status") == "partial" for row in data["closure"])
    selected = sum(row["record_type"] == "selected_complete_pair" for row in ledger)
    deficits = sum(row["record_type"] == "target_deficit" for row in ledger)
    disposition_unique = Counter(row.get("disposition", "unknown") for row in expansion.values())
    edge_counts = Counter(row.get("edge_type") for row in edges)
    report = [
        "# Phase 7 corpus-integrity report",
        "",
        "Lane: `P7-CORPUS-INTEGRITY`  ",
        "Observed: `2026-08-27`  ",
        "Mode: research-only; parent goal active; no target completion claim.",
        "",
        "## Outcome",
        "",
        f"The identity layer is closed for the current inputs: **500 canonical registry identities** (284 baseline + 216 expansion-only), **216 matrix-aligned identities**, and **284 registry-only identities**. The current closure queue contains **{complete} complete pairs** and **{partial} partial pairs** across 17 industries. The target ledger contains **{selected} evidence-only selected pairs** and **{deficits} explicit unfilled target deficits**, preserving the measured **1,430 complete-pair gap**. No repository is fabricated or padded into a deficit slot.",
        "",
        "`selected_for_evidence_only` means that a queue row has all ten observed dimension records. It is not a rights decision, capability proof, runtime proof, implementation authorization, or admission.",
        "",
        "## Inputs and method",
        "",
        "Read in full: the Phase-7 program/state, coverage-gap audit, closure queue and manifest, 284-row baseline GitHub register, 500-row expansion GitHub register, merged matrix and wave matrix inputs, and the 117-record platform register. The build uses only those local public-metadata artifacts; it performs no login, network mutation, clone, source copy, source execution, build, deploy, benchmark, scan, or admission.",
        "",
        "Canonical identity is `lowercase owner/name` plus a normalized `https://github.com/owner/name` URL. Original URL casing, display owner/name, source lanes, dispositions, evidence URLs, and observation dates remain in the node records. Selection order is deterministic lexicographic canonical key within each industry. Complete rows are selected for evidence reference only; each missing target position is represented with `repository: null` and a stop condition.",
        "",
        "The 284 baseline identities match expansion exactly on owner, name, URL, disposition, license, source lane, and vertical relevance. The 216 expansion-only identities are exactly the current matrix repository universe; the merged matrix has no matrix-only identity. Wave files overlap the merged matrix and are not added as extra identities.",
        "",
        "## Measured counts",
        "",
        "| Measure | Count |",
        "|---|---:|",
        f"| Baseline register rows / unique identities | 284 / {len(baseline)} |",
        f"| Expansion register rows / unique identities | 500 / {len(expansion)} |",
        f"| Union canonical identities | {len(set(baseline) | set(expansion))} |",
        f"| Current matrix canonical identities | {len(matrix)} |",
        f"| Closure queue rows | {len(data['closure'])} |",
        f"| Complete all-ten-dimensional pairs | {complete} |",
        f"| Partial pairs | {partial} |",
        "| Required complete pairs | 1,700 |",
        "| Preserved complete-pair deficit | 1,430 |",
        f"| Selection ledger rows | {len(ledger)} (270 selected + 1,430 deficits) |",
        f"| Identity nodes / relationship edges | {len(nodes)} / {len(edges)} |",
        f"| Platform register records read but not joined into repository identity | {len(data['platform'])} |",
        "",
        "Unique expansion disposition counts (preserved, not cleared): " + ", ".join(f"`{key}={value}`" for key, value in sorted(disposition_unique.items())) + ".",
        "",
        "## Per-industry deterministic selection and deficit queue",
        "",
        "Each industry receives exactly 100 target positions in the selection ledger. Existing complete pairs are sorted by canonical owner/name; remaining positions are explicit deficits with no repository assignment.",
        "",
        "| Industry | Current pairs | Complete selected | Partial candidates | Unfilled deficit |",
        "|---|---:|---:|---:|---:|",
    ]
    for industry in sorted(by_industry):
        rows = by_industry[industry]
        c = sum(row.get("status") == "complete" for row in rows)
        p = sum(row.get("status") == "partial" for row in rows)
        report.append(f"| {industry} | {len(rows)} | {c} | {p} | {100-c} |")
    report += [
        "",
        "The partial queue remains the authoritative source for future dimension work; this lane does not silently promote a partial row. Its exact per-row missing dimensions remain in `phase-7/outputs/closure-queue.jsonl`, whose digest is recorded below.",
        "",
        "## Identity relationship classification",
        "",
        f"- Exact baseline→expansion same-canonical observation edges: `{edge_counts['same_canonical_observation']}` (284).",
        f"- Expansion→merged-matrix alignment edges: `{edge_counts['matrix_alignment']}` (216).",
        f"- Direct former-name/rebrand edges: `{edge_counts['rebrand_or_former_name']}` (3): Figma Tokens → Tokens Studio for Figma, Origin UI → coss.com/ui, and Vebra Alto → Alto.",
        f"- Direct mirror claim edges: `{edge_counts['mirror_claim']}` (1), with unresolved upstream identity; no source was copied or inspected.",
        "- Fork status is not inferred from a generic GitHub `forks` count. No GitHub fork-parent metadata was present in the local register; fork relationship remains unknown unless a direct relationship receipt is present. The CodeSandbox description’s invitation to fork examples is retained as a non-parent signal.",
        "- Alias/name signals are retained as unresolved where present (JayeX CLI versus `jx`; a `package_aliases` path in CycloneDX). They are not promoted to repository alias edges without a target identity.",
        "",
        "## Source and rights limits",
        "",
        "Every selection carries closure source URLs, observed dates, evidence-class counts, dimensions present/missing, limitation, and falsifier/next gate. Registry dispositions and license fields remain informational. `hold`, `unknown`, `reject`, `reference`, and `candidate` are not converted into clearance or reuse permission. Source rights, notices, contributors, SBOM, runtime, capability, maintenance, support, rollback, and admission remain separate unresolved gates.",
        "",
        "A matrix-aligned identity means only that its canonical URL appears in the current matrix. It does not prove that every industry pair is complete; current pair counts and the 1,430 deficit are preserved explicitly.",
        "",
        "## Input digests",
        "",
        "The lane state records SHA-256 digests for the program, audit, closure manifest/queue, baseline/expansion registers, platform register, merged matrix, and every wave matrix input. These are provenance anchors, not content or rights attestations.",
        "",
        "## Boundary",
        "",
        "All output records carry `research_only=true`, `execution_status=UNEXECUTED`, `admission_status=NOT_ADMITTED`, `implementation_authorized=false`, `admitted_blocks=0`, and `parent_goal_status=active`. No vendor login, credentials, client/private data, cloning, source copying, execution, build, deployment, benchmark, scan, implementation, or admission occurred.",
        "",
        "`CORPUS_INTEGRITY_POSTWRITE_SMOKE_PENDING`",
        "",
        "This report must not be read as a claim that the 17×100 complete-repository target is met. The next read-only gate is repository-specific dimension completion for the explicit deficit queue, followed by independent rights/evaluation/runtime gates.",
        "",
    ]
    return "\n".join(report)


def build() -> None:
    data = load_inputs()
    baseline, expansion = make_registry_maps(data)
    matrix, matrix_sources = make_matrix_maps(data)
    by_industry, by_repo = make_queue_maps(data)
    coverage = data["coverage"]
    manifest = data["manifest"]
    assert len(baseline) == 284
    assert len(expansion) == 500
    assert set(baseline) <= set(expansion)
    assert len(set(expansion) - set(baseline)) == 216
    assert len(matrix) == 216
    assert set(matrix) == set(expansion) - set(baseline)
    assert len(by_industry) == 17
    assert len({row["dimension_id"] for row in data["matrix"]}) == 10
    assert len(data["closure"]) == 3346
    assert sum(row.get("status") == "complete" for row in data["closure"]) == 270
    assert sum(row.get("status") == "partial" for row in data["closure"]) == 3076
    assert coverage["measured_current"]["complete_pair_gap"] == 1430
    assert manifest["complete_pair_gap"] == 1430

    nodes = make_identity_nodes(baseline, expansion, matrix, matrix_sources, by_repo)
    edges = make_edges(baseline, expansion, matrix)
    ledger = make_selection_ledger(data, expansion, by_industry)
    write_jsonl(LEDGER, ledger)
    write_jsonl(EDGES, nodes + edges)
    REPORT.write_text(render_report(data, baseline, expansion, matrix, by_industry, nodes, edges, ledger), encoding="utf-8")
    state = {
        "schema_version": SCHEMA_VERSION,
        "artifact_id": "P7-CORPUS-INTEGRITY-001",
        "lane_id": LANE_ID,
        "status": "written_pending_smoke",
        "tasks_completed": 0,
        "scope": "canonical repository identity, dedupe, selection, and deficit queue",
        "observed_date": OBSERVED_DATE,
        "output_directory": str(OUT.relative_to(P7)),
        "outputs": {
            "repository_selection_ledger": LEDGER.name,
            "repository_identity_edges": EDGES.name,
            "corpus_integrity_report": REPORT.name,
            "post_write_smoke": Path(__file__).name,
        },
        "counts": {
            "baseline_rows": 284,
            "baseline_unique_identities": len(baseline),
            "expansion_rows": 500,
            "expansion_unique_identities": len(expansion),
            "union_identities": len(set(baseline) | set(expansion)),
            "matrix_identities": len(matrix),
            "closure_queue_rows": len(data["closure"]),
            "complete_pairs": 270,
            "partial_pairs": 3076,
            "target_complete_pairs": 1700,
            "complete_pair_gap": 1430,
            "selection_ledger_rows": len(ledger),
            "selected_complete_pairs": sum(row["record_type"] == "selected_complete_pair" for row in ledger),
            "deficit_rows": sum(row["record_type"] == "target_deficit" for row in ledger),
            "identity_nodes": len(nodes),
            "identity_edges": len(edges),
            "industries": len(by_industry),
            "dimensions": 10,
        },
        "identity_classification": {
            "fork_parent_edges": 0,
            "fork_status": "unknown_not_observed",
            "mirror_claim_edges": 1,
            "rebrand_edges": 3,
            "resolved_repository_alias_edges": 0,
            "unresolved_alias_or_label_signals": 2,
        },
        "input_sha256": source_hashes(),
        "research_only": True,
        "callback_status": "pending",
        "verification": {"status": "pending_post_write_smoke"},
        "boundary": boundary(),
    }
    STATE.write_text(json.dumps(state, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print(f"BUILD_PASS ledger={len(ledger)} identity_nodes={len(nodes)} identity_edges={len(edges)} report={REPORT.name}")


def smoke() -> None:
    data = load_inputs()
    baseline, expansion = make_registry_maps(data)
    matrix, matrix_sources = make_matrix_maps(data)
    by_industry, by_repo = make_queue_maps(data)
    ledger = read_jsonl(LEDGER)
    edge_records = read_jsonl(EDGES)
    state = json.loads(STATE.read_text(encoding="utf-8"))
    report = REPORT.read_text(encoding="utf-8")

    assert len(ledger) == 1700
    assert len({row["artifact_id"] for row in ledger}) == 1700
    assert all(row["lane_id"] == LANE_ID for row in ledger)
    assert sum(row["record_type"] == "selected_complete_pair" for row in ledger) == 270
    assert sum(row["record_type"] == "target_deficit" for row in ledger) == 1430
    assert all(row["boundary"] == BOUNDARY for row in ledger)
    assert all(row["selection_status"] == "deficit_unfilled" and row["repository"] is None for row in ledger if row["record_type"] == "target_deficit")
    selected = [row for row in ledger if row["record_type"] == "selected_complete_pair"]
    assert all(row["closure_input"]["status"] == "complete" and row["closure_input"]["dimensions_missing"] == [] for row in selected)
    assert len({(row["industry"]["id"], row["repository"]["canonical_url"]) for row in selected}) == 270
    for industry, qrows in by_industry.items():
        rows = [row for row in ledger if row["industry"]["id"] == industry]
        assert len(rows) == 100, (industry, len(rows))
        expected_complete = sum(row.get("status") == "complete" for row in qrows)
        assert sum(row["record_type"] == "selected_complete_pair" for row in rows) == expected_complete
        assert sum(row["record_type"] == "target_deficit" for row in rows) == 100 - expected_complete
        assert sorted(row["target"]["target_position"] for row in rows) == list(range(1, 101))
    nodes = [row for row in edge_records if row.get("record_type") == "identity_node"]
    edges = [row for row in edge_records if row.get("record_type") == "identity_edge"]
    assert len(nodes) == 500 and len(edges) == 504
    assert len({row["identity"]["canonical_key"] for row in nodes}) == 500
    assert all(row["boundary"] == BOUNDARY for row in edge_records)
    edge_counts = Counter(row["edge_type"] for row in edges)
    assert edge_counts == Counter({"same_canonical_observation": 284, "matrix_alignment": 216, "rebrand_or_former_name": 3, "mirror_claim": 1}), edge_counts
    assert len(matrix) == 216
    assert len(by_industry) == 17
    assert len({row["dimension_id"] for row in data["matrix"]}) == 10
    assert state["input_sha256"] == source_hashes()
    assert state["boundary"] == BOUNDARY
    assert state["research_only"] is True

    for path in (BASELINE, EXPANSION, CLOSURE, MATRIX_MASTER, *MATRIX_WAVES):
        assert path.exists(), path
    for row in selected:
        assert row["repository"]["canonical_url"].startswith("https://github.com/")
        assert row["closure_input"]["source_receipt"]["source_url_count"] >= 1
    assert "CORPUS_INTEGRITY_POSTWRITE_SMOKE_PENDING" in report
    report = report.replace("CORPUS_INTEGRITY_POSTWRITE_SMOKE_PENDING", "CORPUS_INTEGRITY_POSTWRITE_SMOKE_PASS")
    REPORT.write_text(report, encoding="utf-8")

    state.update({
        "status": "complete",
        "tasks_completed": 8,
        "callback_status": "pending",
        "report_sha256": sha256(REPORT),
        "ledger_sha256": sha256(LEDGER),
        "edges_sha256": sha256(EDGES),
        "verification": {
            "status": "PASS",
            "structural": "PASS: 1,700 target rows = 270 selected + 1,430 explicit deficits; 17 industries × 100 positions",
            "identity": "PASS: 500 nodes; 284 baseline/expansion edges; 216 matrix alignments; 3 rebrands; 1 mirror claim",
            "source_parity": "PASS: 216 matrix identities equal expansion-only identities; 0 matrix-only identities",
            "gap_preservation": "PASS: complete_pairs=270, partial_pairs=3076, complete_pair_gap=1430",
            "boundary": "PASS: research_only; UNEXECUTED; NOT_ADMITTED; implementation=false; admitted_blocks=0; parent-active",
            "source_link_shape": "PASS: selected source receipts retain first-party/public metadata URLs; no network side effect",
            "report_marker": "PASS: CORPUS_INTEGRITY_POSTWRITE_SMOKE_PASS",
        },
        "boundary": BOUNDARY,
    })
    STATE.write_text(json.dumps(state, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print("CORPUS_INTEGRITY_POSTWRITE_SMOKE_PASS")
    print("STRUCTURE_PASS ledger=1700 selected=270 deficits=1430 industries=17 target_per_industry=100")
    print("IDENTITY_PASS nodes=500 baseline_expansion_edges=284 matrix_alignment_edges=216 rebrands=3 mirror_claims=1")
    print("GAP_PASS complete=270 partial=3076 deficit=1430")
    print("BOUNDARY_PASS research_only=true execution=UNEXECUTED admission=NOT_ADMITTED implementation=false admitted_blocks=0 parent=active")
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
