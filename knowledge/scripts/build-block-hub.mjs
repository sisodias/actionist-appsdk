#!/usr/bin/env node

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..', '..');
const hubDir = resolve(root, 'knowledge', 'block-hub');
const universe = JSON.parse(await readFile(resolve(root, 'research', 'base-portfolio-2026-08-27', 'base-universe-v2.json'), 'utf8'));
const sourceRows = (await readFile(resolve(root, 'knowledge', 'capability-shelf', 'source-registry.jsonl'), 'utf8'))
  .split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
const familyById = new Map(universe.families.map(family => [family.id, family]));

const R = {
  core: 'digital_business_os',
  saas: 'saas',
  commerce: 'ecommerce',
  agency: 'marketing_agency',
  creator: 'course_creator'
};

const block = (id, name, layer, stage, familyIds, recipes, surfaces, outcome, notes = '') => ({
  id, name, layer, stage, family_ids: familyIds, recipes, surfaces, outcome, notes
});

const definitions = [
  block('B001','Workspace identity and tenancy','platform','govern',['U39'],[R.core,R.saas,R.commerce,R.agency,R.creator],['sign in','workspace switcher','member invitation'],'Keep every customer, workspace and request inside an explicit tenant boundary.'),
  block('B002','Users, teams and employee directory','product','operate',['U22'],[R.core,R.saas,R.commerce,R.agency,R.creator],['people directory','team detail','member profile'],'Manage multiple employees, contractors, teams and ownership assignments.'),
  block('B003','Roles and permissions','platform','govern',['U39'],[R.core,R.saas,R.commerce,R.agency,R.creator],['role editor','permission matrix','access-denied state'],'Define who may view, change, approve, publish, refund, deploy or administer.'),
  block('B004','Employee onboarding and offboarding','product','operate',['U24'],[R.core,R.saas,R.commerce,R.agency,R.creator],['onboarding checklist','access review','offboarding checklist'],'Provision and revoke employee access without leaving orphaned ownership.'),
  block('B005','Collective settings registry','platform','govern',[],[R.core,R.saas,R.commerce,R.agency,R.creator],['settings tree','module settings','override provenance'],'Resolve system, tenant, workspace, team and user settings with provenance.','Actionist-owned gap; donor settings may initially remain behind host navigation.'),
  block('B006','Application shell and navigation registry','platform','operate',[],[R.core,R.saas,R.commerce,R.agency,R.creator],['sidebar','command palette','module launcher','breadcrumbs'],'Present many capabilities as one coherent application.','Actionist-owned gap; P04/P10 found no complete adoptable precedent.'),
  block('B007','Audit and activity history','platform','govern',['U36'],[R.core,R.saas,R.commerce,R.agency,R.creator],['activity timeline','audit search','change receipt'],'Make consequential changes attributable and reviewable.'),
  block('B008','Notifications and delivery preferences','capability','retain',['U43'],[R.core,R.saas,R.commerce,R.agency,R.creator],['notification centre','preference editor','delivery status'],'Deliver in-app, email and other notifications with user-level controls.'),
  block('B009','Search and command retrieval','engine','operate',['U42'],[R.core,R.saas,R.commerce,R.agency,R.creator],['global search','entity search','command search'],'Find records and actions across modules without exposing unauthorized results.'),
  block('B010','Files and object storage','engine','deliver',['U41'],[R.core,R.saas,R.commerce,R.agency,R.creator],['file picker','upload','preview','version history'],'Store and link files through a host-owned capability rather than module-specific silos.'),
  block('B011','Workflow, rules and approvals engine','engine','deliver',['U46','U02'],[R.core,R.saas,R.commerce,R.agency,R.creator],['workflow status','approval queue','rule builder'],'Coordinate state transitions, deadlines, approvals and exceptions.'),
  block('B012','Connector and OAuth catalogue','engine','operate',['U45'],[R.core,R.saas,R.commerce,R.agency,R.creator],['integration catalogue','connection setup','connection health'],'Connect external systems with tenant-safe credentials and action receipts.'),
  block('B013','Analytics and reporting engine','engine','measure',['U47'],[R.core,R.saas,R.commerce,R.agency,R.creator],['dashboard','report builder','scheduled report'],'Turn product and operating data into attributable decisions.'),
  block('B014','Internal admin and data operations','product','operate',['U33'],[R.core,R.saas,R.commerce,R.agency,R.creator],['admin table','record detail','bulk action'],'Give trusted operators safe views and bounded actions over business records.'),
  block('B015','AI assistant and grounded help','engine','operate',['U53'],[R.core,R.saas,R.commerce,R.agency,R.creator],['assistant panel','grounded answer','suggested action'],'Answer and assist from authorized business context without inventing authority.'),
  block('B016','Website and CMS','product','acquire',['U32'],[R.core,R.saas,R.commerce,R.agency,R.creator],['site editor','page list','content model'],'Own public web content, reusable sections, SEO metadata and publication state.'),
  block('B017','Landing page system','surface','acquire',['U32'],[R.core,R.saas,R.commerce,R.agency,R.creator],['hero','benefits','social proof','CTA','FAQ'],'Convert campaign traffic with reusable, testable page sections.','21st.dev is stimulus/component supply; the page recipe remains Actionist-owned.'),
  block('B018','Blog and editorial publishing','surface','acquire',['U28','U32'],[R.core,R.saas,R.commerce,R.agency,R.creator],['article index','article detail','author page','category page'],'Publish educational and acquisition content with structured SEO.'),
  block('B019','Documentation and knowledge publishing','surface','acquire',['U06','U32'],[R.core,R.saas,R.commerce,R.agency,R.creator],['documentation home','guide','API reference','search'],'Help prospects, customers and employees understand the product or process.'),
  block('B020','Testimonials, case studies and proof','surface','acquire',['U32'],[R.core,R.saas,R.commerce,R.agency,R.creator],['testimonial grid','case-study index','case-study detail'],'Turn customer evidence into reusable acquisition assets.'),
  block('B021','Forms, surveys and intake','product','acquire',['U11'],[R.core,R.saas,R.commerce,R.agency,R.creator],['form builder','public form','submission inbox'],'Capture structured demand, briefs, feedback and operational requests.'),
  block('B022','Newsletter and audience publishing','product','retain',['U28'],[R.core,R.saas,R.commerce,R.agency,R.creator],['subscriber list','campaign composer','delivery report'],'Own an audience and publish lifecycle or editorial communication.'),
  block('B023','CRM and revenue pipeline','product','sell',['U01'],[R.core,R.saas,R.commerce,R.agency,R.creator],['contacts','accounts','pipeline','opportunity detail'],'Track people, companies, opportunities and commercial ownership.'),
  block('B024','Scheduling and booking','product','sell',['U09'],[R.core,R.saas,R.commerce,R.agency,R.creator],['availability','booking page','calendar','appointment detail'],'Coordinate demos, consultations, sessions and operational appointments.'),
  block('B025','Customer support desk','product','support',['U07'],[R.core,R.saas,R.commerce,R.agency,R.creator],['inbox','conversation','ticket queue','SLA report'],'Resolve customer issues across channels with ownership and history.'),
  block('B026','Shared inbox and communications','product','support',['U08'],[R.core,R.saas,R.commerce,R.agency,R.creator],['team inbox','thread','assignment','template reply'],'Coordinate customer and client communication across employees.'),
  block('B027','Knowledge base and wiki','product','support',['U06'],[R.core,R.saas,R.commerce,R.agency,R.creator],['knowledge home','article','collection','search'],'Provide reusable internal and external answers.'),
  block('B028','Projects, tasks and assignments','product','deliver',['U04'],[R.core,R.saas,R.commerce,R.agency,R.creator],['project list','board','task detail','timeline'],'Coordinate work, owners, due dates and dependencies.'),
  block('B029','Collaborative workspace and notes','product','deliver',['U05'],[R.core,R.saas,R.commerce,R.agency,R.creator],['workspace','document editor','database view','comments'],'Combine documents, notes and structured collaborative work.'),
  block('B030','Payments and money movement','engine','sell',['U44'],[R.core,R.saas,R.commerce,R.agency,R.creator],['payment setup','payment status','refund request'],'Authorize and reconcile money movement without making the payment provider the product ledger.'),
  block('B031','Document and PDF generation','engine','deliver',['U48'],[R.core,R.saas,R.commerce,R.agency,R.creator],['template editor','generated document','generation receipt'],'Generate proposals, invoices, reports, certificates and operational documents.'),
  block('B032','Pricing, plans and packaging','surface','sell',['U16','U32'],[R.saas,R.commerce,R.agency,R.creator],['pricing page','plan comparison','upgrade prompt'],'Explain and select commercial packages consistently across public and authenticated surfaces.'),
  block('B033','Subscription billing','product','sell',['U16'],[R.saas,R.agency,R.creator],['subscription detail','invoice history','billing portal'],'Maintain plans, subscription state, invoices and billing lifecycle.'),
  block('B034','Entitlements and feature access','capability','deliver',[],[R.saas,R.creator],['feature access','usage limit','upgrade gate'],'Translate commercial state into deterministic product access.','Explicit specialist gap: billing is not entitlement ownership.'),
  block('B035','Trials and customer provisioning','capability','activate',[],[R.saas],['trial state','workspace provisioning','activation checklist'],'Create, activate, suspend and retire customer product environments.'),
  block('B036','Usage metering','engine','measure',['U16'],[R.saas],['usage dashboard','meter definition','usage export'],'Measure billable and operational product usage with stable identities.'),
  block('B037','Product onboarding and activation','surface','activate',['U11'],[R.saas,R.commerce,R.agency,R.creator],['setup checklist','guided setup','activation state'],'Move a new customer from signup to first value without donor onboarding silos.'),
  block('B038','Product analytics and behavior','engine','measure',['U47'],[R.saas,R.commerce,R.agency,R.creator],['funnel','retention','event explorer','session insight'],'Measure whether users reach value and where they fail.'),
  block('B039','Feature flags and controlled rollout','capability','operate',[],[R.saas],['flag list','targeting rule','rollout state'],'Release product behavior safely by tenant, cohort or percentage.'),
  block('B040','Customer success and account health','product','retain',['U30'],[R.saas,R.agency],['account health','renewal queue','success plan'],'Coordinate retention, adoption, risk and renewal ownership.'),
  block('B041','Feedback and product roadmap','product','retain',['U31'],[R.saas],['feedback inbox','roadmap','feature detail'],'Join customer feedback to product decisions and status communication.'),
  block('B042','Incident, status and on-call','product','support',['U36'],[R.saas,R.commerce],['incident list','status page','on-call schedule'],'Detect, coordinate and communicate service degradation.'),
  block('B043','API keys, webhooks and developer access','capability','operate',[],[R.saas],['API key list','webhook editor','delivery log'],'Expose bounded programmatic access and observable event delivery.'),
  block('B044','Lifecycle marketing and churn recovery','product','retain',['U26'],[R.saas,R.commerce,R.creator],['journey builder','segment','campaign result'],'Trigger customer communication from lifecycle state and behavior.'),
  block('B045','Product catalogue and PIM','product','sell',['U20'],[R.commerce],['catalogue','product editor','variant editor','collection editor'],'Own products, variants, attributes, media and merchandising structure.'),
  block('B046','Storefront and product discovery','surface','acquire',['U20','U42'],[R.commerce],['home','collection','product detail','search','recommendations'],'Help shoppers discover and evaluate products.'),
  block('B047','Cart and checkout','surface','sell',['U20','U44'],[R.commerce],['cart','checkout','payment state','confirmation'],'Convert a selected basket into a priced, authorized order.'),
  block('B048','Inventory and availability','product','deliver',['U19'],[R.commerce],['stock view','location inventory','reservation','low-stock queue'],'Track sellable stock and prevent inventory races.'),
  block('B049','Order management','product','deliver',['U20'],[R.commerce],['order list','order detail','status timeline','exception queue'],'Own the commercial order state independently of payment and fulfilment providers.'),
  block('B050','Tax, duties and pricing calculation','capability','sell',[],[R.commerce],['tax quote','jurisdiction rule','calculation receipt'],'Calculate jurisdiction-sensitive totals with an attributable provider or rule set.'),
  block('B051','Fraud and payment risk','capability','govern',[],[R.commerce],['risk decision','review queue','evidence receipt'],'Hold suspicious transactions for review without conflating risk with payment state.'),
  block('B052','Fulfilment and warehouse execution','product','deliver',['U19'],[R.commerce],['fulfilment queue','pick-pack state','shipment preparation'],'Turn paid orders into warehouse or supplier work.'),
  block('B053','Shipping, tracking and delivery','capability','deliver',['U45','U51','U61'],[R.commerce],['shipping method','label','tracking timeline','delivery exception'],'Buy shipment services and expose delivery state through carrier connectors.'),
  block('B054','Returns, exchanges and refunds','product','support',[],[R.commerce],['return request','return detail','exchange flow','refund state'],'Reverse or alter a completed order with explicit inventory, payment and fulfilment effects.'),
  block('B055','Discounts, loyalty and promotions','capability','sell',[],[R.commerce],['promotion editor','coupon','loyalty balance'],'Apply commercial incentives without corrupting pricing authority.'),
  block('B056','Reviews and user-generated proof','product','retain',[],[R.commerce,R.creator],['review list','review form','moderation queue'],'Collect and publish attributable customer evidence.'),
  block('B057','Abandoned-cart and browse recovery','capability','retain',['U26'],[R.commerce],['recovery queue','journey','conversion report'],'Recover intent through consent-aware lifecycle communication.'),
  block('B058','Client portal','product','deliver',['U03'],[R.agency],['client home','requests','approvals','files','reports'],'Give external clients scoped visibility and actions without exposing internal operations.'),
  block('B059','Briefs and campaign intake','surface','acquire',['U11'],[R.agency],['brief form','brief detail','requirements checklist'],'Turn ambiguous client requests into structured deliverables and acceptance conditions.'),
  block('B060','Proposals, quotes and retainers','product','sell',['U15','U31'],[R.agency],['proposal editor','quote','retainer plan'],'Package scope, price and commercial commitments.'),
  block('B061','Contracts and signatures','product','sell',['U13','U14'],[R.agency],['contract','signature flow','contract status'],'Create, approve and sign client agreements.'),
  block('B062','Campaign and content calendar','product','deliver',['U04','U27'],[R.agency],['campaign list','content calendar','content item'],'Coordinate multi-channel client work and publication dates.'),
  block('B063','Digital assets and media production','product','deliver',['U38'],[R.agency,R.creator],['asset library','asset detail','version comparison','rights state'],'Manage creative assets, versions, metadata and usage state.'),
  block('B064','Client approval and revision workflow','capability','deliver',['U02','U46'],[R.agency],['approval queue','review surface','change request'],'Keep versioned client approval authoritative before publishing or delivery.'),
  block('B065','Social publishing and channel operations','product','deliver',['U27','U45'],[R.agency],['composer','channel calendar','publish state','channel health'],'Prepare and publish content through governed channel connections.'),
  block('B066','Client reporting and performance decks','surface','measure',['U47','U48'],[R.agency],['client dashboard','report builder','presentation export'],'Turn channel and campaign evidence into recurring client reporting.'),
  block('B067','Time, capacity and resource planning','product','operate',['U22','U28'],[R.agency],['timesheet','capacity board','utilization report'],'Plan employee capacity and understand delivery economics.'),
  block('B068','Retainer invoicing and agency finance','product','sell',['U16','U17','U18'],[R.agency],['retainer status','invoice','expense','margin report'],'Connect contracted work, time/cost and recurring invoicing.'),
  block('B069','Bounded client site and campaign editor','surface','deliver',['U32'],[R.agency],['page editor','preview','change request','publish gate'],'Let agencies or clients safely change approved content and layouts without arbitrary code authority.'),
  block('B070','Course authoring and lesson delivery','product','deliver',['U25'],[R.creator],['course builder','lesson editor','learner lesson'],'Create and deliver structured learning content.'),
  block('B071','Cohorts, enrolment and learner progress','product','deliver',['U25'],[R.creator],['cohort','enrolment','progress dashboard','stalled learner queue'],'Track who has access, participation and progress.'),
  block('B072','Community and membership','product','retain',['U29'],[R.creator],['community home','discussion','member profile','moderation'],'Create member interaction and ongoing value around content.'),
  block('B073','Live sessions and events','product','deliver',['U09','U10'],[R.creator],['event page','registration','attendance','recording link'],'Coordinate live teaching, workshops and cohort events.'),
  block('B074','Assignments, feedback and completion','capability','deliver',['U25','U11'],[R.creator],['assignment','submission','feedback','completion state'],'Collect learner work and track completion without inventing educational authority.'),
  block('B075','Certificates and learner documents','capability','deliver',['U48'],[R.creator],['certificate template','certificate','verification page'],'Generate attributable completion documents.'),
  block('B076','Creator memberships and paid access','product','sell',['U16','U29'],[R.creator],['membership plan','access state','billing portal'],'Join recurring payment state to community and learning access.'),
  block('B077','Affiliate and referral management','product','acquire',[],[R.creator,R.commerce,R.saas],['affiliate list','referral link','commission report'],'Attribute referrals and calculate commissions without treating analytics as a payment ledger.'),
  block('B078','Learner communication and sequences','capability','retain',['U22','U26'],[R.creator],['sequence','cohort segment','delivery report'],'Send consent-aware onboarding, reminder and progress communication.'),
  block('B079','Learner portal','surface','deliver',['U03','U25'],[R.creator],['learner home','course library','progress','community links'],'Present learning, events, progress and support through one external identity.'),
  block('B080','Media library and delivery','capability','deliver',['U38','U41'],[R.creator],['media library','upload','player','transcript'],'Manage and deliver video, audio and downloadable course assets.')
];

