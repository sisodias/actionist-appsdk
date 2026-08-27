import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const laneDir = path.resolve(here, '../..');
const phase7Dir = path.resolve(here, '../../../..');
const queuePath = path.join(phase7Dir, 'outputs/closure-queue.jsonl');
const auditPath = path.join(phase7Dir, 'outputs/coverage-gap-audit.json');
const sharedStatePath = path.join(phase7Dir, 'phase-7-state.json');
const wave1Dir = path.join(laneDir, 'outputs');
const ledgerPath = path.join(here, 'dimension-evidence-ledger.jsonl');
const receiptsPath = path.join(here, 'source-receipts.jsonl');
const reportPath = path.join(here, 'dimension-depth-report.md');
const statePath = path.join(here, 'lane-state.json');

const dimensions = [
  ['demand_atom_fit', 'Demand and solution-atom fit'],
  ['workflow_behavior', 'Workflow behavior'],
  ['data_model', 'Data model'],
  ['integration_surface', 'Integration surface'],
  ['ui_assembly', 'UI assembly'],
  ['agent_authority', 'Agent authority'],
  ['verification_eval', 'Verification and eval'],
  ['provenance_rights', 'Provenance and rights'],
  ['runtime_deployment', 'Runtime and deployment'],
  ['economics_maintenance', 'Economics and maintenance']
];
const dimensionIds = new Set(dimensions.map(([id]) => id));

const fieldPaths = {
  demand_atom_fit: ['atom', 'source_of_truth', 'owner', 'research_boundary'],
  workflow_behavior: ['state_machine.transitions', 'state_machine.terminal_states', 'idempotency_replay', 'evidence_receipts'],
  data_model: ['atom.source_of_truth', 'provenance_rights.lineage', 'tenancy.data_owner', 'tenancy.retention', 'evidence_receipts'],
  integration_surface: ['ports', 'authority_consent.capability_scope', 'idempotency_replay', 'evidence_receipts'],
  ui_assembly: ['ui', 'registry', 'scaffold', 'design_tokens', 'accessibility', 'research_boundary'],
  agent_authority: ['authority_consent', 'actor', 'approval', 'egress', 'side_effects', 'research_boundary'],
  verification_eval: ['verification', 'eval', 'recovery.workflow', 'evidence_receipts'],
  provenance_rights: ['provenance_rights.license', 'notices', 'sbom', 'attribution', 'lineage'],
  runtime_deployment: ['deployment', 'runtime', 'tenancy', 'secrets', 'rollback', 'recovery.workflow'],
  economics_maintenance: ['economics', 'pricing_usage', 'maintenance', 'support', 'cost_visibility', 'exit']
};

function fail(message) {
  throw new Error(`W2 smoke FAIL: ${message}`);
}

function readJsonl(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const lines = raw.split('\n').filter(line => line.trim() !== '');
  return lines.map((line, index) => {
    try {
      return JSON.parse(line);
    } catch (error) {
      fail(`${path.basename(filePath)} line ${index + 1} is not JSON: ${error.message}`);
    }
  });
}

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

function exactJson(a, b, label) {
  if (JSON.stringify(a) !== JSON.stringify(b)) fail(`${label} mismatch`);
}

function pairKey(row) {
  const repoUrl = row.repository.canonical_repo_url ?? row.repository.repo_url;
  return `${row.industry_id}|${repoUrl}`;
}

function rowKey(row) {
  return `${pairKey(row)}|${row.dimension.id}`;
}

function assertBoundary(boundary, label) {
  const requiredTrue = [
    'research_only', 'client_data', 'private_data', 'vendor_login', 'credentials',
    'browser_side_effects', 'repository_clone', 'source_copy', 'source_execution',
    'build', 'deployment', 'benchmark', 'scan', 'external_write', 'admission'
  ];
  if (boundary.research_only !== true) fail(`${label} research_only must be true`);
  for (const key of requiredTrue.slice(1)) {
    if (boundary[key] !== false) fail(`${label} ${key} must be false`);
  }
  if (boundary.implementation_authorized !== false) fail(`${label} implementation_authorized must be false`);
  if (boundary.execution_status !== 'UNEXECUTED') fail(`${label} execution boundary changed`);
  if (boundary.admission_status !== 'NOT_ADMITTED') fail(`${label} admission boundary changed`);
  if (boundary.authenticated_behavior !== 'U') fail(`${label} authenticated_behavior must be U`);
  if (boundary.parent_goal_status !== 'active') fail(`${label} parent goal boundary changed`);
}

if (!fs.existsSync(here)) fail('wave-2 output directory missing');
const expectedFiles = [
  'dimension-evidence-ledger.jsonl',
  'source-receipts.jsonl',
  'dimension-depth-report.md',
  'lane-state.json',
  'smoke-dimension-evidence-wave-2.mjs'
].sort();
exactJson(fs.readdirSync(here).sort(), expectedFiles, 'wave-2 output boundary');

