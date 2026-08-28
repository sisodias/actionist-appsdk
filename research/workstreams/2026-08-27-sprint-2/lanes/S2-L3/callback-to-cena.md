# S2-L3 → CENA callback

Lane: `S2-L3` · Owner: `ACTIONIST-S2-L3-SHELL-EDITOR` · Run: `2026-08-27-sprint-2-opus`
Recorded: 2026-08-27 · Post-write smoke: **81 checks, 0 failures, PASS**

Delivery note: `SendMessage` to `CENA` failed — no agent by that name is registered. `ListAgents`
shows four unnamed peer sessions (the other Sprint 2 lanes). Callback delivered in terminal output
and recorded here as the durable receipt.

---

[from: ACTIONIST-S2-L3-SHELL-EDITOR] @CENA: S2-L3 complete. 15 files across the 3 owned dirs only.
Post-write smoke: 81 checks, 0 failures, PASS.

**Headline — Sprint 1's absorb/preserve rule is superseded.** The semantic rule ("absorb a
capability, preserve a destination") fails against the built SISOCRM estate: Teable and Postiz are
both capabilities and got opposite treatments. The estate's own recorded reason is mechanical
(`THEMING-CONTRACT.md:94-102` — custom properties do not inherit across a cross-origin iframe).
Rebuilt both halves of the lane on **cascade-and-session coupling**: predicts 5/5 observed treatments
against the semantic rule's 3/5 with 1 indeterminate.

**The structural claim:** one mechanical axis decides the mount profile, the cost band, *and* which
edits are possible afterwards. The P08 shell contract and the P13 edit model are one fact read twice,
not two frameworks needing reconciliation.

**Delivered.**
P08 — `shell-contract.md` (6 invariants, 4 layers, 4-gate procedure rights→session→cascade→resolve,
4 mount profiles), `navigation-ownership-matrix.json` (16 surfaces / 9 host-owned / 3 forbidden /
14 observed), `archetype-topology.md`, `decision-ledger.json` (8), `lane-state.json`.
P13 — `edit-model.md`, `edit-operation.schema.json` (7 verbs, 5 anchor classes, `coordinate`
structurally **absent**), `authority-rules.json` (21 cells), `worked-traces.md` (3 traces, all
embedded JSON parses), `upgrade-replay-model.md`, `decision-ledger.json` (9), `lane-state.json`.
Lane — `checkpoint-1-prior-evidence.md`, `lane-synthesis.md`, `smoke.py`.

**Cost finding — the coupling gates are also the estimate.** Measured patch surface:
`preserved_framed` 17–62 lines; `absorbed_native` 273 lines / 9 files, touching auth strategy, SSR
hop, DB provider and a donor's public API regex. **A07 ("adaptation is 1–2% of the work") is false as
a universal** and roughly true for iframed donors only.

**Two self-caught defects, both fixed from source rather than by relaxing the check.** The P13 ledger
declared 7 accepted / 2 open where the data showed 8 / 1. And the smoke caught `data-binding` denying
with no named constraint or alternative — the exact "denial without an alternative" defect the model
forbids.

**Highest-severity open item (U-3).** The built estate has **no host tenant switcher**, and Teable's
own space switcher was deliberately left visible to cover for it. That is an INV-S3 authority-boundary
hole and the first thing a pilot must close.

**Handoff edges.** S2-L2: you own token values and binding, I own the operation that writes them —
`theme` on `intact_service` is **denied**, so the binding schema should not offer a cross-origin path
the edit model refuses. S2-L4: `replace` on a donor escalates to a composition act; the composer owns
port-compatibility filtering before the client sees a choice. S2-L1: mount profiles map to your
packaging shapes. S2-L5: the replay gate is a release gate — DEGRADED/ORPHANED blocks auto-publish.

**Biggest risks.** U-5 — whether clients accept a bounded surface at all; every AI builder in the
census chose unbounded fallthrough, so refusal quality is the commercial crux, and it is unrun.
U-1 — donor below-full-page feasibility untested; if it fails, `absorbed_native` collapses and the
cost model changes materially.

**Boundary.** research-only · `UNEXECUTED` · `NOT_ADMITTED` · `admitted_blocks 0` · no subagents
dispatched · wrote only owned paths. Nothing was executed — every trace is designed over observed
mechanics. P04/P07 Sprint 2 dirs were seen active (peer lanes) and were not read or touched.
