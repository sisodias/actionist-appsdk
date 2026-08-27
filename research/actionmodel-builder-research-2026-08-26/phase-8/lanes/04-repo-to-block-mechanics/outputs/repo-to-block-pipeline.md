# Phase 8 — Repo-to-block conversion mechanics

**Lane:** `P8-REPO-TO-BLOCK-MECHANICS`
**Artifact:** `P8-R2B-PIPELINE-001`
**Observed:** 2026-08-27
**Status:** `DESIGN_ONLY; EXECUTION_UNEXECUTED; ADMISSION_NOT_ADMITTED; admitted_blocks=0; implementation_authorized=false`

> **Boundary.** This artifact designs conversion mechanics. It performs no
> cloning, copying, source execution, build, sandbox run, license/SBOM scan,
> benchmark, deployment, implementation, or block admission. It reads only
> local metadata and public first-party specifications. The `UNEXECUTED` and
> `NOT_ADMITTED` values below are binding current facts, not placeholders
> awaiting a result.

## Evidence-class legend

Inherited unchanged from [the Phase-4 pilot receipt runbook](../../../../phase-4/outputs/pilot-receipt-runbook.md) so receipts remain comparable across phases.

- `E` — directly observed structural evidence in a local artifact or first-party specification. Proves shape, never runtime behavior.
- `D` — documented design or planned method. Not an execution result.
- `I` — inference or contract interpretation. Requires a falsifier; must never be promoted to capability proof.
- `U` — unknown, absent, gated, blocked, or unexecuted. No success value may be substituted.

## 1. The problem this lane actually solves

The program states the target chain: `repo/local asset → evidence-backed reusable block → governed registry → agent-composed B2B application`. Lane 01 owns the block contract, lane 02 the local corpus join, lane 03 the template shelf, lane 05 the composition agent. **This lane owns only the arrow from source to block**: the mechanisms, their determinism, their receipts, and their failure paths.

The governing constraint is inherited from [PHASE-8-PROGRAM.md](../../../PHASE-8-PROGRAM.md): *repositories are not blocks*. A candidate becomes a block only through explicit identity, provenance, rights, dependency, interface, data, visual, runtime, maintenance, rollback, owner, and evaluation evidence. This lane therefore does not design a converter that "imports a repo". It designs a **gate ladder that mostly rejects**, and whose successful outputs are a minority.

### 1.1 The measured starting condition (`E`)

Three exact local observations set the difficulty, and each is a hard blocker at the head of the pipeline rather than a detail.

| Observation | Exact measured value | Local source | Consequence for conversion |
|---|---|---|---|
| No corpus repository has a pinned immutable identity | `"immutable_commit_or_tag": "NOT_CAPTURED"` | `phase-7/lanes/05-rights-eval-readiness/outputs/rights-provenance-ledger.jsonl` record `P7-RER-RIGHTS-001` | **Stage 0 cannot start** for any corpus row. Conversion requires a digest-pinned revision; a default branch name is not an identity. |
| Corpus URLs were never independently resolved | `"access_status": "recorded_public_url_not_independently_resolved"`, `"source_content_digest": "NOT_AVAILABLE"` | same record | The corpus is a *nomination* layer. Every candidate re-enters at Stage 0, not mid-pipeline. |
| Local component metadata carries no license field | `meta.json` keys are `id, componentId, authorUserId, name, demoName, description, previewUrl, installCommand, registryDependencies, isPublic, registryTeamId, registryUserId` | `siso-ui-base/registry/21st/code/19077-editorial-image-hero/meta.json` | Absence of a license field is `NOASSERTION` under SPDX 2.3, **not** permission. `isPublic: true` is a visibility flag, not a grant. |

A fourth observation bounds the local corpus itself: `siso-ui-base/registry/21st/classification.json` `stats` reads `{"tags": 75, "harvested": 7949, "tagged": 3951, "untagged": 3998, "multiTag": 1999, "taggedTotal": 7382, "fromPage": 4033, "fromApiOnly": 713, "bySource": {"page": 4033, "api": 713, "local": 2636}}` (`E`). Meanwhile `registry/21st/code/` contains exactly **2** component directories (`19077-editorial-image-hero`, `21474-agency-footer`) (`E`). So of 7,949 harvested components, local source is present for 2 — a ratio of roughly 0.025%. **Harvest breadth is not conversion readiness.**

### 1.2 Falsifier for this lane's framing

If a future authorized run pins an immutable revision, resolves a first-party license file, and produces a passing `RCPT-SOURCE-RIGHTS` for a corpus repository *without* re-running Stage 0, this framing is wrong and the corpus is richer than measured. Re-read the ledger before relying on that.

## 2. Four source shapes

The dispatch requires at least four. Each has different determinism, different failure modes, and a different dominant cost. Shape is decided at Stage 2 and is **not** revisable later without restarting.

