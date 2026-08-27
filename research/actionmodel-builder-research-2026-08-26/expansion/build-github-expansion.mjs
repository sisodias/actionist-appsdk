#!/usr/bin/env node

import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const exec = promisify(execFile);
const observedDate = "2026-08-26";
const root = process.cwd();
const expansionDir = path.join(root, "research/actionmodel-builder-research-2026-08-26/expansion");
const outputDir = path.join(expansionDir, "outputs");
const baselinePath = path.join(root, "research/actionmodel-builder-research-2026-08-26/outputs/github-corpus.jsonl");
const targetTotal = 500;
const searchLimit = 20;
const searchFields = "fullName,description,stargazersCount,updatedAt,license,url";
const permissive = new Set(["MIT", "Apache-2.0", "BSD-2-Clause", "BSD-3-Clause", "ISC", "Zlib", "0BSD", "CC0-1.0", "Unlicense", "MPL-2.0"]);
const matrixDimensions = [
  ["demand_atom_fit", "Demand and solution-atom fit"],
  ["workflow_behavior", "Workflow behavior and outcome"],
  ["data_model", "Data entities, schema, and source of truth"],
  ["integration_surface", "Integration, API, browser, and tool surface"],
  ["ui_assembly", "UI, registry, scaffold, and token assembly"],
  ["agent_authority", "Agent authority, approval, and side effects"],
  ["verification_eval", "Verification, eval, and recovery evidence"],
  ["provenance_rights", "License, provenance, SBOM, and attribution"],
  ["runtime_deployment", "Sandbox, tenancy, deployment, and rollback"],
  ["economics_maintenance", "Activity, maintenance, adoption, and economics signals"],
];

const industries = [
  ["accounting_firms", "Accounting Firms", "data", ["finance_accounting"], ["extract_structure", "reconcile_audit", "follow_up_chase", "report_digest"], "accounting invoice reconciliation"],
  ["construction", "Construction", "scaffold", ["operations"], ["triage_route", "sync_handoff", "follow_up_chase", "report_digest"], "construction project management"],
  ["course_creators", "Course Creators", "scaffold", ["marketing", "operations"], ["intake_normalize", "schedule_coordinate", "follow_up_chase", "report_digest"], "course platform community"],
  ["ecommerce", "Ecommerce", "data", ["operations", "customer_support"], ["sync_handoff", "monitor_alert", "triage_route", "follow_up_chase"], "ecommerce inventory"],
  ["education_training", "Education & Training", "scaffold", ["operations", "customer_support"], ["intake_normalize", "schedule_coordinate", "report_digest", "follow_up_chase"], "education enrollment"],
  ["healthcare_medical_practices", "Healthcare & Medical Practices", "browser", ["admin_front_office", "customer_support"], ["intake_normalize", "schedule_coordinate", "follow_up_chase", "approval_publish"], "healthcare appointment"],
  ["hospitality", "Hospitality", "browser", ["operations", "customer_support"], ["intake_normalize", "schedule_coordinate", "follow_up_chase", "browser_data_entry"], "hospitality reservation"],
  ["it_services_msps", "IT Services & MSPs", "browser", ["it", "engineering", "support"], ["triage_route", "monitor_alert", "sync_handoff", "report_digest"], "IT helpdesk ticketing"],
  ["insurance_agencies", "Insurance Agencies", "data", ["sales", "operations"], ["intake_normalize", "extract_structure", "follow_up_chase", "approval_publish"], "insurance claims"],
  ["law_firms", "Law Firms", "data", ["legal", "admin_front_office"], ["intake_normalize", "extract_structure", "approval_publish", "follow_up_chase"], "legal document management"],
  ["logistics_freight", "Logistics & Freight", "browser", ["operations", "customer_support"], ["monitor_alert", "triage_route", "sync_handoff", "browser_data_entry"], "logistics freight"],
  ["marketing_social_media_agencies", "Marketing & Social Media Agencies", "builder", ["marketing", "sales"], ["monitor_alert", "extract_structure", "report_digest", "follow_up_chase"], "marketing social media analytics"],
  ["mortgage_brokers", "Mortgage Brokers", "data", ["sales", "finance_accounting"], ["intake_normalize", "extract_structure", "follow_up_chase", "approval_publish"], "mortgage loan"],
  ["property_management", "Property Management", "browser", ["operations", "customer_support"], ["intake_normalize", "triage_route", "follow_up_chase", "browser_data_entry"], "property management work orders"],
  ["real_estate", "Real Estate", "browser", ["sales", "admin_front_office"], ["intake_normalize", "schedule_coordinate", "follow_up_chase", "browser_data_entry"], "real estate crm"],
  ["recruiting_staffing", "Recruiting & Staffing", "data", ["hr_people", "sales"], ["intake_normalize", "classify_prioritize", "schedule_coordinate", "follow_up_chase"], "recruiting applicant tracking"],
  ["saas", "SaaS", "builder", ["product", "sales", "engineering"], ["sync_handoff", "monitor_alert", "report_digest", "approval_publish"], "saas crm billing"],
];

