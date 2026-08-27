#!/usr/bin/env python3
"""Convergence gate for Phase 9 Wave 6 depth work."""

import json
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parent


def obj(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def jsonl(path: Path) -> list[dict]:
    return [json.loads(line) for line in path.read_text(encoding="utf-8").splitlines() if line.strip()]


def boundary(state: dict) -> None:
    assert state["parent_goal_status"] == "active"
    assert state["research_only"] is True
    assert state["implementation_authorized"] is False
    assert state["execution_status"] == "UNEXECUTED"
    assert state["admission_status"] == "NOT_ADMITTED"
    assert state["admitted_blocks"] == 0
    assert state["promotion_allowed"] is False


def report_file(output: Path, keyword: str) -> Path:
    matches = [path for path in output.glob("*.md") if keyword in path.name]
    assert len(matches) == 1, (output, keyword, matches)
    return matches[0]


def verify_l12(output: Path) -> str:
    rows = jsonl(output / "target-identity-assignments.jsonl")
    assert len(rows) == 170
    ids = [row.get("pair_id") or row.get("target_pair_id") for row in rows]
    assert None not in ids and len(set(ids)) == 170
    prior = jsonl(ROOT / "wave-2/lanes/04-target-identity-backfill/outputs/target-identity-assignments.jsonl")
    prior_ids = {row.get("pair_id") or row.get("target_pair_id") for row in prior}
    assert not (set(ids) & prior_ids)
    industries = Counter(row.get("industry_id") or (row.get("industry") or {}).get("id") for row in rows)
    assert len(industries) == 17 and set(industries.values()) == {10}
    resolved = 0
    for row in rows:
        if row.get("status") != "resolved":
            continue
        repository = row.get("canonical_repository") or row.get("repository") or {}
        url = row.get("canonical_url") or repository.get("url") or repository.get("canonical_url")
        revision = row.get("immutable_revision") or {}
        sha = row.get("commit_sha") or (revision if isinstance(revision, str) else revision.get("sha"))
        assert isinstance(url, str) and url.startswith("https://github.com/")
        assert isinstance(sha, str) and len(sha) == 40
        resolved += 1
    report_file(output, "backfill")
    return f"L12 assignments=170 resolved={resolved} unresolved={170-resolved} overlap_l04=0"


def verify_l13(output: Path) -> str:
    dossiers = jsonl(output / "competitor-dossiers.jsonl")
    claims = jsonl(output / "feature-claim-receipts.jsonl")
    sources = jsonl(output / "source-register.jsonl")
    assert len(dossiers) == 10
    surfaces = {row.get("surface_ref") or row.get("surface_id") for row in dossiers}
    assert surfaces == {f"PS-{rank:03d}" for rank in range(1, 11)}
    for claim in claims:
        assert claim.get("surface_ref") in surfaces
        assert claim.get("source_url") or claim.get("first_party_url")
        assert claim.get("observed_date") or claim.get("evidence_date")
        assert claim.get("claim") or claim.get("claim_text") or claim.get("precise_claim")
        assert claim.get("falsifier")
    report_file(output, "dossier")
    return f"L13 dossiers=10 claims={len(claims)} sources={len(sources)}"


def verify_l14(output: Path) -> str:
    shapes = jsonl(output / "shape-receipts.jsonl")
    dependencies = jsonl(output / "dependency-closure-receipts.jsonl")
    gaps = jsonl(output / "unresolved-depth-ledger.jsonl")
    assert len(shapes) == 76 and len(dependencies) == 76
    shape_ids = {row.get("candidate_key") or row.get("candidate_id") for row in shapes}
    dep_ids = {row.get("candidate_key") or row.get("candidate_id") for row in dependencies}
    assert None not in shape_ids and shape_ids == dep_ids and len(shape_ids) == 76
    closure = sum(bool(row.get("closure_complete") or row.get("dependency_closure_complete")) for row in dependencies)
    classified = sum((row.get("source_shape") or row.get("packaging_mode") or "unknown") != "unknown" for row in shapes)
    report_file(output, "stage2-stage3")
    return f"L14 shapes=76 classified={classified} dependencies=76 complete_closure={closure} gaps={len(gaps)}"


def main() -> None:
    state = obj(ROOT / "phase-9-state.json")
    wave = state["wave_6_lanes"]
    specs = {
        "P9-L12-TARGET-IDENTITY-BACKFILL": (ROOT / "wave-6/lanes/12-target-identity-backfill/outputs", verify_l12),
        "P9-L13-COMPETITOR-DEEP-DOSSIERS": (ROOT / "wave-6/lanes/13-competitor-deep-dossiers/outputs", verify_l13),
        "P9-L14-STAGE2-STAGE3-RETRY": (ROOT / "wave-6/lanes/14-stage2-stage3-retry/outputs", verify_l14),
    }
    assert set(wave) == set(specs)
    complete = 0
    details = []
    for lane_id, (output, verifier) in specs.items():
        status = wave[lane_id]["status"]
        assert status in {"working", "complete", "complete_verified", "blocked"}
        if status not in {"complete", "complete_verified"}:
            continue
        assert output.is_dir()
        lane_state = obj(output / "lane-state.json")
        boundary(lane_state)
        details.append(verifier(output))
        complete += 1
    if complete == 3:
        assert state["status"] == "wave_6_complete_unpromoted"
        print("PHASE9_WAVE6_VERIFIED_PASS " + " | ".join(details))
    else:
        assert state["status"] == "wave_6_active"
        print(f"PHASE9_WAVE6_ACTIVE_PASS lanes_complete={complete}/3")


if __name__ == "__main__":
    main()
