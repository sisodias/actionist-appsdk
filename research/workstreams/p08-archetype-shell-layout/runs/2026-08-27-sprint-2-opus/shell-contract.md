# P08 Sprint 2 — the Actionist shell contract

Part: P08 · Lane: `S2-L3` · Run: `2026-08-27-sprint-2-opus` · Recorded: 2026-08-27
Owner: `ACTIONIST-S2-L3-SHELL-EDITOR` (Opus 5[1m])
Status: research-only · `DESIGN_ONLY` · `UNEXECUTED` · `NOT_ADMITTED` · `admitted_blocks 0`

---

## 0. Objective, invariants, forbidden couplings, unknowns

**Objective.** Define the boundary between four things that all want to draw chrome on the same
screen — the Actionist **host frame**, the **archetype shell**, **capability navigation**, and
**donor chrome** — such that the boundary is decidable by inspection rather than by taste, and
such that an upgrade of any donor cannot silently move it.

**Invariants (violating any one is a correctness failure, not a styling failure):**

- **INV-S1 — One identity.** Exactly one session issuer per product. A surface that can mint,
  prompt for, or independently refresh a credential is outside the frame.
- **INV-S2 — One URL space.** Every addressable location resolves in host coordinates. A surface
  may own path segments *below* a host-assigned basename; it may never own the basename.
- **INV-S3 — One tenant authority.** Tenant/workspace selection is an authority act. A surface that
  can change its own tenant has crossed an authority boundary, regardless of how the UI looks.
- **INV-S4 — Order is host-assigned.** Surfaces declare navigation *intent*; the host assigns
  position. No numeric position field is ever accepted from a surface (WordPress `$position`
  collision failure, P08 S1 §5.3).
- **INV-S5 — Chrome is deduplicated from both sides.** Where host chrome and surface chrome would
  both render the same affordance, exactly one renders. The built estate does this in both
  directions (`App.tsx:357` suppresses the *host* topbar on donor routes).
- **INV-S6 — Rights precede chrome.** Chrome removal is a licence operation before it is an
  engineering one. Two live cases already found: NocoBase §5.2, Directus MSCL.

**Forbidden couplings:**

- The shell must not couple to a **fixed slot count**. Five areas is falsified as a schema
  (P08 S1 §6.1); it survives only as a budget cap.
- The shell must not couple to a **percentage width**. No surveyed product implements a rail as a
  percentage; specify pixels plus a viewport-class collapse rule.
- The archetype must not couple to the **mount mechanism**. Which archetype a product is, and how a
  given donor is mounted, are independent decisions — conflating them was the Sprint 1 error.
- The host frame must not couple to **donor CSS surviving intact**. Style isolation is one-way in
  every surveyed mechanism; plan to restyle deliberately.

**Unknowns carried in, not resolved here:**

- **U-1** Donor below-full-page feasibility is untested (Sprint 1 hold, P08 E3 unrun).
- **U-2** No user test of any nav topology exists; no published evidence ties area count to task
  success in any surveyed product.
- **U-3** Tenant-switch behaviour in the built estate is `unknown` — `workspaceId` is threaded,
  no switcher UI was found.
- **U-4** Whether clients accept a bounded surface at all (X-P13-2) — the largest commercial risk.

---

## 1. The correction this contract is built on

Sprint 1 P08 §5.3 stated the absorb/preserve rule semantically:

> Absorb the navigation when the donor supplies a **capability**; preserve it when the donor
> supplies a **destination**.

The SISOCRM inspection tested that rule against a **built** estate and it did not survive:

- **It fails to discriminate.** Teable-the-grid and Postiz-the-scheduler are both capabilities under
  that vocabulary. Teable got a native, non-iframe mount with ~30 stub files vendored into the host
  tree; Postiz got an iframe with a header naming the donor. Same class, opposite treatment.
- **The estate's recorded reason is mechanical.** `THEMING-CONTRACT.md:94-102`: *"A cross-origin
  iframe is a hard CSS boundary — custom properties do not inherit across it… This is the concrete
  reason the iframe had to go."*