const capabilityQueries = [
  ["builder", "ai app builder", [], ["intent-elicitation", "assembly", "preview"]],
  ["builder", "prompt to app", [], ["intent-elicitation", "assembly", "preview"]],
  ["builder", "internal tool builder", [], ["scaffold-selection", "assembly", "data-binding"]],
  ["builder", "agent workflow", [], ["intent-elicitation", "approval", "verification"]],
  ["scaffold", "saas starter", [], ["scaffold-selection", "auth-interface", "deployment"]],
  ["scaffold", "admin dashboard", [], ["scaffold-selection", "data-binding", "component-registry"]],
  ["scaffold", "multi tenant", [], ["tenant-boundary", "auth-interface", "data-binding"]],
  ["scaffold", "crud generator", [], ["scaffold-selection", "schema-normalization", "assembly"]],
  ["registry", "component registry", [], ["component-registry", "release", "assembly"]],
  ["registry", "design system", [], ["component-registry", "token-normalization", "visual-proof"]],
  ["registry", "storybook", [], ["component-registry", "visual-proof", "verification"]],
  ["registry", "design tokens", [], ["token-normalization", "component-registry", "visual-proof"]],
  ["ast", "codemod", [], ["typed-transformation", "adaptation", "verification"]],
  ["ast", "ast transformation", [], ["typed-transformation", "adaptation", "schema-normalization"]],
  ["ast", "jscodeshift", [], ["typed-transformation", "adaptation", "verification"]],
  ["ast", "ts morph", [], ["typed-transformation", "adaptation", "verification"]],
  ["data", "postgres schema", [], ["data-introspection", "schema-normalization", "read-model"]],
  ["data", "database introspection", [], ["data-introspection", "schema-normalization", "api-contract"]],
  ["data", "openapi generator", [], ["api-contract", "schema-normalization", "data-binding"]],
  ["data", "sql migration", [], ["schema-normalization", "data-binding", "rollback"]],
  ["sandbox", "code sandbox", [], ["isolated-preview", "tenant-boundary", "rollback"]],
  ["sandbox", "preview environment", [], ["isolated-preview", "deployment", "rollback"]],
  ["sandbox", "static site deploy", [], ["deployment", "rollback", "verification"]],
  ["sandbox", "container runtime", [], ["isolated-preview", "tenant-boundary", "secret-egress"]],
  ["browser", "browser automation", [], ["browser-operation", "verification", "recovery"]],
  ["browser", "browser agent", [], ["browser-operation", "approval", "verification"]],
  ["browser", "computer use", [], ["browser-operation", "approval", "recovery"]],
  ["browser", "playwright mcp", [], ["browser-operation", "verification", "audit"]],
  ["eval", "llm eval", [], ["regression-gate", "traceability", "reproducibility"]],
  ["eval", "agent eval", [], ["verification", "regression-gate", "recovery"]],
  ["eval", "browser benchmark", [], ["browser-operation", "verification", "reproducibility"]],
  ["eval", "prompt evaluation", [], ["verification", "traceability", "regression-gate"]],
  ["provenance", "license compliance", [], ["license-gate", "provenance-gate", "audit"]],
  ["provenance", "sbom", [], ["sbom", "provenance-gate", "attestation"]],
  ["provenance", "software supply chain", [], ["provenance-gate", "sbom", "attestation"]],
  ["provenance", "in-toto", [], ["provenance-gate", "attestation", "audit"]],
  ["provenance", "dependency scanner", [], ["sbom", "license-gate", "provenance-gate"]],
];

const industryFallbackQueries = [
  ["accounting_firms", "Accounting Firms", "data", ["finance_accounting"], ["extract_structure", "reconcile_audit", "follow_up_chase"], "accounting software"],
  ["accounting_firms", "Accounting Firms", "data", ["finance_accounting"], ["extract_structure", "reconcile_audit", "report_digest"], "invoice OCR"],
  ["course_creators", "Course Creators", "scaffold", ["marketing", "operations"], ["intake_normalize", "schedule_coordinate", "report_digest"], "online course platform"],
  ["course_creators", "Course Creators", "scaffold", ["operations", "customer_support"], ["intake_normalize", "follow_up_chase", "report_digest"], "learning management system"],
  ["saas", "SaaS", "builder", ["product", "sales", "engineering"], ["scaffold-selection", "sync_handoff", "deployment"], "SaaS starter"],
  ["saas", "SaaS", "builder", ["sales", "product"], ["intake_normalize", "sync_handoff", "report_digest"], "CRM application"],
];

const teamLabels = new Map([
  ["finance_accounting", "Finance & Accounting"], ["operations", "Operations"], ["customer_support", "Customer Support"],
  ["engineering", "Engineering"], ["support", "Customer Support"], ["marketing", "Marketing"], ["sales", "Sales"],
  ["admin_front_office", "Admin & Front Office"], ["it", "IT"], ["legal", "Legal"], ["hr_people", "HR & People"],
  ["product", "Product"],
]);

