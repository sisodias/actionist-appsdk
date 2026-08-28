# P06 — First principles: how many comparisons, in what format, and when to stop

**Run:** 2026-08-27-sprint-1-fable · **Part:** P06 design taste and preference learner
**Status:** research only. No implementation authorised by this document.

Every number below is either **derived** (I show the arithmetic and the assumptions),
**observed** (I read it in a source named inline), or **hypothesis**. Where a number is
folklore I say so rather than repeating it.

---

## 0. The question P06 actually has to answer

`parts.json` states the open question as *"Is the mathematical minimum 7, 14 or another
number of choices?"* That question is not well-posed as asked, and saying so is the first
useful result. A minimum number of choices only exists relative to four things nobody has
yet fixed:

1. **How many knobs, at how many levels each** — the size of the space being searched.
2. **What counts as done** — exact pack identification, or landing within a tolerance band.
3. **The per-answer error rate** — humans are noisy, and noise multiplies the requirement.
4. **The question format** — a binary pair and a best-worst-of-four carry very different
   amounts of information per click.

Fix those four and the number falls out of information theory. Leave any of them free and
"7 or 14" is a preference about UX length wearing the costume of a mathematical result.

---

## 1. Sizing the space (derived)

The knob set from the prior lane synthesis is contrast, radius, shadow, border,
typography, density, chroma. Assigning plausible discrete level counts:

| knob | levels |
|---|---|
| contrast | 5 |
| radius | 5 |
| shadow | 4 |
| border | 4 |
| typography | 6 |
| density | 3 |
| chroma | 5 |

Distinct reachable packs = 5·5·4·4·6·3·5 = **36,000**, so the prior entropy is
log₂(36,000) = **15.14 bits**.

That is the number to beat if the goal were to identify one exact pack out of 36,000.
It is not the goal, which matters enormously — see §2.

**Falsifier for §1:** if the real pack schema has materially more than 7 knobs or more
than ~6 levels per knob, every number downstream moves. At 12 knobs the entropy rises to
24.3 bits; at 8 levels per knob across 7 knobs it rises to 21.0 bits. I ran that
sensitivity in §3.4 rather than hiding it.

---

## 2. What "done" means — the single biggest lever

Identifying one pack out of 36,000 is the wrong target, and treating it as the target is
how you get an answer like "you need 50 clicks."

The client does not need `radius = 3` rather than `radius = 4`. They need a design that
lands in the right *neighbourhood*, after which a human (or the pack gallery's own
granularity) resolves the rest. So the honest target is: **resolve each knob to within
±1 level.**

Residual entropy under that tolerance = Σ log₂(min(L, 3)) = **11.09 bits** left
deliberately unresolved. Bits that must actually be acquired:

> **15.14 − 11.09 = 4.04 bits**

This is the load-bearing derivation of the whole lane. The reason a taste picker can
converge in single-digit clicks is *not* that comparisons are magically informative — it
is that the useful target is a region, not a point, and a region is roughly four bits
away from a uniform prior.

**Falsifier for §2:** if client satisfaction turns out to be sensitive at ±1 level — i.e.
clients reliably reject a pack that is one radius step off — then the tolerance argument
collapses and the requirement jumps back toward the full 15.14 bits (≈ 16 noiseless
binary questions, ≈ 39 at a 15% error rate). Test this directly: show a client their
converged pack and a ±1-level perturbation of it and measure whether they can tell, or
care. If they can, this section is wrong and the round count roughly triples.

---

## 3. Format and count (derived, then cross-checked against observed literature)

### 3.1 Information per question, noiseless

| format | outcomes | bits/question | rounds for 4.04 bits |
|---|---|---|---|
| binary pairwise | 2 | 1.00 | 5 |
| 4-up gallery | 4 | 2.00 | 3 |
| **4-up + outside option** | **5** | **2.32** | **2** |
| best-worst of 4 | 12 | 3.58 | 2 |
| full rank of 4 | 24 | 4.58 | 1 |
| 9-up gallery | 9 | 3.17 | 2 |

