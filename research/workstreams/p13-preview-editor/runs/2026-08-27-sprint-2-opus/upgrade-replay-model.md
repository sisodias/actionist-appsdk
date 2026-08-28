# P13 Sprint 2 — the upgrade replay model

Part: P13 · Lane: `S2-L3` · Run: `2026-08-27-sprint-2-opus` · Recorded: 2026-08-27
Status: research-only · `UNEXECUTED` · `NOT_ADMITTED`

---

## The claim

**Upgrade safety is a property of what was stored, not of how carefully the upgrade was performed**
(I-P13-2). Every mechanism here follows from that one sentence; if it is false, the model is wrong
in a way no amount of upgrade discipline repairs.

## Why discipline alone provably fails

Shopify Online Store 2.0 separates `settings_data.json` from theme code. That separation *is* the
industry's canonical upgrade-safety guarantee — the same promise Actionist must make. It reportedly
failed in production in March 2026: two independent merchants, global customizations wiped, staff
acknowledgement of receipt, no visible resolution.

Root cause is unknown and irrelevant to the lesson: **layer separation is necessary and not
sufficient, and the failure mode is silent.** A silent failure discovered after publish is worse than
a loud one caught at the gate, because the client finds it first.

*Evidence scope, held exactly:* two merchant reports plus a staff acknowledgement of receipt. Not a
measured failure rate, not a root cause, not an on-record bug acknowledgement, and not evidence about
any other vendor. Sprint 1 initially over-stated this as "acknowledged, unfixed" and corrected
itself; the corrected framing is the one used.

---

## The three-part record

```text
EditRecord
  ├── intent      WHY — version-independent, anchor-bound, never discarded
  ├── resolution  HOW against version V — the only disposable part
  └── receipt     WHO approved WHICH artifact hash, WHEN (C5)
```

A mutation store keeps only the middle part, which is exactly the part an upgrade invalidates.

## The replay algorithm

```text
PRE    snapshot surviving-edit set + intents; bind to pre-upgrade artifact hash
       (I-P13-3 — verify the boundary per upgrade, never assume it)

PLAN   for each EditRecord:
         discard `resolution`
         re-resolve `intent` against V+1
           anchor present  AND constraint satisfiable -> RESOLVED
           anchor present  AND constraint unsatisfiable-> DEGRADED
           anchor absent                              -> ORPHANED

POST   diff surviving edits against the PRE snapshot

GATE   any ORPHANED or DEGRADED edit BLOCKS auto-publish and requires an explicit decision.
       A clean build is not evidence (C7).
```

## The three states, and why none of them is "dropped"

| State | Meaning | Handling |
|---|---|---|
| `RESOLVED` | Intent re-satisfied against V+1 | Proceeds |
| `DEGRADED` | Anchor present, constraint no longer satisfiable | **Kept and named.** Intent re-presented as a decidable question. Blocks auto-publish |
| `ORPHANED` | Anchor gone entirely | **Kept and named.** Blocks auto-publish |

**There is deliberately no fourth state for "silently discarded."** That absence *is* the mechanism.
The Shopify failure mode is a silent drop; a model that can express one has reproduced the bug it was
designed to prevent.

## Anchor class predicts replay outcome

| Anchor class | Owner | Replay expectation |
|---|---|---|
| `contract_slot` | capability contract | RESOLVED — declared and versioned |
| `semantic_role` | host | RESOLVED — no donor upgrade can move it |
| `bridge_token` | host | RESOLVED — the bridge is host-owned |
| `host_seam` | host | RESOLVED — frame geometry, route, suppression flags |
| `donor_export` | **donor patch surface** | **DEGRADED or ORPHANED whenever the patch stops applying** |

**One class carries essentially all the risk, and it is knowable at authoring time.** The schema sets
`upgrade_debt: true` on `donor_export` anchors when the edit is written — so the risk is visible
before the upgrade, not discovered during it.

**This makes anchor economics a design lever.** Each `donor_export` anchor is a permanent merge
obligation. The built estate's guard pattern (`if (process.env.SISO_*)` on every hunk so upstream
behaviour is the default) is an explicit merge-survival strategy and itself a recurring cost — and in
one case absorption required widening a donor's **public API validation regex**, which is upgrade
debt in the most literal available place.

**Design consequence:** prefer host-owned anchors; treat every `donor_export` as a priced decision
with an owner, not a convenience.

## Falsifiers

| ID | Claim | Falsifier |
|---|---|---|
| `F-RPL-1` | Intents re-resolve where mutations cannot | Stored intents fail to re-resolve on a real minor-version donor upgrade |
| `F-RPL-2` | Anchor class predicts replay outcome | A `contract_slot` edit orphans, or a `donor_export` edit reliably survives across several real bumps |
| `F-RPL-3` | The post-upgrade diff catches what a build misses | An upgrade that passes the diff still loses client-visible edits |
| `F-RPL-4` | Blocking auto-publish on DEGRADED is proportionate | DEGRADED fires so often that the gate is routinely bypassed — a bypassed gate is not a gate |

`F-RPL-4` is the operational risk. A gate that fires constantly gets disabled, and the model would
then be strictly worse than no gate because it would carry the *appearance* of safety.

## Not established

- **No upgrade has been performed or replayed.** Every state transition here is designed, not observed.
- E-P13-2 (upgrade survival) is **unrun**; gate `GP13-B` is open.
- Anchor exportability from intact donors is untested (U-7 / AP13-2).
- The DEGRADED example in `worked-traces.md` T3 is a constructed scenario, not an observed donor bump.
- No claim that the model prevents the Shopify failure — only that it converts a silent loss into a
  blocking, named one, **provided** the pre-snapshot and post-diff actually run.
