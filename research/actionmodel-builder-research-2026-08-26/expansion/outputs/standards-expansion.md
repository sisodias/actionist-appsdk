# Standards expansion — Action Model Builder

**Run:** `actionmodel-builder-research-2026-08-26`  
**Lane:** `RCH-STANDARDS-EXP`  
**Phase:** `expansion-2026-08-26`  
**Observed:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**Mode:** research and ideation only; no product implementation, dependency admission, repository copying, client-data use, or deployment claim  
**Status:** complete for the twelve expansion slots; implementation evidence remains absent  
**Baseline:** [`../outputs/standards-and-science.md`](../../outputs/standards-and-science.md), immutable first-pass report  
**Baseline SHA-256 before expansion:** `623cb6eaff5116e5c053d164326650afa3ed9fb964f7502591806e2e515703c5`

This is a delta packet. It does not replace, rewrite, or re-count the first-pass
report. “New” below means a newly inspected source or a materially deeper
applicability/caveat analysis; it does not mean that the standard, tool, or paper
proves that Action Model has implemented or passed the associated control.

## Executive result

The first-pass map had the right broad layers but left several upper-coverage
questions unresolved. The expansion closes the research map around five joins that
are easy to conflate:

1. **Identity is not one field.** A source commit, intrinsic source identity, file
   span, artifact digest, signed attestation, registry trust root, and transparency
   receipt answer different questions. SWHID, SPDX relationships, SLSA/in-toto,
   OCI referrers, TUF, Sigstore, and SCITT can be composed, but none can establish
   legal ownership or semantic correctness by itself.
2. **A transform needs a receipt.** Tree-sitter, LSP, Comby, Semgrep, Coccinelle,
   and CodeQL cover different portions of syntax, navigation, rewrite, semantic
   matching, or analysis. A successful parse or rewrite is not proof that the
   adaptation preserved behavior. A block record needs the grammar/tool versions,
   input and output digests, exact file spans, recipe, diff, and post-transform
   verification result.
3. **Tokens and pixels are separate evidence.** DTCG 2025.10 gives an
   interoperable token representation and resolver semantics. WCAG 2.2 and ARIA
   APG give accessibility requirements/guidance. Playwright, Storybook, and axe
   provide operational evidence. None of those layers proves the other layers.
4. **A tool protocol is not an authority model.** MCP provides a model-context and
   tool exchange protocol; A2A provides agent task/artifact/capability semantics;
   OAuth, HTTP Message Signatures, VC, Cedar/OPA, and trace context provide useful
   adjacent primitives. The missing local object is an action contract that says
   who may do what, on which tenant/resource, under which approval, with what
   idempotency/replay and recovery semantics.
5. **Reliability is multidimensional.** Repository, GUI, tool-state, safety,
   recovery, and repeated-pass reliability need separate measures. SWE-bench-style
   patch success, ToolSandbox stateful tool use, AgentDojo prompt-injection
   robustness, WorkArena++/BrowserGym GUI work, and OSWorld computer use are
   complementary, not interchangeable. The 2026 audit of SWE-bench-derived
   evaluation also demonstrates why benchmark validity must be an explicit gate.

The most important new recommendation is therefore a **typed evidence bundle**:

```text
source identity + file-level rights
  -> transform receipt
  -> normalized block manifest and interface contracts
  -> token/accessibility/visual receipts
  -> build, contract, action, and adversarial eval receipts
  -> sandbox/tenant/egress receipt
  -> signed artifact provenance and registry trust decision
  -> rollout, rollback, or compensation receipt
```

That bundle is a research-derived applicability profile, not a current admission
decision. The program fact remains: there are zero executed license scans, eval
runs, contract-test receipts, or deployment receipts for this lane.

## Evidence classes and source separation

The first-pass `E/D/I/U` vocabulary is retained. This packet adds a source-kind
qualifier so normative text is not silently mixed with implementation behavior or
vendor positioning.

| Qualifier | Meaning in this packet | How it may be used |
|---|---|---|
| `N` | Normative standard, RFC, W3C Recommendation, or published standards-track specification | Define an interoperability target or a testable local field; never claim local conformance without a test |
| `P` | Peer-reviewed, proceedings, or preprint research | Form a falsifiable hypothesis, benchmark design, or risk model; never treat a reported result as a local result |
| `D` | First-party implementation documentation or official repository behavior | Describe what a tool documents or exposes; verify the installed version before relying on it |
| `V` | Vendor or project positioning, release page, leaderboard, or marketing claim | Record as a claim with provenance; require independent or local evidence for a decision |
| `I` | Explicit inference from multiple sources | Useful for a proposed Block Contract field; must be labeled as inference and paired with a falsifier |
| `E` | Directly inspected primary source/repository artifact | Confidence in the source observation, not proof of Action Model behavior |

Every source in the registers below has a direct URL, observed date, source
version/date (or an explicit “not stated”), scope, Block Contract mapping, caveat,
and open gap. Search-result snippets were not used as evidence for a row.

## Baseline audit: missing contract families and expansion action

| First-pass coverage | Expansion finding | New applicability target |
|---|---|---|
| SPDX/REUSE/OpenChain and scanners | Rights were modeled, but source identity, exact file/snippet relationships, and machine-verifiable registry trust were not deep enough | `provenance.source_spans`, `provenance.artifact_digest`, `provenance.rights_receipts`, `registry.trust_root` |
| SBOM/SLSA/in-toto/OCI/SCITT | Build provenance was covered; source-vs-build-vs-deploy views and transparency/trust-root composition needed separation | `evidence.sbom_views`, `evidence.attestations`, `evidence.transparency_receipt`, `release.subject_digest` |
| Tree-sitter/ast-grep/OpenRewrite/LibCST | Transformation mechanisms were named; deterministic semantic-transform receipts and navigation/analysis boundaries needed extension | `transform.parser`, `transform.recipe`, `transform.before_after`, `transform.verification` |
| DTCG/Style Dictionary/registry JSON | Token format was covered; resolver contexts, accessibility semantics, visual determinism, and registry/test boundaries needed extension | `tokens.format`, `tokens.contexts`, `eval.visual`, `eval.accessibility`, `registry.install_receipt` |
| OpenAPI/JSON Schema/Pact/AsyncAPI/CloudEvents | Data/interface contracts were mapped; schema evolution and generated-code compatibility needed a stronger operational caveat | `provides.contract_refs`, `requires.compatibility_policy`, `eval.contract_receipts` |
| MCP/OAuth/Cedar/OPA/OTel | Tool and policy primitives were covered; approval, delegated authority, signed action requests, replay, and side effects were not a single typed contract | `action_contract` and `audit.action_receipt` |
| HELM/Inspect/SWE-bench/GUI benchmarks | Benchmarks were listed; benchmark validity, state reset, negative cases, safety-success separation, and repeated-pass reliability needed explicit gates | `eval.protocol`, `eval.seeds`, `eval.reset`, `eval.metrics`, `eval.falsifiers` |
| Firecracker/gVisor/Wasm/Kubernetes/Argo/Temporal | Runtime and rollback patterns were covered; identity, egress enforcement, fail-open limits, and irreversible side effects needed explicit treatment | `stack_contract.tenant`, `stack_contract.egress`, `release.rollback_or_compensation` |

## Normative and standards-track source register

These are standards or standards-adjacent specifications. A row is not an
implementation receipt. “Applicability” means what the source can inform in a
Block Contract; “gap” is what still has to be decided or tested locally.

