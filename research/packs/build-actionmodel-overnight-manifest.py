#!/usr/bin/env python3
"""Build the browser catalog for the local Action Model overnight research pack."""

from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path


HERE = Path(__file__).resolve().parent
PROJECT = HERE.parent
PACK = PROJECT / "actionmodel-builder-research-2026-08-26"
OUT = HERE / "actionmodel-overnight-manifest.json"
EXTERNAL_SOURCES = (
    (
        PROJECT / "connectors-licensing-2026-08-27.md",
        Path("phase-8/external-opus-inputs/connectors/connectors-licensing-2026-08-27.md"),
        "../connectors-licensing-2026-08-27.md",
    ),
    (
        PROJECT / "openconnector-spike-2026-08-27.md",
        Path("phase-8/external-opus-inputs/connectors/openconnector-spike-2026-08-27.md"),
        "../openconnector-spike-2026-08-27.md",
    ),
)

TEXT_EXTENSIONS = {
    ".md",
    ".json",
    ".jsonl",
    ".py",
    ".mjs",
    ".js",
    ".ts",
    ".tsx",
    ".html",
    ".css",
    ".csv",
    ".tsv",
    ".txt",
    ".yaml",
    ".yml",
    ".toml",
    ".sh",
}

LANE_NAMES = {
    "01-corpus-integrity": "Corpus integrity",
    "02-dimension-evidence": "Dimension evidence",
    "03-competitor-features": "Competitor features",
    "04-industry-joins": "Industry joins",
    "05-rights-eval-readiness": "Rights / eval readiness",
}


def phase_for(relative: Path) -> str:
    for part in relative.parts:
        if re.fullmatch(r"phase-[2-9]", part):
            return part
    if "expansion" in relative.parts:
        return "expansion"
    return "core"


def wave_for(relative: Path) -> str | None:
    joined = "/".join(relative.parts)
    match = re.search(r"(?:^|/)wave-(\d+)(?:/|[-.]|$)", joined)
    return f"W{match.group(1)}" if match else None


def lane_for(relative: Path) -> str | None:
    for part in relative.parts:
        if part in LANE_NAMES:
            return LANE_NAMES[part]
    return None


def title_for(relative: Path, text: str) -> str:
    for line in text.splitlines()[:80]:
        match = re.match(r"^#{1,3}\s+(.+?)\s*$", line)
        if match:
            return re.sub(r"[*_`]", "", match.group(1))
    return relative.stem.replace("-", " ").replace("_", " ").title()


def human_bytes(value: int) -> str:
    units = ("B", "KB", "MB", "GB")
    size = float(value)
    for unit in units:
        if size < 1024 or unit == units[-1]:
            return f"{size:.1f} {unit}" if unit != "B" else f"{value} B"
        size /= 1024
    return f"{value} B"


def main() -> None:
    records = []
    sources = [
        (path, path.relative_to(PACK), f"../actionmodel-builder-research-2026-08-26/{path.relative_to(PACK).as_posix()}")
        for path in sorted(PACK.rglob("*"))
        if path.is_file()
    ]
    sources.extend(
        (path, relative, url)
        for path, relative, url in EXTERNAL_SOURCES
        if path.is_file()
    )
    for path, relative, url in sources:
        try:
            raw = path.read_bytes()
        except FileNotFoundError:
            # Active research lanes may remove temporary authoring files between
            # the directory snapshot and the read. They are not durable artifacts.
            continue
        is_text = path.suffix.lower() in TEXT_EXTENSIONS and b"\x00" not in raw[:4096]
        text = raw.decode("utf-8", errors="replace") if is_text else ""
        nonempty_lines = [line for line in text.splitlines() if line.strip()] if is_text else []
        kind = {
            ".md": "report",
            ".json": "state / JSON",
            ".jsonl": "ledger / JSONL",
            ".py": "verifier / Python",
            ".mjs": "verifier / JavaScript",
        }.get(path.suffix.lower(), "source" if is_text else "binary")
        excerpt = re.sub(r"\s+", " ", text[:720]).strip() if is_text else "Binary artifact; use the raw link."
        rows = len(nonempty_lines) if path.suffix.lower() == ".jsonl" else None
        records.append(
            {
                "path": relative.as_posix(),
                "url": url,
                "name": path.name,
                "title": title_for(relative, text) if is_text else path.name,
                "phase": phase_for(relative),
                "wave": wave_for(relative),
                "lane": lane_for(relative),
                "kind": kind,
                "readable": is_text,
                "bytes": len(raw),
                "size": human_bytes(len(raw)),
                "lines": len(text.splitlines()) if is_text else None,
                "rows": rows,
                "sha256": hashlib.sha256(raw).hexdigest(),
                "excerpt": excerpt,
            }
        )

    summary = {
        "schema_version": 1,
        "generated_from": "research/actionmodel-builder-research-2026-08-26",
        "generated_at": "2026-08-27",
        "record_count": len(records),
        "readable_count": sum(record["readable"] for record in records),
        "binary_count": sum(not record["readable"] for record in records),
        "total_bytes": sum(record["bytes"] for record in records),
        "records": records,
    }
    OUT.write_text(json.dumps(summary, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(
        f"manifest={OUT} records={summary['record_count']} "
        f"readable={summary['readable_count']} bytes={summary['total_bytes']}"
    )


if __name__ == "__main__":
    main()
