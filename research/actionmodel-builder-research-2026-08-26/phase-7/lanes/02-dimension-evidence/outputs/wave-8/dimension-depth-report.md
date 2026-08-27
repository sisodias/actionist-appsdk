# Phase 7 Wave 8 dimension-depth report

Lane: P7-DIMENSION-EVIDENCE-W8  
Observed: 2026-08-27  
Mode: research-only; parent goal active; no overall completion claim.

## Outcome

Wave 8 records exactly 170 partial industry–repository pairs selected by the published W8 corpus ledger, with exactly 1,700 repository-pair×dimension records and 1,700 matching source receipts. Each pair has all ten dimensions represented. The 170 pairs are not promoted or completed: inherited queue context is explicitly not treated as fresh proof, and missing dimensions remain U/unknown/blocked.

## Method and source boundary

The W8 corpus selection ledger is the sole pair selector. Queue rows were joined by exact queue ID and repository identity; no substitute, generic cell evidence, or prior-wave row was used. For a dimension present in the queue, the exact repository-specific queue record and its exact public URLs are retained but labeled inherited and not fresh. For a missing dimension, only the queue-level URLs are retained and the evidence state is U/unknown/blocked. No login, credentials, client/private data, browser side effects, clone/copy, source execution, build, deployment, benchmark, scan, implementation, or admission occurred. Authenticated behavior remains U.

## Exact counters

| Measure | Count |
|---|---:|
| Industries | 17 |
| Selected pairs | 170 |
| Selected pairs per industry | 10 |
| Dimensions | 10 |
| Ledger rows | 1,700 |
| Source receipts | 1,700 |
| Unique pair×dimension keys | 1,700 |
| Rows with inherited repository-specific queue records | 861 |
| Rows with explicit U/unknown/blocked dimensions | 839 |
| Prior W1–W7 queue IDs excluded | 1,030 |

### Per-dimension counters

- demand_atom_fit (Demand and solution-atom fit): **170** rows
- workflow_behavior (Workflow behavior): **170** rows
- data_model (Data model): **170** rows
- integration_surface (Integration surface): **170** rows
- ui_assembly (UI assembly): **170** rows
- agent_authority (Agent authority): **170** rows
- verification_eval (Verification and eval): **170** rows
- provenance_rights (Provenance and rights): **170** rows
- runtime_deployment (Runtime and deployment): **170** rows
- economics_maintenance (Economics and maintenance): **170** rows

## Selected pairs:

