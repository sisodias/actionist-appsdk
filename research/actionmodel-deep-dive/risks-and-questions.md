# Risk register and diligence questions

## Priority risk register

| Priority | Area | Evidence / why it matters | Validation ask |
|---|---|---|---|
| P0 | Browser data/privacy | Store declares user activity and website content; third-party manifest reports cookies/tabs/scripting and `<all_urls>`; docs promise masking/exclusions | Disposable-profile install, manifest/bundle review, network capture, masking tests, deletion/retention evidence, DPA/subprocessor list |
| P0 | Legal entity/token | Public pages describe a Cayman/public-company-style ecosystem, but the contracting entity, token contract/TGE and audit package were not reconciled | Legal entity chart, beneficial ownership, token address/chain, allocation, audits, TGE status, treasury and regulatory analysis |
| P1 | KPI reconciliation | 500K+ site claim, 80–90K extension-store users, 4.6K LinkedIn, 60K X, Telegram counts, and escalating LinkedIn milestones use different definitions | Signed KPI dictionary and raw time-series exports; explain registered vs active vs installed vs contributor |
| P1 | Review provenance | 4.87–4.9/398 is very positive; mirror shows a same-day generic-review burst; referrals/quests reward growth | Export all review IDs/timestamps, author/account metadata where permitted, incentive eligibility and campaign calendar; do not accuse without proof |
| P1 | Product maturity | Current Actionist site has pricing/demo; docs still say private beta/coming soon and contain stale 2025 roadmaps | Release matrix by surface, supported OS/browser list, uptime/SLA, beta cohort, current vs deprecated docs |
| P1 | Unit economics | Token docs contain `$0.01/action` and `$0.10/action` examples; marketplace and rewards depend on `$LAM` | Canonical pricing model, token/burn/reward ledger, cost per action, gross margin, partner subsidy and stress tests |
| P1 | Action verification | ActionFi differentiates on “real, verified usage,” but public docs do not fully specify anti-bot/farm and dispute controls | Redacted campaign report, fraud precision/recall, replay detection, identity model, dispute process and payout reconciliation |
| P1 | SDK/privacy | Private SDK accepts partner ID, external ID/email/metadata and callbacks; webhooks are future and docs are incomplete | SDK contract, data-flow diagram, event schema, auth/signing, retry/idempotency, webhook roadmap, deletion behavior |
| P2 | Model reliability/safety | Actionist can control mouse/keyboard/screen, use memory, triggers and custom tools; public evidence is mostly demos | Benchmark suite, failure taxonomy, approval gates, sandboxing, rollback/kill switch, prompt-injection defenses, incident history |
| P2 | Community quality | Telegram/X are large relative to LinkedIn/Reddit; public social growth is tied to referrals/quests | Cohort retention, reward-adjusted CAC, organic vs incentivized activity, bot/farm rates, support volume and moderation logs |
| P2 | Corporate claims | About page lists advisors/affiliations and a 30+ engineer claim in a blog; public records were not fully reconciled | Written advisor agreements/roles, team count by function, entity ownership, references, funding history |
| P2 | Mobile/app-store confusion | “Actionist” Apple listing is unrelated; no official mobile app was verified | Official app roadmap and signed developer account/package links |

## Questions for the first client call

### Company and commercial

1. What exact legal entity signs contracts, collects money, processes data and issues rewards?
2. Is `$LAM` live, testnet, pre-TGE, or still a points placeholder? What is the canonical contract address and chain?
3. What are the current paying Actionist seats, monthly recurring revenue, gross margin and net retention?
4. Which numbers in the site, partner page and LinkedIn posts are live analytics versus illustrative examples?
5. What is the current split between extension contributors, ActionFi users, Actionist users and marketplace creators?

### Data, privacy and security

1. What is the exact event schema captured by the training extension?
2. Are DOM text, screenshot pixels, URL paths, cookies or page content ever transmitted? If so, under what consent and masking stage?
3. What does `cookies` permission enable? Why is `<all_urls>` required, and which code paths run on every page?
4. Can a user inspect, correct, export and delete their data? Is deletion propagated to model training datasets and backups?
5. Which processors, cloud regions, VPCs, model vendors and observability vendors receive data?
6. What security audits, penetration tests, SOC 2/ISO work, incident reports or bug-bounty history exist?

### Product and reliability

1. Which Actionist capabilities are currently GA, private beta, or roadmap?
2. How is a workflow isolated from passwords, payments, private messages and destructive actions?
3. What is the human-approval policy for high-risk actions? Can approval be enforced by policy rather than UI convention?
4. How are prompt injection, malicious webpages, CAPTCHA, UI changes and ambiguous instructions handled?
5. What is the success rate by task category, median latency, failure/retry rate and human intervention rate?
6. What guarantees exist for memory correctness, cross-tenant isolation and agent history/audit trails?

### ActionFi and growth

1. What does “verified” mean at the event, session and payout level?
2. How are bots, replayed sessions, multi-accounting, VPN farms and incentivized low-quality behavior detected?
3. How much of a partner campaign’s reward pool is paid, withheld, burned or returned? What happens to disputes?
4. Which partner campaigns are live, renewed, or canceled? Can we speak to two partners?
5. Are reviews, follows, likes, ambassador points or referrals ever directly or indirectly incentivized?

## Verification plan

### 30-minute safe extension probe

- Use a fresh browser profile and a non-sensitive test site.
- Capture the installed version, manifest permissions, content-script matches and storage keys.
- Test install, idle browsing, pause, opt-in training, stop, delete and reinstall.
- Record DNS/HTTPS destinations and request timing with a local proxy or browser DevTools.
- Enter synthetic secrets into a test form and verify they never leave the profile.
- Compare the observed behavior with the Chrome Store declaration and privacy docs.

### Partner/SDK probe

- Request the private SDK package and a sandbox `partnerId`.
- Map initialization fields and all callbacks to a data-flow diagram.
- Test extension unavailable, task loaded, task started, success, failure, timeout, retry and duplicate callback behavior.
- Request webhook signing, idempotency and deletion semantics.

### Metrics/reviews probe

- Export Chrome Store reviews or capture all visible pages with stable review IDs.
- Join review timestamps to referral/quest/ambassador campaign dates.
- Define user cohorts by install, first training event, first reward, first ActionFi task, first paid Actionist use and 30/90-day retention.
- Reconcile all public milestone numbers against one dashboard export.

## Potential client-service opportunities

The public gaps point to practical engagement areas:

- trust center and privacy/security communication based on verified implementation evidence;
- KPI and attribution instrumentation across extension → ActionFi → Actionist;
- review/community provenance analysis and support-loop improvement;
- ActionFi partner case studies that show verified outcomes and payout reconciliation;
- Actionist onboarding, template/workflow quality, marketplace discovery and safety UX;
- content system that separates compelling AI-ownership narrative from independently provable product evidence.
