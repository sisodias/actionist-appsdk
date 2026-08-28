#!/usr/bin/env python3
"""Build innovation-register.jsonl for P06.

Every row is a CANDIDATE, not a decision. evidence_class is `hypothesis` for
untested ideas, `inferred` where a cited source makes the idea likely to work,
`observed` only where the mechanism is already demonstrated somewhere.
"""
import json

D = "2026-08-27"
ROWS = []


def add(i, group, name, ev, source, claim, lim, disp):
    ROWS.append({"id": i, "kind": "innovation", "group": group, "name": name,
                 "evidence_class": ev, "source": source, "observed": D,
                 "claim": claim, "limitations": lim, "disposition": disp})


H, I, O = "hypothesis", "inferred", "observed"

# ----------------------------------------------------- A. stimulus design (I01-I18)
S = "stimulus-design"
add("I01", S, "Whole-screen stimuli with only targeted knobs varied", I,
    "D-optimal / Bayesian adaptive DCE design (idefix); live demo already does this",
    "Render complete realistic screens but vary only the knobs the round targets, holding others at "
    "the posterior mean.", "Assumes posterior mean is a sensible hold value early on.", "ADOPT")
add("I02", S, "Content held constant across a comparison", I, "basic experimental control",
    "Use the same headline/copy/imagery in all cards of a round so content preference cannot confound "
    "the token-pack signal.", "Some knobs (density) interact with content length.", "ADOPT")
add("I03", S, "P05 corpus components as re-themable controlled stimuli", O,
    "research/21st-corpus-audit-2026-08-27.md — 86.7% of colour-bearing CSS rules already resolve "
    "through var(--token); 87.3% carry a shadcn oklch :root block",
    "Use the 8,515-identity corpus as the stimulus pool: identical structure, varying token pack, "
    "re-theming is a find-and-replace on ~30 custom properties.",
    "271 components lack previews; component SOURCE is absent from the corpus.", "ADOPT")
add("I04", S, "Stimulus realism gradient: abstract swatches -> component -> full screen", H,
    "none", "Early rounds use cheap abstract stimuli, later rounds full screens.",
    "Risks measuring preference for the abstraction, not the design.", "test")
add("I05", S, "Never re-show an identical stimulus", I, "Zajonc 1968 mere exposure",
    "Prevents familiarity inflating preference for repeated designs.",
    "Constrains the generator's search near convergence.", "ADOPT")
add("I06", S, "Log stimulus-repetition rate as a measured confound", I, "Zajonc 1968",
    "Even if repeats occur, make the exposure effect measurable rather than invisible.", "—", "ADOPT")
add("I07", S, "Industry-conditioned stimulus priors", I,
    "b2b-template-shelf-report.md 17-industry variant deltas",
    "Seed the stimulus space from an industry prior (a law firm starts in a more conservative region "
    "than a course creator).", "Risks stereotyping; must remain a prior, not a constraint.", "ADOPT")
add("I08", S, "Brand-constraint hard cutoffs before elicitation", O,
    "Sawtooth ACBC must-have/unacceptable mechanism (vendor manual)",
    "Existing brand colours/fonts become hard prunes of the stimulus space, not soft preferences; all "
    "later stimuli satisfy them.", "Over-pruning can empty the space; needs a fallback.", "ADOPT")
add("I09", S, "Dark-mode variant shown as part of the stimulus", I,
    "token-pack-science §3.9 — dark is not inversion",
    "Show each candidate in both modes since packs must ship both.",
    "Doubles visual load per card.", "test")
add("I10", S, "Density stress-test stimuli using realistic long copy", I,
    "ui-pick-to-spec §6 failure mode 6",
    "Include a card rendered with realistically long client copy so density preference is measured "
    "under real conditions.", "—", "test")
add("I11", S, "Fragment rounds reserved for fine disambiguation only", H, "none",
    "Use component fragments only when two knobs remain confounded at whole-screen scale.",
    "Unproven that fragments resolve better.", "test — this is falsifier F4")
add("I12", S, "Adaptive grid size by viewport", O,
    "Sequential Gallery reduced 5x5 to 3x3 on a 13-inch display",
    "Gallery size should adapt to display, not be a fixed product constant.", "—", "ADOPT")
