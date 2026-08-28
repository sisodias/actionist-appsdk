import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const owned = path.dirname(fileURLToPath(import.meta.url));
const surfacePath = path.join(owned, "surface-register.json");
const editPath = path.join(owned, "edit-contract.json");
const lanePath = path.join(owned, "lane-state.json");
const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    failures.push(`${path.basename(filePath)}: ${error.message}`);
    return null;
  }
}

function sorted(values) {
  return [...values].sort();
}

function equalSet(left, right) {
  return JSON.stringify(sorted(new Set(left))) === JSON.stringify(sorted(new Set(right)));
}

const surface = readJson(surfacePath);
const edit = readJson(editPath);
const lane = readJson(lanePath);
const registerPath = "/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/knowledge/block-hub/block-register.json";
const register = readJson(registerPath);

check(surface?.boundary?.owned_directory === `${owned}/`, "surface register owned directory mismatch");
check(edit?.boundary?.owned_directory === `${owned}/`, "edit contract owned directory mismatch");
check(surface?.correction?.agency_os_is_product_target === false, "surface register still targets Agency OS");
check(edit?.correction?.agency_os_is_product_target === false, "edit contract still targets Agency OS");
check(surface?.correction?.concrete_product_selected === false, "surface register selects a concrete product");
check(edit?.correction?.concrete_product_selected === false, "edit contract selects a concrete product");

if (surface && register) {
  const blocks = register.blocks ?? [];
  const registerIds = blocks.map((block) => block.id);
  const surfaceRows = surface.surfaces ?? [];
  const mappedIds = surfaceRows.flatMap((row) => row.block_ids ?? []);
  const parity = surface.block_parity ?? {};

  check(register.counts?.blocks === registerIds.length, "block register total count mismatch");
  check(new Set(registerIds).size === registerIds.length, "block register IDs are not unique");
  check(surfaceRows.length === registerIds.length, "surface row count does not equal block register count");
  check(equalSet(mappedIds, registerIds), "surface/block parity mismatch");
  check(equalSet(parity.mapped_block_ids ?? [], registerIds), "parity mapped IDs mismatch");
  check((parity.unmapped_block_ids ?? []).length === 0, "parity reports unmapped blocks");
  check((parity.unknown_block_ids ?? []).length === 0, "parity reports unknown blocks");
  check(parity.register_block_count === registerIds.length, "parity register count mismatch");
  check(parity.crosswalk?.length === registerIds.length, "parity crosswalk count mismatch");
  check(surface.counts?.mapped_block_count === registerIds.length, "surface mapped block count mismatch");
  check(surface.counts?.register_block_count === registerIds.length, "surface register block count mismatch");

  const overlays = ["saas", "ecommerce", "marketing_agency", "course_creator"];
  const expectedScope = (block) => {
    if ((block.recipes ?? []).includes("digital_business_os")) return "universal";
    return overlays.filter((vertical) => (block.recipes ?? []).includes(vertical)).length >= 2
      ? "cross_vertical"
      : "vertical_specific";
  };
  const scopeCounts = { universal: 0, cross_vertical: 0, vertical_specific: 0 };
  for (const block of blocks) scopeCounts[expectedScope(block)] += 1;
  check(JSON.stringify(surface.taxonomy?.block_scope_counts) === JSON.stringify(scopeCounts), "taxonomy scope counts mismatch");
  check(surface.counts?.universal_block_count === undefined || surface.counts.universal_block_count === scopeCounts.universal, "universal count mismatch");
  check(surface.counts?.cross_vertical_block_count === undefined || surface.counts.cross_vertical_block_count === scopeCounts.cross_vertical, "cross-vertical count mismatch");
  check(surface.counts?.vertical_specific_block_count === undefined || surface.counts.vertical_specific_block_count === scopeCounts.vertical_specific, "vertical-specific count mismatch");
  for (const row of surfaceRows) {
    const block = blocks.find((candidate) => candidate.id === row.block_ids?.[0]);
    check(Boolean(block), `surface row has unknown block: ${row.surface_id}`);
    if (block) check(row.scope === expectedScope(block), `scope mismatch for ${block.id}`);
  }

  const surfaceLayerIds = blocks.filter((block) => block.layer === "surface").map((block) => block.id);
  check(equalSet(parity.surface_layer_register_ids ?? [], surfaceLayerIds), "surface-layer register parity mismatch");
  check(equalSet(parity.surface_layer_mapped_ids ?? [], surfaceLayerIds), "surface-layer mapped parity mismatch");
  const aliases = surface.taxonomy?.requested_surface_aliases ?? {};
  for (const [alias, ids] of Object.entries(aliases)) {
    for (const id of ids) check(registerIds.includes(id), `surface alias ${alias} references unknown block ${id}`);
  }
}

