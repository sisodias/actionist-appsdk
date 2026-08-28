# OSS Survey A — Top 8 Deep Dossiers (DISCOVERY → SPEC)

Observed 2026-08-27. Denominator: 60 repos in `oss-a.jsonl` (23 fetched, 37 search-only).

Selection favours **transferable mechanism** over popularity. Stars are recorded in the JSONL but were
not a ranking input: `gsd-build/get-shit-done` has 64.6k stars and has been idle three months, while
`cyanheads/survey-mcp-server` has 4 stars and the cleanest question-graph schema in the entire survey.

A note on licences, per the project evidence standard. Five of the badges in this survey do not mean
what a metadata scrape says they mean, and all five were caught only by reading the LICENSE body:

| Repo | Badge/metadata says | Body actually says |
|---|---|---|
| `cdeust/ai-prd-generator` | LICENSE file present | **Proprietary commercial**, "All Rights Reserved" — not OSS at all |
| `baptisteArno/typebot.io` | NOASSERTION, "open-source" in README | **FSL-1.1-Apache-2.0** — source-available, competing use barred for 2 years |
| `surveyjs/survey-library` | MIT | MIT renderer only; the **builder is a separate repo under a commercial EULA** |
| `formbricks/formbricks` / `OpnForm` | NOASSERTION, "Open Source" in title | **Open-core**: AGPLv3 base with proprietary `ee`/`Enterprise` carve-outs |
| `serenity-bdd/serenity-core` | NOASSERTION | Apache-2.0 — detection failed only because the file is `licence.txt` (British spelling) |

Also corrected: `rjsf-team/react-jsonschema-form` is **Apache-2.0**, not the MIT that comparison
articles repeatedly assert; `reqnroll/Reqnroll` is **BSD-3-Clause**; `behave/behave` is BSD-style, not MIT.

---

## 1. `github/spec-kit` — the artifact-embedded ambiguity marker

**Segment:** spec-driven · **MIT** · pushed 2026-08-27 · verified: fetched (read `templates/spec-template.md`)

The concrete artifact is a Markdown template with a fixed, mandatory section order, and reading it is
far more instructive than the README. `spec-template.md` requires user stories that are **prioritised
(P1/P2/P3) and independently testable** — each one framed so that implementing only that story still
yields a viable MVP, with a stated "Why this priority" and an "Independent Test" description. Every
story carries **Given/When/Then acceptance scenarios**. Below the stories sit `FR-001`-style functional
requirements in MUST language, Key Entities, measurable technology-agnostic `SC-001` success criteria,
and an explicit Assumptions section for defaults chosen where the user was silent.

The flow from vague intent to structure runs `/speckit.constitution` → `/speckit.specify` →
`/speckit.clarify` → `/speckit.plan` → `/speckit.tasks` → `/speckit.implement` → `/speckit.converge`,
looping the last two until converged. Human-in-loop points are the optional but recommended
`/speckit.clarify` gate (formerly `/quizme`), `/speckit.analyze` for cross-artifact consistency, and
review of `specs/` before planning.

**The reusable pattern for Actionist** is the `[NEEDS CLARIFICATION: auth method not specified —
email/password, SSO, OAuth?]` marker. Ambiguity is written *into the artifact at the point of
ambiguity*, carrying its own candidate answers, rather than being tracked in a side channel or lost in
chat. That makes unresolved intent countable, greppable, addressable, and impossible to silently skip —
a spec can be mechanically gated on "zero open markers". Pair it with the `SC-###` insistence that
success criteria be measurable and technology-agnostic, which is precisely the discipline that turns a
client's "make it feel fast" into something verifiable.

**Biggest limitation:** it is a template plus prompts, with no engine enforcing any of it. Nothing
prevents an agent from emitting a spec with zero clarification markers because it guessed confidently.
The structure is real; the rigour depends entirely on the model filling it in, and I did not execute
the CLI to see how well that holds up.

---

## 2. `cyanheads/survey-mcp-server` — the strongest structural match in the survey