add("I13", S, "Stimuli drawn from the closed pack catalogue only", I,
    "token-pack-science gates A-J",
    "Never show a card that is not a real, gate-passing pack — so the preview IS the deliverable.",
    "Restricts early exploration to catalogue coverage.", "ADOPT")
add("I14", S, "Preview must be re-rendered from spec, never the original thumbnail", O,
    "ui-pick-to-spec §6 operational consequence",
    "Closes the expectation gap by construction and makes previews a free end-to-end pipeline test.",
    "Requires the render pipeline before elicitation ships.", "ADOPT")
add("I15", S, "Anti-prototypicality probe", I, "Tuch et al. 2012; Reber et al. 2004",
    "Deliberately include one low-prototypicality card per round to detect clients who want "
    "distinctive over safe.", "May be systematically rejected, wasting a slot.", "test")
add("I16", S, "Seed from client's existing website via extraction", O,
    "Canva AI extracts brand context from a public URL",
    "Warm-start the prior from the client's current site rather than a uniform prior.",
    "Their current site may be exactly what they want to escape.", "test")
add("I17", S, "Competitor-anchored stimuli", H, "none",
    "Show packs near and far from named competitors to elicit differentiation preference.",
    "Conflates taste with positioning.", "test")
add("I18", S, "Stimulus set diversity floor", I, "Negahban et al. spectral gap dependence",
    "Enforce a minimum pairwise distance among the 4 cards so the comparison graph stays "
    "well-connected.", "Competes with least-resolved-knob targeting, which wants NEAR pairs.",
    "ADOPT with tension noted")

# ----------------------------------------------------- B. question format (I19-I34)
F = "question-format"
add("I19", F, "4-up gallery with explicit outside option", I,
    "derived §3 + Sawtooth 4-5 per screen + live demo",
    "2.32 noiseless bits/round; ~0.91 effective at p=0.15; balances information against deliberation "
    "cost and avoids the hostility of 'worst'.", "Best-worst is strictly more informative per question.",
    "ADOPT — primary recommendation")
add("I20", F, "Best-worst of 4 (MaxDiff Case 1)", O, "Marley & Louviere 2005; Sawtooth manual",
    "3.58 noiseless bits/round, ~2x the 4-up rate; would cut rounds to ~3.",
    "Roughly doubles per-screen deliberation; 'pick the worst' is hostile in a client sales context; "
    "no verified numeric information-gain multiplier exists.", "test as an A/B arm — falsifier F6")
add("I21", F, "Attribute-level best-worst (MaxDiff Case 2)", I,
    "Marley, Flynn & Louviere 2008; support.BWS2",
    "'Which knob is most and least right on THIS design' — maps almost exactly onto per-knob credit "
    "assignment, solving the attribution problem a whole-card pick has.",
    "Requires the client to reason about knobs explicitly, which is exactly what we said they cannot do.",
    "test — high upside, high risk")
add("I22", F, "Binary pairwise", I, "derived §3",
    "Simplest, but ~11 rounds at p=0.15 and most sensitive to near-ties.",
    "Nearly double the rounds of 4-up.", "reject as primary")
add("I23", F, "Three-way pairwise with a neutral middle", O,
    "Midjourney legacy Style Tuner: 'leave the middle box selected to skip the pair'",
    "A shipped outside-option affordance inside a pairwise format.", "Fewer bits than 4-up.",
    "reference — the affordance, not the format")
add("I24", F, "Full ranking of 4", I, "Plackett 1975; Hajek, Oh & Xu 2014",
    "4.58 noiseless bits, the densest format tested.",
    "Ranking four whole screens is a heavy cognitive task; inherits IIA.", "reject")
add("I25", F, "9-up gallery", I, "derived §3; Sequential Gallery used 5x5 and 3x3",
    "3.17 noiseless bits.",
    "Nine whole-screen renders exceed comfortable simultaneous comparison; selection noise rises in a "
    "way the bit count does not capture.", "reject for whole screens")
add("I26", F, "Mixed format by phase: 4-up early, pairwise late", H, "none",
    "Broad exploration wants breadth; fine disambiguation is naturally pairwise.",
    "Format switching may confuse users and complicates the likelihood.", "test")