### 3.2 Adding human noise — this is where the realistic numbers come from

Model each answer as passing through a binary symmetric channel with error rate `p`;
capacity is `C(p) = 1 + p·log₂p + (1−p)·log₂(1−p)`. Effective bits per question ≈
(noiseless bits) × C(p). At a realistic `p = 0.15` for near-tied visual stimuli:

| format | eff. bits @ p=0.15 | rounds needed |
|---|---|---|
| binary pairwise | 0.39 | **11** |
| 4-up gallery | 0.78 | **6** |
| 4-up + outside option | 0.91 | **5** |
| best-worst of 4 | 1.40 | **3** |

And the same table at `p = 0.20`: binary 15, 4-up 8, 4-up+none 7, best-worst 5.

### 3.3 The recommended answer to "how many"

> **8–12 rounds of a 4-up gallery with an explicit outside option**, with a hard floor of
> 5 and a hard ceiling of 15.

Derivation: the tolerance-target arithmetic says 5 rounds at p=0.15 and 7 at p=0.20. I
recommend roughly double that, for three reasons that the arithmetic does not capture:
(a) the greedy acquisition policy is myopic and will not extract the theoretical maximum
per round; (b) early rounds are spent on exploration before the model has enough
structure to target the least-resolved knob; (c) knobs are correlated in practice (§4),
so some rounds buy redundant information.

**This lands in exactly the same place as the empirical literature**, which is the
strongest available check on the derivation:

- **Sequential Gallery** (Koyama, Sato & Goto, SIGGRAPH 2020, arXiv 2005.04107) — the
  closest published prior art, a 2D grid gallery for visual design tuning. Verbatim:
  *"The mean iteration count necessary for finding satisfactory results was 5.36 with SD
  = 2.69"*, at ~14.8 s per round. Tested at 5D–20D, bracketing our 7 knobs. Caveat that
  must travel with the number: n = 6 participants, self-reported satisfaction, a
  preliminary study.
- **Sequential Line Search** (Koyama et al., SIGGRAPH 2017) — 6D and 7D design spaces
  (7D is exactly our dimensionality). All reported results used a 15-iteration budget;
  the convergence observation is *"the distances become small rapidly in the first 4 or 5
  iterations."* The paper states **no** iteration-vs-dimension scaling law — I had this
  checked specifically, and its absence is a real gap.
- **Brochu, de Freitas & Ghosh** (NIPS 2007) — active preference learning needed a mean
  of **8.56 ± 5.23** clicks versus 17.87 ± 8.60 for max-variance and 18.40 ± 7.87 for
  Latin hypercubes. Roughly half. Two warnings: it is *target-finding* (a known target
  exists), an easier task than open-ended taste discovery, and *"in the 6D scenario,
  neither algorithm succeeds well in finding the optimum."*
- **Brochu, Brochu & de Freitas** (SCA 2010) — 4-gallery on 4 parameters: 7.57 ± 4.67
  iterations; the 12-parameter task: 5.38 ± 2.63, versus 28.40–35.33 for manual tuning. A
  learned prior cut iterations *"from an average of 11.25 to just 6.5."* And a hard UX
  ceiling worth carrying: *"We adopted 20 iterations because this is roughly the point at
  which users of the animation system start to quit if they do not see significant
  improvement."*
- **Midjourney Style Creator** (vendor docs, observed 2026-08-27) — a *shipped* adaptive
  visual-preference elicitor. Docs state most styles *"stabilize after 5–10 rounds"*,
  rounds 10–15 add detail, past 15 changes are *"small and subtle."*

Five independent sources — two academic user studies, one older NIPS study, one applied
animation study, and one shipped commercial product — all land in the 5–15 band, and the
derivation lands there too. That convergence is the actual answer.

### 3.4 Sensitivity — the answer's robustness

