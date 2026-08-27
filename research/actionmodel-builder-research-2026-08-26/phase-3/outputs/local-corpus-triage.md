# Action Model Builder — Phase-3 local corpus triage

**Lane:** `RCH-LOCAL-CORPUS-TRIAGE`  
**Run:** `actionmodel-builder-research-2026-08-26`  
**Phase:** `source-depth-and-pilot-preparation`  
**Observed:** 2026-08-26 ICT  
**Mode:** metadata/manifest-signal research only  
**Status:** bounded triage draft pending post-write smoke and callback  
**Boundary:** no vendor login, source opening, arbitrary-file read, clone, network, execution, build, deploy, delete, move, rename, external write, or admission.

## 1. Contract and evidence boundary

This packet ranks the Phase-2 local-corpus inventory using only the recorded `LC-001`–`LC-079` metadata and bounded manifest signals. It does not open arbitrary source files and does not infer source behavior, rights clearance, ownership, freshness, uniqueness, or reusability from path names or volume.

A readable path means only that the bounded Phase-2 metadata walk read metadata. A missing path remains missing/unreadable. A license, author, repository, private, or archive signal is preserved as metadata evidence only; none is a rights grant or admission receipt. `BOUNDARY-001` is the governing allowlist and no candidate outside its roots is introduced.

## 2. Input receipt

| Input | Recorded result |
|---|---|
| Phase-3 program/state | [PHASE-3-PROGRAM.md](../PHASE-3-PROGRAM.md); [phase-3-state.json](../phase-3-state.json) |
| Phase-2 inventory | [local-corpus-inventory.md](../../phase-2/outputs/local-corpus-inventory.md) |
| Phase-2 register | [local-corpus-register.jsonl](../../phase-2/outputs/local-corpus-register.jsonl) |
| Phase-2 root count | 79 `LC-*` corpus paths |
| Register lines | 80 including `BOUNDARY-001` |
| Path status | 76 `readable_metadata`; 3 `missing_or_unreadable`; 0 permission-limited |
| Overlap status | 5 nested canonical-path overlaps; no content hashing; no manifest-identity overlaps |
| Known manifests | 202 in Phase-2 inventory summary |
| Register SHA-256 | `a40f6e4c3d8439c720fbe1d387f3d260a5f84e8f51430cbb6dddd16618ed5d39` |
| Inventory SHA-256 | `49df8eb4f61c2dec190366601f2269dd83c9a5cf8bd32a1d43a83bc183ef9a9d` |

## 3. Queue model

Seven non-destructive queues cover every root:

| Queue | Roots | Ranking intent |
|---|---:|---|
| UI / 21st.dev and component hubs | 9 | UI/catalog reach and reusable-component metadata, tempered by overlap, rights, and truncation |
| GitHub indexes / datasets / pipelines | 26 | Index/schema/data-corpus leverage and manifest identity signals |
| AutoSaaS | 5 | Builder/template/process metadata with currentness and ownership follow-up |
| Private builders and registries | 9 | Registry/builder relevance, always gated by owner/rights authorization |
| Archives | 8 | Historical/reference value, provenance and retention first |
| Research packs | 12 | Source/owner/freshness metadata for later bounded reading |
| Templates and registries | 10 | Template identity and rights metadata, not template capability |

**Score is a triage priority only:** queue relevance base + bounded-entry signal + manifest-count signal + recorded mtime signal + readable-status signal − rights uncertainty − overlap/truncation penalties. It is not a quality, safety, legal, or reuse score. Tiers `P0`–`P3` are queue ordering labels only.

## 4. Queue leaders

Top three records per queue, with all 79 records in the exact register below. Scores are reproducible from the formula in §3 and the Phase-2 metadata fields.

| Queue | Rank 1 | Rank 2 | Rank 3 |
|---|---|---|---|
| UI / 21st.dev and component hubs | `LC-006` (P0, 114) | `LC-002` (P0, 110) | `LC-003` (P0, 110) |
| GitHub indexes / datasets / pipelines | `LC-079` (P0, 99) | `LC-025` (P0, 96) | `LC-013` (P0, 95) |
| AutoSaaS | `LC-027` (P0, 120) | `LC-028` (P0, 93) | `LC-029` (P1, 89) |
| Private builders and registries | `LC-033` (P1, 89) | `LC-040` (P1, 85) | `LC-032` (P1, 82) |
| Archives | `LC-043` (P1, 84) | `LC-042` (P1, 83) | `LC-041` (P1, 78) |
| Research packs | `LC-054` (P0, 92) | `LC-060` (P1, 83) | `LC-050` (P1, 78) |
| Templates and registries | `LC-061` (P1, 84) | `LC-066` (P1, 84) | `LC-062` (P1, 82) |