add("I27", F, "Slider direct manipulation as a fallback", O, "Figma First Draft radius/spacing sliders",
    "Offer sliders to clients who DO know what they want, skipping elicitation entirely.",
    "Most clients cannot name a radius; the slider is the competitor's approach.", "ADOPT as escape hatch")
add("I28", F, "Sequential line search (1D slider through knob space)", O,
    "Koyama et al. SIGGRAPH 2017 (MIT-licensed implementation exists)",
    "User picks a point on a 1D slice; reported 15-iteration budget, good by iteration 4-5 at 6D/7D.",
    "A slider over a design continuum is harder to render than 4 discrete packs, and our output space "
    "is discrete anyway.", "study")
add("I29", F, "Outside option as weak negative evidence on all shown cards", H,
    "derived; diverges from Midjourney which makes skipping non-informative",
    "Preserves information from declines while keeping the re-roll honest.",
    "Weight is a free parameter needing calibration.", "ADOPT — calibrate the weight")
add("I30", F, "Cap consecutive outside-option selections at 3", H, "derived",
    "Three declines in a row means the generator is in the wrong region; trigger a re-seed rather "
    "than another round.", "Threshold is arbitrary pending data.", "ADOPT")
add("I31", F, "'This is right' always-available terminal affordance", O,
    "Sequential Gallery satisfaction button; mean 5.36 rounds to satisfaction",
    "User's own judgement is the criterion the whole exercise proxies for.",
    "Users may satisfice early.", "ADOPT")
add("I32", F, "Preview-before-commit on the selected pack", O, "Webflow 'Preview in Designer'",
    "Let the client see the pack applied to their real content before committing.",
    "Requires the render pipeline.", "ADOPT")
add("I33", F, "Paired-comparison tie option distinct from 'none'", I, "prefmod handles undecided/ties",
    "'These two are equally good' is different information from 'both are wrong'.",
    "Adds a third response category to model.", "test")
add("I34", F, "Confidence-weighted responses (client marks how sure they are)", H, "none",
    "Let the client flag a low-confidence pick so it is down-weighted.",
    "Self-reported confidence is poorly calibrated; adds friction.", "reject")

# ----------------------------------------------------- C. policy / adaptivity (I35-I52)
P = "adaptive-policy"
add("I35", P, "BALD acquisition on a GP preference model", O, "Houlsby et al. 2011 (arXiv 1112.5745)",
    "Information gain expressed via predictive entropies, explicitly extended to GP preference "
    "learning; tractable.", "Myopic one-step criterion.", "ADOPT")
add("I36", P, "qEUBO acquisition", O, "Astudillo et al. AISTATS 2023; shipped in BoTorch",
    "One-step Bayes optimal under noise-free responses; simple regret converges at o(1/n); qEI can "
    "FAIL to converge for PBO.", "Asymptotic guarantee gives no finite-sample count.", "ADOPT")
add("I37", P, "Target the least-resolved knob each round", O, "live demo already does this",
    "Constructs cards differing on the widest-posterior axis while holding others steady.",
    "Greedy per-knob targeting can miss interaction effects.", "ADOPT")
add("I38", P, "Explicit exploration/exploitation schedule ('candy vs medicine')", O,
    "Stitch Fix Style Shuffle practice (press-reported)",
    "Deliberately mix near-certain-hit cards (engagement) with high-information cards (learning).",
    "Ratio unpublished; costs information per round.", "ADOPT — calibrate ratio")
add("I39", P, "Hierarchical Bayes shrinkage toward a population prior", O,
    "ChoiceModelR; standard conjoint practice",
    "Designed exactly for the few-observations-per-individual regime; the primary anti-overfitting "
    "mechanism alongside closed packs.", "Needs a population of prior clients to shrink toward.",
    "ADOPT — but cold-start it from I40")
add("I40", P, "Warm-start prior from a population aesthetic model", O,
    "LAION aesthetic predictor; Brochu et al. 2010 cut iterations 11.25 -> 6.5 with a learned prior",
    "Learn the client's DEVIATION from a population baseline rather than their taste from scratch. "
    "The largest single efficiency lever reported anywhere in the applied literature.",
    "Population aesthetic is not per-client taste and may encode a generic bias.", "ADOPT")
