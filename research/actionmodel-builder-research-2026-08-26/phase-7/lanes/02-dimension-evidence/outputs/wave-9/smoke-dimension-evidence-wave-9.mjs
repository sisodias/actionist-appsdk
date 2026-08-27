import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const phase7Dir = path.resolve(here, '../../../..');
const repoRoot = path.resolve(phase7Dir, '../../..');
const queuePath = path.join(phase7Dir, 'outputs/closure-queue.jsonl');
const auditPath = path.join(phase7Dir, 'outputs/coverage-gap-audit.json');
const dispatchPath = path.join(phase7Dir, 'wave-9-dispatch-receipt.json');
const sharedStatePath = path.join(phase7Dir, 'phase-7-state.json');
const corpusPath = path.join(phase7Dir, 'lanes/01-corpus-integrity/outputs/wave-9/selection-ledger-wave-9.jsonl');
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

const fail = message => { throw new Error(`W9 smoke FAIL: ${message}`); };
const read = file => fs.readFileSync(file, 'utf8');
const jsonl = file => read(file).split('\n').filter(line => line.trim()).map((line, index) => {
  try { return JSON.parse(line); } catch (error) { fail(`${path.basename(file)} line ${index + 1}: ${error.message}`); }
});
const sha256 = file => crypto.createHash('sha256').update(read(file)).digest('hex');
const exact = (a, b, label) => { if (JSON.stringify(a) !== JSON.stringify(b)) fail(`${label} mismatch`); };
const canonical = row => row.repository.canonical_repo_url ?? row.repository.repo_url;
const pairKey = row => `${row.industry_id}|${canonical(row)}`;
const normalizedPairKey = row => pairKey(row).toLowerCase();
const rowKey = row => `${pairKey(row)}|${row.dimension.id}`;
const fileFor = key => path.isAbsolute(key) ? key : path.resolve(repoRoot, key);

function assertBoundary(boundary, label) {
  if (boundary.research_only !== true) fail(`${label}: research_only`);
  for (const key of ['client_data', 'private_data', 'vendor_login', 'credentials', 'browser_side_effects', 'repository_clone', 'source_copy', 'source_execution', 'build', 'deployment', 'benchmark', 'scan', 'external_write', 'admission']) {
    if (boundary[key] !== false) fail(`${label}: ${key}`);
  }
  if (boundary.implementation_authorized !== false || boundary.execution_status !== 'UNEXECUTED' || boundary.admission_status !== 'NOT_ADMITTED' || boundary.authenticated_behavior !== 'U' || boundary.parent_goal_status !== 'active' || boundary.admitted_blocks !== 0) fail(`${label}: boundary status`);
}

const expectedFiles = ['dimension-depth-report.md', 'dimension-evidence-ledger.jsonl', 'lane-state.json', 'smoke-dimension-evidence-wave-9.mjs', 'source-receipts.jsonl'].sort();
exact(fs.readdirSync(here).sort(), expectedFiles, 'Wave 9 output boundary');
const queue = jsonl(queuePath);
const queueById = new Map(queue.map(row => [row.queue_id, row]));
const corpus = jsonl(corpusPath);
if (corpus.length !== 170) fail(`corpus selection rows=${corpus.length}`);
const selectedIds = new Set(corpus.map(row => row.closure_input?.queue_id));
if (selectedIds.size !== 170 || corpus.some(row => !selectedIds.has(row.closure_input?.queue_id))) fail('corpus queue IDs are not unique');
const selectedKeys = new Set(corpus.map(row => `${row.industry?.id}|${String(row.repository?.canonical_url ?? row.repository?.source_repo_url).toLowerCase()}`));
if (selectedKeys.size !== 170) fail('corpus pair identities are not unique');
const selected = corpus.map(row => {
  const source = queueById.get(row.closure_input.queue_id);
  if (!source) fail(`corpus references unknown queue ID ${row.closure_input.queue_id}`);
  if (source.industry_id !== row.industry.id || `${source.repository.repo_url}`.toLowerCase() !== `${row.repository.canonical_url ?? row.repository.source_repo_url}`.toLowerCase()) fail(`corpus identity parity ${row.artifact_id}`);
  return source;
});
const industries = [...new Set(selected.map(row => row.industry_id))].sort();
if (industries.length !== 17 || industries.some(industry => selected.filter(row => row.industry_id === industry).length !== 10)) fail('corpus is not 17 industries x 10 pairs');

