# Chrome extension and review deep dive

## Official store snapshot

Source: [Action Model on the Chrome Web Store](https://chromewebstore.google.com/detail/action-model/lhciigpkocgkbnbjimbbiejpfijdbcag?hl=en-GB).

| Field | Observed value |
|---|---|
| Name | Action Model |
| Category | Workflow & Planning |
| Rating | 4.9/5 |
| Ratings | 398 |
| Users | 80,000 |
| Version | 0.30.0 |
| Last update | 3 May 2026 |
| Package size | 3.17 MiB |
| Developer contact | `sina@actionmodel.com` |
| Declared data | User activity and website content |
| Store description | Passive browsing, workflow recording, anonymized action data, LAM training and `$LAM` rewards |

The official declaration says the developer does not sell data outside approved use, does not use it for unrelated core functionality, and does not use it for creditworthiness. Those are important commitments, but they are declarations rather than a substitute for an implementation audit.

## Permission and technical surface

[Chrome Stats](https://chrome-stats.com/d/lhciigpkocgkbnbjimbbiejpfijdbcag) reports the current listing as using:

- `storage`, `alarms`, `cookies`, `tabs`, `activeTab`, `scripting`, and `notifications`;
- host access to `<all_urls>`;
- content scripts on `<all_urls>`.

It labels the extension as a high-impact permission surface with a low likelihood of malicious behavior, and describes the product as having a fairly good public reputation. That is a third-party heuristic, not a security certification.

Chrome Stats also records permission changes: one version removed explicit `train.actionmodel.com`, `clerk.actionmodel.com`, and `api.actionmodel.com` host permissions while adding `alarms`; another removed optional `<all_urls>`. The current mirror still reports `<all_urls>` host/content scripts. This history is exactly why a fresh install and manifest diff should be part of the next diligence wave.

## Privacy claims versus verification needs

The [security/privacy docs](https://docs.actionmodel.com/the-large-action-model-lam/security-and-privacy) describe interaction telemetry such as clicks, navigation, timing, DOM and selected screenshots, while excluding credentials, payment data, SSNs, health data, private messages, raw form input, files, clipboard, camera, microphone and precise location. The [Chrome privacy page](https://actionmodel.com/chrome-privacy) emphasizes user-initiated training, masking and controls.

The potential mismatch to test is not necessarily that the claims are false; it is that broad browser permissions can observe more than the intended training schema. A competent audit should test:

1. What runs on every page before a user opts in or starts training?
2. Whether URL paths, DOM text, screenshot regions or form events can contain secrets or personal data.
3. Whether masking happens before local persistence, before network transmission, or only in a backend pipeline.
4. Whether paused/deleted data is actually removed from local storage, queues, backups and training sets.
5. Whether cookies/tabs permissions are required for core behavior or only optional integrations.
6. Whether the consent copy matches the actual data-processing purpose and retention period.

## Public rating and review picture

### Aggregate

- Official Chrome Store: 4.9/5 from 398 ratings.
- [Extpose](https://extpose.com/ext/lhciigpkocgkbnbjimbbiejpfijdbcag): 4.87 from 398 votes, 80K installs, version 0.30.0, updated 3 May 2026.
- [Chrome Stats](https://chrome-stats.com/d/lhciigpkocgkbnbjimbbiejpfijdbcag): 4.87/398 and a 90K user snapshot dated 2 August 2026.
- [Socket](https://socket.dev/chrome/package/lhciigpkocgkbnbjimbbiejpfijdbcag): matching basic listing metadata; no detailed security finding or README was exposed.

### Positive themes in the public subset

The public mirror’s visible reviews commonly mention:

- quick installation and straightforward onboarding;
- low perceived CPU/RAM usage and unobtrusive passive training;
- points/LAM rewards and the novelty of contributing to a community-owned model;
- a smooth interface and a supportive/active community;
- perceived privacy and the ability to browse normally.

### Complaints and feature requests

The visible negative or mixed feedback mentions:

- points accumulating slowly or not updating promptly;
- bugs and occasional sluggishness;
- insufficient activity visibility and a desire for a live training/points log;
- a need for more workflows, broader website coverage and richer dashboard feedback;
- the product feeling early-stage despite an attractive concept.

These are product-health signals worth testing in a live sandbox: reward accounting latency, extension event visibility, failure messaging, site compatibility and support response time.

## Review-quality warning

The Extpose mirror shows a large cluster of short, highly positive reviews on 25 May 2026, with repeated vocabulary around ease, points, privacy and community. Other reviews appear later and include the feature requests above. The cluster may be an organized community/reward campaign, but the available evidence does not prove inauthenticity.

The caution is stronger because Action Model’s own [referral/affiliate docs](https://docs.actionmodel.com/tokenomics/referrals-and-affiliates) pay bonuses for qualified referrals and its LinkedIn growth content describes quests involving follows, views and likes. Therefore:

- the rating is evidence of positive sentiment among a community;
- it is not clean evidence of independent product quality;
- review provenance, account age, incentive eligibility and review timing should be analyzed before using 4.9/5 as a sales or trust claim.

## Other public review surface

[Krain](https://app.krain.ai/app/1777) shows “ACTION MODEL AI” at 4.7/5 from 15 reviews, about 1.2K upvotes and no downvotes. Its aggregated community insights list active community, documentation and innovation as strengths, while performance, features, documentation, onboarding and support are improvement areas.

The qualitative Krain reviews are more useful than the score: several ask for stronger audit trails, deterministic behavior, safety/fail-safes, benchmarks, handling of ambiguity/partial inputs, and clear integration costs. Some older comments are generic and enthusiastic, so this is also a mixed-confidence source.

## App-store check and name collision

The Apple listing [Actionist — A Doing App](https://apps.apple.com/us/app/actionist-a-doing-app/id6477123297) is by Andrew Radcliff, is a generic iPhone/iPad to-do product, and shows two ratings. It is not evidence of an Action Model mobile app.

No verified official Action Model iOS or Android listing was found in this research run. The main site’s phone reference is about referrals/quests rather than a core mobile Actionist client.

## What “every review” would require

The requested complete review scrape was not possible from the public surface used here. The official Store page exposed the 398-rating aggregate but not a complete downloadable review export; Extpose exposed a subset. A complete review dataset requires one of:

- an authenticated browser capture with pagination,
- a permitted store/review API, or
- a user-provided export.

The current file intentionally gives the observed aggregate, representative themes and the provenance warning rather than pretending that a subset is all 398 reviews.
