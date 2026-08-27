#!/usr/bin/env node

import { readFile, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const spineDir = resolve(scriptDir, '..');
const requiredDocs = [
  'README.md',
  '00-MASTER-SYNTHESIS.md',
  '01-DOMAIN-MAP.md',
  '02-ASSUMPTION-LEDGER.md',
  '03-EVIDENCE-MAP.md',
  '04-OPEN-QUESTIONS.md',
  '05-EXPERIMENT-ROADMAP.md'
];

const failures = [];
const linkPattern = /\[[^\]]+\]\(([^)]+)\)/g;

for (const name of requiredDocs) {
  const path = join(spineDir, name);
  const info = await stat(path).catch(() => null);
  if (!info || info.size === 0) failures.push(`missing_or_empty:${name}`);
  if (!info) continue;
  const text = await readFile(path, 'utf8');
  for (const match of text.matchAll(linkPattern)) {
    const target = match[1].split('#')[0];
    if (!target || /^https?:/.test(target)) continue;
    const resolved = target.startsWith('/') ? target : resolve(dirname(path), target);
    const linked = await stat(resolved).catch(() => null);
    if (!linked) failures.push(`broken_link:${name}:${target}`);
  }
}

const inventoryText = await readFile(join(spineDir, 'source-inventory.jsonl'), 'utf8');
const inventoryLines = inventoryText.trim().split('\n');
const inventory = inventoryLines.map((line, index) => {
  try {
    return JSON.parse(line);
  } catch {
    failures.push(`invalid_inventory_json:${index + 1}`);
    return null;
  }
}).filter(Boolean);

const graph = JSON.parse(await readFile(join(spineDir, 'knowledge-graph.json'), 'utf8'));
const summary = JSON.parse(await readFile(join(spineDir, 'inventory-summary.json'), 'utf8'));
const nodeIds = new Set(graph.nodes.map(node => node.id));
const sourceIds = inventory.map(record => record.source_id);

if (new Set(sourceIds).size !== sourceIds.length) failures.push('duplicate_source_ids');
if (summary.source_count !== inventory.length) failures.push('summary_source_count_mismatch');
if (summary.roots_configured !== 10 || summary.roots_present !== 10) failures.push('configured_evidence_root_missing');
if (summary.source_count < 930) failures.push('source_inventory_regression');
if (graph.node_count !== graph.nodes.length) failures.push('graph_node_count_mismatch');
if (graph.edge_count !== graph.edges.length) failures.push('graph_edge_count_mismatch');
if (graph.nodes.filter(node => node.type === 'domain').length !== 18) failures.push('domain_node_count_not_18');
if (graph.nodes.filter(node => node.type === 'source').length !== inventory.length) failures.push('source_node_count_mismatch');
if (graph.edges.some(edge => !nodeIds.has(edge.from) || !nodeIds.has(edge.to))) failures.push('dangling_graph_edge');
if (!summary.research_only || summary.agents_dispatched !== 0) failures.push('boundary_mismatch');

for (let id = 1; id <= 18; id += 1) {
  const domain = `D${String(id).padStart(2, '0')}`;
  if (!nodeIds.has(domain)) failures.push(`missing_domain:${domain}`);
  if (!graph.edges.some(edge => edge.to === domain)) failures.push(`unlinked_domain:${domain}`);
}

if (failures.length) {
  process.stderr.write(`SPINE_SMOKE_FAIL count=${failures.length}\n${failures.join('\n')}\n`);
  process.exit(1);
}

process.stdout.write(`SPINE_SMOKE_PASS docs=${requiredDocs.length} sources=${inventory.length} nodes=${graph.nodes.length} edges=${graph.edges.length}\n`);
