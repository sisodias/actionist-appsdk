# AM-PLATFORMS checkpoint-003 — NocoBase and CopilotKit source review

**Run:** `actionmodel-long-run-2026-08-26`  
**Lane:** `AM-PLATFORMS`  
**Observed:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**Scope:** first-party source/docs review for NocoBase and CopilotKit  
**Status:** documented/source evidence; no authenticated product session; no runtime code edits

## Headline

NocoBase and CopilotKit fill different gaps in the platform map. NocoBase is a data-model and business-system foundation that now documents an AI Builder with no-code and code-backed portal modes, ACL-aware agent operation, milestone versioning, audit logs, and cross-environment release/restore. CopilotKit is an agent-application interaction layer: AG-UI event streams, typed frontend tools, shared state, generative UI, and human-in-the-loop interrupts. Neither is a drop-in Actionist Builder, but together they validate two important seams: a reliable system kernel under AI construction, and a typed authority/interaction layer above an arbitrary agent backend.

The most consequential held claim is licensing: NocoBase’s GitHub repository contains both a custom `LICENSE.txt` (updated 2026-02-24) and `LICENSE-APACHE.txt`, while the GitHub API reports `NOASSERTION`. Treat NocoBase as source/reference-only until the exact edition, plugin set, commit, and distribution boundary receive legal review.

## Evidence status

| Platform | Catalogue | Documented/source | Authenticated/live | Implemented in Actionist |
|---|---|---|---|---|
| NocoBase | yes | yes; official docs and public source | no — public demo not exercised | no evidence |
| CopilotKit | yes | yes; official docs and MIT source | no — no live agent/app smoke | no evidence |

## Dossier 1 — NocoBase

### First-party evidence

- The AI Builder quick start says natural-language requirements can cover data modeling, UI building, workflow orchestration, permission setup, and going live. It distinguishes a no-code Portal (configuration stored in the database) from an AI Portal (React source written by an AI agent and committable to Git).
- The same page documents two access paths, shared data/users between portal modes, AI-designed tables and relationships, milestone versions created after completed and verified work, natural-language workflow creation, and Skills for environment management, data modeling, UI, workflows, ACL, solutions, plugins, release management, and version control.
- The data-sources docs describe a data-model-driven platform with main and external databases, REST API sources, external NocoBase sources, collections, relations, field validation, and an ER-diagram-like modeling interface.
- The UI Builder docs describe WYSIWYG editing, desktop/mobile layouts, blocks, data scopes, linkage rules, actions, action permissions, UI templates, and instant preview.
- Security & Audit docs describe API-key or OAuth authentication, dedicated roles, least privilege, current-user attribution, request logs, audit logs with executor/resource/result/metadata, testing-environment validation, and manual confirmation for high-risk operations such as deletion, permission changes, plugin changes, and system configuration.
- Version Control saves restorable versions after meaningful verified milestones, but requires the Version Control and Backup Management plugins; the AI Skill itself does not automatically restore a version. Release Management supports backup restore and cross-environment migration, but requires Professional edition or above plus management plugins.
- The public repo documents a microkernel/plugin architecture with full-stack plugins. GitHub page metadata says Apache-2.0, but the API check returned `NOASSERTION`; the root contains a custom `LICENSE.txt` and an Apache license file. This is a license boundary, not a cleared adoption decision.

### Shared comparison matrix

Legend: `D` = documented; `B` = bounded/partial; `U` = unverified; `H` = held/rejected. The columns follow `lanes/platforms.md`: `I` intent capture, `P` planning, `R` retrieval, `S` scaffold selection, `T` design tokens, `D` schema binding, `X` execution environment, `B` browser operation, `A` approvals, `V` testing, `L` deployment, `K` rollback, `Q` auditability, `$` cost, `E` extensibility.

| Platform | I | P | R | S | T | D | X | B | A | V | L | K | Q | $ | E |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| NocoBase | D | B | B | D | B | D | D | U | D | D | D | D | D | B | D |
| CopilotKit | D | B | B | B | B | B | D | B | D | B | B | U | D | B | D |

### NocoBase reading

