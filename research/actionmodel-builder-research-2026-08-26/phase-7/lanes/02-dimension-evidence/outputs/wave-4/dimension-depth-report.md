# Phase-7 Wave 4 — Dimension Evidence Ledger

Lane: `P7-DIMENSION-EVIDENCE`
Wave: `P7-DIMENSION-EVIDENCE-W4`
Observation date: `2026-08-27`
Status: lane artifact complete; this is not an overall closure claim.

## Scope and deterministic selection

Wave 4 selects the next 10 remaining `partial` closure-queue pairs per each of 17 industries. The deterministic order is `dimension_count` descending, then `queue_id` ascending, after excluding all 10 Wave 1 T1 queue IDs, all 170 Wave 2 queue IDs, and all 170 Wave 3 queue IDs. The result is 170 distinct industry×repository pairs: 10 per industry.

The selected pairs include the remaining nine-of-ten, eight-of-ten, and seven-of-ten partials. Each pair receives exactly one record for each of the ten dimensions, for 1,700 ledger rows and 1,700 matching source receipts. Missing dimensions remain explicit `U` / `unknown_blocked`; no pair is promoted and master counters are unchanged.

## Evidence method and freshness boundary

First-party public URLs from the closure queue are retained as the preferred source references. This Wave 4 lane performed no fresh public fetch: inherited queue context is labeled `inherited_queue_context=true`, `source_access_fresh_public_evidence=false`, and `inherited_repository_specific_not_fresh`. Inherited observations are not treated as fresh proof, capability proof, or admission. No generic cell evidence was copied and no new capability claim was fabricated.

For dimensions present in a selected queue row, the ledger preserves the repository-specific observation, exact source URLs, evidence class, limitation, falsifier/next gate, observation index, slot ID, and rights boundary as inherited context. For every queue-declared missing dimension, direct and inferred claims are empty and the row records the limitation, falsifier, smallest read-only gate, and unknown Block Contract fields.

## Exact counts

- Selected pairs: **170** distinct pairs, 10 per each of 17 industries.
- Dimension evidence rows: **1,700** (170 pairs × 10 dimensions).
- Source receipts: **1,700**, one for every ledger row with matching pair×dimension key and source URL list.
- Per-dimension rows: demand_atom_fit=170, workflow_behavior=170, data_model=170, integration_surface=170, ui_assembly=170, agent_authority=170, verification_eval=170, provenance_rights=170, runtime_deployment=170, economics_maintenance=170.
- Explicit missing/unknown rows: **359**; all are U / unknown_blocked and remain non-promoting.
- Baseline master counters remain unchanged: 270 complete pairs / 1,700 target pairs; 3,076 partial pairs / 3,346 closure-queue rows. Wave 4 records evidence only.
- No overall completion claim is made.

## Industry inventory

