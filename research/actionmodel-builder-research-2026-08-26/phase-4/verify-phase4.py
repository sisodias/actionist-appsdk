#!/usr/bin/env python3
"""Independent coordinator audit for the Phase-4 research packet."""

import collections
import hashlib
import json
import pathlib
import re
import sys


BASE = pathlib.Path(__file__).resolve().parents[1]
ROOT = BASE / "phase-4"
OUT = ROOT / "outputs"
STATE = json.loads((ROOT / "phase-4-state.json").read_text())
FAILURES = []


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


def read_jsonl(name):
    return [
        json.loads(line)
        for line in (OUT / name).read_text().splitlines()
        if line.strip()
    ]


EXPECTED_LANES = {
    "RCH-PLATFORM-P0-A",
    "RCH-PLATFORM-P0-B",
    "RCH-GITHUB-TOP50-RIGHTS",
    "RCH-LOCAL-CORPUS-METADATA-DEPTH",
    "RCH-PILOT-RECEIPT-RUNBOOK",
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
    STATE.get("phase") == "source-depth-and-pilot-readiness"
    and STATE.get("status") == "phase_verified_parent_goal_active"
    and STATE.get("mode") == "research_only"
    and STATE.get("phase_verified") is True
    and STATE.get("implementation_authorized") is False
    and STATE.get("execution_status") == "UNEXECUTED"
    and STATE.get("admission_status") == "NOT_ADMITTED"
    and STATE.get("admitted_blocks") == 0
    and STATE.get("parent_goal_status") == "active",
)
check(
    "coordinator_promotion_receipt",
    STATE.get("coordinator_verification", {}).get("status") == "PASS"
    and STATE.get("coordinator_verification", {}).get("verifier") == "verify-phase4.py"
    and STATE.get("coordinator_verification", {}).get("lanes_verified") == 5
    and STATE.get("coordinator_verification", {}).get("output_files_verified") == 8
    and STATE.get("coordinator_verification", {}).get("research_boundary_verified") is True,
)
check(
    "phase3_predecessor_verified",
    STATE.get("predecessor", {}).get("phase_verified") is True
    and STATE.get("predecessor", {}).get("artifacts") == 8
    and STATE.get("predecessor", {}).get("lanes") == 5,
)
check("five_lanes", set(STATE.get("lanes", {})) == EXPECTED_LANES)
check(
    "five_lane_statuses",
    all(
        STATE["lanes"][name].get("status") in {"complete", "completed"}
        for name in EXPECTED_LANES
    ),
)
check(
    "five_callbacks",
    all(
        STATE["lanes"][name].get("callback_status")
        in {"received_and_verified", "sent_and_verified", "sent_and_delivery_verified"}
        for name in EXPECTED_LANES
    ),
)

REQUIRED_FILES = [
    "outputs/platform-p0-evidence-a.md",
    "outputs/platform-p0-evidence-a.jsonl",
    "outputs/platform-p0-evidence-b.md",
    "outputs/platform-p0-evidence-b.jsonl",
    "outputs/github-top50-rights-receipts.md",
    "outputs/github-top50-rights-receipts.jsonl",
    "outputs/local-corpus-metadata-depth.md",
    "outputs/pilot-receipt-runbook.md",
]
check("eight_phase4_artifacts", all((ROOT / name).is_file() for name in REQUIRED_FILES))

unresolved_inputs = []
for key, value in STATE.get("inputs", {}).items():
    if key == "implementation_authorized":
        continue
    if not (ROOT / value).resolve().exists():
        unresolved_inputs.append(f"{key}:{value}")
check("phase4_inputs_resolve", not unresolved_inputs, "; ".join(unresolved_inputs))

# Platform P0 A: ranks 1-7.
platform_a = read_jsonl("platform-p0-evidence-a.jsonl")
platform_a_state = STATE["lanes"]["RCH-PLATFORM-P0-A"]
platform_a_md = (OUT / "platform-p0-evidence-a.md").read_text()
check(
    "p0a_records_and_ranks",
    len(platform_a) == 7
    and sorted(row.get("rank") for row in platform_a) == list(range(1, 8))
    and len({canonical(row.get("identity")) for row in platform_a}) == 7,
)
check(
    "p0a_schema",
    all(
        all(
            key in row
            for key in [
                "rank",
                "identity",
                "exact_source_urls",
                "access_status",
                "evidence_class",
                "direct_claims",
                "inferred_claims",
                "unknown_block_contract_fields",
                "rights_oem_support_gaps",
                "falsifier",
                "next_read_only_gate",
                "boundary",
            ]
        )
        for row in platform_a
    ),
)
check(
    "p0a_source_urls",
    sum(len(row.get("exact_source_urls", [])) for row in platform_a) == 8
    and all(row.get("exact_source_urls") for row in platform_a),
)
check(
    "p0a_boundaries",
    all(
        row["boundary"].get("authenticated_behavior") == "U"
        and row["boundary"].get("execution_status") == "UNEXECUTED"
        and row["boundary"].get("admission_status") == "NOT_ADMITTED"
        and row["boundary"].get("implementation_authorized") is False
        and row["boundary"].get("vendor_login") is False
        for row in platform_a
    ),
)
check(
    "p0a_receipts_and_hashes",
    "P4_P0_A_POSTWRITE_PASS" in platform_a_md
    and "Callback status:" in platform_a_md
    and "received_and_verified" in platform_a_md
    and digest(OUT / "platform-p0-evidence-a.md")
    == platform_a_state.get("report_sha256")
    and digest(OUT / "platform-p0-evidence-a.jsonl")
    == platform_a_state.get("register_sha256"),
)

