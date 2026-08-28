# Commercial survey A — top 8 deep dossiers

Observed 2026-08-27. Selection criterion: the surface has a *mechanism* for learning about a
business client that is visible in public evidence, not just a workflow that moves an
onboarding process along. Several large, famous products (Karbon, HoneyBook, Clio) were
excluded from this list because their public evidence establishes orchestration, not
inference.

Verification note applied throughout: eleven surfaces in the JSONL were fetched first-party;
the rest are search-only. Where a dossier below rests on search-only evidence I say so in
the paragraph. Fetching stopped early on a model rate limit, so Loopio, Conveyor and Clay
were downgraded from my intended fetch list — that is a real gap, not an oversight.

---

## 1. Auctor (`getauctor.com`, YC Spring 2025) — the closest structural analogue to Actionist

**Question policy:** Auctor has no question policy of its own, and that is the whole design.
Its agents join the discovery and refinement calls that human system integrators were already
running, and capture requirements as they surface in conversation. The humans own adaptivity,
ordering and rapport; the agent owns extraction. **What it precomputes:** the entire artifact
layer downstream of discovery — SOWs, proposals, architecture documents, user stories, test
plans and configurations — generated from the conversation rather than written afterwards
from memory. **Confidence and contradictions:** nothing public establishes how it resolves a
requirement stated one way in session one and differently in session three; its pitch is that
documents stay *synced* when requirements change, which implies change propagation but not
contradiction adjudication. **Stopping rule:** none visible; discovery ends when the humans
stop meeting. **Lesson for Actionist:** this is the strongest argument in the whole survey
for a particular architectural bet — that the highest-value move is not to replace the
discovery conversation with a form or a bot, but to sit inside the conversation and make its
output structured and traceable. Auctor also demonstrates the commercial framing that
resonates with buyers: not "better discovery" but "fewer change orders." Caveat worth
respecting: getauctor.com returned 403 to my fetch, so this dossier rests on YC's first-party
company profile plus trade coverage. Its "over 70% of enterprise implementations experience
significant delays" is an unsourced launch-post claim and should never be repeated to Cena as
a fact.

## 2. Cloobot X (`cloobot.ai`) — traceability from requirement back to the sentence that caused it

**Question policy:** again, none of its own — it ingests workshops, stakeholder conversations,
notes, SoWs and project documents rather than interviewing anyone. **What it precomputes:**
process maps, structured requirements and user stories from unstructured source material, plus
two things nobody else in this survey does — *gap and coverage analysis* (what has the
discovery failed to establish?) and *de-duplication/consolidation* across sources. **Confidence
and contradictions:** its requirements traceability matrix maintains a live chain from
requirement to user story to Jira ticket to release, and every derived requirement links back
to its originating source context. That link is the mechanism that makes a contradiction
*visible*: two requirements tracing to different sources can be compared against what was
actually said. **Stopping rule:** coverage analysis is effectively a stopping signal — discovery
is done when coverage is complete — though the vendor does not frame it that way. **Lesson for
Actionist:** the coverage-gap analysis is the single most transferable idea in this survey.
Actionist should know, at any moment, which parts of its client model are unestablished, and
that set should drive the next question. Also steal the provenance link: every field in a client
profile should point at the evidence that produced it. The "80-90% accuracy" figure is a
customer testimonial on the vendor's own page, not a benchmark.

## 3. Fin for Sales (Intercom, `fin.ai/sales`) — the only surface with an explicit, configurable stopping rule

**Question policy:** Fin runs inbound sales conversations end to end, "asking the same discovery
questions your SDRs would" about needs, budget and timeline. Crucially, the *criteria* are
customer-configured through a playbook: company size or segment, industry, core use case and
intent, budget fit, region, and existing-versus-new customer. **What it precomputes:** it
enriches the live conversation with CRM data and real-time research on the visitor's company,
so it is not asking what it could already know. **Confidence and contradictions:** not publicly
established — no evidence on how it handles a prospect whose stated headcount contradicts
enrichment data. **Stopping rule:** this is the standout. Fin has four explicit terminal states —
book a call, start a trial, disqualify, or route to sales — and it handles "graceful
disqualification" to redirect poor-fit leads. Discovery ends when one of four conditions is met,
and the human handoff carries the full conversation history plus an AI-generated summary of what
the prospect shared, what they care about, and qualification status. **Lesson for Actionist:**
define the terminal states of a discovery session up front and make them configurable per
engagement type. A discovery agent without a stopping rule will either stop arbitrarily or never
stop. Also note the honest published gap — no automated follow-up sequences after qualification —
which is the kind of scope boundary worth emulating in client-facing claims.

