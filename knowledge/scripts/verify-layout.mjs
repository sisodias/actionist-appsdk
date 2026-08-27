#!/usr/bin/env node

import { lstat, readFile, realpath, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, '..', '..');
const compatibilityRoot = join(root, 'Actionist-AppSDK', 'SISO');
const failures = [];

const canonicalDirectories = ['knowledge', 'architecture', 'research', 'client', 'site', 'runtime'];
const canonicalFiles = ['AGENTS.md', 'README.md', 'CURRENT_STATE.md', 'PROJECT.md', 'CLAUDE.md', 'REORGANIZATION-MAP.md'];

for (const path of canonicalDirectories) {
  const info = await stat(join(root, path)).catch(() => null);
  if (!info?.isDirectory()) failures.push(`missing_directory:${path}`);
}
for (const path of canonicalFiles) {
  const info = await stat(join(root, path)).catch(() => null);
  if (!info?.isFile() || info.size === 0) failures.push(`missing_file:${path}`);
}

const compatibility = {
  research: 'research',
  design: 'architecture',
  'call-prep': 'client/call-prep',
  comms: 'client/comms',
  'SHAAN-PROMPTS-VERBATIM.md': 'client/SHAAN-PROMPTS-VERBATIM.md',
  'README.md': 'README.md',
  'PROJECT.md': 'PROJECT.md',
  'CLAUDE.md': 'CLAUDE.md',
  'index.html': 'site/index.html',
  'RESEARCH-PACK.html': 'site/RESEARCH-PACK.html',
  'favicon.svg': 'site/favicon.svg',
  '.playwright-cli': 'runtime/playwright-cli',
  '.wrangler': 'runtime/wrangler',
  '.claude': 'runtime/claude'
};

for (const [oldName, canonicalName] of Object.entries(compatibility)) {
  const oldPath = join(compatibilityRoot, oldName);
  const oldInfo = await lstat(oldPath).catch(() => null);
  if (!oldInfo?.isSymbolicLink()) {
    failures.push(`compatibility_not_symlink:${oldName}`);
    continue;
  }
  const [oldReal, canonicalReal] = await Promise.all([
    realpath(oldPath).catch(() => null),
    realpath(join(root, canonicalName)).catch(() => null)
  ]);
  if (!oldReal || oldReal !== canonicalReal) failures.push(`compatibility_target_mismatch:${oldName}`);
}

const movedSpine = join(root, 'research', 'actionmodel-builder-research-2026-08-26', 'knowledge-spine');
const movedSpineInfo = await lstat(movedSpine).catch(() => null);
if (!movedSpineInfo?.isSymbolicLink() || await realpath(movedSpine) !== await realpath(join(root, 'knowledge'))) {
  failures.push('knowledge_spine_compatibility_mismatch');
}

const docs = [
  ...canonicalFiles,
  'research/README.md',
  'architecture/README.md',
  'client/README.md',
  'site/README.md',
  'runtime/README.md',
  'knowledge/README.md'
];
const markdownLink = /\[[^\]]+\]\(([^)]+)\)/g;
for (const doc of docs) {
  const path = join(root, doc);
  const text = await readFile(path, 'utf8');
  for (const match of text.matchAll(markdownLink)) {
    const target = match[1].split('#')[0];
    if (!target || /^https?:/.test(target)) continue;
    const destination = target.startsWith('/') ? target : resolve(dirname(path), target);
    if (!(await stat(destination).catch(() => null))) failures.push(`broken_link:${doc}:${target}`);
  }
}

const siteIndex = await readFile(join(root, 'site', 'index.html'), 'utf8');
for (const match of siteIndex.matchAll(/href="([^"]+)"/g)) {
  const target = match[1].split('#')[0];
  if (!target || target.startsWith('#') || /^https?:/.test(target)) continue;
  const destination = resolve(join(root, 'site'), target);
  if (!(await stat(destination).catch(() => null))) failures.push(`broken_site_link:${target}`);
}

if (failures.length) {
  process.stderr.write(`LAYOUT_SMOKE_FAIL count=${failures.length}\n${failures.join('\n')}\n`);
  process.exit(1);
}

process.stdout.write(`LAYOUT_SMOKE_PASS canonical_dirs=${canonicalDirectories.length} compatibility_links=${Object.keys(compatibility).length + 1} indexed_docs=${docs.length}\n`);
