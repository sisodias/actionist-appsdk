# Phase-7 Wave 6 — Dimension Evidence Ledger

Lane: `P7-DIMENSION-EVIDENCE`
Wave: `P7-DIMENSION-EVIDENCE-W6`
Observation date: `2026-08-27`
Status: lane artifact complete; this is not an overall closure claim.

## Scope and selection

Wave 6 uses the corpus-integrity W6 selection ledger as authoritative: 170 partial industry×repository pairs, exactly 10 per each of 17 industries. The immutable W1–W5 queue union contains 690 prior queue IDs; the selected W6 identities are disjoint from those prior identities.

Corpus selection parity is **PASS**: 170 corpus rows, 170 queue IDs, and 170 canonical industry×repository identities match after normalizing `industry.id` plus lowercase `repository.canonical_url`.

Each pair receives exactly one record for each of the ten dimensions, for 1,700 ledger rows and 1,700 matching source receipts. Missing dimensions remain explicit `U` / `unknown_blocked`; no pair is promoted and master counters are unchanged.

## Evidence and freshness boundary

First-party public URLs from the closure queue are retained as preferred source references. This Wave 6 lane performed no fresh public fetch: inherited queue context is labeled `inherited_queue_context=true`, `source_access_fresh_public_evidence=false`, and `inherited_repository_specific_not_fresh`. Inherited observations are not treated as fresh proof, capability proof, or admission. No generic cell evidence was copied and no new capability claim was fabricated.

For present dimensions, the ledger preserves repository-specific queue observations, exact source URLs, evidence class, limitation, falsifier/next gate, observation index, slot ID, and rights boundary as inherited context. For every queue-declared missing dimension, direct and inferred claims are empty and the row records the limitation, falsifier, smallest read-only gate, and unknown Block Contract fields.

## Exact counts

- Selected pairs: **170** distinct pairs, 10 per each of 17 industries.
- Dimension evidence rows: **1,700** (170 pairs × 10 dimensions).
- Source receipts: **1,700**, one for every ledger row with matching pair×dimension key and source URL list.
- Per-dimension rows: demand_atom_fit=170, workflow_behavior=170, data_model=170, integration_surface=170, ui_assembly=170, agent_authority=170, verification_eval=170, provenance_rights=170, runtime_deployment=170, economics_maintenance=170.
- Explicit missing/unknown rows: **561**; all are U / unknown_blocked and remain non-promoting.
- Baseline master counters remain unchanged: 270 complete pairs / 1,700 target pairs; 3,076 partial pairs / 3,346 closure-queue rows. Wave 6 records evidence only.
- No overall completion claim is made.

## Industry inventory

