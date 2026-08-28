# P13 Sprint 2 — three worked traces

Part: P13 (with P08 shell edges) · Lane: `S2-L3` · Run: `2026-08-27-sprint-2-opus`
Recorded: 2026-08-27 · research-only · `UNEXECUTED` · `NOT_ADMITTED`

Three **heterogeneous** substrates, one vocabulary. Each trace runs a real client request through
compile → classify → authority → outcome → upgrade replay. These are **designed traces over observed
mechanics**, not executed runs: no editor exists and nothing was applied. Every mechanical fact they
turn on is cited to a Sprint 1 receipt.

The traces are chosen to fail differently. T1 succeeds and survives an upgrade. T2 is denied for a
mechanical reason and must refuse well. T3 succeeds at edit time and is **degraded by an upgrade** —
the case the whole intent/resolution split exists for.

---

## T1 — Owned UI · `theme` · survives upgrade

**Substrate** `owned_ui` · **Verb** `theme` · **Authority** low

**Client request.** *"The status chips are too loud — everything looks urgent, so nothing does."*

### Compile

```json
{
  "operation_id": "EOP-T1a",
  "verb": "theme",
  "target": {"substrate": "owned_ui",
             "anchor": {"anchor_class": "semantic_role", "anchor_id": "status.chip.attention"}},
  "intent": {"statement": "Attention states should be distinguishable from routine states without every chip reading as urgent",
             "expressed_by": "client_chat",
             "rationale": "Operators scan the queue continuously; uniform loudness destroys the signal"},
  "authority": {"level": "low", "within_declared_scope": true, "grants_new_authority": false},
  "outcome": {"status": "allowed"}
}
```

**Why it compiles.** The anchor is a `semantic_role` in Actionist's own layout. The verb writes a
semantic token, not a literal. Under the P07 design-validity contract the resulting pack must still
pass contrast and complete light/dark role pairing — so the *client cannot choose to break it*, and
`theme` stays `safe_by_construction`.

**Boundary honoured.** S2-L2 owns which token values are valid and how they bind. S2-L3 owns only
the typed operation that requests the change and the authority answer. This trace writes no token
catalogue.

### Upgrade replay — host component library minor bump

| Step | Result |
|---|---|
| PRE | 1 edit snapshotted, bound to pre-upgrade artifact hash |
| PLAN | `resolution` discarded; `intent` re-resolved against V+1 |
| Anchor | `status.chip.attention` still present — host-owned semantic role |
| POST | **RESOLVED.** Diff clean; no ORPHANED or DEGRADED edits; auto-publish not blocked |

**What T1 demonstrates.** The easy case, and the reason it is easy is *structural*, not lucky: the
anchor is host-owned, so no upgrade of anyone else's code can move it. This is the argument for
preferring `bridge_token` and `host_seam` anchors wherever a choice exists.

---

## T2 — Intact service · `theme` · denied for a mechanical reason

**Substrate** `intact_service` · **Verb** `theme` · **Authority** low · **Outcome** `denied`

**Client request.** *"Make the scheduler match our brand colours like the rest of the app."*

Entirely reasonable. Mechanically impossible at this mount profile.

### Compile

```json
{
  "operation_id": "EOP-T2a",
  "verb": "theme",
  "target": {"substrate": "intact_service", "module_id": "scheduler",
             "anchor": {"anchor_class": "host_seam", "anchor_id": "pane.scheduler.frame"}},
  "intent": {"statement": "The scheduler pane should carry the same brand palette as host surfaces",
             "expressed_by": "client_direct_manipulation"},
  "authority": {"level": "low", "within_declared_scope": true, "grants_new_authority": false},
  "outcome": {
    "status": "denied",
    "violated_constraint": "CSS custom properties do not inherit across a cross-origin iframe boundary; the token bridge cannot reach components inside the frame",
    "nearest_supported_alternative": "Re-mount the scheduler as an embedded module (absorbed_native). Observed cost band for an identity-and-data-layer absorption in the built estate: ~273 lines across 9 files, touching auth strategy, SSR hop, DB provider and public API schema. Alternatively theme the host chrome surrounding the pane, which is available now at no cost."
  }
}
```

**The constraint is observed, not asserted.** `THEMING-CONTRACT.md:94-102`: *"A cross-origin iframe
is a hard CSS boundary — custom properties do not inherit across it. Inside a frame, this bridge
cannot reach Teable's components at all… This is the concrete reason the iframe had to go."*

**The same fact decided the mount.** In P08 the cascade gate (G2) is what moves a donor from
`preserved_framed` to `absorbed_native`. Here it is what denies the edit. One mechanical axis,
read twice — which is the coherence claim of this lane, and this trace is where it is visible.

### Why this trace is the commercially load-bearing one

The refusal carries a named constraint **and** a priced alternative **and** a free fallback. Compare
the failure mode it is designed against: a bare *"that isn't supported"* is indistinguishable from a
broken product, and U-5 says every AI builder in the census dodged this problem entirely by allowing
the edit and dissolving the composition.

**This is the single most likely place the Actionist bet fails in a pilot** — not because the
engineering is wrong but because a client hears "no" on something that looks trivial. E-P13-4 exists
to measure exactly this, and it is unrun.

### Escalation path