add("I41", P, "D-optimal / Bayesian-efficient stimulus set selection", O, "idefix (R, GPL-3)",
    "Choose the 4 cards to maximise design efficiency under the current posterior.",
    "GPL-3 licence; requires priors.", "ADOPT-METHOD, reimplement")
add("I42", P, "Simulate-to-size: Monte Carlo power analysis for round count", O, "skpr (R)",
    "Answer 'how many rounds' EMPIRICALLY by simulating synthetic clients under a BT likelihood "
    "rather than arguing from bounds.",
    "Power analysis is built for GLM responses; needs adapting.",
    "ADOPT — this is how the N question should actually be settled")
add("I43", P, "Orthogonal-array fixed design as the passive baseline", O, "DoE.base",
    "The non-adaptive control our adaptive policy must beat.", "—", "ADOPT as control arm")
add("I44", P, "Projective preferential BO for high-dim knob spaces", O, "AaltoPML/PPBO (MIT)",
    "Queries along projections, designed for human-in-the-loop high-dimensional elicitation.",
    "Small research repo (20 stars).", "study")
add("I45", P, "Transitivity-based pair elimination (PAPRIKA-style)", H,
    "1000minds method; COULD NOT VERIFY — 404 on both URLs",
    "Eliminate implied comparisons by transitivity, drastically cutting explicit questions.",
    "SOURCE UNVERIFIED. Also assumes transitivity, which human taste violates (Ailon 2010).",
    "VERIFY FIRST, then test")
add("I46", P, "Non-transitivity-tolerant active ranking", O, "Ailon 2010 (arXiv 1011.0108)",
    "Explicitly handles 'non-transitivity paradoxes which may arise naturally due to human mistakes "
    "or irrationality'.", "No closed-form bound extracted from the abstract.", "study")
add("I47", P, "Copeland counting as a simplicity check", O, "Shah & Wainwright 2015",
    "Rank by comparisons won: optimal up to CONSTANT factors, no conditions on the probability matrix. "
    "If this matches the GP model's output, the GP is not earning its complexity.",
    "Top-k recovery framing, not utility-vector recovery.", "ADOPT as a baseline check")
add("I48", P, "Dueling-bandit formulation", O, "Yue & Joachims; Zoghi RUCB; Sui et al. survey",
    "Relative-feedback online optimisation.",
    "Regret-minimisation over continuous operation, not fixed-budget identification — a different "
    "objective from ours.", "reject as primary framing")
add("I49", P, "Per-knob independent BT models vs joint GP", H, "derived",
    "Independent per-knob models are simpler and interpretable; a joint GP captures correlation.",
    "Independence is empirically false (§4 of first-principles).", "test — joint expected to win")
add("I50", P, "Bootstrap confidence intervals over pairwise judgments", O, "lmarena/arena-hard-auto",
    "Battle-tested approach to reporting uncertainty on BT fits from human votes.", "—", "ADOPT")
add("I51", P, "TrueSkill-style Gaussian belief per pack", O,
    "Herbrich et al. 2007; use openskill.py (MIT), NOT sublee/trueskill",
    "Calibrated per-item uncertainty that Elo does not give.",
    "LICENCE TRAP: sublee/trueskill's LICENSE body bars commercial use despite a BSD badge.",
    "study — openskill.py only")
add("I52", P, "Stop when expected information gain of the best next question < threshold", H, "derived",
    "A wide posterior no available question can narrow is a reason to stop, not to continue.",
    "Threshold (~0.25 bits) needs calibration.", "ADOPT")

# ----------------------------------------------------- D. stopping & confidence (I53-I66)
T = "stopping-and-confidence"
add("I53", T, "Three-condition stop: confidence OR ceiling OR user-satisfied", I,
    "derived §6; Brochu 2010 20-iteration abandonment; Midjourney 'past round 15... small and subtle'",
    "Primary rule is confidence; 15 rounds is a ceiling; user satisfaction always terminates.",
    "Ceiling is grounded in two sources, not a derivation.", "ADOPT")
