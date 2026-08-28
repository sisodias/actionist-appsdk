# S1-L1 checkpoint 2 — commercial survey

Agent: ACTIONIST-S1-L1-DEMAND · Observed 2026-08-27 · Status: complete
Subagents: `s1l1-com-a` (P01), `s1l1-com-b` (P02) — both dispatched `model: "opus"` per Action Model override.

## Denominators (re-derived from the files, not from agent summaries)

| Survey | Part | Rows | Fetched | Search-only | Dup IDs | Schema variants |
|---|---|---:|---:|---:|---:|---:|
| `commercial-a.jsonl` | P01 | 55 | 11 | 44 | 0 | 1 |
| `commercial-b.jsonl` | P02 | 51 | 13 | 38 | 0 | 1 |
| **Commercial total** | | **106** | **24** | **82** | **0** | |

Segment breakdown, P01 (55): intake 26, conversation-intelligence 8, enrichment 8, ai-discovery 7, guided-selling 6.
Disposition: relevant 21, adjacent 21, weak 13. Evidence class: D 16, I 39.

Segment breakdown, P02 (51): builder-intake 13, req-mgmt 11, scoping 10, ai-prd 9, acceptance 8.
Disposition: relevant 24, adjacent 16, weak 11. Evidence class: D 51.

**Denominator verdict against the ~100 target:** met in aggregate (106 commercial surfaces across the lane's two parts), but the *verified* fraction is 24/106 (23%). The denominator is real; the verification depth is thin and is recorded as the lane's main evidence weakness.

## Top-10 justification

The contract asks for a justified top 10. Both agents returned top 8 selected on *mechanism visible in public evidence* rather than market share. Combined lane top 10 for P01+P02, promoted into `top-companies.jsonl` at synthesis:

P01: Cloobot X (coverage-gap analysis + requirement→source traceability), Fin for Sales (only surface with explicit terminal states), Demandbase Forms Enrichment (ask-only-on-enrichment-failure), Auctor (agent inside the human discovery call), Avoma (named schema filled from conversation), Loopio (per-answer confidence + content decay).
P02: EARS notation (slot-mandatory requirement grammar), Xray (`UNCOVERED` as computed state), Replit Agent Plan mode (blocking Accept/Revise gate), Jama Connect (per-statement quality gating + suspect links).

Deliberately excluded despite fame: Gong, Karbon, HoneyBook, Clio — public evidence establishes orchestration or outcomes, not discovery mechanism.

## Findings that change the lane's design

1. **Elicitation and falsifiability are disjoint across all 51 P02 surfaces.** AI-PRD tools and app-builders extract something from a vague human and produce nothing checkable; requirements-management and BDD tools produce highly checkable artifacts but assume the requirement already arrived. Nothing surveyed does both. This is the single most load-bearing finding in the lane and it defines the ProductSpec design: elicit *into* an EARS-shaped slot structure, emit Gherkin.
2. **Almost nobody publishes a stopping rule.** 1 of 55 P01 surfaces (Fin for Sales) has explicit terminal states; Cloobot's coverage analysis implies one. Everyone else discovers until a human stops. A defensible stopping rule is differentiating, and it directly answers P01's open question on confidence thresholds.
   > **SUPERSEDED 2026-08-27, same day, by lane self-audit round 3.** This finding as written is definition-sensitive and must not be quoted alone. A second count against the same 55 rows found **13 of 55** mentioning some termination-adjacent mechanism (qualification, completion, escalation, routing, coverage): Cloobot, Fin, Lawmatics, Loopio, Conveyor, HubSpot Breeze, Clay, Content Snare, Responsive, Whistic, Persana, Inleado, SAP CPQ. The **1/55** figure is correct **only** for *explicit configurable named terminal states*. Current interpretation lives in `p01-client-intelligence/runs/2026-08-27-sprint-1-fable/research-report.md` and `first-principles.md`. This checkpoint text is retained unedited as a dated receipt per the project's evidence-immutability rule; the correction is recorded here rather than by rewriting the original finding.
3. **The precompute/ask frontier is the actual product.** Demandbase (show a field only when enrichment fails), Inleado, TaxDome (pre-populate then confirm), SafeBase all solve the same problem from different directions. This is convergent evidence for P01's stated thesis rather than an assumption.
4. **Provenance is rarer than extraction.** Many products extract structure from conversation; only Cloobot clearly links each derived item to its source, and Avoma publishes nothing about citations on its filled MEDDIC fields. Open competitive gap.
5. **Confidence is best represented as an unfilled mandatory slot, not a percentage.** Nothing in 51 P02 surfaces represented confidence as a number on a requirement — mild evidence that percentages are not useful here. This answers P02's open question on representing assumptions/confidence.
6. **Prototype vs ask has an implicit consensus:** prototype for look-and-feel, ask for data and behaviour. A mockup substitutes recognition for articulation where taste is the requirement; it cannot answer "what happens when the reminder date passes."
7. **Format lock-in is a live risk, not hypothetical.** Tricentis discontinued SpecFlow, stranding .NET BDD users until the community reboot Reqnroll. Gherkin survived because the grammar was never owned by the tool. ProductSpec's canonical form must be plain, portable and documented.

## Evidence cautions carried forward (must not be quoted as fact to Cena)

- Jama **Advisor**: the page enumerates zero INCOSE rules, zero EARS patterns and no scoring mechanism. The widely repeated claim that it detects ambiguity/passive voice **could not be confirmed** — flagged unverified.
- **BuildBetter** accuracy figures (99% evidence coverage, 98% classification) are vendor self-benchmarks against unnamed baselines.
- **Auctor's** "over 70% of enterprise implementations experience significant delays" is an unsourced launch-post claim.
- **Cloobot's** "80-90% accuracy" is a customer testimonial on the vendor's own page, not a benchmark.
- **Loopio's** "1,700 companies" / "61% ROI within a year" are its own benchmark-report claims; the confidence-scoring specifics are search-only and need a first-party pass.
- **Keeborg's** "8-document stack" is an unverified vendor claim from its own comparison blog.
- **EARS**: the fetched page is Jama-published (it sells the implementing tool) and template text was placeholder-stripped in the render — re-verify the six patterns against Mavin's original IEEE RE09 paper before client quotation.
- **Gong**: the most famous surface in the segment had the least mechanism-bearing first-party evidence; detailed capability claims circulating about it come overwhelmingly from competitors' comparison pages.
- Nearly all AI-PRD comparison content is vendor-published and ranks its own publisher first.

## Thin segments (reported, not padded)

- **scoping (10 rows, 1 fetched, 7 weak/adjacent)** — weakest segment in the lane. Document-assembly and pricing tools where scope is prose in a template and e-signature substitutes agreement for verification. Only FlowEdge names acceptance criteria as an output, and only in self-published material.
- **ai-prd (9)** — crowded with thin LLM wrappers; only ChatPRD, BuildBetter and arguably Figr have durable mechanism.
- **acceptance (8)** — small and consolidating, not growing (SpecFlow discontinued, Cucumber Studio moved to SmartBear). Mechanism quality nonetheless the highest in the survey.
- **guided-selling (6)** and **ai-discovery (7)** are the thinnest P01 segments.

## Fetch failures to close with the next budget

IBM DOORS product page (403), Xray Cloud doc (403), Base44 (incomplete), Jama Advisor rule enumeration (not published anywhere found), getauctor.com (403), Content Snare / Clio (403), Gong help-centre tracker doc (404), two Zoovu URLs (404). Loopio, Conveyor and Clay were downgraded from the intended fetch list by a usage limit.

Both agents hit usage limits mid-sweep, capping fetches below intent. Recorded as a real constraint on this checkpoint's verification depth.