const targetedGapCandidates = {
  B004: [
    ['chiefonboarding/ChiefOnboarding','https://github.com/chiefonboarding/ChiefOnboarding','full_product_candidate','Employee onboarding product discovered in the targeted gap search.'],
    ['Bitnoise/dutyduke','https://github.com/Bitnoise/dutyduke','full_product_candidate','Broader HR product with onboarding and employee operations.']
  ],
  B034: [
    ['masterix21/laravel-entitlements','https://github.com/masterix21/laravel-entitlements','primitive_candidate','Plans, features, limits and usage tracking for Laravel; not a complete cross-stack entitlement product.']
  ],
  B039: [
    ['growthbook/growthbook','https://github.com/growthbook/growthbook','full_product_candidate','Feature flags, experimentation and product analytics.'],
    ['Flagsmith/flagsmith','https://github.com/Flagsmith/flagsmith','full_product_candidate','Self-hosted feature flags and remote configuration.'],
    ['openflagr/flagr','https://github.com/openflagr/flagr','service_candidate','Feature flagging, A/B testing and dynamic configuration service.']
  ],
  B040: [
    ['uuchat/uuchat','https://github.com/uuchat/uuchat','weak_product_candidate','Customer-success product candidate; shallow evidence and materially weaker than the surrounding shelf.']
  ],
  B043: [
    ['frain-dev/convoy','https://github.com/frain-dev/convoy','service_candidate','Cloud-native webhook gateway.'],
    ['webhookx-io/webhookx','https://github.com/webhookx-io/webhookx','service_candidate','Webhook gateway candidate.'],
    ['izadoesdev/keypal','https://github.com/izadoesdev/keypal','primitive_candidate','TypeScript API-key library with hashing, scopes and expiry.']
  ],
  B054: [
    ['medusajs/medusa','https://github.com/medusajs/medusa','composite_product_candidate','Commerce engine likely owns return/refund behavior as part of its order domain; verify source-level completeness.'],
    ['saleor/saleor','https://github.com/saleor/saleor','composite_product_candidate','Commerce platform candidate for return/refund behavior; verify source-level completeness.']
  ],
  B055: [
    ['medusajs/medusa','https://github.com/medusajs/medusa','composite_product_candidate','Commerce engine candidate for promotions and discounts.'],
    ['saleor/saleor','https://github.com/saleor/saleor','composite_product_candidate','Commerce platform candidate for promotions and discounts.']
  ]
};

