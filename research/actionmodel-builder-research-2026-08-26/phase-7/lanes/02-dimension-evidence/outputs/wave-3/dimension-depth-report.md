# Phase-7 Wave 3 — Dimension Evidence Ledger

Lane: `P7-DIMENSION-EVIDENCE`
Wave: `P7-DIMENSION-EVIDENCE-W3`
Observation date: `2026-08-27`
Status: lane artifact complete; this is not an overall closure claim.

## Scope and deterministic selection

Wave 3 selects the next 10 remaining `partial` closure-queue pairs per each of 17 industries. The deterministic order is `dimension_count` descending, then `queue_id` ascending, after excluding all 10 Wave 1 T1 queue IDs and all 170 Wave 2 selected queue IDs. The result is 170 distinct industry×repository pairs: 10 per industry.

The selected pairs include nine-of-ten and eight-of-ten partials. Each pair receives exactly one record for each of the ten dimensions, for 1,700 ledger rows and 1,700 matching source receipts. Missing dimensions remain explicit `U` / `unknown_blocked`; no pair is promoted and master counters are unchanged.

## Evidence method and freshness boundary

First-party public URLs from the closure queue are retained as the preferred source references. This Wave 3 lane performed no fresh public fetch: inherited queue context is labeled `inherited_queue_context=true`, `source_access_fresh_public_evidence=false`, and `inherited_repository_specific_not_fresh`. Inherited observations are not treated as fresh proof, capability proof, or admission. No generic cell evidence was copied and no new capability claim was fabricated.

For dimensions present in a selected queue row, the ledger preserves the repository-specific observation, exact source URLs, evidence class, limitation, falsifier/next gate, observation index, slot ID, and rights boundary as inherited context. For every queue-declared missing dimension, direct and inferred claims are empty and the row records the limitation, falsifier, smallest read-only gate, and unknown Block Contract fields.

## Exact counts

- Selected pairs: **170** distinct pairs, 10 per each of 17 industries.
- Dimension evidence rows: **1,700** (170 pairs × 10 dimensions).
- Source receipts: **1,700**, one for every ledger row with matching pair×dimension key and source URL list.
- Per-dimension rows: demand_atom_fit=170, workflow_behavior=170, data_model=170, integration_surface=170, ui_assembly=170, agent_authority=170, verification_eval=170, provenance_rights=170, runtime_deployment=170, economics_maintenance=170.
- Explicit missing/unknown rows: **238**; all are U / unknown_blocked and remain non-promoting.
- Baseline master counters remain unchanged: 270 complete pairs / 1,700 target pairs; 3,076 partial pairs / 3,346 closure-queue rows. Wave 3 records evidence only.
- No overall completion claim is made.

## Industry inventory