| assumption | entropy | bits needed | 4-up+none @ p=0.15 |
|---|---|---|---|
| 7 knobs, avg 4.6 levels (baseline) | 15.1 | 4.0 | 5 |
| 5 knobs (as in the live demo) | 11.5 | 3.6 | 4 |
| 7 knobs, fine 8 levels each | 21.0 | 9.9 | 11 |
| 12 knobs (expanded pack schema) | 24.3 | 5.3 | 6 |

The recommendation survives all four. Only the fine-grained 8-level variant pushes past
10, and it stays inside the 15 ceiling.

### 3.5 Verdict on "7 or 14"

Neither, as stated. **7 is approximately right by coincidence** — it is close to the
noiseless 4-up+none requirement — but the reasoning usually offered for it is not.

Specifically: do **not** justify 7 with Miller's "magical number seven." Miller 1956
(DOI 10.1037/h0043158) is about limits on *absolute judgment of unidimensional stimuli*
and *immediate memory span for chunks*, and Miller himself treats the recurrence of ~7
with explicit irony. It is not a finding about how many options to show in an interface.
Citing it that way is the kind of claim that does not survive scrutiny by a technical
client.

**14 has no derivation behind it that I could find or reconstruct.** It sits inside the
defensible band, so it is not wrong, but it is not a result.

---

## 4. Which axes are independent (partially resolved — the honest answer is "not fully")

**They are not independent, and the model must not assume they are.**

Two observed lines of evidence:

- **Processing fluency** (Reber, Schwarz & Winkielman 2004, DOI 10.1207/s15327957pspr0804_3):
  aesthetic pleasure is substantially a function of how easily a stimulus is processed,
  and fluency is driven by symmetry, contrast, prototypicality and prior exposure. Those
  cut *across* our knobs. A person who prefers high fluency will tend to prefer lower
  visual complexity — which shows up simultaneously as lower chroma, softer shadow,
  lighter border weight and lower density. That is one latent factor expressing itself in
  four knobs.
- **Reinecke & Gajos** (CHI 2013, DOI 10.1145/2470654.2481281): computational colourfulness
  and visual complexity, *in combination with demographic variables*, account for 48% of
  the variance in aesthetic first impressions after 500 ms viewing (adj. R² = .48). Two
  computed features plus demographics get halfway. Note the caveat carefully — the 48%
  figure includes the demographic terms, not colourfulness and complexity alone.

**Why this is good news, not bad.** Correlated knobs mean the effective dimensionality is
below 7. That is precisely the precondition for the sharpest theoretical result available:

> **Jamieson & Nowak** (NIPS 2011, arXiv 1109.3701): for objects embedded in d-dimensional
> Euclidean space and ranked by distance from a reference point, an algorithm identifies a
> randomly selected ranking using *"just slightly more than d log n adaptively selected
> pairwise comparisons, on average"*, whereas *"if instead the comparisons are chosen at
> random, then almost all pairwise comparisons must be made."*

The caveat is load-bearing and must be quoted with the result: this is **average-case over
a randomly selected ranking, not worst-case** — for d ≥ 2 there exist object placements
requiring at least n−1 queries. And it is entirely contingent on adaptivity.

**Counterweight, so we do not over-promise.** **Heckel, Shah, Ramchandran & Wainwright**
(arXiv 1606.08842, Annals of Statistics 2019) prove a lower bound showing that assuming a
parametric model (Bradley–Terry, Thurstone) buys **at most logarithmic gains** for
stochastic comparisons. So we cannot claim a large question-count saving purely from
"we use Bradley–Terry." The saving comes from adaptivity and from the tolerance target,
not from the model family.

**What is NOT resolved:** which specific knob pairs are correlated, and how strongly, for
*design-token* stimuli specifically. Both cited studies are about websites and general
visual stimuli, not our 7-knob token space. **This must be measured, not assumed** — see
the protocol's Gate 1.

---

## 5. Whole screens vs controlled fragments (resolved: neither alone — staged)

**Recommendation: whole-screen stimuli throughout, with the knobs under experimental
control, and fragments used only for a targeted disambiguation phase.**

