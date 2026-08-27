# AM-PLATFORMS checkpoint-008 — adversarial authority, recovery, and evidence comparison

**Run:** `actionmodel-long-run-2026-08-26`  
**Lane:** `AM-PLATFORMS`  
**Observed:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**Scope:** adversarial comparison of checkpoints 001–007; no new discovery  
**Status:** active lane milestone; one held admission blocker; no runtime code edits

## Verdict

After seven first-party/source reviews and the local OSS reconciliation, the platform landscape is converging around a split architecture:

1. **Build plane:** prompt/spec → plan → registry/scaffold/data binding → preview → deploy. Manus, Lovable, v0, Base44, Airtable Omni, and NocoBase each cover meaningful portions of this plane.
2. **Authority/operation plane:** typed actions, browser/GUI operation, approvals, verification, recovery, and audit. NocoBase and CopilotKit provide useful pieces, but the reviewed platforms do not document the complete cross-application loop.
3. **Evidence/registry plane:** source/license/provenance → normalized block → build/smoke/visual proof → admitted release. The reviewed private platforms expose registries, histories, hooks, or logs, but none documents the Action Model-specific admission contract over an OSS corpus.

The strongest differentiated thesis remains **build the client tool and the agent that operates long-tail software**, backed by an evidence plane. This is a product direction supported by the comparison, not a claim that Actionist has already implemented or authenticated it.

## Adversarial comparison ledger

| Plane / question | First-party evidence strongest in | What is proven | What remains missing or held |
|---|---|---|---|
| Intent capture | Manus, Airtable Omni, Base44, Lovable, v0, NocoBase | Natural-language app/system requests, images/files/web references, and some plan/refine modes. | Elicitation quality, structured spec completeness, and client-specific outcome metrics are not authenticated. |
| Planning before mutation | Airtable Omni, Base44 Discuss, NocoBase milestones, Lovable Plan mode | Several systems expose plan/refine or milestone concepts. | A provider-neutral `BuildSession`/approval contract and machine-readable assumption ledger. |
| Retrieval/context | v0 registry/file/repo/zip init; Lovable cross-project/MCP/API references; CopilotKit typed state/tools | Structured context injection is real and increasingly standard. | License/provenance-aware retrieval from the local corpus with abstention and evidence packs. |
| Scaffold/registry assembly | v0/shadcn registry; NocoBase blocks/plugins; local Plasmic/refine evidence | Components/blocks, tokens, dependencies, and data primitives can be assembled. | An admitted Actionist registry with pinned provenance, adaptation logs, stack contracts, and independent proof. |
| Schema/data binding | NocoBase, Airtable Omni, Base44, Lovable | Native data models, collections/tables/entities, auth, external data sources, and integrations are documented. | One portable schema/migration dialect and safe ownership/idempotency boundaries for client systems. |
| Execution/preview | Manus, Base44, Onlook, v0, Lovable, E2B/WebContainers local evidence | Hosted/container/iframe previews and some deployment surfaces are documented. | Preview-green versus deployment-green contract tests and external-side-effect verification. |
| Browser/GUI operation | CopilotKit frontend tools; Manus separate browser-operator surface; Onlook DOM editing | Browser-context UI actions and visual editing are documented in bounded scopes. | Arbitrary third-party software operation with authority, approvals, retries, idempotency, and post-action proof. |
| Approvals/authority | NocoBase ACL/security; CopilotKit HITL; Airtable permissions; Lovable workspace/project access | Identity, roles, permissions, and human interrupt patterns exist. | A common approval policy over sensitive workflow atoms, not just product/UI permissions. |
| Testing/validation | NocoBase verified milestones/logs; v0 deployment errors; screenshot-to-code QA source; local Replit/vibesdk evidence | Validation and repair are present in pieces. | A required build/type/route/browser/screenshot/deployment gate with bounded repair and machine verdicts. |
| Deployment | Lovable, Manus, Base44, v0/Vercel, NocoBase release management | Publish, custom/branded domains, Vercel hosting, cross-environment release, and status are documented. | Vendor-neutral deployment contract, rollback of data/external effects, and client-owned release evidence. |
| Recovery | NocoBase version/backup/restore; Base44 version publish/revert; Manus checkpoints; Lovable history; Replit local snapshot pattern | Reversible state is a design pattern, but boundaries are explicit. | Full state model separating code, DB, deployment, credentials, and external side effects. |
| Audit/evidence | NocoBase request/audit logs; CopilotKit AG-UI events; v0 hooks/usage; Lovable history/comments/security | Trace points and telemetry exist. | Immutable source→adaptation→proof→approval→release ledger for reusable blocks and workflows. |
| Image→token contract | Internal P2 design + v0/Onlook/other partial pieces | Vision-to-IR with confidence and human token approval is a coherent target. | Local sweep found no usable OSS raster→token→registry candidate; must be proven, not just proposed. |

## Decision ledger

### D-PLAT-01 — Builder-only differentiation is insufficient

