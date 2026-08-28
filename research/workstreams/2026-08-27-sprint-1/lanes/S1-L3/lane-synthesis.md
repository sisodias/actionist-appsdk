# S1-L3 lane synthesis — experience science (P05, P06, P08)

Run: `2026-08-27-sprint-1-fable` · Agent: ACTIONIST-S1-L3-EXPERIENCE
Written: 2026-08-27. Research-only, UNEXECUTED, NOT_ADMITTED, **unpromoted**.
Smoke: **PASS** (24/24 files, 773 JSONL records, 0 defects) — harness verified in both
directions, including a negative test with injected defects (malformed JSON, invalid evidence
class, falsified count) that it correctly caught and failed on.

## 1. The lane's headline

Three parts were sent to resolve measured design choices. They converged on one architecture
that none of them was individually asked to produce:

> **The experience layer is a selection system over closed, pre-gated sets — not a generation
> system.** P05 selects components from a canonical entity index. P06 selects a token pack from
> a gated gallery. P08 selects an archetype shell that hosts donor panes. In all three, the
> model picks from a vetted set; it never invents a value.

This matters because it makes the "the model never chooses a colour, a layout or a component"
claim *mechanically enforceable* rather than a prompt instruction — the same discipline the
local pick-to-spec and token-pack research already argued for on separate grounds.

## 2. What each part resolved

### P05 — living component layer (8/8 files, 373 records; denominators MET)

- **D-01 canonical entities + alias sets**, with the 75 tags demoted to a retrieval index.
  Reached by two independent paths: external evidence of alias collisions in Component Gallery
  (Banner is an alias of both Alert and Hero; Stepper and Label are each both canonical and
  alias) and local measurement showing the 75-tag vocabulary averages 2.09 tags/component with
  52.6% single-tagged — i.e. already behaving as a single-label scheme. Convergence from two
  directions is materially stronger than either alone.
- **D-02 measure dedupe before designing it** — run perceptual hash *and* CLIP over the 7,678
  previews to establish the real visual duplicate rate. The 2,058 name-collision surplus is a
  proxy, not the answer.
- **D-03 own the archetype shell and ~20 app primitives; harvest decorative surfaces.**
- **D-04 refresh mechanism designed but gated** — build a source-agnostic index; execute refresh
  only against licensed registry entries. The terms-of-service finding is respected, not
  wished away.
- **D-09 the corpus is NOT "living" today.** It is a dated snapshot. The part is named "living
  component layer" and the honest verdict is that the adjective is currently false.

### P06 — preference science (8/8 files, 356 records; ALL depth-contract denominators MET)

- **The question "is it 7 or 14?" is not well-posed** — a minimum only exists once you fix knob
  count/levels, what "done" means, the per-answer error rate and the question format. Leave any
  free and the number is "a preference about UX length wearing the costume of a mathematical
  result." Naming that is the first result.
- **The tolerance target is the load-bearing move.** Full identification over a 36,000-pack space
  is 15.14 bits; resolving each knob to **±1 level** leaves 11.09 bits deliberately unresolved,
  so only **4.04 bits** must actually be acquired. That, not magic informativeness, is why a
  taste picker converges in single-digit clicks.
- **8–12 rounds of a 4-up gallery with an explicit outside option** (floor 5, ceiling 15),
  derived through a binary-symmetric-channel noise model and cross-checked against five
  independent sources — Sequential Gallery's measured **5.36 ± 2.69** iterations, Sequential Line
  Search at 7D, Brochu et al. (8.56 ± 5.23 clicks), the SCA-2010 gallery study, and Midjourney
  Style Creator's shipped "stabilize after 5–10 rounds." All land in a 5–15 band.
- **4-way best-worst** also supported by verified combinatorics: 4 items recover 5 of 6 implied
  pairwise relations; 5 items recover 7 of 10.
- **Select packs, never interpolate** — contrast compliance is non-convex, so interpolating two
  passing palettes does not preserve passage. This is the anti-overfitting mechanism.
- **Model responses as sequential best-then-worst, not true MaxDiff**, because the method's own
  authors report practitioners virtually never use the MaxDiff strategy.

