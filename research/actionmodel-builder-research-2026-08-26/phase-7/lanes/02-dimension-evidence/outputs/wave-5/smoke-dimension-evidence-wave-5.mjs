import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const laneDir = path.resolve(here, '../..');
const phase7Dir = path.resolve(here, '../../../..');
const outputsDir = path.join(laneDir, 'outputs');
const wave2Dir = path.join(outputsDir, 'wave-2');
const wave3Dir = path.join(outputsDir, 'wave-3');
const wave4Dir = path.join(outputsDir, 'wave-4');
const corpusSelectionPath = path.join(phase7Dir, 'lanes/01-corpus-integrity/outputs/wave-5/selection-ledger-wave-5.jsonl');
const queuePath = path.join(phase7Dir, 'outputs/closure-queue.jsonl');
const auditPath = path.join(phase7Dir, 'outputs/coverage-gap-audit.json');
const sharedStatePath = path.join(phase7Dir, 'phase-7-state.json');
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

const fail = message => { throw new Error(`W5 smoke FAIL: ${message}`); };
const jsonl = file => fs.readFileSync(file, 'utf8').split('\n').filter(line => line.trim()).map((line, index) => {
  try { return JSON.parse(line); } catch (error) { fail(`${path.basename(file)} line ${index + 1}: ${error.message}`); }
});
const sha256 = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const exact = (a, b, label) => { if (JSON.stringify(a) !== JSON.stringify(b)) fail(`${label} mismatch`); };
const repositoryUrl = row => row.repository.canonical_repo_url ?? row.repository.repo_url;
const pairKey = row => `${row.industry_id}|${repositoryUrl(row)}`;
const rowKey = row => `${pairKey(row)}|${row.dimension.id}`;

function assertBoundary(boundary, label) {
  if (boundary.research_only !== true) fail(`${label}: research_only`);
  for (const key of ['client_data', 'private_data', 'vendor_login', 'credentials', 'browser_side_effects', 'repository_clone', 'source_copy', 'source_execution', 'build', 'deployment', 'benchmark', 'scan', 'external_write', 'admission']) {
    if (boundary[key] !== false) fail(`${label}: ${key}`);
  }
  if (boundary.implementation_authorized !== false || boundary.execution_status !== 'UNEXECUTED' || boundary.admission_status !== 'NOT_ADMITTED' || boundary.authenticated_behavior !== 'U' || boundary.parent_goal_status !== 'active') fail(`${label}: boundary status`);
}

const expectedFiles = ['dimension-depth-report.md', 'dimension-evidence-ledger.jsonl', 'lane-state.json', 'smoke-dimension-evidence-wave-5.mjs', 'source-receipts.jsonl'].sort();
if (!fs.existsSync(here)) fail('Wave 5 directory missing');
exact(fs.readdirSync(here).sort(), expectedFiles, 'Wave 5 output boundary');

const queue = jsonl(queuePath);
const queueById = new Map(queue.map(row => [row.queue_id, row]));
const wave1 = jsonl(path.join(outputsDir, 'dimension-evidence-ledger.jsonl'));
const wave2 = jsonl(path.join(wave2Dir, 'dimension-evidence-ledger.jsonl'));
const wave3 = jsonl(path.join(wave3Dir, 'dimension-evidence-ledger.jsonl'));
const wave4 = jsonl(path.join(wave4Dir, 'dimension-evidence-ledger.jsonl'));
if (!fs.existsSync(corpusSelectionPath)) fail('corpus-integrity W5 selection ledger missing');
const corpusSelection = jsonl(corpusSelectionPath);
const wave1Ids = new Set(wave1.map(row => row.queue_id));
const wave2Ids = new Set(wave2.map(row => row.queue_id));
const wave3Ids = new Set(wave3.map(row => row.queue_id));
const wave4Ids = new Set(wave4.map(row => row.queue_id));
const excludedIds = new Set([...wave1Ids, ...wave2Ids, ...wave3Ids, ...wave4Ids]);
if (wave1Ids.size !== 10 || wave2Ids.size !== 170 || wave3Ids.size !== 170 || wave4Ids.size !== 170 || excludedIds.size !== 520) fail('prior exclusion counts');

