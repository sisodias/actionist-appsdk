#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import cp from 'node:child_process';
import { fileURLToPath } from 'node:url';

const out = path.dirname(fileURLToPath(import.meta.url));
const phase7 = path.resolve(out, '../../..');
const queuePath = path.join(phase7, 'outputs/closure-queue.jsonl');
const auditPath = path.join(phase7, 'outputs/coverage-gap-audit.json');
const ledgerPath = path.join(out, 'dimension-evidence-ledger.jsonl');
const receiptsPath = path.join(out, 'source-receipts.jsonl');
const reportPath = path.join(out, 'dimension-depth-report.md');
const statePath = path.join(out, 'lane-state.json');

const errors = [];
const readJsonl = file => fs.readFileSync(file, 'utf8').trim().split(/\n/).filter(Boolean).map(JSON.parse);
const ledger = readJsonl(ledgerPath);
const receipts = readJsonl(receiptsPath);
const report = fs.readFileSync(reportPath, 'utf8');
const state = JSON.parse(fs.readFileSync(statePath, 'utf8'));
const queueRaw = fs.readFileSync(queuePath, 'utf8');
const audit = JSON.parse(fs.readFileSync(auditPath, 'utf8'));
const queue = readJsonl(queuePath);
const queueHash = crypto.createHash('sha256').update(queueRaw).digest('hex');
const auditHash = crypto.createHash('sha256').update(fs.readFileSync(auditPath)).digest('hex');
const dimensions = [
  'demand_atom_fit', 'workflow_behavior', 'data_model', 'integration_surface', 'ui_assembly',
  'agent_authority', 'verification_eval', 'provenance_rights', 'runtime_deployment', 'economics_maintenance'
];
const expectedFiles = [
  'dimension-depth-report.md', 'dimension-evidence-ledger.jsonl', 'lane-state.json',
  'smoke-dimension-evidence.mjs', 'source-receipts.jsonl'
];
const actualFiles = fs.readdirSync(out).sort();
if (JSON.stringify(actualFiles) !== JSON.stringify(expectedFiles)) errors.push(`owned output boundary: ${actualFiles.join(',')}`);

const selected = [];
for (const dimension of dimensions) {
  const candidates = queue
    .filter(row => row.status === 'partial' && (row.dimensions_missing || []).includes(dimension))
    .sort((a, b) => b.dimension_count - a.dimension_count || a.queue_id.localeCompare(b.queue_id));
  if (!candidates.length) errors.push(`no queue candidate for ${dimension}`);
  else selected.push({ row: candidates[0], dimension });
}
if (ledger.length !== 10) errors.push(`ledger rows ${ledger.length}, expected 10`);
if (receipts.length !== 10) errors.push(`receipt rows ${receipts.length}, expected 10`);
if (new Set(ledger.map(row => row.dimension.id)).size !== 10) errors.push('ledger dimension uniqueness');
if (new Set(ledger.map(row => row.record_id)).size !== ledger.length) errors.push('ledger record uniqueness');
if (new Set(receipts.map(row => row.receipt_id)).size !== receipts.length) errors.push('receipt uniqueness');

