#!/usr/bin/env python3
"""Independent coordinator audit for the Phase-6 research packet.

Run without arguments before coordinator promotion. Run with --promoted
after the coordinator writes the Phase-6 promotion receipt.
"""

import hashlib
import json
import pathlib
import re
import sys


BASE = pathlib.Path(__file__).resolve().parents[1]
ROOT = BASE / "phase-6"
OUT = ROOT / "outputs"
STATE = json.loads((ROOT / "phase-6-state.json").read_text())
FAILURES = []
PROMOTED_MODE = "--promoted" in sys.argv[1:]


def check(name, condition, detail=""):
    if condition:
        print("PASS", name, (":: " + detail) if detail else "")
    else:
        print("FAIL", name, (":: " + detail) if detail else "")
        FAILURES.append(name)


def canonical(value):
    return json.dumps(value, sort_keys=True, separators=(",", ":"))


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


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


def callback_state(lane):
    return lane.get("callback_status") or lane.get("verification", {}).get("callback")


EXPECTED_LANES = {
    "RCH-P6-PLATFORM-P2-A",
    "RCH-P6-PLATFORM-P2-B",
    "RCH-P6-PLATFORM-P2-C",
    "RCH-P6-GITHUB-RIGHTS-100",
    "RCH-P6-INDUSTRY-CONTRADICTIONS",
}
ACCEPTED_CALLBACKS = {
    "received_and_verified",
    "sent_and_verified",
    "sent_and_delivery_verified",
    "verified_delivery",
    "DONE",
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
    STATE.get("phase") == "p2-evidence-depth-and-selection"
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
        == "phase-7-explicit-authorization-and-client-validation-prep",
    )
    check(
        "coordinator_promotion_receipt",
        STATE.get("coordinator_verification", {}).get("status") == "PASS"
        and STATE.get("coordinator_verification", {}).get("verifier")
        == "verify-phase6.py"
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
    "phase5_predecessor_verified",
    predecessor.get("phase_verified") is True
    and predecessor.get("artifacts") == 9
    and predecessor.get("lanes") == 5,
)

check("five_lane_keys", set(STATE.get("lanes", {})) == EXPECTED_LANES)
for lane_name in sorted(EXPECTED_LANES):
    lane = STATE.get("lanes", {}).get(lane_name, {})
    callback = callback_state(lane)
    check(
        f"{lane_name}_status",
        lane.get("status") in {"complete", "completed"},
        str(lane.get("status")),
    )
    check(
        f"{lane_name}_callback",
        callback in ACCEPTED_CALLBACKS,
        str(callback),
    )
    check(
        f"{lane_name}_tasks",
        isinstance(lane.get("tasks_completed"), int)
        and lane.get("tasks_completed") > 0,
        str(lane.get("tasks_completed")),
    )

REQUIRED_FILES = [
    "PHASE-6-PROGRAM.md",
    "outputs/platform-p2-evidence-a.md",
    "outputs/platform-p2-evidence-a.jsonl",
    "outputs/platform-p2-evidence-b.md",
    "outputs/platform-p2-evidence-b.jsonl",
    "outputs/platform-p2-evidence-c.md",
    "outputs/platform-p2-evidence-c.jsonl",
    "outputs/github-rights-101-200.md",
    "outputs/github-rights-101-200.jsonl",
    "outputs/industry-contradictions.md",
]
missing_files = [name for name in REQUIRED_FILES if not (ROOT / name).is_file()]
check("required_phase6_artifacts", not missing_files, "; ".join(missing_files))

unresolved_inputs = []
for key, value in STATE.get("inputs", {}).items():
    if key == "implementation_authorized":
        continue
    candidate = (ROOT / value).resolve()
    if not candidate.exists():
        unresolved_inputs.append(f"{key}:{value}")
check("phase6_inputs_resolve", not unresolved_inputs, "; ".join(unresolved_inputs))

triage_path = BASE / "phase-3" / "outputs" / "platform-depth-triage.jsonl"
triage_rows = read_jsonl(triage_path) if triage_path.is_file() else []
triage_by_rank = {row.get("rank"): row for row in triage_rows}
check(
    "platform_triage_input",
    len(triage_rows) == 117
    and set(range(1, 118)) == set(triage_by_rank),
    f"rows={len(triage_rows)}",
)


def platform_identity(row, style):
    if style == "c":
        return row.get("platform_identity", {})
    return row.get("identity", {})


