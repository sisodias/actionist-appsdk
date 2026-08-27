# Reusable-block framework report

**Packet:** `AGENT_PACKET v1` — REUSABLE-BLOCKS  
**Objective:** convert eligible codebases into reusable, tokenized, data-standardized building blocks with safe Postgres adapter boundaries.  
**Date:** 2026-08-26  
**Mode:** read-only research; no project files, services, credentials, or processes were changed.  
**Evidence rule:** primary GitHub repositories and official documentation are preferred. A source is used to establish a mechanism, not to imply that the mechanism solves the whole conversion problem.

## Milestones

| Milestone | State | Evidence recorded |
|---|---|---|
| Initial landscape | **complete — 2026-08-26** | Primary-source scan of registries, AST/codemod tools, design-token formats, Postgres/schema tooling, data-provider interfaces, monorepo packaging, contract/visual gates, and OSS provenance tooling. |
| Laptop-first local evidence | **complete — 2026-08-26** | Read the siso-ui-base pipeline, CENA/laptop sweep, design-schema approval state, Great Library schemas, Action Model contracts, AutoSaaS harvest/persistence policies, SISOCRM module/transplant contracts, and adjacent verifier/provenance artifacts. |
| Framework draft | **complete — 2026-08-26** | Acceptance, staged adaptation, automation boundaries, block contract, rejection policy, local-asset classification, and coverage ledger. |
| Final recommendation | **complete — 2026-08-26** | Bounded first pilot, read-only Postgres adapter, DTCG/Style Dictionary token layer, proof gates, rollback/ownership model, explicit unknowns, and follow-on sweeps. No build decision is implied. |

## Initial landscape — findings

### 1. The reusable unit should be a manifest-backed installable item, not a copied repository

The most concrete registry pattern is the [shadcn registry contract](https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/registry.md). A source registry points at files; a built registry publishes installable JSON items. Items can carry file targets, runtime and development dependencies, registry dependencies, CSS variables, environment variables, docs, and version-pinned addresses. The same contract supports UI components, hooks, pages, themes, config, workflows, and larger blocks. This is a proven distribution shape for the proposed block registry.

