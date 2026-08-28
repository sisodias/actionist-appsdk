# P08 — First principles

**Run:** `2026-08-27-sprint-1-fable` · **Observed:** 2026-08-27 · research-only, `NOT_ADMITTED`

---

## 1. Reason from what a shell actually is

A shell is not decoration around an app. It is the answer to three questions the user asks before every action:

1. **Where am I, and what else exists?** (orientation)
2. **Who am I here, and on whose behalf?** (identity and tenancy)
3. **Where do I go next, and will it still be there tomorrow?** (addressability and stability)

Every option in the matrix is a different allocation of who answers those three. The reason the host must own identity, tenancy, settings entry, search, notifications and cross-app navigation is not aesthetic consistency — it is that **a donor answering question 2 creates a second identity, and a donor answering question 3 creates a URL the host cannot honour.** Those are correctness failures, not styling failures. Everything else is negotiable.

This is why the SISOCRM ownership doc's framing is the right one and worth restating: the expensive mistake is not owning too much code, it is *"owning the security-critical parts while renting the parts that define your product."* The shell is the most product-defining surface there is, and the least valuable thing to receive patches for.

---

## 2. The strongest thing this run found is a contradiction inside our own estate

We inherited a five-area shell from ISSO and made it the AutoSaaS default. Reading the source shows three things at once:

- The five areas are a **compile-time 5-tuple** with five frozen product ids and hotkeys `⌘1`–`⌘5`. This is not a convention that can be flexed; six sections is a type error.
- The ids **have already lost their meaning** inside the same repository. A slot whose id no longer predicts its content is a positional array wearing a capability name.

  **Verified receipt (`P08-SR-055`).** The section-level pairs, read from source across all
  three rails:

  | slot id | agency rail | model rail | content-gen rail |
  |---|---|---|---|
  | `hub` | Overview | Live | Hub |
  | `intelligence` | Content | Chat | Intelligence |
  | `recon` | **Team** | **Tasks** | Recon |
  | `agents` | Webcam | Menu | Agents |
  | `content-gen` | **Tools** | **Insights** | Content Gen |

  **The evidence is cross-rail, not within-rail.** The content-gen rail is fully self-consistent
  — every id matches its label — so the claim is *not* that ids never predict labels. It is that
  **the same id carries unrelated labels across personas**: `recon` is "Team" for the agency and
  "Tasks" for the model; `content-gen` is "Tools" and "Insights". A slot whose meaning changes
  per persona is a positional array wearing a capability name.

  *Provenance note.* The lane owner briefly disputed these labels after an extractor that
  scanned from `label:` to `product:` across a nesting boundary, pairing nested `items[]` labels
  with the following section's product. Re-extraction by walking to each section object's own
  opening brace confirms the receipt above. The dispute is recorded rather than erased because
  the failure mode — a regex silently crossing a structural boundary — is exactly the kind of
  error this packet's evidence standard exists to catch, and it caught it.
- The ISSO application itself **does not obey it**. There are 8+ top-level route groups, and the `portal/` area alone holds 20+ compliance routes that no five-slot rail reaches.

So the artifact we were treating as validated precedent is, on inspection, a rail component that the very application it came from has already outgrown. AutoSaaS said as much at birth (*"without freezing UI forever"*) and never extracted it. The master synthesis reached the right verdict by argument; this run supplies the receipt.

**The generalizable lesson:** an inherited default with a caveat attached and no extraction is not evidence, it is a habit. We were one dispatch away from generating every client product against a five-slot rail whose slots mean nothing.

---

## 3. Where the SISOCRM estate already reasoned this out correctly

`FROZEN-PAGE-SKELETON.md` is the most valuable artifact in the local estate for P08, and it is valuable because of what it *refuses* to do. Eleven host-owned pages, twenty-odd donors folded in beneath them, and **not one donor holding a nav row named after itself.** Teable appears three times, invisibly, every time.

The reasoning behind that is explicit in the Teable brief and it generalises cleanly:

> A separate donor page becomes a second silo nobody updates.

That is the real cost of preserving donor navigation, and it is not a UI cost. Two nav entries over one concept produce two lists over one dataset, and users update the wrong one. **Navigation absorption is a data-integrity decision disguised as a layout decision.** That reframe is what makes the absorb-vs-preserve rule tractable: absorb the capability, preserve the destination, and keep destinations to at most one or two per product because each one is a place the product's coherence can crack.

SISOCRM chose exactly one whole-slice donor (Tasks = Plane). That is a sample of one, but it is a sample of one that thought about it.

---

## 4. The 20/80 concept survives; the number does not

The proposal was a 20% host rail and an 80% app pane. Across nineteen measured shells, **no product implements a rail as a percentage.** They are all fixed pixel constants that happen to be ~20% at one viewport — Carbon's 256px is 20% at 1280px and 13% at 1920px. The only genuinely proportional rule found anywhere is VS Code's `min(300px, viewport/4)`, which is 25/75 and capped.

Two further facts change the specification:

- Widths cluster into **two functional classes**, not a continuum. ~160px (WordPress) forces donors to flatten and use flyouts. **~320px is the evidenced floor for a donor keeping nested nav inline** — corroborated three times independently and within 4px (Zendesk 320, Grafana 320, Metabase 324).
- Only one vendor in the corpus publishes a *rationale* rather than a token: Carbon's "more than five secondary items" rule, plus "does not support three tiers of navigation." Everything else is asserted.

So the honest specification is **a pixel width with a viewport-class collapse rule, not a ratio** — and choosing the width is really choosing whether donors may keep their hierarchy. That is a more useful decision than arguing about a percentage.

**The falsifier is unusually clean.** Ship it collapsible with per-user memory and no explanation. If most users collapse it and never return, it did not earn its pixels. That is a behavioural verdict available for the cost of a toggle, and design debates rarely get one that cheap.