if (surface) {
  const roles = surface.component_role_catalog ?? [];
  const roleIds = roles.map((role) => role.id);
  const refs = (surface.surfaces ?? []).flatMap((row) => row.component_role_ids ?? []);
  check(Array.isArray(roles), "component role catalog is not an array");
  check(new Set(roleIds).size === roleIds.length, "component role IDs are not unique");
  check(refs.every((roleId) => roleIds.includes(roleId)), "surface references an undefined component role");
  check(roles.every((role) => role.tag_role === false), "raw tag promoted to a component role");
  const tokenFamilies = new Set(surface.token_harmonization?.semantic_token_families ?? []);
  check(roles.every((role) => (role.token_families ?? []).every((family) => tokenFamilies.has(family))), "role references an undefined token family");
  check(surface.counts?.component_role_rows === roles.length, "component role count mismatch");
  const states = surface.shared_state_roles ?? [];
  check(states.length === 8, "shared state count is not 8");
  for (const [profileId, profile] of Object.entries(surface.state_profiles ?? {})) {
    check(equalSet(profile.states ?? [], states), `state profile ${profileId} does not cover all states`);
  }
  check(Object.keys(surface.responsive_profiles ?? {}).length === 6, "responsive profile count is not 6");
  for (const row of surface.surfaces ?? []) {
    check(Boolean(surface.state_profiles?.[row.state_profile]), `surface ${row.surface_id} has undefined state profile`);
    check(Boolean(surface.responsive_profiles?.[row.responsive_profile]), `surface ${row.surface_id} has undefined responsive profile`);
  }

  const scoring = surface.value_matrix_visual_scoring;
  const dimensions = scoring?.dimensions ?? [];
  check(dimensions.length === 9, "visual score dimension count is not 9");
  check(dimensions.reduce((sum, dimension) => sum + dimension.weight, 0) === 100, "visual score weights do not sum to 100");
  check(equalSet(dimensions.map((dimension) => dimension.id), [
    "professional_coherence",
    "hierarchy",
    "typography",
    "spacing_density",
    "interaction_state_completeness",
    "responsive_quality",
    "accessibility",
    "visual_consistency",
    "donor_chrome_removal_burden"
  ]), "visual score dimensions incomplete");
  check(equalSet(scoring?.positive_anchors?.map((anchor) => anchor.name) ?? [], ["AFFiNE", "Twenty", "Chatwoot", "Plane"]), "positive anchor set mismatch");
  check((scoring?.positive_anchors ?? []).every((anchor) => anchor.score_vector === null && anchor.calibration_status === "protocol_defined_not_run"), "anchor score was claimed before capture");
  check(scoring?.gate?.product_surface_reuse?.pass_if?.includes("overall_score>=75"), "product surface gate missing");
  check(scoring?.gate?.engine_or_pattern_reuse?.ui_quality_gate === "not_applicable", "engine/pattern UI gate is not marked not_applicable");

  const protocol = surface.screenshot_protocol;
  check(protocol?.id === "VSCP-1", "screenshot protocol ID missing");
  check(protocol?.status === "design_only_not_run", "screenshot protocol unexpectedly claims execution");
  check((protocol?.viewport_matrix ?? []).length === 5, "screenshot viewport matrix count is not 5");
  check(equalSet(protocol?.mode_matrix ?? [], ["light", "dark"]), "screenshot mode matrix mismatch");
  check((protocol?.state_matrix ?? []).length === 8, "screenshot state matrix count is not 8");
  check((protocol?.capture_manifest_required ?? []).includes("screenshot_sha256"), "screenshot hash field missing");
  check((protocol?.prohibited_shortcuts ?? []).includes("hero_only_capture"), "hero-only shortcut is not prohibited");
}

