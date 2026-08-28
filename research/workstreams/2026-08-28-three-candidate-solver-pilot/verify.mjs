import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadPilot, REPO_ROOT, runPilot, stableStringify } from "./solver.mjs";

const RUN_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)));
const RUN_REL = "research/workstreams/2026-08-28-three-candidate-solver-pilot";
const REQUIRED_FILES = [
  "DISPATCH.md",
  "candidate-set.json",
  "contracts/affine.json",
  "contracts/teable.json",
  "contracts/chatwoot.json",
  "rule-import.json",
  "solver.mjs",
  "solver-results.json",
  "missing-field-ledger.jsonl",
  "normalization-surgeries.jsonl",
  "host-contract-delta.json",
  "pilot-report.md",
  "lane-state.json",
  "verify.mjs",
];
const RECORD_NAMES = [
  "BindingPlan",
  "CapabilityContract",
  "HostContract",
  "PackagingProfile",
  "QualificationDossier",
  "RegistryRecord",
  "ReleaseManifest",
];
const CANDIDATE_IDS = [
  "actionist/affine-workspace@0.1.0",
  "actionist/teable-data-grid@0.1.0",
  "actionist/chatwoot-inbox@0.1.0",
];
const EXPECTED_RULE_IDS = [
  "R-SCOPE",
  "R-LICENSE",
  "R-EVIDENCE",
  "R-HOSTVER",
  "R-RUNTIME",
  "R-DATAMODE",
  "R-TENANCY",
  "R-PORTCLOSE",
  "R-VERSION",
  "R-PORTTYPE",
  "R-NAMESPACE",
  "R-MIGOWNER",
  "R-IDENTITY",
  "R-NAV",
  "R-TOKEN",
  "R-OBSID",
  "R-AUTHORITY",
  "R-IDEMPOTENCY",
  "R-CONSENT",
  "R-ROLLBACK",
  "R-HORIZON",
  "R-GLUE",
];
const EXPECTED_CONSTRAINT_RULES = {
  scope: ["R-SCOPE"],
  license: ["R-LICENSE"],
  evidence_tier: ["R-EVIDENCE"],
  host_version: ["R-HOSTVER"],
  runtime: ["R-RUNTIME"],
  data_mode: ["R-DATAMODE"],
  tenancy: ["R-TENANCY"],
  port_closure: ["R-PORTCLOSE", "R-PORTTYPE"],
  version: ["R-VERSION"],
  namespace: ["R-NAMESPACE"],
  migration_owner: ["R-MIGOWNER"],
  identity: ["R-IDENTITY"],
  navigation: ["R-NAV"],
  token: ["R-TOKEN"],
  observability_identity: ["R-OBSID"],
  authority: ["R-AUTHORITY", "R-CONSENT"],
  idempotency: ["R-IDEMPOTENCY"],
  rollback: ["R-ROLLBACK", "R-HORIZON"],
  glue_budget: ["R-GLUE"],
};
const REQUIRED_BOUNDARY_FLAGS = [
  "donor_source_cloned",
  "donor_source_executed",
  "staged_binding",
  "deployment_performed",
  "client_data_used",
  "shared_file_edits",
];
const VERDICTS = new Set(["FEASIBLE", "INFEASIBLE", "UNDERDETERMINED"]);
const LEDGER_CATEGORIES = new Set(["contract_defect", "source_evidence_gap", "model_uncertainty", "human_authority_decision"]);
const TAXONOMY_PATH = "research/workstreams/p04-repo-to-module-framework/runs/2026-08-27-sprint-2-opus/normalization-surgery-taxonomy.jsonl";

const failures = [];

