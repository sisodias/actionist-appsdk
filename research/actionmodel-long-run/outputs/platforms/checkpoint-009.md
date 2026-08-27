# AM-PLATFORMS checkpoint-009 — control-plane repair and cross-lane contradiction pass

**Run:** `actionmodel-long-run-2026-08-26`  
**Lane:** `AM-PLATFORMS`  
**Observed:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**Scope:** reconcile the platform control plane against synthesis checkpoint-006 and run the requested local cross-lane contradiction pass; no new network discovery  
**Status:** active lane; one held admission blocker; Block Contract pilot not authorized; no runtime code edits

## Outcome

The platform lane had a mutable-tracker defect, not a missing evidence packet. Before
this checkpoint, `status.json` and checkpoint-008 both retained one held P-010
admission blocker, while `CURRENT.md` still said zero blocked dossiers and 25
held/rejected claim groups. The control plane is now aligned to the structured
status posture: one blocked/held dossier, 34 held/rejected claim groups, and one
active blocker.

The cross-lane pass finds no evidence that authorizes a Block Contract pilot. The
strongest differentiated direction remains a **constrained client build plane plus
an agent-operation and evidence plane**. That is a supported strategic inference,
not an authenticated or implemented Actionist capability.

## Tracker repair receipt

| Field | Stale value in `CURRENT.md` before this checkpoint | Evidence used | Reconciled value | Confidence |
|---|---:|---|---:|---|
| Blocked dossiers | 0 | `status.json:dossiers.blocked=1`; checkpoint-005 and checkpoint-008 each describe one compound P-010 blocker | 1 | high |
| Held/rejected claim groups | 25 | `status.json:claims.held_or_rejected_groups=34`; checkpoint-008 enumerates the active hold groups but does not publish a separate aggregate | 34 | supported as the structured lane counter; aggregate not independently recomputed |
| Catalogue/documented dossiers | 7 | `status.json:dossiers.catalogue_or_documented=7`; checkpoints 001, 003, 006, and 007 cover the seven reviewed dossiers | 7 | high |
| Authenticated/live dossiers | 0 | checkpoint-008 H-002 and `status.json:verification.authenticated_product_session_used=false` | 0 | high |
| Actionist implementations | 0 | checkpoint-008 verdict and `status.json:runtime_code_edits=0` | 0 | high |
| Active admission blockers | 1 | checkpoint-005 `Blocker count: 1`; checkpoint-008 H-001 | 1 | high |

The eight prior immutable checkpoint files were present before this write. This
packet becomes checkpoint 009; `status.json` advances its `checkpoint_count` to 9
and points to the next future packet, checkpoint-010.

## Cross-lane contradiction ledger

These are evidence-state contradictions or apparent contradictions between local
packets. They are recorded without editing another lane's files.

| ID | Apparent conflict | Resolution | Verdict / confidence |
|---|---|---|---|
| X-009-01 | `design/BLOCK-FRAMEWORK.md` describes the v0 buy option as “GA” with explicitly supported white-label builders; checkpoint-006's first-party review supports `chats.init` context injection but holds OEM/white-label entitlement. | Split the claim. Registry/file/repo context injection is documented; OEM/white-label and a production-ready buy boundary remain unverified. | **Held; high** for the hold, based on first-party docs observed 2026-08-26. |
| X-009-02 | Corpus checkpoint-001 calls Horizon the best current conversion candidate; platform P-010 and synthesis keep the candidate/pilot open. | “Pilot selected” means a conversion candidate only. Canonical source, pinned commit, and MIT evidence do not replace adaptation, build, browser smoke, screenshot, dependency/asset scan, owner, and rollback receipts. | **Consistent hold; high.** Block Contract pilot remains **NOT AUTHORIZED**. |
| X-009-03 | The design framework says a scoped Action Model builder is buildable; checkpoint-008 says the wedge is a strategic direction. | Treat scoped-builder feasibility as a design hypothesis. No Actionist implementation, authenticated session, or end-to-end release evidence was found in the reviewed packets. | **Partial/inferred, not implemented; high.** |
| X-009-04 | The vertical crosswalk batch metadata declares 40 covered use cases, 23 ideas, and 26 remaining use cases, while synthesis preserves the corrected 39/24/27 posture. | Preserve the 39/24/27 correction as an upstream vertical data-quality hold. This lane does not edit `outputs/verticals/` or use catalogue/crosswalk coverage as platform capability proof. | **Held upstream; high** for the metadata mismatch; no platform promotion. |
| X-009-05 | Vertical edges label some Actionist workflow surfaces `documented`, while platform comparison finds no complete arbitrary GUI-operation plus approval/verification/recovery loop. | The labels refer to first-party documentation or inferred mappings; every vertical edge remains `authenticated_live=false` and `implemented=false`. “Documented workflow” is not “authenticated GUI operation.” | **No contradiction after state normalization; high.** |
| X-009-06 | Corpus cluster-001 reports 0 accepted / 15 held; platform checkpoint-005 reports one held candidate admission blocker. | These are different scopes: 15 corpus records are held, and the selected Horizon candidate has its own compound conversion blocker. Neither scope authorizes admission. | **Consistent hold; high.** |

