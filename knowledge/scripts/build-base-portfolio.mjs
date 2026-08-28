#!/usr/bin/env node

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..', '..');
const input = resolve(root, 'research', 'workstreams', 'p03-curated-capability-shelf', 'runs', '2026-08-27-sprint-1-fable', 'top-repos.jsonl');
const outDir = resolve(root, 'research', 'base-portfolio-2026-08-27');

const families = [
  { id: 'B01', slug: 'crm-pipeline', layer: 'application_spine', name: 'CRM and pipeline', capabilities: ['crm'], strategy: 'select_product_then_transplant_or_bind', anchors: ['marmelab/atomic-crm', 'twentyhq/twenty'] },
  { id: 'B02', slug: 'case-workflow', layer: 'application_spine', name: 'Case and workflow', capabilities: ['case_workflow', 'approvals_workflow'], strategy: 'borrow_engine_build_actionist_product_surface', anchors: ['flowable/flowable-engine', 'documenso/documenso'] },
  { id: 'B03', slug: 'client-portal', layer: 'application_spine', name: 'Client portal', capabilities: ['portal'], strategy: 'actionist_owned_authorization_and_surface', anchors: ['open-formulieren/open-forms', 'nextcloud/server'] },
  { id: 'B04', slug: 'finance-operations', layer: 'application_spine', name: 'Finance and reconciliation operations', capabilities: ['billing'], strategy: 'owned_read_model_plus_selected_finance_engines', anchors: ['frappe/erpnext', 'Dolibarr/dolibarr'] },
  { id: 'B05', slug: 'inventory-warehouse', layer: 'application_spine', name: 'Inventory and warehouse', capabilities: ['inventory'], strategy: 'select_product_or_intact_service', anchors: ['inventree/InvenTree', 'openboxes/openboxes'] },
  { id: 'B06', slug: 'commerce-orders', layer: 'application_spine', name: 'Commerce and order operations', capabilities: ['e_commerce'], strategy: 'bind_headless_engine_plus_actionist_operations_surface', anchors: ['saleor/saleor', 'medusajs/medusa'] },
  { id: 'B07', slug: 'scheduling-booking', layer: 'application_spine', name: 'Scheduling and booking', capabilities: ['calendar_scheduling'], strategy: 'embed_or_bind_product', anchors: ['calcom/cal.diy', 'thunderbird/appointment'] },
  { id: 'B08', slug: 'support-service-desk', layer: 'application_spine', name: 'Support and service desk', capabilities: ['support_desk'], strategy: 'intact_service_or_transplanted_surface', anchors: ['chatwoot/chatwoot', 'zammad/zammad'] },
  { id: 'B09', slug: 'field-operations', layer: 'application_spine', name: 'Field operations', capabilities: ['field_ops'], strategy: 'borrow_patterns_build_actionist_product_surface', anchors: ['openboxes/openboxes', 'glpi-project/glpi'] },
  { id: 'B10', slug: 'learning-content', layer: 'application_spine', name: 'Learning and content delivery', capabilities: ['lms'], strategy: 'intact_service_or_archetype_pattern', anchors: ['oppia/oppia', 'moodle/moodle'] },
  { id: 'B11', slug: 'project-work-management', layer: 'application_spine', name: 'Project and work management', capabilities: ['project_management'], strategy: 'intact_service_or_transplanted_surface', anchors: ['kanboard/kanboard', 'hcengineering/platform'] },
  { id: 'B12', slug: 'data-admin', layer: 'shared_platform', name: 'Data and admin platform', capabilities: ['admin_data', 'airtable_data'], strategy: 'host_data_capability_plus_selected_admin_surface', anchors: ['supabase/supabase', 'pocketbase/pocketbase', 'appwrite/appwrite'] },
  { id: 'B13', slug: 'identity-authorization', layer: 'shared_platform', name: 'Identity and authorization', capabilities: ['auth_identity'], strategy: 'host_owned_authority_using_selected_identity_engine', anchors: ['keycloak/keycloak', 'better-auth/better-auth'] },
  { id: 'B14', slug: 'files-documents', layer: 'shared_platform', name: 'Files and document management', capabilities: ['files_documents'], strategy: 'object_capability_plus_intact_document_service', anchors: ['owncloud/ocis', 'paperless-ngx/paperless-ngx'] },
  { id: 'B15', slug: 'forms-intake', layer: 'shared_platform', name: 'Forms and intake', capabilities: ['forms'], strategy: 'extract_form_engine_or_bind_product', anchors: ['surveyjs/survey-library', 'heyform/heyform'] },
  { id: 'B16', slug: 'analytics-reporting', layer: 'shared_platform', name: 'Analytics and reporting', capabilities: ['analytics_bi'], strategy: 'embed_or_bind_analytics_engine', anchors: ['apache/superset', 'cube-js/cube'] },
  { id: 'B17', slug: 'search-retrieval', layer: 'shared_platform', name: 'Search and retrieval', capabilities: ['search'], strategy: 'intact_search_service', anchors: ['meilisearch/meilisearch', 'opensearch-project/OpenSearch'] },
  { id: 'B18', slug: 'connectors-automation', layer: 'shared_platform', name: 'Connectors and automation', capabilities: ['connectors', 'approvals_workflow'], strategy: 'borrow_catalogue_and_runtime_own_tenant_connections', anchors: ['activepieces/activepieces'] },
  { id: 'B19', slug: 'messaging-notifications', layer: 'shared_platform', name: 'Messaging and notifications', capabilities: ['messaging_notifications'], strategy: 'embed_notification_runtime_or_bind_service', anchors: ['novuhq/novu', 'zulip/zulip'] },
  { id: 'B20', slug: 'billing-payments', layer: 'shared_platform', name: 'Billing and payments', capabilities: ['billing'], strategy: 'bind_billing_engine_keep_financial_authority_explicit', anchors: ['killbill/killbill', 'getlago/lago'] },
  { id: 'B21', slug: 'esign-document-authority', layer: 'shared_platform', name: 'E-sign and document authority', capabilities: ['e_sign'], strategy: 'borrow_signing_engine_build_workflow_identity_and_audit_surface', anchors: ['MatthiasValvekens/pyHanko', 'documenso/documenso'] },
  { id: 'B22', slug: 'knowledge-cms', layer: 'shared_platform', name: 'Knowledge base and CMS', capabilities: ['notes_docs'], strategy: 'intact_service_or_transplanted_surface', anchors: ['BookStackApp/BookStack', 'TryGhost/Ghost'] },
  { id: 'B23', slug: 'collaborative-workspace', layer: 'application_spine', name: 'Collaborative workspace (Notion-like)', capabilities: ['notes_docs', 'airtable_data'], match: 'all', strategy: 'select_workspace_product_or_transplant_docs_database_surface', anchors: ['AppFlowy-IO/AppFlowy', 'toeverything/AFFiNE'] }
];