- **The prediction was inverted on its own best case.** Sprint 1 predicted data-model nav would be
  preserved in-pane. The purest data-model donor in the estate was the one absorbed natively.

**Therefore: the absorb/preserve axis is mechanical, not semantic.** What decides the treatment is
whether the surface must share the host's **CSS cascade** or the host's **session**.

**What survives from Sprint 1 unanimously:** the *nav* half. No donor's own navigation was ever
adopted into the rail; the rail is 100% host-authored. Narrowed to "never inherit donor nav," the
estate confirms the rule without exception.

**Honest limit on this correction.** The estate is a sample of one vertical, read as source and
checked-in tests rather than an observed run. It is strong evidence about what a team decided under
real constraints; it is not proof that cascade-and-session coupling generalises. It is adopted here
because it is the only axis that *predicts the observed treatments*, and because its failure mode is
cheap to detect (§6, F-P08-COUPLING).

---

## 2. The four layers, and what each may own

The dispatch names four things. They are not four halves of one boundary — they are a stack, and
each layer may only take from the layer below.

| Layer | What it is | Owns | May never own |
|---|---|---|---|
| **L0 Host frame** | The Actionist application itself | Identity, session, tenant authority, URL space, global search entry, notification entry, settings route, theme token resolver, rail rendering and ordering | Domain vocabulary; anything archetype-specific |
| **L1 Archetype shell** | The nav skeleton of a product *kind* (`case_workflow`, `portal`, …) | Destination set and their names, the domain vocabulary, archetype-specific persistent surfaces (deadline clock, SLA timer, audit trail affordance) | Identity, tenancy, URL basenames, ordering primitives |
| **L2 Capability navigation** | Navigation *within* a host destination | Sub-tabs, view switchers, record routing below an assigned basename | Any top-level rail entry; any route not under its basename |
| **L3 Donor chrome** | The surface a donor draws for itself | Its internal below-the-fold structure, its engine-shaped internals | All of L0. Any nav row named after itself. Any modal that must cover the host viewport |

**The load-bearing asymmetry:** L0 is fixed across every Actionist product. L1 varies per archetype.
L2 varies per destination. L3 varies per donor. A contract that lets L3 reach into L0 — a donor
login, a donor tenant switcher, a donor-authored rail position — is broken regardless of appearance.

### 2.1 The eight host-owned surfaces (L0), with built receipts

Sprint 1 asserted eight host-owned surfaces from OSS precedent. The built estate corroborates seven
and leaves one unknown. That distinction is preserved rather than smoothed:

| Surface | Contract | Built-estate receipt | State |
|---|---|---|---|
| Identity / session | Host, absolutely | Teable login deleted from live path; browser receives neither Teable cookie nor bearer token (`LANE-AUTH-RESULT.md`) | observed |
| Nav rail | Host, sole source | `GroupedRail.tsx:43-65`, one literal array | observed |
| Settings entry | Host route, donor may render the pane | `App.tsx:262-263` | observed |
| Global search | Host owns the keystroke, may delegate inward | `App.tsx:358-364` — ⌘K posts into the donor frame on donor routes | observed |
| Notifications | Host trigger, donor may render the panel | `App.tsx:309` | observed |
| Theming tokens | Host, one mapping file | `THEMING-CONTRACT.md:38-49` | observed |
| URL space | Host, flat paths, no donor prefixes | `pageNames` (`App.tsx:22-39`) | observed |
| Tenant switch | Host, by contract | **No switcher UI found**; `workspaceId` threaded (`App.tsx:200`). Teable's own space switcher was *deliberately left visible* because the host had none | **unknown — U-3** |

**U-3 is a real gap, not a formality.** The one host surface with no built implementation is the one
where a donor's chrome was knowingly left in place to cover for it. That is exactly the shape of an
INV-S3 violation waiting to happen, and it is the first thing a pilot must close.

---

## 3. The mount-coupling decision procedure

Replaces the semantic absorb/preserve rule. Four ordered gates; the first that fires decides.
Each is answerable by inspection, before any design work.