## Matrix conclusion

The comparison matrix remains unchanged after the repair:

- Generic prompt-to-app, registry, preview, deployment, history, branding, and
  context-injection surfaces are increasingly documented across vendors. They are
  not sufficient differentiation by themselves.
- The stronger seam is the combination of a constrained, client-owned build plane
  with typed agent operation over long-tail/API-less software and an evidence plane
  covering provenance, authority, approval, verification, recovery, and release.
- No reviewed first-party platform packet supplies the full cross-application loop,
  and no local candidate has passed the Block Contract gates. The wedge is therefore
  **supported as a product direction, unverified as a capability, and not claimed as
  implemented**.

## Held and rejected claims

- **Held:** v0 OEM/white-label support, vendor-neutral deployment, API-level
  rollback, and known per-call pricing; checkpoint-006 remains the source-bounded
  disposition.
- **Held:** Horizon or `abi/screenshot-to-code` is an admitted Actionist block;
  both remain conversion/admission candidates with missing proof gates.
- **Held:** vertical catalogue/crosswalk mappings prove delivered workflows;
  they are demand/documentation evidence and inferred mappings only.
- **Held:** platform history, checkpoints, branded URLs, MCP, or browser-context
  tools prove full external-side-effect rollback or arbitrary computer use.
- **Not claimed:** authenticated/live product behavior, Actionist implementation,
  legal clearance, current normalized costs, or a completed pilot.

## Sources, dates, and confidence

All local artifacts below were read on **2026-08-26**. No network lookup was
performed for this checkpoint; first-party URLs are carried forward from the
earlier source packets.

| Source path or URL | Evidence used | Date | Confidence |
|---|---|---|---|
| `research/actionmodel-long-run/outputs/platforms/status.json` | Structured blocker, dossier, claim, checkpoint, and verification counters | 2026-08-26 | high for current tracker state |
| `research/actionmodel-long-run/outputs/platforms/CURRENT.md` | Stale pre-repair values and repaired human-readable control plane | 2026-08-26 | high after this checkpoint |
| `research/actionmodel-long-run/outputs/platforms/checkpoint-005.md` | P-010 source/license pass and one compound admission blocker | 2026-08-26 | high |
| `research/actionmodel-long-run/outputs/platforms/checkpoint-008.md` | Three-plane comparison, H-001–H-004, no admitted block, no authenticated/live evidence | 2026-08-26 | high for reviewed sources; strategic wedge remains inferred |
| `research/actionmodel-long-run/outputs/synthesis/checkpoint-006.md` | Independent record of the platform count contradiction and next cross-lane queue | 2026-08-26 | high |
| `research/actionmodel-long-run/outputs/corpus/checkpoint-001.md` and `candidate-horizon-ui-shadcn-nextjs-boilerplate.md` | 0/15/0 disposition, selected-but-not-admitted Horizon candidate and missing conversion receipts | 2026-08-26 | high |
| `research/actionmodel-long-run/outputs/verticals/checkpoint-001.md`, `checkpoint-003.md`, `crosswalk-batch-001.json`, and `status.json` | Catalogue/documented/inferred distinctions and the preserved vertical correction boundary | 2026-08-26 | high for status distinctions; crosswalk metadata mismatch held |
| `research/actionist-solutions-sweep-spec-2026-08-26.md` and `design/BLOCK-FRAMEWORK.md` | Candidate admission ladder and local scoped-builder/v0 proposals | 2026-08-26 | high for proposal text; not capability proof |
| https://v0.dev/docs/v0-platform-api/chats/chats.init and https://v0.dev/docs/design-systems | v0 context initialization and registry/token documentation carried from checkpoint-006 | 2026-08-26 | high for documented surfaces |
| https://github.com/horizon-ui/shadcn-nextjs-boilerplate | Horizon canonical source carried from corpus packet; pinned commit and license are in that packet | 2026-08-26 | high for source identity; admission remains held |

## Next queue

`P-014`: resolve or formally defer the held screenshot-to-code admission boundary
under an explicitly permitted isolated proof path, then mine the next highest-
value gap. Keep the vertical 39/24/27 correction, the one-blocker posture, and
Block Contract pilot authorization `OPEN`/not authorized until their respective
owners provide new evidence.

## Mailbox verification

The required fresh Herdr resolution on 2026-08-26 found workspace
`ACTION-MODEL-LONG-RUN` (`w659e8e2665e9c3`) with four named worker panes and zero
plain root-pane candidates. The named panes were `AM-PLATFORMS`, `AM-CORPUS`,
`AM-VERTICALS`, and `AM-SYNTHESIS`; none is the root mailbox. No callback was
submitted, to avoid misrouting a root message to a peer worker. This is an
operational handoff blocker, not a change to the single research admission
blocker. The live map must be re-resolved when a plain root mailbox exists.
