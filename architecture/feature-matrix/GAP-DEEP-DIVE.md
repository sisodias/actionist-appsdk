# The four gaps — world-wide deep dive

Date: 2026-08-27 · Research-only · NOT_ADMITTED · no implementation authorized

**Why this document exists.** The 28-row repo-capability matrix recorded four
`gate: n/a` lanes — places where nothing in the 500-repo pool solved the problem. Those
verdicts were **pool-relative**: the pool was assembled from *builder*-focused queries
(lovable clone, ai app builder, codegen agent), so it systematically under-sampled the
*infrastructure* projects that actually solve these four problems. This pass searched all
of GitHub and the open web instead.

**Result: two of four prior verdicts are OVERTURNED.** The two that survive
(GAP 1, GAP 2) survive for a sharper reason than "nobody built it", and that sharper
reason changes what we build.

Every star count, SPDX id and licence state below was re-derived from `gh api` in the
same session as this write. Licence *badges* were not trusted: five repos in this pass
carry a GitHub licence field that misrepresents the actual terms, and each was resolved
by reading the LICENSE body.

---

## Licence reality check — read this before the gaps

The single highest-value output of this pass. Five projects that a badge-reader would
have mis-gated:

| Repo | GitHub says | LICENSE body actually says | Real gate |
|---|---|---|---|
| `hashicorp/vault` | NOASSERTION | **BSL 1.1**, licensor IBM, with a competitive-offering clause | **AVOID** |
| `Infisical/infisical` | NOASSERTION | **MIT core**, but everything under `ee/` is proprietary | LIFT (core only) |
| `unkeyed/unkey` | NOASSERTION | **AGPLv3** outside `packages/` | STUDY |
| `Dokploy/dokploy` | NOASSERTION | **Apache-2.0**, except a `/proprietary` dir | LIFT |
| `caprover/caprover` | NOASSERTION | Apache-2.0 **plus a superseding appendix** restricting paid features and requiring modifications of free features to stay free/OSS | STUDY |
| `daytonaio/daytona` | NONE | repo **gutted**, unmaintained since June 2026 | AVOID |

### Vault is disqualified by name, not by inference (DIRECT)

`gh api repos/hashicorp/vault/license` → the body is the Business Source License 1.1.
Licensor is **IBM** (not HashiCorp — the IBM acquisition is reflected in the licence
text). The Additional Use Grant permits production use *provided*:

> "Your use does not include offering the Licensed Work to third parties on a hosted or
> embedded basis in order to compete with IBM Corp's paid version(s)"

A multi-tenant app builder that provisions secrets for generated apps is *embedding*
secrets management in a hosted product. This is exactly the clause. **AVOID — do not
build on Vault.** This is the ELv2/Composio failure mode from the project instructions
repeating itself, and it was caught the same way: by reading the body.

### Daytona is dead as an OSS option (DIRECT)

`daytonaio/daytona` shows **71,868 stars** — it would top any star-ranked shortlist. The
repo now contains only `README.md` and `assets`. The README's first line:

> "**This repository is no longer maintained.** As of June 2026, Daytona's core
> development has moved to a private codebase."

`gh api repos/daytonaio/daytona/license` returns **404** — no licence at all on the
current tree (the README points to the licence at tag `v0.190.0`). Any recommendation
that ranks Daytona by stars is ranking a tombstone. This directly invalidates one of the
four providers the prior GAP 3 framing assumed we would want to swap between.

---

## GAP 1 — Row security for generated apps over a platform-owned Postgres

**Prior pool-relative verdict: CONFIRMED WORLD-WIDE** (with the reason corrected)

### State of the art

The prior verdict said "no OSS lets an agent safely author per-tenant access over a
shared platform DB." That is still true, but the world-wide search shows *why*, and the
why is more useful than the absence.

The ecosystem has split into two camps, and **neither camp is what we need**:

1. **App-layer query rewriters** (ZenStack) — enforce policy by transforming the query
   before it reaches Postgres. Strong DX, but the guarantee dies the moment anything
   reaches the database by another path.
2. **External policy engines** (Cerbos, OpenFGA, SpiceDB, Oso) — decide *yes/no* on a
   request, and increasingly can return a *filter* for list queries. They do not live in
   the database either.

