#!/usr/bin/env node

import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { basename, resolve } from 'node:path';
import vm from 'node:vm';

const projectRoot = resolve(import.meta.dirname, '..', '..');
const siteRoot = resolve(projectRoot, 'site', 'system-map');
const indexPath = resolve(siteRoot, 'index.html');
const html = await readFile(indexPath, 'utf8');
const start = html.indexOf('const parts = [');
const end = html.indexOf('\n    const groupColors', start);
if (start < 0 || end < 0) throw new Error('parts literal not found in system-map index');
const literal = html.slice(start + 'const parts = '.length, end).trim().replace(/;$/, '');
const parts = vm.runInNewContext(`(${literal})`);

const slugs = Object.fromEntries(parts.map(part => [part.id, part.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')]));

const currentRuns = {
  P01: 'research/workstreams/p01-client-intelligence/runs/2026-08-27-sprint-1-fable',
  P02: 'research/workstreams/p02-outcome-product-spec/runs/2026-08-27-sprint-1-fable',
  P03: 'research/workstreams/p03-curated-capability-shelf/runs/2026-08-27-sprint-1-fable',
  P05: 'research/workstreams/p05-living-component-layer/runs/2026-08-27-sprint-1-fable',
  P06: 'research/workstreams/p06-preference-science/runs/2026-08-27-sprint-1-fable',
  P08: 'research/workstreams/p08-archetype-shell-layout/runs/2026-08-27-sprint-1-fable',
  P09: 'research/workstreams/p09-data-plane/runs/2026-08-27-sprint-1-fable',
  P10: 'research/workstreams/p10-identity-settings-navigation/runs/2026-08-27-sprint-1-fable',
  P11: 'research/workstreams/p11-connectors-integration-runtime/runs/2026-08-27-sprint-1-fable',
  P13: 'research/workstreams/p13-preview-editor/runs/2026-08-27-sprint-1-fable',
  P14: 'research/workstreams/p14-runtime-sandbox-release/runs/2026-08-27-sprint-1-fable',
  P15: 'research/workstreams/p15-learning-feedback/runs/2026-08-27-sprint-1-fable'
};

const latestFindings = {
  P01: ['Discovery state should be deterministic and server-owned; the model owns phrasing, not truth.', 'Score access persistence and content sensitivity separately.', 'Use explicit qualify, prototype, disqualify and escalate terminal states.'],
  P02: ['Elicit into a falsifiable ProductSpec with EARS-like slots and generated Gherkin.', 'Track UNCOVERED and NEEDS_CLARIFICATION explicitly with provenance.', 'Block progression on a client Accept/Revise gate; the five-workflow proving harness remains unrun.'],
  P03: ['The 200-repo shelf resolves to 134 products, 20 frameworks and 46 primitives.', 'Product-basis supply is 13 commodity, 6 scarce, 3 product-layer-missing and 2 underdetermined.', 'Case/workflow, e-sign and field operations support “borrow the engine, build the product surface.”'],
  P04: ['A repository is a source container, not the reusable unit.', 'Choose service, module, transplant, package, adapter, pattern, template or custom-delta shape before extraction.', 'Identity, dependency closure and human shape choice precede normalization surgery.'],
  P05: ['The normalized local union is about 8,483 component identities; the source-bearing legacy store has 3,507 real components.', 'Replace inconsistent tags with canonical entities, aliases and measured visual clusters.', 'Own the archetype shell and core app primitives; harvest decorative surfaces. The layer is a snapshot, not yet living.'],
  P06: ['P06 established the adaptive learning mechanism, not the complete visual grammar.', 'Use controlled realistic screens, an outside option, per-dimension confidence and adaptive least-resolved-dimension targeting.', 'Learn continuous DesignDNA internally, but ship a complete pre-gated token pack; the exact axes, levels and 8–12 round estimate still require focused experiments.'],
  P07: ['Map donor variables into an Actionist semantic token contract rather than sharing raw CSS variables.', 'Re-render previews under the selected pack so the client only chooses reproducible designs.', 'Visual compatibility and scoped token bridges need tests across genuinely different donors.'],
  P08: ['Reject a universal five-area shell; Actionist owns a host frame while capability navigation varies by reuse shape.', 'Shopify and Atlassian prove the navigation boundary is a design choice, while the host visual contract is stable.', 'Five starting spines—case/workflow, field operations, learning/content, scheduling and CRM—cover most target industries.'],
  P09: ['Postgres is the default for Actionist-owned transactional data, not a universal donor invariant.', 'Enforce one authoritative owner per table and migration, with tenant identity from the first migration.', 'Use donor stores plus events/read models for intact services and real foreign keys for absorbed code.'],
  P10: ['The host owns authority: identity, tenant, URL space, navigation registry and settings provenance.', 'PackagingProfile selects federation versus absorption; there is no single integration pattern.', 'Identity has strong precedent, navigation partial precedent, and settings absorption is the largest unknown.'],
  P11: ['Borrow OAuth machinery, catalogues, durable execution and authorization engines.', 'Own tenant-keyed connections, outbound token brokerage, idempotency, egress refusal and the action ledger.', 'Callers pass identity and intended action, never raw provider secrets.'],
  P12: ['Compose plan-then-fill: retrieve, eliminate incompatibilities deterministically, then let models choose among feasible options.', 'Deterministic systems own identity, authority, compatibility, dependency and evidence gates.', 'The composer must surface UNDERDETERMINED rather than invent compatibility.'],
  P13: ['Persist typed edit intent instead of only code or DOM mutations.', 'Use denial-by-construction and record accepted, rejected and refused operations.', 'Puck shows field-level write authority can live in persisted data and survive upgrades.'],
  P14: ['Rollback is multi-object across artifact, configuration, data/schema and routing horizons.', 'Every capability needs stable identity, version, trace context, owner and machine-readable health.', 'ComputeSDK cannot be the load-bearing abstraction when memory-preserving pause is required.'],
  P15: ['Consume edit, qualification, runtime, rollback and outcome receipts instead of inventing a parallel telemetry system.', 'Gate promotion on the weakest critical evidence family; never average away a fatal unknown.', 'Update capability ranking, reuse-shape choice, adaptation cost and retirement state from production evidence.']
};

const resources = {
  P01: [
    ['Industry atom specifications', 'research/actionmodel-builder-research-2026-08-26/phase-2/outputs/industry-atom-specifications.md'],
    ['Actionist solutions sweep specification', 'research/actionist-solutions-sweep-spec-2026-08-26.md'],
    ['Public signals Wave 11', 'research/actionmodel-builder-research-2026-08-26/expansion/wave-11/outputs/public-signals-wave-11.md']
  ],
  P02: [
    ['First-principles framework', 'research/actionmodel-builder-research-2026-08-26/outputs/first-principles-framework.md'],
    ['Synthetic pilot specification', 'research/actionmodel-builder-research-2026-08-26/phase-3/outputs/synthetic-pilot-specification.md'],
    ['AutoSaaS method', '/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/AutoSaaS/framework/autosaas-method.md']
  ],
  P03: [
    ['GitHub candidate priority', 'research/actionmodel-builder-research-2026-08-26/phase-3/outputs/github-candidate-priority.md'],
    ['GitHub expansion report', 'research/actionmodel-builder-research-2026-08-26/expansion/outputs/github-expansion-report.md'],
    ['Niche → atom → block join', 'research/actionmodel-builder-research-2026-08-26/expansion/outputs/niche-atom-block-join.md']
  ],
  P04: [
    ['Repo-to-block pipeline', 'research/actionmodel-builder-research-2026-08-26/phase-8/lanes/04-repo-to-block-mechanics/outputs/repo-to-block-pipeline.md'],
    ['Universal Block Framework', 'research/actionmodel-builder-research-2026-08-26/phase-8/lanes/01-universal-block-framework/outputs/universal-block-framework.md'],
    ['Block Contract v1', 'research/actionmodel-builder-research-2026-08-26/phase-2/outputs/block-contract-v1.md']
  ],
  P05: [
    ['Local corpus join', 'research/actionmodel-builder-research-2026-08-26/phase-8/lanes/02-local-corpus-join/outputs/local-corpus-join-report.md'],
    ['21st corpus audit', 'research/21st-corpus-audit-2026-08-27.md'],
    ['UI component-library requirements', '/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/AutoSaaS/process/10-ui-component-library-requirements.md']
  ],
  P06: [
    ['Design grammar and preference protocol', 'knowledge/06-DESIGN-GRAMMAR-AND-PREFERENCE-PROTOCOL.md'],
    ['UI pick-to-spec research', 'research/ui-pick-to-spec-2026-08-27.md'],
    ['Token-pack science', 'research/token-pack-science-2026-08-27.md'],
    ['Taste picker demo', 'https://actionist-taste.pages.dev/']
  ],
  P07: [
    ['Universal Block Framework visual contract', 'research/actionmodel-builder-research-2026-08-26/phase-8/lanes/01-universal-block-framework/outputs/universal-block-framework.md'],
    ['Token-pack science', 'research/token-pack-science-2026-08-27.md'],
    ['SISOCRM Teable absorption brief', '/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/verticals/business-broker/TEABLE-ABSORPTION-BRIEF.md']
  ],
  P08: [
    ['B2B template shelf', 'research/actionmodel-builder-research-2026-08-26/phase-8/lanes/03-b2b-template-shelf/outputs/b2b-template-shelf-report.md'],
    ['AutoSaaS source and shell strategy', '/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/AutoSaaS/framework/source-graph-template-strategy.md'],
    ['Industry atom specifications', 'research/actionmodel-builder-research-2026-08-26/phase-2/outputs/industry-atom-specifications.md']
  ],
  P09: [
    ['SISOCRM ownership and data-layer decisions', '/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/verticals/business-broker/OWNERSHIP-AND-DATA-LAYER-DECISIONS.md'],
    ['Reusable-block framework report', 'research/packs/source-files/reusable-block-framework-report.md'],
    ['Block Contract data model', 'research/actionmodel-builder-research-2026-08-26/phase-2/outputs/block-contract-v1.md']
  ],
  P10: [
    ['Teable absorption brief', '/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/verticals/business-broker/TEABLE-ABSORPTION-BRIEF.md'],
    ['Builder architecture', 'architecture/feature-matrix/ARCHITECTURE.md'],
    ['Lovable teardown', 'research/lovable-teardown-2026-08-26.md']
  ],
  P11: [
    ['Connector research summary', 'research/actionmodel-builder-research-2026-08-26/phase-8/external-opus-inputs/connectors/connector-research-summary.md'],
    ['OpenConnector spike', 'research/openconnector-spike-2026-08-27.md'],
    ['Connectors report', 'research/connectors-licensing-2026-08-27.md']
  ],
  P12: [
    ['Composition agent architecture', 'research/actionmodel-builder-research-2026-08-26/phase-8/lanes/05-composition-agent-evals/outputs/composition-agent-architecture.md'],
    ['Composition eval suite', 'research/actionmodel-builder-research-2026-08-26/phase-8/lanes/05-composition-agent-evals/outputs/composition-eval-suite.json'],
    ['Synthetic pilot plan', 'research/actionmodel-builder-research-2026-08-26/phase-8/lanes/05-composition-agent-evals/outputs/synthetic-pilot-plan.md']
  ],
  P13: [
    ['Platform deep dives', 'research/actionmodel-builder-research-2026-08-26/phase-2/outputs/platform-deepdives.md'],
    ['Builder ecosystem report', 'research/packs/source-files/builder-ecosystem-report.md'],
    ['UI pack gallery UX', 'research/ui-pack-gallery-ux-2026-08-27.md']
  ],
  P14: [
    ['Evaluation and admission plan', 'research/actionmodel-builder-research-2026-08-26/phase-2/outputs/evaluation-and-admission-plan.md'],
    ['Pilot receipt runbook', 'research/actionmodel-builder-research-2026-08-26/phase-4/outputs/pilot-receipt-runbook.md'],
    ['Builder architecture', 'architecture/feature-matrix/ARCHITECTURE.md']
  ],
  P15: [
    ['AutoSaaS method', '/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/AutoSaaS/framework/autosaas-method.md'],
    ['Decision ledger', 'research/actionmodel-builder-research-2026-08-26/phase-3/outputs/decision-ledger.md'],
    ['Master synthesis', 'knowledge/00-MASTER-SYNTHESIS.md']
  ]
};

const protocol = [
  ['Prior evidence audit', 'Read the canonical spine, all domain-linked artifacts, the 17-industry catalogue and existing contradictions before searching again.'],
  ['Commercial 100 → 10', 'Define a denominator, map approximately 100 companies/products, and produce first-party dossiers for the strongest 10.'],
  ['GitHub 100 → 10', 'Search and dedupe approximately 100 relevant OSS projects, then deeply inspect the strongest 10 at the capability and architecture level.'],
  ['Local estate join', 'Inspect AutoSaaS, Great Library, SISOCRM, 21st stores and other domain-specific precedents already on the laptop.'],
  ['Innovation 100 → 10', 'Generate a wide divergent idea register, score it against the problem and retain the 10 strongest falsifiable innovations.'],
  ['First-principles synthesis', 'Decompose the irreducible problem, challenge inherited assumptions, reconcile contradictions and state the minimum sufficient design.'],
  ['Contracts and experiments', 'Return the proposed contract, dependency edges, unknowns, falsifiers, experiments, stop rules and decisions.'],
  ['Independent verification', 'A separate verifier checks counts, links, source claims, overlap, contradictions and unsupported conclusions before promotion.']
];

const sprints = [
  {
    id: 'S1', title: 'Independent evidence harvest', purpose: 'Research the domains that do not require a finished cross-system contract. Five persistent Opus owners work in parallel.', gate: 'Five verified evidence packets; no synthesis contracts promoted.',
    lanes: [
      { id: 'S1-L1', title: 'Client demand science', parts: ['P01','P02'], result: 'Client-intelligence and ProductSpec evidence packs joined to all 17 industries.', notes: ['Commercial discovery/product-spec survey', 'OSS discovery/spec agents', 'Industry priors and first-principles question policy'] },
      { id: 'S1-L2', title: 'Capability supply graph', parts: ['P03'], result: 'Top-100 candidate shelf with top-10 dossiers, overlap graph and industry joins.', notes: ['Repository capability decomposition', 'Composite-repo overlap matrix', 'User-provided SaaS/repository lists retained as a separate source lane'] },
      { id: 'S1-L3', title: 'Experience science', parts: ['P05','P06','P08'], result: 'Component taxonomy, preference-science report and shell/archetype option map.', notes: ['21st refresh/dedupe/gallery research', 'Choice modelling and stopping rules', 'ISSO, SISOCRM, Bykonz and competitor shell comparisons'] },
      { id: 'S1-L4', title: 'Host foundation', parts: ['P09','P10','P11'], result: 'Data, identity/settings/navigation and connector evidence packs.', notes: ['Workload-based data study', 'Host absorption and donor chrome removal', 'Tenant-safe connector architecture'] },
      { id: 'S1-L5', title: 'Editor, runtime and learning', parts: ['P13','P14','P15'], result: 'Private/OSS editor census, runtime profiles and production-learning model.', notes: ['Open Design and comparable editor census', 'Sandbox/release/rollback precedents', 'Evidence feedback and asset reranking'] }
    ]
  },
  {
    id: 'S2', title: 'Framework and contract synthesis', purpose: 'Use Sprint 1 evidence to design the three missing cross-domain systems and formalize the experience/runtime contracts.', gate: 'All 15 node contracts reconcile; solver dry-run returns no hidden dependency.',
    lanes: [
      { id: 'S2-L1', title: 'Repo-to-block framework', parts: ['P04'], result: 'Source-shape protocol, normalization surgery map and three worked conversion traces.', notes: ['Consumes P03, P09, P10 and P14', 'Service, transplant and package examples', 'Branding/onboarding/settings/token/update mechanics'] },
      { id: 'S2-L2', title: 'Design harmonization', parts: ['P07'], result: 'Token extraction/mapping contract and visual-coherence experiments.', notes: ['Consumes P05 and P06 evidence', 'Tests three visually different donors', 'Produces semantic token and scoped bridge contracts'] },
      { id: 'S2-L3', title: 'Shell and editing framework', parts: ['P08','P13'], result: 'Archetype/shell contract plus an upgrade-safe visual change model.', notes: ['Formalizes Sprint 1 option research', '20/80 host/app pane and alternative shells', 'Replace/add/remove/theme/text edit taxonomy'] },
      { id: 'S2-L4', title: 'Deterministic composer', parts: ['P12'], result: 'Compatibility schema, solver, UNDERDETERMINED protocol and synthetic fixtures.', notes: ['Consumes every Sprint 1 contract', 'Model receives feasible sets only', 'Measures glue budget and clarification needs'] },
      { id: 'S2-L5', title: 'Runtime and learning contracts', parts: ['P14','P15'], result: 'Runtime profile, qualification, release, rollback and feedback contracts.', notes: ['Joins package/module/service execution', 'Defines accepted-build and maintained-client metrics', 'Independent review of framework operability'] }
    ]
  },
  {
    id: 'S3', title: 'Convergence and pilot blueprint', purpose: 'Pressure-test the complete graph against one industry workflow and produce a build-ready, independently reviewed pilot packet.', gate: 'One chosen pilot, complete contracts, falsifiable evals and no unresolved critical edge.',
    lanes: [
      { id: 'S3-L1', title: 'Pilot demand and workflow', parts: ['P01','P02','P08'], result: 'Industry choice, client workflow, archetype and acceptance fixtures.', notes: ['Scores all 17 industries', 'Requires an accessible client path', 'Keeps one generic dashboard as control only'] },
      { id: 'S3-L2', title: 'Pilot supply pack', parts: ['P03','P04','P05','P07'], result: 'Exact service, block, components and visual bindings for the pilot.', notes: ['Pins reuse shapes', 'Records normalization surgery', 'No substitute or padding when supply is weak'] },
      { id: 'S3-L3', title: 'Pilot host pack', parts: ['P09','P10','P11','P14'], result: 'Data, identity, settings, connectors, runtime and rollback plan.', notes: ['One owner per state resource', 'Tenant-safe external actions', 'Preview and production profiles'] },
      { id: 'S3-L4', title: 'Pilot assembly and editor', parts: ['P12','P13'], result: 'Deterministic AssemblyPlan, bounded change model and complete eval sequence.', notes: ['No open-ended codegen assumption', 'Compares custom build, direct generation and assembly', 'Measures tokens, repairs and glue size'] },
      { id: 'S3-L5', title: 'Independent adversary', parts: ['P15'], result: 'Cross-source verification, contradiction ledger and proceed/redesign/stop verdict.', notes: ['Owns no design artifact', 'Attempts to falsify every promoted claim', 'Checks all 15 pages and source receipts'] }
    ]
  }
];

const convergence = {
  id: 'S1-GATE',
  title: 'Sprint 1 evidence convergence',
  owner: 'CENA coordinator',
  status: 'converged_with_holds_sprint_2_unlocked',
  purpose: 'Turn five independent lane returns into one verified architectural handoff. Research owners supply evidence; the coordinator reconciles it; an independent verifier attacks it; Shaan decides consequential trade-offs.',
  waits_for: ['S1-L1','S1-L2','S1-L3','S1-L4','S1-L5'],
  inputs: [
    { lane: 'S1-L1', parts: ['P01','P02'], contribution: 'Client evidence, industry priors, question policy and candidate ProductSpec.' },
    { lane: 'S1-L2', parts: ['P03'], contribution: 'Capability shelf, top-10 dossiers, overlap graph and industry joins.' },
    { lane: 'S1-L3', parts: ['P05','P06','P08'], contribution: 'Component taxonomy, preference experiments and shell/archetype options.' },
    { lane: 'S1-L4', parts: ['P09','P10','P11'], contribution: 'Data ownership, host identity/settings/navigation and connector constraints.' },
    { lane: 'S1-L5', parts: ['P13','P14','P15'], contribution: 'Editor operations, runtime/release profiles and learning evidence.' }
  ],
  part_packets: ['P01','P02','P03','P05','P06','P08','P09','P10','P11','P13','P14','P15'],
  artifacts: [
    { file: 'S1-CONVERGENCE.md', purpose: 'Readable synthesis of shared findings, contradictions, unknowns and architectural implications.' },
    { file: 's1-contract-handoff.json', purpose: 'Machine-readable candidate inputs, outputs, invariants and unresolved fields for every moving part.' },
    { file: 'cross-lane-dependency-matrix.json', purpose: 'Exact evidence and contract dependencies between Sprint 1 findings and Sprint 2 owners.' },
    { file: 's1-decision-gates.json', purpose: 'Resolved, provisional, contradictory, experiment-required, operator-required and deferred decisions.' }
  ],
  artifact_root: 'research/workstreams/2026-08-27-sprint-1/convergence/',
  verification: [
    'Coordinator verifies packet counts, source identities, hashes, evidence classes and links.',
    'Claims are deduplicated and normalized without rewriting historical receipts.',
    'Contradictions and missing evidence remain explicit; no majority-vote synthesis.',
    'A fresh-context Opus verifier attempts to falsify promoted claims but owns no product decision.',
    'Shaan reviews decisions that change product direction, scope or irreversible architecture.'
  ],
  decision_states: ['resolved_by_evidence','provisional','contradictory','requires_experiment','requires_shaan','deferred_to_pilot'],
  sprint_2_edges: [
    { lane: 'S2-L1', parts: ['P03','P09','P10','P14'], result: 'P04 repo-to-block framework' },
    { lane: 'S2-L2', parts: ['P05','P06'], result: 'P07 design harmonization contract' },
    { lane: 'S2-L3', parts: ['P05','P06','P08','P13'], result: 'Formal P08 shell and P13 bounded-editor contracts' },
    { lane: 'S2-L4', parts: ['P01','P02','P03','P05','P06','P08','P09','P10','P11','P13','P14','P15'], result: 'P12 deterministic composer and compatibility schema' },
    { lane: 'S2-L5', parts: ['P09','P10','P11','P14','P15'], result: 'Formal runtime, qualification, release, rollback and learning contracts' }
  ],
  promotion_gate: 'Sprint 1 has converged with explicit holds and all four handoff artifacts. Sprint 2 research is running; no implementation or Sprint 3 pilot is promoted until its five framework lanes reconcile.'
};

const commonReads = [
  'AGENTS.md and CURRENT_STATE.md',
  'knowledge/00-MASTER-SYNTHESIS.md',
  'knowledge/02-ASSUMPTION-LEDGER.md',
  'knowledge/03-EVIDENCE-MAP.md',
  '17-industry specifications and niche→atom→block join',
  'The dedicated page and linked resources for every owned part'
];

const outputContract = [
  'research-report.md — source-backed findings and synthesis',
  'source-register.jsonl — every commercial, OSS and local source',
  'top-companies.jsonl and top-repos.jsonl — explicit denominators and top-10 dossiers',
  'innovation-register.jsonl — wide ideas, scores and retained top 10',
  'first-principles.md — irreducible problem, assumptions, contradictions and design',
  'decision-ledger.json — decisions, confidence, falsifiers and dependencies',
  'lane-state.json — counts, hashes, blockers, verification and callback'
];

const e = value => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const bullets = items => `<ul>${items.map(item => `<li>${e(item)}</li>`).join('')}</ul>`;
const localOrLink = path => path.startsWith('http') ? `<a href="${e(path)}">Open public artifact ↗</a>` : `<code>${e(path)}</code>`;
const protocolHtml = protocol.map(([title, description]) => `<div class="protocol-step"><strong>${e(title)}</strong><span>${e(description)}</span></div>`).join('');

function pageFrame({ title, description, body, relative = '../..' }) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${e(description)}"><link rel="icon" href="${relative}/favicon.svg"><title>${e(title)} · Actionist System Map</title><link rel="stylesheet" href="${relative}/trader-theme.css"><link rel="stylesheet" href="${relative}/part-page.css"></head><body><header class="topbar"><div class="topbar-inner"><div class="brand"><span>Actionist</span> Knowledge Graph</div><div class="top-actions"><a class="button" href="${relative}/">System map</a><a class="button primary" href="${relative}/task-graph/">Task graph</a></div></div></header>${body}</body></html>`;
}

const readJsonl = async path => {
  const content = await readFile(path, 'utf8').catch(() => '');
  return content.split(/\r?\n/).filter(Boolean).map((line, index) => {
    try { return JSON.parse(line); }
    catch { return { id: `PARSE-ERROR-${index + 1}`, claim: line, evidence_class: 'invalid' }; }
  });
};

const displayValue = value => {
  if (value === undefined || value === null || value === '') return '—';
  if (Array.isArray(value)) return value.map(displayValue).join(', ');
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
};

const firstValue = (row, fields) => {
  for (const field of fields) if (row[field] !== undefined && row[field] !== null && row[field] !== '') return displayValue(row[field]);
  return '—';
};

const sourceLink = row => {
  const source = firstValue(row, ['url', 'source_url', 'source', 'path']);
  return /^https?:\/\//.test(source) ? `<a href="${e(source)}" target="_blank" rel="noreferrer">Source ↗</a>` : `<span class="source-cell">${e(source)}</span>`;
};

const renderResearchTable = (id, title, rows, kind) => {
  if (!rows.length) return '';
  const rankFields = ['rank', 'top10_rank'];
  const identityFields = kind === 'companies' ? ['identity', 'vendor', 'product', 'name', 'title', 'id'] : kind === 'sources' ? ['identity', 'source_identity', 'repo', 'name', 'title', 'id'] : ['repo', 'identity', 'name', 'title', 'id'];
  const findingFields = kind === 'innovations' ? ['hypothesis', 'claim', 'mechanism', 'problem', 'rationale'] : ['claim', 'mechanism', 'selection_reason', 'rank_rationale', 'top10_rationale'];
  const body = rows.map(row => `<tr data-record-id="${e(row.id || '')}"><td>${e(firstValue(row, rankFields))}</td><td><strong>${e(firstValue(row, identityFields))}</strong><small>${e(firstValue(row, ['category', 'segment', 'kind', 'source_class', 'capability_kinds']))}</small></td><td>${e(firstValue(row, findingFields))}</td><td><span class="evidence-pill">${e(firstValue(row, ['evidence_class']))}</span><small>${e(firstValue(row, ['disposition', 'verified', 'license', 'license_observed', 'license_declared']))}</small></td><td>${sourceLink(row)}</td></tr>`).join('');
  return `<section class="node-section research-dataset" data-research-table><div class="dataset-head"><div><h2>${e(title)}</h2><p>${rows.length} mined records. Search and inspect the full agent output; nothing is collapsed into a top-ten headline.</p></div><input type="search" placeholder="Filter ${e(title.toLowerCase())}…" aria-label="Filter ${e(title)}" data-table-filter="${e(id)}"></div><div class="table-scroll"><table class="artifact-table research-table" id="${e(id)}"><thead><tr><th>Rank</th><th>Identity</th><th>What the agent found</th><th>Evidence</th><th>Source</th></tr></thead><tbody>${body}</tbody></table></div></section>`;
};

async function loadRun(partId) {
  const relativePath = currentRuns[partId];
  if (!relativePath) return null;
  const absolutePath = resolve(projectRoot, relativePath);
  const info = await stat(absolutePath).catch(() => null);
  if (!info?.isDirectory()) return null;
  const names = (await readdir(absolutePath, { withFileTypes: true })).filter(entry => entry.isFile()).map(entry => entry.name).sort();
  const artifacts = [];
  const artifactRoot = resolve(siteRoot, 'artifacts', partId.toLowerCase());
  await mkdir(resolve(artifactRoot, 'raw'), { recursive: true });
  for (const name of names) {
    const content = await readFile(resolve(absolutePath, name), 'utf8').catch(() => '');
    if (!content) continue;
    const stem = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    await mkdir(resolve(artifactRoot, stem), { recursive: true });
    await writeFile(resolve(artifactRoot, 'raw', name), content);
    const artifactBody = `<main class="node-shell"><div class="node-header"><div class="breadcrumbs"><a href="../../../parts/${partId.toLowerCase()}/">${partId}</a> / Research artifact / ${e(name)}</div><div class="node-actions"><a class="button" href="../raw/${e(name)}" download>Download original</a></div></div><div class="artifact-view"><div class="artifact-view-head"><h1>${e(name)}</h1><p><code>${e(relativePath)}/${e(name)}</code></p></div><pre class="artifact-source">${e(content)}</pre></div></main>`;
    await writeFile(resolve(artifactRoot, stem, 'index.html'), pageFrame({ title: `${partId} · ${name}`, description: `Full ${partId} research artifact ${name}`, body: artifactBody, relative: '../../..' }));
    artifacts.push({ name, stem, bytes: Buffer.byteLength(content), lines: content.split(/\r?\n/).length });
  }
  const [rawCompanies, rawRepos, rawInnovations, rawSources] = await Promise.all([
    readJsonl(resolve(absolutePath, 'top-companies.jsonl')),
    readJsonl(resolve(absolutePath, 'top-repos.jsonl')),
    readJsonl(resolve(absolutePath, 'innovation-register.jsonl')),
    readJsonl(resolve(absolutePath, 'source-register.jsonl'))
  ]);
  const dataRows = rows => rows.filter(row => !/(^|-)summary$/i.test(String(row.id || '')));
  const sources = dataRows(rawSources);
  const sourceCompanies = sources.filter(row => row.source_class === 'commercial');
  const sourceRepos = sources.filter(row => row.source_class === 'oss');
  const companies = sourceCompanies.length > dataRows(rawCompanies).length ? sourceCompanies : dataRows(rawCompanies);
  const repos = sourceRepos.length > dataRows(rawRepos).length ? sourceRepos : dataRows(rawRepos);
  const innovations = dataRows(rawInnovations);
  const state = JSON.parse(await readFile(resolve(absolutePath, 'lane-state.json'), 'utf8').catch(() => '{}'));
  return { relativePath, artifacts, companies, repos, innovations, sources, state };
}

const tableFilterScript = `<script>document.querySelectorAll('[data-table-filter]').forEach(input=>input.addEventListener('input',()=>{const q=input.value.toLowerCase();document.querySelectorAll('#'+input.dataset.tableFilter+' tbody tr').forEach(row=>row.hidden=!row.textContent.toLowerCase().includes(q));}));</script>`;

const frameworkRoot = resolve(projectRoot, 'knowledge', 'frameworks');
const frameworkRegister = JSON.parse(await readFile(resolve(frameworkRoot, 'framework-register.json'), 'utf8'));
const frameworkDependencyGraph = JSON.parse(await readFile(resolve(frameworkRoot, 'framework-dependency-graph.json'), 'utf8'));
const frameworkGapAnalysis = await readFile(resolve(frameworkRoot, 'framework-gap-analysis.md'), 'utf8');
const frameworkValueMatrix = await readFile(resolve(frameworkRoot, 'repository-value-matrix-v1.md'), 'utf8');
const frameworkScoreSchema = await readFile(resolve(frameworkRoot, 'repository-value-score.schema.json'), 'utf8');
const frameworkSummary = frameworkRegister.registry_summary;
const frameworkPageDir = resolve(siteRoot, 'task-graph', 'frameworks');
await mkdir(frameworkPageDir, { recursive: true });
await writeFile(resolve(frameworkPageDir, 'README.md'), await readFile(resolve(frameworkRoot, 'README.md'), 'utf8'));
await writeFile(resolve(frameworkPageDir, 'framework-register.json'), `${JSON.stringify(frameworkRegister, null, 2)}\n`);
await writeFile(resolve(frameworkPageDir, 'framework-dependency-graph.json'), `${JSON.stringify(frameworkDependencyGraph, null, 2)}\n`);
await writeFile(resolve(frameworkPageDir, 'framework-gap-analysis.md'), frameworkGapAnalysis);
await writeFile(resolve(frameworkPageDir, 'repository-value-matrix-v1.md'), frameworkValueMatrix);
await writeFile(resolve(frameworkPageDir, 'repository-value-score.schema.json'), frameworkScoreSchema);

const frameworkMaturityOrder = ['idea', 'specified', 'machine_readable', 'dry_run', 'measured', 'operational'];
const frameworkCategoryOrder = ['demand_product', 'supply_discovery', 'selection_valuation', 'conversion_contracts', 'composition_experience', 'runtime_release', 'learning_governance'];
const frameworkMaturityCards = frameworkMaturityOrder.map(maturity => `<article class="node-card"><div class="node-kicker">Maturity</div><h3>${e(maturity.replaceAll('_', ' '))}</h3><strong>${frameworkSummary.maturity_counts[maturity] || 0}</strong><p>framework records</p></article>`).join('');
const frameworkCategoryCards = frameworkCategoryOrder.map(category => `<article class="node-card lilac"><div class="node-kicker">Category</div><h3>${e(category.replaceAll('_', ' '))}</h3><strong>${frameworkSummary.category_counts[category] || 0}</strong><p>framework records</p></article>`).join('');
const frameworkCategoryOptions = frameworkCategoryOrder.map(category => `<option value="${e(category)}">${e(category.replaceAll('_', ' '))}</option>`).join('');
const frameworkMaturityOptions = frameworkMaturityOrder.map(maturity => `<option value="${e(maturity)}">${e(maturity.replaceAll('_', ' '))}</option>`).join('');
const frameworkRows = frameworkRegister.frameworks.map(item => {
  const dependencies = item.dependencies.length ? item.dependencies.map(dep => `<a class="dependency" href="#${e(dep)}">${e(dep)}</a>`).join(' · ') : '—';
  const evidence = item.evidence.map(ref => `<div><span class="evidence-pill">${e(ref.evidence_class)}</span><small><code>${e(ref.path)}</code></small></div>`).join('');
  return `<tr data-framework-row data-framework-id="${e(item.framework_id)}" data-framework-category="${e(item.category)}" data-framework-maturity="${e(item.maturity)}"><td><strong id="${e(item.framework_id)}">${e(item.framework_id)}</strong><small>${e(item.current_owner)}</small></td><td><strong>${e(item.name)}</strong><small>${e(item.problem_owned)}</small></td><td>${e(item.category)}</td><td><span class="evidence-pill">${e(item.maturity)}</span><small>${e(item.evidence_class)}</small></td><td>${dependencies}</td><td>${evidence}</td><td>${e(item.next_gate)}</td></tr>`;
}).join('');
const frameworkGapRows = frameworkRegister.gaps.map(gap => `<tr data-framework-gap-row data-gap-kind="${e(gap.gap_kind)}"><td><strong>${e(gap.gap_id)}</strong><small>rank ${e(gap.rank)} · centrality ${e(gap.dependency_centrality)}/10</small></td><td><strong>${e(gap.title)}</strong><small>${e(gap.gap_kind)}</small></td><td>${e(gap.consequence)}</td><td>${e(gap.current_state)}</td><td>${e(gap.action)}<small>${e(gap.owner)}</small></td></tr>`).join('');
const frameworkPageScript = `<script>const frameworkSearch=document.querySelector('[data-framework-search]');const frameworkMaturity=document.querySelector('[data-framework-maturity]');const frameworkCategory=document.querySelector('[data-framework-category]');function filterFrameworks(){const q=frameworkSearch.value.toLowerCase();const maturity=frameworkMaturity.value;const category=frameworkCategory.value;document.querySelectorAll('[data-framework-row]').forEach(row=>{row.hidden=Boolean((q&&!row.textContent.toLowerCase().includes(q))||(maturity&&row.dataset.frameworkMaturity!==maturity)||(category&&row.dataset.frameworkCategory!==category));});}frameworkSearch.addEventListener('input',filterFrameworks);frameworkMaturity.addEventListener('change',filterFrameworks);frameworkCategory.addEventListener('change',filterFrameworks);</script>`;
const frameworkPageBody = `<main class="node-shell"><div class="node-header"><div class="breadcrumbs"><a href="../../">System map</a> / <a href="../">Task graph</a> / Framework registry</div><div class="node-actions"><a class="button" href="framework-register.json" download>Download register</a><a class="button" href="framework-dependency-graph.json" download>Download graph</a></div></div><div class="node-content"><section class="node-hero"><div><div class="node-kicker">Canonical research-only registry · semantics, packaging, host, qualification and release kept distinct</div><h1>Actionist Framework Registry</h1><div class="node-thesis">A searchable inventory of reusable Actionist frameworks, their exact evidence, dependency edges, maturity boundaries, falsifiers and next gates. This page records what is reusable and what is still missing; it does not admit source code or imply production readiness.</div></div><aside class="node-status"><span>Current state</span><strong>Research-only · no frameworks admitted</strong><p>${frameworkSummary.framework_count} records · ${frameworkSummary.gap_count} ranked gaps · ${frameworkSummary.operational_frameworks} operational</p></aside></section><div class="research-metrics"><div><strong>${frameworkSummary.framework_count}</strong><span>framework records</span></div><div><strong>${frameworkCategoryOrder.length}</strong><span>categories</span></div><div><strong>${frameworkSummary.gap_count}</strong><span>ranked gaps</span></div><div><strong>${frameworkSummary.admitted_frameworks}</strong><span>admitted</span></div></div><section class="node-section"><h2>Maturity coverage</h2><div class="node-grid">${frameworkMaturityCards}</div></section><section class="node-section"><h2>Framework categories</h2><div class="node-grid">${frameworkCategoryCards}</div></section><section class="node-section"><div class="dataset-head"><div><h2>Complete framework register</h2><p>Filter by exact text, maturity or category. Dependencies link to the framework record; evidence paths remain the source-of-truth routes.</p></div><div class="filter-row"><input type="search" placeholder="Search frameworks, problems, evidence…" aria-label="Search Actionist Framework Registry" data-framework-search><select aria-label="Filter by maturity" data-framework-maturity><option value="">All maturity</option>${frameworkMaturityOptions}</select><select aria-label="Filter by category" data-framework-category><option value="">All categories</option>${frameworkCategoryOptions}</select></div></div><div class="table-scroll"><table class="artifact-table research-table"><thead><tr><th>ID / owner</th><th>Framework and problem</th><th>Category</th><th>Maturity / evidence</th><th>Dependencies</th><th>Exact evidence</th><th>Next gate</th></tr></thead><tbody>${frameworkRows}</tbody></table></div></section><section class="node-section"><h2>Ranked framework gaps</h2><p>Gaps distinguish genuinely missing frameworks from machine-readable, dry-run or measured work that has not crossed its next gate.</p><div class="table-scroll"><table class="artifact-table"><thead><tr><th>Rank / centrality</th><th>Gap</th><th>Consequence</th><th>Current state</th><th>Action / owner</th></tr></thead><tbody>${frameworkGapRows}</tbody></table></div></section><section class="node-section"><h2>Machine-readable packet</h2><div class="node-grid"><article class="node-card"><h3>Dependency graph</h3><p>${frameworkDependencyGraph.nodes.length} nodes · ${frameworkDependencyGraph.edges.length} prerequisite edges · acyclic by construction.</p><a class="button" href="framework-dependency-graph.json" download>Download graph JSON</a></article><article class="node-card lilac"><h3>Value Matrix V1</h3><p>Five reuse shapes, eleven dimensions, hard gates, geometric min-sensitive scoring and an explicit evidence ladder. Anchor repositories are fixtures only; no fabricated scores are present.</p><a class="button" href="repository-value-matrix-v1.md" download>Download Value Matrix</a></article><article class="node-card"><h3>Score schema</h3><p>JSON Schema for candidate context, shape scores, provenance, hard gates and measurement receipts.</p><a class="button" href="repository-value-score.schema.json" download>Download schema</a></article></div></section><section class="node-section"><div class="artifact-view"><div class="artifact-view-head"><h2>Gap analysis</h2><p><a href="framework-gap-analysis.md" download>Download Markdown</a> · <a href="README.md" download>Download registry README</a></p></div><pre class="artifact-source">${e(frameworkGapAnalysis)}</pre></div></section><section class="node-section"><div class="artifact-view"><div class="artifact-view-head"><h2>Value Matrix V1 protocol</h2><p><a href="repository-value-matrix-v1.md" download>Download Markdown</a></p></div><pre class="artifact-source">${e(frameworkValueMatrix)}</pre></div></section></div></main>${frameworkPageScript}`;
await writeFile(resolve(frameworkPageDir, 'index.html'), pageFrame({ title: 'Actionist Framework Registry', description: 'Searchable Actionist framework registry with maturity, dependencies, evidence, gaps and Value Matrix protocol.', body: frameworkPageBody, relative: '../..' }));

await mkdir(resolve(siteRoot, 'data'), { recursive: true });
await mkdir(resolve(siteRoot, 'parts'), { recursive: true });

const designGrammarSourcePath = resolve(projectRoot, 'knowledge', '06-DESIGN-GRAMMAR-AND-PREFERENCE-PROTOCOL.md');
const designGrammarSource = await readFile(designGrammarSourcePath, 'utf8');
const designGrammarDir = resolve(siteRoot, 'parts', 'p06', 'design-grammar');
await mkdir(designGrammarDir, { recursive: true });
await writeFile(resolve(designGrammarDir, 'design-grammar.md'), designGrammarSource);
const designGrammarBody = `<main class="node-shell"><div class="node-header"><div class="breadcrumbs"><a href="../../../">System map</a> / <a href="../">P06</a> / Design grammar</div><div class="node-actions"><a class="button" href="design-grammar.md" download>Download Markdown</a></div></div><div class="artifact-view"><div class="artifact-view-head"><div class="node-kicker">P05 + P06 + P07 + P08 synthesis</div><h1>Design grammar and preference protocol</h1><p>The current first-principles join: valid design space, preference rounds, DesignDNA, local assets and closure experiments.</p></div><pre class="artifact-source">${e(designGrammarSource)}</pre></div></main>`;
await writeFile(resolve(designGrammarDir, 'index.html'), pageFrame({ title: 'P06 · Design grammar and preference protocol', description: 'First-principles Actionist design grammar, preference rounds and DesignDNA contract.', body: designGrammarBody, relative: '../../..' }));

const decisionTimelineSourcePath = resolve(projectRoot, 'knowledge', '07-DECISION-TIMELINE.md');
const decisionTimelineSource = await readFile(decisionTimelineSourcePath, 'utf8');
const decisionTimelineDir = resolve(siteRoot, 'task-graph', 'timeline');
await mkdir(decisionTimelineDir, { recursive: true });
await writeFile(resolve(decisionTimelineDir, 'decision-timeline.md'), decisionTimelineSource);
const decisionTimelineBody = `<main class="node-shell"><div class="node-header"><div class="breadcrumbs"><a href="../../">System map</a> / <a href="../">Task graph</a> / Decision timeline</div><div class="node-actions"><a class="button" href="decision-timeline.md" download>Download Markdown</a></div></div><div class="artifact-view"><div class="artifact-view-head"><div class="node-kicker">Research → framework → pilot selection</div><h1>Actionist decision timeline</h1><p>The current chronological interpretation, including the horizontal foundation, stacking model, three reuse shapes and operator pilot shortlist.</p></div><pre class="artifact-source">${e(decisionTimelineSource)}</pre></div></main>`;
await writeFile(resolve(decisionTimelineDir, 'index.html'), pageFrame({ title: 'Actionist decision timeline', description: 'Chronological Actionist research, architecture and pilot decisions.', body: decisionTimelineBody, relative: '../..' }));

for (const part of parts) {
  const dir = resolve(siteRoot, 'parts', part.id.toLowerCase());
  await mkdir(dir, { recursive: true });
  const run = await loadRun(part.id);
  const resourceRows = (resources[part.id] || []).map(([label, path]) => `<tr><td>${e(label)}</td><td>${localOrLink(path)}</td><td><span class="artifact-state">existing</span></td></tr>`).join('');
  const packetRows = run?.artifacts.map(artifact => `<tr><td>${e(artifact.name)}</td><td><a href="../../artifacts/${part.id.toLowerCase()}/${e(artifact.stem)}/">View full artifact ↗</a><small><code>${e(run.relativePath)}/${e(artifact.name)}</code></small></td><td><span class="artifact-state verified">${artifact.lines.toLocaleString()} lines</span></td></tr>`).join('') || '';
  const futurePath = `research/workstreams/${part.id}-${slugs[part.id]}/runs/&lt;run-id&gt;/`;
  const depLinks = part.deps.map(id => `<a class="dependency" href="../${id.toLowerCase()}/">${id} · ${e(parts.find(p => p.id === id).title)}</a>`).join('');
  const metrics = run ? `<div class="research-metrics"><div><strong>${run.companies.length}</strong><span>company records</span></div><div><strong>${run.repos.length}</strong><span>repository records</span></div><div><strong>${run.innovations.length}</strong><span>innovation records</span></div><div><strong>${run.sources.length}</strong><span>source receipts</span></div></div>` : '';
  const blockers = run?.state?.blockers || run?.state?.unresolved || [];
  const blockerItems = blockers.map(item => typeof item === 'string' ? item : item.statement || item.blocker || item.summary || JSON.stringify(item));
  const researchTables = run ? [
    renderResearchTable(`${part.id.toLowerCase()}-companies`, 'Companies and commercial surfaces', run.companies, 'companies'),
    renderResearchTable(`${part.id.toLowerCase()}-repos`, 'Repositories and OSS precedents', run.repos, 'repos'),
    renderResearchTable(`${part.id.toLowerCase()}-innovations`, 'Innovation register', run.innovations, 'innovations'),
    renderResearchTable(`${part.id.toLowerCase()}-sources`, 'Complete source register', run.sources, 'sources')
  ].join('') : '';
  const packetState = run ? (run.state.status || run.state.completion_status || 'packet on disk') : part.status;
  const designGrammarCallout = part.id === 'P06' ? `<section class="node-section"><div class="task-banner"><div><div class="node-kicker">Current first-principles synthesis</div><h2>The missing join is now documented</h2><p>P06 solved much of the preference-learning mechanism. This document joins it to the actual colour, typography, spacing, density, shape, depth and layout grammar, the local SISO design assets, and the experiments still required.</p></div><a class="button" href="design-grammar/">Open design grammar →</a></div></section>` : '';
  const body = `<main class="node-shell"><div class="node-header"><div class="breadcrumbs"><a href="../../">System map</a> / ${part.group} / ${part.id}</div><div class="node-actions"><a class="button" href="../../task-graph/">View task graph</a></div></div><div class="node-content"><section class="node-hero"><div><div class="node-kicker">${part.id} · ${e(part.group)} knowledge node</div><h1>${e(part.title)}</h1><div class="node-thesis">${e(part.thesis)}</div></div><aside class="node-status"><span>Current research state</span><strong>${e(packetState)}</strong><p>${run ? `Sprint 1 packet loaded from ${e(run.relativePath)}.` : 'This framework node is fed by linked prior research and later synthesis.'}</p></aside></section>${metrics}${designGrammarCallout}<section class="node-section"><h2>What we learned</h2><p>Current synthesis from the research packet. Exact records and complete source artifacts remain visible below.</p><div class="node-grid"><article class="node-card lilac wide"><h3>Research conclusions</h3>${bullets(latestFindings[part.id] || part.known)}</article><article class="node-card"><h3>What it owns</h3>${bullets(part.owns)}</article><article class="node-card"><h3>Open first-principles questions</h3>${bullets(part.open)}</article><article class="node-card"><h3>Inputs</h3>${bullets(part.inputs)}</article><article class="node-card"><h3>Outputs</h3>${bullets(part.outputs)}</article>${blockerItems.length ? `<article class="node-card wide risk"><h3>Explicit holds and blockers</h3>${bullets(blockerItems)}</article>` : ''}<article class="node-card wide"><h3>Connected knowledge nodes</h3><div class="dependency-list">${depLinks}</div></article></div></section>${researchTables}<section class="node-section"><h2>Full research artifacts</h2><p>Open the complete Markdown, JSON, JSONL and survey-note files in the browser. Raw originals are also downloadable from each viewer.</p><table class="artifact-table"><thead><tr><th>Artifact</th><th>View and source path</th><th>Size</th></tr></thead><tbody>${packetRows}${resourceRows}${run ? '' : `<tr><td>Next verified packet</td><td><code>${futurePath}</code></td><td><span class="artifact-state">planned</span></td></tr>`}</tbody></table></section><details class="protocol-disclosure"><summary>Scientific research protocol used for this part</summary><div class="research-protocol">${protocolHtml}</div></details><section class="node-section"><div class="task-banner"><div><h2>Agent-sized objective</h2><p>${e(part.agent)}</p></div><a class="button" href="../../task-graph/">See sprint assignment →</a></div></section></div></main>${tableFilterScript}`;
  await writeFile(resolve(dir, 'index.html'), pageFrame({ title: part.title, description: part.thesis, body }));
}

const convergenceHtml = `<section class="convergence"><div class="convergence-head"><div><div class="lane-code">${e(convergence.id)} · ${e(convergence.owner)}</div><h2>${e(convergence.title)}</h2><p>${e(convergence.purpose)}</p></div><div class="convergence-status">Status · ${e(convergence.status.replaceAll('_', ' '))}</div></div><div class="convergence-flow"><div><strong>5</strong><span>lane callbacks</span></div><b>→</b><div><strong>12</strong><span>part packets</span></div><b>→</b><div><strong>4</strong><span>handoff artifacts</span></div><b>→</b><div><strong>5</strong><span>Sprint 2 edges</span></div></div><div class="convergence-grid">${convergence.inputs.map(input => `<article><div class="lane-code">${e(input.lane)}</div><div class="lane-parts">${input.parts.map(id => `<a href="../parts/${id.toLowerCase()}/">${id}</a>`).join('')}</div><p>${e(input.contribution)}</p></article>`).join('')}</div><div class="convergence-artifacts"><article class="node-card"><h3>Coordinator outputs</h3>${bullets(convergence.artifacts.map(item => `${item.file} — ${item.purpose}`))}<p><code>${e(convergence.artifact_root)}</code></p></article><article class="node-card lilac"><h3>Promotion gate</h3><p>${e(convergence.promotion_gate)}</p>${bullets(convergence.verification)}</article></div><h3 class="matrix-title">Exact handoff into Sprint 2</h3><table class="artifact-table"><thead><tr><th>Sprint 2 owner</th><th>Consumes verified parts</th><th>Produces</th></tr></thead><tbody>${convergence.sprint_2_edges.map(edge => `<tr><td><strong>${e(edge.lane)}</strong></td><td>${edge.parts.map(id => `<a href="../parts/${id.toLowerCase()}/">${id}</a>`).join(' · ')}</td><td>${e(edge.result)}</td></tr>`).join('')}</tbody></table></section>`;
const sprintHtml = sprints.map((sprint, index) => `<section class="sprint"><div class="sprint-head"><div class="sprint-no">${sprint.id}</div><div><h2>${e(sprint.title)}</h2><p>${e(sprint.purpose)}</p></div><div class="sprint-gate">Gate · ${e(sprint.gate)}</div></div><div class="lane-grid">${sprint.lanes.map(lane => `<article class="lane"><div class="lane-code">${lane.id} · OPUS OWNER</div><h3>${e(lane.title)}</h3><div class="lane-parts">${lane.parts.map(id => `<a href="../parts/${id.toLowerCase()}/">${id}</a>`).join('')}</div><p>${e(lane.result)}</p>${bullets(lane.notes)}</article>`).join('')}</div></section>${index === 0 ? convergenceHtml : ''}`).join('');
const taskBody = `<main class="node-shell"><div class="node-header"><div class="breadcrumbs"><a href="../">System map</a> / Research execution graph</div><div class="node-actions"><a class="button" href="../">All 15 parts</a></div></div><div class="node-content task-page"><section class="node-hero"><div><div class="node-kicker">Three sprints · five Opus owners per sprint · coordinator convergence between sprints</div><h1>Research in parallel. Converge with evidence.</h1><div class="node-thesis">This graph compresses the 15 moving parts into three sprints and makes the missing integration job explicit: CENA verifies and joins Sprint 1 before any dependent framework synthesis begins.</div></div><aside class="node-status"><span>Dispatch state</span><strong>Sprint 1 running</strong><p>Five Opus 5 owners are gathering independent evidence. Sprint 2 is blocked behind S1-GATE.</p></aside></section><section class="node-section"><div class="graph-summary"><div><strong>3</strong><span>bounded sprints</span></div><div><strong>5</strong><span>parallel Opus owners per sprint</span></div><div><strong>15</strong><span>permanent knowledge nodes</span></div></div><div class="dependency-legend"><span>Research can run in parallel</span><span>Framework/build consumes verified convergence</span></div>${sprintHtml}</section><section class="node-section"><h2>How every agent gets enough context</h2><p>Agents receive a compact index and exact source routes—not 500 MB of raw files stuffed into one prompt.</p><div class="context-pack"><article class="context-card"><h3>Required context</h3>${bullets(commonReads)}</article><article class="context-card"><h3>Required return packet</h3>${bullets(outputContract)}</article><article class="context-card"><h3>Compute discipline</h3>${bullets(['One persistent Opus owner per lane; workers never self-fan', 'Checkpoint after prior audit, commercial survey, OSS survey and first-principles synthesis', 'Exact non-overlapping write ownership by part ID', 'Compact callback; full evidence remains in artifacts', 'Coordinator convergence plus fresh-context verifier before Sprint 2'])}</article></div></section><section class="node-section"><h2>Location and promotion contract</h2><div class="node-grid"><article class="node-card"><h3>Write location</h3><p><code>research/workstreams/&lt;part-id&gt;-&lt;slug&gt;/runs/&lt;run-id&gt;/</code></p><p>Each lane may own multiple part directories, but no two live agents write the same part.</p></article><article class="node-card lilac"><h3>Promotion</h3><p>CENA validates counts, links, source classes, contradictions and hashes, creates the four convergence artifacts, and only then unlocks Sprint 2. Historical evidence is never rewritten.</p></article></div></section></div></main>`;
const liveTaskBody = taskBody
  .replace('This graph compresses the 15 moving parts into three sprints and makes the missing integration job explicit: CENA verifies and joins Sprint 1 before any dependent framework synthesis begins.', 'Sprint 2 research has converged with explicit holds. The module framework, visual bindings, shell/edit model, deterministic composer and runtime/learning contracts now form one architecture. Sprint 3 remains blocked until the operator authorizes the three-candidate contract-and-solver pilot.')
  .replace('<strong>Sprint 1 running</strong><p>Five Opus 5 owners are gathering independent evidence. Sprint 2 is blocked behind S1-GATE.</p>', '<strong>Sprint 2 converged with holds</strong><p>All five Opus lanes passed independent smoke. No implementation or Sprint 3 pilot is authorized.</p>')
  .replace('<section class="node-section"><div class="graph-summary">', '<section class="node-section"><div class="task-banner"><div><div class="node-kicker">Canonical Block Hub</div><h2>Business jobs joined to blocks, recipes and candidate source</h2><p>The shared Digital Business OS and SaaS, ecommerce, agency and course-creator overlays are mapped across surfaces, products, capabilities, engines and platform blocks.</p></div><a class="button" href="block-hub/">Open Block Hub →</a></div></section><section class="node-section"><div class="task-banner"><div><div class="node-kicker">Decision timeline</div><h2>How the research became the current pilot strategy</h2><p>The horizontal foundation, efficient stacking model, three technical reuse shapes and SaaS/ecommerce/agency shortlist are now recorded chronologically.</p></div><a class="button" href="timeline/">Open decision timeline →</a></div></section><section class="node-section"><div class="task-banner"><div><div class="node-kicker">Current convergence</div><h2>The modular assembly framework is synthesized</h2><p>Read the joined architecture, nine canonical seam decisions, unresolved gates and recommended three-candidate contract-and-solver pilot.</p></div><a class="button" href="sprint-2-convergence/">Open Sprint 2 convergence →</a></div></section><section class="node-section"><div class="task-banner"><div><div class="node-kicker">Expanded base universe</div><h2>68 families · 144 repository seeds · 8 thin gaps</h2><p>The earlier 23-family compression has been corrected into horizontal products, shared capabilities and true vertical operating systems.</p></div><a class="button" href="base-portfolio/">Open expanded base universe →</a></div></section><section class="node-section"><div class="graph-summary">')
  .replace('<section class="node-section"><div class="graph-summary">', `<section class="node-section"><div class="task-banner"><div><div class="node-kicker">Canonical Framework Registry</div><h2>${frameworkSummary.framework_count} linked frameworks · ${frameworkSummary.gap_count} ranked gaps</h2><p>Search the reusable framework records, dependency graph, exact evidence paths, maturity boundaries and missing-work analysis.</p></div><a class="button" href="frameworks/">Open Framework Registry →</a></div></section><section class="node-section"><div class="graph-summary">`);
await mkdir(resolve(siteRoot, 'task-graph'), { recursive: true });
await writeFile(resolve(siteRoot, 'task-graph', 'index.html'), pageFrame({ title: 'Task graph', description: 'Three-sprint parallel research graph for the 15 Actionist moving parts.', body: liveTaskBody, relative: '..' }));

const sprint2ConvergencePath = resolve(projectRoot, 'research', 'workstreams', '2026-08-27-sprint-2', 'convergence', 'S2-CONVERGENCE.md');
const sprint2ConvergenceSource = await readFile(sprint2ConvergencePath, 'utf8');
const sprint2ConvergenceDir = resolve(siteRoot, 'task-graph', 'sprint-2-convergence');
await mkdir(sprint2ConvergenceDir, { recursive: true });
await writeFile(resolve(sprint2ConvergenceDir, 'S2-CONVERGENCE.md'), sprint2ConvergenceSource);
const sprint2ConvergenceBody = `<main class="node-shell"><div class="node-header"><div class="breadcrumbs"><a href="../../">System map</a> / <a href="../">Task graph</a> / Sprint 2 convergence</div><div class="node-actions"><a class="button" href="S2-CONVERGENCE.md" download>Download Markdown</a></div></div><div class="artifact-view"><div class="artifact-view-head"><div class="node-kicker">Five verified Opus lanes · coordinator convergence</div><h1>Actionist modular assembly framework</h1><p>The readable joined result, canonical seam decisions, holds and next experiment.</p></div><pre class="artifact-source">${e(sprint2ConvergenceSource)}</pre></div></main>`;
await writeFile(resolve(sprint2ConvergenceDir, 'index.html'), pageFrame({ title: 'Sprint 2 · Modular assembly framework', description: 'Sprint 2 Actionist module framework convergence.', body: sprint2ConvergenceBody, relative: '../..' }));

const basePortfolioRoot = resolve(projectRoot, 'research', 'base-portfolio-2026-08-27');
const basePortfolioSource = await readFile(resolve(basePortfolioRoot, 'base-portfolio.md'), 'utf8');
const basePortfolioRegister = JSON.parse(await readFile(resolve(basePortfolioRoot, 'base-family-register.json'), 'utf8'));
const basePortfolioRows = (await readJsonl(resolve(basePortfolioRoot, 'base-repo-shortlist.jsonl'))).map(row => ({ ...row, category: row.base_families.join(' · ') }));
const baseUniverseSource = await readFile(resolve(basePortfolioRoot, 'base-universe-v2.md'), 'utf8');
const baseUniverseRegister = JSON.parse(await readFile(resolve(basePortfolioRoot, 'base-universe-v2.json'), 'utf8'));
const baseUniverseSeeds = (await readJsonl(resolve(basePortfolioRoot, 'base-universe-seeds.jsonl'))).map(row => ({ ...row, category: `${row.group} · ${row.family_id}` }));
const basePortfolioDir = resolve(siteRoot, 'task-graph', 'base-portfolio');
await mkdir(basePortfolioDir, { recursive: true });
await writeFile(resolve(basePortfolioDir, 'base-portfolio.md'), basePortfolioSource);
await writeFile(resolve(basePortfolioDir, 'base-family-register.json'), `${JSON.stringify(basePortfolioRegister, null, 2)}\n`);
await writeFile(resolve(basePortfolioDir, 'base-repo-shortlist.jsonl'), `${basePortfolioRows.map(row => JSON.stringify(row)).join('\n')}\n`);
await writeFile(resolve(basePortfolioDir, 'base-universe-v2.md'), baseUniverseSource);
await writeFile(resolve(basePortfolioDir, 'base-universe-v2.json'), `${JSON.stringify(baseUniverseRegister, null, 2)}\n`);
await writeFile(resolve(basePortfolioDir, 'base-universe-seeds.jsonl'), `${baseUniverseSeeds.map(row => JSON.stringify(row)).join('\n')}\n`);
const universeCounts = baseUniverseRegister.counts;
const basePortfolioBody = `<main class="node-shell"><div class="node-header"><div class="breadcrumbs"><a href="../../">System map</a> / <a href="../">Task graph</a> / Base universe</div><div class="node-actions"><a class="button" href="../capability-sources/">Open permanent source registry</a><a class="button" href="base-universe-seeds.jsonl" download>Download ${universeCounts.unique_seed_repositories}-repo seed JSONL</a></div></div><div class="node-content"><section class="node-hero"><div><div class="node-kicker">Expanded quality-first universe · not qualified</div><h1>${universeCounts.families} base families, ${universeCounts.unique_seed_repositories} repository seeds</h1><div class="node-thesis">The earlier 23-family compression is superseded. The current taxonomy separates complete horizontal products, shared capability engines and vertical operating systems with distinct state and authority.</div></div><aside class="node-status"><span>Current state</span><strong>Provisional expanded universe</strong><p>${universeCounts.thin_families} families remain visibly thin. No base has been cloned, executed, qualified or admitted.</p></aside></section><div class="research-metrics"><div><strong>${universeCounts.horizontal_product}</strong><span>horizontal products</span></div><div><strong>${universeCounts.shared_capability}</strong><span>shared capabilities</span></div><div><strong>${universeCounts.vertical_operating_system}</strong><span>vertical systems</span></div><div><strong>${universeCounts.thin_families}</strong><span>thin families</span></div></div><section class="node-section"><div class="task-banner"><div><div class="node-kicker">Permanent joined registry</div><h2>Discovery, Foundry intelligence and client runtime evidence now meet in one list</h2><p>The source registry preserves separate evidence classes for the expanded universe, P03, historical operator nominations and Bykonz integration receipts.</p></div><a class="button" href="../capability-sources/">Open source registry →</a></div></section><section class="node-section"><div class="artifact-view"><div class="artifact-view-head"><h2>Expanded universe and first-principles boundary</h2><p><a href="base-universe-v2.md" download>Download Markdown</a> · <a href="base-universe-v2.json" download>Download universe register</a></p></div><pre class="artifact-source">${e(baseUniverseSource)}</pre></div></section>${renderResearchTable('base-universe-seeds', `${universeCounts.seed_assignments} family-to-repository seed assignments`, baseUniverseSeeds, 'repos')}<section class="node-section"><div class="artifact-view"><div class="artifact-view-head"><h2>Prior 23-family / 100-repository deep bench</h2><p>Preserved as historical evidence, not presented as exhaustive. <a href="base-portfolio.md" download>Download prior synthesis</a> · <a href="base-repo-shortlist.jsonl" download>Download prior 100-repo JSONL</a></p></div><pre class="artifact-source">${e(basePortfolioSource)}</pre></div></section>${renderResearchTable('base-portfolio-repos', 'Prior 100-repository deeper-evidence bench', basePortfolioRows, 'repos')}</div></main>${tableFilterScript}`;
await writeFile(resolve(basePortfolioDir, 'index.html'), pageFrame({ title: 'Actionist expanded base universe', description: `${universeCounts.families} Actionist base families and ${universeCounts.unique_seed_repositories} repository seeds across horizontal, shared and vertical systems.`, body: basePortfolioBody, relative: '../..' }));

const capabilityShelfRoot = resolve(projectRoot, 'knowledge', 'capability-shelf');
const capabilityShelfSource = await readFile(resolve(capabilityShelfRoot, 'README.md'), 'utf8');
const capabilityShelfSummary = JSON.parse(await readFile(resolve(capabilityShelfRoot, 'registry-summary.json'), 'utf8'));
const capabilitySourceRows = (await readJsonl(resolve(capabilityShelfRoot, 'source-registry.jsonl'))).map(row => ({
  ...row,
  id: row.source_id,
  rank: Number(row.source_id.slice(4)),
  identity: row.repo,
  category: `${row.current_verdict} · ${row.evidence_classes.join(' · ')}`,
  claim: row.observed_facts.slice(0, 4).join(' '),
  recommendation: row.client_precedents.length ? row.client_precedents.map(item => `${item.client}: ${item.verdict}`).join(' · ') : row.foundry_stage,
  evidence_class: row.evidence_classes.join(' · '),
  source_url: row.url
}));
const capabilitySourcesDir = resolve(siteRoot, 'task-graph', 'capability-sources');
await mkdir(capabilitySourcesDir, { recursive: true });
await writeFile(resolve(capabilitySourcesDir, 'README.md'), capabilityShelfSource);
await writeFile(resolve(capabilitySourcesDir, 'registry-summary.json'), `${JSON.stringify(capabilityShelfSummary, null, 2)}\n`);
await writeFile(resolve(capabilitySourcesDir, 'source-registry.jsonl'), `${capabilitySourceRows.map(row => JSON.stringify(row)).join('\n')}\n`);
const sourceCounts = capabilityShelfSummary.counts;
const foundryProcessSource = await readFile(resolve(capabilityShelfRoot, 'FOUNDRY-PROCESS.md'), 'utf8');
const foundryStateMachine = JSON.parse(await readFile(resolve(capabilityShelfRoot, 'foundry-state-machine.json'), 'utf8'));
const capabilitySourcesBody = `<main class="node-shell"><div class="node-header"><div class="breadcrumbs"><a href="../../">System map</a> / <a href="../">Task graph</a> / Permanent capability sources</div><div class="node-actions"><a class="button" href="foundry-process/">Open repo-to-module process</a><a class="button" href="../base-portfolio/">View 68 families</a><a class="button" href="source-registry.jsonl" download>Download canonical JSONL</a></div></div><div class="node-content"><section class="node-hero"><div><div class="node-kicker">Permanent source-of-truth projection · evidence classes preserved</div><h1>${sourceCounts.total_sources} capability source identities</h1><div class="node-thesis">One joined place for expanded-universe discovery, P03 classification, recovered Foundry/operator nominations and real Bykonz integration feedback. A source can be proven for one reuse shape without being universally qualified.</div></div><aside class="node-status"><span>Current state</span><strong>Joined, not admitted</strong><p>${sourceCounts.client_runtime_precedents} sources carry client runtime precedents; ${sourceCounts.admitted_sources} are admitted Actionist sources.</p></aside></section><div class="research-metrics"><div><strong>${sourceCounts.total_sources}</strong><span>unique identities</span></div><div><strong>${sourceCounts.p03_deeper_evidence}</strong><span>P03 deeper evidence</span></div><div><strong>${sourceCounts.historical_operator_nominations}</strong><span>operator/Foundry signals</span></div><div><strong>${sourceCounts.client_runtime_precedents}</strong><span>Bykonz precedents</span></div></div><section class="node-section"><div class="task-banner"><div><div class="node-kicker">Canonical conversion loop</div><h2>Repository reusability and an incomplete experiment are no longer collapsed</h2><p>The foundry tracks source reusability, adaptation, proof and admission as separate axes across eleven stages.</p></div><a class="button" href="foundry-process/">Open foundry process →</a></div></section><section class="node-section"><div class="artifact-view"><div class="artifact-view-head"><h2>Registry contract and evidence ladder</h2><p><a href="README.md" download>Download Markdown</a> · <a href="registry-summary.json" download>Download summary</a></p></div><pre class="artifact-source">${e(capabilityShelfSource)}</pre></div></section>${renderResearchTable('capability-source-registry', 'Permanent capability source registry', capabilitySourceRows, 'repos')}</div></main>${tableFilterScript}`;
await writeFile(resolve(capabilitySourcesDir, 'index.html'), pageFrame({ title: 'Actionist permanent capability sources', description: `${sourceCounts.total_sources} joined capability source identities with Foundry, P03 and client-runtime evidence.`, body: capabilitySourcesBody, relative: '../..' }));
const foundryProcessDir = resolve(capabilitySourcesDir, 'foundry-process');
await mkdir(foundryProcessDir, { recursive: true });
await writeFile(resolve(foundryProcessDir, 'FOUNDRY-PROCESS.md'), foundryProcessSource);
await writeFile(resolve(foundryProcessDir, 'foundry-state-machine.json'), `${JSON.stringify(foundryStateMachine, null, 2)}\n`);
const foundryProcessBody = `<main class="node-shell"><div class="node-header"><div class="breadcrumbs"><a href="../../../">System map</a> / <a href="../../">Task graph</a> / <a href="../">Capability sources</a> / Foundry process</div><div class="node-actions"><a class="button" href="FOUNDRY-PROCESS.md" download>Download process</a><a class="button" href="foundry-state-machine.json" download>Download state machine</a></div></div><div class="artifact-view"><div class="artifact-view-head"><div class="node-kicker">Eleven stages · four independent axes · no global blocked-repository state</div><h1>Actionist repo-to-module foundry</h1><p>The canonical process from source nomination through capability mapping, reuse-shape choice, bounded adaptation, qualification, scoped admission and production learning.</p></div><pre class="artifact-source">${e(foundryProcessSource)}</pre></div></main>`;
await writeFile(resolve(foundryProcessDir, 'index.html'), pageFrame({ title: 'Actionist repo-to-module foundry process', description: 'Canonical Actionist source-to-module process, state axes and automation boundary.', body: foundryProcessBody, relative: '../../..' }));

const blockHubRoot = resolve(projectRoot, 'knowledge', 'block-hub');
const blockHubSource = await readFile(resolve(blockHubRoot, 'README.md'), 'utf8');
const blockHubRegister = JSON.parse(await readFile(resolve(blockHubRoot, 'block-register.json'), 'utf8'));
const blockHubRecipes = JSON.parse(await readFile(resolve(blockHubRoot, 'composition-recipes.json'), 'utf8'));
const blockHubEdges = await readFile(resolve(blockHubRoot, 'block-source-edges.jsonl'), 'utf8');
const blockHubDir = resolve(siteRoot, 'task-graph', 'block-hub');
await mkdir(blockHubDir, { recursive: true });
await writeFile(resolve(blockHubDir, 'README.md'), blockHubSource);
await writeFile(resolve(blockHubDir, 'block-register.json'), `${JSON.stringify(blockHubRegister, null, 2)}\n`);
await writeFile(resolve(blockHubDir, 'composition-recipes.json'), `${JSON.stringify(blockHubRecipes, null, 2)}\n`);
await writeFile(resolve(blockHubDir, 'block-source-edges.jsonl'), blockHubEdges);
const blockRows = blockHubRegister.blocks.map(item => `<tr data-block-row><td><strong>${e(item.id)}</strong><small>${e(item.layer)} · ${e(item.stage)}</small></td><td><strong>${e(item.name)}</strong><small>${e(item.outcome)}</small></td><td>${e(item.recipes.join(' · '))}</td><td><span class="evidence-pill">${e(item.coverage)}</span><small>${e(item.family_names.join(' · ') || 'No existing family')}</small></td><td><strong>${item.candidate_count}</strong><small>${e(item.top_candidates.map(candidate => candidate.repo).join(' · ') || item.targeted_gap_candidates.map(candidate => candidate.repo).join(' · ') || 'No credible source yet')}</small></td><td>${e(item.surfaces.join(' · '))}</td></tr>`).join('');
const gapRows = blockHubRegister.blocks.filter(item => item.coverage !== 'seeded_candidate_supply').map(item => `<tr><td><strong>${e(item.id)} · ${e(item.name)}</strong></td><td>${e(item.coverage)}</td><td>${item.targeted_gap_candidates.length ? item.targeted_gap_candidates.map(candidate => `<a href="${e(candidate.url)}" target="_blank" rel="noreferrer">${e(candidate.repo)}</a> <small>${e(candidate.candidate_class)}</small>`).join('<br>') : 'No credible targeted lead yet'}</td><td>${e(item.notes || 'Requires focused source-level research.')}</td></tr>`).join('');
const recipeCards = blockHubRecipes.recipes.map(recipe => `<article class="node-card"><div class="node-kicker">${e(recipe.id)}</div><h3>${e(recipe.name)}</h3><p>${e(recipe.thesis)}</p><strong>${recipe.block_count} blocks</strong></article>`).join('');
const blockHubBody = `<main class="node-shell"><div class="node-header"><div class="breadcrumbs"><a href="../../">System map</a> / <a href="../">Task graph</a> / Block Hub</div><div class="node-actions"><a class="button" href="block-register.json" download>Download block register</a><a class="button" href="composition-recipes.json" download>Download recipes</a></div></div><div class="node-content"><section class="node-hero"><div><div class="node-kicker">Business lifecycle → block requirement → source candidates</div><h1>${blockHubRegister.counts.blocks} blocks across ${blockHubRegister.counts.recipes} composition recipes</h1><div class="node-thesis">The permanent join between what SaaS, ecommerce, agencies and course creators need and what existing components, products, engines and repositories might supply.</div></div><aside class="node-status"><span>Current state</span><strong>Requirements mapped, source unqualified</strong><p>${blockHubRegister.counts.seeded_candidate_supply} blocks have seeded candidate supply; ${blockHubRegister.counts.thin_or_gap} remain thin or Actionist-owned.</p></aside></section><div class="research-metrics"><div><strong>${blockHubRegister.counts.surface_blocks}</strong><span>surface blocks</span></div><div><strong>${blockHubRegister.counts.product_blocks}</strong><span>product blocks</span></div><div><strong>${blockHubRegister.counts.capability_blocks + blockHubRegister.counts.engine_blocks}</strong><span>capabilities + engines</span></div><div><strong>${blockHubRegister.counts.source_edges}</strong><span>ranked source edges</span></div></div><section class="node-section"><h2>Composition recipes</h2><div class="node-grid">${recipeCards}</div></section><section class="node-section"><div class="dataset-head"><div><h2>Complete block register</h2><p>Filter by job, lifecycle stage, recipe, candidate or coverage state.</p></div><input type="search" placeholder="Filter 80 blocks…" aria-label="Filter Block Hub" data-block-filter></div><div class="table-scroll"><table class="artifact-table research-table"><thead><tr><th>ID / level</th><th>Block and outcome</th><th>Recipes</th><th>Coverage</th><th>Source candidates</th><th>Required surfaces</th></tr></thead><tbody>${blockRows}</tbody></table></div></section><section class="node-section"><h2>Thin blocks and targeted gap results</h2><div class="table-scroll"><table class="artifact-table"><thead><tr><th>Block</th><th>State</th><th>Targeted leads</th><th>Interpretation</th></tr></thead><tbody>${gapRows}</tbody></table></div></section><section class="node-section"><div class="artifact-view"><div class="artifact-view-head"><h2>Hub method and boundaries</h2><p><a href="README.md" download>Download Markdown</a> · <a href="block-source-edges.jsonl" download>Download source edges</a></p></div><pre class="artifact-source">${e(blockHubSource)}</pre></div></section></div></main><script>const input=document.querySelector('[data-block-filter]');input.addEventListener('input',()=>{const q=input.value.toLowerCase();document.querySelectorAll('[data-block-row]').forEach(row=>row.hidden=!row.textContent.toLowerCase().includes(q));});</script>`;
await writeFile(resolve(blockHubDir, 'index.html'), pageFrame({ title: 'Actionist Block Hub', description: 'Business lifecycle, block requirements, composition recipes and candidate sources for Actionist.', body: blockHubBody, relative: '../..' }));

const registry = parts.map(part => ({ ...part, slug: slugs[part.id], page: `parts/${part.id.toLowerCase()}/`, resources: (resources[part.id] || []).map(([label, path]) => ({ label, path })), current_run: currentRuns[part.id] || null, latest_findings: latestFindings[part.id] || [], workstream_root: `research/workstreams/${part.id}-${slugs[part.id]}/` }));
await writeFile(resolve(siteRoot, 'data', 'parts.json'), `${JSON.stringify(registry, null, 2)}\n`);
await writeFile(resolve(siteRoot, 'data', 'task-graph.json'), `${JSON.stringify({ schema_version: 'actionist.task-graph.v2', status: 'sprint_2_converged_with_holds', sprints, convergence, decision_timeline: { updated: '2026-08-28', page: 'task-graph/timeline/', pilot_priority_group: ['saas', 'ecommerce', 'marketing_social_media_agencies'], adjacent_candidate: 'course_creators', locked: false }, block_hub: { ...blockHubRegister.counts, page: 'task-graph/block-hub/', status: blockHubRegister.status }, base_portfolio: { families: universeCounts.families, horizontal_products: universeCounts.horizontal_product, shared_capabilities: universeCounts.shared_capability, vertical_operating_systems: universeCounts.vertical_operating_system, repository_seeds: universeCounts.unique_seed_repositories, thin_families: universeCounts.thin_families, prior_deep_bench: 100, page: 'task-graph/base-portfolio/' }, capability_source_registry: { ...sourceCounts, page: 'task-graph/capability-sources/', process_page: 'task-graph/capability-sources/foundry-process/' }, framework_registry: { frameworks: frameworkSummary.framework_count, maturity: frameworkSummary.maturity_counts, categories: frameworkSummary.category_counts, gaps: frameworkSummary.gap_count, page: 'task-graph/frameworks/', status: 'research_only' }, common_reads: commonReads, output_contract: outputContract }, null, 2)}\n`);
process.stdout.write(`SYSTEM_PAGES_BUILD_PASS parts=${parts.length} sprints=${sprints.length} lanes=${sprints.reduce((sum, sprint) => sum + sprint.lanes.length, 0)}\n`);