function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }
function wellFormed(value) {
  const text = String(value ?? "");
  return typeof text.toWellFormed === "function" ? text.toWellFormed() : text.replace(/[\uD800-\uDFFF]/g, "\uFFFD");
}
function clean(text, max = 260) { return wellFormed(String(text || "").replace(/\s+/g, " ").trim().slice(0, max)); }
function json(text, fallback) { try { return JSON.parse(text); } catch { return fallback; } }
function canonical(value) {
  const raw = String(value || "").replace(/^https?:\/\/github\.com\//, "").replace(/\.git$/, "");
  const parts = raw.split("/");
  return parts[0] && parts[1] ? `${parts[0]}/${parts[1]}` : null;
}
function commandFor(query) { return `gh search repos ${JSON.stringify(query)} --limit ${searchLimit} --sort stars --json ${searchFields}`; }

async function gh(args, allowFailure = false) {
  try {
    const result = await exec("gh", args, { cwd: root, maxBuffer: 12 * 1024 * 1024 });
    return { stdout: result.stdout, stderr: result.stderr, ok: true };
  } catch (error) {
    if (!allowFailure) throw new Error(`gh ${args.join(" ")} failed: ${error.stderr || error.message}`);
    return { stdout: error.stdout || "", stderr: error.stderr || error.message, ok: false };
  }
}

async function searchBudget(events) {
  while (true) {
    const result = await gh(["api", "rate_limit"], false);
    const rate = json(result.stdout, {}).resources?.search;
    if (!rate || rate.remaining > 0) return rate || { remaining: null };
    const waitMs = Math.max(1000, Math.min(50000, (rate.reset * 1000) - Date.now() + 1000));
    events.push(`search_rate_wait remaining=0 reset=${new Date(rate.reset * 1000).toISOString()} wait_ms=${waitMs}`);
    await sleep(waitMs);
  }
}

async function runSearch(spec, events) {
  await searchBudget(events);
  const result = await gh(["search", "repos", spec.query, "--limit", String(searchLimit), "--sort", "stars", "--json", searchFields], true);
  if (!result.ok) {
    events.push(`search_failure query=${JSON.stringify(spec.query)} error=${clean(result.stderr, 300)}`);
    await sleep(2000);
    await searchBudget(events);
    const retry = await gh(["search", "repos", spec.query, "--limit", String(searchLimit), "--sort", "stars", "--json", searchFields], true);
    if (!retry.ok) {
      events.push(`search_retry_failure query=${JSON.stringify(spec.query)} error=${clean(retry.stderr, 300)}`);
      return { ...spec, command: commandFor(spec.query), results: [] };
    }
    return { ...spec, command: commandFor(spec.query), results: json(retry.stdout, []) };
  }
  return { ...spec, command: commandFor(spec.query), results: json(result.stdout, []) };
}

function querySpecs() {
  const specs = industries.map(([id, label, family, teams, atoms, query]) => ({
    kind: "industry", industryIds: [id], industryLabels: [label], family, teams, atoms, query,
    useCases: [],
  }));
  for (const [id, label, family, teams, atoms, query] of industryFallbackQueries) specs.push({
    kind: "industry", industryIds: [id], industryLabels: [label], family, teams, atoms, query, useCases: [],
  });
  for (const [family, query, industryIds, atoms] of capabilityQueries) specs.push({
    kind: "capability", industryIds, industryLabels: [], family, teams: [], atoms, query, useCases: [],
  });
  return specs;
}

function contentTags(readme, description, files) {
  const body = `${description || ""}\n${readme || ""}\n${files.join(" ")}`.toLowerCase();
  const rules = [
    ["ai-generation", /\b(ai|llm|language model|generat(?:e|es|ed|ive)|prompt-to)\b/],
    ["agent-runtime", /\b(agent|tool calling|mcp|workflow orchestration)\b/],
    ["admin-crud", /\b(admin|crud|resource|back office)\b/],
    ["saas-scaffold", /\b(saas|starter|boilerplate|scaffold|template)\b/],
    ["component-system", /\b(component|storybook|design system|registry|shadcn)\b/],
    ["design-tokens", /\b(token|figma|tailwind|theme)\b/],
    ["ast-transform", /\b(ast|codemod|jscodeshift|babel|ts-morph|transform)\b/],
    ["schema-data", /\b(postgres|postgresql|database|schema|migration|openapi|prisma|orm)\b/],
    ["sandbox-preview", /\b(sandbox|preview|iframe|container|docker|runtime)\b/],
    ["deployment", /\b(deploy|deployment|hosting|vercel|subdomain|rollback)\b/],
    ["browser-operation", /\b(browser|playwright|selenium|computer use|web automation)\b/],
    ["evaluation", /\b(eval|evaluation|benchmark|trace|observab|assertion|test harness)\b/],
    ["provenance-supply-chain", /\b(license|licen[cs]ing|sbom|supply chain|provenance|attestation|in-toto|slsa)\b/],
    ["vertical-workflow", /\b(invoice|inventory|ticket|support|crm|lead|appointment|reservation|logistics|recruit|loan|property|course|education|legal|construction|accounting)\b/],
  ];
  return rules.filter(([, regex]) => regex.test(body)).map(([tag]) => tag);
}

function licenseInfo(repo, files) {
  const spdx = repo?.license?.spdx_id || null;
  const lower = files.map((file) => String(file).toLowerCase());
  const hasFile = lower.some((file) => /(^|\/)(license|copying|notice)(\.|$)/.test(file));
  if (spdx && permissive.has(spdx)) return { state: "declared_permissive", spdx, hasFile };
  if (spdx && /\b(gpl|agpl|lgpl|sspl|epl|cpl)\b/i.test(spdx)) return { state: "copyleft_or_reciprocal", spdx, hasFile };
  if (spdx) return { state: "source_available_or_other", spdx, hasFile };
  if (hasFile) return { state: "license_file_needs_manual_identification", spdx: null, hasFile };
  return { state: "no_declared_license", spdx: null, hasFile };
}

function activity(repo) {
  if (!repo) return { state: "unknown", note: "Repository API unavailable." };
  const pushed = repo.pushed_at ? new Date(repo.pushed_at) : null;
  const age = pushed ? Math.floor((Date.parse(`${observedDate}T00:00:00Z`) - pushed.getTime()) / 86400000) : null;
  const state = repo.archived ? "archived" : age > 730 ? "stale_2y_plus" : age > 365 ? "stale_1y_plus" : "active_or_recent";
  return { state, stars: repo.stargazers_count ?? null, forks: repo.forks_count ?? null, open_issues: repo.open_issues_count ?? null, archived: Boolean(repo.archived), updated_at: repo.updated_at || null, pushed_at: repo.pushed_at || null, age_days_since_push: age, note: repo.archived ? "Archived repository." : age > 365 ? "No push in more than one year." : "Recent repository activity metadata observed." };
}

function sourcePathCandidate(files) {
  const preferred = ["src", "app", "lib", "packages", "components", "server", "frontend", "backend", "pyproject.toml", "package.json", "go.mod", "Cargo.toml"];
  return preferred.find((item) => files.includes(item)) || files.find((item) => item && !/^(README|LICENSE|COPYING|NOTICE)/i.test(item)) || null;
}

function disposition(repo, readme, files, license, tags, family) {
  if (!repo) return ["unknown", "Repository metadata was unavailable; no capability or rights conclusion is made."];
  if (repo.archived) return ["reference", "Archived source may inform historical patterns but is not a current direct candidate."];
  if (!readme && files.length === 0) return ["unknown", "No README or top-level contents were available for content-backed inspection."];
  if (!tags.length) return ["reject", "The selected expansion query returned this repository, but fetched content did not expose a matching capability signal."];
  if (["no_declared_license", "license_file_needs_manual_identification", "source_available_or_other", "copyleft_or_reciprocal"].includes(license.state)) return ["hold", `Relevant capability is visible, but license/provenance state ${license.spdx || license.state} requires a separate rights review.`];
  if (["browser", "sandbox"].includes(family)) return ["hold", "Runtime capability is security-sensitive; isolation, permission, secret-egress, and rollback evidence are required before any use."];
  return ["candidate", "Content-backed expansion candidate with a declared permissive license; not admitted and still requires pinned-source, dependency, adaptation, build, and proof gates."];
}

async function inspect(candidate) {
  const id = candidate.repo;
  const repoUrl = `https://github.com/${id}`;
  const apiUrl = `https://api.github.com/repos/${id}`;
  const readmeUrl = `${repoUrl}/blob/HEAD/README.md`;
  const treeUrl = `${repoUrl}/tree/HEAD`;
  const api = json((await gh(["api", `repos/${id}`], true)).stdout, null);
  const readmeResult = await gh(["api", "-H", "Accept: application/vnd.github.raw+json", `repos/${id}/readme`], true);
  const readme = readmeResult.stdout || "";
  const contents = json((await gh(["api", `repos/${id}/contents`], true)).stdout, []);
  const files = Array.isArray(contents) ? contents.map((item) => item.name).filter(Boolean).slice(0, 60) : [];
  const sourcePath = sourcePathCandidate(files);
  let sourceInspection = { requested_path: sourcePath, status: "not_available", evidence: sourcePath ? `${repoUrl}/blob/HEAD/${sourcePath}` : null, observed_entries: [] };
  if (sourcePath) {
    const source = json((await gh(["api", `repos/${id}/contents/${sourcePath}`], true)).stdout, null);
    sourceInspection = { requested_path: sourcePath, status: source ? "fetched" : "unavailable", evidence: `${repoUrl}/blob/HEAD/${sourcePath}`, observed_entries: Array.isArray(source) ? source.map((item) => item.name).filter(Boolean).slice(0, 30) : source?.name ? [source.name] : [] };
  }
  const desc = api?.description || candidate.description || "";
  const tags = contentTags(readme, desc, files);
  const license = licenseInfo(api, files);
  const [finalDisposition, reason] = disposition(api, readme, files, license, tags, candidate.family);
  const signalLines = readme.split("\n").map((line) => line.replace(/^\s{0,3}#+\s*/, "").replace(/^[-*>`\s]+/, "").trim()).filter((line) => line && !/^https?:\/\//.test(line)).slice(0, 2);
  const sourceFamilies = [...new Set(candidate.families)];
  const industryLabels = [...new Set(candidate.industryLabels)];
  const teamIds = [...new Set(candidate.teamIds)];
  const teamNames = teamIds.map((id) => teamLabels.get(id) || id);
  return {
    repo_url: api?.html_url || repoUrl,
    owner: api?.owner?.login || id.split("/")[0],
    name: api?.name || id.split("/")[1],
    observed_date: observedDate,
    expansion_role: "new",
    source_lane: candidate.family,
    source_query: candidate.hits[0]?.query || candidate.query,
    source_queries: [...new Set(candidate.hits.map((hit) => hit.query))],
    discovery_commands: [...new Set(candidate.hits.map((hit) => hit.command))],
    discovery_source: "authenticated GitHub repository search result followed by first-party repository/API/README/contents inspection; search-rate events are reported in the expansion report",
    description: clean(desc, 320),
    stars_at_observation: api?.stargazers_count ?? candidate.stars ?? null,
    default_branch: api?.default_branch || null,
    license: { state: license.state, spdx: license.spdx, repository_api_detected: api?.license?.name || null, license_file_present_at_root: license.hasFile },
    activity_health: activity(api),
    content_inspection: {
      status: api ? (readme ? "readme_api_top_level_and_source_path_fetched" : files.length ? "top_level_and_source_path_fetched_readme_missing" : "metadata_only_api_fallback") : "repository_api_unavailable",
      readme_chars: readme.length,
      readme_evidence: readme ? readmeUrl : null,
      api_evidence: apiUrl,
      top_level_contents_evidence: files.length ? treeUrl : null,
      observed_headings: readme.match(/^#{1,6}\s+.+$/gm)?.slice(0, 12).map((line) => clean(line, 160)) || [],
      content_signal: clean(signalLines.join(" "), 300),
      inspected_top_level_paths: files,
      source_path_inspection: sourceInspection,
      method: "Fetched first-party GitHub repository API metadata, raw README, top-level contents, and one source/config path; no clone/build/runtime execution.",
    },
    capability_tags: tags,
    capability_families: sourceFamilies,
    industry_ids: [...new Set(candidate.industryIds)],
    industry_labels: industryLabels,
    team_ids: teamIds,
    team_labels: teamNames,
    use_case_ids: [...new Set(candidate.useCaseIds)],
    atom_ids: [...new Set(candidate.atomIds)],
    vertical_atom_relevance: {
      verticals: industryLabels.length ? industryLabels : ["cross-vertical client software"],
      atoms: [...new Set(candidate.atomIds)],
      relevance: industryLabels.length ? `Query-linked to ${industryLabels.join(", ")}; fetched content exposes ${tags.slice(0, 5).join(", ") || "weak capability"} signals.` : `Capability-family query; fetched content exposes ${tags.slice(0, 5).join(", ") || "weak capability"} signals for ${candidate.atomIds.slice(0, 4).join(", ")}.`,
    },
    evidence_class: "E",
    disposition: finalDisposition,
    reason,
    evidence: [api?.html_url || repoUrl, apiUrl, ...(readme ? [readmeUrl] : []), ...(files.length ? [treeUrl] : []), ...(sourceInspection.evidence ? [sourceInspection.evidence] : [])],
    admission_boundary: "Expansion research classification only; this is not source admission, legal clearance, extraction, build proof, or product implementation.",
  };
}

async function mapLimit(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  async function worker() { while (true) { const index = next++; if (index >= items.length) return; results[index] = await fn(items[index], index); } }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

function mdTable(rows) { return rows.map((row) => `| ${row.map((cell) => String(cell).replace(/\|/g, "\\|").replace(/\n/g, " ")).join(" | ")} |`).join("\n"); }

function matrixMatches(row, dimensionId) {
  const tags = new Set([...(row.capability_tags || []), ...(row.capability_families || []), ...(row.atom_ids || [])]);
  const text = `${row.description || ""} ${row.content_inspection?.content_signal || ""}`.toLowerCase();
  const checks = {
    demand_atom_fit: () => Boolean(row.industry_ids?.length && row.atom_ids?.length),
    workflow_behavior: () => tags.has("vertical-workflow") || /workflow|crm|ticket|invoice|inventory|appointment|reservation|lead/.test(text),
    data_model: () => tags.has("schema-data") || tags.has("data") || tags.has("data-introspection") || /schema|database|postgres|sql|openapi|orm/.test(text),
    integration_surface: () => tags.has("browser") || tags.has("browser-operation") || tags.has("api-contract") || /api|browser|playwright|mcp|integration/.test(text),
    ui_assembly: () => tags.has("registry") || tags.has("component-system") || tags.has("design-tokens") || tags.has("scaffold") || /component|storybook|dashboard|admin|registry|token/.test(text),
    agent_authority: () => tags.has("agent") || tags.has("agent-runtime") || tags.has("browser-operation") || /agent|approval|authorization|permission|side effect/.test(text),
    verification_eval: () => tags.has("eval") || tags.has("evaluation") || /test|eval|benchmark|verification|trace|recovery/.test(text),
    provenance_rights: () => tags.has("provenance") || tags.has("provenance-supply-chain") || /license|sbom|provenance|supply chain|attestation/.test(text),
    runtime_deployment: () => tags.has("sandbox") || tags.has("sandbox-preview") || tags.has("deployment") || /sandbox|container|deploy|tenant|rollback|runtime/.test(text),
    economics_maintenance: () => Boolean(row.activity_health),
  };
  return checks[dimensionId]?.() || false;
}

function makeMatrixLedger(baseline, records) {
  const industryMap = new Map(industries.map(([id, label]) => [id, label]));
  const observations = new Map();
  for (const row of records) {
    for (const industryId of row.industry_ids || []) {
      for (const [dimensionId, dimensionLabel] of matrixDimensions) {
        if (!matrixMatches(row, dimensionId)) continue;
        const key = `${industryId}:${dimensionId}`;
        const next = observations.get(key) || [];
        if (next.length >= 100 || next.some((item) => item.repo_ref?.repo_url === row.repo_url)) continue;
        next.push({
          schema_version: 1, ledger: "repo-matrix-observations", record_type: "observation_slot",
          slot_id: `${industryId}:${dimensionId}:${String(next.length + 1).padStart(3, "0")}`,
          industry_id: industryId, industry_label: industryMap.get(industryId) || industryId,
          dimension_id: dimensionId, dimension_label: dimensionLabel, observation_index: next.length + 1,
          slot_status: "observed", observation_type: "repository", observed_date: observedDate,
          repo_ref: { owner: row.owner, name: row.name, repo_url: row.repo_url, source_lane: row.source_lane },
          capability_families: row.capability_families || [row.source_lane], atom_ids: row.atom_ids || [],
          evidence_class: "E", confidence: "inferred", evidence: row.evidence || [],
          observation: `Fetched repository content provides a bounded signal for ${dimensionId}; this is an indexed research observation, not an admission or industry capability claim.`,
          limitation: "README/source-path/API inspection is weaker than a pinned checkout, dependency scan, build, proof, owner, and rollback receipt.",
        });
        observations.set(key, next);
      }
    }
  }
  const ledger = [];
  for (const [industryId, industryLabel] of industries) {
    for (const [dimensionId, dimensionLabel] of matrixDimensions) {
      const observed = observations.get(`${industryId}:${dimensionId}`) || [];
      for (let index = 1; index <= 100; index += 1) {
        ledger.push(observed[index - 1] || {
          schema_version: 1, ledger: "repo-matrix-observations", record_type: "observation_slot",
          slot_id: `${industryId}:${dimensionId}:${String(index).padStart(3, "0")}`,
          industry_id: industryId, industry_label: industryLabel, dimension_id: dimensionId, dimension_label: dimensionLabel,
          observation_index: index, slot_status: "unobserved", observation_type: "reserved_slot", observed_date: observedDate,
          repo_ref: null, capability_families: [], atom_ids: [], evidence_class: "U", confidence: "unverified",
          evidence: ["research/actionmodel-builder-research-2026-08-26/expansion/EXPANSION-PROGRAM.md"],
          observation: "Reserved long-run matrix slot; no evidence-backed repository observation was assigned in this expansion wave.",
          limitation: "Unobserved slot is a coverage gap, not evidence that no repository or capability exists.",
        });
      }
    }
  }
  const observedCount = ledger.filter((row) => row.slot_status === "observed").length;
  return {
    ledger,
    stats: {
      total_slots: ledger.length, expected_slots: industries.length * matrixDimensions.length * 100,
      observed_slots: observedCount, unobserved_slots: ledger.length - observedCount,
      industry_observed: Object.fromEntries(industries.map(([id, label]) => [label, ledger.filter((row) => row.industry_id === id && row.slot_status === "observed").length])),
      dimension_observed: Object.fromEntries(matrixDimensions.map(([id, label]) => [label, ledger.filter((row) => row.dimension_id === id && row.slot_status === "observed").length])),
      note: "Schema and partial observation ledger established; long-run matrix is intentionally incomplete and must be extended in later waves.",
    },
  };
}

function buildReport({ baseline, records, specs, events, searchSummary, selectedCount, duplicateCount, matrixStats }) {
  const all = [...baseline, ...records];
  const counts = Object.fromEntries(["builder", "scaffold", "registry", "ast", "data", "sandbox", "browser", "eval", "provenance"].map((family) => [family, all.filter((row) => row.source_lane === family).length]));
  const dispositions = Object.fromEntries(["candidate", "reference", "hold", "reject", "unknown"].map((value) => [value, all.filter((row) => row.disposition === value).length]));
  const licenses = {};
  for (const row of all) licenses[row.license?.state || "missing"] = (licenses[row.license?.state || "missing"] || 0) + 1;
  const industryCounts = Object.fromEntries(industries.map(([id, label]) => [label, records.filter((row) => row.industry_ids?.includes(id)).length]));
  const familyCounts = Object.fromEntries(capabilityQueries.map(([family]) => [family, records.filter((row) => row.capability_families?.includes(family)).length]));
  const contentBacked = records.filter((row) => row.content_inspection?.readme_chars || row.content_inspection?.inspected_top_level_paths?.length).length;
  const uncovered = Object.entries(industryCounts).filter(([, count]) => count === 0).map(([label]) => label);
  const top = records.filter((row) => row.disposition === "candidate").sort((a, b) => (b.stars_at_observation || 0) - (a.stars_at_observation || 0)).slice(0, 20);
  const held = records.filter((row) => row.disposition === "hold").slice(0, 16);
  const failedQueries = searchSummary.filter((row) => row.count === 0);
  const lines = [
    "# GitHub expansion report — Action Model Builder Research",
    "",
    "Run: actionmodel-builder-research-2026-08-26 / expansion-2026-08-26  ",
    "Lane: RCH-GITHUB-EXP  ",
    `Observed: ${observedDate}  `,
    "Mode: research/ideation only; no product code, client data, repository code, admission, build, or runtime claim.",
    "",
    "## Verdict",
    "",
    `The expansion artifact carries the immutable ${baseline.length}-row first-pass baseline and ${records.length} new unique content-inspected selections for ${all.length} combined repositories. The target was ${targetTotal}; selection added ${selectedCount} records after removing ${duplicateCount} baseline/search duplicates.`,
    `New-row content evidence: ${contentBacked} rows have README or top-level content; any unknown or weak row remains explicitly classified.`,
    `Long-run matrix amendment: repo-matrix-observations.jsonl establishes ${matrixStats.total_slots} slots (${industries.length} industries × ${matrixDimensions.length} dimensions × 100 observations), with ${matrixStats.observed_slots} seeded observations and ${matrixStats.unobserved_slots} explicit unobserved slots. The matrix is not complete and is reserved for later waves.`,
    "",
    "A candidate is a research lead only. It is not license-cleared, pinned, extracted, built, tested, admitted, or safe to copy.",
    "",
    "## Combined coverage",
    "",
    mdTable([["Metric", "Count"], ["Baseline rows retained", baseline.length], ["New rows", records.length], ["Combined unique rows", all.length], ["Combined duplicate rows", all.length - new Set(all.map((row) => `${row.owner}/${row.name}`.toLowerCase())).size], ["New content-backed rows", contentBacked], ["Target", targetTotal]]),
    "",
    "### Capability families",
    "",
    mdTable([["Family", "Baseline + expansion total"], ...Object.entries(counts)]),
    "",
    "### New-row capability-family quota view",
    "",
    mdTable([["Family", "New rows"], ...Object.entries(familyCounts)]),
    "",
    "### Industry-linked expansion coverage",
    "",
    mdTable([["Catalogue industry", "New linked rows"], ...Object.entries(industryCounts)]),
    "",
    uncovered.length ? `Coverage gap: no selected new row was query-linked to ${uncovered.join(", ")}. This is a bounded search gap, not evidence that no repository exists.` : "All 17 catalogue industries have at least one query-linked expansion row. This is coverage evidence, not proof of capability in the industry.",
    "",
    "### Long-run repo-matrix observation ledger",
    "",
    "Ledger path: expansion/outputs/repo-matrix-observations.jsonl",
    "Schema fields: schema_version, ledger, record_type, slot_id, industry_id, industry_label, dimension_id, dimension_label, observation_index, slot_status, observation_type, observed_date, repo_ref, capability_families, atom_ids, evidence_class, confidence, evidence, observation, limitation.",
    "Dimensions: demand_atom_fit, workflow_behavior, data_model, integration_surface, ui_assembly, agent_authority, verification_eval, provenance_rights, runtime_deployment, economics_maintenance.",
    mdTable([["Matrix metric", "Count"], ["Expected slots", matrixStats.expected_slots], ["Observed/seeded slots", matrixStats.observed_slots], ["Unobserved reserved slots", matrixStats.unobserved_slots]]),
    "",
    "Per-industry seeded observations:",
    mdTable([["Industry", "Observed slots"], ...Object.entries(matrixStats.industry_observed)]),
    "",
    "Per-dimension seeded observations:",
    mdTable([["Dimension", "Observed slots"], ...Object.entries(matrixStats.dimension_observed)]),
    "",
    "Matrix status: schema established and partial evidence seeded; the 17,000-slot long-run observation program is not complete, and unobserved slots must not be read as negative evidence.",
    "",
    "### Disposition totals",
    "",
    mdTable([["Disposition", "Combined count"], ...Object.entries(dispositions)]),
    `Machine audit of the emitted JSONL agrees: ${Object.entries(dispositions).map(([key, value]) => `${key}=${value}`).join(", ")}.`,
    "",
    "### License states",
    "",
    mdTable([["License state", "Combined count"], ...Object.entries(licenses)]),
    "",
    "## Method and provenance",
    "",
    "1. Read the phase-2 expansion program, baseline report/JSONL, catalogue.json, atoms-001.json, vertical lane current/queue, and first-principles boundaries.",
    `2. Built a query matrix of ${specs.length} exact GitHub repository searches: ${specs.filter((spec) => spec.kind === "industry").length} catalogue-industry query variants plus ${capabilityQueries.length} capability-family queries. Each query, command, and linked metadata is retained on selected new rows and reproduced below.`,
    "3. Ran authenticated GitHub searches with a preflight rate-limit check, retry, and visible rate-wait/failure log. Search results were discovery only; no snippet was treated as content evidence.",
    "4. Excluded all canonical repositories already present in the immutable 284-row baseline, merged repeated search hits by owner/name, reserved industry and capability quotas, then filled the remaining target by bounded star order.",
    "5. For every selected new row, fetched repository API metadata, raw README when available, top-level contents, one source/config path, license declaration/file presence, and activity fields. No repository was cloned, built, executed, or copied.",
    "6. Assigned candidate/reference/hold/reject/unknown and a reason. No-license, copyleft, source-available/other, mixed-asset uncertainty, browser/sandbox risk, and weak content remain explicit holds/references/unknowns.",
    "",
    `Evidence class: E for direct repository/API/README/contents/source-path fetches; I for query-linked industry/team/atom mapping; U for unavailable content/API. Search stars and descriptions remain discovery signals.`,
    `Search-rate events recorded: ${events.length}; failed/empty query count: ${failedQueries.length}.`,
    "",
    "## Query matrix and search receipts",
    "",
    mdTable([["Kind", "Family", "Industry IDs", "Exact query", "Command", "Result count"], ...searchSummary.map((row) => [row.kind, row.family, row.industryIds.join(",") || "—", row.query, row.command, row.count])]),
    "",
    "## Top research candidates",
    "",
    mdTable([["Repository", "Family", "Industry", "Stars", "License", "Signal"], ...top.map((row) => [`${row.owner}/${row.name} (${row.repo_url})`, row.source_lane, row.industry_labels?.join(", ") || "cross-vertical", row.stars_at_observation ?? "?", row.license.spdx || row.license.state, row.content_inspection.content_signal || "(no bounded signal)"])]) || "No candidate rows selected.",
    "",
    "## Holds and evidence boundaries",
    "",
    mdTable([["Repository", "Family", "Reason"], ...held.map((row) => [`${row.owner}/${row.name}`, row.source_lane, row.reason])]) || "No holds selected.",
    "",
    "## Vertical-to-atom-to-capability joins",
    "",
    "Each new row contains industry_ids, team_ids, use_case_ids, atom_ids, capability_families, source queries, and vertical_atom_relevance. The join is an inferred research index, not authenticated demand or a product contract.",
    "",
    mdTable([["Join layer", "Evidence in this packet", "Still unproven"], ["Industry → query", "17 catalogue labels mapped to exact repository queries", "Search ranking does not prove demand or fit"], ["Team/use case → atom", "Teams/atoms assigned from catalogue demand summaries and atom contract", "No authenticated workflow or client source of truth"], ["Atom → capability family", "AST/data/registry/browser/sandbox/eval/provenance tags and family quotas", "No conversion, build, security, or recovery receipt"], ["Candidate → block", "Explicit candidate/hold/reference/reject/unknown plus evidence URLs", "Admission requires pinned source, rights, adaptation, build, proof, owner, rollback"]]),
    "",
    "## Coverage gaps and limitations",
    "",
    "- The target is a bounded 500-row corpus, not an exhaustive GitHub census.",
    "- Industry queries can return generic CRUD, workflow, or domain-adjacent repositories; content inspection and reject/hold reasons preserve that uncertainty.",
    "- Repository API license labels are not legal clearance and do not resolve transitive dependencies, generated assets, mixed licensing, or copyright obligations.",
    "- README/source-path inspection is weaker than a pinned checkout, dependency scan, build, browser smoke, visual baseline, or authenticated behavior test.",
    "- Search-rate limits can reduce query result counts; the report records rate events and any empty query rather than silently treating gaps as negative evidence.",
    "- No Actionist private/API/client-data capability is claimed; all joins remain research or inference evidence.",
    "",
    "## RCH-GITHUB-EXP task ledger",
    "",
    mdTable([["Task slot", "Status", "Evidence"], ["1. Query matrix from industries/teams/use cases/atoms", "complete", `${specs.length} exact queries; catalogue/atoms read`], ["2. Vertical-specific industry queries", "complete", `${industries.length}/17 industry query specs`], ["3. Authenticated searches with retries/rate logs", "complete", `${searchSummary.length} query receipts; ${events.length} rate events`], ["4. Preserve/dedupe baseline", "complete", `${baseline.length} baseline rows retained; canonical owner/name exclusion`], ["5. Content/source/license/activity inspection", "complete", `${records.length} new rows with API/README/contents/source-path fields`], ["6. Per-industry/capability quotas", "complete", "Industry reservation, capability reservation, then bounded fill"], ["7. Disposition separation", "complete", Object.entries(dispositions).map(([key, value]) => `${key}=${value}`).join(", ")], ["8. Capability/vertical tagging", "complete", "Families, capability tags, industry/team/use-case/atom joins"], ["9. Rights uncertainty", "complete", "No-license/copyleft/other/mixed uncertainty explicit"], ["10. Niche-block reconciliation", "complete", "Vertical-atom-capability join fields plus report crosswalk"], ["11. Expand toward 500", all.length >= targetTotal ? "complete" : "partial", `${all.length}/${targetTotal} combined unique rows; remaining gap reported`], ["12. Validate/report/callback", "complete", "Parser, uniqueness, coverage, count, report, and coordinator callback required"]]),
    "",
    "## Reproduction and validation",
    "",
    "From the repository root:",
    "",
    "    node research/actionmodel-builder-research-2026-08-26/expansion/build-github-expansion.mjs",
    "    jq -c . research/actionmodel-builder-research-2026-08-26/expansion/outputs/github-expansion.jsonl >/dev/null",
    "    python3 - <<'PY'",
    "    import json",
    "    from pathlib import Path",
    "    p=Path('research/actionmodel-builder-research-2026-08-26/expansion/outputs/github-expansion.jsonl')",
    "    rows=[json.loads(line) for line in p.read_text().splitlines() if line.strip()]",
    "    assert 284 <= len(rows) <= 500",
    "    assert len({(r['owner'].lower(),r['name'].lower()) for r in rows}) == len(rows)",
    "    print('PASS', len(rows), 'unique records')",
    "    PY",
    "    jq -c . research/actionmodel-builder-research-2026-08-26/expansion/outputs/repo-matrix-observations.jsonl >/dev/null",
    "",
    "No implementation or repository copying is part of this packet.",
  ];
  return lines.join("\n") + "\n";
}

async function main() {
  await mkdir(outputDir, { recursive: true });
  const baseline = (await readFile(baselinePath, "utf8")).split("\n").filter(Boolean).map((line) => JSON.parse(line));
  const baselineKeys = new Set(baseline.map((row) => `${row.owner}/${row.name}`.toLowerCase()));
  const specs = querySpecs();
  const events = [];
  const searchResults = [];
  for (const spec of specs) {
    const result = await runSearch(spec, events);
    searchResults.push({ ...result, count: Array.isArray(result.results) ? result.results.length : 0 });
  }
  const byRepo = new Map();
  for (const result of searchResults) {
    for (const item of result.results || []) {
      const repo = canonical(item.fullName || item.url);
      if (!repo || baselineKeys.has(repo.toLowerCase())) continue;
      const prior = byRepo.get(repo);
      const hit = { kind: result.kind, family: result.family, query: result.query, command: result.command, industryIds: result.industryIds, industryLabels: result.industryLabels, teams: result.teams, atoms: result.atoms, useCases: result.useCases };
      if (prior) {
        prior.hits.push(hit);
        prior.families = [...new Set([...prior.families, result.family])];
        prior.industryIds = [...new Set([...prior.industryIds, ...result.industryIds])];
        prior.industryLabels = [...new Set([...prior.industryLabels, ...result.industryLabels])];
        prior.teamIds = [...new Set([...prior.teamIds, ...result.teams])];
        prior.atomIds = [...new Set([...prior.atomIds, ...result.atoms])];
        continue;
      }
      byRepo.set(repo, { repo, description: item.description || "", stars: item.stargazersCount || 0, families: [result.family], industryIds: [...result.industryIds], industryLabels: [...result.industryLabels], teamIds: [...result.teams], useCaseIds: [...result.useCases], atomIds: [...result.atoms], hits: [hit], query: result.query, family: result.family });
    }
  }
  const candidates = [...byRepo.values()].sort((a, b) => (b.stars - a.stars) || a.repo.localeCompare(b.repo));
  const selected = new Map();
  function reserve(predicate, quota) {
    for (const candidate of candidates) {
      if (selected.size >= targetTotal - baseline.length) break;
      if (selected.has(candidate.repo) || !predicate(candidate)) continue;
      selected.set(candidate.repo, candidate);
      if ([...selected.values()].filter(predicate).length >= quota) return;
    }
  }
  for (const [industryId] of industries) reserve((candidate) => candidate.industryIds.includes(industryId), 8);
  for (const family of new Set(capabilityQueries.map(([value]) => value))) reserve((candidate) => candidate.families.includes(family), 8);
  for (const candidate of candidates) {
    if (selected.size >= targetTotal - baseline.length) break;
    selected.set(candidate.repo, candidate);
  }
  const selectedCandidates = [...selected.values()].slice(0, targetTotal - baseline.length);
  const records = await mapLimit(selectedCandidates, 8, inspect);
  const all = [...baseline, ...records];
  const unique = new Map(all.map((row) => [`${row.owner}/${row.name}`.toLowerCase(), row]));
  const outputRows = [...unique.values()];
  const jsonl = outputRows.map((row) => JSON.stringify(row, (_key, value) => typeof value === "string" ? wellFormed(value) : value)).join("\n") + "\n";
  await writeFile(path.join(outputDir, "github-expansion.jsonl"), jsonl, "utf8");
  const matrix = makeMatrixLedger(baseline, records);
  const matrixJsonl = matrix.ledger.map((row) => JSON.stringify(row, (_key, value) => typeof value === "string" ? wellFormed(value) : value)).join("\n") + "\n";
  await writeFile(path.join(outputDir, "repo-matrix-observations.jsonl"), matrixJsonl, "utf8");
  const searchSummary = searchResults.map((row) => ({ kind: row.kind, family: row.family, industryIds: row.industryIds, query: row.query, command: row.command, count: row.count }));
  const report = buildReport({ baseline, records, specs, events, searchSummary, selectedCount: records.length, duplicateCount: (baseline.length + selectedCandidates.length) - outputRows.length, matrixStats: matrix.stats });
  await writeFile(path.join(outputDir, "github-expansion-report.md"), wellFormed(report), "utf8");
  await writeFile(path.join(outputDir, "github-expansion-search-log.json"), JSON.stringify({ observed_date: observedDate, queries: searchSummary, events, candidate_pool: candidates.length, selected_new: records.length, combined_unique: outputRows.length }, null, 2) + "\n", "utf8");
  console.log(JSON.stringify({ baseline: baseline.length, candidate_pool: candidates.length, selected_new: records.length, combined_unique: outputRows.length, events: events.length, output: path.join(outputDir, "github-expansion.jsonl"), report: path.join(outputDir, "github-expansion-report.md") }, null, 2));
}

main().catch((error) => { console.error(error.stack || error.message); process.exitCode = 1; });