The thing that would close the gap — a platform defining a policy surface **inside
Postgres** that generated app code cannot widen — is not a product anyone ships. RLS
itself is the only mechanism with that property, and the tooling around it is
authoring/testing aids, not a containment contract.

### Top 3 candidates

**1. ZenStack — `zenstackhq/zenstack`, 2,930★, MIT, pushed 2026-08-24 → STUDY (not LIFT for this purpose)**

The most-cited candidate, and it does **not** do what the lead suggested. The lead
described it as "policy layer generating Prisma+RLS". Verified false for V3:

- `packages/plugins/policy/src/` contains `policy-handler.ts`, `expression-transformer.ts`,
  `column-collector.ts`. `policy-handler.ts` imports `SelectQueryNode`, `WhereNode`,
  `AndNode`, `OperationNodeTransformer` from `kysely` and extends the transformer —
  i.e. it rewrites the **query AST in the application process**.
- `gh search code "ROW LEVEL SECURITY" --repo zenstackhq/zenstack` → **`[]`**, zero hits.
  V3 does not emit Postgres RLS at all.
- README confirms the V3 rewrite: "replaced Prisma ORM with its own ORM engine built on
  top of Kysely".

**This is the disqualifying property.** ZenStack enforces in the app layer. In our
architecture the *generated app* is the app layer — the untrusted thing. A policy that
lives where the generated code runs is a policy the generated code can go around
(raw SQL, a second client, a direct connection string). ZenStack is excellent for a
trusted-developer product and wrong for an agent-authored one.
*Evidence: https://github.com/zenstackhq/zenstack/blob/main/packages/plugins/policy/src/policy-handler.ts*

**2. Cerbos — `cerbos/cerbos`, 4,556★, Apache-2.0, pushed 2026-08-27 → STUDY, borrow the shape**

Cerbos is a Policy Decision Point: YAML policies, deployed via git-ops, evaluated by a
service **outside** the application. The interesting part for us is `PlanResources`
(`internal/svc/cerbos_svc.go`, `api/public/cerbos/svc/v1/svc.proto`) — the query planner,
which converts a policy plus a principal into a *filter expression* the caller applies to
its own query.

That is the right **shape** for policy-as-contract: policy authored once, centrally, in a
place the app does not own; the app receives a constraint rather than defining one. It is
the wrong **location** — the caller still has to apply the filter honestly, so it has the
same trust problem as ZenStack unless the caller is our platform code rather than
generated code.
*Evidence: https://github.com/cerbos/cerbos (README, "authorization layer"), PlanResources in svc.proto*

**3. Nile — `niledatabase/niledatabase`, 1,076★, Apache-2.0, pushed 2026-03-04 → AVOID as a dependency**

Pitched as "Postgres re-engineered for multi-tenant apps" with tenant virtualisation, and
conceptually the closest thing to what we want. But the public repo is **docs, examples
and `www` only** — root contains `examples/`, `www/`, and config; there is no engine.
`gh api users/niledatabase/repos` shows the substantive code is `nile-auth` (97★) and
`nile-js` (23★); the database itself is not open source. README states "We are in public
preview currently." Last push 2026-03-04, ~6 months stale.

So Nile is a **hosted product**, not a component. Adopting it means moving the platform
database to a vendor in public preview — which contradicts the whole scoped-clone thesis
that *we* own the database.
*Evidence: gh api repos/niledatabase/niledatabase/contents → no engine dirs; README "public preview"*

Also checked, same disqualification (policy outside the DB, app must cooperate):
`openfga/openfga` 5,661★ Apache-2.0; `authzed/spicedb` 6,990★ Apache-2.0;
`osohq/oso` 3,491★ Apache-2.0 but **pushed 2025-02-26, ~18 months stale**.

Testing tools exist but are not containment: `theory/pgtap` 1,161★ carries **no declared
licence** (default copyright → STUDY only, despite being the standard answer), and
`usebasejump/supabase-test-helpers` 131★ MIT is unmaintained since 2024-05-15.

### Recommended answer: BUILD, on the pattern the search actually revealed

The valuable finding is not "nothing exists" — it is **that every candidate enforces
where the untrusted code runs**. That reframes the build:

> **The platform owns the RLS policies as a fixed contract, and the generated app never
> gets a connection that could widen them.** Generated code does not author policy, does
> not receive a superuser DSN, and reaches data only through a platform-owned data
> accessor that sets the tenant context (`SET LOCAL` / `current_setting`) before every
> query. Policy is written once by us, in Postgres, and is not part of the generation
> surface at all.

This is chef's discipline (matrix row 1: model writes handlers in a blessed dir, identity
comes from a platform helper, never raw queries) applied to the data layer, with RLS as
the enforcement floor rather than the generated artifact. Lovable's data-leak class exists
precisely because the LLM authors the policy; the fix is to remove policy from the
model's output space, not to make the model better at writing it.

Borrow from Cerbos: policy-as-versioned-artifact, deployed via git-ops, decoupled from
app code. Borrow from pgTAP *as a technique* (not as code — no licence): every platform
policy ships a test proving a cross-tenant read returns zero rows. That test is the
`eval` field Block Contract v0 already requires.

### What changes in SYNTHESIS.md

The bullet "RLS over a platform-owned Postgres is unsolved in OSS" stands, but its
conclusion should be sharpened from *"it must be designed"* to:

> Every OSS access-control layer (ZenStack, Cerbos, OpenFGA, SpiceDB) enforces in the
> application process. In an agent-authored product the application process is the
> untrusted party, so none of them is a containment boundary. The design constraint is
> therefore **policy must live in Postgres and outside the generation surface** — verified
> by ZenStack V3 shipping zero `ROW LEVEL SECURITY` statements and enforcing via Kysely
> AST rewriting instead.

---

## GAP 2 — Custom domains at scale: user types domain → certificate served

**Prior pool-relative verdict: CONFIRMED WORLD-WIDE as a pool fact, but OVERTURNED as a
build problem** — the canonical solution exists, is Apache-2.0, and is 75k stars. The
pool simply contained no web servers.

### State of the art

The prior note that "per-customer custom domains need per-host ACME, and that path is
unimplemented" is correct about the pool and correct about the mechanism. It is wrong to
leave the impression this must be built. **Caddy's On-Demand TLS is the canonical answer
and has been for years.**

### Top 3 candidates

**1. Caddy — `caddyserver/caddy`, 75,236★, Apache-2.0, pushed 2026-08-25 → LIFT / deploy**

On-Demand TLS "dynamically obtains a new certificate during the first TLS handshake that
requires it." The handshake is held while the cert is obtained; only the first request for
a hostname is slow (a few seconds), then it is cached and renewed in the background. The
docs name our exact use case — domains that "belong to others, e.g. they are customer
domains" — and note businesses use it to serve "tens of thousands of sites."

The mechanism that makes it safe is the **`ask` endpoint**, and it is mandatory:

> "On-demand TLS must be both enabled and restricted to prevent abuse."