| Industry | Pairs | Dimension rows | Receipts | Prior dimension counts | Selected queue IDs |
|---|---:|---:|---:|---|---|
| Accounting Firms (accounting_firms) | 10 | 100 | 100 | 7:1, 8:9 | P7-CLOSE-0085, P7-CLOSE-0087, P7-CLOSE-0096, P7-CLOSE-0116, P7-CLOSE-0125, P7-CLOSE-0140, P7-CLOSE-0146, P7-CLOSE-0152, P7-CLOSE-0172, P7-CLOSE-0012 |
| Construction (construction) | 10 | 100 | 100 | 8:10 | P7-CLOSE-0245, P7-CLOSE-0259, P7-CLOSE-0264, P7-CLOSE-0269, P7-CLOSE-0315, P7-CLOSE-0316, P7-CLOSE-0329, P7-CLOSE-0335, P7-CLOSE-0341, P7-CLOSE-0342 |
| Course Creators (course_creators) | 10 | 100 | 100 | 7:1, 8:9 | P7-CLOSE-0483, P7-CLOSE-0489, P7-CLOSE-0536, P7-CLOSE-0551, P7-CLOSE-0558, P7-CLOSE-0564, P7-CLOSE-0569, P7-CLOSE-0570, P7-CLOSE-0580, P7-CLOSE-0399 |
| Ecommerce (ecommerce) | 10 | 100 | 100 | 8:10 | P7-CLOSE-0641, P7-CLOSE-0647, P7-CLOSE-0678, P7-CLOSE-0711, P7-CLOSE-0724, P7-CLOSE-0728, P7-CLOSE-0731, P7-CLOSE-0737, P7-CLOSE-0746, P7-CLOSE-0772 |
| Education & Training (education_training) | 10 | 100 | 100 | 8:10 | P7-CLOSE-0802, P7-CLOSE-0820, P7-CLOSE-0841, P7-CLOSE-0858, P7-CLOSE-0860, P7-CLOSE-0864, P7-CLOSE-0878, P7-CLOSE-0883, P7-CLOSE-0929, P7-CLOSE-0951 |
| Healthcare & Medical Practices (healthcare_medical_practices) | 10 | 100 | 100 | 8:9, 9:1 | P7-CLOSE-1173, P7-CLOSE-1004, P7-CLOSE-1017, P7-CLOSE-1028, P7-CLOSE-1037, P7-CLOSE-1063, P7-CLOSE-1067, P7-CLOSE-1070, P7-CLOSE-1072, P7-CLOSE-1078 |
| Hospitality (hospitality) | 10 | 100 | 100 | 8:10 | P7-CLOSE-1186, P7-CLOSE-1207, P7-CLOSE-1211, P7-CLOSE-1228, P7-CLOSE-1231, P7-CLOSE-1243, P7-CLOSE-1261, P7-CLOSE-1266, P7-CLOSE-1299, P7-CLOSE-1312 |
| Insurance Agencies (insurance_agencies) | 10 | 100 | 100 | 7:1, 8:9 | P7-CLOSE-1408, P7-CLOSE-1431, P7-CLOSE-1449, P7-CLOSE-1454, P7-CLOSE-1463, P7-CLOSE-1491, P7-CLOSE-1503, P7-CLOSE-1504, P7-CLOSE-1515, P7-CLOSE-1390 |
| IT Services & MSPs (it_services_msps) | 10 | 100 | 100 | 8:10 | P7-CLOSE-1617, P7-CLOSE-1624, P7-CLOSE-1640, P7-CLOSE-1643, P7-CLOSE-1647, P7-CLOSE-1657, P7-CLOSE-1659, P7-CLOSE-1678, P7-CLOSE-1686, P7-CLOSE-1690 |
| Law Firms (law_firms) | 10 | 100 | 100 | 7:3, 8:7 | P7-CLOSE-1850, P7-CLOSE-1855, P7-CLOSE-1863, P7-CLOSE-1874, P7-CLOSE-1890, P7-CLOSE-1903, P7-CLOSE-1908, P7-CLOSE-1782, P7-CLOSE-1789, P7-CLOSE-1795 |
| Logistics & Freight (logistics_freight) | 10 | 100 | 100 | 7:2, 8:8 | P7-CLOSE-2019, P7-CLOSE-2021, P7-CLOSE-2039, P7-CLOSE-2072, P7-CLOSE-2112, P7-CLOSE-2127, P7-CLOSE-2136, P7-CLOSE-2142, P7-CLOSE-1980, P7-CLOSE-1981 |
| Marketing & Social Media Agencies (marketing_social_media_agencies) | 10 | 100 | 100 | 7:4, 8:6 | P7-CLOSE-2247, P7-CLOSE-2274, P7-CLOSE-2291, P7-CLOSE-2296, P7-CLOSE-2331, P7-CLOSE-2343, P7-CLOSE-2167, P7-CLOSE-2171, P7-CLOSE-2173, P7-CLOSE-2188 |
| Mortgage Brokers (mortgage_brokers) | 10 | 100 | 100 | 8:10 | P7-CLOSE-2408, P7-CLOSE-2411, P7-CLOSE-2430, P7-CLOSE-2434, P7-CLOSE-2438, P7-CLOSE-2449, P7-CLOSE-2451, P7-CLOSE-2463, P7-CLOSE-2473, P7-CLOSE-2479 |
| Property Management (property_management) | 10 | 100 | 100 | 7:1, 8:9 | P7-CLOSE-2633, P7-CLOSE-2637, P7-CLOSE-2650, P7-CLOSE-2661, P7-CLOSE-2670, P7-CLOSE-2676, P7-CLOSE-2720, P7-CLOSE-2728, P7-CLOSE-2737, P7-CLOSE-2568 |
| Real Estate (real_estate) | 10 | 100 | 100 | 8:10 | P7-CLOSE-2804, P7-CLOSE-2807, P7-CLOSE-2820, P7-CLOSE-2826, P7-CLOSE-2835, P7-CLOSE-2844, P7-CLOSE-2852, P7-CLOSE-2877, P7-CLOSE-2929, P7-CLOSE-2941 |
| Recruiting & Staffing (recruiting_staffing) | 10 | 100 | 100 | 7:6, 8:4 | P7-CLOSE-3084, P7-CLOSE-3102, P7-CLOSE-3113, P7-CLOSE-3123, P7-CLOSE-2969, P7-CLOSE-2973, P7-CLOSE-2974, P7-CLOSE-2978, P7-CLOSE-2986, P7-CLOSE-3000 |
| SaaS (saas) | 10 | 100 | 100 | 7:1, 8:9 | P7-CLOSE-3233, P7-CLOSE-3235, P7-CLOSE-3264, P7-CLOSE-3273, P7-CLOSE-3279, P7-CLOSE-3285, P7-CLOSE-3292, P7-CLOSE-3320, P7-CLOSE-3322, P7-CLOSE-3155 |

## Per-pair inventory

