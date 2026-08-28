#!/usr/bin/env node

import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..', '..');
const outDir = resolve(root, 'knowledge', 'capability-shelf');
const readJsonl = async path => (await readFile(path, 'utf8')).split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));

const [universeSeeds, deepBench, nominations] = await Promise.all([
  readJsonl(resolve(root, 'research', 'base-portfolio-2026-08-27', 'base-universe-seeds.jsonl')),
  readJsonl(resolve(root, 'research', 'base-portfolio-2026-08-27', 'base-repo-shortlist.jsonl')),
  readJsonl(resolve(root, 'research', 'capability-source-registry', 'operator-nominations.jsonl'))
]);

const clientPrecedents = [
  {
    repo: 'chatwoot/chatwoot', client: 'bykonz', verdict: 'runtime_precedent_with_expected_donor_warnings', reuse_shape_observed: 'same_origin_reverse_proxy_full_page_route',
    evidence_status: 'authenticated_runtime_and_handoff_pass',
    facts: ['One W1 login reached native Chatwoot Inbox', 'Exact-origin SSO exchange passed; wrong origin and replay were denied', 'Restart persistence passed', 'Required three bounded donor changes for CORS, exchange compatibility and profiler behavior'],
    evidence_paths: ['../../../../../bykonz-archive-2026-08-23/bykonz-local-operator-bundle/verification/chatwoot-w1-acceptance/AMENDED-RECEIPT.json']
  },
  {
    repo: 'toeverything/AFFiNE', client: 'bykonz', verdict: 'runtime_precedent_with_native_runtime_note', reuse_shape_observed: 'authenticated_native_iframe_with_companion_listener',
    evidence_status: 'authenticated_runtime_crud_and_reload_pass',
    facts: ['Native AFFiNE workspace rendered inside the admin host', 'Authenticated host-session handoff passed', 'Document creation and reload persistence passed', 'A companion listener and donor runtime remained separate owners'],
    evidence_paths: ['../../../fahmy-2026-08/docs/client-platform/implementation-manager/evidence/affine-existing-final/receipt.json']
  },
  {
    repo: 'makeplane/plane', client: 'bykonz', verdict: 'runtime_precedent', reuse_shape_observed: 'same_origin_proxy_to_intact_web_and_api',
    evidence_status: 'authenticated_runtime_crud_restart_and_browser_pass',
    facts: ['One W1 login reached native Plane Projects', 'Create, move, restart persistence and delete passed', 'Node 22 compatibility required a minimal SPA server repair', 'Donor bundle remained unchanged'],
    evidence_paths: ['../../../../../bykonz-archive-2026-08-23/bykonz-local-operator-bundle/verification/plane-runtime-receipt.json']
  },
  {
    repo: 'umami-software/umami', client: 'bykonz', verdict: 'runtime_precedent', reuse_shape_observed: 'intact_service_with_isolated_database_and_host_handoff',
    evidence_status: 'build_auth_runtime_restart_and_browser_pass',
    facts: ['Isolated PostgreSQL runtime passed', 'Authenticated desktop and mobile dashboard passed', 'Restart retained the authenticated dashboard', 'Twelve theme tests and handoff replay tests passed'],
    evidence_paths: ['../../../fahmy-2026-08/docs/client-platform/implementation-manager/evidence/umami-final/RECEIPT.json']
  },
  {
    repo: 'knadh/listmonk', client: 'bykonz', verdict: 'local_runtime_precedent_with_production_gates', reuse_shape_observed: 'native_binary_intact_service',
    evidence_status: 'runtime_api_and_restart_persistence_pass',
    facts: ['Native ARM64 binary and isolated PostgreSQL ran without Docker', 'Lists and draft campaign API passed', 'Restart persistence passed', 'Production gates remain for sender, consent, bounce handling, tenant isolation, backup and proxy policy'],
    evidence_paths: ['../../../fahmy-2026-08/services/bykonz-listmonk/RECEIPT.json']
  },
  {
    repo: 'HiEventsDev/hi.events', client: 'bykonz', verdict: 'local_runtime_precedent', reuse_shape_observed: 'framed_intact_service',
    evidence_status: 'local_runtime_route_and_focused_tests_pass',
    facts: ['Pinned native Laravel runtime returned HTTP 200', 'Host ticketing route returned HTTP 200', 'Seven focused tests passed', 'Stripe remained disabled and no production deployment was claimed'],
    evidence_paths: ['../../../fahmy-2026-08/services/bykonz-ticketing/RECEIPT.json']
  },
  {
    repo: 'teableio/teable', client: 'bykonz', verdict: 'reusable_candidate_with_partial_bykonz_integration_proof', reuse_shape_observed: 'intact_native_service_candidate',
    evidence_status: 'build_health_database_and_isolation_pass_authenticated_ui_proof_incomplete',
    facts: ['Pinned source and isolated build passed', 'Database CRUD, reconnect persistence and two-client isolation passed', 'Authenticated native desktop/mobile CRUD and attachment proof were not completed in that Bykonz run', 'The incomplete client proof is not a verdict against source reusability'],
    evidence_paths: ['../../../fahmy-2026-08/docs/client-platform/implementation-manager/evidence/teable-data-final/teable-data-final-receipt.json']
  }
];