function fail(message) {
  failures.push(message);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function readJson(relativePath) {
  const absolutePath = path.isAbsolute(relativePath) ? relativePath : path.join(RUN_DIR, relativePath);
  try {
    return JSON.parse(fs.readFileSync(absolutePath, "utf8"));
  } catch (error) {
    fail(`invalid JSON ${relativePath}: ${error.message}`);
    return null;
  }
}

function readRepoJson(reference) {
  const absolutePath = resolveRepoPath(reference);
  try {
    return JSON.parse(fs.readFileSync(absolutePath, "utf8"));
  } catch (error) {
    fail(`invalid repository JSON ${reference}: ${error.message}`);
    return null;
  }
}

function readJsonl(relativePath) {
  const absolutePath = path.join(RUN_DIR, relativePath);
  let text;
  try {
    text = fs.readFileSync(absolutePath, "utf8");
  } catch (error) {
    fail(`unreadable JSONL ${relativePath}: ${error.message}`);
    return [];
  }
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  return lines.map((line, index) => {
    try {
      return JSON.parse(line);
    } catch (error) {
      fail(`invalid JSONL ${relativePath} line ${index + 1}: ${error.message}`);
      return null;
    }
  }).filter(Boolean);
}

function resolveRepoPath(reference) {
  return path.isAbsolute(reference) ? reference : path.resolve(REPO_ROOT, reference);
}

function requirePath(reference, label) {
  assert(typeof reference === "string" && reference.length > 0, `${label} is not a path string`);
  if (typeof reference === "string" && reference.length > 0) {
    assert(fs.existsSync(resolveRepoPath(reference)), `${label} does not exist: ${reference}`);
  }
}

function arraysEqual(left, right) {
  return stableStringify(left) === stableStringify(right);
}

function sorted(values) {
  return [...values].sort();
}

function walkFiles(directory, prefix = "") {
  const output = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const relative = prefix ? path.join(prefix, entry.name) : entry.name;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) output.push(...walkFiles(absolute, relative));
    else if (entry.isFile()) output.push(relative.replaceAll(path.sep, "/"));
  }
  return output;
}

function checkOwnedBoundary() {
  const actual = sorted(walkFiles(RUN_DIR));
  const expected = sorted(REQUIRED_FILES);
  assert(arraysEqual(actual, expected), `owned run boundary mismatch; actual=${JSON.stringify(actual)} expected=${JSON.stringify(expected)}`);
  for (const relativePath of REQUIRED_FILES) assert(fs.existsSync(path.join(RUN_DIR, relativePath)), `required artifact missing: ${relativePath}`);
}

function checkBoundary(value, label) {
  assert(value && typeof value === "object", `${label} boundary is absent`);
  if (!value || typeof value !== "object") return;
  assert(value.research_only === true, `${label} boundary must be research_only`);
  assert(value.implementation_authorized === false, `${label} implementation_authorized must be false`);
  for (const flag of REQUIRED_BOUNDARY_FLAGS) assert(value[flag] === false, `${label}.${flag} must be false`);
  assert(value.admission_status === "NOT_ADMITTED", `${label}.admission_status must be NOT_ADMITTED`);
  assert(value.admitted_modules === 0, `${label}.admitted_modules must be zero`);
  assert(value.relaxations_applied === 0, `${label}.relaxations_applied must be zero`);
}

function checkNoUnsafeClaims(value, label, seen = new Set()) {
  if (value === null || typeof value !== "object" || seen.has(value)) return;
  seen.add(value);
  if (Array.isArray(value)) {
    value.forEach((item, index) => checkNoUnsafeClaims(item, `${label}[${index}]`, seen));
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    if (key === "admission_status") assert(child === "NOT_ADMITTED", `${label}.${key} is not NOT_ADMITTED`);
    if (["admission_claimed", "admitted_for_host_scope"].includes(key)) assert(child === false, `${label}.${key} must be false`);
    if (REQUIRED_BOUNDARY_FLAGS.includes(key)) assert(child === false, `${label}.${key} must be false`);
    if (key === "relaxations_applied") assert(child === 0, `${label}.${key} must be zero`);
    if (key === "admitted_modules") assert(child === 0, `${label}.${key} must be zero`);
    if (key === "lifecycle_status") assert(child !== "admitted", `${label}.${key} cannot be admitted`);
    if (key === "release_status") assert(child !== "released", `${label}.${key} cannot be released`);
    if (key === "admission_scope" && child && typeof child === "object") {
      assert(Array.isArray(child.tenants) && child.tenants.length === 0, `${label}.admission_scope.tenants must be empty`);
      assert(Array.isArray(child.applications) && child.applications.length === 0, `${label}.admission_scope.applications must be empty`);
    }
    checkNoUnsafeClaims(child, `${label}.${key}`, seen);
  }
}

