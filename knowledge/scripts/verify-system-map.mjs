#!/usr/bin/env node

import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import vm from 'node:vm';

const root = resolve(import.meta.dirname, '..', '..');
const path = resolve(root, 'site', 'system-map', 'index.html');
const html = await readFile(path, 'utf8');
const failures = [];

for (const asset of ['trader-theme.css', 'favicon.svg']) {
  const info = await stat(resolve(root, 'site', 'system-map', asset)).catch(() => null);
  if (!info?.isFile() || info.size === 0) failures.push(`missing_asset:${asset}`);
}

const theme = await readFile(resolve(root, 'site', 'system-map', 'trader-theme.css'), 'utf8');
for (const token of ['--am-bg: #0f001a', '--am-purple: #9000ff', '--am-lilac: #d299ff', '"Geist"', '--paper: #f6f4f7']) {
  if (!theme.includes(token)) failures.push(`missing_theme_token:${token}`);
}

for (const required of [
  '<title>Actionist System Map</title>',
  'The end-to-end loop',
  'The moving parts',
  'Words that must stay distinct',
  'Current decisions and live bets',
  'actionist-system-map-note:',
  'Export notes'
]) {
  if (!html.includes(required)) failures.push(`missing_content:${required}`);
}

const start = html.indexOf('const parts = [');
const end = html.indexOf('\n    const groupColors', start);
if (start < 0 || end < 0) {
  failures.push('parts_literal_not_found');
} else {
  const literal = html.slice(start + 'const parts = '.length, end).trim().replace(/;$/, '');
  const parts = vm.runInNewContext(`(${literal})`);
  const ids = parts.map(part => part.id);
  const idSet = new Set(ids);
  const groups = new Set(parts.map(part => part.group));
  if (parts.length !== 15) failures.push(`part_count:${parts.length}`);
  if (idSet.size !== parts.length) failures.push('duplicate_part_id');
  if (groups.size !== 8) failures.push(`group_count:${groups.size}`);
  for (const part of parts) {
    for (const field of ['id','group','status','title','thesis','owns','known','open','inputs','outputs','deps','agent']) {
      if (!(field in part)) failures.push(`missing_field:${part.id}:${field}`);
    }
    if (part.deps.some(dep => !idSet.has(dep))) failures.push(`dangling_dependency:${part.id}`);
    if (!part.open.length || !part.known.length || !part.owns.length) failures.push(`thin_part:${part.id}`);
  }
}

const scriptStart = html.lastIndexOf('<script>');
const scriptEnd = html.lastIndexOf('</script>');
if (scriptStart < 0 || scriptEnd < scriptStart) failures.push('inline_script_missing');