def platform_urls(row, style):
    if style == "a":
        return row.get("exact_source_urls", [])
    if style == "b":
        return row.get("source_urls", [])
    return row.get("public_metadata", {}).get("source_urls", [])


def platform_boundary_ok(row, style):
    if style == "a":
        boundary = row.get("boundary", {})
        return (
            str(boundary.get("authenticated_behavior", "")).startswith("U")
            and boundary.get("vendor_login") is False
            and boundary.get("client_data") is False
            and boundary.get("browser_side_effects") is False
            and boundary.get("execution") is False
            and boundary.get("build") is False
            and boundary.get("deployment") is False
            and boundary.get("benchmark") is False
            and boundary.get("scan") is False
            and boundary.get("admission") is False
            and boundary.get("execution_status") == "UNEXECUTED"
            and boundary.get("admission_status") == "NOT_ADMITTED"
            and boundary.get("implementation_authorized") is False
        )
    if style == "b":
        boundary = row.get("boundary_fields", {})
        return (
            str(boundary.get("authenticated_behavior", "")).startswith("U")
            and boundary.get("vendor_login") is False
            and boundary.get("client_or_private_data") is False
            and boundary.get("browser_or_runtime_actions") is False
            and boundary.get("source_execution") is False
            and boundary.get("repository_clone") is False
            and boundary.get("source_copy") is False
            and boundary.get("execution_status") == "UNEXECUTED"
            and boundary.get("admission_status") == "NOT_ADMITTED"
            and boundary.get("implementation_authorized") is False
            and boundary.get("reachability_is_not_capability_proof") is True
            and boundary.get("research_only") is True
        )
    access = row.get("access_limits", {})
    research = row.get("research_only_boundary", {})
    reference = row.get("reference_only_boundary", {})
    return (
        access.get("vendor_login") is False
        and access.get("credentials_used") is False
        and access.get("client_or_private_data") is False
        and access.get("clone_or_source_copy") is False
        and access.get("source_execution") is False
        and access.get("current_reachability") == "NOT_INDEPENDENTLY_CHECKED"
        and research.get("execution_status") == "UNEXECUTED"
        and research.get("admission_status") == "NOT_ADMITTED"
        and research.get("implementation_authorized") is False
        and research.get("source_code_inspected") is False
        and reference.get("status") == "reference_only"
        and reference.get("reuse_or_admission") == "not_admitted"
    )


def audit_platform(label, style, json_name, markdown_name, start, end):
    path = OUT / json_name
    md_path = OUT / markdown_name
    rows = read_jsonl(path) if path.is_file() else []
    md = md_path.read_text() if md_path.is_file() else ""
    expected_ranks = list(range(start, end + 1))
    check(
        f"{label}_records_and_ranks",
        len(rows) == len(expected_ranks)
        and sorted(row.get("rank") for row in rows) == expected_ranks,
        f"rows={len(rows)}",
    )
    expected_identity = {
        rank: triage_by_rank.get(rank, {}) for rank in expected_ranks
    }
    identity_failures = []
    source_failures = []
    boundary_failures = []
    field_failures = []
    identities = set()
    for row in rows:
        rank = row.get("rank")
        identity = platform_identity(row, style)
        expected = expected_identity.get(rank, {})
        identity_key = canonical(identity)
        identities.add(identity_key)
        for field in ["name", "source_record_id", "source_record_type", "dedupe_key"]:
            if identity.get(field) != expected.get(field):
                identity_failures.append(f"{rank}:{field}")
        if set(platform_urls(row, style)) != set(expected.get("source_urls", [])):
            source_failures.append(str(rank))
        if not platform_boundary_ok(row, style):
            boundary_failures.append(str(rank))
        evidence_class = row.get("evidence_class") or row.get(
            "public_metadata", {}
        ).get("evidence_class")
        if not (
            evidence_class
            and row.get("direct_claims")
            and row.get("inferred_claims")
            and row.get("unknown_block_contract_fields")
            and row.get("rights_oem_support_gaps")
            and row.get("falsifier")
            and row.get("next_read_only_gate", row.get("smallest_next_read_only_gate"))
        ):
            field_failures.append(str(rank))
    check(
        f"{label}_identity_parity",
        len(identities) == len(expected_ranks) and not identity_failures,
        "; ".join(identity_failures[:8]),
    )
    check(
        f"{label}_source_parity",
        sum(len(platform_urls(row, style)) for row in rows) == len(expected_ranks)
        and not source_failures,
        "; ".join(source_failures[:8]),
    )
    check(f"{label}_evidence_fields", not field_failures, "; ".join(field_failures[:8]))
    check(f"{label}_boundaries", not boundary_failures, "; ".join(boundary_failures[:8]))
    headings = [
        int(match.group(1))
        for match in re.finditer(r"^### Rank (\d+) [—-]", md, re.MULTILINE)
    ]
    if style == "c":
        headings = [
            int(match.group(1))
            for match in re.finditer(
                r"^\| (\d+) \| PLATFORM-P2-C-\d+ \|", md, re.MULTILINE
            )
        ]
    smoke_receipt = "PASS" in md or bool(re.search(r"(?i)\bpassed\b", md))
    check(
        f"{label}_markdown_receipt",
        headings == expected_ranks
        and "UNEXECUTED" in md
        and "NOT_ADMITTED" in md
        and "callback" in md.lower()
        and smoke_receipt,
        f"headings={headings}",
    )


