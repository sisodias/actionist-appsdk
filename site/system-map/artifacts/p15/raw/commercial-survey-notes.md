# P15 — Continuous corpus and production learning: commercial survey

Run: 2026-08-27, Sprint-1 lane S1-L5. Research only.
Denominator: **22 organisations/products** across 7 categories. All URLs fetched on 2026-08-27.

---

## 1. Determination: the ~100 commercial target is `not_applicable`

**There is no coherent commercial market of "production learning loop vendors."** The ~100-company
denominator this part was scoped for cannot be built without padding, and the rationale is specific
rather than a shrug.

The evidence for the determination is threefold, and each strand is independently checkable:

**A retired flagship, with no managed successor.** Azure AI Personalizer was the one major cloud
vendor's general-purpose "send us decisions, send us rewards, we update the policy" service. Microsoft
closed it to new resources on 20 September 2023 and retired it on **25 August 2026** — two days before
this survey. The migration path Microsoft publishes is not another managed service but an open-source
repository, `microsoft/learning-loop`. When the category's most prominent managed offering is
decommissioned in favour of "run it yourself," that is a market failing to sustain, not a market
maturing.

**The function exists but is always a feature, never a product.** Every genuine production-learning
loop found in this survey is embedded inside something sold as another category: Renovate's merge
confidence is a feature of a dependency-update bot, v0's autofixer is a feature of a site builder,
Algolia's Dynamic Re-Ranking is a feature of search. Nobody sells the loop itself. There is no
analyst category, no comparison grid, no set of competitors positioning against each other on
"quality of production feedback loop." A denominator of ~100 would therefore be assembled by
listing companies that happen to contain a loop, which is a list of software vendors, not a market.

**The nearest true analogue is deliberately unbuilt.** The closest thing to Actionist's actual need —
reranking a shelf of reusable software assets by how they performed in real builds — is served by
package-health scoring, and the two most authoritative players there (Google's deps.dev, OpenSSF
Scorecard) contain **no outcome feedback whatsoever**. They are static analysis of repository state.
The one vendor that does pool real production outcomes across projects, Mend's Renovate merge
confidence, keeps its algorithm private. So even within the closest adjacent category, the loop is
rare rather than standard.

**What was built instead.** A 22-record denominator across seven adjacent categories, weighted
toward the categories that actually answer P15's sub-questions, with negative results recorded as
first-class findings rather than omitted.

| Category | Count | What it contributes |
|---|---|---|
| `registry_health` | 6 | Closest true analogue — scoring a shelf of software assets |
| `bandits` | 4 | P15(d) exploration vs exploitation, and its data floors |
| `builder_loop` | 3 | Closest to Actionist's own business |
| `marketplace_ranking` | 3 | P15(a) reranking by production signals |
| `ml_eval` | 2 | Sparse-appropriate structured human feedback |
| `privacy_aggregation` | 2 | P15(e) cross-client aggregation |
| `ranking_service` | 2 | P15(c) cold-start priors |
| **Total** | **22** | 10 top10 · 10 census · 2 excluded |

---

## 2. Method

