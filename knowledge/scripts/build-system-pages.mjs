#!/usr/bin/env node

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
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

await mkdir(resolve(siteRoot, 'data'), { recursive: true });
await mkdir(resolve(siteRoot, 'parts'), { recursive: true });

for (const part of parts) {
  const dir = resolve(siteRoot, 'parts', part.id.toLowerCase());
  await mkdir(dir, { recursive: true });
  const resourceRows = (resources[part.id] || []).map(([label, path]) => `<tr><td>${e(label)}</td><td>${localOrLink(path)}</td><td><span class="artifact-state">existing</span></td></tr>`).join('');
  const futurePath = `research/workstreams/${part.id}-${slugs[part.id]}/runs/&lt;run-id&gt;/`;
  const depLinks = part.deps.map(id => `<a class="dependency" href="../${id.toLowerCase()}/">${id} · ${e(parts.find(p => p.id === id).title)}</a>`).join('');
  const body = `<main class="node-shell"><div class="node-header"><div class="breadcrumbs"><a href="../../">System map</a> / ${part.group} / ${part.id}</div><div class="node-actions"><a class="button" href="../../task-graph/">View task graph</a></div></div><div class="node-content"><section class="node-hero"><div><div class="node-kicker">${part.id} · ${e(part.group)} knowledge node</div><h1>${e(part.title)}</h1><div class="node-thesis">${e(part.thesis)}</div></div><aside class="node-status"><span>Current research state</span><strong>${e(part.status)}</strong><p>This page is the permanent index for evidence, agent reports, decisions and experiments for this moving part.</p></aside></section><section class="node-section"><h2>Problem boundary</h2><p>What this subsystem owns and what it must hand to the rest of Actionist.</p><div class="node-grid"><article class="node-card"><h3>What it owns</h3>${bullets(part.owns)}</article><article class="node-card lilac"><h3>What research already found</h3>${bullets(part.known)}</article><article class="node-card wide"><h3>Open first-principles questions</h3>${bullets(part.open)}</article><article class="node-card"><h3>Inputs</h3>${bullets(part.inputs)}</article><article class="node-card"><h3>Outputs</h3>${bullets(part.outputs)}</article><article class="node-card wide"><h3>Connected knowledge nodes</h3><div class="dependency-list">${depLinks}</div></article></div></section><section class="node-section"><h2>Scientific research protocol</h2><p>Every research owner uses the same evidence funnel. No padding is allowed when a denominator is inapplicable or evidence is unavailable.</p><div class="research-protocol">${protocolHtml}</div></section><section class="node-section"><h2>Evidence and agent outputs</h2><p>Existing research remains source evidence. New agent packets are written to one owned workstream directory and linked here after verification.</p><table class="artifact-table"><thead><tr><th>Artifact</th><th>Location</th><th>State</th></tr></thead><tbody>${resourceRows}<tr><td>Future verified agent packet</td><td><code>${futurePath}</code></td><td><span class="artifact-state">planned</span></td></tr></tbody></table></section><section class="node-section"><div class="task-banner"><div><h2>Agent-sized objective</h2><p>${e(part.agent)}</p></div><a class="button" href="../../task-graph/">See sprint assignment →</a></div></section></div></main>`;
  await writeFile(resolve(dir, 'index.html'), pageFrame({ title: part.title, description: part.thesis, body }));
}

