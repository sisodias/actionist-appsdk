#!/usr/bin/env node

import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..', '..');
const outDir = resolve(root, 'research', 'base-portfolio-2026-08-27');

const F = (id, group, slug, name, criterion, anchors = [], evidence = []) => ({
  id, group, slug, name, inclusion_criterion: criterion, anchors, evidence_basis: evidence,
  coverage_status: anchors.length >= 2 ? 'seeded_not_qualified' : 'thin_or_missing'
});

const families = [
  F('U01','horizontal_product','crm-pipeline','CRM and revenue pipeline','Accounts, contacts, opportunities and stage ownership form the durable product state.',['twentyhq/twenty','SuiteCRM/SuiteCRM','frappe/crm'],['P03','66-use-cases']),
  F('U02','horizontal_product','case-workflow-product','Case and workflow product','Cases have configurable states, parties, deadlines, evidence and human authority—not merely tasks.',['open-formulieren/open-forms','ArkCase/arkcase-ce'],['P03','17-industries']),
  F('U03','horizontal_product','external-client-portal','External client portal','Untrusted external identities can see scoped records, submit requests and track their own history.',['open-formulieren/open-forms','nextcloud/server'],['P03-corrected','17-industries']),
  F('U04','horizontal_product','project-work-management','Project and work management','Projects, tasks, dependencies, milestones and workload are first-class durable state.',['makeplane/plane','opf/openproject','kanboard/kanboard'],['P03']),
  F('U05','horizontal_product','collaborative-workspace','Collaborative workspace (Notion-like)','Documents and structured databases/views coexist in one collaborative workspace.',['AppFlowy-IO/AppFlowy','toeverything/AFFiNE','anyproto/anytype-ts'],['P03','operator-correction']),
  F('U06','horizontal_product','knowledge-wiki','Knowledge base and wiki','Authored, versioned, searchable knowledge with audience and review state.',['BookStackApp/BookStack','docmost/docmost','requarks/wiki'],['P03']),
  F('U07','horizontal_product','support-service-desk','Customer support desk','Tickets, channels, SLA clocks, ownership, replies and customer history form the product.',['chatwoot/chatwoot','zammad/zammad','freescout-help-desk/freescout'],['P03']),
  F('U08','horizontal_product','shared-inbox','Shared inbox and email operations','Conversations, assignment, collision control, queues and reply state are independent of general ticketing.',['chatwoot/chatwoot','freescout-help-desk/freescout'],['66-use-cases']),
  F('U09','horizontal_product','scheduling-booking','Scheduling and booking','Availability, resources, booking rules, attendees and cancellation state are first-class.',['calcom/cal.com','alextselegidis/easyappointments','thunderbird/appointment'],['P03','66-use-cases']),
  F('U10','horizontal_product','events-ticketing','Events, registration and ticketing','Events, sessions, capacity, tickets, check-in and attendee communication form a lifecycle.',['pretix/pretix','alfio-event/alf.io','eventschedule/eventschedule'],['66-use-cases','live-github']),
  F('U11','horizontal_product','forms-surveys','Forms, surveys and intake','Schema, conditional questions, submissions, review and response analytics form the product.',['formbricks/formbricks','heyform/heyform','LimeSurvey/LimeSurvey'],['P03']),
  F('U12','horizontal_product','document-management','Document management system','Capture, indexing, versions, retention, permissions and filing state exceed raw file storage.',['paperless-ngx/paperless-ngx','mayan-edms/Mayan-EDMS','eikek/docspell'],['P03','66-use-cases']),
  F('U13','horizontal_product','esign-workflow','E-signature workflow','Signer identity, routing, consent, evidence and audit—not only cryptographic signing—form the product.',['documenso/documenso','docusealco/docuseal','OpenSignLabs/OpenSign'],['P03-corrected']),
  F('U14','horizontal_product','contract-lifecycle','Contract lifecycle management','Counterparties, clauses, versions, approval, obligation and renewal state are first-class.',['Open-Source-Legal/OpenContracts','documenso/documenso'],['66-use-cases','template-sweep']),
  F('U15','horizontal_product','proposal-cpq','Proposal, quote and CPQ','Products, pricing rules, quote versions, approvals and acceptance form a distinct revenue lifecycle.',['frappe/erpnext','odoo/odoo'],['72-ideas','17-industries']),
  F('U16','horizontal_product','subscription-billing','Subscription and usage billing','Plans, meters, invoices, credits, dunning and subscription lifecycle form the product.',['getlago/lago','killbill/killbill','openmeterio/openmeter'],['P03','66-use-cases']),
  F('U17','horizontal_product','accounting-ledger','Accounting and general ledger','Journal authority, chart of accounts, reconciliation, close and reporting form a governed system.',['bigcapitalhq/bigcapital','akaunting/akaunting','frappe/erpnext'],['P03','66-use-cases']),
  F('U18','horizontal_product','expense-management','Expense and receipt management','Spend requests, receipts, policy, approval, reimbursement and audit form a lifecycle.',['midday-ai/midday','firefly-iii/firefly-iii'],['66-use-cases','template-sweep']),
  F('U19','horizontal_product','inventory-warehouse','Inventory and warehouse management','Stock identity, locations, movements, reservations, counts and replenishment form durable authority.',['inventree/InvenTree','openboxes/openboxes','frappe/erpnext'],['P03']),
  F('U20','horizontal_product','commerce-order-management','Commerce and order management','Catalogue, cart, order, fulfilment, returns and customer state form the product.',['saleor/saleor','medusajs/medusa','bagisto/bagisto'],['P03','72-ideas']),
  F('U21','horizontal_product','procurement-vendors','Procurement and vendor management','Requisitions, suppliers, bids, purchase orders, receipts and approvals form a lifecycle.',['frappe/erpnext','odoo/odoo'],['17-industries','72-ideas']),
  F('U22','horizontal_product','hris-people-ops','HRIS and people operations','Worker records, organization, leave, payroll inputs, policy and lifecycle authority form the product.',['frappe/hrms','orangehrm/orangehrm','ever-co/ever-gauzy'],['P03','template-sweep']),
  F('U23','horizontal_product','ats-recruiting','Applicant tracking and recruiting','Roles, candidates, applications, stages, interviews, feedback and offers form a distinct lifecycle.',['opencats/OpenCATS','frappe/hrms'],['17-industries','template-sweep']),
  F('U24','horizontal_product','employee-lifecycle','Employee onboarding and offboarding','Provisioning checklists, documents, access handoffs and completion evidence span systems.',['frappe/hrms'],['66-use-cases']),
  F('U25','horizontal_product','learning-management','Learning management and course delivery','Courses, cohorts, enrollment, progress, assessment and credentials form the product.',['moodle/moodle','frappe/lms','oppia/oppia'],['P03','17-industries']),
  F('U26','horizontal_product','marketing-automation','Marketing automation','Contacts, segments, campaigns, journeys, lead scoring and attribution form the product.',['mautic/mautic','dittofeed/dittofeed'],['P03','72-ideas']),
  F('U27','horizontal_product','social-media-operations','Social media planning and publishing','Brands, channels, content calendar, approval, publishing and engagement state form the product.',['gitroomhq/postiz-app','inovector/mixpost','brightbeanxyz/brightbean-studio'],['66-use-cases','live-github']),
  F('U28','horizontal_product','newsletter-publishing','Newsletter and audience publishing','Subscribers, segments, editions, delivery and engagement form the product.',['knadh/listmonk','TryGhost/Ghost'],['66-use-cases','72-ideas']),
  F('U29','horizontal_product','community-membership','Community and membership','Members, roles, spaces, discussions, moderation and paid access form the product.',['discourse/discourse','NodeBB/NodeBB','forem/forem'],['72-ideas']),
  F('U30','horizontal_product','customer-success','Customer success and account health','Accounts, onboarding, health signals, renewals, playbooks and outcomes form a post-sale lifecycle.',['twentyhq/twenty'],['66-use-cases']),
  F('U31','horizontal_product','feedback-roadmap','Customer feedback and product roadmap','Feedback, voters, themes, prioritization, roadmap and release loop form the product.',['getfider/fider','logchimp/logchimp','makeplane/plane'],['66-use-cases']),
  F('U32','horizontal_product','website-cms-builder','Website, CMS and site builder','Pages, navigation, content models, publishing, themes and domains form a managed product surface.',['WordPress/wordpress-develop','strapi/strapi','payloadcms/payload'],['72-ideas','P03']),
  F('U33','horizontal_product','data-admin-platform','Data and internal admin platform','Typed records, relations, views, permissions and internal CRUD workflows form a general substrate.',['Budibase/budibase','ToolJet/ToolJet','teableio/teable'],['P03']),
  F('U34','horizontal_product','itsm-cmdb','ITSM, service catalogue and CMDB','Incidents, requests, changes, problems, services, configuration items and SLAs form an ITIL lifecycle.',['glpi-project/glpi','RotherOSS/otobo','edmozley/freeitsm'],['17-industries','live-github']),
  F('U35','horizontal_product','asset-cmms','Asset, maintenance and CMMS','Assets, custody, work orders, inspections, maintenance plans and history form the product.',['snipe/snipe-it','SuperCMMS/Open-Source-CMMS','Shelf-nu/shelf.nu'],['66-use-cases','17-industries']),
  F('U36','horizontal_product','observability-incident','Observability, incident and on-call','Signals, alerts, incidents, responders, runbooks, status and postmortems form an operational lifecycle.',['OneUptime/oneuptime','grafana/oncall','netdata/netdata'],['66-use-cases','Sprint-1-P14']),
  F('U37','horizontal_product','voice-contact-center','Voice, contact centre and AI receptionist','Numbers, queues, calls, routing, recordings, dispositions and handoff state form the product.',['fonoster/fonoster','wazo-platform/wazo-platform','ictinnovations/ictcore'],['66-use-cases','72-ideas']),
  F('U38','horizontal_product','digital-asset-media','Digital asset and media production management','Media identity, metadata, renditions, approvals, rights notes and distribution form the product.',['pimcore/pimcore','ResourceSpace/ResourceSpace','phraseanet/phraseanet'],['72-ideas']),

  F('U39','shared_capability','identity-authorization','Identity, tenancy and authorization','Authentication, sessions, organizations, roles and policy are supplied through a host-owned authority boundary.',['keycloak/keycloak','better-auth/better-auth','ory/kratos'],['P03','Sprint-2-P04']),
  F('U40','shared_capability','relational-data','Relational data capability','Owned transactional data binds through typed resources while preserving one migration owner.',['supabase/supabase','appwrite/appwrite','pocketbase/pocketbase'],['P03','master-synthesis']),
  F('U41','shared_capability','object-file-storage','Object and file storage capability','Files, metadata, access, versions and retention bind without forcing a document product.',['minio/minio','owncloud/ocis'],['P03']),
  F('U42','shared_capability','search-retrieval','Search and retrieval engine','Indexing, filtering, ranking and retrieval are supplied behind a typed search port.',['meilisearch/meilisearch','opensearch-project/OpenSearch','typesense/typesense'],['P03']),
  F('U43','shared_capability','notifications-delivery','Notification delivery','Templates, preferences, routing, delivery and receipts are reusable beneath multiple products.',['novuhq/novu','knadh/listmonk'],['P03']),
  F('U44','shared_capability','payments','Payments and money movement','Payment intents, methods, settlement events, refunds and disputes stay behind explicit financial authority.',['juspay/hyperswitch','solidusio/solidus'],['P03']),
  F('U45','shared_capability','connector-catalogue','Connector and OAuth catalogue','Provider schemas, credentials, actions and triggers are reusable while tenant connection ownership remains host-owned.',['activepieces/activepieces','nangoHQ/nango','openintegrationhub/openintegrationhub'],['P03','connector-spike']),
  F('U46','shared_capability','workflow-engine','Workflow, rules and orchestration engine','State machines, timers, jobs and human tasks are reusable beneath product-specific surfaces.',['flowable/flowable-engine','kestra-io/kestra','temporalio/temporal'],['P03-corrected','Sprint-2-P04']),
  F('U47','shared_capability','analytics-bi','Analytics and BI engine','Semantic models, queries, dashboards and embedded visualisation bind beneath products.',['apache/superset','metabase/metabase','cube-js/cube'],['P03']),
  F('U48','shared_capability','document-generation','Document and PDF generation','Templates, merge data, rendering and immutable output receipts form a reusable capability.',['CarboneIO/carbone','gotenberg/gotenberg','bpampuch/pdfmake'],['66-use-cases']),
  F('U49','shared_capability','ocr-extraction','OCR and document extraction','Capture, OCR, layout parsing, structured extraction and provenance form a reusable pipeline.',['Unstructured-IO/unstructured','PaddlePaddle/PaddleOCR','docling-project/docling'],['66-use-cases']),
  F('U50','shared_capability','realtime-communications','Realtime chat and collaboration','Channels, presence, messages, threads and delivery state can bind beneath several products.',['zulip/zulip','mattermost/mattermost','RocketChat/Rocket.Chat'],['P03']),
  F('U51','shared_capability','maps-routing','Maps, geospatial and routing','Places, geometries, routes, travel time and geospatial views form a shared capability for field products.',['project-osrm/osrm-backend','valhalla/valhalla','maplibre/maplibre-gl-js'],['17-industries']),
  F('U52','shared_capability','rpa-browser-automation','RPA and browser automation','Observed UI workflows, credentials, retries and audit receipts provide a fallback where APIs are absent.',['Skyvern-AI/skyvern','browser-use/browser-use','aisingapore/TagUI'],['66-use-cases','live-github']),
  F('U53','shared_capability','ai-assistant-rag','AI assistant and grounded retrieval','Model routing, retrieval, citations, tool bounds and conversation state form a reusable host capability.',['open-webui/open-webui','langgenius/dify','FlowiseAI/Flowise'],['66-use-cases']),

  F('U54','vertical_operating_system','accounting-practice','Accounting practice operations','Clients, engagements, close checklists, evidence requests, reconciliation and partner review are linked.',['frappe/erpnext','bigcapitalhq/bigcapital'],['17-industries']),
  F('U55','vertical_operating_system','construction-operations','Construction operations','Jobs, schedules, RFIs, change orders, subcontractors, progress claims and site evidence form the core.',['opf/openproject'],['17-industries']),
  F('U56','vertical_operating_system','healthcare-practice','Healthcare practice management','Patients, appointments, encounters, clinical records, billing and consent form a governed system.',['openemr/openemr','Bahmni/bahmni-core','medplum/medplum'],['17-industries']),
  F('U57','vertical_operating_system','hospitality-pms','Hospitality property management system','Reservations, rooms, stays, housekeeping, rates, night audit and guest issues form the product.',['Qloapps/QloApps','peeraseepat-cell/open-hotel-pms'],['17-industries','live-github']),
  F('U58','vertical_operating_system','msp-operations','MSP service operations','Client tenancy, tickets, assets, monitoring, backups, agreements and privileged handoffs form one operating model.',['glpi-project/glpi','RotherOSS/otobo'],['17-industries']),
  F('U59','vertical_operating_system','insurance-operations','Insurance agency, policy and claims operations','Parties, policies, coverages, claims, evidence, renewals and regulated decisions form the core.',['openimis/openimis-be_py'],['17-industries']),
  F('U60','vertical_operating_system','legal-practice','Legal practice and matter management','Clients, conflicts, matters, time, documents, deadlines, trust boundaries and billing form the system.',['ArkCase/arkcase-ce'],['17-industries']),
  F('U61','vertical_operating_system','logistics-fleet','Logistics, TMS and fleet operations','Loads, shipments, carriers, stops, tracking events, POD, fleet and exceptions form the product.',['openboxes/openboxes','traccar/traccar'],['17-industries']),
  F('U62','vertical_operating_system','mortgage-los','Mortgage and loan origination','Applicants, applications, products, conditions, documents, underwriting and closing form a governed lifecycle.',['apache/fineract'],['17-industries']),
  F('U63','vertical_operating_system','property-management','Property and tenancy management','Properties, units, tenants, leases, rent, work orders, vendors and inspections form the product.',['microrealestate/microrealestate','open-condo-software/condo'],['17-industries']),
  F('U64','vertical_operating_system','real-estate-brokerage','Real-estate brokerage and listings','Properties, listings, leads, viewings, offers, agents and documents form a specialised sales system.',['etewiah/property_web_builder'],['17-industries']),
  F('U65','vertical_operating_system','staffing-agency','Staffing and recruiting agency operations','Candidates, clients, jobs, submissions, placements, timesheets and commissions exceed a generic ATS.',['opencats/OpenCATS'],['17-industries']),
  F('U66','vertical_operating_system','field-service','Field service management','Customers, assets, jobs, dispatch, technicians, parts, offline evidence and completion form the product.',['odoo/odoo','frappe/erpnext'],['17-industries']),
  F('U67','vertical_operating_system','education-sis','Education administration and SIS','Learners, guardians, courses, enrollment, attendance, grades and credentials form institutional authority.',['GibbonEdu/core','frappe/education'],['17-industries']),
  F('U68','vertical_operating_system','restaurant-pos','Restaurant, reservation and POS operations','Menus, tables, reservations, orders, kitchen state, payments and shifts form a vertical system.',['tastyigniter/TastyIgniter','opensourcepos/opensourcepos'],['72-ideas','hospitality-adjacent'])
];