const candidatesFor = definition => sourceRows
  .filter(source => definition.family_ids.some(id => (source.family_ids || []).includes(id)))
  .sort((a, b) => (b.priority_score || 0) - (a.priority_score || 0) || a.repo.localeCompare(b.repo));

const blocks = definitions.map(definition => {
  const families = definition.family_ids.map(id => familyById.get(id)).filter(Boolean);
  const candidates = candidatesFor(definition);
  const thin = !families.length || families.some(family => family.coverage_status === 'thin_or_missing');
  return {
    ...definition,
    family_names: families.map(family => family.name),
    coverage: !definition.family_ids.length ? 'actionist_owned_or_targeted_gap' : thin ? 'thin_existing_supply' : candidates.length ? 'seeded_candidate_supply' : 'family_seeded_registry_gap',
    candidate_count: candidates.length,
    top_candidates: candidates.slice(0, 5).map(source => ({ source_id: source.source_id, repo: source.repo, url: source.url, verdict: source.current_verdict, priority_score: source.priority_score })),
    targeted_gap_candidates: (targetedGapCandidates[definition.id] || []).map(([repo, url, candidateClass, rationale]) => ({ repo, url, candidate_class: candidateClass, rationale, evidence_class: 'github_search_metadata', observed_date: '2026-08-28', qualification_status: 'NOT_QUALIFIED' }))
  };
});