**Segment:** dialog · **Apache-2.0** · pushed 2025-10-20 (~10 months idle) · verified: fetched (read a full survey definition)

This is the closest thing in the denominator to Actionist's actual shape, and almost nobody has found
it. It inverts the usual conversational-form design: the **server owns question state, eligibility,
validation, scoring and progress**, while the LLM is demoted to the conversational surface. Eight MCP
tools bound the interaction: `survey_start_session`, `survey_get_question`, `survey_submit_response`,
`survey_get_progress`, `survey_complete_session`, `survey_resume_session`, `survey_export_results`,
`survey_list_available`.

I read `survey-definitions/product/feedback/comprehensive-2025.json` (21 questions) rather than trusting
the README. The definition is `{id, version, metadata, questions, settings}`; each question is
`{id, type, text, helpText, required, options[{value,label}]}`; and conditional logic is an explicit
boolean tree:

```json
"conditional": {
  "operator": "OR",
  "conditions": [{ "dependsOn": "user_role", "showIf": ["team-admin"] }]
}
```

Three design decisions are worth stealing outright. First, every question returned to the model carries
`currentlyEligible` **and** `eligibilityReason` — the gating logic explains itself, so a wrong skip is
debuggable instead of mysterious. Second, `guidanceForLLM` separates *what to ask* (data, server-owned)
from *how to ask it* (tone, model-owned). Third, `survey_resume_session` treats a partially-completed
interview as a first-class resumable object, which any real client discovery session needs.

**The reusable pattern for Actionist:** the question graph is declarative data with deterministic
eligibility; the LLM supplies only phrasing, follow-ups and judgement. This gives you replayable,
auditable, testable discovery sessions — you can unit-test the conditional tree without an LLM in the
loop, which is impossible if branching lives in a prompt.

**Biggest limitation:** 4 stars, ~10 months idle, self-labelled "In Development", 67.82% coverage.
Treat it as a **design reference, never a dependency**. I read the definition file but did not run the
server, so I have not confirmed the eligibility engine actually honours the tree at runtime.

---

## 3. `Fission-AI/OpenSpec` — change-scoped deltas and the SHALL/WHEN/THEN grammar

**Segment:** spec-driven · **MIT** · pushed 2026-08-26 · verified: fetched

OpenSpec's premise is that requirements decay when they live in chat history, so it inserts a planning
layer where human and assistant must agree *before* code exists. Its distinguishing move is scoping
everything to a **change** rather than a codebase. Each change is a directory —
`openspec/changes/add-dark-mode/` containing `proposal.md` (why), `specs/` (requirements and scenarios),
`design.md` (technical approach) and `tasks.md` (checklist) — which is archived on completion to
`openspec/changes/archive/2025-01-23-add-dark-mode/`, with durable specs promoted to `openspec/specs`.

The spec grammar is disciplined Markdown: `## ADDED Requirements` → `### Requirement:` in SHALL language
→ `#### Scenario:` as WHEN/THEN bullets. The workflow is `/opsx:explore` (an explicitly no-stakes
thinking partner that reads code and weighs options), `/opsx:propose`, `/opsx:apply`, `/opsx:archive`.

**The reusable pattern for Actionist** is twofold. The **delta framing** — ADDED/MODIFIED/REMOVED against
a known baseline — is exactly right for iterative client work, where the second engagement is never a
blank page and re-eliciting settled requirements wastes the client's goodwill. And separating
`/opsx:explore` from `/opsx:propose` gives the client a **stakes-free divergent phase** before anything
becomes committed scope, which is a materially different conversation from "approve this document".

**Biggest limitation:** the discipline is entirely conventional — nothing validates that a delta is
internally consistent, that SHALL statements are testable, or that the baseline is accurate. The
token-efficiency advantage widely claimed over BMAD is blog-sourced and unmeasured by me.

---

## 4. `gokulrajaram/ProductSpec` — the only formally schematised spec format found

