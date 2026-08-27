#!/usr/bin/env python3
"""Validate and index the strict 118-surface × 144-feature census."""

from __future__ import annotations

import hashlib
import json
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parent
PARTITIONS = (
    (1, 30, ROOT / "wave-2/lanes/05-competitor-direct-evidence/outputs/competitor-direct-evidence.jsonl"),
    (31, 60, ROOT / "wave-3/lanes/08-competitor-direct-evidence/outputs/competitor-direct-evidence.jsonl"),
    (61, 90, ROOT / "wave-4/lanes/10-competitor-direct-evidence/outputs/competitor-direct-evidence.jsonl"),
    (91, 118, ROOT / "wave-5/lanes/11-competitor-direct-evidence/outputs/competitor-direct-evidence.jsonl"),
)
INDEX = ROOT / "competitor-strict-census-index.json"
REPORT = ROOT / "COMPETITOR-STRICT-CENSUS.md"


def read_rows(path: Path) -> list[dict]:
    return [json.loads(line) for line in path.read_text(encoding="utf-8").splitlines() if line.strip()]


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def main() -> None:
    all_pairs: set[tuple[str, str]] = set()
    total_counts: Counter[str] = Counter()
    partitions = []
    for start, end, path in PARTITIONS:
        rows = read_rows(path)
        expected_surfaces = {f"PS-{rank:03d}" for rank in range(start, end + 1)}
        pairs = {(row["surface_ref"], row["canonical_feature_id"]) for row in rows}
        assert len(pairs) == len(rows) == len(expected_surfaces) * 144
        assert {surface for surface, _ in pairs} == expected_surfaces
        assert len({feature for _, feature in pairs}) == 144
        assert not (all_pairs & pairs)
        all_pairs |= pairs
        counts = Counter(row["disposition"] for row in rows)
        total_counts.update(counts)
        partitions.append(
            {
                "surface_start": start,
                "surface_end": end,
                "surfaces": len(expected_surfaces),
                "features": 144,
                "cells": len(rows),
                "dispositions": dict(counts),
                "path": str(path.relative_to(ROOT)),
                "sha256": sha256(path),
            }
        )
    expected = {(f"PS-{surface:03d}", f"F-{feature:03d}") for surface in range(1, 119) for feature in range(1, 145)}
    assert all_pairs == expected
    assert len(all_pairs) == 16_992
    summary = {
        "schema_version": 1,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "surfaces": 118,
        "canonical_features": 144,
        "cells": 16_992,
        "unique_cells": len(all_pairs),
        "missing_cells": 0,
        "duplicate_cells": 0,
        "dispositions": dict(total_counts),
        "strict_direct_rate": total_counts["direct"] / 16_992,
        "partitions": partitions,
        "boundary": {
            "feature_specific_first_party_required_for_direct": True,
            "reachability_is_capability_proof": False,
            "execution_status": "UNEXECUTED",
            "admission_status": "NOT_ADMITTED",
            "admitted_blocks": 0,
            "promotion_allowed": False,
        },
    }
    INDEX.write_text(json.dumps(summary, indent=2) + "\n", encoding="utf-8")
    partition_lines = "\n".join(
        f"- PS-{item['surface_start']:03d}–PS-{item['surface_end']:03d}: {item['cells']:,} cells; "
        f"{item['dispositions']}; `{item['path']}`"
        for item in partitions
    )
    REPORT.write_text(
        "# Strict competitor × feature census\n\n"
        "This index covers every registered product surface PS-001 through PS-118 against every canonical feature F-001 through F-144. "
        "A cell is direct only when a feature-specific first-party claim was retained. Generic product-page reachability is not capability proof.\n\n"
        "## Denominator\n\n"
        "- Surfaces: 118\n- Features: 144\n- Cells: 16,992\n- Missing: 0\n- Duplicates: 0\n"
        f"- Dispositions: {dict(total_counts)}\n"
        f"- Strict direct rate: {summary['strict_direct_rate']:.6%}\n\n"
        "## Partitions\n\n"
        f"{partition_lines}\n\n"
        "## Interpretation\n\n"
        "The census denominator is structurally exhaustive for the registered universe, but evidence depth is not exhaustive: unknown means no qualifying feature-specific first-party proof was retained. "
        "The result is research-only, unexecuted and not admitted.\n",
        encoding="utf-8",
    )
    print(f"COMPETITOR_STRICT_CENSUS_PASS cells=16992 dispositions={dict(total_counts)}")


if __name__ == "__main__":
    main()
