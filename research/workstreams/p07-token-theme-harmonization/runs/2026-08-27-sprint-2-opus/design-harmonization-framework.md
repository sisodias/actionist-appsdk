# P07 — Design harmonization across heterogeneous donor code

**Run:** `2026-08-27-sprint-2-opus` · **Lane:** S2-L2 · **Part:** P07 · **Observed:** 2026-08-27
**Owner:** `ACTIONIST-S2-L2-DESIGN-HARMONIZATION` (Opus 5, 1M context)
**Mode:** research-only — no cloning, no execution of candidate source, no build, no deploy, no benchmark, no admission
**Owned output:** this directory only

---

## 0. The question this lane owns

Sprint 1 settled what a *pack* is. It did not settle what happens when that pack meets code Actionist did not write.

P07's question is narrower and harder than "what is a good design system":

> Given one validated semantic token pack, how does Actionist make an application built from owned UI, 21st components, transplanted code, mounted microfrontends and intact donor services look like **one product** — and how does it know, mechanically, when it has failed?

The answer is not one mechanism. It is **five binding classes with genuinely different physics**, a contract that survives all five, and a gate that measures the runtime rather than the source.

### Objective

One `DesignDNA` → one immutable token pack → **five distinct binding mechanisms** → a composed application whose visual coherence is *measured at the rendered pixel and the resolved custom property*, not asserted from the fact that a bridge file exists.

### Invariants

- **I1 — One pack, one direction.** Every surface resolves from a single pack version. References flow `component → semantic → primitive`, never upward, never sideways between donors. (Requirement 73.)
- **I2 — The host owns the vocabulary.** Actionist semantic role names are the contract. Donor variable names are an implementation detail of a binding, never a shared namespace.
- **I3 — Bind, never fork, for styling reasons.** No donor component file is edited to change its appearance. If styling requires editing donor component source, the binding class is wrong or the surface is unstylable — record it, do not fork it.
- **I4 — Scope is a container, never `:root`.** A donor binding is written to the mount container. Global injection collides two namespaces silently.
- **I5 — Convert, never alias.** Two token systems may use different color encodings. A binding that aliases across encodings is a defect even when it parses.
- **I6 — Unstylable is a legitimate, declared outcome.** A cross-origin iframe cannot inherit custom properties. The framework must model that limit honestly rather than promise a bridge that cannot exist.
- **I7 — Identical-first.** A binding ships at pixel parity with the donor's own values before it converges toward Actionist styling. Convergence is a product decision, never a side effect of mounting.
- **I8 — The gate reads the runtime.** Coherence claims are made against resolved computed styles and rendered pixels. Source-file scans are necessary and not sufficient.

### Forbidden couplings

| Forbidden | Why |
|---|---|
| Donor variable names in host `:root` | Namespace collision; `--background` means different things to Teable and to the host |
| Host semantic tokens referencing donor tokens | Inverts I1; donor upgrade silently restyles the host |
| One binding file per component | The seam must stay countable and reviewable; per-component drift is unauditable |
| Editing donor component source for appearance | I3; creates upgrade debt for a cosmetic gain |
| A pack shipping without its dark mirror for every bound surface | Gate F; mode switching breaks at the donor boundary first |
| Model-authored raw color/space/radius literals in glue | Requirement 75; the model selects names, never values |
| Claiming coherence from a passing source-lint | I8; compiled donor CSS is invisible to a source scan |

### Unknowns carried in, and their state

| ID | Unknown | State |
|---|---|---|
| U-A | Corpus-wide theme-eligibility rate for the 21st bundles | **unmeasured** — inherited rates are `SAMPLED n=25` (colour rules) and `n=60` (token blocks); P05 records this as U-2 |
| U-B | Whether re-themed bundles look aesthetically right | **unmeasured** — P05 U-3, flagged as the most likely source of unpleasant surprises |
| U-C | Visual near-duplicate rate | **unmeasured** — floor 1.3%, ceiling 25.9% |
| U-D | Whether one pack can span dense console and sparse portal without context offsets | **hypothesis** — design grammar proposes offsets, untested |
| U-E | Same-origin proxy viability as an iframe escape | **unknown** — never attempted in the estate |
| U-F | Whether donor-native dark mode and host dark mode can stay in sync under donor upgrade | **unknown** |

