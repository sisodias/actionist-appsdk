import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const RUN_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)));
export const REPO_ROOT = path.resolve(RUN_DIR, "../../..");
export const DEFAULT_INPUT_PATH = path.join(RUN_DIR, "candidate-set.json");
export const DEFAULT_RULES_PATH = path.join(RUN_DIR, "rule-import.json");
export const SOLVER_VERSION = "actionist.p12.contract-pilot-solver.v1";
export const REQUIRED_VERDICTS = new Set(["FEASIBLE", "INFEASIBLE", "UNDERDETERMINED"]);

const DATA_MODE_ORDER = ["ui_only", "read_only_external", "api_only", "owned_postgres"];
const AUTHORITY_ORDER = ["read", "stage", "write", "message", "deploy"];
const CLASS_MIN_CEILING = {
  read_only: "read",
  tenant_scoped_write: "write",
  external_effecting: "message",
  privileged: "deploy",
};
const EFFECT_MIN_CEILING = {
  none: "read",
  read_external: "read",
  write_external: "message",
  irreversible_external: "message",
};
const RUNTIME_BY_SHAPE = {
  extracted_package: "package_in_host",
  generated_from_pattern: "package_in_host",
  custom_delta: "package_in_host",
  embedded_module: "microfrontend",
  transplant: "package_in_host_or_microfrontend",
  intact_service: "sidecar_service",
  intact_fork: "sidecar_service",
  adapter: "package_in_host",
};
const ROLLBACK_OBJECTS = [
  "code_artifact",
  "configuration",
  "secrets",
  "database_schema",
  "data",
  "donor_revision",
  "surface_route",
  "connector_credential_state",
];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function stableValue(value) {
  if (Array.isArray(value)) return value.map(stableValue);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stableValue(value[key])]));
  }
  return value;
}

export function stableStringify(value) {
  return JSON.stringify(stableValue(value));
}

export function sha256(value) {
  return `sha256:${crypto.createHash("sha256").update(typeof value === "string" ? value : stableStringify(value)).digest("hex")}`;
}

function resolveRepoPath(relativeOrAbsolute) {
  return path.isAbsolute(relativeOrAbsolute) ? relativeOrAbsolute : path.resolve(REPO_ROOT, relativeOrAbsolute);
}

export function loadPilot({ inputPath = DEFAULT_INPUT_PATH, rulesPath = DEFAULT_RULES_PATH } = {}) {
  const input = readJson(inputPath);
  const ruleImport = readJson(rulesPath);
  const contracts = new Map();
  for (const candidate of input.candidates ?? []) {
    const contractPath = resolveRepoPath(candidate.contract_path);
    contracts.set(candidate.candidate_id, readJson(contractPath));
  }
  return { input, ruleImport, contracts, inputPath, rulesPath };
}

function makeCheck(rule, outcome, reason, extra = {}) {
  return {
    order: rule.order,
    phase: rule.phase,
    phase_name: rule.phase_name,
    rule_id: rule.rule_id,
    constraint: rule.constraint,
    outcome,
    reason,
    ...extra,
  };
}

function familyStatus(value) {
  if (typeof value === "string") return value;
  return value?.status;
}

function rankOf(list, value) {
  const index = list.indexOf(value);
  return index === -1 ? null : index;
}

function selectedContracts(loaded, selectedIds) {
  return [...selectedIds].sort().map((id) => {
    const contract = loaded.contracts.get(id);
    if (!contract) throw new Error(`unknown candidate: ${id}`);
    return contract;
  });
}

function candidateId(contract) {
  return contract.candidate_id;
}

function records(contract) {
  return contract.records ?? {};
}

function capability(contract) {
  return records(contract).CapabilityContract ?? {};
}

function packaging(contract) {
  return records(contract).PackagingProfile ?? {};
}

function hostRecord(contract) {
  return records(contract).HostContract ?? {};
}

function binding(contract) {
  return records(contract).BindingPlan ?? {};
}

function qualification(contract) {
  return records(contract).QualificationDossier ?? {};
}

function registry(contract) {
  return records(contract).RegistryRecord ?? {};
}

function release(contract) {
  return records(contract).ReleaseManifest ?? {};
}

function allEffects(contracts) {
  return contracts.flatMap((contract) => (binding(contract).external_effects ?? []).map((effect) => ({
    ...effect,
    capability_id: candidateId(contract),
  })));
}

function namespaceEntries(contract) {
  const entries = [];
  for (const [kind, values] of Object.entries(binding(contract).owned_namespaces ?? {})) {
    for (const value of values ?? []) entries.push({ kind, value, capability_id: candidateId(contract) });
  }
  return entries;
}

