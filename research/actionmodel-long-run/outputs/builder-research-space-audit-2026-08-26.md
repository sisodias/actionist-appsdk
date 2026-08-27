# Builder Research Space Audit — 2026-08-26

## Scope and evidence

This is a file-first audit of the live Herdr workspace labelled `BUILDER-RESEARCH` and the durable reports it produced. It records what was actually present at inspection time; pane status alone is not treated as completion proof.

Live Herdr resolution found one builder-research workspace:

- Workspace: `BUILDER-RESEARCH` (`w659e97bee4b2b4`)
- Tabs/panes: four tabs, one named agent pane per tab
- Current lane labels: `ECOSYSTEM-COMMERCIAL`, `REUSABLE-BLOCKS`, `SAAS-CATALOGUE`, `RESEARCH-SYNTHESIS`
- Live status at inspection: all four lanes idle
- No second workspace with a builder-research label was present in the live map

The workspace was inspected without starting services, using credentials, modifying production data, or dispatching new work.

## Lane findings

### ECOSYSTEM-COMMERCIAL

Durable outputs:

- `Documents/Codex/2026-08-26/realtime-voice-chat/outputs/builder-ecosystem-report.md`
- `Documents/Codex/2026-08-26/realtime-voice-chat/outputs/builder-ecosystem-sweep.md`
- `Documents/Codex/2026-08-26/realtime-voice-chat/outputs/crm-revops-research.md` (a later CRM/RevOps handoff from this pane)

The ecosystem work mapped commercial and open-source builder shapes across Lovable, v0, Bolt, Replit, Base44, Manus, Airtable, Zapier, Onlook, Cursor, Claude Code web, GitHub Copilot cloud agent, Bubble, Retool, Google AI Studio/Firebase Studio, Antigravity, browser-use tools, sandboxes, and workflow builders.

The main conclusion is that generic prompt-to-app generation is crowded. The stronger Actionist hypothesis is a governed loop: portable source-of-truth, known scaffolds/blocks, approval, isolated execution, browser/visual evidence, client handoff, rollback, and operation of existing API-less software.

The lane did not authenticate a product, build a candidate, establish OEM/white-label rights, or admit a reusable block. The sweep report still says `Status: in progress`, while the larger ecosystem report has completed milestone sections; that tracker drift needs reconciliation.

### REUSABLE-BLOCKS

Durable outputs:

- `Documents/Codex/2026-08-26/realtime-voice-chat/outputs/reusable-block-framework-report.md`
- `Documents/Codex/2026-08-26/realtime-voice-chat/outputs/finance-ops-research.md`

The framework defines a manifest-backed block rather than a copied repository and specifies gates for provenance, licensing, dependency closure, static boundaries, AST/CST transforms, data/tenant safety, UI contracts, clean build/runtime, visual proof, ownership, and rollback.

Its final recommendation is one narrow, read-only, permissively licensed UI/CRUD pilot. Arbitrary source-to-block conversion remains speculative.

The finance lane is the first full vertical deep dive. It ranked 15 candidates, kept the client ledger authoritative, and narrowed the smallest useful pilot to staged evidence/reconciliation/approval with idempotency and audit records. OpenBooks and Accounted are control-contract references, not admitted code; AGPL, audit, jurisdiction, ownership, and rollback remain gates.

### SAAS-CATALOGUE

Durable output:

- `Documents/Codex/2026-08-26/realtime-voice-chat/outputs/saas-catalogue.md`

The catalogue completed its local-estate inventory, public map, and final-priority crosswalk. It records 17 local systems and 34 public candidates, including SISOCRM, Chatwoot, listmonk, AFFiNE/SISO Docs, Teable, Instatic/Bykonz, Postiz, Hi.Events, Plane, Baserow, shadcn/ui, Refine, AutoSaaS, siso-ui-base, and Great Library.

Its highest-priority local/public candidates are Chatwoot, listmonk, AFFiNE/SISO Docs, Teable, Instatic/Bykonz, Postiz, Hi.Events, SISOCRM/Plane, Baserow + shadcn/ui + Refine, and the local governance substrates.

The strongest permissive public composition is `shadcn/ui + Refine + explicit host contract`. The catalogue does not claim arbitrary SaaS standardization, production readiness, legal clearance, or an admitted Actionist block.

### RESEARCH-SYNTHESIS

Durable output:

- `Documents/Codex/2026-08-26/realtime-voice-chat/outputs/research-synthesis.md`

The director report decomposes the problem into identity, transformation, composition, grounding, verification, authority, operation, and economics. It concludes that the build plane is crowded and that the potential moat is provenance-gated admission plus grounding and authority/verification/operation.

Its most important finding is that the programme has substantial desk research but zero executed admission receipts: no scan, real candidate transform, isolated build, browser smoke, visual baseline, cheap-model evaluation, or authenticated Actionist API call.

Its highest-priority unresolved tracks are:

- `MODEL-EVAL`: 20 bounded-diff tasks against a fixed scaffold
- `LICENSE-EXEC`: ScanCode plus one fixture/Horizon scan
- `ACTIONIST-CONTRACT`: API/auth/data/deployment/approval facts from Cena
- `UNIFY-CONTRACT`: merge the Block Contract drafts
- `SISO-UI-BASE-RECON` and `ATOM-BLOCK-JOIN`
- sandbox/threat/economics evaluation
- counsel-grade AGPL/GPL review

The synthesis file is not fully current: it still records an earlier “SAAS-CATALOGUE not landed” state and says operations/CRM deep dives are future work, while `saas-catalogue.md` and `crm-revops-research.md` now exist. Those claims should be reconciled before downstream use.

## Additional CRM/RevOps artefact

`crm-revops-research.md` is a substantial additional report. It inventories SISOCRM, Payload lead intake, Chatwoot, listmonk, voice onboarding, Postiz, Hi.Events, and a bounded GitHub/OSS set including Twenty, Frappe CRM, EspoCRM, SuiteCRM, ERPNext, Activepieces, Atomic CRM, Cal.diy, Mautic, n8n, Baserow, and pretix.

Its validation shortlist is Payload lead intake, Chatwoot, Activepieces, Atomic CRM, Frappe CRM, Cal.diy, Hi.Events, and ERPNext. It explicitly says these are validation targets, not build or purchase recommendations, and admits no candidate.

## Cross-lane conclusion

Builder Research produced a real research foundation and a reusable evidence discipline. It did not produce a working Actionist builder or an admitted block. The most valuable existing local precedents are the adapted Chatwoot/listmonk modules, siso-ui-base’s harvest/gate/judge loop, Great Library provenance structures, SISOCRM contracts, and the finance staged-reconciliation pattern.

The next value is execution-class proof, not another broad market sweep.

## Separate artefact intentionally excluded

`go-live-independent-audit.md` exists in the same output directory, but it is a separate streaming/go-live release audit. It is not included in the Builder Research conclusions above.

## Closure record

Closure verified: `herdr workspace close w659e97bee4b2b4` returned success; the workspace no longer appears in `workspace list`, and none of the four named builder agents appears in `agent list`. The durable reports above remain on disk. `CENA`, `PERSONAL`, and `FAMMY` remained open and untouched.