| Selection | Industry | Queue ID | Canonical repository | Before | Missing dimensions | Rows |
|---:|---|---|---|---:|---|---:|
| 1 | Accounting Firms (accounting_firms) | P7-CLOSE-0085 | [coaidev/coai](https://github.com/coaidev/coai) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 2 | Accounting Firms (accounting_firms) | P7-CLOSE-0087 | [conductor-oss/conductor](https://github.com/conductor-oss/conductor) | 8/10 | provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 3 | Accounting Firms (accounting_firms) | P7-CLOSE-0096 | [devb-saratoga/mortgage-network](https://github.com/devb-saratoga/mortgage-network) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 4 | Accounting Firms (accounting_firms) | P7-CLOSE-0116 | [frappe/lms](https://github.com/frappe/lms) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 5 | Accounting Firms (accounting_firms) | P7-CLOSE-0125 | [ixartz/Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate) | 8/10 | data_model, verification_eval | 10 ledger + 10 receipts |
| 6 | Accounting Firms (accounting_firms) | P7-CLOSE-0140 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 8/10 | provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 7 | Accounting Firms (accounting_firms) | P7-CLOSE-0146 | [nextjs/saas-starter](https://github.com/nextjs/saas-starter) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 8 | Accounting Firms (accounting_firms) | P7-CLOSE-0152 | [onejune2018/Awesome-LLM-Eval](https://github.com/onejune2018/Awesome-LLM-Eval) | 8/10 | data_model, runtime_deployment | 10 ledger + 10 receipts |
| 9 | Accounting Firms (accounting_firms) | P7-CLOSE-0172 | [rh-aiservices-bu/insurance-claim-processing](https://github.com/rh-aiservices-bu/insurance-claim-processing) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 10 | Accounting Firms (accounting_firms) | P7-CLOSE-0012 | [CursorTouch/Windows-MCP](https://github.com/CursorTouch/Windows-MCP) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 11 | Construction (construction) | P7-CLOSE-0245 | [SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium) | 8/10 | data_model, provenance_rights | 10 ledger + 10 receipts |
| 12 | Construction (construction) | P7-CLOSE-0259 | [amanraj74/hirepilot](https://github.com/amanraj74/hirepilot) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 13 | Construction (construction) | P7-CLOSE-0264 | [api-evangelist/freshteam](https://github.com/api-evangelist/freshteam) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 14 | Construction (construction) | P7-CLOSE-0269 | [ashev87/propstack-mcp](https://github.com/ashev87/propstack-mcp) | 8/10 | economics_maintenance, runtime_deployment | 10 ledger + 10 receipts |
| 15 | Construction (construction) | P7-CLOSE-0315 | [gschoelderle/gender-gap-in-stem-education](https://github.com/gschoelderle/gender-gap-in-stem-education) | 8/10 | data_model, integration_surface | 10 ledger + 10 receipts |
| 16 | Construction (construction) | P7-CLOSE-0316 | [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 17 | Construction (construction) | P7-CLOSE-0329 | [manjurulhoque/doccure](https://github.com/manjurulhoque/doccure) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 18 | Construction (construction) | P7-CLOSE-0335 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 8/10 | provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 19 | Construction (construction) | P7-CLOSE-0341 | [nextjs/saas-starter](https://github.com/nextjs/saas-starter) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 20 | Construction (construction) | P7-CLOSE-0342 | [nikichakraborty2005/Ecommerce-Inventory-Demand-Forecasting](https://github.com/nikichakraborty2005/Ecommerce-Inventory-Demand-Forecasting) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 21 | Course Creators (course_creators) | P7-CLOSE-0483 | [conductor-oss/conductor](https://github.com/conductor-oss/conductor) | 8/10 | provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 22 | Course Creators (course_creators) | P7-CLOSE-0489 | [darcys22/godbledger](https://github.com/darcys22/godbledger) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 23 | Course Creators (course_creators) | P7-CLOSE-0536 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 8/10 | provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 24 | Course Creators (course_creators) | P7-CLOSE-0551 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | 8/10 | data_model, provenance_rights | 10 ledger + 10 receipts |
| 25 | Course Creators (course_creators) | P7-CLOSE-0558 | [prolinkinfo/RealEstateCRM](https://github.com/prolinkinfo/RealEstateCRM) | 8/10 | ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 26 | Course Creators (course_creators) | P7-CLOSE-0564 | [rajveersidhu/IT-Helpdesk-Ticketing-System](https://github.com/rajveersidhu/IT-Helpdesk-Ticketing-System) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 27 | Course Creators (course_creators) | P7-CLOSE-0569 | [rh-aiservices-bu/insurance-claim-processing](https://github.com/rh-aiservices-bu/insurance-claim-processing) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 28 | Course Creators (course_creators) | P7-CLOSE-0570 | [risuunava/helpdesk-system-web](https://github.com/risuunava/helpdesk-system-web) | 8/10 | demand_atom_fit, economics_maintenance | 10 ledger + 10 receipts |
| 29 | Course Creators (course_creators) | P7-CLOSE-0580 | [the-open-agent/openagent](https://github.com/the-open-agent/openagent) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 30 | Course Creators (course_creators) | P7-CLOSE-0399 | [AishwaryaSingh123/Court_and_Legal_Management_Systerm](https://github.com/AishwaryaSingh123/Court_and_Legal_Management_Systerm) | 7/10 | agent_authority, demand_atom_fit, ui_assembly | 10 ledger + 10 receipts |
| 31 | Ecommerce (ecommerce) | P7-CLOSE-0641 | [SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium) | 8/10 | data_model, provenance_rights | 10 ledger + 10 receipts |
| 32 | Ecommerce (ecommerce) | P7-CLOSE-0647 | [ahmedsaadawi13/splash-estate-crm](https://github.com/ahmedsaadawi13/splash-estate-crm) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 33 | Ecommerce (ecommerce) | P7-CLOSE-0678 | [conductor-oss/conductor](https://github.com/conductor-oss/conductor) | 8/10 | provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 34 | Ecommerce (ecommerce) | P7-CLOSE-0711 | [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 35 | Ecommerce (ecommerce) | P7-CLOSE-0724 | [manjurulhoque/doccure](https://github.com/manjurulhoque/doccure) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 36 | Ecommerce (ecommerce) | P7-CLOSE-0728 | [mickasmt/next-saas-stripe-starter](https://github.com/mickasmt/next-saas-stripe-starter) | 8/10 | agent_authority, workflow_behavior | 10 ledger + 10 receipts |
| 37 | Ecommerce (ecommerce) | P7-CLOSE-0731 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 8/10 | provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 38 | Ecommerce (ecommerce) | P7-CLOSE-0737 | [nextjs/saas-starter](https://github.com/nextjs/saas-starter) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 39 | Ecommerce (ecommerce) | P7-CLOSE-0746 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | 8/10 | data_model, provenance_rights | 10 ledger + 10 receipts |
| 40 | Ecommerce (ecommerce) | P7-CLOSE-0772 | [stevenmcsorley/Private-Legal-DMS](https://github.com/stevenmcsorley/Private-Legal-DMS) | 8/10 | demand_atom_fit, workflow_behavior | 10 ledger + 10 receipts |
| 41 | Education & Training (education_training) | P7-CLOSE-0802 | [ColorlibHQ/gentelella](https://github.com/ColorlibHQ/gentelella) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 42 | Education & Training (education_training) | P7-CLOSE-0820 | [LordQueso/MCP-construction](https://github.com/LordQueso/MCP-construction) | 8/10 | economics_maintenance, integration_surface | 10 ledger + 10 receipts |
| 43 | Education & Training (education_training) | P7-CLOSE-0841 | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 8/10 | demand_atom_fit, workflow_behavior | 10 ledger + 10 receipts |
| 44 | Education & Training (education_training) | P7-CLOSE-0858 | [api-evangelist/freshteam](https://github.com/api-evangelist/freshteam) | 8/10 | data_model, verification_eval | 10 ledger + 10 receipts |
| 45 | Education & Training (education_training) | P7-CLOSE-0860 | [api-evangelist/tock-reservations](https://github.com/api-evangelist/tock-reservations) | 8/10 | runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 46 | Education & Training (education_training) | P7-CLOSE-0864 | [ashev87/propstack-mcp](https://github.com/ashev87/propstack-mcp) | 8/10 | runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 47 | Education & Training (education_training) | P7-CLOSE-0878 | [conductor-oss/conductor](https://github.com/conductor-oss/conductor) | 8/10 | provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 48 | Education & Training (education_training) | P7-CLOSE-0883 | [darcys22/godbledger](https://github.com/darcys22/godbledger) | 8/10 | agent_authority, workflow_behavior | 10 ledger + 10 receipts |
| 49 | Education & Training (education_training) | P7-CLOSE-0929 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 8/10 | provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 50 | Education & Training (education_training) | P7-CLOSE-0951 | [prolinkinfo/RealEstateCRM](https://github.com/prolinkinfo/RealEstateCRM) | 8/10 | ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 51 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1173 | [verifywise-ai/verifywise](https://github.com/verifywise-ai/verifywise) | 9/10 | data_model | 10 ledger + 10 receipts |
| 52 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1004 | [ELIOTT-BONTE/Legal_doc_processing_pipeline](https://github.com/ELIOTT-BONTE/Legal_doc_processing_pipeline) | 8/10 | integration_surface, ui_assembly | 10 ledger + 10 receipts |
| 53 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1017 | [LordQueso/MCP-construction](https://github.com/LordQueso/MCP-construction) | 8/10 | economics_maintenance, integration_surface | 10 ledger + 10 receipts |
| 54 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1028 | [OpenOLAT/OpenOLAT](https://github.com/OpenOLAT/OpenOLAT) | 8/10 | agent_authority, economics_maintenance | 10 ledger + 10 receipts |
| 55 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1037 | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 8/10 | demand_atom_fit, workflow_behavior | 10 ledger + 10 receipts |
| 56 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1063 | [boxyhq/saas-starter-kit](https://github.com/boxyhq/saas-starter-kit) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 57 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1067 | [chamilo/chamilo-lms](https://github.com/chamilo/chamilo-lms) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 58 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1070 | [coaidev/coai](https://github.com/coaidev/coai) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 59 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1072 | [conductor-oss/conductor](https://github.com/conductor-oss/conductor) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 60 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1078 | [darcys22/godbledger](https://github.com/darcys22/godbledger) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 61 | Hospitality (hospitality) | P7-CLOSE-1186 | [AishwaryaSingh123/Court_and_Legal_Management_Systerm](https://github.com/AishwaryaSingh123/Court_and_Legal_Management_Systerm) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 62 | Hospitality (hospitality) | P7-CLOSE-1207 | [Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 63 | Hospitality (hospitality) | P7-CLOSE-1211 | [LordQueso/MCP-construction](https://github.com/LordQueso/MCP-construction) | 8/10 | economics_maintenance, integration_surface | 10 ledger + 10 receipts |
| 64 | Hospitality (hospitality) | P7-CLOSE-1228 | [SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium) | 8/10 | data_model, provenance_rights | 10 ledger + 10 receipts |
| 65 | Hospitality (hospitality) | P7-CLOSE-1231 | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 8/10 | demand_atom_fit, workflow_behavior | 10 ledger + 10 receipts |
| 66 | Hospitality (hospitality) | P7-CLOSE-1243 | [amirgoli1383saransari/hirehub](https://github.com/amirgoli1383saransari/hirehub) | 8/10 | ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 67 | Hospitality (hospitality) | P7-CLOSE-1261 | [chamilo/chamilo-lms](https://github.com/chamilo/chamilo-lms) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 68 | Hospitality (hospitality) | P7-CLOSE-1266 | [conductor-oss/conductor](https://github.com/conductor-oss/conductor) | 8/10 | provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 69 | Hospitality (hospitality) | P7-CLOSE-1299 | [gschoelderle/gender-gap-in-stem-education](https://github.com/gschoelderle/gender-gap-in-stem-education) | 8/10 | data_model, integration_surface | 10 ledger + 10 receipts |
| 70 | Hospitality (hospitality) | P7-CLOSE-1312 | [martaldsantos/agentic-ai-hack](https://github.com/martaldsantos/agentic-ai-hack) | 8/10 | ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 71 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1408 | [LordQueso/MCP-construction](https://github.com/LordQueso/MCP-construction) | 8/10 | economics_maintenance, integration_surface | 10 ledger + 10 receipts |
| 72 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1431 | [ahmedsaadawi13/splash-estate-crm](https://github.com/ahmedsaadawi13/splash-estate-crm) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 73 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1449 | [ashev87/propstack-mcp](https://github.com/ashev87/propstack-mcp) | 8/10 | economics_maintenance, runtime_deployment | 10 ledger + 10 receipts |
| 74 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1454 | [boxyhq/saas-starter-kit](https://github.com/boxyhq/saas-starter-kit) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 75 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1463 | [conductor-oss/conductor](https://github.com/conductor-oss/conductor) | 8/10 | provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 76 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1491 | [frappe/lms](https://github.com/frappe/lms) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 77 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1503 | [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | 8/10 | agent_authority, data_model | 10 ledger + 10 receipts |
| 78 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1504 | [kartikbansalx/LegalVault-Legal-Document-Management-System](https://github.com/kartikbansalx/LegalVault-Legal-Document-Management-System) | 8/10 | ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 79 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1515 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 8/10 | provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 80 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1390 | [ColorlibHQ/gentelella](https://github.com/ColorlibHQ/gentelella) | 7/10 | agent_authority, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 81 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1617 | [PySpur-Dev/pyspur](https://github.com/PySpur-Dev/pyspur) | 8/10 | ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 82 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1624 | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 8/10 | demand_atom_fit, workflow_behavior | 10 ledger + 10 receipts |
| 83 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1640 | [api-evangelist/freshteam](https://github.com/api-evangelist/freshteam) | 8/10 | runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 84 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1643 | [apifyforge/logistics-freight-intelligence-mcp](https://github.com/apifyforge/logistics-freight-intelligence-mcp) | 8/10 | data_model, integration_surface | 10 ledger + 10 receipts |
| 85 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1647 | [aws-samples/serverless-eda-insurance-claims-processing](https://github.com/aws-samples/serverless-eda-insurance-claims-processing) | 8/10 | provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 86 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1657 | [coaidev/coai](https://github.com/coaidev/coai) | 8/10 | agent_authority, workflow_behavior | 10 ledger + 10 receipts |
| 87 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1659 | [conductor-oss/conductor](https://github.com/conductor-oss/conductor) | 8/10 | provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 88 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1678 | [espocrm/espocrm](https://github.com/espocrm/espocrm) | 8/10 | integration_surface, ui_assembly | 10 ledger + 10 receipts |
| 89 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1686 | [frappe/lms](https://github.com/frappe/lms) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 90 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1690 | [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | 8/10 | economics_maintenance, integration_surface | 10 ledger + 10 receipts |
| 91 | Law Firms (law_firms) | P7-CLOSE-1850 | [chamilo/chamilo-lms](https://github.com/chamilo/chamilo-lms) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 92 | Law Firms (law_firms) | P7-CLOSE-1855 | [conductor-oss/conductor](https://github.com/conductor-oss/conductor) | 8/10 | provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 93 | Law Firms (law_firms) | P7-CLOSE-1863 | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 8/10 | provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 94 | Law Firms (law_firms) | P7-CLOSE-1874 | [ericporres/family-assistant-skill](https://github.com/ericporres/family-assistant-skill) | 8/10 | runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 95 | Law Firms (law_firms) | P7-CLOSE-1890 | [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 96 | Law Firms (law_firms) | P7-CLOSE-1903 | [martaldsantos/agentic-ai-hack](https://github.com/martaldsantos/agentic-ai-hack) | 8/10 | ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 97 | Law Firms (law_firms) | P7-CLOSE-1908 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 8/10 | provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 98 | Law Firms (law_firms) | P7-CLOSE-1782 | [CursorTouch/Windows-MCP](https://github.com/CursorTouch/Windows-MCP) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 99 | Law Firms (law_firms) | P7-CLOSE-1789 | [HuIsJason/real-estate-crm](https://github.com/HuIsJason/real-estate-crm) | 7/10 | runtime_deployment, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 100 | Law Firms (law_firms) | P7-CLOSE-1795 | [Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 101 | Logistics & Freight (logistics_freight) | P7-CLOSE-2019 | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 8/10 | demand_atom_fit, workflow_behavior | 10 ledger + 10 receipts |
| 102 | Logistics & Freight (logistics_freight) | P7-CLOSE-2021 | [ahmedsaadawi13/splash-estate-crm](https://github.com/ahmedsaadawi13/splash-estate-crm) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 103 | Logistics & Freight (logistics_freight) | P7-CLOSE-2039 | [ashev87/propstack-mcp](https://github.com/ashev87/propstack-mcp) | 8/10 | runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 104 | Logistics & Freight (logistics_freight) | P7-CLOSE-2072 | [espocrm/espocrm](https://github.com/espocrm/espocrm) | 8/10 | integration_surface, ui_assembly | 10 ledger + 10 receipts |
| 105 | Logistics & Freight (logistics_freight) | P7-CLOSE-2112 | [nikichakraborty2005/Ecommerce-Inventory-Demand-Forecasting](https://github.com/nikichakraborty2005/Ecommerce-Inventory-Demand-Forecasting) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 106 | Logistics & Freight (logistics_freight) | P7-CLOSE-2127 | [prolinkinfo/RealEstateCRM](https://github.com/prolinkinfo/RealEstateCRM) | 8/10 | ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 107 | Logistics & Freight (logistics_freight) | P7-CLOSE-2136 | [samarailly51-pixel/claimpilot-harness](https://github.com/samarailly51-pixel/claimpilot-harness) | 8/10 | integration_surface, provenance_rights | 10 ledger + 10 receipts |
| 108 | Logistics & Freight (logistics_freight) | P7-CLOSE-2142 | [stevenmcsorley/Private-Legal-DMS](https://github.com/stevenmcsorley/Private-Legal-DMS) | 8/10 | demand_atom_fit, workflow_behavior | 10 ledger + 10 receipts |
| 109 | Logistics & Freight (logistics_freight) | P7-CLOSE-1980 | [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) | 7/10 | agent_authority, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 110 | Logistics & Freight (logistics_freight) | P7-CLOSE-1981 | [ColorlibHQ/gentelella](https://github.com/ColorlibHQ/gentelella) | 7/10 | agent_authority, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 111 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2247 | [containerd/containerd](https://github.com/containerd/containerd) | 8/10 | agent_authority, integration_surface | 10 ledger + 10 receipts |
| 112 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2274 | [gamlin-ccdocs/php-vicidial-education-enrollment](https://github.com/gamlin-ccdocs/php-vicidial-education-enrollment) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 113 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2291 | [manjurulhoque/doccure](https://github.com/manjurulhoque/doccure) | 8/10 | data_model, ui_assembly | 10 ledger + 10 receipts |
| 114 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2296 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 8/10 | provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 115 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2331 | [samarailly51-pixel/claimpilot-harness](https://github.com/samarailly51-pixel/claimpilot-harness) | 8/10 | integration_surface, provenance_rights | 10 ledger + 10 receipts |
| 116 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2343 | [thoughtbot/administrate](https://github.com/thoughtbot/administrate) | 8/10 | economics_maintenance, runtime_deployment | 10 ledger + 10 receipts |
| 117 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2167 | [AnilBotta/realtorspal-ai](https://github.com/AnilBotta/realtorspal-ai) | 7/10 | agent_authority, provenance_rights, runtime_deployment | 10 ledger + 10 receipts |
| 118 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2171 | [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) | 7/10 | agent_authority, provenance_rights, runtime_deployment | 10 ledger + 10 receipts |
| 119 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2173 | [CursorTouch/Windows-MCP](https://github.com/CursorTouch/Windows-MCP) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 120 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2188 | [KolbySisk/next-supabase-stripe-starter](https://github.com/KolbySisk/next-supabase-stripe-starter) | 7/10 | provenance_rights, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 121 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2408 | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 8/10 | demand_atom_fit, workflow_behavior | 10 ledger + 10 receipts |
| 122 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2411 | [ahmedsaadawi13/splash-estate-crm](https://github.com/ahmedsaadawi13/splash-estate-crm) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 123 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2430 | [ashev87/propstack-mcp](https://github.com/ashev87/propstack-mcp) | 8/10 | runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 124 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2434 | [boxyhq/saas-starter-kit](https://github.com/boxyhq/saas-starter-kit) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 125 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2438 | [chamilo/chamilo-lms](https://github.com/chamilo/chamilo-lms) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 126 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2449 | [darcys22/godbledger](https://github.com/darcys22/godbledger) | 8/10 | agent_authority, integration_surface | 10 ledger + 10 receipts |
| 127 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2451 | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 8/10 | data_model, provenance_rights | 10 ledger + 10 receipts |
| 128 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2463 | [ericporres/family-assistant-skill](https://github.com/ericporres/family-assistant-skill) | 8/10 | runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 129 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2473 | [frappe/lms](https://github.com/frappe/lms) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 130 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2479 | [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 131 | Property Management (property_management) | P7-CLOSE-2633 | [boxyhq/saas-starter-kit](https://github.com/boxyhq/saas-starter-kit) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 132 | Property Management (property_management) | P7-CLOSE-2637 | [chamilo/chamilo-lms](https://github.com/chamilo/chamilo-lms) | 8/10 | agent_authority, verification_eval | 10 ledger + 10 receipts |
| 133 | Property Management (property_management) | P7-CLOSE-2650 | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 8/10 | provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 134 | Property Management (property_management) | P7-CLOSE-2661 | [ericporres/family-assistant-skill](https://github.com/ericporres/family-assistant-skill) | 8/10 | runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 135 | Property Management (property_management) | P7-CLOSE-2670 | [frappe/lms](https://github.com/frappe/lms) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 136 | Property Management (property_management) | P7-CLOSE-2676 | [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8/10 | data_model, provenance_rights | 10 ledger + 10 receipts |
| 137 | Property Management (property_management) | P7-CLOSE-2720 | [rahat2020/Medicare](https://github.com/rahat2020/Medicare) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 138 | Property Management (property_management) | P7-CLOSE-2728 | [rh-aiservices-bu/insurance-claim-processing](https://github.com/rh-aiservices-bu/insurance-claim-processing) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 139 | Property Management (property_management) | P7-CLOSE-2737 | [stevenmcsorley/Private-Legal-DMS](https://github.com/stevenmcsorley/Private-Legal-DMS) | 8/10 | demand_atom_fit, workflow_behavior | 10 ledger + 10 receipts |
| 140 | Property Management (property_management) | P7-CLOSE-2568 | [CursorTouch/Windows-MCP](https://github.com/CursorTouch/Windows-MCP) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 141 | Real Estate (real_estate) | P7-CLOSE-2804 | [SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium) | 8/10 | data_model, provenance_rights | 10 ledger + 10 receipts |
| 142 | Real Estate (real_estate) | P7-CLOSE-2807 | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 8/10 | demand_atom_fit, workflow_behavior | 10 ledger + 10 receipts |
| 143 | Real Estate (real_estate) | P7-CLOSE-2820 | [amirgoli1383saransari/hirehub](https://github.com/amirgoli1383saransari/hirehub) | 8/10 | ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 144 | Real Estate (real_estate) | P7-CLOSE-2826 | [api-evangelist/tock-reservations](https://github.com/api-evangelist/tock-reservations) | 8/10 | runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 145 | Real Estate (real_estate) | P7-CLOSE-2835 | [boxyhq/saas-starter-kit](https://github.com/boxyhq/saas-starter-kit) | 8/10 | agent_authority, provenance_rights | 10 ledger + 10 receipts |
| 146 | Real Estate (real_estate) | P7-CLOSE-2844 | [conductor-oss/conductor](https://github.com/conductor-oss/conductor) | 8/10 | provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 147 | Real Estate (real_estate) | P7-CLOSE-2852 | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 8/10 | provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 148 | Real Estate (real_estate) | P7-CLOSE-2877 | [gschoelderle/gender-gap-in-stem-education](https://github.com/gschoelderle/gender-gap-in-stem-education) | 8/10 | data_model, integration_surface | 10 ledger + 10 receipts |
| 149 | Real Estate (real_estate) | P7-CLOSE-2929 | [rh-aiservices-bu/insurance-claim-processing](https://github.com/rh-aiservices-bu/insurance-claim-processing) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 150 | Real Estate (real_estate) | P7-CLOSE-2941 | [the-open-agent/openagent](https://github.com/the-open-agent/openagent) | 8/10 | data_model, provenance_rights | 10 ledger + 10 receipts |
| 151 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3084 | [manjurulhoque/doccure](https://github.com/manjurulhoque/doccure) | 8/10 | ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 152 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3102 | [onejune2018/Awesome-LLM-Eval](https://github.com/onejune2018/Awesome-LLM-Eval) | 8/10 | data_model, runtime_deployment | 10 ledger + 10 receipts |
| 153 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3113 | [pupilfirst/pupilfirst](https://github.com/pupilfirst/pupilfirst) | 8/10 | data_model, demand_atom_fit | 10 ledger + 10 receipts |
| 154 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3123 | [rh-aiservices-bu/insurance-claim-processing](https://github.com/rh-aiservices-bu/insurance-claim-processing) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 155 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-2969 | [ColorlibHQ/gentelella](https://github.com/ColorlibHQ/gentelella) | 7/10 | agent_authority, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 156 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-2973 | [DouyinFE/semi-design](https://github.com/DouyinFE/semi-design) | 7/10 | agent_authority, economics_maintenance, runtime_deployment | 10 ledger + 10 receipts |
| 157 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-2974 | [ELIOTT-BONTE/Legal_doc_processing_pipeline](https://github.com/ELIOTT-BONTE/Legal_doc_processing_pipeline) | 7/10 | agent_authority, integration_surface, ui_assembly | 10 ledger + 10 receipts |
| 158 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-2978 | [HummerRisk/HummerRisk](https://github.com/HummerRisk/HummerRisk) | 7/10 | demand_atom_fit, integration_surface, ui_assembly | 10 ledger + 10 receipts |
| 159 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-2986 | [LordQueso/MCP-construction](https://github.com/LordQueso/MCP-construction) | 7/10 | economics_maintenance, integration_surface, provenance_rights | 10 ledger + 10 receipts |
| 160 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3000 | [PySpur-Dev/pyspur](https://github.com/PySpur-Dev/pyspur) | 7/10 | provenance_rights, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 161 | SaaS (saas) | P7-CLOSE-3233 | [conductor-oss/conductor](https://github.com/conductor-oss/conductor) | 8/10 | provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 162 | SaaS (saas) | P7-CLOSE-3235 | [coreui/coreui-free-bootstrap-admin-template](https://github.com/coreui/coreui-free-bootstrap-admin-template) | 8/10 | agent_authority, runtime_deployment | 10 ledger + 10 receipts |
| 163 | SaaS (saas) | P7-CLOSE-3264 | [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | 8/10 | economics_maintenance, workflow_behavior | 10 ledger + 10 receipts |
| 164 | SaaS (saas) | P7-CLOSE-3273 | [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | 8/10 | agent_authority, data_model | 10 ledger + 10 receipts |
| 165 | SaaS (saas) | P7-CLOSE-3279 | [manjurulhoque/doccure](https://github.com/manjurulhoque/doccure) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 166 | SaaS (saas) | P7-CLOSE-3285 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 8/10 | runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 167 | SaaS (saas) | P7-CLOSE-3292 | [nikichakraborty2005/Ecommerce-Inventory-Demand-Forecasting](https://github.com/nikichakraborty2005/Ecommerce-Inventory-Demand-Forecasting) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 168 | SaaS (saas) | P7-CLOSE-3320 | [samarailly51-pixel/claimpilot-harness](https://github.com/samarailly51-pixel/claimpilot-harness) | 8/10 | integration_surface, provenance_rights | 10 ledger + 10 receipts |
| 169 | SaaS (saas) | P7-CLOSE-3322 | [satnaing/shadcn-admin](https://github.com/satnaing/shadcn-admin) | 8/10 | runtime_deployment, workflow_behavior | 10 ledger + 10 receipts |
| 170 | SaaS (saas) | P7-CLOSE-3155 | [AishwaryaSingh123/Court_and_Legal_Management_Systerm](https://github.com/AishwaryaSingh123/Court_and_Legal_Management_Systerm) | 7/10 | agent_authority, provenance_rights, ui_assembly | 10 ledger + 10 receipts |

Every pair has the fixed ten dimensions: `demand_atom_fit`, `workflow_behavior`, `data_model`, `integration_surface`, `ui_assembly`, `agent_authority`, `verification_eval`, `provenance_rights`, `runtime_deployment`, and `economics_maintenance`.

## Rights, unknowns, falsifiers, and next gates

Every row carries dimension-specific unknown Block Contract fields, rights state `U`, SBOM/dependency/notice/attribution/lineage unknowns, preserved queue rights signals, a falsifier, and a smallest next read-only gate. Declared permissive signals remain unverified and are not legal clearance; no declared license remains unknown. No source was copied or scanned.

## Preservation and hashes

- Closure queue SHA-256: `99ead4a8f8de29228a73fe3fe3bd131ee952a5950b50c3bc126c1423add84c32`
- Coverage-gap audit SHA-256: `9d1a6e9177bae58cb15f0532ce7a1dbb5765fc3d231c1396a7db0db0d684e948`
- Shared Phase-7 state SHA-256 (read-only preservation anchor): `a542dfe1f8f38482524f869edf43e68171ec9a49e4ae8aadd28a1a0acf71dbb9`
- Wave 1 ledger SHA-256: `35e6d9956d5689f2afc2758dad000ed6683844133023309babe41b12549861f8`
- Wave 2 ledger SHA-256: `c49de3b0d7b696df539983562f70a2b83b5c2cf778e37124b1c84b9cc971e676`
- Wave 3 ledger SHA-256: `d8a988a944693260d58ff395e481d9bda98165b272565a5e7cd062b044aaf288`
- Wave 4 ledger SHA-256: `94ecd0db408e8c356f89b8ff942839d834a39bcddf90af9d8bf018e5b1dbd38e`
- Wave 4 source-receipts SHA-256: `d306980f104678319221efeddb859b929a60c98b1fe1350de4481deeee1ee142`
- Wave 1, Wave 2, Wave 3, phases 2–6, master matrix, closure queue, and coordinator files were not written by this lane.

## Verification and boundary

- Post-write command: `node smoke-dimension-evidence-wave-4.mjs`.
- Required checks: output boundary, JSONL parse, deterministic next-tranche selection, exact 170-pair/1,700-row counters, 10 dimensions per pair, 170 rows per dimension, prior Wave 1/2/3 exclusion, identity/source/date/evidence parity, inherited/fresh labeling, source-link boundary, rights/SBOM unknowns, report markers, preserved hashes, and research-only boundaries.
- Boundary: `research_only=true`; `UNEXECUTED`; `NOT_ADMITTED`; `implementation_authorized=false`; authenticated behavior `U`; `parent_goal_status=active`; master counters unchanged; no overall completion claim.
- Callback is recorded in lane state after fresh CENA pane resolution and readback.

## Output files

- `dimension-evidence-ledger.jsonl` — 1,700 normalized pair×dimension records.
- `source-receipts.jsonl` — 1,700 matching source receipts.
- `dimension-depth-report.md` — method, exact selected pair inventory, counts, preservation, and boundary report.
- `lane-state.json` — Wave 4 lane-only state; shared Phase-7 state is not promoted.
- `smoke-dimension-evidence-wave-4.mjs` — post-write structural/source/freshness/boundary smoke.

Callback: fresh CENA pane resolved, six-line receipt delivered with `pane run`, read back after 2 seconds, and verified; no overall completion claim.