---

## 1. What is already settled, and what it forces

Three inherited results constrain everything below. All three are direct receipts, not synthesis prose.

### 1.1 The absorb/preserve boundary is mechanical, not semantic — and it is a *theming* boundary

The strongest evidence in the project is that the built SISOCRM estate chose its donor treatment on **CSS-cascade and session coupling**, not on capability-versus-destination semantics. The recorded reason for Teable's native mount is explicit (`THEMING-CONTRACT.md:94-102`, quoted in the P08 absorption packet):

> "A cross-origin iframe is a hard CSS boundary — custom properties do not inherit across it. Inside a frame, this bridge cannot reach Teable's components at all… Natively mounted, the bridge is just cascade and it works. **This is the concrete reason the iframe had to go.**"

This is a P07 finding wearing a P08 costume. The estate's most expensive architectural decision — vendoring a donor grid plus ~30 stub files into the host tree — was **driven by theming**. Design harmonization is therefore not a finishing pass applied after composition. It is an input to the reuse-shape decision itself.

**Consequence for S2-L1 and S2-L4:** `ReuseDecision` cannot be made without a theming requirement. A surface that must be themeable cannot be an iframe. That is a hard feasibility edge, not a preference.

### 1.2 A real bridge exists, and its trap is an encoding mismatch

The estate's theming contract is the only built precedent, and it is unusually precise about the failure mode. Teable publishes **HSL triplets** (`--background: 0 0% 100%` consumed as `hsl(var(--background))`); the host publishes **RGB triplets** (`--crm-brand-rgb: 255 167 38` consumed as `rgb(var(--crm-brand-rgb) / <alpha>)`).

> "The bridge must **convert**, not alias. `--background: var(--crm-canvas-rgb)` is silently wrong — it will produce garbage colours, because `13 14 13` read as HSL is not the dark grey it is as RGB."

This generalizes into I5 and into a required field on every binding. Note the shape of the failure: **it parses, it renders, it is wrong.** No schema validator catches it. Only a rendered comparison does. This single case justifies the visual-diff gate.

The contract also establishes scope discipline — the bridge "applies to the container wrapping Teable's mounted components, not global `:root` — otherwise Teable's variable names leak into the whole SISO app and collide" — the dark mirror requirement, alpha preservation (`--border: 0 0% 0% / 0.08`), and identical-first sequencing. I adopt all four.

### 1.3 The pack science is complete for owned code and silent on donor code

`research/token-pack-science-2026-08-27.md` §4 specifies a closed pack as **75 numbered requirements across 10 groups** (identity/closed-world 1–11, color primitives 12–20, semantic roles 21–32, component/state 33–37, typography 38–44, spacing/sizing/layout 45–51, shape/elevation/effects 52–58, motion 59–64, assets 65–69, DTCG policy 70–75), and §5 specifies **gates A–J**.

Its closed-world guarantee is stated at requirement 75: "the model may select `button.primary`, never `#3b82f6`; it may select `space.3`, never `12px`." Gate J enforces it by scanning "source and generated CSS for raw hex/rgb/hsl/oklch values."

**The gap this lane must close:** every one of those 75 requirements and 10 gates assumes Actionist controls the code being styled. Gate B fails "if any style declaration is a literal" — but a compiled 21st bundle is *nothing but* literals from the host's perspective, and a cross-origin donor's CSS is not reachable by any scan at all. Gate J's literal audit is undefined against code Actionist did not author and may not restyle.

The pack science is therefore **necessary and insufficient**. It defines the pack. It does not define the binding. That is exactly P07's remit, and §6 open question 7 concedes the schema is "an engineering derivation… not a standards-body minimum."

---

## 2. The five binding classes

Design harmonization fails when one mechanism is assumed to cover all surfaces. These five have different physics, different costs, different failure modes and different honest ceilings.