### P08 — archetypes and shells (8/8 files; local findings strong, denominators partly met — see §5)

- **Assumption A15 REJECTED, and the reason is stronger than a documentation mismatch.** My
  first pass found three inconsistent ISSO snapshots (a 7-icon two-level rail, self-marked
  superseded; a current 5 products + 4 persistent pages + in-pane pill row; 22 route groups on
  disk). The reassigned agent then found the five is **enforced by the type system**, and I
  opened both files to confirm:
  - `src/shared/layout/sidebar-factory.tsx:21-22` — `/** Must be exactly 5 sections */` above a
    literal five-element tuple type.
  - `src/shared/layout/page-registry.tsx:6` — `SECTION_PRODUCTS` frozen `as const`, with hotkeys
    ⌘1–⌘5 bound under `// Fixed section template — IDs, hotkeys, and fallback icons never change.`
- **And the slot ids no longer mean the same thing across personas.** The same id carries
  unrelated labels on different rails: `recon` is **"Team"** on the agency rail and **"Tasks"**
  on the model rail; `content-gen` is **"Tools"** and **"Insights"**. A fixed-N shell forced a
  second persona into slots named for the first, and the *names* gave way rather than the shell
  gaining a slot. **This is the sharpest evidence in the lane**: the five-area constraint does
  not fail loudly, it fails by quietly voiding its own vocabulary — which is exactly why it
  survived unexamined as a "convention."

  Precision matters here, because I initially overstated it. The evidence is **cross-rail, not
  within-rail**: the content-gen rail is fully self-consistent (`Recon`→`recon`, `Hub`→`hub`,
  and so on), so "no id predicts its label" is false. I claimed otherwise off a regex that
  crossed a nesting boundary, the P08 agent challenged it with line numbers, and re-reading
  source showed the agent right and me wrong (`P08-SR-055`). The finding stands on the narrower,
  accurate claim.
- **ISSO already implements the answer.** It converged in production on a host frame wrapping a
  content pane that owns its sub-navigation — the exact host-shell/donor-chrome split this part
  was sent to design.
- **Portal is a capability, not an archetype** — primary for 0/17 industries, secondary for 6/17.
- **Five spines, not two.** case_workflow OR portal covers 11/17 = **65%**, not 80%; reaching
  14/17 needs case_workflow + field_operations + learning_content + scheduling + crm.

## 2b. Inherited facts that P05 overturned

P05 re-derived the local counts from source rather than inheriting them, and five inherited
claims did not survive. These supersede figures quoted elsewhere in this lane, including in my
own dispatch prompts:

| Inherited claim | P05's measurement | Consequence |
|---|---|---|
| Two-store join = 2,942 ∩ / 8,515 ∪ | **2,945 ∩ / 8,483 ∪** (normalised) | Join J-1's key is wrong: raw canonical-URL equality fails because the stores encode identity differently (`/@author/components/slug` vs `/r/Author/slug`). The join must normalise. |
| Legacy store = 3,508 components | **3,507** | 3,508 *directories*, but `_utils` is a shared utility dir, not a component. I independently re-checked and P05 is right (see checkpoint 3 correction). |
| Dependency surface = 18 packages | **237 distinct packages** | Closes prior-audit UNMEASURED item 5. The 18 figure came from `demo.tsx` import wrappers; 237 is measured from the source-bearing store. A 13× correction. |
| `stats.untagged=3998` is the stale field | **`stats.tagged=3951` is ALSO stale** | Both stat fields are unreliable; only the live join is trustworthy. |
| 75-tag vocabulary is one coherent index | `tagToComponents` holds only page-tier tags while `tagCounts` includes inference; they **disagree by up to 3×** (sidebar 47 vs 143) | Any retrieval built on the tag index must declare which tier it reads. |

**The J-4 industry finding is the most consequential.** The inherited framing was that the
industry axis needs a 36→17 crosswalk. P05 found the axis is not merely mis-bucketed but
**near-uniform and materially absent**: mean 3.93 industries per component, 171 components claim
all ten, **89.6% claim `saas`**, and **5 of the 17 target industries have zero reachable supply**.
An axis where nine in ten rows carry the same value does not discriminate. This is why P05's
D-06 drops industry from the component layer entirely — and it converges with P08, which places
industry variance at the archetype/composition layer.