Caddy calls an HTTP endpoint you host with the SNI name; you answer 200 only if that
domain belongs to a real customer (the docs suggest querying "the accounts table of your
database"). Without it, anyone pointing DNS at your IP makes you request certificates on
their behalf. Config surface: the `tls` directive in a site block, the `on_demand_tls`
global option, and the `on_demand` block in the JSON automation policy. Built-in rate
limiting is "10 attempts per ACME account per 10 seconds."
*Evidence: https://caddyserver.com/docs/automatic-https*

**2. Cloudflare for SaaS — RENT, and this is the real competitor to option 1**

Verified from Cloudflare's own plans page: Free, Pro and Business each **include 100
custom hostnames**, then **$0.10 per hostname/month**, to a maximum of **50,000**
(raised from 5,000 in May 2025). Enterprise is custom-priced and unlimited.
**Wildcard custom hostnames and apex proxying are Enterprise-only** — that is the limit
that matters for us, because our preview subdomains want a wildcard.

Cost model: 1,000 customer domains = 900 billable × $0.10 = **$90/mo**. 10,000 domains =
**$990/mo**. You also inherit DDoS protection and a global edge, and you stop owning
ACME failure modes entirely.
*Evidence: https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/plans/*

**3. Approximated — RENT, the turnkey option**

$20/mo minimum, **$0.20 per custom domain/month**, volume discount growing 5 percentage
points per full 1,000 domains capped at 50%; 400 GB bandwidth included, $0.05/GB over.
1,000 domains = $190/mo; 10,000 = $1,000/mo. Self-hosted tiers at $199/mo + $0.10/vhost,
or $4,999/mo full. Roughly **2× Cloudflare's per-domain price** with less strategic
benefit. Purpose-built for exactly this problem, which makes it the fastest path and the
worst margin.
*Evidence: https://approximated.app/pricing*

Also verified: `traefik/traefik` 64,609★ MIT (has on-demand cert resolution, but Caddy's
`ask`-endpoint story is the more mature one for this use case);
`cert-manager/cert-manager` 14,052★ Apache-2.0 (Kubernetes-native, per-domain Certificate
CRs — heavy unless we are already on k8s); `auto-ssl/lua-resty-auto-ssl` 1,988★ MIT
(the OpenResty equivalent, still maintained, pushed 2026-01-21). Self-hosted PaaS that
already solve this end-to-end and are worth reading: `coollabsio/coolify` 61,093★
Apache-2.0 and `Dokploy/dokploy` 36,893★ (Apache-2.0 per LICENSE body, despite the
NOASSERTION badge).

### Recommended answer: BUILD on Caddy, with a costed switch to Cloudflare

Run Caddy with `on_demand_tls` and an `ask` endpoint backed by our `custom_domains` table
(Doable already models custom domains as rows — matrix lane 7). This is ~a day of config
plus one small HTTP handler, not a subsystem. It also keeps preview wildcards and customer
domains in one server, which the Cloudflare path does not at non-Enterprise tiers.

The decision rule, made now so it is not re-litigated later: **move to Cloudflare for SaaS
when per-host ACME operations start costing more attention than $0.10/domain/month buys**
— concretely, when a rate-limit or renewal incident hits customer-visible uptime twice in
a quarter. At 1,000 domains that switch costs $90/mo, which is cheap against one incident.

Do not use Approximated unless we need custom domains working this week; it is 2×
Cloudflare's price for the same outcome.

### What changes in SYNTHESIS.md

The bullet "Wildcard TLS ≠ custom domains … the step from 'user types their domain' to
'certificate served' is unimplemented across the entire pool" is accurate about the pool
and should stay, with the correction appended:

> That is a fact about the pool (which contained no web servers), not about the world.
> Caddy's On-Demand TLS (Apache-2.0, 75,236★) is the canonical implementation and names
> customer domains as its use case; the `ask` endpoint is the mandatory abuse control and
> the only piece we write. Renting Cloudflare for SaaS is $0.10/hostname/month above 100,
> with wildcards Enterprise-only.

---

## GAP 3 — Provider-abstracted sandbox layer

**Prior pool-relative verdict: OVERTURNED**

### State of the art

The prior verdict — "the pool holds only consumers and consoles; no provider-abstracted
sandbox layer exists" — is false world-wide. A live, MIT-licensed, actively-developed
multi-provider abstraction exists, and it is larger than anything we would have written.

The search that found it needed short queries: `"sandbox abstraction e2b modal daytona"`,
`"unified sandbox provider interface"` and `"code execution provider adapter"` all
returned **`[]`**. The two-word query `"sandbox provider"` returned the answer. This is
the long-phrase-over-constrains lesson reproducing exactly.

### Top 3 candidates

**1. ComputeSDK — `computesdk/computesdk`, 260★, MIT, pushed 2026-08-26 → LIFT**

"A free and open-source toolkit for running other people's code." `packages/` contains
**64 entries** — a core (`computesdk`, `provider`) plus provider packages including
`e2b`, `daytona`, `vercel`, `cloudflare`, `codesandbox`, `beam`, `modal`-adjacent hosts,
`docker`, `railway`, `northflank`, `runloop`, `freestyle`, `blaxel`, `sandbox0` and more.

What makes it credible rather than a wrapper-of-the-week is the governance in
`ADD-PROVIDER.md`: a provider PR **must not touch core**.

> "Do not touch … `packages/computesdk/` and `packages/provider/` — the SDK core and
> provider framework. If your provider can't be expressed with the existing
> `defineProvider` interface, that's a framework gap: open an issue … A PR that changes
> core alongside a new provider will be asked to split into two."

That is a project enforcing a **stable provider contract** — precisely the property that
distinguishes a real abstraction from a pile of adapters. Licence verified by reading the
body: "MIT License, Copyright (c) 2025 computesdk". Low star count (260) is the honest
risk; the contract discipline and 2026-08-26 push are the mitigations.
*Evidence: https://github.com/computesdk/computesdk/blob/main/ADD-PROVIDER.md; gh api .../contents/packages → 64*

**2. sandboxjs — `jamesmurdza/sandboxjs`, 34★, MIT, pushed 2025-10-09 → STUDY**

"A unified interface for Linux-based cloud sandbox providers." Tiny and clean:
`src/sandbox.ts` defines `abstract class Sandbox` with `static create(provider, options)`,
`static connect(provider, id)`, `getProvidersList()`, and abstract `runCommand`,
`id()`, `suspend()`. `src/providers/` holds `e2b.ts`, `modal.ts`, `daytona.ts`,
`beam.ts`, `codesandbox.ts`; `src/registry.ts` does provider lookup.

At ~10 months stale and 34 stars this is not a dependency. It is the best available
**answer sheet** for what the minimal interface looks like — and it independently
converges on the same surface ComputeSDK exposes, which raises confidence that the
interface shape is genuinely settled.
*Evidence: https://github.com/jamesmurdza/sandboxjs/blob/main/src/sandbox.ts*

**3. Vendor SDKs, ranked by what they cost us**

`e2b-dev/E2B` 13,560★ Apache-2.0 (pushed 2026-08-26) with `e2b-dev/infra` 1,343★
Apache-2.0 — the only major provider whose *infrastructure* is open source, so it is the
only one with a credible self-host escape hatch. `vercel/sandbox` 193★ Apache-2.0.
`cloudflare/sandbox-sdk` 1,118★ NOASSERTION. `modal-labs/modal-client` 510★ Apache-2.0
(client only; Modal itself is closed — and Lovable runs on Modal).
**`daytonaio/daytona` is out** — see the licence section; unmaintained since June 2026,
no licence on the current tree, 71,868 stars notwithstanding.

Substrate layer, if we ever self-host: `google/gvisor` 19,164★ Apache-2.0,
`firecracker-microvm/firecracker-containerd` 2,910★ Apache-2.0,
`liquidmetal-dev/flintlock` 1,478★ MPL-2.0, `superradcompany/microsandbox` 7,945★
Apache-2.0.

### Recommended answer: LIFT ComputeSDK's interface, rent one provider

The brief asked whether the honest answer is "pick ONE vendor, wrap it thinly, stop
pretending we need portability day one." The evidence says something better:
**we get the abstraction for free, so the premature-abstraction argument dissolves.**

Adopt ComputeSDK's `defineProvider` contract — as a dependency if we are comfortable at
260★, or as a ~200-line lift of the interface shape under MIT (both `sandbox.ts` and
`defineProvider` converge on the same surface, which is the signal that it is the right
one). Then run **exactly one** provider in production. E2B is the pick, because
`e2b-dev/infra` being Apache-2.0 means the exit is a deployment project rather than a
rewrite.

Daytona's disappearance is the argument for the abstraction, not against it. A project
with 71,868 stars went closed and gutted its repo inside three months. The interface is
the insurance, and it now costs approximately nothing.

### What changes in SYNTHESIS.md

The bullet "No provider-abstracted sandbox layer exists. The pool holds consumers and
consoles only" is **wrong world-wide and should be replaced**:

> A provider-abstracted sandbox layer exists and is MIT: `computesdk/computesdk` (260★,
> 64 packages, `ADD-PROVIDER.md` forbids provider PRs from touching core — a real stable
> contract), corroborated by `jamesmurdza/sandboxjs` (34★, MIT) arriving at the same
> interface independently. The abstraction is no longer a thing we write. Rent E2B as the
> single live provider (`e2b-dev/infra` Apache-2.0 gives a self-host exit).
> **`daytonaio/daytona` must be removed from any provider shortlist**: unmaintained since
> June 2026, core moved private, no licence on the current tree.

---

## GAP 4 — Multi-tenancy secret isolation (per-tenant data keys + runtime injection)

**Prior pool-relative verdict: OVERTURNED on the data-key half; the composition still wins**

### State of the art

The prior verdict — "Doable owns envelope encryption, sandboxd owns runtime isolation,
neither alone" — assumed no single OSS system does per-tenant envelope keys. World-wide,
**Infisical's MIT core does exactly that**, with a full KEK/DEK hierarchy including key
versioning and KEK rotation history. And **OpenBao has made namespaces open source**,
which is the feature Vault charges enterprise money for and the single most important
licensing development in this space.

### Top 3 candidates

**1. Infisical (MIT core) — `Infisical/infisical`, 28,984★, pushed 2026-08-27 → LIFT, core only**

Licence resolved by reading the body, because the badge says NOASSERTION:

> "All content that resides under any `ee/` directory … licensed under the license defined
> in `ee/LICENSE`. … Content outside of the above mentioned directories … is available
> under the 'MIT Expat' license"

`ee/LICENSE.md` is a seat-based commercial licence: production use requires a subscription
and "it is forbidden to copy, merge, publish, distribute, sublicense, and/or sell."

**The split falls in a genuinely useful place.** In the MIT core
(`backend/src/services/kms/`): `kms-service.ts`, `internal-kms-dal.ts`,
`internal-kms-key-version-dal.ts`, `kms-kek-history-dal.ts`, `kms-root-config-dal.ts`,
`kms-key-dal.ts`. `kms-service.ts` imports `KmsDataKey`, `KmsKeyUsage`,
`RootKeyEncryptionStrategy`, `getKekLabel`, `KMS_ROOT_CONFIG_UUID`, and takes
`TOrgDALFactory` + `TProjectDALFactory` — a root config → per-org/per-project KEK → data
key hierarchy, with a KEK **history** table for rotation. Also MIT core: `cmek`,
`encryption-key-rotation`, `project-key`, `secret-v2-bridge`, `secret-sharing`.

In proprietary `ee/`: `external-kms` (AWS/GCP KMS), `hsm`, `kmip`, `kmip-server`,
`dynamic-secret`, `dynamic-secret-lease`, `gateway`, `pam-*`, `audit-log`.
Note `kms-service.ts` **imports from `@app/ee/services/external-kms/...` and
`@app/ee/services/hsm/...`** — so lifting the core means severing those provider hooks and
supplying our own. That is a real integration cost and it is bounded: the envelope logic
itself is MIT.

This straightforwardly **overturns** "no single OSS system does per-tenant envelope keys."
*Evidence: gh api repos/Infisical/infisical/license (body); .../contents/backend/src/services/kms; .../backend/src/ee/LICENSE.md*

**2. OpenBao — `openbao/openbao`, 7,178★, MPL-2.0, pushed 2026-08-27 → LIFT / deploy**

The Linux Foundation fork of Vault, created after the BUSL relicence. Verified: MPL-2.0
(an OSI licence with no field-of-use restriction), pushed today, actively developed.

The decisive check — are namespaces (multi-tenancy) open, or enterprise-gated as in Vault?
`gh api repos/openbao/openbao/contents/website/content/docs` shows **no `enterprise`
directory at all**, and `.../docs/concepts` contains **`namespaces`** alongside `auth`,
`policies`, `identity`. Namespaces are documented as an ordinary concept in the MPL-2.0
repo. CHANGELOG confirms active namespace work ("core/namespaces: Fix fatal failures
writing default OIDC keys on standby nodes during namespace creation", GH-3662).

So the tenant-isolation primitive Vault sells as Enterprise is free here, on a licence
that does not care that we are a hosted multi-tenant product.
*Evidence: gh api repos/openbao/openbao/contents/website/content/docs (no enterprise dir); .../docs/concepts (namespaces present)*

**3. SOPS + age — `getsops/sops` 22,932★ MPL-2.0, `FiloSottile/age` 23,335★ BSD-3-Clause → STUDY**

Both healthy and permissive (age pushed 2026-03-20, sops 2026-08-26). Right for
git-committed config, wrong for per-tenant runtime secrets at N-thousand tenants: no
rotation service, no per-tenant key lifecycle, no runtime injection. Useful for *our own*
platform config, not for tenant secrets.

Ruled out: **`hashicorp/vault` 36,179★ — BSL 1.1, IBM, competitive-offering clause →
AVOID** (see licence section). **`unkeyed/unkey` 5,423★ — AGPLv3 outside `packages/` →
STUDY only**, cannot be lifted into a hosted product without the copyleft reaching us.
**`tellerops/teller` 3,227★ Apache-2.0 but pushed 2026-01-27**, ~7 months stale, and it is
a fetch-and-inject CLI with no key hierarchy.

### Recommended answer: composition still wins, with a better data-key half

The prior verdict's *shape* survives — two halves, composed — but the data-key half gets a
much stronger source, and there is now a rent option that was previously blocked by
licensing:

- **Per-tenant data keys:** lift **Infisical's MIT `kms/` envelope model** (root config →
  per-org/per-project KEK → data key, with `kms-kek-history-dal` giving rotation) rather
  than designing from Doable's `workspace_keys` alone. Doable's schema stays as the
  in-house reference; Infisical supplies the proven hierarchy, including the key-versioning
  and rotation-history tables that are the part teams get wrong. Budget for severing the
  `@app/ee/external-kms` and `@app/ee/hsm` imports.
- **Runtime injection:** unchanged — **sandboxd's authproxy** (credentials never enter the
  workspace), AES-256-GCM config sealing, fail-closed nftables egress. Nothing found
  world-wide beats "the secret is never in the sandbox" as a fail-closed property, because
  every alternative injects the secret and then tries to contain it.
- **The rent option, now viable:** **OpenBao with a namespace per tenant** is a legitimate
  buy-instead-of-build for the key half, and MPL-2.0 permits it in a hosted product.
  Consider it if key management starts consuming engineering attention; do not start there,
  because it is an additional HA stateful system to operate.

**So: still a composition, not one system.** No single project does per-tenant envelope
keys *and* fail-closed runtime injection — Infisical's runtime story is agent/gateway-based
with the gateway in proprietary `ee/`. But "neither half has a strong OSS source" is
overturned: both halves now have permissive, actively-maintained sources.

### What changes in SYNTHESIS.md

The bullet "Multi-tenancy needs BOTH halves … Doable owns per-tenant data keys; sandboxd
owns runtime secret isolation" stays correct in structure, amended:

> The composition still stands, but the data-key half now has a stronger source than
> Doable's schema alone: `Infisical/infisical`'s **MIT core** ships a complete envelope
> hierarchy (`backend/src/services/kms/` — root config → per-org/per-project KEK → data
> key, plus `kms-kek-history-dal.ts` for rotation), with only `external-kms`/`hsm`/`kmip`
> behind the proprietary `ee/` licence. And **`hashicorp/vault` is AVOID** — BSL 1.1,
> licensor IBM, with an Additional Use Grant that excludes offering it "on a hosted or
> embedded basis in order to compete." The OSS successor is `openbao/openbao` (MPL-2.0,
> 7,178★), where **namespaces are open source** (no `docs/enterprise` directory exists;
> `docs/concepts/namespaces` does) — making per-tenant isolation a rentable option for the
> first time.

---

## Summary table

| Gap | Prior pool verdict | World-wide verdict | Recommended answer |
|---|---|---|---|
| 1. RLS for generated apps | nothing in pool | **CONFIRMED** | **BUILD** — RLS in Postgres, policy outside the generation surface; every OSS engine enforces in the untrusted app process |
| 2. Custom domains | nothing in pool | **CONFIRMED (pool) / OVERTURNED (world)** | **BUILD on Caddy** `on_demand_tls` + `ask` endpoint; switch to Cloudflare for SaaS ($0.10/hostname) on the second uptime incident |
| 3. Sandbox abstraction | nothing in pool | **OVERTURNED** | **LIFT ComputeSDK** (MIT, 64 pkgs, stable provider contract); rent E2B as the single provider |
| 4. Secret isolation | neither half alone | **OVERTURNED on the data-key half** | **COMPOSE** — Infisical MIT `kms/` envelope + sandboxd authproxy; OpenBao namespaces as the rent option |

## Method note

Verdicts flipped in the two gaps where the pool's *construction bias* was the binding
constraint: builder-focused queries do not surface a web server (Caddy) or an execution
toolkit (ComputeSDK). They held in GAP 1, where the absence is real and structural. GAP 4
flipped on a **licence body**, not a search result — Infisical's badge says NOASSERTION and
its core is MIT.

Two findings would have been missed by any badge-reading or star-ranking pass, and both are
expensive: **Vault is BSL with a clause naming our business model**, and **Daytona's 71,868
stars sit on an unmaintained, unlicensed, gutted repository**.
