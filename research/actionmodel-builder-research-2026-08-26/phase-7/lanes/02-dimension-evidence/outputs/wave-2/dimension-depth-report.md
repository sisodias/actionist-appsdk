# Phase-7 Wave 2 — Dimension Evidence Ledger

Lane: `P7-DIMENSION-EVIDENCE`
Wave: `P7-DIMENSION-EVIDENCE-W2`
Observation date: `2026-08-27`
Status: lane artifact complete; this is not an overall closure claim.

## Scope and method

Selected exactly 10 `partial` closure-queue pairs per each of 17 industries, deterministically by `dimension_count` descending and `queue_id` ascending, after excluding every Wave 1 T1 queue ID. The selected tranche is 170 nine-of-ten pairs; each contributes one record for each of the ten dimensions, for 1,700 ledger rows and 1,700 matching source receipts.

For the nine dimensions already present in a selected queue row, the ledger preserves that row’s repository-specific observation, exact public source URLs, evidence class, limitation, falsifier/next gate, observation index, slot ID, and rights boundary. The one missing dimension per pair is recorded as `U` / `unknown_blocked` with empty direct/inferred claims, an explicit source limitation, falsifier, and smallest read-only gate. No generic cell evidence was copied and no new capability claim was fabricated.

The source receipts are provenance records for exact public GitHub URLs already present in the closure queue. Wave 2 did not independently download, clone, open arbitrary source, execute, build, deploy, benchmark, scan, log in, or use credentials. Authenticated behavior remains `U`.

## Exact counts

- Selected pairs: **170** (17 industries × 10), all `dimension_count=9` with exactly one queue-declared missing dimension.
- Dimension evidence rows: **1,700** (170 pairs × 10 dimensions).
- Source receipts: **1,700**, one per ledger row with matching `pair_dimension_key` and source URL list.
- Per-dimension rows: demand_atom_fit=170, workflow_behavior=170, data_model=170, integration_surface=170, ui_assembly=170, agent_authority=170, verification_eval=170, provenance_rights=170, runtime_deployment=170, economics_maintenance=170.
- Baseline master closure counters are unchanged: 270 complete pairs / 1,700 target pairs; 3,076 partial pairs / 3,346 closure-queue rows. Wave 2 records evidence only and does not promote any pair to complete.
- No overall completion claim is made.

## Industry selection and pair inventory