const industries = [
  ['accounting_firms','B04','B02'], ['construction','B09','B04'], ['course_creators','B10','B03'],
  ['ecommerce','B05','B08'], ['education_training','B10','B02'], ['healthcare_medical_practices','B07','B02'],
  ['hospitality','B07','B09'], ['it_services_msps','B08','B03'], ['insurance_agencies','B02','B04'],
  ['law_firms','B02','B03'], ['logistics_freight','B09','B05'], ['marketing_social_media_agencies','B02','B03'],
  ['mortgage_brokers','B02','B03'], ['property_management','B02','B03'], ['real_estate','B01','B07'],
  ['recruiting_staffing','B02','B07'], ['saas','B01','B08']
].map(([industry_id, primary_base, secondary_base]) => ({ industry_id, primary_base, secondary_base }));

const raw = (await readFile(input, 'utf8')).split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
const repos = raw.filter(row => /^OSS-\d+$/.test(String(row.id)) && typeof row.repo === 'string');
const familyById = Object.fromEntries(families.map(family => [family.id, family]));

const score = row => {
  const tier = { product: 30, framework: 22, primitive: 16 }[row.supply_tier] || 0;
  const disposition = { candidate: 5, reference: 2, hold: -3, reject: -18 }[row.disposition] || 0;
  const quality = row.quality_signals || {};
  const stars = Math.min(20, Math.log10(Math.max(1, Number(quality.stars) || 1)) * 4);
  return Number((tier + disposition + stars + (quality.maintenance === 'active' ? 8 : 0) + (quality.tests_visible_at_root ? 3 : 0) + (quality.ci_configured ? 2 : 0) + (quality.containerized ? 2 : 0) + (row.composite_repo ? 3 : 0)).toFixed(2));
};

const enriched = repos.map(row => {
  const baseFamilies = families.filter(family => family.match === 'all' ? family.capabilities.every(cap => row.capability_kinds?.includes(cap)) : family.capabilities.some(cap => row.capability_kinds?.includes(cap))).map(family => family.id);
  return { ...row, base_families: baseFamilies, quality_first_score: score(row) };
}).filter(row => row.base_families.length);

const selected = new Map();
const add = row => { if (row) selected.set(row.repo.toLowerCase(), row); };
for (const family of families) {
  for (const anchor of family.anchors) add(enriched.find(row => row.repo.toLowerCase() === anchor.toLowerCase()));
}
for (const family of families) {
  enriched.filter(row => row.base_families.includes(family.id)).sort((a,b) => b.quality_first_score - a.quality_first_score).slice(0, 5).forEach(add);
}
enriched.sort((a,b) => b.quality_first_score - a.quality_first_score).forEach(row => { if (selected.size < 100) add(row); });
if (selected.size !== 100) throw new Error(`expected 100 unique selected repos, got ${selected.size}`);