| Class | Mechanism | Applies to | Coherence ceiling | Cost signal |
|---|---|---|---|---|
| **B1 — Native emission** | Pack compiles directly to the app's own CSS variables and classes | Actionist-owned UI, archetype shell | Total | Zero marginal |
| **B2 — Source extraction and retokenization** | Donor style literals rewritten to host semantic tokens at extraction time; result is owned source | 21st components, extracted packages, transplanted subsystems | Total, once paid | One-time, per component, *unmeasured at corpus scale* (U-A) |
| **B3 — Scoped variable bridge** | Host writes donor's own variable names, converted, onto the mount container | Natively-mounted donors that are already token-driven | High — bounded by donor token coverage | ~1 mapping file per donor + conversion |
| **B4 — Scoped stylesheet override** | Host injects scoped CSS targeting donor selectors; donor is not token-driven | Natively-mounted donors with baked literals | Low and brittle | High and recurring; breaks on donor upgrade |
| **B5 — Frame negotiation** | No cascade crosses the boundary; visual agreement achieved by *protocol*, not by CSS | Cross-origin iframes, intact services | **Structurally bounded — cannot reach parity** | Low to configure, impossible to perfect |

### B1 — Native emission

The baseline. Pack → CSS custom properties + component classes. All 75 requirements apply unmodified; all ten gates run at full strength. Nothing here is novel and nothing here is the problem.

### B2 — Source extraction and retokenization

The 21st corpus is the volume case. A harvested component is either source-bearing (**3,506** of the joined estate) or a compiled bundle (the remaining majority of 7,949 bundle-store directories). Retokenization means rewriting its literals to host semantic tokens so the result is indistinguishable from B1.

P05's `failure_class` enum is the correct taxonomy for why this fails, and I adopt it verbatim: `ok | webgl | tailwind_v3 | baked_literal | no_token_block`. Each maps to a different verdict:

| `failure_class` | B2 verdict |
|---|---|
| `ok` | Retokenize; expect parity |
| `no_token_block` | Retokenize with an authored role mapping; higher review burden |
| `baked_literal` | Retokenize mechanically, but **U-B applies** — output may parse and still look wrong |
| `tailwind_v3` | Requires a scale reconciliation pass before retokenization |
| `webgl` | **Not retokenizable by CSS.** Colors live in shader uniforms and JS. Either accept donor palette, or reject the component. Do not claim a bridge. |

**Honest statement of what is unmeasured:** the inherited de-theming rates — 86.7% of colour rules tokenised, 55/60 (91.7%) re-theming cleanly, WebGL 4/25 — are `SAMPLED n=25` and `n=60`. They are the only numbers available and they must be quoted with their sample size every time. The corpus-wide rate is U-A. **No client-facing eligibility claim may be made from an n=25 sample**, and P05's gate G-4 already says so.

### B3 — Scoped variable bridge

The SISOCRM-proven mechanism, generalized. Preconditions, all required:

1. Donor is **natively mounted** (shares the host cascade). Not an iframe.
2. Donor is **already token-driven** — it reads its own appearance through custom properties.
3. Donor's variable set is **enumerable** and its consumption pattern is known.
4. Donor's encoding is **known** and a conversion to host encoding exists.

Teable satisfied all four: shadcn/ui underneath, a `:root` block enumerable to 23 variables, HSL-triplet consumption, and a documented conversion. That is why the bridge worked, and why "the exact CSS" turned out to be "a variable set" rather than a CSS port.

The bridge is **one file per donor**, written to the mount container, mirrored for dark, preserving alpha. Its size is the honest cost signal: one line per donor variable, plus conversion.

### B4 — Scoped stylesheet override

The fallback when a donor is natively mounted but not token-driven. The host injects scoped rules matched to donor selectors.

This class deserves a warning label. It couples the host to the **donor's internal class names and DOM structure** — precisely the surface with no stability contract. It is the only class that predictably breaks on a donor upgrade for purely cosmetic reasons. Sprint 3 should treat a large B4 surface as evidence the reuse shape was wrong, not as a design system achievement.

### B5 — Frame negotiation

The structurally limited case, and the one most often described dishonestly.