## 3. Cross-part joins

**P05 → P06.** The component corpus is the stimulus pool. 87.3% of bundles carry a swappable
`:root` token block (confirmed first-party against shadcn's documented token set), so the same
component can be rendered under different packs — which is what lets P06 vary style while
holding layout fixed. Without P05's re-themability, P06's stimulus design is not buildable.

**P06 → P05/P07.** The TasteProfile selects a pack; the pack re-themes the component previews.
P06's "never show the original thumbnail" constraint binds P05's gallery: previews must be
re-rendered from our own spec, or the client is choosing something the system cannot build.

**P08 → P05.** P08 says own the shell; P05's D-03 independently concluded own the archetype
shell and ~20 primitives, harvest the decorative surfaces. **Two parts reached the same
own-vs-harvest line from different evidence.**

**P08 → P06.** P08's finding that portal industries carry two audiences (internal operator,
untrusted external) breaks P06's single-TasteProfile assumption. This is a **live contradiction
between owned parts**, recorded in both packets rather than smoothed over.

**P05 D-06 → P08.** P05 dropped industry as a component-layer facet and pushed industry variance
up to the archetype/composition layer — which is exactly where P08 places it. The layering is
consistent across the lane.

## 3b. A live disagreement inside the lane, deliberately left open

The lane owner's original P06 decision (D01) chose **4-way best-worst**. P06's own packet
recommends **4-up with an explicit outside option**, and rather than silently overwriting the
owner's call it stated the disagreement and pre-registered the alternative as an A/B arm. Both
positions are recorded; neither is suppressed.

**The case for best-worst** (owner): naming best and worst among four recovers 5 of 6 implied
pairwise relations; it carries 3.58 noiseless bits against 2.32 for 4-up-plus-none, which would
cut ~5 rounds to ~3 at a 15% error rate. Sawtooth's manual independently converges on 4–5 items
per screen, and BWS Case 2 is documented as usable by populations that struggle with
conventional discrete choice experiments.

**The case for 4-up-plus-none** (P06, recommended as primary):

1. Cognitive cost is not linear in information — asking for best *and* worst roughly doubles
   deliberation per screen, and Sequential Gallery measured 14.8 s for a *single* pick. Three
   best-worst screens may cost more wall-clock and fatigue than five single-pick screens.
2. **"Pick the worst" is hostile during client onboarding.** This is a paying client forming an
   impression, not a survey panel. Flagged explicitly as a product judgement, not a statistical
   one — which is the right way to flag it.
3. True MaxDiff's assumption is empirically doubtful, so best-worst must be modelled as
   sequential best-then-worst regardless.
4. Two rounds saved against a 15-round cap does not pay for the above.
5. The existing prototype already implements 4-up-plus-none, so it is the cheaper path to a
   *measured* answer.

**Resolution: ship 4-up-plus-none, pre-register best-worst as arm B (falsifier F6).** Switch if
best-worst converges in materially fewer rounds without worse completion or satisfaction. The
disagreement is cheap to settle empirically and expensive to settle by argument — so it is being
settled empirically rather than by whoever wrote last.

This should reach Cena **as a disagreement**, not as a decision.

## 4. Contradictions the lane did not resolve

1. **Single TasteProfile vs portal dual-audience** (P06 × P08). Unresolved; 6/17 industries.
2. **Host-owned settings vs intact donor services** (P08). An intact service may be unable to
   surrender settings ownership, making invariant I2 unachievable for that class.
3. **S3 host rail vs field_operations** (P08). Mobile-first offline evidence capture resists a
   desktop rail; the default may need an archetype-native exception.
4. **"Living" layer vs dated snapshot** (P05 D-09). The refresh mechanism is designed but gated
   behind an unresolved rights question, so the layer cannot currently be living.

## 5. Honest accounting of the depth contract

