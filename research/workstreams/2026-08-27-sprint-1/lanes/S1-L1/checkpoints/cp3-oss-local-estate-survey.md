# S1-L1 checkpoint 3 — OSS and local-estate survey

Agent: ACTIONIST-S1-L1-DEMAND · Observed 2026-08-27 · Status: complete
Subagents: `s1l1-oss-a` (P02 spec/discovery agents), `s1l1-oss-b` (P01 workflow mining) — both `model: "opus"`.

## Denominators (re-derived from the files)

| Survey | Part | Rows | Fetched | Search-only | Dup IDs | Schema variants |
|---|---|---:|---:|---:|---:|---:|
| `oss-a.jsonl` | P02 | 60 | 23 | 37 | 0 | 1 |
| `oss-b.jsonl` | P01 | 50 | 19 | 31 | 0 | 1 |
| **OSS total** | | **110** | **42** | **68** | **0** | |

Segment breakdown, P02 (60): spec-driven 18, executable-spec 16, form-engine 13, prd-agent 8, dialog 5.
Disposition: relevant 34, adjacent 21, weak 5. Evidence class: D 22, I 38.

Segment breakdown, P01 (50): introspection 12, task-mining 9, active-learning 8, org-graph 8, enrichment 7, process-mining 6.
Disposition: relevant 16, adjacent 20, weak 14. Evidence class: D 19, I 31.

**Denominator verdict against the ~100 target:** met (110 OSS surfaces). Verified fraction 42/110 (38%) — better than the commercial side. `oss-a` completed licence verification for all 60 rows via the authenticated `gh` CLI after WebFetch hit a usage limit, which yielded *better* evidence than HTML pages (exact SPDX identifiers, `pushed_at`, raw LICENSE bodies).

## Licence-badge traps caught by reading LICENSE bodies

This is the project's own evidence standard producing a direct return. Nine badge failures across 110 rows, each of which would have cost money or credibility:

| Repo | Badge/metadata says | Body actually says |
|---|---|---|
| `cdeust/ai-prd-generator` | LICENSE file present | **Proprietary commercial**, All Rights Reserved — not OSS at all |
| `baptisteArno/typebot.io` | NOASSERTION, "open-source" in README | **FSL-1.1-Apache-2.0** — source-available, competing use barred 2 years |
| `surveyjs/survey-library` | MIT | MIT renderer only; **the Creator/authoring UI is a separate repo under a commercial EULA** |
| `formbricks` / `OpnForm` | NOASSERTION, "Open Source" in title | **Open-core**: AGPLv3 base with proprietary `ee`/Enterprise carve-outs |
| `process-intelligence-solutions/pm4py` | reads as open source | **AGPL-3.0 with a commercial upsell**; network clause plausibly reaches a hosted Actionist service |
| `RPA-US/screenrpa` | reads as open source | **CC BY-NC 4.0** — non-commercial, unusable for Action Model work |
| `firecrawl/fire-enrich` | MIT | MIT covers the orchestration shell only; **capability is rented** (Firecrawl + OpenAI keys) |
| `zjunlp/DeepKE` | MIT | MIT toolkit; **pulled models inherit base-model terms** |
| `bupaR` | inferred MIT by convention | LICENSE is a two-line stub naming **no licence at all**; must be read from DESCRIPTION |

Corrections to widely-repeated third-party claims: `react-jsonschema-form` is **Apache-2.0** (not MIT as comparison articles assert); `Reqnroll` is BSD-3-Clause; `behave` is BSD-style, not MIT; `serenity-core` is Apache-2.0 (detection failed only because the file is `licence.txt`, British spelling).

Also caught: two projects still surfacing in search as live options are **archived** — APIClarity (29 May 2026) and ApromoreCore (self-declared deprecated). GraphRAG is in **maintenance mode by its maintainers' own declaration** despite 35.7k stars.