**Segment:** spec-driven · **MIT** · pushed 2026-07-19 · verified: fetched (read `SPEC.md` and `schema/product-spec.schema.json`)

Alone in this survey, ProductSpec is a **standard rather than a tool**, and it is candid about the
boundary: it "defines structure and interoperability. It does not define taste, quality, or reviewer
behavior." Documents are `.product-spec.md` files — YAML frontmatter plus `## Section Label` Markdown
sections (minimum six) — backed by real JSON Schema draft 2020-12 files.

Reading the schema pays off. `artifact_type` is a closed enum of `hypothesis` | `prd` |
`openspec_proposal`, which encodes a **maturity ladder**: the same document type is expected to graduate
from unvalidated guess to committed requirement. Frontmatter mandates `spec_format_version`, `title`,
`author`, `created_at`, `updated_at`, with optional `spec_revision`, `linked_github_repo`, and
`applies_to` entries scoped by `path` or `component`. The schema directory also ships
`decision-trace.schema.json`, `review-annotation.schema.json` and `agent-run.schema.json` — meaning
decisions, human review annotations and agent executions are all first-class, validatable objects
alongside the spec.

**The reusable pattern for Actionist:** a discovery output should be **schema-validated, versioned, and
typed by maturity**, not just well-formatted prose. `spec_revision` plus `decision-trace` gives you a
defensible answer to "why does the build not match what I asked for?" — the single most expensive
question in client work. `review-annotation` as a separate schema is the right model for capturing
client feedback as structured data rather than email.

**Biggest limitation:** 275 stars and no visible ecosystem. A standard without adopters is a proposal,
not an interoperability layer. Adopt the schema *ideas*; do not bet on the format being recognised by
anything downstream. I did not run the `conformance/` suite.

---

## 5. `oasis-surveys/oasis-platform` — shadow mode, and an AGPL trap

**Segment:** dialog · **AGPL-3.0-only** (badge trap: API says NOASSERTION) · pushed 2026-07-11 · verified: fetched

The only project here built by researchers to a *methodological* standard rather than a product
intuition, launched March 2026 and explicitly motivated by commercial conversational-AI tools not being
designed around research methodology. It runs AI-conducted interviews at scale via three pipelines
(modular STT→LLM→TTS, native voice-to-voice, and text chat), with `backend/app/schemas/` organised as
`study.py`, `agent.py`, `session.py`, `participant.py`, `analytics.py`. Semi-structured mode defines
question guides with follow-up **probes** and **transition logic**, keeping a structured backbone under
a natural conversation, and ships four built-in templates including a cognitive interview pretest.

**The reusable pattern for Actionist is the shadow mode**, and it is the best governance idea in the
whole survey. OASIS's adaptive engagement policy ships **non-acting by default**: it logs what it *would*
have done to an audit trail, and the researcher reviews that trail before enabling live action. For a
client-facing discovery agent, this is how you earn the right to let a model adapt questioning — you
run the adaptive layer in observation mode against real sessions, show the client what it would have
asked, and only then switch it on. It converts "trust our AI" into an inspectable record. The
probe/transition split is also directly transferable: a backbone question, its permitted follow-ups,
and the condition for moving on are three separate concerns.

**Biggest limitation: the licence is a commercial blocker.** AGPL-3.0-only means deploying a *modified*
version as a network service obliges you to release those modifications. For a proprietary client
product this is disqualifying for code reuse — the value is the pattern and the methodology, not the
source. Also young (82 commits, single author, 23 stars). I confirmed the schema module names but not
the internal guide field definitions.

---

## 6. `surveyjs/survey-library` — the richest conditional model, with a licence seam

**Segment:** form-engine · **MIT (library only)** · pushed 2026-08-27 · verified: fetched (confirmed package split + read the Creator EULA)