function checkCandidateSet(candidateSet, contracts) {
  assert(candidateSet?.run_id === "2026-08-28-three-candidate-solver-pilot", "candidate-set run_id mismatch");
  assert(Array.isArray(candidateSet?.candidates) && candidateSet.candidates.length === 3, "candidate-set must contain exactly three candidates");
  const ids = candidateSet.candidates.map((candidate) => candidate.candidate_id);
  assert(arraysEqual(sorted(ids), sorted(CANDIDATE_IDS)), `candidate ids mismatch: ${JSON.stringify(ids)}`);
  assert(candidateSet.product_spec?.consumed_fields?.authority_ceiling === "stage", "product authority ceiling must remain stage");
  assert(candidateSet.product_spec?.consumed_fields?.data_mode === "read_only_external", "product data mode must remain read_only_external");
  assert(candidateSet.host_contract?.host_contract_version === "actionist.three-candidate-host.v0.1", "host contract version mismatch");
  assert(candidateSet.product_spec?.open_markers === 0, "product open markers must remain zero");
  assert(candidateSet.product_spec?.uncovered_requirements === 0, "product uncovered requirements must remain zero");
  assert(candidateSet.boundary?.shared_file_edits === false, "candidate-set shared_file_edits must be false");
  checkBoundary(candidateSet.boundary, "candidate-set");
  for (const candidate of candidateSet.candidates) {
    assert(candidate.reuse_shape === "intact_service", `${candidate.candidate_id} must remain intact_service`);
    requirePath(candidate.contract_path, `${candidate.candidate_id}.contract_path`);
    for (const sourcePath of candidate.source_record_paths ?? []) requirePath(sourcePath, `${candidate.candidate_id}.source_record_path`);
    for (const evidencePath of candidate.evidence_paths ?? []) requirePath(evidencePath, `${candidate.candidate_id}.evidence_path`);
    const contract = contracts.get(candidate.candidate_id);
    assert(contract?.candidate_id === candidate.candidate_id, `${candidate.candidate_id} contract identity mismatch`);
    assert(arraysEqual(sorted(Object.keys(contract?.records ?? {})), sorted(RECORD_NAMES)), `${candidate.candidate_id} does not cover the seven canonical records`);
    assert(["normalized_without_source_mutation", "reconstructed_from_exact_receipts_without_donor_execution"].includes(contract?.projection_status), `${candidate.candidate_id} projection status is not source-preserving`);
    assert(contract?.projection_basis?.source_records_unchanged === true, `${candidate.candidate_id} source_records_unchanged must be true`);
    for (const sourcePath of contract?.projection_basis?.source_record_paths ?? []) requirePath(sourcePath, `${candidate.candidate_id}.projection_basis.source_record_path`);
    for (const evidencePath of contract?.evidence_refs ?? []) requirePath(evidencePath, `${candidate.candidate_id}.evidence_ref`);
    const assertions = candidateSet.hold_assertions?.[candidate.candidate_id] ?? [];
    const preserved = contract?.preserved_holds ?? [];
    assert(assertions.length > 0, `${candidate.candidate_id} has no hold assertions`);
    assert(preserved.length >= assertions.length, `${candidate.candidate_id} dropped one or more hold records`);
    for (const hold of assertions) {
      const match = preserved.find((item) => item.hold_id === hold.hold_id);
      assert(Boolean(match), `${candidate.candidate_id} missing preserved hold ${hold.hold_id}`);
      assert(match?.status === "OPEN", `${candidate.candidate_id} hold ${hold.hold_id} is not OPEN`);
      assert(typeof match?.statement === "string" && match.statement.toLowerCase().includes(hold.must_contain.toLowerCase()), `${candidate.candidate_id} hold ${hold.hold_id} statement changed or lost required text`);
    }
  }
}