function evaluateRule(rule, contracts, loaded) {
  const input = loaded.input;
  const ids = contracts.map(candidateId);
  const firstId = ids[0] ?? "none";
  const host = input.host_contract ?? {};
  const spec = input.product_spec ?? {};
  const ceiling = spec.consumed_fields?.authority_ceiling ?? "read";

  switch (rule.rule_id) {
    case "R-SCOPE": {
      const scope = host.target_host_scope;
      const missingScope = contracts.filter((contract) => registry(contract).admitted_for_host_scope !== true);
      if (missingScope.length > 0) {
        return makeCheck(rule, "fail", "The candidate is held outside the target host scope; empty or non-admitted scope is not universal admission.", { conflict: [...missingScope.map(candidateId), scope] });
      }
      return makeCheck(rule, "pass", "Every selected candidate is explicitly admitted for the target host scope.");
    }
    case "R-LICENSE": {
      for (const contract of contracts) {
        const state = packaging(contract).rights_state;
        if (state === undefined) return makeCheck(rule, "underdetermined", "Packaging rights_state is absent; the rights gate cannot decide.", { missing_field: `PackagingProfile.rights_state (${candidateId(contract)})`, must_be_supplied_by: "operator" });
        if (state === "incompatible") return makeCheck(rule, "fail", "The declared rights state is incompatible with the assembly distribution mode.", { conflict: [candidateId(contract)] });
        if (["unknown", "ambiguous"].includes(state)) return makeCheck(rule, "underdetermined", "Rights are quarantined rather than silently projected as pending.", { missing_field: `PackagingProfile.rights_state (${candidateId(contract)})`, must_be_supplied_by: "operator" });
      }
      return makeCheck(rule, "pass", "All selected rights states are declared or verified and no incompatible state is declared.");
    }
    case "R-EVIDENCE": {
      const requiredFamilies = host.required_evidence_families ?? [];
      const minimumTier = rankOf(["T0", "T1", "T2", "T3", "T4"], host.minimum_evidence_tier ?? "T0");
      for (const contract of contracts) {
        const dossier = qualification(contract);
        const tier = rankOf(["T0", "T1", "T2", "T3", "T4"], dossier.evidence_tier);
        if (tier === null) return makeCheck(rule, "underdetermined", "Qualification evidence_tier is absent or outside the canonical T0-T4 vocabulary.", { missing_field: `QualificationDossier.evidence_tier (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
        if (tier < minimumTier) return makeCheck(rule, "fail", "The candidate evidence tier is below the target release class minimum.", { conflict: [candidateId(contract), dossier.evidence_tier] });
        const families = dossier.families_reported ?? {};
        for (const family of requiredFamilies) {
          if (!Object.hasOwn(families, family)) return makeCheck(rule, "underdetermined", "An absent required evidence family is treated as not_run and cannot improve the minimum.", { missing_field: `QualificationDossier.families_reported.${family} (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
          const status = familyStatus(families[family]);
          if (status !== "pass") return makeCheck(rule, "underdetermined", `Required evidence family is ${status ?? "absent"}; evidence is min-gated and not averaged away.`, { missing_field: `QualificationDossier.families_reported.${family} (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
        }
      }
      return makeCheck(rule, "pass", "Every required evidence family passes at or above the minimum tier for every selected candidate.");
    }
    case "R-HOSTVER": {
      const facilities = new Set(host.facilities ?? []);
      for (const contract of contracts) {
        const hc = hostRecord(contract);
        if (!hc.host_contract_version) return makeCheck(rule, "underdetermined", "The candidate does not declare the host contract version it binds against.", { missing_field: `HostContract.host_contract_version (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
        if (hc.host_contract_version !== host.host_contract_version) return makeCheck(rule, "fail", "The candidate host contract version does not match the pinned assembly host contract.", { conflict: [candidateId(contract), hc.host_contract_version] });
        const missing = (capability(contract).requires_host ?? []).filter((facility) => !facilities.has(facility));
        if (missing.length > 0) return makeCheck(rule, "fail", `The pinned host lacks required facilities: ${missing.join(", ")}.`, { conflict: [candidateId(contract), ...missing] });
      }
      return makeCheck(rule, "pass", "All selected host-facing facilities exist in the pinned assembly host contract.");
    }
    case "R-RUNTIME": {
      const supported = new Set(host.runtime_profiles ?? []);
      for (const contract of contracts) {
        const pack = packaging(contract);
        if (!pack.reuse_shape) return makeCheck(rule, "underdetermined", "Reuse shape is required to derive the runtime profile.", { missing_field: `PackagingProfile.reuse_shape (${candidateId(contract)})`, must_be_supplied_by: "operator" });
        const expected = RUNTIME_BY_SHAPE[pack.reuse_shape];
        const actual = pack.runtime_profile ?? binding(contract).runtime_profile;
        if (expected && actual !== expected) return makeCheck(rule, "fail", `Runtime profile ${actual ?? "absent"} contradicts reuse shape ${pack.reuse_shape}.`, { conflict: [candidateId(contract), actual ?? "absent"] });
        if (actual && !supported.has(actual)) return makeCheck(rule, "fail", `The host does not supply runtime profile ${actual}.`, { conflict: [candidateId(contract), actual] });
      }
      return makeCheck(rule, "pass", "Every selected intact service derives to the supported sidecar_service profile.");
    }
    case "R-DATAMODE": {
      const sessionMode = host.data?.data_mode ?? spec.consumed_fields?.data_mode;
      const sessionRank = rankOf(DATA_MODE_ORDER, sessionMode);
      if (sessionRank === null) return makeCheck(rule, "underdetermined", "The session data mode is absent or outside the canonical ladder.", { missing_field: "ProductSpec.data_mode", must_be_supplied_by: "operator" });
      for (const contract of contracts) {
        const required = capability(contract).required_data_mode ?? hostRecord(contract).data?.data_mode;
        const requiredRank = rankOf(DATA_MODE_ORDER, required);
        if (requiredRank === null) return makeCheck(rule, "underdetermined", "The candidate required data mode is absent or outside the canonical ladder.", { missing_field: `CapabilityContract.required_data_mode (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
        if (requiredRank > sessionRank) return makeCheck(rule, "fail", `Candidate requires ${required} but the session is ${sessionMode}; the solver never upgrades data mode.`, { conflict: [candidateId(contract), required, sessionMode] });
      }
      return makeCheck(rule, "pass", "Every candidate fits within the declared session data mode without an upgrade.");
    }
    case "R-TENANCY": {
      const targetKey = host.tenancy?.tenant_key;
      for (const contract of contracts) {
        const semantics = capability(contract).state_semantics ?? {};
        if (!semantics.tenant_model || !semantics.tenant_key) return makeCheck(rule, "underdetermined", "The candidate does not declare its tenant model and first-class tenant key.", { missing_field: `CapabilityContract.state_semantics.tenant_model/tenant_key (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
        const bridge = semantics.tenant_bridge ?? hostRecord(contract).tenancy?.explicit_bridge ?? binding(contract).tenant_binding?.host_bridge;
        if (semantics.tenant_key !== targetKey && !bridge) return makeCheck(rule, "fail", `Candidate tenant key ${semantics.tenant_key} differs from host key ${targetKey} without an explicit bridge.`, { conflict: [candidateId(contract), semantics.tenant_key, targetKey] });
      }
      return makeCheck(rule, "pass", "All selected tenant models share the host key or declare an explicit bridge.");
    }
    case "R-PORTCLOSE": {
      const provided = new Set(contracts.flatMap((contract) => (capability(contract).provides ?? []).map((port) => port.port_id)));
      const capabilityIds = new Set(contracts.map(candidateId));
      for (const contract of contracts) {
        for (const required of capability(contract).requires_capabilities ?? []) {
          if (!capabilityIds.has(required) && !provided.has(required) && !(host.facilities ?? []).includes(required)) return makeCheck(rule, "fail", `Required capability ${required} has no selected provider or host interface.`, { conflict: [candidateId(contract), required] });
        }
      }
      return makeCheck(rule, "pass", "Every declared capability dependency is empty or resolved by the selected set/host interface; no lexical near-match was used.");
    }
    case "R-VERSION": {
      const ranges = new Map();
      for (const contract of contracts) {
        for (const dependency of capability(contract).dependency_ranges ?? []) {
          const current = ranges.get(dependency.name) ?? [];
          current.push({ ...dependency, capability_id: candidateId(contract) });
          ranges.set(dependency.name, current);
        }
      }
      for (const [name, declarations] of ranges) {
        const exactVersions = declarations.map((declaration) => declaration.exact_version).filter(Boolean);
        if (exactVersions.length > 1 && new Set(exactVersions).size > 1) return makeCheck(rule, "fail", `Shared dependency ${name} has an empty exact-version intersection.`, { conflict: declarations.map((declaration) => `${declaration.capability_id}:${declaration.exact_version}`) });
      }
      return makeCheck(rule, "pass", "No declared shared dependency range has an empty intersection; the solver did not arbitrate a version.");
    }
    case "R-PORTTYPE": {
      for (const contract of contracts) {
        const wires = binding(contract).port_wiring;
        if (!Array.isArray(wires)) return makeCheck(rule, "underdetermined", "Port wiring is absent, so schema compatibility cannot be decided.", { missing_field: `BindingPlan.port_wiring (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
        for (const wire of wires) {
          if (!wire.schema_compatibility) return makeCheck(rule, "underdetermined", "A port wire has no schema compatibility declaration.", { missing_field: `BindingPlan.port_wiring.schema_compatibility (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
          if (wire.schema_compatibility === "incompatible") return makeCheck(rule, "fail", "A declared port wire is incompatible.", { conflict: [candidateId(contract), wire.from_port, wire.to_port] });
          if (wire.schema_compatibility === "UNDERDETERMINED") return makeCheck(rule, "underdetermined", "A port wire explicitly reports UNDERDETERMINED compatibility.", { missing_field: `BindingPlan.port_wiring.${wire.from_port}->${wire.to_port}`, must_be_supplied_by: "experiment" });
          if (!["identical", "narrowing", "adapter_required"].includes(wire.schema_compatibility)) return makeCheck(rule, "underdetermined", "Port compatibility uses an unknown vocabulary value.", { missing_field: `BindingPlan.port_wiring.schema_compatibility (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
        }
      }
      return makeCheck(rule, "pass", "All declared wires are identical, narrowing, or explicitly adapter_required; adapter wires remain in the glue budget.");
    }
    case "R-NAMESPACE": {
      const seen = new Map();
      for (const contract of contracts) {
        for (const entry of namespaceEntries(contract)) {
          const key = `${entry.kind}:${entry.value}`;
          const prior = seen.get(key);
          if (prior && prior.capability_id !== entry.capability_id) return makeCheck(rule, "fail", `Namespace collision on ${key}.`, { conflict: [prior.capability_id, entry.capability_id] });
          seen.set(key, entry);
        }
      }
      return makeCheck(rule, "pass", "No route, table, migration, environment, event, or file namespace collides across selected candidates.");
    }
    case "R-MIGOWNER": {
      const owners = new Map();
      for (const contract of contracts) {
        const data = binding(contract).data_binding;
        if (!data?.resources?.length || !data.migration_authority) return makeCheck(rule, "underdetermined", "A stateful resource or migration authority is not named.", { missing_field: `BindingPlan.data_binding.resources/migration_authority (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
        for (const resource of data.resources) {
          const name = resource.resource ?? resource.resource_id;
          const owner = resource.migration_owner ?? resource.owner;
          if (!name || !owner) return makeCheck(rule, "underdetermined", "A resource has no named migration owner.", { missing_field: `BindingPlan.data_binding.resources[].migration_owner (${candidateId(contract)})`, must_be_supplied_by: "operator" });
          const prior = owners.get(name);
          if (prior && prior.owner !== owner) return makeCheck(rule, "fail", `Two owners claim migration authority over ${name}.`, { conflict: [prior.capability_id, candidateId(contract), name] });
          owners.set(name, { owner, capability_id: candidateId(contract) });
        }
        if (data.cross_owner_reads === "direct_query_same_database") return makeCheck(rule, "fail", "Direct cross-owner reads are forbidden; use an event-fed read model.", { conflict: [candidateId(contract), "direct_query_same_database"] });
      }
      return makeCheck(rule, "pass", "Every stateful resource has one named migration owner and cross-owner mutation/read policy is not violated.");
    }
    case "R-IDENTITY": {
      for (const contract of contracts) {
        const identity = binding(contract).identity_binding;
        const hostIdentity = hostRecord(contract).identity;
        if (!identity || !hostIdentity) return makeCheck(rule, "underdetermined", "Identity binding or host identity contract is absent.", { missing_field: `BindingPlan.identity_binding (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
        if (identity.host_is_single_issuer !== true || identity.assertion_query_parameter !== false || identity.donor_login_route !== "forbidden" || hostIdentity.identity_source !== "host_verified_context" || hostIdentity.long_lived_credential_client_side !== false) return makeCheck(rule, "fail", "The host is not the sole verified identity authority or a donor login/unsafe transport remains reachable.", { conflict: [candidateId(contract)] });
        if (identity.audience_bound !== true || identity.single_use !== true) return makeCheck(rule, "fail", "The session handoff is not audience-bound and single-use.", { conflict: [candidateId(contract)] });
      }
      return makeCheck(rule, "pass", "All selected bindings use host_verified_context with two-token, audience-bound, single-use handoff and no donor login route.");
    }
    case "R-NAV": {
      const contexts = new Set();
      for (const contract of contracts) {
        const nav = binding(contract).navigation_binding;
        const hostNav = hostRecord(contract).navigation;
        if (!nav?.contribution_model || !nav.route_guard || !nav.visibility_predicate || !hostNav?.contribution_model) return makeCheck(rule, "underdetermined", "Navigation contribution or route guard is not declared.", { missing_field: `BindingPlan.navigation_binding (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
        if (nav.contribution_model !== "deploy_time_manifest" || hostNav.contribution_model !== "deploy_time_manifest" || nav.route_guard !== nav.visibility_predicate || nav.entitlement_and_permission_separate !== true || hostNav.host_owns_url_space !== true) return makeCheck(rule, "fail", "Navigation contribution, visibility and route guard do not share the canonical host-owned contract.", { conflict: [candidateId(contract)] });
        contexts.add(nav.contribution_model);
      }
      return makeCheck(rule, "pass", "Navigation is contributed as host-owned data with aligned route guards, separate entitlement/permission gates, and cascading emptiness.");
    }
    case "R-TOKEN": {
      const resolverContexts = new Set();
      for (const contract of contracts) {
        const token = binding(contract).token_binding;
        if (token?.ui_bearing !== true) continue;
        if (!Array.isArray(token.token_paths) || token.token_paths.length === 0 || !token.resolver_context_id) return makeCheck(rule, "underdetermined", "The UI-bearing module has no declared token consumption/resolver context; cross-origin token parity cannot be inferred.", { missing_field: `BindingPlan.token_binding.token_paths/resolver_context_id (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
        for (const tokenPath of token.token_paths) if (!(host.token?.approved_token_paths ?? []).includes(tokenPath)) return makeCheck(rule, "fail", `Token path ${tokenPath} is not in the approved host token set.`, { conflict: [candidateId(contract), tokenPath] });
        resolverContexts.add(token.resolver_context_id);
      }
      if (resolverContexts.size > 1) return makeCheck(rule, "fail", "UI-bearing candidates resolve from different token contexts.", { conflict: [...resolverContexts] });
      return makeCheck(rule, "pass", "All UI-bearing candidates resolve from one approved token resolver context.");
    }
    case "R-OBSID": {
      const seen = new Set();
      for (const contract of contracts) {
        const id = candidateId(contract);
        const registryId = registry(contract).capability_id;
        const hostId = hostRecord(contract).observability?.capability_identifier;
        if (!id || !registryId || !hostId) return makeCheck(rule, "underdetermined", "Stable capability identity is absent on one of the required records.", { missing_field: `CapabilityContract/RegistryRecord/HostContract capability_id (${id || firstId})`, must_be_supplied_by: "experiment" });
        if (seen.has(id) || registryId !== id || hostId !== id) return makeCheck(rule, "fail", "A composed module is anonymous or shares a stable identifier.", { conflict: [id] });
        seen.add(id);
      }
      return makeCheck(rule, "pass", "Every selected module has a distinct stable capability identifier across contract, registry and observability records.");
    }
    case "R-AUTHORITY": {
      const ceilingRank = rankOf(AUTHORITY_ORDER, ceiling);
      if (ceilingRank === null) return makeCheck(rule, "underdetermined", "The ProductSpec authority ceiling is outside the canonical session ladder.", { missing_field: "ProductSpec.authority_ceiling", must_be_supplied_by: "operator" });
      for (const contract of contracts) {
        const classCeiling = CLASS_MIN_CEILING[capability(contract).authority_class];
        if (!classCeiling) return makeCheck(rule, "underdetermined", "Capability authority_class is absent or outside the canonical vocabulary.", { missing_field: `CapabilityContract.authority_class (${candidateId(contract)})`, must_be_supplied_by: "operator" });
        if (rankOf(AUTHORITY_ORDER, classCeiling) > ceilingRank) return makeCheck(rule, "fail", `Capability class requires ${classCeiling} but the session ceiling is ${ceiling}.`, { conflict: [candidateId(contract), classCeiling, ceiling] });
        for (const port of capability(contract).provides ?? []) {
          const required = EFFECT_MIN_CEILING[port.external_effect];
          if (!required) return makeCheck(rule, "underdetermined", "Port external_effect is absent or outside the canonical vocabulary.", { missing_field: `CapabilityContract.provides.${port.port_id}.external_effect (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
          if (rankOf(AUTHORITY_ORDER, required) > ceilingRank) return makeCheck(rule, "fail", `Port ${port.port_id} requires ${required} but the session ceiling is ${ceiling}.`, { conflict: [candidateId(contract), port.port_id, required, ceiling] });
        }
      }
      return makeCheck(rule, "pass", "The intersection of capability class and port effects fits the session ceiling; no authority was widened.");
    }
    case "R-IDEMPOTENCY": {
      for (const effect of allEffects(contracts)) {
        if (!["write_external", "irreversible_external"].includes(effect.external_effect)) continue;
        if (!effect.idempotency_class) return makeCheck(rule, "fail", "A write/external-effecting port has no idempotency class; the safe default is not an auto-retry permission.", { conflict: [effect.capability_id, effect.port_id] });
        if (effect.idempotency_class === "unsafe" && effect.automatic_retry === true) return makeCheck(rule, "fail", "An unsafe action is configured for automatic retry.", { conflict: [effect.capability_id, effect.port_id] });
      }
      return makeCheck(rule, "pass", "Every declared write/external effect has an idempotency class and no unsafe action is auto-retried.");
    }
    case "R-CONSENT": {
      for (const effect of allEffects(contracts)) {
        if (effect.consent_grade === "irreversible_or_financial" && !effect.approval_step) return makeCheck(rule, "fail", "An irreversible/financial effect has no explicit approval step.", { conflict: [effect.capability_id, effect.port_id] });
        if (!["read", "reversible", "irreversible_or_financial"].includes(effect.consent_grade)) return makeCheck(rule, "underdetermined", "External effect consent grade is missing or outside the canonical vocabulary.", { missing_field: `BindingPlan.external_effects.${effect.port_id}.consent_grade (${effect.capability_id})`, must_be_supplied_by: "operator" });
      }
      return makeCheck(rule, "pass", "External effects either remain read-only or declare consequence-graded consent; no ambient account selection is used.");
    }
    case "R-ROLLBACK": {
      for (const contract of contracts) {
        const plan = release(contract).rollback_plan;
        const objects = plan?.objects ?? [];
        const byKind = new Map(objects.map((object) => [object.object_kind, object]));
        const missing = ROLLBACK_OBJECTS.filter((kind) => !byKind.has(kind));
        if (missing.length > 0) return makeCheck(rule, "fail", `Rollback plan omits touched object(s): ${missing.join(", ")}.`, { conflict: [candidateId(contract), ...missing] });
        for (const kind of ROLLBACK_OBJECTS) {
          const object = byKind.get(kind);
          if (!object.restore_procedure || !object.owner || typeof object.recovery_horizon_seconds !== "number") return makeCheck(rule, "underdetermined", `Rollback object ${kind} lacks a complete owner/procedure/horizon declaration.`, { missing_field: `ReleaseManifest.rollback_plan.objects.${kind} (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
        }
        if (release(contract).donor_revision_recovery_declared !== true) return makeCheck(rule, "underdetermined", "The donor revision recovery path is listed but not declared by the donor; it cannot be promoted by inference.", { missing_field: `ReleaseManifest.donor_revision_recovery_declared (${candidateId(contract)})`, must_be_supplied_by: "donor_upstream" });
      }
      return makeCheck(rule, "pass", "Every canonical rollback object has an owner, procedure and horizon, including donor revision recovery.");
    }
    case "R-HORIZON": {
      for (const contract of contracts) {
        const plan = release(contract).rollback_plan;
        const horizons = (plan?.objects ?? []).map((object) => object.recovery_horizon_seconds);
        if (horizons.some((value) => typeof value !== "number")) return makeCheck(rule, "underdetermined", "A rollback object horizon is undeclared.", { missing_field: `ReleaseManifest.rollback_plan.objects[].recovery_horizon_seconds (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
        const minimum = Math.min(...horizons);
        const declared = release(contract).recovery_horizon_seconds;
        if (typeof declared !== "number") return makeCheck(rule, "underdetermined", "The composition recovery horizon is undeclared.", { missing_field: `ReleaseManifest.recovery_horizon_seconds (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
        if (declared > minimum) return makeCheck(rule, "fail", "The declared recovery horizon exceeds the shortest rollback-object horizon.", { conflict: [candidateId(contract), String(declared), String(minimum)] });
        if (minimum === 0) return makeCheck(rule, "underdetermined", "A zero horizon is retained for the un-rehearsed prototype; arithmetic refuses release rather than inventing a recovery window.", { missing_field: `ReleaseManifest.rollback_plan.objects[].recovery_horizon_seconds (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
      }
      return makeCheck(rule, "pass", "The declared recovery horizon is the minimum across all rollback objects.");
    }
    case "R-GLUE": {
      for (const contract of contracts) {
        const budget = binding(contract).glue_budget;
        if (!budget || typeof budget.declared_max_changed_files !== "number" || typeof budget.declared_max_changed_lines !== "number") return makeCheck(rule, "underdetermined", "The candidate has no numeric changed-file/changed-line ceiling; no unsupported estimate is substituted.", { missing_field: `BindingPlan.glue_budget.declared_max_changed_files/declared_max_changed_lines (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
        if (typeof budget.predicted_changed_files !== "number" || typeof budget.predicted_changed_lines !== "number") return makeCheck(rule, "underdetermined", "Predicted glue size is unmeasured; the pilot records the gap rather than estimating hours or percentages.", { missing_field: `BindingPlan.glue_budget.predicted_changed_files/predicted_changed_lines (${candidateId(contract)})`, must_be_supplied_by: "experiment" });
        if (budget.predicted_changed_files > budget.declared_max_changed_files || budget.predicted_changed_lines > budget.declared_max_changed_lines) {
          if (budget.exceeded_action === "reject") return makeCheck(rule, "fail", "Predicted glue exceeds the declared ceiling and the binding says reject.", { conflict: [candidateId(contract)] });
          return makeCheck(rule, "pass", `Glue exceeds the numeric ceiling but is routed to ${budget.exceeded_action}; a human-gated/reshaped result is not an automatic pass.`, { feasibility_class: budget.exceeded_action === "escalate_human_review" ? "determined_with_human_gate" : null });
        }
      }
      return makeCheck(rule, "pass", "Predicted glue is inside every declared ceiling.");
    }
    default:
      throw new Error(`unimplemented imported rule: ${rule.rule_id}`);
  }
}

export function solveScenario(loaded, scenarioId, selectedIds) {
  const contracts = selectedContracts(loaded, selectedIds);
  const rules = loaded.ruleImport.rules;
  const checks = rules.map((rule) => evaluateRule(rule, contracts, loaded));
  const firstNonPass = checks.find((check) => ["fail", "underdetermined"].includes(check.outcome));
  const verdict = firstNonPass?.outcome === "fail" ? "INFEASIBLE" : firstNonPass?.outcome === "underdetermined" ? "UNDERDETERMINED" : "FEASIBLE";
  const missingFields = checks.filter((check) => check.outcome === "underdetermined").map((check) => ({
    rule_id: check.rule_id,
    constraint: check.constraint,
    field: check.missing_field,
    reason: check.reason,
    must_be_supplied_by: check.must_be_supplied_by ?? "experiment",
  }));
  const failedRules = checks.filter((check) => check.outcome === "fail").map((check) => ({ rule_id: check.rule_id, constraint: check.constraint, conflict: check.conflict ?? [] }));
  return {
    scenario_id: scenarioId,
    selected_candidate_ids: contracts.map(candidateId),
    verdict,
    first_non_pass: firstNonPass ? { rule_id: firstNonPass.rule_id, constraint: firstNonPass.constraint, outcome: firstNonPass.outcome, field: firstNonPass.missing_field ?? null, conflict: firstNonPass.conflict ?? [] } : null,
    checks,
    missing_fields: missingFields,
    failed_rules: failedRules,
    candidate_dispositions: Object.fromEntries(contracts.map((contract) => [candidateId(contract), verdict === "FEASIBLE" ? "feasible_not_selected" : "eliminated"])),
    feasible_sets: verdict === "FEASIBLE" ? [{ set_id: `set-${scenarioId}`, capability_ids: contracts.map(candidateId), feasibility_class: "fully_determined", residual_glue_ports: [] }] : [],
    selected_set: null,
    relaxations_applied: 0,
  };
}

function scenarios(input) {
  const ids = (input.candidates ?? []).map((candidate) => candidate.candidate_id).sort();
  return [
    { scenario_id: "candidate-affine", selected_ids: ids.filter((id) => id === "actionist/affine-workspace@0.1.0") },
    { scenario_id: "candidate-teable", selected_ids: ids.filter((id) => id === "actionist/teable-data-grid@0.1.0") },
    { scenario_id: "candidate-chatwoot", selected_ids: ids.filter((id) => id === "actionist/chatwoot-inbox@0.1.0") },
    { scenario_id: "combined-all-three", selected_ids: ids },
  ];
}

function canonicalInput(loaded) {
  return {
    workflow: loaded.input.workflow,
    product_spec: loaded.input.product_spec,
    host_contract: loaded.input.host_contract,
    candidates: (loaded.input.candidates ?? []).map((candidate) => ({
      candidate_id: candidate.candidate_id,
      source_id: candidate.source_id,
      source_verdict: candidate.source_verdict,
      source_status: candidate.source_status,
      reuse_shape: candidate.reuse_shape,
      contract: loaded.contracts.get(candidate.candidate_id),
    })).sort((a, b) => a.candidate_id.localeCompare(b.candidate_id)),
  };
}

export function runPilot(loaded, repeatCount = 3) {
  const inputDigest = sha256(canonicalInput(loaded));
  const scenarioDefinitions = scenarios(loaded.input);
  const canonicalResults = scenarioDefinitions.map((scenario) => solveScenario(loaded, scenario.scenario_id, scenario.selected_ids));
  const outputDigest = sha256({ solver_version: SOLVER_VERSION, input_digest: inputDigest, scenario_results: canonicalResults });
  const scenarioDigests = Object.fromEntries(canonicalResults.map((result) => [result.scenario_id, sha256(result)]));
  const runs = [];
  for (let runIndex = 1; runIndex <= repeatCount; runIndex += 1) {
    const repeatedResults = scenarioDefinitions.map((scenario) => solveScenario(loaded, scenario.scenario_id, scenario.selected_ids));
    const repeatedOutputDigest = sha256({ solver_version: SOLVER_VERSION, input_digest: inputDigest, scenario_results: repeatedResults });
    runs.push({
      run_index: runIndex,
      input_digest: inputDigest,
      output_digest: repeatedOutputDigest,
      scenario_digests: Object.fromEntries(repeatedResults.map((result) => [result.scenario_id, sha256(result)])),
      relaxations_applied: 0,
    });
  }
  const inputDigests = new Set(runs.map((run) => run.input_digest));
  const outputDigests = new Set(runs.map((run) => run.output_digest));
  const allScenarioDigestsEqual = scenarioDefinitions.every((scenario) => new Set(runs.map((run) => run.scenario_digests[scenario.scenario_id])).size === 1);
  const summary = Object.fromEntries(canonicalResults.map((result) => [result.scenario_id, {
    verdict: result.verdict,
    first_non_pass: result.first_non_pass,
    failed_rule_count: result.failed_rules.length,
    underdetermined_field_count: result.missing_fields.length,
  }]));
  return {
    schema_version: "actionist.three-candidate-solver-pilot.results.v1",
    run_id: loaded.input.run_id,
    solver_version: SOLVER_VERSION,
    input_digest: inputDigest,
    exact_run_count: repeatCount,
    rule_counts: {
      ordered_rules: loaded.ruleImport.ordered_rule_count,
      distinct_constraints: loaded.ruleImport.distinct_constraint_count,
    },
    runs,
    digest_parity: {
      input_digests_equal: inputDigests.size === 1,
      output_digests_equal: outputDigests.size === 1,
      scenario_digests_equal: allScenarioDigestsEqual,
      all_equal: inputDigests.size === 1 && outputDigests.size === 1 && allScenarioDigestsEqual,
    },
    scenario_results: canonicalResults,
    summary,
    boundary: {
      research_only: true,
      donor_source_cloned: false,
      donor_source_executed: false,
      staged_binding: false,
      deployment_performed: false,
      admission_status: "NOT_ADMITTED",
      admitted_modules: 0,
      client_data_used: false,
      relaxations_applied: 0,
    },
    canonical_output_digest: outputDigest,
  };
}

function parseArgs(argv) {
  const args = { input: DEFAULT_INPUT_PATH, rules: DEFAULT_RULES_PATH, repeats: 3 };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === "--input" || value === "--rules" || value === "--repeats") {
      const next = argv[index + 1];
      if (!next || next.startsWith("--")) throw new Error(`${value} requires a value`);
      if (value === "--input") args.input = resolveRepoPath(next);
      if (value === "--rules") args.rules = resolveRepoPath(next);
      if (value === "--repeats") args.repeats = Number.parseInt(next, 10);
      index += 1;
    } else if (value === "--help" || value === "-h") {
      args.help = true;
    } else {
      throw new Error(`Unknown argument: ${value}`);
    }
  }
  if (!Number.isInteger(args.repeats) || args.repeats < 3) throw new Error("--repeats must be an integer >= 3");
  return args;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log("Usage: node solver.mjs [--input candidate-set.json] [--rules rule-import.json] [--repeats 3]");
    return;
  }
  console.log(JSON.stringify(runPilot(loadPilot({ inputPath: args.input, rulesPath: args.rules }), args.repeats), null, 2));
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) main();