| Industry | Pairs | Dimension rows | Receipts | Prior dimension counts | Selected queue IDs |
|---|---:|---:|---:|---|---|
| Accounting Firms (accounting_firms) | 10 | 100 | 100 | 6:1, 7:9 | P7-CLOSE-0135, P7-CLOSE-0138, P7-CLOSE-0139, P7-CLOSE-0147, P7-CLOSE-0168, P7-CLOSE-0177, P7-CLOSE-0178, P7-CLOSE-0195, P7-CLOSE-0200, P7-CLOSE-0028 |
| Construction (construction) | 10 | 100 | 100 | 6:1, 7:9 | P7-CLOSE-0327, P7-CLOSE-0330, P7-CLOSE-0334, P7-CLOSE-0357, P7-CLOSE-0368, P7-CLOSE-0371, P7-CLOSE-0384, P7-CLOSE-0391, P7-CLOSE-0392, P7-CLOSE-0228 |
| Course Creators (course_creators) | 10 | 100 | 100 | 6:6, 7:4 | P7-CLOSE-0517, P7-CLOSE-0525, P7-CLOSE-0535, P7-CLOSE-0540, P7-CLOSE-0434, P7-CLOSE-0447, P7-CLOSE-0528, P7-CLOSE-0538, P7-CLOSE-0542, P7-CLOSE-0544 |
| Ecommerce (ecommerce) | 10 | 100 | 100 | 6:7, 7:3 | P7-CLOSE-0722, P7-CLOSE-0725, P7-CLOSE-0730, P7-CLOSE-0632, P7-CLOSE-0637, P7-CLOSE-0719, P7-CLOSE-0733, P7-CLOSE-0736, P7-CLOSE-0741, P7-CLOSE-0742 |
| Education & Training (education_training) | 10 | 100 | 100 | 6:4, 7:6 | P7-CLOSE-0918, P7-CLOSE-0921, P7-CLOSE-0928, P7-CLOSE-0931, P7-CLOSE-0935, P7-CLOSE-0962, P7-CLOSE-0821, P7-CLOSE-0824, P7-CLOSE-0835, P7-CLOSE-0927 |
| Healthcare & Medical Practices (healthcare_medical_practices) | 10 | 100 | 100 | 7:10 | P7-CLOSE-1013, P7-CLOSE-1018, P7-CLOSE-1032, P7-CLOSE-1112, P7-CLOSE-1122, P7-CLOSE-1125, P7-CLOSE-1131, P7-CLOSE-1176, P7-CLOSE-1177, P7-CLOSE-1181 |
| Hospitality (hospitality) | 10 | 100 | 100 | 6:3, 7:7 | P7-CLOSE-1225, P7-CLOSE-1306, P7-CLOSE-1316, P7-CLOSE-1317, P7-CLOSE-1319, P7-CLOSE-1372, P7-CLOSE-1377, P7-CLOSE-1212, P7-CLOSE-1218, P7-CLOSE-1222 |
| Insurance Agencies (insurance_agencies) | 10 | 100 | 100 | 6:4, 7:6 | P7-CLOSE-1516, P7-CLOSE-1521, P7-CLOSE-1523, P7-CLOSE-1533, P7-CLOSE-1570, P7-CLOSE-1575, P7-CLOSE-1406, P7-CLOSE-1409, P7-CLOSE-1416, P7-CLOSE-1420 |
| IT Services & MSPs (it_services_msps) | 10 | 100 | 100 | 7:10 | P7-CLOSE-1601, P7-CLOSE-1603, P7-CLOSE-1606, P7-CLOSE-1612, P7-CLOSE-1613, P7-CLOSE-1615, P7-CLOSE-1710, P7-CLOSE-1712, P7-CLOSE-1727, P7-CLOSE-1729 |
| Law Firms (law_firms) | 10 | 100 | 100 | 6:9, 7:1 | P7-CLOSE-1963, P7-CLOSE-1796, P7-CLOSE-1800, P7-CLOSE-1804, P7-CLOSE-1808, P7-CLOSE-1816, P7-CLOSE-1820, P7-CLOSE-1906, P7-CLOSE-1909, P7-CLOSE-1910 |
| Logistics & Freight (logistics_freight) | 10 | 100 | 100 | 6:3, 7:7 | P7-CLOSE-2097, P7-CLOSE-2099, P7-CLOSE-2104, P7-CLOSE-2139, P7-CLOSE-2144, P7-CLOSE-2156, P7-CLOSE-2159, P7-CLOSE-2005, P7-CLOSE-2010, P7-CLOSE-2106 |
| Marketing & Social Media Agencies (marketing_social_media_agencies) | 10 | 100 | 100 | 7:10 | P7-CLOSE-2289, P7-CLOSE-2292, P7-CLOSE-2294, P7-CLOSE-2295, P7-CLOSE-2297, P7-CLOSE-2302, P7-CLOSE-2303, P7-CLOSE-2314, P7-CLOSE-2323, P7-CLOSE-2328 |
| Mortgage Brokers (mortgage_brokers) | 10 | 100 | 100 | 6:1, 7:9 | P7-CLOSE-2403, P7-CLOSE-2488, P7-CLOSE-2495, P7-CLOSE-2502, P7-CLOSE-2514, P7-CLOSE-2536, P7-CLOSE-2537, P7-CLOSE-2549, P7-CLOSE-2554, P7-CLOSE-2396 |
| Property Management (property_management) | 10 | 100 | 100 | 7:10 | P7-CLOSE-2687, P7-CLOSE-2690, P7-CLOSE-2694, P7-CLOSE-2695, P7-CLOSE-2702, P7-CLOSE-2723, P7-CLOSE-2724, P7-CLOSE-2729, P7-CLOSE-2740, P7-CLOSE-2744 |
| Real Estate (real_estate) | 10 | 100 | 100 | 6:1, 7:9 | P7-CLOSE-2885, P7-CLOSE-2888, P7-CLOSE-2891, P7-CLOSE-2895, P7-CLOSE-2896, P7-CLOSE-2898, P7-CLOSE-2904, P7-CLOSE-2935, P7-CLOSE-2957, P7-CLOSE-2784 |
| Recruiting & Staffing (recruiting_staffing) | 10 | 100 | 100 | 6:6, 7:4 | P7-CLOSE-3085, P7-CLOSE-3089, P7-CLOSE-3135, P7-CLOSE-3145, P7-CLOSE-2982, P7-CLOSE-2987, P7-CLOSE-2989, P7-CLOSE-2993, P7-CLOSE-3079, P7-CLOSE-3090 |
| SaaS (saas) | 10 | 100 | 100 | 6:5, 7:5 | P7-CLOSE-3277, P7-CLOSE-3284, P7-CLOSE-3286, P7-CLOSE-3302, P7-CLOSE-3328, P7-CLOSE-3181, P7-CLOSE-3185, P7-CLOSE-3186, P7-CLOSE-3187, P7-CLOSE-3192 |

## Per-pair inventory