function checkRuleImport(ruleImport) {
  assert(ruleImport?.ordered_rule_count === 22, "rule import ordered_rule_count must be 22");
  assert(ruleImport?.distinct_constraint_count === 19, "rule import distinct_constraint_count must be 19");
  assert(ruleImport?.order_is_load_bearing === true, "rule import must mark order as load-bearing");
  assert(Array.isArray(ruleImport?.rules) && ruleImport.rules.length === 22, "rule import must contain 22 ordered rules");
  const ruleIds = ruleImport.rules.map((rule) => rule.rule_id);
  assert(arraysEqual(ruleIds, EXPECTED_RULE_IDS), `ordered rule ids mismatch: ${JSON.stringify(ruleIds)}`);
  assert(new Set(ruleIds).size === 22, "ordered rule ids must be unique");
  for (const [index, rule] of ruleImport.rules.entries()) {
    assert(rule.order === index + 1, `rule ${rule.rule_id} order is not ${index + 1}`);
    assert(Array.isArray(rule.source_paths) && rule.source_paths.length > 0, `rule ${rule.rule_id} has no source paths`);
    for (const sourcePath of rule.source_paths ?? []) requirePath(sourcePath, `${rule.rule_id}.source_path`);
  }
  assert(arraysEqual(sorted(Object.keys(ruleImport.constraint_to_rules)), sorted(Object.keys(EXPECTED_CONSTRAINT_RULES))), "constraint mapping keys mismatch");
  for (const [constraint, expectedRules] of Object.entries(EXPECTED_CONSTRAINT_RULES)) {
    assert(arraysEqual(ruleImport.constraint_to_rules[constraint], expectedRules), `${constraint} rule mapping mismatch`);
  }
  for (const mapping of ruleImport.shared_constraint_mappings ?? []) {
    assert(arraysEqual(ruleImport.constraint_to_rules[mapping.constraint], mapping.rules), `${mapping.constraint} shared mapping mismatch`);
  }
  assert(ruleImport.import_policy?.relaxations_applied === 0, "rule import relaxations must be zero");
}

function checkLedger(ledger, candidateSet) {
  assert(ledger.length >= 20, `missing-field-ledger is too short: ${ledger.length}`);
  const ids = new Set();
  const categories = new Set();
  for (const entry of ledger) {
    assert(entry.schema_version === "actionist.three-candidate-solver-pilot.missing-field.v1", `${entry.entry_id} schema mismatch`);
    assert(!ids.has(entry.entry_id), `duplicate missing-field entry ${entry.entry_id}`);
    ids.add(entry.entry_id);
    assert(CANDIDATE_IDS.includes(entry.candidate_id) || entry.candidate_id === "all", `${entry.entry_id} has unknown candidate`);
    assert(LEDGER_CATEGORIES.has(entry.category), `${entry.entry_id} has unknown category ${entry.category}`);
    categories.add(entry.category);
    assert(Array.isArray(entry.source_paths) && entry.source_paths.length > 0, `${entry.entry_id} has no evidence paths`);
    for (const sourcePath of entry.source_paths ?? []) requirePath(sourcePath, `${entry.entry_id}.source_path`);
    assert(typeof entry.owner === "string" && entry.owner.length > 0, `${entry.entry_id} has no owner`);
    assert(typeof entry.must_be_supplied_by === "string" && entry.must_be_supplied_by.length > 0, `${entry.entry_id} has no supplier`);
    assert(typeof entry.blocks_promotion === "boolean", `${entry.entry_id} blocks_promotion must be boolean`);
    assert(!/\b\d+(?:\.\d+)?\s*(?:hours?|percent(?:age)?|%)\b/i.test(JSON.stringify(entry)), `${entry.entry_id} contains an unsupported numeric time/percentage estimate`);
  }
  for (const category of LEDGER_CATEGORIES) assert(categories.has(category), `missing-field-ledger lacks category ${category}`);
  const modelEntry = ledger.find((entry) => entry.category === "model_uncertainty");
  assert(modelEntry?.state === "NOT_APPLICABLE" && modelEntry?.blocks_promotion === false, "model uncertainty must be explicitly NOT_APPLICABLE");
  assert(candidateSet.workflow?.mode === "read_only_stage", "ledger must be tied to the read-only workflow");
  return ledger;
}