```text
G0  RIGHTS      Does the licence permit removing or altering this surface's chrome?
                NO  -> PRESERVE_INTACT (or do not adopt). Stop.
                Read the LICENSE body, never the badge. 28/104 repos returned NOASSERTION,
                and reading bodies moved verdicts in both directions.

G1  SESSION     Must this surface act as the host's user, with no second credential?
                YES -> requires session coupling. Continue to G2 with session=required.
                NO  -> session=independent.

G2  CASCADE     Must this surface inherit host design tokens at runtime?
                YES -> requires cascade coupling. Custom properties do not cross a
                       cross-origin iframe boundary. This is the gate that decided Teable.
                NO  -> cascade=independent.

G3  RESOLVE     session=required OR cascade=required -> ABSORB (native mount, same document)
                both independent                    -> PRESERVE (framed, hard boundary)
```

### 3.1 The resulting mount profiles

| Profile | Coupling | Mechanism | Cost signal (built estate) | Estate examples |
|---|---|---|---|---|
| `absorbed_native` | session and/or cascade required | Mounted in the host document; donor context replaced by stubs | **273 lines / 9 files** — touches auth strategy, SSR hop, DB provider, public API schema | Teable grid |
| `preserved_framed` | neither required | Cross-origin iframe; hard CSS and JS boundary | **17–62 lines** — CSP `frame-ancestors`, `X-Frame-Options` | Postiz, OpenWork, AFFiNE, Documenso, Papermark |
| `preserved_identity_erased` | neither required, but brand must not surface | Framed, plus a chrome-suppression patch | **130 lines / 6 files** | AFFiNE as "SISO Docs" |
| `service_no_ui` | n/a — no surface at all | Backend only; host renders everything | not separately priced | Documenso signing backend |

**The gradient is the finding, and it prices A07.** Sprint 1 carried assumption A07 —
*"adaptation is always only 1–2% of the work."* Against measured patch surface it is **false as a
universal and roughly true in a bounded region**: preservation really is 17–62 lines; absorbing
identity and the data layer is an order of magnitude more, and the estate's own strategy doc says
*"Not a weekend each."*

**Therefore the coupling gates are also the cost estimate.** Answering G1/G2 does not merely pick a
mechanism — it selects a cost band an order of magnitude apart. That makes the procedure worth
running before a quote, not just before an implementation.

### 3.2 What the procedure explains that the semantic rule could not

| Surface | Semantic rule predicts | Mechanical rule predicts | Observed | Verdict |
|---|---|---|---|---|
| Teable grid | preserve (data-model nav in-pane) | **absorb** (cascade required for theming) | absorbed natively | mechanical correct |
| Postiz | preserve (destination) | **preserve** (neither coupling) | iframed, donor named | both correct |
| Teable settings pane | absorb (capability) | **absorb** (must render as host chrome) | absorbed | both correct |
| AFFiNE docs | ambiguous | **preserve** + erase identity | framed, no header | mechanical correct |
| Documenso | preserve (legally-critical ceremony) | **preserve** (neither coupling) | service, no rail entry | both correct |

The mechanical rule is right in 5/5; the semantic rule is right in 3/5 and indeterminate in 1.

### 3.3 The one case the mechanical rule does *not* settle

`preserved_identity_erased` requires a **third** input the coupling gates do not supply: whether the
donor's brand may surface to the client. That is a commercial and licence question (INV-S6), not a
mechanical one. AFFiNE and Postiz have identical coupling answers and different chrome treatment.

**So the full profile is `(coupling, brand_exposure)`,** and the contract states both. Recording this
rather than forcing it through the mechanical axis is deliberate — the Sprint 1 failure was exactly
the habit of making one axis explain everything.

---

## 4. Navigation ownership — the rule that survived

**Rule N1 — the host authors every rail entry.** Unanimous in the built estate: one literal array,
`GroupedRail.tsx:43-65`. No donor contributes a row.

**Rule N2 — donors declare intent, never position.** `{intent, label, icon, routeRef}` and nothing
else. INV-S4.

