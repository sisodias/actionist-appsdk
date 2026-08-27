# Phase-7 Wave 5 — Dimension Evidence Ledger

Lane: `P7-DIMENSION-EVIDENCE`
Wave: `P7-DIMENSION-EVIDENCE-W5`
Observation date: `2026-08-27`
Status: lane artifact complete; this is not an overall closure claim.

## Scope and deterministic selection

Wave 5 selects the next 10 remaining `partial` closure-queue pairs per each of 17 industries. The deterministic order is `dimension_count` descending, then `queue_id` ascending, after excluding all 10 Wave 1 T1 queue IDs, all 170 Wave 2 queue IDs, all 170 Wave 3 queue IDs, and all 170 Wave 4 queue IDs. The result is 170 distinct industry×repository pairs: 10 per industry.

Each pair receives exactly one record for each of the ten dimensions, for 1,700 ledger rows and 1,700 matching source receipts. Missing dimensions remain explicit `U` / `unknown_blocked`; no pair is promoted and master counters are unchanged.

Cross-lane corpus selection parity is `PASS`: the corpus-integrity W5 selection ledger contains 170 rows, all 170 queue IDs overlap, and all 170 canonical industry×repository identities match after normalizing `industry.id` plus lowercase `repository.canonical_url`. Its SHA-256 is `a6063c688693d1c5b071e0422751c24de98c4d81957ae509a1e89cdc8247f138`.

## Evidence method and freshness boundary

First-party public URLs from the closure queue are retained as preferred source references. This Wave 5 lane performed no fresh public fetch: inherited queue context is labeled `inherited_queue_context=true`, `source_access_fresh_public_evidence=false`, and `inherited_repository_specific_not_fresh`. Inherited observations are not treated as fresh proof, capability proof, or admission. No generic cell evidence was copied and no new capability claim was fabricated.

For dimensions present in a selected queue row, the ledger preserves the repository-specific observation, exact source URLs, evidence class, limitation, falsifier/next gate, observation index, slot ID, and rights boundary as inherited context. For every queue-declared missing dimension, direct and inferred claims are empty and the row records the limitation, falsifier, smallest read-only gate, and unknown Block Contract fields.

## Exact counts

- Selected pairs: **170** distinct pairs, 10 per each of 17 industries.
- Dimension evidence rows: **1,700** (170 pairs × 10 dimensions).
- Source receipts: **1,700**, one for every ledger row with matching pair×dimension key and source URL list.
- Per-dimension rows: demand_atom_fit=170, workflow_behavior=170, data_model=170, integration_surface=170, ui_assembly=170, agent_authority=170, verification_eval=170, provenance_rights=170, runtime_deployment=170, economics_maintenance=170.
- Explicit missing/unknown rows: **481**; all are U / unknown_blocked and remain non-promoting.
- Baseline master counters remain unchanged: 270 complete pairs / 1,700 target pairs; 3,076 partial pairs / 3,346 closure-queue rows. Wave 5 records evidence only.
- No overall completion claim is made.

## Industry inventory