A cross-origin iframe is a hard CSS boundary. Custom properties do not inherit across it. `postMessage` is the only channel. What remains achievable:

- **Negotiated mode.** Host posts `{mode: "dark"}`; donor switches its own theme. Agreement on *mode*, not on values.
- **Negotiated accent.** Where the donor exposes a theming API, host posts a small parameter set; donor applies it with its own logic.
- **Chrome suppression.** The estate's proven move — donor chrome hidden via injected CSS when framed (`data-siso-hide="settings"`, `"footer"`), so the *composition* reads as one product even though the palette does not match exactly.
- **Frame-boundary styling.** The host styles the container, header and padding around the frame.

What is **not** achievable and must never be promised: token-level parity, shared radius/spacing rhythm, font unification, or per-component role mapping. B5's ceiling is "clearly the same product, visibly a different surface." Requiring more forces a reuse-shape change — which is exactly the decision SISOCRM made when it moved Teable to a native mount.

Two escapes exist and both cost more than they look:
- **Same-origin proxy** — collapses the origin boundary, converting B5 into B3. Never attempted in the estate (U-E). Carries session, CSP and cookie consequences that belong to S2-L5, not to me.
- **Reuse-shape change** — the proven path, and expensive: 273 patch lines across 9 files, touching auth strategy, SSR auth hop, DB provider and a public API validation regex.

### The routing rule

```text
Is the surface Actionist-authored?            → B1
Is donor source owned after extraction?       → B2 (route by failure_class)
Does the surface share the host cascade?
    Is the donor token-driven?                → B3
    Otherwise                                 → B4 (flag as fragile)
Otherwise (hard boundary)                     → B5 (declare bounded ceiling)
```

This is deterministic. Every input is a structural fact — authorship, mount topology, presence of a token layer — not a judgment call. **The judgment sits one level up**, in deciding whether a B5 ceiling is acceptable for a given surface, and that decision is a named human authority in §5.

---

## 3. Contracts

Two machine-readable artifacts accompany this document.

### 3.1 `semantic-token-contract.json` — what every surface may reference

The host vocabulary. It is deliberately **smaller than the 75-requirement pack**: a pack is what Actionist *authors*; the semantic contract is what a *binding may reference*. Keeping the referencing surface narrow is what makes donor binding tractable — a donor variable maps to a stable role name, not to a primitive that may be re-laddered next version.

Structure:
- `roles` — semantic role names grouped by family (canvas, surface, text, icon, border, action, status, link, form, nav, dataviz, shape, space, type, motion, elevation), each with required modes, a content-pairing declaration and a `donor_bindable` flag.
- `encodings` — declared color encodings the system can emit and convert between, with the conversion requirement made explicit.
- `namespace` — the host prefix, and the rule that donor names never enter it.
- `mode_policy` — light and dark required; `dark = invert(light)` forbidden per gate F.
- `pack_binding` — which of the 75 requirements each role family draws from, so the contract is traceable rather than a parallel invention.

`donor_bindable: false` on a role is a real signal: it marks roles that exist only in the host's own composition (rail geometry, shell insets) and which no donor should ever be handed.

### 3.2 `donor-token-binding.schema.json` — how one donor binds

One instance per donor surface. Required fields carry the lessons above as schema, not as prose:

- `binding_class` — enum `B1|B2|B3|B4|B5`, with conditional requirements per class.
- `mount_topology` — `native | iframe_same_origin | iframe_cross_origin | web_component | service`.
- `donor_encoding` / `host_encoding` + **`conversion`** — required whenever the two differ. `conversion: "alias"` across differing encodings is schema-invalid. This makes I5 mechanically checkable.
- `scope_selector` — required for B3/B4; `:root` is explicitly forbidden by pattern.
- `mappings[]` — donor variable → host role, each with `alpha_preserved` and an optional `mode_specific` override.
- `dark_mirror` — required object, not a boolean, naming the selector and confirming coverage.
- `coherence_ceiling` — enum `parity | high | bounded | none`. B5 may not declare `parity`. This is the honesty field.
- `unstylable[]` — declared surfaces the binding cannot reach, each with a reason. An empty array on a B5 binding is suspicious by construction.
- `upgrade_fragility` — `stable | selector_coupled | structure_coupled`, forcing B4's real risk into the record.
- `evidence` — receipts for each claim, with `observed | inferred | unknown`.

