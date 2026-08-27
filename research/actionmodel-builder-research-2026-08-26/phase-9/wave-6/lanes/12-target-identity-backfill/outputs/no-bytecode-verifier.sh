#!/usr/bin/env bash
set -euo pipefail

OUT="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$OUT/../../../../../" && pwd)"
ASSIGN="$OUT/target-identity-assignments.jsonl"
EDGES="$OUT/identity-edges.jsonl"
RECEIPTS="$OUT/source-receipts.jsonl"
W2="$ROOT/phase-9/wave-2/lanes/04-target-identity-backfill/outputs/target-identity-assignments.jsonl"
LEDGER="$ROOT/phase-9/lanes/01-pair-completion-forensics/outputs/pair-completion-ledger.jsonl"

jq -e '(.parent_goal_status == "active" and .research_only == true and .implementation_authorized == false and .execution_status == "UNEXECUTED" and .admission_status == "NOT_ADMITTED" and .admitted_blocks == 0 and .promotion_allowed == false)' "$OUT/lane-state.json" >/dev/null
test "$(wc -l < "$ASSIGN")" -eq 170
test "$(wc -l < "$EDGES")" -eq 166
test "$(wc -l < "$RECEIPTS")" -eq 170
jq -se 'all(.[]; .record_type == "target_identity_assignment")' "$ASSIGN" >/dev/null
jq -se 'all(.[]; .record_type == "identity_edge")' "$EDGES" >/dev/null
jq -se 'all(.[]; .record_type == "source_receipt")' "$RECEIPTS" >/dev/null
test "$(jq -s 'map(.industry.id) | group_by(.) | all(length == 10)' "$ASSIGN")" = true
test "$(jq -s 'map(select(.status == "resolved")) | length' "$ASSIGN")" -eq 166
test "$(jq -s 'map(select(.status == "unresolved")) | length' "$ASSIGN")" -eq 4
test "$(jq -s 'map(select(.status == "unresolved")) | all(.[]; .canonical_repository == null and .immutable_revision == null)' "$ASSIGN")" = true
test "$(jq -s --slurpfile w2 "$W2" '($w2 | map(.pair_id)) as $used | [.[] | select(.pair_id as $p | $used | index($p))] | length' "$ASSIGN")" -eq 0
test "$(jq -s 'map(select(.status == "resolved")) | group_by(.industry.id) | map([.[].canonical_repository.url | ascii_downcase] | length == (unique | length)) | all' "$ASSIGN")" = true
test "$(jq -s --slurpfile a "$ASSIGN" '($a | map(.assignment_id)) as $ids | map(.assignment_id) | sort == ($ids | sort)' "$RECEIPTS")" = true
test "$(jq -s --slurpfile a "$ASSIGN" '($a | map(select(.status == "resolved") | .pair_id)) as $ids | map(.pair_id) | sort == ($ids | sort)' "$EDGES")" = true
if find "$OUT" -type f \( -name '*.pyc' -o -name '*.pyo' -o -name '*.class' -o -name '*.so' \) -print -quit | grep -q .; then
  echo "FAIL bytecode_or_binary_artifact"
  exit 1
fi
echo "PASS assignments=170 resolved=166 unresolved=4 edges=166 receipts=170 industries=17 rows_per_industry=10 l04_overlap=0 unique_url_violations=0 bytecode=0"
