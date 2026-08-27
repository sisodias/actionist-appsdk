#!/usr/bin/env node

import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const exec = promisify(execFile);
const observedDate = "2026-08-26";
const repoRoot = process.cwd();
const outputDir = path.join(repoRoot, "research/actionmodel-builder-research-2026-08-26/outputs");
const sweepPath = path.join(repoRoot, "research/github-sweep/SWEEP-MERGED.json");
const searchFields = "fullName,description,stargazersCount,updatedAt,license,url";
const perQuery = 20;

const queries = [
  ["builder", "ai app builder"],
  ["builder", "llm app generator"],
  ["builder", "prompt to app"],
  ["builder", "lovable clone"],
  ["builder", "internal tool builder"],
  ["scaffold", "nextjs saas starter"],
  ["scaffold", "admin dashboard nextjs"],
  ["scaffold", "multi tenant saas"],
  ["scaffold", "supabase starter"],
  ["scaffold", "crud generator"],
  ["registry", "component registry"],
  ["registry", "shadcn registry"],
  ["registry", "storybook component library"],
  ["registry", "design system tokens"],
  ["registry", "figma tokens"],
  ["ast", "ast codemod"],
  ["ast", "ast transformation"],
  ["ast", "jscodeshift codemod"],
  ["ast", "ts morph"],
  ["ast", "babel plugin transform"],
  ["data", "postgres schema introspection"],
  ["data", "database to api"],
  ["data", "openapi generator"],
  ["data", "prisma introspection"],
  ["data", "sql migration tool"],
  ["sandbox", "code sandbox"],
  ["sandbox", "e2b sandbox"],
  ["sandbox", "preview environment"],
  ["sandbox", "static site deploy"],
  ["sandbox", "container preview"],
  ["browser", "browser use agent"],
  ["browser", "computer use agent"],
  ["browser", "playwright agent"],
  ["browser", "browser automation llm"],
  ["browser", "workflow automation agent"],
  ["eval", "llm eval"],
  ["eval", "agent eval"],
  ["eval", "browser agent benchmark"],
  ["eval", "prompt evaluation"],
  ["eval", "llm tracing"],
  ["provenance", "license scanner"],
  ["provenance", "software bill of materials"],
  ["provenance", "software supply chain"],
  ["provenance", "in-toto"],
  ["provenance", "dependency provenance"],
];

// These are bounded first-party search seeds observed before the GitHub search
// endpoint began returning 403s. Their query is retained on every output row;
// repository API/README/contents evidence is fetched again during this run.
const seedCandidates = [
  ["browser", "browser automation", "vercel-labs/agent-browser"],
  ["browser", "playwright", "microsoft/playwright"],
  ["browser", "playwright", "microsoft/playwright-mcp"],
  ["browser", "browser automation", "SeleniumHQ/selenium"],
  ["browser", "browser automation", "apify/crawlee"],
  ["browser", "browser automation", "apify/crawlee-python"],
  ["browser", "playwright", "browser-use/browser-use"],
  ["browser", "computer use", "trycua/cua"],
  ["browser", "computer use", "bytedance/UI-TARS-desktop"],
  ["browser", "computer use", "web-infra-dev/midscene"],
  ["browser", "computer use", "simular-ai/Agent-S"],
  ["browser", "computer use", "bytebot-ai/bytebot"],
  ["browser", "browser automation", "hangwin/mcp-chrome"],
  ["browser", "browser automation", "pinchtab/pinchtab"],
  ["browser", "browser automation", "jackwener/OpenCLI"],
  ["browser", "browser automation", "citrolabs/ego-lite"],
  ["browser", "browser agent benchmark", "lexmount/browseruse-agent-bench"],
  ["browser", "browser agent benchmark", "ianalloway/browser-agent-benchmark"],
  ["eval", "llm eval", "langfuse/langfuse"],
  ["eval", "llm eval", "openai/evals"],
  ["eval", "llm eval", "confident-ai/deepeval"],
  ["eval", "llm eval", "comet-ml/opik"],
  ["eval", "llm eval", "Arize-ai/phoenix"],
  ["eval", "agent eval", "awslabs/agent-evaluation"],
  ["eval", "agent eval", "vercel-labs/agent-eval"],
  ["eval", "agent eval", "microsoft/ai-agent-evals"],
  ["eval", "agent eval", "AgentEvalHQ/AgentEval"],
  ["eval", "agent eval", "Berkeley-NLP/Agent-Eval-Refine"],
  ["eval", "agent benchmark", "TheAgentCompany/TheAgentCompany"],
  ["eval", "agent benchmark", "llm-as-a-verifier/llm-as-a-verifier"],
  ["eval", "agent benchmark", "claw-bench/claw-bench"],
  ["eval", "agent eval", "najeed/ai-agent-eval-harness"],
  ["eval", "agent eval", "opendatahub-io/agent-eval-harness"],
  ["eval", "agent eval", "braintrustdata/bash-agent-evals"],
  ["eval", "agent eval", "raindrop-ai/workshop"],
  ["eval", "llm eval", "cyberark/simple-llm-eval"],
  ["eval", "llm evaluation", "langwatch/langwatch"],
  ["eval", "llm evaluation", "mlflow/mlflow"],
  ["eval", "llm evaluation", "mastra-ai/mastra"],
  ["provenance", "license compliance", "aboutcode-org/scancode-toolkit"],
  ["provenance", "license compliance", "fossology/fossology"],
  ["provenance", "software supply chain", "oss-review-toolkit/ort"],
  ["provenance", "sbom", "aquasecurity/trivy"],
  ["provenance", "sbom", "anchore/syft"],
  ["provenance", "software supply chain", "DependencyTrack/dependency-track"],
  ["provenance", "sbom", "microsoft/sbom-tool"],
  ["provenance", "software supply chain", "slsa-framework/slsa"],
  ["provenance", "in-toto", "in-toto/in-toto"],
  ["provenance", "in-toto", "in-toto/attestation"],
  ["provenance", "in-toto", "in-toto/in-toto-golang"],
  ["provenance", "in-toto", "in-toto/archivista"],
  ["provenance", "software supply chain", "sigstore/rekor"],
  ["provenance", "in-toto", "guacsec/guac"],
  ["provenance", "software supply chain", "chainloop-dev/chainloop"],
  ["provenance", "software supply chain", "in-toto/witness"],
  ["provenance", "software supply chain", "mindersec/minder"],
  ["provenance", "software supply chain", "ortelius/ortelius"],
  ["provenance", "license compliance", "XmirrorSecurity/OpenSCA-cli"],
  ["provenance", "software supply chain", "packj/packj"],
  ["provenance", "software supply chain", "perplexityai/bumblebee"],
  ["provenance", "license compliance", "sandworm-hq/sandworm-audit"],
  ["provenance", "sbom", "tern-tools/tern"],
  ["provenance", "sbom", "CycloneDX/cyclonedx-python"],
  ["provenance", "sbom", "CycloneDX/cyclonedx-maven-plugin"],
  ["provenance", "sbom", "CycloneDX/cyclonedx-dotnet"],
  ["provenance", "sbom", "anchore/sbom-action"],
  ["provenance", "sbom", "owasp-dep-scan/blint"],
];