---

## 4. Gates

The pack science gates A–J validate a pack in isolation. They do not validate a *composition*. P07 adds four gates that run against the assembled application, and amends two.

### Amendments to inherited gates

**Gate B (completeness) — amended scope.** "Fail if any style declaration is a literal" applies to B1 and B2 surfaces only. B3/B4/B5 surfaces are **excluded from source-literal scanning** and instead subject to gates K–N. Running gate B against a compiled donor bundle produces a guaranteed failure that teaches nothing.

**Gate J (runtime literal audit) — amended reach.** The estate's real implementation (`check-design-tokens.mjs`) reads `.css` files under `src`, skipping token sources, checking hex, color functions, gradients, shadows and font families, plus required rail-geometry token consumption. Its limits are structural and must be recorded: it scans **CSS files only** — not TSX inline styles, not styled-component template literals, not compiled donor output. Gate J is a source-side gate. It cannot see the majority of a composed application's pixels. **This is the precise reason gates K–N must read the runtime.**

### New composition gates

**Gate K — resolved-property audit (deterministic).**
At runtime, for each bound surface, read `getComputedStyle` on a sampled element set and assert every declared role resolves to a concrete value, in both modes. Fail on: unresolved variable (empty computed value), a value resolving outside the pack's declared set, a donor variable name appearing in host scope, or a host role appearing inside a donor scope. This catches namespace leakage that source scanning cannot.

**Gate L — encoding-correctness probe (deterministic, and the one that catches the silent trap).**
For every binding where `donor_encoding != host_encoding`, assert the *rendered* color equals the *intended* color within a tolerance. Mechanically: take the host role's source value, apply the declared conversion, compare against the donor element's computed color. **An aliased mismatch fails here and nowhere else** — this gate exists specifically because `--background: var(--crm-canvas-rgb)` parses, renders, and is wrong. Failure mode is unmistakable: the delta is enormous, not marginal.

**Gate M — visual-diff coherence (deterministic capture, judgment threshold).**
Two distinct comparisons, and conflating them is a common error:

1. **Identical-first diff.** Before convergence, a bound donor surface must render **pixel-identical** to the donor's own defaults. Tolerance ≈ 0. This proves the binding is wired without changing anything, per I7. It is a strong, cheap, deterministic gate.
2. **Cross-surface coherence diff.** After convergence, compare *measured style properties* across surfaces — not pixels. Extract computed background, text color, border color, radius, font family, control height and spacing rhythm from equivalent elements on each surface, and assert they agree within the pack's declared tolerance. Pixel diffing across genuinely different surfaces is meaningless; property agreement across them is exactly the claim "one product" makes.

The threshold for (2) is a **proposed policy, not a measured constant** and must be calibrated. It is the operational form of the stop rule "composed UX remains visibly incoherent after token and shell adaptation."

**Gate N — mode-transition integrity (deterministic).**
Switch modes and re-run K, L and M(1) on every bound surface. Fail if any surface fails to switch, switches partially, or lags. Donor boundaries are where mode switching breaks first, and a donor that ships its own dark block is a synchronization hazard under upgrade (U-F).

### Deterministic / model / human split

| Step | Owner |
|---|---|
| Binding-class routing from structural facts | **Deterministic** |
| Schema validation, conversion validity, scope-selector legality | **Deterministic** |
| Gates A–L, N; gate M capture and measurement | **Deterministic** |
| Enumerating a donor's variable set and consumption pattern | **Model**, verified against source |
| Proposing donor-variable → host-role mappings | **Model**, gate-checked |
| Classifying a component's `failure_class` | **Model**, sampled and human-audited |
| Judging whether a converged surface *looks right* (U-B) | **Human** |
| Accepting a B5 bounded ceiling for a client-visible surface | **Human authority — named, recorded** |
| Approving a large B4 surface instead of a reuse-shape change | **Human authority — named, recorded** |

The model never grants itself a coherence verdict, and never authors a raw value.

