# AM-PLATFORMS queue

Queue is bounded by `research/actionmodel-long-run/lanes/platforms.md`. Completed work stays in numbered checkpoints; queue state is mutable.

| ID | Work item | Status | Evidence/output |
|---|---|---|---|
| P-001 | First-party dossier: Manus | complete | `checkpoint-001.md`, source ledger |
| P-002 | First-party dossier: Airtable Omni | complete | `checkpoint-001.md`, source ledger |
| P-003 | First-party dossier: Zapier Interfaces → Forms | complete | `checkpoint-001.md`, rename and capability boundary |
| P-004 | First-party dossier: Base44 | complete | `checkpoint-001.md`, source/license/recovery caveats |
| P-005 | First-party dossier: Onlook | complete | `checkpoint-001.md`, docs + GitHub source boundary |
| P-006 | Reconcile local Lovable/Replit/v0/Bolt/Bolt.diy/Dyad/Plasmic/refine/screenshot-to-code/shadcn/E2B/open-lovable coverage against the shared matrix | complete | `checkpoint-002.md`, local evidence matrix and held claims |
| P-007 | First-party source review: NocoBase | complete | `checkpoint-003.md`, AI Builder/ACL/release docs and license boundary |
| P-008 | First-party source review: CopilotKit | complete | `checkpoint-003.md`, AG-UI/runtime/HITL docs and MIT source |
| P-009 | Verify image → design-token extraction gap | complete | `checkpoint-004.md`, local probe results and token-contract boundary |
| P-010 | Admit one real candidate through Block Contract v0 | blocked/held | `checkpoint-005.md`; source/license pass, stack/token/build/smoke/visual gates unresolved; no runtime edits/credentials |
| P-011 | Direct first-party source review: v0 Platform API and registry injection | complete | `checkpoint-006.md`, API/registry/deployment/pricing reconciliation |
| P-012 | Direct first-party review: Lovable current API, white-label, and rollback boundary | complete | `checkpoint-007.md`, Build with URL/MCP/branding/rollback reconciliation |
| P-013 | Adversarial cross-dossier and cross-lane comparison: authority, recovery, evidence, and admission boundaries | complete | `checkpoint-008.md` + `checkpoint-009.md`, decision ledger, tracker repair, and explicit holds |
| P-014 | Resolve/defer the held screenshot-to-code admission boundary, then mine the next highest-value gap | next | Requires an explicitly permitted isolated proof path or a documented defer decision |

## Queue rules

- Finish one bounded item, write its immutable checkpoint, then update `CURRENT.md` and `status.json`.
- Do not infer authenticated/live capability from docs or a landing page.
- When local evidence is sufficient, do not expand network discovery.
- If a queue item is blocked by credentials or an external live test, record the blocker and advance to the next evidence-only item.
