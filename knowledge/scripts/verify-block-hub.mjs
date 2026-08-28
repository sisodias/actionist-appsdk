#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..', '..');
const hub = JSON.parse(await readFile(resolve(root, 'knowledge', 'block-hub', 'block-register.json'), 'utf8'));
const recipes = JSON.parse(await readFile(resolve(root, 'knowledge', 'block-hub', 'composition-recipes.json'), 'utf8'));
const universe = JSON.parse(await readFile(resolve(root, 'research', 'base-portfolio-2026-08-27', 'base-universe-v2.json'), 'utf8'));
const sources = (await readFile(resolve(root, 'knowledge', 'capability-shelf', 'source-registry.jsonl'), 'utf8')).split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
const edges = (await readFile(resolve(root, 'knowledge', 'block-hub', 'block-source-edges.jsonl'), 'utf8')).split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
const failures = [];

const blockIds = hub.blocks.map(item => item.id);
const blockSet = new Set(blockIds);
const familySet = new Set(universe.families.map(item => item.id));
const sourceMap = new Map(sources.map(item => [item.source_id, item]));
const recipeSet = new Set(recipes.recipes.map(item => item.id));

if (hub.schema_version !== 'actionist.block-hub.v1') failures.push('schema_version');
if (hub.blocks.length !== 80 || blockSet.size !== 80) failures.push('block_identity_count');
if (blockIds.some((id, index) => id !== `B${String(index + 1).padStart(3, '0')}`)) failures.push('block_identity_sequence');
if (recipes.recipes.length !== 5 || recipeSet.size !== 5) failures.push('recipe_identity_count');
if (edges.length !== hub.counts.source_edges) failures.push('edge_count_parity');
if (new Set(edges.map(edge => `${edge.block_id}:${edge.source_id}`)).size !== edges.length) failures.push('duplicate_source_edge');

for (const item of hub.blocks) {
  for (const field of ['name','layer','stage','outcome','coverage']) if (!item[field]) failures.push(`missing:${item.id}:${field}`);
  if (!item.recipes.length || item.recipes.some(id => !recipeSet.has(id))) failures.push(`recipe_ref:${item.id}`);
  if (!item.surfaces.length) failures.push(`surface_empty:${item.id}`);
  if (item.family_ids.some(id => !familySet.has(id))) failures.push(`family_ref:${item.id}`);
  if (item.top_candidates.length !== Math.min(5, item.candidate_count)) failures.push(`candidate_count:${item.id}`);
  for (const candidate of item.top_candidates) {
    const source = sourceMap.get(candidate.source_id);
    if (!source || source.repo !== candidate.repo) failures.push(`source_ref:${item.id}:${candidate.source_id}`);
  }
  for (const candidate of item.targeted_gap_candidates) {
    if (!/^https:\/\/github\.com\/.+\/.+/.test(candidate.url)) failures.push(`targeted_url:${item.id}:${candidate.repo}`);
    if (candidate.qualification_status !== 'NOT_QUALIFIED') failures.push(`targeted_qualification:${item.id}:${candidate.repo}`);
  }
}

for (const recipe of recipes.recipes) {
  if (recipe.required_blocks.length !== recipe.block_count) failures.push(`recipe_count:${recipe.id}`);
  if (new Set(recipe.required_blocks).size !== recipe.required_blocks.length) failures.push(`recipe_duplicate:${recipe.id}`);
  if (recipe.required_blocks.some(id => !blockSet.has(id))) failures.push(`recipe_block_ref:${recipe.id}`);
}

const universalEmployees = ['B002','B003','B004'];
for (const id of universalEmployees) {
  const item = hub.blocks.find(block => block.id === id);
  if (!item || item.recipes.length !== 5) failures.push(`employee_not_universal:${id}`);
}

if (failures.length) {
  process.stderr.write(`BLOCK_HUB_SMOKE_FAIL count=${failures.length}\n${failures.join('\n')}\n`);
  process.exit(1);
}

process.stdout.write(`BLOCK_HUB_SMOKE_PASS blocks=${hub.blocks.length} recipes=${recipes.recipes.length} edges=${edges.length} sources=${sources.length} families=${universe.families.length} gaps=${hub.counts.thin_or_gap}\n`);
