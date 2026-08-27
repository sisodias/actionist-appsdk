#!/usr/bin/env python3
"""Independent coordinator audit for the Phase-5 research packet.

Run without arguments before coordinator promotion. Run with --promoted
after the coordinator writes the Phase-5 promotion receipt.
"""

import collections
import hashlib
import json
import pathlib
import re
import sys


BASE = pathlib.Path(__file__).resolve().parents[1]
ROOT = BASE / "phase-5"
OUT = ROOT / "outputs"
STATE_PATH = ROOT / "phase-5-state.json"
STATE = json.loads(STATE_PATH.read_text())
FAILURES = []
PROMOTED_MODE = "--promoted" in sys.argv[1:]


def check(name, condition, detail=""):
    if condition:
        print("PASS", name, (":: " + detail) if detail else "")
    else:
        print("FAIL", name, (":: " + detail) if detail else "")
        FAILURES.append(name)


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def canonical(value):
    return json.dumps(value, sort_keys=True, separators=(",", ":"))


def read_jsonl(path):
    return [
        json.loads(line)
        for line in path.read_text().splitlines()
        if line.strip()
    ]


def markdown_targets(text):
    targets = []
    for match in re.finditer(r"\[[^\]]+\]\((<[^>]+>|[^)\s]+)", text):
        target = match.group(1).strip("<>")
        if target.startswith(("http://", "https://", "mailto:", "#")):
            continue
        targets.append(target.split("#", 1)[0])
    return targets


EXPECTED_LANES = {
    "RCH-PLATFORM-P1-A",
    "RCH-PLATFORM-P1-B",
    "RCH-GITHUB-NEXT50-RIGHTS",
    "RCH-STANDARDS-APPLICABILITY-CLOSURE",
    "RCH-INDUSTRY-SIGNAL-DEPTH",
}
ACCEPTED_CALLBACKS = {
    "received_and_verified",
    "sent_and_verified",
    "sent_and_delivery_verified",
    "verified_delivery",
}
CALLBACK_MARKERS = {
    "received_and_verified",
    "sent_and_verified",
    "sent_and_delivery_verified",
    "verified_delivery",
    "delivery verified",
}


check(
    "shared_state_shape",
    all(
        key in STATE
        for key in [
            "phase",
            "status",
            "mode",
            "phase_verified",
            "implementation_authorized",
            "execution_status",
            "admission_status",
            "admitted_blocks",
            "parent_goal_status",
            "lanes",
        ]
    ),
)
check(
    "shared_boundary",
    STATE.get("phase") == "p1-depth-and-evidence-coverage"
    and STATE.get("mode") == "research_only"
    and STATE.get("implementation_authorized") is False
    and STATE.get("execution_status") == "UNEXECUTED"
    and STATE.get("admission_status") == "NOT_ADMITTED"
    and STATE.get("admitted_blocks") == 0
    and STATE.get("parent_goal_status") == "active",
)
if PROMOTED_MODE:
    check(
        "promoted_state",
        STATE.get("status") == "phase_verified_parent_goal_active"
        and STATE.get("phase_verified") is True
        and bool(STATE.get("verified_at"))
        and STATE.get("next_phase")
        == "phase-6-explicit-authorization-and-client-validation-prep",
    )
    check(
        "coordinator_promotion_receipt",
        STATE.get("coordinator_verification", {}).get("status") == "PASS"
        and STATE.get("coordinator_verification", {}).get("verifier")
        == "verify-phase5.py"
        and STATE.get("coordinator_verification", {}).get("lanes_verified") == 5
        and STATE.get("coordinator_verification", {}).get("output_files_verified")
        == 9
        and STATE.get("coordinator_verification", {}).get(
            "research_boundary_verified"
        )
        is True,
    )
else:
    check(
        "prepromotion_state",
        STATE.get("status") == "dispatched"
        and STATE.get("phase_verified") is False
        and STATE.get("verified_at") is None
        and STATE.get("next_phase") is None,
    )

predecessor = STATE.get("predecessor", {})
check(
    "phase4_predecessor_verified",
    predecessor.get("phase_verified") is True
    and predecessor.get("artifacts") == 8
    and predecessor.get("lanes") == 5,
)