## 4. Avoma (`avoma.com`) — filling a predefined evidence schema from conversation

**Question policy:** none; the rep runs the call. **What it precomputes:** the most concrete
extraction claim in the conversation-intelligence segment — "automate custom CRM field updates
for MEDDIC, SPICED, etc." and "automatically track and score sales methodologies (MEDDIC, BANT)."
That is a predefined schema being populated from unstructured conversation without anyone typing
into it. It also generates structured summaries against custom templates, AI Smart Chapters that
segment the call by topic, and custom Smart Trackers that detect keywords and topics via
*semantic* matching rather than literal keyword hit. **Confidence and contradictions:** the
important negative finding — the vendor page markets outcomes (4+ hrs/week saved, 40% win-rate
lift) but never describes how an extracted MEDDIC field ties back to specific transcript
evidence. Whether a filled field carries a citation or a confidence score is unestablished, and
I would treat its absence from the marketing as weak evidence that it does not exist. **Stopping
rule:** none; extraction runs per meeting. **Lesson for Actionist:** the MEDDIC-field-filling
pattern is exactly the shape of what Actionist needs — a named schema, populated by inference
from conversation. But Avoma's gap is Actionist's opportunity: ship the citation. A populated
field that shows the sentence it came from is defensible in front of a client; one that does not
is a guess with good UI.

## 5. Gong (`gong.io`) — the category leader, and a caution about marketing evidence

**Question policy:** none; Gong is pure passive capture. **What it precomputes:** it
automatically captures every customer interaction and maps it to business context in what it
calls the Revenue Graph, then surfaces deal risk, opportunity and forecast inputs. Call scoring
evaluates discovery-question effectiveness, objection handling and next-step clarity. **Confidence
and contradictions:** not addressed in public first-party material. **Stopping rule:** not
applicable. **Lesson for Actionist:** two, and the second matters more than the first. First,
Gong proves that a very large business ($7.25B valuation, per third-party reporting) can be built
purely on structuring conversation exhaust, with zero incremental burden on the user — the input
is meetings that were happening anyway. Second, and this is the methodological lesson for this
engagement: I fetched Gong's own product page expecting mechanism and found almost none. It does
not name trackers, next-step extraction, or evidence-structured discovery; the help-centre
tracker documentation 404'd. The most famous product in the segment has the least
mechanism-bearing public evidence, and the detailed capability claims circulating about it come
overwhelmingly from competitors' comparison pages (Salesforce, Revenue.io, RingCentral, ZoomInfo
— every one of them a rival). Nothing about Gong's specific discovery-structuring behaviour
should reach Cena without a demo or documentation that I have actually read.

## 6. Demandbase Forms Enrichment (`demandbase.com`) — ask only what cannot be derived

**Question policy:** inverted and minimal. Forms Enrichment supplements a form submission with
known company information, populating *hidden* fields so firmographics are captured without ever
being displayed to the visitor, and offering "Toggle Fields" that stay hidden unless the system
cannot populate them automatically. **What it precomputes:** company identity and firmographics,
keyed on email domain (the default and most accurate identifier) or IP address (explicitly
weaker, because people work from home). **Confidence and contradictions:** the Toggle Field *is*
the confidence mechanism — it is a per-field fallback triggered by enrichment failure, which is
a cleaner design than a confidence score nobody reads. **Stopping rule:** the form is as long as
the unknowns require and no longer. **Lesson for Actionist:** this is the sharpest expression in
the survey of the precompute-versus-ask boundary, and it should be a design rule: a question is
only shown to a human when the system has tried and failed to answer it itself. Applied to
Actionist, the discovery questionnaire should be dynamically shortened by everything already
derivable from the client's domain, public site and connected systems. Note the evidence caveat:
the Demandbase product page I fetched makes *no* first-party claim about forms enrichment — the
hidden-field and Toggle Field mechanics come from its support documentation surfaced via search.

