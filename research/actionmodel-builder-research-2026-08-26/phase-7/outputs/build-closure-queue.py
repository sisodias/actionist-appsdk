#!/usr/bin/env python3
"""Build a repository-specific Phase-7 closure queue from the observed matrix."""

from __future__ import annotations

import hashlib
import json
from collections import defaultdict
from pathlib import Path

PHASE_ROOT = Path(__file__).resolve().parents[1]
RESEARCH_ROOT = PHASE_ROOT.parent
OUT = PHASE_ROOT / "outputs"
PARENT = RESEARCH_ROOT / "expansion/outputs/repo-matrix-observations.jsonl"
WAVES = sorted(RESEARCH_ROOT.glob("expansion/wave-*/outputs/repo-matrix-wave-*.jsonl"))
QUEUE = OUT / "closure-queue.jsonl"
SUMMARY = OUT / "closure-queue-summary.md"
MANIFEST = OUT / "closure-queue-manifest.json"


def read_jsonl(path: Path) -> list[dict]:
    with path.open(encoding="utf-8") as handle:
        return [json.loads(line) for line in handle if line.strip()]


def repo_identity(row: dict) -> dict:
    ref = row.get("repo_ref")
    assert isinstance(ref, dict) and ref.get("repo_url"), row.get("slot_id")
    return {"owner": ref.get("owner"), "name": ref.get("name"), "repo_url": ref["repo_url"]}


parent_rows = read_jsonl(PARENT)
observed_rows = [row for row in parent_rows if row.get("slot_status") == "observed"]
for wave in WAVES:
    observed_rows.extend(read_jsonl(wave))

assert len(parent_rows) == 17_000
assert len(WAVES) == 10
assert len(observed_rows) == 17_000

dimensions = sorted({row["dimension_id"] for row in observed_rows})
assert len(dimensions) == 10
groups: defaultdict[tuple[str, str], list[dict]] = defaultdict(list)
for row in observed_rows:
    identity = repo_identity(row)
    groups[(row["industry_id"], identity["repo_url"])].append(row)

queue_rows = []
for number, ((industry_id, _), group) in enumerate(sorted(groups.items()), 1):
    group.sort(key=lambda row: (row["dimension_id"], row["observation_index"], row["slot_id"]))
    identity = repo_identity(group[0])
    present = sorted({row["dimension_id"] for row in group})
    missing = [dimension for dimension in dimensions if dimension not in present]
    assert len(group) == len(present), (industry_id, identity, len(group), len(present))
    dimension_records = [
        {
            "dimension_id": row["dimension_id"],
            "dimension_label": row["dimension_label"],
            "observation_index": row["observation_index"],
            "slot_id": row["slot_id"],
            "evidence_class": row.get("evidence_class"),
            "confidence": row.get("confidence"),
            "evidence": row.get("evidence", []),
            "observation": row.get("observation"),
            "limitation": row.get("limitation"),
            "falsifier_or_next_gate": row.get("falsifier_or_next_gate"),
            "rights_boundary": row.get("rights_boundary"),
        }
        for row in group
    ]
    sources = sorted(
        {
            evidence
            for row in group
            for evidence in row.get("evidence", [])
            if isinstance(evidence, str) and evidence.startswith("http")
        }
    )
    queue_rows.append(
        {
            "schema_version": 1,
            "record_type": "industry_repository_closure",
            "queue_id": f"P7-CLOSE-{number:04d}",
            "industry_id": industry_id,
            "industry_label": group[0]["industry_label"],
            "repository": identity,
            "required_dimension_count": len(dimensions),
            "dimensions_present": present,
            "dimensions_missing": missing,
            "dimension_count": len(present),
            "status": "complete" if not missing else "partial",
            "source_url_count": len(sources),
            "source_urls": sources,
            "dimension_records": dimension_records,
            "research_only": True,
            "execution_status": "UNEXECUTED",
            "admission_status": "NOT_ADMITTED",
            "implementation_authorized": False,
        }
    )

queue_text = "".join(json.dumps(row, sort_keys=True) + "\n" for row in queue_rows)
QUEUE.write_text(queue_text, encoding="utf-8")
queue_hash = hashlib.sha256(queue_text.encode("utf-8")).hexdigest()
complete = sum(row["status"] == "complete" for row in queue_rows)
partial = len(queue_rows) - complete

by_industry: defaultdict[str, list[int]] = defaultdict(lambda: [0, 0])
for row in queue_rows:
    by_industry[row["industry_id"]][0] += 1
    by_industry[row["industry_id"]][1] += row["status"] == "complete"

summary = [
    "# Phase 7 repository closure queue",
    "",
    "Artifact: P7-CLOSURE-QUEUE-001",
    "Generated: 2026-08-27",
    "Boundary: research-only; queue membership is not capability proof, rights clearance, implementation authorization, or admission.",
    "",
    "Each row is one canonical industry-repository pair from the merged observed matrix. Partial rows carry the exact missing dimensions and existing slot evidence.",
    "",
    f"- Queue rows: {len(queue_rows)}",
    f"- Complete all-10 rows: {complete}",
    f"- Partial rows: {partial}",
    "- Required closure: 100 complete rows per industry, 1,700 total.",
    "",
    "| Industry | Current pairs | Complete all-10 | Target | Gap |",
    "|---|---:|---:|---:|---:|",
]
for industry in sorted(by_industry):
    total, done = by_industry[industry]
    summary.append(f"| {industry} | {total} | {done} | 100 | {100 - done} |")
summary.extend(
    [
        "",
        "Consumer contract: workers may add repository-specific evidence only for dimensions_missing and must preserve source, date, evidence class, limitation, falsifier or next gate, rights/SBOM state, and the research-only boundary.",
        "",
        f"Queue SHA-256: {queue_hash}",
    ]
)
SUMMARY.write_text("\n".join(summary) + "\n", encoding="utf-8")
MANIFEST.write_text(
    json.dumps(
        {
            "schema_version": 1,
            "artifact_id": "P7-CLOSURE-QUEUE-001",
            "generated_at": "2026-08-27",
            "queue_records": len(queue_rows),
            "complete_pairs": complete,
            "partial_pairs": partial,
            "required_complete_pairs": 1700,
            "complete_pair_gap": 1700 - complete,
            "industry_count": len(by_industry),
            "dimensions": dimensions,
            "queue_sha256": queue_hash,
            "boundary": {
                "research_only": True,
                "execution_status": "UNEXECUTED",
                "admission_status": "NOT_ADMITTED",
                "implementation_authorized": False,
            },
        },
        indent=2,
        sort_keys=True,
    )
    + "\n",
    encoding="utf-8",
)
print("P7_CLOSURE_QUEUE_BUILD_PASS", f"records={len(queue_rows)}", f"complete={complete}", f"partial={partial}", f"gap={1700 - complete}", f"sha256={queue_hash}")