NocoBase is the strongest reviewed source for “AI operates a governed business-system kernel.” It has more of the authority, data, release, and audit vocabulary that the generic builders omit. It is not equivalent to Actionist’s agent-operation plane: its browser/UI surface is its own application, and the docs do not prove arbitrary third-party GUI operation. It is best treated as a reference architecture or possible isolated scaffold candidate after license and edition review.

## Dossier 2 — CopilotKit

### First-party evidence

- CopilotKit’s official docs describe a frontend stack with chat components, headless UI, generative UI, shared state, human-in-the-loop, sub-agents, streaming, and any AG-UI-compatible backend.
- AG-UI is documented as an open, event-based, bidirectional protocol connecting an agentic frontend to an agent backend. Its building blocks include typed/static and declarative generative UI, event-sourced shared-state diffs, frontend tool calls, backend tool rendering, interrupts that pause/approve/edit/retry/escalate, sub-agent composition, steering, and streamed tool output.
- CopilotKit’s architecture docs describe three layers: frontend SDK/components, a runtime in the application server that brokers auth/tool calls/AG-UI, and any compatible agent backend. The runtime can be mounted in Next.js, Express, Hono, Bun, Deno, or Workers. Frontend tools can execute in browser context and return results to the agent.
- The human-in-the-loop guide shows a frontend tool gated by a user decision and explicitly identifies browser APIs, UI state, third-party frontend libraries, and immediate browser context as valid use cases.
- The public CopilotKit repo is MIT-licensed. The main-branch API snapshot on 2026-08-26 reported SHA `786f4f525cf9c78f881442c4b0b94d69dfe81937` and release `v1.69.2` in the latest commit message. This establishes source freshness, not a live integration test.

### CopilotKit reading

CopilotKit materially overlaps the proposed Actionist evidence/authority plane at the interaction boundary: typed tools, streaming state, human interrupts, and inspectable protocol events. It does not provide a scaffold catalogue, schema migration engine, deployment/rollback controller, or general browser/computer-use worker. It is a possible UI/protocol sidecar or reference, not a builder replacement.

## What is genuinely differentiated after this review

| Evidence-backed capability | Best reviewed reference | Remaining Action Model gap/opportunity |
|---|---|---|
| Natural-language full-system construction over a governed data model | NocoBase AI Builder | Client-specific scaffold admission, typed Block Contracts, and portability across systems. |
| Permission-aware AI mutation and least privilege | NocoBase Security & Audit / ACL Skills | One shared authority model that spans generated tools and GUI-operated external apps. |
| Milestone verification, versioning, restore, and cross-environment release | NocoBase Version/Release Management | A provider-neutral recovery contract covering DB state, deployment state, and external side effects. |
| Typed agent↔UI interaction and approval interrupts | CopilotKit + AG-UI | Evidence links, idempotency, approval policy, and post-action verification bound to a client workflow atom. |
| Generative/interactive UI under application control | CopilotKit generative UI/AG-UI | Reusable design-token/scaffold registry admitted by source, license, visual proof, and smoke evidence. |
| Arbitrary browser operation across third-party software | None of these two sources | Still an Actionist differentiator, but it requires direct Actionist capability evidence rather than competitor absence alone. |

## Held/rejected claims

- **Held:** “NocoBase is simply Apache-2.0.” The repository includes `LICENSE-APACHE.txt` but also a custom `LICENSE.txt`; GitHub API metadata is `NOASSERTION`. Edition/plugin-specific obligations are unresolved.
- **Held:** “NocoBase AI Builder is universally available.” The quick start requires an alpha CLI for AI Portal building; Version Control and Release Management have plugin/edition prerequisites, including Professional+ for release management.
- **Held:** “NocoBase’s version skill automatically rolls back any change.” Docs say the Skill creates versions after verified milestones, but restoration is performed through the Version Control plugin and overwrites current application configuration/data included in the version.
- **Held:** “NocoBase gives an AI arbitrary browser control.” Its docs support CLI/API/UI configuration of NocoBase; no arbitrary external GUI operation is established.
- **Held:** “CopilotKit is an app builder.” It supplies an agent UX/runtime/protocol layer; schema, scaffold, deployment, and rollback remain application responsibilities.
- **Held:** “CopilotKit frontend tools are computer-use automation.” They execute in a user’s browser context and can touch browser APIs/UI state, but this is not evidence of general cross-application computer use.
- **Held:** “AG-UI guarantees production reliability.” It is a protocol/documentation surface; no live Actionist integration or end-to-end smoke was run here.
- **Not claimed:** authenticated/live behavior, Actionist implementation, exact cloud pricing, legal clearance, or a complete deployment test.