| Shape | Definition | Local/first-party precedent | What is copied | Dominant risk |
|---|---|---|---|---|
| **S1 — intact package** | Consumed at a published, versioned artifact boundary. No source is vendored; the dependency resolver fetches it. | `installCommand` in `siso-ui-base/registry/21st/catalog.json` (832 entries, `E`); `vendor/tabler` (`E`) | Nothing. A coordinate (`purl`) plus a lockfile pin. | Upstream disappearance, transitive license surprise, gated registry. |
| **S2 — service / runtime** | Consumed over a network interface. The block wraps an API/event surface, not code. | AutoSaaS `schemas/run-manifest.v3.schema.json` (`E`) | Nothing. An interface description plus credentials handled elsewhere. | Auth/tenancy, egress, cost per call, vendor terms. Overlaps the connector Opus lane — see §9. |
| **S3 — bounded code slice** | A named, digest-pinned subset of files/symbols is extracted and adapted into the block. | `registry/21st/code/19077-editorial-image-hero/` = `component.tsx`, `demo.tsx`, `meta.json` (`E`) | Actual source. **Highest rights exposure.** | License obligation, notice retention, dependency closure escaping the slice boundary. |
| **S4 — reference-only reimplementation** | Nothing is copied. The source informs a clean specification; the block is written independently. | Program invariant: reference-only is an explicit valid outcome | Nothing. Behavior description only. | Contamination of the implementer; cost; silent divergence from the observed behavior. |

S4 is a **success state**, not a failure state. The pipeline must be able to end there without treating the effort as wasted, because a rights-blocked but well-understood source still yields a specification.

## 3. The conversion pipeline

Ten stages. Each names its determinism class, its receipt, and its rejection path. Stage numbering is stable and referenced by `mechanism-and-tool-census.jsonl` and `receipt-schema.json`.

### Determinism classes

- **DET** — byte-reproducible. Same input digest ⇒ same output digest. Machine-decidable.
- **DET-ENV** — reproducible only against a pinned environment (image digest, toolchain version, lockfile). Reproducible in principle, fragile in practice.
- **SEMI** — mechanically computable, but the *threshold or policy* is a human choice.
- **HUM** — irreducibly a judgment call by a named accountable person.

### Stage table

| # | Stage | Determinism | Primary mechanism | Receipt | Rejection path |
|---|---|---|---|---|---|
| 0 | Identity pinning | DET | Content digest + `purl` coordinate + immutable revision | `RCPT-SOURCE-IDENTITY` | `unpinnable` → reject; no downstream stage may run |
| 1 | Rights and obligation resolution | SEMI | License file resolution, SPDX expression, notice inventory | `RCPT-SOURCE-RIGHTS` | `rights_blocked` → S4 or reject |
| 2 | Shape decision | HUM | Boundary analysis against §2 | `RCPT-SHAPE-DECISION` | `no_viable_shape` → reject |
| 3 | Dependency closure | DET-ENV | Lockfile graph + SBOM generation | `RCPT-DEPENDENCY-CLOSURE` | `closure_incomplete` → hold |
| 4 | Boundary extraction | DET | AST/type-aware symbol reachability | `RCPT-TRANSFORM-BOUNDARY` | `boundary_leaks` → widen or reject |
| 5 | Interface derivation | SEMI | Type/schema/OpenAPI/event extraction → ports | `RCPT-PORTS-CONTRACT` | `interface_underspecified` → hold |
| 6 | Adaptation | SEMI | Codemods, adapters, token normalization | `RCPT-TRANSFORM-APPLIED` | `adaptation_unsafe` → S4 |
| 7 | Data and tenancy | SEMI | Schema/migration/tenancy-key analysis | `RCPT-TENANCY-ISOLATION` | `tenancy_unprovable` → reject |
| 8 | Proof | DET-ENV | Sandbox build/test, visual states, egress ledger | `RCPT-BUILD-RUNTIME`, `RCPT-UI-ACCESSIBILITY`, `RCPT-SECURITY-EGRESS` | any fail → quarantine |
| 9 | Maintenance and rollback | SEMI + HUM | Upstream drift probe, snapshot/restore, owner assignment | `RCPT-COST-MAINTENANCE`, `RCPT-RECOVERY-ROLLBACK` | `unowned` or `unrollbackable` → reject |
| 10 | Admission | HUM | Named human decision against gate ladder | `RCPT-HUMAN-ADMISSION` | anything short of unanimous applicable pass → `not_admitted` |

Stage 10 is numbered separately from the ten conversion stages because it is **not a conversion step**. It is the authority boundary; it is currently and permanently outside this lane's power to satisfy.

### 3.1 Stage 0 — identity pinning (DET)

Nothing may proceed without a stable answer to *which exact bytes*. Three artifacts are required together, because each alone is forgeable or mutable:

