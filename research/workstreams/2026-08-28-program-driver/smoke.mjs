import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(import.meta.dirname, '../../..');
const laneRoot = path.resolve(repoRoot, 'research/workstreams/2026-08-28-program-driver');
const requiredFiles = [
  'program-status.md',
  'master-task-graph.json',
  'live-lanes.json',
  'critical-path.md',
  'operator-decisions.md',
  'canonical-update-proposals.md',
  'lane-state.json',
  'smoke.mjs'
];
const allowedStatuses = new Set([
  'complete',
    'research_complete_with_holds',
    'active',
    'verified_prototype_with_holds',
  'blocked_operator',
  'blocked_dependency',
  'not_started',
  'deferred',
  'unknown'
]);
const failures = [];
const checks = [];

function check(name, condition, detail = '') {
  if (condition) checks.push(`PASS ${name}${detail ? ` — ${detail}` : ''}`);
  else failures.push(`FAIL ${name}${detail ? ` — ${detail}` : ''}`);
}

function readJson(relativePath) {
  const absolutePath = path.resolve(repoRoot, relativePath);
  try {
    return JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
  } catch (error) {
    failures.push(`FAIL JSON parse ${relativePath} — ${error.message}`);
    return null;
  }
}

function exists(relativePath) {
  return fs.existsSync(path.resolve(repoRoot, relativePath));
}

for (const file of requiredFiles) {
  check(`required artifact ${file}`, fs.existsSync(path.join(laneRoot, file)));
}

const graph = readJson('research/workstreams/2026-08-28-program-driver/master-task-graph.json');
const lanes = readJson('research/workstreams/2026-08-28-program-driver/live-lanes.json');
const state = readJson('research/workstreams/2026-08-28-program-driver/lane-state.json');
const frameworkRegister = readJson('knowledge/frameworks/framework-register.json');
const frameworkGraph = readJson('knowledge/frameworks/framework-dependency-graph.json');
const affineVerification = readJson('research/workstreams/2026-08-28-affine-block/run/verification.json');
const teableReceipt = readJson('research/workstreams/2026-08-28-teable-block/runs/2026-08-28-teable-block-v0.1/run-receipt.json');
const topologyRunState = readJson('research/agent-zero/2026-08-28-repository-topology/run-state.json');
const topologyManifest = readJson('research/agent-zero/2026-08-28-repository-topology/repository-manifest.json');
const solverRunState = readJson('research/workstreams/2026-08-28-three-candidate-solver-pilot/lane-state.json');
const solverResults = readJson('research/workstreams/2026-08-28-three-candidate-solver-pilot/solver-results.json');

check('graph loaded', graph !== null);
check('live lanes loaded', lanes !== null);
check('lane state loaded', state !== null);