const industries = [...new Set(queue.filter(row => row.status === 'partial').map(row => row.industry_id))].sort();
const selected = [];
for (const industryId of industries) {
  const candidates = queue.filter(row => row.status === 'partial' && row.industry_id === industryId && !excludedIds.has(row.queue_id)).sort((a, b) => b.dimension_count - a.dimension_count || a.queue_id.localeCompare(b.queue_id));
  selected.push(...candidates.slice(0, 10));
}
if (industries.length !== 17 || selected.length !== 170 || new Set(selected.map(pairKey)).size !== 170) fail('selection is not 170 distinct pairs');
if (selected.some(row => excludedIds.has(row.queue_id))) fail('prior queue ID selected');
if (industries.some(industry => selected.filter(row => row.industry_id === industry).length !== 10)) fail('selection is not 10 pairs per industry');
const normalizedQueueKeys = new Set(selected.map(row => `${row.industry_id}|${row.repository.repo_url.toLowerCase()}`));
const normalizedCorpusKeys = new Set(corpusSelection.map(row => `${row.industry?.id}|${String(row.repository?.canonical_url ?? row.repository?.source_repo_url).toLowerCase()}`));
const selectedQueueIds = new Set(selected.map(row => row.queue_id));
const corpusQueueIds = new Set(corpusSelection.map(row => row.closure_input?.queue_id));
if (corpusSelection.length !== 170 || normalizedCorpusKeys.size !== 170 || normalizedQueueKeys.size !== 170) fail('corpus selection counts/identity uniqueness');
if ([...normalizedQueueKeys].some(key => !normalizedCorpusKeys.has(key)) || [...normalizedCorpusKeys].some(key => !normalizedQueueKeys.has(key))) fail('corpus selection identity parity');
if ([...selectedQueueIds].some(id => !corpusQueueIds.has(id)) || [...corpusQueueIds].some(id => !selectedQueueIds.has(id))) fail('corpus selection queue ID parity');