| Part | Files | Records | Commercial denom. | OSS/lit. denom. | Innovations | Verdict |
|---|---|---|---|---|---|---|
| P05 | 8/8 | 373 | 105 (55 observed / 50 unreached) | 122 (110 gh-api confirmed) | 108 | **MET** |
| P06 | 8/8 | 368 | 113 rows (13 vendor-read — see caveat) | 119 (118 observed; 60 repos + 59 papers) | 110 (10 ranked) | **MET on count** |
| P08 | 8/8 | 104 | 10 rows (8 observed, all ranked) | 10 rows (10 observed, all ranked) | 30 | **PARTIAL — see discrepancy** |

Lane total: **845 validated records**, 0 defects.

**P08 denominator discrepancy — unresolved and recorded as such.** After the idle P06 agent was
reassigned to P08, it delivered a rewritten 32KB report, a source register that grew 12→54 rows
(51 observed), and high-quality top-10 dossiers for both denominators. But its report §1 asserts
denominators of **111 commercial / 104 OSS / 137 innovations**, while the deliverable files hold
**10 / 10 / 30**. The prose figures are not reconcilable against disk.

I queried the agent and, pending its answer, recorded the prose numbers as the **surveyed space,
not a per-row denominator**, with the discrepancy as P08's first blocker. This is precisely the
failure mode that same agent correctly flagged on P06's commercial leg (13 vendor-read of 113) —
a count asserted in prose is not a denominator, and the lane holds itself to that in both
directions.

**A caveat on P06's commercial denominator, in P06's own stricter words.** The file marks 21 of
113 rows `observed` (35 inferred, 57 hypothesis), but P06's report applies a harder test and
says only **13 carry facts it read on a vendor page or vendor doc**. I am carrying the stricter
number, because it is the one that would survive a challenge. Either way it is the lane's
weakest denominator and must never be quoted as "113 surfaces."

P06 also diagnosed *why*, and the reason will recur: **consumer style quizzes are client-side
JavaScript behind bot protection.** Stitch Fix, Warby Parker, Looka, Behr and Hinge returned
403; Function of Beauty returned a JS shell; 1000minds and Conjointly 404'd on documented paths.
Question counts and adaptivity for that entire category are **not obtainable by fetch** — closing
it needs a real browser session stepping through the flows. What survived the filter was, as it
happens, the most useful part: the two *vendor-documented* surfaces (Sawtooth's MaxDiff manual,
Midjourney's Style Creator docs) are also the two most informative for the design.

Contrast with P05's OSS denominator — 110 of 122 confirmed via `gh api` with LICENSE bodies
decoded — to see how much evidence strength varies across a single lane's registers.

**Supersession note.** The lane owner authored placeholder packets for P06 and P08 at ~16:35,
when both subagents had produced nothing on disk after ~40 minutes and appeared quota-blocked.
Both subsequently recovered. P06's subagent delivered a 119-record OSS/literature denominator
and rewrote its report and first-principles with a materially stronger derivation than the
owner's — it replaced an unjustified "0.4–0.6 bits/comparison" assumption with a binary-symmetric-
channel derivation, a ±1-level tolerance target (4.04 bits to acquire, not 15.14), and a
cross-check against five real sources including Sequential Gallery's measured 5.36 iterations.
**Subagent output is authoritative wherever it exists**; the owner's placeholders survive only
where nothing replaced them. The owner corrected P06's `lane-state.json` afterwards, because it
still under-reported the delivered file at 5 records against an actual 119 — a mismatch the
smoke harness caught rather than a human noticing.

P08's external denominators remain genuinely absent; its value is local-receipt findings.

**The shortfalls are declared as machine-visible records** (`P06-TC-000`, `P06-TR-000`,
`P08-TC-000`, `P08-TR-000` all carry `evidence_class: unknown`, `disposition:
depth_contract_shortfall_declared`) rather than padded. A denominator of one is not a
denominator, and the records say so explicitly so no downstream reader mistakes them for one.

This follows the program's own rule — "denominators are targets, not permission to pad" — and
the precedent set by the blocked P05 slice, which refused to reconstruct vendor component lists
from memory on the grounds that a fabricated list would silently corrupt the exact measurement
being made. That was the right call and it is the lane's standard.

## 6. Model-policy: reported incident RETRACTED

An earlier version of this synthesis recorded a grandchild agent running on **Fable 5** under an
Opus-only policy. **That finding is withdrawn.** My only evidence was the error string
*"You've reached your Fable 5 limit"* in a task notification. P05 — the agent that actually
spawned it — reports setting `model: "opus"` explicitly on all three of its children and never
assigning Fable; the message is a **harness usage limit scoped to that child's session**, not a
model assignment. P05's account is better supported (it has direct knowledge of its own dispatch
parameters, and all seven of its self-reported file hashes verify against disk), and I accept it.