The most mature conditional-logic engine in the form-engine segment, and architecturally the best
factored: `packages/` contains `survey-core` — framework-independent model, validation, conditional
logic, calculations, navigation, localization — plus thin renderers `survey-react-ui`,
`survey-angular-ui`, `survey-vue3-ui`, `survey-js-ui`. Everything (structure, validation, branching,
appearance) is declared in a single JSON definition, so **the logic travels with the form** across
export, migration and environments. It supports conditional visibility, branching, calculated values,
expression logic, dynamic panels, repeating groups, carry-forward of prior answers, and text piping.

**The reusable pattern for Actionist:** the `survey-core` / renderer split is the correct architecture
for a discovery product — a headless questionnaire model that is fully testable without a DOM, with
presentation as a swappable layer. Carry-forward and piping matter specifically for client discovery,
where question *N* must reference what was said at question *3* to avoid the "didn't you just ask me
that?" failure that destroys credibility in a live session.

**Biggest limitation — and this is the Composio pattern repeating:** the MIT badge is true but covers
less than it appears. The drag-and-drop **Survey Creator is a separate repo** (`surveyjs/survey-creator`,
1272 stars) whose LICENSE body is a Devsoft Baltic OÜ commercial EULA. Rendering JSON is free; the
authoring UI a client would expect to *build* forms with is a paid product. Any proposal to Cena that
says "we'll use SurveyJS, it's MIT" is understating cost unless the authoring surface is built
in-house or JSON is authored by the agent. I also did not read raw schema source, so exact property
names come from documentation rather than code.

---

## 7. `cucumber/cucumber-js` — the executable-spec reference, and its cautionary tale

**Segment:** executable-spec · **MIT** · pushed 2026-08-27 · verified: fetched

The canonical implementation of specs that both document and execute, and notably the README frames the
purpose as communication, not testing: because scenarios are plain language "they can be read by anyone
on your team", improving "communication, collaboration and trust". Feature files
(`features/greeting.feature`) use `Feature:` / `Scenario:` / `When` / `Then`; step definitions in
`features/support/steps.js` bind each line to code via pattern matching with typed placeholders like
`{string}`; state is shared across steps through the `World` (`this`). `npx cucumber-js` parses,
matches, executes and reports.

**The reusable pattern for Actionist** is the **two-audience artifact**: one document that a
non-technical client can read and approve, and a machine can execute as a pass/fail acceptance gate. If
discovery output is expressed as Given/When/Then, the same sentence the client signed off becomes the
test proving delivery — which converts "is it done?" from an argument into a test run. Note that
spec-kit (dossier 1) already mandates Given/When/Then acceptance scenarios, so **the bridge from
discovery artifact to executable gate is short**, and that is the most valuable structural finding
across dossiers 1, 7 and 8 combined.

**Biggest limitation:** Cucumber cannot execute anything by itself — it needs Playwright, Selenium or
Cypress underneath. More importantly, the segment's well-documented real-world failure is that step
definitions become a maintenance burden and Gherkin ends up written by developers for developers,
losing the stakeholder-readability that justified the ceremony. That failure mode is invisible from the
repo and is exactly the risk to flag before recommending Gherkin as a client-facing format.
`karatelabs/karate` (MIT, 8.9k stars) attacks precisely this by eliminating step definitions — but I
could not fetch it before my WebFetch quota was exhausted, so verify that claim before quoting it.

---

## 8. `bmad-code-org/BMAD-METHOD` — the full-lifecycle maximalist, and the trademark footnote

**Segment:** spec-driven · **MIT code + reserved trademarks** (API says NOASSERTION) · pushed 2026-08-27 · verified: fetched

Included because it is the segment's maximalist position and the most likely thing a client has already
heard of (52.4k stars). BMAD simulates a full agile team — analyst, PM, architect, scrum master,
developer, QA, UX — running a Clarify → Plan → Build/verify → Learn loop, producing briefs,
specifications, architecture documents and story files, with the explicit promise of turning an idea
into software "without giving up the thinking". v6 refactored personas into skills: `src/` now holds
only `bmm-skills/`, `core-skills/` and `scripts/`.