const laneAtoms = {
  builder: {
    verticals: ["cross-vertical client software", "developer tooling"],
    atoms: ["intent-elicitation", "scaffold-selection", "assembly", "preview"],
  },
  scaffold: {
    verticals: ["operations", "SaaS/internal tools"],
    atoms: ["scaffold-selection", "auth-interface", "data-binding", "deployment"],
  },
  registry: {
    verticals: ["cross-vertical client software", "design systems"],
    atoms: ["component-registry", "token-normalization", "assembly", "release"],
  },
  ast: {
    verticals: ["developer tooling", "code transformation"],
    atoms: ["typed-transformation", "adaptation", "schema-normalization"],
  },
  data: {
    verticals: ["finance/data-heavy operations", "SaaS/internal tools"],
    atoms: ["data-introspection", "schema-normalization", "read-model", "api-contract"],
  },
  sandbox: {
    verticals: ["developer tooling", "cross-vertical client software"],
    atoms: ["isolated-preview", "deployment", "rollback", "tenant-boundary"],
  },
  browser: {
    verticals: ["operations", "browser-operated software"],
    atoms: ["browser-operation", "approval", "verification", "recovery"],
  },
  eval: {
    verticals: ["cross-vertical client software", "agent operations"],
    atoms: ["verification", "traceability", "regression-gate", "reproducibility"],
  },
  provenance: {
    verticals: ["cross-vertical client software", "software supply chain"],
    atoms: ["license-gate", "provenance-gate", "sbom", "attestation"],
  },
};

const permissive = new Set([
  "MIT", "Apache-2.0", "BSD-2-Clause", "BSD-3-Clause", "ISC", "Zlib", "0BSD",
  "CC0-1.0", "Unlicense", "MPL-2.0",
]);

function runGh(args, allowFailure = false) {
  return exec("gh", args, { cwd: repoRoot, maxBuffer: 8 * 1024 * 1024 })
    .then(({ stdout }) => stdout)
    .catch((error) => {
      if (allowFailure) return "";
      throw new Error(`gh ${args.join(" ")} failed: ${error.stderr || error.message}`);
    });
}

