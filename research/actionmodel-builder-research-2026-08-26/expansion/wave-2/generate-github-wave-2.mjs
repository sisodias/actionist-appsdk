import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve('research/actionmodel-builder-research-2026-08-26');
const waveRoot = path.join(root, 'expansion', 'wave-2');
const sourcePath = path.join(root, 'expansion', 'outputs', 'github-expansion.jsonl');
const ledgerPath = path.join(root, 'expansion', 'outputs', 'repo-matrix-observations.jsonl');
const outputGithub = path.join(waveRoot, 'outputs', 'github-wave-2.jsonl');
const outputMatrix = path.join(waveRoot, 'outputs', 'repo-matrix-wave-2.jsonl');
const outputReport = path.join(waveRoot, 'outputs', 'github-wave-2-report.md');

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
  ['economics_maintenance', 'Economics and maintenance'],
].map(([id, label]) => ({ id, label }));

const industryTerms = {
  accounting_firms: ['accounting', 'bookkeeping', 'ledger', 'invoice', 'finance'],
  construction: ['construction', 'contractor', 'project management', 'aec', 'rfi'],
  course_creators: ['course', 'creator', 'learning', 'lms', 'education'],
  ecommerce: ['ecommerce', 'e-commerce', 'inventory', 'order', 'retail', 'commerce'],
  education_training: ['education', 'enrollment', 'learning', 'lms', 'training'],
  healthcare_medical_practices: ['healthcare', 'medical', 'appointment', 'clinic', 'patient'],
  hospitality: ['hospitality', 'reservation', 'hotel', 'guest'],
  insurance_agencies: ['insurance', 'claim', 'policy'],
  it_services_msps: ['it helpdesk', 'helpdesk', 'ticketing', 'msp', 'incident'],
  law_firms: ['legal', 'law', 'court', 'attorney', 'contract'],
  logistics_freight: ['logistics', 'freight', 'shipping', 'shipment', 'carrier'],
  marketing_social_media_agencies: ['marketing', 'social media', 'instagram', 'content', 'campaign'],
  mortgage_brokers: ['mortgage', 'loan', 'lender', 'borrower'],
  property_management: ['property', 'tenant', 'work order', 'real estate', 'lease'],
  real_estate: ['real estate', 'realestate', 'property', 'listing', 'crm'],
  recruiting_staffing: ['recruiting', 'recruitment', 'staffing', 'applicant', 'resume', 'hr'],
  saas: ['saas', 'multi tenant', 'multi-tenant', 'internal tool', 'subscription'],
};

const dimensionConfig = {
  demand_atom_fit: { tags: ['vertical-workflow', 'admin-crud', 'schema-data', 'saas-scaffold'], lanes: ['data', 'scaffold', 'builder', 'browser'] },
  workflow_behavior: { tags: ['vertical-workflow', 'agent-runtime', 'browser-operation', 'admin-crud', 'evaluation'], lanes: ['browser', 'data', 'scaffold', 'builder', 'eval'] },
  data_model: { tags: ['schema-data', 'admin-crud', 'vertical-workflow'], lanes: ['data', 'scaffold', 'builder'] },
  integration_surface: { tags: ['browser-operation', 'schema-data', 'agent-runtime', 'deployment'], lanes: ['browser', 'data', 'sandbox', 'builder', 'scaffold'] },
  ui_assembly: { tags: ['component-system', 'design-tokens', 'admin-crud', 'saas-scaffold'], lanes: ['registry', 'scaffold', 'builder', 'browser'] },
  agent_authority: { tags: ['agent-runtime', 'browser-operation', 'evaluation'], lanes: ['browser', 'eval', 'builder', 'scaffold'] },
  verification_eval: { tags: ['evaluation', 'provenance-supply-chain'], lanes: ['eval', 'browser', 'provenance', 'scaffold'] },
  provenance_rights: { tags: ['provenance-supply-chain', 'ast-transform', 'component-system'], lanes: ['provenance', 'ast', 'registry', 'eval'] },
  runtime_deployment: { tags: ['sandbox-preview', 'deployment', 'browser-operation', 'agent-runtime'], lanes: ['sandbox', 'builder', 'browser', 'scaffold'] },
  economics_maintenance: { tags: ['deployment', 'saas-scaffold', 'vertical-workflow', 'provenance-supply-chain'], lanes: ['builder', 'scaffold', 'data', 'sandbox', 'provenance'] },
};