1. **Coordinate** — a `purl` string. Canonical syntax is `scheme:type/namespace/name@version?qualifiers#subpath` where `scheme` is "the URL scheme with the constant value of `pkg`", `type` is "the package 'type' or package 'protocol' such as maven, npm, nuget, gem, pypi", `name` is required and `version`/`qualifiers`/`subpath` are optional ([purl-spec](https://github.com/package-url/purl-spec), ECMA-427, `E`).
2. **Immutable revision** — a commit SHA or tag *resolved to* a SHA. A branch name is mutable and is rejected as an identity.
3. **Content digest** — `sha256:<64 hex>`, matching the existing `source_digest` pattern already enforced by [Block Contract v1](../../../../phase-2/outputs/block-contract-v1.json) `$defs.source` (`E`).

Under the Block Contract, `$defs.source` already *requires* `source_class`, `source_url`, `immutable_revision`, `source_digest`, `observed_at`, `file_spans`, `access`, `identity_status`, and `falsifier` (`E`). Stage 0 is therefore not a new invention; it is the mechanism that populates an already-mandatory field group that the Phase-7 corpus left as `NOT_CAPTURED`.

**Negative path.** A source that cannot be pinned — a live-rendered page, an API-key-gated registry endpoint, a moving `latest` tag, a deleted repository — is `unpinnable` and terminates. It may be recorded as a nomination but never enters conversion.

### 3.2 Stage 1 — rights and obligation resolution (SEMI)

Machine-decidable parts: locating candidate license files, parsing an SPDX expression, inventorying notices, enumerating declared licenses across the dependency set. Human parts: compatibility policy, acceptance of copyleft reach, and any ambiguity.

The controlling asymmetry, resolved from the primary specification: in SPDX 2.3, `PackageLicenseConcluded` (7.13) and `PackageLicenseDeclared` (7.15) are each cardinality `0..1`, and **omitting the field carries "an equivalent meaning to `NOASSERTION`"**; `NOASSERTION` applies where the creator "has attempted to but cannot reach a reasonable objective determination", "made no attempt to determine this field", or deliberately supplied nothing, in which case "no meaning should be implied by doing so" ([SPDX 2.3 Package Information](https://spdx.github.io/spdx-spec/v2.3/package-information/), `E`).

Applied to the measured local state: the 21st.dev `meta.json` has no license key at all (`E`). Under SPDX that is `NOASSERTION`. It is **not** permission, and `isPublic: true` does not convert it into one. Any future harvest of those 7,949 components is `rights_blocked` at Stage 1 until a first-party license statement is resolved per component or per registry terms. This is a measured blocker on the largest local asset, not a hypothetical.

This stage does **not** run a license scanner. Scanning is explicitly outside the lane boundary; the stage designs what a future authorized scan must produce.

**Negative paths.** `rights_unknown` (no statement locatable) → hold. `rights_incompatible` (obligation conflicts with the intended distribution) → S4 or reject. `rights_ambiguous` (conflicting statements between `LICENSE`, headers, and package metadata) → hold pending named legal owner; **never** resolved by picking the permissive one.

### 3.3 Stage 2 — shape decision (HUM)

The decision is a judgment about *where the natural boundary is*, and it is recorded with its rejected alternatives so a later reviewer can falsify it. Decision order is deliberately biased toward copying less:

1. Can it be consumed as a published artifact? → **S1**.
2. Is the value behind a network interface? → **S2**.
3. Is there a genuinely bounded, extractable slice with a closed dependency set? → **S3**.
4. Otherwise → **S4**.

Bias rationale: S1 and S2 copy nothing and therefore carry the smallest rights and maintenance surface. S3 is chosen only when the value is genuinely inseparable from the source text. An S3 decision made for convenience when S1 was available is a review failure, because it converts a dependency-update problem into a permanent fork.

### 3.4 Stage 3 — dependency closure (DET-ENV)

Requires the *transitive* set, not the direct manifest. Two SBOM formats are viable and both are first-party specified:

- **CycloneDX 1.6 JSON** — root requires `bomFormat` (const `"CycloneDX"`) and `specVersion`; carries `serialNumber` (RFC 4122 urn:uuid), `version` (integer, min 1), and `metadata` including `timestamp` and `lifecycles` with phases *design, pre-build, build, post-build, operations, discovery, decommission*. Components require `type` and `name`, with optional `purl`, `hashes`, `licenses`, `scope`, `pedigree` ([CycloneDX 1.6 JSON reference](https://cyclonedx.org/docs/1.6/json/), `E`). Critically for this stage, `compositions` is defined as describing "constituent parts (including components, services, and dependency relationships) and their completeness" (`E`) — i.e. the format has a native way to state *incompleteness*, which is exactly what an honest closure receipt needs.
- **SPDX 2.3** — provides `PackageVerificationCode` (7.9), "a computed SHA1 over the sorted file hashes, expressed as 40 lowercase hex digits", required when `FilesAnalyzed` is true/omitted and forbidden when false (`E`).

**Unresolved (`U`).** The exact `compositions[].aggregate` enum values could not be read from the primary source: three fetch attempts against `cyclonedx.org/docs/1.6/json/` and the raw `bom-1.6.schema.json` were truncated before the `compositions` definition. The values are therefore recorded as `unknown` rather than asserted from memory. **Falsifier:** retrieve `schema/bom-1.6.schema.json` at a pinned tag and read `definitions.compositions.properties.aggregate.enum`; if it lacks a value meaning "incomplete", the honest-incompleteness claim above weakens and closure must express incompleteness by another field.

**Negative path.** A closure that cannot be completed — unresolvable transitive dep, private registry, vendored blob with no coordinate — is `closure_incomplete` → hold. Per the Phase-2 gate register, "missing SBOM component" is an explicit **kill** condition for G2 (`E`); it is not roundable to a pass.

### 3.5 Stage 4 — boundary extraction (DET)

The determinism claim of this lane rests here. Given a pinned digest, an entry symbol set, and a fixed parser version, *reachability is computable and reproducible*. It is a graph traversal, not a judgment.

Verified mechanisms:

- **tree-sitter** — "a parser generator tool and an incremental parsing library"; design goals are to be general "enough to parse any programming language", fast "enough to parse on every keystroke in a text editor", robust "enough to provide useful results even in the presence of syntax errors", and dependency-free with a "pure C11" runtime ([tree-sitter](https://tree-sitter.github.io/tree-sitter/), `E`). The robustness property matters: a slice boundary must still be computable over a file that does not fully parse.
- **ts-morph** — "This library wraps the TypeScript compiler API so it's simple", addressing "Setup, navigation, and manipulation of the TypeScript AST" ([ts-morph](https://ts-morph.com/), `E`). Type-aware, so it resolves *type-only* references that a syntactic pass misses.

The distinction is load-bearing: a syntax-only tool computes an under-approximation of the true closure. A type-aware tool is required to catch type-only imports, re-exports, and ambient declarations. **An under-approximated boundary is the primary silent failure of this stage** — it produces a slice that appears clean and fails only at Stage 8, or worse, ships with a hidden dependency.

**Negative paths.** `boundary_leaks` — reachability escapes the nominated file span into unrelated subsystems; either widen the span (and re-run Stage 1 over the widened set, since new files may carry new obligations) or reject. `boundary_unparseable` — no parser available for the language; `U`, not a pass. `boundary_dynamic` — reachability depends on runtime string resolution, reflection, or dynamic import; **not statically decidable**, so the DET claim fails and the stage degrades to SEMI with an explicit human review flag.

### 3.6 Stage 5 — interface derivation (SEMI)

Produces the block's ports. The Block Contract already defines `$defs.ports` over `input_port`, `output_port`, `data_port`, `ui_port`, and `action_port`, where `action_port` carries `action_approval`, `action_idempotency`, and `action_recovery` (`E`). This stage populates them; it does not redesign them (that is lane 01).

Mechanically derivable: exported type signatures, JSON Schema, OpenAPI operations, event payload shapes, database column types. Requires judgment: which surface is *intended* as public versus incidentally exported; which operations carry external effects; what the idempotency key actually is.

The `external_effect` determination is the highest-stakes SEMI judgment in the pipeline. Under the Phase-4 runbook, "unbounded side effect" is a G1 kill condition (`E`). A port mistakenly typed as read-only when it writes defeats every downstream authority control, because the composition agent (lane 05) will treat it as safe.

**Negative path.** `interface_underspecified` — no stable typed surface, only untyped dynamic dispatch → hold; a block without a checkable interface cannot be composed safely.

### 3.7 Stage 6 — adaptation (SEMI)

Transforms the extracted slice to fit the target. Mechanisms verified first-party:

- **jscodeshift** — "a toolkit for running codemods over multiple JavaScript or TypeScript files"; wraps recast, "an AST-to-AST transform tool" that "tries to preserve the style of original code as much as possible"; `parser` may be `"babel"`, `"babylon"`, `"flow"`, `"ts"`, or `"tsx"`, or a custom parser conforming to ESTree; MIT ([jscodeshift](https://github.com/facebook/jscodeshift), `E`).
- **Ruff** — "An extremely fast Python linter and code formatter, written in Rust", with "Fix support, for automatic error correction" ([Ruff](https://docs.astral.sh/ruff/), `E`).

Style preservation is not cosmetic here. Because the Block Contract's `$defs.transformation` requires `before_digest` and `after_digest` (`E`), a transform that reformats the whole file makes the diff unreviewable and destroys the reviewer's ability to see what actually changed. Recast's preservation property is what keeps `adaptation_log` meaningful.

Token normalization has a direct local precedent: `siso-ui-base/batteries/gates/dna-grep.mjs` and `principles-grep.mjs`, wired as `gate:dna` and `gate:principles` in `package.json` (`E`). These are *gates*, not transforms — they check conformance rather than rewrite. That is the right shape: normalization proposes, a gate disposes.

**Negative paths.** `adaptation_unsafe` — the transform would change semantics, not just shape → fall back to S4. `adaptation_unbounded` — the change set exceeds a preset ratio of the slice, meaning this is a rewrite wearing a codemod's clothes → escalate to human review. `notice_stripped` — a transform removed a copyright header → **hard fail**, since it manufactures a rights violation.

### 3.8 Stage 7 — data and tenancy (SEMI)

Most sources embed tenancy assumptions rather than declaring them. This stage makes them explicit: the tenant key, its propagation path, the isolation mechanism (row-level, schema-level, database-level, or none), and migration state.

Per the Phase-2 gate register, a "cross-tenant result" is a G4 kill condition (`E`). A source with *no* tenancy concept is not automatically rejected — a pure presentational component has no tenancy surface — but a source that *touches data* and cannot prove its isolation is `tenancy_unprovable` → reject. Absence of evidence is recorded as `U`; it never becomes a pass.

### 3.9 Stage 8 — proof (DET-ENV)

Where claims become receipts. Three independent proofs that cannot substitute for one another — the Phase-2 plan is explicit that "a screenshot, build log, or vendor claim cannot substitute for the others" (`E`).

1. **Build/runtime** — pinned image digest, lockfile, toolchain versions; records input/output hashes and an attempted-side-effect ledger. Pass requires reproducibility **and an empty side-effect ledger**.
2. **Visual** — the eight declared UI states from the Phase-4 runbook: *loading, empty, ready, stale, error, denied, review, unsupported-version* (`E`). Local precedent is real and pinned: `siso-ui-base/pipeline/shoot.mjs` (capture), `judge.mjs` + `rubric.mjs` (scoring), with `_shots/` and `_verdicts/` directories and a `scores.json` (`E`). This is the closest existing implementation of automated visual proof in the workspace.
3. **Security/egress** — default-deny egress with an explicit ledger. Any unapproved network call is a kill, not a warning.

The determinism class is DET-ENV, not DET, and the distinction should not be glossed: reproducibility holds *only* against the pinned environment. An unpinned base image silently converts this stage's output from evidence into anecdote.

**Negative path.** Any fail → `quarantined`, an existing Block Contract status value (`E`). Quarantine is not rejection; it preserves the work for re-proof after a fix.

### 3.10 Stage 9 — maintenance, upstream sync, and rollback (SEMI + HUM)

The stage that determines whether a block survives contact with time.

- **Upstream drift** — a probe comparing the pinned revision against current upstream. Detection is DET (digest comparison). The *response* — adopt, hold, fork, retire — is HUM.
- **Sync burden** — S3 slices carry the worst case: an upstream fix must be manually re-extracted and re-adapted, and the local adaptation may conflict. This is the concrete, recurring cost that makes S1 preferable wherever it is available.
- **Rollback** — snapshot hash, induced failure, restore, post-restore parity. Per Phase-2, pass "requires exact declared-state parity and a bounded compensation path" (`E`).
- **Owner** — a named accountable person. Phase-7 records most owners as `UNASSIGNED` (`E`); an unowned block is rejected at this stage regardless of technical quality.

Economics have an exact local precedent: AutoSaaS `schemas/run-manifest.v3.schema.json` requires `reuse_target_percent`, `reuse_actual_percent`, `source_graph_searched`, `github_search_attempted`, `license_review_required`, `build_started`, `primary_workflow_verified`, and `launch_assets_ready` (`E`). The target-vs-actual reuse pair is the right instrument for this pipeline, because it measures whether conversion delivered the reuse it promised rather than whether it merely completed.

### 3.11 Stage 10 — admission (HUM)

Outside this lane's authority, permanently. `admission.implementation_authorized` is `const: false` in Block Contract v1 (`E`) — not a default, a constant. The pipeline's terminal state is `proof_pending` or `admission_review`; a human moves it further or not at all.

## 4. Deterministic versus judgment split

The dispatch requires this separation explicitly.

| Fully deterministic (DET) | Environment-dependent (DET-ENV) | Policy-thresholded (SEMI) | Irreducibly human (HUM) |
|---|---|---|---|
| Content digest computation | Dependency closure resolution | License compatibility decision | Shape decision (S1–S4) |
| `purl` coordinate construction | Sandbox build reproduction | Public-vs-incidental interface | Ambiguous rights resolution |
| Static reachability (typed, non-dynamic) | Visual state capture | `external_effect` determination | Adaptation-safety acceptance |
| Diff and before/after digests | Test execution | Tenancy isolation sufficiency | Drift response (adopt/fork/retire) |
| Notice/header presence detection | Egress ledger capture | Adaptation change-ratio threshold | Owner assignment |
| Upstream drift detection | | Freshness window | Admission |

**The honest summary: no stage is end-to-end deterministic.** Stages 0 and 4 are genuinely mechanical and are the pipeline's spine. Everything downstream either depends on a pinned environment or encodes a policy choice. Any claim that repo-to-block conversion can be fully automated is falsified by Stage 2, Stage 6, and Stage 10, each of which requires a named human. The realistic automation target is *the machine eliminates most candidates cheaply and prepares an unambiguous decision packet for the few that survive*.

## 5. Negative-path catalogue

Consolidated. Every path resolves to a state already present in Block Contract v1's `status` enum (`E`) — this lane adds no new lifecycle states, which keeps lane 01's contract authoritative.

| Code | Stage | Trigger | Terminal state | Recoverable? |
|---|---|---|---|---|
| `N-IDENT-01` | 0 | No immutable revision obtainable | `rejected` | Only if upstream publishes a tag |
| `N-IDENT-02` | 0 | Digest mismatch on re-fetch | `quarantined` | Yes — re-pin and restart |
| `N-RIGHTS-01` | 1 | No license statement locatable | `held` | Yes — upstream clarification |
| `N-RIGHTS-02` | 1 | Incompatible obligation | `reference_only` | Via S4 |
| `N-RIGHTS-03` | 1 | Conflicting statements | `held` | Only by named legal owner |
| `N-RIGHTS-04` | 6 | Notice/header stripped by transform | `rejected` | Yes — restore notice, re-run |
| `N-SHAPE-01` | 2 | No viable shape | `rejected` | No |
| `N-DEP-01` | 3 | Transitive dep unresolvable | `held` | Yes |
| `N-DEP-02` | 3 | Vendored blob without coordinate | `held` | Yes — identify or excise |
| `N-BOUND-01` | 4 | Reachability escapes span | `converting` (retry widened) | Yes — re-run Stage 1 on widened set |
| `N-BOUND-02` | 4 | Dynamic/reflective resolution | `held` | Yes — human boundary review |
| `N-BOUND-03` | 4 | No parser for language | `held` (`U`) | Yes |
| `N-IFACE-01` | 5 | No stable typed surface | `held` | Yes |
| `N-IFACE-02` | 5 | Effectful port typed read-only | `quarantined` | Yes — re-derive |
| `N-ADAPT-01` | 6 | Semantics-changing transform | `reference_only` | Via S4 |
| `N-ADAPT-02` | 6 | Change ratio exceeds threshold | `admission_review` | Yes — human |
| `N-TENANT-01` | 7 | Data touched, isolation unprovable | `rejected` | No |
| `N-PROOF-01` | 8 | Build unreproducible | `quarantined` | Yes |
| `N-PROOF-02` | 8 | UI state unreachable/hidden | `quarantined` | Yes |
| `N-PROOF-03` | 8 | Non-empty egress ledger | `rejected` | No |
| `N-MAINT-01` | 9 | No named owner | `rejected` | Yes — assign owner |
| `N-MAINT-02` | 9 | Rollback parity mismatch | `rejected` | No |
| `N-ADMIT-01` | 10 | Any applicable gate not passed | `not_admitted` | Yes — remediate |

**Design property.** The majority of paths terminate in `held`, `quarantined`, or `reference_only` rather than `rejected`. A candidate that fails is usually *paused with a named reason*, not destroyed. Only unprovable tenancy, egress violation, rollback failure, and unshapeable sources are unrecoverable — the four cases where continuing would mean shipping an unsafe or unfixable block.

## 6. Proof receipts

Receipt IDs match `^RCPT-[A-Z0-9-]+$`, the pattern already enforced by Block Contract v1 `$defs.evidence_receipt` (`E`). Every receipt requires `receipt_id`, `receipt_type`, `status`, `evidence_class`, `observed_at`, `method`, `expected`, `observed`, `artifact_digest`, `source_refs`, `owner`, `retention`, `limitations`, and `falsifier` (`E`).

Contract v1 defines exactly 14 `receipt_type` values: `schema_valid`, `source_rights`, `transform_boundary`, `ports_contract`, `state_machine`, `authority_consent`, `tenancy_isolation`, `eval_fixture`, `ui_accessibility`, `security_egress`, `build_runtime`, `recovery_rollback`, `cost_maintenance`, `human_admission` (`E`).

**Mapping, and the gap this lane found.** Eight of this pipeline's ten stages map onto an existing type. Three do not:

| Stage | Needed receipt | Existing `receipt_type` | Status |
|---|---|---|---|
| 0 | `RCPT-SOURCE-IDENTITY` | *none* | **Gap** |
| 1 | `RCPT-SOURCE-RIGHTS` | `source_rights` | Covered |
| 2 | `RCPT-SHAPE-DECISION` | *none* | **Gap** |
| 3 | `RCPT-DEPENDENCY-CLOSURE` | *none* | **Gap** |
| 4 | `RCPT-TRANSFORM-BOUNDARY` | `transform_boundary` | Covered |
| 5 | `RCPT-PORTS-CONTRACT` | `ports_contract` | Covered |
| 6 | `RCPT-TRANSFORM-APPLIED` | `transform_boundary` (overloaded) | Partial |
| 7 | `RCPT-TENANCY-ISOLATION` | `tenancy_isolation` | Covered |
| 8 | build/visual/egress | `build_runtime`, `ui_accessibility`, `security_egress` | Covered |
| 9 | maintenance/rollback | `cost_maintenance`, `recovery_rollback` | Covered |
| 10 | admission | `human_admission` | Covered |

Three additions are proposed to lane 01 as a **contract delta**, not applied here — amending the contract is lane 01's authority:

1. `source_identity` — Stage 0 currently has no receipt type, yet it is the precondition for every other receipt. Its absence is why the Phase-7 corpus could record 216 repositories with `NOT_CAPTURED` identity and no receipt registered the omission.
2. `dependency_closure` — G2 treats "missing SBOM component" as a kill, but no receipt type carries the closure result. Today it would have to hide inside `source_rights`, conflating *what it depends on* with *what it is licensed as*.
3. `shape_decision` — the S1–S4 choice determines rights exposure and maintenance burden for the block's whole life, and is currently unrecorded.

Alternatively `transform_boundary` could be split into boundary-computed and transform-applied, since Stage 4 (DET) and Stage 6 (SEMI) have different determinism classes and should not share a receipt type. Recommended: add the three types; the split is optional.

`receipt-schema.json` in this directory specifies all of these, marked as proposals.

## 7. Worked traces

Four candidates, one per shape. All are **design traces**, not executions; every receipt below is `not_run`.

### 7.1 S1 — `siso-ui-base` 21st.dev catalog entry (intact package)

- **Stage 0:** `installCommand` is `npx shadcn@latest add "https://21st.dev/r/felipemenezes098/hero-07?api_key=$API_KEY_21ST"` (`E`). The URL is **API-key gated**. No immutable revision or digest is present in `catalog.json` or `meta.json` (`E`). → `N-IDENT-01`, `unpinnable`. **Stops at Stage 0.**
- **Consequence:** all 832 catalog entries share this shape (`E`). None is currently convertible. The gate is not code quality; it is that a gated, unversioned install command is not an identity.
- **Falsifier:** if 21st.dev publishes per-component version pins or content digests, Stage 0 becomes satisfiable and the shape is viable at scale.

### 7.2 S2 — AutoSaaS run-manifest surface (service/runtime)

- **Stage 0:** local path with a computable digest — satisfiable (`E`).
- **Stage 1:** first-party internal asset; obligations internal.
- **Stage 5:** `run-manifest.v3.schema.json` has 13 required fields (`E`), giving a genuinely checkable interface — rare among the assets reviewed.
- **Stage 7:** tenancy not expressed in the schema → `U`; would need resolution before any data-touching use.
- **Verdict:** the strongest local S2 candidate; blocked on tenancy evidence, not on rights or identity.

### 7.3 S3 — `19077-editorial-image-hero` (bounded code slice)

- **Stage 0:** local files, digestible → satisfiable (`E`).
- **Stage 1:** `meta.json` has **no license field** (`E`) → `NOASSERTION` per SPDX 2.3 → `N-RIGHTS-01`, `held`. `authorUserId: "user_felipemenezes098"` identifies an author but grants nothing; `isPublic: true` is visibility, not licence.
- **Stage 3 (hypothetically, were rights resolved):** `registryDependencies.filesWithRegistry` includes `/components/ui/button.tsx`, whose code embeds `@radix-ui/react-slot` and `cva` (`E`). So the slice's true closure reaches third-party packages *not* named in the component's own metadata — a concrete instance of `N-BOUND-01`. This is exactly the under-approximation failure §3.5 warns about, present in the only local slice available.
- **Verdict:** `held` at Stage 1; would additionally need a widened boundary at Stage 3–4.

### 7.4 S4 — rights-blocked component (reference-only)

- Where Stage 1 returns `rights_incompatible` or remains `held` indefinitely, the pipeline exits to S4: the observed behavior is written as a specification, and the block is implemented independently.
- **Receipt discipline:** an S4 block's `provenance_rights.source.source_class` should be `inferred` with a `derivation` stating that no source text was copied. It must **not** claim the original as its source, because that would assert a lineage that does not exist.
- **Verdict:** `reference_only` is the realistic terminal state for most of the 7,949 harvested components unless registry-level licensing is resolved.

## 8. What this lane measured that changes the program's plan

1. **Identity, not rights, is the first blocker.** The corpus records `NOT_CAPTURED` revisions and unresolved URLs (`E`). Rights work on an unpinned source is wasted, because the rights finding cannot be bound to specific bytes.
2. **The largest local asset is rights-blocked by omission.** 7,949 harvested components carry no license field (`E`). Under SPDX that is `NOASSERTION`. The gap is registry-level and cannot be closed component-by-component.
3. **Harvest breadth ≠ conversion readiness.** 7,949 harvested, 3,951 tagged, 3,998 untagged, 2 with local code (`E`). Any plan denominated on 7,949 is denominated on nominations.
4. **The receipt vocabulary has three holes** at exactly the stages that gate everything else (§6).
5. **Conversion cannot be fully automated.** Stages 2, 6, and 10 need a named human (§4). The achievable win is cheap elimination plus a clean decision packet.

## 9. Lane boundaries respected

- **Connector Opus** owns Activepieces, Composio, Nango, MCP registries, OAuth/token vaults, embedded connection UX. This lane treats S2 only as a *shape with different receipts* and researched no connector vendor.
- **Lovable-clone Opus** owns the 38 builder-class repositories. Not re-extracted or re-classified here.
- **Template Opus / lane 03** own the template shelf. No archetype or shelf work here.
- **Lane 01** owns the contract. §6 proposes a delta; it does not amend the contract.
- **Lane 02** owns the corpus join. Local paths here are cited as *mechanism precedents*, not as a corpus inventory.
- **Lane 05** owns retrieval/composition. This lane stops at a block being provable.

## 10. Unresolved and falsifiers

| # | Unresolved item | Class | Falsifier |
|---|---|---|---|
| 1 | CycloneDX `compositions[].aggregate` enum values | `U` | Read `definitions.compositions` in `bom-1.6.schema.json` at a pinned tag |
| 2 | Whether 21st.dev terms grant reuse at registry level | `U` | Retrieve first-party 21st.dev terms and licensing page |
| 3 | Whether any corpus repository can be pinned today | `U` | Resolve one canonical URL to a commit SHA and digest |
| 4 | Actual static-reachability precision on real slices | `U` | Authorized run of a type-aware pass; compare against manual closure |
| 5 | Whether the change-ratio threshold at Stage 6 is meaningful | `I` | Requires transform data across candidates; unmeasurable now |
| 6 | Whether lane 01 accepts the three receipt types | `I` | Lane 01's contract delta |
| 7 | Cost per converted block | `U` | Requires authorized runs; no estimate is offered — an unmeasured cost is `BLOCKED`, not zero |

## Source register

**Local (all `E`, read-only metadata):**
- `phase-8/PHASE-8-PROGRAM.md`, `phase-8/dispatch/04-repo-to-block-mechanics.md`, `phase-8/phase-8-state.json`
- `phase-2/outputs/block-contract-v1.json` (`$defs`, `required`, enums)
- `phase-2/outputs/evaluation-and-admission-plan.md` (§2 gate register, §7–§9)
- `phase-4/outputs/pilot-receipt-runbook.md` (G1–G7, evidence classes, eight UI states)
- `phase-7/lanes/05-rights-eval-readiness/outputs/rights-provenance-ledger.jsonl` (`P7-RER-RIGHTS-001`)
- `phase-7/outputs/coverage-gap-audit.md` (216 distinct repos; 270 complete pairs)
- `siso-ui-base/`: `package.json`, `registry/21st/catalog.json`, `registry/21st/classification.json`, `registry/21st/code/19077-editorial-image-hero/meta.json`, `pipeline/`, `batteries/gates/`
- `SISO_Agency/apps/AutoSaaS/`: `schemas/run-manifest.v3.schema.json`, `base-template/template-manifest.json`

**First-party specifications (all `E`, resolved 2026-08-27):**
- SPDX 2.3 Package Information — https://spdx.github.io/spdx-spec/v2.3/package-information/
- CycloneDX 1.6 JSON reference — https://cyclonedx.org/docs/1.6/json/
- purl / ECMA-427 — https://github.com/package-url/purl-spec
- SLSA v1.0 provenance — https://slsa.dev/spec/v1.0/provenance
- in-toto attestation v1 Statement — https://github.com/in-toto/attestation/blob/main/spec/v1/statement.md
- tree-sitter — https://tree-sitter.github.io/tree-sitter/
- ts-morph — https://ts-morph.com/
- jscodeshift — https://github.com/facebook/jscodeshift
- Ruff — https://docs.astral.sh/ruff/

## Boundary receipt

```yaml
lane: P8-REPO-TO-BLOCK-MECHANICS
artifact: P8-R2B-PIPELINE-001
observed: 2026-08-27
research_only: true
implementation_authorized: false
execution_status: UNEXECUTED
admission_status: NOT_ADMITTED
admitted_blocks: 0
source_cloned: false
source_copied: false
source_executed: false
build_run: false
sandbox_run: false
license_scan_run: false
sbom_generated: false
benchmark_run: false
deployment_run: false
client_data_accessed: false
authenticated_vendor_action: false
parent_goal_status: active
```
