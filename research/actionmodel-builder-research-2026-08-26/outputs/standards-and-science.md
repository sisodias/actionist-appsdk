# Standards and science map — Action Model Builder

**Run:** `actionmodel-builder-research-2026-08-26`  
**Lane:** `RCH-STANDARDS`  
**Observed:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**Mode:** research-only; no implementation, dependency admission, live deployment, or client/API assertion  
**Target seam:** `design/block-contract.schema.json` and `design/BLOCK-FRAMEWORK.md`

## Executive synthesis

There is no single standard for turning an external repository into a safe,
composable Actionist block. The credible design is a stack of partially
orthogonal contracts:

1. **Identity and rights:** immutable source revision, file/snippet scope,
   copyright and SPDX license expression, adaptation record, and a human/legal
   decision. SPDX and REUSE make the metadata legible; OpenChain describes the
   organizational compliance process. None of them grants permission or makes a
   legal decision automatically.
2. **Composition shape:** JSON Schema 2020-12, OpenAPI 3.1, Pact, AsyncAPI and
   CloudEvents can describe machine boundaries and executable expectations.
   They do not establish business equivalence, tenant safety, or authorization
   correctness by themselves.
3. **Artifact and supply-chain integrity:** SPDX/CycloneDX SBOMs, in-toto
   attestations, SLSA provenance, OCI digests/referrers, and optionally SCITT
   transparency receipts can connect source, transform, build, test, and release
   evidence. They show what happened and what was built; they do not show that
   the block is useful or semantically correct.
4. **Transformation:** ESTree, Tree-sitter, ast-grep, OpenRewrite, LibCST and
   related tools make bounded syntax-aware edits practical. The research
   literature supports selective, structure-aware retrieval and iterative repair,
   but it does not support arbitrary semantic extraction from a repository.
5. **Design and registry:** DTCG 2025.10 is a stable exchange format for design
   tokens, but explicitly is not a W3C Standard. Style Dictionary is a mature
   translation framework. shadcn's registry is a useful code-registry protocol;
   OCI is the stronger distribution and digest/attachment substrate.
6. **Agent authority:** MCP gives a structured tool protocol, JSON Schema
   messages, HTTP authorization guidance, elicitation, and risk hints. OAuth RAR,
   token exchange, Cedar/OPA, W3C PROV, and OpenTelemetry fill adjacent gaps.
   MCP annotations are hints, not a safety boundary; deterministic policy and
   commit-time checks remain necessary.
7. **Evaluation and operation:** HELM/Inspect provide reusable evaluation
   machinery; SWE-bench, RepoEval/RepoCoder, cAST, WebArena/BrowserGym, OSWorld,
   AgentBench, and tau-bench provide evidence about specific abilities. None is
   an Actionist block benchmark. A local golden-task suite is still required.
8. **Execution and recovery:** OCI, NIST container guidance, Kubernetes Pod
   Security/multi-tenancy, gVisor, Firecracker, and WebAssembly describe useful
   isolation choices. OpenGitOps, Kubernetes rollout history, Argo Rollouts, and
   Temporal provide deployment and durable-execution patterns. Rollback remains
   a separately designed property: code can be reverted more easily than data or
   external side effects.

The minimum defensible Actionist admission record is therefore an evidence
bundle, not just the current block manifest: source/license receipt → exact
extraction and transform receipt → normalized block manifest → dependency/SBOM
receipt → isolated build and contract receipts → visual/token receipt → action
and authorization receipt where applicable → signed build provenance → registry
release decision → deployment and rollback receipt. The current v0 schema is a
useful start, but it does not yet model all of these states or receipts.

## Evidence method and vocabulary

The source pass prioritized standards bodies, official specifications, primary
project documentation, and peer-reviewed or conference paper pages. Search
snippets are not treated as evidence. Each entry below records a version or
status where the source exposes one, the scope of the source, its mapping to the
Block Contract, and the limitation that prevents overclaiming.

Evidence classes follow the program:

- **E** — directly inspected primary specification, official project artifact,
  or paper.
- **D** — first-party documented framework or implementation claim; useful for
  capability mapping but not independently authenticated here.
- **I** — synthesis or design implication derived from multiple sources.
- **U** — unresolved or unverified in this project.

The report distinguishes:

- **Normative:** standards, RFCs, W3C recommendations, or specification text
  using conformance language.
- **Operational framework:** a tool or process that implements useful controls,
  but is not itself a universal standard.
- **Research finding:** an empirical paper or benchmark with a defined task,
  dataset, and evaluation method.

## The current Block Contract and its boundary

The local v0 contract requires a stable block identity, kind, provenance, stack
contract, provided surfaces, consumed tokens, and evaluation commands/receipts.
The surrounding framework describes a harvest → extract → standardize → register
→ prove ladder and a permissive-license harvest policy. This is a proposed local
contract, not evidence that a real external repository has passed the ladder.

The standards below should be used to strengthen the seam in five directions:

| Contract area | Current local intent | Standards-informed extension | Current evidence state |
|---|---|---|---|
| `provenance` | URL, commit, license, copyright, harvest time, adaptation | Add source artifact digest, exact file/snippet spans, license evidence pointers, SPDX expression, source/release attestations, transform recipe and reviewer/owner | Proposed only; no executed license scan or admitted block |
| `stack_contract` | Runtime, styling, data, auth assumptions | Add OS/architecture, package-manager/lockfile, DB schema/migrations, tenant/RLS model, network/secret requirements, API/event dialects, policy profile | Proposed only; host/API facts remain open |
| `provides` / `requires` | Routes, components, migrations, endpoints, env vars, events and dependencies | Add JSON Schema/OpenAPI/AsyncAPI/CloudEvents/MCP identifiers, dependency digests, capability/risk classes, and input/output ownership | Shape is proposed; no contract test receipt |
| `tokens_consumed` | Token names used by a block | Add DTCG source/version, token map, unresolved hard-coded values, generated outputs, visual baseline and contrast/accessibility evidence | Format research only; no token conversion proof |
| `eval` | Build command, smoke test, screenshot baseline, license scan | Add environment fingerprint, fixed fixtures/prompts, structured verdict, trace/eval IDs, repeated reliability metrics, SBOM/provenance references, deploy/rollback result | Zero executed admission/eval/deploy receipts per program facts |
| Lifecycle and authority | Implied by the framework | Add `candidate`, `quarantine`, `validated`, `admitted`, `released`, `revoked`, `rolled_back`; owner, approver, policy decision, freshness, and audit trail | Missing from v0; must be explicit before release |

