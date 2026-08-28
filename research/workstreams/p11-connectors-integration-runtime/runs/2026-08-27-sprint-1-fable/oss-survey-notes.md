# P11 — OSS survey: the execution-safety layer

Run: 2026-08-27, Sprint-1 lane S1-L4, part P11. Research only; nothing cloned or executed. 45 rows
in `top-repos.jsonl` — 10 `top10`, 7 `rejected`, 28 `register`.

## Method

Scope deliberately excludes the connector catalog, which the local pack already covers
(OpenConnector, Activepieces, Nango/Airbyte, jentic, n8n, ~90% API-key auth mix). This survey covers
what happens after you have a connector and are about to fire a real side effect at someone else's
system: does it run exactly once, does it back off, does it hold a credential safely, is it allowed
to make that call, and where does untrusted code execute.

Every repo was resolved through the GitHub API for licence, stars, last push and archive state on
2026-08-27. Where the API returned `NOASSERTION` — its signal that the LICENSE file is not a
recognised OSI text — the body was fetched and read. That step produced every landmine below; all
five would have passed a badge scan. Rows say `license_verified: body` only where the text was
actually read (8 of 45); the rest say `badge` and need re-checking before adoption.

Four repo identities were corrected: `svix/svix` is a 404 (real repo `svix/svix-webhooks`),
`upstash/ratelimit` → `upstash/ratelimit-js`, `bitnami-labs/sealed-secrets` → `bitnami/…`,
`casbin/casbin` → `apache/casbin`.

## Licence landmines

Five widely-cited "open source" projects are not, plus two mixed cases.

**Vault (R-017) is BSL 1.1, licensor now IBM** — body names "Vault Version 1.15.0 or later… (c) 2024
IBM Corp" and bars offering the work to third parties hosted or embedded in competition with IBM's
paid versions. A credential vault inside hosted multi-tenant Actionist sits squarely in that zone.
**OpenBao (R-016) is the answer**: the LF fork from the last MPL-2.0 commit before the relicense,
and top-10 for exactly that reason.

**Inngest (R-003) is SSPL-1.0** — `LICENSE.md` opens "Server Side Public License, Version 1.0" with
an Apache-2.0 *future* grant. §13 forces publication of the entire service-management stack if
offered as a service. Most likely to be mistaken, since Inngest markets heavily on being OSS.

**Restate (R-002) is BSL 1.1, and the nuance lands better than expected.** The Additional Use Grant
forbids a "Public Restate Platform Service" — a managed service where *third parties register their
own service deployments and invoke them* — while explicitly permitting production deployments
invoking services the licensee wrote. Actionist executing its own tenants' actions is permitted;
exposing Restate registration to customers is not. Conditional, not disqualified.

**Convoy (R-025) is Elastic License 2.0** behind a click-through preamble; ELv2 forbids providing
the software to third parties as a hosted service — precisely a multi-tenant webhook plane. It is
also the best functional fit in its category, which is what makes it dangerous.

**Infisical (R-018) is MIT with an `ee/` carve-out** (confirmed in body): content under any `ee/`
directory falls under `ee/LICENSE`, the rest is MIT Expat — so each adopted feature needs a path check.

**Both MCP repos (R-027, R-028) report NOASSERTION because they are mid-relicense**: MIT → Apache-2.0,
where contributions without relicensing consent *remain MIT* and no rights beyond the original
licence are conveyed. Provenance is per-file.

Two more: **hookdeck-cli (R-026) is Apache-2.0 on the CLI only** while the event gateway is closed
SaaS — the same structure as the Composio finding on 27 Aug, a permissive licence on a thin client
to a paid hosted API; adopting it is buying a vendor. **Skyvern (R-032) is AGPL-3.0**, not hidden
but the strongest copyleft here, with §13 triggering on network use.

## Top-10 rationale

Chosen for seam quality against Actionist's shape — an embeddable multi-tenant runtime — not raw
capability. Several strong projects were demoted for being products to run beside Actionist rather
than mechanisms to build into it.

**hatchet-dev/hatchet** and **dbos-inc/dbos-transact-ts** take durable execution; DBOS is the
lightest seam here (durable workflows as a *library* over Postgres, no server process), Hatchet the
step up when a real queue is needed without a broker. *Temporal was demoted* — MIT and most proven,
but its server/persistence/matching footprint buys a guarantee the lighter two already provide.

**paveg/hono-idempotency** is top-10 *as a specification, not a dependency* (13 stars, one author).
Its README is the most complete idempotency contract found anywhere here: IETF
draft-ietf-httpapi-idempotency-key-header compliance, SHA-256 body fingerprinting so a reused key
with a mutated payload is rejected, optimistic locking for concurrent replays, RFC 9457 problem
details, `Idempotency-Replayed`, and the Stripe rule that non-2xx is *not* cached. Reimplement it.

**upstash/ratelimit-js**, **ThreeDotsLabs/watermill** and **svix/svix-webhooks** are the small,
readable, permissive picks where alternatives are heavyweight (Debezium) or licence-blocked
(Convoy). **openbao/openbao** takes secrets on licence grounds. **microsoft/playwright** is
corporate-backed Apache-2.0 and the substrate the MIT and AGPL agentic layers all sit on.

**e2b-dev/infra**, not the 13.5k-star `e2b-dev/E2B` — the latter is largely SDK and docs while
`infra` is the Firecracker layer that answers "is this self-hostable"; judging E2B by the popular
repo gives the wrong answer. **open-policy-agent/opa** is the embeddable decision point.
*Firecracker and workerd were demoted*: Firecracker because `e2b-dev/infra` carries the microVM slot
with plumbing attached; workerd because it is JS/WASM-only — though its *binding* model (no ambient
network or filesystem, only injected capabilities) is the most portable idea in the category.

