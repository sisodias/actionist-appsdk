# S2-L3 lane synthesis — shell and editing framework

Lane: `S2-L3` · Owner: `ACTIONIST-S2-L3-SHELL-EDITOR` (Opus 5[1m]) · Run: `2026-08-27-sprint-2-opus`
Recorded: 2026-08-27 · research-only · `UNEXECUTED` · `NOT_ADMITTED` · `admitted_blocks 0`

---

## The result in one paragraph

The Sprint 1 rule for deciding what a host absorbs and what it preserves was **semantic** — absorb a
capability, preserve a destination — and the only built estate available **contradicts it**: two
donors that are both capabilities under that vocabulary received opposite treatments, and the
estate's own recorded reason is mechanical (*custom properties do not inherit across a cross-origin
iframe*). This lane therefore rebuilds both halves of its scope on the mechanical axis:
**cascade-and-session coupling**. That single axis decides which mount profile a donor gets, which
cost band it lands in (an order of magnitude apart, measured in patch surface), *and* which edit
operations are possible on it afterwards. The shell contract and the edit model are consequently not
two frameworks that must be reconciled — they are one mechanical fact read twice, which is the
strongest structural claim this lane makes and the one most worth attacking.

## What changed from Sprint 1

| Sprint 1 position | S2-L3 position | Why |
|---|---|---|
| Absorb capability / preserve destination | **Coupling: cascade or session required → absorb; neither → preserve** | Semantic rule right 3/5 with 1 indeterminate; mechanical rule right 5/5 on the same estate |
| Absorb/preserve is a design judgement | **It is a cost estimate** — 17–62 lines vs 273 lines / 9 files | Measured patch surface; A07 false as a universal |
| Seven verbs, one surface | **Seven verbs × three substrates**; substrate changes the authority answer, never the vocabulary | The three substrates have different physics; the verb set does not need to |
| Store intent not mutation | Kept, and **anchor class made the predictor** of upgrade survival | Verb and authority level do not predict it; anchor class does |
| Five-area shell, 20/80 | **Budget cap ≤7 and depth ≤2; pixels with a collapse rule** | Two estates, two topologies, neither five; no product implements a rail as a percentage |

## The four artifacts that carry the argument

1. **`shell-contract.md`** — six invariants, four layers (host frame / archetype shell / capability
   nav / donor chrome), the four-gate coupling procedure (rights → session → cascade → resolve), and
   four mount profiles with measured cost bands.
2. **`navigation-ownership-matrix.json`** — 16 surfaces, 9 host-owned, 3 forbidden, 14 observed with
   built receipts, 1 unknown.
3. **`edit-operation.schema.json` + `authority-rules.json`** — the closed seven-verb set over three
   substrates (21 cells), five anchor classes with `coordinate` **structurally absent**, and four
   outcomes whose required fields are enforced by `if/then` in the schema.
4. **`worked-traces.md`** — three heterogeneous traces chosen to fail differently: one succeeds and
   survives an upgrade, one is denied for a mechanical reason, one succeeds and is then **degraded**
   by an upgrade.

## Deterministic vs judgement vs human authority

The program asked for these to be separated. They are:

| Step | Kind | Note |
|---|---|---|
| Rights gate (G0) | **Deterministic** — read the LICENSE body | Never the badge: 28/104 repos returned NOASSERTION |
| Session coupling (G1) | **Deterministic** | Does the surface need a second credential? |
| Cascade coupling (G2) | **Deterministic** | Must it inherit host tokens at runtime? |
| Mount profile (G3) | **Deterministic** | Falls out of G1/G2 |
| Brand exposure | **Human authority** | Commercial and licence question; not mechanical |
| Verb compilation | **Model judgement** | Client language → typed operation; may return UNDERDETERMINED |
| Authority answer | **Deterministic** | Table lookup on (verb, substrate, scope) |
| Anchor selection | **Model judgement, deterministically constrained** | The enum is closed; the choice within it is judgement |
| Upgrade replay states | **Deterministic** | Anchor present/absent, constraint satisfiable/not |
| DEGRADED / ORPHANED disposition | **Human authority** | Blocks auto-publish by design |
| Escalation acceptance | **Human authority** | A recorded contract transition, never an implicit upgrade of a denial |
| Visual acceptability | **Human authority — no automated gate claimed** | U-6; no local numeric threshold exists |

## Contradictions and rejected alternatives

- **Rejected: keeping the semantic absorb/preserve rule.** It does not discriminate the two donors it
  most needs to. Recorded as superseded in `decision-ledger.json` D-P08-S2-01 rather than deleted.