---

## 5. Three cross-donor experiments

Specified in `cross-donor-experiments.md` and summarized here. They use **three genuinely different donor shapes** — different binding classes, different failure physics, different unknowns — as the dispatch requires.

| Exp | Donor shape | Class | Closes | Falsifier |
|---|---|---|---|---|
| **X-1** | Token-driven natively-mounted donor (Teable shape) | B3 | Whether a scoped bridge reaches parity, and whether gate L catches an aliased encoding | A deliberately aliased bridge that gate L does not catch falsifies the gate |
| **X-2** | Compiled/source component corpus (21st shape) | B2 | U-A at corpus scale, and U-B on a rendered sample | Pass rate below ~60% falsifies the re-theming premise (P05 E-2's stated gate) |
| **X-3** | Cross-origin intact service (Documenso/Postiz shape) | B5 | The real ceiling of frame negotiation | If negotiated mode + chrome suppression reaches acceptable coherence, B5's ceiling is higher than claimed and more surfaces can stay iframed |

X-1 and X-3 are deliberately the same architectural question answered by opposite mechanisms — that pairing is what makes the ceiling claim falsifiable rather than assumed.

---

## 6. Contract edges with other lanes

### S2-L3 (shell and editor) — the tightest coupling

1. **Theming requirement is an input to reuse shape, not an output.** A surface required to be themeable cannot be cross-origin-framed. S2-L3's host-frame/donor-chrome boundary and my binding classes must agree on mount topology or both are wrong.
2. **Chrome suppression is shared.** Hiding donor chrome is S2-L3's boundary decision executed through my B5 mechanism. Neither lane owns it alone. The estate's `data-siso-hide` pattern is the proven precedent.
3. **`theme` is a typed edit operation.** S2-L3 owns the edit model; I own what a theme edit is permitted to change. My position: a theme operation may only change **pack selection or a declared context offset**. It may not author values, and it may not edit a binding file. Binding edits are engineering changes, not client edits.
4. **Upgrade replay must replay bindings.** B4 bindings are selector-coupled and will break on donor upgrade. S2-L3's replay model needs `upgrade_fragility` from my schema.

### S2-L1 (module framework)
`ReuseDecision` must carry a theming requirement and my `binding_class`. A `PackagingProfile` that does not state mount topology cannot be routed.

### S2-L4 (composer)
Binding class is a **feasibility constraint**, not a ranking preference. "Themeable surface + cross-origin-only donor" is infeasible and must eliminate deterministically before model judgment — exactly the plan-then-fill discipline. If the composer cannot determine mount topology, it returns `UNDERDETERMINED`; it does not guess.

### S2-L5 (runtime and learning)
Gates K–N are runtime observations and need a place in the qualification record. The same-origin proxy escape (U-E) is a runtime/CSP question I explicitly do not own. Release manifests must pin pack version *and* binding versions together — a pack upgrade without its bindings is a visual regression with no rollback story.

---

## 7. Rejected alternatives

| Rejected | Why |
|---|---|
| **One global `:root` for host and donors** | Namespace collision. `--background` is not the same concept in two systems. The estate explicitly scoped to the container for this reason. |
| **Force every donor onto host token names** | Requires editing donor component source — violates I3 and creates unbounded upgrade debt for cosmetics. |
| **Shadow DOM for donor isolation** | Solves leakage but *worsens* the problem: it blocks the inherited cascade the bridge depends on. Custom properties do pierce shadow boundaries, but donor code is not authored to consume host names, so isolation buys nothing and costs the B4 escape hatch. |
| **CSS `@layer` as the harmonization primitive** | Manages specificity between stylesheets. Does not convert encodings, cross origins, or supply missing roles. Useful *inside* B4, not a class of its own. |
| **Pixel-diff everything** | Meaningless across structurally different surfaces. Correct for identical-first (M1), wrong for coherence (M2), which measures properties. |
| **Treat harmonization as a post-composition polish pass** | Contradicted by the strongest local evidence: theming drove the estate's most expensive architectural decision. |
| **Declare coherence when a bridge file exists** | The encoding trap parses, renders and is wrong. Existence of a mechanism is not evidence of a result. |
| **Quote 86.7% / 91.7% as corpus theme-eligibility** | `SAMPLED n=25` and `n=60`. Quoting them unqualified repeats exactly the error the project already caught twice. |

---

## 8. Stop and kill rules

- **Kill B4 as a general strategy** if selector-coupled overrides break on more than a small minority of donor upgrades in Sprint 3. Route those surfaces to reuse-shape change instead.
- **Kill corpus-scale B2** if X-2 reports a pass rate below ~60% (P05 E-2's own gate). The re-theming premise would be falsified and the component layer becomes fixed-palette presentation.
- **Stop and escalate** if X-3 shows B5 cannot reach acceptable coherence *and* X-1 shows native mounting costs an order of magnitude more than iframing. That is the "every donor requires bespoke surgery" stop rule firing on the visual axis, and it invalidates mixed-shape assembly as a visual proposition.
- **Stop** if gate M(2) cannot be calibrated to a threshold that separates human-judged coherent from incoherent compositions. An uncalibratable gate is not a gate.

---

## 9. Self-challenge

Four load-bearing claims, challenged before callback.

**Claim 1 — "The absorb/preserve boundary is a theming boundary."**
*Challenge:* the estate also cites **session** coupling, and identity may have been the real driver with theming as post-hoc justification.
*Holds, partially.* `THEMING-CONTRACT.md:94-102` states theming as "the concrete reason the iframe had to go," which is explicit and contemporaneous. But Teable settings and notifications were absorbed as **host chrome**, which is a placement reason, not a theming one. Honest statement: theming is *a* proven driver of one specific mount decision, jointly with session. It is not the sole axis. My framework's dependence is narrower than the strong claim — I need only that theming is a *feasibility input* to reuse shape, which the quote establishes directly.

**Claim 2 — "B5 cannot reach parity."**
*Challenge:* is this a law or an untested assumption?
*Holds as stated, with a named escape.* Cross-origin custom-property non-inheritance is a boundary property, not a limitation of effort. But "parity" is about *token inheritance*; a donor could theoretically be configured to near-identical values through its own theming API. My claim is precisely that the *mechanism* cannot be cascade — which is why B5 is defined as protocol negotiation. X-3 is designed to find the real ceiling rather than assume it, and U-E records the proxy escape as unknown rather than dismissing it.

**Claim 3 — "Gate L catches the encoding trap."**
*Challenge:* what if the two encodings produce coincidentally similar colors, so the delta is small?
*Holds, and the challenge sharpens it.* For most values the mismatch is gross (`13 14 13` as HSL is not a dark grey). But a near-neutral low-saturation value could produce a small delta. Gate L must therefore compare against **the converted expected value with a tight tolerance**, not merely flag large deltas — and X-1's falsifier deliberately tests a planted alias to verify the gate rather than trusting it.

**Claim 4 — "Five classes are sufficient."**
*Challenge:* what about Web Components, CSS-in-JS donors, or donors with their own theming API?
*Partially holds; recorded as a limit.* A donor theming API is B5-style protocol negotiation applied natively — it fits B3's slot with `conversion` carrying the API call, which is a stretch of the class. CSS-in-JS donors with runtime-computed styles resist B4 selector targeting. Web Components sit between B3 and B4 depending on shadow-root usage. I record these as **schema-representable but under-specified**, not as proof the taxonomy is complete. The `mount_topology` enum already carries `web_component` so the record can be honest.

**One number I refuse to quote as settled:** any corpus-wide theme-eligibility rate. The available figures are `SAMPLED n=25` / `n=60`. X-2 exists to close that, and until it runs the honest answer to "what fraction of the component corpus can be re-themed?" is **unmeasured**.

---

## 10. Boundary

Research and contract synthesis only. Nothing here authorizes cloning, execution, build, deploy, benchmark, migration or admission. No candidate source was executed. No donor system was modified. `research_only=true`, `implementation_authorized=false`, `execution_status=UNEXECUTED`, `admission_status=NOT_ADMITTED`, `admitted_blocks=0`.