const map = new Map();
const ensure = repo => {
  const key = repo.toLowerCase();
  if (!map.has(key)) map.set(key, {
    source_id: null, repo, url: `https://github.com/${repo}`, labels: [], family_ids: [], family_names: [], evidence_classes: [],
    operator_signals: [], client_precedents: [], evidence_paths: [], observed_facts: [], current_verdict: 'discovery_candidate',
    foundry_stage: 'not_joined', qualification_status: 'NOT_QUALIFIED', execution_status: 'UNEXECUTED', admission_status: 'NOT_ADMITTED'
  });
  return map.get(key);
};

for (const seed of universeSeeds) {
  const row = ensure(seed.repo);
  row.family_ids.push(seed.family_id);
  row.family_names.push(seed.family_name);
  row.evidence_classes.push('expanded_universe_seed');
}
for (const deep of deepBench) {
  const row = ensure(deep.repo);
  row.evidence_classes.push('p03_live_metadata_classified');
  row.family_ids.push(...(deep.base_families || []));
  row.labels.push(deep.portfolio_role, deep.supply_tier);
  row.observed_facts.push(deep.claim);
  row.current_verdict = 'deeper_evidence_candidate';
}
for (const nomination of nominations) {
  const row = ensure(nomination.repo);
  row.labels.push(nomination.label);
  row.evidence_classes.push('historical_operator_nomination');
  row.operator_signals.push({ nomination_id: nomination.nomination_id, origin: nomination.origin, observed_at: nomination.observed_at, note: nomination.note });
  row.foundry_stage = nomination.origin.includes('god_source') ? 'evidence_qualified_god_source_not_outcome_proven' : nomination.origin.includes('platform_primitive') ? 'platform_primitive_candidate' : nomination.origin.includes('specialist') ? 'specialist_candidate' : 'recovered_operator_nomination';
  row.current_verdict = row.current_verdict === 'deeper_evidence_candidate' ? 'priority_deeper_evidence_candidate' : 'priority_candidate';
}
for (const precedent of clientPrecedents) {
  const row = ensure(precedent.repo);
  row.evidence_classes.push('client_runtime_precedent');
  row.client_precedents.push({ client: precedent.client, verdict: precedent.verdict, reuse_shape_observed: precedent.reuse_shape_observed, evidence_status: precedent.evidence_status });
  row.evidence_paths.push(...precedent.evidence_paths);
  row.observed_facts.push(...precedent.facts);
  row.current_verdict = precedent.verdict;
  row.execution_status = precedent.verdict.includes('partial_') ? 'PARTIAL_LOCAL_EXECUTION' : 'LOCAL_PRECEDENT_EXECUTED';
}

const rank = row => (row.client_precedents.length ? 100 : 0) + (row.operator_signals.length ? 30 : 0) + (row.evidence_classes.includes('p03_live_metadata_classified') ? 20 : 0) + row.family_ids.length;
const records = [...map.values()].map((row, index) => ({
  ...row,
  labels: [...new Set(row.labels.filter(Boolean))], family_ids: [...new Set(row.family_ids)], family_names: [...new Set(row.family_names)],
  evidence_classes: [...new Set(row.evidence_classes)], evidence_paths: [...new Set(row.evidence_paths)], observed_facts: [...new Set(row.observed_facts.filter(Boolean))],
  priority_score: rank(row)
})).sort((a,b) => b.priority_score - a.priority_score || a.repo.localeCompare(b.repo)).map((row,index) => ({ ...row, source_id: `SRC-${String(index + 1).padStart(4,'0')}` }));

const counts = {
  total_sources: records.length,
  expanded_universe_seeds: records.filter(r => r.evidence_classes.includes('expanded_universe_seed')).length,
  p03_deeper_evidence: records.filter(r => r.evidence_classes.includes('p03_live_metadata_classified')).length,
  historical_operator_nominations: records.filter(r => r.operator_signals.length).length,
  client_runtime_precedents: records.filter(r => r.client_precedents.length).length,
  bykonz_pass_or_hold: records.filter(r => r.client_precedents.length).length,
  admitted_sources: records.filter(r => r.admission_status === 'ADMITTED').length
};