The argument against pure fragments: a fragment is not the thing being chosen. The client
is buying an application, and preference for a button in isolation is a poor predictor of
preference for that button inside a dense dashboard. Worse, fragments strip out exactly
the cross-knob interactions (density × shadow × border) that carry most of the perceptual
signal.

The argument against pure whole screens: confounding. If two whole screens differ on all
seven knobs at once, the pick is nearly uninformative per knob — you learn one bit about a
7-dimensional vector. This is the classic reason experimental design exists.

**The resolution is that this is a false dichotomy.** Use whole screens *as* controlled
stimuli: render a complete, realistic screen, but vary only the knobs the current round is
targeting and hold the rest at the posterior mean. This is exactly what the live demo at
`https://actionist-taste.pages.dev/` already does — its own copy says later rounds target
the *"least-resolved knob"*, constructing cards that differ on that axis while holding
inferred preferences steady. That instinct is correct and is supported by the optimal-design
literature (D-optimal / Bayesian adaptive designs; `idefix` implements this for discrete
choice experiments).

**The P05 corpus makes this cheap.** The component corpus provides 8,515 identities as
re-themable bundles — controllable stimuli where the *content* is held fixed and only the
*token pack* varies. That is the ideal experimental article: identical structure, varying
treatment. Holding content constant across a comparison removes content preference as a
confound, which is otherwise a serious threat to validity (a client picking the card whose
headline they liked, not the card whose radius they liked).

**Falsifier:** if measured per-knob confidence from whole-screen rounds is materially worse
than from fragment rounds on the same knob (measure both on a 20-client sample), the
staging is wrong and fragments should carry the fine-resolution phase.

---

## 6. Stopping rule (resolved)

**Do not use a fixed round count as the primary rule.** Use a three-condition stop, with
the fixed count only as a ceiling.

Stop when **any** of:

1. **Confidence:** every knob's posterior credible interval is within ±1 level, *and* the
   expected information gain of the best available next question falls below a threshold
   (~0.25 bits). The second half matters — a wide posterior that no available question can
   narrow is a reason to stop, not to keep asking.
2. **Ceiling:** 15 rounds. Grounded in the observed 20-iteration abandonment point from
   Brochu et al. 2010 and Midjourney's *"past round 15, changes are small and subtle."*
   Stopping before the user wants to quit is worth more than the marginal bit.
3. **User satisfaction:** an always-available "this is right" affordance. Sequential
   Gallery used exactly this and found a mean of 5.36 rounds to self-reported satisfaction.
   The user's own judgement that the profile is correct is the terminal criterion the whole
   exercise is a proxy for.

**Floor:** never stop before 5 rounds even on high confidence — early apparent convergence
is usually the prior, not the data.

**Reporting rule.** Report confidence *per knob*, never as one scalar. Some knobs resolve
in two rounds (typography is usually decisive); others may never resolve (a client may
genuinely not care about shadow, and "no preference" is a finding, not a failure). A single
"87% confident" number would be actively misleading and is the kind of thing that erodes
credibility with a technical client.

---

## 7. Outside option (resolved — keep it, and treat it as weak evidence)

The prior lane synthesis says forced choice without a "none" pollutes the model, and that
is right. But the outside option must be modelled correctly or it creates its own problem.

- **Correct:** "none of these" is weak *negative* evidence against all four displayed
  designs simultaneously. It says the current region is wrong, which is genuinely
  informative for exploration.
- **Incorrect:** treating it as a null observation and discarding the round. That throws
  away real information and makes the re-roll button free, which invites clicking through.
- **Also incorrect:** treating it as strong negative evidence. A client may decline
  because all four are slightly off on one knob while being right on six.

Commercial precedent for the outside option is real but uneven: Netflix's title picker is
explicitly skippable (vendor help centre), Havenly's image grid carries *"I don't like
these. Skip."*, Midjourney's docs state *"If none of the sample styles fit what you're
looking for, you can continue scrolling to load new images — skipping does not affect your
style development."* Note that Midjourney's choice is the one I just argued against: they
explicitly make skipping *non*-informative. That is a defensible product decision (it keeps
the user moving) but it discards information, and we should knowingly diverge.