**The reusable pattern for Actionist:** role-differentiated interrogation. An analyst persona, an
architect persona and a QA persona ask *structurally different questions* about the same feature, and
that diversity surfaces gaps a single generic "tell me about your project" prompt reliably misses —
the QA lens asks how you would know it worked, the architect lens asks what it must integrate with.
This is adoptable as a **question-taxonomy** for discovery without importing any BMAD machinery: use
the roles as coverage axes over the question space, then check a session for unexamined axes.

**Biggest limitation:** ceremony cost. Critics estimate roughly two months to master versus a day or
two for Spec Kit, token consumption is high, and one third-party benchmark clocked 5.5 hours for a task
OpenSpec did in 12 minutes — a claim I have not replicated and would not quote to a client as fact.
Two evidence caveats: I confirmed only the `src/` top level and did **not** read the actual persona
prompt text, so the elicitation mechanism itself is unverified. And on licensing, the LICENSE body is
MIT with added contributor-attribution prose, but a separate `TRADEMARK.md` reserves "BMad" and
"BMAD-METHOD" — the code is reusable, **the name is not**, which matters if anything ships client-facing.

---

## Thin segments — reported honestly

**`dialog` is genuinely thin: 5 rows, and it is the segment nearest to Actionist's core.** This is a
real finding, not a search failure — I queried it from several angles (topic searches, description
searches, and web search). What exists splits into three unusable-as-is groups: research artifacts
(`AIinterviewing/...`, CC0, a paper replication package), abandoned toys (`Rettend/formate`, 2 stars,
9 months idle), and licence-blocked platforms (`oasis-platform` AGPL, `typebot.io` FSL). The one strong
structural match, `survey-mcp-server`, has 4 stars and has been idle 10 months.

The honest read: **there is no maintained, permissively-licensed, LLM-driven structured-interview engine
in the open-source commons.** For Actionist that is a positive signal about the gap being real, and it
means the discovery-dialog layer is build-not-adopt. Every credible mechanism in this segment has to be
reconstructed from patterns rather than imported.

**`prd-agent` is thin in quality rather than count** (8 rows). The segment is dominated by prompt-template
collections with no enforcing mechanism, and the two most mechanically interesting entries are both
compromised: `ai-prd-generator` has the best-designed clarification loop I found — confidence-scored
rounds gated at 92%/95%/100% thresholds with multi-judge verification — but it is **proprietary
commercial software**, so those claims are unauditable marketing behind a paid licence key. `MetaGPT`
(70k stars) has been idle since January 2026 and, critically, *expands* a one-line requirement rather
than interrogating the user, which is the opposite of discovery. `chaussky/ainalyst` is the only entry
grounded in an established methodology (BABOK v3) and it is AGPL and tiny (41 stars).

**`spec-driven` (18) is crowded but highly duplicative.** The GSD family alone (`get-shit-done` 64.6k,
`gsd-core` 8.8k, `gsd-2` 7.8k, `gsd-pi` 1.2k) is near-identical work forked across orgs with murky
provenance, and the flagship has been idle three months despite its star count. Real mechanism
concentrates in three repos: spec-kit, OpenSpec and ProductSpec.

**`form-engine` (13) and `executable-spec` (16) are mature, well-covered, and mostly solved** — the open
questions there are licensing and fit, not availability.

## What I did not verify

- `karatelabs/karate`, `Pimzino/spec-workflow-mcp`, `visual-req/visual-spec` and 34 other rows are
  **search-only** (`evidence_class: I`). Their claims come from metadata and descriptions, not from
  reading the repos.
- WebFetch hit a model usage limit partway through; I completed verification via the authenticated
  `gh` CLI, which gave **better** licence and recency evidence (exact SPDX identifiers, `pushed_at`
  timestamps, and raw LICENSE bodies) than the HTML pages did. All 60 rows have API-confirmed licence
  metadata; the 5 badge traps above were caught by decoding the LICENSE blobs.
- No repository was cloned or executed, per instruction. Every "how it works" statement is from reading
  templates, schemas, definitions and licence text — never from running anything.
