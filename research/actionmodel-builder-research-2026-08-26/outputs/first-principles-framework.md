# Action Model Builder — first-principles framework

**Lane:** `RCH-FIRST-PRINCIPLES`  
**Run:** `actionmodel-builder-research-2026-08-26`  
**Mode:** research and ideation only; no implementation or admission authorized  
**Observed:** 2026-08-26 (ICT)  
**Evidence classes:** `E` = directly inspected primary source, repository artifact, or local report; `D` = documented first-party claim not independently authenticated; `I` = inference from multiple evidence points; `U` = unknown or unverified.

## Executive verdict

The problem is not “make an AI generate an app.” It is:

> Convert a client outcome into a bounded, tenant-safe workflow; find or derive reusable software; bind it to declared data, UI, action, and host contracts; prove it in an isolated environment; obtain authority to release it; and leave enough evidence to reproduce, repair, price, and roll it back.

The atomic unit is therefore a **solution atom**, not an industry, repository, prompt, or component:

```text
outcome + trigger + source state + observation + decision + side effect
  + authority/approval + verification + recovery + audit evidence
```

The reusable code unit is a **Block Contract**: a versioned artifact with pinned provenance, license and dependency evidence, explicit host/data/UI/action ports, adaptation history, machine-readable proof, owner, and rollback boundary. The current local `design/block-contract.schema.json` is a useful v0 shape, but it is not evidence that any block is safe or composable. The current corpus and synthesis lanes report **zero admitted blocks**; Horizon is a held conversion candidate, not a usable dependency (`E`: `research/actionmodel-long-run/outputs/corpus/CURRENT.md`, observed 2026-08-26).

The strongest current strategic position is a **scoped governed builder**: one known Actionist data/deployment boundary, a small set of permissively licensed dashboard/workflow archetypes, read-only or approval-gated first pilots, and cheap models restricted to retrieval, structured edits, and repair inside a known scaffold. This is an `I`, not a product fact. Actionist’s authenticated API, auth, data, deployment, tenant, approval, and token contracts remain `U` (`E`: `research/actionmodel-long-run/outputs/platforms/CURRENT.md`; `E`: `research/actionmodel-long-run/outputs/verticals/CURRENT.md`).

### Decisions this document makes

1. **Standardize contracts before scaling the corpus.** A large repository inventory without executable boundaries is discovery data, not a library.
2. **Separate build, evidence, and operation planes.** A UI builder, a code sandbox, and an agent operating an existing application are different capabilities.
3. **Treat evidence as a release input.** Provenance, license metadata, SBOMs, build attestations, tests, visual proof, authority, and rollback are separate receipts.
4. **Make cheap-model capability an experiment.** “MiniMax-class is enough” is a hypothesis with a 20-task falsifier, not an architectural assumption.
5. **Start with a synthetic, read-only, operations-style dashboard atom.** Operations is the safer provisional sandbox in the local vertical analysis; this does not authorize a client pilot.

### Decisions this document does not make

- It does not claim the Actionist platform can host, deploy, authenticate, or operate the proposed builder.
- It does not claim the external 850k/80k corpus scale; the local project record says the data plane is unreachable and the figures are unverified (`E`: `PROJECT.md`).
- It does not admit Horizon, any GitHub repository, any vendor, or any generated output.
- It does not settle GPL/AGPL legal interpretation, Action Model ownership, or commercial pricing.
- It does not recommend an incumbent or assume that an incumbent lacks a capability without an authenticated test.

## 1. Scope, method, and evidence boundary

### 1.1 Research inputs inspected

| Input | Class | What it contributes | Boundary |
|---|---:|---|---|
| `research/actionmodel-builder-research-2026-08-26/PROGRAM.md` | E | Lane tasks, evidence classes, output and callback contract | Program instruction, not capability evidence |
| `research/actionmodel-long-run/outputs/synthesis/CURRENT.md` and `decision-ledger.md` | E | Cross-lane verdicts, held gates, unresolved contradictions | Peer-lane synthesis; claims remain bounded by cited evidence |
| `research/actionmodel-long-run/outputs/corpus/CURRENT.md` | E | 389-record inventory, 114 held, zero accepted; admission gaps | Discovery and review receipts, not admitted code |
| `research/actionmodel-long-run/outputs/platforms/CURRENT.md` | E | Vendor/platform comparison and zero authenticated dossiers | Documented platform surfaces, not live Actionist capability |
| `research/actionmodel-long-run/outputs/verticals/CURRENT.md` | E | 17/12/66/72 catalogue, atoms, provisional pilot priorities | Demand evidence; mappings are inferred/unverified |
| `design/BLOCK-FRAMEWORK.md` and `design/block-contract.schema.json` | E | Existing block shape, normalization stages, schema v0 | Draft contract; no executed conversion |
| `design/BUILDER-DESIGN.md` and `design/PRINCIPLES.md` | E | Assembly, interstitial retrieval, image-first design, guide-agent hypotheses | Design hypotheses; no benchmark receipt |
| Builder Research `research-synthesis.md` and `reusable-block-framework-report.md` | E | Prior decomposition, reusable-block gates, unowned research gaps | Durable research packets; no implementation authorization |
| Official standards/docs and primary papers listed in §13 | E | Normative mechanisms and empirical constraints | Standards do not prove semantic correctness or legal clearance |

### 1.2 What counts as evidence

- `E` may support a narrow statement about an inspected artifact, source, or test result.
- `D` supports what a first party says its product or standard does; it is not authentication of a live tenant capability.
- `I` is a design inference. It must be labelled and paired with a falsifier.
- `U` is not a basis for a client-facing claim, admission, or budget.

Search snippets, star counts, marketing pages, a valid JSON instance, a green unit test, or a pane status alone are insufficient for admission. A candidate becomes useful only when the required receipts are present and tied to a pinned source and environment.

## 2. First-principles problem tree

### 2.1 The irreducible system

```text
Client outcome
└── Solution atom
    ├── Demand identity: who, job, trigger, outcome metric
    ├── State identity: source of truth, entities, current state
    ├── Decision: rules, model inference, human authority
    ├── Side effect: write, message, deployment, external action
    ├── Verification: expected post-condition and evidence
    ├── Recovery: retry, compensation, rollback, escalation
    └── Audit: actor, inputs, decision, action, result, timestamp

Builder system
├── Understand: elicitation → confirmed structured spec
├── Discover: niche/atom → candidate sources and references
├── Govern: provenance, license, dependency and tenant policy
├── Transform: extract → normalize → adapt through typed ports
├── Compose: resolve blocks under a host contract
├── Ground: bind data, auth, tokens, actions and deployment
├── Prove: static, contract, build, browser, visual and security receipts
├── Authorize: approval, ownership, release and rollback
└── Operate: run the finished tool under the same authority plane
```

