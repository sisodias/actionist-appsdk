# P07 — Cross-donor visual-coherence experiments

**Run:** `2026-08-27-sprint-2-opus` · **Lane:** S2-L2 · **Observed:** 2026-08-27
**Status:** designed, `UNEXECUTED`. No donor was cloned, executed, built or benchmarked by this lane.

Three experiments over **three genuinely different donor shapes**. They are chosen so that each exercises a different binding class, a different failure physics and a different unresolved unknown. X-1 and X-3 deliberately answer the *same* architectural question through opposite mechanisms — that pairing is what makes the coherence-ceiling claim falsifiable rather than assumed.

| Exp | Donor shape | Class | Physics under test | Primary unknown |
|---|---|---|---|---|
| X-1 | Token-driven, natively mounted | B3 | Cascade inheritance + encoding conversion | Does a scoped bridge reach parity, and does gate L bite? |
| X-2 | Component corpus, source and compiled | B2 | Literal rewriting at scale | U-A (eligibility rate), U-B (does it look right) |
| X-3 | Cross-origin intact service | B5 | Hard origin boundary | What is the real ceiling of protocol negotiation? |

Each experiment states its fixture, method, deterministic gates, the specific falsifier that would overturn a claim I have made, and its stop rule.

---

## X-1 — Scoped variable bridge against a token-driven donor

### Fixture (worked trace, B3)

The Teable shape: a donor built on shadcn/ui, natively mounted in the host React tree, publishing its appearance through ~23 CSS custom properties consumed as `hsl(var(--name))`, against a host publishing RGB triplets.

```json
{
  "binding_id": "teable-grid-surface",
  "donor": {
    "name": "Teable",
    "upstream": "https://github.com/teableio/teable",
    "version_pin": "<pinned commit>",
    "token_system": "shadcn/ui",
    "variable_count": 23
  },
  "binding_class": "B3",
  "mount_topology": "native",
  "coherence_ceiling": "high",
  "scope": {
    "selector": ".teable-surface",
    "applies_to": "The DOM subtree of the natively mounted Teable grid",
    "single_seam": true
  },
  "encoding": {
    "host": "rgb-triplet",
    "donor": "hsl-triplet",
    "conversion": "convert",
    "conversion_method": "rgb-triplet -> hsl-triplet, pinned implementation, alpha carried through",
    "alpha_preserved": true
  },
  "mappings": [
    {"donor_variable": "--background", "host_role": "background",  "verified": "observed"},
    {"donor_variable": "--foreground", "host_role": "text",        "verified": "observed"},
    {"donor_variable": "--primary",    "host_role": "action-primary", "verified": "observed"},
    {"donor_variable": "--border",     "host_role": "border", "alpha": 0.08, "verified": "observed"},
    {"donor_variable": "--radius",     "host_role": "radius-md",   "verified": "observed"}
  ],
  "dark_mirror": {
    "required": true,
    "selector": ".dark .teable-surface",
    "coverage": "complete",
    "uncovered_roles": []
  },
  "unstylable": [],
  "upgrade_fragility": "stable",
  "gates": {
    "applicable": ["C","D","F","K","L","M1","M2","N"],
    "results": {"C":"not_run","D":"not_run","F":"not_run","K":"not_run","L":"not_run","M1":"not_run","M2":"not_run","N":"not_run"}
  },
  "evidence": [
    {"claim": "Donor is fully token-based; there are no hard-coded colours to reuse", "state": "observed", "receipt": "SISOCRM THEMING-CONTRACT.md — verified from donor source at packages/ui-lib/src/shadcn/global.shadcn.css", "sample_size": null},
    {"claim": "Donor consumes HSL triplets while host publishes RGB triplets", "state": "observed", "receipt": "SISOCRM THEMING-CONTRACT.md 'Format mismatch — the trap'", "sample_size": null},
    {"claim": "A scoped bridge reaches the donor only when natively mounted", "state": "observed", "receipt": "SISOCRM THEMING-CONTRACT.md:94-102", "sample_size": null}
  ]
}
```

### Method