Priority-ordered fetching of first-party documentation, one category at a time, appending to the
JSONL incrementally. Every record carries an `evidence_class`. Where a page 404'd or redirected
(Snyk Advisor, Socket's `socket-score`, LangSmith, Cursor Tab) the redirect was followed or an
alternate first-party path found; where no first-party methodology existed, the record says
`unknown` rather than inferring from reputation.

Two claims in the pre-existing records were checked against source and **corrected** — see §5.

Deliberately not padded: VWO, Kameleoon, Split, Optimizely, Amplitude Experiment, Mixpanel, PostHog,
Pendo, LogRocket, FullStory, Sprig, Coveo, Bloomreach, Constructor, Recombee, Humanloop, Galileo,
Patronus, Arize, Langfuse, W&B Weave, Tidelift, JetBrains/Figma/Salesforce marketplaces, Tumult and
Oblivious were all in scope and were **not** added. Adding them would have grown the count without
changing a single conclusion: they are variations on mechanisms already documented here, and none
would have altered the sparse-data verdict. The determination in §1 is the deliverable, not the count.

---

## 3. Top 10

| # | Name | Category | Loop evidence | Survives sparse test? |
|---|---|---|---|---|
| 1 | Mend Renovate Merge Confidence | registry_health | documented | **Yes** (mechanism, not data) |
| 2 | Azure AI Personalizer | bandits | documented | Partial — Apprentice mode yes, bandit no |
| 3 | Vercel v0 / vercel-autofixer-01 | builder_loop | documented | Partial — taxonomy yes, RFT no |
| 4 | Amazon Personalize User-Personalization | ranking_service | documented | Partial — params yes, model no |
| 5 | npms.io scoring | registry_health | documented | **Yes** |
| 6 | Socket.dev package scores | registry_health | documented | **Yes** (γ confidence weighting) |
| 7 | GrowthBook Bandits | bandits | documented | **No** — and publishes why |
| 8 | Braintrust human review | ml_eval | documented | **Yes** (deliberately manual) |
| 9 | ISRG Divvi Up (DAP/Prio) | privacy_aggregation | documented | **No** — and publishes why |
| 10 | Algolia Dynamic Re-Ranking | ranking_service | documented | **No** |

Ranking rule: a live mechanism whose unit of learning is the *software asset* outranks a
decommissioned one whose unit is a per-user decision; a documented methodology outranks a vendor
claim; and a mechanism that works at n=10 outranks one that needs n=10,000 regardless of pedigree.

---

## 4. Azure Personalizer retirement — verified

Fetched: <https://learn.microsoft.com/en-us/azure/ai-services/personalizer/what-is-personalizer>

> "Starting 20 September 2023, you can't create new Personalizer resources. The Personalizer service
> is retiring 25 August 2026. We recommend migrating to the open-source
> [microsoft/learning-loop](https://github.com/microsoft/learning-loop)."

Three things follow. **The date is 25 August 2026** — the current `what-is-personalizer` page states
this unambiguously; the prior record's note about a conflicting 1 October 2026 date elsewhere in
Microsoft's estate stands as a caveat about other pages, not about this one. **The successor is
open-source, not managed** — Microsoft is not replacing it with an Azure service. **The service was
closed to new customers nearly three years before shutdown**, which means it was in maintenance for
most of its life.

Also confirmed from the same page, and directly relevant to sparse-data fit:

> "In general, we recommend a minimum of ~1,000 events per day to enable Personalizer to learn
> effectively."

> "We recommend no more than ~50 actions in each Rank API call."

The ~1,000 events/day floor is a vendor stating its own mechanism's requirement. Actionist's regime
is tens of builds total. The gap is roughly four orders of magnitude.

---

## 5. Corrections to pre-existing records

Two claims inherited from the previous run did not survive checking, and both were in **P15-C-003
(Statsig Autotune)**:

1. **Withdrawn: "configurable exploration window (documented default 24 hours)."** The docs page
   (<https://docs.statsig.com/autotune/multi-armed-bandit>) documents no exploration window, warm-up
   period, or default duration. The stopping condition is margin-based — the process concludes when
   the winning treatment beats the second-best by a specified margin, whose default is also not
   stated. The 24-hour figure was not supported by the page.
2. **Upgraded to verified:** the Thompson-sampling detail, previously flagged as read only via
   search-result summary, is now confirmed first-party. The page states Autotune "uses a Thompson
   Sampling (Bayesian) algorithm to estimate each variant's probability of being the best variant,"
   with a worked example where a variant at 60% probability of being best receives 60% of traffic.

The same fetch added the hardest numbers in the bandits tier: Statsig's comparison table gives
**"Very Little (100+ samples)"** for the multi-armed bandit and **"Little — generally 1000+ samples"**
for the contextual bandit.

Records P15-C-003, -004 and -005 were re-dispositioned from `top10` to `census` during the whole-set
re-rank. Their factual content is unchanged.

---

## 6. The five strongest documented-methodology findings

**1. Renovate merge confidence — production outcomes pooled across a fleet, fed back as adoption advice.**
<https://docs.renovatebot.com/merge-confidence/>
Badges for Age, Adoption ("the percentage of this package's users (within Renovate) which are using
this release"), Passing ("the percentage of updates which have passing tests for this package"), and
a composite Confidence level. Built from the hosted app's PR corpus — millions of PRs on github.com
since 2017 — to "find and flag undeclared breaking releases." Three design choices transfer at any
scale: an explicit **Neutral** state meaning "we don't have enough data about the update"; a hard
minimum-age gate (npm packages cannot reach High confidence until three days old, because younger
packages can be unpublished); and percentages "weighted towards Organizations, private repositories,
and projects with high test reliability" rather than counted flat. The limitation is stated by Mend
itself: "The algorithm that decides on the values is private and is not something we plan to share."

**2. Socket.dev — the published algebra of confidence-vs-evidence.**
<https://docs.socket.dev/docs/package-scores>
Socket prints its scoring formula, including per-severity normalisation (Critical e^(−10x), High
e^(−x), Medium e^(−x/20), Low e^(−x/40)) with soft caps, and a power-scaling exponent
**γ ≈ ½ + c₀·log(lines of code) + c₁·log(popularity)**. "Larger or more widely used packages tend to
have a smaller γ," which "reduces the impact of negative metrics." This is confidence-weighting by
evidence volume expressed as an exponent — the answer to "how do I stop one bad build from burying an
asset that succeeded twenty times, while still reacting to an asset with one data point." Caveat:
Socket is a static-analysis scorer, not an outcome loop, and c₀/c₁ are unpublished.

**3. npms.io — relative-to-cohort scoring that needs no absolute threshold.**
<https://github.com/npms-io/npms-analyzer/blob/master/docs/architecture.md>
Aggregation computes min, max and mean across the whole corpus; each package is normalised into [0,1]
against those; the score is then the Y value on a Bezier curve with control points (0,0),
(mean,0.75), (mean,0.75), (1,1). A package at the corpus mean lands near 0.75, and the doubled middle
control point compresses the middle of the distribution so small evidence differences near the mean
do not cause large rank swings. It also refuses to score before aggregation exists — a package
analysed too early "won't be scored at the moment." Dead software; the normalisation idea is what
survives.

**4. Amazon Personalize — cold start as a settable policy, plus impressions.**
<https://docs.aws.amazon.com/personalize/latest/dg/native-recipe-new-item-USER_PERSONALIZATION.html>
`exploration_weight` (default **0.3**, range [0.0,1.0]) governs how often low-evidence items appear:
"At zero, no exploration occurs and recommendations are based on current data (relevance)."
`exploration_item_age_cut_off` (default **30.0** days, minimum 1) bounds what counts as new.
`recency_mask` (default True) weights recent events more heavily. Separately, **impressions data** —
the list of items visible when the user interacted with one — is the sleeper finding of this survey:
it distinguishes "considered and rejected" from "never shown," which at tens of builds is a large
share of the total available signal and is free to log. Blocked by a hard floor of "at minimum 1000
item interactions" to train at all.

**5. Vercel v0 — a binary production success metric and an error taxonomy.**
<https://vercel.com/blog/v0-composite-model-family>
Evals plus "feedback from v0.dev users" identify recurring error categories; `vercel-autofixer-01` is
then trained "in conjunction with Fireworks AI using reinforcement fine-tuning (RFT)" to "minimize
error rates across a variety of tracked categories." The primary metric is the share of **successful
generations** — one producing a working site in preview rather than an error or blank screen.
Important honesty check: Vercel documents how errors were *identified*, and does **not** state the
training set was accept/reject labels. Calling this documented accept/reject learning would overclaim.

---

## 7. The sparse-data test: what survives

Actionist's regime is tens of builds, not millions of events. Sorting every mechanism found by
whether it can fire at that scale:

### Survives — implementable at n≈10, no volume required

- **An explicit "not enough evidence" state.** Renovate's *Neutral*; npms.io declining to score
  before aggregation exists. Two vendors arrived at this independently, which is a strong signal it
  is the correct default rather than a nicety. Absence of evidence must not read as evidence of
  absence — which is exactly the failure WordPress exhibits.
- **Relative-to-cohort normalisation.** npms.io's min/max/mean plus mean-anchored curve; ecosyste.ms'
  percentile `rankings` object. "Top decile of the shelf for successful reuse" is meaningful and
  stable at 30 assets; an absolute score of 0.62 is not.
- **Confidence weighting by evidence volume.** Socket's γ exponent. Formalises how hard a single bad
  observation should count against an asset with a long history versus one with none.
- **Minimum-age gates.** Renovate's three-day npm rule. A time gate is not a statistical threshold —
  it costs nothing to enforce and blocks premature promotion however good early signals look.
- **Impressions / considered-but-rejected logging.** Amazon Personalize. Roughly multiplies the
  information extractable per build; pure instrumentation, no model needed.
- **A binary production success metric.** v0's "does it work in preview." Observable at n=1.
- **Named failure taxonomies before any learning.** v0's tracked error categories. Ten failures
  bucketed into three named modes is actionable; ten failures as prose is not.
- **Structured human review with typed scores.** Braintrust's categorical/continuous score schema.
  At tens of builds a reviewer's typed verdict on *why* a plan was edited carries more information
  than any statistic could extract. This is the mechanism that actually fits.
- **Two-stage ranking containment.** Algolia's rule that the evidence layer only reorders what the
  deterministic layer already admitted. Bounds the blast radius of a wrong loop.
- **Never-starve floors.** GrowthBook's guaranteed 1% traffic per variation, so an asset is never
  permanently written off by one unlucky build.
- **Slow update cadences.** GrowthBook's own reasoning — longer windows "reduce the likelihood that a
  fluky day of traffic will cause undesirable weight updates" — applies with *more* force at ten
  observations than at ten thousand.
- **Per-source contribution caps.** Apple's donation limits, repurposed: stop one large client
  silently determining the whole shelf ranking.

### Fails — needs volume Actionist will not have, with the vendor's own number

| Mechanism | Published requirement | Source |
|---|---|---|
| Azure Personalizer online mode | ~1,000 events/day | learn.microsoft.com |
| GrowthBook bandit reweighting | **100 users/variation** before any update; 40 conversions/variation recommended | docs.growthbook.io/bandits/config |
| Statsig multi-armed bandit | 100+ samples | docs.statsig.com |
| Statsig contextual bandit | 1000+ samples | docs.statsig.com |
| Amazon Personalize training | minimum 1,000 item interactions | docs.aws.amazon.com |
| Algolia Dynamic Re-Ranking | 20 clicks or 2 conversions per query / 30 days; ~20K events per 30 days | algolia.com/doc |
| DAP / Divvi Up | a `min_batch_size` per batch; spec states privacy needs "a large number of Clients" | draft-ietf-ppm-dap |
| Apple local DP | noise "average[s] out over large numbers of data points" | Apple DP Overview PDF |
| v0 autofixer RFT | "a large volume of real generations" | vercel.com/blog |

The pattern is consistent and worth stating plainly to the client: **every mechanism that learns
statistically publishes a floor between 100 and 20,000 observations, and Actionist has tens.** The
loop must therefore be built from the structural mechanisms in the first list, not the statistical
ones in the second.

### The P15(e) verdict specifically

Cryptographic cross-client aggregation is the **wrong tool** at this scale, and this is the most
consequential negative finding in the survey. DAP mandates a `min_batch_size` — "the smallest number
of reports a batch is allowed to include" — and the draft states that for reasonable privacy "there
must be a large number of Clients." Apple's own overview says the mechanism works because noise
"average[s] out over large numbers of data points." With tens of builds across a handful of clients,
either no batch reaches a protective threshold, or the threshold is set low enough to fire and
protects nothing. The right answer at this scale is architectural and contractual isolation plus
human review of what crosses a client boundary — with Divvi Up's *trust structure* borrowed (no
single party sees both the raw signal and the client identity) rather than its cryptography.

---

## 8. Negative results worth keeping

- **deps.dev and OpenSSF Scorecard contain no outcome loop at all.** Scorecard is a risk-weighted
  average of static checks (Critical 10, High 7.5, Medium 5, Low 2.5); deps.dev builds graphs "without
  actually building and installing the software." The most authoritative package-health
  infrastructure in existence is purely static — this is the baseline any Actionist loop must beat,
  and evidence the outcome loop is rare rather than standard.
- **WordPress.org is the cold-start anti-pattern.** "We have no data on usage, so you may need to
  wait a bit," with new plugins taking 6–14 days to appear in search at all and no substitute signal.
  Applied to Actionist this would make every newly added capability invisible precisely when it most
  needs trial.
- **VS Code Marketplace publishes nothing** about ranking — first-party extension docs cover only
  which manifest fields feed text search. Marketplace ranking methodology is generally trade secret,
  making it a weak evidence base for P15 overall.
- **Braintrust and LangSmith are both honest that their loops are manual.** LangSmith automates only
  evaluator execution on sampled traces; adding failing traces to datasets, authoring evaluators and
  redeploying are human actions. Its regression-capture pattern — one observed failure becomes a
  permanent test — works at n=1 and is the most sparse-appropriate idea in that tier.
- **In-session self-repair is not production learning.** Replit Agent reading its own errors and
  fixing its code is a within-run loop that teaches the system nothing surviving the session. Easy to
  mistake for a learning loop in marketing copy.

---

## 9. Unknowns and blockers

- **Snyk Advisor methodology unverified.** `docs.snyk.io/manage-risk/.../snyk-advisor` 404s and the
  fetched portion of `sitemap.md` was truncated before any Advisor path appeared. No claim recorded.
- **Cursor Tab.** `docs.cursor.com/tab/overview` 308-redirects to a landing page that lists no Tab
  model and no training methodology. Industry assumption is that it learns from accept/reject
  telemetry; that is **not** first-party supported and is recorded as `unknown`, not inferred.
- **Lovable and Replit.** No vendor methodology page located; only comparative review sources. The
  record is a deliberate negative denominator entry and the weakest-sourced in the set.
- **ecosyste.ms `critical` boolean.** Observed `true` on the react record; its derivation was not
  verified against first-party docs.
- **Renovate's scoring function is private by design** — inputs documented, weights and model form
  not reproducible.
- **Socket's γ coefficients c₀, c₁ unpublished**; the page also carries a staleness caveat that it
  "may not exactly represent the scoring system as deployed."
- **Apple's epsilon values** are from an overview PDF describing features through the iOS 11 era and
  may not describe current deployments.
- **Not fetched this run** (deliberate, see §2): the ~25 experimentation/analytics/eval/recommender
  vendors listed as unpadded. If a larger denominator is later required for presentation reasons,
  these are the queue — but the §1 determination should be revisited first, since adding them
  changes no conclusion here.