No model-policy violation is established. The residual risk P05 names is worth keeping: agents
that **inherit** rather than explicitly set a model can drift off-policy unnoticed. Mitigation is
to set `model` explicitly at every dispatch — which is what P05 did.

Coverage cost, not correctness cost, stands unchanged: the quota-blocked slice verified 8 of ~50
surfaces and recorded the other 42 as `unknown` with the cutoff named — **unreached, not absent**.

## 6b. Late P08 findings (original agent returned; verified where checkable)

The original P08 agent surfaced after the reassigned one and delivered a fuller packet. Three
things it added, with my verification status:

**BYKONZ RESOLVED (verified).** `/Users/shaansisodia/SISO_Workspace/bykonz-archive-2026-08-23/` —
32 entries: ~25 `bykonz-*` workstream directories, admin UI screenshots at 1440/390, and a
`plane-delivery-candidate`. It is an **archive of workstreams, not a running app**; directory
names observed, contents not read, so it yields no shell receipt. This closes the blocker that
previously needed an operator.

**Vendor admissions that eliminate whole option families (agent-reported, not re-verified).**
The most decision-relevant material in the late packet:
- **Style isolation is one-way everywhere** — qiankun v3 calls it "a one-way boundary": it stops
  donor CSS escaping, not host CSS entering. So plan to restyle the donor deliberately, because
  you will restyle it accidentally otherwise.
- **Portaled overlays break in every mechanism** — a modal portaled to `document.body` falls
  outside qiankun's `@scope` root; wujie documents iframe modals "cannot cover the whole page."
  **Modals are where donor absorption visibly fails, and every donor has modals.**
- **Module Federation's `singleton` defaults to `false`**, and MF ships a `Bridge` precisely to
  isolate React trees — the maintainers conceding the shared-tree model does not hold.

**Two client-facing corrections worth propagating immediately:** the client-portal product
**"Copilot" is now Assembly** (old hostnames dead — any deliverable naming Copilot cites stale
branding), and **Directus is no longer BSL/GPL** but MSCL-1.0-GPL with an anti-circumvention
clause. Related and load-bearing for P08's own thesis: **NocoBase §5.2 forbids removing its
branding** — meaning chrome removal can be a *licence violation*, not merely an engineering task.
That is a real constraint on the host-owns-the-shell decision and nothing in the lane had
surfaced it before.

**One receipt I wrongly "corrected", then retracted.** I challenged the agent's `recon`=
"Team"/"Tasks" evidence, claiming source showed "Comms"/"Chat Feed". The agent pushed back with
exact line numbers rather than deferring. Re-reading `agency/sidebar-config.tsx:46-68`, **it was
right and I was wrong**: my extractor matched `label:` then scanned 400 characters for
`product:`, crossing the section/`items[]` nesting boundary and pairing a nested item label with
the *next* section's product. Retracted in `P08-SR-055`.

Two of my follow-on claims fell with it: "not one slot id predicts its label" (the content-gen
rail is fully self-consistent) and "Insights→`hub`" (it maps to `content-gen`). The A15 finding
survives on the narrower **cross-rail** claim.

Worth keeping visible rather than tidying away: a peer challenged the lane owner with line
numbers, the owner re-read source instead of pulling rank, and the peer's receipt won. The
failure mode — a regex silently crossing a structural boundary and producing plausible,
confidently-wrong pairs — is precisely what this lane's evidence standard exists to catch, and
it caught it in the owner's own work.