If the client insists, `denied` does **not** silently become `allowed`. It becomes an `escalated`
operation proposing a **contract transition**: re-mount the scheduler at the stated cost, with the
rights gate (G0) re-run first, since chrome and styling changes are licence-constrained for some
donors (NocoBase §5.2, Directus MSCL).

---

## T3 — Embedded module · `text` + `remove` · degraded by upgrade

**Substrate** `embedded_module` · **Verbs** `text`, `remove` · **The case the model exists for**

**Client requests.** (a) *"Call it 'Records', not 'Grid'."* (b) *"Hide the template gallery — it
confuses new staff."*

### Compile

```json
[
  {"operation_id": "EOP-T3a", "verb": "text",
   "target": {"substrate": "embedded_module", "module_id": "grid",
              "anchor": {"anchor_class": "contract_slot", "anchor_id": "grid.header.title", "upgrade_debt": false}},
   "intent": {"statement": "Staff call these Records; Grid is vendor vocabulary", "expressed_by": "client_chat"},
   "authority": {"level": "low", "within_declared_scope": true, "grants_new_authority": false},
   "outcome": {"status": "allowed"}},

  {"operation_id": "EOP-T3b", "verb": "remove",
   "target": {"substrate": "embedded_module", "module_id": "grid",
              "anchor": {"anchor_class": "donor_export", "anchor_id": "sidebar.template", "upgrade_debt": true}},
   "intent": {"statement": "New staff mistake the template gallery for their own saved views", "expressed_by": "client_chat"},
   "authority": {"level": "medium", "within_declared_scope": true, "grants_new_authority": false},
   "resolution": {"capability_version": "V", "applied_value": "data-siso-hide=\"template\"", "prior_value": "visible"},
   "outcome": {"status": "allowed"}}
]
```

**T3b is chrome suppression, not deletion** — the only `remove` available inside an embedded donor.
The mechanism is observed in the built estate: `data-siso-hide` attributes plus CSS injected only
when framed (`teable-siso-absorption.patch:175,188,201,234-248`). And note the estate's surgical
exception in that same patch — *"The space switcher stays"* — because the host had no tenant
switcher of its own (U-3). A suppression that removes a surface nothing replaces is an INV-S3 hole,
not a tidy-up.

**`upgrade_debt: true` is set on T3b at authoring time.** The anchor is a `donor_export` — it exists
only while the patch applies.

### Upgrade replay — donor minor version bump

| Edit | Anchor class | Result |
|---|---|---|
| T3a `text` | `contract_slot` | **RESOLVED** — declared slot survives the bump |
| T3b `remove` | `donor_export` | **DEGRADED** — donor restructured its sidebar; the patch hunk no longer applies |

```json
{"operation_id": "EOP-T3b",
 "upgrade_replay": {"state": "DEGRADED", "replayed_against": "grid@V+1",
   "note": "Intent retained and re-presented. The template gallery is visible again; no host-side seam currently suppresses it. Auto-publish BLOCKED pending an explicit decision."}}
```

**The intent is not lost — that is the entire point.** A mutation store would have held *"set
`data-siso-hide` on sidebar node 3"*, which after restructuring is either a silent no-op or a hit on
the wrong node. The intent *"new staff mistake the template gallery for their own saved views"*
re-presents as a decidable question against V+1.

**Auto-publish is blocked.** Under I-P13-3 the post-upgrade diff is the gate, and a DEGRADED edit
fails it. The failure the gate is designed against is Shopify's: silent, discovered by the client
after publish. Scoped exactly as in `edit-model.md` §5 — two merchant reports plus a staff
acknowledgement of receipt, not a measured failure rate.

---

## What the three traces establish together

| | T1 owned | T2 intact service | T3 embedded |
|---|---|---|---|
| Verb vocabulary | identical | identical | identical |
| Authority answer | allowed | **denied** | allowed |
| Anchor class | `semantic_role` | `host_seam` | `contract_slot` + `donor_export` |
| Upgrade outcome | RESOLVED | n/a — never applied | RESOLVED + **DEGRADED** |
| Deciding fact | host owns the anchor | **cascade cannot cross origin** | anchor class, not verb |

1. **One vocabulary spans three substrates**; only the authority answer moves (`F-P13-SUBSTRATE`).
2. **Upgrade survival is decided by anchor class, not by verb.** Both T3 edits are low/medium
   authority and both were `allowed`; one survived and one did not, purely on anchor class.
3. **The mechanical axis is the same one that decides the mount.** T2 is denied by the fact that
   moves a donor between P08 profiles.
4. **The expensive failure is silent, so the gate is a diff.** T3's DEGRADED edit is the one a
   client would otherwise discover after publish.

## What these traces do not establish

- **Nothing was executed.** No edit compiled, applied, previewed, upgraded or rolled back. These are
  designed traces over observed mechanics.
- T3's DEGRADED outcome is a **constructed** upgrade scenario, not an observed donor bump. `F-P13-INTENT`
  and gate `GP13-B` remain open; E-P13-2 is unrun.
- T2's cost band (~273 lines / 9 files) is the built estate's **Teable** absorption, quoted as an
  order-of-magnitude signal for a comparable identity-and-data-layer absorption — not a quote for the
  scheduler, which was never priced.
- Client acceptance of T2's refusal is **unknown** (U-5) and is the largest commercial risk in P13.