**Guard:** cap consecutive outside-option selections at 3. Three in a row means the
stimulus generator is searching the wrong region entirely, which should trigger a
re-seed from a different part of the space rather than another round.

---

## 8. TasteProfile → tokens: closed packs or continuous interpolation? (resolved)

**Recommendation: learn a continuous preference vector in knob space; ship a closed pack
selected by nearest-neighbour against that vector. Do not ship interpolated tokens.**

This is deliberately a split answer, and the split is the whole point.

**Why the learned representation must be continuous.** If you learn "the client likes pack
#17" you have learned nothing transferable — add a pack to the catalogue and you must
re-elicit. If you learn a point in knob space, the catalogue can grow, be re-ranked, or be
replaced without touching the elicitation model. The prior lane synthesis reached the same
conclusion: *learn a preference vector in knob space, not a favourite pack ID.*

**Why the shipped artefact must be a closed, pre-authored pack.** The token-pack science
report establishes that a pack is only safe to ship if it passes machine gates A–J:
DTCG schema validity, closed-world completeness, WCAG 2.2 contrast across every
role/state/mode pair, an APCA quality gate, ramp monotonicity, dark-mode pairing,
typography resolution, spacing/geometry, colour-vision distinguishability, and a runtime
literal audit. **An interpolated pack has passed none of them.** Interpolating between two
accessible packs does not yield an accessible pack — contrast ratio is not linear in the
token values, so the midpoint between two AA-passing palettes can easily fail AA. That is
not a theoretical worry; it follows directly from the WCAG luminance formula being
non-linear in channel values.

So: continuous internally, discrete at the boundary. The preference vector is the client's
DesignDNA; the pack is what gets built. Nearest-neighbour lookup is the join, and it is
also the natural place to hold a "we chose this pack because you are here in knob space"
explanation, which is worth real money in the client conversation.

**This is also the anti-overfitting mechanism**, which the brief asks about directly.
Snapping to a pre-authored pack is a hard regularizer: the output space has ~20–30 members
rather than 36,000, so the model *cannot* overfit into a bespoke corner of knob space on
the strength of ten noisy clicks. Add to that:

- **Hierarchical shrinkage.** Use a population prior over knob preferences and shrink each
  client toward it. This is standard practice in choice modelling (hierarchical Bayes in
  conjoint; `ChoiceModelR` implements it) and it is precisely designed for the "few
  observations per individual" regime we are in.
- **A warm-start prior.** The LAION aesthetic predictor gives a population aesthetic
  baseline. Learn the client's *deviation* from it rather than their taste from scratch.
  Brochu et al. 2010 observed a learned prior cutting iterations from 11.25 to 6.5 — the
  single largest efficiency lever reported anywhere in the applied literature.

**Falsifier:** if a held-out test — show the client their selected pack alongside the 2nd
and 3rd nearest packs, unlabelled — shows they cannot pick their own at above chance, then
the nearest-neighbour join is finer-grained than perception and the catalogue is too dense.
Conversely, if clients reliably reject the selected pack in favour of a neighbour, the
knob-space metric is wrong and needs reweighting (likely because knobs are being treated as
equally important when typography and chroma dominate).

---

## 9. Format recommendation, stated plainly

**4-up gallery with an explicit outside option**, not pairwise and not best-worst.

Best-worst is genuinely the most information-dense format per question (3.58 noiseless bits
vs 2.32), and Sawtooth's documented MaxDiff practice — 4–5 items per screen, `3K/k`
questions — is the most rigorous commercial design guidance available anywhere in this
space. I am not recommending it, for reasons that are about the client, not the maths:

1. **Cognitive cost is not linear in information.** Asking "which is best AND which is
   worst" roughly doubles the deliberation per screen. The literature's 14.8 s per plane-
   search subtask (Sequential Gallery) is for a *single* pick.
