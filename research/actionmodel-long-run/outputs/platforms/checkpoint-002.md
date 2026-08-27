# AM-PLATFORMS checkpoint-002 — local coverage reconciliation

**Run:** `actionmodel-long-run-2026-08-26`  
**Lane:** `AM-PLATFORMS`  
**Observed:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**Scope:** existing local coverage for Lovable, Replit, v0, Bolt, bolt.diy, Dyad, Plasmic, refine, screenshot-to-code, shadcn registries, E2B, and open-lovable  
**Status:** local evidence audit; no new network discovery; no runtime code edits

## Result

The local platform material is substantive enough to preserve the current architecture direction, but it is not yet an admission ledger. The strongest locally supported patterns are:

- Lovable: plan/build modes, templates, hosted preview, curated retrieval/“Vent Tool,” and known preview-versus-production/security boundaries.
- Replit: plan decomposition, regular testing, rollback checkpoints, and isolated snapshot state.
- v0: registry-backed design systems, model specialization, isolated chats/sandboxes, and API/branch/PR/deploy surfaces.
- Bolt/WebContainers and bolt.diy: in-browser execution plus locks, diffs, snapshots, and model adapters.
- Dyad: local-first/BYOK isolation and a test/eval harness.
- refine, Plasmic, shadcn registries: deterministic schema/resource, component/slot/token, and registry primitives.
- screenshot-to-code and E2B/open-lovable: image-to-code and sandbox/preview building blocks.

The audit also confirms what is *not* locally proven: authenticated/live behavior, arbitrary browser operation, approval boundaries, immutable audit, safe database rollback, exact current costs, and candidate-repo admission. Local GitHub sweep JSON is a discovery receipt, not a Block Contract or legal clearance.

## Local source inventory and evidence quality

| Platform/group | Local sources read | What the local source actually supports | Evidence boundary |
|---|---|---|---|
| Lovable | `research/builder-architecture-intel-2026-08-25.md:9-19`; `research/lovable-teardown-2026-08-26.md:14-24,42-54` | Build/Plan modes, templates, retrieval/vent loop, preview, GitHub/cloud, connectors, version and security caveats; v0 comparison. | Strong synthesis, but the teardown says the full sourced report lives in an agent transcript; direct URL ledger and authenticated test are still missing. |
| Replit | `research/builder-architecture-intel-2026-08-25.md:36-40` | Plan decomposition, regular testing, rollback checkpoints, immutable snapshot chunks, dev/prod DB separation. | Supported local summary; no live test or direct source capture in this lane yet. |
| v0 | `research/builder-architecture-intel-2026-08-25.md:28-34`; `research/lovable-teardown-2026-08-26.md:46-52` | Registry/model specialization, error repair/lint, isolated chats, API, files/repo seeding, branch/PR/deploy, design-system injection. | Strongest local incumbent evidence; per-call cost and exact frontend/backend limits remain explicit gaps. |
| Bolt.new / WebContainers | `research/builder-architecture-intel-2026-08-25.md:21-26` | Browser-native Node/WASM runtime, in-memory FS, virtual TCP, iframe preview; isolation does not guarantee convergence. | Runtime evidence only; commercial license and production behavior require source review. |
| bolt.diy | `research/builder-architecture-intel-2026-08-25.md:21-26,65-67` | Multi-provider adapter, file locks, diffs, snapshots/revert, workspace UX. | Candidate control-plane evidence; current license and production smoke are not verified here. |
| Dyad | `research/builder-architecture-intel-2026-08-25.md:65-68`; `research/github-sweep/lane1-ai-app-builder.json`; `research/github-sweep/SWEEP-MERGED.json` | Local-first/BYOK isolation and Vitest/Playwright/eval harness; GitHub discovery receipt reports `other` license metadata. | Useful source candidate, not admitted; core Apache-2.0 versus `src/pro` FSL boundary needs direct source/license review. |
| Plasmic | `research/builder-architecture-intel-2026-08-25.md:69` | Registry contract, slots/variants, tokenized styling, code generation named as takeaways. | Mention-only in local summary; no direct source URL, version, smoke, or hosted/product boundary in this lane. |
| refine | `research/builder-architecture-intel-2026-08-25.md:68`; `research/github-recon-2026-08-26.md:30-39` | Declarative resources, auto-CRUD, 15+ data providers, MIT claim, deterministic scaffold value. | Strong primitive hypothesis; no pinned commit or actual Block Contract extraction. |
| screenshot-to-code | `research/github-recon-2026-08-26.md:21-28` | `abi/screenshot-to-code`, MIT, active, screenshot→HTML/Tailwind/React/Vue; image→design-token search returned zero usable repos. | GitHub API search receipt; no pinned commit, build/smoke, or token-extraction proof. |
| shadcn registries | `research/builder-architecture-intel-2026-08-25.md:28-34,69,76-77`; `research/github-sweep/lane2-component-registry.json`; `research/github-sweep/lane2-shadcn-template.json` | Model-readable registry/component/slot/token pattern and many search candidates. | Registry concept is supported; individual JSON candidates with empty/`other` licenses are not cleared for reuse. |
| E2B | `research/builder-architecture-intel-2026-08-25.md:67`; `research/github-recon-2026-08-26.md:41-46` | E2B sandboxed execution adjacency; `e2b-dev/desktop` and dashboard Apache-2.0 search receipts. | Runtime candidate only; no Actionist integration, cost, approval, or recovery proof. |
| open-lovable | `research/builder-architecture-intel-2026-08-25.md:67`; `research/lovable-teardown-2026-08-26.md:53-54` | E2B execution and targeted file discovery; local MIT claim. | Candidate reference only; direct repo/license/pinned-commit/build evidence still required. |