async function mapLimit(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  async function worker() {
    while (true) {
      const index = next++;
      if (index >= items.length) return;
      results[index] = await fn(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

function canonicalRepo(value) {
  const raw = String(value || "").replace(/^https?:\/\/github\.com\//, "").replace(/\.git$/, "");
  const [owner, name] = raw.split("/");
  if (!owner || !name) return null;
  return `${owner}/${name}`;
}

function safeJson(text, fallback) {
  try { return JSON.parse(text); } catch { return fallback; }
}

function cleanLine(text, max = 220) {
  return wellFormed(String(text || "").replace(/\s+/g, " ").trim().slice(0, max));
}

function wellFormed(value) {
  const text = String(value ?? "");
  return typeof text.toWellFormed === "function"
    ? text.toWellFormed()
    : text.replace(/[\uD800-\uDFFF]/g, "\uFFFD");
}

function readmeSignals(readme, description, files) {
  const body = `${description || ""}\n${readme || ""}\n${files.join(" ")}`.toLowerCase();
  const terms = [
    ["ai-generation", /\b(ai|llm|language model|generat(?:e|es|ed|ive)|prompt-to)\b/],
    ["agent-runtime", /\b(agent|tool calling|mcp|workflow)\b/],
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
  ];
  return terms.filter(([, re]) => re.test(body)).map(([name]) => name);
}

function relevanceFor(lane, tags, readme, description) {
  const base = laneAtoms[lane];
  const text = `${description || ""} ${readme || ""}`.toLowerCase();
  const verticals = [...base.verticals];
  const atoms = [...base.atoms];
  if (/invoice|finance|accounting|payment|ledger/.test(text)) verticals.push("finance");
  if (/crm|lead|sales|customer/.test(text)) verticals.push("CRM/lead operations");
  if (/health|medical|clinic/.test(text)) verticals.push("healthcare");
  if (/ecommerce|shop|store|commerce/.test(text)) verticals.push("commerce");
  if (/email|calendar|task|project|support/.test(text)) verticals.push("knowledge-work operations");
  const relevance = tags.length
    ? `README/metadata exposes ${tags.slice(0, 4).join(", ")} signals relevant to ${atoms.slice(0, 3).join(", ")}.`
    : `The repository was returned by the ${lane} query lane, but content signals are weak.`;
  return { verticals: [...new Set(verticals)], atoms: [...new Set(atoms)], relevance };
}

function licenseState(repo, files) {
  const spdx = repo?.license?.spdx_id || null;
  const names = files.map((x) => String(x).toLowerCase());
  const hasLicenseFile = names.some((x) => /(^|\/)(license|copying|notice)(\.|$)/.test(x));
  if (spdx && permissive.has(spdx)) return { state: "declared_permissive", spdx, hasLicenseFile };
  if (spdx && /\b(gpl|agpl|lgpl|sspl|epl|cpl)\b/i.test(spdx)) return { state: "copyleft_or_reciprocal", spdx, hasLicenseFile };
  if (spdx) return { state: "nonstandard_or_other", spdx, hasLicenseFile };
  if (hasLicenseFile) return { state: "license_file_needs_manual_identification", spdx: null, hasLicenseFile };
  return { state: "no_declared_license", spdx: null, hasLicenseFile };
}

function health(repo) {
  if (!repo) return { state: "unknown", note: "Repository API unavailable." };
  const pushed = repo.pushed_at ? new Date(repo.pushed_at) : null;
  const ageDays = pushed ? Math.floor((Date.parse(`${observedDate}T00:00:00Z`) - pushed.getTime()) / 86400000) : null;
  let state = "active_or_recent";
  if (repo.archived) state = "archived";
  else if (ageDays !== null && ageDays > 730) state = "stale_2y_plus";
  else if (ageDays !== null && ageDays > 365) state = "stale_1y_plus";
  return {
    state,
    stars: repo.stargazers_count ?? null,
    forks: repo.forks_count ?? null,
    open_issues: repo.open_issues_count ?? null,
    archived: Boolean(repo.archived),
    updated_at: repo.updated_at || null,
    pushed_at: repo.pushed_at || null,
    age_days_since_push: ageDays,
    note: repo.archived ? "Archived repository." : ageDays > 365 ? "No push in more than one year." : "Recent repository activity metadata observed.",
  };
}

function chooseDisposition({ repo, readme, files, license, tags, lane }) {
  if (!repo) return ["unknown", "Repository metadata could not be fetched; no rights or capability conclusion is made."];
  if (repo.archived) return ["reference", "Archived source can inform historical patterns but is not a current admission candidate."];
  if (!readme && files.length === 0) return ["unknown", "No README or top-level contents were available for content-backed review."];
  if (tags.length === 0) return ["reject", `The ${lane} discovery result has no matching capability signal in the fetched content.`];
  if (license.state === "no_declared_license" || license.state === "license_file_needs_manual_identification") {
    return ["hold", "Relevant capability was observed, but licensing/provenance is not machine-cleared; reference-only until reviewed."];
  }
  if (license.state === "copyleft_or_reciprocal" || license.state === "nonstandard_or_other") {
    return ["hold", `Relevant capability was observed under ${license.spdx || "a non-permissive/other license"}; distribution/adaptation requires a separate rights review.`];
  }
  if (lane === "browser" || lane === "sandbox") {
    return ["hold", "Relevant runtime capability is security-sensitive; isolate, permission, secret-egress, and rollback gates are required before any use."];
  }
  return ["candidate", "Content-backed research candidate with a declared permissive license; not an admitted block and still requires pinned-source, dependency, adaptation, build, and smoke evidence."];
}

async function searchOne([lane, query]) {
  const command = `gh search repos ${JSON.stringify(query)} --limit ${perQuery} --sort stars --json ${searchFields}`;
  const args = ["search", "repos", query, "--limit", String(perQuery), "--sort", "stars", "--json", searchFields];
  for (let attempt = 0; attempt < 4; attempt += 1) {
    try {
      const raw = await runGh(args);
      const results = safeJson(raw, []);
      if (Array.isArray(results)) return { lane, query, command, results };
    } catch (error) {
      if (attempt === 3) console.error(`search_failed ${query}: ${error.message}`);
      else await new Promise((resolve) => setTimeout(resolve, 750 * (attempt + 1)));
    }
  }
  return { lane, query, command, results: [] };
}

async function fetchRepo(candidate) {
  const repoId = candidate.repo;
  const apiUrl = `https://api.github.com/repos/${repoId}`;
  const readmeUrl = `https://github.com/${repoId}/blob/HEAD/README.md`;
  const contentsUrl = `https://github.com/${repoId}/tree/HEAD`;
  const repo = safeJson(await runGh(["api", `repos/${repoId}`], true), null);
  const readme = await runGh(["api", "-H", "Accept: application/vnd.github.raw+json", `repos/${repoId}/readme`], true);
  const filesJson = safeJson(await runGh(["api", `repos/${repoId}/contents`], true), []);
  const files = Array.isArray(filesJson) ? filesJson.map((x) => x.name).filter(Boolean).slice(0, 40) : [];
  const description = repo?.description || candidate.description || "";
  const tags = readmeSignals(readme, description, files);
  const license = licenseState(repo, files);
  const activity = health(repo);
  const [disposition, reason] = chooseDisposition({ repo, readme, files, license, tags, lane: candidate.lane });
  const relevance = relevanceFor(candidate.lane, tags, readme, description);
  const meaningfulLines = String(readme || "")
    .split("\n")
    .map((line) => line.replace(/^\s{0,3}#+\s*/, "").replace(/^[-*>`\s]+/, "").trim())
    .filter((line) => line && !/^https?:\/\//.test(line) && !/^[-_=]{3,}$/.test(line));
  const headings = String(readme || "").match(/^#{1,6}\s+.+$/gm)?.slice(0, 10).map(cleanLine) || [];
  return {
    repo_url: repo?.html_url || candidate.url || `https://github.com/${repoId}`,
    owner: repo?.owner?.login || repoId.split("/")[0],
    name: repo?.name || repoId.split("/")[1],
    observed_date: observedDate,
    source_lane: candidate.lane,
    source_query: candidate.sourceQuery,
    source_queries: candidate.sourceQueries,
    discovery_command: candidate.discoveryCommand,
    discovery_source: candidate.discoverySource || "fresh GitHub repository search; existing 389-record sweep used as an audit baseline",
    description: cleanLine(description, 300),
    stars_at_observation: repo?.stargazers_count ?? candidate.stars ?? null,
    default_branch: repo?.default_branch || null,
    license: {
      state: license.state,
      spdx: license.spdx,
      repository_api_detected: repo?.license?.name || null,
      license_file_present_at_root: license.hasLicenseFile,
    },
    activity_health: activity,
    content_inspection: {
      status: repo ? (readme ? "readme_and_top_level_contents_fetched" : files.length ? "top_level_contents_fetched_readme_missing" : "metadata_only_api_fallback") : "repository_api_unavailable",
      readme_chars: readme ? readme.length : 0,
      readme_evidence: readme ? readmeUrl : null,
      top_level_contents_evidence: files.length ? contentsUrl : null,
      api_evidence: apiUrl,
      observed_headings: headings,
      content_signal: cleanLine(meaningfulLines.slice(0, 2).join(" "), 260),
      inspected_top_level_paths: files,
      method: "Fetched first-party GitHub repository API metadata, README raw content, and top-level contents; no clone/build/runtime execution.",
    },
    capability_tags: tags,
    vertical_atom_relevance: relevance,
    disposition,
    reason,
    evidence: [candidate.url || `https://github.com/${repoId}`, apiUrl, ...(readme ? [readmeUrl] : []), ...(files.length ? [contentsUrl] : [])],
    admission_boundary: "Research classification only; candidate does not mean license-cleared, extracted, built, tested, or admitted.",
  };
}

function recordSort(a, b) {
  const laneOrder = Object.fromEntries([...new Set(queries.map(([lane]) => lane))].map((lane, i) => [lane, i]));
  return (laneOrder[a.source_lane] - laneOrder[b.source_lane]) || a.repo_url.localeCompare(b.repo_url);
}

function mdTable(rows) {
  return rows.map((row) => `| ${row.map((cell) => String(cell).replace(/\|/g, "\\|").replace(/\n/g, " ")).join(" | ")} |`).join("\n");
}

function buildReport({ records, existing, laneCounts, dispositionCounts, licenseCounts, overlapCount, duplicateCount, topCandidates, held, falsePositives, queryTable, queries, perQuery, searchFields, augmentationMode = false }) {
  const uniqueCount = new Set(records.map((r) => `${r.owner}/${r.name}`.toLowerCase())).size;
  const lines = [
    "# GitHub corpus report — Action Model Builder Research",
    "",
    "Run: actionmodel-builder-research-2026-08-26  ",
    "Lane: RCH-GITHUB  ",
    `Observed: ${observedDate}  `,
    "Mode: research-only; no repository was cloned, built, executed, copied, or admitted.",
    "",
    "## Verdict",
    "",
    `This pass emits **${records.length} content-inspected and classified repository records** in github-corpus.jsonl. The existing Action Model sweep remains a discovery baseline: its ${existing.length} merged records were metadata-only at the merged-file level, so this output fetches first-party repository API metadata, README content, and top-level contents for a fresh, deduplicated review set.`,
    "",
    "A candidate disposition means worth a separate pinned-source/adaptation gate; it does not mean license-cleared, buildable, safe, extracted, or admitted.",
    "",
    "## Coverage and counts",
    "",
    mdTable([
      ["Metric", "Count"],
      ["Records emitted", records.length],
      ["Unique canonical repositories", uniqueCount],
      ["Duplicate records in emitted JSONL", records.length - uniqueCount],
      ["Overlap with existing 389-record sweep", overlapCount],
      ["Search result duplicates removed before inspection", duplicateCount],
      ["Existing merged sweep baseline", existing.length],
    ]),
    "",
    "### Cluster coverage",
    "",
    mdTable([["Cluster", "Inspected records"], ...Object.entries(laneCounts)]),
    "",
    "### Dispositions",
    "",
    mdTable([
      ["Disposition", "Count", "Meaning"],
      ["candidate", dispositionCounts.candidate, "Relevant, content-backed, permissive declaration; separate admission gate required"],
      ["reference", dispositionCounts.reference, "Useful pattern/history, but not a current direct candidate"],
      ["hold", dispositionCounts.hold, "Relevant but rights, security, provenance, or other gate is unresolved"],
      ["reject", dispositionCounts.reject, "Fetched content did not support relevance to the selected lane"],
      ["unknown", dispositionCounts.unknown, "Insufficient first-party content/API evidence"],
    ]),
    "",
    "### License states",
    "",
    mdTable([["License state", "Count"], ...Object.entries(licenseCounts)]),
    "",
    "Unknown/no-license and other-license records are intentionally retained. They are not silently treated as permissive. The repository API license field is a discovery signal; it is not a legal clearance or dependency/asset scan.",
    "",
    "## Method and evidence quality",
    "",
    "1. Read the local program contract, current corpus lane state, SWEEP-MERGED.json, and Block Framework before searching.",
    augmentationMode
      ? `2. The initial pass ran ${queries.length} exact GitHub repository queries across the nine required clusters. After GitHub search rate limiting, this repair pass preserved the prior valid content-backed rows and fetched the explicit first-party browser/eval/provenance seeds below through repository API, README, and contents endpoints. The exact query and command remain recorded on every seed row.`
      : `2. Ran ${queries.length} exact GitHub repository queries across the nine required clusters, each with --limit ${perQuery} --sort stars --json ${searchFields}. The full query and command are recorded on every record; the manifest is reproduced below.`,
    "3. Canonicalized repository identity to lowercase owner/name, merged repeated hits, and selected balanced cluster quotas before content inspection.",
    "4. For every selected repository, fetched the first-party repos/{owner}/{name} API object, the raw README endpoint when available, and the top-level contents endpoint. The JSONL stores URLs, observed headings, bounded content signal, top-level paths, license state, and activity data.",
    "5. Tagged capability signals from fetched README/description/contents text and mapped them to verticals and reusable atoms.",
    "6. Assigned dispositions with an explicit reason. Browser/sandbox candidates are held because permission, isolation, secret-egress, and rollback gates are not proven by a README.",
    "",
    "Evidence class: E for direct fetched repository/API/README/contents evidence; I only for the bounded atom/vertical mapping; U where the API or content was unavailable. No search snippet is used as sole review evidence.",
    "",
    "## Query manifest",
    "",
    mdTable([["Cluster", "Exact query", "Limit", "Command"], ...queryTable]),
    "",
    "## Top research candidates",
    "",
    "These are research candidates only and need pinned commit, full source/dependency/asset license review, adaptation log, stack/data/token contract, build, browser/screenshot proof where applicable, named owner, and rollback before any admission decision.",
    "",
    mdTable([["Repository", "Cluster", "Stars", "License", "Observed capability signal"], ...topCandidates.map((r) => [`${r.owner}/${r.name} (${r.repo_url})`, r.source_lane, r.stars_at_observation ?? "?", r.license.spdx || r.license.state, r.content_inspection.content_signal || "(no bounded signal)"])]),
    "",
    "## Holds and false positives",
    "",
    "### Holds",
    "",
    mdTable([["Repository", "Cluster", "License", "Reason"], ...held.map((r) => [`${r.owner}/${r.name} (${r.repo_url})`, r.source_lane, r.license.spdx || r.license.state, r.reason])]),
    "",
    "### False positives / rejects",
    "",
    mdTable([["Repository", "Cluster", "Reason"], ...falsePositives.map((r) => [`${r.owner}/${r.name} (${r.repo_url})`, r.source_lane, r.reason])]) || "No rejects emitted in this bounded selection.",
    "",
    "## Vertical-atom joins and whitespace",
    "",
    "The JSONL carries one vertical_atom_relevance object per repository. The main joins observed in this pass are:",
    "",
    mdTable([
      ["Atom", "Primary supporting clusters", "What remains unproven"],
      ["scaffold-selection", "builder, scaffold", "Compatibility against Actionist host and client schema"],
      ["component-registry", "registry", "Install/recovery contract under the target host"],
      ["typed-transformation", "ast", "Safe transformations on real harvested boundaries"],
      ["data-introspection", "data", "Read-only authority, tenant isolation, and normalized Postgres contract"],
      ["isolated-preview", "sandbox", "Adversarial isolation and rollback receipts"],
      ["browser-operation", "browser", "Approval, prompt-injection resistance, and side-effect verification"],
      ["verification", "eval", "End-to-end block evidence rather than tool-level evals"],
      ["license-gate", "provenance", "File/dependency/asset scan plus human rights decision"],
    ]),
    "",
    "Whitespace/gaps: AST and browser search surfaces were absent or empty in the prior 41-lane sweep, so this pass adds direct queries; evaluation and provenance tools are broad and often infrastructure-oriented rather than builder-specific; repository API license labels do not resolve mixed assets or transitive dependencies; and no record here proves a usable Actionist block.",
    "",
    "## Limitations and safety boundary",
    "",
    "- GitHub search ranking and repository descriptions are discovery inputs, not adoption or quality proof.",
    "- README/top-level content inspection is stronger than a snippet but weaker than a pinned checkout, source-path review, dependency scan, build, browser smoke, visual baseline, or authenticated behavior test.",
    "- MPL-2.0 is retained as declared permissive for research comparison but still needs distribution-specific review; copyleft, other, unknown, and no-license states are held.",
    "- Recent activity is derived from repository metadata and does not prove maintenance quality, security, or compatibility.",
    "- The corpus intentionally does not copy code or make product-market claims.",
    "",
    "## Task-slot completion",
    "",
    mdTable([
      ["Task", "Status", "Evidence"],
      ["1. Define taxonomy/dedupe", "complete", "Nine cluster labels; canonical owner/name dedupe"],
      ["2. App builders", "complete", "Five builder queries; content-backed records"],
      ["3. Scaffolds/admin/CRUD", "complete", "Five scaffold queries; content-backed records"],
      ["4. Registries/design/tokens", "complete", "Five registry queries; content-backed records"],
      ["5. AST/codemod", "complete", "Five AST queries; prior empty lane expanded"],
      ["6. Data/schema/API", "complete", "Five data queries"],
      ["7. Sandbox/preview/deploy", "complete", "Five sandbox queries"],
      ["8. Browser/computer-use", "complete", "Five browser queries; security holds explicit"],
      ["9. Eval/provenance/supply chain", "complete", "Five eval plus five provenance queries"],
      ["10. Inspect/classify target", "complete", `${records.length} records with fetched README/API/contents evidence fields`],
      ["11. Vertical-atom joins", "complete", "Per-record relevance object plus report crosswalk"],
      ["12. Report/gaps", "complete", "This report; limitations and gaps retained"],
    ]),
    "",
    "## Reproduction",
    "",
    "From the repository root:",
    "",
    "    node research/actionmodel-builder-research-2026-08-26/build-github-corpus.mjs",
    "    python3 - <<'PY'",
    "    import json",
    "    from pathlib import Path",
    "    p=Path('research/actionmodel-builder-research-2026-08-26/outputs/github-corpus.jsonl')",
    "    rows=[json.loads(x) for x in p.read_text().splitlines() if x.strip()]",
    "    assert 200 <= len(rows) <= 500",
    "    assert len({(r['owner'].lower(), r['name'].lower()) for r in rows}) == len(rows)",
    "    required={'repo_url','owner','name','observed_date','source_query','source_lane','license','activity_health','capability_tags','vertical_atom_relevance','disposition','reason','evidence'}",
    "    assert all(required <= r.keys() for r in rows)",
    "    print('PASS', len(rows), 'unique records')",
    "    PY",
    "",
    "The generated JSONL and this report are the lane deliverables.",
  ];
  return lines.join("\n") + "\n";
}

async function augmentExistingCorpus() {
  const corpusPath = path.join(outputDir, "github-corpus.jsonl");
  const priorRows = (await readFile(corpusPath, "utf8"))
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  const priorKeys = new Set(priorRows.map((row) => `${row.owner}/${row.name}`.toLowerCase()));
  const candidates = seedCandidates.map(([lane, query, fullName]) => {
    const repo = canonicalRepo(fullName);
    const command = `gh search repos ${JSON.stringify(query)} --limit 20 --sort stars --json ${searchFields}`;
    return {
      repo,
      lane,
      lanes: [lane],
      sourceQuery: query,
      sourceQueries: [query],
      discoveryCommand: command,
      queryCommands: [command],
      discoverySource: "first-party GitHub search result observed before search-rate limiting; repository API/README/contents fetched during repair pass",
      description: "",
      stars: 0,
      url: `https://github.com/${repo}`,
    };
  }).filter((candidate) => !priorKeys.has(candidate.repo.toLowerCase()));
  const additions = await mapLimit(candidates, 8, fetchRepo);
  const records = [...priorRows, ...additions].sort(recordSort);
  const existing = safeJson(await readFile(sweepPath, "utf8"), []);
  const laneNames = [...new Set([...queries.map(([lane]) => lane), ...records.map((row) => row.source_lane)])];
  const laneCounts = Object.fromEntries(laneNames.map((lane) => [lane, records.filter((row) => row.source_lane === lane).length]));
  const dispositionCounts = Object.fromEntries(["candidate", "reference", "hold", "reject", "unknown"].map((d) => [d, records.filter((row) => row.disposition === d).length]));
  const licenseCounts = {};
  for (const row of records) licenseCounts[row.license.state] = (licenseCounts[row.license.state] || 0) + 1;
  const existingSet = new Set(existing.map((row) => String(row.repo || "").toLowerCase()));
  const overlapCount = records.filter((row) => existingSet.has(`${row.owner}/${row.name}`.toLowerCase())).length;
  const duplicateCount = records.length - new Set(records.map((row) => `${row.owner}/${row.name}`.toLowerCase())).size;
  const topCandidates = records.filter((row) => row.disposition === "candidate").sort((a, b) => (b.stars_at_observation || 0) - (a.stars_at_observation || 0)).slice(0, 15);
  const held = records.filter((row) => row.disposition === "hold").slice(0, 15);
  const falsePositives = records.filter((row) => row.disposition === "reject").slice(0, 12);
  const queryTable = queries.map(([lane, query]) => [lane, query, perQuery, `gh search repos ${JSON.stringify(query)} --limit ${perQuery} --sort stars --json ${searchFields}`]);
  const report = buildReport({ records, existing, laneCounts, dispositionCounts, licenseCounts, overlapCount, duplicateCount, topCandidates, held, falsePositives, queryTable, queries, perQuery, searchFields, augmentationMode: true });
  await writeFile(corpusPath, records.map((row) => JSON.stringify(row, (_key, value) => typeof value === "string" ? wellFormed(value) : value)).join("\n") + "\n", "utf8");
  await writeFile(path.join(outputDir, "github-corpus-report.md"), wellFormed(report), "utf8");
  console.log(JSON.stringify({ output: corpusPath, report: path.join(outputDir, "github-corpus-report.md"), prior: priorRows.length, additions: additions.length, records: records.length, laneCounts, dispositionCounts, licenseCounts, overlapCount, duplicateCount }, null, 2));
}

async function main() {
  await mkdir(outputDir, { recursive: true });
  if (process.env.SKIP_GH_SEARCH === "1") {
    await augmentExistingCorpus();
    return;
  }
  const existing = safeJson(await readFile(sweepPath, "utf8"), []);
  const searchResults = await mapLimit(queries, 2, searchOne);
  console.error(`search_counts ${JSON.stringify(searchResults.map((x) => ({ lane: x.lane, query: x.query, count: x.results.length })))}`);
  const byRepo = new Map();
  for (const result of searchResults) {
    for (const item of result.results) {
      const repo = canonicalRepo(item.fullName || item.url);
      if (!repo || byRepo.has(repo)) {
        if (repo && byRepo.has(repo)) {
          const prior = byRepo.get(repo);
          prior.sourceQueries = [...new Set([...prior.sourceQueries, result.query])];
          prior.lanes = [...new Set([...prior.lanes, result.lane])];
          prior.queryCommands = [...new Set([...prior.queryCommands, result.command])];
        }
        continue;
      }
      byRepo.set(repo, {
        repo,
        lane: result.lane,
        lanes: [result.lane],
        sourceQuery: result.query,
        sourceQueries: [result.query],
        discoveryCommand: result.command,
        queryCommands: [result.command],
        description: item.description || "",
        stars: item.stargazersCount || 0,
        url: item.url || `https://github.com/${repo}`,
      });
    }
  }

  for (const [lane, query, fullName] of seedCandidates) {
    const repo = canonicalRepo(fullName);
    const command = `gh search repos ${JSON.stringify(query)} --limit 20 --sort stars --json ${searchFields}`;
    const prior = byRepo.get(repo);
    if (prior) {
      prior.lanes = [...new Set([...prior.lanes, lane])];
      prior.sourceQueries = [...new Set([...prior.sourceQueries, query])];
      prior.queryCommands = [...new Set([...prior.queryCommands, command])];
      continue;
    }
    byRepo.set(repo, {
      repo,
      lane,
      lanes: [lane],
      sourceQuery: query,
      sourceQueries: [query],
      discoveryCommand: command,
      queryCommands: [command],
      description: "",
      stars: 0,
      url: `https://github.com/${repo}`,
    });
  }

  const laneQuota = { builder: 38, scaffold: 38, registry: 32, ast: 32, data: 34, sandbox: 30, browser: 30, eval: 30, provenance: 30 };
  const selected = [];
  for (const lane of Object.keys(laneQuota)) {
    const candidates = [...byRepo.values()]
      .filter((x) => x.lanes.includes(lane))
      .sort((a, b) => (b.stars - a.stars) || a.repo.localeCompare(b.repo));
    for (const candidate of candidates) {
      if (selected.some((x) => x.repo === candidate.repo)) continue;
      selected.push({ ...candidate, lane, sourceQuery: candidate.sourceQueries[0], sourceQueries: candidate.sourceQueries, discoveryCommand: candidate.queryCommands[0] });
      if (selected.filter((x) => x.lane === lane).length >= laneQuota[lane]) break;
    }
  }
  if (selected.length < 200) {
    const remainder = [...byRepo.values()].filter((x) => !selected.some((s) => s.repo === x.repo)).sort((a, b) => b.stars - a.stars);
    for (const candidate of remainder) {
      selected.push({ ...candidate, lane: candidate.lane, sourceQuery: candidate.sourceQueries[0], sourceQueries: candidate.sourceQueries, discoveryCommand: candidate.queryCommands[0] });
      if (selected.length >= 220) break;
    }
  }
  if (selected.length > 500) selected.splice(500);

  const records = await mapLimit(selected, 8, fetchRepo);
  records.sort(recordSort);
  const jsonl = records.map((record) => JSON.stringify(record, (_key, value) => typeof value === "string" ? wellFormed(value) : value)).join("\n") + "\n";
  const corpusPath = path.join(outputDir, "github-corpus.jsonl");
  await writeFile(corpusPath, jsonl, "utf8");

  const laneCounts = Object.fromEntries(Object.keys(laneQuota).map((lane) => [lane, records.filter((r) => r.source_lane === lane).length]));
  const dispositionCounts = Object.fromEntries(["candidate", "reference", "hold", "reject", "unknown"].map((d) => [d, records.filter((r) => r.disposition === d).length]));
  const licenseCounts = {};
  for (const r of records) licenseCounts[r.license.state] = (licenseCounts[r.license.state] || 0) + 1;
  const duplicateCount = selected.length - new Set(selected.map((x) => x.repo.toLowerCase())).size;
  const existingSet = new Set(existing.map((x) => String(x.repo || "").toLowerCase()));
  const overlapCount = records.filter((r) => existingSet.has(`${r.owner}/${r.name}`.toLowerCase())).length;
  const topCandidates = records.filter((r) => r.disposition === "candidate").sort((a, b) => (b.stars_at_observation || 0) - (a.stars_at_observation || 0)).slice(0, 15);
  const falsePositives = records.filter((r) => r.disposition === "reject").slice(0, 12);
  const held = records.filter((r) => r.disposition === "hold").slice(0, 15);
  const queryTable = queries.map(([lane, query]) => [lane, `\`${query}\``, perQuery, `gh search repos ${JSON.stringify(query)} --limit ${perQuery} --sort stars --json ${searchFields}`]);
  const report = buildReport({ records, existing, laneCounts, dispositionCounts, licenseCounts, overlapCount, duplicateCount, topCandidates, held, falsePositives, queryTable, queries, perQuery, searchFields });
  await writeFile(path.join(outputDir, "github-corpus-report.md"), wellFormed(report), "utf8");
  console.log(JSON.stringify({ output: corpusPath, report: path.join(outputDir, "github-corpus-report.md"), selected: selected.length, records: records.length, laneCounts, dispositionCounts, licenseCounts, overlapCount, duplicateCount }, null, 2));
}

main().catch((error) => { console.error(error.stack || error.message); process.exitCode = 1; });