add("I54", T, "Hard floor of 5 rounds", I, "derived; Sequential Gallery mean 5.36",
    "Early apparent convergence is usually the prior, not the data.", "—", "ADOPT")
add("I55", T, "Per-knob confidence reporting, never a single scalar", H, "derived",
    "Some knobs resolve in two rounds; others may never resolve, and 'this client does not care about "
    "shadow' is a finding not a failure. A single '87% confident' number would mislead.",
    "More complex to present to a non-technical client.", "ADOPT")
add("I56", T, "'No preference' as a first-class per-knob outcome", H, "derived",
    "Explicitly represent indifference rather than forcing a point estimate.",
    "Downstream pack selection must handle a free knob.", "ADOPT")
add("I57", T, "Two-week test-retest stability as the primary validation metric", I,
    "Slovic 1995 construction of preference",
    "A model that fits the clicks but changes answer next Tuesday is worthless. Measures whether the "
    "thing we claim to measure exists.",
    "Requires client time two weeks apart; hard to get.", "ADOPT — this is falsifier F7")
add("I58", T, "Held-out pick prediction as the fit metric", H, "derived",
    "Reserve 2 rounds, predict them from the model fitted on the rest.",
    "Small n makes the estimate noisy.", "ADOPT")
add("I59", T, "Neighbour-discrimination test", H, "derived",
    "Show the client their pack plus the 2nd and 3rd nearest, unlabelled. If they cannot pick their "
    "own above chance, the catalogue is denser than perception.", "—", "ADOPT — falsifier F5")
add("I60", T, "Perturbation-tolerance test", H, "derived",
    "Show the converged pack and a +/-1-level perturbation. If clients reliably distinguish and "
    "reject, the tolerance argument in §2 collapses and round counts triple.",
    "—", "ADOPT — falsifier F1, run FIRST")
add("I61", T, "Separation-aware stopping", O, "Chen & Suh 2015 — complexity scales inversely with separation",
    "Detect when remaining candidates are genuinely near-tied and stop rather than burning rounds "
    "distinguishing the indistinguishable.", "—", "ADOPT")
add("I62", T, "Comparison-graph connectivity check", O, "Hunter 2004 MM convergence condition",
    "BT/MM fitting requires a strongly connected comparison graph; verify before fitting.",
    "Constrains which stimulus sets are legal.", "ADOPT as a gate")
add("I63", T, "Abandonment-rate monitoring as a UX stop signal", O,
    "Brochu et al. 2010: 20 iterations is 'roughly the point at which users start to quit'",
    "Instrument drop-off per round; if it rises before the ceiling, lower the ceiling.", "—", "ADOPT")
add("I64", T, "Time-per-round budget", O, "Sequential Gallery: 14.8s per plane-search subtask",
    "Budget total elicitation time, not just round count. 10 rounds x ~15s is ~2.5 minutes.",
    "Whole-screen comparison likely slower than the cited subtask.", "ADOPT")
add("I65", T, "Confidence decay over calendar time", I, "Netflix supersession rule; Hinge 24h window",
    "Treat the profile as decaying, prompting re-elicitation rather than assuming permanence.",
    "Decay rate unknown; needs I57 data first.", "test")
add("I66", T, "Re-elicitation triggered by client rejection of built output", H, "derived",
    "If a client rejects the delivered design, that is strong evidence to re-run rather than patch.",
    "Expensive and reads as failure.", "test")

# ----------------------------------------------------- E. output & compilation (I67-I84)
C = "output-compilation"
add("I67", C, "Continuous preference vector internally, closed pack at the boundary", I,
    "derived §8; token-pack-science gates A-J; lane synthesis 'learn a vector not a pack ID'",
    "Catalogue can grow without re-eliciting; shipped artefact is always gate-passing.",
    "Nearest-neighbour metric weighting is an open parameter.", "ADOPT — primary recommendation")
add("I68", C, "Reject continuous token interpolation", O,
    "token-pack-science §5 Gate C — WCAG luminance is non-linear in channel values",
    "The midpoint of two AA-passing palettes can fail AA; an interpolated pack has passed none of "
    "gates A-J.", "Loses expressive range between packs.", "ADOPT the rejection")