if (graph) {
  const tasks = Array.isArray(graph.tasks) ? graph.tasks : [];
  const domains = Array.isArray(graph.domains) ? graph.domains : [];
  const movingParts = Array.isArray(graph.moving_parts) ? graph.moving_parts : [];
  const ids = tasks.map(task => task.id);
  check('task IDs are unique', new Set(ids).size === ids.length, `${ids.length} task IDs`);
  check('18 domains represented', domains.length === 18, `${domains.length} domains`);
  check('15 moving parts represented', movingParts.length === 15, `${movingParts.length} moving parts`);
  check('task statuses use vocabulary', tasks.every(task => allowedStatuses.has(task.status)));
  check('domain statuses use vocabulary', domains.every(domain => allowedStatuses.has(domain.status)));
  check('moving-part statuses use vocabulary', movingParts.every(part => allowedStatuses.has(part.status)));
  const pilotGate = tasks.find(task => task.id === 'PD-006');
  check('coordinator defaults have no outstanding operator decision', graph.coordinator_defaults?.outstanding_operator_decisions === 0);
  check('contract-only pilot records a complete verified refusal',
    pilotGate?.status === 'complete' && pilotGate?.gate_status === 'COMPLETE_VERIFIED_REFUSAL' && pilotGate?.operator_required === false &&
    graph.coordinator_defaults?.['OD-02']?.authorization?.includes('automatic') &&
    graph.coordinator_defaults?.['OD-02']?.gate_status === 'COMPLETE_VERIFIED_REFUSAL' &&
    JSON.stringify(graph.coordinator_defaults?.['OD-02']?.verified_packet_ids) === JSON.stringify(['PD-003', 'PD-004', 'PD-005']) &&
    graph.coordinator_defaults?.['OD-02']?.remaining_packet_ids?.length === 0 &&
    graph.coordinator_defaults?.['OD-02']?.excluded?.includes('staged binding') &&
    graph.coordinator_defaults?.['OD-03']?.third_candidate === 'Chatwoot');
  const solverPilot = tasks.find(task => task.id === 'PD-007');
  check('contract-only solver pilot is a verified refusal, not a relaxation',
    solverPilot?.status === 'complete' && solverPilot?.gate_status === 'COMPLETE_VERIFIED_REFUSAL' &&
    solverPilot?.packet_verdict === 'COMPLETE_VERIFIED_REFUSAL' && solverPilot?.authorized === true && solverPilot?.research_only === true &&
    JSON.stringify(solverPilot?.candidate_set?.map(candidate => candidate.name)) === JSON.stringify(['AFFiNE', 'Teable', 'Chatwoot']) &&
    solverPilot?.exclusions?.includes('source execution') && solverPilot?.exclusions?.includes('client data') &&
    solverPilot?.verification?.artifact_count === 14 && solverPilot?.verification?.candidate_count === 3 &&
    solverPilot?.verification?.records_per_candidate === 7 && solverPilot?.verification?.ordered_rules === 22 &&
    solverPilot?.verification?.distinct_constraints === 19 && solverPilot?.verification?.repeated_runs === 3 &&
    solverPilot?.verification?.digest_parity === 'PASS' && solverPilot?.verification?.relaxations === 0);
  const solverScenarios = solverResults?.scenario_results ?? [];
  check('solver receipt refuses every scenario first at R-SCOPE',
    solverRunState?.status === 'done' && solverRunState?.verification?.status === 'pass' &&
    solverRunState?.headline_verdicts && Object.values(solverRunState.headline_verdicts).length === 4 &&
    Object.values(solverRunState.headline_verdicts).every(verdict => verdict === 'INFEASIBLE') &&
    Object.values(solverRunState.first_non_pass ?? {}).every(rule => rule === 'R-SCOPE') &&
    solverResults?.exact_run_count === 3 && solverResults?.rule_counts?.ordered_rules === 22 &&
    solverResults?.rule_counts?.distinct_constraints === 19 && solverResults?.digest_parity?.all_equal === true &&
    solverResults?.runs?.every(run => run.relaxations_applied === 0) && solverScenarios.length === 4 &&
    solverScenarios.every(scenario => scenario.verdict === 'INFEASIBLE' && scenario.first_non_pass?.rule_id === 'R-SCOPE'));
  const affineScenario = solverScenarios.find(scenario => scenario.scenario_id === 'candidate-affine');
  const teableScenario = solverScenarios.find(scenario => scenario.scenario_id === 'candidate-teable');
  const chatwootScenario = solverScenarios.find(scenario => scenario.scenario_id === 'candidate-chatwoot');
  const combinedScenario = solverScenarios.find(scenario => scenario.scenario_id === 'combined-all-three');
  const outcomeHas = (scenario, ruleId, outcome) => scenario?.rule_outcomes?.some(rule => rule.rule_id === ruleId && rule.outcome === outcome);
  check('solver receipt preserves later failures and unknowns',
    outcomeHas(affineScenario, 'R-AUTHORITY', 'fail') && outcomeHas(teableScenario, 'R-AUTHORITY', 'fail') &&
    ['R-TENANCY', 'R-IDEMPOTENCY', 'R-CONSENT'].every(ruleId => outcomeHas(chatwootScenario, ruleId, 'fail')) &&
    [affineScenario, teableScenario, chatwootScenario, combinedScenario].every(scenario =>
      ['R-EVIDENCE', 'R-TOKEN', 'R-ROLLBACK', 'R-HORIZON', 'R-GLUE'].every(ruleId => outcomeHas(scenario, ruleId, 'underdetermined'))));
  check('sequencing defect keeps R-SCOPE strict',
    graph.sequencing_defects?.some(defect => defect.id === 'SEQ-PD-001' && defect.status === 'open' &&
      defect.required_correction?.includes('candidate_evaluation_scope') && defect.invariant?.includes('Do not weaken R-SCOPE')) &&
    solverPilot?.sequencing_defect_id === 'SEQ-PD-001' && solverPilot?.refusal?.scope_reason?.includes('NOT_ADMITTED') &&
    solverPilot?.refusal?.scope_reason?.includes('empty target scope'));
  const topologyTask = tasks.find(task => task.id === 'PD-013');
  check('repository-topology support lane is complete verified',
    topologyTask?.status === 'complete' && topologyTask?.packet_verdict === 'COMPLETE_VERIFIED' &&
    topologyTask?.verification?.status === 'PASS' && topologyTask?.verification?.checks === 399 &&
    topologyTask?.verification?.warning_count === 1 &&
    topologyTask?.verification?.warning?.attribution === 'concurrent sibling activity' &&
    topologyTask?.verification?.warning?.lane_attributed === false &&
    topologyTask?.verification?.external_writes === false && topologyTask?.verification?.repositories_created === false &&
    topologyTask?.verification?.remotes_changed === false && topologyTask?.verification?.commits_created === false &&
    topologyTask?.verification?.pushes_performed === false && topologyTask?.verification?.publication_performed === false &&
    topologyTask?.verification?.data_moved_or_deleted === false && topologyTask?.next_gate?.includes('No mutation is authorized'));
  const teableTask = tasks.find(task => task.id === 'PD-005');
  check('Teable verified prototype preserves qualification/admission holds',
    teableTask?.status === 'verified_prototype_with_holds' &&
    teableTask?.packet_verdict === 'VERIFIED_PROTOTYPE_WITH_HOLDS' &&
    teableTask?.qualification_status === 'NOT_QUALIFIED' &&
    teableTask?.admission_status === 'NOT_ADMITTED' &&
    Array.isArray(teableTask?.holds) && teableTask.holds.length === 7);
  const affineTask = tasks.find(task => task.id === 'PD-004');
  check('AFFiNE verified prototype preserves qualification/admission holds',
    affineTask?.status === 'verified_prototype_with_holds' &&
    affineTask?.packet_verdict === 'VERIFIED_PROTOTYPE_WITH_HOLDS' &&
    affineTask?.qualification_status === 'NOT_QUALIFIED' &&
    affineTask?.admission_status === 'NOT_ADMITTED' &&
    JSON.stringify(affineTask?.holds) === JSON.stringify(['H-THEME', 'H-SETTINGS', 'H-UPGRADE', 'H-DENSITY', 'H-CE-WEB']));
  const registryTask = tasks.find(task => task.id === 'PD-003');
  const expectedMaturity = {idea: 0, specified: 9, machine_readable: 14, dry_run: 1, measured: 0, operational: 0};
  check('Framework Registry is a verified research-only packet',
    registryTask?.status === 'complete' && registryTask?.packet_verdict === 'VERIFIED_RESEARCH_PACKET' &&
    registryTask?.research_only === true && registryTask?.measured === 0 && registryTask?.operational === 0 &&
    frameworkRegister?.status === 'research_only' && frameworkRegister?.research_only === true &&
    frameworkRegister?.registry_summary?.framework_count === 24 &&
    frameworkRegister?.registry_summary?.gap_count === 10 &&
    JSON.stringify(frameworkRegister?.registry_summary?.maturity_counts) === JSON.stringify(expectedMaturity) &&
    frameworkRegister?.registry_summary?.admitted_frameworks === 0 && frameworkRegister?.registry_summary?.operational_frameworks === 0 &&
    frameworkGraph?.status === 'research_only' && frameworkGraph?.node_count === 24 && frameworkGraph?.edge_count === 62);
  const affineValidation = affineVerification?.checks?.find(check => check.check_id === 'VERIFY-PACKAGE-001')?.result;
  const affineTests = affineVerification?.checks?.find(check => check.check_id === 'VERIFY-TEST-001')?.result;
  const affineBind = affineVerification?.checks?.find(check => check.check_id === 'VERIFY-BIND-001')?.result;
  const affineIdentity = affineVerification?.checks?.find(check => check.check_id === 'VERIFY-IDENTITY-001')?.result;
  const affineInstall = affineVerification?.checks?.find(check => check.check_id === 'VERIFY-INSTALL-001')?.result;
  const affineDiff = affineVerification?.checks?.find(check => check.check_id === 'VERIFY-DIFF-001')?.result;
  check('AFFiNE direct verification receipt matches the callback',
    affineVerification?.status === 'PASS' && affineVerification?.scope === 'LOCAL_SYNTHETIC_ONLY' &&
    affineValidation?.records === 7 && affineValidation?.evidence_sources === 13 && affineValidation?.package_files_checked === 20 &&
    affineValidation?.source_copied === false && affineValidation?.donor_repository_vendored === false &&
    affineValidation?.admission_status === 'NOT_ADMITTED' &&
    affineTests?.tests === 5 && affineTests?.pass === 5 && affineTests?.fail === 0 &&
    Object.values(affineIdentity ?? {}).every(result => typeof result === 'string' && result.startsWith('HOST_IDENTITY_REFUSED')) &&
    affineBind?.status === 'BOUND' && affineInstall?.status === 'PASS' && affineInstall?.deployment_performed === false &&
    affineDiff === 'OWNED_DIFF_CHECK_PASS' && affineVerification?.boundary?.admission_claimed === false);
  check('Teable direct verification receipt remains a held prototype',
    teableReceipt?.status === 'DONE' && teableReceipt?.boundary?.qualificationStatus === 'NOT_QUALIFIED' &&
    teableReceipt?.boundary?.admissionStatus === 'NOT_ADMITTED' && teableReceipt?.proofs?.find(proof => proof.id === 'smoke')?.observedChecks === 13 &&
    teableReceipt?.proofs?.find(proof => proof.id === 'package-test')?.status === 'PASS' &&
    teableReceipt?.holds?.length === 7);

  const taskById = new Map(tasks.map(task => [task.id, task]));
  const domainIds = new Set(domains.map(domain => domain.id));
  const partIds = new Set(movingParts.map(part => part.id));
  check('all task dependencies resolve', tasks.every(task => task.depends_on.every(id => taskById.has(id))));
  check('all task domain references resolve', tasks.every(task => task.domain_ids.every(id => domainIds.has(id))));
  check('all task moving-part references resolve', tasks.every(task => task.moving_part_ids.every(id => partIds.has(id))));

  const visiting = new Set();
  const visited = new Set();
  let cycle = false;
  function visit(id) {
    if (visiting.has(id)) { cycle = true; return; }
    if (visited.has(id)) return;
    visiting.add(id);
    for (const dep of taskById.get(id).depends_on) visit(dep);
    visiting.delete(id);
    visited.add(id);
  }
  for (const id of ids) visit(id);
  check('dependency graph is acyclic', !cycle);

  const evidencePaths = new Set();
  for (const item of [...domains, ...movingParts, ...tasks, ...graph.sprints]) {
    for (const evidencePath of item.evidence_paths ?? []) evidencePaths.add(evidencePath);
  }
  for (const artifactPath of graph.artifact_paths ?? []) evidencePaths.add(artifactPath);
  const missing = [...evidencePaths].filter(evidencePath => !exists(evidencePath));
  check('all evidence paths exist', missing.length === 0, missing.join(', '));
  check('artifact paths stay inside program-driver ownership', (graph.artifact_paths ?? []).every(evidencePath => {
    const resolved = path.resolve(repoRoot, evidencePath);
    return resolved === laneRoot || resolved.startsWith(`${laneRoot}${path.sep}`);
  }));
  check('artifact list matches required output set',
    new Set(graph.artifact_paths ?? []).size === requiredFiles.length &&
    requiredFiles.every(file => graph.artifact_paths.includes(`research/workstreams/2026-08-28-program-driver/${file}`)));
}