1. **Enumerate** the donor's variable set from donor source; record `variable_count`. An unenumerated donor cannot be bridged, only overridden.
2. **Author the bridge at donor-current values** — identical-first (I7). Populate every mapping with the donor's *existing* values, converted into the donor's encoding.
3. **Gate M1.** Render the donor surface bridged vs unbridged. Require **pixel-identical**, tolerance ≈ 0. This proves the seam is wired without changing anything.
4. **Converge** — repoint the bridge at host semantic roles.
5. **Gates K, L, C, D, F, N.** Resolved-property audit, encoding probe, contrast in both modes, mode pairing, mode transition.
6. **Gate M2.** Compare measured computed properties (background, text, border, radius, font family, control height) between the donor surface and an owned surface.
7. **Planted-alias control.** Deliberately author one mapping as `alias` across the encoding mismatch — the exact `--background: var(--crm-canvas-rgb)` defect. Confirm gate L fails it.

### What each result would mean

| Result | Meaning |
|---|---|
| M1 pixel-identical, M2 within threshold | B3 works; coherence ceiling `high` is justified |
| M1 fails | The bridge is not the single seam; styling is defined somewhere else too |
| L fails on the planted alias | **Gate L works** — this is the intended pass condition for the control |
| L *passes* the planted alias | **Gate L is falsified**; the encoding trap is uncaught and my claim in §9 Claim 3 is wrong |
| M2 fails on radius/spacing but passes on colour | Expected partial result — donors rarely tokenize geometry; `unstylable` should have declared it |

### Falsifier

**A planted alias that gate L does not catch falsifies gate L**, and with it my claim that the encoding trap is mechanically detectable. That would force encoding correctness back onto human review, which does not scale.

**A secondary falsifier:** if bridging a token-driven donor still requires editing donor component source, invariant I3 is violated and B3 is not a real class — it is B4 wearing a bridge's name.

### Stop rule

If a donor that satisfies all four B3 preconditions still cannot reach `high` coherence, the scoped-bridge mechanism does not generalize beyond the one estate that proved it, and Sprint 3 must treat every donor as B4 or B5.

---

## X-2 — Retokenization across a component corpus

### Fixture (worked trace, B2)

The 21st shape: a large component estate, part source-bearing and part compiled bundle, harvested rather than authored.

```json
{
  "binding_id": "component-corpus-retokenization",
  "donor": {
    "name": "21st component estate (joined stores)",
    "upstream": "local estate; rights status gated",
    "version_pin": "harvest snapshot",
    "token_system": null,
    "variable_count": null
  },
  "binding_class": "B2",
  "mount_topology": "native",
  "coherence_ceiling": "parity",
  "scope": {"selector": ".am-owned", "applies_to": "Extracted components after retokenization; they become owned source", "single_seam": true},
  "encoding": {"host": "oklch", "donor": "srgb-hex", "conversion": "convert", "conversion_method": "literal -> nearest declared semantic role, authored mapping", "alpha_preserved": true},
  "mappings": [],
  "dark_mirror": {"required": true, "selector": ".dark .am-owned", "coverage": "complete", "uncovered_roles": []},
  "unstylable": [
    {"surface": "WebGL/shader components", "reason": "shader_or_canvas", "note": "Colours live in shader uniforms and JS, not CSS. Not retokenizable by any CSS mechanism."}
  ],
  "upgrade_fragility": "stable",
  "retokenization": {
    "failure_class": "ok",
    "source_available": true,
    "literals_rewritten": null,
    "literals_remaining": null,
    "review_required": true
  },
  "gates": {"applicable": ["B","C","D","F","G","H","I","J","K","M1","M2","N"], "results": {}},
  "evidence": [
    {"claim": "3,506 components carry real source; the remainder are compiled bundles", "state": "observed", "receipt": "P05 research-report.md §2 re-derived count table", "sample_size": "full estate enumeration"},
    {"claim": "86.7% of colour rules are tokenised", "state": "observed", "receipt": "P05 research-report.md §2 'inherited without re-derivation'", "sample_size": "SAMPLED n=25"},
    {"claim": "55/60 (91.7%) re-theme cleanly", "state": "observed", "receipt": "P05 research-report.md §2", "sample_size": "SAMPLED n=60"},
    {"claim": "Corpus-wide theme-eligibility rate", "state": "unknown", "receipt": null, "sample_size": null}
  ]
}
```