const sprintHtml = sprints.map(sprint => `<section class="sprint"><div class="sprint-head"><div class="sprint-no">${sprint.id}</div><div><h2>${e(sprint.title)}</h2><p>${e(sprint.purpose)}</p></div><div class="sprint-gate">Gate · ${e(sprint.gate)}</div></div><div class="lane-grid">${sprint.lanes.map(lane => `<article class="lane"><div class="lane-code">${lane.id} · OPUS OWNER</div><h3>${e(lane.title)}</h3><div class="lane-parts">${lane.parts.map(id => `<a href="../parts/${id.toLowerCase()}/">${id}</a>`).join('')}</div><p>${e(lane.result)}</p>${bullets(lane.notes)}</article>`).join('')}</div></section>`).join('');
const taskBody = `<main class="node-shell"><div class="node-header"><div class="breadcrumbs"><a href="../">System map</a> / Research execution graph</div><div class="node-actions"><a class="button" href="../">All 15 parts</a></div></div><div class="node-content task-page"><section class="node-hero"><div><div class="node-kicker">Three sprints · five Opus owners per sprint</div><h1>Research in parallel. Converge with evidence.</h1><div class="node-thesis">This graph compresses the 15 moving parts into three sprints by distinguishing independent research from dependent framework synthesis and final pilot convergence.</div></div><aside class="node-status"><span>Dispatch state</span><strong>Designed, not started</strong><p>Review the ownership and gates before spending the Opus capacity.</p></aside></section><section class="node-section"><div class="graph-summary"><div><strong>3</strong><span>bounded sprints</span></div><div><strong>5</strong><span>parallel Opus owners per sprint</span></div><div><strong>15</strong><span>permanent knowledge nodes</span></div></div><div class="dependency-legend"><span>Research can run in parallel</span><span>Framework/build consumes earlier evidence</span></div>${sprintHtml}</section><section class="node-section"><h2>How every agent gets enough context</h2><p>Agents receive a compact index and exact source routes—not 500 MB of raw files stuffed into one prompt.</p><div class="context-pack"><article class="context-card"><h3>Required context</h3>${bullets(commonReads)}</article><article class="context-card"><h3>Required return packet</h3>${bullets(outputContract)}</article><article class="context-card"><h3>Compute discipline</h3>${bullets(['One persistent Opus owner per lane; workers never self-fan', 'Checkpoint after prior audit, commercial survey, OSS survey and first-principles synthesis', 'Exact non-overlapping write ownership by part ID', 'Compact callback; full evidence remains in artifacts', 'Independent verifier before any page or contract is promoted'])}</article></div></section><section class="node-section"><h2>Location and promotion contract</h2><div class="node-grid"><article class="node-card"><h3>Write location</h3><p><code>research/workstreams/&lt;part-id&gt;-&lt;slug&gt;/runs/&lt;run-id&gt;/</code></p><p>Each lane may own multiple part directories, but no two live agents write the same part.</p></article><article class="node-card lilac"><h3>Promotion</h3><p>A coordinator validates counts, links, source classes, contradictions and hashes, then adds verified artifacts to the relevant dedicated page. Historical evidence is never rewritten.</p></article></div></section></div></main>`;
await mkdir(resolve(siteRoot, 'task-graph'), { recursive: true });
await writeFile(resolve(siteRoot, 'task-graph', 'index.html'), pageFrame({ title: 'Task graph', description: 'Three-sprint parallel research graph for the 15 Actionist moving parts.', body: taskBody, relative: '..' }));

const registry = parts.map(part => ({ ...part, slug: slugs[part.id], page: `parts/${part.id.toLowerCase()}/`, resources: (resources[part.id] || []).map(([label, path]) => ({ label, path })), workstream_root: `research/workstreams/${part.id}-${slugs[part.id]}/` }));
await writeFile(resolve(siteRoot, 'data', 'parts.json'), `${JSON.stringify(registry, null, 2)}\n`);
await writeFile(resolve(siteRoot, 'data', 'task-graph.json'), `${JSON.stringify({ schema_version: 'actionist.task-graph.v1', status: 'designed_not_started', sprints, common_reads: commonReads, output_contract: outputContract }, null, 2)}\n`);
process.stdout.write(`SYSTEM_PAGES_BUILD_PASS parts=${parts.length} sprints=${sprints.length} lanes=${sprints.reduce((sum, sprint) => sum + sprint.lanes.length, 0)}\n`);