add("I69", C, "Closed-pack snapping AS the anti-overfitting regularizer", H, "derived §8",
    "Output space of ~20-30 packs rather than 36,000 means the model cannot overfit into a bespoke "
    "corner on ten noisy clicks.", "If the catalogue grows large this protection weakens.", "ADOPT")
add("I70", C, "Explain the pack choice in knob terms", H, "derived",
    "'We chose this because you are here in knob space' is worth real money in the client "
    "conversation.", "Requires knob names clients understand.", "ADOPT")
add("I71", C, "Weighted knob-space distance metric", H, "derived",
    "Typography and chroma likely dominate perception; equal weighting is probably wrong.",
    "Weights must be fitted, adding parameters.", "test")
add("I72", C, "Second- and third-choice packs offered alongside the first", I,
    "derived; supports I59",
    "Offering the top 3 both hedges model error and generates validation data for free.",
    "Reintroduces choice at the moment we claimed to have decided.", "ADOPT")
add("I73", C, "TasteProfile schema: per-knob posterior mean + interval + n_observations", H, "derived",
    "Makes uncertainty first-class and auditable in the output contract.", "—", "ADOPT")
add("I74", C, "PreferenceConfidence as a per-knob vector, not a scalar", H, "derived",
    "Mirrors I55 in the output contract.", "—", "ADOPT")
add("I75", C, "DesignDNA as a versioned, reproducible artefact", I,
    "token-pack-science pack.version discipline",
    "Pin the model version, catalogue version, and elicitation transcript so a profile is "
    "reproducible.", "—", "ADOPT")
add("I76", C, "Preference vector pre-filters P05 component suggestions", O,
    "live demo states this intent",
    "The same vector that picks a pack can rank components, so elicitation pays for itself twice.",
    "Component preference may not be the same construct as pack preference.", "test")
add("I77", C, "Preference vector seeds image-generation rounds", O, "live demo states this intent",
    "Reuse for generated imagery.", "Unverified that the vector transfers to a different modality.",
    "test")
add("I78", C, "Per-context confidence (marketing page vs dense dashboard)", H,
    "derived; parts.json open question",
    "A client's density preference on a landing page may differ from a dashboard. Model context as a "
    "conditioning variable rather than assuming one profile fits all surfaces.",
    "Multiplies the parameter count by the number of contexts, directly worsening the sample-size "
    "problem.", "test — this is the open question with the worst cost/benefit")
add("I79", C, "Single profile with per-context OFFSETS rather than separate profiles", H, "derived",
    "A cheaper resolution of I78: one taste vector plus small learned context deltas.",
    "Offsets still need data to fit.", "test — preferred form of I78")
add("I80", C, "Stated vs revealed preference agreement metric", O,
    "Pinterest deprecated onboarding interests in favour of engagement clusters",
    "Measure whether what the client PICKS matches what they later APPROVE in delivered work. The "
    "single most commercially important validation.",
    "Requires delivered projects, so it is a slow metric.", "ADOPT — long-horizon")
add("I81", C, "Fall back to a safe default pack on low confidence", I,
    "Shopify SDUI unknown-layout fallback; Netflix popular-set fallback",
    "If confidence is too low, ship an industry-appropriate default rather than a badly-inferred pack.",
    "—", "ADOPT")
add("I82", C, "Log spec/pack collisions as a coverage signal", O,
    "ui-pick-to-spec §6 failure mode 4",
    "If two different clients converge to identical packs, that tells you which knob to add.",
    "—", "ADOPT")
add("I83", C, "Human review gate before pack is committed to a build", H, "derived",
    "A designer confirms the selected pack before it drives a client deliverable.",
    "Costs human time per client; undermines the automation claim.", "ADOPT for v1, revisit")
add("I84", C, "Profile portability across a client's multiple projects", H, "derived",
    "Reuse the DesignDNA for the same client's later work.",
    "Preference may be project-specific, not client-specific.", "test")

# ----------------------------------------------------- F. drift, industry, risk (I85-I100)
R = "drift-industry-risk"
add("I85", R, "Explicit re-elicitation rather than silent drift tracking", I,
    "Netflix supersession; Pinterest UIC replacement",
    "Both major platforms found stated onboarding preference decays against behaviour. Prefer a "
    "cheap explicit re-run over an invisible decay model.", "Costs client time.", "ADOPT")