function checkNormalization(surgeries, contracts, candidateSet) {
  assert(surgeries.length >= CANDIDATE_IDS.length * 14, `normalization surgery coverage is too short: ${surgeries.length}`);
  const taxonomy = readJsonlFromRepo(TAXONOMY_PATH);
  const taxonomyById = new Map(taxonomy.map((entry) => [entry.surgery_id, entry]));
  assert(taxonomy.length === 28, `normalization taxonomy count changed: ${taxonomy.length}`);
  const byCandidate = new Map(CANDIDATE_IDS.map((id) => [id, new Map()]));
  for (const entry of surgeries) {
    assert(entry.schema_version === "actionist.three-candidate-solver-pilot.normalization-surgery.v1", `${entry.entry_id} schema mismatch`);
    assert(CANDIDATE_IDS.includes(entry.candidate_id), `${entry.entry_id} has unknown candidate`);
    assert(taxonomyById.has(entry.surgery_id), `${entry.entry_id} references unknown surgery ${entry.surgery_id}`);
    const taxonomyEntry = taxonomyById.get(entry.surgery_id);
    assert(entry.category === taxonomyEntry.category, `${entry.entry_id} category differs from taxonomy`);
    assert(entry.cost_class === taxonomyEntry.cost_class, `${entry.entry_id} cost class differs from taxonomy`);
    assert(entry.determinism === taxonomyEntry.determinism, `${entry.entry_id} determinism differs from taxonomy`);
    assert(entry.taxonomy_path === TAXONOMY_PATH, `${entry.entry_id} taxonomy path mismatch`);
    requirePath(entry.source_path, `${entry.entry_id}.source_path`);
    assert(typeof entry.ownership === "string" && entry.ownership.length > 0, `${entry.entry_id} has no ownership`);
    assert(!/\b\d+(?:\.\d+)?\s*(?:hours?|percent(?:age)?|%)\b/i.test(JSON.stringify(entry)), `${entry.entry_id} contains an unsupported numeric time/percentage estimate`);
    const candidateMap = byCandidate.get(entry.candidate_id);
    assert(!candidateMap.has(entry.surgery_id), `${entry.candidate_id} duplicates surgery ${entry.surgery_id}`);
    candidateMap.set(entry.surgery_id, entry);
  }
  for (const candidate of candidateSet.candidates) {
    const candidateMap = byCandidate.get(candidate.candidate_id);
    const expectedApplicable = taxonomy.filter((entry) => (entry.applies_to_shapes ?? []).includes(candidate.reuse_shape)).map((entry) => entry.surgery_id);
    for (const surgeryId of expectedApplicable) assert(candidateMap.has(surgeryId), `${candidate.candidate_id} missing applicable surgery ${surgeryId}`);
    const contractIds = contracts.get(candidate.candidate_id)?.records?.PackagingProfile?.normalization_applied ?? [];
    for (const surgeryId of contractIds) assert(candidateMap.has(surgeryId), `${candidate.candidate_id} dropped source normalization flag ${surgeryId}`);
  }
}

