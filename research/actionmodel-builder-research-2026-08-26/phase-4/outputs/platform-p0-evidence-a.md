# Phase 4 platform P0 evidence A

Run: `actionmodel-builder-research-2026-08-26`  
Lane: `RCH-PLATFORM-P0-A`  
Scope: exactly Phase-3 platform-depth ranks 1–7  
Observation date: 2026-08-27  
Mode: research only; parent goal active

## Method and evidence boundary

This packet re-opened the exact first-party URLs carried by the Phase-3 triage register for ranks 1–7. Public HTTP reachability was checked with a read-only `curl -L` status/content-type/final-URL probe. Page content was inspected with a bounded public reader where available. No vendor login, credential, API key, trial, account, client/private data, browser/runtime action, repository clone, source copy, install, build, deployment, payment, external write, or admission was performed.

`E/D` means a first-party page was directly readable and a documented claim is attributable to that URL. `E/U` means the URL was reachable or redirected but the bounded public representation was thin, reader-limited, unsupported, or otherwise insufficient for a capability claim. `E/D+E/U` means the record contains both classes across its exact URLs. `D-claim` means documented first-party prose only; it is not authenticated behavior or a live capability proof. `INFERENCE` is separated explicitly. Reachability is never treated as capability.

Every normalized record is in [`platform-p0-evidence-a.jsonl`](./platform-p0-evidence-a.jsonl), one record per rank. Each record retains the Phase-3 identity, exact URL list, prior observation date, fresh access result, direct claims, inferences, capability-field status, unknown Block Contract fields, rights/OEM/support gaps, falsifier, smallest next read-only gate, and boundary markers.

Authenticated behavior remains `U` for all seven records. The public pages may document APIs, workflows, agents, runtime isolation, source output, pricing, or rollback language; none of those statements is a receipt that the product behaved in this lane.

## Normalized seven-record matrix

| Rank | Surface | Exact first-party source(s) | Fresh access / evidence | Direct documented surface | Principal unknowns and gate |
|---:|---|---|---|---|---|
| 1 | Locofy | https://www.dev.locofy.ai/docs/ | HTTP 200; directly readable but thin index; `E/D` | Plugin, CLI, MCP, and import-from-URL workflows are named; Figma/Penpot and Figma URL/access are described. | Workflow-specific input/output schema, authority, API semantics, export fidelity, deployment, tenancy, audit, support, maintenance, rollback, OEM. Follow only official workflow links. |
| 2 | v0 | https://vercel.com/docs/v0 | HTTP 200 → `https://v0.app/docs`; bounded reader unsupported/internal-error; `E/U` | HTTP-level reachability and redirect only. No capability claim refreshed. | All Block Contract and lifecycle fields remain `U`; re-open via another official static representation, without account or generation. |
| 3 | n8n | https://n8n.io/pricing/ | HTTP 200; directly readable; `E/D` | Public plan/pricing, cloud/self-hosted, execution usage, API/CLI/custom requests, workflow history, logging/audit, Git/version control, environments, collaboration, and support tiers are listed. | Complete portable schema, credential authority, idempotency/replay, rights, tenant isolation, maintenance, full restore/rollback, OEM. Follow public docs only. |
| 4 | Softgen | https://new.softgen.ai/pricing | HTTP 200; one-line/image-only reader response; `E/U` | Public reachability only; no readable plan or capability claim admitted. | All fields remain `U`; obtain a readable official static/docs page, no login or trial. |
| 5 | Browser Use | https://github.com/browser-use/browser-use/blob/main/CLOUD.md | HTTP 200; official public documentation directly readable; `E/D` | Cloud, prompt/file/image task inputs, API-key billing, sessions, agents, remote browsers, task/session/profile/file/log endpoints, stop/delete concepts are described. | Authority/consent, profile/credential rights, tenant isolation, retention, pricing details, maintenance, support, full export/replay, OEM. Read public Cloud/API docs only. |
| 6 | CodeSandbox | https://codesandbox.io/ | HTTP 200; homepage directly readable; `E/D` | APIs, isolated sandboxes, VM provisioning/decommissioning, snapshots/resume/hibernation, AI-agent use, untrusted-code evals, and CI/CD are described. | Security proof, network/secret policy, API schema, tenant isolation, pricing, audit, portability, maintenance, rollback semantics, OEM. Read public docs only. |
| 7 | NocoBase | https://docs.nocobase.com/ai-builder; https://www.nocobase.com/en/commercial | Docs HTTP 200 and direct; commercial HTTP 200 by curl but reader timeout; `E/D+E/U` | AI Builder natural-language requirements, data/UI/workflow/permission building, no-code vs AI Portal, Git/source claims, versions, release/backup/restore, audit guidance, and Skills are described. | Pricing/licensing, API/MCP, tenancy, rights, source fidelity, authority, audit receipts, support, maintenance, rollback completeness, OEM. Read official commercial/API/support docs only. |