| Industry | Pairs | Dimension rows | Receipts | Prior dimension counts | Selected queue IDs |
|---|---:|---:|---:|---|---|
| Accounting Firms (accounting_firms) | 10 | 100 | 100 | 8:6, 9:4 | P7-CLOSE-0128, P7-CLOSE-0134, P7-CLOSE-0155, P7-CLOSE-0184, P7-CLOSE-0003, P7-CLOSE-0016, P7-CLOSE-0026, P7-CLOSE-0030, P7-CLOSE-0054, P7-CLOSE-0082 |
| Construction (construction) | 10 | 100 | 100 | 8:4, 9:6 | P7-CLOSE-0319, P7-CLOSE-0323, P7-CLOSE-0350, P7-CLOSE-0363, P7-CLOSE-0377, P7-CLOSE-0380, P7-CLOSE-0205, P7-CLOSE-0209, P7-CLOSE-0214, P7-CLOSE-0238 |
| Course Creators (course_creators) | 10 | 100 | 100 | 8:6, 9:4 | P7-CLOSE-0531, P7-CLOSE-0572, P7-CLOSE-0577, P7-CLOSE-0594, P7-CLOSE-0406, P7-CLOSE-0407, P7-CLOSE-0426, P7-CLOSE-0430, P7-CLOSE-0443, P7-CLOSE-0474 |
| Ecommerce (ecommerce) | 10 | 100 | 100 | 8:3, 9:7 | P7-CLOSE-0718, P7-CLOSE-0743, P7-CLOSE-0759, P7-CLOSE-0766, P7-CLOSE-0783, P7-CLOSE-0786, P7-CLOSE-0788, P7-CLOSE-0601, P7-CLOSE-0604, P7-CLOSE-0629 |
| Education & Training (education_training) | 10 | 100 | 100 | 8:1, 9:9 | P7-CLOSE-0885, P7-CLOSE-0910, P7-CLOSE-0913, P7-CLOSE-0923, P7-CLOSE-0924, P7-CLOSE-0944, P7-CLOSE-0969, P7-CLOSE-0972, P7-CLOSE-0985, P7-CLOSE-0794 |
| Healthcare & Medical Practices (healthcare_medical_practices) | 10 | 100 | 100 | 9:10 | P7-CLOSE-1053, P7-CLOSE-1057, P7-CLOSE-1058, P7-CLOSE-1060, P7-CLOSE-1080, P7-CLOSE-1111, P7-CLOSE-1135, P7-CLOSE-1138, P7-CLOSE-1157, P7-CLOSE-1165 |
| Hospitality (hospitality) | 10 | 100 | 100 | 9:10 | P7-CLOSE-1254, P7-CLOSE-1257, P7-CLOSE-1272, P7-CLOSE-1274, P7-CLOSE-1300, P7-CLOSE-1305, P7-CLOSE-1311, P7-CLOSE-1329, P7-CLOSE-1332, P7-CLOSE-1352 |
| Insurance Agencies (insurance_agencies) | 10 | 100 | 100 | 8:2, 9:8 | P7-CLOSE-1493, P7-CLOSE-1497, P7-CLOSE-1500, P7-CLOSE-1509, P7-CLOSE-1527, P7-CLOSE-1530, P7-CLOSE-1556, P7-CLOSE-1559, P7-CLOSE-1395, P7-CLOSE-1404 |
| IT Services & MSPs (it_services_msps) | 10 | 100 | 100 | 8:4, 9:6 | P7-CLOSE-1699, P7-CLOSE-1709, P7-CLOSE-1717, P7-CLOSE-1723, P7-CLOSE-1726, P7-CLOSE-1765, P7-CLOSE-1582, P7-CLOSE-1584, P7-CLOSE-1591, P7-CLOSE-1599 |
| Law Firms (law_firms) | 10 | 100 | 100 | 8:5, 9:5 | P7-CLOSE-1920, P7-CLOSE-1923, P7-CLOSE-1941, P7-CLOSE-1944, P7-CLOSE-1952, P7-CLOSE-1781, P7-CLOSE-1787, P7-CLOSE-1817, P7-CLOSE-1823, P7-CLOSE-1846 |
| Logistics & Freight (logistics_freight) | 10 | 100 | 100 | 8:1, 9:9 | P7-CLOSE-2061, P7-CLOSE-2086, P7-CLOSE-2093, P7-CLOSE-2103, P7-CLOSE-2105, P7-CLOSE-2111, P7-CLOSE-2120, P7-CLOSE-2131, P7-CLOSE-2145, P7-CLOSE-1982 |
| Marketing & Social Media Agencies (marketing_social_media_agencies) | 10 | 100 | 100 | 8:5, 9:5 | P7-CLOSE-2285, P7-CLOSE-2339, P7-CLOSE-2342, P7-CLOSE-2350, P7-CLOSE-2353, P7-CLOSE-2172, P7-CLOSE-2191, P7-CLOSE-2241, P7-CLOSE-2244, P7-CLOSE-2246 |
| Mortgage Brokers (mortgage_brokers) | 10 | 100 | 100 | 8:5, 9:5 | P7-CLOSE-2490, P7-CLOSE-2511, P7-CLOSE-2530, P7-CLOSE-2535, P7-CLOSE-2538, P7-CLOSE-2365, P7-CLOSE-2370, P7-CLOSE-2375, P7-CLOSE-2376, P7-CLOSE-2405 |
| Property Management (property_management) | 10 | 100 | 100 | 8:8, 9:2 | P7-CLOSE-2730, P7-CLOSE-2756, P7-CLOSE-2567, P7-CLOSE-2573, P7-CLOSE-2586, P7-CLOSE-2590, P7-CLOSE-2597, P7-CLOSE-2606, P7-CLOSE-2611, P7-CLOSE-2630 |
| Real Estate (real_estate) | 10 | 100 | 100 | 8:3, 9:7 | P7-CLOSE-2884, P7-CLOSE-2890, P7-CLOSE-2908, P7-CLOSE-2911, P7-CLOSE-2932, P7-CLOSE-2949, P7-CLOSE-2955, P7-CLOSE-2768, P7-CLOSE-2774, P7-CLOSE-2797 |
| Recruiting & Staffing (recruiting_staffing) | 10 | 100 | 100 | 8:10 | P7-CLOSE-2961, P7-CLOSE-2975, P7-CLOSE-2977, P7-CLOSE-3028, P7-CLOSE-3030, P7-CLOSE-3034, P7-CLOSE-3045, P7-CLOSE-3066, P7-CLOSE-3068, P7-CLOSE-3071 |
| SaaS (saas) | 10 | 100 | 100 | 8:5, 9:5 | P7-CLOSE-3319, P7-CLOSE-3326, P7-CLOSE-3329, P7-CLOSE-3330, P7-CLOSE-3343, P7-CLOSE-3157, P7-CLOSE-3166, P7-CLOSE-3205, P7-CLOSE-3209, P7-CLOSE-3217 |

## Per-pair inventory

