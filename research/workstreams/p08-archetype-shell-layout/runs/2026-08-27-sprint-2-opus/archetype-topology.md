# P08 Sprint 2 — archetype shell topology (L1)

Part: P08 · Lane: `S2-L3` · Run: `2026-08-27-sprint-2-opus` · Recorded: 2026-08-27
Status: research-only · `UNEXECUTED` · `NOT_ADMITTED`

## The rule the dispatch asked for explicitly

**Do not assume the five-area or 20/80 shell is universal.** This lane does not. Sprint 1 falsified
the five-area rail at the semantic level from source: it is a compile-time 5-tuple whose slot ids
already carry unrelated labels across two personas in the same repository (`recon` = "Team" and
"Tasks"; `content-gen` = "Tools" and "Insights"). The built SISOCRM estate independently chose a
different shape — **4 groups / 13 destinations** — and neither matches the other.

**Two independent estates, two different topologies, neither five.** That is the empirical case
against universality, and it is stronger than the argument was.

## What is universal, and what is not

| Layer | Universal? | Why |
|---|---|---|
| L0 host frame (the 8 surfaces) | **Yes** — by invariant | Identity, tenancy and URL space are correctness boundaries, not preferences |
| L1 destination set and names | **No** | Domain vocabulary is the archetype's; a shared set would be the five-area error repeated |
| L1 persistent surfaces | **No** | A deadline clock is load-bearing for `case_workflow` and noise for `crm` |
| Geometry (320px + collapse) | **Default, not invariant** | Fixed pixels with a viewport-class collapse rule; `field_operations` overrides it entirely |
| Destination budget | **Yes** — as a checked cap | Cap ≤7, depth ≤2 (Carbon: >5 secondary items → left panel; no three tiers) |

## Per-archetype topology

`case_workflow` is specified in full because it is primary for 6/17 industries and is the build-first
recommendation. The rest state only where they **diverge from the L0 default**, which is the useful
information.

### `case_workflow` — full specification

- **Persistent surface:** the deadline clock. Statutory deadlines make time-to-breach a first-class
  surface, not a widget. **A slot rail cannot express it** — this is where a pure rail model fails.
- **Destinations:** matter-centric. The state machine must be visible in navigation, not buried.
- **Second shell:** `portal` is its most common companion, and for `law_firms` the privilege boundary
  makes it a **separate shell with its own identity** — not a tab. Two shells, one product.
- **Geometry:** L0 default (320px).

### Divergences elsewhere

| Archetype | Diverges how |
|---|---|
| `portal` | Untrusted external identity. Minimal chrome; **must never expose internal nav, search or tenant switching.** Host-owned chrome here is a security requirement, not an aesthetic one |
| `field_operations` | **Rejects the L0 geometry entirely.** Offline-first, one-handed, camera-first, gloved hands. A 320px desktop rail is the wrong primitive — the archetype that most clearly falsifies a shared shell |
| `support_desk` | Queue + SLA clock persistent surface |
| `finance_ops` | Audit trail reachable from every surface — an argument *for* a persistent rail |
| `scheduling` | Calendar wants the viewport; rail narrow or collapsed by default |
| `inventory` | Grid-dense; the embedded-grid pattern applies directly |
| `learning_content` | Two identities (admin, learner) — likely two shells |
| `crm` | Most template-saturated, weakest differentiation. Be conventional; spend the budget elsewhere |
| `marketplace` | **Do not build.** Primary for none and secondary for none of the 17 industries |

## Coverage — the honest number, unchanged

Restated from Sprint 1 because the arithmetic is exact and the temptation to quote the flattering
version is permanent:

- Primary archetype only: **5 archetypes → 82.4%** (14/17).
- Primary **and** secondary both required: **no subset of ≤7 reaches 80%**; 8 → 88%.
- `case_workflow` + `portal` alone: **touch** 11/17 (65%), **satisfy** 4/17 (24%).

The gap between *touch* and *satisfy* is the finding. An industry missing its secondary archetype
does not receive 80% of a product — it receives a product with a hole exactly where the client will
look. **Quote 24%, not 65%.**

*Input honesty:* the arithmetic is exact; its inputs are the b2b shelf's own `I`-class primary/
secondary judgements, not measured demand.

## Falsifier

**Vocabulary isomorphism.** For the three `case_workflow` industries, write out the state machine,
deadline rules and document set, then compute pairwise structural overlap after renaming. If
isomorphic, one product with a vocabulary layer serves all three — much cheaper. **If not — especially
in the deadline rules — the rules engine is the actual product, and "generate an app" is the wrong
frame for the highest-demand archetype.** Unrun.

## Not established

- No user test of any topology (U-2). No published evidence links nav topology to task success.
- The persistent-surface claims are `hypothesis`; no estate implements a deadline clock.
- Coverage arithmetic depends on unmeasured primary/secondary assignments.