- **Rejected: forcing chrome treatment through the mechanical axis.** AFFiNE and Postiz have identical
  coupling and different chrome. The profile is `(coupling, brand_exposure)` — two axes, stated as
  two, because the Sprint 1 failure was making one axis explain everything.
- **Rejected: an eighth verb for donor-specific edits.** It would make the vocabulary substrate-
  dependent and re-import the coupling into the edit language. Donor-specific changes are chrome
  suppression (a `remove`) or an escalation.
- **Rejected: editor-enforced permission.** Bypassed by upgrades, migrations, agents and direct API
  writes. Permission travels in the persisted record (Puck's `readOnly`-in-`BaseData` shape).
- **Contradiction recorded, not resolved:** the built estate breached its own written prohibition —
  `Tables` shipped as a rail destination against an explicit brief. The brief lost to the build.
  Hence D-P08-S2-05: an unchecked budget is not a budget.
- **Contradiction inherited:** the estate's runtime route manifest still describes a Plane-hosted
  architecture the shipped shell abandoned. Documents describing a host that no longer exists is the
  same failure class as a five-tuple whose ids no longer mean anything.

## Handoff edges

| Edge | Position |
|---|---|
| **S2-L2 (P07 tokens)** | L2 owns token values, the semantic token contract and donor-token binding. S2-L3 owns the typed operation that requests a change and the authority answer. `theme` on `intact_service` is **denied** — the binding schema should not offer a cross-origin path that the edit model refuses |
| **S2-L1 (module contracts)** | Mount profiles and coupling gates should be the same vocabulary as L1's packaging shapes. `absorbed_native` / `preserved_framed` map to embedded module / intact service |
| **S2-L4 (composer)** | `replace` on a donor **escalates to a composition act**, not an edit. The composer owns candidate port-compatibility filtering *before* a client sees a choice |
| **S2-L5 (runtime/release)** | The upgrade replay gate is a release gate: DEGRADED or ORPHANED blocks auto-publish. Multi-object rollback must restore the edit set, not only the artifact |

## Stop / kill rules

- **Kill `absorbed_native`** if the donor admission test (U-1) shows most donors cannot render below
  full page. The cost model changes materially and the profile collapses toward framing.
- **Kill the wide rail** if >50% of users collapse permanently and never re-expand.
- **Stop before any chrome work** on a donor whose licence forbids chrome alteration (G0).
- **Stop the bounded-editor thesis** if pilot clients treat refusals as product failure regardless of
  alternative quality (U-5) — that is the commercial falsifier, not an engineering one.
- **Reconsider the replay gate** if DEGRADED fires so often it is routinely bypassed. A bypassed gate
  is worse than no gate because it carries the appearance of safety.

## Self-challenge on the load-bearing claims

The program requires the owner to attack its own conclusions. Three attacks, and how they land:

1. **"The mechanical axis is one estate, one vertical, read as source not as a running system."**
   This lands. It is the strongest local evidence available and it is not a generalisation proof.
   It is adopted because it *predicts* where the semantic rule does not, and because `F-P08-COUPLING`
   makes it cheap to falsify. If a second estate absorbs a donor requiring neither coupling for a
   non-brand reason, the axis is wrong.
2. **"5/5 vs 3/5 is a tiny sample dressed as a scoreboard."** This lands too. Five donors is not a
   denominator. The claim is stated as the mechanical rule *predicting this estate*, never as a
   validated law, and the count is quoted with its size attached.
3. **"One mechanical fact read twice is an elegance argument, and elegance is not evidence."** Partly
   lands. The coherence is genuine — the cross-origin cascade fact is independently why Teable was
   re-mounted and why `theme` is denied on a framed donor. But coherence is a reason to *prefer* the
   model, not proof it is right. Recorded as D-P13-S2-02 with its own falsifier rather than as a
   structural guarantee.

## What this lane did not establish

- **Nothing was executed.** No shell built, no donor mounted, no edit compiled or applied, no upgrade
  replayed. Every trace is designed over observed mechanics.
- **No user was tested** (U-2), and **no client acceptance evidence exists** (U-5).
- **U-1, U-3, U-6, U-7 all stand.** U-3 (no host tenant switcher, donor chrome covering for it) is the
  highest-severity open item and the first thing a pilot must close.
- The built-estate receipts are read from source files and checked-in test assertions, **not from an
  observed run**.
- Absence claims are scoped to paths actually read — `grep`/`rg`/`find` were unavailable for
  navigation, so `ls` plus exact-path reads were used throughout.
- No decision is authorized. `NOT_ADMITTED`, `admitted_blocks 0`.
