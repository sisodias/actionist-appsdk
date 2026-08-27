#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const spineDir = resolve(scriptDir, '..');
const actionmodelRoot = resolve(spineDir, '..');
const packRoot = resolve(actionmodelRoot, 'research', 'actionmodel-builder-research-2026-08-26');
const agencyRoot = resolve(actionmodelRoot, '..', '..');
const workspaceRoot = resolve(agencyRoot, '..');

const domainNames = {
  D01: 'outcome_and_demand',
  D02: 'industry_and_domain_ontology',
  D03: 'product_specification_and_acceptance',
  D04: 'source_intelligence_and_retrieval',
  D05: 'capability_mining_and_understanding',
  D06: 'reuse_shape_and_ownership',
  D07: 'extraction_adaptation_and_packaging',
  D08: 'thin_capability_contract',
  D09: 'registry_graph_and_version_resolution',
  D10: 'data_plane_and_state_ownership',
  D11: 'identity_tenancy_authority_and_secrets',
  D12: 'connector_and_external_action_plane',
  D13: 'ui_interaction_and_taste',
  D14: 'archetypes_templates_and_product_shell',
  D15: 'composition_planner_and_solver',
  D16: 'runtime_isolation_and_host_platform',
  D17: 'verification_qualification_and_promotion',
  D18: 'release_operations_economics_and_learning'
};

const topicRules = [
  ['D01', /outcome|buyer|market|pricing|demand|public.signal|company|idea|pain|value/i],
  ['D02', /industry|vertical|niche|atom|ontology|use.case|team|catalogue/i],
  ['D03', /product.spec|acceptance|workflow|requirement|pilot.spec|fixture/i],
  ['D04', /github|corpus|candidate|discovery|search|inventory|source.register|repo.pool/i],
  ['D05', /capabilit|dimension.evidence|deep.dive|dossier|system.extraction|feature.census/i],
  ['D06', /packaging|reuse|ownership|absorption|transplant|intact|source.shape/i],
  ['D07', /repo.to.block|extract|adapt|codemod|dependency.closure|mechanic|pipeline/i],
  ['D08', /block.contract|capability.contract|universal.block|contract.delta/i],
  ['D09', /registry|identity.edge|version|provenance|great.library|lifecycle/i],
  ['D10', /database|postgres|data.layer|schema|migration|teable|twenty|read.model|storage/i],
  ['D11', /tenant|auth|authority|permission|oauth|secret|security|rights.eval/i],
  ['D12', /connector|openconnector|activepieces|nango|jentic|integration|provider/i],
  ['D13', /ui|design|21st|component|visual|token|taste|preference/i],
  ['D14', /template|archetype|shell|portal|b2b.shelf|scaffold/i],
  ['D15', /composition|solver|planner|assembly|join|compatib/i],
  ['D16', /runtime|sandbox|host|deploy|preview|worker|service|platform/i],
  ['D17', /eval|verify|evidence|receipt|smoke|standards|admission|qualification/i],
  ['D18', /release|rollback|maintenance|economics|cost|operations|learning|state.json/i]
];

const allowedExtensions = new Set([
  '.md', '.json', '.jsonl', '.html', '.txt', '.mjs', '.js', '.ts', '.py', '.sh', '.yaml', '.yml'
]);

const roots = [
  { name: 'knowledge_spine', path: spineDir, recursive: true },
  { name: 'main_research', path: packRoot, recursive: true },
  { name: 'actionist_design', path: resolve(actionmodelRoot, 'architecture'), recursive: true },
  { name: 'rendered_research_packs', path: resolve(actionmodelRoot, 'research', 'packs'), recursive: true },
  { name: 'autosaas_framework', path: resolve(agencyRoot, 'apps', 'AutoSaaS', 'framework'), recursive: true },
  { name: 'autosaas_process', path: resolve(agencyRoot, 'apps', 'AutoSaaS', 'process'), recursive: true },
  { name: 'autosaas_base_template', path: resolve(agencyRoot, 'apps', 'AutoSaaS', 'base-template'), recursive: true },
  { name: 'sisocrm_business_broker', path: resolve(agencyRoot, 'apps', 'SISOCRM', 'verticals', 'business-broker'), recursive: true },
  { name: 'sisocrm_reports', path: resolve(agencyRoot, 'apps', 'SISOCRM', 'reports'), recursive: true },
  { name: 'great_library_schemas', path: resolve(workspaceRoot, 'Great_Library_of_SISO', 'schemas'), recursive: true }
];

const generatedNames = new Set(['source-inventory.jsonl', 'knowledge-graph.json', 'inventory-summary.json']);

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function walk(rootPath) {
  const found = [];
  if (!(await exists(rootPath))) return found;
  const entries = await readdir(rootPath, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(rootPath, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '__pycache__') continue;
      found.push(...await walk(path));
    } else if (entry.isFile() && allowedExtensions.has(extname(entry.name).toLowerCase())) {
      if (generatedNames.has(entry.name)) continue;
      found.push(path);
    }
  }
  return found;
}

function displayPath(path) {
  const fromProject = relative(actionmodelRoot, path);
  if (!fromProject.startsWith('..')) return fromProject;
  return path;
}

function phaseFor(path) {
  const match = path.match(/phase-(\d+)/);
  if (match) return `phase-${match[1]}`;
  if (path.includes('/expansion/')) return 'expansion';
  if (path.includes('/AutoSaaS/')) return 'autosaas';
  if (path.includes('/SISOCRM/')) return 'sisocrm';
  if (path.includes('/Great_Library_of_SISO/')) return 'great-library';
  if (path.includes('/design/')) return 'design';
  if (path.includes('/research/packs/')) return 'research-pack';
  return 'baseline';
}