check("five_lane_keys", set(STATE.get("lanes", {})) == EXPECTED_LANES)
for lane_name in sorted(EXPECTED_LANES):
    lane = STATE.get("lanes", {}).get(lane_name, {})
    lane_callback = lane.get("callback_status") or lane.get("verification", {}).get(
        "callback"
    )
    check(
        f"{lane_name}_status",
        lane.get("status") in {"complete", "completed"},
        str(lane.get("status")),
    )
    check(
        f"{lane_name}_callback",
        lane_callback in ACCEPTED_CALLBACKS,
        str(lane_callback),
    )
    check(
        f"{lane_name}_tasks",
        isinstance(lane.get("tasks_completed"), int)
        and lane.get("tasks_completed") > 0,
        str(lane.get("tasks_completed")),
    )

REQUIRED_FILES = [
    "PHASE-5-PROGRAM.md",
    "outputs/platform-p1-evidence-a.md",
    "outputs/platform-p1-evidence-a.jsonl",
    "outputs/platform-p1-evidence-b.md",
    "outputs/platform-p1-evidence-b.jsonl",
    "outputs/github-next50-rights-receipts.md",
    "outputs/github-next50-rights-receipts.jsonl",
    "outputs/standards-applicability-closure.md",
    "outputs/standards-applicability-closure.jsonl",
    "outputs/industry-signal-depth.md",
]
missing_files = [name for name in REQUIRED_FILES if not (ROOT / name).is_file()]
check("required_phase5_artifacts", not missing_files, "; ".join(missing_files))

unresolved_inputs = []
for key, value in STATE.get("inputs", {}).items():
    if key == "implementation_authorized":
        continue
    candidate = (ROOT / value).resolve()
    if not candidate.exists():
        unresolved_inputs.append(f"{key}:{value}")
check("phase5_inputs_resolve", not unresolved_inputs, "; ".join(unresolved_inputs))

triage_path = BASE / "phase-3" / "outputs" / "platform-depth-triage.jsonl"
triage_rows = read_jsonl(triage_path) if triage_path.is_file() else []
triage_by_rank = {row.get("rank"): row for row in triage_rows}
check(
    "platform_triage_input",
    len(triage_rows) == 117
    and set(range(1, 118)) == set(triage_by_rank),
    f"rows={len(triage_rows)}",
)


def audit_platform(label, json_name, markdown_name, start, end, url_key, boundary_key):
    path = OUT / json_name
    md_path = OUT / markdown_name
    rows = read_jsonl(path) if path.is_file() else []
    md = md_path.read_text() if md_path.is_file() else ""
    expected_ranks = list(range(start, end + 1))
    check(
        f"{label}_records_and_ranks",
        len(rows) == 20
        and sorted(row.get("rank") for row in rows) == expected_ranks
        and len({canonical(row.get("identity")) for row in rows}) == 20,
        f"rows={len(rows)}",
    )
    required = [
        "rank",
        "identity",
        url_key,
        "access_status",
        "evidence_class",
        "direct_claims",
        "inferred_claims",
        "unknown_block_contract_fields",
        "rights_oem_support_gaps",
        "falsifier",
        "next_read_only_gate",
        boundary_key,
    ]
    check(
        f"{label}_schema",
        all(all(key in row for key in required) for row in rows),
    )
    identity_mismatches = []
    source_mismatches = []
    boundary_failures = []
    for row in rows:
        rank = row.get("rank")
        expected = triage_by_rank.get(rank, {})
        identity = row.get("identity", {})
        for field in ["name", "source_record_id", "source_record_type", "dedupe_key"]:
            if identity.get(field) != expected.get(field):
                identity_mismatches.append(f"{rank}:{field}")
        if set(row.get(url_key, [])) != set(expected.get("source_urls", [])):
            source_mismatches.append(str(rank))
        boundary = row.get(boundary_key, {})
        auth = str(boundary.get("authenticated_behavior", ""))
        browser_actions = boundary.get(
            "browser_side_effects", boundary.get("browser_or_runtime_actions", False)
        )
        if not (
            auth.startswith("U")
            and boundary.get("execution_status") == "UNEXECUTED"
            and boundary.get("admission_status") == "NOT_ADMITTED"
            and boundary.get("implementation_authorized") is False
            and boundary.get("vendor_login") is False
            and browser_actions is False
        ):
            boundary_failures.append(str(rank))
    check(
        f"{label}_triage_identity_parity",
        not identity_mismatches,
        "; ".join(identity_mismatches[:5]),
    )
    check(
        f"{label}_source_parity",
        sum(len(row.get(url_key, [])) for row in rows) == 20
        and not source_mismatches,
        "; ".join(source_mismatches[:5]),
    )
    check(
        f"{label}_evidence_fields",
        all(
            row.get("evidence_class") == "E/D"
            and row.get("direct_claims")
            and row.get("inferred_claims")
            and row.get("unknown_block_contract_fields")
            and row.get("rights_oem_support_gaps")
            and row.get("falsifier")
            and row.get("next_read_only_gate")
            for row in rows
        ),
    )
    check(
        f"{label}_boundaries",
        not boundary_failures,
        "; ".join(boundary_failures[:5]),
    )
    headings = [
        int(match.group(1))
        for match in re.finditer(r"^### Rank (\d+) [—-]", md, re.MULTILINE)
    ]
    check(
        f"{label}_markdown_receipt",
        headings == expected_ranks
        and "UNEXECUTED" in md
        and "NOT_ADMITTED" in md
        and "Callback" in md
        and any(marker in md for marker in CALLBACK_MARKERS),
        f"headings={headings}",
    )


