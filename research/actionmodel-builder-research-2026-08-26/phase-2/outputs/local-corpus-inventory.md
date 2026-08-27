# Local Corpus Inventory — Phase 2

- Observed at: `2026-08-26T16:17:49.536Z`
- Lane: `RCH-LOCAL-CORPUS`
- Scope: read-only local discovery across an explicit laptop allowlist; outputs are limited to this phase-2 lane.
- Research-only boundary: no code copying, implementation, build, deployment, client-data admission, deletion, move, rename, network access, or source execution.

## Inventory totals

| Metric | Count |
|---|---:|
| Allowlisted corpus paths | 79 |
| Readable metadata paths | 76 |
| Permission-limited paths | 0 |
| Missing/unreadable paths | 3 |
| Known metadata manifests found | 202 |
| Exact canonical-path alias records | 0 |
| Nested/overlapping canonical paths | 5 |
| Manifest-identity overlap records | 0 |
| JSONL records including boundary | 80 |

## Category summary

| Category | Paths | Readable | Bounded entries | Manifests |
|---|---:|---:|---:|---:|
| autosass | 1 | 1 | 1061 | 11 |
| autosass_docs | 1 | 1 | 1 | 1 |
| autosass_research | 1 | 1 | 4 | 0 |
| autosass_template | 2 | 2 | 12 | 1 |
| dataset | 9 | 8 | 776 | 60 |
| github_corpus | 1 | 1 | 3 | 0 |
| github_dataset | 1 | 1 | 1 | 1 |
| github_incoming | 1 | 1 | 3 | 0 |
| github_index | 4 | 4 | 53 | 2 |
| github_pipeline | 2 | 2 | 125 | 2 |
| github_research_pack | 2 | 2 | 14 | 0 |
| github_scratch | 2 | 2 | 110 | 0 |
| github_tooling_cache | 4 | 4 | 35 | 4 |
| private_builder_archive | 15 | 15 | 5699 | 89 |
| private_registry | 2 | 2 | 220 | 0 |
| research_pack | 12 | 11 | 789 | 5 |
| template_registry | 10 | 10 | 181 | 3 |
| ui_21st_component | 2 | 2 | 10000 | 11 |
| ui_component | 4 | 3 | 97 | 0 |
| ui_hub | 1 | 1 | 2131 | 11 |
| ui_registry | 1 | 1 | 5000 | 1 |
| ui_tooling | 1 | 1 | 1 | 0 |

## Representative discovered material