const priorDirs = [
  path.join(here, '..'),
  path.join(here, '../wave-2'),
  path.join(here, '../wave-3'),
  path.join(here, '../wave-4'),
  path.join(here, '../wave-5'),
  path.join(here, '../wave-6'),
  path.join(here, '../wave-7'),
  path.join(here, '../wave-8')
];
const priorLedgers = priorDirs.map(dir => jsonl(path.join(dir, 'dimension-evidence-ledger.jsonl')));
const priorSets = priorLedgers.map(rows => new Set(rows.map(row => row.queue_id)));
const excludedIds = new Set(priorLedgers.flat().map(row => row.queue_id));
if (priorSets[0].size !== 10 || priorSets.slice(1).some(set => set.size !== 170) || excludedIds.size !== 1200) fail('prior W1-W8 exclusion union is not 1200');
if ([...selectedIds].some(id => excludedIds.has(id))) fail('selected queue ID overlaps prior W1-W6 union');

const ledger = jsonl(ledgerPath);
const receipts = jsonl(receiptsPath);
const report = read(reportPath);
const state = JSON.parse(read(statePath));
if (ledger.length !== 1700 || receipts.length !== 1700) fail(`row counts ${ledger.length}/${receipts.length}`);
if (new Set(ledger.map(rowKey)).size !== 1700 || new Set(receipts.map(row => row.pair_dimension_key)).size !== 1700) fail('pair x dimension uniqueness');
if (new Set(ledger.map(pairKey)).size !== 170) fail('ledger pair count');
const receiptsById = new Map(receipts.map(row => [row.receipt_id, row]));
const pairCounts = new Map();
const dimensionCounts = new Map(dimensions.map(([id]) => [id, 0]));
for (const row of ledger) {
  const source = queueById.get(row.queue_id);
  if (!source || !selectedIds.has(row.queue_id)) fail(`${row.record_id}: queue selection parity`);
  if (row.repository.owner !== source.repository.owner || row.repository.name !== source.repository.name || row.repository.canonical_repo_url !== source.repository.repo_url) fail(`${row.record_id}: repository identity`);
  if (!dimensionIds.has(row.dimension.id) || !row.dimension.label) fail(`${row.record_id}: dimension`);
  if (row.pair_state_before.status !== 'partial' || row.pair_state_before.dimension_count !== source.dimension_count) fail(`${row.record_id}: pair state`);
  exact(row.pair_state_before.dimensions_present, source.dimensions_present, `${row.record_id}: present dimensions`);
  exact(row.pair_state_before.dimensions_missing, source.dimensions_missing, `${row.record_id}: missing dimensions`);
  const sourceDimension = (source.dimension_records || []).find(record => record.dimension_id === row.dimension.id);
  const expectedSources = source.dimensions_missing.includes(row.dimension.id) ? source.source_urls : (sourceDimension?.evidence?.length ? sourceDimension.evidence : source.source_urls);
  exact(row.source_urls, expectedSources, `${row.record_id}: source URLs`);
  if (!row.source_urls.every(url => /^https:\/\/(api\.)?github\.com\//.test(url))) fail(`${row.record_id}: source host`);
  if (row.observed_at !== '2026-08-27' || !row.evidence_class || !row.observation || !row.limitation || !row.falsifier || !row.next_read_only_gate) fail(`${row.record_id}: evidence contract`);
  if (row.source_access_fresh_public_evidence !== false || row.inherited_queue_context !== true || row.evidence_state === 'fresh') fail(`${row.record_id}: inherited/fresh labels`);
  if (!Array.isArray(row.direct_claims) || !Array.isArray(row.inferred_claims)) fail(`${row.record_id}: claims`);
  exact(row.unknown_block_contract_fields.fields, fieldPaths[row.dimension.id], `${row.record_id}: unknown fields`);
  if (row.rights_sbom_state.rights_state !== 'U' || row.rights_sbom_state.sbom_status !== 'U_NOT_SCANNED') fail(`${row.record_id}: rights/SBOM state`);
  assertBoundary(row.research_only_boundary, row.record_id);
  const receipt = receiptsById.get(row.source_receipt_id);
  if (!receipt) fail(`${row.record_id}: receipt missing`);
  if (receipt.pair_dimension_key !== rowKey(row) || receipt.canonical_url !== row.repository.canonical_repo_url || receipt.evidence_class !== row.evidence_class || receipt.observed_at !== row.observed_at) fail(`${row.record_id}: receipt parity`);
  exact(receipt.source_urls, row.source_urls, `${row.record_id}: receipt URLs`);
  exact(receipt.dimension, row.dimension, `${row.record_id}: receipt dimension`);
  assertBoundary(receipt.research_only_boundary, `${row.record_id}: receipt`);
  const missing = source.dimensions_missing.includes(row.dimension.id);
  if (missing) {
    if (row.evidence_state !== 'unknown_blocked' || row.evidence_class !== 'U' || row.direct_claims.length !== 0 || row.inferred_claims.length !== 0 || receipt.access_status !== 'not_observed_for_dimension') fail(`${row.record_id}: missing dimension state`);
  } else {
    if (!sourceDimension) fail(`${row.record_id}: present dimension record missing`);
    if (row.evidence_state !== 'inherited_repository_specific_not_fresh' || row.evidence_class !== sourceDimension.evidence_class || row.observation !== sourceDimension.observation || row.limitation !== sourceDimension.limitation || row.source_falsifier_or_next_gate !== sourceDimension.falsifier_or_next_gate) fail(`${row.record_id}: inherited evidence changed`);
    if (receipt.access_status !== 'inherited_queue_context_not_fresh') fail(`${row.record_id}: inherited receipt state`);
  }
  pairCounts.set(pairKey(row), (pairCounts.get(pairKey(row)) || 0) + 1);
  dimensionCounts.set(row.dimension.id, dimensionCounts.get(row.dimension.id) + 1);
}
if ([...pairCounts.values()].some(count => count !== 10)) fail('not exactly 10 dimensions per pair');
if ([...dimensionCounts.values()].some(count => count !== 170)) fail('not exactly 170 rows per dimension');

if (state.wave_id !== 'P7-DIMENSION-EVIDENCE-W9' || state.selected_pairs !== 170 || state.ledger_rows !== 1700 || state.source_receipts !== 1700 || state.excluded_prior_queue_ids !== 1200) fail('lane state counts/wave');
if (state.corpus_selection_parity?.status !== 'PASS' || state.corpus_selection_parity.rows !== 170 || state.corpus_selection_parity.queue_id_overlap !== 170) fail('lane corpus parity state');
if (state.status !== 'completed' || state.smoke_status !== 'pass' || !['pending', 'sent_and_verified'].includes(state.callback_status) || state.master_counters_unchanged !== true) fail('lane state completion/counter boundary');
if (process.argv.includes('--require-callback') && state.callback_status !== 'sent_and_verified') fail('callback is not sent_and_verified');
if (state.research_only !== true || state.execution_status !== 'UNEXECUTED' || state.admission_status !== 'NOT_ADMITTED' || state.implementation_authorized !== false || state.authenticated_behavior !== 'U' || state.parent_goal_status !== 'active' || state.overall_completion_claim !== false || state.admitted_blocks !== 0) fail('lane state boundary');
for (const [key, expectedHash] of Object.entries(state.preserved_prior_artifact_hashes || {})) if (!fs.existsSync(fileFor(key)) || sha256(fileFor(key)) !== expectedHash) fail(`preserved prior hash changed: ${key}`);
for (const [key, expectedHash] of Object.entries(state.preserved_input_hashes || {})) if (!fs.existsSync(fileFor(key)) || sha256(fileFor(key)) !== expectedHash) fail(`preserved input hash changed: ${key}`);
if (state.output_hashes?.ledger !== sha256(ledgerPath) || state.output_hashes?.receipts !== sha256(receiptsPath) || state.output_hashes?.report !== sha256(reportPath) || state.output_hashes?.smoke !== sha256(path.join(here, 'smoke-dimension-evidence-wave-9.mjs'))) fail('output hash registry mismatch');
for (const marker of ['Wave 9', '170 partial industry', '1,700', 'Selected pairs:', 'inherited', 'not treated as fresh proof', 'No overall completion claim', 'UNEXECUTED', 'NOT_ADMITTED', 'parent_goal_status=active']) if (!report.includes(marker)) fail(`report marker missing: ${marker}`);

console.log(JSON.stringify({status: 'PASS', wave: 'P7-DIMENSION-EVIDENCE-W9', selected_pairs: selected.length, industries: industries.length, dimensions: dimensions.length, ledger_rows: ledger.length, source_receipts: receipts.length, exact_pair_dimension_keys: new Set(ledger.map(rowKey)).size, per_dimension: Object.fromEntries(dimensionCounts), excluded_prior_queue_ids: excludedIds.size, corpus_selection_parity: 'PASS', inherited_context_labeled: true, no_bytecode_mode: 'PYTHONDONTWRITEBYTECODE=1', boundaries: 'research_only / UNEXECUTED / NOT_ADMITTED / admitted_blocks=0 / parent active', callback_status: state.callback_status}, null, 2));
