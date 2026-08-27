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
if (partRegistry.length !== 15) failures.push(`part_registry_count:${partRegistry.length}`);
if (taskGraph.sprints?.length !== 3) failures.push(`sprint_count:${taskGraph.sprints?.length}`);
if (taskGraph.sprints?.some(sprint => sprint.lanes.length !== 5)) failures.push('sprint_lane_count_not_five');
if (taskGraph.status !== 'designed_not_started') failures.push('task_graph_dispatch_boundary');

for (const part of partRegistry) {
  const pagePath = resolve(root, 'site', 'system-map', part.page, 'index.html');
  const page = await readFile(pagePath, 'utf8').catch(() => null);
  if (!page) {
    failures.push(`missing_part_page:${part.id}`);
    continue;
  }
  for (const required of [part.title, 'Scientific research protocol', 'Evidence and agent outputs', 'Agent-sized objective']) {
    if (!page.includes(required)) failures.push(`part_page_content:${part.id}:${required}`);
  }
}

const taskPage = await readFile(resolve(root, 'site', 'system-map', 'task-graph', 'index.html'), 'utf8').catch(() => null);
if (!taskPage) failures.push('task_graph_page_missing');
for (const required of ['Independent evidence harvest', 'Framework and contract synthesis', 'Convergence and pilot blueprint', 'How every agent gets enough context']) {
  if (!taskPage?.includes(required)) failures.push(`task_graph_content:${required}`);
}

if (failures.length) {
  process.stderr.write(`SYSTEM_MAP_SMOKE_FAIL count=${failures.length}\n${failures.join('\n')}\n`);
  process.exit(1);
}

process.stdout.write('SYSTEM_MAP_SMOKE_PASS parts=15 pages=15 groups=8 sprints=3 lanes=15 dependencies=valid notes=enabled theme=trader-os-action-model\n');
