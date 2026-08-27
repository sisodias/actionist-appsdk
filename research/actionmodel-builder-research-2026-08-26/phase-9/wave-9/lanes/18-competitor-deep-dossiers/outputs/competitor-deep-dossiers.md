# P9-L18 competitor deep dossiers

Observed 2026-08-27. This is research-only, first-party-source analysis for exactly PS-031 through PS-040. Direct evidence is stated as documented; inference is explicitly bounded; gated/unknown behavior is retained in each JSONL dossier. No login, client data, source execution, install, build, deploy, benchmark, scan, admission, or clone/copy activity occurred.

## Cross-surface readout

| Surface | Strongest direct evidence | Important boundary / unknown |
|---|---|---|
| PS-031 GitHub Copilot cloud agent | Repository research/plan/edit/test/PR loop; ephemeral Actions environment; security and audit controls | Engineering repository agent, not general app runtime; one repo/branch and 59-minute limits are documented |
| PS-032 Softgen | Public first-party pricing identity only | Capability, artifacts, runtime, governance and export are not established |
| PS-033 Databutton → Riff | Databutton FAQ documents React/TypeScript + Python/FastAPI and ZIP code export | Riff successor parity, migration, current economics and backend portability unknown |
| PS-034 Blink | Agent provisions DB/storage/hosting, configures auth/secrets, deploys frontend/backend; saved versions | Managed infrastructure and export parity are not the same; sandbox, governance and secret migration unknown |
| PS-035 Anything / Create.xyz | Conversation-built web/mobile apps, generated React/React Native, backend, accounts, payments, code download, publish | Functions public by default unless protected; rollback/data restore and full managed-service export unknown |
| PS-036 WeWeb | AI designs/workflows/backend, visual editor, external backends, self-host/code-export paths | Backend/secrets migration and formal agent checkpoints unknown |
| PS-037 Glide / GlideOS | Data-connected AI-assisted business apps, roles/row owners, private-by-default security | PWA only: no traditional app-store publish or self-hosting; source export unknown |
| PS-038 Superblocks | Governed AI internal apps, central integration/secrets/audit, RBAC, isolated ephemeral execution, Cloud/Hybrid/Cloud-Prem | Enterprise deployment model varies by data/inference boundary; pricing and restore semantics unknown |
| PS-039 AppSheet Gemini | Natural-language schema/view/action suggestions; AI automations; admin policy and audit export | Paid-tier/Enterprise Plus distinctions; no general source-code/runtime portability evidence |
| PS-040 Power Apps/Copilot | Natural-language app/data-model generation, Copilot editing, solutions/environments, DLP/lifecycle governance | Some AI features are preview; licensing, connector and external export details are time-sensitive/unknown |

## Decision-useful distinctions

The strongest repository-native control plane is PS-031: branch/diff/PR review, signed commits, security checks and human merge approval are first-party documented. The strongest governed internal-app posture is PS-038, where integration control, RBAC, audit and deployment placement are part of the product boundary. PS-036 and PS-034 provide the clearest public self-host/managed-infrastructure contrast: WeWeb emphasizes host/self-host freedom, while Blink emphasizes one managed full-stack platform. PS-037 is a data/workflow PWA surface, not a native app-store or self-hosted artifact. PS-039 and PS-040 are enterprise low-code ecosystems whose AI generation is bounded by licensing, admin policy and (for Power Apps) preview status.

Softgen and the Databutton→Riff transition are the principal evidence gaps. Databutton evidence is retained only for Databutton-specific claims; it is not silently assigned to Riff. No 144-cell matrix is padded: undocumented dimensions remain explicit unknowns in the dossiers.

## Provenance and boundary

See `source-register.jsonl` for the ten first-party source sets and `feature-claim-receipts.jsonl` for claim-level URL/date/falsifier receipts. `competitor-dossiers.jsonl` is the canonical ten-record output. This lane is `UNEXECUTED`, `NOT_ADMITTED`, `admitted_blocks=0`, parent active, promotion false.