const recipes = [
  { id: R.core, name: 'Digital Business OS', thesis: 'The horizontal operating foundation reused across all business models.', required_blocks: blocks.filter(item => item.recipes.includes(R.core)).map(item => item.id) },
  { id: R.saas, name: 'SaaS OS', thesis: 'Digital product acquisition, subscription access, activation, operations, support and retention.', required_blocks: blocks.filter(item => item.recipes.includes(R.saas)).map(item => item.id) },
  { id: R.commerce, name: 'Ecommerce OS', thesis: 'Digital acquisition plus catalogue, checkout, order, inventory, fulfilment and post-purchase operations.', required_blocks: blocks.filter(item => item.recipes.includes(R.commerce)).map(item => item.id) },
  { id: R.agency, name: 'Marketing Agency OS', thesis: 'Client acquisition, briefs, production, approval, publishing, reporting and retainer economics.', required_blocks: blocks.filter(item => item.recipes.includes(R.agency)).map(item => item.id) },
  { id: R.creator, name: 'Course Creator OS', thesis: 'Audience acquisition, paid access, learning delivery, community, progress and retention.', required_blocks: blocks.filter(item => item.recipes.includes(R.creator)).map(item => item.id) }
].map(recipe => ({ ...recipe, block_count: recipe.required_blocks.length }));