## Sources, dates, and machine receipts

All web pages below were read/searched on **2026-08-26**. Page crawlers showed “today” or within four days; the observation date is the lane’s source date.

### NocoBase

- [AI Builder Quick Start](https://docs.nocobase.com/ai-builder) — observed 2026-08-26; natural-language build, no-code/AI Portal split, Skills, milestones, security/audit links.
- [Data sources overview](https://docs.nocobase.com/data-sources) — observed 2026-08-26; internal/external data sources and collection modeling.
- [UI Builder](https://docs.nocobase.com/interface-builder) — observed 2026-08-26; WYSIWYG blocks, actions, permissions, layouts, preview.
- [Security & Audit](https://docs.nocobase.com/ai-builder/security) — observed 2026-08-26; authentication, roles, least privilege, logs, manual high-risk confirmation.
- [Version Control](https://docs.nocobase.com/ai-builder/version-control) — observed 2026-08-26; milestone versions and restore boundary.
- [Release Management](https://docs.nocobase.com/ai-builder/publish) — observed 2026-08-26; backup restore/migration and Professional+ prerequisite.
- [ACL Configuration](https://docs.nocobase.com/ai-builder/acl) — observed 2026-08-26; natural-language role/action/data-scope policy changes and risk reports.
- [Plugin Development](https://github.com/nocobase/nocobase/blob/main/docs/docs/en/plugin-development/index.md) — observed 2026-08-26; microkernel/plugin and full-stack extension model.
- [NocoBase repository](https://github.com/nocobase/nocobase) — observed 2026-08-26; source, README, public demo links, and license files.
- [NocoBase custom license](https://raw.githubusercontent.com/nocobase/nocobase/main/LICENSE.txt) — API read on 2026-08-26; file says updated 2026-02-24 and defines Community/Commercial/Upper Layer Application terms.
- [NocoBase Apache license file](https://raw.githubusercontent.com/nocobase/nocobase/main/LICENSE-APACHE.txt) — API read on 2026-08-26; Apache 2.0 text is present, but coexistence with `LICENSE.txt` requires review.
- GitHub API receipt on 2026-08-26: default branch `main`, SHA `eab849eba0aef24638dfa070f27361a6d0b3723d`, `pushed_at=2026-08-25T15:18:11Z`, `license=NOASSERTION`.

### CopilotKit / AG-UI

- [CopilotKit docs](https://docs.copilotkit.ai/) — observed 2026-08-26; UI primitives and compatible backends.
- [AG-UI overview](https://docs.copilotkit.ai/ag-ui/introduction) — observed 2026-08-26; event protocol, typed tools, state, interrupts, tracing/streaming.
- [CopilotKit architecture](https://docs.copilotkit.ai/concepts/architecture) — observed 2026-08-26; frontend/runtime/agent split and request flow.
- [Human-in-the-loop guide](https://docs.copilotkit.ai/teams/ag2/human-in-the-loop) — observed 2026-08-26; browser-context frontend tools and approval gate.
- [CopilotKit repository](https://github.com/CopilotKit/CopilotKit) — observed 2026-08-26; MIT source, runtime/skills inventory, current release surface.
- GitHub API receipt on 2026-08-26: default branch `main`, SHA `786f4f525cf9c78f881442c4b0b94d69dfe81937`, `pushed_at=2026-08-26T01:23:26Z`, `license=MIT`.

No credentials or live product sessions were used. No files outside `research/actionmodel-long-run/outputs/platforms/` were modified.

## Next gate

P-009: verify the image→design-token gap from local evidence, then source one candidate for a real Block Contract admission. The candidate must pass canonical URL, pinned commit, license/provenance, adoption mode, stack contract, build command, smoke, and visual/contract evidence before any “admitted” label is used.