## Comparison matrix reconciliation

The matrix below uses the exact capability order from `lanes/platforms.md`. It is intentionally conservative and reflects only local evidence available on 2026-08-26.

Legend: `E` = locally evidenced behavior; `B` = bounded/partial evidence; `C` = catalogue or candidate mention; `U` = unverified/missing; `H` = held pending direct source/admission. A local `E` is not authenticated/live.

| Platform | I | P | R | S | T | D | X | B | A | V | L | K | Q | $ | E |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Lovable | E | E | E | E | U | B | E | U | U | B | E | B | B | B | E |
| Replit | E | E | U | U | U | B | E | U | U | E | B | E | E | U | B |
| v0 | E | U | E | E | E | B | E | U | U | E | E | B | B | U | E |
| Bolt.new/WebContainers | E | U | U | U | U | U | E | U | U | B | B | U | U | U | B |
| bolt.diy | E | U | U | U | U | U | E | U | U | B | U | E | B | U | E |
| Dyad | C | U | U | U | U | U | E | U | U | E | U | B | U | U | E |
| Plasmic | U | U | E | E | E | B | U | U | U | U | B | U | U | U | E |
| refine | U | U | U | E | U | E | B | U | U | B | U | U | B | U | E |
| screenshot-to-code | E | U | U | E | B | U | B | U | U | U | U | U | U | U | B |
| shadcn registries | U | U | E | E | E | U | U | U | U | B | U | U | B | U | E |
| E2B | U | U | U | U | U | U | E | B | U | B | U | U | B | U | E |
| open-lovable | C | U | E | B | U | U | E | U | U | U | U | U | U | U | B |

Column legend: `I` intent capture; `P` planning; `R` retrieval; `S` scaffold selection; `T` design tokens; `D` schema binding; `X` execution environment; `B` browser operation; `A` approvals; `V` testing; `L` deployment; `K` rollback; `Q` auditability; `$` cost; `E` extensibility.

### What this matrix changes

1. **The assembly thesis survives.** v0/registries, refine, Plasmic, screenshot-to-code, and the local scaffold candidates cover separate deterministic primitives. No single local source proves the full assembly/admission pipeline.
2. **Runtime isolation is not the wedge by itself.** WebContainers, Replit snapshots, E2B, and open-lovable cover execution/preview patterns, but local evidence still shows repair loops and preview/production gaps.
3. **Recovery is uneven and frequently partial.** Replit and bolt.diy provide the clearest local recovery patterns; Lovable history is code-only per the local teardown; v0 branch/PR/deploy is not the same as an external side-effect rollback.
4. **Evidence and authority remain mostly unfilled columns.** Approval, arbitrary browser operation, immutable audit, and external system verification are `U` in nearly every row.
5. **License metadata is not admission.** The sweep includes empty/`other` license values, mixed-license boundaries, and no pinned commits. The local rules correctly keep these in candidate/reference status.

## Strong local evidence vs. merely mentioned

### Strong enough to carry forward as design input

- Registry-backed assembly and model specialization: `builder-architecture-intel-2026-08-25.md:28-34,73-92`.
- Plan/build/test/recovery phase shape: `builder-architecture-intel-2026-08-25.md:36-40,78-92`.
- In-browser execution and control-plane primitives: `builder-architecture-intel-2026-08-25.md:21-26,65-67`.
- Deterministic resource/scaffold primitives: `builder-architecture-intel-2026-08-25.md:65-69` and `github-recon-2026-08-26.md:30-39`.
- Screenshot-to-code and the image→design-token gap: `github-recon-2026-08-26.md:21-28`.
- Candidate discovery is broad, but the corpus/search receipt is not a license/admission proof: `github-sweep/SWEEP-MERGED.json` and the lane JSON files.

### Held until a direct evidence pass

- Lovable pricing/credit economics, current changelog details, and white-label/API conclusions from the teardown: `lovable-teardown-2026-08-26.md:25-52,83-84`.
- Exact v0 quotas/pricing and frontend/backend scope; the local teardown itself marks pricing unverified: `lovable-teardown-2026-08-26.md:46-52,83`.
- Plasmic behavior beyond the local one-line summary; direct docs/source and an export/import smoke are missing.
- bolt.diy MIT boundary, Dyad core/pro license boundary, open-lovable MIT claim, and every candidate with empty/`other` metadata.
- Any “implemented” or “production-ready” label for a repository without pinned commit, build command, smoke result, and visual/contract evidence.

## Rejected shortcuts

- A high star count, recent `updatedAt`, or a GitHub search result does not make a repository an admitted Block Contract.
- A local source naming a license does not replace copyright/provenance inspection of the exact commit and distribution boundary.
- A sandbox/iframe preview is not deployment verification.
- A snapshot, version history, or branch is not automatically rollback of databases or external side effects.
- A visual editor is not arbitrary browser operation; a code-generation repo is not a GUI-operating agent.

## Sources and dates

All local files above were read on 2026-08-26. The source files carry these publication/search dates: `builder-architecture-intel-2026-08-25.md` dated 2026-08-25; `lovable-teardown-2026-08-26.md` dated 2026-08-26; `github-recon-2026-08-26.md` dated 2026-08-26; `research/github-sweep/*` records have per-result `updatedAt` values and were treated as API search receipts, not direct source documentation.

No network lookup was performed for this checkpoint. The next network work is explicitly named in the queue: first-party NocoBase and CopilotKit source review.

## Next gate

Start P-007 with NocoBase first-party source/docs, then P-008 with CopilotKit source/docs. Keep open-source source, hosted product, and AI positioning as separate evidence classes.