const readme = `# Actionist permanent capability source registry

Generated: 2026-08-28  
Status: current identity/evidence projection; research and qualification remain separate

## Purpose

This is the permanent place to answer: **what source systems do we know about, why do we care, what evidence exists, and what should happen next?** It joins identities without flattening evidence quality.

## Current counts

- ${counts.total_sources} unique source identities
- ${counts.expanded_universe_seeds} expanded-universe seeds
- ${counts.p03_deeper_evidence} P03 deeper-evidence candidates
- ${counts.historical_operator_nominations} recovered operator nominations / Foundry value-matrix candidates
- ${counts.client_runtime_precedents} Bykonz client runtime precedents
- ${counts.admitted_sources} admitted Actionist sources

## Evidence ladder

1. **Discovery seed** — identity and family hypothesis only.
2. **P03 classified** — live metadata/product-versus-framework evidence; not source or runtime proof.
3. **Foundry nominated/value matrix** — high-value candidate with a stated adoption route; not automatically outcome-proven.
4. **Client runtime precedent** — a bounded integration was actually exercised and has a receipt.
5. **Actionist-qualified module** — seven linked module records and qualification evidence exist.
6. **Admitted source** — approved for a declared host scope and release path.

No row skips levels by averaging evidence. A repository may be runtime-proven for one reuse shape and still unsuitable for another.

An incomplete historical client receipt describes only that experiment. It must not be projected into a global \"blocked repository\" verdict. Reusability, integration proof, qualification and admission are separate axes.

## Source programs joined

- **Foundry / Great Library:** 1,358,200 observed repository cards; public v0.5.1 coverage of 628 projects, 89 source-read/reusable and 10 confirmed. These are discovery and source-intelligence denominators, not 1.3M qualified modules.
- **P03:** 200 OSS records and a prior 100-repository deeper-evidence bench. Product-versus-framework-versus-primitive corrections are retained.
- **Expanded base universe:** 68 families and 144 unique repository seeds.
- **Bykonz:** direct local receipts for Chatwoot, AFFiNE, Plane, Umami, Listmonk, Hi.Events and Teable.
- **AutoSaaS:** process precedent only for the Action Model run; its own code-harvest report states external imported reuse was zero.

## Operator intake

New operator-known sources go into:

\`research/capability-source-registry/operator-nominations.jsonl\`

Required minimum fields: \`nomination_id\`, \`repo\`, \`label\`, \`origin\`, \`observed_at\`, and \`note\`. Operator nomination raises review priority; it never grants qualification or admission.

## Next process

1. Select an operator-approved tranche from this registry.
2. Read source and assign product/framework/primitive/pattern with content evidence.
3. Choose the reuse shape for a named use case.
4. Generate the seven linked module records.
5. Run normalization-surgery prediction and the deterministic composer.
6. Attach runtime/qualification receipts.
7. Promote only for the exact host scope proven.

## Files

- \`source-registry.jsonl\` — canonical joined projection.
- \`registry-summary.json\` — counts, schema and boundaries.
- \`FOUNDRY-PROCESS.md\` — canonical source-to-module process and automation boundary.
- \`foundry-state-machine.json\` — machine-readable stages, states and verdicts.
- Historical receipts remain at their original paths and are linked; they are not copied or rewritten here.
`;

const summary = {
  schema_version: 'actionist.capability-source-registry.v1', generated_at: '2026-08-28', counts,
  source_programs: ['expanded_base_universe','p03_capability_shelf','foundry_great_library','bykonz_client_precedents','operator_nominations'],
  status: 'current_projection_not_qualification_or_admission',
  boundary: { research_only: true, implementation_authorized: false, admitted_sources: counts.admitted_sources }
};

await mkdir(outDir, { recursive: true });
await writeFile(resolve(outDir, 'source-registry.jsonl'), `${records.map(row => JSON.stringify(row)).join('\n')}\n`);
await writeFile(resolve(outDir, 'registry-summary.json'), `${JSON.stringify(summary, null, 2)}\n`);
await writeFile(resolve(outDir, 'README.md'), readme);

const failures = [];
if (new Set(records.map(r => r.repo.toLowerCase())).size !== records.length) failures.push('duplicate_repo');
if (records.some(r => !/^SRC-\d{4}$/.test(r.source_id))) failures.push('source_id');
if (records.some(r => r.admission_status !== 'NOT_ADMITTED')) failures.push('admission_boundary');
if (records.filter(r => r.client_precedents.length).length !== clientPrecedents.length) failures.push('client_precedent_count');
for (const row of records) {
  for (const path of row.evidence_paths) {
    try { await access(resolve(outDir, path)); } catch { failures.push(`missing_evidence_path:${row.repo}:${path}`); }
  }
}
if (failures.length) throw new Error(`CAPABILITY_SOURCE_REGISTRY_FAIL ${failures.join(',')}`);
process.stdout.write(`CAPABILITY_SOURCE_REGISTRY_PASS sources=${counts.total_sources} universe=${counts.expanded_universe_seeds} p03=${counts.p03_deeper_evidence} nominated=${counts.historical_operator_nominations} client_precedents=${counts.client_runtime_precedents} admitted=${counts.admitted_sources}\n`);