const invalidAnchors = families.flatMap(f => f.anchors.filter(anchor => !/^[^/]+\/[^/]+$/.test(anchor)).map(anchor => `${f.id}:${anchor}`));
if (invalidAnchors.length) throw new Error(`BASE_UNIVERSE_FAIL invalid_anchor=${invalidAnchors.join(',')}`);
if (new Set(families.map(f => f.id)).size !== families.length) throw new Error('BASE_UNIVERSE_FAIL duplicate_id');
if (new Set(families.map(f => f.slug)).size !== families.length) throw new Error('BASE_UNIVERSE_FAIL duplicate_slug');

const groupCounts = Object.fromEntries(['horizontal_product','shared_capability','vertical_operating_system'].map(group => [group, families.filter(f => f.group === group).length]));
const seeds = families.flatMap(family => family.anchors.map((repo, index) => ({
  seed_id: `${family.id}-S${index + 1}`, family_id: family.id, family_name: family.name, group: family.group,
  repo, url: `https://github.com/${repo}`, rank_within_family: index + 1,
  evidence_status: family.evidence_basis.includes('live-github') ? 'live_search_observed_or_local_prior' : 'local_prior_or_targeted_seed',
  qualification_status: 'NOT_QUALIFIED'
})));
const uniqueRepos = new Set(seeds.map(seed => seed.repo.toLowerCase())).size;
const thin = families.filter(f => f.coverage_status === 'thin_or_missing');