| Industry | Pairs | Dimension rows | Receipts | Prior dimension counts | Selected queue IDs |
|---|---:|---:|---:|---|---|
| Accounting Firms (accounting_firms) | 10 | 100 | 100 | 7:10 | P7-CLOSE-0015, P7-CLOSE-0019, P7-CLOSE-0034, P7-CLOSE-0050, P7-CLOSE-0063, P7-CLOSE-0073, P7-CLOSE-0107, P7-CLOSE-0120, P7-CLOSE-0129, P7-CLOSE-0132 |
| Construction (construction) | 10 | 100 | 100 | 7:10 | P7-CLOSE-0213, P7-CLOSE-0216, P7-CLOSE-0220, P7-CLOSE-0226, P7-CLOSE-0227, P7-CLOSE-0239, P7-CLOSE-0243, P7-CLOSE-0248, P7-CLOSE-0251, P7-CLOSE-0266 |
| Course Creators (course_creators) | 10 | 100 | 100 | 7:10 | P7-CLOSE-0411, P7-CLOSE-0412, P7-CLOSE-0422, P7-CLOSE-0441, P7-CLOSE-0459, P7-CLOSE-0469, P7-CLOSE-0479, P7-CLOSE-0481, P7-CLOSE-0501, P7-CLOSE-0503 |
| Ecommerce (ecommerce) | 10 | 100 | 100 | 7:9, 8:1 | P7-CLOSE-0775, P7-CLOSE-0606, P7-CLOSE-0610, P7-CLOSE-0611, P7-CLOSE-0617, P7-CLOSE-0623, P7-CLOSE-0628, P7-CLOSE-0636, P7-CLOSE-0639, P7-CLOSE-0644 |
| Education & Training (education_training) | 10 | 100 | 100 | 7:7, 8:3 | P7-CLOSE-0952, P7-CLOSE-0961, P7-CLOSE-0964, P7-CLOSE-0801, P7-CLOSE-0803, P7-CLOSE-0816, P7-CLOSE-0844, P7-CLOSE-0869, P7-CLOSE-0874, P7-CLOSE-0876 |
| Healthcare & Medical Practices (healthcare_medical_practices) | 10 | 100 | 100 | 7:1, 8:9 | P7-CLOSE-1104, P7-CLOSE-1105, P7-CLOSE-1108, P7-CLOSE-1118, P7-CLOSE-1123, P7-CLOSE-1129, P7-CLOSE-1145, P7-CLOSE-1155, P7-CLOSE-1162, P7-CLOSE-0991 |
| Hospitality (hospitality) | 10 | 100 | 100 | 7:5, 8:5 | P7-CLOSE-1323, P7-CLOSE-1339, P7-CLOSE-1349, P7-CLOSE-1358, P7-CLOSE-1361, P7-CLOSE-1195, P7-CLOSE-1198, P7-CLOSE-1199, P7-CLOSE-1202, P7-CLOSE-1214 |
| Insurance Agencies (insurance_agencies) | 10 | 100 | 100 | 7:10 | P7-CLOSE-1391, P7-CLOSE-1394, P7-CLOSE-1398, P7-CLOSE-1412, P7-CLOSE-1423, P7-CLOSE-1428, P7-CLOSE-1461, P7-CLOSE-1496, P7-CLOSE-1507, P7-CLOSE-1514 |
| IT Services & MSPs (it_services_msps) | 10 | 100 | 100 | 7:4, 8:6 | P7-CLOSE-1692, P7-CLOSE-1711, P7-CLOSE-1718, P7-CLOSE-1751, P7-CLOSE-1754, P7-CLOSE-1769, P7-CLOSE-1580, P7-CLOSE-1586, P7-CLOSE-1588, P7-CLOSE-1589 |
| Law Firms (law_firms) | 10 | 100 | 100 | 7:10 | P7-CLOSE-1815, P7-CLOSE-1841, P7-CLOSE-1853, P7-CLOSE-1883, P7-CLOSE-1900, P7-CLOSE-1907, P7-CLOSE-1916, P7-CLOSE-1930, P7-CLOSE-1939, P7-CLOSE-1951 |
| Logistics & Freight (logistics_freight) | 10 | 100 | 100 | 7:10 | P7-CLOSE-1989, P7-CLOSE-1995, P7-CLOSE-2000, P7-CLOSE-2006, P7-CLOSE-2007, P7-CLOSE-2008, P7-CLOSE-2013, P7-CLOSE-2029, P7-CLOSE-2036, P7-CLOSE-2051 |
| Marketing & Social Media Agencies (marketing_social_media_agencies) | 10 | 100 | 100 | 7:10 | P7-CLOSE-2192, P7-CLOSE-2194, P7-CLOSE-2198, P7-CLOSE-2201, P7-CLOSE-2204, P7-CLOSE-2210, P7-CLOSE-2214, P7-CLOSE-2218, P7-CLOSE-2222, P7-CLOSE-2265 |
| Mortgage Brokers (mortgage_brokers) | 10 | 100 | 100 | 7:5, 8:5 | P7-CLOSE-2485, P7-CLOSE-2491, P7-CLOSE-2496, P7-CLOSE-2508, P7-CLOSE-2528, P7-CLOSE-2374, P7-CLOSE-2384, P7-CLOSE-2386, P7-CLOSE-2388, P7-CLOSE-2389 |
| Property Management (property_management) | 10 | 100 | 100 | 7:10 | P7-CLOSE-2571, P7-CLOSE-2572, P7-CLOSE-2575, P7-CLOSE-2582, P7-CLOSE-2587, P7-CLOSE-2595, P7-CLOSE-2596, P7-CLOSE-2618, P7-CLOSE-2624, P7-CLOSE-2648 |
| Real Estate (real_estate) | 10 | 100 | 100 | 7:10 | P7-CLOSE-2760, P7-CLOSE-2769, P7-CLOSE-2773, P7-CLOSE-2782, P7-CLOSE-2786, P7-CLOSE-2790, P7-CLOSE-2825, P7-CLOSE-2827, P7-CLOSE-2841, P7-CLOSE-2842 |
| Recruiting & Staffing (recruiting_staffing) | 10 | 100 | 100 | 7:10 | P7-CLOSE-3023, P7-CLOSE-3035, P7-CLOSE-3036, P7-CLOSE-3037, P7-CLOSE-3039, P7-CLOSE-3055, P7-CLOSE-3058, P7-CLOSE-3072, P7-CLOSE-3075, P7-CLOSE-3082 |
| SaaS (saas) | 10 | 100 | 100 | 7:10 | P7-CLOSE-3163, P7-CLOSE-3170, P7-CLOSE-3188, P7-CLOSE-3189, P7-CLOSE-3195, P7-CLOSE-3198, P7-CLOSE-3213, P7-CLOSE-3214, P7-CLOSE-3221, P7-CLOSE-3228 |

## Per-pair inventory

