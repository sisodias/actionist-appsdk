# AM-VERTICALS checkpoint-003

**Recorded:** 2026-08-26 (Asia/Ho_Chi_Minh)  
**State:** catalogue crosswalk complete across all four axes; live/implementation proof still open  
**Owner:** AM-VERTICALS  
**Predecessor:** `checkpoint-002.md`  
**Machine artifact:** `crosswalk-batch-003.json`

## Batch result

Batch-003 adds the 41 idea IDs missing from batches 001–002. It groups only
ideas whose public card copy supports a shared business loop, then attaches
those groups to explicit industry/team/use-case/atom edges. The combined
crosswalk now covers:

| Dimension | Combined coverage |
|---|---:|
| Industries | 17/17 |
| Teams | 12/12 |
| Use cases | 66/66 |
| Ideas | 72/72 |
| Reusable atoms | 12 |
| Edges | 62 (`E001`–`E062`) |

Machine proof used for the idea axis:

```sh
jq -n --slurpfile c catalogue.json --slurpfile a crosswalk-batch-001.json \
  --slurpfile b crosswalk-batch-002.json --slurpfile d crosswalk-batch-003.json \
  '($c[0].ideas|map(.id)) as $all |
   ([$a[0].edges[].idea_ids[],$b[0].edges[].idea_ids[],$d[0].edges[].idea_ids[]]|unique) as $covered |
   {covered:($covered|length), inventory:($all|length), missing:($all-$covered), invalid:($covered-($all))}'
```

Result: `covered=72`, `inventory=72`, `missing=[]`, `invalid=[]`.

## Exact edges covered in batch-003

Every edge below contains the full `industry_ids × team_ids × use_case_ids ×
idea_ids` shape, atom IDs, a score, source URL keys, confidence, status, and
next gate in `crosswalk-batch-003.json`.

| Edge | Idea IDs | Business loop | Monetization event | Atom emphasis |
|---|---|---|---|---|
| `E052` | local website, niche directory, citation building, GBP management, rank-and-rent, pay-per-lead | Acquire local client/audience → maintain local asset → monitor visibility/leads → report/route → renew. | Monthly retainer, qualified lead, or paid listing. | intake, extract, monitor, chase, handoff, report, approval, browser |
| `E053` | short-form video, SEO content, paid ads, podcast, LinkedIn ghostwriting, UGC, influencer brokerage, ASO, lead magnet, press release, faceless YouTube | Win brief/retainer → research/produce → approve → publish/distribute → report → renew/upsell. | Retainer, approved deliverable, campaign fee, or commission. | intake, extract, monitor, report, chase, approval, handoff |
| `E054` | branding/logo, digital downloads, stock assets, AI headshots, product photos | Creative brief → prepare asset → approve → deliver/list → support/revise → repeat/license. | Asset order, milestone, download purchase, or stock licence. | intake, extract, report, approval, chase |
| `E055` | membership community | Acquire members → onboard/schedule → moderate/support → measure retention → renew. | Membership subscription, paid event, or cohort upgrade. | intake, schedule, chase, handoff, report, approval |
| `E056` | template shop, digital downloads | Create reusable product → list/market → process purchase → deliver/support → refresh catalogue. | Template/download purchase, bundle subscription, or support upgrade. | intake, extract, classify, chase, report, approval, handoff |
| `E057` | affiliate review site, affiliate deals channel | Select niche → research/compare → publish → grow distribution → track clicks/update stale offers. | Qualified click, attributed sale, sponsorship, or partner commission. | extract, monitor, report, approval, chase |
| `E058` | print-on-demand, online reselling, website flipping, domain flipping | Find/create asset → list/price → monitor demand/value → fulfil/repair/resell → reconcile proceeds. | Product margin, resale spread, asset sale, or completed order. | intake, monitor, reconcile, handoff, report, approval, browser |
| `E059` | grant writing, resume/LinkedIn, transcription/captioning, translation | Acquire brief/file → extract → draft deliverable → review/sign-off → deliver/archive → invoice/renew. | Deliverable fee, per-document/rush fee, or retainer. | intake, extract, classify, approval, chase, handoff |
| `E060` | travel planning, relocation concierge | Capture brief → research options/paperwork → coordinate bookings → support journey → collect fee/referrals. | Planning/concierge fee, booking commission, or retainer. | intake, triage, schedule, chase, handoff, report, browser |
| `E061` | landscaping, handyman referral, mobile car detailing | Capture service request → quote/match/schedule → complete job → reconcile payment → request review/repeat. | Booked job, referral fee, invoice, or maintenance contract. | intake, triage, schedule, chase, handoff, reconcile, browser |
| `E062` | KDP low-content books, KDP children's books | Select niche/theme → draft assets → review/publish listings → monitor sales/feedback → iterate catalogue. | Book sale, royalty, bundle purchase, or publishing fee. | intake, extract, report, approval, browser |

The twelve atom IDs reused across batch-003 are:

`intake_normalize`, `triage_route`, `extract_structure`, `classify_prioritize`,
`follow_up_chase`, `schedule_coordinate`, `reconcile_audit`, `report_digest`,
`monitor_alert`, `approval_publish`, `sync_handoff`, `browser_data_entry`.

## Evidence and confidence

External evidence was observed 2026-08-26 from:

- https://actionist.ai/solutions/industries
- https://actionist.ai/solutions/teams
- https://actionist.ai/solutions/use-cases
- https://actionist.ai/solutions/ideas

Execution-plane evidence remains:

- https://docs.actionmodel.com/actionist/agents-and-workflows
- https://docs.actionmodel.com/actionist/triggers
- https://docs.actionmodel.com/actionist/agent-calendar-schedules
- https://docs.actionmodel.com/actionist/agent-history

Local corroboration:

- `research/actionmodel-long-run/outputs/verticals/catalogue.json`
- `research/actionmodel-long-run/outputs/verticals/atoms-001.json`
- `research/actionmodel-long-run/outputs/verticals/crosswalk-batch-001.json`
- `research/actionmodel-long-run/outputs/verticals/crosswalk-batch-002.json`
- `research/actionmodel-deep-dive/product-ecosystem.md`
- `research/actionmodel-deep-dive/docs-index.md`
- `research/actionist-solutions-sweep-spec-2026-08-26.md`
- `research/github-sweep/SWEEP-MERGED.json`

All batch-003 edges are `capability_status: catalog`, `confidence: inferred`,
`authenticated_live: false`, and `implemented: false`. A business loop is an
inferred offer model from the idea copy, not evidence that Actionist currently
delivers or monetizes it.

## Pilot implications

The first three pilot archetypes remain the best controlled path through the
complete taxonomy:

1. **Invoice-to-cash control:** 28/35 — strongest finance value; first gate is
   source-of-truth, approval, and no-production-write proof.
2. **Request-to-dispatch desk:** 27/35 — broadest atom reuse and safest low-risk
   operational sandbox.
3. **Lead-to-meeting pipeline:** 28/35 — strong value/frequency; consent,
   outbound-send, CRM/calendar read-back, and opt-out recovery are mandatory.

The ten candidate offers remain `unverified`; no candidate repository is an
admitted block. Their detailed job, metric, trigger, entities, candidate blocks,
and next gates remain in `pilot-offers-001.json`.

## Next gate

Move from taxonomy inference to `direct_source_review`: obtain one disposable
test environment per pilot, name the source of truth and allowed writes, and
run synthetic fixtures through idempotency, approval, verification, recovery,
and audit evidence before any `authenticated` or `implemented` status is used.