**Decision:** Do not anchor Action Model’s premium wedge on “chat creates an app.”  
**Evidence:** checkpoint-001 covers five current priority builders; checkpoint-003 adds NocoBase/CopilotKit; checkpoint-006 and checkpoint-007 document v0/Lovable APIs and registry/context surfaces.  
**Confidence:** high for the reviewed sources; no universal market claim.

### D-PLAT-02 — Keep the build plane constrained and registry-backed

**Decision:** Use vetted archetypes, typed blocks, token slots, schema contracts, and bounded adaptation rather than unconstrained foundation invention.  
**Evidence:** local `builder-architecture-intel-2026-08-25.md:71-92`; checkpoint-002 local matrix; checkpoint-006 v0 registry docs; checkpoint-004 internal Block Contract/token probes.  
**Confidence:** supported; implementation not yet admitted.

### D-PLAT-03 — Make evidence/authority a first-class plane

**Decision:** Preserve a separate evidence plane for provenance/license, adaptation, build/smoke/visual proof, approval, release, and recovery.  
**Evidence:** checkpoint-003 NocoBase audit/release and CopilotKit protocol; checkpoint-005 held candidate gates; checkpoint-006 v0 telemetry limits; checkpoint-007 Lovable database rollback caveat.  
**Confidence:** high as a design requirement; no Actionist implementation claim.

### D-PLAT-04 — Treat GUI operation as the wedge, but do not overclaim it

**Decision:** Continue investigating the agent-operation plane for legacy/API-less software, while requiring direct Actionist evidence before calling it differentiated capability.  
**Evidence:** checkpoint-001/003/006/007 repeatedly find no reviewed builder source documenting arbitrary external GUI operation plus approval and verification. CopilotKit browser tools and Manus browser product are bounded references, not substitutes.  
**Confidence:** strategic inference; implementation status unverified.

### D-PLAT-05 — Optional vendor integrations must sit behind adapters

**Decision:** v0/Vercel, NocoBase, Manus, and similar platforms may be optional references/integrations, not the Actionist contract boundary.  
**Evidence:** checkpoint-003 holds NocoBase license/edition adoption; checkpoint-006 holds v0 OEM, vendor-neutral deployment, pricing, and rollback; checkpoint-007 holds Lovable OEM and full-state rollback; checkpoint-001 holds Manus latest-only publish rollback.  
**Confidence:** high for risk posture.

## Explicit holds and blockers

### H-001 — `abi/screenshot-to-code` Block Contract admission

Checkpoint-005 clears canonical URL, pinned upstream commit, and MIT source license, but holds adoption because the candidate is a whole app and lacks current stack/token/adaptation/build/smoke/visual proof. This is one compound blocker and remains the only active blocker in `status.json`.

### H-002 — Authenticated/live evidence

No product API key or signed-in platform session was used in this lane. All platform claims remain `catalogue`, `documented`, `source`, or `unverified`; none is promoted to `authenticated/live`.

### H-003 — Legal/provenance boundaries

NocoBase contains both a custom license and an Apache license file with GitHub API `NOASSERTION`. Candidate repos with empty/`other` metadata remain reference-only. The lane has not performed legal clearance.

### H-004 — Cost and limits

Exact current per-call costs, usage meters, quotas, and enterprise entitlements remain unnormalized across platforms. User plan pages are not a substitute for API billing evidence.

## Rejected shortcuts

- “Agent,” “deploy,” “production,” “history,” or “MCP” in a product page is not implementation evidence for the full plane.
- Branded URLs/custom domains are not OEM/white-label licensing.
- Version history is not automatically database or external-side-effect rollback.
- Browser-context frontend tools or DOM visual editors are not arbitrary computer-use operation.
- A registry is not a provenance/license/admission system.
- A GitHub license field, star count, or recent update is not a pinned-commit Block Contract proof.

## Source paths and dates

This synthesis was produced from the immutable packets below, all observed/written on 2026-08-26:

- `research/actionmodel-long-run/outputs/platforms/checkpoint-001.md` — Manus, Airtable Omni, Zapier Forms, Base44, Onlook.
- `research/actionmodel-long-run/outputs/platforms/checkpoint-002.md` — local incumbent/OSS matrix reconciliation.
- `research/actionmodel-long-run/outputs/platforms/checkpoint-003.md` — NocoBase and CopilotKit.
- `research/actionmodel-long-run/outputs/platforms/checkpoint-004.md` — image→design-token gap.
- `research/actionmodel-long-run/outputs/platforms/checkpoint-005.md` — screenshot-to-code admission gate.
- `research/actionmodel-long-run/outputs/platforms/checkpoint-006.md` — v0 Platform API and registry.
- `research/actionmodel-long-run/outputs/platforms/checkpoint-007.md` — Lovable API, branding, and rollback.
- `research/actionmodel-long-run/outputs/platforms/CURRENT.md`, `queue.md`, and `status.json` — mutable lane control plane.

## Next gate

P-014: resolve or formally defer H-001 under an explicitly permitted isolated proof path; if it remains held, mine the next highest-value evidence gap without broad discovery. The lane remains `active`, with one blocker and no admitted Block Contract.
