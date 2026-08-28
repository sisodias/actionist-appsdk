# S1-L1 lane synthesis — client demand science (P01 + P02)

Agent: `ACTIONIST-S1-L1-DEMAND` · Run `2026-08-27-sprint-1-fable` · observed 2026-08-27
Owner model: Fable 5 (1M) for checkpoints 1–3, continued on Opus 5 (1M) from checkpoint 3 onward at operator direction. All subagents Opus, per the Action Model model-routing override.
Status: **research only, unpromoted.** Sprint 1 is not complete and nothing here is a promoted contract.

## Why the two parts join

P01 asks how Actionist learns enough about a client to propose valuable software. P02 asks how that evidence becomes a falsifiable ProductSpec rather than a generic questionnaire. They are one problem seen from two ends, and the survey evidence makes the seam concrete rather than rhetorical:

> P01 produces facts with sources, confidence and gaps. P02 consumes them as **slots**. An unfilled slot is simultaneously P02's confidence representation and P01's next question.

That single mechanism — EARS slot-absence as the shared currency — is what makes the handoff typed rather than conversational. It resolves an open question on each side: P01's "what confidence threshold triggers a follow-up question" and P02's "how should assumptions and confidence be represented."

## The three findings that should change the architecture

**1. Elicitation and *computed* falsifiability are disjoint across the surveyed population.** No commercial surface (0 of 51) does both. Two OSS projects do — `spec-kit` and `OpenSpec` pair clarification markers with Given/When/Then scenarios — but **both are templates plus prompts with no enforcing engine**, so the combination is asserted by convention rather than computed. (The lane's first formulation, "nothing in 111 surfaces does both," was falsified by its own verification pass and corrected; the narrower claim is the defensible one.) The design consequence is unchanged and sharper: **elicit *into* a falsifiable structure and enforce it mechanically**, because convention without an engine is what the OSS half already proves insufficient.

**2. Discovery is an allocation problem across three currencies** — compute, client attention, client trust — organised by a six-rung invasiveness ladder. Climb only as far as the blocking unknown requires; record which rung produced each fact. The honest answer to "how do you know that about us" differs enormously between rung 0 (public data) and rung 5 (screen capture), and a client is entitled to that answer.

**3. Both layers need building, but only in part — and the qualifiers are load-bearing.** P01's *adaptive, LLM-driven* dialog layer has no maintained permissive OSS engine (5-row segment, three search angles); its *deterministic question-graph* half does have adoptable permissive prior art (SurveyKing MIT, xiaoju-survey Apache-2.0, Formily, FormKit, uniforms), found by a cross-segment audit that qualified an initially over-broad build-not-adopt call. P02's structure exists in abundance but only as templates and grammars with no enforcing engine. **Actionist builds the engines and the adaptive layer; it borrows the grammars and the deterministic question machinery.**

## What each part contributes to the other

| P01 → P02 | P02 → P01 |
|---|---|
| `ClientContext` facts with source, evidence class, confidence, observation time | Slot structure that defines which facts are *decision-relevant* (so P01 knows what to spend budget acquiring) |
| Typed `DiscoveryGapList` — every gap becomes a labelled assumption or an acceptance question, never silently lost | `UNCOVERED` coverage state — a computed signal that discovery is not finished |
| Contradiction records with both sources preserved | Contradiction register inside the spec, so unresolved conflicts cannot reach composition unflagged |
| Volume denominators per candidate workflow | Requirement-level denominators so composition can reject an under-scaled capability early |
| Industry vocabulary layer (17 industries) | Rendering layer: canonical structure, client's own terms |

## Cross-cutting mechanisms worth copying (with their sources)

1. **Ask only on derivation failure** — a question is shown to a human only when the system tried and failed to answer it (Demandbase Toggle Fields, generalised).
2. **Coverage-gap analysis as the question driver** — know at any moment what the model has failed to establish; that set drives the next question (Cloobot X).
3. **Explicit terminal states** — qualify / prototype / disqualify / escalate (Fin for Sales; the only surface in 55 with a published stopping rule).
4. **Per-field and per-requirement provenance** — every fact and every clause points at what produced it (fire-enrich, BuildBetter, Cloobot).
5. **Ambiguity written into the artifact at the point of ambiguity**, carrying candidate answers, mechanically gateable at zero (spec-kit).
6. **Server-owned question graph, model-owned phrasing** — replayable, auditable, unit-testable discovery (survey-mcp-server).
7. **Shadow mode before live adaptation** — log what the adaptive layer *would* have asked, human-review the trail, then enable (OASIS).
8. **Consent to the artifact, not the process** — review-trim-submit before captured evidence is usable (OpenCUA).
9. **Halt, don't interpolate** — when evidence runs out, emit a gap (OpenAdapt).
10. **Bi-temporal invalidation** — facts carry validity windows so the store answers "what changed since we last spoke" (Graphiti).

## Denominators (re-derived from files at close)

| | Commercial | OSS | Local | Total | Fetch-verified |
|---|---:|---:|---:|---:|---:|
| P01 | 55 | 50 | 10 | 115 | 40 |
| P02 | 51 | 60 | 10 | 121 | 46 |
| **Lane** | **106** | **110** | **10 (shared)** | **216 external rows** | **66 external (31%)** |

Innovation hypotheses: 100 (50 per part), top 10 ranked per part.
Industry priors: 17 rows, one per industry, machine-readable.
Zero duplicate IDs; one schema shape per file; all top-N IDs resolve into their source register.

**The 31% fetch-verified fraction is the lane's principal weakness** and is recorded as such rather than smoothed over. Both commercial agents hit usage limits mid-sweep. The OSS side partially compensated by verifying licence metadata for all 60 P02 rows via the authenticated `gh` CLI, which produced better evidence than HTML pages.

## Evidence integrity: what this lane caught

Reading LICENSE bodies rather than badges caught **nine licence traps in 110 OSS rows**, each of which would have cost money or credibility — a proprietary "All Rights Reserved" repo with a LICENSE file, an FSL source-available project labelled open-source, an MIT renderer whose authoring UI is a commercial EULA, two open-core AGPL products, AGPL with a paid commercial upsell, a CC BY-NC non-commercial licence, an MIT shell over two paid APIs, and an MIT toolkit over base-model-licensed weights. Two archived projects still surface in search as live options; one 35.7k-star project is in maintainer-declared maintenance mode.

This directly reproduces the Composio pattern already recorded in the project instructions, from an independent direction. It is the clearest available evidence that the Opus-only, read-the-source discipline on this project is earning its cost.

Star counts inverted usefulness at both ends: a 34.6k-star tool revealed nothing about internal client operation while a 3-star tool answered a question nothing else could. Independent confirmation of assumption A22.

## Unexecuted falsifiers (the honest gap)

The lane designed its primary experiments and **ran none of them**:

- **Five-workflow EARS proving harness** — whether the grammar survives contact with real business workflows. Specified, unrun. This is P02's central risk.
- **Precompute elimination measurement** — questions eliminated vs a question-only control.
- **Ladder acceptance rates** per rung per industry.
- **Marker-integrity check** — does marker count fall because ambiguity resolved or because the model guessed confidently?
- **Gate load-bearing test** — a near-100% accept rate would prove the Accept/Revise gate ceremonial.

All require engagements or executed fixtures, which Sprint 1's boundary excludes.

## What this lane does NOT establish

- No validated demand for any of the 17 industries. All rows remain `demand_signal=E, validated_demand=U`.
- No schema committed, no contract promoted, no block admitted, no client data touched, no repository cloned or executed.
- Vendor figures throughout are attributed claims, never facts. The Jama Advisor ambiguity-detection claim is explicitly **unconfirmed** — it could not be verified from any source found.
- `bupaR`'s licence is **unconfirmed** and must be read from DESCRIPTION before it is relied on as the permissive escape from pm4py's AGPL.
- The introspection denominator is weak evidence (9 of 12 rows search-only; the best tool archived).
- **Sprint 1 is not complete.** This lane owns P01 and P02 only; four sibling lanes hold P03, P05/P06/P08, P09/P10/P11 and P13/P14/P15, and coordinator verification governs promotion.

## Dependencies this lane could not resolve

- **P02's minimum spec cannot be closed while P12's contract is unsettled.** The minimum was derived backwards from P12's *anticipated* inputs; S2-L4 may revise it.
- **P01's rung-0 Actionist-account source is blocked** on the unknown Actionist data/auth contract (`U` in current research).
- **The scraping-permission question is a policy-owner decision**, not a research finding. The lane can supply an auditable scrape log; it cannot supply permission.