## Rank dossiers

### Rank 1 — Locofy

Identity: canonical existing surface `existing::17`, source record 17, category `DTC REG AGT`.

Source: [`Locofy developer documentation`](https://www.dev.locofy.ai/docs/) — observed 2026-08-27, HTTP 200, direct public read, `E/D`. The page says Locofy supports Plugin, CLI, MCP, and Import from URL workflows for generating and shipping frontend code. It names Figma/Penpot plugin use, Figma URL input, Figma access prompts, and an MCP path for AI-native frontend development through agents and copilots.

Inference is limited to the page structure: these names indicate documented design-input and tool-integration surfaces, but do not prove output fidelity, permission scope, API success, repeatability, or deployment. Unknown Block Contract fields include the step schema, input/output ports, authority/consent, provenance, receipts, tenancy, cost, maintenance, recovery, support, lifecycle continuity, and OEM/white-label. Rights for imported designs and generated code are not established. Falsifier: an official workflow page contradicting the named paths or a public fixture showing the paths do not accept the documented inputs. Next gate: follow only official workflow links for CLI, MCP, export/fidelity, authority, support, deployment, and lifecycle; no login or execution. `authenticated_behavior=U`.

### Rank 2 — v0

Identity: canonical existing surface `existing::2`, source record 2, category `P2A DTC REG`.

Source: [`Vercel v0 docs URL`](https://vercel.com/docs/v0) — observed 2026-08-27, HTTP 200, redirects to `https://v0.app/docs`; the bounded reader returned unsupported-content-type/internal-error responses for the listed URL and redirect target, `E/U`. The only fresh evidence admitted is HTTP reachability and the public redirect. No pricing, API, export, deployment, tenancy, or lifecycle capability claim is refreshed.

The redirect suggests a documentation-host transition, but that is only an inference. All Block Contract fields remain `U`, including prompt/design/repository input, output fidelity, authority, API/MCP, export, deployment, tenancy, pricing, audit, portability, maintenance, support, rollback, lifecycle, rights, and OEM. Falsifier: a readable official page showing the identity is retired or materially changed. Next gate: re-open the exact URL and official target through another public static representation; no account, login, or generation run. `authenticated_behavior=U`.

### Rank 3 — n8n

Identity: canonical existing surface `existing::25`, source record 25, category `WF AGT REG`.

Source: [`n8n Plans and Pricing`](https://n8n.io/pricing/) — observed 2026-08-27, HTTP 200, direct public read, `E/D`. The page documents execution-based pricing; hosted and self-hosted plans; example plan prices and execution/concurrency/history limits; code steps; custom HTTP/GraphQL requests; cURL import; webhooks/queues; API and CLI control; self-hosted custom nodes; environments; Git/version control; execution logging; audit logging; retention; shared projects; RBAC-related collaboration; and support tiers including Enterprise dedicated support with SLA.

These are first-party documented claims, not a workflow run. The page does not prove a portable schema, credential/agent authority, idempotency, tenant isolation, rights clearance, full export/restore fidelity, rollback, maintenance, or OEM/white-label terms. Falsifier: a current official pricing/docs contradiction; behavior falsifier would require an approved workflow fixture and is out of scope. Next gate: public API/export, credentials/authority, audit/retention, version/restore, licensing, support, and partner/OEM documentation only. `authenticated_behavior=U`.

### Rank 4 — Softgen

Identity: canonical existing surface `existing::32`, source record 32, category `P2A INT AGT`.

Source: [`Softgen pricing`](https://new.softgen.ai/pricing) — observed 2026-08-27, HTTP 200, but the bounded reader exposed only a minimal response dominated by an image reference, `E/U`. No readable pricing, API, export, deployment, support, or lifecycle claim is admitted.

The response may be a JavaScript/image-backed page, but that is only an inference. All Block Contract fields remain `U`. HTTP reachability provides no rights, OEM/white-label, support, maintenance, or exit evidence. Falsifier: a readable official page showing a different identity or lifecycle; capability remains unproven. Next gate: a readable official static/docs representation, without login, trial, or generation. `authenticated_behavior=U`.

### Rank 5 — Browser Use

Identity: canonical existing surface `existing::60`, source record 60, category `CUSE AGT GOV`.

Source: [`Browser Use public CLOUD.md`](https://github.com/browser-use/browser-use/blob/main/CLOUD.md) — observed 2026-08-27, HTTP 200, direct public rendered documentation, `E/D`. The official document describes Browser Use Cloud as a hosted product accepting prompt/file/image tasks and API requests, with usage-based/API-key billing. It describes sessions, remote browsers, agent control, a stated 15-minute session limit, CDP control, API v2 task/session/browser/profile/file/log operations, profiles, output files, public shares, and stop/delete concepts.

The endpoint prose indicates a documented control surface, but no endpoint or authenticated account was used. Authority/approval, profile credential safety, tenant isolation, retention, rights, maintenance, support, complete export/replay, and OEM remain `U`. The document is a public repository page; no repository was cloned and no source was copied or executed. Falsifier: a current official CLOUD/API page contradicting the listed concepts. Next gate: public Cloud/API pricing, retention/deletion, authority, support, maintenance, OEM, and export docs only. `authenticated_behavior=U`.

### Rank 6 — CodeSandbox

Identity: canonical existing surface `existing::65`, source record 65, category `EXE AGT GOV`.

Source: [`CodeSandbox homepage`](https://codesandbox.io/) — observed 2026-08-27, HTTP 200, direct public read, `E/D`. The page states that APIs create isolated development environments; environments can run code, scale to many VMs, be provisioned/managed/decommissioned, and use snapshots, resume, microVM cloning/restoration, and configurable hibernation. It explicitly positions sandboxes for AI agents, parallel agents, untrusted-code interpretation/evals, and CI/CD.

Those are documented first-party claims. They do not prove an actual isolation boundary, secret/network policy, API schema, tenant isolation, pricing, audit, artifact portability, maintenance, or rollback semantics. No workspace, sandbox, code, or runtime was opened. Falsifier: an official security/API page contradicting isolation or snapshot claims; runtime falsification is out of scope. Next gate: public API, security, pricing, artifact-export, support, maintenance, and lifecycle pages only. `authenticated_behavior=U`.

### Rank 7 — NocoBase

Identity: canonical existing surface `existing::12`, source record 12, category `INT REG GOV`.

Sources: [`NocoBase AI Builder Quick Start`](https://docs.nocobase.com/ai-builder) — observed 2026-08-27, HTTP 200, direct public read, `E/D`; [`NocoBase commercial page`](https://www.nocobase.com/en/commercial) — HTTP 200 by curl, bounded reader timeout, `E/U`. The docs state that natural-language requirements can drive AI-assisted data modeling, UI building, workflow orchestration, and permission setup. They distinguish a no-code Portal with database-stored configuration from an AI Portal where an AI Agent writes frontend code that can be committed to Git. They describe versions/restorable milestones, workflows, ACL, plugin and release management, backup/restore, migration, security/audit guidance, and Skills.

The Portal split and source/Git language are direct documentation, not proof of code fidelity, rights, portability, or deployment. Restorable versions justify a read-only rollback follow-up but no rollback was tested. The commercial URL is reachable but pricing/licensing remain `U` because its content was not readable in this pass. API/MCP, tenancy, rights, authority, audit receipts, support, maintenance, rollback completeness, and OEM remain unknown. No CLI install, login, checkout, build, deployment, or runtime was performed. Falsifier: an official page contradicting the Portal, Git/source, version/restore, or Skill descriptions. Next gate: official commercial/licensing, API/MCP, tenancy, support, maintenance, export/restore, and OEM docs only. `authenticated_behavior=U`.

## Evidence limits, falsifiers, and next queue

The seven records intentionally preserve unknowns rather than filling them from marketing language. HTTP 200 proves that a URL responded to a read-only request; it does not prove capability. A directly readable first-party claim is attributable documentation; it is not a live implementation receipt. API names, source-output language, isolation language, pricing tables, or rollback language do not establish authenticated behavior, rights clearance, tenant boundaries, reliability, or admission readiness.

The immediate next read-only queue is: (1) Locofy workflow-specific CLI/MCP and export/authority pages; (2) v0 public documentation through a readable official representation; (3) n8n public API, credential, retention, export/restore, licensing, and support pages; (4) Softgen readable official pricing/docs; (5) Browser Use public pricing/retention/authority/export/support pages; (6) CodeSandbox public API/security/pricing/export pages; and (7) NocoBase public commercial/API/tenancy/support/restore/OEM pages. No queue item authorizes login, execution, build, deployment, client data, or admission.

## Boundary receipt

| Field | Value |
|---|---|
| Records | 7, ranks exactly 1–7, unique |
| Source policy | Public first-party URLs only; exact URLs preserved in JSONL |
| Authenticated behavior | `U` for all seven; no vendor login or API key |
| Execution/build/deployment | `UNEXECUTED`; no runtime, build, install, or deploy |
| Admission | `NOT_ADMITTED`; `admitted_blocks=0` |
| Client/private data | Not accessed |
| Implementation | `false`; `implementation_authorized=false` |
| Parent goal | `active` |
| Rights/OEM/support/maintenance/exit | Explicitly unknown unless directly documented; no legal or operational clearance inferred |

## Post-write smoke receipt

`P4_P0_A_POSTWRITE_PASS` — 2026-08-27. Structural and JSONL checks passed: 7 parseable records, ranks exactly 1–7, unique identities, required evidence/unknown/falsifier/gate/boundary fields, and exact source URL lists matching the Phase-3 top-seven register. Link check passed: all 8 unique exact URLs returned HTTP 200 after redirects. Boundary check passed: all seven records retain `authenticated_behavior=U`, `execution_status=UNEXECUTED`, `admission_status=NOT_ADMITTED`, `implementation_authorized=false`, and no login/client data/execution/build/deployment/admission. `git diff --check` passed for both lane outputs. Callback is the remaining handoff step; shared Phase-4 state is not promoted.

## Callback receipt

`P4_P0_A_CALLBACK_SENT_AND_VERIFIED` — 2026-08-27. CENA was fresh-resolved with `/Users/shaansisodia/.local/bin/herdr --session herdr-2 pane list`; the CENA pane was verified by recent content before delivery. The following exact message was sent with `pane run` to the freshly resolved CENA pane, then verified after sleep 2. Herdr initially showed the message queued, so Enter-only retries were sent after fresh pane resolution; the message then disappeared from the composer and appeared in CENA recent transcript. No retyping occurred.

> [from: RCH-P4-PLATFORM-P0-A] @CENA: DONE. Wrote phase-4/outputs/platform-p0-evidence-a.md and platform-p0-evidence-a.jsonl for exactly ranks 1-7 (7 records, 8 first-party URLs); direct/inferred/gated/thin evidence, Block Contract unknowns, rights/OEM/support gaps, falsifiers, and next read-only gates preserved. Post-write structural/JSONL/link/boundary/git smoke PASS; authenticated behavior U, execution UNEXECUTED, admission NOT_ADMITTED, parent active; 0 blockers. Full AGENT_PACKET and receipts in my pane.

Callback status: `received_and_verified`. CENA’s recent transcript contains the exact receipt. The shared Phase-4 state remains unpromoted.
