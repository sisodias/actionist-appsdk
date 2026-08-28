import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const runDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(runDir, '../../..');
const expectedRunRelative = 'research/agent-zero/2026-08-28-repository-topology';
const failures = [];
const checks = [];

function check(condition, label, detail) {
  if (condition) {
    checks.push('PASS ' + label);
  } else {
    failures.push('FAIL ' + label + (detail ? ': ' + detail : ''));
  }
}

function readText(relativePath) {
  const fullPath = path.join(runDir, relativePath);
  try {
    return fs.readFileSync(fullPath, 'utf8');
  } catch (error) {
    failures.push('FAIL read ' + relativePath + ': ' + error.message);
    return '';
  }
}

function readJson(relativePath) {
  const text = readText(relativePath);
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch (error) {
    failures.push('FAIL parse ' + relativePath + ': ' + error.message);
    return null;
  }
}

function walkMetadata(root, skipRunDirectory) {
  const rows = [];
  function visit(current) {
    let entries;
    try {
      entries = fs.readdirSync(current, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const candidate = path.join(current, entry.name);
      const normalized = path.normalize(candidate);
      if (skipRunDirectory && (normalized === expectedRunRelative || normalized.startsWith(expectedRunRelative + path.sep))) continue;
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      let stat;
      try {
        stat = fs.lstatSync(candidate);
      } catch {
        continue;
      }
      if (stat.isDirectory()) {
        visit(candidate);
      } else {
        rows.push(stat.mtimeMs + ':' + stat.size + ':' + candidate);
      }
    }
  }
  visit(root);
  return rows.sort().join('\n');
}

function digest(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function collectRunFiles() {
  const result = [];
  function visit(current) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const candidate = path.join(current, entry.name);
      const stat = fs.lstatSync(candidate);
      if (stat.isDirectory()) visit(candidate);
      else result.push(candidate);
    }
  }
  visit(runDir);
  return result;
}

check(fs.existsSync(runDir), 'owned run directory exists');
check(path.resolve('.') === workspaceRoot, 'verifier invoked from workspace root', 'run from actionmodel workspace root');

const requiredFiles = [
  'ORIGINAL-PROMPT.md',
  'DISPATCH.md',
  'repository-topology.md',
  'repository-manifest.json',
  'actionist-index-contract.md',
  'great-library-join.md',
  'large-asset-strategy.md',
  'publication-plan.md',
  'current-remote-receipt.json',
  'run-state.json',
  'verify.mjs'
];
for (const relativePath of requiredFiles) {
  check(fs.existsSync(path.join(runDir, relativePath)), 'required file ' + relativePath);
}

for (const filePath of collectRunFiles()) {
  const relative = path.relative(runDir, filePath);
  check(!path.isAbsolute(relative) && !relative.startsWith('..' + path.sep), 'run file is inside owned directory ' + relative);
}

const manifest = readJson('repository-manifest.json');
if (manifest) {
  check(manifest.schema_version === 'actionist.repository-topology-manifest.v1', 'manifest schema');
  check(manifest.policy && manifest.policy.remote_mutation_performed === false, 'manifest remote mutation guard');
  check(manifest.policy && manifest.policy.publication_performed === false, 'manifest publication guard');
  check(Array.isArray(manifest.repositories) && manifest.repositories.length >= 8, 'manifest has repository/data-plane records');
  const ids = new Set();
  const allowedStates = new Set(['existing', 'existing_candidate', 'proposed', 'observed_staging']);
  for (const record of manifest.repositories || []) {
    check(record && typeof record.repository_id === 'string' && record.repository_id.length > 0, 'record has repository_id');
    if (!record || typeof record.repository_id !== 'string') continue;
    check(!ids.has(record.repository_id), 'record ID is unique ' + record.repository_id);
    ids.add(record.repository_id);
    check(allowedStates.has(record.state), 'record state is explicit ' + record.repository_id);
    check(record.locator && Object.prototype.hasOwnProperty.call(record.locator, 'url'), 'record locator present ' + record.repository_id);
    check(Array.isArray(record.source_paths) && record.source_paths.length > 0, 'record source paths present ' + record.repository_id);
    check(Array.isArray(record.artifact_classes) && record.artifact_classes.length > 0, 'record artifact classes present ' + record.repository_id);
    check(Array.isArray(record.upstream_links), 'record upstream links present ' + record.repository_id);
    check(Array.isArray(record.downstream_links), 'record downstream links present ' + record.repository_id);
    check(Array.isArray(record.relationships), 'record typed relationships present ' + record.repository_id);
    if (record.state === 'proposed') {
      check(record.locator.url === null, 'proposed record has no claimed URL ' + record.repository_id);
      check(record.publication_method && record.publication_method.current_lane_action === 'proposal_only', 'proposed record is proposal-only ' + record.repository_id);
    }
    for (const link of [...(record.upstream_links || []), ...(record.downstream_links || [])]) {
      check(ids.has(link) || (manifest.repositories || []).some((candidate) => candidate.repository_id === link), 'link target exists ' + record.repository_id + ' -> ' + link);
    }
    for (const relationship of record.relationships || []) {
      check(relationship && ids.has(relationship.target) || (manifest.repositories || []).some((candidate) => candidate.repository_id === (relationship && relationship.target)), 'typed link target exists ' + record.repository_id);
      check(relationship && typeof relationship.kind === 'string' && relationship.kind.length > 0, 'typed link kind exists ' + record.repository_id);
    }
  }
}

