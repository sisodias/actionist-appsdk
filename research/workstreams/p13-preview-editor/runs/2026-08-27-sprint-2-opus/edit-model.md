# P13 Sprint 2 — the typed, upgrade-safe edit model

Part: P13 · Lane: `S2-L3` · Run: `2026-08-27-sprint-2-opus` · Recorded: 2026-08-27
Owner: `ACTIONIST-S2-L3-SHELL-EDITOR` (Opus 5[1m])
Status: research-only · `DESIGN_ONLY` · `UNEXECUTED` · `NOT_ADMITTED` · `admitted_blocks 0`

---

## 0. Objective, invariants, forbidden couplings, unknowns

**Objective.** Define one typed edit model that spans **three materially different substrates** —
Actionist-owned UI, embedded donor modules, and intact donor services — such that an edit made
before a donor upgrade either survives it or fails **loudly and specifically**, and such that an edit
the client may not make has **no encoding** rather than a runtime check.

**Invariants inherited and kept:**

- **I-P13-1** A bounded editor is only as bounded as its least-bounded channel.
- **I-P13-2** Upgrade safety is a property of what you *stored*, not of how carefully you upgrade.
- **I-P13-3** The settings/code layer boundary must be verified **per upgrade**, not assumed.
- **C1** Edits never grant data, tenant or side-effect authority.
- **C2** Composition scope is the **intersection** of member scopes, never the union.
- **C5** Approval binds to an artifact hash; silence is never approval.

**Forbidden couplings:**

- An edit must not bind to a **coordinate** (node index, DOM path, line number). Coordinates do not
  survive an upgrade that moves the node — I-P13-2.
- An edit's permission must not live **only in editor configuration**. It must travel in the
  persisted record, or any other channel (upgrade, migration, agent, direct API write) bypasses it.
  This is Puck's `readOnly`-in-`BaseData` shape, adopted deliberately.
- The edit model must not couple to the **mount mechanism**. The same verb must mean the same thing
  whether the target is owned, embedded or framed — what changes is the *authority answer*, not the
  vocabulary.

**Unknowns carried in:**

- **U-5** Whether clients accept a bounded surface at all (X-P13-2) — every AI builder in the census
  chose unbounded fallthrough. Desk research cannot distinguish industry-wide failure of nerve from
  clients rejecting bounds.
- **U-6** No numeric visual-quality threshold exists locally (X-P13-3); "is this edit visually
  acceptable?" has no automated answer and this model does not claim one.
- **U-7** Whether stable semantic anchors can be exported from intact donors at all (AP13-2).

---

## 1. The substrate problem Sprint 1 did not solve

Sprint 1 produced the seven-verb algebra and the four outcomes. It did **not** say what a verb means
when the target is not Actionist's own code. That is the whole difficulty, because the three
substrates have different physics:

| Substrate | What Actionist controls | What an upgrade replaces | Anchor availability |
|---|---|---|---|
| **Owned UI** | Everything — source, tokens, structure | Nothing without our commit | Guaranteed; we author anchors |
| **Embedded module** (`absorbed_native`) | Mount seams, token bridge, host-side wrappers, patch surface | **Donor internals wholesale** | Only what the patch surface exports — and each exported anchor is upgrade debt |
| **Intact service** (`preserved_framed`) | The frame, the route, the CSP, chrome-suppression flags | Everything inside the boundary | **None inside**; host-side seams only |

**The rule this forces:** the substrate does not change the *verb*, it changes the **authority
answer** and the **anchor class**. A `theme` edit is legitimate on all three; on owned UI it writes a
token, on an embedded module it writes the bridge, and on an intact service it is `denied` with a
named constraint — because custom properties do not cross a cross-origin boundary, which is the same
mechanical fact that drove the mount decision in P08 §3.

That coherence is the point: **one mechanical axis explains both which mount you get and which edits
you may make on it.** The P08 coupling gates and the P13 authority table are the same fact read
twice.

### 1.1 The anti-slicing constraint

The local donor standard already rules: *"Do not transplant a partial component tree unless the
donor explicitly supports that embedding."* For intact donors the editor may therefore expose
**only host-side seams** — frame geometry, chrome-suppression flags, the route, the surrounding
host layout. Any edit that reaches inside the boundary is unrepresentable by construction.

---

## 2. The seven verbs × three substrates authority matrix

`allowed` = expressible and permitted. `bridge` = permitted, but writes a host-side bridge rather
than the target. `denied` = unrepresentable, returns a named constraint. `escalate` = requires a
human builder and a recorded contract transition.

