# AM-VERTICALS bounded queue

The queue stays inside `research/actionmodel-long-run/outputs/verticals/` and
expands the atom map before widening external research.

| ID | Work item | Exit evidence | Status |
|---|---|---|---|
| Q1 | Keep the 17/12/66/72 inventory stable; reconcile any first-party label drift. | `catalogue.json` counts and source/date fields still validate. | complete |
| Q2 | Add the remaining 27 use-case cards to the reusable atom map and extend the machine-readable crosswalk. | Every mapped edge contains industry/team/use-case/idea IDs, status, confidence, score, evidence URL, and next gate. | complete — 51 edges / 66 use cases landed |
| Q3 | Score the first ten offer candidates against atom reuse, source-of-truth, approval risk, and browser-only difficulty. | Ten offer records with job, outcome metric, trigger, entities, candidate blocks, status, and next gate. | complete — `pilot-offers-001.json` |
| Q4 | Direct-source-review the finance pilot with a synthetic fixture set. | 20-case extraction/reconciliation/approval/read-back/recovery receipt; no production writes. | pending |
| Q5 | Direct-source-review the operations pilot in one low-risk queue. | Ten-case intake/route/write/read-back/recovery receipt. | pending |
| Q6 | Direct-source-review the CRM pilot with sandbox CRM/calendar and opt-out fixtures. | 20-case duplicate-safe qualification/send/booking/handoff receipt. | pending |
| Q7 | Produce candidate block admission notes only after pinned commit, license/provenance, adaptation, build, smoke, and owner/rollback evidence. | Explicit admitted/held/rejected status per candidate; no silent code lifting. | pending |
| Q8 | Expand the partial idea joins with bounded business-loop edges and avoid treating expertise tags as workflow proof. | Idea edge records include business loop, monetization event, status, confidence, evidence, and next gate. | complete — `crosswalk-batch-003.json`, 72/72 ideas |
| Q9 | Convert the three pilots into target-specific direct-source-review packets. | Each packet names source of truth, auth scope, allowed writes, fixtures, approval owner, read-back, rollback, and audit receipt. | pending |

## Queue rules

- Keep `catalog`, `documented`, `authenticated`, `implemented`, and `unverified`
  distinct in every file.
- A candidate repository is not an admitted block; a license label is not legal
  clearance.
- A system-of-record write requires a named authority, idempotency key,
  verification, rollback boundary, and audit receipt.
- Browser-only actions require target-specific read-back evidence; product-level
  Actionist claims do not substitute for it.
- Write an immutable checkpoint before reporting a milestone.
