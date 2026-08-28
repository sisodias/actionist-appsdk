# Commercial Survey B — Top 8 Dossiers

Intent-to-specification systems. Observed 2026-08-27. Evidence class D (public vendor
documentation and third-party reporting). 51 surfaces surveyed; 13 fetched from primary
source. Selection favours a *distinct mechanism* over market share — three of the eight
are not products Actionist competes with, but grammars and coverage models it should
steal from.

A note that shapes everything below: **the two segments with real falsifiability (EARS,
BDD) have no elicitation, and the two segments with real elicitation (AI-PRD,
builder-intake) have no falsifiability.** Nothing in this survey does both. That gap is
the finding.

---

## 1. EARS notation — the requirement grammar
`com-b-013` · req-mgmt · fetched

EARS constrains natural language with a tiny ruleset: zero-or-many preconditions,
zero-or-one trigger, one system name, one-or-many responses, clauses always in the same
temporal order. Six patterns cover the space — ubiquitous (`The <system> shall
<response>`), state-driven (`WHILE <precondition>, the <system> shall <response>`),
event-driven (`WHEN <trigger>, the <system> shall <response>`), optional-feature
(`WHERE <feature included>, …`), unwanted-behaviour (`IF <condition>, THEN the <system>
shall <response>`), and complex, which composes the keywords. It was developed in 2009
at Rolls-Royce Aero Engines while analysing an airworthiness regulation for an aero
engine control system, and published at IEEE RE09. The mechanism that matters for
Actionist is not the tidiness — it is that **the grammar makes gaps structurally
visible**. Because a trigger, a precondition, a system name and a response are all
mandatory slots, an author physically cannot finish the sentence while the requirement
is still vague; the missing clause is the interview question. The Jama article's phrasing
is that EARS exposes what must be discovered rather than letting it hide in prose, and a
quoted senior engineer puts it harder: if you can't write it in EARS, you don't
understand it. Confidence is representable as an unfilled slot rather than a percentage.
And because the clause order is temporal, an EARS statement maps almost mechanically onto
Given/When/Then — testability comes free rather than as a second authoring pass.
**Actionist should copy the slot-mandatory grammar as the internal representation of a
ProductSpec requirement**, and drive clarifying questions off unfilled slots instead of
off an LLM's discretion. Caveat before quoting to Cena: this page is Jama-published (it
sells the tool implementing EARS), and some template text was placeholder-stripped in the
fetched render, so re-verify the six patterns against Mavin's original RE09 paper.

