#!/usr/bin/env bash
set -euo pipefail
D="$(cd "$(dirname "$0")" && pwd)"
A="/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-9/wave-8/lanes/17-target-identity-backfill/outputs/target-identity-assignments.jsonl"
E="$D/pair-dimension-evidence.jsonl"
R="$D/source-receipts.jsonl"
S="$D/lane-state.json"
for f in "$A" "$E" "$R" "$S" "$D/pair-dimension-report.md"; do test -s "$f"; done
test "$(wc -l < "$E" | tr -d ' ')" = 1600
test "$(wc -l < "$R" | tr -d ' ')" = 1600
test "$(jq -s 'map(select(.status=="resolved"))|length' "$A")" = 160
test "$(jq -s 'map(select(.status!="resolved"))|length' "$A")" = 10
test "$(jq -s 'length == 1600 and all(.[]; .record_type=="pair_dimension_evidence" and .evidence_class=="unknown" and (.rights_unknown==true) and (.sbom_unknown==true) and .boundary.research_only==true and .boundary.execution_status=="UNEXECUTED" and .boundary.admission_status=="NOT_ADMITTED" and .boundary.admitted_blocks==0 and .boundary.promotion_allowed==false)' "$E")" = true
test "$(jq -s 'length == 1600 and all(.[]; .record_type=="source_receipt" and .evidence_class=="unknown" and (.rights_unknown==true) and (.sbom_unknown==true) and .no_source_execution==true and .no_clone==true)' "$R")" = true
test "$(jq -s '((map([.pair_id,.dimension]|join("|"))|length) == (map([.pair_id,.dimension]|join("|"))|unique|length))' "$E")" = true
test "$(jq -s '((map(.receipt_id)|length) == (map(.receipt_id)|unique|length))' "$R")" = true
jq -s 'map([.pair_id,.dimension]|join("|"))|sort' "$E" | jq -e '((length==1600) and ((unique|length)==1600))' >/dev/null
jq -s 'map([.pair_id,.dimension]|join("|"))|sort' "$R" | jq -e '((length==1600) and ((unique|length)==1600))' >/dev/null
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
jq -s 'map(select(.status=="resolved")|[.pair_id,.industry.id,.canonical_repository.identity_key,.immutable_revision.sha]|join("|"))|sort|join("\n")' "$A" > "$tmp/pairs"
jq -s 'map([.pair_id,.industry,.repository,.immutable_revision]|join("|"))|unique|map(select(startswith("")))|sort|join("\n")' "$E" > "$tmp/epairs"
jq -s 'map([.pair_id,.industry,.repository,.immutable_revision]|join("|"))|unique|sort|join("\n")' "$R" > "$tmp/rpairs"
test "$(cat "$tmp/pairs")" = "$(cat "$tmp/epairs")"
test "$(cat "$tmp/pairs")" = "$(cat "$tmp/rpairs")"
jq -s 'map({key:(.pair_id+"|"+.dimension),value:{receipt_id:.source_receipt_id,claim:.observed_claim,falsifier:.falsifier,revision:.immutable_revision,urls:.source_urls}})|from_entries' "$E" > "$tmp/e"
jq -s 'map({key:(.pair_id+"|"+.dimension),value:{receipt_id:.receipt_id,claim:.observed_claim,falsifier:.falsifier,revision:.immutable_revision,urls:.source_urls}})|from_entries' "$R" > "$tmp/r"
test "$(jq -S -c . "$tmp/e")" = "$(jq -S -c . "$tmp/r")"
if find "$D" -type f \( -name '*.pyc' -o -name '*.pyo' -o -name '*.class' -o -name '__pycache__' \) -print -quit | grep -q .; then exit 1; fi
test "$(jq -r '.lane_id,.parent_goal_status,.execution_status,.admission_status,(.admitted_blocks|tostring),(.promotion_allowed|tostring)' "$S" | paste -sd '|' -)" = "P9-L20|active|UNEXECUTED|NOT_ADMITTED|0|false"
echo "PASS: 160x10, exact source parity, no duplicates, boundaries, no bytecode"