const ledger = jsonl(ledgerPath);
const receipts = jsonl(receiptsPath);
const report = fs.readFileSync(reportPath, 'utf8');
const state = JSON.parse(fs.readFileSync(statePath, 'utf8'));
if (ledger.length !== 1700 || receipts.length !== 1700) fail(`row counts ${ledger.length}/${receipts.length}`);
if (new Set(ledger.map(rowKey)).size !== 1700 || new Set(receipts.map(row => row.pair_dimension_key)).size !== 1700) fail('pair×dimension uniqueness');
if (new Set(ledger.map(pairKey)).size !== 170) fail('ledger pair count');
const receiptsById = new Map(receipts.map(row => [row.receipt_id, row]));
const pairCounts = new Map();
const dimensionCounts = new Map(dimensions.map(([id]) => [id, 0]));
for (const row of ledger) {
  const source = queueById.get(row.queue_id);
  if (!source) fail(`${row.record_id}: unknown queue ID`);
  if (!selected.some(selectedRow => selectedRow.queue_id === row.queue_id)) fail(`${row.record_id}: outside selection`);
  if (row.repository.owner !== source.repository.owner || row.repository.name !== source.repository.name || row.repository.canonical_repo_url !== source.repository.repo_url) fail(`${row.record_id}: repository identity`);
  if (!dimensionIds.has(row.dimension.id) || !row.dimension.label) fail(`${row.record_id}: dimension`);
  if (row.pair_state_before.status !== 'partial' || row.pair_state_before.dimension_count !== source.dimension_count) fail(`${row.record_id}: pair state`);
  exact(row.pair_state_before.dimensions_present, source.dimensions_present, `${row.record_id}: present dimensions`);
  exact(row.pair_state_before.dimensions_missing, source.dimensions_missing, `${row.record_id}: missing dimensions`);
  const sourceDimension = (source.dimension_records || []).find(record => record.dimension_id === row.dimension.id);
  const expectedSources = !source.dimensions_missing.includes(row.dimension.id) && sourceDimension?.evidence?.length ? sourceDimension.evidence : source.source_urls;
  exact(row.source_urls, expectedSources, `${row.record_id}: source URLs`);
  if (!row.source_urls.every(url => /^https:\/\/(api\.)?github\.com\//.test(url))) fail(`${row.record_id}: source host`);
  if (row.observed_at !== '2026-08-27' || !row.evidence_class || !row.observation || !row.limitation || !row.falsifier || !row.next_read_only_gate) fail(`${row.record_id}: evidence contract`);
  if (row.source_access_fresh_public_evidence !== false || row.inherited_queue_context !== true) fail(`${row.record_id}: inherited/fresh labels`);
  if (!Array.isArray(row.direct_claims) || !Array.isArray(row.inferred_claims)) fail(`${row.record_id}: claim arrays`);
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
  const key = pairKey(row);
  pairCounts.set(key, (pairCounts.get(key) || 0) + 1);
  dimensionCounts.set(row.dimension.id, dimensionCounts.get(row.dimension.id) + 1);
}
if ([...pairCounts.values()].some(count => count !== 10)) fail('not exactly 10 dimensions per pair');
if ([...dimensionCounts.values()].some(count => count !== 170)) fail('not exactly 170 rows per dimension');

if (state.wave_id !== 'P7-DIMENSION-EVIDENCE-W5' || state.selected_pairs !== 170 || state.ledger_rows !== 1700 || state.source_receipts !== 1700 || state.excluded_prior_queue_ids !== 520) fail('lane state counts/wave');
if (state.corpus_selection_parity?.status !== 'PASS' || state.corpus_selection_parity.rows !== 170 || state.corpus_selection_parity.queue_id_overlap !== 170) fail('corpus parity state');
if (state.corpus_selection_parity.sha256 !== sha256(corpusSelectionPath)) fail('corpus selection hash changed');
if (state.status !== 'completed' || state.smoke_status !== 'pass' || !['pending', 'sent_and_verified'].includes(state.callback_status) || state.master_counters_unchanged !== true) fail('lane state completion/counter boundary');
if (process.argv.includes('--require-callback') && state.callback_status !== 'sent_and_verified') fail('callback is not sent_and_verified');
if (state.research_only !== true || state.execution_status !== 'UNEXECUTED' || state.admission_status !== 'NOT_ADMITTED' || state.implementation_authorized !== false || state.authenticated_behavior !== 'U' || state.parent_goal_status !== 'active' || state.overall_completion_claim !== false) fail('lane state boundary');
for (const [file, expectedHash] of Object.entries({...state.preserved_wave1_hashes, ...state.preserved_wave2_hashes, ...state.preserved_wave3_hashes, ...state.preserved_wave4_hashes})) {
  if (!fs.existsSync(file) || sha256(file) !== expectedHash) fail(`preserved wave hash changed: ${file}`);
}
for (const [key, file] of [['closure_queue', queuePath], ['coverage_audit', auditPath], ['shared_phase_state', sharedStatePath]]) {
  if (state.preserved_input_hashes?.[key] && sha256(file) !== state.preserved_input_hashes[key]) fail(`preserved input hash changed: ${key}`);
}
for (const marker of ['Wave 5', 'next 10 remaining', '1,700', '170 distinct', 'inherited', 'not treated as fresh proof', 'No overall completion claim', 'UNEXECUTED', 'NOT_ADMITTED', 'parent_goal_status=active']) {
  if (!report.includes(marker)) fail(`report marker missing: ${marker}`);
}

console.log(JSON.stringify({status:'PASS',wave:'P7-DIMENSION-EVIDENCE-W5',selected_pairs:selected.length,industries:industries.length,dimensions:dimensions.length,ledger_rows:ledger.length,source_receipts:receipts.length,exact_pair_dimension_keys:new Set(ledger.map(rowKey)).size,per_dimension:Object.fromEntries(dimensionCounts),excluded_prior_queue_ids:excludedIds.size,inherited_context_labeled:true,boundaries:'research_only / UNEXECUTED / NOT_ADMITTED / parent active',output_boundary:expectedFiles},null,2));