- **LC-001 · ui_21st_component** — `/Users/shaansisodia/SISO_Workspace/siso-ui-base/registry/21st`; bounded entries 5000, metadata bytes 268183941; manifests 1; rights: no explicit license/ownership signal in allowlisted metadata; relevance: 21st.dev/UI registry material; component discovery and reusable UI metadata.
- **LC-002 · ui_registry** — `/Users/shaansisodia/SISO_Workspace/siso-ui-base/registry`; bounded entries 5000, metadata bytes 7125537; manifests 1; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Parent UI registry containing 21st.dev and other reusable component entries.
- **LC-003 · ui_21st_component** — `/Users/shaansisodia/SISO_Workspace/SISO_Knowledge/design-system/library/21st-dev`; bounded entries 5000, metadata bytes 9661926; manifests 10; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Knowledge-library mirror of 21st.dev design/component material.
- **LC-004 · ui_component** — `/Users/shaansisodia/SISO_Workspace/SISO_Knowledge/design-system/viewer/components`; bounded entries 17, metadata bytes 69952; manifests 0; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Local design-system viewer component corpus.
- **LC-005 · ui_component** — `/Users/shaansisodia/SISO_Workspace/SISO_Agency/ecosystem-laptop-import/SISO-ECOSYSTEM/components`; bounded entries 3, metadata bytes 19678; manifests 0; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Imported ecosystem component material; inspectable as local metadata only.
- **LC-006 · ui_hub** — `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/oracle-streaming/.uihub`; bounded entries 2131, metadata bytes 288854241; manifests 11; rights: package_private:true; relevance: Application UI-hub registry/config material.
- **LC-007 · ui_component** — `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/isso-dashboard/components`; bounded entries 77, metadata bytes 249892; manifests 0; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Dashboard component corpus.
- **LC-009 · ui_tooling** — `/Users/shaansisodia/.storybook`; bounded entries 1, metadata bytes 48; manifests 0; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Local Storybook metadata/tooling boundary relevant to component inventory.
- **LC-010 · github_index** — `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/.siso/repo-index`; bounded entries 4, metadata bytes 22514261; manifests 1; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Repository index used by the agent base.
- **LC-011 · github_index** — `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/foundry/domains/github`; bounded entries 35, metadata bytes 9879925; manifests 0; rights: no explicit license/ownership signal in allowlisted metadata; relevance: GitHub-focused Foundry domain/index material.
- **LC-012 · github_index** — `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/extensions/knowledge-engine/github`; bounded entries 14, metadata bytes 915899; manifests 1; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Knowledge-engine GitHub corpus/index material.
- **LC-013 · github_pipeline** — `/Users/shaansisodia/SISO_Workspace/SISO_Research/siso-foundry/pipelines/github`; bounded entries 121, metadata bytes 836213476; manifests 1; rights: no explicit license/ownership signal in allowlisted metadata; relevance: GitHub research pipeline metadata and generated indexes.
- **LC-014 · github_pipeline** — `/Users/shaansisodia/SISO_Workspace/SISO_Knowledge/pipelines/github`; bounded entries 4, metadata bytes 20543; manifests 1; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Knowledge GitHub pipeline metadata.
- **LC-016 · github_corpus** — `/Users/shaansisodia/SISO_Workspace/SISO_Research/siso-stargate-corpus-data/data`; bounded entries 3, metadata bytes 7106945440; manifests 0; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Stargate corpus data parent; index/data relationship inspected by metadata only.
- **LC-017 · github_scratch** — `/Users/shaansisodia/SISO_Workspace/.agents/scratch/github-farm`; bounded entries 107, metadata bytes 941965314; manifests 0; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Local GitHub research scratch/farm material.
- **LC-018 · github_scratch** — `/Users/shaansisodia/SISO_Workspace/.agents/scratch/github-stars`; bounded entries 3, metadata bytes 2698462; manifests 0; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Local GitHub stars/repository research scratch material.
- **LC-019 · github_incoming** — `/Users/shaansisodia/.local/share/siso-foundry/incoming/github`; bounded entries 3, metadata bytes 415; manifests 0; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Incoming GitHub corpus landing area.
- **LC-020 · github_dataset** — `/Users/shaansisodia/SISO_Workspace/SISO_Research/siso-foundry/datasets`; bounded entries 1, metadata bytes 1490; manifests 1; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Foundry dataset collection, including repository/open-source research datasets.
- **LC-021 · github_research_pack** — `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/expansion/outputs`; bounded entries 8, metadata bytes 16737919; manifests 0; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Local expansion research outputs used as adjacent GitHub/open-source evidence; no source execution.
- **LC-022 · github_research_pack** — `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-2`; bounded entries 6, metadata bytes 384055; manifests 0; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Current Action Model research pack and phase metadata boundary.
- **LC-025 · github_tooling_cache** — `/Users/shaansisodia/.codex/.tmp/plugins/plugins/github`; bounded entries 31, metadata bytes 109625; manifests 4; rights: license_file_present:LICENSE.txt; relevance: Temporary GitHub plugin material; metadata-only inspection.
- **LC-026 · github_tooling_cache** — `/Users/shaansisodia/.claude/skills/foundry-corpus`; bounded entries 4, metadata bytes 53413; manifests 0; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Foundry corpus skill material related to repository indexes.
- **LC-027 · autosass** — `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/AutoSaaS`; bounded entries 1061, metadata bytes 6419291; manifests 11; rights: no explicit license/ownership signal in allowlisted metadata; relevance: AutoSaaS application corpus and associated builder material.
- **LC-028 · autosass_research** — `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/AutoSaaS/research`; bounded entries 4, metadata bytes 31652; manifests 0; rights: no explicit license/ownership signal in allowlisted metadata; relevance: AutoSaaS research pack.
- **LC-029 · autosass_template** — `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/AutoSaaS/base-template`; bounded entries 11, metadata bytes 9821; manifests 1; rights: no explicit license/ownership signal in allowlisted metadata; relevance: AutoSaaS base-template corpus.
- **LC-030 · autosass_template** — `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/AutoSaaS/templates`; bounded entries 1, metadata bytes 400; manifests 0; rights: no explicit license/ownership signal in allowlisted metadata; relevance: AutoSaaS reusable templates.
- **LC-031 · autosass_docs** — `/Users/shaansisodia/SISO_Workspace/SISO_Agency/docs/autosaas`; bounded entries 1, metadata bytes 6511; manifests 1; rights: no explicit license/ownership signal in allowlisted metadata; relevance: AutoSaaS documentation/research material.
- **LC-032 · private_registry** — `/Users/shaansisodia/SISO_Workspace/Great_Library_of_SISO/.local/private-registry`; bounded entries 12, metadata bytes 249216; manifests 0; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Private builder/registry material; ownership and rights left explicit/unknown where no license signal exists.
- **LC-033 · private_registry** — `/Users/shaansisodia/SISO_Workspace/Great_Library_of_SISO/registry`; bounded entries 208, metadata bytes 1189028; manifests 0; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Great Library registry and reusable builder metadata.
- **LC-034 · private_builder_archive** — `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/archive/dotsiso-agent-base/research`; bounded entries 8, metadata bytes 7704; manifests 1; rights: no explicit license/ownership signal in allowlisted metadata; relevance: Archived private builder research material.