# Platform P0 B: ranks 8-14.
platform_b = read_jsonl("platform-p0-evidence-b.jsonl")
platform_b_state = STATE["lanes"]["RCH-PLATFORM-P0-B"]
platform_b_md = (OUT / "platform-p0-evidence-b.md").read_text()
check(
    "p0b_records_and_ranks",
    len(platform_b) == 7
    and sorted(row.get("rank") for row in platform_b) == list(range(8, 15))
    and len({canonical(row.get("identity")) for row in platform_b}) == 7,
)
check(
    "p0b_schema",
    all(
        row.get("record_type") == "platform_p0_evidence"
        and all(
            key in row
            for key in [
                "rank",
                "identity",
                "source_urls",
                "access_status",
                "evidence_class",
                "direct_claims",
                "inferred_claims",
                "unknown_block_contract_fields",
                "rights_oem_support_gaps",
                "falsifier",
                "next_read_only_gate",
                "boundary_fields",
            ]
        )
        for row in platform_b
    ),
)
check(
    "p0b_source_urls",
    sum(len(row.get("source_urls", [])) for row in platform_b) == 8
    and all(row.get("source_urls") for row in platform_b),
)
check(
    "p0b_boundaries",
    all(
        row.get("authenticated_behavior", "").startswith("U")
        and row.get("execution_status") == "UNEXECUTED"
        and row.get("admission_status") == "NOT_ADMITTED"
        and row.get("implementation_authorized") is False
        and row.get("boundary_fields", {}).get("reachability_is_not_capability_proof")
        is True
        and row.get("boundary_fields", {}).get("vendor_login") is False
        for row in platform_b
    ),
)
check(
    "p0b_receipt_and_state",
    "Post-write structural, JSONL, link, boundary, and git-diff checks: PASS"
    in platform_b_md
    and platform_b_state.get("rank_start") == 8
    and platform_b_state.get("rank_end") == 14
    and platform_b_state.get("record_count") == 7
    and platform_b_state.get("source_url_count") == 8,
)

# GitHub top 50 rights receipts.
github = read_jsonl("github-top50-rights-receipts.jsonl")
github_state = STATE["lanes"]["RCH-GITHUB-TOP50-RIGHTS"]
github_md = (OUT / "github-top50-rights-receipts.md").read_text()
check(
    "github_50_ranks_ids",
    len(github) == 50
    and sorted(row.get("rank") for row in github) == list(range(1, 51))
    and [row.get("priority_id") for row in github]
    == [f"GCP-{index:03d}" for index in range(1, 51)],
)
check(
    "github_identity_and_dispositions",
    len(
        {
            row.get("repository_identity", {}).get("identity_key")
            for row in github
        }
    )
    == 50
    and collections.Counter(row.get("disposition") for row in github)
    == {"candidate": 43, "hold": 7},
)
check(
    "github_rights_and_sbom",
    all(
        row.get("rights_status")
        and row.get("rights_status") != "rights_cleared"
        and row.get("dependency_sbom", {}).get("status") == "unknown_not_scanned"
        and bool(row.get("reference_only_boundary"))
        and bool(row.get("research_only_boundary"))
        for row in github
    ),
)
check(
    "github_state_boundary",
    github_state.get("rights_cleared") is False
    and github_state.get("capability_evidence_established") is False
    and github_state.get("sbom_scans") == 0
    and github_state.get("url_reachability_checks") == 0,
)
check(
    "github_receipts_and_hashes",
    "Post-write smoke receipt: PASS" in github_md
    and "Fresh CENA callback receipt: DELIVERED_AND_VERIFIED" in github_md
    and digest(OUT / "github-top50-rights-receipts.md")
    == github_state.get("verification", {})
    .get("artifact_sha256", {})
    .get("md")
    and digest(OUT / "github-top50-rights-receipts.jsonl")
    == github_state.get("verification", {})
    .get("artifact_sha256", {})
    .get("jsonl"),
)

# Local metadata depth: parse the 16-column Markdown table.
local_md_path = OUT / "local-corpus-metadata-depth.md"
local_md = local_md_path.read_text()


def split_markdown_row(line):
    body = line.strip()[1:-1]
    cells = []
    buffer = []
    escaped = False
    for char in body:
        if char == "|" and not escaped:
            cells.append("".join(buffer).strip())
            buffer = []
        else:
            buffer.append(char)
        if char == "\\" and not escaped:
            escaped = True
        else:
            escaped = False
    cells.append("".join(buffer).strip())
    return cells