### Method

1. **Classify** every component by `failure_class` (`ok | webgl | tailwind_v3 | baked_literal | no_token_block`) and by `source_available`.
2. **Retokenize** the source-bearing set: rewrite style literals to host semantic roles.
3. **Gate J** on the rewritten source — literals must be gone. This is where gate J is *correctly* applicable, because the output is owned code.
4. **Gate K** on the rendered output — properties resolve in both modes.
5. **Gates C, D, I** — contrast and colour-vision on the re-themed result.
6. **Gate M2** across a sample against an owned reference surface.
7. **Human review (U-B)** on a rendered sample. This is the only gate for "does it look right," and it is explicitly *not* machine-decidable.

### The number this closes, and the number it must not repeat

The available rates are `SAMPLED n=25` (86.7% of colour rules tokenised) and `n=60` (55/60 = 91.7% re-theming cleanly, 5/60 with no token block, 4/25 WebGL). **They are samples, not corpus rates.** Quoting either as a corpus eligibility figure repeats precisely the class of error this project already caught twice — a headline count that dissolves on inspection.

X-2 exists to replace them with a measured corpus rate carrying its own denominator.

### Falsifier

**A pass rate below ~60% falsifies the re-theming premise** (P05's own stated gate for E-2). At that point the component estate is not a themeable supply; it is a fixed-palette presentation library, and the client-facing promise must change accordingly.

**A second, subtler falsifier:** a high machine pass rate combined with a *low human acceptance rate* falsifies the sufficiency of the gates, not the premise. That result would mean U-B is the binding constraint and machine gates are measuring the wrong thing — the most dangerous outcome, because it looks like success.

### Stop rule

Below ~60%: stop corpus-scale B2, route the component layer to fixed-palette presentation, and revise every client-facing eligibility claim. No eligibility claim may be made before this experiment reports (P05 gate G-4).

---

## X-3 — Frame negotiation against a cross-origin intact service

### Fixture (worked trace, B5)

The Documenso/Postiz shape: a mature service retained at its own origin behind a frame, with its own runtime, data and identity.

```json
{
  "binding_id": "intact-service-frame",
  "donor": {
    "name": "Intact document/scheduling service",
    "upstream": "<donor upstream>",
    "version_pin": "<pinned release>",
    "token_system": null,
    "variable_count": null
  },
  "binding_class": "B5",
  "mount_topology": "iframe_cross_origin",
  "coherence_ceiling": "bounded",
  "scope": {"selector": "[data-am-donor='service'] > .frame-chrome", "applies_to": "Host-side container, header and padding AROUND the frame. Nothing inside the frame is reachable.", "single_seam": true},
  "encoding": {"host": "oklch", "donor": "unknown", "conversion": "not_applicable", "alpha_preserved": false},
  "mappings": [],
  "dark_mirror": {"required": true, "selector": null, "coverage": "donor_native", "uncovered_roles": ["all donor-internal roles"]},
  "unstylable": [
    {"surface": "Every element inside the frame", "reason": "cross_origin_boundary", "note": "Custom properties do not inherit across an origin boundary. No CSS mechanism reaches inside."},
    {"surface": "Donor typography", "reason": "cross_origin_boundary"},
    {"surface": "Donor radius and spacing rhythm", "reason": "cross_origin_boundary"}
  ],
  "upgrade_fragility": "stable",
  "frame_negotiation": {
    "channel": "postMessage",
    "negotiated": ["mode"],
    "chrome_suppression": {
      "enabled": true,
      "mechanism": "Donor-side hide markers plus CSS injected only when framed, guarded by an env flag so upstream behaviour remains the default",
      "suppressed": ["settings", "footer", "profile dock", "notifications"],
      "retained": ["space switcher — the host has no replacement"]
    },
    "escape_available": "reuse_shape_change"
  },
  "gates": {"applicable": ["K","M2","N"], "results": {}},
  "evidence": [
    {"claim": "A cross-origin iframe is a hard CSS boundary; custom properties do not inherit across it", "state": "observed", "receipt": "SISOCRM THEMING-CONTRACT.md:94-102", "sample_size": null},
    {"claim": "Chrome suppression via framed-only injected CSS is a proven mechanism", "state": "observed", "receipt": "P08 sisocrm-donor-absorption.md Q4 — patch hunks adding hide markers and framed-only CSS", "sample_size": null},
    {"claim": "Iframe preservation costs 17-62 patch lines; identity/data absorption costs 273 lines across 9 files", "state": "observed", "receipt": "P08 sisocrm-donor-absorption.md Q5 patch table", "sample_size": "8 patches"},
    {"claim": "A same-origin proxy would collapse the boundary into B3", "state": "unknown", "receipt": null, "sample_size": null}
  ]
}
```

### Method

1. **Baseline.** Capture the framed donor with no negotiation. Measure computed properties on donor elements vs an owned surface. This is the honest floor.
2. **Negotiate mode.** Post a mode message; confirm the donor switches its own theme. Gate N.
3. **Suppress chrome.** Apply framed-only hiding of donor chrome that duplicates host chrome. Record what is retained and why.
4. **Style the boundary.** Container, header, padding from host tokens.
5. **Gate M2 at the composition level** — does the *page* read as one product, even though the donor palette differs?
6. **Human judgment.** Whether `bounded` coherence is acceptable for this surface. This is a **named human authority**, not a machine verdict.

### The claim under test

I claim B5's ceiling is "clearly the same product, visibly a different surface," and that parity is structurally unreachable. The mechanism claim is not in doubt — non-inheritance across origins is a boundary property. What *is* in doubt is whether the achievable ceiling is **good enough**, and that is an empirical product question this experiment answers.

### Falsifier

**If negotiated mode plus chrome suppression plus boundary styling reaches human-acceptable coherence, then B5's ceiling is higher than I have claimed** — and more surfaces can remain cheaply iframed instead of being absorbed at 273 patch lines. That would be a genuinely valuable falsification: it would make the framework *cheaper*, and it would weaken the case for treating theming as a driver of reuse shape.

**Conversely**, if even chrome-suppressed, mode-negotiated framing reads as a foreign application, then theming is confirmed as a first-class feasibility constraint on reuse shape, and S2-L1/S2-L4 must treat "must be themeable" as eliminating cross-origin candidates deterministically.

### Stop rule

If X-3 shows B5 cannot reach acceptable coherence **and** X-1 shows native mounting costs an order of magnitude more than framing, the visual axis of the "every donor requires bespoke surgery" stop rule has fired. Mixed-shape assembly would then be invalid as a *visual* proposition regardless of its data-plane merits, and that must be escalated rather than averaged away.

---

## Cross-experiment reconciliation

These three do not merely run in parallel; their results interact.

| If… | and… | then… |
|---|---|---|
| X-1 reaches parity cheaply | X-3 ceiling is unacceptable | Native mounting becomes the default; theming drives reuse shape; expect high absorption cost |
| X-1 is expensive | X-3 ceiling is acceptable | Framing becomes the default; theming stops constraining reuse shape; coherence is achieved by composition, not cascade |
| X-2 passes at corpus scale | either | The component layer supplies themeable variety and the pack picker is meaningful |
| X-2 fails below ~60% | either | The pack picker governs owned surfaces only; harvested components ship fixed-palette |
| X-2 passes machine gates but fails human review | any | **The gates are measuring the wrong thing.** Highest-priority result; halts gate design, not just the experiment |

The last row is the one to watch. Every other outcome adjusts a parameter. That one invalidates the instrument.

---

## What none of these experiments do

- They do not execute donor source, build, deploy or benchmark anything. All three are **designed and `UNEXECUTED`**.
- They do not settle U-D (single pack across console and portal contexts), U-E (same-origin proxy), or U-F (donor dark-mode synchronization under upgrade). Those remain open and are recorded as such.
- They do not calibrate gate M2's threshold (U-G). A threshold that cannot be calibrated to separate human-judged coherent from incoherent compositions means M2 is not a gate — that is a named stop rule, and it must be resolved before M2 can block anything.