const edges = blocks.flatMap(item => item.top_candidates.map((candidate, rank) => ({ block_id: item.id, source_id: candidate.source_id, repo: candidate.repo, rank: rank + 1, verdict: candidate.verdict, priority_score: candidate.priority_score })));
const counts = {
  blocks: blocks.length,
  recipes: recipes.length,
  surface_blocks: blocks.filter(item => item.layer === 'surface').length,
  product_blocks: blocks.filter(item => item.layer === 'product').length,
  capability_blocks: blocks.filter(item => item.layer === 'capability').length,
  engine_blocks: blocks.filter(item => item.layer === 'engine').length,
  platform_blocks: blocks.filter(item => item.layer === 'platform').length,
  seeded_candidate_supply: blocks.filter(item => item.coverage === 'seeded_candidate_supply').length,
  thin_or_gap: blocks.filter(item => item.coverage !== 'seeded_candidate_supply').length,
  source_edges: edges.length
  ,targeted_gap_candidates: blocks.reduce((sum, item) => sum + item.targeted_gap_candidates.length, 0)
};

await mkdir(hubDir, { recursive: true });
await writeFile(resolve(hubDir, 'block-register.json'), `${JSON.stringify({ schema_version: 'actionist.block-hub.v1', observed_date: '2026-08-28', status: 'requirements_mapped_sources_unqualified', counts, blocks }, null, 2)}\n`);
await writeFile(resolve(hubDir, 'composition-recipes.json'), `${JSON.stringify({ schema_version: 'actionist.composition-recipes.v1', observed_date: '2026-08-28', recipes }, null, 2)}\n`);
await writeFile(resolve(hubDir, 'block-source-edges.jsonl'), `${edges.map(edge => JSON.stringify(edge)).join('\n')}\n`);

process.stdout.write(`BLOCK_HUB_BUILD_PASS blocks=${counts.blocks} recipes=${counts.recipes} seeded=${counts.seeded_candidate_supply} thin_or_gap=${counts.thin_or_gap} edges=${counts.source_edges}\n`);