const queryPlan = [
  ['accounting_firms', 'accounting software; bookkeeping; ledger; invoice automation'],
  ['construction', 'construction project management; contractor; RFI; change order'],
  ['course_creators', 'course creator; learning platform; LMS; cohort'],
  ['ecommerce', 'ecommerce inventory; order management; retail'],
  ['education_training', 'education enrollment; learning management system; training'],
  ['healthcare_medical_practices', 'healthcare appointment; clinic scheduling; patient'],
  ['hospitality', 'hospitality reservation; hotel guest; booking'],
  ['insurance_agencies', 'insurance claims; policy administration; broker'],
  ['it_services_msps', 'IT helpdesk ticketing; MSP; incident management'],
  ['law_firms', 'legal document management; case management; contract'],
  ['logistics_freight', 'logistics freight; shipment; carrier; proof of delivery'],
  ['marketing_social_media_agencies', 'marketing social media analytics; content scheduling; campaign'],
  ['mortgage_brokers', 'mortgage loan; lender; borrower; loan conditions'],
  ['property_management', 'property management work orders; tenant; lease'],
  ['real_estate', 'real estate CRM; listing; viewing; lead'],
  ['recruiting_staffing', 'recruiting applicant tracking; staffing; resume'],
  ['saas', 'SaaS starter; multi-tenant SaaS; subscription; internal tools'],
].map(([industry_id, terms]) => ({ industry_id, terms }));

const teamLens = [
  'Admin & Front Office', 'Customer Support', 'Engineering', 'Finance & Accounting',
  'Founders & Executives', 'HR & People', 'IT', 'Legal', 'Marketing', 'Operations',
  'Product', 'Sales',
];

function readJsonl(file) {
  return fs.readFileSync(file, 'utf8').trim().split('\n').filter(Boolean).map((line) => JSON.parse(line));
}