const partRegistry = JSON.parse(await readFile(resolve(root, 'site', 'system-map', 'data', 'parts.json'), 'utf8'));
const taskGraph = JSON.parse(await readFile(resolve(root, 'site', 'system-map', 'data', 'task-graph.json'), 'utf8'));
const frameworkPage = await readFile(resolve(root, 'site', 'system-map', 'task-graph', 'frameworks', 'index.html'), 'utf8').catch(() => null);
const frameworkRegister = JSON.parse(await readFile(resolve(root, 'site', 'system-map', 'task-graph', 'frameworks', 'framework-register.json'), 'utf8').catch(() => '{}'));
const frameworkGraph = JSON.parse(await readFile(resolve(root, 'site', 'system-map', 'task-graph', 'frameworks', 'framework-dependency-graph.json'), 'utf8').catch(() => '{}'));
if (partRegistry.length !== 15) failures.push(`part_registry_count:${partRegistry.length}`);
if (taskGraph.sprints?.length !== 3) failures.push(`sprint_count:${taskGraph.sprints?.length}`);
if (taskGraph.sprints?.some(sprint => sprint.lanes.length !== 5)) failures.push('sprint_lane_count_not_five');
if (taskGraph.status !== 'sprint_2_converged_with_holds') failures.push('task_graph_dispatch_boundary');
if (taskGraph.schema_version !== 'actionist.task-graph.v2') failures.push('task_graph_schema_version');
if (taskGraph.convergence?.id !== 'S1-GATE') failures.push('convergence_gate_missing');
if (taskGraph.convergence?.owner !== 'CENA coordinator') failures.push('convergence_owner');
if (taskGraph.convergence?.waits_for?.length !== 5) failures.push('convergence_wait_count');
if (taskGraph.convergence?.part_packets?.length !== 12) failures.push('convergence_part_packet_count');
if (taskGraph.convergence?.artifacts?.length !== 4) failures.push('convergence_artifact_count');
if (taskGraph.convergence?.sprint_2_edges?.length !== 5) failures.push('convergence_sprint_2_edge_count');
if (!taskGraph.convergence?.sprint_2_edges?.find(edge => edge.lane === 'S2-L4' && edge.parts.length === 12)) failures.push('composer_full_input_edge');
if (taskGraph.framework_registry?.frameworks !== 24) failures.push('task_graph_framework_count');
if (taskGraph.framework_registry?.gaps !== 10) failures.push('task_graph_framework_gap_count');
if (taskGraph.framework_registry?.page !== 'task-graph/frameworks/') failures.push('task_graph_framework_page');
if (taskGraph.framework_registry?.status !== 'research_only') failures.push('task_graph_framework_boundary');
if (frameworkRegister.registry_summary?.framework_count !== 24) failures.push(`site_framework_count:${frameworkRegister.registry_summary?.framework_count}`);
if (frameworkGraph.edge_count !== frameworkGraph.edges?.length) failures.push('site_framework_graph_edge_count');
for (const required of ['Actionist Framework Registry', 'Maturity coverage', 'Framework categories', 'Dependencies', 'Exact evidence', 'Ranked framework gaps', 'repository-value-matrix-v1.md', 'data-framework-search']) {
  if (!frameworkPage?.includes(required)) failures.push(`framework_page_content:${required}`);
}

for (const part of partRegistry) {
  const pagePath = resolve(root, 'site', 'system-map', part.page, 'index.html');
  const page = await readFile(pagePath, 'utf8').catch(() => null);
  if (!page) {
    failures.push(`missing_part_page:${part.id}`);
    continue;
  }
  for (const required of [part.title, 'Scientific research protocol', 'Full research artifacts', 'Agent-sized objective']) {
    if (!page.includes(required)) failures.push(`part_page_content:${part.id}:${required}`);
  }
  if (part.current_run) {
    const readRows = async file => {
      const sourcePath = resolve(root, part.current_run, file);
      const source = await readFile(sourcePath, 'utf8').catch(() => null);
      if (source === null) { failures.push(`missing_current_run_artifact:${part.id}:${file}`); return []; }
      return source.split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line)).filter(row => !/(^|-)summary$/i.test(String(row.id || '')));
    };
    const [topCompanies, topRepos, innovations, sources] = await Promise.all([
      readRows('top-companies.jsonl'), readRows('top-repos.jsonl'), readRows('innovation-register.jsonl'), readRows('source-register.jsonl')
    ]);
    const sourceCompanies = sources.filter(row => row.source_class === 'commercial');
    const sourceRepos = sources.filter(row => row.source_class === 'oss');
    const datasets = [
      [sourceCompanies.length > topCompanies.length ? sourceCompanies : topCompanies, 'company records', 'companies'],
      [sourceRepos.length > topRepos.length ? sourceRepos : topRepos, 'repository records', 'repos'],
      [innovations, 'innovation records', 'innovations'],
      [sources, 'source receipts', 'sources']
    ];
    for (const [rows, label, dataset] of datasets) {
      if (!page.includes(`<strong>${rows.length}</strong><span>${label}</span>`)) failures.push(`research_count_not_rendered:${part.id}:${dataset}:${rows.length}`);
      if (rows[0]?.id && !page.includes(`data-record-id="${rows[0].id}"`)) failures.push(`research_identity_not_rendered:${part.id}:${dataset}`);
    }
    for (const file of ['research-report.md', 'first-principles.md', 'decision-ledger.json', 'lane-state.json']) {
      const stem = file.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const viewer = resolve(root, 'site', 'system-map', 'artifacts', part.id.toLowerCase(), stem, 'index.html');
      const raw = resolve(root, 'site', 'system-map', 'artifacts', part.id.toLowerCase(), 'raw', file);
      const [viewerInfo, rawInfo] = await Promise.all([stat(viewer).catch(() => null), stat(raw).catch(() => null)]);
      if (!viewerInfo?.isFile() || viewerInfo.size === 0) failures.push(`missing_artifact_viewer:${part.id}:${file}`);
      if (!rawInfo?.isFile() || rawInfo.size === 0) failures.push(`missing_raw_artifact:${part.id}:${file}`);
    }
    for (const required of ['Companies and commercial surfaces', 'Repositories and OSS precedents', 'Innovation register', 'Complete source register', 'data-table-filter']) {
      if (!page.includes(required)) failures.push(`research_pack_content:${part.id}:${required}`);
    }
  }
}