## Gap map

**Well supplied.** Sandboxing is the strongest category: Firecracker, gVisor, workerd, Wasmtime,
Deno and e2b-dev/infra span the whole isolation/cost curve, all permissive, all actively pushed.
Durable retry is close behind once SSPL and BSL entries are removed. Policy *decision* engines
are mature (OPA, Cerbos, Casbin, OPAL). Browser automation is abundant, though its best agentic
layer is AGPL.

**Partial — adapt, do not adopt.** Secrets has exactly one clean answer after the Vault
relicense, younger than its ecosystem assumes. Rate limiting has good per-process libraries but
nothing shaped as per-tenant-per-connector fair-share quota. Svix covers webhook *sending*;
inbound ingest is uncovered, and the project covering both is licence-blocked.

**Must build.**

*Idempotency has no production OSS supply* — the headline finding. A search for idempotency-key
middleware returns a field whose most-starred result is **14 stars**, most 0–13, many pushed
within the last two months by different single authors: a pattern of everyone privately
rebuilding the same middleware rather than a library existing. Stripe's SDK gives the caller
half; the server half (key store, fingerprint, replay, concurrency lock, TTL) is Actionist's to
write. Since P11 owns real side effects at third-party systems, this is the most important build.

*Token brokering in the needed direction does not exist.* Every mature project runs the wrong
way: oauth2-proxy guards *inbound* access, Hydra makes you an authorization *server*, Dex
federates *identity* not API authorization. Nothing stores and refreshes many long-lived
third-party tokens per tenant per connector. Adopt Hydra's lifecycle model; build the broker.

*Policy enforcement on egress is unbuilt.* OPA and Cerbos decide, neither enforces; the decision
binds only when paired with a proxy that can refuse the outbound call, and no surveyed project
ships that pairing for tool calls. Both MCP-safety projects are weak bets — lasso-security's
gateway is ~7 months stale at 385 stars, Portkey's ~3 months stale and aimed at LLM routing.

*MCP has discovery without trust.* The registry carries no signing guarantee that a listed
server is the code it claims and no runtime permission model; reference servers assume a single
trusted local operator, with no tenancy or per-call authorization.

## Innovation candidates

- **P11-I-R-1** — Idempotency as a connector-manifest field: naturally-idempotent / idempotent-with-key / unsafe; runtime refuses to auto-retry the third.
- **P11-I-R-2** — Request-fingerprint idempotency store keyed per tenant *and* connector, so a replayed key with a mutated payload is a hard error, not a silent double-charge.
- **P11-I-R-3** — Effectively-once composition: transactional outbox for delivery plus a consumer-side idempotency gate, since at-least-once alone never reaches once.
- **P11-I-R-4** — Durable execution as an embedded library (DBOS shape), keeping the runtime deployable as one artifact.
- **P11-I-R-5** — Per-tenant-per-connector fair-share rate limiting via a shared quota service, so one tenant cannot exhaust a shared third-party quota.
- **P11-I-R-6** — Adaptive backoff from provider signals: honour `Retry-After` and observed 429 rates per connector, not a fixed exponential curve.
- **P11-I-R-7** — Outbound token broker: per-tenant-per-connector storage, auto-refresh, rotation, instant revocation — the identified must-build.
- **P11-I-R-8** — Short-lived credential leasing (OpenBao dynamic-secrets pattern) so connector code holds a lease, never a long-lived secret.
- **P11-I-R-9** — Capability-binding execution from workerd/WASI: no ambient network or filesystem, only injected capabilities.
- **P11-I-R-10** — Egress allow-list derived from the connector manifest — the enforcement half OPA lacks.
- **P11-I-R-11** — Policy on action *payload* (amount, recipient, record count) with a human-approval branch above a per-tenant threshold.
- **P11-I-R-12** — Live policy revocation via OPAL-style distribution, so disabling a connector takes effect immediately rather than at cache expiry.
- **P11-I-R-13** — Dry-run mode per action, returning the exact outbound request that *would* be sent, for review before first live use.
- **P11-I-R-14** — Signed connector manifests with provenance check at load, filling the trust gap the MCP registry leaves open.
- **P11-I-R-15** — Tiered sandbox selection per action from its manifest: isolate (trusted) / gVisor (semi) / microVM (arbitrary).
- **P11-I-R-16** — Unified action-attempt ledger: every attempt, retry, idempotency replay and policy denial as one queryable per-tenant audit trail.
- **P11-I-R-17** — Webhook ingest with replay: durable capture of inbound callbacks, signature verification, operator-triggered replay — the half Svix does not cover.

## Unknowns

Thirty-seven of 45 rows carry `license_verified: badge` — metadata, not a read body. Sound for
filtering, not for committing: all five landmines were invisible at badge level. Wasmtime is flagged
Apache-2.0 but the WASM ecosystem commonly uses Apache-2.0-with-LLVM-exception, a different text.

Not established: whether Hatchet's or DBOS's MIT trees exclude features their paid clouds sell
(open-core scope is a per-feature question the licence does not answer); whether Svix's *server*
self-host terms match its MIT SDKs; what remains open in Sysbox post-Docker-acquisition; and
throughput ceilings for Postgres-backed queues at expected action volume. No repo was cloned or run,
so every claim is documentary evidence about licences, maintenance and architecture — not a measured
benchmark.