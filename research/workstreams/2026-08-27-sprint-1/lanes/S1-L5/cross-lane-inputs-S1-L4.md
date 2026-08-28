# Cross-lane inputs received from S1-L4 (host foundation, P09/P10/P11)

Received: 2026-08-27 by ACTIONIST-S1-L5-RUNTIME from ACTIONIST-S1-L4-HOST.
Status: **cited read-only**. S1-L5 wrote nothing into S1-L4's paths and treats these as another lane's
claims to be verified before promotion, not as settled facts of this lane.
S1-L4 reported: commercial 100, OSS 121 (combined 221), 72 innovations, 27 local sources, smoke PASS.

---

## Inputs that change S1-L5 design decisions

### P14 — runtime, verification, release

1. **Migration authority is release-scoped (their INV-P09-6).** A release pins schema versions of every
   owned resource *and* the expected donor schema versions; no release without a migration rollback
   path. This **strengthens and extends D-P14-01/02**: the donor schema version is an additional
   rollback object with a horizon owned by a third party. It also independently restates the local
   donor standard's "Git rollback is not a DB rollback".
2. **Tiered sandbox selection per action** (isolate / gVisor / microVM, chosen from the action manifest)
   is registered by them as P11-I-014 but explicitly assigned to P14 to own. This is a refinement of
   the single-provider assumption in my runtime profiles: isolation tier may be a per-action property
   rather than a per-profile constant. **Registered as an open extension to D-P14-04.**
3. **Repository-identity correction:** `e2b-dev/infra` is the Firecracker layer worth reading;
   `e2b-dev/E2B` (the high-star repo) is largely SDK plus docs. Judging by stars gives the wrong answer.
   Consistent with this project's standing evidence rule and with my own A22-derived position.
4. **Licence landmines in P14's likely dependency space, all invisible at badge level:** Vault BSL-1.1
   (OpenBao is the MPL-2.0 LF fork); Inngest SSPL-1.0 despite OSS marketing; Restate BSL with a nuance
   *in our favour* (permits executing services we wrote, forbids third parties registering their own);
   Convoy ELv2 and the best functional fit in its category, which is what makes it dangerous; Skyvern
   AGPL-3.0; hookdeck-cli Apache-on-CLI-only with a closed SaaS gateway — structurally the Composio
   trap. **Directly relevant to P14 release gates**, since licence notices and source-offer obligations
   are release gates in the local donor standard.
5. **Durable execution seams:** DBOS lightest (library over Postgres, no server process), Hatchet the
   step up, Temporal MIT and most proven but demoted for footprint. Open-core scope for Hatchet/DBOS is
   **unestablished** — a per-feature question the licence does not answer. Relevant to my worker and
   scheduled-job profiles.

### P13 — preview, editor and change loop

6. **Navigation is contributed data, not shell source.** A nav node's visibility predicate *is* its
   route guard — one evaluation, never two drifting copies. Consequence for P13: **if the editor mutates
   navigation, it mutates registry records, not application source.** This is a concrete instance of my
   D-P13-03 (out-of-bounds edits unrepresentable) and resolves part of X-P13-4 (shell-level edit scope):
   shell edits are data edits.
7. **Route-ref indirection** (Backstage, confirmed by their direct doc read): modules link without
   knowing any concrete path including their own; bindings declared once at startup and explicitly
   disableable. They rate it the highest-value transferable idea in their lane. For P13 it is the
   mechanism that makes **pages relocatable without breaking links**, which is exactly the selector-
   stability property my D-P13-02 requires for intent replay across upgrades. **Promoted into my
   register as the concrete implementation of P13-I-006 (selector stability contract).**

### P15 — learning and feedback

8. **The per-tenant action ledger** (every attempt, retry, idempotency replay, policy denial, approval —
   receipts deliberately exclude payload) is offered as P15's production-signal substrate. This is a
   strong fit with my D-P15-01/D-P15-04 and with my privacy constraint C2 (structural facts only, never
   client content): a ledger that excludes payload by construction satisfies the privacy requirement
   at the source rather than by downstream filtering.
9. **Settings-change audit as a first-class event stream**, where the override hierarchy already records
   level and principal for every write. Adds a signal class my inventory did not have.
10. **A licence-body CI gate** (read LICENSE text, never the API SPDX field) belongs in the P15 flywheel.
    Their empirical basis: 20+ corrections in one lane; five P09 surfaces would pass an automated SPDX
    scan silently (Redpanda reports `license:null` with terms in `licenses/bsl.md`); three structural
    trap classes checked deliberately and all three found live. **This is a concrete, buildable P15
    mechanism with measured justification — registered as an addition to the refresh design (P15-I-062
    licence re-check on refresh, now with a specified method).**

---

## The finding that may change sprint scope

S1-L4 reports that after **33 commercial surfaces, no observed surface renders a third party's settings
inside host-owned chrome.** Shopify/Forge/Superblocks leave guest settings to the guest; Frontegg/Permit
sell the admin UI as their product; Zoho One and M365 unify at identity/admin and explicitly do not
suppress donor chrome.

They correctly frame this as absence of evidence after a deliberate sweep, not proof of impossibility,
and recommend splitting ledger assumption **A34** into three tiers: identity (strong precedent),
navigation (two proven halves, neither shipped whole), settings (**none**).

**Relevance to S1-L5:** my P13 work assumes the client edits one coherent product surface. If donor
settings cannot be absorbed into host chrome, then either (a) some capabilities expose their own
settings UI, which the P13 editor cannot bound — a direct instance of the "unbounded fallthrough"
posture arriving through the back door — or (b) settings absorption is bespoke per donor, which raises
adaptation cost and therefore changes P15's primary ranking signal. **Registered as an open risk against
X-P13-4 and AP15-6.** I am not adopting their A34 split (that is their lane's call and the ledger is
coordinator-owned), but P13's bounded-edit claim is weaker than it looks if settings absorption fails.

## Corrections S1-L4 asked not to be inherited

- Their draft "non-2xx is not cached" was **wrong**: Stripe caches status and body regardless of
  success or failure and returns cached 500s. Their correction came from reading the primary source.
- Rate limiters run **before** Stripe's idempotency layer, so a 429 can produce a different result under
  the same key — hence their INV-P11-11 (Actionist's idempotency layer must sit inside its rate limiter
  and auth check). Relevant to my worker-profile idempotency requirement (P14-I-023).

## Claims S1-L4 flagged as NOT to be repeated as fact to Cena

Carried into my own do-not-quote list: Anon's "never stores credentials" (marketing site only, docs
never reached); Paragon isolation detail (rests on its own blog after a docs 404); observed compliance
certifications are logos, not inspected reports; 37 of 45 of their P11 OSS rows are badge-level licence
only.

## Their still-open items that gate my parts

- Provider icon licensing **unverified** — blocks a client-facing connector picker, which is a P13
  surface.
- Host runtime language undecided; object storage unresolved — both bear on P14 runtime profiles.
- Whether idempotency class can be derived at catalogue-import time for a useful fraction of 1,445
  providers — bears on P14-I-023 and on P15's signal quality.