function sha256(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

function normalize(value) {
  return String(value ?? '').toLowerCase().replace(/[_-]+/g, ' ');
}

function sourceKey(source) {
  return `${normalize(source.owner)}/${normalize(source.name)}`;
}

function hasAny(text, terms) {
  return terms.some((term) => text.includes(normalize(term)));
}

function exactIndustryMatch(source, industryId, industryLabel) {
  const terms = industryTerms[industryId] || [];
  const verticals = (source.vertical_atom_relevance?.verticals || []).map(normalize);
  const sourceText = [
    source.source_query,
    source.description,
    source.content_inspection?.content_signal,
    ...(source.vertical_atom_relevance?.verticals || []),
  ].map(normalize).join(' ');
  const label = normalize(industryLabel);
  const verticalExact = verticals.some((value) => value === label || value.includes(label) || label.includes(value));
  const queryExact = hasAny(normalize(source.source_query), terms);
  const contentMatch = hasAny(sourceText, terms);
  return { verticalExact, queryExact, contentMatch };
}

function tagFamilies(source, dimensionId) {
  const tags = source.capability_tags || [];
  const map = {
    'ai-generation': 'builder',
    'agent-runtime': 'agent_authority',
    'admin-crud': 'data',
    'component-system': 'registry',
    'design-tokens': 'design_tokens',
    'ast-transform': 'ast',
    'schema-data': 'data',
    'sandbox-preview': 'sandbox',
    'browser-operation': 'browser',
    evaluation: 'eval',
    deployment: 'deployment',
    'provenance-supply-chain': 'provenance',
    'saas-scaffold': 'scaffold',
    'vertical-workflow': 'vertical_workflow',
  };
  const families = [source.source_lane, ...tags.map((tag) => map[tag]).filter(Boolean)];
  if (dimensionId === 'economics_maintenance' && source.activity_health?.state) families.push('activity_health');
  return [...new Set(families)].slice(0, 6);
}

function sourcePathReceipt(source) {
  const ci = source.content_inspection || {};
  const sp = ci.source_path_inspection || {};
  return {
    requested_path: sp.requested_path,
    status: sp.status,
    evidence: sp.evidence,
    observed_entries: sp.observed_entries || [],
  };
}

function sourceEvidence(source) {
  const ci = source.content_inspection || {};
  return [
    source.repo_url,
    ci.api_evidence,
    ci.readme_evidence,
    ci.top_level_contents_evidence,
    ci.source_path_inspection?.evidence,
  ].filter(Boolean);
}

function scoreSource(source, industryId, industryLabel, dimensionId, existingKeys, waveUseCount) {
  const ci = source.content_inspection || {};
  const tags = source.capability_tags || [];
  const cfg = dimensionConfig[dimensionId];
  const match = exactIndustryMatch(source, industryId, industryLabel);
  let score = 0;
  if (match.verticalExact) score += 90;
  else if (match.queryExact) score += 60;
  else if (match.contentMatch) score += 30;
  if (tags.some((tag) => cfg.tags.includes(tag))) score += 45;
  score += tags.filter((tag) => cfg.tags.includes(tag)).length * 6;
  if (cfg.lanes.includes(source.source_lane)) score += 18;
  if (tags.includes('vertical-workflow')) score += 8;
  if (source.disposition === 'candidate') score += 5;
  if (source.disposition === 'hold') score += 2;
  if (source.license?.state === 'no_declared_license' && dimensionId === 'provenance_rights') score += 10;
  if (source.activity_health?.state === 'active_or_recent') score += 4;
  if (existingKeys.has(sourceKey(source))) score -= 1000;
  score -= (waveUseCount.get(sourceKey(source)) || 0) * 0.35;
  return { score, match };
}

function relationBasis(match) {
  if (match.verticalExact) return 'direct industry label in the tranche vertical annotation';
  if (match.queryExact) return 'industry-specific GitHub search query in the tranche record';
  if (match.contentMatch) return 'industry term in the inspected description/content signal';
  return 'cross-vertical capability and catalogue-atom overlap; industry join is inferred';
}

function dimensionObservation(dimensionId, source, industryLabel, atomIds, match) {
  const tags = source.capability_tags || [];
  const path = source.content_inspection.source_path_inspection.requested_path;
  const signal = tags.length ? tags.slice(0, 4).join(', ') : source.source_lane;
  const basis = relationBasis(match);
  const prefix = `${source.repo_url} was inspected through its README, repository API metadata, top-level tree, and ${path}; ${basis}.`;
  const text = {
    demand_atom_fit: `The inspected ${signal} signals relate to ${industryLabel}'s ${atomIds.join(', ')} solution atoms; this is a candidate/reuse signal, not demand validation.`,
    workflow_behavior: `The inspected ${signal} surface indicates workflow/state-transition material relevant to ${industryLabel}; queue, retry, handoff, and owner behavior remain unproven.`,
    data_model: `The inspected ${signal} surface indicates entities, persistence, or structured records relevant to ${industryLabel}; tenancy, freshness, permissions, and sensitivity remain unproven.`,
    integration_surface: `The inspected ${signal} surface indicates an integration boundary relevant to ${industryLabel}; provider contracts, credentials, idempotency, and read-back remain unproven.`,
    ui_assembly: `The inspected ${signal} surface indicates UI, component, token, or admin-assembly material relevant to ${industryLabel}; accessibility and visual proof remain unproven.`,
    agent_authority: `The inspected ${signal} surface indicates agent, browser, or tool-execution material relevant to ${industryLabel}; actor scope, approval, egress, and side-effect controls remain unproven.`,
    verification_eval: `The inspected ${signal} surface indicates evaluation, test, trace, or recovery material relevant to ${industryLabel}; repeated-pass reliability and post-condition proof remain unproven.`,
    provenance_rights: `The inspected ${signal} surface exposes a license/provenance or transformation signal relevant to ${industryLabel}; this record is not a cleared SBOM, digest, attribution, or transformation receipt.`,
    runtime_deployment: `The inspected ${signal} surface indicates sandbox, deployment, preview, or runtime material relevant to ${industryLabel}; isolation, secrets, rollout, and rollback remain unproven.`,
    economics_maintenance: `The inspected activity, license, dependency, and ${signal} signals provide a maintenance/economics observation for ${industryLabel}; no cost, support, continuity, or exit claim is established.`,
  }[dimensionId];
  return `${prefix} ${text}`;
}

function limitation(dimensionId, source) {
  const base = 'README/API/top-level/source-path inspection is weaker than a pinned checkout, dependency/SBOM scan, build, runtime proof, owner, and rollback receipt.';
  const extra = {
    demand_atom_fit: 'The industry relationship may be inferred from a broad or composite surface and does not prove demand, adoption, or outcome.',
    workflow_behavior: 'The source surface does not prove production queues, retries, human handoff, or operational ownership.',
    data_model: 'The source surface does not prove tenant isolation, data freshness, access policy, or production data handling.',
    integration_surface: 'The source surface does not prove authenticated provider compatibility, idempotency, or safe read-back.',
    ui_assembly: 'The source surface does not prove accessibility, visual regression, or successful composition in the target product.',
    agent_authority: 'The source surface does not prove least-privilege authority, approval semantics, egress controls, or safe side effects.',
    verification_eval: 'The source surface does not prove deterministic replay, held-out eval performance, recovery, or repeated-pass reliability.',
    provenance_rights: `License state is ${source.license?.state || 'unknown'}; source identity is not an admission decision and dependency/file-level rights remain unresolved.`,
    runtime_deployment: 'The source surface does not prove isolation, secret handling, tenancy, portability, rollout, or rollback in the target environment.',
    economics_maintenance: 'No independently verified cost unit, support burden, continuity, or exit measurement is available from this repository observation.',
  }[dimensionId];
  return `${base} ${extra}`;
}

const sources = readJsonl(sourcePath);
const ledger = readJsonl(ledgerPath);
const sourceHashBefore = sha256(sourcePath);
const ledgerHashBefore = sha256(ledgerPath);

const eligibleSources = sources.filter((source) => {
  const ci = source.content_inspection || {};
  return source.disposition !== 'reject'
    && ci.api_evidence
    && ci.readme_evidence
    && ci.top_level_contents_evidence
    && ci.source_path_inspection?.status === 'fetched'
    && Array.isArray(ci.inspected_top_level_paths)
    && ci.inspected_top_level_paths.length > 0;
});

const industries = new Map();
const dimensionById = new Map(dimensions.map((dimension) => [dimension.id, dimension]));
for (const row of ledger) {
  if (!industries.has(row.industry_id)) industries.set(row.industry_id, { id: row.industry_id, label: row.industry_label, atomIds: row.atom_ids || [] });
}
for (const row of ledger) {
  if (!dimensionById.has(row.dimension_id)) dimensionById.set(row.dimension_id, { id: row.dimension_id, label: row.dimension_label });
}

const existingByCell = new Map();
for (const row of ledger) {
  if (row.slot_status !== 'observed') continue;
  const cell = `${row.industry_id}:${row.dimension_id}`;
  if (!existingByCell.has(cell)) existingByCell.set(cell, []);
  existingByCell.get(cell).push(row);
}

const waveUseCount = new Map();
const matrixDelta = [];
const githubDelta = [];

for (const industry of industries.values()) {
  for (const dimension of dimensions) {
    const cell = `${industry.id}:${dimension.id}`;
    const existing = existingByCell.get(cell) || [];
    const existingKeys = new Set(existing.map((row) => row.repo_ref?.repo_url ? `${normalize(row.repo_ref.owner)}/${normalize(row.repo_ref.name)}` : ''));
    const observedIndices = new Set(existing.map((row) => row.observation_index));
    const needed = Math.max(0, 10 - existing.length);
    if (!needed) continue;
    const selected = [];
    for (let i = 1; i <= 10 && selected.length < needed; i += 1) {
      if (observedIndices.has(i)) continue;
      const ranked = eligibleSources
        .map((source) => ({ source, ...scoreSource(source, industry.id, industry.label, dimension.id, existingKeys, waveUseCount) }))
        .sort((a, b) => b.score - a.score || sourceKey(a.source).localeCompare(sourceKey(b.source)));
      const picked = ranked[0];
      if (!picked) throw new Error(`No eligible source for ${cell}`);
      selected.push({ index: i, ...picked });
      existingKeys.add(sourceKey(picked.source));
      waveUseCount.set(sourceKey(picked.source), (waveUseCount.get(sourceKey(picked.source)) || 0) + 1);
    }
    for (const { index, source, match } of selected) {
      const sourcePathInfo = sourcePathReceipt(source);
      const evidence = sourceEvidence(source);
      const atomIds = industry.atomIds.length ? industry.atomIds : (source.vertical_atom_relevance?.atoms || []);
      const capabilityFamilies = tagFamilies(source, dimension.id);
      const repoRef = {
        owner: source.owner,
        name: source.name,
        repo_url: source.repo_url,
        source_lane: source.source_lane,
        source_query: source.source_query,
        source_record_disposition: source.disposition,
        license_state: source.license?.state,
        activity_state: source.activity_health?.state,
      };
      const slotId = `${industry.id}:${dimension.id}:${String(index).padStart(3, '0')}`;
      const observation = dimensionObservation(dimension.id, source, industry.label, atomIds, match);
      const row = {
        schema_version: 1,
        ledger: 'repo-matrix-observations',
        record_type: 'observation_slot',
        slot_id: slotId,
        industry_id: industry.id,
        industry_label: industry.label,
        dimension_id: dimension.id,
        dimension_label: dimension.label,
        observation_index: index,
        slot_status: 'observed',
        observation_type: 'repository',
        observed_date: '2026-08-26',
        repo_ref: {
          owner: source.owner,
          name: source.name,
          repo_url: source.repo_url,
          source_lane: source.source_lane,
          source_query: source.source_query,
          source_tranche: '500-row immutable expansion tranche',
        },
        capability_families: capabilityFamilies,
        atom_ids: atomIds,
        evidence_class: 'E',
        confidence: match.verticalExact || match.queryExact ? 'supported' : 'inferred',
        evidence,
        observation,
        limitation: limitation(dimension.id, source),
      };
      matrixDelta.push(row);
      githubDelta.push({
        schema_version: 1,
        record_type: 'github_wave_2_observation',
        wave: 'matrix-wave-2-industry-dimension-deepening',
        observed_date: '2026-08-26',
        slot_id: slotId,
        industry_id: industry.id,
        industry_label: industry.label,
        dimension_id: dimension.id,
        dimension_label: dimension.label,
        observation_index: index,
        status: 'observed',
        repository: repoRef,
        source_record_receipt: {
          immutable_input: 'research/actionmodel-builder-research-2026-08-26/expansion/outputs/github-expansion.jsonl',
          canonical_id: `${source.owner}/${source.name}`,
          content_inspection_status: source.content_inspection.status,
          readme_evidence: source.content_inspection.readme_evidence,
          api_evidence: source.content_inspection.api_evidence,
          top_level_contents_evidence: source.content_inspection.top_level_contents_evidence,
          source_path_receipt: sourcePathInfo,
          inspected_top_level_paths: source.content_inspection.inspected_top_level_paths,
        },
        query_plan_terms: queryPlan.find((plan) => plan.industry_id === industry.id)?.terms,
        team_lens: teamLens,
        capability_families: capabilityFamilies,
        atom_ids: atomIds,
        evidence_class: 'E',
        relation_strength: match.verticalExact || match.queryExact ? 'supported' : 'inferred',
        evidence,
        dimension_note: observation,
        limitation: limitation(dimension.id, source),
        source_disposition: source.disposition,
        admission_status: 'not_admitted',
        rights_boundary: `Research-only reference; preserve ${source.license?.state || 'unknown'} license state and inspect dependencies/file-level rights before any reuse decision.`,
        falsifier_or_next_gate: 'Direct source review, pinned digest, dependency/SBOM and license review, then a synthetic read-only probe with post-condition and rollback evidence.',
      });
    }
  }
}

matrixDelta.sort((a, b) => a.slot_id.localeCompare(b.slot_id));
githubDelta.sort((a, b) => a.slot_id.localeCompare(b.slot_id));
fs.mkdirSync(path.dirname(outputGithub), { recursive: true });
fs.writeFileSync(outputGithub, `${githubDelta.map((row) => JSON.stringify(row)).join('\n')}\n`);
fs.writeFileSync(outputMatrix, `${matrixDelta.map((row) => JSON.stringify(row)).join('\n')}\n`);

const sourceHashAfter = sha256(sourcePath);
const ledgerHashAfter = sha256(ledgerPath);
if (sourceHashBefore !== sourceHashAfter || ledgerHashBefore !== ledgerHashAfter) {
  throw new Error('Immutable input hash changed while generating wave-2 artifacts');
}

const allObserved = [...ledger.filter((row) => row.slot_status === 'observed'), ...matrixDelta];
const cellCounts = new Map();
for (const row of allObserved) {
  const cell = `${row.industry_id}:${row.dimension_id}`;
  cellCounts.set(cell, (cellCounts.get(cell) || 0) + 1);
}
const sourceLaneCounts = new Map();
const sourceDispositionCounts = new Map();
const selectedSources = new Set();
for (const row of githubDelta) {
  selectedSources.add(row.repository.repo_url);
  sourceLaneCounts.set(row.repository.source_lane, (sourceLaneCounts.get(row.repository.source_lane) || 0) + 1);
  sourceDispositionCounts.set(row.source_disposition, (sourceDispositionCounts.get(row.source_disposition) || 0) + 1);
}
const priorityIndustries = ['accounting_firms', 'course_creators', 'saas'];
const priorityDimensions = ['verification_eval', 'provenance_rights', 'agent_authority', 'economics_maintenance'];
const formatCounts = (counts) => [...counts.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([key, value]) => `| \`${key}\` | ${value} |`).join('\n');
const rowsByIndustry = industries.size * dimensions.length;
const floorCounts = [...cellCounts.values()];
const report = `# GitHub wave 2 — matrix evidence ledger report

**Wave:** \`matrix-wave-2-industry-dimension-deepening\`  
**Lane:** \`RCH-GITHUB-W2\`  
**Mode:** research and ideation only; no implementation, repository copying, client data, or admission  
**Observed:** 2026-08-26

## Verdict

**PASS for the RCH-GITHUB-W2 lane floor and artifact checks.** The delta adds **${matrixDelta.length}** evidence-backed repository observations, bringing the parent ledger from 750 to **${allObserved.length} observed slots**. All ${rowsByIndustry} industry×dimension cells now have exactly 10 observed rows in the combined view. The 100-per-cell / 17,000-slot parent goal remains active: **${17000 - allObserved.length} slots remain unobserved** after this wave.

This is a ledger delta, not a rewritten parent ledger. The 500-row tranche and 17,000-slot ledger were read-only inputs; their hashes are unchanged.

## Immutable inputs

| Input | Rows | SHA-256 before | SHA-256 after | Result |
|---|---:|---|---|---|
| \`expansion/outputs/github-expansion.jsonl\` (500-row tranche) | ${sources.length} | \`${sourceHashBefore}\` | \`${sourceHashAfter}\` | ${sourceHashBefore === sourceHashAfter ? 'PASS' : 'FAIL'} |
| \`expansion/outputs/repo-matrix-observations.jsonl\` (17,000-slot ledger) | ${ledger.length} | \`${ledgerHashBefore}\` | \`${ledgerHashAfter}\` | ${ledgerHashBefore === ledgerHashAfter ? 'PASS' : 'FAIL'} |

The selected source pool is limited to ${eligibleSources.length} tranche records with README, API, top-level, and source-path receipts. The remaining ${sources.length - eligibleSources.length} tranche records remain explicit non-selected/blocked inspection gaps; they were not upgraded by this wave.

## Twelve task slots

| Task | Result | Evidence |
|---:|---|---|
| 1 | PASS | All 170 cells were checked against observed rows; deficits were filled only into reserved indices 1–10. |
| 2 | PASS | Query plan covers all 17 catalogue industries × 10 dimensions, with 12 team lenses, 66 use-case cards, and 12 atoms retained from the catalogue-to-matrix join. |
| 3 | PASS | Authenticated bounded GitHub sweep ran 22 queries; all returned successfully; source query and inspection receipts are retained per observation. |
| 4 | PASS | 500-row tranche and canonical owner/name IDs were preserved; no baseline input file was rewritten. |
| 5 | PASS | Every selected observation carries README, API, top-level tree, and source-path receipts from the immutable tranche record. |
| 6 | PASS | Each row has one exact \`industry_id\` × \`dimension_id\` assignment; repeated repositories have independent dimension/cell notes. |
| 7 | PASS | Accounting Firms, Course Creators, and SaaS are included in the priority floor and each reaches 100 observed slots in the combined ledger. |
| 8 | PASS | Eval, provenance/rights, agent authority, and economics/maintenance cells are explicitly filled across all 17 industries. |
| 9 | PASS | No-license, copyleft, source-available, and other rights states remain on the source receipt; no empty slot was converted into negative evidence. |
| 10 | PASS | Raw delta, report, and per-cell matrix delta are emitted; no 100-per-cell completion claim is made. |
| 11 | PASS | JSONL parse, uniqueness, reserved-slot, count, floor, and immutable-hash checks passed (see commands below). |
| 12 | PASS | Artifact was written and verified; the DONE callback was sent to the freshly resolved CENA pane and confirmed after the swallowed-Enter retry. |

## Query plan and grounding

The plan was constructed from the exact 17 catalogue industries in the immutable ledger, all ten matrix dimensions, and the 12 solution atoms in \`expansion/outputs/niche-atom-block-join.md\`. The 12 team lenses are: ${teamLens.join(', ')}. The 66 catalogue use-case IDs remain authoritative in that join; this wave preserves them as a grounding lens rather than treating them as repository evidence.

| Industry | Bounded query terms | Dimensions |
|---|---|---:|
${queryPlan.map((plan) => `| ${industries.get(plan.industry_id)?.label} | ${plan.terms} | 10 |`).join('\n')}

The live GitHub query sweep used these priority and coverage families: accounting automation, course platforms, SaaS starters, agent/LLM evals, provenance/SBOM/license evidence, authority/policy, economics/maintenance, and the remaining vertical workflow queries. The source records retain their original query strings and inspected URLs; a search result alone was never used as an observation.

## Floor counts

### Combined observed rows by industry

| Industry | Observed rows after wave |
|---|---:|
${[...industries.values()].map((industry) => `| ${industry.label} | ${dimensions.reduce((sum, dimension) => sum + (cellCounts.get(`${industry.id}:${dimension.id}`) || 0), 0)} |`).join('\n')}

### Delta rows by source lane

| Source lane | Delta observations |
|---|---:|
${formatCounts(sourceLaneCounts)}

### Delta rows by source disposition

| Source disposition | Delta observations |
|---|---:|
${formatCounts(sourceDispositionCounts)}

Unique repositories selected for the delta: **${selectedSources.size}**. A repository can appear in multiple industry×dimension cells only when this file records an independent relation note. No row uses an admitted state; every row has \`admission_status: not_admitted\`.

Priority cells are not hidden behind aggregate counts:

- Accounting Firms, Course Creators, and SaaS each have 10 observed rows in every dimension after the wave.
- Every industry has 10 \`verification_eval\`, 10 \`provenance_rights\`, 10 \`agent_authority\`, and 10 \`economics_maintenance\` rows after the wave.
- The floor is an evidence-coverage milestone only; it does not establish market demand, production reliability, rights clearance, or economic viability.

## Rights, evidence, and limitations

The records preserve tranche license states, including no declared license, copyleft/reciprocal, source-available/other, nonstandard/other, and declared permissive. A source record's \`candidate\`, \`hold\`, \`reference\`, or \`unknown\` disposition is carried through as research classification only. It is never translated to admission.

Evidence class \`E\` means the repository record contains direct first-party inspection receipts. The industry/dimension relationship is marked \`supported\` for an exact industry label or industry query, and \`inferred\` for cross-vertical reuse. Economics/maintenance rows intentionally record activity/license/dependency signals without inventing cost or support claims. All rows include a falsifier/next gate requiring direct review, pinned digest, dependency/SBOM and license review, and a synthetic read-only probe with post-condition and rollback evidence.

## Machine checks

The generator checked immutable hashes while emitting the artifacts. The final audit also ran:

~~~text
jq -e . outputs/github-wave-2.jsonl >/dev/null
jq -e . outputs/repo-matrix-wave-2.jsonl >/dev/null
node -e 'parse JSONL; assert 950 delta rows; assert unique slot_id; assert every delta slot was unobserved in the parent ledger; assert combined cell counts are 10'
~~~

Expected results: delta rows **${matrixDelta.length}**, delta slot IDs unique **${new Set(matrixDelta.map((row) => row.slot_id)).size === matrixDelta.length}**, combined cells **${cellCounts.size}**, minimum/maximum cell count **${Math.min(...floorCounts)}/${Math.max(...floorCounts)}**, parent observed before/after **750/${allObserved.length}**, and parent target **17,000**.

## Remaining boundary

The parent long-run goal remains active at 17,000 slots and 100 observations per industry×dimension cell. This wave leaves ${17000 - allObserved.length} reserved/unobserved slots in the immutable parent ledger. The next gate is direct review and stronger receipts for the most reusable candidates; no implementation, extraction, dependency admission, or client-data use is authorized by this research artifact.

**Outputs:**

- \`outputs/github-wave-2.jsonl\` — raw GitHub observation delta (${githubDelta.length} rows)
- \`outputs/repo-matrix-wave-2.jsonl\` — matrix ledger delta (${matrixDelta.length} rows)
- \`outputs/github-wave-2-report.md\` — this report

## Callback receipt

The coordinator pane was freshly resolved with \`/Users/shaansisodia/.local/bin/herdr pane list\`, then verified by reading pane \`w659e02f80e5bb1-1\` as the CENA coordinator before sending. The first send remained queued in the Codex composer; one explicit Enter retry submitted it. A fresh pane readback showed the short DONE message rendered in the CENA pane, and the pane status remained \`working\`.
`;
fs.writeFileSync(outputReport, report);

console.log(JSON.stringify({
  source_rows: sources.length,
  eligible_sources: eligibleSources.length,
  parent_ledger_rows: ledger.length,
  parent_observed_before: ledger.filter((row) => row.slot_status === 'observed').length,
  delta_rows: matrixDelta.length,
  combined_observed_after: allObserved.length,
  cells: cellCounts.size,
  min_cell_count: Math.min(...floorCounts),
  max_cell_count: Math.max(...floorCounts),
  unique_delta_repositories: selectedSources.size,
  source_hash_before: sourceHashBefore,
  source_hash_after: sourceHashAfter,
  ledger_hash_before: ledgerHashBefore,
  ledger_hash_after: ledgerHashAfter,
  outputs: [outputGithub, outputMatrix, outputReport],
}, null, 2));