function readJsonlFromRepo(relativePath) {
  const absolutePath = resolveRepoPath(relativePath);
  let text;
  try {
    text = fs.readFileSync(absolutePath, "utf8");
  } catch (error) {
    fail(`unreadable repository JSONL ${relativePath}: ${error.message}`);
    return [];
  }
  return text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean).map((line, index) => {
    try {
      return JSON.parse(line);
    } catch (error) {
      fail(`invalid repository JSONL ${relativePath} line ${index + 1}: ${error.message}`);
      return null;
    }
  }).filter(Boolean);
}

function checkHostDelta(hostDelta) {
  assert(hostDelta?.status === "derived_not_implemented", "host delta must remain derived_not_implemented");
  assert(hostDelta?.host_contract_version === "actionist.three-candidate-host.v0.1", "host delta contract version mismatch");
  for (const sourcePath of Object.values(hostDelta.basis ?? {}).flatMap((value) => Array.isArray(value) ? value : [value])) {
    if (typeof sourcePath === "string" && (sourcePath.includes("/") || sourcePath.endsWith(".json") || sourcePath.endsWith(".md"))) requirePath(sourcePath, "host-delta.basis");
  }
  const minimum = hostDelta.minimum_host_delta ?? {};
  assert(minimum.identity_session?.identity_source === "host_verified_context", "host delta identity source mismatch");
  assert(minimum.identity_session?.token_model === "two_token", "host delta token model mismatch");
  assert(minimum.identity_session?.query_parameter_identity === "forbidden", "host delta query identity must be forbidden");
  assert(minimum.tenancy?.host_key === "tenant_id", "host delta tenant key mismatch");
  assert(minimum.tenancy?.cross_tenant_policy === "deny_by_default", "host delta cross-tenant policy mismatch");
  assert(minimum.data_and_migration_ownership?.cross_owner_writes === "forbidden", "host delta cross-owner writes must be forbidden");
  assert(minimum.data_and_migration_ownership?.one_owner_per_table_and_migration === true, "host delta must name one owner per table and migration");
  assert(minimum.navigation_and_settings?.navigation_contribution === "deploy_time_manifest", "host delta navigation model mismatch");
  assert(minimum.navigation_and_settings?.settings_policy === "donor_rendered_behind_host_nav", "host delta settings policy mismatch");
  assert(minimum.events?.envelope === "actionist.capability-event.v1", "host delta event envelope mismatch");
  assert(minimum.observability?.per_capability_release_correlation === true, "host delta release correlation missing");
  assert(minimum.observability?.trace_propagation === true, "host delta trace propagation missing");
  assert(minimum.rollback?.minimum_horizon_required_for_release === true, "host delta rollback horizon gate missing");
  assert(arraysEqual(minimum.rollback?.required_objects, ["code_artifact", "configuration", "secrets", "database_schema", "data", "donor_revision", "surface_route", "connector_credential_state"]), "host delta rollback object set mismatch");
  assert(arraysEqual(sorted(Object.keys(hostDelta.candidate_deltas ?? {})), sorted(CANDIDATE_IDS)), "host delta candidate set mismatch");
  checkBoundary(hostDelta.boundary, "host-contract-delta");
}