## 2. Xray — coverage as a state on the requirement
`com-b-045` · acceptance · search-only (Cloud doc 403'd; reconstructed from indexed docs + third-party)

Xray stores Gherkin in Jira: a **Cucumber Test** issue type holds a Scenario or Scenario
Outline, and a **Pre-Condition** issue type holds Backgrounds and reusable setup. The
detail worth the whole dossier is what it refuses to import — feature-level content is
deliberately dropped, because the feature is expected to already exist as a Jira
requirement issue such as a story. A tag carrying a requirement key creates a `Tests`
link; a test created from a story is auto-linked. The payoff is the sharpest coverage
semantics in this survey: **a requirement issue renders as `UNCOVERED` when nothing tests
it.** That is a falsifiable property of the spec itself, computed rather than asserted,
and it is exactly what every AI-PRD tool in segment 1 lacks — those tools can tell you a
PRD exists, none can tell you a requirement is unverified. Round-tripping is real
(bulk import/update from `.feature` files via REST and CI plugins, export back out,
validated against Cucumber, Behave and SpecFlow). Xray's own docs surface the unresolved
tension honestly: teams must decide where scenarios are mastered, since you preferably
want a single source of truth — Jira or the repo, not both. **Actionist should copy
`UNCOVERED` as a first-class computed state on every ProductSpec requirement** and refuse
to call a spec complete while any requirement holds it. Reject the dual-mastering
problem by deciding mastership once, in the spec.

## 3. Replit Agent Plan mode — the approval gate
`com-b-024` · builder-intake · fetched

Replit is the only builder in this survey with a documented, blocking pre-build gate.
Plan mode (clicked, or requested in natural language) produces an **ordered task list**
before any code or data is modified, explores different approaches and weighs trade-offs,
and then presents an explicit **Accept tasks / Revise plan** dialog. Nothing is built
until the user picks. Independent field testing found the Agent asking real clarifying
questions up front — which database, whether authentication was needed, what happens when
a reminder date passes — and the reviewer's conclusion is the sharpest line in the whole
sweep: it was the only tool tested that *treated a vague description as vague*. Note the
spec shape, though: the artifact is **decomposition, not description**. It says what will
be done, never what must be true afterwards, so there is nothing to verify against once
building starts. Checkpoints and agent self-testing carry the correctness load instead,
which converts specification failure into rollback rather than into prevention.
**Actionist should copy the blocking Accept/Revise gate** — a spec the client never
explicitly accepted is not a spec — **and reject task-list-as-spec** in favour of an
outcome statement that survives into acceptance. One design smell to avoid: Replit
conflates scope approval with billing approval (paid actions need a separate "Allow
once"), which trains users to click through gates. Caveat: the clarifying-question
behaviour is one reviewer's session, not a documented guarantee.

## 4. Lovable Knowledge — persistent context, honestly bounded
`com-b-023` · builder-intake · fetched

Lovable's Knowledge feature is the builder segment's nearest thing to a durable spec, and
it is valuable here precisely because the vendor documents its limits. Two levels, each a
plain-text field capped at **10,000 characters**: workspace knowledge (coding style,
naming, preferred libraries, architecture patterns, testing rules, brand voice, things to
avoid) and project knowledge, whose example headings amount to a lightweight PRD —
Project overview, Users, Key database tables, Design guidelines, Architecture rules,
Domain terminology. The docs state plainly that there is no formal PRD template. It is
always-on background context on every message, competing for attention with project code,
connector knowledge and repo files like `AGENTS.md` or `CLAUDE.md`. Two admissions matter
more than the feature: the hard character cap, and the concession that **in very long
conversations with a lot of context, instructions may not always be followed
consistently**. That is a vendor conceding that persistent context degrades under
pressure — the failure mode any Actionist ProductSpec fed to a coding agent will hit.
Conflict resolution is soft too: project knowledge "generally" wins over workspace. And
Knowledge is purely directive — it says what should be true, never what must be
demonstrated, so nothing about it is falsifiable. **Actionist should copy the two-tier
scope split (org conventions vs project facts) and the discipline of specificity the docs
model** ("Always enable TypeScript strict mode. Never use `any`." over vague guidance).
**Reject the unbounded plain-text blob**: structure the spec so the important clauses can
be selected into a prompt rather than hoping 10k characters of prose all land.

## 5. Cucumber Studio + Gherkin — specification as the test
`com-b-044`, `com-b-051` · acceptance · fetched (Studio) / search-only (core)

Gherkin's contribution is a grammar non-engineers can read and machines can run: Feature,
Rule, Background, Scenario, Scenario Outline with Examples, and Given/When/Then steps.
Cucumber Studio wraps it as a collaboration platform where business and technology jointly
author acceptance criteria, running a three-phase cycle — define the idea, test the code,
learn in production — with feature files rendered as **living documentation verified with
every developer check-in** via Git integration. That last property is the one to steal:
documentation staleness becomes *structurally impossible* rather than merely discouraged,
because the document and the test are the same object. Cucumber's own three practices name
the transition Actionist actually needs — discovery, **formulation**, automation — where
formulation is the step that turns an agreed concrete example into a written scenario. The
honest limits are well attested: BDD scenarios run roughly 10–100× slower than unit tests
and belong at acceptance rather than design level, step definitions must be rewritten per
language even though feature files are portable, and the collaboration payoff evaporates
without stakeholder participation (without them you are paying overhead for nothing).
**Actionist should copy example-driven formulation** — elicit a concrete example, then
generalise it into a criterion, rather than asking clients to state abstract requirements
they cannot articulate. **Reject mandatory Gherkin syntax at the client-facing layer**;
generate it as an output artifact instead. Commercial-risk note: `cucumber.io/tools/
cucumberstudio` now 301s to SmartBear, so the branding has moved.

## 6. BuildBetter — inverted elicitation, evidence as ground truth
`com-b-003` · ai-prd · fetched

BuildBetter inverts the segment. Rather than asking a user to describe what they want, it
captures what customers already said — calls (bot and bot-less local recorder, or import),
Slack threads, support tickets, CSV, AI surveys, social listening, CRM enrichment, REST
API — reprocesses feedback line by line with full context, and generates PRDs, scoping
docs and roadmaps grounded in it, with citations back to source conversations. The
extraction layer (**Signals**, claimed 35+ types carrying sentiment, severity and business
impact, applied through the customer's own taxonomy) is the mechanism: it makes *demand*
structured before it makes the *spec* structured. Its falsifiability is evidential rather
than logical — a claim in the document traces to a timestamped utterance, so the check is
"did someone actually say this?" rather than "can we test this?". That is a genuinely
different and complementary axis to EARS/Gherkin, and the customer testimonial quoted on
the page is revealing about why it sells: citations build trust and prove accuracy.
**Actionist should copy the citation discipline — every requirement carries a provenance
pointer to the client utterance that produced it**, which converts scope disputes from
opinion into lookup. Two cautions. All accuracy figures are vendor self-benchmarks against
unnamed baselines (99% evidence coverage vs 20–28% for keyword/vector/hybrid; 98%
classification accuracy) — quote none of them to Cena as fact. And the whole model
presupposes an existing customer-call corpus, so it is **useless at true cold start**,
which is precisely Actionist's likely condition.

## 7. Jama Connect — the spec as a graph, and the 2026 pivot
`com-b-011`, `com-b-012`, `com-b-015` · req-mgmt · fetched

Jama is included less for its RM heritage than for where it has moved: as observed, it
positions itself as an Intelligent Engineering Management Platform doing **spec-driven
development**, where engineers and AI agents share context over MCP, backed by a *semantic
product graph* it explicitly frames as improving LLM inference quality and token
efficiency. Read past the marketing and the architectural bet is the interesting part —
that the right interface between a specification and a coding agent is a typed graph of
linked items, not a document. Two mechanisms are worth transplanting. First, **Advisor**
operates at *single-statement* granularity: the unit of quality is one requirement
sentence checked against INCOSE practice and EARS, so quality checking and testability
become the same operation. Second, from the DOORS family and mirrored here, **suspect
links** — editing a requirement automatically flags dependent links as suspect, turning
change impact into a work queue. That answers the question every AI-PRD tool in segment 1
ducks: *what happens to the spec when reality moves?* **Actionist should copy per-statement
quality gating and suspect-link propagation**, and treat ProductSpec as a linked graph
with a document as one rendering. Verification limits are real: the fetched pages never
defined Live Traceability, never disclosed the item schema, and the Advisor page is an
announcement that **does not enumerate a single INCOSE rule, EARS pattern, or scoring
mechanism** — so claims that it detects ambiguity or passive voice could not be confirmed
and must not be repeated as observed. Scale figures (10M items/project, 100M/instance) are
vendor claims.

## 8. DOORS Next — what industrial-strength costs
`com-b-014`, `com-b-016` · req-mgmt · search-only (IBM product page 403'd)

DOORS Next is the reference point for a fully-realised requirements object model, and its
value to Actionist is largely as a **warning about the price of that completeness**.
Artifacts are the atomic unit, organised into Modules (hierarchical specification
documents), with every module artifact also persisting as a base artifact — one object,
two identities, and links that behave differently depending on which you touched. Link
types are system-defined and extensible: `Validated By` (requirement ↔ QM object such as a
test case), `Artifact Term Reference` for glossary terms, `Embeds`, generic `Link`, plus
custom types configured per project. Baselines are component- or project-level, and
crucially **cross-component traceability only resolves correctly inside a Global
Configuration context**, so preserving linkage across components demands a Global
Configuration baseline that cascades component baselines beneath it. That is the shape of
the tax: the model is genuinely capable of proving a requirement was verified at a frozen
point in time, and it costs an administrator-designed data model up front plus
configuration-management literacy from every author. Elicitation is nonexistent by design
— the schema is defined first and authors fill it. **Actionist should copy exactly two
things: the typed `Validated By` link between a requirement and its verification, and
baselining a spec at agreement time** so "what we agreed" is a retrievable object rather
than an argument about an email. **Reject the configuration-context model**; single-stream
specs do not need it, and it is where DOORS Next spends most of its usability budget.

---

## Cross-cutting reads for Actionist's ProductSpec

**The gap is the opportunity.** Elicitation and falsifiability are disjoint across all 51
surfaces. AI-PRD tools and builders are good at getting something out of a vague human and
bad at making it checkable; RM and BDD tools are good at making things checkable and
assume the requirement already arrived. A ProductSpec that elicits *into* an EARS-shaped
slot structure and emits Gherkin would occupy empty ground.

**Minimum spec structure, synthesised.** Requirements as EARS-slotted statements (1);
each carrying a provenance pointer to the client utterance (6); each with a computed
coverage state that starts `UNCOVERED` (2); explicit non-goals as first-class fields
(`com-b-006`); a typed `Validated By` link to its acceptance criterion (8); a two-tier
split between org conventions and project facts (4); and the whole thing baselined at
client acceptance (8) behind a blocking Accept/Revise gate (3).

**Representing assumptions and confidence.** Three prior-art options, in descending
attractiveness: an *unfilled mandatory slot* (EARS) — self-evident, needs no scale, and
doubles as the next interview question; a *provenance pointer that is absent* (BuildBetter
inverted) — this requirement came from us, not from you; and a *numeric range*
(Galorath parametric estimation, `com-b-043`) — honest but only meaningful once scope
exists. Nothing in the survey represented confidence as a percentage on a requirement,
which is mild evidence that doing so is not useful.

**Prototype vs ask.** The segment's implicit consensus, clearest in Replit (3, `com-b-028`):
**prototype for look-and-feel, ask for data and behaviour.** A mockup substitutes
recognition for articulation and is excellent where the client's taste is the requirement;
it is worthless for the reminder-date-passes question, where only an answer will do. v0
(`com-b-026`) is the cautionary limit — a beautiful interface in about two minutes with no
database and no way to save anything.

**Format lock-in is a live risk, not a hypothetical.** Tricentis discontinued SpecFlow
(`com-b-049`), the most widely used .NET BDD framework, stranding users until Reqnroll
(`com-b-048`) appeared as a community reboot led by SpecFlow's original creator. Gherkin
survived because the grammar was never owned by the tool. Actionist should ensure the
ProductSpec's canonical form is a plain, portable, documented format — and that the
product is not the only thing that can read it.

## Thin and contested segments

- **scoping (10 rows, 1 fetched, 7 weak/adjacent)** — genuinely the weakest segment and
  it should be reported as such. These are document-assembly and pricing tools; scope is
  prose inside a template, and e-signature substitutes agreement for verification. Only
  FlowEdge (`com-b-038`) names acceptance criteria as an output section, and only via
  self-published material. Independent Feb-2026 market analysis found **no tool that is
  both AI-native and dev-agency-specific** — generic AI generators know nothing about
  sprints, tech stacks, APIs or dev milestones. Treat the gap as real but note the
  analysis itself is a gist by an interested party.
- **ai-prd (9 rows)** — crowded with thin LLM wrappers (FreePRD, FifthDraft, Taskade).
  Only ChatPRD, BuildBetter and arguably Figr have durable mechanism. Nearly all
  comparison content in this segment is vendor-published and ranks its own publisher
  first; the Keeborg "8-document stack" is an unverified vendor claim that should not be
  quoted downstream.
- **acceptance (8 rows)** — small because the commercial layer is thin over open-source
  cores, and it is consolidating, not growing: SpecFlow discontinued, Cucumber Studio
  moved to SmartBear branding. Mechanism quality is nonetheless the highest in the survey.
- **Fetch failures to close later**: IBM product page (403), Xray Cloud doc (403), Base44
  (tool limit), Jama Advisor rule enumeration (not published). Segments 1 and 3 are the
  ones where I'd spend the next fetch budget.
