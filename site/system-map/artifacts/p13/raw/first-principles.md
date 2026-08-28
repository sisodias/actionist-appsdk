# P13 — Preview, editor and change loop: first-principles synthesis

Part: P13 · Lane: S1-L5 · Run: 2026-08-27-sprint-1-fable
Author: ACTIONIST-S1-L5-RUNTIME (Opus 5[1m]; wave-1 census under Fable 5[1m])
Status: research only · DESIGN_ONLY · UNEXECUTED · NOT_ADMITTED · admitted_blocks 0

---

## 1. The objective, stated precisely

P13's thesis is that clients must alter an assembled product through conversation and direct visual
controls **without dissolving the composition back into arbitrary generated code**.

That phrasing hides the actual difficulty. Every builder on the market lets a client change things.
The hard requirement is the negative clause: after an arbitrary number of client edits, the product
must still be a *composition of governed capabilities* — versioned, upgradeable, qualifiable and
rollback-able — rather than a pile of code that once came from one.

So the objective is not "build an editor". It is: **define the largest set of client-expressible
changes that provably preserves compositional properties, and make everything outside that set an
explicit, priced, recorded transition rather than an accident.**

## 2. Constraints that are not negotiable

| # | Constraint | Source |
|---|---|---|
| C1 | Edits must not grant data, tenant or side-effect authority | Local invariant: models cannot grant themselves authority |
| C2 | Composition scope is the intersection of member scopes, never the union | C4 composition rule |
| C3 | Tokens resolve from one resolver context; no hardcoded literals | C3 token single-source |
| C4 | An edit that cannot be satisfied returns a named unsatisfied constraint, not a guess | ABSTAIN / UNDERDETERMINED discipline |
| C5 | Approval binds to an artifact hash; silence is never approval | Approval-laundering rule |
| C6 | Rights state restricts what may be modified and redistributed | Donor standard: licence notices are release gates |
| C7 | A passing build is not client workflow proof | P14 known, inherited |
| C8 | Preview must not become production | Composition lifecycle invariant |

## 3. The invariant the census actually discovered

The wave-1 commercial census surveyed 30 surfaces and found that the seven bounded edit operations
(add, remove, replace, reorder, theme, text, data-binding) are **near-universal**. They are therefore
not a differentiator and not the design problem.

What differs is behaviour at the boundary, and there are exactly three postures:

1. **Denial by construction** — the disallowed edit has no encoding. Storyblok component whitelists
   and Power Apps managed solution layering are the observed examples. The client cannot express the
   out-of-bounds change because the data model has no slot for it.
2. **Graduated permission** — the edit is expressible but gated by role or flag. Builder.io
   `styleStrictMode`, Webflow role gating.
3. **Unbounded fallthrough** — the edit is expressible and ungated. **Every AI app builder in the
   census.** The same prompt box that performs a bounded edit can rewrite anything, so the boundary
   is decorative.

Lovable is the sharpest case precisely because its binding is good: compile-time stable component
IDs and line-scoped diffs are the strongest binding mechanism observed. Then the escape hatch
dissolves the composition anyway. Good binding does not survive an ungated escape hatch.

**Invariant I-P13-1: a bounded editor is only as bounded as its least-bounded channel.** Adding a
constrained visual editor alongside an unconstrained chat box yields an unconstrained editor.

### Denial by construction is implementable, not aspirational

The OSS census supplied the concrete existence proof the commercial census could not. Puck
(`puckeditor/puck`, MIT, verified by reading the LICENSE body) defines the editable surface entirely
through a developer-authored Config in which each component declares a closed set of typed fields —
so a field that is not declared cannot be edited, and a component that is not registered cannot be
inserted. More importantly for upgrade safety, Puck expresses **per-field write permission inside the
persisted data model itself**: `BaseData` carries a `readOnly` map keyed by field name, so the
prohibition travels with the content rather than living only in editor configuration.

That distinction is the load-bearing one. A permission enforced in the editor UI is lost the moment
any other channel touches the data — an upgrade, a migration, an agent, a direct API write. A
permission encoded in the persisted record survives all of them, which is precisely what
Invariant I-P13-1 demands of a system with more than one edit channel.

Actionist's edit model should follow this shape: the ChangePlan's permission surface belongs in the
stored composition record, not in the editor's runtime configuration.

## 4. What nobody does, and why it matters most

No surveyed surface durably records **why** an edit was made. The closest approximations found:

- **Contentful Patterns** — a reusable decision becomes a named object.
- **Power Apps managed layers** — the override is a distinct addressable object, so the system knows
  a deliberate change occurred and can show it separately from the base.
- **OpenDesign DESIGN.md** — prose; not machine-checkable.
- **Figma Make in-context annotations** — reported to anchor intent to a location separately from the
  mutation. **Unverified**; the strongest lead for wave-3.

This is the load-bearing gap. An edit stored as a mutation ("set padding at node X to 24px") cannot
survive an upgrade that moves node X. An edit stored as an intent ("this card should be denser than
default, because the client's operators scan it at a glance") can be re-resolved against a new
version of the capability.

**Invariant I-P13-2: upgrade safety is a property of what you stored, not of how carefully you
upgrade.** Coordinate-bound edits are unupgradeable in principle, regardless of upgrade discipline.

## 5. Why layer separation is necessary but not sufficient

Shopify Online Store 2.0 separates `settings_data.json` from theme code. That separation *is* the
architectural promise that a theme upgrade preserves merchant customization — the same promise
Actionist must make.

Verified directly by this lane (see `verification-shopify-theme-settings-wipe.md`): on 2026-03-24 two
independent merchants reported that updating a theme wiped global customizations — "logo file wiped
and all settings reset" — with a Shopify staff member acknowledging receipt and opening an
investigation, and no visible resolution. One merchant's workaround was retrying the update 5–10
times until one succeeded.

The root cause is not established and does not matter for the transferable lesson:

**Invariant I-P13-3: the settings/code layer boundary must be verified per upgrade, not assumed.**
The failure mode is silent — the client discovers it after publish. Therefore a pre-upgrade snapshot
and a post-upgrade diff of the surviving edit set is a hard gate, not a nicety.

## 6. Assumptions this design makes

| ID | Assumption | State | Falsifier |
|---|---|---|---|
| AP13-1 | Client change requests compress into a finite verb set | hypothesis | A representative request sample where >20% cannot be expressed in the seven verbs and are not genuine escalations |
| AP13-2 | Capabilities can export stable semantic anchors | hypothesis | Three representative donors where no stable anchor can be exported without forking |
| AP13-3 | Intent records can be re-resolved after an upgrade | hypothesis | Stored intents that fail to re-resolve on a real minor-version upgrade |
| AP13-4 | Clients accept a bounded surface if refusals explain and offer alternatives | hypothesis | Clients routinely demand the escape hatch in a pilot |
| AP13-5 | Parametric edits dominate by volume | hypothesis | Measured edit mix where code-delta edits dominate |
| AP13-6 | Denial-by-construction is achievable over heterogeneous donors | hypothesis | A donor whose editable surface cannot be typed without rewriting it |

## 7. Contradictions surfaced

**X-P13-1 — The dispatch instructs a census of "Open Design and comparable systems", but Open Design
is dormant.** Verified: the `opendesigndev` GitHub org (owner of opendesign.dev, home of the Open
Design Engine and the Octopus format spec) shows most recent activity 3 Sep 2024, most repos untouched
since 2023, nothing in 2025–2026. `open-design.ai` is an unrelated 2026 agent wrapper; the Open Design
Alliance is an unrelated CAD/BIM nonprofit. The Animaall/Ceros lineage is unresolved. **Any downstream
document treating Open Design as a live spec to build on must be corrected.** The Octopus format may
still be useful as a design-file interchange reference despite dormancy.

**X-P13-2 — Bounded editing and client satisfaction may be in tension.** Every AI builder chose
unbounded fallthrough. That is either an industry-wide failure of nerve, or evidence that clients
reject bounded surfaces. This lane cannot distinguish these from desk research. It is the most
commercially consequential unknown in P13.

**X-P13-3 — The local visual gate has no numeric threshold.** `weightedOverall()` computes a score;
nothing compares it to a bar; blessing is a human act. So "is this edit visually acceptable?" has no
automated local answer, and P13 must not claim one.

**X-P13-4 — The five-area shell is unproven (A15) while P13 must define what shell-level reorder
means.** P13 should define shell edits as a distinct scope with its own guarantees rather than
assuming the shell is fixed.

## 8. The change-loop contract (design, not implementation)

```text
client request (chat or direct manipulation)
  → compile to the seven-verb algebra
      ├─ compiles → typed operation(s)
      └─ does not compile → ABSTAIN naming the violated constraint
                            + nearest supported alternative
  → classify each operation: parametric | code-delta
  → authority check against the session ceiling (intersection, never union)
  → ChangePlan: staged, hash-bound, cost-stated, reversibility-labelled
  → preview from the release artifact, across eight UI states + stress cases
  → client approves the plan hash
  → apply; append intent records to the operation log
  → operation log feeds P15 (accepted, rejected, refused, escape-hatch rate)
```

Outcomes of an edit are four, not two: **allowed**, **denied** (with named constraint),
**deferred** (violates a universal rule but is legitimately overridden by client design authority,
naming the overriding rule), **escalated** (needs a human builder). The `deferred` status is imported
from a working local gate rather than invented.

## 9. Top 10 design hypotheses

Full register: `innovation-register.jsonl` (100 entries, 10 ranked).

1. **Unrepresentable-by-construction edit model** — out-of-bounds edits have no encoding.
2. **Seven-verb edit algebra** — finite typed operation set with per-verb upgrade-safety class.
3. **Intent record separate from mutation** — store why, re-resolve on upgrade.
4. **Parameter-vs-code classifier** — parametric iff it writes only declared contract slots.
5. **Deferred edit outcome** — the fourth status, naming the overriding authority.
6. **Selector stability contract** — edits bind only to exported semantic anchors.
7. **Escape hatch as explicit contract transition** — bounded → forked is a recorded state change.
8. **Eight-state editor preview** — reuses the G5 state list.
9. **Replace-with-compatible-only** — solver filters before the client chooses.
10. **Text edits bypass regeneration** — the most frequent edit class pays no build cost.

## 10. Falsifiers

| ID | Claim | Falsifier |
|---|---|---|
| F-P13-ALGEBRA | Client requests compress into seven verbs | >20% of a real request sample needs an eighth verb that is not an escalation |
| F-P13-UPGRADE | Intent records survive capability upgrades | Stored intents fail to re-resolve on a real minor-version upgrade of a representative donor |
| F-P13-BOUNDED | A bounded surface is commercially acceptable | Pilot clients routinely demand the escape hatch and treat refusals as product failure |
| F-P13-ANCHOR | Capabilities can export stable anchors | Three representative donors cannot without forking |
| F-P13-CLASSIFY | Parametric/code classification is decidable from contracts | >30% of real edits return UNDERDETERMINED |
| F-P13-LEAST-BOUNDED | Boundedness is limited by the weakest channel | A system with an ungated chat channel nevertheless preserves compositional properties under audit |

## 11. Experiments (designed, not authorized)

- **E-P13-1 — Verb sufficiency.** Take a real client-request sample; attempt compilation into the
  seven verbs; measure the residue. Cost: analysis only, no execution.
- **E-P13-2 — Upgrade survival.** Apply N edits to a composition, upgrade one capability a minor
  version, replay intents, diff the surviving edit set. Directly tests I-P13-3 and F-P13-UPGRADE.
- **E-P13-3 — Anchor export.** Attempt stable anchor export from three donors of different packaging
  modes (intact_service, extracted_slice, generated_from_pattern).
- **E-P13-4 — Refusal quality.** Measure client response to refusals with vs without a nearest
  supported alternative.
- **E-P13-5 — Preview parity.** Diff the preview artifact against the released artifact byte-wise;
  any divergence falsifies the parity claim.

## 12. Decision gates

| Gate | Question | Pass | Fail |
|---|---|---|---|
| GP13-A | Is the verb algebra sufficient? | ≤20% residue, all genuine escalations | Redesign the algebra before building anything |
| GP13-B | Do intents survive upgrade? | Edit set survives a real minor upgrade with explained losses only | Upgrade safety is unachievable as designed; reconsider intact-donor editing entirely |
| GP13-C | Can anchors be exported? | All three donor shapes export anchors | Restrict bounded editing to shapes that can |
| GP13-D | Is preview parity real? | Byte-identical artifact | Preview is theatre; fix before client exposure |

## 13. What this document refuses to claim

- No editor exists. No edit has been applied, previewed, upgraded or rolled back.
- No claim that clients will accept a bounded surface (X-P13-2 open).
- No claim that visual quality can be gated automatically (X-P13-3).
- No claim about Open Design as a live foundation (X-P13-1: dormant).
- The Shopify finding is two merchant reports plus a staff acknowledgement of receipt; it is not a
  measured failure rate, not a root cause, and not evidence about any other vendor.
- The commercial denominator is **30 surfaces, not ~100** — the depth contract is unmet for this
  part and the gap is recorded, not concealed.