const queue = readJsonl(queuePath);
const queueById = new Map(queue.map(row => [row.queue_id, row]));
const wave1LedgerPath = path.join(wave1Dir, 'dimension-evidence-ledger.jsonl');
const wave1Ledger = readJsonl(wave1LedgerPath);
const excluded = new Set(wave1Ledger.map(row => row.queue_id));
if (excluded.size !== 10) fail(`expected 10 Wave 1 T1 queue IDs, got ${excluded.size}`);

const selected = [];
const industries = [...new Set(queue.filter(row => row.status === 'partial').map(row => row.industry_id))].sort();
for (const industryId of industries) {
  const candidates = queue
    .filter(row => row.status === 'partial' && row.industry_id === industryId && !excluded.has(row.queue_id))
    .sort((a, b) => b.dimension_count - a.dimension_count || a.queue_id.localeCompare(b.queue_id));
  selected.push(...candidates.slice(0, 10));
}
if (industries.length !== 17) fail(`expected 17 industries, got ${industries.length}`);
if (selected.length !== 170) fail(`expected 170 selected pairs, got ${selected.length}`);
if (selected.some(row => row.dimension_count !== 9 || row.dimensions_missing.length !== 1)) {
  fail('selection contains a pair other than a nine-of-ten partial');
}
if (selected.some(row => excluded.has(row.queue_id))) fail('Wave 1 T1 queue ID was selected');
const selectedKeys = new Set(selected.map(pairKey));
if (selectedKeys.size !== 170) fail(`selected pair identity uniqueness is ${selectedKeys.size}`);
const selectedByIndustry = new Map(industries.map(industryId => [industryId, 0]));
for (const row of selected) selectedByIndustry.set(row.industry_id, selectedByIndustry.get(row.industry_id) + 1);
if ([...selectedByIndustry.values()].some(count => count !== 10)) fail('industry selection is not exactly 10 per industry');

const ledger = readJsonl(ledgerPath);
const receipts = readJsonl(receiptsPath);
const report = fs.readFileSync(reportPath, 'utf8');
const state = JSON.parse(fs.readFileSync(statePath, 'utf8'));
if (ledger.length !== 1700) fail(`ledger rows ${ledger.length}, expected 1700`);
if (receipts.length !== 1700) fail(`receipt rows ${receipts.length}, expected 1700`);
if (new Set(ledger.map(rowKey)).size !== 1700) fail('ledger pair×dimension keys are not unique');
if (new Set(receipts.map(row => row.pair_dimension_key)).size !== 1700) fail('receipt pair×dimension keys are not unique');
if (new Set(ledger.map(pairKey)).size !== 170) fail('ledger does not contain exactly 170 pairs');

