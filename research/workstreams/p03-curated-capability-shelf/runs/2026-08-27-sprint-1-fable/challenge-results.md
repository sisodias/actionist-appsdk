# S1-L2 adversarial challenge — results

Executed against the raw survey files, per challenge-plan.md. Two headline claims changed
materially. Both changes make the shelf less flattering to its own prior framing, which is
the point of running the challenge before writing the report rather than after.

## H1 — REFUTED IN THE HARSH DIRECTION: portal supply is ~0, not 6
## (revised after adopting the repair subagent's independent pass — see H1-rev at the end)

The pre-repair survey showed 6 permissive + candidate rows tagged `portal`, which would
have read as "portal is adequately supplied." Reading what those rows actually are:

| Row | What it actually is | Portal in the archetype sense? |
|---|---|---|
| BookStackApp/BookStack | wiki / documentation platform | No — internal knowledge base |
| Redocly/redoc | renders OpenAPI reference docs | No — a doc renderer |
| appsmithorg/appsmith | internal-tool builder | No — trusted staff users |
| marmelab/react-admin | admin framework over an API | No — admin, not external |
| refinedev/refine | admin/CRUD framework | No — admin, not external |
| calcom/cal.diy | booking/scheduling | No — scheduling with a public page |

The archetype definition (Phase-8 §2) is specific: a portal is *untrusted external
identity + scoped read + request submission* — "an authorization product before it is a
UI." None of the six clears that bar. The `portal` tag was applied to roughly "has a web
surface an outsider might see."

**Consequence:** clean portal supply is effectively **zero**, worse than the count implied.
Phase-8's finding that no credible permissive candidate cleared the portal gate is
confirmed, not softened. This strengthens the build case for the portal spine.

**Action taken:** the overlap graph must not count loose `portal` tags as portal supply.
Recorded as a taxonomy-precision defect; the classification script's `clean_oss_candidates`
figure for portal is therefore an overcount and is annotated as such in the report.

## H1b — PARTIALLY REFUTED, and this one favours borrowing: case_workflow scarcity was a stack artifact

Phase 8 concluded the case/workflow spine has no clean supply. That conclusion was reached
under a JS/TS stack filter. Removing the filter, the survey surfaces genuine general-purpose
case/workflow engines with permissive licences:

- **flowable/flowable-engine** — Apache-2.0, pushed 2026-08-27 (0 days), 9,495 stars, CI
  configured, containerized, docs present. Implements **CMMN** — the Case Management Model
  and Notation standard. That is not a workflow feature bolted onto a product; it is the
  case-management primitive itself.
- **kiegroup/jbpm** — Apache-2.0, confirmed only by reading the root file
  `LICENSE-Apache-2.0.txt` (the `/license` endpoint returned empty because the filename is
  non-standard — an API-field read would have recorded this as unlicensed).
- **camunda/camunda** — mixed: no root LICENSE, and a `licenses/` directory carrying both
  `APACHE-2.0.txt` and `CAMUNDA-LICENSE-1.0.txt`. Needs per-module resolution; correctly
  held at reference rather than promoted on the strength of an Apache file being present.

**Consequence:** the honest statement is not "case/workflow has no clean supply." It is
**"case/workflow has no clean supply *on the JS/TS spine*; on the JVM it has mature,
permissive, service-shaped supply."** That converts the question from build-versus-nothing
into a real architectural trade: adopt a JVM engine behind a service boundary, or build a
JS/TS spine to keep one stack. Those have very different costs and the shelf should present
both.

This is exactly the failure mode the project's own evidence standard warns about — a prior
finding inherited as a verdict rather than re-tested against its own scope condition.

## H2 — SURVIVES: copyleft rows are worth keeping on the shelf

Challenge: if copyleft rows were also dead on other grounds, keeping them is clutter.
Measured across 65 strong-copyleft rows: 58 report active maintenance; dispositions are
60 reference / 2 hold / 3 reject. They are live systems, not abandonware. Keeping them as
intact_service or pattern candidates (D-03) preserves genuine optionality, particularly in
the scarce kinds where copyleft holds the best supply.

## H3 — SURVIVES WITH A NARROWED CLAIM

The corpus interface resolution was independently re-derived by the lane owner (directory
listing plus `foundry status --json` returning ENGINE UNREACHABLE at exit 0). The residual
challenge — is this definitely the asset the operator remembers as "1.3M repos"? — cannot be
closed while the engine is unreachable. SKILL.md quotes the operator's own words about
"1.2M repos on the mini," which is a strong documented basis but not a live count.
Reported as: interface resolved to this asset on that quoted basis; all counts unverified.

