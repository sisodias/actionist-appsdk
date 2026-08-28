# Lane-owner finding — P06 comparison budget from first principles

Lane: S1-L3. Run: 2026-08-27-sprint-1-fable. Computed by the lane owner: 2026-08-27.
Evidence class: **inferred** (information-theoretic derivation over an assumed knob space).
This is a derivation, not a measurement. It exists so the lane has a defensible answer to
"is the minimum 7, 14 or another number?" that is not folklore, and so P06's subagent output
can be challenged against something rather than accepted on assertion.

## Why the question is usually answered badly

The P06 part page records the open question as "Is the mathematical minimum 7, 14 or another
number of choices?" Both candidate numbers appear to be inherited convention. A defensible
answer has to come from the size of the hypothesis space and the information a single choice
yields, under realistic response noise — not from a round number.

## The knob space

Prior research (`CLAUDE-LANES-SYNTHESIS.md`, routed via `knowledge/03-EVIDENCE-MAP.md`) names
seven mechanical knobs: contrast, radius, shadow, border, typography, density, chroma.

Treat each knob as an ordinal variable. The realistic resolution a client can actually express
is coarse — people reliably distinguish "sharp / slightly rounded / very rounded", not sixteen
radius values. Taking **4 discriminable levels per knob**:

    hypothesis space = 4^7 = 16,384 distinct profiles
    log2(16,384)     = 14 bits to identify one exactly

## The noiseless bound, and why it is a lie

A forced binary choice yields at most 1 bit. So the noiseless floor is **14 binary comparisons**
— which is presumably where the inherited "14" comes from. It is a floor, and it is unachievable
in practice for three compounding reasons:

1. **Human choice is stochastic.** Under a Bradley–Terry/Luce model, a comparison between two
   nearly-equal stimuli approaches a coin flip and yields ≈0 bits. Only well-separated pairs
   deliver near the full bit.
2. **A stimulus confounds knobs.** A whole-screen stimulus varies several knobs at once, so a
   single choice distributes evidence across knobs rather than resolving one.
3. **Preferences are not point values.** Clients hold indifference regions, so "exact
   identification" is the wrong target.

Empirically-motivated efficiency for pairwise preference elicitation is well below 1 bit per
comparison. At a defensible **0.4–0.6 bits per comparison**, identifying a point in a 14-bit
space needs **≈23–35 comparisons** — materially more than either inherited number.

## The reframe that makes the budget tractable

Exact identification is the wrong objective. Two changes collapse the budget:

**(a) Target a token pack, not a point.** The token-pack thesis
(`research/token-pack-science-2026-08-27.md`) is a *closed gallery* of pre-authored packs
(20–30 is named there as a product decision, not an evidence-backed number). Selecting among
30 packs is `log2(30) ≈ 4.9 bits`, not 14. At 0.4–0.6 bits/comparison that is **≈8–12
comparisons** — and this is the single strongest argument for the closed-pack architecture
over continuous token interpolation: it cuts the elicitation budget by roughly two-thirds.

**(b) Use 4-way instead of pairwise.** A 4-way forced choice yields up to `log2(4) = 2` bits.
Even at the same efficiency discount, a 4-way gallery is worth roughly 2× a pairwise trial per
screen shown. Against ~4.9 bits, that is **≈4–6 four-way screens** to select a pack.

## Recommended budget (hypothesis, with falsifier)

**6–10 four-way comparisons, with an explicit outside option, targeting a closed pack gallery.**

- Lower bound 6: the information floor for a 30-pack gallery via 4-way choices at realistic
  efficiency, plus one screen of slack.
- Upper bound 10: past this, marginal information per screen falls below client patience cost.
- The outside option ("none of these") is **not optional** — the prior research explicitly
  records that forced choice without a "none" pollutes the model. An outside option costs
  information per trial but prevents a confidently-wrong profile, which is the expensive
  failure.

**Falsifier.** Run the elicitation on N≥20 clients with a held-out validation screen. If
posterior pack ranking after 6 screens disagrees with the held-out choice more than ~30% of
the time, 6 is too few and the budget must rise. If agreement at 6 is statistically
indistinguishable from agreement at 12, the upper bound is wasteful and should be cut.

## Stopping rule (design, not implementation)

Stop when EITHER: (a) the posterior probability of the top pack exceeds a threshold (~0.7)
sustained across two consecutive screens; OR (b) the maximum expected information gain of the
best remaining candidate screen falls below a floor (~0.15 bits); OR (c) the hard screen cap
(10) is reached. Report `PreferenceConfidence` as the posterior mass on the selected pack —
and when the cap is hit without threshold, return the profile flagged **low-confidence** rather
than silently presenting it as settled.

## What this does NOT establish

- The 4-levels-per-knob resolution is an assumption, not a measurement.
- The 0.4–0.6 bits/comparison efficiency band is a modelling assumption imported from the
  general shape of pairwise-preference literature. It is **not** a figure I verified against a
  specific paper in this run, and it must not be quoted to the client as a measured constant.
- The seven knobs are assumed independent. They are almost certainly not — density and
  typography interact, contrast and chroma interact. Correlated knobs *reduce* effective
  dimensionality, which would make these budgets conservative.
- Whether whole-screen or fragment stimuli better decorrelate the knobs is unresolved here.

Any subagent output that contradicts this derivation should be preferred **if it carries
verified measurements**; this is reasoning from assumed parameters and should lose to data.