const shortlist = [...selected.values()].map(row => {
  const familyRanks = Object.fromEntries(row.base_families.map(id => {
    const ranked = enriched.filter(candidate => candidate.base_families.includes(id)).sort((a,b) => b.quality_first_score - a.quality_first_score);
    return [id, ranked.findIndex(candidate => candidate.repo === row.repo) + 1];
  }));
  const anchorFor = families.filter(family => family.anchors.some(anchor => anchor.toLowerCase() === row.repo.toLowerCase())).map(family => family.id);
  return {
    id: `BR-${String(0).padStart(3,'0')}`,
    source_id: row.id,
    repo: row.repo,
    url: row.url,
    base_families: row.base_families,
    family_ranks: familyRanks,
    anchor_for: anchorFor,
    portfolio_role: row.supply_tier === 'product' ? 'product_base' : row.supply_tier === 'framework' ? 'composition_substrate' : 'engine_or_primitive',
    supply_tier: row.supply_tier,
    reuse_shape_recommendation: row.reuse_shape_recommendation,
    quality_first_score: row.quality_first_score,
    stars: row.quality_signals?.stars ?? null,
    maintenance: row.quality_signals?.maintenance ?? 'unknown',
    language: row.quality_signals?.primary_language ?? 'unknown',
    disposition: row.disposition,
    evidence_class: row.evidence_class,
    claim: row.claim,
    limitations: row.limitations,
    observed_date: row.observed_date,
    status: 'shortlisted_not_qualified'
  };
}).sort((a,b) => b.quality_first_score - a.quality_first_score || a.repo.localeCompare(b.repo)).map((row,index) => ({ ...row, id: `BR-${String(index + 1).padStart(3,'0')}`, portfolio_rank: index + 1 }));

const counts = Object.fromEntries(families.map(family => [family.id, shortlist.filter(row => row.base_families.includes(family.id)).length]));
const register = {
  schema_version: 'actionist.base-portfolio.v1',
  observed_date: '2026-08-27',
  status: 'research_shortlist_not_qualified',
  architecture: { base_families: families.length, industry_overlays: industries.length, repo_bench: shortlist.length },
  families: families.map(family => ({ ...family, shortlisted_repos: counts[family.id] })),
  industry_overlays: industries,
  boundary: { research_only: true, implementation_authorized: false, execution_status: 'UNEXECUTED', admission_status: 'NOT_ADMITTED', admitted_bases: 0 }
};

const familyRows = families.map(family => {
  const familyRepos = shortlist.filter(row => row.base_families.includes(family.id)).sort((a,b) => (a.family_ranks[family.id] || 999) - (b.family_ranks[family.id] || 999));
  const anchorNames = family.anchors.map(anchor => shortlist.find(row => row.repo.toLowerCase() === anchor.toLowerCase())?.repo || `${anchor} (not in P03)`).join(', ');
  return `| ${family.id} | ${family.name} | ${family.layer} | ${family.strategy} | ${anchorNames} | ${familyRepos.length} |`;
}).join('\n');
const industryRows = industries.map(item => `| ${item.industry_id} | ${item.primary_base} ${familyById[item.primary_base].name} | ${item.secondary_base} ${familyById[item.secondary_base].name} |`).join('\n');

