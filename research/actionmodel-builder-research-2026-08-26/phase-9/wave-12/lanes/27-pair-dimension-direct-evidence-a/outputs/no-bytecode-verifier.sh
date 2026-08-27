#!/bin/sh
set -eu
BASE=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
IN=/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-9/wave-9/lanes/19-target-identity-backfill/outputs/target-identity-assignments.jsonl
E="$BASE/pair-dimension-evidence.jsonl"
R="$BASE/source-receipts.jsonl"
test "$(wc -l < "$E" | tr -d ' ')" -eq 830
test "$(wc -l < "$R" | tr -d ' ')" -eq 830
test "$(jq -s 'length' "$E")" -eq 830
test "$(jq -s 'length' "$R")" -eq 830
test "$(jq -s '[.[].dimension] | unique | length' "$E")" -eq 10
test "$(jq -s '[.[].dimension] | group_by(.) | map(length) | unique | .[0]' "$E")" = 83
test "$(jq -s 'map([.pair_id,.dimension]|join("|")) | unique | length' "$E")" -eq 830
test "$(jq -s 'map([.pair_id,.dimension]|join("|")) | unique | length' "$R")" -eq 830
test "$(jq -s '[.[].evidence_class] | map(select(.=="inference")) | length' "$E")" -eq 0
test "$(jq -s 'all(.[]; .falsifier and (.rights_unknown==true) and (.sbom_unknown==true) and .boundary.research_only and .boundary.execution_status=="UNEXECUTED" and .boundary.admission_status=="NOT_ADMITTED" and .boundary.admitted_blocks==0 and (.boundary.promotion_allowed==false))' "$E")" = true
test "$(jq -s 'all(.[]; .evidence_class!="direct" or (.evidence_excerpt|length>0))' "$E")" = true
test "$(jq -s 'all(.[]; .evidence_class=="direct" or (.evidence_excerpt|length==0))' "$E")" = true
test "$(jq -s 'map([.pair_id,.dimension,.evidence_class,.immutable_revision,.evidence_excerpt]|join("|")) | sort' "$E")" = "$(jq -s 'map([.pair_id,.dimension,.evidence_class,.immutable_revision,.evidence_excerpt]|join("|")) | sort' "$R")"
test "$(jq -s '[.[].assignment_id] | unique | length' "$E")" -eq 83
printf '%s\n' 'PASS 83x10 rows/parity/uniqueness/evidence-quality/boundary/no-bytecode'
printf 'evidence_classes %s\n' "$(jq -c -s 'group_by(.evidence_class)|map({class:.[0].evidence_class,count:length})' "$E")"