**Rule N3 — a destination is a place the client goes on purpose; there should be few.** The built
estate shipped **4 groups / 13 destinations**, against 11 planned. Two unplanned destinations
(`Tables`, `AI`) appeared during the build.

**Rule N4 — a donor-named destination is a defect with a named owner.** `Tables` shipped as a rail
destination in direct contradiction of `TEABLE-ABSORPTION-BRIEF.md:16,18` (*"The broker never clicks
'Tables'"*). The brief lost to the build.

**The generalisable lesson from N3+N4 together:** rail entries are not added by decision, they are
added by *drift* — a donor arrives, needs somewhere to live, and gets a row because that is the
cheapest thing to do that day. The count grew 11 → 13 and the prohibition was breached, in the same
estate that wrote the prohibition down. A budget that is not machine-checked is not a budget.

**Rule N5 — the destination budget is a checked count, not a convention.** The built estate already
exposes `data-verify-nav-groups` and `data-verify-compact-destinations`. The contract requires the
count to be asserted against a declared cap, so growth fails a check rather than passing silently.

**Rule N6 — five is a cap, not a schema.** Retained from Sprint 1's verdict on A15 and consistent
with Carbon's published rule (left panel when >5 secondary items) and its "no three tiers"
constraint. Depth limit 2.

---

## 5. Geometry — pixels with a collapse rule, never a ratio

Restated from Sprint 1 unchanged, because its evidence is strong and this lane found no reason to
move it:

- Host rail **320px** at ≥1056px viewport — the evidenced floor for a surface keeping nested nav
  inline, corroborated three times within 4px (Zendesk 320, Grafana 320, Metabase 324).
- Collapse to an icon rail (~48–80px) below that; bottom bar or overlay below ~768px.
- **Not a percentage.** No surveyed product implements a rail as a percentage. The only proportional
  rule found anywhere is VS Code's `min(300px, viewport/4)` — 25/75, capped.

**Collapsing must not change meaning.** The built estate asserts collapsed and expanded rails render
the same destination set (`GroupedRail.tsx:5-6,138,144`). Adopted as contract: collapse is a
presentation state, never an information-architecture state.

---

## 6. Falsifiers

| ID | Claim | Falsifier |
|---|---|---|
| `F-P08-COUPLING` | Cascade-and-session coupling decides mount mechanism | A donor requiring neither is nonetheless absorbed natively for a reason that is not brand exposure — or one requiring cascade inheritance ships framed and themed correctly |
| `F-P08-COST` | Coupling predicts an order-of-magnitude cost band | A second estate where absorbed and preserved donors cost within 2× of each other |
| `F-P08-NAV` | The host authors every rail entry | An estate that adopts a donor-authored rail row and suffers no second-silo effect |
| `F-P08-BUDGET` | An unchecked destination budget drifts upward | A destination cap held across a full build with no machine check |
| `F-P08-RAIL` | 320px earns its pixels | >50% of users collapse permanently and never re-expand (E2, unrun) |
| `F-P08-BELOW` | Donors can render below full page | **U-1 — untested.** If most donors assume the document root, `absorbed_native` collapses toward framing and the cost model changes materially |

`F-P08-BELOW` is the weakest joint in this contract and is inherited unresolved from Sprint 1. The
whole `absorbed_native` profile rests on a feasibility assumption that no one has run.

---

## 7. What this contract does not establish

- **Nothing was executed.** No shell was built, mounted, rendered or measured. Every estate receipt
  is read from source files and checked-in test assertions, not from an observed run.
- **No user was tested.** U-2 stands: no published evidence links nav topology to task success.
- **The estate is one vertical.** Cascade-and-session coupling predicts 5/5 observed treatments in
  *this* estate. That is the strongest local evidence available and it is not a generalisation proof.
- **Tenant switching is unknown (U-3)** and is the one L0 surface with no built implementation.
- **Donor below-full-page feasibility is untested (U-1).**
- **The `(coupling, brand_exposure)` second axis is asserted from two examples** — AFFiNE and Postiz.
- No accessibility, performance, i18n/RTL or security review of any shell arrangement.
- No decision is authorized by this document. `NOT_ADMITTED`.