audit_platform(
    "p2a", "a", "platform-p2-evidence-a.jsonl", "platform-p2-evidence-a.md", 55, 74
)
audit_platform(
    "p2b", "b", "platform-p2-evidence-b.jsonl", "platform-p2-evidence-b.md", 75, 94
)
audit_platform(
    "p2c", "c", "platform-p2-evidence-c.jsonl", "platform-p2-evidence-c.md", 95, 117
)

priority_path = BASE / "phase-3" / "outputs" / "github-candidate-priority.jsonl"
priority_rows = read_jsonl(priority_path) if priority_path.is_file() else []
priority_ids = {
    row.get("priority_id")
    for row in priority_rows
    if row.get("record_type") == "candidate"
}
check(
    "github_priority_input",
    len(priority_ids) == 500
    and all(f"GCP-{index:03d}" in priority_ids for index in range(1, 501)),
    f"candidate_ids={len(priority_ids)}",
)

github_path = OUT / "github-rights-101-200.jsonl"
github_md_path = OUT / "github-rights-101-200.md"
github = read_jsonl(github_path) if github_path.is_file() else []
github_md = github_md_path.read_text() if github_md_path.is_file() else ""
expected_github_ids = [f"GCP-{index:03d}" for index in range(101, 201)]
sorted_github = sorted(github, key=lambda item: item.get("rank", 0))
check(
    "github_next100_ranks_ids",
    len(github) == 100
    and [row.get("priority_id") for row in sorted_github] == expected_github_ids
    and len({row.get("repo_identity", {}).get("identity_key") for row in github}) == 100,
)
repo_urls = {
    row.get("repo_identity", {}).get("repo_url")
    for row in github
}
old_github_path = BASE / "phase-5" / "outputs" / "github-next50-rights-receipts.jsonl"
old_github = read_jsonl(old_github_path) if old_github_path.is_file() else []
old_repo_urls = {
    row.get("repository_identity", {}).get("repo_url")
    for row in old_github
}
check(
    "github_disjoint_from_phase5",
    None not in repo_urls
    and len(repo_urls.intersection(old_repo_urls)) == 0,
    f"overlap={len(repo_urls.intersection(old_repo_urls))}",
)
rights_failures = []
for row in github:
    boundary = row.get("reference_only_boundary", {})
    sbom = row.get("dependency_sbom_metadata", {})
    if not (
        row.get("rights_cleared") is False
        and row.get("rights_status") not in {None, "", "rights_cleared"}
        and row.get("spdx_or_noassertion")
        and row.get("dependency_sbom_status") == "unknown_not_scanned"
        and sbom.get("dependency_scan_performed") is False
        and boundary.get("reference_only") is True
        and boundary.get("rights_uncleared") is True
        and boundary.get("url_fetched") is False
        and boundary.get("source_inspected") is False
        and boundary.get("code_copied") is False
        and boundary.get("executed") is False
        and boundary.get("built") is False
        and boundary.get("deployed") is False
        and boundary.get("benchmarked") is False
        and boundary.get("scanned") is False
        and boundary.get("admitted") is False
        and boundary.get("implementation") is False
        and boundary.get("execution_status") == "UNEXECUTED"
        and boundary.get("admission_status") == "NOT_ADMITTED"
    ):
        rights_failures.append(row.get("priority_id"))