| Selection | Industry | Queue ID | Canonical repository | Before | Missing dimensions | Rows |
|---:|---|---|---|---:|---|---:|
| 1 | Accounting Firms (accounting_firms) | P7-CLOSE-0135 | [martaldsantos/agentic-ai-hack](https://github.com/martaldsantos/agentic-ai-hack) | 7/10 | integration_surface, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 2 | Accounting Firms (accounting_firms) | P7-CLOSE-0138 | [mickasmt/next-saas-stripe-starter](https://github.com/mickasmt/next-saas-stripe-starter) | 7/10 | demand_atom_fit, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 3 | Accounting Firms (accounting_firms) | P7-CLOSE-0139 | [microsoft/Webwright](https://github.com/microsoft/Webwright) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 4 | Accounting Firms (accounting_firms) | P7-CLOSE-0147 | [nikichakraborty2005/Ecommerce-Inventory-Demand-Forecasting](https://github.com/nikichakraborty2005/Ecommerce-Inventory-Demand-Forecasting) | 7/10 | agent_authority, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 5 | Accounting Firms (accounting_firms) | P7-CLOSE-0168 | [rajveersidhu/IT-Helpdesk-Ticketing-System](https://github.com/rajveersidhu/IT-Helpdesk-Ticketing-System) | 7/10 | provenance_rights, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 6 | Accounting Firms (accounting_firms) | P7-CLOSE-0177 | [satnaing/shadcn-admin](https://github.com/satnaing/shadcn-admin) | 7/10 | provenance_rights, runtime_deployment, workflow_behavior | 10 ledger + 10 receipts |
| 7 | Accounting Firms (accounting_firms) | P7-CLOSE-0178 | [segment-boneyard/nightmare](https://github.com/segment-boneyard/nightmare) | 7/10 | economics_maintenance, provenance_rights, runtime_deployment | 10 ledger + 10 receipts |
| 8 | Accounting Firms (accounting_firms) | P7-CLOSE-0195 | [webdevcody/wdc-saas-starter-kit](https://github.com/webdevcody/wdc-saas-starter-kit) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 9 | Accounting Firms (accounting_firms) | P7-CLOSE-0200 | [yzhao062/pyod](https://github.com/yzhao062/pyod) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 10 | Accounting Firms (accounting_firms) | P7-CLOSE-0028 | [LMS-Laravel/LMS-Laravel](https://github.com/LMS-Laravel/LMS-Laravel) | 6/10 | agent_authority, integration_surface, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 11 | Construction (construction) | P7-CLOSE-0327 | [langgenius/dify](https://github.com/langgenius/dify) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 12 | Construction (construction) | P7-CLOSE-0330 | [martaldsantos/agentic-ai-hack](https://github.com/martaldsantos/agentic-ai-hack) | 7/10 | demand_atom_fit, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 13 | Construction (construction) | P7-CLOSE-0334 | [microsoft/Webwright](https://github.com/microsoft/Webwright) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 14 | Construction (construction) | P7-CLOSE-0357 | [prolinkinfo/RealEstateCRM](https://github.com/prolinkinfo/RealEstateCRM) | 7/10 | agent_authority, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 15 | Construction (construction) | P7-CLOSE-0368 | [rh-aiservices-bu/insurance-claim-processing](https://github.com/rh-aiservices-bu/insurance-claim-processing) | 7/10 | agent_authority, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 16 | Construction (construction) | P7-CLOSE-0371 | [samarailly51-pixel/claimpilot-harness](https://github.com/samarailly51-pixel/claimpilot-harness) | 7/10 | integration_surface, provenance_rights, runtime_deployment | 10 ledger + 10 receipts |
| 17 | Construction (construction) | P7-CLOSE-0384 | [tough-dev-school/education-backend](https://github.com/tough-dev-school/education-backend) | 7/10 | integration_surface, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 18 | Construction (construction) | P7-CLOSE-0391 | [webdevcody/wdc-saas-starter-kit](https://github.com/webdevcody/wdc-saas-starter-kit) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 19 | Construction (construction) | P7-CLOSE-0392 | [xerrors/Yuxi](https://github.com/xerrors/Yuxi) | 7/10 | demand_atom_fit, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 20 | Construction (construction) | P7-CLOSE-0228 | [LMS-Laravel/LMS-Laravel](https://github.com/LMS-Laravel/LMS-Laravel) | 6/10 | agent_authority, integration_surface, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 21 | Course Creators (course_creators) | P7-CLOSE-0517 | [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 7/10 | data_model, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 22 | Course Creators (course_creators) | P7-CLOSE-0525 | [kartikbansalx/LegalVault-Legal-Document-Management-System](https://github.com/kartikbansalx/LegalVault-Legal-Document-Management-System) | 7/10 | agent_authority, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 23 | Course Creators (course_creators) | P7-CLOSE-0535 | [microsoft/Webwright](https://github.com/microsoft/Webwright) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 24 | Course Creators (course_creators) | P7-CLOSE-0540 | [mui/base-ui](https://github.com/mui/base-ui) | 7/10 | agent_authority, integration_surface, runtime_deployment | 10 ledger + 10 receipts |
| 25 | Course Creators (course_creators) | P7-CLOSE-0434 | [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 6/10 | data_model, demand_atom_fit, economics_maintenance, provenance_rights | 10 ledger + 10 receipts |
| 26 | Course Creators (course_creators) | P7-CLOSE-0447 | [YuanyuanZh/WorldUniversityRankings](https://github.com/YuanyuanZh/WorldUniversityRankings) | 6/10 | integration_surface, provenance_rights, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 27 | Course Creators (course_creators) | P7-CLOSE-0528 | [langgenius/dify](https://github.com/langgenius/dify) | 6/10 | data_model, demand_atom_fit, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 28 | Course Creators (course_creators) | P7-CLOSE-0538 | [mirza1272/Multi-Branch-Recruitment-and-Applicant-Tracking-System](https://github.com/mirza1272/Multi-Branch-Recruitment-and-Applicant-Tracking-System) | 6/10 | agent_authority, ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 29 | Course Creators (course_creators) | P7-CLOSE-0542 | [nextjs/saas-starter](https://github.com/nextjs/saas-starter) | 6/10 | agent_authority, provenance_rights, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 30 | Course Creators (course_creators) | P7-CLOSE-0544 | [nl-hugo/hypotheek-calculator](https://github.com/nl-hugo/hypotheek-calculator) | 6/10 | agent_authority, ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 31 | Ecommerce (ecommerce) | P7-CLOSE-0722 | [langgenius/dify](https://github.com/langgenius/dify) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 32 | Ecommerce (ecommerce) | P7-CLOSE-0725 | [martaldsantos/agentic-ai-hack](https://github.com/martaldsantos/agentic-ai-hack) | 7/10 | provenance_rights, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 33 | Ecommerce (ecommerce) | P7-CLOSE-0730 | [microsoft/Webwright](https://github.com/microsoft/Webwright) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 34 | Ecommerce (ecommerce) | P7-CLOSE-0632 | [MustafaHabibX/it-helpdesk-simulation](https://github.com/MustafaHabibX/it-helpdesk-simulation) | 6/10 | data_model, demand_atom_fit, integration_surface, ui_assembly | 10 ledger + 10 receipts |
| 35 | Ecommerce (ecommerce) | P7-CLOSE-0637 | [OrchardCMS/OrchardCore](https://github.com/OrchardCMS/OrchardCore) | 6/10 | data_model, demand_atom_fit, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 36 | Ecommerce (ecommerce) | P7-CLOSE-0719 | [kartikbansalx/LegalVault-Legal-Document-Management-System](https://github.com/kartikbansalx/LegalVault-Legal-Document-Management-System) | 6/10 | agent_authority, demand_atom_fit, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 37 | Ecommerce (ecommerce) | P7-CLOSE-0733 | [mirza1272/Multi-Branch-Recruitment-and-Applicant-Tracking-System](https://github.com/mirza1272/Multi-Branch-Recruitment-and-Applicant-Tracking-System) | 6/10 | agent_authority, ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 38 | Ecommerce (ecommerce) | P7-CLOSE-0736 | [nanobrowser/nanobrowser](https://github.com/nanobrowser/nanobrowser) | 6/10 | data_model, demand_atom_fit, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 39 | Ecommerce (ecommerce) | P7-CLOSE-0741 | [okoroaforkingsley30s/obech-flow-logistics](https://github.com/okoroaforkingsley30s/obech-flow-logistics) | 6/10 | data_model, provenance_rights, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 40 | Ecommerce (ecommerce) | P7-CLOSE-0742 | [omricn/kdesk](https://github.com/omricn/kdesk) | 6/10 | data_model, provenance_rights, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 41 | Education & Training (education_training) | P7-CLOSE-0918 | [kartikbansalx/LegalVault-Legal-Document-Management-System](https://github.com/kartikbansalx/LegalVault-Legal-Document-Management-System) | 7/10 | agent_authority, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 42 | Education & Training (education_training) | P7-CLOSE-0921 | [langgenius/dify](https://github.com/langgenius/dify) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 43 | Education & Training (education_training) | P7-CLOSE-0928 | [microsoft/Webwright](https://github.com/microsoft/Webwright) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 44 | Education & Training (education_training) | P7-CLOSE-0931 | [mirza1272/Multi-Branch-Recruitment-and-Applicant-Tracking-System](https://github.com/mirza1272/Multi-Branch-Recruitment-and-Applicant-Tracking-System) | 7/10 | ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 45 | Education & Training (education_training) | P7-CLOSE-0935 | [nextjs/saas-starter](https://github.com/nextjs/saas-starter) | 7/10 | agent_authority, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 46 | Education & Training (education_training) | P7-CLOSE-0962 | [risuunava/helpdesk-system-web](https://github.com/risuunava/helpdesk-system-web) | 7/10 | demand_atom_fit, economics_maintenance, workflow_behavior | 10 ledger + 10 receipts |
| 47 | Education & Training (education_training) | P7-CLOSE-0821 | [MLGroupJLU/LLM-eval-survey](https://github.com/MLGroupJLU/LLM-eval-survey) | 6/10 | economics_maintenance, integration_surface, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 48 | Education & Training (education_training) | P7-CLOSE-0824 | [MiladJoodi/Civora-Dashboard](https://github.com/MiladJoodi/Civora-Dashboard) | 6/10 | agent_authority, economics_maintenance, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 49 | Education & Training (education_training) | P7-CLOSE-0835 | [PySpur-Dev/pyspur](https://github.com/PySpur-Dev/pyspur) | 6/10 | provenance_rights, ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 50 | Education & Training (education_training) | P7-CLOSE-0927 | [mickasmt/next-saas-stripe-starter](https://github.com/mickasmt/next-saas-stripe-starter) | 6/10 | agent_authority, demand_atom_fit, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 51 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1013 | [Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 52 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1018 | [MLGroupJLU/LLM-eval-survey](https://github.com/MLGroupJLU/LLM-eval-survey) | 7/10 | economics_maintenance, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 53 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1032 | [PySpur-Dev/pyspur](https://github.com/PySpur-Dev/pyspur) | 7/10 | provenance_rights, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 54 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1112 | [kartikbansalx/LegalVault-Legal-Document-Management-System](https://github.com/kartikbansalx/LegalVault-Legal-Document-Management-System) | 7/10 | demand_atom_fit, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 55 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1122 | [microsoft/Webwright](https://github.com/microsoft/Webwright) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 56 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1125 | [mirza1272/Multi-Branch-Recruitment-and-Applicant-Tracking-System](https://github.com/mirza1272/Multi-Branch-Recruitment-and-Applicant-Tracking-System) | 7/10 | ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 57 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1131 | [nl-hugo/hypotheek-calculator](https://github.com/nl-hugo/hypotheek-calculator) | 7/10 | ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 58 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1176 | [webdevcody/wdc-saas-starter-kit](https://github.com/webdevcody/wdc-saas-starter-kit) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 59 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1177 | [xerrors/Yuxi](https://github.com/xerrors/Yuxi) | 7/10 | demand_atom_fit, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 60 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1181 | [yzhao062/pyod](https://github.com/yzhao062/pyod) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 61 | Hospitality (hospitality) | P7-CLOSE-1225 | [PySpur-Dev/pyspur](https://github.com/PySpur-Dev/pyspur) | 7/10 | provenance_rights, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 62 | Hospitality (hospitality) | P7-CLOSE-1306 | [kartikbansalx/LegalVault-Legal-Document-Management-System](https://github.com/kartikbansalx/LegalVault-Legal-Document-Management-System) | 7/10 | agent_authority, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 63 | Hospitality (hospitality) | P7-CLOSE-1316 | [microsoft/Webwright](https://github.com/microsoft/Webwright) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 64 | Hospitality (hospitality) | P7-CLOSE-1317 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 7/10 | provenance_rights, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 65 | Hospitality (hospitality) | P7-CLOSE-1319 | [mirza1272/Multi-Branch-Recruitment-and-Applicant-Tracking-System](https://github.com/mirza1272/Multi-Branch-Recruitment-and-Applicant-Tracking-System) | 7/10 | ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 66 | Hospitality (hospitality) | P7-CLOSE-1372 | [webdevcody/wdc-saas-starter-kit](https://github.com/webdevcody/wdc-saas-starter-kit) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 67 | Hospitality (hospitality) | P7-CLOSE-1377 | [yzhao062/pyod](https://github.com/yzhao062/pyod) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 68 | Hospitality (hospitality) | P7-CLOSE-1212 | [MLGroupJLU/LLM-eval-survey](https://github.com/MLGroupJLU/LLM-eval-survey) | 6/10 | economics_maintenance, integration_surface, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 69 | Hospitality (hospitality) | P7-CLOSE-1218 | [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 6/10 | data_model, demand_atom_fit, economics_maintenance, provenance_rights | 10 ledger + 10 receipts |
| 70 | Hospitality (hospitality) | P7-CLOSE-1222 | [OrchardCMS/OrchardCore](https://github.com/OrchardCMS/OrchardCore) | 6/10 | data_model, demand_atom_fit, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 71 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1516 | [microsoft/fara](https://github.com/microsoft/fara) | 7/10 | demand_atom_fit, provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 72 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1521 | [nextjs/saas-starter](https://github.com/nextjs/saas-starter) | 7/10 | agent_authority, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 73 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1523 | [nl-hugo/hypotheek-calculator](https://github.com/nl-hugo/hypotheek-calculator) | 7/10 | ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 74 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1533 | [owasp-dep-scan/dep-scan](https://github.com/owasp-dep-scan/dep-scan) | 7/10 | agent_authority, integration_surface, runtime_deployment | 10 ledger + 10 receipts |
| 75 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1570 | [webdevcody/wdc-saas-starter-kit](https://github.com/webdevcody/wdc-saas-starter-kit) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 76 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1575 | [yzhao062/pyod](https://github.com/yzhao062/pyod) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 77 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1406 | [LMS-Laravel/LMS-Laravel](https://github.com/LMS-Laravel/LMS-Laravel) | 6/10 | agent_authority, integration_surface, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 78 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1409 | [MLGroupJLU/LLM-eval-survey](https://github.com/MLGroupJLU/LLM-eval-survey) | 6/10 | economics_maintenance, integration_surface, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 79 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1416 | [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 6/10 | data_model, demand_atom_fit, economics_maintenance, provenance_rights | 10 ledger + 10 receipts |
| 80 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1420 | [OrchardCMS/OrchardCore](https://github.com/OrchardCMS/OrchardCore) | 6/10 | data_model, demand_atom_fit, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 81 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1601 | [Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 82 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1603 | [LMS-Laravel/LMS-Laravel](https://github.com/LMS-Laravel/LMS-Laravel) | 7/10 | integration_surface, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 83 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1606 | [MLGroupJLU/LLM-eval-survey](https://github.com/MLGroupJLU/LLM-eval-survey) | 7/10 | economics_maintenance, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 84 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1612 | [Natnael243/Eastafrica](https://github.com/Natnael243/Eastafrica) | 7/10 | ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 85 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1613 | [Natnael243/eastAfrica_Admin](https://github.com/Natnael243/eastAfrica_Admin) | 7/10 | ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 86 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1615 | [OrchardCMS/OrchardCore](https://github.com/OrchardCMS/OrchardCore) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 87 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1710 | [microsoft/Webwright](https://github.com/microsoft/Webwright) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 88 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1712 | [microsoft/fara](https://github.com/microsoft/fara) | 7/10 | demand_atom_fit, provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 89 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1727 | [oroinc/crm-application](https://github.com/oroinc/crm-application) | 7/10 | data_model, integration_surface, ui_assembly | 10 ledger + 10 receipts |
| 90 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1729 | [owasp-dep-scan/dep-scan](https://github.com/owasp-dep-scan/dep-scan) | 7/10 | agent_authority, integration_surface, workflow_behavior | 10 ledger + 10 receipts |
| 91 | Law Firms (law_firms) | P7-CLOSE-1963 | [webdevcody/wdc-saas-starter-kit](https://github.com/webdevcody/wdc-saas-starter-kit) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 92 | Law Firms (law_firms) | P7-CLOSE-1796 | [KolbySisk/next-supabase-stripe-starter](https://github.com/KolbySisk/next-supabase-stripe-starter) | 6/10 | agent_authority, provenance_rights, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 93 | Law Firms (law_firms) | P7-CLOSE-1800 | [MLGroupJLU/LLM-eval-survey](https://github.com/MLGroupJLU/LLM-eval-survey) | 6/10 | data_model, economics_maintenance, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 94 | Law Firms (law_firms) | P7-CLOSE-1804 | [MiladJoodi/Civora-Dashboard](https://github.com/MiladJoodi/Civora-Dashboard) | 6/10 | agent_authority, economics_maintenance, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 95 | Law Firms (law_firms) | P7-CLOSE-1808 | [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 6/10 | data_model, demand_atom_fit, economics_maintenance, provenance_rights | 10 ledger + 10 receipts |
| 96 | Law Firms (law_firms) | P7-CLOSE-1816 | [Rishabh42/HealthCare-Insurance-Ethereum](https://github.com/Rishabh42/HealthCare-Insurance-Ethereum) | 6/10 | demand_atom_fit, ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 97 | Law Firms (law_firms) | P7-CLOSE-1820 | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 6/10 | data_model, demand_atom_fit, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 98 | Law Firms (law_firms) | P7-CLOSE-1906 | [mickasmt/next-saas-stripe-starter](https://github.com/mickasmt/next-saas-stripe-starter) | 6/10 | agent_authority, demand_atom_fit, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 99 | Law Firms (law_firms) | P7-CLOSE-1909 | [microsoft/fara](https://github.com/microsoft/fara) | 6/10 | demand_atom_fit, provenance_rights, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 100 | Law Firms (law_firms) | P7-CLOSE-1910 | [mirza1272/Multi-Branch-Recruitment-and-Applicant-Tracking-System](https://github.com/mirza1272/Multi-Branch-Recruitment-and-Applicant-Tracking-System) | 6/10 | agent_authority, ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 101 | Logistics & Freight (logistics_freight) | P7-CLOSE-2097 | [langgenius/dify](https://github.com/langgenius/dify) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 102 | Logistics & Freight (logistics_freight) | P7-CLOSE-2099 | [manjurulhoque/doccure](https://github.com/manjurulhoque/doccure) | 7/10 | agent_authority, data_model, ui_assembly | 10 ledger + 10 receipts |
| 103 | Logistics & Freight (logistics_freight) | P7-CLOSE-2104 | [microsoft/Webwright](https://github.com/microsoft/Webwright) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 104 | Logistics & Freight (logistics_freight) | P7-CLOSE-2139 | [segment-boneyard/nightmare](https://github.com/segment-boneyard/nightmare) | 7/10 | economics_maintenance, provenance_rights, runtime_deployment | 10 ledger + 10 receipts |
| 105 | Logistics & Freight (logistics_freight) | P7-CLOSE-2144 | [techinz/browsers-benchmark](https://github.com/techinz/browsers-benchmark) | 7/10 | economics_maintenance, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 106 | Logistics & Freight (logistics_freight) | P7-CLOSE-2156 | [xerrors/Yuxi](https://github.com/xerrors/Yuxi) | 7/10 | demand_atom_fit, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 107 | Logistics & Freight (logistics_freight) | P7-CLOSE-2159 | [yzhao062/pyod](https://github.com/yzhao062/pyod) | 7/10 | data_model, integration_surface, provenance_rights | 10 ledger + 10 receipts |
| 108 | Logistics & Freight (logistics_freight) | P7-CLOSE-2005 | [MustafaHabibX/it-helpdesk-simulation](https://github.com/MustafaHabibX/it-helpdesk-simulation) | 6/10 | data_model, demand_atom_fit, integration_surface, ui_assembly | 10 ledger + 10 receipts |
| 109 | Logistics & Freight (logistics_freight) | P7-CLOSE-2010 | [OrchardCMS/OrchardCore](https://github.com/OrchardCMS/OrchardCore) | 6/10 | data_model, demand_atom_fit, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 110 | Logistics & Freight (logistics_freight) | P7-CLOSE-2106 | [microsoft/fara](https://github.com/microsoft/fara) | 6/10 | data_model, demand_atom_fit, provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 111 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2289 | [langgenius/dify](https://github.com/langgenius/dify) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 112 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2292 | [martaldsantos/agentic-ai-hack](https://github.com/martaldsantos/agentic-ai-hack) | 7/10 | demand_atom_fit, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 113 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2294 | [mickasmt/next-saas-stripe-starter](https://github.com/mickasmt/next-saas-stripe-starter) | 7/10 | agent_authority, demand_atom_fit, workflow_behavior | 10 ledger + 10 receipts |
| 114 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2295 | [microsoft/Webwright](https://github.com/microsoft/Webwright) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 115 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2297 | [microsoft/fara](https://github.com/microsoft/fara) | 7/10 | demand_atom_fit, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 116 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2302 | [nextjs/saas-starter](https://github.com/nextjs/saas-starter) | 7/10 | agent_authority, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 117 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2303 | [nikichakraborty2005/Ecommerce-Inventory-Demand-Forecasting](https://github.com/nikichakraborty2005/Ecommerce-Inventory-Demand-Forecasting) | 7/10 | agent_authority, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 118 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2314 | [owasp-dep-scan/dep-scan](https://github.com/owasp-dep-scan/dep-scan) | 7/10 | agent_authority, integration_surface, workflow_behavior | 10 ledger + 10 receipts |
| 119 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2323 | [rajveersidhu/IT-Helpdesk-Ticketing-System](https://github.com/rajveersidhu/IT-Helpdesk-Ticketing-System) | 7/10 | agent_authority, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 120 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2328 | [rh-aiservices-bu/insurance-claim-processing](https://github.com/rh-aiservices-bu/insurance-claim-processing) | 7/10 | agent_authority, provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 121 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2403 | [PySpur-Dev/pyspur](https://github.com/PySpur-Dev/pyspur) | 7/10 | provenance_rights, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 122 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2488 | [langgenius/dify](https://github.com/langgenius/dify) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 123 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2495 | [microsoft/Webwright](https://github.com/microsoft/Webwright) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 124 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2502 | [nextjs/saas-starter](https://github.com/nextjs/saas-starter) | 7/10 | agent_authority, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 125 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2514 | [owasp-dep-scan/dep-scan](https://github.com/owasp-dep-scan/dep-scan) | 7/10 | agent_authority, integration_surface, workflow_behavior | 10 ledger + 10 receipts |
| 126 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2536 | [storybookjs/storybook](https://github.com/storybookjs/storybook) | 7/10 | demand_atom_fit, economics_maintenance, workflow_behavior | 10 ledger + 10 receipts |
| 127 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2537 | [techinz/browsers-benchmark](https://github.com/techinz/browsers-benchmark) | 7/10 | economics_maintenance, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 128 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2549 | [webdevcody/wdc-saas-starter-kit](https://github.com/webdevcody/wdc-saas-starter-kit) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 129 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2554 | [yzhao062/pyod](https://github.com/yzhao062/pyod) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 130 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2396 | [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 6/10 | data_model, demand_atom_fit, economics_maintenance, provenance_rights | 10 ledger + 10 receipts |
| 131 | Property Management (property_management) | P7-CLOSE-2687 | [langgenius/dify](https://github.com/langgenius/dify) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 132 | Property Management (property_management) | P7-CLOSE-2690 | [martaldsantos/agentic-ai-hack](https://github.com/martaldsantos/agentic-ai-hack) | 7/10 | demand_atom_fit, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 133 | Property Management (property_management) | P7-CLOSE-2694 | [microsoft/Webwright](https://github.com/microsoft/Webwright) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 134 | Property Management (property_management) | P7-CLOSE-2695 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 7/10 | provenance_rights, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 135 | Property Management (property_management) | P7-CLOSE-2702 | [nikichakraborty2005/Ecommerce-Inventory-Demand-Forecasting](https://github.com/nikichakraborty2005/Ecommerce-Inventory-Demand-Forecasting) | 7/10 | economics_maintenance, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 136 | Property Management (property_management) | P7-CLOSE-2723 | [rajveersidhu/IT-Helpdesk-Ticketing-System](https://github.com/rajveersidhu/IT-Helpdesk-Ticketing-System) | 7/10 | agent_authority, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 137 | Property Management (property_management) | P7-CLOSE-2724 | [ravindu644/Droidspaces-OSS](https://github.com/ravindu644/Droidspaces-OSS) | 7/10 | agent_authority, integration_surface, ui_assembly | 10 ledger + 10 receipts |
| 138 | Property Management (property_management) | P7-CLOSE-2729 | [risuunava/helpdesk-system-web](https://github.com/risuunava/helpdesk-system-web) | 7/10 | demand_atom_fit, economics_maintenance, verification_eval | 10 ledger + 10 receipts |
| 139 | Property Management (property_management) | P7-CLOSE-2740 | [the-open-agent/openagent](https://github.com/the-open-agent/openagent) | 7/10 | data_model, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 140 | Property Management (property_management) | P7-CLOSE-2744 | [tough-dev-school/education-backend](https://github.com/tough-dev-school/education-backend) | 7/10 | integration_surface, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 141 | Real Estate (real_estate) | P7-CLOSE-2885 | [kartikbansalx/LegalVault-Legal-Document-Management-System](https://github.com/kartikbansalx/LegalVault-Legal-Document-Management-System) | 7/10 | agent_authority, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 142 | Real Estate (real_estate) | P7-CLOSE-2888 | [langgenius/dify](https://github.com/langgenius/dify) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 143 | Real Estate (real_estate) | P7-CLOSE-2891 | [martaldsantos/agentic-ai-hack](https://github.com/martaldsantos/agentic-ai-hack) | 7/10 | demand_atom_fit, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 144 | Real Estate (real_estate) | P7-CLOSE-2895 | [microsoft/Webwright](https://github.com/microsoft/Webwright) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 145 | Real Estate (real_estate) | P7-CLOSE-2896 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 7/10 | provenance_rights, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 146 | Real Estate (real_estate) | P7-CLOSE-2898 | [mirza1272/Multi-Branch-Recruitment-and-Applicant-Tracking-System](https://github.com/mirza1272/Multi-Branch-Recruitment-and-Applicant-Tracking-System) | 7/10 | ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 147 | Real Estate (real_estate) | P7-CLOSE-2904 | [nl-hugo/hypotheek-calculator](https://github.com/nl-hugo/hypotheek-calculator) | 7/10 | ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 148 | Real Estate (real_estate) | P7-CLOSE-2935 | [segment-boneyard/nightmare](https://github.com/segment-boneyard/nightmare) | 7/10 | economics_maintenance, provenance_rights, runtime_deployment | 10 ledger + 10 receipts |
| 149 | Real Estate (real_estate) | P7-CLOSE-2957 | [yzhao062/pyod](https://github.com/yzhao062/pyod) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 150 | Real Estate (real_estate) | P7-CLOSE-2784 | [LMS-Laravel/LMS-Laravel](https://github.com/LMS-Laravel/LMS-Laravel) | 6/10 | agent_authority, integration_surface, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 151 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3085 | [martaldsantos/agentic-ai-hack](https://github.com/martaldsantos/agentic-ai-hack) | 7/10 | demand_atom_fit, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 152 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3089 | [microsoft/Webwright](https://github.com/microsoft/Webwright) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 153 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3135 | [the-open-agent/openagent](https://github.com/the-open-agent/openagent) | 7/10 | data_model, provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 154 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3145 | [webdevcody/wdc-saas-starter-kit](https://github.com/webdevcody/wdc-saas-starter-kit) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 155 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-2982 | [Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) | 6/10 | agent_authority, provenance_rights, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 156 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-2987 | [MLGroupJLU/LLM-eval-survey](https://github.com/MLGroupJLU/LLM-eval-survey) | 6/10 | economics_maintenance, integration_surface, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 157 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-2989 | [MiladJoodi/Civora-Dashboard](https://github.com/MiladJoodi/Civora-Dashboard) | 6/10 | agent_authority, economics_maintenance, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 158 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-2993 | [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 6/10 | data_model, demand_atom_fit, economics_maintenance, provenance_rights | 10 ledger + 10 receipts |
| 159 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3079 | [kartikbansalx/LegalVault-Legal-Document-Management-System](https://github.com/kartikbansalx/LegalVault-Legal-Document-Management-System) | 6/10 | agent_authority, demand_atom_fit, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 160 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3090 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 6/10 | provenance_rights, runtime_deployment, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 161 | SaaS (saas) | P7-CLOSE-3277 | [langgenius/dify](https://github.com/langgenius/dify) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 162 | SaaS (saas) | P7-CLOSE-3284 | [microsoft/Webwright](https://github.com/microsoft/Webwright) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 163 | SaaS (saas) | P7-CLOSE-3286 | [microsoft/fara](https://github.com/microsoft/fara) | 7/10 | demand_atom_fit, provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 164 | SaaS (saas) | P7-CLOSE-3302 | [ossf/cve-bin-tool](https://github.com/ossf/cve-bin-tool) | 7/10 | agent_authority, data_model, economics_maintenance | 10 ledger + 10 receipts |
| 165 | SaaS (saas) | P7-CLOSE-3328 | [techinz/browsers-benchmark](https://github.com/techinz/browsers-benchmark) | 7/10 | economics_maintenance, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 166 | SaaS (saas) | P7-CLOSE-3181 | [MLGroupJLU/LLM-eval-survey](https://github.com/MLGroupJLU/LLM-eval-survey) | 6/10 | economics_maintenance, integration_surface, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 167 | SaaS (saas) | P7-CLOSE-3185 | [MustafaHabibX/it-helpdesk-simulation](https://github.com/MustafaHabibX/it-helpdesk-simulation) | 6/10 | data_model, demand_atom_fit, integration_surface, ui_assembly | 10 ledger + 10 receipts |
| 168 | SaaS (saas) | P7-CLOSE-3186 | [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 6/10 | data_model, demand_atom_fit, economics_maintenance, provenance_rights | 10 ledger + 10 receipts |
| 169 | SaaS (saas) | P7-CLOSE-3187 | [Natnael243/Eastafrica](https://github.com/Natnael243/Eastafrica) | 6/10 | agent_authority, ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 170 | SaaS (saas) | P7-CLOSE-3192 | [PySpur-Dev/pyspur](https://github.com/PySpur-Dev/pyspur) | 6/10 | provenance_rights, ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |

Every pair has the fixed ten dimensions: `demand_atom_fit`, `workflow_behavior`, `data_model`, `integration_surface`, `ui_assembly`, `agent_authority`, `verification_eval`, `provenance_rights`, `runtime_deployment`, and `economics_maintenance`.

## Rights, unknowns, falsifiers, and next gates

Every row carries dimension-specific unknown Block Contract fields, rights state `U`, SBOM/dependency/notice/attribution/lineage unknowns, preserved queue rights signals, a falsifier, and a smallest next read-only gate. Declared permissive signals remain unverified and are not legal clearance; no declared license remains unknown. No source was copied or scanned.

## Preservation and hashes

- W6 dispatch receipt SHA-256: `6db9bb2ddb4c7e50687d76c6ba0ba2b666c7bdc64c71c54c4fc4e1d1778bdfd6`
- Closure queue SHA-256: `99ead4a8f8de29228a73fe3fe3bd131ee952a5950b50c3bc126c1423add84c32`
- Coverage-gap audit SHA-256: `9d1a6e9177bae58cb15f0532ce7a1dbb5765fc3d231c1396a7db0db0d684e948`
- Shared Phase-7 state SHA-256 at write: `8732f0a13245ff7bf5a720fb8213c5beab60eebe254bc4ed847e279b4ea7120c`
- Corpus selection SHA-256: `33607c207680617032921c65267259400d2af6ea817b6685bb83f4b04f2497fc`
- Wave 1 ledger SHA-256: `35e6d9956d5689f2afc2758dad000ed6683844133023309babe41b12549861f8`
- Wave 2 ledger SHA-256: `c49de3b0d7b696df539983562f70a2b83b5c2cf778e37124b1c84b9cc971e676`
- Wave 3 ledger SHA-256: `d8a988a944693260d58ff395e481d9bda98165b272565a5e7cd062b044aaf288`
- Wave 4 ledger SHA-256: `94ecd0db408e8c356f89b8ff942839d834a39bcddf90af9d8bf018e5b1dbd38e`
- Wave 5 ledger SHA-256: `53a199afb8411b1811c0852bd1c2914d9eb51cf6fc8ec8403295c81c4cb9bb7a`
- Wave 6 ledger SHA-256: `f33e088d368cea3a981e371ea0a6279cb50d3236cc264835671d1dbd787876b5`
- Wave 6 source-receipts SHA-256: `35de330068bb4ea312073817c8e66390cbd1c6715398ead4c9dae8ad9ff577e4`
- Wave 1–5, phases 2–6, master matrix, closure queue, and coordinator files were not written by this lane.

## Verification and boundary

- Post-write command: `PYTHONDONTWRITEBYTECODE=1 node smoke-dimension-evidence-wave-6.mjs`.
- Required checks: output boundary, JSONL parse, corpus-selected pair identity, W1–W5 exclusion union, exact 170-pair/1,700-row counters, 10 dimensions per pair, 170 rows per dimension, source/date/evidence parity, inherited/fresh labeling, source-link boundary, rights/SBOM unknowns, report markers, preserved hashes, no-bytecode mode, whitespace, git diff, and research-only boundaries.
- Boundary: `research_only=true`; `UNEXECUTED`; `NOT_ADMITTED`; `implementation_authorized=false`; authenticated behavior `U`; `parent_goal_status=active`; master counters unchanged; no overall completion claim.
- Callback is recorded in lane state after fresh CENA pane resolution and readback.

## Output files

- `dimension-evidence-ledger.jsonl` — 1,700 normalized pair×dimension records.
- `source-receipts.jsonl` — 1,700 matching source receipts.
- `dimension-depth-report.md` — method, exact corpus-selected pair inventory, counts, preservation, and boundary report.
- `lane-state.json` — Wave 6 lane-only state; shared Phase-7 state is not promoted.
- `smoke-dimension-evidence-wave-6.mjs` — post-write structural/source/freshness/boundary smoke.

Callback: fresh CENA pane resolved, AGENT_PACKET v1 receipt delivered with `pane run`, read back after 2 seconds, and verified; no overall completion claim.