## 7. Loopio (`loopio.com`) — per-answer confidence scoring and content decay

**Question policy:** fully inverted — the counterparty asks, and Loopio matches each incoming
question against a library of pre-approved answers, importing questionnaires directly from
procurement portals. **What it precomputes:** a first-draft answer per question, drawn
exclusively from approved library content. **Confidence and contradictions:** this is why Loopio
is in the top eight despite being search-only. It reportedly scores every AI-generated answer
for accuracy, trust and completeness, and runs automated review cycles to keep library content
from going stale. Two distinct ideas there: a per-answer confidence score, and an explicit model
of *content decay over time*. **Stopping rule:** low-confidence or library-gap questions escalate
to a human SME rather than being answered badly. **Lesson for Actionist:** knowledge about a
client ages. A fact established in a January discovery call is not equally true in August, and a
system that treats stored client knowledge as permanently valid will confidently mislead. Build
a freshness dimension alongside the confidence dimension. **Verification gap, stated plainly:**
I did not fetch loopio.com — the rate limit hit first — so the confidence-indicator specifics
here come from Loopio's own blog surfaced in search. The scoring scale, the thresholds, and what
a low score actually blocks are all unestablished. This one needs a first-party pass before any
of it is quoted to Cena. The "1,700 companies" and "61% achieve ROI within a year" figures are
Loopio's own benchmark-report claims.

## 8. SellScale / Selix (`sellscale.com`) — narrated reasoning plus a human approval gate

**Question policy:** the agent asks the human operator, not the prospect. **What it precomputes:**
autonomous account research, then a proposed action. **Confidence and contradictions:** the
mechanism worth studying is presentational rather than statistical — Selix posts updates into
Slack explaining what it is researching and what it discovered, and proposed actions appear for
human review before execution once research is complete. Confidence is communicated by making
the reasoning inspectable in a channel people already read, rather than by a number. **Stopping
rule:** research completes, then the agent halts at an approval gate and waits. **Lesson for
Actionist:** for a client-facing discovery agent, an inspectable trace and a pre-execution
approval gate are likely to matter more to trust than any accuracy metric — Cena's clients need
to see *why* the system concluded what it concluded before it acts on their behalf. The pattern
generalises: narrate the research, propose rather than execute, gate on a human. This is
first-party (SellScale's published field guide) but reached through search rather than a fetched
page, and there is no public evidence on how often its proposals are rejected — which would be
the number that actually tells you whether the gate is load-bearing or ceremonial.

---

## Cross-cutting patterns worth carrying into Actionist design

**The precompute/ask frontier is the real product.** Demandbase (show a field only on
enrichment failure), Inleado (two fields asked, full firmographic profile derived), TaxDome
(pre-populate from prior year, ask for confirmation) and SafeBase (publish once so the question
is never asked) are all solving the same problem: minimise the human ask by maximising
derivation. This is the most consistent finding across segments.

**Almost nobody publishes a stopping rule.** Fin for Sales is the only surface in 55 with
explicit terminal states. Cloobot's coverage analysis implies one. Everyone else discovers until
a human stops. If Actionist ships a defensible stopping rule, it is differentiated.

**Provenance is rarer than extraction.** Many products extract structure from conversation;
only Cloobot clearly links each derived item back to its source. Avoma fills MEDDIC fields but
publishes nothing about citations. This is an open competitive gap.

**Marketing pages are systematically mechanism-free.** Gong, Zoovu and excentos all describe
outcomes and withhold mechanism; two Zoovu guided-selling URLs and one Gong help-doc 404'd;
Content Snare and Clio returned 403. The comparison articles that *do* describe mechanism are
overwhelmingly written by competitors. Per this project's evidence standard, treat every
capability claim in this pack as a claim to verify by demo or documentation, not a verdict.