function kindFor(path) {
  const name = path.toLowerCase();
  if (name.endsWith('state.json') || name.includes('dispatch-receipt')) return 'state_or_receipt';
  if (name.includes('program.md') || name.includes('/dispatch/')) return 'program_or_dispatch';
  if (/verify|smoke|check/.test(name) && /\.(mjs|js|py|sh)$/.test(name)) return 'verifier';
  if (name.includes('synthesis') || name.includes('framework') || name.includes('architecture')) return 'synthesis_or_framework';
  if (name.endsWith('.jsonl')) return 'structured_ledger';
  if (name.endsWith('.json')) return 'structured_record';
  if (name.endsWith('.md') || name.endsWith('.html') || name.endsWith('.txt')) return 'narrative_or_report';
  return 'supporting_code';
}

function titleFrom(text, path) {
  const md = text.match(/^#\s+(.+)$/m);
  if (md) return md[1].trim();
  const html = text.match(/<title>([^<]+)<\/title>/i);
  if (html) return html[1].trim();
  return path.split('/').at(-1);
}

function topicsFor(path, sample) {
  const haystack = `${path}\n${sample}`;
  const topics = topicRules.filter(([, pattern]) => pattern.test(haystack)).map(([id]) => id);
  return topics.length ? [...new Set(topics)] : ['D04'];
}

async function recordFor(path, rootName, index) {
  const info = await stat(path);
  const sampleBuffer = await readFile(path).then(buffer => buffer.subarray(0, 65536));
  const sample = sampleBuffer.toString('utf8').replaceAll('\u0000', '');
  let sha256 = null;
  let hashStatus = 'size_limited';
  if (info.size <= 25 * 1024 * 1024) {
    const contents = await readFile(path);
    sha256 = createHash('sha256').update(contents).digest('hex');
    hashStatus = 'complete';
  }
  return {
    source_id: `SRC-${String(index).padStart(5, '0')}`,
    root: rootName,
    path: displayPath(path),
    absolute_path: path,
    title: titleFrom(sample, path),
    extension: extname(path).toLowerCase(),
    bytes: info.size,
    modified_at: info.mtime.toISOString(),
    sha256,
    hash_status: hashStatus,
    phase: phaseFor(path),
    kind: kindFor(path),
    domains: topicsFor(path, sample),
    inventory_scope: 'path_and_bounded_content_classification',
    semantic_authority: 'source_specific'
  };
}

const discovered = [];
for (const root of roots) {
  for (const path of await walk(root.path)) discovered.push({ path, root: root.name });
}

const unique = [...new Map(discovered.map(item => [item.path, item])).values()]
  .sort((a, b) => a.path.localeCompare(b.path));

const records = [];
for (let index = 0; index < unique.length; index += 1) {
  const item = unique[index];
  records.push(await recordFor(item.path, item.root, index + 1));
}

const domainNodes = Object.entries(domainNames).map(([id, name]) => ({
  id,
  type: 'domain',
  label: name
}));
const sourceNodes = records.map(record => ({
  id: record.source_id,
  type: 'source',
  label: record.title,
  path: record.path,
  phase: record.phase,
  kind: record.kind
}));
const edges = records.flatMap(record => record.domains.map(domain => ({
  from: record.source_id,
  to: domain,
  type: 'supports_or_informs'
})));

const byRoot = Object.fromEntries(roots.map(root => [root.name, records.filter(record => record.root === root.name).length]));
const byPhase = {};
const byKind = {};
const byDomain = {};
for (const record of records) {
  byPhase[record.phase] = (byPhase[record.phase] ?? 0) + 1;
  byKind[record.kind] = (byKind[record.kind] ?? 0) + 1;
  for (const domain of record.domains) byDomain[domain] = (byDomain[domain] ?? 0) + 1;
}

const summary = {
  schema_version: 'actionist.knowledge-spine-inventory.v1',
  generated_at: new Date().toISOString(),
  source_count: records.length,
  total_bytes: records.reduce((sum, record) => sum + record.bytes, 0),
  complete_hashes: records.filter(record => record.hash_status === 'complete').length,
  size_limited_hashes: records.filter(record => record.hash_status === 'size_limited').length,
  roots_configured: roots.length,
  roots_present: roots.filter(root => records.some(record => record.root === root.name)).length,
  by_root: byRoot,
  by_phase: byPhase,
  by_kind: byKind,
  by_domain: byDomain,
  classification_boundary: 'All configured files are structurally inventoried; domain edges use bounded path/content keyword classification and do not replace human semantic review.',
  research_only: true,
  agents_dispatched: 0
};

const graph = {
  schema_version: 'actionist.knowledge-spine-graph.v1',
  generated_at: summary.generated_at,
  node_count: domainNodes.length + sourceNodes.length,
  edge_count: edges.length,
  nodes: [...domainNodes, ...sourceNodes],
  edges,
  boundary: {
    research_only: true,
    semantic_edges_are_bounded_classifications: true,
    original_sources_remain_authoritative: true
  }
};

await writeFile(join(spineDir, 'source-inventory.jsonl'), `${records.map(record => JSON.stringify(record)).join('\n')}\n`);
await writeFile(join(spineDir, 'knowledge-graph.json'), `${JSON.stringify(graph, null, 2)}\n`);
await writeFile(join(spineDir, 'inventory-summary.json'), `${JSON.stringify(summary, null, 2)}\n`);

process.stdout.write(`SPINE_BUILD_PASS sources=${records.length} nodes=${graph.node_count} edges=${graph.edge_count}\n`);