[Bit](https://github.com/teambit/bit) demonstrates the larger component-lifecycle pattern: component-level dependency discovery, isolated builds/tests, semantic versioning, and export. It is a useful reference for a mature component workspace, but it is more machinery than a first pilot needs. [pnpm workspaces](https://pnpm.io/workspaces) provide the smaller foundation: explicit workspace membership, the `workspace:` protocol, strict local dependency resolution, and publish-time conversion to normal package ranges. [Changesets](https://github.com/changesets/changesets) supplies the missing release workflow for a multi-package repository, including dependent-package version updates and changelogs.

**Implication:** the block artifact needs at least a pinned source reference, an installable file/dependency manifest, a declared host contract, an adaptation log, and proof commands. A repository candidate is not a block until those artifacts exist and pass admission.

### 2. AST tooling can automate narrow, repeatable edits; it cannot translate intent

[jscodeshift](https://github.com/facebook/jscodeshift) runs codemods over JavaScript/TypeScript files using AST traversal and recast printing, including dry runs, transform summaries, parser selection, and fixture-based unit tests. [ast-grep](https://github.com/ast-grep/ast-grep) adds structural search/rewrite across tree-sitter languages with YAML rules and CLI output. [ts-morph](https://github.com/dsherret/ts-morph) wraps the TypeScript compiler API for static analysis and programmatic source changes.

These tools are proven for identifier/import renames, known API migrations, wrapper insertion, prop-shape changes, and other syntax/type-local edits. They are not evidence that a tool can infer a domain model, decide whether two fields have the same business meaning, preserve authorization behavior, or safely migrate live data. Those decisions remain a review boundary.

### 3. Design-to-code can produce a visual starting point, not a production application

[Screenshot to Code](https://github.com/abi/screenshot-to-code) is a permissively licensed, practical image/mockup-to-HTML/Tailwind/React/Vue converter and therefore a plausible source for a UI-scaffold experiment. Its own repository describes API-key and browser-preview requirements, which reinforces that it is a generator/scaffold mechanism, not a complete block admission system.

The current [FigmaToCode repository](https://github.com/bernaferrari/FigmaToCode) is a useful negative-boundary receipt as well as a code-generation reference. It states that visual structure does not contain application intent and explicitly does not infer state management, data loading, navigation, backend behavior, business rules, or accessibility; its exports are starter points requiring review. It is GPL-3.0, so it is reference-only under the proposed permissive harvest policy.

The [DTCG 2025.10 format report](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/) provides a stable, tool-agnostic exchange format for design tokens, while noting that it is a W3C Community Group report rather than a W3C Standard. [Style Dictionary](https://github.com/style-dictionary/style-dictionary) demonstrates the proven transformation path from token JSON to CSS and other platform outputs.

**Implication:** token extraction must be treated as a candidate mapping with confidence and unresolved values, followed by human approval. Tokenization is a durable interface only when the block consumes semantic slots and the rendered states remain valid under alternate token values.

### 4. Postgres is a common storage substrate, not a universal domain adapter

Postgres gives the framework strong primitives for safe boundaries:

- [Schemas](https://www.postgresql.org/docs/current/ddl-schemas.html) provide named namespaces, make third-party application objects separable, and allow qualified references. The same documentation warns that an unsafe `search_path` can let writable schemas change query behavior.
- The [information schema](https://www.postgresql.org/docs/current/information-schema.html) provides portable views of tables, columns, constraints, privileges, and related objects; Postgres-specific features still require system catalogs.
- [Privileges](https://www.postgresql.org/docs/current/ddl-priv.html) distinguish `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `USAGE`, `CREATE`, and other capabilities. Ownership itself is stronger than a grant and must be managed separately.
- [Row security policies](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) can enforce per-user row visibility and writes; with row security enabled and no applicable policy, normal access is default-deny.
- [Constraints](https://www.postgresql.org/docs/current/ddl-constraints.html) enforce not-null, uniqueness, primary-key, foreign-key, and check invariants at the database boundary.

[Drizzle's existing-Postgres workflow](https://orm.drizzle.team/docs/get-started/postgresql-existing) proves a useful migration path: introspect a database into typed schema/migration material, then manage reviewed SQL migrations. Its [migration documentation](https://orm.drizzle.team/docs/migrations) explicitly supports both database-first and codebase-first workflows. [Refine's data-provider interface](https://refine.dev/core/docs/data-fetching/data-provider-interface/) proves the UI/domain decoupling pattern: CRUD operations are consumed through a provider interface rather than coupling UI components to a backend implementation.

**Implication:** “standardize on Postgres” is necessary for composability but insufficient. A block also needs explicit schema/table ownership, read/write capabilities, tenant key and sensitivity metadata, migration policy, and a domain-level port above the ORM. Existing databases should be read-only by default; a block must not silently claim or mutate tables it did not declare.

### 5. Contracts and visual baselines make admission testable

[OpenAPI 3.2](https://spec.openapis.org/oas/latest.html) provides a language-agnostic interface description for HTTP APIs. [Pact](https://docs.pact.io/) adds consumer-driven contract testing: the consumer records the interactions it actually needs, and the provider verifies those interactions independently. [JSON Schema](https://json-schema.org/specification) plus [Ajv](https://github.com/ajv-validator/ajv) can validate the block manifest itself.

[Playwright visual comparisons](https://playwright.dev/docs/test-snapshots) provide screenshot baselines and pixel-diff assertions, with an explicit warning that baseline and test environments must be controlled. [Storybook component testing](https://storybook.js.org/docs/writing-tests) and [Storybook visual testing](https://storybook.js.org/docs/8/writing-tests/visual-testing) provide isolated state fixtures and visual regression around component stories.

**Implication:** each block needs machine-readable manifest validation, a focused data/API contract test, a standalone build/smoke test, and visual evidence for UI blocks. A green preview alone is not sufficient evidence of a safe reusable block.

### 6. Provenance is a release gate, not a note in a README

[Choose a License's no-license guidance](https://choosealicense.com/no-permission/) states that code without an explicit license generally grants no permission to copy, modify, or share. [ScanCode Toolkit](https://github.com/aboutcode-org/scancode-toolkit) detects licenses, copyrights, dependencies, and package metadata and emits JSON, SPDX, CycloneDX, or other formats. [OSS Review Toolkit](https://github.com/oss-review-toolkit/ort) supports analyzer/evaluator/reporter workflows with project-specific includes, excludes, curations, and policy resolutions. [SPDX's license list](https://github.com/spdx/license-list-XML) supplies standardized identifiers and matching guidance.

For traceability of the adaptation itself, [in-toto](https://github.com/in-toto/in-toto) models an authorized layout of steps and records signed materials/products, while [SLSA build provenance](https://github.com/slsa-framework/slsa/blob/main/spec/build-provenance.md) defines metadata describing where, when, and how an artifact was produced.

**Implication:** the registry should partition candidates into harvestable, reference-only, quarantine, or rejected. A detected license label is evidence for review, not legal clearance; mixed licenses, missing copyright notices, generated assets, and dependency licenses need file/package-level provenance.

## Initial boundary statement

The evidence supports this division:

| Layer | Automatable with bounded confidence | Must remain reviewed or rejected by default |
|---|---|---|
| UI | Extract files; rewrite imports/identifiers; map CSS values to known token slots; emit registry items; run component/visual tests. | Visual intent, accessibility semantics, responsive behavior, interaction meaning, and unresolved hard-coded values. |
| Domain logic | Move pure functions; rename typed APIs; wrap known ports; preserve fixture tests. | Business invariants, authorization, lifecycle/state-machine meaning, and whether two concepts are equivalent. |
| Data access | Introspect Postgres; generate typed schema material; produce reviewed migrations; enforce declared tables/columns and adapter tests. | Data classification, source-of-truth choice, tenant isolation, RLS policy, destructive migration, backfill semantics, and production rollout. |
| Integrations | Generate an adapter shell from an OpenAPI/schema contract; normalize env-var metadata; run Pact/API tests. | OAuth scopes, secrets, retries, idempotency, rate limits, external side effects, and vendor-specific semantics. |
| Operations | Package workspace items; lock dependencies; produce SBOM/license/provenance receipts; run repeatable gates. | Deployment target, network/secret policy, live-data access, release approval, and rollback authority. |

The first framework draft will turn these limits into an eligibility rubric, staged conversion protocol, and explicit rejection policy.

## Framework draft — contract and operating protocol

### 1. Definition: what counts as a block

A **block** is a versioned, installable, reviewable unit with a narrow purpose and explicit boundaries. It may be a component, theme, feature slice, integration adapter, schema pattern, or scaffold. It is not “a useful repository” and it is not a model-generated code dump.

The block is admitted only when the registry can answer all of these questions without reading the original repository’s implicit assumptions:

1. What source and exact commit produced it, and what permissions cover every distributed file?
2. What host runtime, package/dependency range, styling system, and build contract does it assume?
3. What files, routes, components, commands, events, environment variables, and interfaces does it provide?
4. What does it consume from the host, including semantic design tokens and auth/storage/billing ports?
5. Which data does it read, write, or own; through what adapter; under what role, tenant, and migration policy?
6. What proof is shipped with it, and which owner can approve, operate, deprecate, and roll it back?

The current local [Block Contract v0](file:///Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/design/block-contract.schema.json) is a useful starting seam: it already requires an ID, kind, provenance, stack contract, provided artifacts, consumed tokens, and build/smoke commands. The framework draft below adds fields that v0 needs before a real admission decision: status, source-file scope, data capabilities and sensitivity, adapter ports, token confidence, security/provenance receipts, explicit ownership, and rollback.

### 2. Proposed block dossier

The following is a report-level contract shape. It is deliberately more descriptive than a JSON Schema so the first hand conversion can expose which fields are real and which are still assumptions.

```yaml
block:
  id: actionist/<name>@<semver>
  kind: component | theme | feature | integration | schema-pattern | scaffold
  status: candidate | quarantine | admitted | deprecated | rejected

  source:
    repository_url: <canonical URL>
    commit_sha: <immutable source commit>
    source_paths: [<only files actually distributed or reimplemented>]
    extraction_mode: whole | extract | reimplement | reference-only
    adaptation_log: [<ordered, human-readable transform records>]

  provenance:
    declared_license_spdx: <expression or unknown>
    detected_license_spdx: <scanner result>
    copyright_notice: <preserved attribution or receipt path>
    license_receipt: <ScanCode/ORT/SPDX evidence>
    dependency_sbom: <SPDX or CycloneDX receipt>
    source_attestation: <optional in-toto/SLSA receipt>

  host:
    runtime: [nextjs@<major>, react@<major>, ...]
    package_manager: pnpm@<major>
    styling: tailwind+css-vars | other-explicit-system
    build: <reproducible command>
    allowed_files: [<paths the assembler may change>]

  ports:
    provides: [<typed exports, routes, events, commands>]
    requires: [<named host interfaces>]
    config: [<env var name, required flag, secret/public classification>]

  tokens:
    format: DTCG-2025.10 | local-compatible-subset
    consumes: [color.surface.default, space.3, type.body, ...]
    provides: [<only for theme blocks>]
    unresolved: [<token/path, reason, owner>]
    hardcoded_allowlist: [<content/assets/geometry that is intentionally not themed>]

  data:
    mode: none | read_only_external | owned_postgres | api_only
    dialect: postgres | null
    orm: drizzle | null
    schema_namespace: <qualified schema or null>
    tables_owned: [<qualified table names>]
    tables_read: [<qualified table names>]
    tables_write: [<qualified table names>]
    columns_sensitive: [<qualified column, classification>]
    tenant_key: <qualified column or null>
    rls_policy: required | not_applicable | human-review
    migrations: [<ordered migration files and risk flags>]
    transaction_policy: <transaction boundary and non-transactional exceptions>
    idempotency: <key/strategy for writes or none>
    rollback: <application/data rollback procedure>

  proof:
    manifest_validation: <command and receipt>
    source_and_dependency_scan: <command and receipt>
    build: <command and receipt>
    unit_or_domain_tests: <command and receipt>
    data_contract_tests: <command and fixture DB/adapter>
    api_contract_tests: <Pact/OpenAPI/other or none>
    browser_smoke: <command and receipt>
    visual_baselines: [<Storybook/Playwright states and baseline paths>]
    security_review: <receipt or required human decision>

  ownership:
    maintainer: <person/team>
    data_owner: <person/team or none>
    legal_reviewer: <person/team or not-required>
    codeowners_path: <review rule>
    deprecation_policy: <semver/support window>
    rollback_authority: <person/team>
```

This shape intentionally separates **source provenance** from **adaptation provenance**. A clean license does not prove that the transformation preserved behavior, and a passing build does not prove permission to distribute the source.

### 3. Eligibility and acceptance rubric

Use the rubric in two passes. First, hard gates decide whether a candidate may enter adaptation. Second, quality scoring helps order several eligible candidates. A high score never overrides a hard gate.

#### Hard eligibility gates — before editing

| Gate | Pass condition | Fail disposition |
|---|---|---|
| Source identity | Canonical repository URL, immutable commit, and source paths are recorded. | Reject until pinned. |
| Permission | Every distributed or copied file has a recognized permissive/first-party license and preserved attribution; mixed or copyleft code has a documented legal decision. | Reference-only, quarantine, or legal review; never silently copy. |
| Dependency closure | Runtime/build dependencies and transitive licenses can be enumerated; no hidden network fetch or remote executable is required for the block. | Quarantine or reject. |
| Reproducibility | The original slice can install/build/test in a controlled environment, or the failure is documented before adaptation. | Reject if no bounded recovery path exists. |
| Boundary | A cohesive slice has identifiable inputs, outputs, side effects, and host assumptions. | Keep as reference; do not force a block. |
| Data safety | No live credentials or production data are needed; any database behavior is classifiable as `none`, `read_only_external`, `owned_postgres`, or `api_only`. | Reject until a safe adapter boundary exists. |
| Ownership | A maintainer, data owner where applicable, and rollback authority are named. | Quarantine. |

#### Admission acceptance — after adaptation

A block is **admitted** only if all applicable checks pass:

- the dossier validates against the registry schema and has no unknown required fields;
- the package installs from a pinned source or a clearly documented reimplementation;
- the changed file set stays within the approved extraction boundary;
- the block uses declared semantic token slots, with every unresolved value resolved, explicitly allowed, or rejected;
- UI code does not open database connections or import an ORM directly;
- data access goes through the declared port and touches only declared tables/columns;
- owned Postgres migrations are namespaced, reviewed, non-destructive for the pilot, and tested against a disposable database;
- domain/API ports have fixture or consumer/provider contract tests;
- build, typecheck, unit/domain, browser smoke, and required visual baselines pass;
- license, copyright, dependency, SBOM, and source/adaptation receipts are present;
- the owner has approved the release and documented how to deprecate or roll it back.

#### Quality score — ordering only

For eligible candidates, score 0–2 on each dimension: extraction cohesion, host compatibility, dependency simplicity, tokenizability, data-boundary clarity, test coverage, maintenance health, and reuse value. Record the score and evidence, but do not turn it into an automatic admission threshold. The score is for choosing the first pilot; it is not a substitute for safety or legal gates.

### 4. Staged adaptation protocol

Each stage produces a receipt and a stop decision. The next stage is not entered merely because the previous command exited zero.

#### Stage 0 — inventory and permission gate

Read the candidate at the pinned commit. Record the repository, files, declared/detected licenses, copyright notices, dependencies, build/test commands, external services, secrets, and data stores. Run license/dependency scans before extracting. Classify the candidate as:

- **whole:** the whole project is already a coherent, compatible block;
- **extract:** a bounded subsystem can be isolated with an explicit file/dependency set;
- **reimplement:** the behavior is useful but source cannot be distributed or is too coupled; preserve only interface/behavior evidence and write new code;
- **reference-only:** useful design or architecture, but licensing or boundary rules prohibit code reuse;
- **reject:** no safe path is visible.

**Stop:** no explicit permission, no reproducible source identity, or no bounded slice means no code adaptation.

#### Stage 1 — freeze and isolate the smallest useful slice

Create a branch or isolated workspace outside production. Keep only the smallest vertical slice that demonstrates a user-visible outcome. Capture the original baseline: build, tests, routes, screenshots, dependency lockfile, and a list of global assumptions. Remove secrets and live endpoints from fixtures.

Use static dependency analysis and AST tooling to discover imports and call paths. Do not use text replacement for syntax-sensitive edits. Use fixture tests for every codemod; jscodeshift's dry-run/statistics and fixture model is the appropriate pattern, and ast-grep is appropriate for repeated structural rules.

**Stop:** if isolation requires changing unrelated application behavior, turning hidden globals into guessed interfaces, or retaining broad app wiring, return to reference-only or reimplement.

#### Stage 2 — define ports before changing implementation

Write the host/block seam in plain typed terms before the first adaptation:

- UI inputs/outputs and interaction events;
- domain commands, queries, and invariant/error shapes;
- data capabilities and qualified table/column sets;
- auth, storage, billing, email, queue, and analytics interfaces;
- configuration and environment variables, classified as public, secret, or forbidden.

Then apply minimal transformations: import and identifier rewrites, known API replacements, wrapper insertion, and adapter calls. Preserve pure domain logic where possible. Keep generated glue in an allow-listed directory so later diffs can prove scope.

**Stop:** if a port cannot be specified without describing undocumented business behavior, do not infer it from names or prompts. Keep that code as reference or ask for a domain owner.

#### Stage 3 — normalize visual tokens

The conversion order is:

1. Read existing token sources first: DTCG JSON, CSS custom properties, Tailwind/theme configuration, design-system packages, then computed styles as evidence only.
2. Separate **primitive** values (palette, type scale, spacing scale) from **semantic** values (surface, text, border, action, focus, status).
3. Map the block to host semantic slots. Do not make every raw hex value a public semantic token.
4. Replace only mapped declarations with CSS variable references or the host token API. Leave content, asset dimensions, SVG geometry, and intentional one-off values on the explicit allowlist.
5. Generate/record light, dark, focus, disabled, error, and high-contrast states where the component supports them.
6. Render the same stories under at least two token sets and compare visual baselines.

Token extraction is automated proposal generation. A missing semantic mapping, contrast failure, or typography/layout change is a human decision or a rejection—not a silent fallback to the original hard-coded value.

#### Stage 4 — normalize data through an explicit Postgres mode

Choose exactly one mode per block:

| Mode | Meaning | Default policy |
|---|---|---|
| `none` | No persistence; all data enters through props/ports. | Preferred for UI-only blocks. |
| `read_only_external` | Reads a host-owned schema through a declared query port. | Default for an existing client database; no migrations or writes. |
| `owned_postgres` | Owns a namespaced schema/tables and reviewed migrations. | Allowed only with explicit table/column ownership and tenant policy. |
| `api_only` | Talks to a host/provider API; no direct database access. | Preferred for external systems and integrations. |

For `read_only_external`, introspect with Postgres's information schema plus any required system-catalog queries, map only the fields the block actually uses, and execute through a read-only adapter role. For `owned_postgres`, create a qualified schema namespace, explicit primary/foreign/check constraints, and a migration receipt. Avoid unqualified names and untrusted `search_path` assumptions. For tenant-aware data, require a tenant key and an RLS/privilege decision before admission.

The block's UI and domain layers depend on a domain port such as `OrdersReader` or `DashboardMetrics`, not on Drizzle/SQL. The Postgres adapter implements that port. The adapter may use Drizzle for typed schema/query/migration material in the first pilot, but the ORM is an implementation detail of the adapter. This preserves the option to bind an existing API or a different approved adapter later without rewriting the UI.

**Stop:** no automatic table-name matching, ORM rewrite, or migration generator is allowed to decide that two business entities are equivalent. Any write path without a named capability, authorization context, idempotency strategy, and rollback/compensation plan remains unadapted.

#### Stage 5 — package and register

Package the block as a workspace package or registry item with:

- manifest and JSON Schema validation;
- explicit file targets and dependencies;
- `workspace:` ranges for local block dependencies during development;
- a Changeset/semver record for release intent;
- token artifact(s), adapter implementation, migrations/fixtures, and proof tests;
- attribution, license, SBOM, and adaptation receipts;
- owner and code-review rule.

The shadcn registry model is a proven file/dependency delivery mechanism. The proposed block registry adds the data/provenance/proof fields; this composition is a framework design, not an existing OSS standard.

#### Stage 6 — prove and admit

Run gates in this order so cheap failures happen first:

1. manifest/schema and path-scope validation;
2. source/license/copyright/dependency/SBOM scan;
3. static boundary checks (forbidden imports, undeclared env vars, undeclared table names, hard-coded token failures);
4. codemod fixtures and typecheck;
5. unit/domain tests;
6. adapter/schema/contract tests against a disposable Postgres fixture or mock provider;
7. build and browser smoke;
8. Storybook/Playwright visual baselines;
9. independent human review of the dossier, diff, receipts, and rollback.

Only the final human decision changes `candidate` to `admitted`. Every result is saved as a machine-readable receipt with commit, tool version, command, environment fingerprint, exit status, and artifact links.

#### Stage 7 — maintain, revoke, or graduate

An admitted block is still a maintained package. Re-run provenance/dependency checks on source or dependency changes, run compatibility tests against supported hosts, and issue a new semver version for behavior or contract changes. Mark a block `deprecated` before removing it; retain the last known-good manifest and rollback instructions. A block with a broken legal, security, data, or build gate is withdrawn from new composition while existing consumers are assessed.

### 5. Proven versus speculative composition

| Capability | Evidence-backed mechanism | Framework use | What remains speculative or local policy |
|---|---|---|---|
| Installable blocks | shadcn registry items with files, dependencies, registry dependencies, CSS vars, env vars, and targets | Use as the delivery envelope. | Adding provenance/data/proof semantics around it is the proposed extension. |
| Structural source adaptation | jscodeshift, ast-grep, ts-morph | Automate narrow syntax/type transforms with fixtures and dry runs. | Inferring semantic equivalence or preserving business intent is not established. |
| Package composition | pnpm workspaces and `workspace:`; Changesets for version/changelog release | Use for a small monorepo registry and semver releases. | Automatic resolution of arbitrary runtime incompatibilities is not guaranteed. |
| Token exchange/build | DTCG 2025.10 format; Style Dictionary transforms | Store portable token inputs; emit CSS variables and other targets. | Image-to-semantic-token extraction and universal theme fidelity are proposed/experimental. |
| Visual scaffold | Screenshot to Code; FigmaToCode | Use screenshots/mockups as UI evidence or a starting scaffold, subject to license. | Visual input cannot establish domain/data/a11y behavior. |
| Data introspection/migrations | Postgres information schema/catalogs; Drizzle pull/generate/migrate | Produce typed, reviewed adapter material for a declared subset. | Automatic domain mapping, tenant semantics, or safe production migration is not established. |
| Domain/data separation | Refine data-provider interface; custom typed ports | Make UI consume ports and bind an adapter. | A generic CRUD port does not prove business authorization or invariant preservation. |
| API contracts | OpenAPI; Pact consumer/provider verification | Require contracts for external or cross-package interfaces. | Contracts do not prove provider business correctness beyond covered interactions. |
| UI proof | Storybook isolated stories; Playwright screenshot assertions | Gate component states and token regressions. | Pixel equality is not a substitute for accessibility or product acceptance. |
| OSS compliance | ScanCode, ORT, SPDX, Choose a License | Require source/dependency/license receipts before admission. | Automated detection is not legal clearance; legal owner remains accountable. |
| Supply-chain traceability | in-toto layouts/links; SLSA provenance | Record adaptation/build materials and products where warranted. | Signing/key governance and a production trust root require platform decisions. |

### 6. Rejection and quarantine policy

Reject or quarantine rather than “make it fit” when any of the following is true:

- the source has no explicit usable license, contradictory/mixed licensing, missing attribution, or a copyleft obligation that has not been legally reviewed;
- the candidate depends on a live secret, private endpoint, unpinned remote code, or an unbounded network side effect;
- the build, tests, or dependency closure cannot be reproduced from the pinned commit;
- the supposed block boundary crosses global state, routing, auth, or runtime setup that cannot be expressed as a port;
- UI styles remain materially hard-coded and no bounded mapping to host tokens exists;
- the block would need to guess business semantics, access control, tenant identity, or data source-of-truth;
- the data path performs arbitrary SQL, writes undeclared tables, uses an unsafe search path, bypasses the declared adapter, or has no clear privilege/RLS decision;
- a migration drops/rewrites data, changes shared tables, or requires a backfill without a reviewed expand/contract and recovery plan;
- an integration can send external side effects without an explicit capability, approval/idempotency/retry policy, and contract test;
- visual, contract, build, or security evidence is missing and no owner accepts the residual risk;
- there is no maintainer or no practical rollback/withdrawal path.

“Reference-only” is a successful outcome for valuable but ineligible material. It should retain URLs, commit, license finding, screenshots/behavior notes, and a reimplementation brief without copying source files.

### 7. Automation boundary by layer

| Layer | High-confidence automation | Assistive automation | Human decision / default stop |
|---|---|---|---|
| UI | File extraction, dependency manifest, AST import/identifier transforms, known CSS-variable substitutions, registry packaging, story generation. | Candidate token mapping, component-boundary suggestions, screenshot/mockup comparison. | Interaction semantics, accessibility, responsive intent, visual approval, unresolved styles. |
| Domain logic | Pure-function extraction, typed rename, wrapper insertion, fixture replay. | Identify candidate ports from call graphs/types; generate adapter skeletons. | Business invariants, authorization, state transitions, lifecycle meaning, data ownership. |
| Data access | Postgres introspection, schema diff, typed query generation, migration syntax checks, declared-table static checks. | Field mapping proposals, read-model/query translation, fixture data generation. | Source-of-truth mapping, PII classification, tenant/RLS policy, writes, backfills, destructive changes, production rollout. |
| Integrations | OpenAPI/client shell generation, env-var inventory, Pact scaffolding, serialization adapters. | Error/retry/idempotency checklist, provider mapping suggestions. | OAuth scopes, secret handling, rate limits, external side effects, approval and compensation. |
| Operations | Workspace packaging, lockfile/SBOM/license scans, manifest and proof receipt generation, CI gate orchestration. | Dependency upgrade and compatibility proposals. | Deployment authority, network policy, signing keys, production data, release/rollback approval. |

The rule is simple: automate transformations whose correctness is local and mechanically observable; require a decision where correctness depends on meaning, authority, or irreversible state.

## Primary-source index

- [shadcn registry authoring](https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/registry.md)
- [jscodeshift](https://github.com/facebook/jscodeshift), [ast-grep](https://github.com/ast-grep/ast-grep), [ts-morph](https://github.com/dsherret/ts-morph)
- [Style Dictionary](https://github.com/style-dictionary/style-dictionary), [DTCG 2025.10](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/)
- [Screenshot to Code](https://github.com/abi/screenshot-to-code), [FigmaToCode limitations and license](https://github.com/bernaferrari/FigmaToCode)
- [Postgres schemas](https://www.postgresql.org/docs/current/ddl-schemas.html), [information schema](https://www.postgresql.org/docs/current/information-schema.html), [privileges](https://www.postgresql.org/docs/current/ddl-priv.html), [row security](https://www.postgresql.org/docs/current/ddl-rowsecurity.html), [constraints](https://www.postgresql.org/docs/current/ddl-constraints.html)
- [Drizzle existing Postgres](https://orm.drizzle.team/docs/get-started/postgresql-existing), [Drizzle migrations](https://orm.drizzle.team/docs/migrations), [Refine data provider](https://refine.dev/core/docs/data-fetching/data-provider-interface/)
- [pnpm workspaces](https://pnpm.io/workspaces), [Changesets](https://github.com/changesets/changesets), [Bit](https://github.com/teambit/bit)
- [OpenAPI](https://spec.openapis.org/oas/latest.html), [Pact](https://docs.pact.io/), [JSON Schema](https://json-schema.org/specification), [Ajv](https://github.com/ajv-validator/ajv)
- [Playwright visual comparisons](https://playwright.dev/docs/test-snapshots), [Storybook testing](https://storybook.js.org/docs/writing-tests), [Storybook visual testing](https://storybook.js.org/docs/8/writing-tests/visual-testing)
- [Choose a License — no license](https://choosealicense.com/no-permission/), [ScanCode](https://github.com/aboutcode-org/scancode-toolkit), [ORT](https://github.com/oss-review-toolkit/ort), [SPDX license list](https://github.com/spdx/license-list-XML), [in-toto](https://github.com/in-toto/in-toto), [SLSA provenance](https://github.com/slsa-framework/slsa/blob/main/spec/build-provenance.md)

## Laptop-first local-assets inventory and gap analysis

This pass was read-only. Paths below are evidence locations, not a claim that
every file in the surrounding workspace was inspected. “Framework seed” means
that a local system already expresses a reusable-unit boundary or promotion
loop. It does not mean arbitrary source conversion is solved.

| Local asset | What the evidence actually establishes | Classification | Reusable-block contribution | Gap against the proposed framework | Confidence |
|---|---|---|---|---|---|
| /Users/shaansisodia/SISO_Workspace/siso-ui-base (3.6G) | 7,949 harvested component directories; 7,828 have bundle.html; 75 tags with 7,382 tagged items; 33-repository prior-art manifest; 334 design-principle sections; 67 palettes; brief → forge → gate → judge → bless → graduate pipeline; screenshot judge, mechanical gates, precedent replay, live review grid, tenant design DNA. | UI assembly and visual-vetting framework seed; not a general code/data framework. | Provides a real candidate-intake, reference, variant, visual-review, and promotion loop. The registry/21st path and tenant DNA are useful source and design evidence. | Harvest output is primarily compiled third-party UI/visual material. It lacks a block-level install/release contract, per-file license/SBOM receipt, Postgres/data adapter, domain/integration/operations ports, and rollback/ownership state. Its bundles must remain retrieval evidence; “approaches from references, never markup” remains the safe rule. | High for local facts; medium for reuse as a block substrate. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/laptop-asset-sweep-2026-08-26.md | The CENA/laptop sweep re-derived the counts above, records Great Library as schema rather than third-party content, and classifies design-schema as an approval precedent. | Local evidence ledger. | Gives a bounded, reproducible inventory and preserves the distinction between content, schema, and framework. | It is a report, not a machine-executable block registry or conversion benchmark. | High for the recorded local observations. |
| /Users/shaansisodia/DEV/dispo/design-schema/data/product-asset-review.json | Candidate images have explicit review status; the boundary says a candidate is not production catalog material until visual direction is approved and real item/source data is attached. It records 8 original character directions, 12 clean flower candidates, 4 new transparent candidates, 8 current clean-slice items, and 4 reward-review candidates. | Visual asset approval loop; not code extraction. | Supplies a strong human-approval state machine for visual direction, source attachment, archive rules, and data/asset separation. | No source-code boundary, package manifest, dependency closure, token contract, data adapter, build proof, or rollback/release model. | High. |
| /Users/shaansisodia/SISO_Workspace/Great_Library_of_SISO | Work schema covers stable identity, lifecycle, provenance, relationships, research contracts, and evidence. Source-inventory schema covers bounded units, preservation mode, classification, disposition, promotion stage, owner state, stack pins, release/snapshot evidence, and blockers. Registry model separates Works, Releases, Assemblies, Source Inventories, Snapshots, Events, and Decisions. Current estate is recorded as 32 works, 79 releases, and 37 snapshots. | Real provenance/release registry for SISO works; not a third-party code-block registry. | Strong model for immutable identity, pinned release evidence, source intake, candidate promotion, ownership, and “catalog presence is not installability” discipline. | It intentionally indexes SISO-owned works and metadata; it does not materialize arbitrary OSS source into installable blocks, normalize tokens, define Postgres ports, or prove host compatibility. | High. |
| /Users/shaansisodia/SISO_Workspace/Great_Library_of_SISO/registry/source-inventories/laptop-estate-2026-08-09.json | The inventory classifies siso-ui-base as candidate_work with extract disposition, high priority, and a promotion queue. | Intake/promotion evidence. | Direct precedent for treating extraction as a gated disposition rather than an automatic move. | The target extract disposition still needs a block release manifest and proof artifact before it can mean installable. | High. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/design/block-contract.schema.json and design/BLOCK-FRAMEWORK.md | Action Model has a v0 block contract requiring identity, kind, provenance, stack contract, provides, tokens, and evaluation; the framework document defines harvest → extract → standardize → register → prove. | Proposed block seam; not yet validated by a real admitted block. | Provides the first local shape for source, host, ports, token consumption, data boundaries, evaluation, and staged conversion. | v0 does not yet express status transitions, source paths/extraction mode, dependency closure, data sensitivity/tenant/RLS/migration semantics, package/release identity, SBOM/attestation, rollback, or explicit owners. No candidate has passed the complete pipeline. | High for schema contents; low for production maturity. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/AutoSaaS/framework/code-harvest-protocol.md, source-graph-template-strategy.md, template-registry.md, and process-runs persistence contracts | Local policy defines local-first discovery, source graphing, license/reuse classifications, candidate scoring, exact-file provenance, adaptation logs, risks, owners, verification, and completion gates. Its persistence contract has authorization, tenant isolation, status, audit, concurrency, adapter self-test, and schema-registration gates. | Closest local harvest/process framework; data precedent is Convex-specific. | Contributes candidate scoring, reuse_local/reference_only/extract_candidate/reject modes, source-read discipline, and explicit persistence gates. | The template registry is prose/fragmented; there is no unified machine-readable package contract, visual diff, universal adapter, or Postgres-first implementation. | High for local process evidence; medium for portability. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/verticals/business-broker/TRANSPLANT-FIRST-REPO-MATRIX.md and PRODUCT-COMPOSITION-AND-ONBOARDING-PLAN.md | SISOCRM calls itself a code-transplant foundry. It freezes donor commits/licenses/tests/fixtures, copies coherent slices, writes minimum glue, and uses BASE / COPY WHOLE SLICE / GRAFT / KEEP AS SERVICE / IDEAS ONLY / REJECT lanes. | True composition/transplant strategy; not automatic extraction. | Establishes realistic source-class decisions, whole-slice preservation, adapter/service boundaries, and a “maximum retained working behaviour” objective. | It is product-specific and intentionally preserves complete donors; it does not define portable token/data/package contracts for arbitrary slices. | High. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/integrations/contracts/module-manifest.schema.json, README.md, and examples/twenty.module.json | A module manifest records source repository and commit, license boundary, routes, runtime/lifecycle, auth handoff, context, registries, events, token mode, and required route/identity/context/workflow/persistence/recovery evidence. Integration means all six conditions, not an open port or rendered login. | Real module integration contract; separate-runtime/native-host oriented. | Strong adjacent contract for source identity, host ports, cross-module context, token deferral, lifecycle, and verification. | It has no extracted source-file scope, dependency/SBOM receipt, Postgres table/column ownership, migration/tenant/RLS model, or block-level semver/rollback envelope. | High. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM/verticals/business-broker/THEMING-CONTRACT.md | The Teable bridge preserves current appearance first, scopes variables to a native mount, converts HSL/RGB rather than aliasing them, mirrors dark mode, and uses a design-token checker. | Genuine token-adaptation precedent; not token extraction from arbitrary code. | Supplies the “pixel-identical first, deliberate convergence later” rule and format/scope checks. | It assumes a known donor token set and known host tokens. It does not infer semantic tokens from arbitrary CSS or images. | High. |
| /Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM-w1-instatic-seed | Source-package verifier pins upstream tag/commit, creates a deterministic package digest, rejects forbidden paths/secrets, records no runtime/data changes, and emits receipts. The verify harness has registered units/verifiers, Zod fixture schemas, DOM contracts, and invariants. | Reproducible source-package and UI verification precedent; one bounded seed, not a general registry. | Provides concrete package boundary, forbidden-content scan, fixture/schema/DOM/invariant gates, and machine-readable receipts. | It does not adapt arbitrary source, normalize Postgres data, extract tokens, or release/own a multi-package block. It proves a particular assembled vertical, not general conversion. | High. |
| /Users/shaansisodia/SISO_Workspace/siso-stargate-library | A small module maintains separate practice/evidence/theory tracks, claim statuses, update gates, cryptographic commitment tooling, and structural verification. | Evidence/provenance discipline; unrelated to reusable application code. | Reinforces explicit claims, falsifiers, update gates, and “tool does not establish the larger claim” language. | No code packaging, component registry, token system, or data adapter. | High for its stated boundary. |
| /Users/shaansisodia/SISO_Workspace/trader-platform-research/lab/stack.json and lab/README.md | A worked composition example treats vetted repositories as replaceable workers behind a small contract layer; no product was found in the inspected evidence. | Architecture analogy. | Supports the principle of small ports around replaceable implementations. | No reusable UI package, token adapter, or data migration evidence. | Medium. |
| Local GitHub recon reports under /Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research | Candidate ledgers and source-read notes contain discovery evidence, not installed/admitted block artifacts. | Research/catalog evidence. | Useful discovery corpus and provenance leads. | Candidate counts are not conversion yield, compatibility evidence, or a license-cleared package registry. | High for “catalog, not block” classification. |

### Local gap analysis

The laptop already contains most of the governance ingredients, but they are
distributed across systems with different scopes:

1. There is a real UI assembly/vetting loop in siso-ui-base, a harvest/process
   framework in AutoSaaS, a release/provenance model in Great Library, a module
   integration contract in SISOCRM, a visual approval loop in design-schema, and
   source/UI verification receipts in the instatic seed.
2. There is no single local manifest that joins source file scope, license and
   dependency closure, token contract, domain ports, Postgres tables and
   sensitivity, proof receipts, ownership, release status, and rollback.
3. There is no local evidence of a real arbitrary-code candidate being extracted,
   tokenized, bound through a Postgres adapter, packaged, and admitted end to end.
4. The local data-boundary precedents are either a product-specific “one app, one
   database” plan or Convex-specific persistence gates. Neither is a portable
   Postgres adapter implementation.
5. The local token precedents operate from known CSS variable sets and deliberate
   bridges. No local artifact proves automatic extraction of semantic tokens from
   arbitrary CSS, screenshots, or generated visual bundles.
6. siso-ui-base visual judging and design-schema approval are valuable gates, but
   neither is a release/rollback system for executable blocks.
7. Great Library’s source-inventory extract state is intentionally only a
   promotion queue. It must not be reported as installability until a block
   release manifest and proof receipt exist.
8. The Action Model schema is a design proposal with no admitted exemplar. Add
   missing fields only as the first pilot proves they are needed; do not expand
   it into a speculative universal schema before that.

The safe local conclusion is therefore: **the reusable-block framework is a
composable governance and packaging proposal with substantial local precedents,
not an already-proven arbitrary-code compiler.**

## Coverage ledger: taxonomy, evidence, unknowns, and bounded follow-on work

This is a coverage ledger, not an exhaustiveness claim. It records the source
classes and mechanisms inspected in this programme, the strongest primary
evidence found, what the evidence supports, and where the research deliberately
stops.

### Ledger legend

| State | Meaning |
|---|---|
| Verified mechanism | A primary repository or official specification/documentation was inspected and establishes that the mechanism exists. It does not establish suitability for arbitrary conversion. |
| Local precedent | A local artifact was read and establishes an existing process, contract, or receipt in this workspace. It does not establish generality. |
| Partial | The mechanism or source class is represented, but the relevant cross-layer behavior, compatibility, or production proof was not exercised. |
| Unsearched | Intentionally outside this pass; no positive or negative conclusion should be inferred. |
| Unknown | The question cannot be answered from the evidence inspected and remains a decision blocker if the pilot depends on it. |

Confidence is about the claim being made: high means the mechanism or local
fact is directly evidenced; medium means the mechanism is clear but composition
or portability is unproved; low means the item is a hypothesis or design
proposal.

### Transformation approaches

| Approach | Primary/local evidence | What can be automated with confidence | Boundary and open question | State / confidence |
|---|---|---|---|---|
| Intact package or runtime reuse | [shadcn registry](https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/registry.md), [Bit](https://github.com/teambit/bit), local SISOCRM transplant matrix | Deliver pinned files, dependencies, targets, and runtime metadata; preserve a coherent donor slice. | Does not make a donor compatible with the host, data model, auth, or tokens. | Verified + local precedent / high for mechanism, medium for fit |
| Bounded file or slice extraction | siso-ui-base forge/gate/judge pipeline; AutoSaaS harvest protocol; shadcn file targets | Select explicit paths, copy a coherent unit, and record adaptation. | No evidence that a visual bundle contains the domain/data/operations needed by a block. | Local precedent / high for UI intake, low for arbitrary source |
| JavaScript/TypeScript AST codemod | [jscodeshift](https://github.com/facebook/jscodeshift), [ast-grep](https://github.com/ast-grep/ast-grep), [ts-morph](https://github.com/dsherret/ts-morph) | Imports, identifiers, known API shapes, wrappers, prop/type changes, and fixture-backed syntax edits. | Cannot decide business equivalence, authorization, or migration safety. | Verified / high for local edits, medium for large refactors |
| Type-aware compiler transformation | ts-morph; [Roslyn](https://github.com/dotnet/roslyn); [Go tools transformations](https://github.com/golang/tools/blob/master/gopls/doc/features/transformation.md) | Navigate symbols and apply language-aware changes where types and tests constrain behavior. | Type correctness is not domain correctness; language-specific semantics still require review. | Verified / high for mechanism, medium for conversion |
| Structural search and rewrite | [Comby](https://github.com/comby-tools/comby), ast-grep | Match syntax-shaped patterns across supported languages and emit controlled rewrites. | Broad matches can be semantically wrong; every recipe needs fixtures and a diff review. | Verified / high for mechanism |
| Recipe-based mass refactor | [OpenRewrite](https://github.com/openrewrite/rewrite) | Apply repeatable recipes across supported language ecosystems with reviewable diffs. | A recipe catalogue is not a repository-to-block translator; coverage and recipe quality vary by ecosystem. | Verified / medium for cross-repo conversion |
| Formatting-preserving Python codemod | [LibCST](https://github.com/Instagram/LibCST) | Transform Python while preserving formatting/comments and test codemods. | Does not infer Python service boundaries, data ownership, or runtime operations. | Verified / high for Python syntax |
| C source transformation | [Coccinelle](https://github.com/coccinelle/coccinelle) | Apply semantic patches to C source. | Tool licensing and native/runtime concerns require a separate review; irrelevant to a JS-first pilot. | Verified / high for mechanism, low for pilot fit |
| Behavior-preserving reimplementation | SISOCRM transplant policy plus donor tests/fixtures; no universal OSS converter found | Use a donor as a reference, reimplement only a bounded missing seam, and replay fixtures. | “Same behavior” must be demonstrated; it cannot be inferred from screenshots or names. | Local policy / medium for bounded work, low for automation |
| Adapter/port extraction | [Refine data provider](https://refine.dev/core/docs/data-fetching/data-provider-interface/), SISOCRM module manifest, Action Model block draft | Generate or write a small port and bind a provider/adapter behind it. | Port shape does not prove authorization, source-of-truth, tenant semantics, or write correctness. | Verified + local precedent / medium |
| Schema/API-first generation | [OpenAPI](https://spec.openapis.org/oas/latest.html), [JSON Schema](https://json-schema.org/specification), [Ajv](https://github.com/ajv-validator/ajv) | Generate clients, validators, fixtures, and manifest checks from explicit shapes. | A valid shape can still describe the wrong business behavior. | Verified / high for shape, medium for behavior |
| Token substitution and build | [DTCG format report](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/), [Style Dictionary](https://github.com/style-dictionary/style-dictionary), local SISOCRM theming contract | Convert a reviewed token source into CSS variables and platform outputs; replace known token references. | Semantic mapping and unresolved hard-coded values require human review. | Verified + local precedent / high for build, medium for mapping |
| Screenshot or design-to-code scaffold | [Screenshot to Code](https://github.com/abi/screenshot-to-code), [FigmaToCode](https://github.com/bernaferrari/FigmaToCode) | Produce a visual starting point and compare rendered states. | Visual input does not establish state, data, navigation, backend, business rules, or accessibility. | Verified / high for scaffold, low for block conversion |
| Event/CDC composition | [Debezium PostgreSQL connector](https://debezium.io/documentation/reference/stable/connectors/postgresql.html), [Temporal architecture](https://github.com/temporalio/temporal/blob/main/docs/architecture/README.md) | Capture changes or run durable workflows once event/schema semantics are explicitly defined. | CDC/workflow infrastructure does not normalize donor domain meaning or make dual writes safe. | Verified / high for mechanism, medium for adaptation |
| Reference-only extraction | AutoSaaS classifications; SISOCRM IDEAS ONLY lane; Great Library candidate dispositions | Preserve URL, pinned revision, license finding, screenshots, behavior notes, and a reimplementation brief without copying. | Valuable outcome when direct reuse is legally, technically, or semantically ineligible. | Local precedent / high |

### Data-normalization models

| Model | Primary evidence | Suitable first use | Hard boundary | State / confidence |
|---|---|---|---|---|
| No persistence / pure UI | Action Model block draft; Storybook stories | Lowest-risk packaging and token pilot. | It proves no data boundary, so it cannot validate a Postgres adapter. | Local proposal / high for safety, low for data learning |
| Read-only existing Postgres | [PostgreSQL information schema](https://www.postgresql.org/docs/current/information-schema.html), [privileges](https://www.postgresql.org/docs/current/ddl-priv.html), [Drizzle existing database](https://orm.drizzle.team/docs/get-started/postgresql-existing) | First data-bearing pilot: select a narrow view/query through a read-only adapter role. | No automatic field/domain matching; no writes or production migration until ownership and semantics are approved. | Verified / high for mechanism, medium for portability |
| Owned Postgres namespace | [PostgreSQL schemas](https://www.postgresql.org/docs/current/ddl-schemas.html), [constraints](https://www.postgresql.org/docs/current/ddl-constraints.html), [Drizzle migrations](https://orm.drizzle.team/docs/migrations) | A block that truly owns a small, namespaced schema and reviewed migrations. | Qualified names, privileges, constraints, and migration receipts are mandatory; no shared-table guessing. | Verified / high for database primitives |
| Shared tables with tenant key and RLS | [PostgreSQL row security](https://www.postgresql.org/docs/current/ddl-rowsecurity.html), privileges, constraints | Only after host identity and tenant policy are explicit. | RLS policy and role behavior need negative tests; a tenant_id column alone is not isolation. | Verified / high for primitive, medium for policy |
| Schema-per-tenant | PostgreSQL schemas and role/search_path documentation | Possible isolation model for a bounded deployment. | Operational provisioning, migrations, search_path safety, and cross-tenant reporting remain unproved for the pilot. | Verified / medium |
| Database-per-tenant | [Finbuckle multitenancy EF integration](https://github.com/Finbuckle/Finbuckle.MultiTenant/blob/main/docs/EFCore.md) as a primary multi-tenant pattern reference | A later operational option when isolation is more important than shared queries. | The inspected source is .NET-oriented; no Actionist Postgres deployment decision or cost model exists. | Partial / medium |
| API-only provider | [PostgREST API](https://docs.postgrest.org/en/stable/references/api.html), [PostgREST schemas](https://postgrest.org/en/stable/references/api/schemas.html), [Hasura existing database](https://github.com/hasura/graphql-engine/blob/master/docs/docs/schema/postgres/using-existing-database.mdx) | Keep the block away from a database and consume an approved host/provider API. | Provider authorization and schema versioning still need contracts; “API” is not automatically a safe boundary. | Verified / high for mechanism, medium for fit |
| Read model or CDC projection | Debezium PostgreSQL connector; Postgres transactions | Feed a block a stable read model instead of donor tables. | Snapshot/offset/replay semantics and eventual consistency must be explicit. | Verified / medium |
| Durable workflow/event state | Temporal architecture | Keep long-running, retryable domain operations outside a UI block. | Workflow history is not a substitute for a canonical relational model or authorization policy. | Verified / medium |
| Local one-app/one-database absorption | SISOCRM ABSORPTION-STRATEGY.md | A product-level target when donor data layers are consciously rewritten onto one owner. | It is a local architectural decision, not a portable adapter or proof that schemas are semantically compatible. | Local precedent / high for intent, low for generality |
| Dual-write or live bidirectional normalization | No primary evidence was found in this pass that makes arbitrary donor dual-write safe. | None for the first pilot. | Treat as rejected until idempotency, ordering, reconciliation, compensation, and ownership are specified. | Unknown / low |

### Design-token systems

| System or pattern | Primary/local evidence | What it proves | Remaining boundary | State / confidence |
|---|---|---|---|---|
| DTCG exchange format | [DTCG 2025.10 report](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/), [community group repository](https://github.com/design-tokens/community-group) | A tool-agnostic token data model and interoperability target. | It is not a universal semantic naming convention or a guarantee that a donor can consume the token set. | Verified / high for format, medium for interop |
| Style Dictionary | [Style Dictionary](https://github.com/style-dictionary/style-dictionary) | Token source to CSS and other platform build transforms. | Does not choose mappings or approve visual intent. | Verified / high |
| CSS custom properties and Tailwind theme variables | [Tailwind theme](https://tailwindcss.com/docs/theme) | A practical runtime/build seam for portable CSS variables and utility generation. | Existing hard-coded styles still need extraction and semantic mapping. | Verified / high |
| MUI theme system | [MUI theming](https://mui.com/material-ui/customization/theming/) | Component-library theme providers and system-level customization. | Library-specific theme shape; not a cross-library donor conversion. | Verified / high |
| Chakra token/semantic-color system | [Chakra tokens](https://chakra-ui.com/docs/theming/tokens), [semantic colors](https://chakra-ui.com/docs/theming/colors) | Primitive-to-semantic token layering with conditions/variants. | Still requires an explicit mapping from donor tokens and host semantics. | Verified / high |
| Tokens Studio | [Tokens Studio token fundamentals](https://github.com/tokens-studio/tokens-studio-for-figma-plugin-docs/blob/main/fundamentals/design-tokens/README.md) | Design-tool token management and export workflow. | Figma/token data is not application behavior or a license/data contract. | Verified / medium |
| Local bridge and token lint | SISOCRM THEMING-CONTRACT.md and check-design-tokens.mjs | Pixel-identical first, scoped bridge, HSL/RGB conversion, and static hard-coded-style checks. | Requires known donor and host variable sets; does not infer semantic slots. | Local precedent / high |
| Local design DNA/palettes | siso-ui-base tenants/oracle/dna.md, palettes, principles | A human/agent review authority for visual direction and precedent. | Visual authority is not executable token extraction or a block release. | Local precedent / high for review |
| Screenshot/image to semantic token inference | No primary mechanism was found that establishes reliable semantic token extraction from arbitrary images. | None. | Keep as candidate suggestion only; unresolved values stop admission. | Unsearched/unknown / low |

### Code-modification tools

| Ecosystem | Primary evidence inspected | Safe first-pilot use | Unsearched or unresolved area | State / confidence |
|---|---|---|---|---|
| JavaScript/TypeScript | jscodeshift, ast-grep, ts-morph | Import/identifier/prop-shape transforms with fixtures, dry runs, and typecheck. | Cross-framework lifecycle and state semantics. | Verified / high |
| Polyglot structural patterns | Comby, ast-grep | Small syntax-shaped rewrites with explicit language/parser scope. | Semantic false positives at broad repository scale. | Verified / high |
| Java/Kotlin/Groovy/JS/TS/Python/C#/Go recipe refactors | OpenRewrite | Reuse existing recipes or write one bounded recipe with a diff budget. | Full language coverage, recipe maturity, and runtime behavior by ecosystem. | Verified / medium |
| Python | LibCST | Formatting-preserving codemods and fixture tests. | Service/data boundary extraction. | Verified / high for syntax |
| C#/.NET | Roslyn; Finbuckle as a data-boundary reference | Type-aware code analysis and controlled transforms. | Porting to TypeScript/Postgres host semantics. | Verified / medium |
| Go | golang/tools and gopls transformation documentation | Go-specific edits where the target remains Go. | Cross-language extraction into a JS/TS block. | Verified / medium |
| C | Coccinelle | Semantic patches only for a native-code lane. | License, build, FFI, and operations; outside first pilot. | Verified / low for pilot |
| Rust, Ruby, PHP, Swift, Objective-C, Kotlin Android, SQL migration rewriting, GraphQL schema migration, HCL/IaC, shell, native/mobile/WASM/ML/CMS internals | No bounded primary-tool sweep in this pass. | None. | Need ecosystem-specific transforms, license boundary, fixtures, and host/runtime proof. | Unsearched / unknown |

### Source-class taxonomy

| Source class | Examples/evidence | Default adaptation mode | Automation ceiling | Coverage |
|---|---|---|---|---|
| UI atom or component | siso-ui-base corpus; shadcn registry; Storybook | Extract/package after token and state review. | High for file/AST/package work; medium for visual semantics. | Partial / high for UI |
| Theme/token package | DTCG, Style Dictionary, Tailwind, local SISOCRM bridge | Adapt through an explicit token map and generated outputs. | High for format/build; low for semantic inference. | Verified / high |
| Page/template | Screenshot to Code, FigmaToCode, local visual pipeline | Reference/scaffold or bounded extraction, then add real state/data contracts. | Moderate for markup and styling; low for behavior. | Verified / medium |
| CRUD/admin vertical | SISOCRM transplant matrix; Refine provider; local instatic vertical | Preserve complete slice or extract with explicit domain/data ports. | Moderate only when schema, fixtures, and permissions are known. | Partial / medium |
| Full application/scaffold | SISOCRM donor matrix; AutoSaaS template registry | Keep as runtime/service or transplant a coherent slice. | Low for automatic decomposition. | Local precedent / medium |
| Domain library or pure algorithm | AST/type tools plus donor tests | Package intact or wrap behind a typed port. | High if pure and fixture-covered; low if context-dependent. | Partial / medium |
| Database schema/migrations | PostgreSQL docs; Drizzle; SISOCRM absorption strategy | Read-only adapter first; owned namespace only after review. | High for introspection/diff; low for semantic mapping/backfill. | Verified + local precedent / high |
| API or external integration | OpenAPI, Pact, SISOCRM auth/context/event contracts | API-only adapter or intact service. | High for client/shape scaffolding; low for OAuth/side effects. | Verified + local precedent / high |
| Event, CDC, or workflow engine | Debezium, Temporal | Keep infrastructure outside UI block; expose a stable port. | High for generated plumbing; low for consistency semantics. | Verified / medium |
| Package/build/tooling | pnpm, Changesets, Bit, source-package verifier | Workspace package with lockfile, SBOM, release and receipt. | High for packaging and release automation. | Verified + local precedent / high |
| Agent runtime or research tool | siso-stargate, Great Library agent/work schemas | Treat as capability/work with evidence and ownership, not UI block. | High for registry/provenance, low for arbitrary application extraction. | Local precedent / high |
| Asset/font/icon/media corpus | design-schema, siso-ui-base palettes/visual bundles | Review/approve and map metadata separately from executable code. | Moderate for metadata and visual comparison; low for rights/meaning. | Local precedent / high |
| Polyglot server, native/mobile, WASM, ML, CMS, IaC, shell | No complete bounded sweep in this programme. | Reference-only until the target ecosystem is explicitly admitted. | Unknown. | Unsearched / unknown |

### Primary evidence register

The primary evidence base is intentionally split into mechanism evidence and
local precedent:

| Evidence family | Primary sources read | Claim supported |
|---|---|---|
| Registries and packages | [shadcn registry](https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/registry.md), [Bit](https://github.com/teambit/bit), [pnpm workspaces](https://pnpm.io/workspaces), [Changesets](https://github.com/changesets/changesets) | Installable file/dependency manifests, component lifecycle, workspace composition, and release versioning are proven mechanisms. |
| Source transformation | [jscodeshift](https://github.com/facebook/jscodeshift), [ast-grep](https://github.com/ast-grep/ast-grep), [ts-morph](https://github.com/dsherret/ts-morph), [OpenRewrite](https://github.com/openrewrite/rewrite), [LibCST](https://github.com/Instagram/LibCST), [Roslyn](https://github.com/dotnet/roslyn), [Go tools](https://github.com/golang/tools) | Narrow language-aware edits are proven; semantic conversion is not. |
| Tokens and visual scaffold | [DTCG](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/), [Style Dictionary](https://github.com/style-dictionary/style-dictionary), [Tailwind theme](https://tailwindcss.com/docs/theme), [Screenshot to Code](https://github.com/abi/screenshot-to-code), [FigmaToCode](https://github.com/bernaferrari/FigmaToCode) | Token exchange/build and visual scaffolding are proven; semantic behavior extraction is not. |
| Postgres and data | [PostgreSQL schemas](https://www.postgresql.org/docs/current/ddl-schemas.html), [information schema](https://www.postgresql.org/docs/current/information-schema.html), [privileges](https://www.postgresql.org/docs/current/ddl-priv.html), [RLS](https://www.postgresql.org/docs/current/ddl-rowsecurity.html), [constraints](https://www.postgresql.org/docs/current/ddl-constraints.html), [Drizzle existing Postgres](https://orm.drizzle.team/docs/get-started/postgresql-existing), [Refine provider](https://refine.dev/core/docs/data-fetching/data-provider-interface/) | Namespaces, privileges, RLS, constraints, introspection, migrations, and provider ports exist; domain normalization remains a review problem. |
| Contracts and proof | [OpenAPI](https://spec.openapis.org/oas/latest.html), [Pact](https://docs.pact.io/), [JSON Schema](https://json-schema.org/specification), [Ajv](https://github.com/ajv-validator/ajv), [Playwright snapshots](https://playwright.dev/docs/test-snapshots), [Storybook testing](https://storybook.js.org/docs/writing-tests) | Machine-readable shape, consumer/provider, UI-state, and visual gates are proven mechanisms. |
| Provenance and supply chain | [Choose a License no-license guidance](https://choosealicense.com/no-permission/), [ScanCode](https://github.com/aboutcode-org/scancode-toolkit), [ORT](https://github.com/oss-review-toolkit/ort), [SPDX](https://github.com/spdx/license-list-XML), [in-toto](https://github.com/in-toto/in-toto), [SLSA provenance](https://github.com/slsa-framework/slsa/blob/main/spec/build-provenance.md) | License/provenance/SBOM/attestation mechanisms exist; automated output is not legal approval. |
| Local framework evidence | siso-ui-base; AutoSaaS harvest and persistence documents; Great Library schemas and registry model; Action Model block schema; SISOCRM module/transplant/theming contracts; instatic receipts; design-schema review JSON | The laptop has partial, real governance, visual, integration, provenance, and verification building blocks. | Local pieces have not been proven as one arbitrary-code-to-block pipeline. |

### Explicit unknowns and non-claims

| Unknown or non-claim | Why it remains unknown | Impact |
|---|---|---|
| No tool in the inspected primary sources claims reliable repository-to-reusable-block conversion across UI, domain, data, integration, and operations. | The tools document bounded transforms, packaging, or scaffolding, not universal intent preservation. | Treat arbitrary conversion as a hypothesis, never as a capability promise. |
| No conversion-yield, time, defect, or rollback benchmark exists for the local corpus. | No candidate has passed the full Action Model pipeline. | The first pilot must measure yield and failure reasons rather than assume a ratio. |
| Actionist’s final host stack, auth model, tenant model, and production Postgres ownership are not fixed by this report. | The current repository has a v0 contract and groundwork, not a live build decision. | Do not choose tenant/database/migration strategy beyond a disposable fixture. |
| No local or primary evidence proves automatic semantic-token extraction from arbitrary CSS, screenshots, or compiled bundles. | Existing token systems start from known variables or human-approved mappings. | Unresolved token mappings are a hard stop. |
| No local or primary evidence proves automatic domain-equivalence mapping. | Field names and CRUD shapes do not establish business invariants or authorization. | Domain/data adaptation requires owner review and fixtures. |
| No universal Postgres adapter can be inferred from “Postgres-compatible” donors. | Tenancy, ownership, RLS, migrations, triggers, extensions, and transaction semantics differ. | Start read-only and adapter-first; reject guessed writes. |
| No automated license scan is legal clearance. | SPDX detection and policy tooling can miss context, generated files, dual licensing, or obligations. | A named provenance/legal owner remains a gate. |
| No production signing key, deployment trust root, or rollback authority is established. | This was read-only research with no credentials or services. | Keep attestations/receipts local to the pilot until ownership exists. |
| The candidate ledgers are not exhaustive of GitHub, local disks, or all source classes. | This programme uses bounded source families and existing local corpora. | Follow-on sweeps must state caps and stop conditions. |

### Bounded follow-on sweeps for the gaps

These are research options, not approvals to build or to use credentials. Each
sweep should remain read-only and return a compact ledger with URLs, commits,
license findings, exact capability, limitations, and confidence.

| Sweep | Scope cap | Required output | Stop condition |
|---|---|---|---|
| S1 — polyglot transformation | At most 3 primary tools each for Rust, Ruby, PHP, Swift/Objective-C, Kotlin/Android, SQL/GraphQL, HCL/IaC, WASM/ML/CMS. | Language, AST/CST availability, fixture/dry-run support, license, supported transform class, and cross-language boundary. | Stop after the cap or when no tool supports bounded source transformation with tests. |
| S2 — source-class candidate map | At most 5 repositories per class, with no more than 2 deep source reads per class; include one permissive and one reference-only case where available. | Class-to-mode matrix: intact, extract, adapter, reference-only, reject; pinned source and evidence. | Stop when every class has a decision rule, not when every repository is catalogued. |
| S3 — Postgres normalization | At most 3 primary sources per model: read-only, owned namespace, shared RLS, schema-per-tenant, database-per-tenant, API-only, CDC/read-model. No live database. | Capability and failure matrix, role/privilege/RLS implications, migration/rollback notes, adapter contract fixture shape. | Stop when the first pilot’s data mode is bounded; defer multi-model comparison. |
| S4 — token interoperability | At most 10 primary/official sources across DTCG, Style Dictionary, Tokens Studio, Figma, Tailwind, MUI, Chakra, CSS, and two additional libraries. | Token field/alias/type/condition/export mapping and unresolved conversion cases. | Stop when a DTCG-subset-to-CSS-vars contract can be written without guessing. |
| S5 — registry and packaging | At most 12 primary registries/package systems, including shadcn, Bit, pnpm/Changesets, OCI, npm, Maven, NuGet, PyPI, and one polyglot artifact store. | Installability, provenance, dependency, version, ownership, and rollback comparison. | Stop when pnpm + registry item + Changesets is sufficient for the JS/TS pilot. |
| S6 — contract and proof | At most 3 primary tools per gate family: schema, API, consumer/provider, DOM, unit, visual, accessibility, security, and supply-chain. | Minimal gate stack with false-positive/false-negative notes. | Stop when each pilot acceptance criterion has one machine-readable receipt. |
| S7 — compliance and provenance | At most 10 primary tools/specifications across license, SBOM, copyright, attestation, CODEOWNERS, and dependency health. | Per-file/package provenance schema and human review obligations. | Stop when an admitted/rejected decision can be reconstructed from receipts. |
| S8 — three-candidate deep dive | Select 3 source candidates only after S2: one UI-only, one read-only CRUD/data slice, one integration or workflow slice. Static inspection only; no services or credentials. | Full dossier against the proposed contract, estimated adaptation stages, blockers, and a measured go/reference/reject verdict. | Stop at the first candidate that demonstrates the same failure mode twice; record the failure rather than widening the corpus. |

The programme should not call the ledger exhaustive unless a separate
coverage protocol defines the population, search surface, date, deduplication,
and saturation rule. This report does not make that claim.

## Final recommendation: smallest first-pilot framework

### Recommendation in one sentence

Pilot one pinned, permissively licensed JavaScript/TypeScript UI or read-only
CRUD slice as a versioned package, with a DTCG-subset token map, a domain port
bound to a read-only Postgres adapter over a disposable fixture, and
manifest/provenance/contract/build/visual gates. Do not start with a whole
application, a write path, an auth transplant, a live donor database, or a
harvested compiled bundle.

This is a research recommendation and a bounded hypothesis. It is not approval
to build, select a donor, provision Postgres, or use credentials.

### Pilot selection rule

Choose the first candidate only if all of these are true before adaptation:

| Requirement | Pilot interpretation |
|---|---|
| Source class | One UI-heavy component/page or a narrow read-only CRUD surface; no cross-application runtime required. |
| Source identity | Canonical repository URL, exact commit or tag, selected source paths, package manager, lockfile, and local materialization digest. |
| Rights | Explicit license and copyright/notice material; dependency closure is scanned. Missing or contradictory rights means reference-only or reject. |
| Behavior | At least one deterministic fixture and one observable user outcome. Pure visual similarity alone is insufficient. |
| Data | Either no persistence or one narrow read-only Postgres query. No production writes, destructive migration, external side effect, or secret-dependent path. |
| Host | Compatible with the known Action Model pilot host, or the incompatibility can be expressed as an adapter/port without changing business meaning. |
| Tokens | Styles can be mapped to reviewed semantic slots, or the candidate is explicitly rejected as reference-only. |
| Ownership | A maintainer, design reviewer, data owner, provenance/legal reviewer, and rollback owner are named before admission. |

The siso-ui-base corpus can provide visual precedent and candidate discovery,
but a compiled 21st.dev harvest bundle is not automatically an eligible source
block. The first source must be a rights-reviewable repository or a
first-party/local source whose file scope and adaptation history can be
preserved.

### Minimal artifact envelope

Use one small pnpm workspace package and one registry item rather than adding a
new platform:

| Artifact | Minimum contents |
|---|---|
| Block manifest | Stable id/version/status; source URL/commit/paths; extraction mode; host/runtime; dependencies; ports; routes/components; token inputs/outputs; data mode/schema/tables/sensitivity; proof commands; owner and rollback. |
| Registry item | Installable target files and dependencies in the shadcn-style shape, with the block manifest referenced as the admission dossier. |
| Token package | DTCG-subset source, semantic token map, CSS-variable output, light/dark/state coverage, unresolved mapping list, and approval receipt. |
| Adapter package | Domain port, Postgres implementation or API provider, schema/table allowlist, role assumptions, fixtures, error model, and contract tests. |
| Proof receipts | JSON results containing source commit, package lock hash, tool versions, command, environment fingerprint, exit status, and artifact links. |
| Release record | Changeset/semver intent, attribution/notices, SBOM/license reports, CODEOWNERS/owner references, and status transition. |

The current Action Model block contract is the starting point, not a reason to
invent a broad schema. Add only the fields required to make the first dossier
and its receipts reconstructable. Great Library’s stable work/release/source
inventory concepts should inform identity and provenance, while SISOCRM’s
module manifest supplies useful host/context/verification vocabulary.

### Recommended staged pilot

| Stage | Action | Exit evidence | Automatic stop |
|---|---|---|---|
| 0. Inventory and rights | Read the source, dependency graph, package scripts, env references, routes, data calls, styles, tests, and notices. Record exact paths and classify whole/extract/reimplement/reference-only/reject. | Inventory, license/SBOM report, source digest, candidate dossier. | Unlicensed/contradictory source, unpinned network code, secret dependence, or unbounded scope. |
| 1. Freeze a smallest slice | Copy or materialize only the chosen files and fixtures into an isolated package. Preserve the donor test/build context long enough to establish a baseline. | Baseline build/test/screenshot receipt and source-to-slice map. | Baseline cannot be reproduced or the slice depends on undeclared global runtime state. |
| 2. Define ports | Write the smallest input/output contract before changing implementation. Keep UI/domain code ignorant of Drizzle, SQL, auth, or vendor SDKs. | Typed port, fixture schema, error model, and call-site map. | Port requires guessing business invariants, tenant identity, or source-of-truth. |
| 3. Apply bounded transforms | Use AST/CST tools only for known imports, identifiers, props, wrappers, and token references. Run fixtures, dry-run diffs, typecheck, and review each transform. | Recipe, fixtures, diff budget, and transformed-source receipt. | A transform changes control flow/state semantics, produces broad uncertain diffs, or loses tests. |
| 4. Normalize tokens | Map known donor primitives to host semantic tokens; emit CSS variables; test light/dark/hover/focus/disabled/loading/empty states. Use a scoped bridge and convert formats such as HSL/RGB explicitly. | DTCG source, generated output, mapping confidence, screenshots, and human design approval. | Any material hard-coded value or unresolved state remains without an owner-approved exception. |
| 5. Bind read-only data | Start with one read-only Postgres query against a disposable fixture or use an API-only provider. Introspect with information schema plus required Postgres catalogs; use a read-only role and qualified names. | Adapter contract tests, table/column allowlist, role/privilege receipt, fixture seed, and negative access tests. | Automatic table/field matching, unknown table access, unreviewed tenant behavior, or any write/migration need in the first pilot. |
| 6. Package and register | Add the registry item, workspace dependency, Changeset, attribution, SBOM, and immutable dossier. | Clean-install receipt, package digest, registry validation, owner assignment. | Package works only from a dirty workspace, uses undeclared files/env vars, or cannot be withdrawn. |
| 7. Prove and review | Run manifest, rights, static boundary, codemod, unit/schema/DOM/invariant, adapter, build/smoke, and visual gates. Review the dossier independently. | All required receipts plus a human admission decision. | Any hard gate fails; classify as reference-only, quarantine, or reject with reason. |

### Postgres adapter approach

The first data-bearing pilot should use this shape:

| Boundary | Recommendation |
|---|---|
| UI/domain dependency | UI calls a typed domain port such as CatalogReader or DashboardMetricsReader. It never imports Drizzle, SQL, a Postgres client, or a donor ORM. |
| Adapter implementation | Drizzle or a small SQL client is permitted only inside the adapter package. The ORM is replaceable implementation detail, not the block contract. |
| Data mode | read_only_external for the first data-bearing slice. If the slice has no data need, use none and do not add fake persistence merely to exercise the framework. |
| Introspection | Inspect information_schema and the necessary Postgres system catalogs; map only declared columns used by the port. Preserve nullability, keys, constraints, enums, and timestamp/transaction assumptions. |
| Role and namespace | Use a dedicated read-only role, explicit schema-qualified names, and a table/column allowlist. Do not depend on an unreviewed search_path. |
| Tenant and sensitivity | Mark every selected field as public/internal/confidential/PII or unknown; require an explicit tenant key/RLS decision if rows are tenant-scoped. A tenant_id column without policy tests is not isolation. |
| Writes | No writes in the first pilot. A later owned_postgres mode requires a named table owner, migration receipt, authorization context, idempotency, transaction boundary, and compensation/rollback plan. |
| Existing donor ORM | Keep the donor ORM behind the adapter or reimplement the port. Do not use a codemod to replace ORM calls globally and assume semantic equivalence. |
| API fallback | If direct Postgres access is not justified, bind the same port to an approved PostgREST/Hasura/host API provider and keep the database outside the block. |

The first adapter test set should include: allowed read succeeds; unknown
table/column access is denied; malformed/null data is handled according to the
port; empty result is a valid state; tenant context cannot be omitted where it
is required; and the adapter cannot issue a write under its configured role.
These tests demonstrate a boundary, not production database readiness.

### Token layer

Use the smallest interoperable token layer:

1. Author a DTCG-subset source with type, value, description, and aliases only
   where the alias is explicit.
2. Keep primitive tokens separate from semantic tokens such as surface,
   content, border, action, focus, danger, density, and radius.
3. Emit CSS custom properties through Style Dictionary or an equivalent
   deterministic build. Scope donor variables to the block/container.
4. Store a mapping entry for each consumed token with source value, target
   semantic slot, confidence, transform, and reviewer.
5. Test alternate themes and interaction states, not just the default screenshot.
6. Treat computed-style inspection as evidence for a candidate mapping, not an
   automatic semantic decision.

The local Teable bridge supplies the correct first-pass visual rule: preserve
current appearance before convergence, convert HSL/RGB formats rather than
aliasing incompatible values, scope variables to the native mount, and prove
light/dark behavior. It should be reused as a review pattern, not copied as a
universal token extractor.

### Test and admission gate stack

The smallest sufficient gate stack is:

| Gate | Receipt |
|---|---|
| Manifest/schema | JSON Schema/Ajv validation of the block dossier and registry item. |
| Rights/provenance | Source commit/path map, attribution, ScanCode/ORT/SPDX output, dependency/SBOM report, and human rights decision. |
| Static boundary | Forbidden imports, undeclared env vars, undeclared paths/tables, hard-coded token scan, secret scan, and package-scope check. |
| Transform safety | AST/CST recipe fixtures, dry-run diff, typecheck, and a bounded changed-file/line budget. |
| Domain/data | Unit tests for pure logic; adapter contract tests; disposable Postgres or provider fixture; negative privilege/tenant/write tests. |
| UI contract | Fixture schema, DOM verification attributes or equivalent stable surface, invariants, accessibility checks where available. |
| Build/runtime | Clean install, lockfile, typecheck, build, route/smoke, and recovery/error-state evidence. |
| Visual | Storybook isolated states plus Playwright screenshots under pinned browser/OS/font/viewport conditions. |
| Human admission | Independent review of source scope, diff, tokens, data map, receipts, residual risks, owner, and rollback. |

The gate is conjunctive for hard requirements. A quality score can prioritize
eligible candidates, but it cannot override a failed rights, reproducibility,
data-safety, or ownership gate.

### Ownership and rollback

Assign four distinct responsibilities even if one person temporarily holds
more than one:

| Role | Responsibility |
|---|---|
| Block maintainer | Package, source-diff, dependency, compatibility, and deprecation decisions. |
| Design owner | Token map, states, screenshots, accessibility/visual acceptance, and theme changes. |
| Data owner | Table/column ownership, sensitivity, tenant/RLS, adapter queries, migration and recovery policy. |
| Provenance/release owner | License notices, SBOM/attestation, release manifest, CODEOWNERS, and admission/revocation record. |

Use statuses candidate → admitted → deprecated → revoked/rejected, retaining the
last good manifest and all receipts. The pilot has no production migration, so
rollback is a package/version rollback plus removal of the registry reference.
If a later write-capable block is admitted, use expand/contract migrations,
forward repair or compensating migrations, a tested restore point, and explicit
data-owner approval; do not rely on an automatic down migration to recover
business data.

The safest first release structure is an isolated branch/worktree and a
versioned package. The host can revert to the previous package artifact while
the candidate is marked revoked. Existing consumers should not silently receive
an adapted source change; semver and a new release record are required.

### Acceptance and rejection decision

Admit the first candidate only when one clean checkout can reconstruct the
source slice, package, token outputs, adapter fixture, and all required receipts
from the pinned commit. The candidate must demonstrate at least one meaningful
user outcome, at least one alternate visual state, no undeclared data access,
and a named owner/rollback path.

Reject or quarantine when:

- source identity, license, notices, or dependency closure cannot be reconstructed;
- the candidate is only a screenshot, compiled harvest, or visual reference but
  is being presented as executable behavior;
- a codemod would need to infer business meaning or rewrite untested control flow;
- token mapping leaves material hard-coded values or unresolved state behavior;
- data access guesses tables/fields, crosses an unknown tenant boundary, or
  requires a write/migration not covered by a named owner;
- the block depends on global auth/routing/runtime state that cannot be expressed
  as a port;
- the adapter has no negative tests for unauthorized, empty, malformed, or
  cross-tenant behavior;
- package/build/visual/contract evidence is missing, nondeterministic, or
  reproducible only from a dirty workspace;
- no maintainer can withdraw the block or restore the last known-good package.

Reference-only is a successful classification for useful source that fails an
eligibility gate. Preserve its URL, commit, license finding, screenshots,
behavior notes, and reimplementation brief without copying executable files.

### What the first pilot should measure

Do not measure success as “the generated page looks close.” Record:

- percentage of source files that remained untouched, changed mechanically, or
  required human rewrite;
- number and category of unresolved token mappings;
- number of domain/data fields requiring manual semantic decisions;
- number of undeclared dependencies, env vars, tables, and side effects found;
- time from source freeze to reproducible package;
- defect count from fixture, adapter, visual, and independent review gates;
- whether revocation and package rollback were rehearsed successfully;
- which rejection reason occurred first for ineligible material.

These measurements turn the programme into an evidence-backed conversion
experiment. Until they exist, claims about savings, automation percentage, or
general conversion yield are speculative.

### Final evidence verdict

Proven separately: installable registry items, workspaces and versioning,
bounded AST/CST edits, token format/build transforms, Postgres namespaces and
privileges/RLS/constraints, API/data-provider contracts, visual baselines, and
provenance/SBOM/attestation tooling. Proven locally in parts: visual harvest and
judgment, source intake, provenance/release records, module integration
contracts, token bridges, and deterministic verification receipts.

Speculative as a composition: a single pipeline that takes arbitrary code,
extracts a semantically correct block, maps its tokens, normalizes its data
through Postgres, and preserves domain/integration/operations behavior without
human decisions. The report recommends testing that composition on one narrow
read-only candidate; it does not claim the composition already works.

**Final recommendation:** proceed only with a bounded, read-only,
permissively licensed UI/CRUD pilot when a separate build decision is made.
Keep all other source classes reference-only or in the next bounded sweep until
the pilot produces receipts and a measured failure/success profile.