| Selection | Industry | Queue ID | Canonical repository | Before | Missing dimensions | Rows |
|---:|---|---|---|---:|---|---:|
| 1 | Accounting Firms (accounting_firms) | P7-CLOSE-0015 | [DouyinFE/semi-design](https://github.com/DouyinFE/semi-design) | 7/10 | agent_authority, economics_maintenance, runtime_deployment | 10 ledger + 10 receipts |
| 2 | Accounting Firms (accounting_firms) | P7-CLOSE-0019 | [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 3 | Accounting Firms (accounting_firms) | P7-CLOSE-0034 | [MiladJoodi/Civora-Dashboard](https://github.com/MiladJoodi/Civora-Dashboard) | 7/10 | economics_maintenance, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 4 | Accounting Firms (accounting_firms) | P7-CLOSE-0050 | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 7/10 | demand_atom_fit, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 5 | Accounting Firms (accounting_firms) | P7-CLOSE-0063 | [amirgoli1383saransari/hirehub](https://github.com/amirgoli1383saransari/hirehub) | 7/10 | agent_authority, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 6 | Accounting Firms (accounting_firms) | P7-CLOSE-0073 | [ashev87/propstack-mcp](https://github.com/ashev87/propstack-mcp) | 7/10 | integration_surface, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 7 | Accounting Firms (accounting_firms) | P7-CLOSE-0107 | [ericporres/family-assistant-skill](https://github.com/ericporres/family-assistant-skill) | 7/10 | agent_authority, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 8 | Accounting Firms (accounting_firms) | P7-CLOSE-0120 | [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | 7/10 | economics_maintenance, runtime_deployment, workflow_behavior | 10 ledger + 10 receipts |
| 9 | Accounting Firms (accounting_firms) | P7-CLOSE-0129 | [kartikbansalx/LegalVault-Legal-Document-Management-System](https://github.com/kartikbansalx/LegalVault-Legal-Document-Management-System) | 7/10 | agent_authority, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 10 | Accounting Firms (accounting_firms) | P7-CLOSE-0132 | [langgenius/dify](https://github.com/langgenius/dify) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 11 | Construction (construction) | P7-CLOSE-0213 | [CursorTouch/Windows-MCP](https://github.com/CursorTouch/Windows-MCP) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 12 | Construction (construction) | P7-CLOSE-0216 | [DouyinFE/semi-design](https://github.com/DouyinFE/semi-design) | 7/10 | agent_authority, economics_maintenance, runtime_deployment | 10 ledger + 10 receipts |
| 13 | Construction (construction) | P7-CLOSE-0220 | [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 14 | Construction (construction) | P7-CLOSE-0226 | [Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 15 | Construction (construction) | P7-CLOSE-0227 | [KolbySisk/next-supabase-stripe-starter](https://github.com/KolbySisk/next-supabase-stripe-starter) | 7/10 | agent_authority, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 16 | Construction (construction) | P7-CLOSE-0239 | [Natnael243/eastAfrica_Admin](https://github.com/Natnael243/eastAfrica_Admin) | 7/10 | ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 17 | Construction (construction) | P7-CLOSE-0243 | [PySpur-Dev/pyspur](https://github.com/PySpur-Dev/pyspur) | 7/10 | provenance_rights, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 18 | Construction (construction) | P7-CLOSE-0248 | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 7/10 | demand_atom_fit, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 19 | Construction (construction) | P7-CLOSE-0251 | [ahmedsaadawi13/splash-estate-crm](https://github.com/ahmedsaadawi13/splash-estate-crm) | 7/10 | agent_authority, provenance_rights, runtime_deployment | 10 ledger + 10 receipts |
| 20 | Construction (construction) | P7-CLOSE-0266 | [api-evangelist/tock-reservations](https://github.com/api-evangelist/tock-reservations) | 7/10 | economics_maintenance, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 21 | Course Creators (course_creators) | P7-CLOSE-0411 | [DouyinFE/semi-design](https://github.com/DouyinFE/semi-design) | 7/10 | agent_authority, economics_maintenance, runtime_deployment | 10 ledger + 10 receipts |
| 22 | Course Creators (course_creators) | P7-CLOSE-0412 | [ELIOTT-BONTE/Legal_doc_processing_pipeline](https://github.com/ELIOTT-BONTE/Legal_doc_processing_pipeline) | 7/10 | agent_authority, integration_surface, ui_assembly | 10 ledger + 10 receipts |
| 23 | Course Creators (course_creators) | P7-CLOSE-0422 | [Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 24 | Course Creators (course_creators) | P7-CLOSE-0441 | [PySpur-Dev/pyspur](https://github.com/PySpur-Dev/pyspur) | 7/10 | provenance_rights, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 25 | Course Creators (course_creators) | P7-CLOSE-0459 | [amirgoli1383saransari/hirehub](https://github.com/amirgoli1383saransari/hirehub) | 7/10 | agent_authority, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 26 | Course Creators (course_creators) | P7-CLOSE-0469 | [ashev87/propstack-mcp](https://github.com/ashev87/propstack-mcp) | 7/10 | economics_maintenance, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 27 | Course Creators (course_creators) | P7-CLOSE-0479 | [closebotai/cobras-real-estate-crm](https://github.com/closebotai/cobras-real-estate-crm) | 7/10 | data_model, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 28 | Course Creators (course_creators) | P7-CLOSE-0481 | [coaidev/coai](https://github.com/coaidev/coai) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 29 | Course Creators (course_creators) | P7-CLOSE-0501 | [eparrish64/Illinois_College_Enrollment](https://github.com/eparrish64/Illinois_College_Enrollment) | 7/10 | integration_surface, provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 30 | Course Creators (course_creators) | P7-CLOSE-0503 | [ericporres/family-assistant-skill](https://github.com/ericporres/family-assistant-skill) | 7/10 | agent_authority, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 31 | Ecommerce (ecommerce) | P7-CLOSE-0775 | [the-open-agent/openagent](https://github.com/the-open-agent/openagent) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 32 | Ecommerce (ecommerce) | P7-CLOSE-0606 | [Blazity/next-saas-starter](https://github.com/Blazity/next-saas-starter) | 7/10 | agent_authority, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 33 | Ecommerce (ecommerce) | P7-CLOSE-0610 | [CursorTouch/Windows-MCP](https://github.com/CursorTouch/Windows-MCP) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 34 | Ecommerce (ecommerce) | P7-CLOSE-0611 | [Daymychen/art-design-pro](https://github.com/Daymychen/art-design-pro) | 7/10 | agent_authority, integration_surface, provenance_rights | 10 ledger + 10 receipts |
| 35 | Ecommerce (ecommerce) | P7-CLOSE-0617 | [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 36 | Ecommerce (ecommerce) | P7-CLOSE-0623 | [Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 37 | Ecommerce (ecommerce) | P7-CLOSE-0628 | [MLGroupJLU/LLM-eval-survey](https://github.com/MLGroupJLU/LLM-eval-survey) | 7/10 | economics_maintenance, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 38 | Ecommerce (ecommerce) | P7-CLOSE-0636 | [OpenOLAT/OpenOLAT](https://github.com/OpenOLAT/OpenOLAT) | 7/10 | agent_authority, economics_maintenance, provenance_rights | 10 ledger + 10 receipts |
| 39 | Ecommerce (ecommerce) | P7-CLOSE-0639 | [PySpur-Dev/pyspur](https://github.com/PySpur-Dev/pyspur) | 7/10 | provenance_rights, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 40 | Ecommerce (ecommerce) | P7-CLOSE-0644 | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 7/10 | demand_atom_fit, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 41 | Education & Training (education_training) | P7-CLOSE-0952 | [pupilfirst/pupilfirst](https://github.com/pupilfirst/pupilfirst) | 8/10 | data_model, demand_atom_fit | 10 ledger + 10 receipts |
| 42 | Education & Training (education_training) | P7-CLOSE-0961 | [rh-aiservices-bu/insurance-claim-processing](https://github.com/rh-aiservices-bu/insurance-claim-processing) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 43 | Education & Training (education_training) | P7-CLOSE-0964 | [samarailly51-pixel/claimpilot-harness](https://github.com/samarailly51-pixel/claimpilot-harness) | 8/10 | data_model, integration_surface | 10 ledger + 10 receipts |
| 44 | Education & Training (education_training) | P7-CLOSE-0801 | [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) | 7/10 | agent_authority, provenance_rights, runtime_deployment | 10 ledger + 10 receipts |
| 45 | Education & Training (education_training) | P7-CLOSE-0803 | [CursorTouch/Windows-MCP](https://github.com/CursorTouch/Windows-MCP) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 46 | Education & Training (education_training) | P7-CLOSE-0816 | [Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 47 | Education & Training (education_training) | P7-CLOSE-0844 | [adilmohak/django-lms](https://github.com/adilmohak/django-lms) | 7/10 | integration_surface, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 48 | Education & Training (education_training) | P7-CLOSE-0869 | [boxyhq/saas-starter-kit](https://github.com/boxyhq/saas-starter-kit) | 7/10 | agent_authority, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 49 | Education & Training (education_training) | P7-CLOSE-0874 | [closebotai/cobras-real-estate-crm](https://github.com/closebotai/cobras-real-estate-crm) | 7/10 | data_model, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 50 | Education & Training (education_training) | P7-CLOSE-0876 | [coaidev/coai](https://github.com/coaidev/coai) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 51 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1104 | [gschoelderle/gender-gap-in-stem-education](https://github.com/gschoelderle/gender-gap-in-stem-education) | 8/10 | data_model, integration_surface | 10 ledger + 10 receipts |
| 52 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1105 | [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 53 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1108 | [ixartz/Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate) | 8/10 | data_model, verification_eval | 10 ledger + 10 receipts |
| 54 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1118 | [martaldsantos/agentic-ai-hack](https://github.com/martaldsantos/agentic-ai-hack) | 8/10 | ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 55 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1123 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 8/10 | provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 56 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1129 | [nextjs/saas-starter](https://github.com/nextjs/saas-starter) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 57 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1145 | [prolinkinfo/RealEstateCRM](https://github.com/prolinkinfo/RealEstateCRM) | 8/10 | ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 58 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1155 | [rh-aiservices-bu/insurance-claim-processing](https://github.com/rh-aiservices-bu/insurance-claim-processing) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 59 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1162 | [stevenmcsorley/Private-Legal-DMS](https://github.com/stevenmcsorley/Private-Legal-DMS) | 8/10 | verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 60 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-0991 | [AishwaryaSingh123/Court_and_Legal_Management_Systerm](https://github.com/AishwaryaSingh123/Court_and_Legal_Management_Systerm) | 7/10 | agent_authority, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 61 | Hospitality (hospitality) | P7-CLOSE-1323 | [nextjs/saas-starter](https://github.com/nextjs/saas-starter) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 62 | Hospitality (hospitality) | P7-CLOSE-1339 | [prolinkinfo/RealEstateCRM](https://github.com/prolinkinfo/RealEstateCRM) | 8/10 | ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 63 | Hospitality (hospitality) | P7-CLOSE-1349 | [rh-aiservices-bu/insurance-claim-processing](https://github.com/rh-aiservices-bu/insurance-claim-processing) | 8/10 | agent_authority, ui_assembly | 10 ledger + 10 receipts |
| 64 | Hospitality (hospitality) | P7-CLOSE-1358 | [stevenmcsorley/Private-Legal-DMS](https://github.com/stevenmcsorley/Private-Legal-DMS) | 8/10 | demand_atom_fit, workflow_behavior | 10 ledger + 10 receipts |
| 65 | Hospitality (hospitality) | P7-CLOSE-1361 | [the-open-agent/openagent](https://github.com/the-open-agent/openagent) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 66 | Hospitality (hospitality) | P7-CLOSE-1195 | [CursorTouch/Windows-MCP](https://github.com/CursorTouch/Windows-MCP) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 67 | Hospitality (hospitality) | P7-CLOSE-1198 | [DouyinFE/semi-design](https://github.com/DouyinFE/semi-design) | 7/10 | agent_authority, economics_maintenance, runtime_deployment | 10 ledger + 10 receipts |
| 68 | Hospitality (hospitality) | P7-CLOSE-1199 | [ELIOTT-BONTE/Legal_doc_processing_pipeline](https://github.com/ELIOTT-BONTE/Legal_doc_processing_pipeline) | 7/10 | agent_authority, integration_surface, ui_assembly | 10 ledger + 10 receipts |
| 69 | Hospitality (hospitality) | P7-CLOSE-1202 | [HuIsJason/real-estate-crm](https://github.com/HuIsJason/real-estate-crm) | 7/10 | runtime_deployment, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 70 | Hospitality (hospitality) | P7-CLOSE-1214 | [MiladJoodi/Civora-Dashboard](https://github.com/MiladJoodi/Civora-Dashboard) | 7/10 | agent_authority, economics_maintenance, runtime_deployment | 10 ledger + 10 receipts |
| 71 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1391 | [CursorTouch/Windows-MCP](https://github.com/CursorTouch/Windows-MCP) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 72 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1394 | [DouyinFE/semi-design](https://github.com/DouyinFE/semi-design) | 7/10 | agent_authority, economics_maintenance, runtime_deployment | 10 ledger + 10 receipts |
| 73 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1398 | [HuIsJason/real-estate-crm](https://github.com/HuIsJason/real-estate-crm) | 7/10 | runtime_deployment, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 74 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1412 | [MiladJoodi/Civora-Dashboard](https://github.com/MiladJoodi/Civora-Dashboard) | 7/10 | agent_authority, economics_maintenance, runtime_deployment | 10 ledger + 10 receipts |
| 75 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1423 | [PySpur-Dev/pyspur](https://github.com/PySpur-Dev/pyspur) | 7/10 | provenance_rights, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 76 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1428 | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 7/10 | demand_atom_fit, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 77 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1461 | [coaidev/coai](https://github.com/coaidev/coai) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 78 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1496 | [gschoelderle/gender-gap-in-stem-education](https://github.com/gschoelderle/gender-gap-in-stem-education) | 7/10 | agent_authority, data_model, integration_surface | 10 ledger + 10 receipts |
| 79 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1507 | [langgenius/dify](https://github.com/langgenius/dify) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 80 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1514 | [microsoft/Webwright](https://github.com/microsoft/Webwright) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 81 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1692 | [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 82 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1711 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 8/10 | provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 83 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1718 | [nikichakraborty2005/Ecommerce-Inventory-Demand-Forecasting](https://github.com/nikichakraborty2005/Ecommerce-Inventory-Demand-Forecasting) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 84 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1751 | [stevenmcsorley/Private-Legal-DMS](https://github.com/stevenmcsorley/Private-Legal-DMS) | 8/10 | demand_atom_fit, workflow_behavior | 10 ledger + 10 receipts |
| 85 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1754 | [the-open-agent/openagent](https://github.com/the-open-agent/openagent) | 8/10 | provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 86 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1769 | [yzhao062/pyod](https://github.com/yzhao062/pyod) | 8/10 | data_model, demand_atom_fit | 10 ledger + 10 receipts |
| 87 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1580 | [AishwaryaSingh123/Court_and_Legal_Management_Systerm](https://github.com/AishwaryaSingh123/Court_and_Legal_Management_Systerm) | 7/10 | agent_authority, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 88 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1586 | [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) | 7/10 | agent_authority, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 89 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1588 | [CursorTouch/Windows-MCP](https://github.com/CursorTouch/Windows-MCP) | 7/10 | data_model, demand_atom_fit, verification_eval | 10 ledger + 10 receipts |
| 90 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1589 | [Daymychen/art-design-pro](https://github.com/Daymychen/art-design-pro) | 7/10 | agent_authority, economics_maintenance, provenance_rights | 10 ledger + 10 receipts |
| 91 | Law Firms (law_firms) | P7-CLOSE-1815 | [PySpur-Dev/pyspur](https://github.com/PySpur-Dev/pyspur) | 7/10 | provenance_rights, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 92 | Law Firms (law_firms) | P7-CLOSE-1841 | [ashev87/propstack-mcp](https://github.com/ashev87/propstack-mcp) | 7/10 | economics_maintenance, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 93 | Law Firms (law_firms) | P7-CLOSE-1853 | [coaidev/coai](https://github.com/coaidev/coai) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 94 | Law Firms (law_firms) | P7-CLOSE-1883 | [frappe/books](https://github.com/frappe/books) | 7/10 | agent_authority, demand_atom_fit, workflow_behavior | 10 ledger + 10 receipts |
| 95 | Law Firms (law_firms) | P7-CLOSE-1900 | [langgenius/dify](https://github.com/langgenius/dify) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 96 | Law Firms (law_firms) | P7-CLOSE-1907 | [microsoft/Webwright](https://github.com/microsoft/Webwright) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 97 | Law Firms (law_firms) | P7-CLOSE-1916 | [nl-hugo/hypotheek-calculator](https://github.com/nl-hugo/hypotheek-calculator) | 7/10 | ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 98 | Law Firms (law_firms) | P7-CLOSE-1930 | [prolinkinfo/RealEstateCRM](https://github.com/prolinkinfo/RealEstateCRM) | 7/10 | agent_authority, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 99 | Law Firms (law_firms) | P7-CLOSE-1939 | [redstreet/beancount_reds_importers](https://github.com/redstreet/beancount_reds_importers) | 7/10 | integration_surface, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 100 | Law Firms (law_firms) | P7-CLOSE-1951 | [techinz/browsers-benchmark](https://github.com/techinz/browsers-benchmark) | 7/10 | economics_maintenance, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 101 | Logistics & Freight (logistics_freight) | P7-CLOSE-1989 | [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 102 | Logistics & Freight (logistics_freight) | P7-CLOSE-1995 | [Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 103 | Logistics & Freight (logistics_freight) | P7-CLOSE-2000 | [MLGroupJLU/LLM-eval-survey](https://github.com/MLGroupJLU/LLM-eval-survey) | 7/10 | economics_maintenance, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 104 | Logistics & Freight (logistics_freight) | P7-CLOSE-2006 | [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 7/10 | data_model, demand_atom_fit, economics_maintenance | 10 ledger + 10 receipts |
| 105 | Logistics & Freight (logistics_freight) | P7-CLOSE-2007 | [Natnael243/Eastafrica](https://github.com/Natnael243/Eastafrica) | 7/10 | ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 106 | Logistics & Freight (logistics_freight) | P7-CLOSE-2008 | [Natnael243/eastAfrica_Admin](https://github.com/Natnael243/eastAfrica_Admin) | 7/10 | ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 107 | Logistics & Freight (logistics_freight) | P7-CLOSE-2013 | [PySpur-Dev/pyspur](https://github.com/PySpur-Dev/pyspur) | 7/10 | provenance_rights, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 108 | Logistics & Freight (logistics_freight) | P7-CLOSE-2029 | [amanraj74/hirepilot](https://github.com/amanraj74/hirepilot) | 7/10 | provenance_rights, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 109 | Logistics & Freight (logistics_freight) | P7-CLOSE-2036 | [api-evangelist/tock-reservations](https://github.com/api-evangelist/tock-reservations) | 7/10 | economics_maintenance, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 110 | Logistics & Freight (logistics_freight) | P7-CLOSE-2051 | [coaidev/coai](https://github.com/coaidev/coai) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 111 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2192 | [MLGroupJLU/LLM-eval-survey](https://github.com/MLGroupJLU/LLM-eval-survey) | 7/10 | economics_maintenance, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 112 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2194 | [MiladJoodi/Civora-Dashboard](https://github.com/MiladJoodi/Civora-Dashboard) | 7/10 | agent_authority, integration_surface, runtime_deployment | 10 ledger + 10 receipts |
| 113 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2198 | [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 7/10 | data_model, demand_atom_fit, economics_maintenance | 10 ledger + 10 receipts |
| 114 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2201 | [OpenOLAT/OpenOLAT](https://github.com/OpenOLAT/OpenOLAT) | 7/10 | integration_surface, provenance_rights, runtime_deployment | 10 ledger + 10 receipts |
| 115 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2204 | [PySpur-Dev/pyspur](https://github.com/PySpur-Dev/pyspur) | 7/10 | provenance_rights, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 116 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2210 | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 7/10 | demand_atom_fit, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 117 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2214 | [ahmedsaadawi13/splash-estate-crm](https://github.com/ahmedsaadawi13/splash-estate-crm) | 7/10 | data_model, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 118 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2218 | [akveo/ngx-admin](https://github.com/akveo/ngx-admin) | 7/10 | agent_authority, integration_surface, runtime_deployment | 10 ledger + 10 receipts |
| 119 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2222 | [amanraj74/hirepilot](https://github.com/amanraj74/hirepilot) | 7/10 | provenance_rights, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 120 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2265 | [ericporres/family-assistant-skill](https://github.com/ericporres/family-assistant-skill) | 7/10 | agent_authority, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 121 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2485 | [kartikbansalx/LegalVault-Legal-Document-Management-System](https://github.com/kartikbansalx/LegalVault-Legal-Document-Management-System) | 8/10 | ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 122 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2491 | [martaldsantos/agentic-ai-hack](https://github.com/martaldsantos/agentic-ai-hack) | 8/10 | ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 123 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2496 | [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | 8/10 | provenance_rights, ui_assembly | 10 ledger + 10 receipts |
| 124 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2508 | [onejune2018/Awesome-LLM-Eval](https://github.com/onejune2018/Awesome-LLM-Eval) | 8/10 | data_model, runtime_deployment | 10 ledger + 10 receipts |
| 125 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2528 | [rh-aiservices-bu/insurance-claim-processing](https://github.com/rh-aiservices-bu/insurance-claim-processing) | 8/10 | integration_surface, ui_assembly | 10 ledger + 10 receipts |
| 126 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2374 | [DouyinFE/semi-design](https://github.com/DouyinFE/semi-design) | 7/10 | agent_authority, economics_maintenance, runtime_deployment | 10 ledger + 10 receipts |
| 127 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2384 | [Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 128 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2386 | [LMS-Laravel/LMS-Laravel](https://github.com/LMS-Laravel/LMS-Laravel) | 7/10 | integration_surface, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 129 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2388 | [LordQueso/MCP-construction](https://github.com/LordQueso/MCP-construction) | 7/10 | economics_maintenance, integration_surface, provenance_rights | 10 ledger + 10 receipts |
| 130 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2389 | [MLGroupJLU/LLM-eval-survey](https://github.com/MLGroupJLU/LLM-eval-survey) | 7/10 | economics_maintenance, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 131 | Property Management (property_management) | P7-CLOSE-2571 | [DouyinFE/semi-design](https://github.com/DouyinFE/semi-design) | 7/10 | agent_authority, economics_maintenance, runtime_deployment | 10 ledger + 10 receipts |
| 132 | Property Management (property_management) | P7-CLOSE-2572 | [ELIOTT-BONTE/Legal_doc_processing_pipeline](https://github.com/ELIOTT-BONTE/Legal_doc_processing_pipeline) | 7/10 | integration_surface, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 133 | Property Management (property_management) | P7-CLOSE-2575 | [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 134 | Property Management (property_management) | P7-CLOSE-2582 | [Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 135 | Property Management (property_management) | P7-CLOSE-2587 | [MLGroupJLU/LLM-eval-survey](https://github.com/MLGroupJLU/LLM-eval-survey) | 7/10 | economics_maintenance, runtime_deployment, ui_assembly | 10 ledger + 10 receipts |
| 136 | Property Management (property_management) | P7-CLOSE-2595 | [Natnael243/Eastafrica](https://github.com/Natnael243/Eastafrica) | 7/10 | ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 137 | Property Management (property_management) | P7-CLOSE-2596 | [Natnael243/eastAfrica_Admin](https://github.com/Natnael243/eastAfrica_Admin) | 7/10 | ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 138 | Property Management (property_management) | P7-CLOSE-2618 | [amirgoli1383saransari/hirehub](https://github.com/amirgoli1383saransari/hirehub) | 7/10 | demand_atom_fit, ui_assembly, workflow_behavior | 10 ledger + 10 receipts |
| 139 | Property Management (property_management) | P7-CLOSE-2624 | [api-evangelist/tock-reservations](https://github.com/api-evangelist/tock-reservations) | 7/10 | runtime_deployment, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 140 | Property Management (property_management) | P7-CLOSE-2648 | [darcys22/godbledger](https://github.com/darcys22/godbledger) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 141 | Real Estate (real_estate) | P7-CLOSE-2760 | [AishwaryaSingh123/Court_and_Legal_Management_Systerm](https://github.com/AishwaryaSingh123/Court_and_Legal_Management_Systerm) | 7/10 | agent_authority, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 142 | Real Estate (real_estate) | P7-CLOSE-2769 | [CursorTouch/Windows-MCP](https://github.com/CursorTouch/Windows-MCP) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 143 | Real Estate (real_estate) | P7-CLOSE-2773 | [ELIOTT-BONTE/Legal_doc_processing_pipeline](https://github.com/ELIOTT-BONTE/Legal_doc_processing_pipeline) | 7/10 | agent_authority, integration_surface, ui_assembly | 10 ledger + 10 receipts |
| 144 | Real Estate (real_estate) | P7-CLOSE-2782 | [Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 145 | Real Estate (real_estate) | P7-CLOSE-2786 | [LordQueso/MCP-construction](https://github.com/LordQueso/MCP-construction) | 7/10 | economics_maintenance, integration_surface, verification_eval | 10 ledger + 10 receipts |
| 146 | Real Estate (real_estate) | P7-CLOSE-2790 | [MiladJoodi/Civora-Dashboard](https://github.com/MiladJoodi/Civora-Dashboard) | 7/10 | agent_authority, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 147 | Real Estate (real_estate) | P7-CLOSE-2825 | [api-evangelist/healthcaresourcecom](https://github.com/api-evangelist/healthcaresourcecom) | 7/10 | runtime_deployment, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 148 | Real Estate (real_estate) | P7-CLOSE-2827 | [apifyforge/logistics-freight-intelligence-mcp](https://github.com/apifyforge/logistics-freight-intelligence-mcp) | 7/10 | data_model, demand_atom_fit, integration_surface | 10 ledger + 10 receipts |
| 149 | Real Estate (real_estate) | P7-CLOSE-2841 | [cntanos/TertiaryEducationEnrollmentVisualization](https://github.com/cntanos/TertiaryEducationEnrollmentVisualization) | 7/10 | data_model, integration_surface, runtime_deployment | 10 ledger + 10 receipts |
| 150 | Real Estate (real_estate) | P7-CLOSE-2842 | [coaidev/coai](https://github.com/coaidev/coai) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 151 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3023 | [api-evangelist/tock-reservations](https://github.com/api-evangelist/tock-reservations) | 7/10 | runtime_deployment, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 152 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3035 | [closebotai/cobras-real-estate-crm](https://github.com/closebotai/cobras-real-estate-crm) | 7/10 | data_model, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 153 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3036 | [cntanos/TertiaryEducationEnrollmentVisualization](https://github.com/cntanos/TertiaryEducationEnrollmentVisualization) | 7/10 | data_model, integration_surface, runtime_deployment | 10 ledger + 10 receipts |
| 154 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3037 | [coaidev/coai](https://github.com/coaidev/coai) | 7/10 | agent_authority, provenance_rights, workflow_behavior | 10 ledger + 10 receipts |
| 155 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3039 | [conductor-oss/conductor](https://github.com/conductor-oss/conductor) | 7/10 | provenance_rights, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 156 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3055 | [ejajmahmud/hospitality-reservation-keyless-php-blade-crm-v2026-b56](https://github.com/ejajmahmud/hospitality-reservation-keyless-php-blade-crm-v2026-b56) | 7/10 | data_model, demand_atom_fit, ui_assembly | 10 ledger + 10 receipts |
| 157 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3058 | [ericporres/family-assistant-skill](https://github.com/ericporres/family-assistant-skill) | 7/10 | agent_authority, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 158 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3072 | [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 7/10 | provenance_rights, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 159 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3075 | [jdan/98.css](https://github.com/jdan/98.css) | 7/10 | data_model, demand_atom_fit, workflow_behavior | 10 ledger + 10 receipts |
| 160 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3082 | [langgenius/dify](https://github.com/langgenius/dify) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 161 | SaaS (saas) | P7-CLOSE-3163 | [CursorTouch/Windows-MCP](https://github.com/CursorTouch/Windows-MCP) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 162 | SaaS (saas) | P7-CLOSE-3170 | [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 7/10 | data_model, demand_atom_fit, provenance_rights | 10 ledger + 10 receipts |
| 163 | SaaS (saas) | P7-CLOSE-3188 | [Natnael243/eastAfrica_Admin](https://github.com/Natnael243/eastAfrica_Admin) | 7/10 | ui_assembly, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 164 | SaaS (saas) | P7-CLOSE-3189 | [OpenOLAT/OpenOLAT](https://github.com/OpenOLAT/OpenOLAT) | 7/10 | agent_authority, economics_maintenance, provenance_rights | 10 ledger + 10 receipts |
| 165 | SaaS (saas) | P7-CLOSE-3195 | [SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium) | 7/10 | agent_authority, data_model, provenance_rights | 10 ledger + 10 receipts |
| 166 | SaaS (saas) | P7-CLOSE-3198 | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 7/10 | demand_atom_fit, verification_eval, workflow_behavior | 10 ledger + 10 receipts |
| 167 | SaaS (saas) | P7-CLOSE-3213 | [api-evangelist/alto-vebra](https://github.com/api-evangelist/alto-vebra) | 7/10 | economics_maintenance, provenance_rights, verification_eval | 10 ledger + 10 receipts |
| 168 | SaaS (saas) | P7-CLOSE-3214 | [api-evangelist/freshteam](https://github.com/api-evangelist/freshteam) | 7/10 | provenance_rights, runtime_deployment, verification_eval | 10 ledger + 10 receipts |
| 169 | SaaS (saas) | P7-CLOSE-3221 | [aws-samples/serverless-eda-insurance-claims-processing](https://github.com/aws-samples/serverless-eda-insurance-claims-processing) | 7/10 | provenance_rights, ui_assembly, verification_eval | 10 ledger + 10 receipts |
| 170 | SaaS (saas) | P7-CLOSE-3228 | [chamilo/chamilo-lms](https://github.com/chamilo/chamilo-lms) | 7/10 | agent_authority, provenance_rights, verification_eval | 10 ledger + 10 receipts |

Every pair has the fixed ten dimensions: `demand_atom_fit`, `workflow_behavior`, `data_model`, `integration_surface`, `ui_assembly`, `agent_authority`, `verification_eval`, `provenance_rights`, `runtime_deployment`, and `economics_maintenance`.

## Rights, unknowns, falsifiers, and next gates

Every row carries dimension-specific unknown Block Contract fields, rights state `U`, SBOM/dependency/notice/attribution/lineage unknowns, preserved queue rights signals, a falsifier, and a smallest next read-only gate. Declared permissive signals remain unverified and are not legal clearance; no declared license remains unknown. No source was copied or scanned.

## Preservation and hashes

- Closure queue SHA-256: `99ead4a8f8de29228a73fe3fe3bd131ee952a5950b50c3bc126c1423add84c32`
- Coverage-gap audit SHA-256: `9d1a6e9177bae58cb15f0532ce7a1dbb5765fc3d231c1396a7db0db0d684e948`
- Shared Phase-7 state SHA-256 (read-only preservation anchor): `af91919a820fe3a2b0df712fff02df53a12093271ffedb834955725270f354b3`
- Wave 1 ledger SHA-256: `35e6d9956d5689f2afc2758dad000ed6683844133023309babe41b12549861f8`
- Wave 2 ledger SHA-256: `c49de3b0d7b696df539983562f70a2b83b5c2cf778e37124b1c84b9cc971e676`
- Wave 3 ledger SHA-256: `d8a988a944693260d58ff395e481d9bda98165b272565a5e7cd062b044aaf288`
- Wave 4 ledger SHA-256: `94ecd0db408e8c356f89b8ff942839d834a39bcddf90af9d8bf018e5b1dbd38e`
- Wave 5 ledger SHA-256: `53a199afb8411b1811c0852bd1c2914d9eb51cf6fc8ec8403295c81c4cb9bb7a`
- Wave 5 source-receipts SHA-256: `68550144c02783874c993c8d1f883c8ba83d0c1e3a03c7bad3117a61cba249a3`
- Wave 1–4, phases 2–6, master matrix, closure queue, and coordinator files were not written by this lane.

## Verification and boundary

- Post-write command: `node smoke-dimension-evidence-wave-5.mjs`.
- Required checks: output boundary, JSONL parse, deterministic next-tranche selection, exact 170-pair/1,700-row counters, 10 dimensions per pair, 170 rows per dimension, prior Wave 1/2/3/4 exclusion, identity/source/date/evidence parity, inherited/fresh labeling, source-link boundary, rights/SBOM unknowns, report markers, preserved hashes, and research-only boundaries.
- Boundary: `research_only=true`; `UNEXECUTED`; `NOT_ADMITTED`; `implementation_authorized=false`; authenticated behavior `U`; `parent_goal_status=active`; master counters unchanged; no overall completion claim.
- Callback is recorded in lane state after fresh CENA pane resolution and readback.

## Output files

- `dimension-evidence-ledger.jsonl` — 1,700 normalized pair×dimension records.
- `source-receipts.jsonl` — 1,700 matching source receipts.
- `dimension-depth-report.md` — method, exact selected pair inventory, counts, preservation, and boundary report.
- `lane-state.json` — Wave 5 lane-only state; shared Phase-7 state is not promoted.
- `smoke-dimension-evidence-wave-5.mjs` — post-write structural/source/freshness/boundary smoke.

Callback: fresh CENA pane resolved, six-line receipt delivered with `pane run`, read back after 2 seconds, and verified; no overall completion claim.