const register = {
  schema_version: 'actionist.base-universe.v2', observed_date: '2026-08-27', status: 'provisional_expanded_universe_not_qualified',
  correction: 'Supersedes the 23-family compression as the current portfolio taxonomy; preserves the prior 100-repository bench as evidence.',
  inclusion_rule: 'Create a distinct family when the candidate owns a materially different durable state model, authority boundary, workflow lifecycle, or runtime/integration boundary. Cosmetic variants remain overlays.',
  counts: { families: families.length, ...groupCounts, seed_assignments: seeds.length, unique_seed_repositories: uniqueRepos, thin_families: thin.length, prior_deep_bench: 100 },
  families,
  boundary: { research_only: true, implementation_authorized: false, execution_status: 'UNEXECUTED', admission_status: 'NOT_ADMITTED', admitted_bases: 0 }
};

const table = families.map(f => `| ${f.id} | ${f.group.replaceAll('_',' ')} | ${f.name} | ${f.coverage_status} | ${f.anchors.join(', ') || '—'} |`).join('\n');
const thinList = thin.map(f => `- **${f.id} ${f.name}:** ${f.inclusion_criterion}`).join('\n');
const markdown = `# Actionist base universe v2 — ${families.length} candidate families

Date: 2026-08-27  
Status: provisional expanded taxonomy; research only; no source executed or qualified

## Correction to the 23-family portfolio

The previous 23-family portfolio was a useful minimum shared spine, but it was not a credible universe of reusable product bases. It inherited P03's narrow 24-capability supply taxonomy and compressed distinct products into generic labels such as \"workflow\", \"finance\" and \"field operations\". That hid ATS, HRIS, contract lifecycle, procurement, ITSM, incident management, marketing automation, social publishing, community, events and genuine vertical operating systems.

The 100-repository cap was also arbitrary. A discovery bench should be sized by family coverage, then compressed after product-versus-framework-versus-primitive review. This v2 starts with **${families.length} families, ${seeds.length} seed assignments and ${uniqueRepos} unique repository seeds**. The old 100-repository shortlist remains attached as a deeper prior-evidence bench; it is no longer presented as exhaustive.

## First-principles inclusion rule

A family is distinct when it owns at least one materially different:

1. durable data/state model;
2. authority or identity boundary;
3. workflow lifecycle and terminal states; or
4. runtime/integration boundary.

Terminology, colours, labels and small entity additions are overlays. An ATS is not merely a case workflow because candidate consent, application stages, interview feedback and offer authority are its core. A hotel PMS is not scheduling plus inventory because room-night state, housekeeping, rate plans and night audit interact as one authority model.

## Portfolio shape

- **${groupCounts.horizontal_product} horizontal products** — recognisable complete systems clients ask for.
- **${groupCounts.shared_capability} shared capabilities** — engines and host services reused beneath products.
- **${groupCounts.vertical_operating_system} vertical operating systems** — industry products whose state/authority cannot honestly be reduced to a cosmetic overlay.

## Expanded family register

| ID | Group | Family | Coverage | Initial repository seeds |
|---|---|---|---|---|
${table}

## Thin families requiring targeted discovery

${thinList || '- None at the seed-presence level; qualification remains open for every family.'}

\"Seeded\" means only that at least two plausible repository identities are known. It does not mean either is a good product base. Several seeds are composite ERP products or pattern references and may fail the archetype bar after source reading.

## What happens next

1. **Product-bar pass:** define required entities, states, authority and exclusions for all ${families.length} families.
2. **Coverage sweep:** build a 3–5 candidate funnel per family from the local estate, prior 500-candidate corpus, template sweep and targeted GitHub search. Expect roughly 250–350 assignments before overlap compression.
3. **Tier every source:** complete product, framework/engine, primitive or pattern. A deployable primitive must never count as usable product supply.
4. **Select finalists:** preferred product, product alternative and engine/framework fallback—or an explicit Actionist-owned gap.
5. **Compress overlaps:** only after family coverage, reduce the likely 200+ unique discovery identities to the 40–80 highest-leverage sources and take the deepest 20–30 through module contracts and the deterministic composer.

## Boundary

Research only. The live GitHub checks in this correction establish discovery identities and examples, not source quality, host fit, execution, qualification or admission.
`;

await mkdir(outDir, { recursive: true });
await writeFile(resolve(outDir, 'base-universe-v2.json'), `${JSON.stringify(register, null, 2)}\n`);
await writeFile(resolve(outDir, 'base-universe-seeds.jsonl'), `${seeds.map(seed => JSON.stringify(seed)).join('\n')}\n`);
await writeFile(resolve(outDir, 'base-universe-v2.md'), markdown);
process.stdout.write(`BASE_UNIVERSE_PASS families=${families.length} horizontal=${groupCounts.horizontal_product} shared=${groupCounts.shared_capability} vertical=${groupCounts.vertical_operating_system} seeds=${seeds.length} unique_repos=${uniqueRepos} thin=${thin.length}\n`);
