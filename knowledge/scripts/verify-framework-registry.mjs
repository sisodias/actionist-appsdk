#!/usr/bin/env node

import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..', '..');
const frameworkRoot = resolve(root, 'knowledge', 'frameworks');
const registerPath = resolve(frameworkRoot, 'framework-register.json');
const graphPath = resolve(frameworkRoot, 'framework-dependency-graph.json');
const scoreSchemaPath = resolve(frameworkRoot, 'repository-value-score.schema.json');
const valueMatrixPath = resolve(frameworkRoot, 'repository-value-matrix-v1.md');
const failures = [];

const readJson = async path => {
  try {
    return JSON.parse(await readFile(path, 'utf8'));
  } catch (error) {
    failures.push(`invalid_json:${path}:${error.message}`);
    return null;
  }
};

const register = await readJson(registerPath);
const graph = await readJson(graphPath);
const scoreSchema = await readJson(scoreSchemaPath);
const valueMatrix = await readFile(valueMatrixPath, 'utf8').catch(error => {
  failures.push(`missing_value_matrix:${error.message}`);
  return '';
});

const categories = [
  'demand_product',
  'supply_discovery',
  'selection_valuation',
  'conversion_contracts',
  'composition_experience',
  'runtime_release',
  'learning_governance'
];
const maturities = ['idea', 'specified', 'machine_readable', 'dry_run', 'measured', 'operational'];
const evidenceClasses = ['observed', 'inferred', 'hypothesis', 'unknown', 'rejected'];
const requiredRecordFields = [
  'framework_id',
  'name',
  'category',
  'problem_owned',
  'reusable_framework_reason',
  'inputs',
  'outputs',
  'method',
  'machine_readable_artifacts',
  'maturity',
  'evidence_class',
  'evidence',
  'dependencies',
  'downstream_consumers',
  'boundaries',
  'falsifiers',
  'next_gate',
  'current_owner',
  'canonical_page'
];
const boundaryFields = ['deterministic', 'model_judgment', 'human_authority'];

const isFile = async path => (await stat(path).catch(() => null))?.isFile() === true;
const localPathExists = async path => {
  if (typeof path !== 'string' || !path) return false;
  return isFile(path.startsWith('/') ? path : resolve(root, path));
};
const addPathCheck = async (path, label) => {
  if (!(await localPathExists(path))) failures.push(`missing_local_path:${label}:${path}`);
};

if (!register) process.exitCode = 1;
if (!graph) process.exitCode = 1;
if (!scoreSchema) process.exitCode = 1;

const frameworks = register?.frameworks ?? [];
const ids = new Set(frameworks.map(framework => framework.framework_id));
if (register?.schema_version !== 'actionist.framework-register.v1') failures.push('register_schema_version');
if (register?.status !== 'research_only' || register?.research_only !== true) failures.push('register_boundary');
if (register?.canonical_page !== '/task-graph/frameworks/') failures.push('register_canonical_page');
if (frameworks.length !== register?.registry_summary?.framework_count) failures.push('summary_framework_count');
if (new Set(ids).size !== frameworks.length) failures.push('duplicate_framework_id');