| Industry | Pairs | Dimension rows | Receipts | Selected queue IDs |
|---|---:|---:|---:|---|
| Accounting Firms (accounting_firms) | 10 | 100 | 100 | P7-CLOSE-0010, P7-CLOSE-0011, P7-CLOSE-0013, P7-CLOSE-0017, P7-CLOSE-0041, P7-CLOSE-0047, P7-CLOSE-0067, P7-CLOSE-0078, P7-CLOSE-0095, P7-CLOSE-0122 |
| Construction (construction) | 10 | 100 | 100 | P7-CLOSE-0207, P7-CLOSE-0208, P7-CLOSE-0211, P7-CLOSE-0212, P7-CLOSE-0218, P7-CLOSE-0271, P7-CLOSE-0278, P7-CLOSE-0289, P7-CLOSE-0291, P7-CLOSE-0310 |
| Course Creators (course_creators) | 10 | 100 | 100 | P7-CLOSE-0402, P7-CLOSE-0403, P7-CLOSE-0413, P7-CLOSE-0450, P7-CLOSE-0458, P7-CLOSE-0463, P7-CLOSE-0464, P7-CLOSE-0471, P7-CLOSE-0491, P7-CLOSE-0530 |
| Ecommerce (ecommerce) | 10 | 100 | 100 | P7-CLOSE-0605, P7-CLOSE-0608, P7-CLOSE-0609, P7-CLOSE-0615, P7-CLOSE-0624, P7-CLOSE-0654, P7-CLOSE-0659, P7-CLOSE-0666, P7-CLOSE-0684, P7-CLOSE-0686 |
| Education & Training (education_training) | 10 | 100 | 100 | P7-CLOSE-0798, P7-CLOSE-0808, P7-CLOSE-0814, P7-CLOSE-0818, P7-CLOSE-0837, P7-CLOSE-0838, P7-CLOSE-0845, P7-CLOSE-0853, P7-CLOSE-0859, P7-CLOSE-0866 |
| Healthcare & Medical Practices (healthcare_medical_practices) | 10 | 100 | 100 | P7-CLOSE-0995, P7-CLOSE-0998, P7-CLOSE-0999, P7-CLOSE-1005, P7-CLOSE-1010, P7-CLOSE-1034, P7-CLOSE-1040, P7-CLOSE-1048, P7-CLOSE-1051, P7-CLOSE-1052 |
| Hospitality (hospitality) | 10 | 100 | 100 | P7-CLOSE-1190, P7-CLOSE-1193, P7-CLOSE-1194, P7-CLOSE-1200, P7-CLOSE-1221, P7-CLOSE-1234, P7-CLOSE-1242, P7-CLOSE-1246, P7-CLOSE-1251, P7-CLOSE-1252 |
| Insurance Agencies (insurance_agencies) | 10 | 100 | 100 | P7-CLOSE-1382, P7-CLOSE-1385, P7-CLOSE-1386, P7-CLOSE-1396, P7-CLOSE-1425, P7-CLOSE-1439, P7-CLOSE-1443, P7-CLOSE-1458, P7-CLOSE-1469, P7-CLOSE-1471 |
| IT Services & MSPs (it_services_msps) | 10 | 100 | 100 | P7-CLOSE-1583, P7-CLOSE-1587, P7-CLOSE-1602, P7-CLOSE-1605, P7-CLOSE-1607, P7-CLOSE-1614, P7-CLOSE-1621, P7-CLOSE-1639, P7-CLOSE-1654, P7-CLOSE-1667 |
| Law Firms (law_firms) | 10 | 100 | 100 | P7-CLOSE-1776, P7-CLOSE-1777, P7-CLOSE-1831, P7-CLOSE-1835, P7-CLOSE-1840, P7-CLOSE-1843, P7-CLOSE-1861, P7-CLOSE-1884, P7-CLOSE-1896, P7-CLOSE-1902 |
| Logistics & Freight (logistics_freight) | 10 | 100 | 100 | P7-CLOSE-1976, P7-CLOSE-1977, P7-CLOSE-1978, P7-CLOSE-1987, P7-CLOSE-1996, P7-CLOSE-1999, P7-CLOSE-2002, P7-CLOSE-2034, P7-CLOSE-2041, P7-CLOSE-2053 |
| Marketing & Social Media Agencies (marketing_social_media_agencies) | 10 | 100 | 100 | P7-CLOSE-2164, P7-CLOSE-2178, P7-CLOSE-2184, P7-CLOSE-2187, P7-CLOSE-2226, P7-CLOSE-2231, P7-CLOSE-2234, P7-CLOSE-2252, P7-CLOSE-2275, P7-CLOSE-2279 |
| Mortgage Brokers (mortgage_brokers) | 10 | 100 | 100 | P7-CLOSE-2362, P7-CLOSE-2366, P7-CLOSE-2399, P7-CLOSE-2419, P7-CLOSE-2424, P7-CLOSE-2429, P7-CLOSE-2432, P7-CLOSE-2475, P7-CLOSE-2481, P7-CLOSE-2484 |
| Property Management (property_management) | 10 | 100 | 100 | P7-CLOSE-2559, P7-CLOSE-2563, P7-CLOSE-2603, P7-CLOSE-2617, P7-CLOSE-2622, P7-CLOSE-2672, P7-CLOSE-2679, P7-CLOSE-2683, P7-CLOSE-2689, P7-CLOSE-2710 |
| Real Estate (real_estate) | 10 | 100 | 100 | P7-CLOSE-2757, P7-CLOSE-2764, P7-CLOSE-2819, P7-CLOSE-2824, P7-CLOSE-2829, P7-CLOSE-2832, P7-CLOSE-2839, P7-CLOSE-2850, P7-CLOSE-2872, P7-CLOSE-2878 |
| Recruiting & Staffing (recruiting_staffing) | 10 | 100 | 100 | P7-CLOSE-2965, P7-CLOSE-3009, P7-CLOSE-3026, P7-CLOSE-3067, P7-CLOSE-3078, P7-CLOSE-3105, P7-CLOSE-3112, P7-CLOSE-3126, P7-CLOSE-3132, P7-CLOSE-3148 |
| SaaS (saas) | 10 | 100 | 100 | P7-CLOSE-3158, P7-CLOSE-3161, P7-CLOSE-3176, P7-CLOSE-3180, P7-CLOSE-3182, P7-CLOSE-3218, P7-CLOSE-3241, P7-CLOSE-3266, P7-CLOSE-3300, P7-CLOSE-3313 |

## Per-pair evidence contract