| # | Industry | Queue ID | Canonical repository | Missing dimensions |
|---:|---|---|---|---|
| 1 | Accounting Firms | P7-CLOSE-0027 | https://github.com/KolbySisk/next-supabase-stripe-starter | agent_authority, provenance_rights, runtime_deployment, verification_eval, workflow_behavior |
| 2 | Accounting Firms | P7-CLOSE-0031 | https://github.com/MLGroupJLU/LLM-eval-survey | data_model, economics_maintenance, integration_surface, runtime_deployment, ui_assembly |
| 3 | Accounting Firms | P7-CLOSE-0039 | https://github.com/Natnael243/Eastafrica | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 4 | Accounting Firms | P7-CLOSE-0043 | https://github.com/PleasePrompto/notebooklm-skill | data_model, demand_atom_fit, economics_maintenance, integration_surface, provenance_rights |
| 5 | Accounting Firms | P7-CLOSE-0046 | https://github.com/Rishabh42/HealthCare-Insurance-Ethereum | demand_atom_fit, integration_surface, ui_assembly, verification_eval, workflow_behavior |
| 6 | Accounting Firms | P7-CLOSE-0142 | https://github.com/mirza1272/Multi-Branch-Recruitment-and-Applicant-Tracking-System | agent_authority, integration_surface, ui_assembly, verification_eval, workflow_behavior |
| 7 | Accounting Firms | P7-CLOSE-0148 | https://github.com/nl-hugo/hypotheek-calculator | agent_authority, integration_surface, ui_assembly, verification_eval, workflow_behavior |
| 8 | Accounting Firms | P7-CLOSE-0151 | https://github.com/omricn/kdesk | data_model, economics_maintenance, provenance_rights, ui_assembly, verification_eval |
| 9 | Accounting Firms | P7-CLOSE-0157 | https://github.com/ossf/cve-bin-tool | agent_authority, economics_maintenance, integration_surface, runtime_deployment, workflow_behavior |
| 10 | Accounting Firms | P7-CLOSE-0158 | https://github.com/owasp-dep-scan/dep-scan | agent_authority, data_model, integration_surface, runtime_deployment, workflow_behavior |
| 11 | Construction | P7-CLOSE-0372 | https://github.com/samkomane008/zenit-global-interlink | data_model, demand_atom_fit, provenance_rights, verification_eval |
| 12 | Construction | P7-CLOSE-0379 | https://github.com/techinz/browsers-benchmark | economics_maintenance, integration_surface, runtime_deployment, ui_assembly |
| 13 | Construction | P7-CLOSE-0395 | https://github.com/yzhao062/pyod | data_model, demand_atom_fit, provenance_rights, verification_eval |
| 14 | Construction | P7-CLOSE-0231 | https://github.com/MLGroupJLU/LLM-eval-survey | data_model, economics_maintenance, integration_surface, runtime_deployment, ui_assembly |
| 15 | Construction | P7-CLOSE-0242 | https://github.com/PleasePrompto/notebooklm-skill | data_model, demand_atom_fit, economics_maintenance, integration_surface, provenance_rights |
| 16 | Construction | P7-CLOSE-0244 | https://github.com/Rishabh42/HealthCare-Insurance-Ethereum | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 17 | Construction | P7-CLOSE-0246 | https://github.com/SkyCascade/SkyLearn | integration_surface, runtime_deployment, ui_assembly, verification_eval, workflow_behavior |
| 18 | Construction | P7-CLOSE-0318 | https://github.com/inzihashmi20/it-helpdesk-ticketing-system | data_model, economics_maintenance, provenance_rights, runtime_deployment, verification_eval |
| 19 | Construction | P7-CLOSE-0324 | https://github.com/kartikbansalx/LegalVault-Legal-Document-Management-System | agent_authority, demand_atom_fit, provenance_rights, ui_assembly, verification_eval |
| 20 | Construction | P7-CLOSE-0332 | https://github.com/mdalmamunit427/ecommerce-inventory | data_model, provenance_rights, ui_assembly, verification_eval, workflow_behavior |
| 21 | Course Creators | P7-CLOSE-0438 | https://github.com/OrchardCMS/OrchardCore | data_model, demand_atom_fit, integration_surface, provenance_rights, workflow_behavior |
| 22 | Course Creators | P7-CLOSE-0442 | https://github.com/Rishabh42/HealthCare-Insurance-Ethereum | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 23 | Course Creators | P7-CLOSE-0534 | https://github.com/mickasmt/next-saas-stripe-starter | agent_authority, demand_atom_fit, provenance_rights, verification_eval, workflow_behavior |
| 24 | Course Creators | P7-CLOSE-0537 | https://github.com/microsoft/fara | data_model, demand_atom_fit, provenance_rights, ui_assembly, workflow_behavior |
| 25 | Course Creators | P7-CLOSE-0547 | https://github.com/omricn/kdesk | data_model, economics_maintenance, provenance_rights, ui_assembly, verification_eval |
| 26 | Course Creators | P7-CLOSE-0554 | https://github.com/owasp-dep-scan/dep-scan | agent_authority, data_model, integration_surface, runtime_deployment, workflow_behavior |
| 27 | Course Creators | P7-CLOSE-0567 | https://github.com/redstreet/beancount_reds_importers | agent_authority, economics_maintenance, integration_surface, runtime_deployment, ui_assembly |
| 28 | Course Creators | P7-CLOSE-0574 | https://github.com/satnaing/shadcn-admin | agent_authority, integration_surface, provenance_rights, runtime_deployment, workflow_behavior |
| 29 | Course Creators | P7-CLOSE-0575 | https://github.com/segment-boneyard/nightmare | agent_authority, economics_maintenance, integration_surface, provenance_rights, runtime_deployment |
| 30 | Course Creators | P7-CLOSE-0596 | https://github.com/yzhao062/pyod | data_model, demand_atom_fit, integration_surface, provenance_rights, runtime_deployment |
| 31 | Ecommerce | P7-CLOSE-0638 | https://github.com/PleasePrompto/notebooklm-skill | data_model, demand_atom_fit, economics_maintenance, integration_surface, provenance_rights |
| 32 | Ecommerce | P7-CLOSE-0732 | https://github.com/microsoft/fara | data_model, demand_atom_fit, provenance_rights, ui_assembly, workflow_behavior |
| 33 | Ecommerce | P7-CLOSE-0739 | https://github.com/nl-hugo/hypotheek-calculator | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 34 | Ecommerce | P7-CLOSE-0747 | https://github.com/oroinc/crm-application | agent_authority, data_model, demand_atom_fit, integration_surface, ui_assembly |
| 35 | Ecommerce | P7-CLOSE-0748 | https://github.com/ossf/cve-bin-tool | agent_authority, economics_maintenance, integration_surface, runtime_deployment, workflow_behavior |
| 36 | Ecommerce | P7-CLOSE-0754 | https://github.com/pupilfirst/pupilfirst | agent_authority, data_model, demand_atom_fit, integration_surface, workflow_behavior |
| 37 | Ecommerce | P7-CLOSE-0761 | https://github.com/redstreet/beancount_reds_importers | agent_authority, economics_maintenance, integration_surface, runtime_deployment, ui_assembly |
| 38 | Ecommerce | P7-CLOSE-0769 | https://github.com/segment-boneyard/nightmare | data_model, economics_maintenance, integration_surface, provenance_rights, runtime_deployment |
| 39 | Ecommerce | P7-CLOSE-0773 | https://github.com/storybookjs/storybook | demand_atom_fit, economics_maintenance, integration_surface, runtime_deployment, workflow_behavior |
| 40 | Ecommerce | P7-CLOSE-0782 | https://github.com/uswds/uswds | agent_authority, demand_atom_fit, economics_maintenance, runtime_deployment, workflow_behavior |
| 41 | Education & Training | P7-CLOSE-0829 | https://github.com/Natnael243/Eastafrica | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 42 | Education & Training | P7-CLOSE-0832 | https://github.com/OrchardCMS/OrchardCore | data_model, demand_atom_fit, integration_surface, provenance_rights, workflow_behavior |
| 43 | Education & Training | P7-CLOSE-0833 | https://github.com/PleasePrompto/notebooklm-skill | data_model, demand_atom_fit, economics_maintenance, integration_surface, provenance_rights |
| 44 | Education & Training | P7-CLOSE-0836 | https://github.com/Rishabh42/HealthCare-Insurance-Ethereum | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 45 | Education & Training | P7-CLOSE-0937 | https://github.com/nl-hugo/hypotheek-calculator | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 46 | Education & Training | P7-CLOSE-0940 | https://github.com/omricn/kdesk | data_model, economics_maintenance, provenance_rights, ui_assembly, verification_eval |
| 47 | Education & Training | P7-CLOSE-0945 | https://github.com/oroinc/crm-application | agent_authority, data_model, demand_atom_fit, integration_surface, ui_assembly |
| 48 | Education & Training | P7-CLOSE-0946 | https://github.com/ossf/cve-bin-tool | agent_authority, economics_maintenance, integration_surface, runtime_deployment, workflow_behavior |
| 49 | Education & Training | P7-CLOSE-0971 | https://github.com/techinz/browsers-benchmark | data_model, economics_maintenance, integration_surface, runtime_deployment, ui_assembly |
| 50 | Education & Training | P7-CLOSE-0973 | https://github.com/thoughtbot/administrate | agent_authority, economics_maintenance, provenance_rights, runtime_deployment, workflow_behavior |
| 51 | Healthcare & Medical Practices | P7-CLOSE-1182 | https://github.com/zarf-dev/zarf | agent_authority, demand_atom_fit, ui_assembly, workflow_behavior |
| 52 | Healthcare & Medical Practices | P7-CLOSE-1014 | https://github.com/KolbySisk/next-supabase-stripe-starter | agent_authority, provenance_rights, runtime_deployment, verification_eval, workflow_behavior |
| 53 | Healthcare & Medical Practices | P7-CLOSE-1015 | https://github.com/LMS-Laravel/LMS-Laravel | agent_authority, economics_maintenance, integration_surface, runtime_deployment, verification_eval |
| 54 | Healthcare & Medical Practices | P7-CLOSE-1025 | https://github.com/NanmiCoder/cc-haha | data_model, demand_atom_fit, economics_maintenance, integration_surface, provenance_rights |
| 55 | Healthcare & Medical Practices | P7-CLOSE-1026 | https://github.com/Natnael243/Eastafrica | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 56 | Healthcare & Medical Practices | P7-CLOSE-1027 | https://github.com/Natnael243/eastAfrica_Admin | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 57 | Healthcare & Medical Practices | P7-CLOSE-1030 | https://github.com/PleasePrompto/notebooklm-skill | data_model, demand_atom_fit, economics_maintenance, integration_surface, provenance_rights |
| 58 | Healthcare & Medical Practices | P7-CLOSE-1124 | https://github.com/microsoft/fara | data_model, demand_atom_fit, provenance_rights, ui_assembly, workflow_behavior |
| 59 | Healthcare & Medical Practices | P7-CLOSE-1134 | https://github.com/omricn/kdesk | data_model, economics_maintenance, provenance_rights, ui_assembly, verification_eval |
| 60 | Healthcare & Medical Practices | P7-CLOSE-1146 | https://github.com/pupilfirst/pupilfirst | agent_authority, data_model, demand_atom_fit, integration_surface, workflow_behavior |
| 61 | Hospitality | P7-CLOSE-1362 | https://github.com/thoughtbot/administrate | agent_authority, economics_maintenance, provenance_rights, runtime_deployment |
| 62 | Hospitality | P7-CLOSE-1373 | https://github.com/xerrors/Yuxi | data_model, demand_atom_fit, provenance_rights, workflow_behavior |
| 63 | Hospitality | P7-CLOSE-1378 | https://github.com/zarf-dev/zarf | agent_authority, demand_atom_fit, ui_assembly, workflow_behavior |
| 64 | Hospitality | P7-CLOSE-1208 | https://github.com/KolbySisk/next-supabase-stripe-starter | agent_authority, provenance_rights, runtime_deployment, verification_eval, workflow_behavior |
| 65 | Hospitality | P7-CLOSE-1209 | https://github.com/LMS-Laravel/LMS-Laravel | agent_authority, economics_maintenance, integration_surface, runtime_deployment, verification_eval |
| 66 | Hospitality | P7-CLOSE-1219 | https://github.com/Natnael243/Eastafrica | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 67 | Hospitality | P7-CLOSE-1220 | https://github.com/Natnael243/eastAfrica_Admin | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 68 | Hospitality | P7-CLOSE-1223 | https://github.com/PleasePrompto/notebooklm-skill | data_model, demand_atom_fit, economics_maintenance, integration_surface, provenance_rights |
| 69 | Hospitality | P7-CLOSE-1227 | https://github.com/Rishabh42/HealthCare-Insurance-Ethereum | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 70 | Hospitality | P7-CLOSE-1229 | https://github.com/SkyCascade/SkyLearn | agent_authority, integration_surface, runtime_deployment, ui_assembly, workflow_behavior |
| 71 | Insurance Agencies | P7-CLOSE-1571 | https://github.com/xerrors/Yuxi | demand_atom_fit, provenance_rights, verification_eval, workflow_behavior |
| 72 | Insurance Agencies | P7-CLOSE-1576 | https://github.com/zarf-dev/zarf | agent_authority, demand_atom_fit, ui_assembly, workflow_behavior |
| 73 | Insurance Agencies | P7-CLOSE-1402 | https://github.com/JHansiduYapa/Multi-Agent-System-for-Healthcare-Appointment-Booking | data_model, integration_surface, runtime_deployment, ui_assembly, verification_eval |
| 74 | Insurance Agencies | P7-CLOSE-1405 | https://github.com/KolbySisk/next-supabase-stripe-starter | agent_authority, provenance_rights, runtime_deployment, verification_eval, workflow_behavior |
| 75 | Insurance Agencies | P7-CLOSE-1417 | https://github.com/Natnael243/Eastafrica | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 76 | Insurance Agencies | P7-CLOSE-1418 | https://github.com/Natnael243/eastAfrica_Admin | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 77 | Insurance Agencies | P7-CLOSE-1421 | https://github.com/PleasePrompto/notebooklm-skill | data_model, demand_atom_fit, economics_maintenance, integration_surface, provenance_rights |
| 78 | Insurance Agencies | P7-CLOSE-1513 | https://github.com/mickasmt/next-saas-stripe-starter | agent_authority, demand_atom_fit, provenance_rights, verification_eval, workflow_behavior |
| 79 | Insurance Agencies | P7-CLOSE-1526 | https://github.com/omricn/kdesk | data_model, economics_maintenance, provenance_rights, ui_assembly, verification_eval |
| 80 | Insurance Agencies | P7-CLOSE-1538 | https://github.com/pupilfirst/pupilfirst | agent_authority, data_model, demand_atom_fit, integration_surface, workflow_behavior |
| 81 | IT Services & MSPs | P7-CLOSE-1752 | https://github.com/storybookjs/storybook | demand_atom_fit, economics_maintenance, runtime_deployment, workflow_behavior |
| 82 | IT Services & MSPs | P7-CLOSE-1753 | https://github.com/techinz/browsers-benchmark | economics_maintenance, integration_surface, runtime_deployment, ui_assembly |
| 83 | IT Services & MSPs | P7-CLOSE-1761 | https://github.com/uswds/uswds | agent_authority, data_model, demand_atom_fit, economics_maintenance |
| 84 | IT Services & MSPs | P7-CLOSE-1770 | https://github.com/zarf-dev/zarf | agent_authority, demand_atom_fit, ui_assembly, workflow_behavior |
| 85 | IT Services & MSPs | P7-CLOSE-1616 | https://github.com/PleasePrompto/notebooklm-skill | data_model, demand_atom_fit, economics_maintenance, integration_surface, provenance_rights |
| 86 | IT Services & MSPs | P7-CLOSE-1622 | https://github.com/SkyCascade/SkyLearn | agent_authority, integration_surface, runtime_deployment, ui_assembly, workflow_behavior |
| 87 | IT Services & MSPs | P7-CLOSE-1706 | https://github.com/martaldsantos/agentic-ai-hack | demand_atom_fit, integration_surface, provenance_rights, ui_assembly, workflow_behavior |
| 88 | IT Services & MSPs | P7-CLOSE-1708 | https://github.com/mdalmamunit427/ecommerce-inventory | data_model, provenance_rights, ui_assembly, verification_eval, workflow_behavior |
| 89 | IT Services & MSPs | P7-CLOSE-1725 | https://github.com/openclarity/openclarity | agent_authority, data_model, demand_atom_fit, ui_assembly, workflow_behavior |
| 90 | IT Services & MSPs | P7-CLOSE-1743 | https://github.com/rh-aiservices-bu/insurance-claim-processing | agent_authority, integration_surface, provenance_rights, ui_assembly, workflow_behavior |
| 91 | Law Firms | P7-CLOSE-1793 | https://github.com/JHansiduYapa/Multi-Agent-System-for-Healthcare-Appointment-Booking | data_model, integration_surface, runtime_deployment, ui_assembly, verification_eval |
| 92 | Law Firms | P7-CLOSE-1797 | https://github.com/LMS-Laravel/LMS-Laravel | agent_authority, economics_maintenance, integration_surface, runtime_deployment, verification_eval |
| 93 | Law Firms | P7-CLOSE-1812 | https://github.com/OrchardCMS/OrchardCore | data_model, demand_atom_fit, integration_surface, provenance_rights, workflow_behavior |
| 94 | Law Firms | P7-CLOSE-1813 | https://github.com/PleasePrompto/notebooklm-skill | data_model, demand_atom_fit, economics_maintenance, integration_surface, provenance_rights |
| 95 | Law Firms | P7-CLOSE-1911 | https://github.com/mohsinkhan85090/Healthcare-Appointment-System | data_model, economics_maintenance, provenance_rights, runtime_deployment, verification_eval |
| 96 | Law Firms | P7-CLOSE-1919 | https://github.com/omricn/kdesk | data_model, economics_maintenance, provenance_rights, ui_assembly, verification_eval |
| 97 | Law Firms | P7-CLOSE-1925 | https://github.com/ossf/cve-bin-tool | agent_authority, economics_maintenance, integration_surface, runtime_deployment, workflow_behavior |
| 98 | Law Firms | P7-CLOSE-1936 | https://github.com/rajveersidhu/IT-Helpdesk-Ticketing-System | agent_authority, data_model, provenance_rights, runtime_deployment, verification_eval |
| 99 | Law Firms | P7-CLOSE-1947 | https://github.com/segment-boneyard/nightmare | economics_maintenance, integration_surface, provenance_rights, runtime_deployment, ui_assembly |
| 100 | Law Firms | P7-CLOSE-1957 | https://github.com/trailheadapps/redwoods-insurance | demand_atom_fit, runtime_deployment, ui_assembly, verification_eval, workflow_behavior |
| 101 | Logistics & Freight | P7-CLOSE-2122 | https://github.com/ossf/cve-bin-tool | agent_authority, economics_maintenance, integration_surface, runtime_deployment, workflow_behavior |
| 102 | Logistics & Freight | P7-CLOSE-2134 | https://github.com/rh-aiservices-bu/insurance-claim-processing | agent_authority, integration_surface, provenance_rights, ui_assembly, workflow_behavior |
| 103 | Logistics & Freight | P7-CLOSE-2143 | https://github.com/storybookjs/storybook | demand_atom_fit, economics_maintenance, integration_surface, runtime_deployment, workflow_behavior |
| 104 | Logistics & Freight | P7-CLOSE-2146 | https://github.com/thoughtbot/administrate | agent_authority, economics_maintenance, integration_surface, runtime_deployment, workflow_behavior |
| 105 | Logistics & Freight | P7-CLOSE-2088 | https://github.com/inzihashmi20/it-helpdesk-ticketing-system | data_model, economics_maintenance, provenance_rights, runtime_deployment, ui_assembly, verification_eval |
| 106 | Logistics & Freight | P7-CLOSE-2090 | https://github.com/jdan/98.css | agent_authority, data_model, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 107 | Logistics & Freight | P7-CLOSE-2094 | https://github.com/kartikbansalx/LegalVault-Legal-Document-Management-System | agent_authority, data_model, demand_atom_fit, runtime_deployment, ui_assembly, verification_eval |
| 108 | Logistics & Freight | P7-CLOSE-2100 | https://github.com/martaldsantos/agentic-ai-hack | data_model, demand_atom_fit, integration_surface, provenance_rights, ui_assembly, workflow_behavior |
| 109 | Logistics & Freight | P7-CLOSE-2101 | https://github.com/max-sixty/worktrunk | data_model, demand_atom_fit, economics_maintenance, integration_surface, provenance_rights, workflow_behavior |
| 110 | Logistics & Freight | P7-CLOSE-2118 | https://github.com/openai/openai-agents-python | data_model, demand_atom_fit, economics_maintenance, integration_surface, provenance_rights, ui_assembly |
| 111 | Marketing & Social Media Agencies | P7-CLOSE-2354 | https://github.com/xerrors/Yuxi | demand_atom_fit, provenance_rights, verification_eval, workflow_behavior |
| 112 | Marketing & Social Media Agencies | P7-CLOSE-2195 | https://github.com/Mirantis/cri-dockerd | agent_authority, data_model, demand_atom_fit, economics_maintenance, integration_surface |
| 113 | Marketing & Social Media Agencies | P7-CLOSE-2203 | https://github.com/PleasePrompto/notebooklm-skill | data_model, demand_atom_fit, economics_maintenance, integration_surface, provenance_rights |
| 114 | Marketing & Social Media Agencies | P7-CLOSE-2298 | https://github.com/mirza1272/Multi-Branch-Recruitment-and-Applicant-Tracking-System | agent_authority, runtime_deployment, ui_assembly, verification_eval, workflow_behavior |
| 115 | Marketing & Social Media Agencies | P7-CLOSE-2310 | https://github.com/openclarity/openclarity | agent_authority, data_model, demand_atom_fit, ui_assembly, workflow_behavior |
| 116 | Marketing & Social Media Agencies | P7-CLOSE-2317 | https://github.com/prolinkinfo/RealEstateCRM | demand_atom_fit, provenance_rights, runtime_deployment, ui_assembly, verification_eval |
| 117 | Marketing & Social Media Agencies | P7-CLOSE-2329 | https://github.com/risuunava/helpdesk-system-web | demand_atom_fit, economics_maintenance, provenance_rights, runtime_deployment, workflow_behavior |
| 118 | Marketing & Social Media Agencies | P7-CLOSE-2333 | https://github.com/satnaing/shadcn-admin | economics_maintenance, provenance_rights, runtime_deployment, verification_eval, workflow_behavior |
| 119 | Marketing & Social Media Agencies | P7-CLOSE-2345 | https://github.com/tjunlp-lab/Awesome-LLMs-Evaluation-Papers | data_model, economics_maintenance, integration_surface, provenance_rights, ui_assembly |
| 120 | Marketing & Social Media Agencies | P7-CLOSE-2349 | https://github.com/uswds/uswds | agent_authority, demand_atom_fit, economics_maintenance, verification_eval, workflow_behavior |
| 121 | Mortgage Brokers | P7-CLOSE-2401 | https://github.com/PleasePrompto/notebooklm-skill | data_model, demand_atom_fit, economics_maintenance, integration_surface, provenance_rights |
| 122 | Mortgage Brokers | P7-CLOSE-2404 | https://github.com/Rishabh42/HealthCare-Insurance-Ethereum | demand_atom_fit, integration_surface, ui_assembly, verification_eval, workflow_behavior |
| 123 | Mortgage Brokers | P7-CLOSE-2406 | https://github.com/SkyCascade/SkyLearn | agent_authority, integration_surface, runtime_deployment, ui_assembly, workflow_behavior |
| 124 | Mortgage Brokers | P7-CLOSE-2494 | https://github.com/mickasmt/next-saas-stripe-starter | agent_authority, data_model, demand_atom_fit, provenance_rights, workflow_behavior |
| 125 | Mortgage Brokers | P7-CLOSE-2497 | https://github.com/microsoft/fara | data_model, demand_atom_fit, provenance_rights, ui_assembly, workflow_behavior |
| 126 | Mortgage Brokers | P7-CLOSE-2499 | https://github.com/mohsinkhan85090/Healthcare-Appointment-System | data_model, economics_maintenance, provenance_rights, runtime_deployment, verification_eval |
| 127 | Mortgage Brokers | P7-CLOSE-2507 | https://github.com/omricn/kdesk | data_model, economics_maintenance, provenance_rights, ui_assembly, verification_eval |
| 128 | Mortgage Brokers | P7-CLOSE-2513 | https://github.com/ossf/cve-bin-tool | agent_authority, data_model, economics_maintenance, runtime_deployment, workflow_behavior |
| 129 | Mortgage Brokers | P7-CLOSE-2519 | https://github.com/pupilfirst/pupilfirst | agent_authority, data_model, demand_atom_fit, integration_surface, workflow_behavior |
| 130 | Mortgage Brokers | P7-CLOSE-2532 | https://github.com/satnaing/shadcn-admin | agent_authority, economics_maintenance, provenance_rights, runtime_deployment, workflow_behavior |
| 131 | Property Management | P7-CLOSE-2755 | https://github.com/yzhao062/pyod | data_model, demand_atom_fit, provenance_rights, verification_eval |
| 132 | Property Management | P7-CLOSE-2580 | https://github.com/JHansiduYapa/Multi-Agent-System-for-Healthcare-Appointment-Booking | data_model, integration_surface, runtime_deployment, ui_assembly, verification_eval |
| 133 | Property Management | P7-CLOSE-2583 | https://github.com/KolbySisk/next-supabase-stripe-starter | agent_authority, provenance_rights, runtime_deployment, verification_eval, workflow_behavior |
| 134 | Property Management | P7-CLOSE-2584 | https://github.com/LMS-Laravel/LMS-Laravel | agent_authority, economics_maintenance, integration_surface, runtime_deployment, verification_eval |
| 135 | Property Management | P7-CLOSE-2602 | https://github.com/Rishabh42/HealthCare-Insurance-Ethereum | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 136 | Property Management | P7-CLOSE-2693 | https://github.com/mickasmt/next-saas-stripe-starter | agent_authority, data_model, demand_atom_fit, provenance_rights, workflow_behavior |
| 137 | Property Management | P7-CLOSE-2696 | https://github.com/microsoft/fara | data_model, demand_atom_fit, provenance_rights, ui_assembly, workflow_behavior |
| 138 | Property Management | P7-CLOSE-2705 | https://github.com/okoroaforkingsley30s/obech-flow-logistics | agent_authority, data_model, provenance_rights, ui_assembly, verification_eval |
| 139 | Property Management | P7-CLOSE-2706 | https://github.com/omricn/kdesk | data_model, economics_maintenance, provenance_rights, ui_assembly, verification_eval |
| 140 | Property Management | P7-CLOSE-2712 | https://github.com/ossf/cve-bin-tool | agent_authority, economics_maintenance, integration_surface, runtime_deployment, workflow_behavior |
| 141 | Real Estate | P7-CLOSE-2953 | https://github.com/xerrors/Yuxi | demand_atom_fit, provenance_rights, verification_eval, workflow_behavior |
| 142 | Real Estate | P7-CLOSE-2958 | https://github.com/zarf-dev/zarf | agent_authority, demand_atom_fit, ui_assembly, workflow_behavior |
| 143 | Real Estate | P7-CLOSE-2780 | https://github.com/JHansiduYapa/Multi-Agent-System-for-Healthcare-Appointment-Booking | data_model, integration_surface, runtime_deployment, ui_assembly, verification_eval |
| 144 | Real Estate | P7-CLOSE-2783 | https://github.com/KolbySisk/next-supabase-stripe-starter | agent_authority, provenance_rights, runtime_deployment, verification_eval, workflow_behavior |
| 145 | Real Estate | P7-CLOSE-2795 | https://github.com/Natnael243/Eastafrica | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 146 | Real Estate | P7-CLOSE-2796 | https://github.com/Natnael243/eastAfrica_Admin | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 147 | Real Estate | P7-CLOSE-2799 | https://github.com/PleasePrompto/notebooklm-skill | data_model, demand_atom_fit, economics_maintenance, integration_surface, provenance_rights |
| 148 | Real Estate | P7-CLOSE-2803 | https://github.com/Rishabh42/HealthCare-Insurance-Ethereum | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 149 | Real Estate | P7-CLOSE-2805 | https://github.com/SkyCascade/SkyLearn | agent_authority, integration_surface, runtime_deployment, ui_assembly, workflow_behavior |
| 150 | Real Estate | P7-CLOSE-2899 | https://github.com/mohsinkhan85090/Healthcare-Appointment-System | data_model, economics_maintenance, provenance_rights, runtime_deployment, verification_eval |
| 151 | Recruiting & Staffing | P7-CLOSE-2983 | https://github.com/KolbySisk/next-supabase-stripe-starter | agent_authority, provenance_rights, runtime_deployment, verification_eval, workflow_behavior |
| 152 | Recruiting & Staffing | P7-CLOSE-2984 | https://github.com/LMS-Laravel/LMS-Laravel | agent_authority, economics_maintenance, integration_surface, runtime_deployment, verification_eval |
| 153 | Recruiting & Staffing | P7-CLOSE-2994 | https://github.com/Natnael243/Eastafrica | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 154 | Recruiting & Staffing | P7-CLOSE-2995 | https://github.com/Natnael243/eastAfrica_Admin | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 155 | Recruiting & Staffing | P7-CLOSE-2997 | https://github.com/OrchardCMS/OrchardCore | data_model, demand_atom_fit, integration_surface, provenance_rights, workflow_behavior |
| 156 | Recruiting & Staffing | P7-CLOSE-3001 | https://github.com/Rishabh42/HealthCare-Insurance-Ethereum | agent_authority, demand_atom_fit, ui_assembly, verification_eval, workflow_behavior |
| 157 | Recruiting & Staffing | P7-CLOSE-3101 | https://github.com/omricn/kdesk | data_model, economics_maintenance, provenance_rights, ui_assembly, verification_eval |
| 158 | Recruiting & Staffing | P7-CLOSE-3107 | https://github.com/ossf/cve-bin-tool | agent_authority, data_model, economics_maintenance, integration_surface, workflow_behavior |
| 159 | Recruiting & Staffing | P7-CLOSE-3121 | https://github.com/redstreet/beancount_reds_importers | agent_authority, economics_maintenance, integration_surface, runtime_deployment, ui_assembly |
| 160 | Recruiting & Staffing | P7-CLOSE-3124 | https://github.com/risuunava/helpdesk-system-web | data_model, economics_maintenance, provenance_rights, runtime_deployment, workflow_behavior |
| 161 | SaaS | P7-CLOSE-3345 | https://github.com/yzhao062/pyod | data_model, demand_atom_fit, integration_surface, provenance_rights |
| 162 | SaaS | P7-CLOSE-3346 | https://github.com/zarf-dev/zarf | agent_authority, demand_atom_fit, ui_assembly, workflow_behavior |
| 163 | SaaS | P7-CLOSE-3191 | https://github.com/PleasePrompto/notebooklm-skill | data_model, demand_atom_fit, economics_maintenance, integration_surface, provenance_rights |
| 164 | SaaS | P7-CLOSE-3282 | https://github.com/mdalmamunit427/ecommerce-inventory | data_model, provenance_rights, ui_assembly, verification_eval, workflow_behavior |
| 165 | SaaS | P7-CLOSE-3290 | https://github.com/nanobrowser/nanobrowser | data_model, demand_atom_fit, integration_surface, provenance_rights, verification_eval |
| 166 | SaaS | P7-CLOSE-3318 | https://github.com/rh-aiservices-bu/insurance-claim-processing | agent_authority, integration_surface, provenance_rights, ui_assembly, verification_eval |
| 167 | SaaS | P7-CLOSE-3332 | https://github.com/tjunlp-lab/Awesome-LLMs-Evaluation-Papers | data_model, economics_maintenance, integration_surface, provenance_rights, ui_assembly |
| 168 | SaaS | P7-CLOSE-3336 | https://github.com/uswds/uswds | agent_authority, demand_atom_fit, economics_maintenance, runtime_deployment, verification_eval |
| 169 | SaaS | P7-CLOSE-3196 | https://github.com/SkyCascade/SkyLearn | agent_authority, economics_maintenance, integration_surface, runtime_deployment, ui_assembly, workflow_behavior |
| 170 | SaaS | P7-CLOSE-3268 | https://github.com/inzihashmi20/it-helpdesk-ticketing-system | data_model, economics_maintenance, provenance_rights, runtime_deployment, ui_assembly, verification_eval |