const taskPage = await readFile(resolve(root, 'site', 'system-map', 'task-graph', 'index.html'), 'utf8').catch(() => null);
if (!taskPage) failures.push('task_graph_page_missing');
for (const required of ['Independent evidence harvest', 'Sprint 1 evidence convergence', 'Exact handoff into Sprint 2', 'S1-CONVERGENCE.md', 'Framework and contract synthesis', 'Convergence and pilot blueprint', 'How every agent gets enough context', 'Open decision timeline', 'Open Block Hub', 'Open Framework Registry']) {
  if (!taskPage?.includes(required)) failures.push(`task_graph_content:${required}`);
}

const decisionTimelinePage = await readFile(resolve(root, 'site', 'system-map', 'task-graph', 'timeline', 'index.html'), 'utf8').catch(() => null);
const decisionTimelineRaw = await readFile(resolve(root, 'site', 'system-map', 'task-graph', 'timeline', 'decision-timeline.md'), 'utf8').catch(() => null);
for (const required of ['actionist decision timeline', 'stacking model clarified', 'pilot strategy and vertical shortlist', 'saas companies', 'ecommerce', 'marketing and social agencies', 'course creators', 'three real shapes']) {
  if (!decisionTimelinePage?.toLowerCase().includes(required)) failures.push(`decision_timeline_page_content:${required}`);
  if (!decisionTimelineRaw?.toLowerCase().includes(required)) failures.push(`decision_timeline_raw_content:${required}`);
}
if (taskGraph.decision_timeline?.locked !== false) failures.push('decision_timeline_lock_state');
if (taskGraph.decision_timeline?.pilot_priority_group?.length !== 3) failures.push('decision_timeline_priority_count');

const blockHubPage = await readFile(resolve(root, 'site', 'system-map', 'task-graph', 'block-hub', 'index.html'), 'utf8').catch(() => null);
const blockHubRegister = JSON.parse(await readFile(resolve(root, 'site', 'system-map', 'task-graph', 'block-hub', 'block-register.json'), 'utf8').catch(() => '{}'));
const blockHubRecipes = JSON.parse(await readFile(resolve(root, 'site', 'system-map', 'task-graph', 'block-hub', 'composition-recipes.json'), 'utf8').catch(() => '{}'));
if (blockHubRegister.counts?.blocks !== 80) failures.push(`block_hub_count:${blockHubRegister.counts?.blocks}`);
if (blockHubRecipes.recipes?.length !== 5) failures.push(`block_hub_recipe_count:${blockHubRecipes.recipes?.length}`);
if (taskGraph.block_hub?.blocks !== 80) failures.push('task_graph_block_hub_count');
for (const required of ['Actionist Block Hub', 'Digital Business OS', 'SaaS OS', 'Ecommerce OS', 'Marketing Agency OS', 'Course Creator OS', 'Users, teams and employee directory', 'Thin blocks and targeted gap results']) {
  if (!blockHubPage?.includes(required)) failures.push(`block_hub_page_content:${required}`);
}