const pairCounts = new Map();
const dimensionCounts = new Map(dimensions.map(([id]) => [id, 0]));
const receiptsById = new Map(receipts.map(row => [row.receipt_id, row]));
for (const row of ledger) {
  const source = queueById.get(row.queue_id);
  if (!source) fail(`${row.record_id} references unknown queue ID`);
  if (!selectedKeys.has(pairKey(row))) fail(`${row.record_id} is outside deterministic selection`);
  if (row.repository.owner !== source.repository.owner || row.repository.name !== source.repository.name || row.repository.canonical_repo_url !== source.repository.repo_url) {
    fail(`${row.record_id} repository identity mismatch`);
  }
  if (!dimensionIds.has(row.dimension.id)) fail(`${row.record_id} has unknown dimension`);
  if (row.dimension.label.length === 0) fail(`${row.record_id} dimension label empty`);
  if (row.pair_state_before.status !== 'partial' || row.pair_state_before.dimension_count !== 9) fail(`${row.record_id} pair state mismatch`);
  exactJson(row.pair_state_before.dimensions_missing, source.dimensions_missing, `${row.record_id} missing dimensions`);
  exactJson(row.pair_state_before.dimensions_present, source.dimensions_present, `${row.record_id} present dimensions`);
  const dimRecord = (source.dimension_records || []).find(record => record.dimension_id === row.dimension.id);
  const expectedSources = dimRecord?.evidence?.length ? dimRecord.evidence : source.source_urls;
  exactJson(row.source_urls, expectedSources, `${row.record_id} source URLs`);
  if (!row.source_urls.every(url => /^https:\/\/(api\.)?github\.com\//.test(url))) fail(`${row.record_id} has non-GitHub source URL`);
  if (!/^2026-08-27$/.test(row.observed_at)) fail(`${row.record_id} observation date mismatch`);
  if (!row.limitation || !row.falsifier || !row.next_read_only_gate || !row.observation) fail(`${row.record_id} missing evidence contract text`);
  if (!Array.isArray(row.direct_claims) || !Array.isArray(row.inferred_claims)) fail(`${row.record_id} claims are not arrays`);
  if (!Array.isArray(row.unknown_block_contract_fields.fields) || row.unknown_block_contract_fields.fields.length === 0) fail(`${row.record_id} unknown fields missing`);
  exactJson(row.unknown_block_contract_fields.fields, fieldPaths[row.dimension.id], `${row.record_id} unknown field paths`);
  if (row.rights_sbom_state.rights_state !== 'U' || row.rights_sbom_state.sbom_status !== 'U_NOT_SCANNED') fail(`${row.record_id} rights/SBOM boundary missing`);
  assertBoundary(row.research_only_boundary, row.record_id);
  const receipt = receiptsById.get(row.source_receipt_id);
  if (!receipt) fail(`${row.record_id} source receipt missing`);
  if (receipt.pair_dimension_key !== rowKey(row)) fail(`${row.record_id} receipt parity mismatch`);
  if (receipt.canonical_url !== row.repository.canonical_repo_url) fail(`${row.record_id} receipt identity mismatch`);
  exactJson(receipt.source_urls, row.source_urls, `${row.record_id} receipt source URLs`);
  exactJson(receipt.dimension, row.dimension, `${row.record_id} receipt dimension`);
  if (receipt.observed_at !== row.observed_at || receipt.evidence_class !== row.evidence_class) fail(`${row.record_id} receipt date/evidence parity mismatch`);
  assertBoundary(receipt.research_only_boundary, `${row.record_id} receipt`);
  const pair = pairKey(row);
  pairCounts.set(pair, (pairCounts.get(pair) || 0) + 1);
  dimensionCounts.set(row.dimension.id, dimensionCounts.get(row.dimension.id) + 1);
  const isMissing = source.dimensions_missing.includes(row.dimension.id);
  if (isMissing) {
    if (row.evidence_state !== 'unknown_blocked' || row.evidence_class !== 'U' || row.direct_claims.length !== 0 || row.inferred_claims.length !== 0) fail(`${row.record_id} missing dimension is not explicit U/blocked`);
    if (receipt.access_status !== 'not_observed_for_dimension') fail(`${row.record_id} missing receipt access state incorrect`);
  } else {
    if (!dimRecord) fail(`${row.record_id} present dimension record absent from queue`);
    if (row.evidence_state !== 'documented_repo_specific' || row.evidence_class !== dimRecord.evidence_class) fail(`${row.record_id} inherited evidence state/class mismatch`);
    if (row.observation !== dimRecord.observation || row.limitation !== dimRecord.limitation || row.source_falsifier_or_next_gate !== dimRecord.falsifier_or_next_gate) fail(`${row.record_id} inherited queue evidence changed`);
    if (receipt.access_status !== 'queue_inherited_repository_specific') fail(`${row.record_id} inherited receipt access state incorrect`);
  }
}
if ([...pairCounts.values()].some(count => count !== 10)) fail('not exactly 10 dimensions per selected pair');
if ([...dimensionCounts.values()].some(count => count !== 170)) fail('not exactly 170 records per dimension');

if (state.wave_id !== 'P7-DIMENSION-EVIDENCE-W2' || state.selected_pairs !== 170 || state.ledger_rows !== 1700 || state.source_receipts !== 1700) fail('lane state count or wave mismatch');
if (state.status !== 'completed' || state.smoke_status !== 'pass') fail('lane state is not completed/pass');
if (state.research_only !== true || state.execution_status !== 'UNEXECUTED' || state.admission_status !== 'NOT_ADMITTED' || state.implementation_authorized !== false || state.parent_goal_status !== 'active') fail('lane state boundary changed');
if (state.complete_pairs_baseline !== 270 || state.complete_pairs_target !== 1700 || state.master_counters_unchanged !== true) fail('master counter boundary missing');
if (state.callback_status !== 'pending' && state.callback_status !== 'sent_and_verified') fail('lane callback state invalid');
for (const [file, expectedHash] of Object.entries(state.preserved_wave1_hashes || {})) {
  if (!fs.existsSync(file) || sha256(file) !== expectedHash) fail(`preserved Wave 1 hash changed: ${file}`);
}
if (state.preserved_input_hashes?.closure_queue && sha256(queuePath) !== state.preserved_input_hashes.closure_queue) fail('closure queue hash changed');
if (state.preserved_input_hashes?.coverage_audit && sha256(auditPath) !== state.preserved_input_hashes.coverage_audit) fail('coverage audit hash changed');
if (state.preserved_input_hashes?.shared_phase_state && sha256(sharedStatePath) !== state.preserved_input_hashes.shared_phase_state) fail('shared Phase 7 state hash changed');

for (const marker of ['Wave 2', '1,700', '170 nine-of-ten pairs', '270', 'No overall completion', 'UNEXECUTED', 'NOT_ADMITTED', 'parent_goal_status=active']) {
  if (!report.includes(marker)) fail(`report missing marker: ${marker}`);
}

console.log(JSON.stringify({
  status: 'PASS',
  wave: 'P7-DIMENSION-EVIDENCE-W2',
  selected_pairs: selected.length,
  industries: industries.length,
  dimensions: dimensions.length,
  ledger_rows: ledger.length,
  source_receipts: receipts.length,
  exact_pair_dimension_keys: new Set(ledger.map(rowKey)).size,
  per_dimension: Object.fromEntries(dimensionCounts),
  per_industry: Object.fromEntries([...selectedByIndustry].map(([industryId, count]) => [industryId, { pairs: count, records: count * 10 }])),
  excluded_wave1_t1_queue_ids: excluded.size,
  boundaries: 'research_only / UNEXECUTED / NOT_ADMITTED / parent active',
  output_boundary: expectedFiles
}, null, 2));