| Verb | Owned UI | Embedded module | Intact service | Upgrade-safety class | Authority |
|---|---|---|---|---|---|
| `text` | allowed | allowed **iff** the string is a declared content slot | denied — content lives behind the boundary | **Safe** — content layer, never triggers a rebuild | low |
| `theme` | allowed | **bridge** — writes the token bridge, never donor CSS | **denied** — custom properties do not cross a cross-origin iframe | **Safe by construction** if tokens resolve from one context and no literals are emitted | low |
| `reorder` | allowed within an order-independent slot | host-side seams only | frame-level only (where the pane sits) | Safe **only** within an order-independent slot; otherwise escalate | low |
| `add` | allowed iff the slot type enumerates permitted capabilities | host-side wrappers only | frame-level only | Safe iff the slot enumerates — the insertion point is the control | medium |
| `remove` | allowed; inverse recorded for undo | allowed for host-side surfaces; **chrome-suppression flags only** inside | chrome-suppression flags only | Safe; removal may orphan bindings, which must be reported not silently dropped | medium |
| `replace` | allowed among port-compatible candidates | **escalate** — replacing a donor is a composition change, not an edit | **escalate** | Safe only among port-compatible candidates; the solver filters *before* the client chooses | medium |
| `data-binding` | allowed within declared release scope | allowed within declared release scope | denied | **Highest risk** | **high — capability scope** |

**Two cells carry most of the risk.**

`data-binding` is the only verb that can change *what data the application touches*. Market UIs
routinely present it with the same visual weight as a style change, which is a category error. Under
C2 it may only target resources already in the release's declared scope — and scope is the
intersection of member scopes, never the union.

`theme` on an intact service is the cell clients will push hardest on, because it is the one that
looks trivially easy and is mechanically impossible. The refusal must therefore be *good*: it must
name the constraint (cross-origin custom-property inheritance), state the cost of the alternative
(re-mount as `absorbed_native`, the 273-line / 9-file band from P08 §3.1), and let a human decide.
A refusal that just says "not permitted" will be read as the product being broken.

### 2.1 Why `replace` escalates on donors but not on owned UI

Replacing an owned component is a swap among port-compatible candidates the solver can enumerate.
Replacing a *donor* changes the composition's member set — which changes its scope intersection, its
rights state, its runtime profile and its rollback surface. That is a composition-level act with
S2-L1 and S2-L4 consequences, and calling it an "edit" would let a client re-plan the product
through the editor. **It is an escalation with a recorded contract transition, by construction.**

---

## 3. Intent records — the load-bearing mechanism

Sprint 1's white space: **nothing surveyed durably records why an edit was made.** A mutation
(*"set padding at node X to 24px"*) cannot survive an upgrade that moves node X. An intent
(*"this card should be denser than default, because operators scan it at a glance"*) can be
re-resolved against a new version.

Every edit therefore persists **three** parts, not one:

```text
EditRecord
  ├── intent      WHY, in client-expressible terms, anchor-bound and version-independent
  ├── resolution  HOW it was satisfied against capability version V — the only disposable part
  └── receipt     WHO approved WHICH artifact hash, and WHEN
```

**Only `resolution` is disposable.** On upgrade the resolution is discarded and the intent is
re-resolved against V+1. That is the entire upgrade-safety mechanism, and it is why the storage
shape — not the upgrade discipline — is the load-bearing decision.

### 3.1 Anchors, and the honest cost of exporting them

An intent binds to a **semantic anchor**, never a coordinate. Anchor classes, in descending
reliability:

| Class | Example | Available on | Survives upgrade |
|---|---|---|---|
| `contract_slot` | a declared field in the capability contract | owned, embedded | Yes — by contract |
| `semantic_role` | `role=primary-action` in the host's own layout | owned | Yes |
| `bridge_token` | a token name in the host-side bridge | embedded | Yes — the bridge is host-owned |
| `host_seam` | frame geometry, chrome-suppression flag, route | intact service | Yes — host-owned |
| `donor_export` | an anchor the donor patch surface exports | embedded | **Only while the patch applies** |
| `coordinate` | node index, DOM path, line number | — | **Never. Forbidden.** |

**`donor_export` is upgrade debt, and the estate priced it.** Every exported anchor is a hunk in a
patch that must survive a merge. The built estate guards every hunk with `if (process.env.SISO_*)`
so upstream behaviour is the default — an explicit merge-survival strategy that is itself a cost.
One of its patches widened a donor's **public API validation regex** (`/^[a-z]\w{0,62}$/i` →
`/^[a-z]\w{0,62}(\.[a-z]\w{0,62})?$/i`) to permit schema-qualified table names. That is upgrade debt
in the most literal place: a donor's public contract altered to make absorption possible.

**Therefore: minimise `donor_export` anchors.** Each one is a permanent merge obligation. Prefer
`bridge_token` and `host_seam`, which the host owns outright and no upgrade can move.

### 3.2 Where permission lives

In the **persisted composition record**, following Puck's `readOnly`-in-`BaseData` shape — not in
editor configuration. A permission enforced only in the editor UI is lost the moment any other
channel touches the data: an upgrade, a migration, an agent, a direct API write. Given I-P13-1 and a
system that will certainly have more than one edit channel, editor-only permission is not a
weaker version of the guarantee — it is no guarantee at all.