| Selection | Industry | Queue ID | Canonical repository | Before | Missing dimensions | Rows |
|---:|---|---|---|---:|---|---:|
| 1 | Accounting Firms (accounting_firms) | P7-CLOSE-0128 | [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 2 | Accounting Firms (accounting_firms) | P7-CLOSE-0134 | [manjurulhoque/doccure](https://github.com/manjurulhoque/doccure) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 3 | Accounting Firms (accounting_firms) | P7-CLOSE-0155 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 4 | Accounting Firms (accounting_firms) | P7-CLOSE-0184 | [the-open-agent/openagent](https://github.com/the-open-agent/openagent) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 5 | Accounting Firms (accounting_firms) | P7-CLOSE-0003 | [AishwaryaSingh123/Court_and_Legal_Management_Systerm](https://github.com/AishwaryaSingh123/Court_and_Legal_Management_Systerm) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 6 | Accounting Firms (accounting_firms) | P7-CLOSE-0016 | [ELIOTT-BONTE/Legal_doc_processing_pipeline](https://github.com/ELIOTT-BONTE/Legal_doc_processing_pipeline) | 8/10 | integration_surface, ui_assembly | 10 ledger + 10 receipts |
| 7 | Accounting Firms (accounting_firms) | P7-CLOSE-0026 | [Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) | 8/10 | provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 8 | Accounting Firms (accounting_firms) | P7-CLOSE-0030 | [LordQueso/MCP-construction](https://github.com/LordQueso/MCP-construction) | 8/10 | economics_maintenance, integration_surface | 10 ledger + 10 receipts |
| 9 | Accounting Firms (accounting_firms) | P7-CLOSE-0054 | [ahmedsaadawi13/splash-estate-crm](https://github.com/ahmedsaadawi13/splash-estate-crm) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 10 | Accounting Firms (accounting_firms) | P7-CLOSE-0082 | [chamilo/chamilo-lms](https://github.com/chamilo/chamilo-lms) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 11 | Construction (construction) | P7-CLOSE-0319 | [ixartz/Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 12 | Construction (construction) | P7-CLOSE-0323 | [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 13 | Construction (construction) | P7-CLOSE-0350 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 14 | Construction (construction) | P7-CLOSE-0363 | [rajveersidhu/IT-Helpdesk-Ticketing-System](https://github.com/rajveersidhu/IT-Helpdesk-Ticketing-System) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 15 | Construction (construction) | P7-CLOSE-0377 | [stevenmcsorley/Private-Legal-DMS](https://github.com/stevenmcsorley/Private-Legal-DMS) | 9/10 | workflow_behavior | 10 ledger + 10 receipts |
| 16 | Construction (construction) | P7-CLOSE-0380 | [the-open-agent/openagent](https://github.com/the-open-agent/openagent) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 17 | Construction (construction) | P7-CLOSE-0205 | [AishwaryaSingh123/Court_and_Legal_Management_Systerm](https://github.com/AishwaryaSingh123/Court_and_Legal_Management_Systerm) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 18 | Construction (construction) | P7-CLOSE-0209 | [Blazity/next-saas-starter](https://github.com/Blazity/next-saas-starter) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 19 | Construction (construction) | P7-CLOSE-0214 | [Daymychen/art-design-pro](https://github.com/Daymychen/art-design-pro) | 8/10 | integration_surface, provenance_rights | 10 ledger + 10 receipts |
| 20 | Construction (construction) | P7-CLOSE-0238 | [Natnael243/Eastafrica](https://github.com/Natnael243/Eastafrica) | 8/10 | verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 21 | Course Creators (course_creators) | P7-CLOSE-0531 | [martaldsantos/agentic-ai-hack](https://github.com/martaldsantos/agentic-ai-hack) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 22 | Course Creators (course_creators) | P7-CLOSE-0572 | [samarailly51-pixel/claimpilot-harness](https://github.com/samarailly51-pixel/claimpilot-harness) | 9/10 | integration_surface | 10 ledger + 10 receipts |
| 23 | Course Creators (course_creators) | P7-CLOSE-0577 | [stevenmcsorley/Private-Legal-DMS](https://github.com/stevenmcsorley/Private-Legal-DMS) | 9/10 | workflow_behavior | 10 ledger + 10 receipts |
| 24 | Course Creators (course_creators) | P7-CLOSE-0594 | [yizhiyanhua-ai/fireworks-tech-graph](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 25 | Course Creators (course_creators) | P7-CLOSE-0406 | [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 26 | Course Creators (course_creators) | P7-CLOSE-0407 | [ColorlibHQ/gentelella](https://github.com/ColorlibHQ/gentelella) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 27 | Course Creators (course_creators) | P7-CLOSE-0426 | [LordQueso/MCP-construction](https://github.com/LordQueso/MCP-construction) | 8/10 | economics_maintenance, integration_surface | 10 ledger + 10 receipts |
| 28 | Course Creators (course_creators) | P7-CLOSE-0430 | [MiladJoodi/Civora-Dashboard](https://github.com/MiladJoodi/Civora-Dashboard) | 8/10 | runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 29 | Course Creators (course_creators) | P7-CLOSE-0443 | [SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium) | 8/10 | data_model, provenance_rights | 10 ledger + 10 receipts |
| 30 | Course Creators (course_creators) | P7-CLOSE-0474 | [boxyhq/saas-starter-kit](https://github.com/boxyhq/saas-starter-kit) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 31 | Ecommerce (ecommerce) | P7-CLOSE-0718 | [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 32 | Ecommerce (ecommerce) | P7-CLOSE-0743 | [onejune2018/Awesome-LLM-Eval](https://github.com/onejune2018/Awesome-LLM-Eval) | 9/10 | runtime_deployment | 10 ledger + 10 receipts |
| 33 | Ecommerce (ecommerce) | P7-CLOSE-0759 | [rajveersidhu/IT-Helpdesk-Ticketing-System](https://github.com/rajveersidhu/IT-Helpdesk-Ticketing-System) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 34 | Ecommerce (ecommerce) | P7-CLOSE-0766 | [samarailly51-pixel/claimpilot-harness](https://github.com/samarailly51-pixel/claimpilot-harness) | 9/10 | integration_surface | 10 ledger + 10 receipts |
| 35 | Ecommerce (ecommerce) | P7-CLOSE-0783 | [verifywise-ai/verifywise](https://github.com/verifywise-ai/verifywise) | 9/10 | data_model | 10 ledger + 10 receipts |
| 36 | Ecommerce (ecommerce) | P7-CLOSE-0786 | [webdevcody/wdc-saas-starter-kit](https://github.com/webdevcody/wdc-saas-starter-kit) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 37 | Ecommerce (ecommerce) | P7-CLOSE-0788 | [yizhiyanhua-ai/fireworks-tech-graph](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 38 | Ecommerce (ecommerce) | P7-CLOSE-0601 | [AishwaryaSingh123/Court_and_Legal_Management_Systerm](https://github.com/AishwaryaSingh123/Court_and_Legal_Management_Systerm) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 39 | Ecommerce (ecommerce) | P7-CLOSE-0604 | [AnilBotta/realtorspal-ai](https://github.com/AnilBotta/realtorspal-ai) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 40 | Ecommerce (ecommerce) | P7-CLOSE-0629 | [MiladJoodi/Civora-Dashboard](https://github.com/MiladJoodi/Civora-Dashboard) | 8/10 | runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 41 | Education & Training (education_training) | P7-CLOSE-0885 | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 42 | Education & Training (education_training) | P7-CLOSE-0910 | [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 43 | Education & Training (education_training) | P7-CLOSE-0913 | [ixartz/Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 44 | Education & Training (education_training) | P7-CLOSE-0923 | [manjurulhoque/doccure](https://github.com/manjurulhoque/doccure) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 45 | Education & Training (education_training) | P7-CLOSE-0924 | [martaldsantos/agentic-ai-hack](https://github.com/martaldsantos/agentic-ai-hack) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 46 | Education & Training (education_training) | P7-CLOSE-0944 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 47 | Education & Training (education_training) | P7-CLOSE-0969 | [stevenmcsorley/Private-Legal-DMS](https://github.com/stevenmcsorley/Private-Legal-DMS) | 9/10 | workflow_behavior | 10 ledger + 10 receipts |
| 48 | Education & Training (education_training) | P7-CLOSE-0972 | [the-open-agent/openagent](https://github.com/the-open-agent/openagent) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 49 | Education & Training (education_training) | P7-CLOSE-0985 | [yizhiyanhua-ai/fireworks-tech-graph](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 50 | Education & Training (education_training) | P7-CLOSE-0794 | [AishwaryaSingh123/Court_and_Legal_Management_Systerm](https://github.com/AishwaryaSingh123/Court_and_Legal_Management_Systerm) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 51 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1053 | [api-evangelist/healthcaresourcecom](https://github.com/api-evangelist/healthcaresourcecom) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 52 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1057 | [aryan735/yojak-backend](https://github.com/aryan735/yojak-backend) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 53 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1058 | [ashev87/propstack-mcp](https://github.com/ashev87/propstack-mcp) | 9/10 | runtime_deployment | 10 ledger + 10 receipts |
| 54 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1060 | [aws-samples/serverless-eda-insurance-claims-processing](https://github.com/aws-samples/serverless-eda-insurance-claims-processing) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 55 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1080 | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 56 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1111 | [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 57 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1135 | [onejune2018/Awesome-LLM-Eval](https://github.com/onejune2018/Awesome-LLM-Eval) | 9/10 | runtime_deployment | 10 ledger + 10 receipts |
| 58 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1138 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 59 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1157 | [samarailly51-pixel/claimpilot-harness](https://github.com/samarailly51-pixel/claimpilot-harness) | 9/10 | integration_surface | 10 ledger + 10 receipts |
| 60 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1165 | [the-open-agent/openagent](https://github.com/the-open-agent/openagent) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 61 | Hospitality (hospitality) | P7-CLOSE-1254 | [aws-samples/serverless-eda-insurance-claims-processing](https://github.com/aws-samples/serverless-eda-insurance-claims-processing) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 62 | Hospitality (hospitality) | P7-CLOSE-1257 | [boxyhq/saas-starter-kit](https://github.com/boxyhq/saas-starter-kit) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 63 | Hospitality (hospitality) | P7-CLOSE-1272 | [darcys22/godbledger](https://github.com/darcys22/godbledger) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 64 | Hospitality (hospitality) | P7-CLOSE-1274 | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 65 | Hospitality (hospitality) | P7-CLOSE-1300 | [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 66 | Hospitality (hospitality) | P7-CLOSE-1305 | [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 67 | Hospitality (hospitality) | P7-CLOSE-1311 | [manjurulhoque/doccure](https://github.com/manjurulhoque/doccure) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 68 | Hospitality (hospitality) | P7-CLOSE-1329 | [onejune2018/Awesome-LLM-Eval](https://github.com/onejune2018/Awesome-LLM-Eval) | 9/10 | runtime_deployment | 10 ledger + 10 receipts |
| 69 | Hospitality (hospitality) | P7-CLOSE-1332 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 70 | Hospitality (hospitality) | P7-CLOSE-1352 | [samarailly51-pixel/claimpilot-harness](https://github.com/samarailly51-pixel/claimpilot-harness) | 9/10 | integration_surface | 10 ledger + 10 receipts |
| 71 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1493 | [garystafford/general-contractor-agent-demo](https://github.com/garystafford/general-contractor-agent-demo) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 72 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1497 | [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 73 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1500 | [ixartz/Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate) | 9/10 | data_model | 10 ledger + 10 receipts |
| 74 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1509 | [manjurulhoque/doccure](https://github.com/manjurulhoque/doccure) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 75 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1527 | [onejune2018/Awesome-LLM-Eval](https://github.com/onejune2018/Awesome-LLM-Eval) | 9/10 | data_model | 10 ledger + 10 receipts |
| 76 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1530 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 77 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1556 | [stevenmcsorley/Private-Legal-DMS](https://github.com/stevenmcsorley/Private-Legal-DMS) | 9/10 | workflow_behavior | 10 ledger + 10 receipts |
| 78 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1559 | [the-open-agent/openagent](https://github.com/the-open-agent/openagent) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 79 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1395 | [ELIOTT-BONTE/Legal_doc_processing_pipeline](https://github.com/ELIOTT-BONTE/Legal_doc_processing_pipeline) | 8/10 | integration_surface, ui_assembly | 10 ledger + 10 receipts |
| 80 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1404 | [Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 81 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1699 | [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 82 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1709 | [mickasmt/next-saas-stripe-starter](https://github.com/mickasmt/next-saas-stripe-starter) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 83 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1717 | [nextjs/saas-starter](https://github.com/nextjs/saas-starter) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 84 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1723 | [onejune2018/Awesome-LLM-Eval](https://github.com/onejune2018/Awesome-LLM-Eval) | 9/10 | runtime_deployment | 10 ledger + 10 receipts |
| 85 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1726 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 86 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1765 | [webdevcody/wdc-saas-starter-kit](https://github.com/webdevcody/wdc-saas-starter-kit) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 87 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1582 | [AnilBotta/realtorspal-ai](https://github.com/AnilBotta/realtorspal-ai) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 88 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1584 | [Blazity/next-saas-starter](https://github.com/Blazity/next-saas-starter) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 89 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1591 | [DouyinFE/semi-design](https://github.com/DouyinFE/semi-design) | 8/10 | agent_authority, economics_maintenance | 10 ledger + 10 receipts |
| 90 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1599 | [InsulaCRM/InsulaCRM](https://github.com/InsulaCRM/InsulaCRM) | 8/10 | data_model, provenance_rights | 10 ledger + 10 receipts |
| 91 | Law Firms (law_firms) | P7-CLOSE-1920 | [onejune2018/Awesome-LLM-Eval](https://github.com/onejune2018/Awesome-LLM-Eval) | 9/10 | runtime_deployment | 10 ledger + 10 receipts |
| 92 | Law Firms (law_firms) | P7-CLOSE-1923 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 93 | Law Firms (law_firms) | P7-CLOSE-1941 | [rh-aiservices-bu/insurance-claim-processing](https://github.com/rh-aiservices-bu/insurance-claim-processing) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 94 | Law Firms (law_firms) | P7-CLOSE-1944 | [samarailly51-pixel/claimpilot-harness](https://github.com/samarailly51-pixel/claimpilot-harness) | 9/10 | integration_surface | 10 ledger + 10 receipts |
| 95 | Law Firms (law_firms) | P7-CLOSE-1952 | [the-open-agent/openagent](https://github.com/the-open-agent/openagent) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 96 | Law Firms (law_firms) | P7-CLOSE-1781 | [ColorlibHQ/gentelella](https://github.com/ColorlibHQ/gentelella) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 97 | Law Firms (law_firms) | P7-CLOSE-1787 | [FlorianBruniaux/claude-code-ultimate-guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) | 8/10 | integration_surface, provenance_rights | 10 ledger + 10 receipts |
| 98 | Law Firms (law_firms) | P7-CLOSE-1817 | [SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium) | 8/10 | data_model, provenance_rights | 10 ledger + 10 receipts |
| 99 | Law Firms (law_firms) | P7-CLOSE-1823 | [ahmedsaadawi13/splash-estate-crm](https://github.com/ahmedsaadawi13/splash-estate-crm) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 100 | Law Firms (law_firms) | P7-CLOSE-1846 | [boxyhq/saas-starter-kit](https://github.com/boxyhq/saas-starter-kit) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 101 | Logistics & Freight (logistics_freight) | P7-CLOSE-2061 | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 9/10 | workflow_behavior | 10 ledger + 10 receipts |
| 102 | Logistics & Freight (logistics_freight) | P7-CLOSE-2086 | [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 103 | Logistics & Freight (logistics_freight) | P7-CLOSE-2093 | [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 104 | Logistics & Freight (logistics_freight) | P7-CLOSE-2103 | [mickasmt/next-saas-stripe-starter](https://github.com/mickasmt/next-saas-stripe-starter) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 105 | Logistics & Freight (logistics_freight) | P7-CLOSE-2105 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 106 | Logistics & Freight (logistics_freight) | P7-CLOSE-2111 | [nextjs/saas-starter](https://github.com/nextjs/saas-starter) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 107 | Logistics & Freight (logistics_freight) | P7-CLOSE-2120 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 108 | Logistics & Freight (logistics_freight) | P7-CLOSE-2131 | [rajveersidhu/IT-Helpdesk-Ticketing-System](https://github.com/rajveersidhu/IT-Helpdesk-Ticketing-System) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 109 | Logistics & Freight (logistics_freight) | P7-CLOSE-2145 | [the-open-agent/openagent](https://github.com/the-open-agent/openagent) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 110 | Logistics & Freight (logistics_freight) | P7-CLOSE-1982 | [CursorTouch/Windows-MCP](https://github.com/CursorTouch/Windows-MCP) | 8/10 | data_model, demand_atom_fit | 10 ledger + 10 receipts |
| 111 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2285 | [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 112 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2339 | [stevenmcsorley/Private-Legal-DMS](https://github.com/stevenmcsorley/Private-Legal-DMS) | 9/10 | workflow_behavior | 10 ledger + 10 receipts |
| 113 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2342 | [the-open-agent/openagent](https://github.com/the-open-agent/openagent) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 114 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2350 | [verifywise-ai/verifywise](https://github.com/verifywise-ai/verifywise) | 9/10 | data_model | 10 ledger + 10 receipts |
| 115 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2353 | [webdevcody/wdc-saas-starter-kit](https://github.com/webdevcody/wdc-saas-starter-kit) | 9/10 | workflow_behavior | 10 ledger + 10 receipts |
| 116 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2172 | [ColorlibHQ/gentelella](https://github.com/ColorlibHQ/gentelella) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 117 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2191 | [LordQueso/MCP-construction](https://github.com/LordQueso/MCP-construction) | 8/10 | integration_surface, provenance_rights | 10 ledger + 10 receipts |
| 118 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2241 | [chamilo/chamilo-lms](https://github.com/chamilo/chamilo-lms) | 8/10 | runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 119 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2244 | [coaidev/coai](https://github.com/coaidev/coai) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 120 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2246 | [conductor-oss/conductor](https://github.com/conductor-oss/conductor) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 121 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2490 | [manjurulhoque/doccure](https://github.com/manjurulhoque/doccure) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 122 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2511 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 123 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2530 | [samarailly51-pixel/claimpilot-harness](https://github.com/samarailly51-pixel/claimpilot-harness) | 9/10 | integration_surface | 10 ledger + 10 receipts |
| 124 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2535 | [stevenmcsorley/Private-Legal-DMS](https://github.com/stevenmcsorley/Private-Legal-DMS) | 9/10 | workflow_behavior | 10 ledger + 10 receipts |
| 125 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2538 | [the-open-agent/openagent](https://github.com/the-open-agent/openagent) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 126 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2365 | [AnilBotta/realtorspal-ai](https://github.com/AnilBotta/realtorspal-ai) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 127 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2370 | [ColorlibHQ/gentelella](https://github.com/ColorlibHQ/gentelella) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 128 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2375 | [ELIOTT-BONTE/Legal_doc_processing_pipeline](https://github.com/ELIOTT-BONTE/Legal_doc_processing_pipeline) | 8/10 | integration_surface, ui_assembly | 10 ledger + 10 receipts |
| 129 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2376 | [FlorianBruniaux/claude-code-ultimate-guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) | 8/10 | integration_surface, provenance_rights | 10 ledger + 10 receipts |
| 130 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2405 | [SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium) | 8/10 | data_model, provenance_rights | 10 ledger + 10 receipts |
| 131 | Property Management (property_management) | P7-CLOSE-2730 | [samarailly51-pixel/claimpilot-harness](https://github.com/samarailly51-pixel/claimpilot-harness) | 9/10 | integration_surface | 10 ledger + 10 receipts |
| 132 | Property Management (property_management) | P7-CLOSE-2756 | [zarf-dev/zarf](https://github.com/zarf-dev/zarf) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 133 | Property Management (property_management) | P7-CLOSE-2567 | [ColorlibHQ/gentelella](https://github.com/ColorlibHQ/gentelella) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 134 | Property Management (property_management) | P7-CLOSE-2573 | [FlorianBruniaux/claude-code-ultimate-guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) | 8/10 | integration_surface, provenance_rights | 10 ledger + 10 receipts |
| 135 | Property Management (property_management) | P7-CLOSE-2586 | [LordQueso/MCP-construction](https://github.com/LordQueso/MCP-construction) | 8/10 | economics_maintenance, integration_surface | 10 ledger + 10 receipts |
| 136 | Property Management (property_management) | P7-CLOSE-2590 | [MiladJoodi/Civora-Dashboard](https://github.com/MiladJoodi/Civora-Dashboard) | 8/10 | runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 137 | Property Management (property_management) | P7-CLOSE-2597 | [OpenOLAT/OpenOLAT](https://github.com/OpenOLAT/OpenOLAT) | 8/10 | agent_authority, economics_maintenance | 10 ledger + 10 receipts |
| 138 | Property Management (property_management) | P7-CLOSE-2606 | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 8/10 | demand_atom_fit, workflow_behavior | 10 ledger + 10 receipts |
| 139 | Property Management (property_management) | P7-CLOSE-2611 | [akaunting/akaunting](https://github.com/akaunting/akaunting) | 8/10 | agent_authority, runtime_deployment | 10 ledger + 10 receipts |
| 140 | Property Management (property_management) | P7-CLOSE-2630 | [aws-samples/serverless-eda-insurance-claims-processing](https://github.com/aws-samples/serverless-eda-insurance-claims-processing) | 8/10 | ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 141 | Real Estate (real_estate) | P7-CLOSE-2884 | [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 142 | Real Estate (real_estate) | P7-CLOSE-2890 | [manjurulhoque/doccure](https://github.com/manjurulhoque/doccure) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 143 | Real Estate (real_estate) | P7-CLOSE-2908 | [onejune2018/Awesome-LLM-Eval](https://github.com/onejune2018/Awesome-LLM-Eval) | 9/10 | runtime_deployment | 10 ledger + 10 receipts |
| 144 | Real Estate (real_estate) | P7-CLOSE-2911 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 145 | Real Estate (real_estate) | P7-CLOSE-2932 | [samarailly51-pixel/claimpilot-harness](https://github.com/samarailly51-pixel/claimpilot-harness) | 9/10 | integration_surface | 10 ledger + 10 receipts |
| 146 | Real Estate (real_estate) | P7-CLOSE-2949 | [verifywise-ai/verifywise](https://github.com/verifywise-ai/verifywise) | 9/10 | data_model | 10 ledger + 10 receipts |
| 147 | Real Estate (real_estate) | P7-CLOSE-2955 | [yizhiyanhua-ai/fireworks-tech-graph](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 148 | Real Estate (real_estate) | P7-CLOSE-2768 | [ColorlibHQ/gentelella](https://github.com/ColorlibHQ/gentelella) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 149 | Real Estate (real_estate) | P7-CLOSE-2774 | [FlorianBruniaux/claude-code-ultimate-guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) | 8/10 | integration_surface, provenance_rights | 10 ledger + 10 receipts |
| 150 | Real Estate (real_estate) | P7-CLOSE-2797 | [OpenOLAT/OpenOLAT](https://github.com/OpenOLAT/OpenOLAT) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 151 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-2961 | [AishwaryaSingh123/Court_and_Legal_Management_Systerm](https://github.com/AishwaryaSingh123/Court_and_Legal_Management_Systerm) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 152 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-2975 | [FlorianBruniaux/claude-code-ultimate-guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) | 8/10 | data_model, provenance_rights | 10 ledger + 10 receipts |
| 153 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-2977 | [HuIsJason/real-estate-crm](https://github.com/HuIsJason/real-estate-crm) | 8/10 | runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 154 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3028 | [aws-samples/serverless-eda-insurance-claims-processing](https://github.com/aws-samples/serverless-eda-insurance-claims-processing) | 8/10 | ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 155 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3030 | [boxyhq/saas-starter-kit](https://github.com/boxyhq/saas-starter-kit) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 156 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3034 | [chamilo/chamilo-lms](https://github.com/chamilo/chamilo-lms) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 157 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3045 | [darcys22/godbledger](https://github.com/darcys22/godbledger) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 158 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3066 | [frappe/lms](https://github.com/frappe/lms) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 159 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3068 | [garystafford/general-contractor-agent-demo](https://github.com/garystafford/general-contractor-agent-demo) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 160 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3071 | [gschoelderle/gender-gap-in-stem-education](https://github.com/gschoelderle/gender-gap-in-stem-education) | 8/10 | data_model, integration_surface | 10 ledger + 10 receipts |
| 161 | SaaS (saas) | P7-CLOSE-3319 | [risuunava/helpdesk-system-web](https://github.com/risuunava/helpdesk-system-web) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 162 | SaaS (saas) | P7-CLOSE-3326 | [stevenmcsorley/Private-Legal-DMS](https://github.com/stevenmcsorley/Private-Legal-DMS) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 163 | SaaS (saas) | P7-CLOSE-3329 | [the-open-agent/openagent](https://github.com/the-open-agent/openagent) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 164 | SaaS (saas) | P7-CLOSE-3330 | [thoughtbot/administrate](https://github.com/thoughtbot/administrate) | 9/10 | runtime_deployment | 10 ledger + 10 receipts |
| 165 | SaaS (saas) | P7-CLOSE-3343 | [yizhiyanhua-ai/fireworks-tech-graph](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 166 | SaaS (saas) | P7-CLOSE-3157 | [AnilBotta/realtorspal-ai](https://github.com/AnilBotta/realtorspal-ai) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 167 | SaaS (saas) | P7-CLOSE-3166 | [DouyinFE/semi-design](https://github.com/DouyinFE/semi-design) | 8/10 | agent_authority, economics_maintenance | 10 ledger + 10 receipts |
| 168 | SaaS (saas) | P7-CLOSE-3205 | [akveo/ngx-admin](https://github.com/akveo/ngx-admin) | 8/10 | runtime_deployment, workflow_behavior | 10 ledger + 10 receipts |
| 169 | SaaS (saas) | P7-CLOSE-3209 | [amanraj74/hirepilot](https://github.com/amanraj74/hirepilot) | 8/10 | runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 170 | SaaS (saas) | P7-CLOSE-3217 | [apifyforge/logistics-freight-intelligence-mcp](https://github.com/apifyforge/logistics-freight-intelligence-mcp) | 8/10 | data_model, integration_surface | 10 ledger + 10 receipts |

Every pair has the fixed ten dimensions: `demand_atom_fit`, `workflow_behavior`, `data_model`, `integration_surface`, `ui_assembly`, `agent_authority`, `verification_eval`, `provenance_rights`, `runtime_deployment`, and `economics_maintenance`.

## Rights, unknowns, falsifiers, and next gates

Every row carries dimension-specific unknown Block Contract fields, rights state `U`, SBOM/dependency/notice/attribution/lineage unknowns, preserved queue rights signals, a falsifier, and a smallest next read-only gate. Declared permissive signals remain unverified and are not legal clearance; no declared license remains unknown. No source was copied or scanned.

## Preservation and hashes

- Closure queue SHA-256: `99ead4a8f8de29228a73fe3fe3bd131ee952a5950b50c3bc126c1423add84c32`
- Coverage-gap audit SHA-256: `9d1a6e9177bae58cb15f0532ce7a1dbb5765fc3d231c1396a7db0db0d684e948`
- Shared Phase-7 state SHA-256 (read-only preservation anchor): `70bd22a754c417d378d6b09024fa64405526bab9c9e45c824a8080f3a3dffbda`
- Wave 1 ledger SHA-256: `35e6d9956d5689f2afc2758dad000ed6683844133023309babe41b12549861f8`
- Wave 2 ledger SHA-256: `c49de3b0d7b696df539983562f70a2b83b5c2cf778e37124b1c84b9cc971e676`
- Wave 3 ledger SHA-256: `d8a988a944693260d58ff395e481d9bda98165b272565a5e7cd062b044aaf288`
- Wave 3 source-receipts SHA-256: `90dab130d82ebf47e227a090c75c6af2827ef7c71c177d3fc952f9b5d0ff8346`
- Wave 1, Wave 2, phases 2–6, master matrix, closure queue, and coordinator files were not written by this lane.

## Verification and boundary

- Post-write command: `node smoke-dimension-evidence-wave-3.mjs`.
- Required checks: output boundary, JSONL parse, deterministic next-tranche selection, exact 170-pair/1,700-row counters, 10 dimensions per pair, 170 rows per dimension, prior Wave 1/2 exclusion, identity/source/date/evidence parity, inherited/fresh labeling, source-link boundary, rights/SBOM unknowns, report markers, preserved hashes, and research-only boundaries.
- Boundary: `research_only=true`; `UNEXECUTED`; `NOT_ADMITTED`; `implementation_authorized=false`; authenticated behavior `U`; `parent_goal_status=active`; master counters unchanged; no overall completion claim.
- Callback is recorded in lane state after fresh CENA pane resolution and readback.

## Output files

- `dimension-evidence-ledger.jsonl` — 1,700 normalized pair×dimension records.
- `source-receipts.jsonl` — 1,700 matching source receipts.
- `dimension-depth-report.md` — method, exact selected pair inventory, counts, preservation, and boundary report.
- `lane-state.json` — Wave 3 lane-only state; shared Phase-7 state is not promoted.
- `smoke-dimension-evidence-wave-3.mjs` — post-write structural/source/freshness/boundary smoke.

Callback: fresh CENA pane resolved, six-line receipt delivered with `pane run`, read back after 2 seconds, and verified; no overall completion claim.