audit_platform(
    "p1a",
    "platform-p1-evidence-a.jsonl",
    "platform-p1-evidence-a.md",
    15,
    34,
    "exact_source_urls",
    "boundary",
)
audit_platform(
    "p1b",
    "platform-p1-evidence-b.jsonl",
    "platform-p1-evidence-b.md",
    35,
    54,
    "source_urls",
    "boundary_fields",
)

github_path = OUT / "github-next50-rights-receipts.jsonl"
github_md_path = OUT / "github-next50-rights-receipts.md"
github = read_jsonl(github_path) if github_path.is_file() else []
github_md = github_md_path.read_text() if github_md_path.is_file() else ""
expected_github_ids = [f"GCP-{index:03d}" for index in range(51, 101)]
check(
    "github_next50_ranks_ids",
    len(github) == 50
    and [
        row.get("priority_id")
        for row in sorted(github, key=lambda item: item.get("rank", 0))
    ]
    == expected_github_ids
    and len({row.get("repository_identity", {}).get("identity_key") for row in github})
    == 50,
)
rights_failures = []
boundary_failures = []
for row in github:
    rights_status = row.get("rights_status")
    sbom = row.get("dependency_sbom", {})
    reference = row.get("reference_only_boundary", {})
    research = row.get("research_only_boundary", {})
    if rights_status in {None, "", "rights_cleared"}:
        rights_failures.append(row.get("priority_id"))
    if (
        sbom.get("status") != "unknown_not_scanned"
        or sbom.get("dependency_scan_performed") is not False
        or not row.get("spdx_or_noassertion")
    ):
        rights_failures.append(row.get("priority_id"))
    if not (
        reference.get("status") == "reference_only"
        and reference.get("reuse_or_admission") == "not_admitted"
        and reference.get("implementation_or_deployment_authorized") is False
        and reference.get("source_code_copy_permitted_by_this_receipt") is False
        and research.get("execution_status") == "UNEXECUTED"
        and research.get("admission_status") == "NOT_ADMITTED"
        and research.get("implementation_authorized") is False
        and research.get("source_code_inspected") is False
        and research.get("credentials_used") is False
    ):
        boundary_failures.append(row.get("priority_id"))
check(
    "github_rights_and_sbom_boundary",
    not rights_failures,
    str(rights_failures[:8]),
)
check(
    "github_research_only_boundary",
    not boundary_failures,
    str(boundary_failures[:8]),
)
check(
    "github_markdown_receipt",
    "GCP-051" in github_md
    and "GCP-100" in github_md
    and "UNEXECUTED" in github_md
    and "NOT_ADMITTED" in github_md
    and "reference" in github_md.lower()
    and "Callback" in github_md
    and any(marker in github_md for marker in CALLBACK_MARKERS),
)