const p06Page = await readFile(resolve(root, 'site', 'system-map', 'parts', 'p06', 'index.html'), 'utf8').catch(() => null);
const designGrammarPage = await readFile(resolve(root, 'site', 'system-map', 'parts', 'p06', 'design-grammar', 'index.html'), 'utf8').catch(() => null);
const designGrammarRaw = await readFile(resolve(root, 'site', 'system-map', 'parts', 'p06', 'design-grammar', 'design-grammar.md'), 'utf8').catch(() => null);
if (!p06Page?.includes('href="design-grammar/"')) failures.push('p06_design_grammar_link_missing');
for (const required of ['design grammar and preference protocol', 'what p06 genuinely established', 'proposed round protocol', 'what the mined repositories contribute', 'experiments required before this is']) {
  if (!designGrammarPage?.toLowerCase().includes(required)) failures.push(`design_grammar_page_content:${required}`);
  if (!designGrammarRaw?.toLowerCase().includes(required)) failures.push(`design_grammar_raw_content:${required}`);
}

const sprint2ConvergencePage = await readFile(resolve(root, 'site', 'system-map', 'task-graph', 'sprint-2-convergence', 'index.html'), 'utf8').catch(() => null);
const sprint2ConvergenceRaw = await readFile(resolve(root, 'site', 'system-map', 'task-graph', 'sprint-2-convergence', 'S2-CONVERGENCE.md'), 'utf8').catch(() => null);
for (const required of ['the actionist modular assembly framework', 'the seven-record contract family', 'the deterministic composer', 'coordinator convergence decisions', 'recommended next experiment']) {
  if (!sprint2ConvergencePage?.toLowerCase().includes(required)) failures.push(`sprint2_convergence_page_content:${required}`);
  if (!sprint2ConvergenceRaw?.toLowerCase().includes(required)) failures.push(`sprint2_convergence_raw_content:${required}`);
}

const basePortfolioPage = await readFile(resolve(root, 'site', 'system-map', 'task-graph', 'base-portfolio', 'index.html'), 'utf8').catch(() => null);
const basePortfolioRegister = JSON.parse(await readFile(resolve(root, 'site', 'system-map', 'task-graph', 'base-portfolio', 'base-family-register.json'), 'utf8').catch(() => '{}'));
const basePortfolioRows = (await readFile(resolve(root, 'site', 'system-map', 'task-graph', 'base-portfolio', 'base-repo-shortlist.jsonl'), 'utf8').catch(() => '')).split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
if (basePortfolioRegister.architecture?.base_families !== 23) failures.push('base_portfolio_family_count');
if (basePortfolioRegister.architecture?.industry_overlays !== 17) failures.push('base_portfolio_industry_count');
if (basePortfolioRows.length !== 100 || new Set(basePortfolioRows.map(row => row.repo.toLowerCase())).size !== 100) failures.push('base_portfolio_repo_count');
for (const required of ['23 base families', '17 industry overlays', '100-repository candidate bench', 'collaborative workspace (notion-like)', 'base-portfolio-repos', 'data-table-filter']) {
  if (!basePortfolioPage?.toLowerCase().includes(required.toLowerCase())) failures.push(`base_portfolio_page_content:${required}`);
}

if (failures.length) {
  process.stderr.write(`SYSTEM_MAP_SMOKE_FAIL count=${failures.length}\n${failures.join('\n')}\n`);
  process.exit(1);
}

process.stdout.write('SYSTEM_MAP_SMOKE_PASS parts=15 pages=15 frameworks=24 framework_gaps=10 groups=8 sprints=3 lanes=15 convergence=5-to-12-to-4-to-5 dependencies=valid notes=enabled theme=trader-os-action-model\n');