const receiptById = new Map(receipts.map(row => [row.receipt_id, row]));
for (const [index, item] of selected.entries()) {
  const row = ledger[index];
  if (!row) continue;
  const source = item.row;
  if (row.dimension.id !== item.dimension || row.queue_id !== source.queue_id) errors.push(`selection mismatch ${index + 1}`);
  if (row.industry_id !== source.industry_id || row.repository.canonical_repo_url !== source.repository.repo_url || row.repository.owner !== source.repository.owner || row.repository.name !== source.repository.name) errors.push(`identity mismatch ${row.record_id}`);
  if (JSON.stringify(row.exact_public_source_or_unknown.declared_queue_paths) !== JSON.stringify(source.source_urls)) errors.push(`source parity ${row.record_id}`);
  if (JSON.stringify(row.prior_pair_state.dimensions_missing) !== JSON.stringify(source.dimensions_missing)) errors.push(`missing-dimension preservation ${row.record_id}`);
  if (row.prior_pair_state.dimension_count !== source.dimension_count) errors.push(`prior count ${row.record_id}`);
  if (!row.direct_claims.length || !row.inferred_claims.length || !row.limitation || !row.falsifier || !row.next_read_only_gate) errors.push(`evidence completeness ${row.record_id}`);
  if (row.direct_claims.some(claim => !row.source_urls?.includes(claim.source_url) && !source.source_urls.includes(claim.source_url))) errors.push(`claim source ${row.record_id}`);
  if (row.source_receipt_id === undefined || !receiptById.has(row.source_receipt_id)) errors.push(`receipt link ${row.record_id}`);
  for (const url of source.source_urls) {
    let parsed;
    try { parsed = new URL(url); } catch { errors.push(`invalid URL ${row.record_id}`); continue; }
    if (parsed.protocol !== 'https:' || !(parsed.hostname === 'github.com' || parsed.hostname === 'api.github.com' || parsed.hostname.endsWith('.github.com'))) errors.push(`non-first-party source ${row.record_id}: ${url}`);
  }
  const b = row.research_only_boundary;
  if (!b || b.research_only !== true || b.authenticated_behavior !== 'U' || b.execution_status !== 'UNEXECUTED' || b.admission_status !== 'NOT_ADMITTED' || b.implementation_authorized !== false || b.parent_goal_status !== 'active') errors.push(`boundary ${row.record_id}`);
  if (!row.rights_sbom_state || row.rights_sbom_state.license_status !== 'unknown_not_legal_clearance' || row.rights_sbom_state.sbom_status !== 'unknown_not_scanned') errors.push(`rights/SBOM ${row.record_id}`);
}
for (const receipt of receipts) {
  if (!receipt.canonical_url || !receipt.paths_or_endpoints?.length || !receipt.observed_at || !receipt.evidence_class || !receipt.rights_state || receipt.sbom_state !== 'unknown_not_scanned') errors.push(`receipt fields ${receipt.receipt_id}`);
  if (receipt.research_only !== true || receipt.execution_status !== 'UNEXECUTED' || receipt.admission_status !== 'NOT_ADMITTED' || receipt.implementation_authorized !== false) errors.push(`receipt boundary ${receipt.receipt_id}`);
}

if (audit.measured_current.complete_industry_repository_pairs !== 270 || audit.target.complete_industry_repository_pairs !== 1700) errors.push('coverage denominator changed');
if (state.lane_id !== 'P7-DIMENSION-EVIDENCE' || state.tranche_id !== 'P7-DIMENSION-EVIDENCE-T1' || state.ledger_rows !== 10 || state.source_receipts !== 10 || state.dimensions_covered.length !== 10 || state.complete_pairs_baseline !== 270 || state.complete_pairs_target !== 1700 || state.research_only !== true || state.execution_status !== 'UNEXECUTED' || state.admission_status !== 'NOT_ADMITTED' || state.implementation_authorized !== false || state.parent_goal_status !== 'active') errors.push('lane state contract');
if (!report.includes('270 complete industry–repository pairs out of a 1,700 target') || !report.includes('does not claim any complete-pair count increase') || !report.includes('covering 10/10 dimensions')) errors.push('report denominator/non-claim markers');
if ((report.match(/^### P7-DIM-/gm) || []).length !== 10) errors.push('report record count');
const diff = cp.execFileSync('git', ['diff', '--check', '--', path.resolve(out)], { encoding: 'utf8' });
if (diff.trim()) errors.push('git diff --check output');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(JSON.stringify({
  smoke: 'PASS',
  structural: 'PASS',
  identity_source_parity: 'PASS',
  boundary: 'PASS',
  links: 'PASS',
  rights_sbom_state: 'PASS',
  denominator_guard: 'PASS',
  git_diff_check: 'PASS',
  ledger_rows: ledger.length,
  source_receipts: receipts.length,
  dimensions: dimensions.length,
  complete_pairs_baseline: 270,
  complete_pairs_target: 1700,
  closure_queue_sha256: queueHash,
  coverage_audit_sha256: auditHash
}, null, 2));