if (lanes) {
  const laneNames = lanes.lanes?.map(lane => lane.agent_name) ?? [];
  const terminalIds = lanes.lanes?.map(lane => lane.terminal_id) ?? [];
  check('durable lane names are unique', new Set(laneNames).size === laneNames.length);
  check('durable terminal IDs are unique', new Set(terminalIds).size === terminalIds.length);
  check('live lanes have objectives and owned-path arrays', lanes.lanes?.every(lane => typeof lane.objective === 'string' && Array.isArray(lane.owned_paths)));
  check('volatile pane IDs are omitted', lanes.lanes?.every(lane => !('pane_id' in lane)));
  const programDriverLane = lanes.lanes?.find(lane => lane.agent_name === 'ACTIONIST-PROGRAM-DRIVER');
  check('INC-PD-001 recovery terminal is recorded',
    lanes.incidents?.some(incident => incident.id === 'INC-PD-001' && incident.impact === 'No artifact loss.' && incident.replacement_program_driver_terminal_id === 'term_65a172d4585c516') &&
    programDriverLane?.terminal_id === 'term_65a172d4585c516');
  const topologyLane = lanes.lanes?.find(lane => lane.agent_name === 'ACTIONIST-REPO-TOPOLOGY');
  check('live lanes records repository-topology completion and warning attribution',
    topologyLane?.observed_status === 'done' && topologyLane?.program_status === 'COMPLETE_VERIFIED' &&
    topologyLane?.completion_receipt_observed === true && topologyLane?.verification?.status === 'PASS' &&
    topologyLane?.verification?.checks === 399 && topologyLane?.verification?.warning_count === 1 &&
    topologyLane?.verification?.warning_attribution === 'concurrent sibling activity' &&
    topologyLane?.verification?.external_writes === false && topologyLane?.verification?.repositories_created === false &&
    topologyLane?.verification?.remotes_changed === false && topologyLane?.verification?.commits_created === false &&
    topologyLane?.verification?.pushes_performed === false && topologyLane?.verification?.publication_performed === false &&
    topologyLane?.verification?.data_moved_or_deleted === false);
}