## Evidence, rights, and next gates

Direct claims in inherited rows establish only that a repository-specific source record exists in the closure queue; inferred claims retain the queue observation and remain non-fresh. Missing-dimension rows contain no direct or inferred capability claim. Every row preserves the Block Contract fields as U, with falsifier and smallest next read-only gate. Rights remain unresolved: declared repository license signals, when present, are not legal clearance; file-level notices, contributor provenance, dependency/SBOM, support, maintenance, portability, rollback, and OEM/commercial terms remain unknown unless separately proven.

The smallest next read-only gate is a permitted first-party page/API/README/tree/path review for the exact missing dimension, followed by explicit rights/SBOM review only under a later authorized gate. No source checkout or execution is implied.

## Boundary and preservation

Every ledger and receipt record carries research_only=true, execution_status=UNEXECUTED, admission_status=NOT_ADMITTED, admitted_blocks=0, implementation_authorized=false, authenticated_behavior=U, and parent_goal_status=active. The lane state records preserved hashes for prior waves, closure queue, coverage audit, dispatch receipt, W7 coordinator receipt, W8 corpus selection, and shared phase state. The shared phase state and coordinator files were not modified. No overall completion claim.

## Verification

Post-write smoke is smoke-dimension-evidence-wave-8.mjs; run with PYTHONDONTWRITEBYTECODE=1. It checks structural JSONL parsing, exact pair/dimension counters, corpus identity/source parity, the 1,030-ID exclusion union, inherited/unknown labels, rights/SBOM unknowns, dates, links, boundary fields, preserved hashes, and output boundary. Callback status: sent_and_verified after fresh CENA pane resolution, pane readback, sleep 2, and recent readback confirmation.