add("I86", R, "Revealed-preference signal from delivered-work approvals", I,
    "Hinge infers rankings from like/pass; Stitch Fix updates in real time",
    "Client approvals/rejections of delivered designs are the highest-quality preference signal "
    "available and cost nothing to collect.",
    "Slow, sparse, and confounded with non-aesthetic factors (deadline, budget).", "ADOPT — long-horizon")
add("I87", R, "Regulated industries constrain the stimulus space a priori", I,
    "b2b-template-shelf-report.md: healthcare PHI, law firm privilege, insurance document authority",
    "Healthcare, legal, insurance, mortgage clients should not be shown high-chroma, "
    "high-motion, low-contrast packs at all — prune before eliciting.",
    "Risks the pruning being wrong and the client wanting distinctiveness.", "ADOPT")
add("I88", R, "Accessibility floor is not a preference axis", O,
    "token-pack-science Gates C and D",
    "Contrast below AA is never offered regardless of stated preference. The client cannot choose to "
    "fail WCAG.", "Removes a genuine aesthetic direction (low-contrast minimalism).", "ADOPT")
add("I89", R, "End-user vs operator preference divergence", I,
    "b2b-template-shelf-report.md: property_management tenant portal is 'a distinct untrusted "
    "identity'; it_services_msps 'per-client tenancy is the product'",
    "For the 6/17 industries where `portal` is secondary, the person choosing (the operator) is not "
    "the person using (the end customer). Elicit from the operator but weight toward end-user norms.",
    "No mechanism yet for representing the absent end user.", "ADOPT — open design problem")
add("I90", R, "Density preference conditioned on archetype", I,
    "b2b-template-shelf: case_workflow primary for 6/17, portal secondary for 6/17",
    "Two archetypes carry the majority of catalogue demand; density expectations differ sharply "
    "between a dense case-workflow console and a sparse client portal.",
    "Adds a conditioning variable.", "ADOPT — cheapest useful form of I78")
add("I91", R, "Conservative-industry prior on chroma and motion", I,
    "accounting_firms, law_firms, insurance_agencies, mortgage_brokers variant deltas",
    "Seed these industries from a low-chroma, low-motion region of knob space.",
    "Stereotyping risk; must be a prior the client can override in 2-3 rounds.", "ADOPT")
add("I92", R, "Expressive-industry prior", I,
    "course_creators, marketing_social_media_agencies, real_estate variant deltas",
    "Seed from a higher-chroma, higher-expressiveness region.", "Same stereotyping risk.", "ADOPT")
add("I93", R, "Industry prior must be overridable within 3 rounds", H, "derived",
    "Guarantee the prior is a starting point, not a cage: a client must be able to move out of their "
    "industry's region quickly.", "Requires measuring prior strength.", "ADOPT")
add("I94", R, "Bespoke motion and illustration explicitly out of scope", O,
    "ui-pick-to-spec §6 failure modes 1 and 2",
    "The spec bottleneck loses hand-tuned parallax and custom artwork. Do not let a knob imply a "
    "capability that does not exist.", "Removes a real source of client delight.", "ADOPT")
add("I95", R, "The preference learner must itself be A/B tested against a static default", O,
    "Spotify Engineering: a bandit is 'a feature you've built, not an experimental method'",
    "Without a holdout comparing elicited packs to an industry-default pack, we cannot claim the "
    "elicitation works at all.",
    "Needs enough clients for a powered comparison — likely the binding constraint.",
    "ADOPT — the single most important methodological gate")
add("I96", R, "Measure the knob-correlation matrix before assuming low effective dimension", H,
    "derived §4; Jamieson & Nowak's d log n is contingent on the embedding assumption holding",
    "The whole few-rounds argument rests on effective d < 7. Measure it, do not assume it.",
    "—", "ADOPT — falsifier F3")
add("I97", R, "Do not cite Miller 7+/-2 to justify gallery size", O,
    "Miller 1956 is about absolute judgment and memory span, not interface option counts",
    "Citing it would not survive a technical client's scrutiny.", "—", "ADOPT as a writing rule")