The complete machine-readable register preserves one record per allowlisted path, including absolute path, type, path status, filesystem size/timestamps, canonical path, bounded entry/size counts, metadata manifest paths and signals, rights/ownership signals, dedupe relationship/basis, relevance, and safety boundary.

## Rights, ownership, and unknowns

License/ownership signals are evidence-preserving only: an observed LICENSE/NOTICE/package license/repository/author signal is recorded; absence is recorded as unknown and is not a rights grant. Private flags and archive labels are signals, not admission decisions. Source contents, credentials, browser data, and arbitrary untrusted files were not opened.

## Permission and path boundary

### Permission-limited paths

- None observed (`EACCES`/`EPERM` was not returned by the bounded scan).

### Missing or unreadable allowlist paths

- `/Users/shaansisodia/.external-clones/forked/claude-code-session-viewer/components` — ENOENT (explicitly not treated as discovered)
- `/Users/shaansisodia/SISO_Workspace/SISO_Research/siso-stargate-library/research` — ENOENT (explicitly not treated as discovered)
- `/Users/shaansisodia/SISO_Workspace/SISO_Internal_Lab/codebase/local-data` — ENOENT (explicitly not treated as discovered)

The boundary record in `local-corpus-register.jsonl` lists the exact roots, depth/entry limits, excluded subtrees, metadata names and byte cap, and the explicit no-source/no-execution policy.

## Dedupe relationship

Dedupe evidence is intentionally bounded. Exact aliases use canonical realpaths; nested roots are marked as overlapping without collapsing their records; safely parsed package identities are reported as manifest-identity overlaps. No corpus or source-content hashing was performed, so unique records mean “no exact path alias observed,” not “content uniqueness proven.”

## Verification contract

Post-write smoke must confirm: every JSONL line parses; all corpus paths are absolute; unavailable/permission-limited statuses are explicit; required metadata/rights/dedupe/relevance fields exist; report counts reconcile to the register; no untrusted source was opened/executed; no path outside the allowlist is represented as an inventory candidate; and only `RCH-LOCAL-CORPUS` state is updated after callback delivery.

## Fresh CENA callback receipt

- Delivered and visibly verified through Herdr on 2026-08-26.
- Recipient: `CENA` coordinator pane, freshly resolved immediately before delivery.
- Receipt: `[from: RCH-LOCAL-CORPUS] @CENA: DONE Phase-2 local corpus lane; 79 corpus records + BOUNDARY-001 (80 JSONL lines), 76 readable, 3 missing/unreadable, 0 permission-limited, 202 manifests; schema/path/rights/boundary smoke PASS; no source opened/executed, network none, parent phase unpromoted; 0 blockers; parent_goal active.`
- Herdr verification: first send remained queued; explicit `Enter` was sent once; the submitted receipt is visible in the CENA pane and CENA began coordinator verification.