standards_path = OUT / "standards-applicability-closure.jsonl"
standards_md_path = OUT / "standards-applicability-closure.md"
standards = read_jsonl(standards_path) if standards_path.is_file() else []
standards_md = standards_md_path.read_text() if standards_md_path.is_file() else ""
cell_ids = {row.get("cell_id") for row in standards}
check(
    "standards_cells_and_dimensions",
    len(standards) == 170
    and cell_ids == {f"W11-{index:03d}" for index in range(1, 171)}
    and len({row.get("industry_id") for row in standards}) == 17
    and len({row.get("dimension") for row in standards}) == 10,
)
standards_failures = []
source_refs = set()
source_links = set()
for row in standards:
    source_refs.update(row.get("source_refs", []))
    source_links.update(row.get("source_links", []))
    readiness = row.get("readiness", {})
    evidence = row.get("evidence_class", {})
    if not (
        isinstance(readiness, dict)
        and readiness.get("state") == "readiness_unexecuted"
        and readiness.get("executed_scans") == "unexecuted"
        and readiness.get("certification") == "unexecuted"
        and readiness.get("conformance") == "unexecuted"
        and readiness.get("runtime_receipts") == "unexecuted"
        and readiness.get("legal_conclusion") == "unknown"
        and row.get("execution_status") == "UNEXECUTED"
        and row.get("admission_status") == "NOT_ADMITTED"
        and row.get("implementation") is False
        and row.get("authenticated_capability_claimed") is False
        and row.get("production_deployment_claimed") is False
        and row.get("client_data_used") is False
        and row.get("private_data_used") is False
        and isinstance(evidence, dict)
        and row.get("source_refs")
        and row.get("source_links")
        and row.get("falsifier")
        and row.get("next_gate")
    ):
        standards_failures.append(row.get("cell_id"))
check(
    "standards_records_boundary",
    not standards_failures,
    str(standards_failures[:8]),
)
check(
    "standards_source_closure",
    len(source_refs) == 70
    and len(source_links) == 70
    and all(str(value).startswith(("http://", "https://")) for value in source_links),
    f"refs={len(source_refs)} links={len(source_links)}",
)
check(
    "standards_markdown_receipt",
    "170-cell" in standards_md
    and "Callback receipt" in standards_md
    and "UNEXECUTED" in standards_md
    and "NOT_ADMITTED" in standards_md
    and "readiness_unexecuted" in standards_md
    and any(marker in standards_md for marker in CALLBACK_MARKERS),
)

industry_path = OUT / "industry-signal-depth.md"
industry_md = industry_path.read_text() if industry_path.is_file() else ""
industry_headings = [
    int(match.group(1))
    for match in re.finditer(r"^### 3\.(\d+) `", industry_md, re.MULTILINE)
]
industry_sources = set(re.findall(r"\bW11-[A-Z0-9]+\b", industry_md))
all_industry_links = re.findall(
    r"\[[^\]]+\]\((<[^>]+>|[^)\s]+)", industry_md
)
external_links = [
    target.strip("<>")
    for target in all_industry_links
    if target.strip("<>").startswith(("http://", "https://"))
]
check(
    "industry_sections_and_sources",
    industry_headings == list(range(1, 18))
    and len(industry_sources) == 34
    and len(external_links) == 37
    and len(all_industry_links) == 42,
    f"sections={industry_headings} sources={len(industry_sources)} external_links={len(external_links)} total_links={len(all_industry_links)}",
)
check(
    "industry_status_receipt",
    "latest_wave_status: 68 observed / 56 needs_direct_review / 8 unobserved / 4 blocked"
    in industry_md
    and "evidence classes" in industry_md.lower()
    and "falsifier" in industry_md.lower()
    and "UNEXECUTED" in industry_md
    and "NOT_ADMITTED" in industry_md
    and "parent_goal_status: active" in industry_md
    and any(marker in industry_md for marker in CALLBACK_MARKERS),
)

unresolved_links = []
for markdown_path in sorted(OUT.glob("*.md")):
    for target in markdown_targets(markdown_path.read_text()):
        target_path = (markdown_path.parent / target).resolve()
        if not target_path.exists():
            unresolved_links.append(f"{markdown_path.name}:{target}")
check(
    "phase5_local_links",
    not unresolved_links,
    "; ".join(unresolved_links[:12]),
)

if FAILURES:
    print("PHASE5_COORDINATOR_AUDIT_FAIL", len(FAILURES), FAILURES)
    sys.exit(1)

mode = "PROMOTED" if PROMOTED_MODE else "PREPROMOTION"
print(
    "PHASE5_COORDINATOR_AUDIT_PASS "
    f"mode={mode} lanes=5 artifacts=9 records=20+20+50+170+17 "
    "predecessor=phase4_verified boundary=research_only"
)