local_rows = [
    split_markdown_row(line)
    for line in local_md.splitlines()
    if line.startswith("| LC-")
]
local_ids = [row[0].strip() for row in local_rows]
local_queues = collections.Counter(row[1] for row in local_rows)
local_path_status = collections.Counter(
    "missing_or_unreadable"
    if "missing_or_unreadable" in row[5]
    else "readable_metadata"
    if "readable_metadata" in row[5]
    else "other"
    for row in local_rows
)
named_counts = [
    tuple(map(int, match.groups()))
    for row in local_rows
    if len(row) > 9
    and (match := re.search(r"listed=(\d+);read=(\d+);unread=(\d+)", row[9]))
]
local_state = STATE["lanes"]["RCH-LOCAL-CORPUS-METADATA-DEPTH"]
check(
    "local_table_shape",
    len(local_rows) == 79
    and all(len(row) == 16 for row in local_rows),
    f"rows={len(local_rows)} widths={collections.Counter(map(len, local_rows))}",
)
check(
    "local_ids_queues",
    set(local_ids) == {f"LC-{index:03d}" for index in range(1, 80)}
    and len(local_queues) == 7,
)
check(
    "local_path_and_named_counts",
    local_path_status == {"readable_metadata": 76, "missing_or_unreadable": 3}
    and len(named_counts) == 79
    and tuple(map(sum, zip(*named_counts))) == (202, 202, 0),
)
check(
    "local_state_receipt_hash",
    local_state.get("records") == 79
    and local_state.get("queues") == 7
    and local_state.get("readable_metadata") == 76
    and local_state.get("missing_or_unreadable") == 3
    and local_state.get("named_metadata_total") == 202
    and local_state.get("named_metadata_present") == 202
    and local_state.get("named_metadata_unreadable") == 0
    and local_state.get("nested_overlaps") == 5
    and local_state.get("bounded_entry_names") == 4893
    and local_state.get("callback_status") == "sent_and_verified"
    and digest(local_md_path) == local_state.get("markdown_sha256"),
)
check(
    "local_boundary_text",
    "Source inspection |" in local_md
    and "FALSE" in local_md
    and "Tooling / scan / evaluator execution |" in local_md
    and "UNEXECUTED" in local_md
    and "Admission / pilot authorization |" in local_md
    and "NOT_ADMITTED" in local_md
    and "callback_status: sent_and_verified" in local_md,
)

# Design-only pilot runbook.
pilot_md = (OUT / "pilot-receipt-runbook.md").read_text()
pilot_state = STATE["lanes"]["RCH-PILOT-RECEIPT-RUNBOOK"]
check(
    "pilot_state_counts",
    pilot_state.get("candidate") == "PILOT-OPS-READMODEL-001"
    and pilot_state.get("recommended_fixture") == "FIX-OPS-001"
    and pilot_state.get("evaluation_gates") == 7
    and pilot_state.get("cheap_model_tasks") == 20
    and pilot_state.get("fixture_families") == 4
    and pilot_state.get("negative_cases") == 15
    and pilot_state.get("receipt_families") == 15
    and pilot_state.get("admitted_blocks") == 0,
)
check(
    "pilot_boundary_text",
    all(
        token in pilot_md
        for token in [
            "DESIGN_ONLY",
            "execution_status: UNEXECUTED",
            "admission_status: NOT_ADMITTED",
            "implementation_authorized: false",
            "parent_goal_status: active",
            "Final callback receipt",
            "callback_status: sent_and_verified",
        ]
    ),
)
check(
    "pilot_verification_state",
    pilot_state.get("verification", {}).get("structure") == "PASS"
    and pilot_state.get("verification", {}).get("gate_count") == "PASS"
    and pilot_state.get("verification", {}).get("task_count") == "PASS"
    and pilot_state.get("verification", {}).get("boundary") == "PASS"
    and pilot_state.get("verification", {}).get("callback") == "sent_and_verified",
)

# Every local Markdown link in Phase-4 outputs resolves on disk.
unresolved_links = []
for markdown_path in ROOT.glob("outputs/*.md"):
    for target in re.findall(r"\[[^\]]+\]\(([^)\s]+)", markdown_path.read_text()):
        if target.startswith(("http://", "https://", "mailto:", "#")):
            continue
        target_path = (markdown_path.parent / target.strip("<>").split("#", 1)[0]).resolve()
        if not target_path.exists():
            unresolved_links.append(f"{markdown_path.name}:{target}")
check("phase4_local_links", not unresolved_links, "; ".join(unresolved_links[:8]))
check(
    "all_lane_task_receipts",
    all(STATE["lanes"][name].get("tasks_completed", 0) > 0 for name in EXPECTED_LANES),
)

if FAILURES:
    print("PHASE4_COORDINATOR_AUDIT_FAIL", len(FAILURES), FAILURES)
    sys.exit(1)

print(
    "PHASE4_COORDINATOR_AUDIT_PASS "
    "lanes=5 artifacts=8 records=7+7+50+79+design-only "
    "predecessor=17000 boundary=research_only"
)