---

## 4. The four outcomes, and why refusal quality is a product surface

| Outcome | Meaning | Must carry |
|---|---|---|
| `allowed` | Compiles, authorized, in scope | The ChangePlan and its cost |
| `denied` | **Unrepresentable by construction** | The named violated constraint **and the nearest supported alternative** |
| `deferred` | Legitimate but overridden by a governing rule | The overriding rule, by name |
| `escalated` | Needs a human builder; a recorded contract transition | The transition being proposed and its price |

`deferred` is imported from a working local gate (`principles-grep.mjs`), where a DNA-governed value
*"is reported as `deferred`, naming the DNA rule that overrides it, and does not fail the run."*
It is adopted rather than invented because a status that already survives contact with a real gate
is worth more than a designed one.

**Refusal quality is the commercial crux (U-5).** Every AI builder in the 30-surface census chose
unbounded fallthrough. Actionist is deliberately choosing the posture the entire market declined,
which means the refusal path is not an error branch — it is the surface where the product's core
bet either holds or fails. A `denied` without a nearest-supported-alternative is indistinguishable
from a broken product, and E-P13-4 exists precisely to measure that difference.

---

## 5. Upgrade replay

```text
PRE    snapshot the surviving-edit set and its intents; bind to the pre-upgrade artifact hash
       (I-P13-3: the boundary is verified per upgrade, never assumed)

PLAN   for each EditRecord: discard `resolution`, re-resolve `intent` against V+1
         anchor present, constraint satisfiable  -> RESOLVED
         anchor present, constraint unsatisfiable-> DEGRADED   (kept, named, not silently dropped)
         anchor absent                           -> ORPHANED   (kept, named, needs a decision)

POST   diff surviving edits against the PRE snapshot
       any ORPHANED or DEGRADED edit blocks auto-publish and requires an explicit decision

GATE   the diff is the gate. A clean build is not evidence (C7).
```

**Why the post-upgrade diff is a hard gate and not a nicety.** Shopify Online Store 2.0's separation
of `settings_data.json` from theme code *is* the industry's canonical upgrade-safety guarantee — the
same promise Actionist must make. On 2026-03-24 two independent merchants reported a theme update
wiping global customizations (*"logo file wiped and all settings reset"*), with a Shopify staff
member acknowledging receipt and no visible resolution; one merchant's workaround was retrying until
one attempt succeeded.

The root cause is not established and does not matter for the transferable lesson: **the failure mode
is silent, and the client discovers it after publish.** Layer separation is necessary and not
sufficient.

*Framing discipline, carried forward from Sprint 1's own correction:* this is two merchant reports
plus a staff acknowledgement of receipt. It is **not** a measured failure rate, not a root cause, and
not an on-record Shopify bug acknowledgement. Sprint 1 initially recorded it as "acknowledged,
unfixed" and corrected itself. The corrected framing is the one used here.

---

## 6. Falsifiers

| ID | Claim | Falsifier |
|---|---|---|
| `F-P13-SUBSTRATE` | One verb set spans all three substrates; only authority changes | A real client request expressible on owned UI whose donor equivalent needs a verb outside the seven and is not an escalation |
| `F-P13-INTENT` | Intent records survive upgrades that mutations cannot | Stored intents fail to re-resolve on a real minor-version upgrade of a representative donor |
| `F-P13-ANCHOR` | Capabilities can export stable anchors | Three representative donors of different packaging modes cannot, without forking |
| `F-P13-REFUSAL` | A refusal with a nearest alternative is commercially acceptable | Pilot clients treat refusals as product failure regardless of alternative quality |
| `F-P13-CHANNEL` | Boundedness is limited by the weakest channel | A system with an ungated chat channel nevertheless preserves compositional properties under audit |
| `F-P13-PERMISSION` | Permission must live in the persisted record | An editor-only permission model survives an upgrade, a migration and an agent write unmodified |

---

## 7. What this model does not establish

- **No editor exists.** No edit has been compiled, applied, previewed, upgraded or rolled back.
- **U-5 stands and is the largest commercial risk.** Whether clients accept a bounded surface is
  unknown; every surveyed AI builder chose otherwise.
- **U-6 stands.** No automated visual-quality gate is claimed; no numeric threshold exists locally.
- **U-7 stands.** Anchor exportability from intact donors is untested (E-P13-3 unrun).
- The substrate matrix in §2 is **derived from mechanical constraints and one built estate**, not
  from a measured edit corpus. AP13-5 (parametric edits dominate by volume) remains a hypothesis.
- The Shopify evidence is scoped exactly as stated in §5 and must not be quoted more strongly.
- No decision is authorized by this document. `NOT_ADMITTED`.