The first column above is intentionally compact; the full exact path/status/rights/overlap/freshness record is below. No leader is a reusable-block recommendation.

## 5. Exact 79-record triage register

| Global rank | Queue rank | LC ID | Queue | Tier/score | Path status | Exact absolute path | Entries | Manifests | Overlap | Rights state | Freshness signal | Next gate |
|---:|---:|---|---|---|---|---|---:|---:|---|---|---|---|
| 1 | 1 | `LC-027` | AutoSaaS | P0/120 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/AutoSaaS` | 1061 | 11 (README.md, manifest.json) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `autosass_manifest_metadata_review` |
| 2 | 1 | `LC-006` | UI / 21st.dev and component hubs | P0/114 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/oracle-streaming/.uihub` | 2131 | 11 (README.md, manifest.json, package.json) | `unique_canonical_path_in_allowlist` | `metadata_signal_requires_rights_review` | `recent_mtime_signal` | `ui_manifest_rights_metadata_review` |
| 3 | 2 | `LC-002` | UI / 21st.dev and component hubs | P0/110 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/siso-ui-base/registry` | 5000 | 1 (README.md) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `ui_manifest_rights_metadata_review` |
| 4 | 3 | `LC-003` | UI / 21st.dev and component hubs | P0/110 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Knowledge/design-system/library/21st-dev` | 5000 | 10 (README.md) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `older_mtime_signal` | `ui_manifest_rights_metadata_review` |
| 5 | 4 | `LC-001` | UI / 21st.dev and component hubs | P0/107 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/siso-ui-base/registry/21st` | 5000 | 1 (README.md) | `nested_under:LC-002;not_deduped` | `unknown_no_rights_signal` | `recent_mtime_signal` | `ui_manifest_rights_metadata_review` |
| 6 | 1 | `LC-079` | GitHub indexes / datasets / pipelines | P0/99 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/oracle-streaming/.research` | 654 | 60 (Cargo.toml, LICENSE, LICENSE.txt, README.md, go.mod, manifest.json, package.json) | `unique_canonical_path_in_allowlist` | `metadata_signal_requires_rights_review` | `aging_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 7 | 2 | `LC-025` | GitHub indexes / datasets / pipelines | P0/96 | `readable_metadata` | `/Users/shaansisodia/.codex/.tmp/plugins/plugins/github` | 31 | 4 (LICENSE.txt, README.md) | `unique_canonical_path_in_allowlist` | `metadata_signal_only_not_clearance` | `aging_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 8 | 3 | `LC-013` | GitHub indexes / datasets / pipelines | P0/95 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Research/siso-foundry/pipelines/github` | 121 | 1 (README.md) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 9 | 2 | `LC-028` | AutoSaaS | P0/93 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/AutoSaaS/research` | 4 | 0 (none recorded) | `nested_under:LC-027;not_deduped` | `unknown_no_rights_signal` | `recent_mtime_signal` | `autosass_manifest_metadata_review` |
| 10 | 1 | `LC-054` | Research packs | P0/92 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/research` | 340 | 3 (LICENSE, README.md) | `unique_canonical_path_in_allowlist` | `metadata_signal_only_not_clearance` | `recent_mtime_signal` | `research_pack_provenance_metadata_review` |
| 11 | 5 | `LC-007` | UI / 21st.dev and component hubs | P0/91 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/isso-dashboard/components` | 77 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `older_mtime_signal` | `ui_manifest_rights_metadata_review` |
| 12 | 6 | `LC-009` | UI / 21st.dev and component hubs | P0/90 | `readable_metadata` | `/Users/shaansisodia/.storybook` | 1 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `ui_manifest_rights_metadata_review` |
| 13 | 4 | `LC-011` | GitHub indexes / datasets / pipelines | P1/89 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/foundry/domains/github` | 35 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 14 | 3 | `LC-029` | AutoSaaS | P1/89 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/AutoSaaS/base-template` | 11 | 1 (README.md) | `nested_under:LC-027;not_deduped` | `unknown_no_rights_signal` | `older_mtime_signal` | `autosass_manifest_metadata_review` |
| 15 | 1 | `LC-033` | Private builders and registries | P1/89 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/Great_Library_of_SISO/registry` | 208 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `private_registry_rights_owner_review` |
| 16 | 7 | `LC-004` | UI / 21st.dev and component hubs | P1/88 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Knowledge/design-system/viewer/components` | 17 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `older_mtime_signal` | `ui_manifest_rights_metadata_review` |
| 17 | 5 | `LC-017` | GitHub indexes / datasets / pipelines | P1/88 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/.agents/scratch/github-farm` | 107 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `aging_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 18 | 4 | `LC-031` | AutoSaaS | P1/88 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agency/docs/autosaas` | 1 | 1 (README.md) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `older_mtime_signal` | `autosass_manifest_metadata_review` |
| 19 | 6 | `LC-078` | GitHub indexes / datasets / pipelines | P1/88 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/Polymarket-Research/data` | 88 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `aging_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 20 | 7 | `LC-014` | GitHub indexes / datasets / pipelines | P1/86 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Knowledge/pipelines/github` | 4 | 1 (README.md) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 21 | 8 | `LC-021` | GitHub indexes / datasets / pipelines | P1/86 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/expansion/outputs` | 8 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 22 | 9 | `LC-073` | GitHub indexes / datasets / pipelines | P1/86 | `readable_metadata` | `/Users/shaansisodia/foundry-scratch` | 9 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 23 | 10 | `LC-012` | GitHub indexes / datasets / pipelines | P1/85 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/extensions/knowledge-engine/github` | 14 | 1 (README.md) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `aging_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 24 | 11 | `LC-022` | GitHub indexes / datasets / pipelines | P1/85 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK/SISO/research/actionmodel-builder-research-2026-08-26/phase-2` | 6 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 25 | 2 | `LC-040` | Private builders and registries | P1/85 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/archive/dotsiso-slash-agent-runtime/child-runs-archive` | 967 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `older_mtime_signal` | `private_registry_rights_owner_review` |
| 26 | 8 | `LC-005` | UI / 21st.dev and component hubs | P1/84 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agency/ecosystem-laptop-import/SISO-ECOSYSTEM/components` | 3 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `older_mtime_signal` | `ui_manifest_rights_metadata_review` |
| 27 | 12 | `LC-016` | GitHub indexes / datasets / pipelines | P1/84 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Research/siso-stargate-corpus-data/data` | 3 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 28 | 13 | `LC-019` | GitHub indexes / datasets / pipelines | P1/84 | `readable_metadata` | `/Users/shaansisodia/.local/share/siso-foundry/incoming/github` | 3 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 29 | 14 | `LC-020` | GitHub indexes / datasets / pipelines | P1/84 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Research/siso-foundry/datasets` | 1 | 1 (manifest.json) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 30 | 15 | `LC-026` | GitHub indexes / datasets / pipelines | P1/84 | `readable_metadata` | `/Users/shaansisodia/.claude/skills/foundry-corpus` | 4 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 31 | 1 | `LC-043` | Archives | P1/84 | `readable_metadata` | `/Users/shaansisodia/.siso-agent-base-retirement-archive-20260809` | 2222 | 47 (LICENSE, README.md, index.json, package.json, registry.json) | `unique_canonical_path_in_allowlist` | `metadata_signal_requires_rights_review` | `recent_mtime_signal` | `archive_provenance_metadata_review` |
| 32 | 1 | `LC-061` | Templates and registries | P1/84 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agents/siso-skills-hub/registry` | 46 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `template_manifest_metadata_review` |
| 33 | 2 | `LC-066` | Templates and registries | P1/84 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Knowledge/module_templates` | 23 | 1 (README.md) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `template_manifest_metadata_review` |
| 34 | 5 | `LC-030` | AutoSaaS | P1/83 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/AutoSaaS/templates` | 1 | 0 (none recorded) | `nested_under:LC-027;not_deduped` | `unknown_no_rights_signal` | `older_mtime_signal` | `autosass_manifest_metadata_review` |
| 35 | 2 | `LC-042` | Archives | P1/83 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/bykonz-archive-2026-08-23` | 1480 | 38 (LICENSE, LICENSE.txt, README.md, package.json) | `unique_canonical_path_in_allowlist` | `metadata_signal_requires_rights_review` | `recent_mtime_signal` | `archive_provenance_metadata_review` |
| 36 | 2 | `LC-060` | Research packs | P1/83 | `readable_metadata` | `/Users/shaansisodia/Downloads/myGUMM_Competitor_Deep_Dive_2026-08-23` | 358 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `research_pack_provenance_metadata_review` |
| 37 | 3 | `LC-032` | Private builders and registries | P1/82 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/Great_Library_of_SISO/.local/private-registry` | 12 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `private_registry_rights_owner_review` |
| 38 | 3 | `LC-062` | Templates and registries | P1/82 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agents/siso-skills-hub/templates` | 11 | 1 (README.md) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `template_manifest_metadata_review` |
| 39 | 16 | `LC-072` | GitHub indexes / datasets / pipelines | P1/82 | `readable_metadata` | `/Users/shaansisodia/foundry-data` | 10 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `aging_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 40 | 17 | `LC-077` | GitHub indexes / datasets / pipelines | P1/82 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agency/apps/SISOCRM-w1-ticketing-runtime/data` | 1 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 41 | 18 | `LC-071` | GitHub indexes / datasets / pipelines | P1/81 | `readable_metadata` | `/Users/shaansisodia/SISO_Foundry_Data` | 7 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `aging_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 42 | 19 | `LC-076` | GitHub indexes / datasets / pipelines | P1/81 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/data` | 6 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `aging_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 43 | 20 | `LC-018` | GitHub indexes / datasets / pipelines | P1/80 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/.agents/scratch/github-stars` | 3 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `aging_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 44 | 21 | `LC-023` | GitHub indexes / datasets / pipelines | P1/80 | `readable_metadata` | `/Users/shaansisodia/.codex/plugins/cache/openai-curated-remote/github` | 0 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 45 | 22 | `LC-010` | GitHub indexes / datasets / pipelines | P1/78 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/.siso/repo-index` | 4 | 1 (index.json) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `older_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 46 | 4 | `LC-038` | Private builders and registries | P1/78 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/archive/dotsiso-slash-agent-base-curator/templates` | 31 | 1 (README.md) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `older_mtime_signal` | `private_registry_rights_owner_review` |
| 47 | 3 | `LC-041` | Archives | P1/78 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/_archive` | 389 | 2 (README.md) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `archive_provenance_metadata_review` |
| 48 | 3 | `LC-050` | Research packs | P1/78 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/Great_Library_of_SISO/research` | 23 | 1 (README.md) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `research_pack_provenance_metadata_review` |
| 49 | 4 | `LC-063` | Templates and registries | P1/78 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agents/siso-skills-hub/data` | 1 | 1 (README.md) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `template_manifest_metadata_review` |
| 50 | 5 | `LC-065` | Templates and registries | P1/78 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/siso-stargate-library/registry` | 3 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `template_manifest_metadata_review` |
| 51 | 6 | `LC-067` | Templates and registries | P1/78 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/templates` | 86 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `older_mtime_signal` | `template_manifest_metadata_review` |
| 52 | 23 | `LC-074` | GitHub indexes / datasets / pipelines | P1/78 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Internal_Lab/codebase/public/data` | 1 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `aging_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 53 | 24 | `LC-015` | GitHub indexes / datasets / pipelines | P1/77 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Research/siso-stargate-corpus-data/data/index` | 0 | 0 (none recorded) | `nested_under:LC-016;not_deduped` | `unknown_no_rights_signal` | `recent_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 54 | 25 | `LC-024` | GitHub indexes / datasets / pipelines | P1/76 | `readable_metadata` | `/Users/shaansisodia/.codex/plugins/cache/openai-curated/github` | 0 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `aging_mtime_signal` | `index_dataset_manifest_metadata_review` |
| 55 | 7 | `LC-064` | Templates and registries | P1/76 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Research/siso-evidence-engines/registry` | 1 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `template_manifest_metadata_review` |
| 56 | 5 | `LC-034` | Private builders and registries | P1/75 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/archive/dotsiso-agent-base/research` | 8 | 1 (README.md) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `older_mtime_signal` | `private_registry_rights_owner_review` |
| 57 | 8 | `LC-068` | Templates and registries | P2/74 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/.siso/agents/templates` | 4 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `aging_mtime_signal` | `template_manifest_metadata_review` |
| 58 | 6 | `LC-035` | Private builders and registries | P2/73 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/archive/dotsiso-agent-base/templates` | 9 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `older_mtime_signal` | `private_registry_rights_owner_review` |
| 59 | 7 | `LC-036` | Private builders and registries | P2/73 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/archive/dotsiso-agent-base/data` | 8 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `older_mtime_signal` | `private_registry_rights_owner_review` |
| 60 | 4 | `LC-055` | Research packs | P2/73 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Research/siso-foundry/packages/research-topics` | 6 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `research_pack_provenance_metadata_review` |
| 61 | 8 | `LC-037` | Private builders and registries | P2/72 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/archive/dotsiso-slash-agent-base-curator/registry` | 5 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `older_mtime_signal` | `private_registry_rights_owner_review` |
| 62 | 9 | `LC-039` | Private builders and registries | P2/72 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/archive/dotsiso-slash-agent-runtime/research` | 5 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `older_mtime_signal` | `private_registry_rights_owner_review` |
| 63 | 4 | `LC-047` | Archives | P2/72 | `readable_metadata` | `/Users/shaansisodia/codex-archive-20260808` | 243 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `archive_provenance_metadata_review` |
| 64 | 5 | `LC-057` | Research packs | P2/72 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Internal_Lab/codebase/.docs/research` | 48 | 1 (README.md) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `older_mtime_signal` | `research_pack_provenance_metadata_review` |
| 65 | 6 | `LC-059` | Research packs | P2/72 | `readable_metadata` | `/Users/shaansisodia/Downloads/myGUMM-research-preview-2026-08-24` | 4 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `research_pack_provenance_metadata_review` |
| 66 | 9 | `LC-069` | Templates and registries | P2/72 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agent_Base/office/agency/c-builder` | 1 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `aging_mtime_signal` | `template_manifest_metadata_review` |
| 67 | 5 | `LC-045` | Archives | P2/71 | `readable_metadata` | `/Users/shaansisodia/codex-archive-20260817` | 166 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `archive_provenance_metadata_review` |
| 68 | 6 | `LC-046` | Archives | P2/71 | `readable_metadata` | `/Users/shaansisodia/codex-archive-20260816` | 164 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `archive_provenance_metadata_review` |
| 69 | 7 | `LC-049` | Research packs | P2/71 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Knowledge/research` | 2 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `research_pack_provenance_metadata_review` |
| 70 | 10 | `LC-070` | Templates and registries | P2/71 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/tour-guides-template` | 5 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `older_mtime_signal` | `template_manifest_metadata_review` |
| 71 | 8 | `LC-051` | Research packs | P2/70 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/Great_Library_of_SISO/site/research` | 1 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `research_pack_provenance_metadata_review` |
| 72 | 9 | `LC-052` | Research packs | P2/70 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/Great_Library_of_SISO/site/works/research` | 1 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `research_pack_provenance_metadata_review` |
| 73 | 10 | `LC-053` | Research packs | P2/70 | `readable_metadata` | `/Users/shaansisodia/SISO_Workspace/Great_Library_of_SISO/site/works/declassified-corpus` | 1 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `research_pack_provenance_metadata_review` |
| 74 | 11 | `LC-058` | Research packs | P2/69 | `readable_metadata` | `/Users/shaansisodia/Downloads/SISO-Internal-UI-Redesign-Pack-2026-07-23/review-board/foundry/foundry.research` | 5 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `aging_mtime_signal` | `research_pack_provenance_metadata_review` |
| 75 | 7 | `LC-048` | Archives | P2/61 | `readable_metadata` | `/Users/shaansisodia/codex-transcript-archive` | 2 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `archive_provenance_metadata_review` |
| 76 | 9 | `LC-008` | UI / 21st.dev and component hubs | P2/58 | `missing_or_unreadable` | `/Users/shaansisodia/.external-clones/forked/claude-code-session-viewer/components` | 0 | 0 (none recorded) | `unknown_due_to_unavailable_path` | `unverified_due_to_missing_path` | `unknown_mtime` | `path_recheck` |
| 77 | 8 | `LC-044` | Archives | P2/58 | `readable_metadata` | `/Users/shaansisodia/codex-archive-nightly` | 0 | 0 (none recorded) | `unique_canonical_path_in_allowlist` | `unknown_no_rights_signal` | `recent_mtime_signal` | `archive_provenance_metadata_review` |
| 78 | 26 | `LC-075` | GitHub indexes / datasets / pipelines | P3/50 | `missing_or_unreadable` | `/Users/shaansisodia/SISO_Workspace/SISO_Internal_Lab/codebase/local-data` | 0 | 0 (none recorded) | `unknown_due_to_unavailable_path` | `unverified_due_to_missing_path` | `unknown_mtime` | `path_recheck` |
| 79 | 12 | `LC-056` | Research packs | P3/38 | `missing_or_unreadable` | `/Users/shaansisodia/SISO_Workspace/SISO_Research/siso-stargate-library/research` | 0 | 0 (none recorded) | `unknown_due_to_unavailable_path` | `unverified_due_to_missing_path` | `unknown_mtime` | `path_recheck` |

### 5.1 Record-level fields preserved in JSONL

Every JSONL record retains the original `LC` ID, absolute `path`, `path_status`, `canonical_path`, `dedupe_relationship`, `dedupe_basis`, size/timestamp fields, bounded entry/file/directory counts, scan depth/truncation, exact `rights_signals`, manifest names/kinds/identity signals, relevance, and the original safety boundary. It adds only triage fields; it does not rewrite the Phase-2 register.

## 6. Required follow-up and falsifiers

### Rights and ownership

- 70 readable roots have no recorded license/ownership signal. They remain `unknown_no_rights_signal`.
- 2 roots have license/author/repository metadata signals only. They remain `metadata_signal_only_not_clearance`.
- 4 roots have private, AGPL, or UNLICENSED signals requiring explicit rights review.
- 3 roots are `unverified_due_to_missing_path`; no ownership or rights inference is made.
- Every readable root requires a future bounded metadata check for named owner, maintainer, permission, provenance, retention, and rights. No license scan is run here.

### Freshness and overlap

- Freshness is a recorded-`modified_at` signal against 2026-08-26, not a content-freshness claim. `accessed_at` is retained but not treated as currentness.
- Nested overlaps are preserved, not collapsed: `LC-001` (nested_under:LC-002;not_deduped), `LC-028` (nested_under:LC-027;not_deduped), `LC-029` (nested_under:LC-027;not_deduped), `LC-030` (nested_under:LC-027;not_deduped), `LC-015` (nested_under:LC-016;not_deduped).
- The register reports no manifest-identity overlap records and did not hash corpus/source contents. “Unique canonical path” therefore does not mean unique content.
- Missing/unreadable roots are preserved exactly: `LC-008`, `LC-056`, and `LC-075`; each next gate is `path_recheck`.

### Bounded read-only next inspection

The next inspection may read only the inventory-listed manifest metadata names/signals and re-check exact path/status, owner, rights, provenance, freshness, and overlap. It must not open arbitrary source files, execute code, run a build, clone, use network, or make a mutation. Each JSONL record carries its queue-specific next inspection and falsifier.

## 7. No-execution receipts

- `READ-ONLY-RECEIPT-01`: only Phase-3 program/state and Phase-2 inventory/register metadata were read for this triage; no arbitrary source file was opened.
- `BOUNDARY-RECEIPT-01`: all 79 triage records come from Phase-2 `LC-001`–`LC-079`; `BOUNDARY-001` remains the allowlist reference.
- `ABSENT-EXECUTION-RECEIPT-01`: no source execution, network, clone, scan, build, deploy, delete, move, rename, external write, or admission occurred.
- `RIGHTS-RECEIPT-01`: rights/ownership are metadata signals only; unknowns and private/unlicensed/mixed signals remain open.
- `ADMISSION-RECEIPT-01`: `admission_status=NOT_ADMITTED`; Phase-3 `implementation_authorized=false`; shared Phase-3 promotion is coordinator-owned.

## 8. Verification and callback

Post-write schema/path/boundary smoke passed before callback: 79 valid JSONL records, exact LC-001…LC-079 coverage, 76 readable metadata paths, 3 missing/unreadable paths, 5 nested overlaps, 7 queues, absolute-path checks, resolving report links, preserved Phase-2 source hashes, and explicit no-execution boundaries.

Fresh CENA resolution: Herdr workspace label `CENA` (`w659e02f80e5bb1`), pane `w659e02f80e5bb1-1`; pane content matched the active coordinator context. The callback was sent with `pane run`; visible read showed it queued, so Enter-only `pane send-keys` was used without retyping. Visible and `recent-unwrapped` reads then confirmed the exact accepted DONE receipt.

`records: 79`  
`schema_version: phase3.local_corpus_triage.v1`  
`callback_status: sent_and_verified`  
`state_update: lane_only_patch; shared_phase_unpromoted`  
`parent_goal_status: active`