function checkSolverResults(stored, candidateSet, ruleImport) {
  assert(stored?.schema_version === "actionist.three-candidate-solver-pilot.results.v1", "solver result schema mismatch");
  assert(stored?.exact_run_count === 3, "solver result must contain exactly three repeats");
  assert(stored?.rule_counts?.ordered_rules === 22 && stored?.rule_counts?.distinct_constraints === 19, "solver result rule counts mismatch");
  assert(stored?.digest_parity?.all_equal === true, "persisted solver digest parity is not all_equal");
  for (const key of ["input_digests_equal", "output_digests_equal", "scenario_digests_equal"]) assert(stored.digest_parity[key] === true, `persisted solver parity ${key} is false`);
  assert(Array.isArray(stored?.runs) && stored.runs.length === 3, "persisted solver runs must contain three records");
  const fresh = runPilot(loadPilot(), 3);
  assert(fresh.input_digest === stored.input_digest, "fresh solver input digest differs from persisted result");
  assert(fresh.canonical_output_digest === stored.canonical_output_digest, "fresh solver output digest differs from persisted result");
  assert(stableStringify(fresh.digest_parity) === stableStringify(stored.digest_parity), "fresh solver parity differs from persisted result");
  assert(stableStringify(fresh.runs) === stableStringify(stored.runs), "fresh solver run digests differ from persisted result");
  assert(stableStringify(fresh.rule_counts) === stableStringify(stored.rule_counts), "fresh solver rule counts differ from persisted result");
  assert(Array.isArray(stored.scenario_results) && stored.scenario_results.length === 4, "solver result must contain four scenarios");
  assert(arraysEqual(stored.scenario_results.map((scenario) => scenario.scenario_id), ["candidate-affine", "candidate-teable", "candidate-chatwoot", "combined-all-three"]), "solver scenario order mismatch");
  for (const [index, persisted] of stored.scenario_results.entries()) {
    const expected = fresh.scenario_results[index];
    assert(persisted.scenario_id === expected.scenario_id, `scenario ${index + 1} id mismatch`);
    assert(VERDICTS.has(persisted.verdict), `${persisted.scenario_id} has invalid verdict ${persisted.verdict}`);
    assert(persisted.verdict === expected.verdict, `${persisted.scenario_id} verdict differs from fresh solver`);
    assert(stableStringify(persisted.selected_candidate_ids) === stableStringify(expected.selected_candidate_ids), `${persisted.scenario_id} selected ids differ from fresh solver`);
    assert(stableStringify(persisted.first_non_pass) === stableStringify(expected.first_non_pass), `${persisted.scenario_id} first non-pass differs from fresh solver`);
    assert(persisted.relaxations_applied === 0, `${persisted.scenario_id} applied a relaxation`);
    const persistedOutcomes = persisted.rule_outcomes ?? [];
    const expectedOutcomes = expected.checks.map((check) => {
      const projection = { order: check.order, rule_id: check.rule_id, constraint: check.constraint, outcome: check.outcome };
      if (check.missing_field !== undefined) projection.missing_field = check.missing_field;
      return projection;
    });
    assert(stableStringify(persistedOutcomes) === stableStringify(expectedOutcomes), `${persisted.scenario_id} ordered rule outcomes differ from fresh solver`);
    assert(persistedOutcomes.length === ruleImport.rules.length, `${persisted.scenario_id} does not retain all 22 rule outcomes`);
    assert(persistedOutcomes.every((outcome, outcomeIndex) => outcome.order === outcomeIndex + 1 && VERDICTS.has(outcome.outcome === "pass" ? "FEASIBLE" : outcome.outcome === "fail" ? "INFEASIBLE" : "UNDERDETERMINED")), `${persisted.scenario_id} rule order or outcome vocabulary is invalid`);
    const firstNonPass = persistedOutcomes.find((outcome) => outcome.outcome !== "pass");
    assert(firstNonPass?.rule_id === persisted.first_non_pass?.rule_id, `${persisted.scenario_id} first non-pass rule is not the first ordered non-pass`);
  }
  checkBoundary(stored.boundary, "solver-results");
  assert(stored.canonical_output_digest === fresh.runs[0].output_digest, "solver canonical output digest must equal repeated output digest");
}

function checkReport(report) {
  for (const requiredText of ["INFEASIBLE", "R-SCOPE", "R-TOKEN", "missing-field-ledger.jsonl", "normalization-surgeries.jsonl", "host-contract-delta.json", "relaxations: `0`"]) {
    assert(report.includes(requiredText), `pilot report missing ${requiredText}`);
  }
  assert(!/\b\d+(?:\.\d+)?\s*(?:hours?|percent(?:age)?|%)\b/i.test(report), "pilot report contains an unsupported numeric time/percentage estimate");
  assert(!/deployment_performed\s*[:=]\s*true/i.test(report), "pilot report claims deployment");
  assert(!/donor_source_executed\s*[:=]\s*true/i.test(report), "pilot report claims donor execution");
}