for (const framework of frameworks) {
  for (const field of requiredRecordFields) {
    if (!(field in framework)) failures.push(`missing_field:${framework.framework_id ?? 'unknown'}:${field}`);
  }
  if (!/^FW-[A-Z0-9-]+$/.test(framework.framework_id ?? '')) failures.push(`invalid_framework_id:${framework.framework_id}`);
  if (!categories.includes(framework.category)) failures.push(`invalid_category:${framework.framework_id}`);
  if (!maturities.includes(framework.maturity)) failures.push(`invalid_maturity:${framework.framework_id}`);
  if (!evidenceClasses.includes(framework.evidence_class)) failures.push(`invalid_evidence_class:${framework.framework_id}`);
  if (!Array.isArray(framework.inputs) || !framework.inputs.length) failures.push(`empty_inputs:${framework.framework_id}`);
  if (!Array.isArray(framework.outputs) || !framework.outputs.length) failures.push(`empty_outputs:${framework.framework_id}`);
  if (!framework.method?.kind) failures.push(`missing_method_kind:${framework.framework_id}`);
  if (!Array.isArray(framework.method?.ordered_rules) || !framework.method.ordered_rules.length) failures.push(`missing_ordered_rules:${framework.framework_id}`);
  if (!Array.isArray(framework.machine_readable_artifacts) || !framework.machine_readable_artifacts.length) failures.push(`missing_machine_artifact:${framework.framework_id}`);
  if (!Array.isArray(framework.falsifiers) || !framework.falsifiers.length) failures.push(`missing_falsifier:${framework.framework_id}`);
  if (typeof framework.next_gate !== 'string' || !framework.next_gate.length) failures.push(`missing_next_gate:${framework.framework_id}`);
  if (typeof framework.current_owner !== 'string' || !framework.current_owner.length) failures.push(`missing_owner:${framework.framework_id}`);
  if (!/^\/task-graph\/frameworks\/#FW-[A-Z0-9-]+$/.test(framework.canonical_page ?? '')) failures.push(`invalid_canonical_page:${framework.framework_id}`);
  for (const field of boundaryFields) {
    if (!Array.isArray(framework.boundaries?.[field]) || !framework.boundaries[field].length) failures.push(`missing_boundary:${framework.framework_id}:${field}`);
  }
  const dependencies = framework.dependencies ?? [];
  if (new Set(dependencies).size !== dependencies.length) failures.push(`duplicate_dependency:${framework.framework_id}`);
  for (const dependency of dependencies) {
    if (!ids.has(dependency)) failures.push(`dangling_dependency:${framework.framework_id}:${dependency}`);
  }
  for (const consumer of framework.downstream_consumers ?? []) {
    if (consumer.startsWith('FW-') && !ids.has(consumer)) failures.push(`dangling_consumer:${framework.framework_id}:${consumer}`);
  }
  for (const artifact of framework.machine_readable_artifacts ?? []) await addPathCheck(artifact, `${framework.framework_id}:artifact`);
  if (!Array.isArray(framework.evidence) || !framework.evidence.length) failures.push(`missing_evidence:${framework.framework_id}`);
  for (const evidence of framework.evidence ?? []) {
    if (!['local', 'external', 'unknown'].includes(evidence.kind)) failures.push(`invalid_evidence_kind:${framework.framework_id}`);
    if (!evidenceClasses.includes(evidence.evidence_class)) failures.push(`invalid_evidence_class:${framework.framework_id}:evidence`);
    if (evidence.kind === 'local') await addPathCheck(evidence.path, `${framework.framework_id}:evidence`);
    if (evidence.kind === 'external' && !/^https?:\/\//.test(evidence.path ?? '')) failures.push(`invalid_external_evidence:${framework.framework_id}`);
    if (evidence.kind === 'unknown' && (!evidence.reason || evidence.path)) failures.push(`invalid_unknown_evidence:${framework.framework_id}`);
  }
}

const expectedMaturityCounts = Object.fromEntries(maturities.map(maturity => [maturity, frameworks.filter(framework => framework.maturity === maturity).length]));
const expectedCategoryCounts = Object.fromEntries(categories.map(category => [category, frameworks.filter(framework => framework.category === category).length]));
for (const maturity of maturities) {
  if (register?.registry_summary?.maturity_counts?.[maturity] !== expectedMaturityCounts[maturity]) failures.push(`maturity_count:${maturity}`);
}
for (const category of categories) {
  if (register?.registry_summary?.category_counts?.[category] !== expectedCategoryCounts[category]) failures.push(`category_count:${category}`);
}
if (register?.registry_summary?.gap_count !== (register?.gaps?.length ?? 0)) failures.push('summary_gap_count');
if (register?.registry_summary?.admitted_frameworks !== 0) failures.push('admitted_frameworks_nonzero');
if (register?.registry_summary?.operational_frameworks !== 0) failures.push('operational_frameworks_nonzero');

const coverage = register?.load_bearing_coverage ?? {};
if (Object.keys(coverage).length < 20) failures.push('load_bearing_coverage_thin');
for (const [label, frameworkId] of Object.entries(coverage)) {
  if (!ids.has(frameworkId)) failures.push(`coverage_dangling:${label}:${frameworkId}`);
}

if (graph) {
  const graphNodeIds = new Set((graph.nodes ?? []).map(node => node.framework_id));
  if (graph.schema_version !== 'actionist.framework-dependency-graph.v1') failures.push('graph_schema_version');
  if (graph.status !== 'research_only' || graph.research_only !== true) failures.push('graph_boundary');
  if (graph.node_count !== (graph.nodes ?? []).length || graph.node_count !== frameworks.length) failures.push('graph_node_count');
  if (graph.edge_count !== (graph.edges ?? []).length) failures.push('graph_edge_count');
  if (graphNodeIds.size !== frameworks.length || [...ids].some(id => !graphNodeIds.has(id))) failures.push('graph_node_identity_mismatch');
  const expectedEdges = new Set(frameworks.flatMap(framework => (framework.dependencies ?? []).map(dependency => `${dependency}->${framework.framework_id}`)));
  const actualEdges = new Set((graph.edges ?? []).map(edge => `${edge.from}->${edge.to}`));
  if (expectedEdges.size !== actualEdges.size || [...expectedEdges].some(edge => !actualEdges.has(edge)) || [...actualEdges].some(edge => !expectedEdges.has(edge))) failures.push('graph_dependency_edge_mismatch');
  for (const edge of graph.edges ?? []) {
    if (!graphNodeIds.has(edge.from) || !graphNodeIds.has(edge.to)) failures.push(`graph_dangling_edge:${edge.from}->${edge.to}`);
    if (edge.from === edge.to) failures.push(`graph_self_edge:${edge.from}`);
    if (edge.kind !== 'requires') failures.push(`graph_edge_kind:${edge.from}->${edge.to}`);
  }
  const adjacency = Object.fromEntries([...graphNodeIds].map(id => [id, []]));
  for (const edge of graph.edges ?? []) adjacency[edge.from].push(edge.to);
  const visiting = new Set();
  const visited = new Set();
  const visit = id => {
    if (visiting.has(id)) return true;
    if (visited.has(id)) return false;
    visiting.add(id);
    const cycle = adjacency[id].some(visit);
    visiting.delete(id);
    visited.add(id);
    return cycle;
  };
  if ([...graphNodeIds].some(visit)) failures.push('graph_cycle');
  const incoming = new Set((graph.edges ?? []).map(edge => edge.to));
  const outgoing = new Set((graph.edges ?? []).map(edge => edge.from));
  for (const rootId of graph.roots ?? []) if (!graphNodeIds.has(rootId) || incoming.has(rootId)) failures.push(`invalid_graph_root:${rootId}`);
  for (const terminalId of graph.terminal_frameworks ?? []) if (!graphNodeIds.has(terminalId) || outgoing.has(terminalId)) failures.push(`invalid_graph_terminal:${terminalId}`);
}

const matrix = scoreSchema?.['x-actionist-value-matrix'];
const scoreShapes = ['complete_product', 'surface_module', 'engine', 'package', 'pattern'];
const matrixDimensions = matrix?.dimensions ?? [];
if (matrix?.version !== 'rvm-v1') failures.push('value_matrix_version');
if (matrixDimensions.length !== 11 || new Set(matrixDimensions).size !== matrixDimensions.length) failures.push('value_matrix_dimension_count');
if (scoreSchema?.properties?.shape_scores?.required?.join('|') !== scoreShapes.join('|')) failures.push('score_schema_shape_set');
for (const shape of scoreShapes) {
  const weights = matrix?.shape_weights?.[shape] ?? {};
  if (Object.keys(weights).sort().join('|') !== [...matrixDimensions].sort().join('|')) failures.push(`weight_dimension_set:${shape}`);
  const total = Object.values(weights).reduce((sum, value) => sum + Number(value), 0);
  if (Math.abs(total - 1) > 1e-9) failures.push(`weight_sum:${shape}:${total}`);
  if (!(shape in matrix?.hard_gates ?? {})) failures.push(`hard_gates_missing:${shape}`);
}
for (const anchor of matrix?.calibration_anchors ?? []) {
  if (anchor.score_status !== 'protocol_defined_not_run') failures.push(`calibration_anchor_status:${anchor.id}`);
  if ('score' in anchor || 'diamond_score' in anchor) failures.push(`calibration_anchor_fabricated_score:${anchor.id}`);
  for (const path of anchor.evidence_paths ?? []) await addPathCheck(path, `calibration:${anchor.id}`);
}
for (const requiredText of ['shape-specific', 'Diamond Score', 'VSCP-1', 'T0', 'T1', 'T2', 'T3', 'T4', 'AFFiNE', 'Twenty', 'Chatwoot', 'Plane', 'unknown', 'not zero']) {
  if (!valueMatrix.toLowerCase().includes(requiredText.toLowerCase())) failures.push(`value_matrix_content:${requiredText}`);
}

const requiredSchemaRefs = ['source_identity', 'scoring_context', 'dimensions', 'shape_scores', 'provenance'];
for (const ref of requiredSchemaRefs) if (!scoreSchema?.properties?.[ref]) failures.push(`score_schema_missing:${ref}`);
if (!scoreSchema?.$defs?.shape_score || !scoreSchema?.$defs?.dimension) failures.push('score_schema_defs_missing');

if (failures.length) {
  process.stderr.write(`FRAMEWORK_REGISTRY_SMOKE_FAIL count=${failures.length}\n${failures.join('\n')}\n`);
  process.exit(1);
}

process.stdout.write(`FRAMEWORK_REGISTRY_SMOKE_PASS frameworks=${frameworks.length} edges=${graph.edges.length} gaps=${register.gaps.length} maturity=idea:${expectedMaturityCounts.idea},specified:${expectedMaturityCounts.specified},machine_readable:${expectedMaturityCounts.machine_readable},dry_run:${expectedMaturityCounts.dry_run},measured:${expectedMaturityCounts.measured},operational:${expectedMaturityCounts.operational} value_matrix_shapes=${scoreShapes.length} anchors=${matrix.calibration_anchors.length}\n`);