## H4 — SURVIVES AS A NARROWED CLAIM

"No user-provided list exists" is not provable from a bounded path check. Client comms were
deliberately not read (private, burned credential). Restated as: no enumerated list in the
paths checked, paths named, request routed to CENA rather than asserting universal absence.

## H5 — TAXONOMY HOLDS, WITH ONE HONEST CAVEAT

Walking the 17-industry atom table found no demanded capability outside the 24 kinds.
The caveat stands: compliance overlays (trust accounting, statutory deadline clocks, PHI
consent) are classified as custom-delta rather than kinds. That is defensible — they are
per-jurisdiction rules, not reusable software capabilities — but it is a judgement that
suits my framing, and it is flagged rather than buried.

## H6 — self-audit of subagent output

Executed mid-run rather than deferred: three defects found and repaired (under-tagged
scheduling/e-sign, degenerate `pattern` shape assignment, recall-based commercial claims).
The H1 portal mis-tagging above is a fourth defect, found by this challenge pass and NOT by
the structural audit — evidence that the mechanical checks alone were insufficient and the
adversarial read earned its place.


---

## H1-rev — my own portal pass was itself incomplete; the subagent's was better and was adopted

After I applied a 13-row portal demotion, the repair subagent independently ran the same
correction against all 19 portal-tagged rows and demoted **19**. Comparing the two passes,
its work was stronger on both evidence and consistency, and I adopted it wholesale.

**Evidence.** I reasoned largely from each row's description and claim text. It read each
repository's actual authentication surface through the contents API — e.g. BookStack's
`app/Access` directory, Budibase's `packages` layout, Nextcloud's `apps` list showing
`files_sharing`, `sharebymail`, `federatedfilesharing`, `oauth2`, `user_ldap`. Structure
beats description for exactly this question.

**Consistency.** I demoted `cal.diy` on the grounds that a public booking page is not a
scoped-read portal, then failed to apply that same reasoning to easyappointments, rallly,
tymeslot, thunderbird/appointment and openresto — leaving five booking tools tagged as
portals for no principled reason. The subagent caught all five. An *anonymous* public form
has no external identity at all, which is arguably further from the archetype than the
internal-admin frameworks I did demote.

**Its two retentions are correctly reasoned**, including one I would have gotten wrong:
- `open-formulieren/open-forms` (EUPL-1.2) — the unambiguous archetype instance. All three
  elements are first-class subsystems: `authentication/` carries external citizen identity
  (DigiD-class), `prefill/` is scoped read of that identity's own held data, and
  `submissions/` + `registrations/` is request submission into a back-office case system.
- `nextcloud/server` (AGPL-3.0) — kept narrowly. It genuinely models an external recipient
  authenticating against a share with scoped read and a File Drop upload path, but it is a
  file-sharing product, not a purpose-built portal, and must not be read as supplying the
  archetype whole.

**Final state: portal = 2 rows, both copyleft, both reference, 0 permissive+candidate.**
The gap is worse than my own corrected pass showed, and considerably worse than the original
six-clean-candidate reading.

**Method note worth keeping.** Two independent passes over the same defect produced
materially different results, and the second was better. The lesson is not that my pass was
sloppy in isolation — it is that a judgement-heavy taxonomy correction benefits from being
run twice by different agents and reconciled, the same way the licence re-query did. I did
not plan that redundancy; it happened because a message crossed in flight. It should be
deliberate next time.

## H7 (new, from the same exchange) — product-versus-primitive: clean-candidate counts overstate supply

The repair subagent's scarcity finding generalises beyond the two kinds it was found in, and
it survives challenge. In e-signature, all four full products (documenso, docuseal, OpenSign,
libresign) are AGPL, while all the permissive rows are signing libraries with no workflow,
signer identity or audit trail. In scheduling, `calcom/cal.diy` is the only permissive full
booking product among 15 rows.

So a "clean candidate" count conflates *a product you could run* with *a primitive you would
build a product around*. Raising a row count can therefore make supply look better while
usable supply is unchanged — the same failure mode as the 728-vs-113 connector correction.
Recorded in the report as §4.1, with the `clean_oss_candidates` column relabelled an upper
bound. Splitting all 23 kinds product-versus-primitive is the highest-value next pass, and I
expect it to lower several commodity classifications.