if (state) {
  check('lane-state counts include required totals', state.counts?.domains_total === 18 && state.counts?.moving_parts_total === 15);
  check('lane-state records zero admission', state.boundary?.admission_status === 'NOT_ADMITTED' && state.boundary?.admitted_blocks === 0 && state.boundary?.admitted_modules === 0);
  check('lane-state preserves no-worker/no-canonical-write boundary', state.boundary?.workers_spawned_or_messaged_by_this_lane === false && state.boundary?.shared_canonical_files_modified_by_this_lane === false);
  check('lane-state records INC-PD-001 without artifact loss',
    state.incidents?.some(incident => incident.id === 'INC-PD-001' && incident.contained === true && incident.recovery_terminal_id === 'term_65a172d4585c516'));
  check('lane-state records the completed solver refusal and zero framework maturity promotion',
    state.gate_history?.some(gate => gate.id === 'G-PD-01' && gate.status === 'COMPLETE_VERIFIED_REFUSAL' &&
      JSON.stringify(gate.verified_prerequisites) === JSON.stringify(['PD-003', 'PD-004', 'PD-005']) &&
      gate.exclusions?.includes('staged binding')) && state.open_gates?.length === 0 &&
    state.boundary?.contract_only_solver_pilot_authorized === true && state.boundary?.contract_only_solver_pilot_status === 'COMPLETE_VERIFIED_REFUSAL' &&
    state.boundary?.measured_frameworks === 0 && state.boundary?.operational_frameworks === 0);
  check('lane-state records complete verified repository topology support',
    state.counts?.external_active_lanes === 0 && state.counts?.complete_verified_support_lanes === 1 &&
    state.verified_receipts?.repository_topology?.verdict === 'COMPLETE_VERIFIED' &&
    state.verified_receipts?.repository_topology?.checks === 399 &&
    state.verified_receipts?.repository_topology?.warning_count === 1 &&
    state.verified_receipts?.repository_topology?.warning_attribution === 'concurrent sibling activity' &&
    state.verified_receipts?.repository_topology?.external_writes === false &&
    state.verified_receipts?.repository_topology?.repositories_created === false &&
    state.verified_receipts?.repository_topology?.remotes_changed === false &&
    state.verified_receipts?.repository_topology?.commits_created === false &&
    state.verified_receipts?.repository_topology?.pushes_performed === false &&
    state.verified_receipts?.repository_topology?.publication_performed === false &&
    state.verified_receipts?.repository_topology?.data_moved_or_deleted === false);
  check('lane-state records solver refusal and sequencing defect',
    state.counts?.verified_refusals === 1 && state.counts?.program_blockers === 3 &&
    state.verified_receipts?.three_candidate_solver?.verdict === 'COMPLETE_VERIFIED_REFUSAL' &&
    state.verified_receipts?.three_candidate_solver?.status === 'PASS' &&
    state.verified_receipts?.three_candidate_solver?.artifact_count === 14 &&
    state.verified_receipts?.three_candidate_solver?.ordered_rules === 22 &&
    state.verified_receipts?.three_candidate_solver?.distinct_constraints === 19 &&
    state.verified_receipts?.three_candidate_solver?.digest_parity === 'PASS' &&
    state.verified_receipts?.three_candidate_solver?.relaxations === 0 &&
    state.sequencing_defects?.some(defect => defect.id === 'SEQ-PD-001' && defect.status === 'open'));
}

check('repository-topology run receipt is complete and mutation-free',
  topologyRunState?.status === 'done' && topologyRunState?.verification?.exit_code === 0 &&
  topologyRunState?.scope?.external_writes_performed === false &&
  topologyRunState?.mutations?.repositories_created === false && topologyRunState?.mutations?.remotes_changed === false &&
  topologyRunState?.mutations?.commits_created === false && topologyRunState?.mutations?.pushes_performed === false &&
  topologyRunState?.mutations?.publication_performed === false && topologyRunState?.mutations?.data_moved_or_deleted === false &&
  topologyRunState?.mutations?.workers_messaged_or_spawned === false && topologyRunState?.callback_protocol?.message_sent === false &&
  topologyManifest?.status === 'research_only');

for (const line of checks) console.log(line);
if (failures.length) {
  for (const line of failures) console.error(line);
  console.error(`SMOKE FAIL: ${failures.length} failure(s), ${checks.length} pass(es)`);
  process.exitCode = 1;
} else {
  console.log(`SMOKE PASS: ${checks.length} checks`);
}