---

## 5. Three vendor admissions that eliminate whole option families

These matter more than any preference, because they are the vendors documenting their own limits:

1. **Style isolation is one-way, everywhere.** qiankun v3 calls it *"a one-way boundary"*: it stops donor CSS escaping and does **not** stop host CSS entering. JD's micro-app says the same. **Therefore: plan to restyle the donor deliberately, because you will restyle it accidentally otherwise.** Any option premised on a donor arriving visually intact is mispriced.

2. **Portaled overlays break in every mechanism.** In qiankun, a modal portaled to `document.body` falls outside the `@scope` root and renders unstyled. In an iframe, wujie documents that modals *"can only display inside the iframe and cannot cover the whole page."* Under a transformed ancestor, stacking contexts are atomic. **Modals are where donor absorption visibly fails**, and every donor has modals.

3. **Sharing one React tree across a donor boundary is unreliable by vendor concession.** Module Federation's `singleton` defaults to `false`; even `true` is defeated by a missing trailing slash. That MF ships a `Bridge` *"to ensure React contexts and component trees between different applications are isolated"* is the maintainers agreeing that the shared-tree model does not hold.

Add the browser-policy reality — `SameSite=Lax` excludes iframe navigations, Firefox partitions by default since 103, Storage Access requires **transient user activation** so silent SSO on load is unavailable — and iframe isolation is revealed as the option that is cheapest to mount and most expensive to live with.

**Net:** the options that survive contact with these constraints are the ones where the host renders the chrome and the donor renders bounded content. That is Option 1, with Option 2 as the mechanism when a donor can declare itself.

---

## 6. The coverage question deserves a worse answer than the one people want

"Which archetypes cover 80% of the 17 industries" invites a satisfying reply: *case_workflow and portal.* The computation does not support it.

- Those two **touch** 11/17 (65%) and **satisfy** only 4/17 (24%).
- Primary-only, 5 archetypes reach 82.4%.
- Requiring both primary and secondary, **no subset of 7 reaches 80%.** You need 8 for 88%, 9 for everything.

The gap between "touch" and "satisfy" is the whole finding. An industry whose *secondary* archetype is missing does not get 80% of a product — it gets a product with a hole where the client portal or the document collection should be, which is exactly the part the client will notice. **The cheap answer only exists if secondary archetypes are optional, and that is a product decision nobody has made.**

This does not change the build order, but it changes the claim attached to it. Build `case_workflow` first because it is primary for 6/17 while having the thinnest clean-licence supply — a demand/supply inversion, not a coverage argument. Build `portal` second because it is the most common secondary and the one donors most often lack. Do not build `marketplace`: it is primary for none and secondary for none.

---

## 7. Licence is a shell constraint, not a backend one

This is the finding most likely to save money, and it is counterintuitive enough to state plainly: **two of the most attractive donor candidates have licences that forbid the specific operation absorption requires.**

- **NocoBase §5.2:** *"It is not allowed to remove or change the brand, name, link, version number, license, and other information about NocoBase on the Software interface, except for the main LOGO in the upper left corner."*
- **Directus MSCL-1.0-GPL:** forbids moving, changing, disabling or circumventing the licence key; GPL-3.0 only on the **fourth anniversary**.

Stripping donor chrome is an engineering task right up until it is a licence violation. And the badge will not tell you: **28 of 104 repos returned NOASSERTION**, and reading the bodies moved verdicts in *both* directions — Directus is not BSL any more, while `single-spa` is plain MIT that GitHub simply failed to classify. NOASSERTION means unclassified, not restrictive.

The directory-scoped pattern compounds it: `ee/`, `enterprise/`, `premium/`, `x-pack`. A donor surface lifted from an `ee/` path is a breach regardless of the top-level licence.

**Therefore the licence gate belongs before the design work, not after it.** It is nearly free and it has already caught two live cases in a single run.

---

## 8. What would change my mind

Stated in advance, so the experiments can actually settle something:

- **On the five-area shell.** If practitioners in the three case_workflow industries score the five-slot nav within noise of a spine-derived nav on first-click accuracy, then five slots was accidentally fine and retiring it wastes effort. I would keep it and spend the budget on the deadline surface instead.
- **On Option 1 (host page shelf).** If the donor admission test shows most donors cannot render below full-page — they assume they own the document root — then the Teable rule is unhonorable, Option 1 collapses toward Option 5 (iframe) or Option 6 (headless), and P08's cost model changes materially. Option 1's rank rests on an untested feasibility assumption, and that is its weakest joint.
- **On the 320px rail.** If collapse-rate exceeds 50% permanent, the wide rail is dead and the pixels belong to the app pane.
- **On archetypes at all.** The b2b shelf's own falsifier still stands and is the deepest one available: if a real `case_workflow` build cannot be re-skinned across law, insurance, mortgage, property management, recruiting and marketing retainers **without rewriting its state machine**, then archetype-level reuse is an illusion and the shelf must be organised per-industry. Everything in this document assumes that falsifier has not fired.

---

## 9. What this run did not establish

No user was tested. No donor was mounted. No shell was built or measured. Every comprehension and activation score in the matrix is judgement calibrated to documented precedent, and the research lanes **looked for and did not find** any published evidence tying nav topology or area count to task success in any surveyed product — an absence reported rather than filled with a plausible number.

A34 — *"the Actionist host can absorb donor identity/settings/navigation cleanly"* — entered this run as **unknown** and leaves it as **unknown**. It is now well-specified and gated, which is progress of a different kind, but it is not evidence.

---

*Research-only artifact. No implementation, deployment, admission, or client/legal clearance is claimed or authorized.*