## 6c. SISOCRM inspection — the lane's own rule falsified (and that is the win)

The largest recoverable gap is now closed. `p08-.../sisocrm-donor-absorption.md` (354 lines)
inspected the only local estate that has actually absorbed mature donors under one host. It
contradicts the lane on two load-bearing points, which is worth more than a confirmation.

**1. The absorb-vs-preserve rule is wrong, and the replacement is mechanical.** The lane
hypothesised *absorb a capability, preserve a destination*, with *data-model nav preserved
in-pane*. Teable is the purest data-model donor in the estate — and it got a **native,
non-iframe mount**, the exact opposite of the prediction on the exact donor it was about. The
recorded reason is not semantic at all (`THEMING-CONTRACT.md:94-102`):

> "A cross-origin iframe is a hard CSS boundary — custom properties do not inherit across it…
> This is the concrete reason the iframe had to go."

Teable-the-grid and Postiz-the-scheduler are both "capabilities," yet one is absorbed and one
iframed. **Capability-vs-destination does not discriminate them; cascade-and-session coupling
does.** Revised rule: *absorb when the surface must share the host's CSS cascade or its session;
preserve when it is self-contained and a hard boundary costs nothing.*

**What survives:** the *nav* half, unanimously. No donor's navigation was ever adopted into the
rail — it is 100% host-authored, and donor chrome is actively suppressed via `data-siso-hide`
patches. Narrowed to "never inherit donor nav," the estate confirms it.

**2. A07 finally has a measurement, and it is false as stated.** I verified all eight patch
line counts myself (`P08-SR-057`); they reproduce exactly, 674 total:

| Absorption depth | Cost | Example |
|---|---|---|
| Preserve behind an iframe | **17–62 lines** of CSP/config | `documenso-siso-frame` 17, `papermark-siso-community` 62 |
| Absorb identity + data layer | **273 lines across 9 files** | `teable-siso-absorption` |

The deep patch changes the donor's auth strategy, SSR auth hop, DB provider **and its public API
validation regex** (widened to accept a schema-qualified `siso.buyer_profile`). So A07
("adaptation is always only 1–2% of the work") is **false as a universal and roughly true in a
bounded region** — the region being iframe preservation. The estate's own strategy doc says it
plainly: rewriting a data layer per donor is *"not a weekend each."*

**No hour data exists anywhere in the estate.** This team measured adaptation cost in **diff
surface against upstream**, which is arguably the better metric for upgrade friction. "No hours
were ever recorded" is itself the finding.

**3. "Zero donor-named nav entries" is false as built.** I read `GroupedRail.tsx:43-65`: 4 groups,
13 destinations, and `{ id: 'tables', label: 'Tables', to: '/tables' }` is a real top-level rail
entry — against `TEABLE-ABSORPTION-BRIEF.md:16,18` ("A Tables page: **No**" / "The broker never
clicks 'Tables'"). The plan lost to the build, and the documents still describe a Plane-hosted
architecture the shipped shell abandoned.

## 7. Highest-value next actions

1. **Inspect SISOCRM** (P08's largest recoverable gap). It already absorbs Teable/Twenty/Plane/
   AFFiNE under one host, so the absorb-vs-preserve rule can be tested against decisions someone
   already made under real constraints. Local, free, directly on point.
2. **Run the outside-option rate** on a real gallery with real clients (P06). One measurement
   resolves falsifier F3, informs the gallery-size assumption, and determines whether the
   closed-pack architecture survives.
3. **Run perceptual hash + CLIP over the 7,678 previews** (P05 D-02). Turns the dedupe estimate
   into a fact.
4. **Rebuild the P06 and P08 commercial denominators** on Opus with the transport notes
   recorded in checkpoint 3 (`r.jina.ai` proxy prefix; `collectui.com` needs JS execution).
5. **Resolve Bykonz's location** — needs an operator-supplied path; absent from `apps/` (20
   entries) and `clients/` (21 entries), and content search is disabled in this environment.

---
*Research-only. Sprint 1 remains UNPROMOTED. No implementation, deployment, admission or client
clearance is claimed or authorized by this lane.*