| Source; observed version/date | Scope | Block Contract applicability | Caveat and open gap | Class |
|---|---|---|---|---|
| [SPDX 3.0.1 licensing model](https://spdx.github.io/spdx-spec/v3.0.1/model/Licensing/); observed 2026-08-26; SPDX 3.0.1 / ISO/IEC 5962:2021 family | License expressions, declared/concluded licenses, copyright and licensing metadata | `provenance.license`, `copyright`, `rights_receipts`, policy disposition | SPDX expresses claims and relationships; it does not determine whether a particular adaptation is legally permitted or whether a scanner was complete. Open gap: file/snippet scan policy and human escalation record | N/E |
| [SPDX relationship vocabulary](https://spdx.github.io/spdx-spec/v3.0-dev/model/Core/Vocabularies/RelationshipType/); observed 2026-08-26; 3.0 development vocabulary page | Relationships among documents, packages, files, snippets, vulnerabilities, and affected objects | `provenance.source_spans`, `adaptation_log`, VEX/impact relationships, dependency graph | Development page is not a frozen release; relationship semantics do not prove the relationship was populated correctly. Open gap: canonical source-span and generated-file convention | N/E |
| [REUSE Specification 3.3](https://reuse.software/spec-3.3/); observed 2026-08-26; 3.3 | Per-file copyright/license metadata and repository-level compliance layout | File-level attribution receipt; `provenance.copyright`, `license_evidence` | REUSE conformance is a metadata/process check, not a legal opinion or proof of clean dependencies. Open gap: behavior for generated, transformed, embedded, and vendored files | N/E |
| [OpenChain ISO/IEC 5230 FAQ](https://openchainproject.org/resources/faq) and [ISO/IEC 18974](https://www.iso.org/standard/86450.html?browse=ics); observed 2026-08-26; current ISO references | Organizational open-source compliance and security-assurance process | `policy.owner`, review/escalation, supplier process, security assurance | A package is not “OpenChain conformant”; organizational conformance does not prove a block’s license result. Open gap: owner and legal-escalation evidence for each boundary | N/E |
| [CycloneDX specification overview](https://cyclonedx.org/specification/overview/); observed 2026-08-26; 1.7, released 2025-10-21 | SBOM, CBOM, ML-BOM, SaaSBOM and BOM-linkage concepts; dependencies, services, data flows, trust boundaries, VEX and formulation | `evidence.sbom_views`, `requires`, deploy/runtime dependency closure, `release.subject_digest` | A richer format does not guarantee complete inventory; a BOM may be stale or generated from a partial view. Open gap: required source/build/deploy scan coverage and comparison policy | N/D |
| [SLSA v1.2](https://slsa.dev/spec/v1.2/), [source requirements](https://slsa.dev/spec/v1.2/source-requirements), [build basics](https://slsa.dev/spec/v1.2/build-track-basics); observed 2026-08-26; v1.2 | Source and build requirements, immutable revisions, builder identity, dependencies, provenance and verification summaries | `provenance.commit_sha`, builder, resolved inputs, `evidence.attestations`, release policy | SLSA provenance authenticates the producer’s statement and supply-chain properties; it does not establish source intent, semantic correctness, license permission, or all transitive trust. Open gap: local predicate profile for license/transform/eval stages | N/E |
| [in-toto Attestation Framework](https://github.com/in-toto/attestation) and [in-toto specification](https://github.com/in-toto/docs/blob/master/in-toto-spec.md); observed 2026-08-26; current repository/spec pages | Signed statements about subjects, materials, products, steps, actors and predicates | Stage receipts for scan, transform, build, test, admission and release; `evidence.attestations` | Attestations are only as trustworthy as issuer, predicate semantics and verification policy. Open gap: signer identity, predicate schemas, expiry and independent re-execution | N/E |
| [TUF specification](https://github.com/theupdateframework/specification/blob/master/tuf-spec.md); observed 2026-08-26; spec version 1.0.35, dated 2026-07-15 on the inspected page | Root, targets, snapshot and timestamp roles; threshold signatures, key rotation/revocation, expiry, versions, hashes and rollback protection | `registry.trust_root`, trusted registry metadata, release/update channel and key-rotation policy | TUF protects metadata/update distribution; it does not assess code quality, license, runtime safety, or whether a trusted signer made a good decision. Open gap: root-key custody, threshold, offline recovery and block-policy integration | N/E |
| [Sigstore security model](https://docs.sigstore.dev/about/security/) and [tooling](https://docs.sigstore.dev/about/tooling/); observed 2026-08-26; current Fulcio/Rekor/cosign docs | Short-lived signing certificates, transparency log and artifact verification | `release.signature`, signer identity, transparency lookup, artifact admission evidence | Sigstore answers signature/transparency questions, not legal rights, semantic safety, or policy correctness. Open gap: trusted identity issuer, Rekor retention/availability and acceptance policy | N/D |
| [Software Heritage SWHID specification](https://www.swhid.org/swhid-specification/dev/0.Introduction/); observed 2026-08-26; development specification page, version not frozen on page | Intrinsic persistent identifiers for files, directories, revisions and software artifacts | Stable source identity in addition to URL/commit; `provenance.source_identity` and artifact lineage | SWHID creation does not itself archive or resolve the object; identity does not imply license or correctness. Open gap: resolver availability and how source spans map to SWHIDs | N/E |
| [SCITT architecture, RFC 9943](https://www.rfc-editor.org/rfc/rfc9943.html); observed 2026-08-26; RFC published June 2026 | Transparency services for signed statements, policy checks and receipts | Cross-organization audit of admission/release statements; `audit.transparency_receipt` | A transparency service does not decide the policy and cannot repair a false issuer statement. Open gap: privacy, log governance, witness/receipt validation and retention | N/E |
| [OCI distribution specification](https://github.com/opencontainers/distribution-spec/blob/main/spec.md) and [image descriptor](https://specs.opencontainers.org/image-spec/descriptor/); observed 2026-08-26; current 1.1-era spec pages | Digest-addressed artifacts, manifests, descriptors, subject/referrer linkage and distribution APIs | Registry object identity and attachment of SBOM, provenance, license, visual/eval and release receipts | OCI gives transport and identity primitives, not discovery quality, trust-root governance, license admission or runtime safety. Open gap: block artifact media type, referrer discovery fallback and signature verification policy | N/E |
| [DTCG Format Module 2025.10](https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/); observed 2026-08-26; stable 2025.10 final report dated 2025-10-28 | Platform-agnostic token file format, typed values, groups, aliases and references | `tokens_consumed`, token schema/version, alias and type validation, multi-brand inputs | DTCG specifies representation/interchange, not visual quality, contrast, interaction semantics or generated-code correctness. Open gap: accepted subset, translator versions and semantic token review | N/E |
| [DTCG Resolver Module 2025.10](https://www.w3.org/community/reports/design-tokens/CG-FINAL-resolver-20251028/); observed 2026-08-26; resolver version `2025-10-01` in document | Context sets/modifiers, theming and deterministic resolution order | `tokens.contexts`, light/dark/high-contrast/reduced-motion variants and resolved-token receipt | Resolver inputs can still be ambiguous or combinatorially large; resolution does not prove the UI consumes every token. Open gap: conflict policy, fallback behavior and unused-token detection | N/E |
| [WCAG 2.2](https://www.w3.org/TR/2024/REC-WCAG22-20241212/); observed 2026-08-26; W3C Recommendation 2024-12-12 | Testable, technology-neutral accessibility success criteria | `eval.accessibility`, acceptance profile, keyboard/focus/target-size/authentication checks | WCAG does not specify a design system or prove usability for every user; conformance requires applicable success-criterion testing. Open gap: target level, technology-specific test suite and manual review scope | N/E |
| [ARIA Authoring Practices Guide introduction](https://www.w3.org/WAI/ARIA/apg/about/introduction/); observed 2026-08-26; current APG, not Recommendation-track normative standard | Accessible widget patterns, keyboard behavior and implementation guidance | `provides.components`, interaction contract, keyboard and accessible-name test cases | APG explicitly is not a normative standard, conformance model, or production design system. Open gap: deviations must be justified against ARIA/WCAG and tested in supported assistive technologies | D/E |
| [Language Server Protocol 3.17](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/); observed 2026-08-26; 3.17 specification page | Standard JSON-RPC interface for document sync, symbols, references, rename and workspace features | `transform.navigation`, symbol-span provenance, impact analysis before adaptation | LSP capability support varies by server; a language server may be incomplete or unsound. Open gap: server/version pin, fallback behavior and whether edits are applied through a trusted mechanism | N/E |
| [Verifiable Credentials Data Model 2.0](https://www.w3.org/TR/2025/REC-vc-data-model-2.0-20250515/); observed 2026-08-26; W3C Recommendation 2025-05-15 | Issuer/holder/verifier model, tamper-evident credentials and presentations, status and proofs | Approval credentials, reviewer/issuer identity, signed policy decisions, `audit.approval_receipt` | The Recommendation explicitly says verification does not imply truth of claims; business validation and issuer trust remain outside scope. Open gap: whether approvals need VC, ordinary signed records, or both; revocation/status policy | N/E |
| [RFC 9421 HTTP Message Signatures](https://www.rfc-editor.org/rfc/rfc9421.html); observed 2026-08-26; Standards Track RFC, February 2024 | Canonicalized signed HTTP components, signature parameters, key IDs, nonce, created/expiry and covered fields | Signed action requests/receipts with method, authority, URI, body digest, audience, expiry and replay control | Signature verification is only useful if verifier policy requires the right key, fields, freshness and audience. Open gap: key distribution, canonical JSON/body digest, replay store and failure behavior | N/E |
| [A2A specification](https://a2a-protocol.org/latest/specification/); observed 2026-08-26; current protocol version 1.0 pages | Agent cards/capabilities, tasks, artifacts, streaming, cancellation, idempotency, version negotiation, authentication and signed agent cards | `action_contract` for delegated agent tasks, capability discovery, task identity/status, artifact lineage and cancellation | A2A describes inter-agent protocol semantics, not local human approval, tenant isolation, license, safe tool behavior, or business truth. Open gap: map A2A task state to local approval/side-effect/recovery states | N/D |
| [MCP basic protocol](https://modelcontextprotocol.io/specification/2025-11-25/basic); observed 2026-08-26; MCP 2025-11-25 | Session lifecycle, JSON-RPC messaging, capabilities, tools/resources/prompts and protocol negotiation | `provides`/`requires` tool identifiers, tool schema/version and trace linkage | MCP is a context/tool protocol; it does not by itself define least authority, human approval, non-repudiation, tenant policy, or rollback. Open gap: pin tool definitions, authority binding, tool-output trust labels and approval semantics | N/D |
| [OAuth 2.0 Rich Authorization Requests, RFC 9396](https://www.rfc-editor.org/rfc/rfc9396.html) and [token exchange, RFC 8693](https://www.rfc-editor.org/rfc/rfc8693.html); observed 2026-08-26; RFCs published 2023 and 2020 | Structured authorization details and delegated token subject/actor relationships | `action_contract.principal`, `delegation`, resource/action scopes, audience and actor chain | OAuth tokens and RAR details do not define application-specific safety or compensate for over-broad scopes. Open gap: exact action vocabulary, consent UI, token lifetime and downscoping rules | N/E |
| [W3C Trace Context](https://www.w3.org/TR/trace-context/); observed 2026-08-26; current W3C Recommendation page | Trace identifiers and propagation across distributed requests | `audit.trace_id`, parent/child action and build/eval correlation | Trace context is correlation, not an audit ledger, causal proof, policy decision, or privacy-safe retention policy. Open gap: sampling, tenant privacy and immutable receipt linkage | N/E |
| [Kubernetes NetworkPolicy](https://kubernetes.io/docs/concepts/services-networking/network-policies/); observed 2026-08-26; Kubernetes v1.36 docs | Pod ingress/egress isolation, selectors and IP blocks; L4 TCP/UDP/SCTP scope | `stack_contract.egress`, allowed destinations, DNS exception and network proof | Policies have no effect without a supporting network plugin; default egress is allowed; other protocols and IP rewriting vary. Open gap: enforceable provider, DNS/metadata endpoints, proxy bypass and negative egress tests | N/D |
| [NIST SP 800-207 Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final); observed 2026-08-26; final August 2020 | No implicit trust from network location; separate subject/device authentication and authorization | `stack_contract.tenant`, resource policy, workload/user authorization and control-plane design | NIST provides architecture guidance, not a turnkey sandbox or block schema. Open gap: translate principles to concrete tenant/resource/effect policies | N/E |
| [SPIFFE overview](https://spiffe.io/docs/latest/spiffe-about/overview/); observed 2026-08-26; SPIFFE docs show SPIRE v1.15.2 latest on page | Workload identities, short-lived X.509/JWT SVIDs, attestation and federation | `stack_contract.workload_identity`, service-to-service auth, tenant/service binding and rotation receipts | SPIFFE identifies workloads; it does not authorize every action or constrain egress by itself. Open gap: trust domains, attestation roots, identity-to-tenant mapping and revocation/rotation test | D/E |
| [Wasm Component Model and WASI](https://component-model.bytecodealliance.org/); observed 2026-08-26; guide identifies stable WASI 0.2.0 released 2024-01-25 | Interoperable components and capability-shaped host APIs; WASI interfaces | Optional `stack_contract.sandbox_profile`, allowed host capabilities and module ABI | Capability APIs do not make guest code trustworthy; runtime, host bindings, resource limits and network permissions remain decisive. Open gap: chosen runtime, filesystem/network capabilities and escape/DoS tests | D/E |

## Research findings and primary benchmark register

These sources are findings, not standards. They inform hypotheses and test design;
their reported numbers are not Action Model results.

| Paper or research source; observed version/date | Finding relevant to the builder | Block Contract / eval mapping | Limit and falsifier | Class |
|---|---|---|---|---|
| [Tree-sitter introduction](https://tree-sitter.github.io/tree-sitter/); observed 2026-08-26; current docs, runtime version not stated | Incremental concrete syntax trees, error tolerance and fast parsing across many languages | `transform.parser`, AST-aware spans, incremental validation and syntax-coherent retrieval | CST structure is not full program semantics; grammar quality and query design matter. Falsifier: parser accepts a transform while type/build/behavior checks regress | D/E |
| [Comby overview](https://comby.dev/docs/overview), [API](https://comby.dev/docs/api); observed 2026-08-26; current docs, version not stated | Lightweight language-aware structural matching and rewriting, with match/rewrite/substitute JSON results and ranges | `transform.recipe`, exact match environment, before/after ranges, dry-run and diff receipt | Generic structural parsing is not semantic/type analysis; rewrite templates can still be wrong. Falsifier: randomized/fixture corpus shows syntactically valid but behaviorally incorrect rewrites | D/E |
| [Semgrep rule writing](https://semgrep.dev/docs/writing-rules/overview) and [rule-defined fixes](https://semgrep.dev/docs/writing-rules/rule-defined-fix); observed 2026-08-26; current docs, version not stated | Pattern/dataflow rules; deterministic user-defined `fix`/`fix-regex`; dry-run and autofix paths | `transform.policy`, bounded codemod and static finding receipt; separate deterministic fix from AI suggestion | Semgrep’s docs distinguish deterministic user-defined fixes from AI features; a fix is not a semantic proof. Falsifier: rule test fixtures or post-fix type/behavior tests fail | D/E |
| [Coccinelle home](https://coccinelle.gitlabpages.inria.fr/website/) and [semantic-patches paper](https://coccinelle.gitlabpages.inria.fr/website/papers/ols07-padioleau.pdf); observed 2026-08-26; current site plus 2007 paper | SmPL semantic patches target collateral API evolution and bug finding/fixing in C systems code | `transform.semantic_recipe`, patch review, API migration receipts and language-specific capability | Strongest evidence is C/Linux-oriented; not a general UI-repository transform solution. Falsifier: non-C block transform cannot be represented or verified with equivalent guarantees | P/D/E |
| [CodeQL overview](https://codeql.github.com/docs/codeql-overview/about-codeql/); observed 2026-08-26; current docs, version not stated | Extracts syntactic, name-binding, type, data-flow and control-flow representations; supports variant analysis at repository scale | `transform.analysis`, retrieval risk checks, security post-transform gate and data-flow evidence | CodeQL is an analysis/query tool, not a rewrite engine; extraction depends on build/language support. Falsifier: query coverage misses known seeded variant or build extraction is incomplete | D/E |
| [SWE-rebench](https://swe-rebench.com/about) and [pipeline paper](https://openreview.net/pdf/79c762b6e65956cefc54dd56641c229683f923e7.pdf); observed 2026-08-26; current leaderboard/about page and 2025 paper | Decontaminated, continuously collected, executable repository tasks with fixed scaffolding and standardized interaction modes | `eval.protocol`, fresh/held-out task pool, environment manifest, fixed prompts and trajectory storage | Dataset freshness and fixed scaffolding improve comparability but do not guarantee task validity or transfer to block assembly. Falsifier: task audit finds broken installs/tests, or results change materially across scaffold/seed | P/V/E |
| [SWE-Bench Pro paper](https://arxiv.org/abs/2509.16941) / [OpenReview](https://openreview.net/forum?id=9R2iUHhVfr&noteId=LWVlPBGyZS); observed 2026-08-26; 2025 paper, ICLR 2026 submission | Long-horizon, enterprise-oriented repository tasks across public, held-out and commercial sets | `eval.repository`, multi-file/long-horizon task strata, held-out contamination control | Enterprise realism and held-out data help, but a benchmark is not a product quality guarantee. Falsifier: local task audit shows broken tests, hidden assumptions or strong scaffold sensitivity | P/E |
| [OpenAI audit: Separating signal from noise in coding evaluations](https://openai.com/index/separating-signal-from-noise-coding-evaluations/); observed 2026-08-26; published 2026-07-08 | Reports an audit estimating widespread task issues in SWE-bench Pro and argues benchmark flaws can distort capability and safety decisions | `eval.validity`, task-health audit, judge/fixture provenance and “benchmark not valid” blocker | This is an external audit, not an independent replication here; the estimate is not a universal correction factor. Falsifier: an independently sampled local audit with preregistered criteria disagrees | P/V/E |
| [ToolSandbox paper](https://arxiv.org/abs/2408.04682) and [NAACL Findings version](https://aclanthology.org/anthology-files/anthology-files/pdf/naacl/2025.naacl-findings.65.pdf); observed 2026-08-26; 2024 preprint / 2025 Findings | Stateful tool execution, implicit state dependencies, conversational user simulation, on-policy trajectories and milestone evaluation | `eval.tool_state`, action preconditions/postconditions, state reset, intermediate and final receipts | Tool APIs and simulator state may not represent a real tenant or production side effect. Falsifier: success disappears under state perturbation, tool failure injection, or real-provider contract tests | P/E |
| [Agent-SafetyBench](https://arxiv.org/abs/2412.14470) and [official repository](https://github.com/thu-coai/Agent-SafetyBench); observed 2026-08-26; 2024 paper, code/data release noted 2025-02-20 | 349 environments, 2,000 cases, eight risk categories and ten failure modes; reports low safety scores for evaluated agents | `eval.safety`, negative/unsafe action cases, risk taxonomy and separate safety score | Benchmark scope and model panel are bounded; safety score is not general security or tenant isolation. Falsifier: a controlled local suite produces different rankings or fails to cover the block’s actual tools | P/E |
| [AgentDojo paper](https://proceedings.neurips.cc/paper_files/paper/2024/file/97091a5177d8dc64b1da8bf3e1f6fb54-Paper-Datasets_and_Benchmarks_Track.pdf) and [docs](https://agentdojo.spylab.ai/); observed 2026-08-26; NeurIPS 2024 | Dynamic, extensible evaluation of prompt injection against agents using untrusted tool data; 97 tasks and 629 security cases in v1 | `eval.adversarial`, untrusted-output boundary, attack/defense matrix and utility-vs-safety metrics | The benchmark’s tools/tasks differ from a block’s system; a defense result is not universal. Falsifier: injection succeeds through an unmodeled channel, or safety pass depends on a single attack family | P/E |
| [WorkArena++ paper](https://papers.nips.cc/paper_files/paper/2024/file/0b82662b6c32e887bb252a74d8cb2d5e-Paper-Datasets_and_Benchmarks_Track.pdf) and [official repo](https://github.com/ServiceNow/workarena); observed 2026-08-26; NeurIPS 2024 | 682 compositional enterprise web tasks, visual diversity, database isolation, oracle traces and human baseline | `eval.gui`, multi-step GUI workflows, state isolation, oracle/feasibility checks, human comparison | ServiceNow tasks are a particular domain/platform; benchmark completion is not accessibility or production deploy evidence. Falsifier: GUI success fails under viewport/browser/accessibility variants or state leakage | P/E |
| [BrowserGym ecosystem paper](https://openreview.net/pdf?id=5298fKGmv3) and [official repo](https://github.com/ServiceNow/BrowserGym); observed 2026-08-26; TMLR 2025 paper / current repo | Common browser-agent interface, multiple benchmarks, traces and unified experiment/reproducibility tooling | `eval.gui.protocol`, trace capture, cross-benchmark comparison and environment manifests | Unified interfaces can hide task/scaffold differences; cross-benchmark scores still need task and metric labels. Falsifier: same agent changes rank under environment/seed/task-order changes | P/D/E |
| [OSWorld paper](https://arxiv.org/abs/2404.07972) and [OSWorld 2.0 release](https://github.com/xlang-ai/OSWorld-V2); observed 2026-08-26; 2024 paper / 2026 release `osworld-v2-2026.06.24` | Real desktop/web apps, multi-application workflows, long-horizon and visual-spatial/implicit-state challenges | `eval.computer_use`, OS/browser/app matrix, screenshot/action trace and recovery cases | Environment versions, credentials, host timing and app drift affect reproducibility; computer-use success is not code/provenance success. Falsifier: replay fails on pinned image or behavior varies across host/runtime | P/D/E |
| [Safety or capability? validity audit of agent-safety benchmarks](https://arxiv.org/abs/2607.28685); observed 2026-08-26; 2026 preprint | Shows that benchmark names and scores can be conflated; model rankings and correlations vary by metric, panel and target behavior | `eval.metric_definition`, model panel, confidence interval, target behavior and validity audit | New preprint requiring replication; does not invalidate every benchmark. Falsifier: preregistered repeated local panel shows stable target-specific conclusions | P/E |
| [SWE-bench original paper](https://arxiv.org/abs/2310.06770); observed 2026-08-26; 2023 paper | Repository-level issue-to-patch evaluation with test-based verification | `eval.repository` and patch/test harness baseline | Public task exposure, scaffold variance and test incompleteness limit capability interpretation. Falsifier: held-out/mutated tasks diverge materially from public score | P/E |

## Implementation and vendor/project evidence register

These sources document usable mechanisms or project claims. They are not
normative requirements and do not constitute evidence that Action Model runs them.

| Source; observed version/date | Mechanism or claim | Block Contract applicability | Caveat and open gap | Class |
|---|---|---|---|---|
| [GUAC documentation](https://docs.guac.sh/) and [OpenSSF GUAC talk](https://openssf.org/wp-content/uploads/2024/06/openssf_techtalk_guac_061024a.pdf); observed 2026-08-26; current docs/2024 talk | Ingests SBOM, vulnerability and attestation metadata into a graph for risk queries | `evidence.graph`, dependency/attestation joins, missing-evidence queries and review dashboard | GUAC is an operational graph, not an SBOM/provenance standard and not a truth oracle. Open gap: graph ingestion completeness, source precedence and tenant privacy | V/D |
| [Buf breaking-change docs](https://buf.build/docs/breaking/); observed 2026-08-26; current docs, version not stated | Schema compatibility rules and CI/registry workflows for Protobuf modules | `provides.contract_refs`, `requires.compatibility_policy`, generated SDK and schema-evolution receipts | Buf behavior is product-specific; Protobuf’s own docs say it is not a formal standards-body standard. Open gap: chosen compatibility profile and cross-schema policy | D/V/E |
| [Gatekeeper introduction](https://open-policy-agent.github.io/gatekeeper/website/docs/); observed 2026-08-26; v3.23.x docs | Validating/mutating admission webhook, audit, dry-run, deny/warn and fail-closed options | `policy.admission`, `stack_contract.policy_profile`, pre-deploy and registry gates | Admission is only as strong as webhook availability, policy coverage and deployment configuration; mutation can alter inputs. Open gap: fail-closed policy, audit-to-admission parity and emergency recovery | D/E |
| [Playwright visual comparisons](https://playwright.dev/docs/test-snapshots); observed 2026-08-26; current docs, version not stated | Golden screenshot and text/binary snapshots, diffs, `maxDiffPixels`, style filtering and committed baselines | `eval.screenshot_baseline`, browser/OS fingerprint, diff thresholds and baseline approval | Official docs warn rendering varies by OS, browser, hardware and settings; visual pass is not semantic or accessibility proof. Open gap: pinned image, font set, dynamic masking and threshold policy | D/E |
| [Storybook testing](https://storybook.js.org/docs/writing-tests); observed 2026-08-26; docs version 10.5 | Stories as component states; real-browser render, interaction, accessibility, visual and coverage workflows | `eval.component_states`, `provides.components`, interaction/accessibility receipts | Storybook’s test runner and addons are implementation tools; coverage is not quality and examples may be incomplete. Open gap: required story matrix, state fixtures and CI artifact retention | D/V/E |
| [axe-core repository](https://github.com/dequelabs/axe-core); observed 2026-08-26; current repository, version not stated | Automated accessibility engine for web UI testing | `eval.accessibility`, automated rule result attached to component/page receipt | Automated rules cannot cover all WCAG or usability; rules/version/environment matter. Open gap: selected rule set, manual keyboard/screen-reader checks and false-positive handling | D/E |
| [OpenFeature specification sections](https://openfeature.dev/specification/category/sections/), [evaluation context](https://openfeature.dev/specification/sections/evaluation-context/), [hooks](https://openfeature.dev/specification/sections/hooks/); observed 2026-08-26; current spec pages, version not stated | Vendor-neutral feature-flag API, typed evaluation context, hook lifecycle and telemetry/error hooks | `release.flags`, cohort/targeting context, kill switch, progressive delivery and audit hooks | Feature flags can hide semantic regressions; context data can leak or be mutable; provider behavior varies. Open gap: flag ownership, expiry, default-safe behavior and rollback linkage | D/V |
| [Argo Rollouts](https://argoproj.github.io/argo-rollouts/) and [rollback window](https://argoproj.github.io/argo-rollouts/features/rollback/); observed 2026-08-26; current docs, controller version not fixed | Blue/green/canary, metric analysis, automated promotion/rollback and fast rollback windows | `release.rollout`, health gates, stable revision, rollback target and receipt | Argo docs state there is no agreed canary standard; metric-driven rollback can miss semantic/data/action failures. Open gap: health signal ownership, rollback-window retention and migration/side-effect policy | D/V |
| [Kubernetes rollout undo](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/kubectl_rollout_undo/); observed 2026-08-26; current kubectl docs | Revision-based deployment rollback command | `release.rollback`, exact command/controller, target revision and operator identity | Reverting a manifest does not undo data migrations or external effects. Open gap: database expand/contract and compensation procedure | D/E |

## Slot-by-slot completion record

The twelve slots are intentionally explicit so “covered by a long report” is not
mistaken for a task ledger.

| Slot | Completed work | Output evidence |
|---:|---|---|
| 1 | Audited the first-pass matrix for missing contract families, especially source identity, trust roots, transform receipts, resolver contexts, action authority, eval validity, egress enforcement and side-effect rollback | Baseline audit table above; gap matrix below |
| 2 | Deepened rights/provenance with SPDX relationships, REUSE, OpenChain, CycloneDX formulation/VEX scope, SWHID, TUF, Sigstore, SLSA source track, SCITT and GUAC | Normative register rows 1–12; rights/provenance notes |
| 3 | Compared registry/artifact identity and trust-root models: VCS/SWHID, OCI digest/referrers, Sigstore transparency, TUF delegated roles and SCITT receipts | Trust-root subsection and `registry.trust_root` gap row |
| 4 | Extended AST/CST/codemod/retrieval/semantic-transform coverage through Tree-sitter, LSP, Comby, Semgrep, Coccinelle and CodeQL | Research register rows 1–5; transform receipt proposal |
| 5 | Extended DTCG format/resolver, WCAG/APG, Playwright, Storybook and axe applicability to token, visual and accessibility proof | Normative rows 13–16 and implementation rows 4–6 |
| 6 | Extended OpenAPI/JSON Schema/Pact/AsyncAPI/CloudEvents baseline with Protobuf/Buf compatibility and schema-evolution caveats | Baseline audit; Buf row; contract gap matrix |
| 7 | Extended MCP with A2A, OAuth RAR/token exchange, RFC 9421, VC 2.0, Trace Context and policy/identity boundaries | Normative rows 17–22; action contract proposal |
| 8 | Extended eval science for repository, GUI, tool-state, safety, adversarial, validity, recovery and repeated-pass design | Research register rows 6–15; eval protocol proposal |
| 9 | Extended sandbox/tenancy/egress/deployment/rollback with NIST ZTA, SPIFFE, Kubernetes NetworkPolicy, WASI, Gatekeeper, OpenFeature and Argo | Normative rows 23–27; implementation rows 3, 7–9 |
| 10 | Separated normative text, research findings, implementation behavior and vendor/project positioning | Evidence classes plus three source registers |
| 11 | Produced a gap-to-Block-Contract applicability matrix with local falsifiers | Matrix below |
| 12 | Verified source URLs, observed dates/version labels, immutable baseline hash, output path and coordinator callback requirements | Validation record and callback evidence are recorded in the final handoff message/state |

## Expanded applicability notes

### 1. Rights, provenance, SBOM and trust roots

The first-pass `provenance` object has `source_url`, `commit_sha`, `license`,
`copyright`, and `adaptation_log`. The expansion suggests treating it as a
lineage graph rather than a flat object:

```yaml
provenance:
  source:
    url: ...
    vcs_revision: ...
    swhid: ...
    artifact_digest: sha256:...
    file_spans:
      - path: src/...
        byte_or_line_range: ...
        source_digest: sha256:...
        license_expression: MIT
        copyright_evidence: ...
        scan_receipt: ...
  transform:
    recipe_id: ...
    tool: tree-sitter|lsp|comby|semgrep|coccinelle|custom
    tool_version: ...
    before_digest: sha256:...
    after_digest: sha256:...
    diff_ref: ...
    reviewer_or_policy: ...
  attestations: [...]
  transparency_receipts: [...]
```

The proposed joins are:

- **SPDX/REUSE** describe rights and attribution at package/file/snippet scope.
- **SWHID** gives an intrinsic identity that is more stable than a mutable URL or
  branch name.
- **CycloneDX/SPDX SBOMs** describe composition; CycloneDX’s broader model is
  useful for separating source, build, deployment, service and data-flow views.
- **SLSA/in-toto** bind a subject to materials, steps, builder and predicates.
- **OCI** stores a digest-addressed block artifact and related receipts.
- **Sigstore** can make signing/transparency observable for artifacts and claims.
- **TUF** protects the registry’s delegated metadata and update channel against
  rollback, stale metadata and key-compromise classes that a bare signature does
  not address.
- **SCITT** can provide an externally verifiable history of signed policy or
  admission statements when cross-organization transparency is actually needed.

These layers are complementary. A TUF-verified target may still contain an
incorrect or malicious block; a Sigstore signature may be authentic but issued by
an identity the local policy does not trust; an SPDX expression may be accurate
but incomplete; and an SBOM may omit a dynamically fetched dependency. The local
falsifier is therefore not “signature verifies,” but “the required source spans,
license evidence, subject digest, signer/trust root, predicate, expiry and policy
decision all join to the same immutable artifact, and a known-bad mutation is
rejected.”

### 2. AST/CST, codemod and semantic transformation

There is no single “AST standard” that solves block extraction. The mechanisms
occupy different levels:

| Level | Useful source | What it can prove | What it cannot prove |
|---|---|---|---|
| Parse/CST | Tree-sitter | A grammar produced a tree/ranges for a pinned input | Type correctness, behavior, runtime dependencies |
| Navigation | LSP | A server exposes symbols/references/rename or diagnostics | That the server is complete or an edit is behavior-preserving |
| Structural rewrite | Comby, Semgrep fixes | A bounded pattern matched and a deterministic rewrite produced a diff | Semantic equivalence, hidden side effects, license boundary |
| Semantic patch | Coccinelle/SmPL | A declarative transformation can target semantic C patterns | General-language or UI portability |
| Program analysis | CodeQL | A query found variants/data/control-flow relationships in extracted code | Safe rewrite or absence of all vulnerabilities |

The Block Contract should distinguish `extract` from `adapt`: extraction records
which files/spans were selected, while adaptation records every transformation
recipe and before/after digest. A transform stage should fail closed when parsing,
symbol resolution, scope matching, or post-transform verification is unavailable.
The minimum research test design is a fixture corpus with:

- positive matches and intentional non-matches;
- nested syntax, comments, strings, generated files and language extensions;
- compile/type/build checks after each transform;
- behavior tests for the transformed public surface;
- license and copyright re-scan after transformation; and
- a manual-review sample for false positives and source-boundary mistakes.

### 3. Design tokens, registries and visual proof

DTCG 2025.10 should be treated as an interchange boundary for the token contract,
not as a design-quality score. The resolver module makes context selection and
resolution order explicit, which is valuable for multi-brand, dark, high-contrast
and reduced-motion variants. The contract should retain both the authored token
sets and the resolved token output used by a specific build.

The proof layers should remain separate:

1. DTCG parse/type/alias/resolver validity.
2. Static check that block styles consume declared tokens rather than hardcoded
   values, with an explicit allowlist for semantic exceptions.
3. WCAG 2.2 target-level checks and ARIA/APG-derived interaction cases.
4. Storybook state and interaction coverage for each exported component.
5. Playwright screenshot/text snapshots from a pinned browser/OS/font environment.
6. axe-core automated results plus manually scoped keyboard and assistive-technology
   checks where required.

Playwright’s own documentation warns that host OS, browser version, settings,
hardware, power source and headless mode can alter screenshots. Therefore a visual
receipt must include browser/runtime image, viewport, fonts, locale, color scheme,
reduced-motion setting, masking policy and threshold. A screenshot match without
these fields is not reproducible visual evidence.

### 4. API, schema, message and registry contracts

The first-pass OpenAPI/JSON Schema/Pact/AsyncAPI/CloudEvents map remains the right
set of interface families. The expansion adds two operational distinctions:

- **Schema format versus compatibility policy.** Protocol Buffers’ official docs
  describe the format and compatibility practices but explicitly say it is not a
  formal standards-body standard. Buf documents executable breaking-change rules;
  that is useful implementation evidence, not a universal policy.
- **Catalog presence versus installability versus admission.** A registry manifest
  can describe files, dependencies and types. It does not prove license, behavior,
  tenant safety or visual fidelity. A block should not move from “catalogued” to
  “admitted” without linked receipts.

For every `provides`/`requires` edge, record the contract dialect and version:

```yaml
contract_ref:
  kind: openapi|json-schema|asyncapi|cloudevents|pact|protobuf|mcp|a2a
  id: ...
  version: ...
  digest: sha256:...
  compatibility_policy: backward|forward|full|breaking-review
  generated_artifacts: [...]
  receipt: ...
```

The falsifier is a clean consumer/provider run against the pinned contract and
fixtures, including negative and unknown-field cases. A schema parser pass alone
is insufficient.

### 5. Action approval, authority, audit and provenance

The expansion recommends a local `action_contract` adjacent to `provides` and
`requires`; this is an inference, not a standard-defined object:

```yaml
action_contract:
  action_id: namespaced/versioned
  capability_ref: mcp-or-a2a-capability
  principal: user|agent|service
  actor_chain: [...]
  tenant: ...
  resource: ...
  operation: read|write|publish|delete|external_effect
  input_schema: ...
  output_schema: ...
  risk_class: read_only|reversible|irreversible|financial|privacy
  approval:
    required: true|false
    approver_role: ...
    receipt: ...
  authorization:
    scopes: [...]
    audience: ...
    policy_ref: ...
  idempotency_key: ...
  expiry: ...
  replay_protection: ...
  trace_id: ...
  effect_receipt: ...
  recovery: rollback|compensate|manual|none
```

How the sources contribute:

- MCP gives a tool/capability exchange and schema surface, but not authority.
- A2A adds agent cards, task identity, artifacts, status, cancellation,
  idempotency and versioning for delegated work.
- RAR/token exchange give structured permission and actor/delegation concepts.
- RFC 9421 can sign the critical HTTP request components and freshness parameters.
- VC 2.0 can represent an issuer/holder/verifier-style approval or attestation,
  but verification does not establish the truth of the approved claim.
- Trace Context correlates distributed steps but is not an immutable audit log.
- Cedar/OPA/Gatekeeper remain policy engines or admission mechanisms, not action
  semantics; their decision must be recorded with policy version and inputs.

The falsifier set should include replay, expired signature, wrong audience, wrong
tenant, over-broad scope, missing approval, tool-definition drift, partial failure,
duplicate request and an external effect with no compensating action. “The model
asked for the tool” is never an authority receipt.

### 6. Evaluation and reproducibility

The expanded benchmark map supports a layered eval protocol:

| Layer | Required question | Example evidence family |
|---|---|---|
| Repository | Did the extraction/adaptation build and satisfy intended tests? | SWE-bench, SWE-rebench, SWE-Bench Pro |
| Contract | Do consumer/provider/message/schema edges behave as declared? | Pact, OpenAPI/JSON Schema, AsyncAPI/CloudEvents, Buf |
| UI/component | Do states, interactions, accessibility and visual targets hold? | Storybook, Playwright, axe, WCAG/APG |
| Tool state | Does the agent handle preconditions, hidden state, missing information and recovery? | ToolSandbox, tau-bench baseline |
| Adversarial | Does untrusted content cause unsafe action or data escape? | AgentDojo, Agent-SafetyBench |
| GUI/computer | Does it operate realistic multi-step web/desktop workflows? | WorkArena++, BrowserGym, OSWorld |
| Repetition | Does it pass across seeds, task order, resets and model/provider retries? | Local repeated-pass protocol |
| Operations | Can it deploy, observe, abort, roll back or compensate? | Argo/Kubernetes/Temporal receipts |

Each run should record model/provider and version, prompt/fixture IDs, seed, task
revision, environment image, tool definitions, permissions, state-reset method,
grader/scorer version, raw trace, verdict, cost/latency and failure taxonomy.

The expansion also adds a validity gate: every benchmark task needs a healthy
installation, executable oracle, expected-result review, license/access check,
contamination posture and a declared target behavior. A single aggregate score
must not combine safe refusal, unsafe success, incomplete work, human takeover,
and successful reversible recovery without reporting them separately.

### 7. Sandbox, tenancy, egress, deployment and rollback

The runtime stack should model at least four independent boundaries:

1. **Process/runtime boundary:** OCI, microVM, gVisor or Wasm/WASI choice and
   resource limits.
2. **Workload identity boundary:** SPIFFE/SVID or another pinned workload identity,
   with tenant mapping and rotation.
3. **Network/egress boundary:** explicit destinations, DNS and metadata-service
   treatment, proxy enforcement, and negative tests. Kubernetes docs state default
   egress is allowed and NetworkPolicy has no effect without a supporting plugin.
4. **Data/effect boundary:** database/schema/RLS ownership, secrets, external APIs,
   action approval and compensation.

NIST zero-trust principles support the architecture but do not instantiate it.
Gatekeeper can validate or mutate Kubernetes resources and audit violations, but
the local policy must decide whether admission is fail-closed and how emergency
recovery works. OpenFeature gives a standard-shaped flag/evaluation context useful
for kill switches and cohort rollout; it does not make a flag a rollback for
already executed side effects.

Rollback must be typed:

| Surface | Possible rollback | Irreversible limitation |
|---|---|---|
| Registry/artifact | Repoint trusted target or deploy prior digest | Consumers may have cached or already executed the artifact |
| Stateless runtime | Argo/Kubernetes previous revision or traffic switch | Health signals can miss semantic defects |
| Configuration/flag | Disable or revert flag with recorded context | Some users may already observe or persist new behavior |
| Database schema | Expand/contract, forward fix, restore with explicit plan | Destructive migrations and data writes are not generally reversible |
| External action | Idempotent retry or compensating action | Payments, messages, deletion and third-party effects may be irreversible |
| Durable workflow | Pause/retry/replay/compensate via workflow engine | Replay requires deterministic history and does not undo outside effects |

The release contract must therefore require `rollback_or_compensation` and a
tested owner/runbook, not merely `previous_version`.

## Gap-to-Block-Contract applicability matrix with falsifiers

This is the principal research output of slot 11. “Proposed field” is an inference;
it is not a request to implement it in this research lane.

| Block Contract area | Source families | Proposed evidence fields | Local falsifier before admission | Current status |
|---|---|---|---|---|
| `block.id`, artifact identity | SWHID, OCI descriptor, Git commit, content hashes | stable ID/version, subject digest, source revision, SWHID, artifact media type | Change a file or tag without changing the claimed identity; verifier must reject or identify drift | Required shape inferred; no local receipt |
| `provenance` rights | SPDX, REUSE, OpenChain, ScanCode/FOSSology baseline | file/snippet spans, SPDX expression, declared/detected/concluded license, copyright evidence, scan command/version/receipt, legal escalation | Seed mixed-license, missing-notice, generated and vendored fixtures; expected dispositions must match policy and human review | Policy draft only; zero executed scan |
| `provenance` lineage | PROV, SLSA, in-toto, CycloneDX | materials, activities, agents, transform/build steps, builder, source/build/deploy BOM views, predicate digests | Alter an input, tool, builder or output after attestation; verification must fail | Standards mapped; no attestation emitted |
| `registry.trust_root` | TUF, Sigstore, SCITT, OCI referrers | trusted root version, threshold, key IDs, expiry, target digest, signature/transparency/SCITT receipt | Mutable tag, expired metadata, revoked key, rollback version or untrusted signer must not resolve as admitted | Research target; no registry verifier |
| `transform` | Tree-sitter, LSP, Comby, Semgrep, Coccinelle, CodeQL | parser/grammar/server/tool version, exact spans, recipe ID, before/after digest, diff, analysis result, reviewer | Malformed syntax, ambiguous scope, false positive, semantic regression or missing post-check must quarantine | Proposed receipt; no transform run |
| `stack_contract` runtime | OCI, Firecracker/gVisor/Wasm, package manager and lockfile | runtime, OS/arch, image/module digest, limits, package lock, native dependencies, secret requirements | Rebuild from clean pinned environment; mismatch or undeclared dependency fails | Existing field too coarse; no clean proof |
| `stack_contract` tenancy | NIST ZTA, SPIFFE, Kubernetes tenancy/PSS baseline | tenant ID boundary, data owner, RLS/schema policy, workload identity, namespace/service account, secret scope | Two tenants with adversarial IDs/data must not read/write each other; identity mismatch denies | Open gap; no tenant receipt |
| `stack_contract.egress` | Kubernetes NetworkPolicy, proxy/firewall, WASI capabilities | allowed DNS/hosts/ports, denied destinations, metadata policy, network plugin, proxy route | Attempt direct IP, DNS rebinding, proxy bypass and metadata access; expected deny is observed | Open gap; no egress test |
| `provides`/`requires` | OpenAPI, JSON Schema, Pact, AsyncAPI, CloudEvents, Protobuf/Buf, registry JSON | dialect/version/digest, routes/events/components/migrations/env vars, compatibility policy, dependency closure | Consumer/provider negative and unknown-field fixtures fail correctly; generated clients match schema | Contract families mapped; no receipt |
| `tokens_consumed` | DTCG format/resolver, Style Dictionary baseline | token source/version, resolver context, resolved digest, consumed/unused token report, fallback policy | Delete/rename a required token or alter context; build and visual gate must fail or show explicit fallback | Proposed; no token receipt |
| UI/component proof | WCAG, ARIA APG, Storybook, axe, Playwright | target level, keyboard/state matrix, axe version/results, browser/OS/font/viewport, screenshot baseline/diff | Focus/keyboard/name/contrast/state and visual mutation tests must detect expected failures | Tools mapped; no execution claimed |
| `action_contract` authority | MCP, A2A, OAuth RAR/token exchange, Cedar/OPA, VC | principal/actor chain, tenant/resource/operation, risk, scope/audience, approval, policy version, expiry, idempotency, replay, trace | Replay, scope escalation, wrong tenant/audience, expired signature, tool drift, missing approval and duplicate execution must deny or compensate | Proposed inference; no action harness |
| action audit/provenance | RFC 9421, VC, W3C Trace Context, OTel GenAI baseline | signed request/response, request/body digest, trace/parent, policy decision, approval, effect and recovery receipt | Remove/alter a critical field or break trace linkage; verifier must expose incomplete audit rather than silently pass | Required concept; no receipt |
| `eval` repository/contract | SWE-bench family, Pact/Buf/OpenAPI, Inspect/HELM baseline | task/fixture/repo revision, prompt/model/provider, seed, environment image, scorer, raw verdict, retries | Held-out, mutated and negative fixtures separate from public tasks; broken task/oracle is a blocker | Protocol proposed; no run |
| `eval` GUI/visual | WorkArena++, BrowserGym, OSWorld, Storybook, Playwright | browser/desktop image, viewport, task state, action trace, screenshot/text snapshots, reset and human baseline | Run twice from reset and across pinned hosts; state leakage or visual drift is visible and reported | Protocol proposed; no run |
| `eval` safety/recovery | AgentDojo, Agent-SafetyBench, ToolSandbox, tau-bench baseline | untrusted inputs, attack family, safe-success/unsafe-success/refusal, pre/post state, recovery class | Tool-output injection, partial failure, duplicate request, missing information and rollback/compensation cases | Protocol proposed; no run |
| `release` | SLSA/in-toto, OCI, OpenFeature, Argo/Kubernetes, OpenGitOps baseline | release digest, signed provenance, rollout plan, health gates, flag context, stable revision, rollback/compensation receipt | Abort rollout and replay release; prove previous artifact or compensating action, not only a green deployment | Open gap; zero deploy receipt |
| `audit` and retention | SCITT, OTel, Trace Context, local append-only store | event schema, signer, trace, subject digest, policy version, timestamp, retention and redaction | Tamper/omission/reorder and tenant privacy tests must be detectable without exposing secrets | Open gap; no ledger receipt |

## Recommended evidence bundle, as research specification

For a future implementation or pilot, the smallest defensible bundle is:

1. **Source receipt:** URL, immutable revision, SWHID/content digests, selected
   file/snippet spans, copyright and SPDX/REUSE evidence, scanner version and
   policy disposition.
2. **Transform receipt:** extraction manifest, parser/transform tool versions,
   deterministic recipe, before/after digests, diff, reviewer/policy identity and
   post-transform license re-scan.
3. **Block manifest:** block identity/version/digest, kind, runtime/OS/architecture,
   package lock, data/auth/tenant/secret/egress assumptions, provides/requires
   contracts, token inputs and dependency edges.
4. **Interface receipt:** schema/contract digests, compatibility result, consumer-
   provider or message tests, negative fixtures and generated artifact versions.
5. **UI receipt:** DTCG/resolver result, component state/interaction matrix,
   accessibility result, browser environment, visual baseline and diff.
6. **Action receipt where applicable:** authority/principal/tenant/resource,
   approval and policy decision, signed request/response, idempotency/replay,
   trace, effect and recovery result.
7. **Eval receipt:** fixed task/fixture revision, model/provider/tool versions,
   seed/repetition/reset, raw trace, scorer version, safety/utility/recovery
   metrics and benchmark-health verdict.
8. **Release receipt:** SBOM source/build/deploy views, SLSA/in-toto provenance,
   registry trust-root/signature/transparency verification, rollout health and
   tested rollback/compensation result.

No source family above is a substitute for a missing receipt. A standards-based
field with a null receipt must remain `unknown`, `quarantine`, or `reference_only`
according to policy; it must not be promoted by the existence of a standard name.

## Explicit unresolved gaps and falsifiable research questions

1. **File-level legal boundary:** How often do scanners disagree with a human
   review on mixed, generated, transformed or embedded files? Falsifier: a seeded
   corpus with adjudicated truth shows scanner agreement above the chosen threshold
   and all disagreement classes have a policy outcome.
2. **Trust-root composition:** Is TUF metadata plus Sigstore plus OCI referrers
   materially more useful than one signed manifest for detecting rollback, signer
   drift and missing evidence? Falsifier: an attack matrix produces no additional
   detection and the operational burden is unjustified.
3. **Transform safety:** Do deterministic AST/CST transforms reduce adaptation
   regressions versus line/LLM edits on the same block fixtures? Falsifier: paired
   seeded experiments show no improvement after cost and review burden.
4. **Token-to-UI fidelity:** Does DTCG resolver validation plus token-consumption
   checks predict visual/accessibility regressions better than screenshot diff alone?
   Falsifier: held-out theme/context mutations show no predictive value.
5. **Action semantics:** Which subset of MCP/A2A/OAuth/HTTP signatures/policy
   fields catches replay, authority confusion and tool drift without making
   reversible work unusably slow? Falsifier: red-team cases pass or approval
   latency exceeds the chosen operational budget.
6. **Benchmark validity:** What fraction of local tasks are executable, non-broken,
   non-contaminated and semantically aligned with the block outcome? Falsifier: a
   blinded audit cannot reproduce task health or oracle results.
7. **Repeated reliability:** How many independent seeds/retries are necessary to
   estimate pass probability and unsafe-action probability with useful confidence?
   Falsifier: confidence intervals remain too wide or model/scaffold variance
   dominates the reported metric.
8. **Tenant/egress enforcement:** Does the chosen sandbox actually deny cross-tenant
   reads, direct-IP egress and metadata access under process, DNS and proxy attacks?
   Falsifier: any forbidden access succeeds or enforcement differs by provider.
9. **Rollback reality:** Which released effects can be restored, forward-fixed or
   compensated, and which must be blocked before execution? Falsifier: rollback
   tests leave untracked data, messages, payments, credentials or tenant state.
10. **Registry economics:** Do verification and retention costs stay bounded as
    each block carries multiple BOMs, attestations, screenshots, traces and
    transparency receipts? Falsifier: evidence storage/verification dominates the
    cost of assembly or causes retention shortcuts.

## Validation record

- First-pass baseline was inspected at 812 lines / 6,950 words / 56,758 bytes.
- Baseline SHA-256 was captured before writing this packet as
  `623cb6eaff5116e5c053d164326650afa3ed9fb964f7502591806e2e515703c5`.
- Expansion output path is
  `research/actionmodel-builder-research-2026-08-26/expansion/outputs/standards-expansion.md`.
- The output is additive under `expansion/`; the first-pass `outputs/` artifact was
  not edited.
- The twelve RCH-STANDARDS-EXP slots are all represented in the ledger above.
- Source URL/version/date, scope, Block Contract mapping, caveat and open gap are
  recorded in the source registers; normative, research and implementation/vendor
  sources are separated.
- This packet contains no claim that Action Model has passed a license scan,
  contract test, eval, sandbox test, registry verification, deployment, or
  rollback. Those remain explicit blockers to any future admission decision.

## Handoff state

The lane is ready for coordinator callback after the parent verifies the final
baseline hash, updates `expansion-state.json`, resolves the live CENA pane, sends a
short callback, and confirms that the callback is visible in the pane transcript.