function checkLaneState(laneState) {
  assert(laneState?.run_id === "2026-08-28-three-candidate-solver-pilot", "lane state run_id mismatch");
  assert(laneState?.lane === "ACTIONIST-THREE-CANDIDATE-SOLVER", "lane state lane mismatch");
  assert(["ready_for_verification", "verified_ready_for_callback", "done"].includes(laneState?.status), `lane state status is invalid: ${laneState?.status}`);
  assert(laneState?.callback?.target_agent === "CENA", "lane callback target mismatch");
  assert(laneState?.callback?.target_session === "herdr-2", "lane callback session mismatch");
  assert(laneState?.callback?.max_lines <= 6, "lane callback exceeds six lines");
  checkBoundary(laneState.boundary, "lane-state");
}

function main() {
  checkOwnedBoundary();
  const candidateSet = readJson("candidate-set.json");
  const ruleImport = readJson("rule-import.json");
  const storedResults = readJson("solver-results.json");
  const hostDelta = readJson("host-contract-delta.json");
  const laneState = readJson("lane-state.json");
  const ledger = readJsonl("missing-field-ledger.jsonl");
  const surgeries = readJsonl("normalization-surgeries.jsonl");
  const contracts = new Map();
  for (const candidate of candidateSet?.candidates ?? []) {
    const contract = readRepoJson(candidate.contract_path);
    if (contract) contracts.set(candidate.candidate_id, contract);
  }
  checkCandidateSet(candidateSet, contracts);
  checkRuleImport(ruleImport);
  checkLedger(ledger, candidateSet);
  checkNormalization(surgeries, contracts, candidateSet);
  checkHostDelta(hostDelta);
  checkSolverResults(storedResults, candidateSet, ruleImport);
  checkReport(fs.readFileSync(path.join(RUN_DIR, "pilot-report.md"), "utf8"));
  checkLaneState(laneState);
  for (const [candidateId, contract] of contracts) checkNoUnsafeClaims(contract, candidateId);
  for (const [name, value] of [["candidate-set", candidateSet], ["rule-import", ruleImport], ["solver-results", storedResults], ["host-contract-delta", hostDelta], ["lane-state", laneState]]) checkNoUnsafeClaims(value, name);
  const artifactText = REQUIRED_FILES.filter((file) => file.endsWith(".json") || file.endsWith(".jsonl") || file.endsWith(".md") || file.endsWith(".mjs")).map((file) => fs.readFileSync(path.join(RUN_DIR, file), "utf8")).join("\n");
  assert(!/\b\d+(?:\.\d+)?\s*(?:hours?|percent(?:age)?|%)\b/i.test(artifactText), "run artifacts contain an unsupported numeric time/percentage estimate");
  if (failures.length > 0) {
    console.error(JSON.stringify({ status: "FAIL", failure_count: failures.length, failures }, null, 2));
    process.exitCode = 1;
    return;
  }
  console.log(JSON.stringify({
    status: "PASS",
    run_directory: RUN_REL,
    owned_path_boundary: "PASS",
    required_artifacts: REQUIRED_FILES.length,
    candidates: 3,
    seven_record_coverage: "PASS",
    ordered_rules: 22,
    distinct_constraints: 19,
    solver_repeats: 3,
    digest_parity: "PASS",
    verdicts: Object.fromEntries(storedResults.scenario_results.map((scenario) => [scenario.scenario_id, scenario.verdict])),
    first_non_pass: Object.fromEntries(storedResults.scenario_results.map((scenario) => [scenario.scenario_id, scenario.first_non_pass.rule_id])),
    relaxations_applied: 0,
    holds: "PRESERVED",
    admission_deployment_claims: "NONE",
  }, null, 2));
}

try {
  main();
} catch (error) {
  console.error(JSON.stringify({ status: "FAIL", failure_count: failures.length + 1, failures: [...failures, error.stack ?? error.message] }, null, 2));
  process.exitCode = 1;
}