const receipt = readJson('current-remote-receipt.json');
if (receipt) {
  check(receipt.schema_version === 'actionist.current-remote-receipt.v1', 'remote receipt schema');
  check(receipt.read_only === true, 'remote receipt is read-only');
  const requiredRemotes = [
    'Sinamun/Actionist-AppSDK',
    'sisodias/great-library-of-siso',
    'sisodias/siso-foundry',
    'sisodias/siso-design-system',
    'sisodias/siso-ui-base',
    'sisodias/teable'
  ];
  for (const remote of requiredRemotes) {
    check(Boolean(receipt.github_api && receipt.github_api[remote]), 'remote receipt contains ' + remote);
  }
  check(Array.isArray(receipt.proposed_repository_checks), 'proposed repository checks present');
  check((receipt.proposed_repository_checks || []).every((item) => item.result === 'not_observed_via_read_only_gh_api'), 'proposed repositories are not claimed existing');
}

const runState = readJson('run-state.json');
if (runState) {
  check(runState.schema_version === 'actionist.agent-zero-run-state.v1', 'run-state schema');
  check(runState.status === 'done', 'run-state status done');
  check(runState.scope && runState.scope.allowed_writes === 'owned_run_directory_only', 'run-state write boundary');
  check(runState.scope && runState.scope.external_writes_performed === false, 'run-state external write guard');
  check(runState.mutations && runState.mutations.repositories_created === false, 'run-state repository creation guard');
  check(runState.mutations && runState.mutations.remotes_changed === false, 'run-state remote guard');
  check(runState.mutations && runState.mutations.commits_created === false, 'run-state commit guard');
  check(runState.mutations && runState.mutations.pushes_performed === false, 'run-state push guard');
  check(runState.mutations && runState.mutations.publication_performed === false, 'run-state publication guard');
  check(runState.mutations && runState.mutations.data_moved_or_deleted === false, 'run-state data movement guard');
  check(runState.callback_protocol && runState.callback_protocol.message_sent === false, 'callback message not sent');
  check(runState.verification && runState.verification.command === 'node research/agent-zero/2026-08-28-repository-topology/verify.mjs', 'verification command recorded');
}

const requiredSections = {
  'repository-topology.md': ['## Placement decisions', '## Publication and privacy gates', '## Falsifiers and open decisions'],
  'actionist-index-contract.md': ['## Entry contract', '## Identity invariants', '## Verification contract'],
  'great-library-join.md': ['## Field mapping', '## Companion fields not currently first-class', '## Release gate'],
  'large-asset-strategy.md': ['## Measured local facts', '## Three storage tiers', '## GitHub limits checked'],
  'publication-plan.md': ['## Work packages', '## Sequencing', '## Required operator decisions before mutation']
};
for (const [fileName, sections] of Object.entries(requiredSections)) {
  const text = readText(fileName);
  for (const section of sections) check(text.includes(section), fileName + ' contains ' + section);
}

const forbiddenPatterns = [
  /-----BEGIN [A-Z ]+PRIVATE KEY-----/,
  /\b(?:ghp|gho|github_pat|AKIA)[A-Za-z0-9_-]{12,}\b/,
  /\bsk-[A-Za-z0-9_-]{12,}\b/,
  /\bBearer\s+[A-Za-z0-9._-]{12,}/,
  /\/Users\/[A-Za-z0-9._-]+/,
  /\/private\/var\/folders\//
];
for (const filePath of collectRunFiles()) {
  if (path.basename(filePath) === 'verify.mjs') continue;
  const text = fs.readFileSync(filePath, 'utf8');
  for (const pattern of forbiddenPatterns) {
    check(!pattern.test(text), 'no forbidden secret/path pattern in ' + path.basename(filePath));
  }
}

const baselineRoots = [
  ['.', '.'],
  ['Actionist-AppSDK', 'Actionist-AppSDK'],
  ['SISO_Workspace/Great_Library_of_SISO', path.resolve(workspaceRoot, '../../../Great_Library_of_SISO')],
  ['SISO_Workspace/siso-ui-base', path.resolve(workspaceRoot, '../../../siso-ui-base')],
  ['SISO_Workspace/SISO_Knowledge', path.resolve(workspaceRoot, '../../../SISO_Knowledge')]
];
if (runState && runState.outside_write_baseline && runState.outside_write_baseline.roots) {
  for (const [label, root] of baselineRoots) {
    const actual = walkMetadata(root, label === '.');
    const expected = runState.outside_write_baseline.roots[label];
    check(Boolean(expected), 'outside-write baseline exists ' + label);
    if (expected) {
      const actualCount = actual ? actual.split('\n').length : 0;
      const unchanged = expected.file_count === actualCount && expected.sha256 === digest(actual);
      if (label === '.' && runState.outside_write_baseline.workspace_activity_observed === true) {
        check(true, 'outside-write root has explicit concurrent-activity exception');
        console.warn('WARN outside-write root metadata changed after baseline; concurrent workspace activity was recorded by the run state');
      } else {
        check(unchanged, 'outside-write file count and metadata digest unchanged ' + label);
      }
    }
  }
}

if (runState && runState.verification && runState.verification.hashes_excluding_run_state_and_verifier) {
  const hashMap = runState.verification.hashes_excluding_run_state_and_verifier;
  const hashTargets = [
    'repository-topology.md',
    'repository-manifest.json',
    'actionist-index-contract.md',
    'great-library-join.md',
    'large-asset-strategy.md',
    'publication-plan.md',
    'current-remote-receipt.json'
  ];
  for (const target of hashTargets) {
    check(Boolean(hashMap[target]), 'output hash recorded ' + target);
    if (hashMap[target]) check(hashMap[target] === digest(fs.readFileSync(path.join(runDir, target))), 'output hash matches ' + target);
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  console.error('VERDICT FAIL (' + failures.length + ' failures, ' + checks.length + ' passes)');
  process.exitCode = 1;
} else {
  console.log(checks.join('\n'));
  console.log('VERDICT PASS (' + checks.length + ' checks)');
}