add("I98", R, "Do not cite the jam study as a design principle", O,
    "Scheibehenne et al. 2010: D = 0.02, CI95 [-0.09, 0.12], 63 conditions, N = 5,036",
    "Choice overload does not robustly replicate; size galleries on information grounds.",
    "—", "ADOPT as a writing rule")
add("I99", R, "Do not promise a specific accuracy number before measuring", O,
    "ui-pick-to-spec §4.2 no-figure-found; the 728-vs-113 connector error class",
    "No published benchmark measures our task; any quoted figure would be extrapolation.",
    "—", "ADOPT as a writing rule")
add("I100", R, "Treat the live demo's convergence claims as unmeasured", O,
    "actionist-taste.pages.dev asserts '~10 picks instead of ~50' with no measurement",
    "Our own prototype's marketing claims must not be recycled as evidence into a client deliverable.",
    "—", "ADOPT as a writing rule")

with open("innovation-register.jsonl", "w") as f:
    for r in ROWS:
        f.write(json.dumps(r, ensure_ascii=False) + "\n")

TOP = [
    ("I67", 1, "Resolves the central architectural question (d): continuous vector internally, closed "
     "gate-passing pack at the boundary. Everything downstream — catalogue growth, accessibility "
     "guarantees, overfitting control — depends on this split being right."),
    ("I95", 2, "Without a holdout against a static industry-default pack we cannot claim the learner "
     "works at all. Spotify's framing is decisive: a personalisation system is a feature, not an "
     "experimental method. This is the gate that turns the lane from plausible into measured."),
    ("I40", 3, "A warm-start population prior is the largest single efficiency lever reported anywhere "
     "in the applied literature: Brochu et al. 2010 cut iterations from 11.25 to 6.5. It is also cheap, "
     "since the LAION aesthetic predictor already exists."),
    ("I60", 4, "The perturbation-tolerance test is falsifier F1 and should run FIRST, because the "
     "entire round-count argument rests on +/-1-level tolerance being acceptable. If it is not, the "
     "requirement roughly triples and the product changes shape."),
    ("I08", 5, "Sawtooth's must-have/unacceptable cutoff mechanism is the missing piece for brand "
     "constraints, and it is proven commercial practice. A hard prune is categorically better than "
     "learning a client's non-negotiables as a soft preference."),
    ("I42", 6, "Simulate-to-size settles the 'how many choices' question empirically rather than by "
     "argument. Given that no paper gives a sufficiency guarantee for our setting, a Monte Carlo power "
     "analysis over synthetic clients is the only route to a defensible number."),
    ("I57", 7, "Two-week test-retest is falsifier F7 — the one that would kill the part rather than "
     "adjust it. If preference is not stable, no amount of elicitation precision matters. Test early "
     "and cheaply."),
    ("I03", 8, "The P05 corpus turns stimulus generation from a cost into an asset: 8,515 identities, "
     "86.7% of colour rules already indirected through tokens, re-theming as a ~30-property "
     "find-and-replace. Identical structure with varying treatment is the ideal experimental article."),
    ("I19", 9, "The primary format recommendation — 4-up with an explicit outside option — supported "
     "independently by the information derivation, Sawtooth's 4-5-per-screen guidance, and our own "
     "working prototype."),
    ("I89", 10, "The operator-vs-end-user divergence is a genuine unsolved design problem that affects "
     "6 of 17 industries, and nobody in the commercial denominator has solved it. Naming it now "
     "prevents shipping a system that optimises for the wrong person."),
]
byid = {r["id"]: r for r in ROWS}
with open("innovation-register.jsonl", "a") as f:
    for iid, rank, rationale in TOP:
        r = dict(byid[iid])
        r["id"] = iid + "-TOP10"
        r["refers_to"] = iid
        r["rank"] = rank
        r["rationale"] = rationale
        f.write(json.dumps(r, ensure_ascii=False) + "\n")

print("innovations:", len(ROWS), "+ top10:", len(TOP))
from collections import Counter
print(Counter(r["evidence_class"] for r in ROWS))
print(Counter(r["group"] for r in ROWS))