This directly reproduces the Composio pattern already recorded in the project instructions: a permissive badge over a paid hosted dependency. The rule that caught all nine was reading the LICENSE body and the archive banner, never the badge.

## Findings that change the lane's design

1. **There is no maintained, permissively-licensed, LLM-driven structured-interview engine in the open-source commons.** The `dialog` segment — the one nearest Actionist's core — is genuinely thin at 5 rows, queried from several angles. What exists is research artifacts, abandoned toys, or licence-blocked platforms. **The discovery-dialog layer is build-not-adopt.** This is a positive signal that the gap is real, and it is a supply finding P01 must carry into any build/buy decision.
2. **The strongest structural match is a 4-star, 10-month-idle repo.** `cyanheads/survey-mcp-server` inverts the usual design: the *server* owns question state, eligibility, validation and progress; the LLM is demoted to the conversational surface. Every question carries `currentlyEligible` **and** `eligibilityReason`, so a wrong skip is debuggable; `guidanceForLLM` separates what to ask (data, server-owned) from how to ask it (tone, model-owned); sessions are resumable objects. Design reference, never a dependency.
3. **Ambiguity belongs in the artifact, at the point of ambiguity.** `github/spec-kit`'s `[NEEDS CLARIFICATION: auth method not specified — email/password, SSO, OAuth?]` marker makes unresolved intent countable, greppable and impossible to skip silently — a spec can be mechanically gated on "zero open markers." Pairs with its `SC-###` insistence that success criteria be measurable and technology-agnostic.
4. **Delta framing beats blank-page framing for repeat clients.** OpenSpec scopes everything to a *change* (ADDED/MODIFIED/REMOVED against a baseline), archiving on completion. The second engagement with a client is never a blank page, and re-eliciting settled requirements wastes goodwill. Its `/opsx:explore` vs `/opsx:propose` split also gives a stakes-free divergent phase before anything becomes committed scope.
5. **Shadow mode is the best governance idea in the lane.** OASIS ships its adaptive engagement policy **non-acting by default**: it logs what it *would* have asked to an audit trail, and a human reviews that trail before enabling live action. This is how a discovery agent earns the right to adapt questioning — it converts "trust our AI" into an inspectable record. (Licence is AGPL-3.0-only: adopt the pattern, not the code.)
6. **Question selection is stream-based active learning, not pool-based.** A client conversation is not a pool where you rank all questions and pick the best; each candidate surfaces in context and must be asked-or-skipped immediately under a hard budget (the client's patience). scikit-activeml supplies the frame and the loop. The honest limit, to be stated rather than papered over: these strategies rank by *model uncertainty*, a proxy for question value — nothing in the library models the cost of asking, intrusiveness, or whether the client can even answer. A revenue-split question may be maximally informative and completely unaskable in a first call. **The value function, including an intrusiveness penalty, must be written from scratch.**
7. **The invasiveness ladder is the strongest architectural finding for P01.** Ordered by what the client must grant: public data only (fire-enrich, web-check — nothing) → self-generated artifact (traffic2openapi — a HAR export) → declared dependencies (stack-analyser — repo access) → connected-app inventory (super-admin) → attention telemetry (ActivityWatch — a local agent) → full screen capture (OpenAdapt, OpenCUA — everything visible). Each rung answers different questions at a step-change in trust cost. A precompute system should climb only as far as the unknown requires **and be able to say which rung produced each fact**, because the honest answer to "how do you know that about us" differs enormously between rung one and rung six.
8. **Conformance checking is the precompute asymmetry.** pm4py's transferable idea is not the discovered process map but the *divergence*: here is the process you described, here is the one your logs show, here are the rework loops and skipped approvals between them. That gap is evidence-backed and impossible for the client to produce about themselves. Blocked by input reality: most SMB clients have no case/activity/timestamp event log.
9. **Bi-temporal invalidation is the right substrate for client context.** Graphiti invalidates rather than deletes facts, with validity windows and episode-level provenance, so the store can answer "what changed since we last spoke." Combined with per-field source citation (fire-enrich), this gives a context store where every fact has a source and a valid-from/valid-to window.
10. **Halt, don't interpolate.** OpenAdapt's stated discipline — zero generative calls on healthy runs, governed repair, halting instead of guessing — is the correct posture for precomputed context. A precompute layer that halts and marks an unknown is trustworthy; one that interpolates plausibly is not.

## Local-estate join

Program item 4 asks the lane to join AutoSaaS, Great Library, SISOCRM and the 21st stores where relevant. Result for P01/P02, stated honestly:

- **AutoSaaS** (`framework/autosaas-method.md`, read in full): materially relevant. Its opportunity-intake gate (one target, one buyer, one painful workflow, one plausible payment trigger) is the closest local precedent to a stopping rule, and its spec-constitution field list (ICP, positioning, workflows, entities, roles, permissions, screens, integrations, analytics events, acceptance checks, risk log) is the closest local precedent to a ProductSpec. Both are **procedural designs, never measured** — no AutoSaaS-generated SaaS exists. Retained as design input, not evidence of efficacy.
- **`actionist-solutions-sweep-spec-2026-08-26.md`**: directly relevant. Its `solution_atom` discovery record and its first-principles decomposition items 1 (intent/elicitation without a long questionnaire) and 2 (environment discovery) *are* P01/P02 restated. Its crosswalk discipline (catalogue presence ≠ documented ≠ authenticated ≠ implemented) is adopted wholesale.
- **Phase-2 industry specs + niche→atom→block join**: the 17-industry priors, 12-atom contract and 66-use-case→atom map are the lane's demand backbone, preserved machine-readably in `industry-discovery-priors.jsonl` (17 rows).
- **SISOCRM, Great Library, 21st stores**: `not_applicable` to P01/P02 with specific rationale. SISOCRM is supply/ownership evidence (service-vs-transplant, one-owner-per-table) consumed by P03/P09/P10; Great Library is registry/lifecycle structure for P03/P15; the 21st stores are UI precedent for P05/P06. None of the three carries client-discovery or specification evidence. Citing them here would pad the local join without adding demand-side signal.

## Thin segments (reported, not padded)

- **dialog (5)** — thin for a structural reason, as above. The most important thin finding in the lane.
- **prd-agent (8)** — thin in *quality* rather than count: dominated by prompt-template collections with no enforcing mechanism. The best-designed clarification loop found (confidence-scored rounds gated at 92/95/100% with multi-judge verification) belongs to `ai-prd-generator`, which is **proprietary commercial** — so those claims are unauditable marketing behind a paid licence key. MetaGPT (70k stars) has been idle since January 2026 and *expands* a one-line requirement rather than interrogating the user — the opposite of discovery.
- **introspection (12, 9 search-only)** — thin because the best tool is archived and no turnkey open-source shadow-SaaS discovery product exists; the category is commercial. Treat this denominator as weak evidence.
- **process-mining (6, 3 fetched)** — good tools, hostile licensing, and an input problem.
- **active-learning (8)** — adequate library coverage, but the six Bayesian-experimental-design entries come from chemistry and industrial process optimization; their fit to question-selection is by analogy, not construction.
- **spec-driven (18)** — crowded but highly duplicative; the GSD family alone is four near-identical forks with murky provenance. Real mechanism concentrates in three repos: spec-kit, OpenSpec, ProductSpec.
- **form-engine (13) and executable-spec (16)** — mature and mostly solved; open questions are licensing and fit, not availability.

## Verification boundary

No repository was cloned or executed. Every "how it works" statement in the dossiers comes from reading templates, schemas, survey definitions and licence text. Star counts were recorded but were **not** a ranking input — and inverted usefulness at both ends: `web-check` has 34.6k stars and says nothing about how a client works internally; `traffic2openapi` has 3 stars and answers a question no other cheap tool answers.