### 2.2 Atomic capability inventory

These are capabilities, not UI features. A feature can be removed or changed while its underlying contract remains necessary.

| ID | Atomic capability | Required input | Required output | Owner for a pilot | Evidence gate / stop condition |
|---|---|---|---|---|---|
| C01 | Demand normalization | Catalogue card, interview, or task | One solution-atom record with job, trigger, outcome, authority and recovery | Product/research | Atom is not admitted if source of truth, side effect, or outcome metric is missing |
| C02 | Requirement elicitation | User language plus unknowns | Confirmed `BuildSession` spec with assumptions labelled | Guide-agent owner | Stop if confirmation cannot resolve the tenant, data, or authority boundary |
| C03 | Candidate discovery | Atom plus capability queries | Dedupe-ranked source candidates and reference-only examples | Corpus owner | Stop if result is only a marketing phrase, unpinned repo, or unsupported similarity |
| C04 | Context/retrieval packaging | Candidate set, contract, clean context budget | Small evidence pack with files, symbols, license state, and reason for inclusion | Retrieval owner | Stop if untrusted source prose can be interpreted as instructions or if license state is unknown |
| C05 | Provenance and license analysis | URL, commit, files, dependencies | Source digest, copyright, SPDX expression/unknown, SBOM and policy verdict | Supply-chain owner | Quarantine on ambiguous, missing, incompatible, or source-available license; no inference-based clearance |
| C06 | Boundary extraction | Pinned source and target slice | File-scoped block candidate with explicit imports/exports and removed app wiring | Transformation owner | Stop if extraction scope cannot be stated or touches undeclared secrets/data/action paths |
| C07 | Structured transformation | Candidate plus target contract | Typed/codemod diff, adaptation log, fixture results | Transformation owner | Stop/escalate when semantic business rules or authorization behavior require free-form invention |
| C08 | Contract binding | Host, data, auth, API, token and action contracts | Valid manifest plus provider/consumer contract tests | Integration owner | Stop if a port is implicit, provider-specific, or untestable in a disposable fixture |
| C09 | Composition | Admitted blocks and compatible stack contracts | Deterministic assembly plan and bounded glue diff | Assembler owner | Stop on conflicting table ownership, runtime, tokens, env vars, routes, or side effects |
| C10 | Isolated execution | Assembly, fixture, network policy | Reproducible sandbox run, logs, preview and resource receipt | Execution owner | Stop on cross-tenant access, uncontrolled egress, secret exposure, or non-reproducible environment |
| C11 | Verification | Candidate artifact and acceptance tests | Machine-readable build, static, contract, browser, visual and security receipts | QA/evidence owner | No release on any required gate failure; repair rounds are capped |
| C12 | Authority and recovery | Action plan, actor, approval policy | Approval event, idempotency key, audit record, rollback/compensation plan | Client/platform owner | No external side effect or deploy without named authority and tested recovery boundary |
| C13 | Release and tenancy | Verified artifact, owner, domain/deploy contract | Versioned release, tenant binding, deployment receipt, rollback pointer | Platform owner | Stop if preview and production paths are conflated or tenant ownership is unknown |
| C14 | Operation | Released tool plus typed actions | Agent/human action trace, post-condition check, escalation | Operations owner | Read-only first; stop on action ambiguity, missing approval, or unverifiable result |
| C15 | Model routing | Task type, evidence pack, budget | Model choice, prompt/context receipt, token and repair metrics | Model-eval owner | Stop using cheap model for a task class whose held-out pass rate fails the pre-registered threshold |
| C16 | Economics | Usage telemetry, labor, hosting, risk and price | Cost per successful build/operation and sensitivity bands | Commercial owner | Stop if cost is computed per attempt rather than per successful outcome, or if margin floor fails |

### 2.3 Necessary contracts versus product features

| Necessary contract | Product feature that may expose it | Why the contract survives feature changes |
|---|---|---|
| Source/provenance | “Import from GitHub” | The system must know what it used even if discovery comes from a private index or human upload |
| Host/runtime | “Choose a template” | Composition requires compatible runtime, package, build and deployment assumptions |
| Data/tenant | “Connect your database” | Reads, writes, tenant isolation, migration ownership and rollback are safety boundaries |
| UI/token | “Pick a theme” or image mockup | A block must render under a host theme without hardcoded visual assumptions |
| Action/authority | “Let the agent do it” | A button, workflow node, browser action and API call all need permission, idempotency and approval semantics |
| Evidence/release | “Preview” or “Publish” | Preview is not production; a green build is not proof of policy, visuals, ownership or rollback |
| Economics | “Fast/cheap” | Unit economics depend on successful outcomes and repair/review burden, not only model price |

## 3. Standardized Block Contract

### 3.1 Normative definition

A **Block Contract** is a versioned, installable unit that declares what it is, where it came from, what it assumes, what it provides, what it can do, and what proof is required before release. It may be a scaffold, feature, component, theme, integration, or schema pattern. A repository is never itself a block.

The v0 draft at `design/block-contract.schema.json` requires `id`, `kind`, `provenance`, `stack_contract`, `provides`, and `eval`. The research conclusion is that v1 should add the following contract families before the first admitted pilot:

```yaml
block:
  id: namespace/name@semver
  kind: scaffold | feature | component | theme | integration | schema-pattern
  status: discovered | candidate | quarantined | converting | proof_pending |
          admitted | released | deprecated | rejected

  provenance:
    source_url: https-url
    commit_sha: sha
    source_digest: sha256
    observed_at: date
    license_expression: SPDX-expression | unknown
    copyright_notices: preserved-text
    dependency_sbom: SPDX-or-CycloneDX-reference
    source_attestations: in-toto/SLSA references
    adaptation_log: ordered transforms with tool versions
    legal_review: required | complete | not-required | unknown

  host_contract:
    runtime: [{name, version, package_manager}]
    build: {command, lockfile, expected_artifacts}
    deployment: {target, routes, env_policy, preview_vs_prod}
    static_boundaries: {allowed_files, forbidden_imports, allowed_egress}

  data_contract:
    mode: ui_only | read_only_external | owned_postgres | api_only
    dialect: postgres | none | provider_api
    orm: drizzle | prisma | none
    tables_read: [qualified-name]
    tables_owned: [qualified-name]
    tenant_key: field | none | unknown
    auth_context: interface-id
    migration_policy: none | expand_contract | reviewed
    sensitivity: public | internal | confidential | regulated | unknown

  ui_contract:
    tokens_consumed: [DTCG-path]
    components: registry entries with file scope and dependencies
    routes: route, auth requirement, post-condition
    accessibility: required checks

  action_contract:
    capabilities: [{name, read_write, target, approval, idempotency, rollback}]
    interfaces_required: [auth, storage, billing, email, queue, ai, ...]
    external_effects: [none | message | payment | deploy | browser | ...]

  requires: [block-id@range]
  provides: {routes, components, adapters, migrations, events, env_vars}

  evidence:
    schema_valid: receipt
    source_license: receipt
    static_boundary: receipt
    transform_fixtures: receipt
    contract_tests: receipt
    build: receipt
    browser_smoke: receipt
    visual_baseline: receipt | not-applicable
    security_probe: receipt
    owner: principal
    rollback_pointer: release-or-db-snapshot
    human_admission: signed-decision
```

This is a research contract, not a schema edit. The first real hand conversion should produce the evidence needed to decide which fields are truly required and which are optional.

### 3.2 Contract map to existing standards