check("github_rights_boundary", not rights_failures, str(rights_failures[:10]))
github_table_rows = [
    match.groups()
    for match in re.finditer(r"^\| (\d+) \| (GCP-\d+) \|", github_md, re.MULTILINE)
]
check(
    "github_markdown_receipt",
    len(github_table_rows) == 100
    and [item[1] for item in github_table_rows] == expected_github_ids
    and "Verified delivery" in github_md
    and "Pending fresh CENA delivery verification" not in github_md
    and "not fetched" in github_md.lower()
    and "unknown_not_scanned" in github_md,
)
gh_state = STATE.get("lanes", {}).get("RCH-P6-GITHUB-RIGHTS-100", {})
check(
    "github_lane_receipt_counts",
    gh_state.get("records") == 100
    and gh_state.get("unique_repositories") == 100
    and gh_state.get("recorded_metadata_urls") == 439
    and gh_state.get("rights_cleared") == 0
    and gh_state.get("dependency_sbom_status") == "unknown_not_scanned"
    and gh_state.get("implementation") is False,
)

industry_path = OUT / "industry-contradictions.md"
industry_md = industry_path.read_text() if industry_path.is_file() else ""
industry_headings = [
    (int(match.group(1)), match.group(2))
    for match in re.finditer(r"^### (\d+)\. ([a-z0-9_]+)$", industry_md, re.MULTILINE)
]
check(
    "industry_sections",
    [item[0] for item in industry_headings] == list(range(1, 18))
    and len({item[1] for item in industry_headings}) == 17,
    f"sections={len(industry_headings)}",
)
industry_markers = {
    "contradiction_codes: 8": "contradictions",
    "absence_codes: 5": "absences",
    "ranked_archetypes: 4": "archetypes",
    "pre_client_gates: 7": "gates",
    "cheap_model_tasks: 20": "tasks",
    "standards_cells: 170": "standards_cells",
    "standards_dimensions_per_cell: 10": "standards_dimensions",
    "w11_public_slots: 136": "w11_slots",
    "w11_public_source_identities: 34": "w11_sources",
    "w11_public_status: 68 observed / 56 needs_direct_review / 8 unobserved / 4 blocked": "w11_status",
    "execution_status: UNEXECUTED": "execution",
    "admission_status: NOT_ADMITTED": "admission",
    "admitted_blocks: 0": "blocks",
    "implementation_authorized: false": "implementation",
    "parent_goal_status: active": "parent",
    "client_validation: NOT_AUTHORIZED": "client_validation",
    "final_smoke: PASS": "smoke",
    "callback_status: DONE": "callback",
}
missing_industry_markers = [
    label for marker, label in industry_markers.items() if marker not in industry_md
]
check(
    "industry_receipt_markers",
    not missing_industry_markers,
    "; ".join(missing_industry_markers),
)
industry_local_links = markdown_targets(industry_md)
check(
    "industry_local_links",
    len(industry_local_links) == 18,
    f"links={len(industry_local_links)}",
)
industry_state = STATE.get("lanes", {}).get("RCH-P6-INDUSTRY-CONTRADICTIONS", {})
summary = industry_state.get("receipt_summary", {})
check(
    "industry_lane_receipt_counts",
    industry_state.get("status") == "complete"
    and industry_state.get("tasks_completed") == 12
    and summary.get("industry_profiles") == 17
    and summary.get("normalized_sections") == 17
    and summary.get("contradiction_codes") == 8
    and summary.get("absence_codes") == 5
    and summary.get("ranked_archetypes") == 4
    and summary.get("pre_client_gates") == 7
    and summary.get("local_links") == 18,
)

unresolved_links = []
for markdown_path in sorted(OUT.glob("*.md")):
    for target in markdown_targets(markdown_path.read_text()):
        target_path = (markdown_path.parent / target).resolve()
        if not target_path.exists():
            unresolved_links.append(f"{markdown_path.name}:{target}")
check(
    "phase6_local_links",
    not unresolved_links,
    "; ".join(unresolved_links[:15]),
)

if FAILURES:
    print("PHASE6_COORDINATOR_AUDIT_FAIL", len(FAILURES), FAILURES)
    sys.exit(1)

mode = "PROMOTED" if PROMOTED_MODE else "PREPROMOTION"
print(
    "PHASE6_COORDINATOR_AUDIT_PASS "
    f"mode={mode} lanes=5 artifacts=9 records=20+20+23+100+17 "
    "predecessor=phase5_verified boundary=research_only"
)