2. **"Worst" is a hostile question in a client-facing sales context.** A client being
   onboarded is forming an impression of us. Asking them to repeatedly reject work reads
   differently from asking them to choose what they like.
3. **The information advantage is largely redundant.** With correlated knobs and a
   nearest-neighbour output, the extra 1.26 bits/round buys perhaps 2 rounds of savings
   against a 15-round ceiling.

**Why 4-up over pairwise:** at p=0.15 pairwise needs ~11 rounds against 4-up's ~6, and
pairwise is more sensitive to the near-tie problem (Chen & Suh 2015 show sample complexity
scales *inversely with the separation measure* — near-tied options are where comparisons
get spent). Four options also give the outside option a meaningful denominator: "none of
these four" is a much stronger signal than "neither of these two."

**Why not 9-up:** 3.17 bits noiseless is attractive, but nine simultaneous whole-screen
renders exceed comfortable visual comparison and re-introduce a real selection-noise
penalty that the bit count does not capture. Note that Sequential Gallery hit exactly this
and reduced from a 5×5 to a 3×3 grid on a 13-inch display for one application — grid size
is display- and application-dependent, and quoting one number for it would be a mistake.

**One thing this frees us from:** choice overload is not a reason to keep the gallery
small. **Scheibehenne, Greifeneder & Todd** (2010, DOI 10.1086/651235) meta-analysed 63
conditions from 50 experiments (N = 5,036) and found *"a mean effect size of virtually
zero"* — D = 0.02, CI₉₅ [−0.09, 0.12], trimmed D = 0.001. The Iyengar & Lepper jam study
does **not** robustly replicate. Gallery size should be chosen on information and
perceptual-comparison grounds, not on overload folklore.

---

## 10. The deepest caveat, which bounds everything above

**Preferences are partly constructed during elicitation, not retrieved from storage.**
Slovic 1995 (DOI 10.1037/0003-066x.50.5.364) — preferences are frequently constructed in
the act of elicitation and are sensitive to framing, response mode and context.

Two direct consequences for P06:

1. **There is a ceiling on meaningful precision.** Past some point we are not measuring a
   pre-existing taste more accurately; we are manufacturing one. Spending 30 rounds to
   halve a credible interval is measuring our own instrument.
2. **The right validation metric is test–retest stability, not fit.** A model that predicts
   the training clicks perfectly and gives a different answer next Tuesday is worthless. Re-
   run elicitation with a subset of clients after 2 weeks and measure knob-level agreement.
   This should be a gate, not a nice-to-have.

And a specific confound to design against: **mere exposure** (Zajonc 1968,
DOI 10.1037/h0025848) — repeated exposure increases liking. If a design or a knob level
recurs across rounds it may gain preference from familiarity alone. Mitigation: never
re-show an identical stimulus, and log stimulus-repetition rates so the effect is at least
measurable.

---

## 11. What would falsify the overall recommendation

| # | Claim | Falsifier |
|---|---|---|
| F1 | ±1-level tolerance is acceptable | Clients reliably distinguish and reject ±1-level perturbations |
| F2 | 8–12 rounds suffice | Per-knob credible intervals still exceed ±1 level at round 12 for >30% of clients |
| F3 | Knobs are correlated, so effective d < 7 | Measured knob-preference correlation matrix is near-identity |
| F4 | Whole-screen controlled stimuli beat fragments | Per-knob confidence is materially higher from fragment rounds |
| F5 | Closed-pack nearest-neighbour output is right | Clients cannot identify their own pack against neighbours above chance |
| F6 | 4-up + outside option is the right format | A/B against best-worst shows best-worst converges in fewer rounds *without* worse completion |
| F7 | Preference is stable enough to be worth learning | Two-week test–retest knob agreement is at or near chance |

F7 is the one that would kill the part rather than adjust it. It should be tested first and
cheaply, because everything else is downstream of preferences being a real, stable thing.