## Applicability matrix

| Concern | Primary source and observed status | What it can standardize for Actionist | What it cannot prove | Class |
|---|---|---|---|---|
| Web provenance graph | [W3C PROV family](https://www.w3.org/TR/prov-overview/) and [PROV primer](https://www.w3.org/TR/prov-primer/) (W3C Recommendation family, 2013) | Entities, activities, agents, usage, generation, derivation, responsibility; a general graph for source → transform → artifact → decision | Truthfulness of an asserted record; legal ownership; runtime correctness | E |
| File licensing and copyright | [SPDX 3.0/3.0.1](https://spdx.dev/use/specifications/) ([licensing profile](https://spdx.github.io/spdx-spec/v3.0.1/model/Licensing/)) (ISO/IEC 5962:2021; SPDX site lists 3.0) | SPDX identifiers/expressions, declared/concluded license, copyright and relationships; machine-readable license and artifact metadata | Whether a detected notice is complete; jurisdiction-specific legal interpretation; permission for a particular adaptation | E |
| Per-file reuse hygiene | [REUSE Specification 3.3](https://reuse.software/spec/) | File/snippet-level SPDX headers, copyright notices, `LICENSES/`, `REUSE.toml`, and lintable coverage | Correctness of the upstream author’s declarations; legal clearance | E |
| Organizational license program | [OpenChain ISO/IEC 5230 FAQ](https://openchainproject.org/resources/faq) and [ISO/IEC 18974](https://www.iso.org/standard/86450.html?browse=ics) | Process requirements, roles, policy, legal escalation, supplier/customer trust, open-source security assurance | A package cannot itself be “OpenChain conformant”; conformance does not guarantee compliance/security | E |
| License scanning | [ScanCode Toolkit docs](https://scancode-toolkit.readthedocs.io/en/latest/) and [FOSSology workflow](https://www.fossology.org/get-started/basic-workflow/) | Candidate detection, file paths, match lines, copyrights, URLs, policy review inputs | False positives/negatives, hidden dual licensing, generated code, legal meaning; scan output is not approval | E/D |
| SBOM minimum content | [NTIA Minimum Elements](https://www.ntia.gov/report/2021/minimum-elements-software-bill-materials-sbom) (2021) and [CISA 2025 SBOM guidance](https://www.cisa.gov/sites/default/files/2025-08/2025_CISA_SBOM_Minimum_Elements.pdf) | Component identity, supplier/version, dependency relationships, authorship and lifecycle/transparency expectations | Source snippets, semantic behavior, model prompts, tenant data, and policy approval | E |
| SBOM format | [SPDX specifications](https://spdx.dev/use/specifications/) and [CycloneDX 1.7 JSON](https://cyclonedx.org/docs/1.7/json/) | Interchangeable dependency inventory, relationships, licenses, hashes, vulnerabilities/VEX fields where represented | Completeness of the scan or safety of a component; two formats do not imply two independent scans | E |
| Build/source attestation | [in-toto Attestation Framework](https://github.com/in-toto/attestation) and [in-toto v1.0 specification](https://github.com/in-toto/docs/blob/master/in-toto-spec.md) | Signed statements about steps, materials, products, actors, and ordering; custom predicates for license scan, transform, tests, or admission | Honest issuer and correct predicate content; it authenticates a claim rather than independently re-running it | E |
| Provenance levels | [SLSA 1.2](https://slsa.dev/spec/v1.2/) ([build basics](https://slsa.dev/spec/v1.2/build-track-basics), [source requirements](https://slsa.dev/spec/v1.2/source-requirements), [build provenance](https://slsa.dev/spec/v1.2-rc2/build-provenance)) | Source/build tracks, immutable revisions, builder identity, external parameters, resolved dependencies, signed provenance, isolation expectations | Code quality, intentional maliciousness by a trusted producer, full transitive dependency trust, semantic correctness | E |
| Security posture signal | [OpenSSF Scorecard](https://scorecard.dev/) and [checks](https://github.com/ossf/scorecard/tree/main/checks) | Repeatable repository-health signals: branch protection, pinned actions, security policy and related practices; useful triage input | A score is not a license verdict, vulnerability-free claim, maintainer trust guarantee, or block admission decision | E/D |
| Transparency receipt | [RFC 9943 SCITT architecture](https://www.rfc-editor.org/info/rfc9943) (published June 2026) | Append-only transparency service for signed statements, policy check, receipt, issuer/accountability; useful for public or cross-organization admission histories | Does not decide the policy; privacy, availability, governance and issuer honesty remain external | E |
| Registry content identity | [OCI descriptor](https://specs.opencontainers.org/image-spec/descriptor/) and [OCI Distribution 1.1 referrers](https://github.com/opencontainers/distribution-spec/blob/main/spec.md) | Digest-addressed content, artifact type, subject links, signatures/SBOM/provenance attachments, pagination and discovery | Ranking/discovery semantics, code compatibility, legal approval, and runtime safety | E |
| AST interchange | [ESTree specification](https://github.com/estree/estree) | A community lingua franca for JavaScript syntax trees and tool interop | Cross-language support, type/semantic meaning, formatting preservation, business equivalence | E |
| Incremental parsing | [Tree-sitter](https://tree-sitter.github.io/tree-sitter/) | Concrete syntax trees, incremental updates, syntax queries, multi-language parsing foundation | Correct semantic/type model, safe transform recipe, runtime behavior | E |
| Structural codemod | [ast-grep](https://ast-grep.github.io/) | Syntax-shaped search, rewrite, lint, fixtures and language-scoped rules | Meaning of a match, side effects, migration safety, cross-file semantics | E |
| Semantic refactoring | [OpenRewrite recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes) and [lossless semantic trees](https://docs.openrewrite.org/concepts-and-explanations/lossless-semantic-trees) | Composable recipes, type attribution, format-preserving edits, repository-scale refactors | Supported-language coverage, domain semantics, authorization and data migration safety | E/D |
| Token exchange | [DTCG Format Module 2025.10](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/) (stable Community Group report; not a W3C Standard) | Portable token files, groups, aliases, types, composites, deprecation and a preferred media type | Semantic naming, visual equivalence, accessibility, component behavior, or an automated raster-to-token inference method | E |
| Token translation | [Style Dictionary](https://www.styledictionary.org/) | Transform token sources into CSS, JS, HTML, iOS, Android and other platform outputs | Correct semantic mapping from a donor; design approval; token governance | D |
| Code-component registry | [shadcn registry JSON](https://ui.shadcn.com/docs/registry/registry-json) and [registry API/schema](https://ui.shadcn.com/docs/registry/api-reference) | Named items, files, dependencies, registry dependencies, types, includes, schema validation and source installation | Runtime compatibility, license/provenance, security, data ownership, or proof of a working block | E/D |
| API schema | [OpenAPI 3.1.1](https://spec.openapis.org/oas/v3.1.1.html) | HTTP endpoints, schemas, security schemes, references, webhooks and machine-readable generation targets | Live behavior, auth policy correctness, consumer needs, side effects | E |
| Data/message schema | [JSON Schema 2020-12](https://json-schema.org/specification) and [AsyncAPI 3.0](https://www.asyncapi.com/docs/reference/specification/v3.0.0) | Typed manifest, tool input/output, event payload, validation dialect, message-channel and protocol description | Business invariants not encoded in the schema; provider conformance without tests | E |
| Consumer/provider contract | [Pact specification](https://docs.pact.io/implementation_guides/pact_specification) | Concrete consumer-driven request/response or message examples verified against a provider | Complete API behavior, internal correctness, UI fidelity, or authorization policy | E |
| Event envelope | [CloudEvents](https://github.com/cloudevents/spec) (CNCF graduated project; v1.0 family) | Common event metadata, subject/source/type/time/id and transport interoperability | Domain schema, ordering, delivery guarantees, idempotency or authorization | E |
| Tool/action protocol | [MCP 2025-11-25](https://modelcontextprotocol.io/specification/2025-11-25/basic), [tools](https://modelcontextprotocol.io/specification/draft/server/tools), [authorization](https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization) | Tool identity and schemas, resources/prompts, JSON-RPC messages, transport auth, scopes, dynamic tool lists | Trustworthiness of a server/tool, least privilege by itself, semantic intent, safe side effects | E |
| Human approval/elicitation | [MCP elicitation](https://modelcontextprotocol.io/specification/2025-11-25/client/elicitation) | Structured form/URL requests, user-bound identity, client approval/decline controls and explanation | That a user understood the exact side effect; durable commit authority; audit completeness | E |
| Fine-grained OAuth authority | [OAuth Rich Authorization Requests, RFC 9396](https://www.rfc-editor.org/info/rfc9396) and [Token Exchange, RFC 8693](https://www.rfc-editor.org/info/rfc8693) | Structured authorization details, subject/actor delegation, audience-scoped downstream tokens | Domain policy, user intent, non-OAuth authorization models | E |
| Policy decision | [Cedar](https://docs.cedarpolicy.com/) and [OPA/Rego](https://www.openpolicyagent.org/docs/policy-language) | Typed principal/action/resource/context decisions, policy-as-code, validation and explicit allow/deny | Correct policy design, complete entity data, safe execution or business approval | E/D |
| Agent trace vocabulary | [OpenTelemetry GenAI conventions](https://opentelemetry.io/docs/specs/semconv/registry/attributes/gen-ai/) | Agent/model/tool/retrieval/evaluation attributes, tool arguments/results, trace correlation, latency and token usage | Privacy-safe retention, causal explanation, policy correctness; many GenAI fields remain development/moving | E |
| Risk framework | [NIST AI RMF 1.0](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10), [GenAI Profile](https://www.nist.gov/itl/ai-risk-management-framework) and [OWASP Agentic Top 10 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) | Govern/map/measure/manage language, threat taxonomy, controls for excessive agency, prompt/tool/data risks | A concrete threat model, risk acceptance, or runtime enforcement | E |
| Broad model evaluation | [HELM](https://arxiv.org/abs/2211.09110) / [HELM site](https://crfm.stanford.edu/helm/index.html) | Scenario/metric/model separation, multi-metric transparency, raw trace release and reproducible evaluation structure | Actionist-specific success, deployment safety, or model score transfer across contexts | E |
| Coding-agent evaluation | [SWE-bench](https://arxiv.org/abs/2310.06770) and [repository](https://github.com/SWE-bench/SWE-bench) | Real issue-to-patch tasks, isolated execution, test-based success; a reference for patch repair harnesses | Assembly from vetted blocks, token fidelity, license, tenant safety, contamination and task distribution remain concerns | E |
| Retrieval science | [RepoCoder](https://arxiv.org/abs/2303.12570), [Repoformer](https://proceedings.mlr.press/v235/wu24a.html), [cAST](https://aclanthology.org/2025.findings-emnlp.430.pdf), and [AllianceCoder study](https://arxiv.org/abs/2503.20589) | Iterative/selective retrieval, structure-aware chunks, API/intent retrieval and measured context cost; supports conditional retrieval and AST-aware indexing | These are task-specific experiments, not a guarantee that a local corpus or cheaper model will reproduce the result | E |
| Browser/GUI agents | [WebArena](https://arxiv.org/abs/2307.13854), [BrowserGym](https://github.com/ServiceNow/BrowserGym), [OSWorld](https://arxiv.org/abs/2404.07972), [AgentBench](https://arxiv.org/abs/2308.03688) | Reproducible interactive environments, task states, action spaces, functional correctness and long-horizon failure analysis | Actionist app flows, private systems, external side effects, or production security | E |
| Tool-agent-user reliability | [tau-bench](https://arxiv.org/abs/2406.12045) | Policy-guided tool use, simulated user, final database state, and repeated `pass^k` reliability metric | Simulated users and narrow domains; does not replace human approval or live integration tests | E |
| Evaluation runner | [Inspect](https://inspect.aisi.org.uk/) | Composable datasets/solvers/scorers, tool/MCP support, logs, model swaps and sandbox extensions | It is a runner, not a definition of what an Actionist block should do | D |
| Container baseline | [NIST SP 800-190](https://csrc.nist.gov/pubs/sp/800/190/final), [OCI Runtime 1.2](https://opencontainers.org/posts/blog/2024-02-18-oci-runtime-spec-v1-2/) | Container lifecycle, image/registry controls, isolation and security-control checklist | Containers share a host kernel; proper configuration and threat testing are required | E |
| Stronger code sandbox | [Firecracker design](https://github.com/firecracker-microvm/firecracker/blob/main/docs/design.md), [gVisor security](https://gvisor.dev/docs/architecture_guide/intro/), [WebAssembly security](https://webassembly.org/docs/security/) | MicroVM, user-space-kernel, or module sandbox options; resource/network/host boundary patterns | No sandbox is a complete data-loss or prompt-injection defense; host configuration and egress still matter | E/D |
| Kubernetes tenancy | [Kubernetes multi-tenancy](https://kubernetes.io/docs/concepts/security/multi-tenancy/), [Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/) | Namespaces, RBAC, quotas, network policy, restricted/baseline profiles, workload identity | Namespace isolation is not automatically hard multi-tenancy; cluster-wide resources and noisy neighbors remain | E |
| Declarative delivery | [OpenGitOps principles](https://opengitops.dev/) | Declarative, versioned/immutable desired state, pull, continuous reconciliation | It does not define application health, database rollback, or agent approval | E |
| Progressive release | [Kubernetes rollout undo](https://kubernetes.io/docs/tasks/run-application/update-deployment-rolling/) and [Argo Rollouts](https://argoproj.github.io/argo-rollouts/concepts/) | Revisions, blue/green/canary, metric analysis, promotion and automated rollback | Rollback cannot undo an irreversible migration or external side effect; traffic and health signals can be wrong | E/D |
| Durable workflow recovery | [Temporal durable execution](https://temporal.io/) and [workflow execution docs](https://github.com/temporalio/documentation/blob/main/docs/encyclopedia/workflow/workflow-execution/workflow-execution.mdx) | Persisted state, replay, retries, timers, pause/resume and recovery from worker/infrastructure failure | Requires deterministic workflow code and idempotent/compensating activities; it is not a deploy rollback system | D |

## 1. Provenance, licensing, and rights

### W3C PROV: the general graph vocabulary

W3C PROV models provenance around **entities**, **activities**, and **agents**;
activities use and generate entities, and agents can be associated with or
responsible for activities. The primer explicitly lists ownership/rights,
trust assessment, compliance, and reproducibility as provenance use cases. This
fits the block lifecycle better than a single `source_url` field:

```text
upstream revision / file span        = entity
license scan / extraction / transform = activity
repository owner / tool / reviewer    = agent
normalized block / release             = generated entity
```

Use PROV relationships (or a JSON projection of them) for the evidence graph,
while using SPDX and in-toto/SLSA for software-specific machine formats. PROV
is a vocabulary and interchange model, not a truth oracle. A dishonest or
incomplete actor can still assert a false graph.

### SPDX and REUSE: make rights data granular and portable

SPDX is an international open standard, identified by the SPDX project as
ISO/IEC 5962:2021. The current specification family exposes structured core,
licensing, software, security, dataset, and AI profiles. The licensing profile
supports identifiers, expressions, license text and relationships such as
declared versus concluded license. The AI profile is relevant if the corpus
later includes model, dataset, or AI-package artifacts, but it does not replace
software license analysis.

REUSE 3.3 operationalizes file-level attribution using SPDX tags, adjacent
`.license` files, `REUSE.toml`, and a root `LICENSES/` directory. Its important
contribution for source extraction is granularity: a repository-level LICENSE
file is not enough evidence for every copied file or snippet. REUSE itself
depends on the upstream declaration being accurate.

Recommended source record additions:

```yaml
source:
  repository: https://example.invalid/owner/repo
  revision: <immutable commit or archive digest>
  source_digest: sha256:<...>
  scope:
    - path: src/components/Table.tsx
      lines: 1-220
      content_digest: sha256:<...>
  declared_license: MIT
  detected_license: MIT
  concluded_license: MIT
  copyright_evidence: [scan://receipt/…]
  license_evidence: [scan://receipt/…]
  adaptation: [transform://recipe/…]
  legal_review: required | complete | not_required
```

### OpenChain: process quality, not package approval

OpenChain ISO/IEC 5230:2020 defines the key requirements of a quality open
source license-compliance program. Its own FAQ is unusually clear about the
boundary: packages are not “OpenChain conformant,” the standard does not
interpret individual licenses, and conformance does not guarantee compliance.
ISO/IEC 18974:2023 applies the same process orientation to open-source security
assurance. These are useful governance references for Actionist's intake policy,
role assignment, training, legal escalation, and supplier records—not labels to
attach to a block.

### Scanners and policy engines

ScanCode and FOSSology are practical evidence generators. ScanCode can emit
license/copyright findings, file locations, matched text and policy-related
metadata. FOSSology adds review workflow and persistent decisions. They should
run both at intake and on the assembled output because adaptation can change
license boundaries and add dependencies. The output should be a receipt with
tool/version, input digest, policy version, findings, unknowns, and reviewer
decision.

No scanner resolves all of these reliably: ambiguous notices, custom or dual
licenses, generated files, vendored code, copied snippets, model-generated
similarity, and the legal effect of adaptation. The local rule “permissive
license harvestable; copyleft reference-only; unlicensed quarantine” is a
conservative product policy, not a universal legal conclusion.

## 2. SBOM, provenance attestations, supply chain, and registries

### SBOM formats and minimum elements

NTIA's 2021 minimum-elements report frames an SBOM as a formal record of
components and supply-chain relationships. CISA's 2025 update is a useful
current guidance source for richer operational expectations. SPDX and CycloneDX
are complementary formats; CycloneDX 1.7 explicitly models component identity,
relationships, licenses, hashes, and VEX-related structures. For a block,
generate an SBOM for both the normalized source/package and the deployable
artifact, and preserve the generator and input lockfile.

An SBOM does not need to expose client data or secrets. It should identify
runtime dependencies and their provenance while keeping tenant configuration,
credentials, and private source under the appropriate access boundary.

### in-toto and SLSA

in-toto provides the general signed-attestation framework: a supply-chain
layout can state which functionaries may perform which steps, what materials
and products exist, and how a consumer verifies them. Its attestation framework
supports predicates for build provenance and other claims.

SLSA 1.2 supplies a vocabulary of increasing guarantees. The Build track's
levels are intentionally concrete:

- **Build L1:** provenance exists.
- **Build L2:** hosted build platform and signed provenance.
- **Build L3:** hardened build isolation and signing secrets protected from
  user-defined steps.

SLSA 1.2 also has a Source track for versioned revisions, history and
provenance, technical controls, and review. This matters for a block because a
repository revision is an input to extraction, not merely a URL. The SLSA
documentation also says what it does not cover: code quality, producer intent,
and the combined trust level of all transitive dependencies.

Recommended Actionist predicates, carried as in-toto attestations:

1. `source-intake`: repository/revision/digest, file scope, license/copyright
   findings, source policy version.
2. `transform`: input digest, recipe ID/version, tool versions, output digest,
   diff summary, rejected matches.
3. `normalization`: runtime/data/token/interface mappings and unresolved items.
4. `verification`: build/typecheck/test/browser/visual/eval commands and verdicts.
5. `admission`: policy decisions, reviewer/owner, block digest, blockers and
   expiry/review date.
6. `release`: artifact digest, SBOM references, SLSA builder/provenance, registry
   location and deployment target.

The attestation must include enough evidence pointers to reproduce or inspect a
claim. A green attestation without a trustworthy builder or verifiable input is
not a green block.

### Scorecard and SCITT

OpenSSF Scorecard is a repository-health signal based on automated security
checks. It is useful for candidate triage—especially branch protection, pinned
automation, maintenance and security-process signals—but it must remain one
input to a disposition, never a quality or license score.

SCITT is now more than a draft: [RFC 9943](https://www.rfc-editor.org/info/rfc9943)
was published in June 2026. It describes signed statements registered with a
transparency service, a policy check, and an issued receipt over an append-only
history. This could provide a cross-organization receipt for a block admission
or release decision when public accountability is desired. It is not required
for a private first pilot and does not make the issuer's statement true.

### OCI as a release substrate

OCI descriptors bind a content type, digest, and size; OCI Distribution 1.1
adds a referrers API so signatures, SBOMs, attestations, and other artifacts can
refer to a subject manifest. That is a better identity model than mutable
registry tags for released blocks:

```text
block manifest digest
  ├── SPDX or CycloneDX SBOM referrer
  ├── in-toto/SLSA provenance referrer
  ├── license/admission receipt referrer
  ├── visual/eval receipt referrer
  └── deployment/rollback receipt referrer
```

The registry still needs a catalog/search layer for capability, vertical,
runtime compatibility, and status. OCI handles distribution and attachment;
it does not solve ranking, quarantine, governance, or composability.

## 3. AST transformation, codemods, and code-composition science

### Mechanism layers

AST/CST tools solve increasingly strong but still bounded problems:

- **ESTree** provides a JavaScript community AST shape used by parsers and
  tooling. It is a syntax interchange convention, not a semantic model.
- **Tree-sitter** provides incremental, concrete syntax trees and query support
  across many languages. It is well suited to indexing, locating stable syntax
  boundaries, and cheaply re-parsing changed files.
- **ast-grep** provides syntax-shaped search, lint and rewrite rules over many
  languages. It is a strong first implementation for allow-listed, fixture-backed
  edits.
- **OpenRewrite** adds lossless semantic trees, type attribution, formatting
  preservation and composable recipes. It is more capable for language/framework
  migrations where type information is available, but it is not a generic
  polyglot extractor.
- **LibCST** (local prior-art reference: [Instagram/LibCST](https://github.com/Instagram/LibCST))
  is a useful Python-specific formatting-preserving CST framework.

For Actionist, use the weakest mechanism that is sufficient and leave a clear
diff. A transform should declare its language/parser, pattern, preconditions,
rewrite, fixture set, and failure behavior. Every run should be dry-runnable and
should record unchanged/rejected matches. A parser success or typecheck does not
prove business behavior.

### Research findings relevant to retrieval and assembly

- **RepoCoder** ([EMNLP 2023 paper](https://arxiv.org/abs/2303.12570)) uses
  iterative retrieval and generation for repository-level completion and reports
  gains over in-file completion on its RepoEval tasks. Implication: retrieval
  can be an iterative, measured phase rather than one giant context dump.
- **Repoformer** ([ICML 2024](https://proceedings.mlr.press/v235/wu24a.html))
  learns when retrieval is useful and reports up to 70% serving-speed improvement
  without harming its benchmarks. Implication: conditional retrieval is a
  defensible hypothesis for cheap-model economics, not a local performance fact.
- **cAST** ([EMNLP Findings 2025](https://aclanthology.org/2025.findings-emnlp.430.pdf))
  uses AST-aware split/merge chunking and reports improved retrieval and code
  generation metrics. Implication: index syntax-coherent units rather than
  arbitrary line windows.
- **AllianceCoder / retrieval study** ([arXiv 2503.20589](https://arxiv.org/abs/2503.20589))
  compares contextual/API information with similar-code retrieval and reports
  that irrelevant similar snippets can degrade generation. Implication: query
  APIs, intent and contracts; do not equate lexical similarity with safe reuse.

The studies are not proof that Actionist's corpus, language mix, model, or
verticals will reproduce their results. The first local eval should measure
retrieval/no-retrieval, line chunks/AST chunks, and API/contract retrieval on
the same bounded tasks.

## 4. Design tokens and registries

### DTCG 2025.10

The [DTCG Format Module 2025.10](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/)
defines a text-based JSON exchange format for design tokens, including groups,
types, aliases/references, composites, descriptions, extensions and deprecation.
The report recommends `application/design-tokens+json`. Its status section is
important: it is a stable W3C Community Group report intended for implementation,
but it is **not a W3C Standard or W3C Recommendation**.

DTCG is a good interchange target for the Actionist token contract. It does not
define a universal semantic naming taxonomy, infer tokens from a raster image,
prove contrast, or ensure a component actually consumes a token. A block should
ship a token map and unresolved-hardcode report alongside generated CSS/Tailwind
or platform output.

### Style Dictionary

Style Dictionary is an implementation framework for transforming token sources
into platform outputs. It is useful as a build step after token names and
semantics have been reviewed. It should not be used as evidence that an
automatically inferred token mapping is faithful.

### shadcn-style code registries

The shadcn registry format is a practical precedent for model-readable,
installable component/block items. Its registry schema supports item names and
types, descriptions, files, dependencies, registry dependencies, CSS variables,
includes and schema validation. The important architectural choice is that the
registry item is source-oriented and composable; the client receives code rather
than a black-box hosted component.

Actionist should extend this shape with non-UI governance fields:

```yaml
registry_item:
  name: crm/contact-table
  version: 0.1.0
  digest: sha256:<manifest>
  source_revision: <url + commit + file scope>
  license: MIT
  dependencies: [package@version + digest]
  host_contract: {runtime, data, auth, tenant, permissions}
  tokens: {format: dtcg-2025.10, source: <digest>, consumes: [...]}
  ports: {http: openapi-3.1, events: cloudevents-1.0}
  evidence: {sbom, provenance, build, smoke, visual, eval}
  status: quarantined | validated | admitted | released | revoked
```

The registry must treat catalog presence, installability, and admission as
separate states. A URL that returns JSON is not proof of compatibility.

## 5. API, schema, message, and agent action contracts

### JSON Schema, OpenAPI, Pact, AsyncAPI, and CloudEvents

JSON Schema 2020-12 is the base validation dialect for the local block manifest,
MCP messages, tool input/output, and receipts. OpenAPI 3.1.1 aligns closely with
JSON Schema and adds HTTP paths, security schemes, references and webhooks. Use
OpenAPI for synchronous provider ports and AsyncAPI 3.0 for message-driven
channels. Use CloudEvents for common event envelope metadata, not as the domain
payload schema.

Pact is deliberately different: it is contract-by-example, generated from a
consumer's concrete expectations and verified against the provider. This is
valuable for a block because a schema can be valid while the host/provider still
does not satisfy the specific interactions the block needs.

Recommended split:

```text
JSON Schema      manifest, tool input/output, receipt and policy shapes
OpenAPI          HTTP ports and generated clients
AsyncAPI         asynchronous ports and message channels
CloudEvents      event envelope and correlation metadata
Pact             concrete consumer/provider compatibility checks
Playwright       browser behavior and visual state checks
```

### MCP: useful protocol, incomplete authority model

MCP 2025-11-25 defines structured protocol messages from a TypeScript source of
truth with generated JSON Schema, and provides tools, resources, prompts and
HTTP authorization guidance. Its authorization guidance references OAuth 2.1,
RFC 8414, RFC 7591, RFC 8707 and RFC 9728, and includes audience binding, PKCE,
short-lived token and token-passthrough cautions. Its elicitation feature can
request structured user input or a URL-mode interaction and says clients should
bind requests to user identity and provide approval/decline controls.

MCP tool annotations (`readOnlyHint`, `destructiveHint`, `idempotentHint`,
`openWorldHint`) are useful risk vocabulary. The MCP project’s own guidance
states that clients should treat annotations from untrusted servers as
informational and keep actual safety guarantees in deterministic controls.
That distinction is load-bearing: the model cannot be allowed to self-report
that its action is safe.

MCP's protocol status is moving. The July 2026 release-candidate announcement
says the experimental Tasks API from 2025-11-25 is being redesigned as an
extension, and users of the experimental API will need to migrate. Pin a
protocol version and keep the Actionist action envelope independent of MCP.

### Authority and policy

OAuth RAR (RFC 9396) can carry structured, fine-grained authorization details;
OAuth Token Exchange (RFC 8693) can represent subject/actor delegation and
audience-specific downstream tokens. Cedar models an authorization request as
principal/action/resource/context and validates policies against a typed schema.
OPA/Rego provides a declarative policy-as-code engine for structured decisions.

Neither Cedar nor OPA decides whether a person intended an action. The system
still needs a human-approval boundary for sensitive effects and a fresh
commit-time check against current state. An approval for “delete old records”
must be bound to the exact tenant, query/filter, record set or version witness,
tool identity, policy version and expiry—not merely to a natural-language plan.

### Proposed Actionist action envelope (inference)

The current Block Contract has no explicit action contract. An adjacent
`action_contract` should contain at least:

```yaml
action:
  action_id: uuid
  run_id: uuid
  tenant_id: opaque-id
  principal: user-or-service identity
  actor: agent identity and version
  capability: named block/tool capability
  tool: {name, version, source_digest, schema_digest}
  operation: read | write | external_side_effect
  input: {schema_id, value_digest}
  data_scope: entities, fields, tenant and egress scope
  risk: read_only | reversible | sensitive | irreversible
  idempotency_key: string | null
  authorization: {policy_id, decision, token_audience, checked_at}
  approval: {required, approver, scope_digest, epoch, expires_at, decision}
  pre_state: digest-or-version
  commit_state: digest-or-version
  result: {status, receipt_digest, post_state}
  recovery: {rollback | compensate | manual, reference}
  trace_id: W3C/OTel trace id
```

This is a recommended local contract assembled from MCP, OAuth, Cedar/OPA,
PROV, OpenTelemetry, and the program's own workflow-atom model. It is not an
existing industry standard.

## 6. Evaluation, traces, and reproducibility science

### Reusable evaluation frameworks

HELM established a multi-scenario, multi-metric approach and releases raw
prompts/completions for analysis. Inspect provides composable datasets, solvers,
scorers, tools, agent support including MCP, logs, model swapping and sandbox
extensions. These are strong harness precedents but not domain specifications.

For a block and builder, separate these outcome layers:

1. **Manifest validity:** schema validation and dependency resolution.
2. **Transformation safety:** parser errors, bounded diff, allow-listed files,
   transform fixture pass, no unapproved file writes.
3. **Build quality:** install/lockfile integrity, typecheck, lint, build and unit
   tests in a clean environment.
4. **Runtime behavior:** route/API smoke, provider contract tests, browser task
   state and error recovery.
5. **Visual/design:** approved token file, rendered screenshot, deterministic
   visual diff and accessibility/contrast checks.
6. **Agent behavior:** task success, policy violations, unauthorized tool calls,
   side-effect correctness, idempotency, approval adherence and recovery.
7. **Operations:** deploy success, observability, rollback or compensation,
   latency, cost, and repeated-run reliability.

Every run needs model/provider version, prompt/task fixture version, source and
block digests, tool versions, environment image digest, random seed where
applicable, trace/eval log, raw verdict and grader version. Do not collapse all
of this into one “quality score.”

### Benchmarks and what they teach

- **SWE-bench** tests issue-to-patch behavior on real GitHub repositories with
  test-based validation. It is a useful harness shape for repair, not a block
  assembly benchmark.
- **RepoCoder/Repoformer/cAST** support testing retrieval timing, repository
  context, selective retrieval and syntax-coherent chunks.
- **WebArena** and **BrowserGym** provide self-hosted interactive web tasks and
  standardized browser action spaces. **OSWorld** tests open-ended multimodal
  computer use in real desktop environments. **AgentBench** spans multiple
  agent environments.
- **tau-bench** adds a simulated user, domain policies, tool calls, end-state
  database validation and `pass^k` reliability. That metric is especially useful
  for an agent that must carry out the same workflow safely across repeated runs.

Known validity limits: benchmark contamination, stale environments, grader
leakage, narrow task distributions, model-specific prompt tuning, simulated
users, and success metrics that ignore side effects. Actionist's first benchmark
should be an owned golden set of small vertical tasks with hidden fixtures and
explicit negative/approval/rollback cases.

### OpenTelemetry traces

The OpenTelemetry GenAI conventions expose names for agent/model/tool/retrieval
operations and attributes for tool definitions, arguments/results, prompts,
retrieved documents, token usage and evaluation scores. The current pages label
many GenAI fields as development or moved to a GenAI conventions repository.
Use the vocabulary where stable, but isolate the mapping in one adapter and
avoid treating it as a frozen audit schema. Sensitive prompt, tool and result
content needs retention/redaction policy before capture.

## 7. Sandboxing, tenancy, deployment, and rollback

### Sandbox choices

- **OCI containers** give a portable image/runtime contract and lifecycle model;
  NIST SP 800-190 supplies container threat and control guidance. Containers
  share a host kernel and are not automatically safe for arbitrary hostile code.
- **gVisor** interposes a user-space application kernel to reduce the host-kernel
  attack surface. It is an OCI-compatible runtime, but its documentation still
  calls out host/platform dependencies and the need for separate sandboxes.
- **Firecracker** uses minimal KVM microVMs with seccomp, jailer, namespaces and
  resource controls; its design targets secure multi-tenant execution with low
  overhead. It still depends on correct host configuration and does not remove
  side-channel or data-egress design.
- **WebAssembly/WASI** provides a module sandbox and capability-oriented host
  interfaces for supported workloads. It is attractive for small pure transforms
  and untrusted plugins, but an arbitrary full-stack app is not automatically a
  WASI workload.
- **Kubernetes** can provide namespaces, RBAC, quotas, network policies and Pod
  Security Standards. Its own multi-tenancy guide distinguishes soft sharing
  from hard tenancy and warns that namespace isolation requires several other
  controls.

Minimum execution policy for an unadmitted source or model-generated patch:

```text
ephemeral workspace; no production credentials
deny-by-default egress; explicit package/source allowlist
read-only or scoped source mounts; separate tenant identity and filesystem
CPU/memory/process/time quotas; non-root and restricted capabilities
captured stdout/stderr/trace; deterministic teardown and evidence retention
network and filesystem access are part of the receipt, not hidden runtime state
```

The sandbox protects the host; it does not make a malicious or mistaken action
legitimate. Prompt injection, tool poisoning, credential misuse and data exfiltration
still require input trust boundaries, authorization, egress controls and human
approval.

### Tenancy contract that is currently missing

The Block Contract should explicitly state whether a block is:

- read-only against a host API;
- a shared-schema module with tenant-scoped rows/RLS;
- a schema-per-tenant or database-per-tenant service;
- a separate service with an API-only boundary; or
- a non-data UI component.

It should name the owner of migrations, roles, secrets, audit events, retention,
deletion and recovery. “Uses Postgres” is not a tenancy or safety contract.

### Deployment and rollback

OpenGitOps defines four principles: declarative desired state, versioned and
immutable history, automatic pull, and continuous reconciliation. Kubernetes
Deployments retain revisions and support `rollout history` and `rollout undo`.
Argo Rollouts adds blue/green/canary strategies, metric analysis, promotion and
automated rollback. Temporal provides a different layer: durable workflow state,
replay, retry, pause and recovery, not artifact deployment rollback.

Use a release record with:

```yaml
release:
  block_digest: sha256:<...>
  artifact_digest: sha256:<...>
  sbom_digest: sha256:<...>
  provenance_digest: sha256:<...>
  config_digest: sha256:<...>
  target: preview | staging | production
  migration: expand-contract-id | none
  health_checks: [build, route-smoke, api-contract, browser, visual]
  promotion: {approver, policy, metrics, timestamp}
  rollback: {target_release, command-or-controller, owner, tested_at}
  external_effects: {none | compensating_action_ref}
```

Rollback classes:

| Change | Default recovery | Main caveat |
|---|---|---|
| Static/UI artifact | Re-point to previous immutable digest | CDN/cache and client state may persist |
| Stateless service | Blue/green or canary rollback | Health metrics may miss semantic failures |
| Database schema | Expand/contract and forward-fix; restore only with explicit plan | Destructive migrations are not generally reversible |
| Agent workflow state | Pause/replay from a checkpoint or durable event history | Activities must be idempotent or compensatable |
| External email/payment/browser side effect | Compensation, cancellation or manual remediation | Cannot be undone by reverting code |
| Token/design change | Restore prior token release and visual baseline | User-approved semantics may still need review |

The local architecture's “preview passed” and “production deployed” states must
remain separate. A sandbox-green build is not production-green evidence.

## 8. Recommended applicability profile for Block Contract v1 (inference)

The following is a local profile, not a new standard. It composes the standards
above into a minimum admission profile.

### Required identity and source evidence

- stable namespaced block ID and semver-like release ID;
- immutable source revision and source/archive digest;
- exact source file/snippet boundary and extraction mode;
- SPDX expression, copyright notices, scanner output, unknowns and legal-owner
  decision;
- transform/adaptation recipe, tool versions, diff and reviewer;
- dependency closure and package-manager lockfile.

### Required interface and host evidence

- JSON Schema 2020-12 manifest and receipt schemas;
- OpenAPI/AsyncAPI/CloudEvents contracts for ports/events where present;
- Pact or equivalent provider/consumer checks for non-trivial integrations;
- runtime, OS/architecture, data/tenant/auth/RLS, secret and network contract;
- explicit read/write/side-effect capabilities and action risk class;
- DTCG token source/version, mapping, unresolved values and generated outputs for
  visual blocks.

### Required verification and release evidence

- clean isolated build with pinned environment;
- AST/CST transform fixtures and bounded-diff review;
- unit/typecheck/route/API/browser/visual checks appropriate to the block;
- structured eval receipt with fixed fixtures and repeatability data;
- SPDX or CycloneDX SBOM;
- in-toto/SLSA provenance binding output digest to inputs and builder;
- registry manifest by immutable digest, with attestations as referrers where
  supported;
- named owner, approver, policy version, review expiry, revoke/rollback path;
- deployment receipt separate from preview receipt.

### Default negative decisions

- no license or unresolved source boundary → reference-only/quarantine;
- mixed/dual/copyleft license without legal decision → quarantine/reference;
- unpinned dependency or source → quarantine;
- transform changes outside declared scope → fail;
- build green but contract/visual/tenant proof missing → not admitted;
- tool annotation says “safe” but policy/approval says no → deny;
- deployment lacks immutable artifact and tested recovery target → no release;
- external side effect lacks idempotency, approval and compensation → no agent
  automation.

## 9. Unresolved gaps and falsifiable research questions

1. **No full-pipeline receipt exists.** The program facts say there are zero
   executed license scans, evals, contract tests, or deployment receipts. A
   standard map cannot substitute for the first bounded end-to-end pilot.
2. **Semantic extraction remains unsolved.** AST tools can preserve syntax and
   apply known rewrites; they cannot infer domain meaning, authorization, data
   ownership, or safe migration semantics. Measure manual effort and failure
   reasons for one block before designing automation.
3. **No standard joins rights to code behavior.** SPDX/SBOM/provenance can say
   what was present and built; Pact/browser/eval receipts can say what was tested.
   The join—“this exact licensed source boundary became this behavior”—is a
   local evidence graph.
4. **DTCG does not solve visual reverse engineering.** The format can carry a
   reviewed token set; it cannot infer the set from pixels or prove that all
   components consume it. Measure unresolved hard-coded values and screenshot
   deltas.
5. **Registries remain injection surfaces.** OCI digests protect content identity
   and referrers attach evidence, but a malicious or compromised registry can
   advertise unsafe items. Require trust roots, source/license policy, static
   scans, and review before install.
6. **MCP is moving and annotations are hints.** Pin protocol versions, treat
   server metadata as untrusted input, validate tool schemas, and enforce risk
   and tenant policy outside the model/MCP descriptor.
7. **Agent benchmarks do not measure Actionist blocks.** Web/desktop/tool
   benchmarks are valuable environmental patterns, but local vertical tasks,
   approval states, hidden fixtures, and recovery behavior need a new suite.
8. **Sandbox strength is not data safety.** Firecracker, gVisor, containers and
   WASM have different trust/performance trade-offs; the first pilot needs a
   threat model, network policy and escape/egress tests before any claim of
   multi-tenancy.
9. **Rollback is domain-specific.** Code rollback is not database rollback and
   neither reverses an email, payment, browser action or client-side decision.
   Require idempotency and compensation at the action boundary.
10. **No common maturity scale exists across all dimensions.** SLSA levels are
    about supply-chain security, Scorecard about repository practices, eval
    scores about task performance, and deployment health about runtime state.
    Keep these as separate verdicts rather than one composite “trusted” badge.

Falsifiable pilot questions:

- Does AST-aware, selective retrieval reduce tokens and improve build/contract
  pass rate versus line-window, always-on retrieval on the same tasks?
- What fraction of a permissively licensed UI candidate can be isolated without
  undocumented host/data assumptions?
- How often do license scanners disagree with a human file-level review?
- Does a DTCG token map reduce visual diff and hard-coded-style count without
  increasing repair time?
- What is the repeated `pass^k` rate for a read-only, schema-bound agent task
  under a fixed approval policy?
- Can the release controller restore the previous immutable artifact inside a
  tested time bound without corrupting data or replaying external effects?

## 10. Completed RCH-STANDARDS task slots

| Slot | Result |
|---:|---|
| 1 | Standardization problem framed as a stack of identity, transformation, composition, authority, verification, operation and recovery contracts |
| 2 | SPDX, REUSE and OpenChain mapped; scanner/legal boundary recorded |
| 3 | SPDX/CycloneDX, NTIA/CISA, in-toto, SLSA, Scorecard, OCI and SCITT mapped |
| 4 | ESTree, Tree-sitter, ast-grep, OpenRewrite, LibCST and code-retrieval science mapped |
| 5 | DTCG 2025.10, Style Dictionary and registry formats mapped |
| 6 | OpenAPI, JSON Schema, Pact, AsyncAPI and CloudEvents mapped |
| 7 | MCP tools/auth/elicitation, OAuth RAR/token exchange, Cedar/OPA, PROV and OTel mapped |
| 8 | HELM, Inspect, SWE-bench, tau-bench, WebArena/BrowserGym, OSWorld and AgentBench mapped |
| 9 | OCI/NIST/Kubernetes, Firecracker, gVisor, WebAssembly, OpenGitOps, Argo, Kubernetes rollback and Temporal mapped |
| 10 | Primary code retrieval and GUI-agent papers reviewed; limits and transfer risks recorded |
| 11 | Applicability profile and missing Block Contract fields proposed |
| 12 | Matrix, unresolved gaps, negative decisions, falsifiers and next evidence gates written |

## Packet status and callback evidence

- **Artifact:** this file, `research/actionmodel-builder-research-2026-08-26/outputs/standards-and-science.md`.
- **Evidence count:** 40+ primary specifications, official docs, RFCs, and paper sources linked above; observed 2026-08-26.
- **Research-only boundary:** no code, dependency, client system, credential, or deployment was changed or claimed as verified.
- **Known tool limitation:** the repository's Perplexity helper was not usable because `OPENROUTER_API_KEY` was absent; official web-source inspection was used instead.
- **Outstanding implementation evidence:** no executed license scan, admitted block, contract-test receipt, eval run, or deployment/rollback receipt exists yet.

**Commands and source channels used:** local file inspection with `pwd`, `ls`,
`sed`, `rg`, `find`, `git diff --check`, and `git status`; direct official web
source inspection through the configured web research tool; primary source
families include W3C, SPDX, REUSE, OpenChain/ISO, NTIA/CISA, in-toto, SLSA,
OpenSSF, IETF, OCI, DTCG/W3C Community Group, OpenAPI/JSON Schema/Pact/AsyncAPI,
MCP, OAuth, Cedar/OPA, OpenTelemetry, Stanford CRFM, ACL/EMNLP/ICML papers,
Kubernetes, NIST, Firecracker, gVisor, WebAssembly, OpenGitOps, Argo and
Temporal.