const markdown = `# Actionist base portfolio — 23 base families, 17 overlays, 100 repositories

Date: 2026-08-27  
Status: research shortlist; no base qualified, executed or admitted

## The decision

Actionist should not build 17 unrelated industry applications and should not call 100 repositories “100 bases.” The first workable portfolio has three layers:

1. **23 reusable base families** — recurring application spines and shared platform capabilities.
2. **17 industry overlays** — entities, states, vocabulary, authority and compliance differences applied to those bases.
3. **100-repository candidate bench** — products, frameworks and engines providing multiple options per family.

The number 23 is a portfolio hypothesis, not a permanent ontology. It is large enough to separate genuinely different state/authority models and small enough that every family can own a contract, candidate queue and qualification plan. B23 was added after operator review exposed that a Notion-like collaborative docs+database workspace is not equivalent to either a wiki/CMS or an internal data/admin platform.

## Why this is better than one base per industry

Six industries share case/workflow as their primary spine. Six use a client portal as a secondary spine. Scheduling, support, field operations, finance, inventory, learning and CRM recur across the rest. The industry-specific value belongs mainly in the overlay: entities, states, deadlines, terminology and authority. A law matter, insurance claim and mortgage file are not the same workflow, but they can test whether one configurable case spine survives three different state machines.

The two clearest build decisions remain:

- **Client portal:** Actionist owns the external-identity, scoped-read and request-submission product layer. Existing rows are references, not credible bases.
- **Case/workflow:** borrow a mature workflow/CMMN engine and build the Actionist case surface, party model, deadline model and document set.
- **E-sign:** borrow cryptographic/signing primitives and build signer identity, routing, audit and product workflow.
- **Field operations:** borrow patterns from existing products but expect an owned offline/evidence product layer.

## The 23 base families

| ID | Base family | Layer | Strategy | Initial anchors | Repos in 100-bench |
|---|---|---|---|---|---:|
${familyRows}

## The 17 industry overlays

| Industry | Primary base | Secondary base |
|---|---|---|
${industryRows}

## How the 100 repos were selected

The source denominator is the P03 200-row verified OSS shelf. Selection is quality-first and deliberately ignores legal suitability as a ranking objective, while preserving its recorded disposition and limitations.

The mechanical score rewards product completeness, active maintenance, stars, tests, CI, containers and composite structure. It penalizes P03 rejects. Every named anchor is included, every family receives its strongest available rows, then the bench is filled by global quality score to exactly 100 unique repositories. One repository may support multiple families; that overlap is leverage, not double-counted identity.

This register is a **bench**, not a final choice. A high score does not establish host fit, tenancy, authority, adaptation cost, runtime or quality under execution.

## What happens next — focused portfolio research

### Wave A: family-definition audit

Falsify the 23-family taxonomy against all 17 industries. For each family define the product bar, required entities/states/authority, exclusions and whether it is an application spine, shared platform or Actionist-owned gap. A Notion-like workspace, for example, requires collaborative documents plus structured databases/views; a wiki or internal admin builder does not pass that bar.

### Wave B: targeted source funnels

For each family, join the current 100 bench with a targeted GitHub sweep, commercial top 10 and local estate. Classify every serious source as product, framework or primitive and name the plausible reuse shape. Do not repeat a generic metadata sweep.

### Wave C: three finalists per family

Choose a preferred product, product alternative and engine/framework fallback—or explicitly mark the family Actionist-owned. Approximately 69 family slots should compress to 20–30 unique repositories because strong composite sources cover multiple families.

### Wave D: module-contract depth

Take the 20–30 unique finalists through source identity, the seven-record module family, normalization-surgery prediction, host-fit checks and the 22 deterministic composer rules. This is where metadata ranking becomes architecture evidence.

### Wave E: representative assembly dry runs

Hand-run three assemblies: case/workflow+portal, CRM+scheduling and inventory/support. Compare complete product reuse, engine+owned-surface and transplant shapes before authorizing source execution.

## Immediate reduction rule

Before implementing the framework against one pilot, reduce each family to:

- one preferred product base;
- one alternative product;
- one engine/framework fallback;
- one explicit “Actionist-owned” gap where no product survives the archetype bar.

Then take the highest-leverage 20–30 repositories—not all 100—through the seven-record module contract and the 22-rule deterministic composer. The remaining repos stay as replacements and pattern references.

## Boundary

Research only. No repository was cloned, read beyond the prior metadata packet, executed, built, benchmarked, deployed, qualified or admitted by this portfolio step.
`;

await mkdir(outDir, { recursive: true });
await writeFile(resolve(outDir, 'base-family-register.json'), `${JSON.stringify(register, null, 2)}\n`);
await writeFile(resolve(outDir, 'base-repo-shortlist.jsonl'), `${shortlist.map(row => JSON.stringify(row)).join('\n')}\n`);
await writeFile(resolve(outDir, 'base-portfolio.md'), markdown);

const failures = [];
if (families.length !== 23) failures.push(`family_count:${families.length}`);
if (industries.length !== 17) failures.push(`industry_count:${industries.length}`);
if (shortlist.length !== 100 || new Set(shortlist.map(row => row.repo.toLowerCase())).size !== 100) failures.push('shortlist_not_100_unique');
for (const family of families) {
  if (!counts[family.id]) failures.push(`family_without_repo:${family.id}`);
  for (const anchor of family.anchors) if (enriched.some(row => row.repo.toLowerCase() === anchor.toLowerCase()) && !shortlist.some(row => row.repo.toLowerCase() === anchor.toLowerCase())) failures.push(`missing_anchor:${anchor}`);
}
if (shortlist.some(row => row.status !== 'shortlisted_not_qualified')) failures.push('qualification_boundary');
if (failures.length) throw new Error(`BASE_PORTFOLIO_FAIL ${failures.join(',')}`);
process.stdout.write(`BASE_PORTFOLIO_PASS families=${families.length} industries=${industries.length} repos=${shortlist.length} min_family_coverage=${Math.min(...Object.values(counts))}\n`);