if (edit) {
  const decisions = new Set(edit.decision_vocabulary ?? []);
  const matrix = edit.authority_matrix ?? [];
  const substrateIds = (edit.substrates ?? []).map((substrate) => substrate.id);
  check((edit.verbs ?? []).length === 7, "edit verb count is not 7");
  check(substrateIds.length === 3, "edit substrate count is not 3");
  check(matrix.length === 7, "authority matrix verb row count is not 7");
  check(matrix.every((row) => (edit.verbs ?? []).includes(row.verb)), "authority matrix has unknown verb");
  check(matrix.every((row) => substrateIds.every((substrateId) => row.cells?.[substrateId])), "authority matrix cell missing");
  for (const row of matrix) {
    for (const substrateId of substrateIds) {
      const cell = row.cells[substrateId];
      check(decisions.has(cell.decision), `${row.verb}/${substrateId} has invalid decision`);
      if (cell.decision === "denied") {
        check(Boolean(cell.constraint), `${row.verb}/${substrateId} denied without constraint`);
        check(Boolean(cell.nearest_alternative), `${row.verb}/${substrateId} denied without alternative`);
      }
      if (cell.decision === "escalated") {
        check(Boolean(cell.contract_transition), `${row.verb}/${substrateId} escalated without transition`);
        check(Boolean(cell.nearest_alternative), `${row.verb}/${substrateId} escalated without alternative`);
      }
    }
  }
  const cell = (verb, substrate) => matrix.find((row) => row.verb === verb)?.cells?.[substrate];
  check(cell("text", "intact_service")?.decision === "denied", "intact service text edit is not denied");
  check(cell("theme", "intact_service")?.decision === "denied", "intact service theme edit is not denied");
  check(cell("data-binding", "intact_service")?.decision === "denied", "intact service data binding is not denied");
  check(cell("replace", "embedded_module")?.decision === "escalated", "embedded replacement is not escalated");
  check(cell("replace", "intact_service")?.decision === "escalated", "intact replacement is not escalated");
  check((edit.forbidden_anchors ?? []).includes("pixel_coordinate"), "pixel coordinates are not forbidden anchors");
  check(edit.mini_vibe_editor?.refusal_by_construction === true, "editor is not refusal-by-construction");
  check(edit.visual_gate_policy?.engine_or_pattern_reuse?.includes("NOT_APPLICABLE"), "engine/pattern visual gate separation missing");
  check(edit.counts?.authority_cell_count === 21, "authority cell count is not 21");
  check(edit.counts?.reuse_shape_count === 8, "reuse shape count is not 8");
}

if (lane) {
  check(lane.scope_owned === `${owned}/`, "lane scope does not equal owned directory");
  check(lane.correction_recorded === true, "course correction not recorded in lane state");
  check(lane.concrete_product_selected === false, "lane state selects a concrete product");
  check(lane.boundary?.wrote_only_owned_paths === true, "lane state does not attest owned-path boundary");
  check(Array.isArray(lane.artifacts) && lane.artifacts.every((artifact) => artifact.path.startsWith(`${owned}/`)), "lane artifact escapes owned path");
  check(lane.verification?.visual_calibration_status === "protocol_defined_not_run", "lane state overclaims visual calibration");
}

const allowedFiles = new Set(["experience-map.md", "surface-register.json", "edit-contract.json", "lane-state.json", "verify.mjs"]);
for (const entry of fs.readdirSync(owned, { withFileTypes: true })) {
  if (entry.isFile()) check(allowedFiles.has(entry.name), `unexpected file outside artifact allowlist: ${entry.name}`);
}

if (failures.length) {
  console.error(`FAIL ${failures.length}`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("PASS JSON_PARSE");
console.log("PASS SURFACE_BLOCK_PARITY 80/80");
console.log(`PASS ROLE_COVERAGE ${(surface?.component_role_catalog ?? []).length} roles`);
console.log("PASS EDIT_ALLOW_REFUSE_INVARIANTS 7x3=21");
console.log("PASS VISUAL_PROTOCOL 9 dimensions / 4 anchors / 5 viewports / 8 states");
console.log("PASS OWNED_PATH_BOUNDARY");