| Selection | Industry | Queue ID | Canonical repository | Before | Missing dimension | Rows |
|---:|---|---|---|---:|---|---:|
| 1 | Accounting Firms (accounting_firms) | P7-CLOSE-0010 | [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 2 | Accounting Firms (accounting_firms) | P7-CLOSE-0011 | [ColorlibHQ/gentelella](https://github.com/ColorlibHQ/gentelella) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 3 | Accounting Firms (accounting_firms) | P7-CLOSE-0013 | [Daymychen/art-design-pro](https://github.com/Daymychen/art-design-pro) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 4 | Accounting Firms (accounting_firms) | P7-CLOSE-0017 | [FlorianBruniaux/claude-code-ultimate-guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 5 | Accounting Firms (accounting_firms) | P7-CLOSE-0041 | [OpenOLAT/OpenOLAT](https://github.com/OpenOLAT/OpenOLAT) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 6 | Accounting Firms (accounting_firms) | P7-CLOSE-0047 | [SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 7 | Accounting Firms (accounting_firms) | P7-CLOSE-0067 | [api-evangelist/freshteam](https://github.com/api-evangelist/freshteam) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 8 | Accounting Firms (accounting_firms) | P7-CLOSE-0078 | [boxyhq/saas-starter-kit](https://github.com/boxyhq/saas-starter-kit) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 9 | Accounting Firms (accounting_firms) | P7-CLOSE-0095 | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 10 | Accounting Firms (accounting_firms) | P7-CLOSE-0122 | [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 11 | Construction (construction) | P7-CLOSE-0207 | [AnilBotta/realtorspal-ai](https://github.com/AnilBotta/realtorspal-ai) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 12 | Construction (construction) | P7-CLOSE-0208 | [Arindam200/awesome-ai-apps](https://github.com/Arindam200/awesome-ai-apps) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 13 | Construction (construction) | P7-CLOSE-0211 | [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 14 | Construction (construction) | P7-CLOSE-0212 | [ColorlibHQ/gentelella](https://github.com/ColorlibHQ/gentelella) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 15 | Construction (construction) | P7-CLOSE-0218 | [FlorianBruniaux/claude-code-ultimate-guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 16 | Construction (construction) | P7-CLOSE-0271 | [aws-samples/serverless-eda-insurance-claims-processing](https://github.com/aws-samples/serverless-eda-insurance-claims-processing) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 17 | Construction (construction) | P7-CLOSE-0278 | [chamilo/chamilo-lms](https://github.com/chamilo/chamilo-lms) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 18 | Construction (construction) | P7-CLOSE-0289 | [darcys22/godbledger](https://github.com/darcys22/godbledger) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 19 | Construction (construction) | P7-CLOSE-0291 | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 20 | Construction (construction) | P7-CLOSE-0310 | [frappe/lms](https://github.com/frappe/lms) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 21 | Course Creators (course_creators) | P7-CLOSE-0402 | [AnilBotta/realtorspal-ai](https://github.com/AnilBotta/realtorspal-ai) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 22 | Course Creators (course_creators) | P7-CLOSE-0403 | [Arindam200/awesome-ai-apps](https://github.com/Arindam200/awesome-ai-apps) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 23 | Course Creators (course_creators) | P7-CLOSE-0413 | [FlorianBruniaux/claude-code-ultimate-guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 24 | Course Creators (course_creators) | P7-CLOSE-0450 | [ahmedsaadawi13/splash-estate-crm](https://github.com/ahmedsaadawi13/splash-estate-crm) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 25 | Course Creators (course_creators) | P7-CLOSE-0458 | [amanraj74/hirepilot](https://github.com/amanraj74/hirepilot) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 26 | Course Creators (course_creators) | P7-CLOSE-0463 | [api-evangelist/freshteam](https://github.com/api-evangelist/freshteam) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 27 | Course Creators (course_creators) | P7-CLOSE-0464 | [api-evangelist/healthcaresourcecom](https://github.com/api-evangelist/healthcaresourcecom) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 28 | Course Creators (course_creators) | P7-CLOSE-0471 | [aws-samples/serverless-eda-insurance-claims-processing](https://github.com/aws-samples/serverless-eda-insurance-claims-processing) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 29 | Course Creators (course_creators) | P7-CLOSE-0491 | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 30 | Course Creators (course_creators) | P7-CLOSE-0530 | [manjurulhoque/doccure](https://github.com/manjurulhoque/doccure) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 31 | Ecommerce (ecommerce) | P7-CLOSE-0605 | [Arindam200/awesome-ai-apps](https://github.com/Arindam200/awesome-ai-apps) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 32 | Ecommerce (ecommerce) | P7-CLOSE-0608 | [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 33 | Ecommerce (ecommerce) | P7-CLOSE-0609 | [ColorlibHQ/gentelella](https://github.com/ColorlibHQ/gentelella) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 34 | Ecommerce (ecommerce) | P7-CLOSE-0615 | [FlorianBruniaux/claude-code-ultimate-guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 35 | Ecommerce (ecommerce) | P7-CLOSE-0624 | [KolbySisk/next-supabase-stripe-starter](https://github.com/KolbySisk/next-supabase-stripe-starter) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 36 | Ecommerce (ecommerce) | P7-CLOSE-0654 | [amanraj74/hirepilot](https://github.com/amanraj74/hirepilot) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 37 | Ecommerce (ecommerce) | P7-CLOSE-0659 | [api-evangelist/freshteam](https://github.com/api-evangelist/freshteam) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 38 | Ecommerce (ecommerce) | P7-CLOSE-0666 | [aws-samples/serverless-eda-insurance-claims-processing](https://github.com/aws-samples/serverless-eda-insurance-claims-processing) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 39 | Ecommerce (ecommerce) | P7-CLOSE-0684 | [darcys22/godbledger](https://github.com/darcys22/godbledger) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 40 | Ecommerce (ecommerce) | P7-CLOSE-0686 | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 41 | Education & Training (education_training) | P7-CLOSE-0798 | [Arindam200/awesome-ai-apps](https://github.com/Arindam200/awesome-ai-apps) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 42 | Education & Training (education_training) | P7-CLOSE-0808 | [FlorianBruniaux/claude-code-ultimate-guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 43 | Education & Training (education_training) | P7-CLOSE-0814 | [InsulaCRM/InsulaCRM](https://github.com/InsulaCRM/InsulaCRM) | 9/10 | data_model | 10 ledger + 10 receipts |
| 44 | Education & Training (education_training) | P7-CLOSE-0818 | [LMS-Laravel/LMS-Laravel](https://github.com/LMS-Laravel/LMS-Laravel) | 9/10 | runtime_deployment | 10 ledger + 10 receipts |
| 45 | Education & Training (education_training) | P7-CLOSE-0837 | [SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 46 | Education & Training (education_training) | P7-CLOSE-0838 | [SkyCascade/SkyLearn](https://github.com/SkyCascade/SkyLearn) | 9/10 | integration_surface | 10 ledger + 10 receipts |
| 47 | Education & Training (education_training) | P7-CLOSE-0845 | [ahmedsaadawi13/splash-estate-crm](https://github.com/ahmedsaadawi13/splash-estate-crm) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 48 | Education & Training (education_training) | P7-CLOSE-0853 | [amanraj74/hirepilot](https://github.com/amanraj74/hirepilot) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 49 | Education & Training (education_training) | P7-CLOSE-0859 | [api-evangelist/healthcaresourcecom](https://github.com/api-evangelist/healthcaresourcecom) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 50 | Education & Training (education_training) | P7-CLOSE-0866 | [aws-samples/serverless-eda-insurance-claims-processing](https://github.com/aws-samples/serverless-eda-insurance-claims-processing) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 51 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-0995 | [Arindam200/awesome-ai-apps](https://github.com/Arindam200/awesome-ai-apps) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 52 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-0998 | [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 53 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-0999 | [ColorlibHQ/gentelella](https://github.com/ColorlibHQ/gentelella) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 54 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1005 | [FlorianBruniaux/claude-code-ultimate-guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 55 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1010 | [InsulaCRM/InsulaCRM](https://github.com/InsulaCRM/InsulaCRM) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 56 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1034 | [SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 57 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1040 | [ahmedsaadawi13/splash-estate-crm](https://github.com/ahmedsaadawi13/splash-estate-crm) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 58 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1048 | [amanraj74/hirepilot](https://github.com/amanraj74/hirepilot) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 59 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1051 | [api-evangelist/alto-vebra](https://github.com/api-evangelist/alto-vebra) | 9/10 | economics_maintenance | 10 ledger + 10 receipts |
| 60 | Healthcare & Medical Practices (healthcare_medical_practices) | P7-CLOSE-1052 | [api-evangelist/freshteam](https://github.com/api-evangelist/freshteam) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 61 | Hospitality (hospitality) | P7-CLOSE-1190 | [Arindam200/awesome-ai-apps](https://github.com/Arindam200/awesome-ai-apps) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 62 | Hospitality (hospitality) | P7-CLOSE-1193 | [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 63 | Hospitality (hospitality) | P7-CLOSE-1194 | [ColorlibHQ/gentelella](https://github.com/ColorlibHQ/gentelella) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 64 | Hospitality (hospitality) | P7-CLOSE-1200 | [FlorianBruniaux/claude-code-ultimate-guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 65 | Hospitality (hospitality) | P7-CLOSE-1221 | [OpenOLAT/OpenOLAT](https://github.com/OpenOLAT/OpenOLAT) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 66 | Hospitality (hospitality) | P7-CLOSE-1234 | [ahmedsaadawi13/splash-estate-crm](https://github.com/ahmedsaadawi13/splash-estate-crm) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 67 | Hospitality (hospitality) | P7-CLOSE-1242 | [amanraj74/hirepilot](https://github.com/amanraj74/hirepilot) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 68 | Hospitality (hospitality) | P7-CLOSE-1246 | [api-evangelist/freshteam](https://github.com/api-evangelist/freshteam) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 69 | Hospitality (hospitality) | P7-CLOSE-1251 | [aryan735/yojak-backend](https://github.com/aryan735/yojak-backend) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 70 | Hospitality (hospitality) | P7-CLOSE-1252 | [ashev87/propstack-mcp](https://github.com/ashev87/propstack-mcp) | 9/10 | runtime_deployment | 10 ledger + 10 receipts |
| 71 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1382 | [AishwaryaSingh123/Court_and_Legal_Management_Systerm](https://github.com/AishwaryaSingh123/Court_and_Legal_Management_Systerm) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 72 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1385 | [AnilBotta/realtorspal-ai](https://github.com/AnilBotta/realtorspal-ai) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 73 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1386 | [Arindam200/awesome-ai-apps](https://github.com/Arindam200/awesome-ai-apps) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 74 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1396 | [FlorianBruniaux/claude-code-ultimate-guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 75 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1425 | [SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 76 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1439 | [amanraj74/hirepilot](https://github.com/amanraj74/hirepilot) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 77 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1443 | [api-evangelist/freshteam](https://github.com/api-evangelist/freshteam) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 78 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1458 | [chamilo/chamilo-lms](https://github.com/chamilo/chamilo-lms) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 79 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1469 | [darcys22/godbledger](https://github.com/darcys22/godbledger) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 80 | Insurance Agencies (insurance_agencies) | P7-CLOSE-1471 | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 81 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1583 | [Arindam200/awesome-ai-apps](https://github.com/Arindam200/awesome-ai-apps) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 82 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1587 | [ColorlibHQ/gentelella](https://github.com/ColorlibHQ/gentelella) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 83 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1602 | [KolbySisk/next-supabase-stripe-starter](https://github.com/KolbySisk/next-supabase-stripe-starter) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 84 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1605 | [LordQueso/MCP-construction](https://github.com/LordQueso/MCP-construction) | 9/10 | integration_surface | 10 ledger + 10 receipts |
| 85 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1607 | [MiladJoodi/Civora-Dashboard](https://github.com/MiladJoodi/Civora-Dashboard) | 9/10 | runtime_deployment | 10 ledger + 10 receipts |
| 86 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1614 | [OpenOLAT/OpenOLAT](https://github.com/OpenOLAT/OpenOLAT) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 87 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1621 | [SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium) | 9/10 | data_model | 10 ledger + 10 receipts |
| 88 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1639 | [api-evangelist/alto-vebra](https://github.com/api-evangelist/alto-vebra) | 9/10 | economics_maintenance | 10 ledger + 10 receipts |
| 89 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1654 | [chamilo/chamilo-lms](https://github.com/chamilo/chamilo-lms) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 90 | IT Services & MSPs (it_services_msps) | P7-CLOSE-1667 | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 91 | Law Firms (law_firms) | P7-CLOSE-1776 | [AnilBotta/realtorspal-ai](https://github.com/AnilBotta/realtorspal-ai) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 92 | Law Firms (law_firms) | P7-CLOSE-1777 | [Arindam200/awesome-ai-apps](https://github.com/Arindam200/awesome-ai-apps) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 93 | Law Firms (law_firms) | P7-CLOSE-1831 | [amanraj74/hirepilot](https://github.com/amanraj74/hirepilot) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 94 | Law Firms (law_firms) | P7-CLOSE-1835 | [api-evangelist/freshteam](https://github.com/api-evangelist/freshteam) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 95 | Law Firms (law_firms) | P7-CLOSE-1840 | [aryan735/yojak-backend](https://github.com/aryan735/yojak-backend) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 96 | Law Firms (law_firms) | P7-CLOSE-1843 | [aws-samples/serverless-eda-insurance-claims-processing](https://github.com/aws-samples/serverless-eda-insurance-claims-processing) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 97 | Law Firms (law_firms) | P7-CLOSE-1861 | [darcys22/godbledger](https://github.com/darcys22/godbledger) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 98 | Law Firms (law_firms) | P7-CLOSE-1884 | [frappe/lms](https://github.com/frappe/lms) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 99 | Law Firms (law_firms) | P7-CLOSE-1896 | [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 100 | Law Firms (law_firms) | P7-CLOSE-1902 | [manjurulhoque/doccure](https://github.com/manjurulhoque/doccure) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 101 | Logistics & Freight (logistics_freight) | P7-CLOSE-1976 | [AnilBotta/realtorspal-ai](https://github.com/AnilBotta/realtorspal-ai) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 102 | Logistics & Freight (logistics_freight) | P7-CLOSE-1977 | [Arindam200/awesome-ai-apps](https://github.com/Arindam200/awesome-ai-apps) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 103 | Logistics & Freight (logistics_freight) | P7-CLOSE-1978 | [Blazity/next-saas-starter](https://github.com/Blazity/next-saas-starter) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 104 | Logistics & Freight (logistics_freight) | P7-CLOSE-1987 | [FlorianBruniaux/claude-code-ultimate-guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 105 | Logistics & Freight (logistics_freight) | P7-CLOSE-1996 | [KolbySisk/next-supabase-stripe-starter](https://github.com/KolbySisk/next-supabase-stripe-starter) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 106 | Logistics & Freight (logistics_freight) | P7-CLOSE-1999 | [LordQueso/MCP-construction](https://github.com/LordQueso/MCP-construction) | 9/10 | integration_surface | 10 ledger + 10 receipts |
| 107 | Logistics & Freight (logistics_freight) | P7-CLOSE-2002 | [MiladJoodi/Civora-Dashboard](https://github.com/MiladJoodi/Civora-Dashboard) | 9/10 | runtime_deployment | 10 ledger + 10 receipts |
| 108 | Logistics & Freight (logistics_freight) | P7-CLOSE-2034 | [api-evangelist/freshteam](https://github.com/api-evangelist/freshteam) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 109 | Logistics & Freight (logistics_freight) | P7-CLOSE-2041 | [aws-samples/serverless-eda-insurance-claims-processing](https://github.com/aws-samples/serverless-eda-insurance-claims-processing) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 110 | Logistics & Freight (logistics_freight) | P7-CLOSE-2053 | [conductor-oss/conductor](https://github.com/conductor-oss/conductor) | 9/10 | workflow_behavior | 10 ledger + 10 receipts |
| 111 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2164 | [AishwaryaSingh123/Court_and_Legal_Management_Systerm](https://github.com/AishwaryaSingh123/Court_and_Legal_Management_Systerm) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 112 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2178 | [FlorianBruniaux/claude-code-ultimate-guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 113 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2184 | [InsulaCRM/InsulaCRM](https://github.com/InsulaCRM/InsulaCRM) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 114 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2187 | [Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 115 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2226 | [api-evangelist/alto-vebra](https://github.com/api-evangelist/alto-vebra) | 9/10 | economics_maintenance | 10 ledger + 10 receipts |
| 116 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2231 | [aryan735/yojak-backend](https://github.com/aryan735/yojak-backend) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 117 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2234 | [aws-samples/serverless-eda-insurance-claims-processing](https://github.com/aws-samples/serverless-eda-insurance-claims-processing) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 118 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2252 | [darcys22/godbledger](https://github.com/darcys22/godbledger) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 119 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2275 | [garystafford/general-contractor-agent-demo](https://github.com/garystafford/general-contractor-agent-demo) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 120 | Marketing & Social Media Agencies (marketing_social_media_agencies) | P7-CLOSE-2279 | [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 121 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2362 | [AishwaryaSingh123/Court_and_Legal_Management_Systerm](https://github.com/AishwaryaSingh123/Court_and_Legal_Management_Systerm) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 122 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2366 | [Arindam200/awesome-ai-apps](https://github.com/Arindam200/awesome-ai-apps) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 123 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2399 | [OpenOLAT/OpenOLAT](https://github.com/OpenOLAT/OpenOLAT) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 124 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2419 | [amanraj74/hirepilot](https://github.com/amanraj74/hirepilot) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 125 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2424 | [api-evangelist/freshteam](https://github.com/api-evangelist/freshteam) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 126 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2429 | [aryan735/yojak-backend](https://github.com/aryan735/yojak-backend) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 127 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2432 | [aws-samples/serverless-eda-insurance-claims-processing](https://github.com/aws-samples/serverless-eda-insurance-claims-processing) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 128 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2475 | [garystafford/general-contractor-agent-demo](https://github.com/garystafford/general-contractor-agent-demo) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 129 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2481 | [ixartz/Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 130 | Mortgage Brokers (mortgage_brokers) | P7-CLOSE-2484 | [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 131 | Property Management (property_management) | P7-CLOSE-2559 | [AishwaryaSingh123/Court_and_Legal_Management_Systerm](https://github.com/AishwaryaSingh123/Court_and_Legal_Management_Systerm) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 132 | Property Management (property_management) | P7-CLOSE-2563 | [Arindam200/awesome-ai-apps](https://github.com/Arindam200/awesome-ai-apps) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 133 | Property Management (property_management) | P7-CLOSE-2603 | [SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 134 | Property Management (property_management) | P7-CLOSE-2617 | [amanraj74/hirepilot](https://github.com/amanraj74/hirepilot) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 135 | Property Management (property_management) | P7-CLOSE-2622 | [api-evangelist/freshteam](https://github.com/api-evangelist/freshteam) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 136 | Property Management (property_management) | P7-CLOSE-2672 | [garystafford/general-contractor-agent-demo](https://github.com/garystafford/general-contractor-agent-demo) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 137 | Property Management (property_management) | P7-CLOSE-2679 | [ixartz/Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 138 | Property Management (property_management) | P7-CLOSE-2683 | [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 139 | Property Management (property_management) | P7-CLOSE-2689 | [manjurulhoque/doccure](https://github.com/manjurulhoque/doccure) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 140 | Property Management (property_management) | P7-CLOSE-2710 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 141 | Real Estate (real_estate) | P7-CLOSE-2757 | [7even-7even/Mayzax](https://github.com/7even-7even/Mayzax) | 9/10 | runtime_deployment | 10 ledger + 10 receipts |
| 142 | Real Estate (real_estate) | P7-CLOSE-2764 | [Arindam200/awesome-ai-apps](https://github.com/Arindam200/awesome-ai-apps) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 143 | Real Estate (real_estate) | P7-CLOSE-2819 | [amanraj74/hirepilot](https://github.com/amanraj74/hirepilot) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 144 | Real Estate (real_estate) | P7-CLOSE-2824 | [api-evangelist/freshteam](https://github.com/api-evangelist/freshteam) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 145 | Real Estate (real_estate) | P7-CLOSE-2829 | [aryan735/yojak-backend](https://github.com/aryan735/yojak-backend) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 146 | Real Estate (real_estate) | P7-CLOSE-2832 | [aws-samples/serverless-eda-insurance-claims-processing](https://github.com/aws-samples/serverless-eda-insurance-claims-processing) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 147 | Real Estate (real_estate) | P7-CLOSE-2839 | [chamilo/chamilo-lms](https://github.com/chamilo/chamilo-lms) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 148 | Real Estate (real_estate) | P7-CLOSE-2850 | [darcys22/godbledger](https://github.com/darcys22/godbledger) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 149 | Real Estate (real_estate) | P7-CLOSE-2872 | [frappe/lms](https://github.com/frappe/lms) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 150 | Real Estate (real_estate) | P7-CLOSE-2878 | [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 151 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-2965 | [Arindam200/awesome-ai-apps](https://github.com/Arindam200/awesome-ai-apps) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 152 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3009 | [ahmedsaadawi13/splash-estate-crm](https://github.com/ahmedsaadawi13/splash-estate-crm) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 153 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3026 | [ashev87/propstack-mcp](https://github.com/ashev87/propstack-mcp) | 9/10 | runtime_deployment | 10 ledger + 10 receipts |
| 154 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3067 | [gamlin-ccdocs/php-vicidial-education-enrollment](https://github.com/gamlin-ccdocs/php-vicidial-education-enrollment) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 155 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3078 | [karanpratapsingh/system-design](https://github.com/karanpratapsingh/system-design) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 156 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3105 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 157 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3112 | [prolinkinfo/RealEstateCRM](https://github.com/prolinkinfo/RealEstateCRM) | 9/10 | ui_assembly | 10 ledger + 10 receipts |
| 158 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3126 | [samarailly51-pixel/claimpilot-harness](https://github.com/samarailly51-pixel/claimpilot-harness) | 9/10 | integration_surface | 10 ledger + 10 receipts |
| 159 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3132 | [stevenmcsorley/Private-Legal-DMS](https://github.com/stevenmcsorley/Private-Legal-DMS) | 9/10 | workflow_behavior | 10 ledger + 10 receipts |
| 160 | Recruiting & Staffing (recruiting_staffing) | P7-CLOSE-3148 | [yizhiyanhua-ai/fireworks-tech-graph](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 161 | SaaS (saas) | P7-CLOSE-3158 | [Arindam200/awesome-ai-apps](https://github.com/Arindam200/awesome-ai-apps) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 162 | SaaS (saas) | P7-CLOSE-3161 | [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 163 | SaaS (saas) | P7-CLOSE-3176 | [Kiranism/next-shadcn-dashboard-starter](https://github.com/Kiranism/next-shadcn-dashboard-starter) | 9/10 | agent_authority | 10 ledger + 10 receipts |
| 164 | SaaS (saas) | P7-CLOSE-3180 | [LordQueso/MCP-construction](https://github.com/LordQueso/MCP-construction) | 9/10 | integration_surface | 10 ledger + 10 receipts |
| 165 | SaaS (saas) | P7-CLOSE-3182 | [MiladJoodi/Civora-Dashboard](https://github.com/MiladJoodi/Civora-Dashboard) | 9/10 | runtime_deployment | 10 ledger + 10 receipts |
| 166 | SaaS (saas) | P7-CLOSE-3218 | [aryan735/yojak-backend](https://github.com/aryan735/yojak-backend) | 9/10 | verification_eval | 10 ledger + 10 receipts |
| 167 | SaaS (saas) | P7-CLOSE-3241 | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 9/10 | workflow_behavior | 10 ledger + 10 receipts |
| 168 | SaaS (saas) | P7-CLOSE-3266 | [iflytek/astron-agent](https://github.com/iflytek/astron-agent) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 169 | SaaS (saas) | P7-CLOSE-3300 | [opendatalab/MinerU](https://github.com/opendatalab/MinerU) | 9/10 | provenance_rights | 10 ledger + 10 receipts |
| 170 | SaaS (saas) | P7-CLOSE-3313 | [rajveersidhu/IT-Helpdesk-Ticketing-System](https://github.com/rajveersidhu/IT-Helpdesk-Ticketing-System) | 9/10 | verification_eval | 10 ledger + 10 receipts |

Each pair has ten dimension records in fixed order: `demand_atom_fit`, `workflow_behavior`, `data_model`, `integration_surface`, `ui_assembly`, `agent_authority`, `verification_eval`, `provenance_rights`, `runtime_deployment`, `economics_maintenance`. The missing dimension is the only `U` / `unknown_blocked` row for that pair; present rows remain repository-specific inherited queue evidence with direct versus inferred claims separated.

## Rights, unknowns, falsifiers, and gates

Every row carries dimension-specific unknown Block Contract fields, a rights state of `U`, SBOM/dependency/notice/attribution unknowns, the queue rights boundary signal when one exists, a falsifier, and a smallest next read-only gate. A declared permissive signal is preserved as unverified and is not legal clearance; no declared license remains unknown. No source was copied or scanned.

## Preservation and provenance hashes

- Closure queue SHA-256: `99ead4a8f8de29228a73fe3fe3bd131ee952a5950b50c3bc126c1423add84c32`
- Coverage-gap audit SHA-256: `9d1a6e9177bae58cb15f0532ce7a1dbb5765fc3d231c1396a7db0db0d684e948`
- Shared Phase-7 state SHA-256 (read-only preservation anchor): `829a030c5561ded6c1723e0c7e1cd4154726c58ec48b3221115584e8ab8cdd1b`
- Wave 1 ledger SHA-256: `35e6d9956d5689f2afc2758dad000ed6683844133023309babe41b12549861f8`
- Wave 2 ledger SHA-256: `c49de3b0d7b696df539983562f70a2b83b5c2cf778e37124b1c84b9cc971e676`
- Wave 2 source-receipts SHA-256: `8ababd9f0b51835cd0720c4d8f6bb486b860cf802971d1a4685a1486f3a02660`
- Wave 1, phases 2–6, master matrix, closure queue, and coordinator files were not written by this lane.

## Verification and boundary

- Post-write command: `node smoke-dimension-evidence-wave-2.mjs`.
- Required checks: output boundary, JSONL parse, exact 170-pair/1,700-row counters, 10 dimensions per pair, 170 rows per dimension, deterministic selection and Wave 1 exclusion, identity/source parity, exact source URL host boundary, dates, evidence classes, rights/SBOM unknowns, report markers, preserved input hashes, and research-only boundaries.
- Boundary: `research_only=true`; `UNEXECUTED`; `NOT_ADMITTED`; `implementation_authorized=false`; authenticated behavior `U`; `parent_goal_status=active`; master counters unchanged; no overall completion claim.
- Callback status is recorded in lane state after the fresh CENA pane verification.

## Output files

- `dimension-evidence-ledger.jsonl` — 1,700 normalized pair×dimension records.
- `source-receipts.jsonl` — 1,700 matching source receipts.
- `dimension-depth-report.md` — this method, inventory, counts, preservation, and boundary report.
- `lane-state.json` — Wave 2 lane-only state; shared Phase-7 state is not promoted.
- `smoke-dimension-evidence-wave-2.mjs` — post-write structural/freshness/source/boundary smoke.

Callback: fresh CENA pane resolved, six-line receipt delivered with `pane run`, read back after 2 seconds, and verified; no overall completion claim.