| Contract concern | Useful standard or mechanism | What it can establish | What it cannot establish |
|---|---|---|---|
| Manifest and receipts | [JSON Schema 2020-12](https://json-schema.org/specification) | Structural validity, required fields, machine-readable policy inputs | Semantic equivalence, authorization correctness, legal clearance |
| HTTP interface | [OpenAPI Specification](https://spec.openapis.org/oas/latest.html) | Language-independent description of HTTP operations and schemas | That a provider behaves correctly or that a consumer uses the right cases |
| Consumer/provider behavior | [Pact specification](https://github.com/pact-foundation/pact-specification) and [Pact docs](https://docs.pact.io/) | Executed interaction examples and provider verification | Whole-system correctness, negative fields not described, UI semantics |
| Agent/tool boundary | [MCP specification](https://modelcontextprotocol.io/specification/2025-11-25/basic) and [MCP authorization](https://modelcontextprotocol.io/specification/2025-03-26/basic/authorization) | Typed tool/resource protocol and an HTTP authorization flow when implemented | Safe intent, least privilege by itself, prompt-injection resistance |
| Design language | [DTCG Format Module 2025.10](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/) | Interoperable token data for themes and tools | That a raster image was faithfully or uniquely converted to tokens |
| License and BOM | [SPDX](https://spdx.dev/use/specifications/) and [SPDX license guidance](https://spdx.dev/learn/handling-license-info/) | Standard identifiers/expressions, component/license/copyright metadata, SBOM exchange | Legal interpretation; SPDX explicitly focuses on facts and makes no legal interpretations |
| Build provenance | [SLSA v1.2](https://slsa.dev/spec/v1.2/) | Increasing guarantees about how an artifact was built; provenance and builder identity | Source license clearance, semantic quality, tenant policy, or safe behavior |
| Supply-chain steps | [in-toto](https://in-toto.io/docs/getting-started/) | Authorized steps, materials/products, signed links and a verifiable chain | That the authorized step itself was well-designed or that code is bug-free |
| Artifact/runtime | [OCI Image Spec](https://specs.opencontainers.org/image-spec/?v=v1.1.1) | Portable image structure, manifests, layers and digests | Runtime isolation or application correctness |

### 3.3 Three unification rules and their limits

1. **Data:** prefer a declared Postgres boundary and typed domain ports. Default first pilot mode is `read_only_external`; no automatic table matching or migration generation. The local framework’s Postgres/adapter proposal is an `I` until a disposable fixture and Actionist contract exist.
2. **Design:** represent approved visual decisions as token data, preferably DTCG-shaped, and require blocks to consume token slots. Image-to-token fidelity is a research question; pixels do not uniquely determine typography, spacing, semantics, or interaction.
3. **Interfaces:** bind auth, billing, storage, email, queue, AI, and deployment through interfaces rather than provider SDKs in blocks. Interface shape reduces coupling; it does not remove the need for provider-specific contract tests.

## 4. Niche-to-code capability graph

### 4.1 Graph model

```text
Demand surface
  → solution atom
    → capability query bundle
      → source/repository/platform candidate
        → normalized block candidate
          → compatible host/data/UI/action contracts
            → workflow composition
              → verified client outcome
                → operating telemetry and economic result
```

Every edge carries:

```yaml
edge:
  from: node-id
  to: node-id
  relation: decomposes_to | candidate_for | implements | requires | verifies | operates
  evidence_class: E | D | I | U
  source: path-or-url
  observed_at: date
  confidence: observed | supported | inferred | unverified
  next_gate: discovery | direct_source_review | extract | build | smoke | security | reject
```

No edge may silently upgrade a catalogue card into an implemented capability, a repository candidate into a block, or a similar-code match into semantic reuse.

### 4.2 Provisional demand-to-code examples

These are research mappings, not implementation recommendations.

| Niche / surface | Atom | Candidate capability families | Current evidence | Required next gate |
|---|---|---|---|---|
| Operations / exception management | Read a known operational dataset, classify exceptions, present owner queue, record acknowledgement, report resolution | Read-model dashboard, table/filter UI, role-aware view, audit/event record | `E/I`: `research/actionmodel-long-run/outputs/verticals/CURRENT.md` identifies operations as the safer provisional sandbox and repeats intake → classify → exception → report | Direct-source review with synthetic fixtures; prove read-only adapter, tenant key, post-condition and audit receipt |
| CRM / lead handling | Capture/normalize lead, follow up or schedule, sync status, require approval for outbound action | CRUD/resource UI, contact/event schema, email/calendar adapter, approval queue | `E/I`: vertical lane scores CRM/lead highly but marks offers inferred/unverified | Identify Actionist source of truth and allowed writes; contract-test idempotency and outbound approval |
| Finance / document evidence | Ingest evidence, extract fields, reconcile against authoritative ledger, stage approval, audit result | Document parser reference, reconciliation state machine, approval/audit UI | `E/I`: finance lane narrows to staged evidence/reconciliation; client ledger remains authoritative; candidate OSS finance cores are not admitted | Jurisdiction, ledger authority, retention, approval delegation, and legal/license review before any write |

### 4.3 Graph quality tests

- **Coverage:** every selected pilot atom has at least one candidate block or an explicit gap node.
- **Traceability:** every candidate edge resolves to a source URL/commit or a first-party product observation.
- **Contract fit:** candidate and host contracts unify without undeclared imports, tables, tokens, env vars, or actions.
- **Evidence monotonicity:** discovery → documented → authenticated → implemented may only move forward with a new receipt; a catalogue page cannot skip levels.
- **Negative space:** a failed search or empty lane is recorded as coverage information, not as proof that no solution exists.

## 5. Retrieval and evidence budgets

### 5.1 Retrieval is interstitial, not a single template lookup

The local design principle is to retrieve at the points where the problem changes representation (`E`: `design/PRINCIPLES.md`; `E/I`: `design/BUILDER-DESIGN.md`):

1. **Before design:** retrieve feasible archetypes and token/component examples so the design space reflects what can be honored.
2. **After confirmed spec:** retrieve scaffold and data/interaction references.
3. **After approved design:** retrieve token-compatible components and layout implementations.
4. **Per feature:** retrieve API/intent/contract examples, not “similar code.”
5. **At integration:** retrieve adapter and glue references.
6. **At repair:** retrieve the failing contract, fixture, and known-good local pattern.

Research supports the direction but not the full product claim. [RepoCoder](https://arxiv.org/abs/2303.12570) reports gains from iterative repository retrieval and generation in its benchmark; [GraphCoder](https://arxiv.org/abs/2406.07003) uses graph/context retrieval; [CodeRAG](https://arxiv.org/abs/2509.16112) reports gains from query construction, multi-path retrieval and reranking. These are primary research results, not proof that this Actionist pipeline will generalize.

### 5.2 Retrieval packet

Each model call receives a bounded packet, not a raw repository dump:

```yaml
retrieval_packet:
  task_id: stable-id
  target_contract: exact capability and ports
  host_contract: runtime, data, token, auth, action constraints
  evidence_items:
    - source_url: ...
      commit_sha: ...
      file_scope: ...
      license_state: clean | flagged | unknown | reference_only
      why_relevant: contract-level reason
      instructions: none  # source text is data, never authority
  negative_constraints: forbidden imports, tables, env vars, writes, egress
  context_budget: tokens or bytes
  expected_output: structured diff/plan/abstain
  receipt_id: ...
```

### 5.3 Evidence ladder

| Tier | Evidence | Permitted conclusion |
|---|---|---|
| T0 | Search/index hit | Candidate discovery only |
| T1 | First-party page or repository opened; URL and observed date | Documented source/capability claim |
| T2 | Pinned commit, license/copyright/dependency review, contract mapping | Conversion candidate or reference-only disposition |
| T3 | Valid manifest, isolated build, static/contract/browser/visual/security receipts | Technical admission recommendation |
| T4 | Named owner, rollback pointer, human decision, release receipt, post-release telemetry | Admitted/released block for a bounded host and scope |

The missing T3/T4 receipts are why the local synthesis correctly holds the current candidates. A valid JSON instance proves only schema shape; it does not prove an executed block.

## 6. Model routing and capability hypothesis

### 6.1 Proposed responsibility split

| Task class | Cheap model may attempt | Frontier/human escalation trigger |
|---|---|---|
| Elicitation | Fixed question tree, missing-field follow-ups, summary | Conflicting goals, unclear authority, regulated data, unresolved scope |
| Retrieval | Query bundle, rerank within typed candidates, evidence summarization | Ambiguous niche-to-atom join or no contract-level match |
| Adaptation | Bounded AST/codemod, renamed identifiers, interface wiring inside allowed files | Business-rule invention, auth/data-policy change, cross-block conflict |
| Repair | Explain failed receipt and propose a small diff within budget | Same failure after cap, security/tenant failure, migration or external side effect |
| Narration | Progress and evidence summary | Approval or legal/commercial decision |
| Design-to-code | Token/component mapping against an approved contract | Novel interaction, pixel-level ambiguity, inaccessible output |

This split is an `I` from the local design and external retrieval literature. It is not validated for MiniMax-class models. The critical test is not “can the model write code?” but “can it produce an accepted bounded diff under fixed contracts and a repair cap?”

### 6.2 Model-eval pre-registration

Before the first run, record:

- model name, API/plan, date and temperature/settings;
- fixed scaffold commit and block candidate version;
- 20 task prompts, with at least five held out from prompt tuning;
- allowed files, forbidden files/imports/env vars/tables/actions;
- exact acceptance checks and repair-round cap;
- token, wall-clock, sandbox and reviewer budgets;
- baseline conditions: scratch generation and/or human-written reference;
- failure taxonomy: syntax, contract, data, visual, security, authority, cost.

## 7. Lifecycle state machine

```text
discovered
   ├─(source opened, reason recorded)→ candidate
   └─(duplicate/no relevance)→ rejected

candidate
   ├─(license/provenance/secret ambiguity)→ quarantined
   ├─(scope and contract fit)→ converting
   └─(not fit)→ reference_only or rejected

converting
   ├─(extraction/adaptation complete)→ proof_pending
   └─(semantic/authority boundary exceeded)→ quarantined

proof_pending
   ├─(schema/static/license/contract/build/smoke/visual/security pass)→ admission_review
   ├─(repair budget available)→ converting
   └─(required gate fails or evidence missing)→ held

admission_review
   ├─(named owner + rollback + human decision)→ admitted
   └─(decision withheld)→ held

admitted
   ├─(host binding + release receipt)→ released
   └─(new vulnerability/contract drift)→ deprecated or rollback

released
   ├─(verified replacement)→ released@next
   └─(rollback trigger)→ rollback_pending → prior_known_good
```

### State invariants

- `candidate` never enters a production build path.
- `quarantined` content may be summarized as reference evidence but may not be copied into a block.
- `admitted` means admitted for a named host/contract scope, not universally safe.
- Code rollback, database rollback/compensation, deployment rollback, credential revocation, and external side-effect recovery are separate objects; a Git revert is not a universal rollback.
- A failed proof receipt holds the state; it does not disappear after a later green run unless the new run is linked to a new source, environment, and decision.

## 8. Security and trust model

### 8.1 Trust zones

```text
Trusted control plane
  policy, registry, approvals, tenant identity, signing/attestation keys
        ↓ least-privilege, typed interfaces
Evidence plane
  retrieved source, licenses, SBOMs, attestations, fixtures, test receipts
        ↓ treated as untrusted data
Model plane
  cheap/frontier model prompts, outputs, diffs, repair proposals
        ↓ constrained write API
Execution plane
  ephemeral per-tenant sandbox, no production secrets, restricted egress
        ↓ verified artifact only
Preview/release/operation plane
  tenant app, deployment, browser/API actions, audit and rollback
```

### 8.2 Threats and controls

| Threat | Failure mode | Minimum control | Falsifying probe / stop condition |
|---|---|---|---|
| Direct/indirect prompt injection | Retrieved README, issue, fixture, email, or app content instructs the model to change policy or exfiltrate data | Treat all retrieved content as data; isolate instructions; allowlist tools/files; model output cannot grant authority | Injection corpus causes any forbidden file/action/egress: stop and hold |
| Tool poisoning / over-privileged agent | A tool description or result changes behavior or combines tools to leak data | Signed/approved tool registry, exact schemas, per-call policy, approval for writes, separate read/write identities | Canary secret crosses a tool boundary or unapproved action occurs: stop |
| Secret egress | Generated code, dependency install, logs, or browser action sends secrets out | No production secrets in build; short-lived scoped credentials; default-deny/allowlisted network; redact logs; egress monitor | Any canary token reaches non-allowlisted endpoint: zero-tolerance failure |
| Cross-tenant contamination | Files, caches, DB rows, embeddings, or model context cross tenants | Per-tenant namespaces/sandboxes/credentials; tenant key in every query; isolation test with sentinel data | Tenant A can observe or mutate tenant B sentinel: stop, reject architecture |
| Supply-chain/license laundering | Unlicensed, GPL/AGPL, malicious, or transitive code enters output without a receipt | Pinned source, SPDX expression/unknown state, SBOM, dependency scan, source-vs-reference partition, human legal gate | Any untracked file/dependency or false “clean” report: quarantine |
| Unsafe data/migration adaptation | Model rewrites business entities, RLS, migrations, or permissions incorrectly | Read-only first; typed domain ports; qualified tables; migration review; no automatic semantic matching | Fixture shows changed ownership, data loss, or policy bypass: no pilot |
| Preview/production confusion | Sandbox passes but deployment fails or exposes data | Separate preview and production contract tests; deployment receipt; DNS/tenant check; rollback pointer | Production smoke differs from preview contract: hold release |
| Unbounded consumption | Retry/model/sandbox loop consumes budget or creates denial of service | Token/time/concurrency/deploy limits; capped repair rounds; kill switch and budget telemetry | Any run exceeds a pre-registered cap without escalation: fail economics gate |
| Approval laundering | A conversation or voice acknowledgement is treated as authorization | Explicit approval event bound to artifact/hash/action; silence is not approval; audit actor and timestamp | Side effect occurs without an explicit valid approval: stop |

The threat selection follows [OWASP’s 2025 LLM risk guidance](https://genai.owasp.org/llm-top-10/), including prompt injection and excessive agency, and the [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework) functions Govern/Map/Measure/Manage. Build isolation should be treated as a layered control, not a vendor slogan: Firecracker describes microVM, process, seccomp, cgroup and namespace barriers ([design/threat containment](https://github.com/firecracker-microvm/firecracker/blob/main/docs/design.md)); Modal documents default sandbox network restrictions and gVisor isolation ([networking and security](https://modal.com/docs/guide/sandbox-networking)); Vercel documents ephemeral Firecracker-based sandboxes for untrusted or agent-generated code ([Sandbox docs](https://vercel.com/docs/sandbox)). These are documented mechanisms, not proof of the eventual Actionist deployment.

### 8.3 Security evidence rule

No security control is considered present because a vendor documents it or because a prompt says “do not leak secrets.” The pilot needs adversarial fixtures: canary secrets, tenant sentinels, malicious retrieved text, unapproved tools, forbidden imports, network destinations, and rollback actions. The result must be machine-readable and independently reviewed.

## 9. Evaluation and falsifiable claim ledger

Every load-bearing claim below has the required input, output, owner, evidence gate, falsifier, and stop condition. Thresholds are proposed pre-registration values, not observed results.

| Claim | Assumption | Required input | Observable output | Owner | Evidence gate | Falsifier | Stop condition |
|---|---|---|---|---|---|---|---|
| F01: Assembly from known scaffolds can beat scratch generation on bounded tasks | A compatible scaffold reduces search space without hiding needed behavior | Fixed scaffold, 20 matched tasks, scratch and assembly conditions | Acceptance rate, repair rounds, cost, latency, diff scope | Model-eval | Blind paired run with same acceptance harness | Assembly does not improve acceptance or has higher cost after repairs | Do not use assembly as the default for this task class |
| F02: MiniMax-class models can perform bounded adaptation | Contracts and file scope constrain the task enough for the model | Pinned scaffold, 20 tasks, allowed diff, cheap model, repair cap | Per-task pass/fail and failure taxonomy | Model-eval | Build + type + contract + security receipts | Fewer than 16/20 pass without human code edits, or any critical security failure | Remove task class from cheap-model route; escalate or redesign |
| F03: Interstitial retrieval improves feature work | Retrieval at representation changes supplies useful contract-level evidence | Same tasks with retrieval off/on; clean evidence packets | Pass rate, context size, time, relevant-evidence precision | Retrieval owner | Repeated paired evaluation and held-out prompts | Retrieval has no uplift or increases failure/cost beyond pre-set tolerance | Disable retrieval at that stage and record negative result |
| F04: A Block Contract makes composition deterministic | Ports and negative constraints capture the important assumptions | Two or more candidate blocks, host contract, compatibility fixtures | Valid plan, no undeclared collisions, repeatable assembly | Contract owner | Schema/static/contract checks on two independent runs | Hidden import/data/token/action conflict appears after “valid” plan | Contract field or compatibility rule is insufficient; hold composition |
| F05: Token contracts preserve useful visual consistency | Components can honor token slots and the token IR is sufficient | Approved token set, block screenshots, reference mockup, accessibility checks | Screenshot/visual scores and token override diff | UI/eval owner | Visual baseline plus human acceptance of intent | Token swap breaks layout/accessibility or cannot meet agreed visual intent | Keep block reference-only or require a richer UI contract |
| F06: A known data/deploy boundary reduces general-builder risk | Actionist can expose stable, least-privilege host contracts | Synthetic Postgres/API fixture, tenant policy, preview/deploy contract | Build, isolation, migration and deployment receipts | Platform owner | Direct-source contract + fixture smoke | Unknown/unstable boundary prevents repeatable tests | Do not scope claims as Actionist-specific; remain research-only |
| F07: Evidence-gated admission reduces unsafe reuse | Required receipts expose meaningful classes of failure | Candidate with deliberate license, dependency, secret and build faults | Correct hold/quarantine/reject verdicts | Supply-chain/evidence owner | Scan + mutation fixtures + human review | Any critical fault is admitted or receipt is not reproducible | Disable admission automation; human review only |
| F08: Typed interface contracts catch integration failures before E2E | Provider and consumer tests cover the used interactions | OpenAPI/JSON Schema/Pact/MCP-shaped contract and fixture provider | Contract failures before deployment | Integration owner | Provider/consumer replay plus negative cases | Contract passes while known incompatible interaction fails | Add behavior fixture or do not rely on the contract |
| F09: Approval and recovery bound side-effect risk | Actions can be isolated and compensated | Read/write actions, actor, idempotency keys, rollback/compensation fixture | Audit trail, approval event, post-condition and recovery result | Authority owner | Adversarial action run | Any unapproved/non-idempotent/unrecoverable side effect occurs | Read-only only; no external operations |
| F10: Cheap inference can support viable unit economics | Model savings exceed retries, sandbox, image, review and support cost | Token/latency/repair telemetry, hosting/image prices, price floor | Cost per successful build and margin band | Commercial owner | Three scenario model with real usage telemetry | Cost per successful outcome exceeds price/margin floor | Stop scale-up; narrow scope or change model/price |
| F11: Niche-to-code graph predicts useful candidates | Atom fields are more discriminative than industry labels | Catalogue atom, candidate metadata, contract fit, pilot outcome | Precision/recall or decision accuracy on held-out atoms | Research/corpus owner | Pre-registered join rules and held-out evaluation | Graph mapping is no better than category/random baseline | Keep graph as an audit index, not a matcher |
| F12: A bounded pilot is a better decision than a general Lovable clone | One workflow can expose the highest-risk contracts cheaply | One atom, one scaffold, one data fixture, one deploy boundary | End-to-end evidence packet and go/no-go verdict | Coordinator/client owner | All pilot gates in §10 | Any critical gate lacks an owner, fixture, or falsifier | No client implementation commitment; return to contract discovery |

### 9.1 Eval design rules

- Test execution state, not only generated text. [OSWorld](https://arxiv.org/abs/2404.07972) demonstrates why interactive environments and execution-based evaluation matter for computer-use agents; its reported gap between humans and models is a warning against demo-only claims.
- Use held-out and time-separated tasks where possible. [SWE-bench Live](https://www.microsoft.com/en-us/research/publication/swe-bench-goes-live/) identifies staleness, narrow repository coverage, setup effort and contamination concerns in static benchmark suites.
- Record distributions, not one “best run”: pass rate, p50/p95 latency, tokens, repair count, cost, and failure class.
- Keep semantic correctness separate from visual similarity, build success, policy compliance, and authority correctness.
- A green benchmark is a research receipt, not a production safety case.

## 10. Smallest credible pilot and go/no-go criteria

### 10.1 Pilot definition

**Pilot label:** `P0-OPS-READMODEL-001` (research specification only).  
**Outcome:** turn a synthetic operations dataset into a read-only exception/owner dashboard with filters, status explanation, and an audit-visible acknowledgement state that does not write to the authoritative system.  
**Why this shape:** the local vertical lane identifies operations as the safer provisional sandbox; the solution-atom loop is reusable across finance and CRM while avoiding irreversible external effects. This is an `I`/prioritization proposal, not proof of Actionist demand or capability.

### 10.2 Preconditions; without these the pilot is not authorized

1. A named Actionist counterpart provides the canonical host/API/auth/data/deployment/approval contract, or the run is explicitly labelled platform-neutral.
2. One permissively licensed, pinned scaffold or first-party scaffold passes the provenance/license/dependency gate. Horizon may be evaluated as a held candidate; it is not an admitted block.
3. One synthetic fixture contains tenant A/B sentinel rows, known exceptions, expected counts, and a read-only role.
4. One token set and one approved visual reference are recorded; visual intent is not inferred from a screenshot alone.
5. A sandbox, network policy, artifact store, owner, and rollback pointer are available.
6. Twenty prompts are frozen before model evaluation; at least five are held out.

### 10.3 Acceptance matrix

| Gate | Proposed pass criterion | Receipt | Hard stop |
|---|---|---|---|
| Demand/contract | Atom, host, data, tenant, read-only action and outcome metric are explicit | Valid atom + signed scope note | Any unknown source of truth or write authority |
| Provenance/license | URL, pinned commit, preserved notices, SPDX state, dependency/SBOM report, adaptation log | Machine-readable scan packet | Ambiguous/incompatible license, untracked dependency, or no reproducible scan |
| Static boundaries | No forbidden imports, undeclared env vars, production credentials, writes, or out-of-scope files | Static policy receipt | Any violation; quarantine |
| Composition | Manifest validates; one deterministic assembly plan; no route/table/token/env collision | Contract and plan receipts | Non-deterministic or implicit binding |
| Model capability | At least 16/20 tasks pass without human code edits; max 2 repair rounds per task | Per-task eval JSON plus logs | Critical security/tenant failure, or threshold miss |
| Functional proof | Build, typecheck, fixture query and read-model outputs match expected results | Build and fixture receipts | Build/contract/read result mismatch |
| Browser/visual | Core paths pass browser smoke; visual output meets pre-agreed intent and accessibility baseline | Browser and screenshot receipts | Preview/visual/interaction mismatch not repaired within cap |
| Security | Zero secret egress, zero cross-tenant reads, zero unapproved actions, network policy respected | Adversarial security receipt | Any critical failure |
| Recovery | Version pointer and sandbox reset/rebuild are reproducible; no destructive write is in scope | Rollback/rebuild receipt | No owner or no recovery path |
| Economics | Compute cost is recorded per attempt and per successful task/build; sensitivity band meets pre-registered margin floor | Cost ledger | Cost unknown, or successful-outcome cost exceeds floor |
| Human admission | Named reviewer accepts the full dossier for this host and scope | Signed admission decision | No human decision; status remains held |

### 10.4 Pilot verdict vocabulary

- `PASS`: every hard gate passes, receipts are linked, and the named owner accepts the bounded scope.
- `PARTIAL`: technical evidence exists but a non-critical contract or economic input is missing; no client release.
- `HOLD`: one or more required gates are unexecuted or ambiguous.
- `REJECT`: a hard falsifier fires, especially license, tenant, secret-egress, authority, or unrecoverable side-effect failure.
- `SKIP`: a gate is explicitly not applicable and the reason is recorded; “not run” is never silently treated as pass.

## 11. Economics from first principles

### 11.1 Unit model

The relevant unit is **cost per successful, accepted build**, not cost per model call:

```text
C_attempt = C_model + C_image + C_retrieval + C_sandbox + C_build/deploy
            + C_storage/egress + C_observability + C_review + C_support
            + expected(C_failure, C_security, C_license, C_rework)

C_success = total C_attempts / accepted_builds
gross_margin = realized_price - C_success
payback = acquisition_or_setup_cost / monthly_gross_profit
```

Measure separately:

- model input/output/cache tokens and retry tokens;
- image concepts, revisions, and selected-to-code conversion rate;
- sandbox minutes, CPU/memory, network egress, dependency installation and preview lifetime;
- build/deploy attempts and rollback/rebuild attempts;
- human minutes per accepted build and per failure class;
- license/legal review cost and expected remediation;
- support/maintenance cost after release;
- operation cost per successful workflow, not only creation cost.

### 11.2 Current external price anchors

These are dated public anchors for the model, not a forecast for Action Model:

- MiniMax’s official [pricing overview](https://platform.minimax.io/docs/pricing/overview) distinguishes subscriptions, credits, teams, and API pay-as-you-go. Its [Token Plan](https://platform.minimax.io/subscribe/token-plan?source=link) currently documents a Plus plan at $20/month, an estimated ~1.7B M3 tokens/month, and an illustrative 50K-token call volume. Subscription quotas are not interchangeable with a production API rate card; the pilot must use the actual billing mode.
- OpenAI documents [GPT Image pricing](https://openai.com/index/image-generation-api/) at $5/1M text input tokens, $10/1M image input tokens, and $40/1M image output tokens for the cited model, with example per-image costs. This is a reference for the P2 design loop, not a mandated provider.
- Vercel documents [Sandbox pricing/limits](https://vercel.com/docs/pricing) and [Sandbox limits](https://vercel.com/docs/limits); it describes usage-based infrastructure and plan-dependent deployment/build limits. A sandbox vendor cost is only one term in `C_success`.

### 11.3 Economic falsifiers

The “cheap model” thesis fails if any of the following holds after a pre-registered run:

- retries and human repair erase the model-price advantage;
- sandbox/preview/deploy or image iteration dominates model cost;
- license, security, or support risk is unpriced;
- one successful build requires repeated bespoke work, so reuse does not amortize;
- a lower-cost general model increases failure cost enough to exceed a frontier-model route;
- the client price/contract does not cover the accepted-outcome cost and maintenance boundary.

No price or commercial structure is recommended here. The local demand documents record offers and ranges but no agreed budget; `U` inputs must be obtained from the client before a business case.

## 12. What this lane answers and what it still needs

| RCH-FIRST-PRINCIPLES task | Status | Answer produced | Still needed from another lane or client |
|---:|---|---|---|
| 1. Strip away product names to atomic outcome | Complete at research level | Solution atom with state/decision/side-effect/authority/verification/recovery/audit | Direct interview to confirm the first target outcome |
| 2. Decompose identity/transformation/composition/grounding/verification/authority/operation/economics | Complete at framework level | C01–C16 capability tree and eight-plane model | Execution evidence for each capability |
| 3. Define standardized code/block unit | Complete as v1 research proposal | Block Contract families and lifecycle; no schema change | One real conversion to test required fields |
| 4. Define source/host/data/UI/action/evidence contracts | Complete as contract map | §3 and standards crosswalk | Actionist canonical API/auth/data/deploy/approval/token facts |
| 5. Define niche → atoms → blocks → workflows graph | Complete as graph rules | §4 edge schema, examples, negative-space rules | AM-VERTICALS × AM-CORPUS join with direct evidence |
| 6. Define admission/quarantine/repair/release/rollback | Complete as state machine | §7 states/invariants and separate rollback objects | Executed receipts on a pinned candidate |
| 7. Define cheap/frontier responsibilities | Complete as hypothesis | §6 routing table and escalation triggers | RCH/MODEL-EVAL 20-task benchmark |
| 8. Define retrieval timing, evidence budgets, clean context | Complete as research design | §5 interstitial retrieval and T0–T4 ladder | Measured retrieval ablation and license-context pipeline |
| 9. Define eval harness and falsifiable success criteria | Complete as pre-registration | §9 F01–F12 and §10 pilot matrix | Frozen prompts, fixtures, model telemetry, independent review |
| 10. Define security threats and controls | Complete as threat model | §8 injection/egress/tenant/supply-chain/authority controls | Adversarial sandbox and action probes |
| 11. Define economics and smallest credible pilot | Complete as model/specification | §10–§11 operations read-model pilot and cost-per-successful-build formula | Actual API/hosting rates, client price floor, support assumptions |
| 12. Produce framework and synthesis inputs | Complete | This file plus lane return below | Coordinator callback verification |

### 12.1 Existing research already answers

- The build plane is crowded and the more defensible research seam is governed composition around evidence, authority, recovery, and operation (`E/I`: Builder Research and AM-SYNTHESIS packets).
- The local corpus has discovery/review inventory but no admitted block; current candidates lack execution and ownership/rollback receipts (`E`: AM-CORPUS `CURRENT.md`).
- The demand catalogue supplies a useful taxonomy and repeated workflow patterns but is not proof of live Actionist capabilities (`E`: AM-VERTICALS `CURRENT.md`).
- The Block Contract v0 and reusable-block report provide compatible beginnings; they need one real hand conversion to settle the minimum contract (`E`: `design/block-contract.schema.json`; Builder Research reusable-block report).
- Standards provide interoperable metadata and test/provenance mechanisms, but each has a limited guarantee; no single standard is the whole Block Contract.

### 12.2 This two-day program still needs

1. An authenticated Actionist contract from the client: canonical API/SDK, auth, database/data ownership, deployment/subdomain, credentials vault, approval, audit, token and tenant rules.
2. A mounted/inventoried corpus before using 850k/80k scale language externally.
3. One license/SBOM scan on a pinned candidate and one complete adaptation log.
4. A 20-task cheap-model bounded-diff evaluation with held-out prompts and a cost ledger.
5. A direct demand-to-candidate join for the selected atom.
6. Adversarial sandbox probes for secret egress, prompt injection, tool poisoning, and tenant isolation.
7. Client/legal inputs for ownership, license policy, data jurisdiction, price floor and maintenance.

## 13. Source register

### Local evidence

- `research/actionmodel-builder-research-2026-08-26/PROGRAM.md` — lane contract and evidence classes; observed 2026-08-26.
- `PROJECT.md` — project scope, unverified corpus claim, blocked Mini access, and v0 API dependency; observed 2026-08-26.
- `research/actionmodel-long-run/outputs/synthesis/CURRENT.md` and `decision-ledger.md` — adversarial cross-lane state; observed 2026-08-26.
- `research/actionmodel-long-run/outputs/corpus/CURRENT.md` — 389 merged candidates, 114 held, zero accepted, execution gaps; observed 2026-08-26.
- `research/actionmodel-long-run/outputs/platforms/CURRENT.md` — platform evidence and zero authenticated Actionist dossiers; observed 2026-08-26.
- `research/actionmodel-long-run/outputs/verticals/CURRENT.md` — catalogue, atom, pilot and evidence posture; observed 2026-08-26.
- `design/BUILDER-DESIGN.md`, `design/PRINCIPLES.md`, `design/BLOCK-FRAMEWORK.md`, `design/block-contract.schema.json` — local architecture and contract drafts; observed 2026-08-26.
- `/Users/shaansisodia/Documents/Codex/2026-08-26/realtime-voice-chat/outputs/research-synthesis.md` — Builder Research director report; observed 2026-08-26.
- `/Users/shaansisodia/Documents/Codex/2026-08-26/realtime-voice-chat/outputs/reusable-block-framework-report.md` — reusable-block gates and adaptation boundaries; observed 2026-08-26.

### External primary sources

- [SPDX specifications](https://spdx.dev/use/specifications/), [license handling](https://spdx.dev/learn/handling-license-info/), and [SPDX overview](https://spdx.dev/about/overview/) — standard scope and legal-boundary caveat.
- [SLSA v1.2](https://slsa.dev/spec/v1.2/) and [provenance model](https://slsa.dev/spec/v1.0-rc2/provenance) — build provenance and trust-level distinctions.
- [in-toto specifications](https://in-toto.io/docs/specs/) and [getting started](https://in-toto.io/docs/getting-started/) — authorized supply-chain steps and signed links.
- [JSON Schema 2020-12](https://json-schema.org/specification), [OpenAPI 3.2](https://spec.openapis.org/oas/latest.html), [Pact](https://docs.pact.io/), and [Pact specification](https://github.com/pact-foundation/pact-specification) — structural and behavior contracts.
- [MCP basic protocol](https://modelcontextprotocol.io/specification/2025-11-25/basic) and [MCP authorization](https://modelcontextprotocol.io/specification/2025-03-26/basic/authorization) — typed tool/resource and transport authorization boundary.
- [DTCG Format Module 2025.10](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/) — interoperable design-token data.
- [OCI Image Spec](https://specs.opencontainers.org/image-spec/?v=v1.1.1), [Firecracker design](https://github.com/firecracker-microvm/firecracker/blob/main/docs/design.md), [Modal sandbox security](https://modal.com/docs/guide/sandbox-networking), and [Vercel Sandbox](https://vercel.com/docs/sandbox) — artifact and isolation references.
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/), [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework), and [NIST SSDF](https://csrc.nist.gov/pubs/sp/800/218/final) — security and governance frameworks.
- [RepoCoder](https://arxiv.org/abs/2303.12570), [GraphCoder](https://arxiv.org/abs/2406.07003), and [CodeRAG](https://arxiv.org/abs/2509.16112) — repository-level retrieval research.
- [OSWorld](https://arxiv.org/abs/2404.07972) and [SWE-bench Live](https://www.microsoft.com/en-us/research/publication/swe-bench-goes-live/) — execution-based and contamination-aware evaluation constraints.
- [MiniMax pricing overview](https://platform.minimax.io/docs/pricing/overview), [MiniMax Token Plan](https://platform.minimax.io/subscribe/token-plan?source=link), [OpenAI image API pricing reference](https://openai.com/index/image-generation-api/), and [Vercel pricing](https://vercel.com/docs/pricing) — dated economic anchors only.

## 14. Lane return and callback payload

**Completed task slots:** RCH-FIRST-PRINCIPLES 1–12.  
**Artifact:** `research/actionmodel-builder-research-2026-08-26/outputs/first-principles-framework.md`  
**Evidence quality:** local `E` reports plus official standards/docs and primary papers; design claims remain `I`; Actionist runtime, corpus scale, cheap-model capability, economics, and security execution remain `U` until named gates run.  
**Counts:** 16 atomic capabilities; 7 contract families; 10 graph integrity rules/fields; 10 lifecycle states/transition classes; 12 falsifiable claims; 11 pilot gates; 9 primary threat classes; 7 external cost/provenance/sandbox anchors.  
**Top findings:** Block Contract is the missing middle layer; admission evidence is a release dependency; cheap-model success must be measured per accepted bounded diff; the safest first pilot is synthetic/read-only; no current block is admitted.  
**Blockers:** Actionist canonical contract; Mini corpus access; license/SBOM execution; model-eval harness; demand-to-candidate join; sandbox/adversarial probes; client/legal/economic inputs.  
**Next gates:** obtain client contract → run one pinned candidate through scan/conversion/proof → run 20-task model/economic eval → independent admission review.  
**Commands/sources used:** repo file inspection and `preflight_lessons.py`; local reports listed above; built-in web research fallback after the Perplexity wrapper reported missing `OPENROUTER_API_KEY`; all URLs are recorded in §13.

**Research-only conclusion:** do not authorize implementation or claim completion of a working Actionist Builder from this document. The next credible decision is whether one bounded, read-only, synthetic atom can pass the complete evidence ladder with a named host contract and a measured cost per successful outcome.
