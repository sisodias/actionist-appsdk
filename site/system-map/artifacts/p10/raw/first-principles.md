# P10 first principles — identity, settings and navigation host

Lane S1-L4 · run 2026-08-27-sprint-1-fable

## Objective

Give every capability in an assembled Actionist product one identity, one tenant model,
one settings hierarchy and one navigation surface — while removing duplicate donor
onboarding and account chrome — without requiring bespoke surgery on every donor.

## The central finding that frames everything

After 33 commercial surfaces: **no observed surface renders a third party's settings
inside host-owned chrome.** Shopify, Forge and Superblocks leave the guest's settings
screen wholly to the guest. Frontegg and Permit.io sell the admin UI as their product.
Zoho One and Microsoft 365 — the two largest suite-unification efforts observed — unify
at the identity and admin tier while each product keeps its own UI, explicitly *not*
suppressing donor chrome.

This is absence of evidence after a deliberate sweep, not proof of impossibility. But it
reclassifies A34. The assumption ledger lists "the Actionist host can absorb donor
identity/settings/navigation cleanly" as `unknown`. The correct current state is
**`unknown, and unprecedented at the settings tier specifically`**. Identity absorption
has abundant precedent (pattern A below). Navigation absorption has partial precedent
(pattern B). Settings absorption has none. Those three tiers must be priced separately
and must not be promised as one capability.

## Constraints (evidence-backed)

1. Donor apps ship their own auth, signup, settings and navigation (A06, observed).
2. Replacing a logo is trivial; replacing ownership boundaries is not (master synthesis).
3. Locally, federation was designed *and then reversed* for absorbed donors: SISOCRM's
   Ed25519 launch-token contract (2026-07-30) was superseded a day later by "absorb the
   donors, delete their login" (2026-07-31) — but only for donors whose code is owned.
   Plane stayed host; infra stayed service. Both patterns remain live.
4. The host owns the URL space; the guest owns its internal router; the guest must
   reconcile them (universal across every commercial surface observed).
5. OSS supplies mounting plumbing (single-spa, Module Federation, qiankun, Piral, Luigi)
   with no identity, permission or settings semantics crossing the boundary.
6. Authorization is heavily oversupplied (OPA, SpiceDB, Cerbos, OpenFGA, Casbin — all
   Apache-2.0, four deployment shapes). Building custom authorization is indefensible.

## Invariants (proposed, with falsifiers)

- **INV-P10-1 The host is the sole identity authority.** No capability mints its own
  session; no donor login route remains reachable. Falsifier: a donor whose session
  creation cannot be reached without also reaching its login UI, and whose auth cannot
  be deleted because the code is not owned (i.e. an intact service with no handoff seam).
- **INV-P10-2 Two tokens, never one.** A long-lived credential the host backend alone
  holds, and a short-lived, audience-bound, single-use per-user token that crosses the
  boundary. Never in a query parameter. (Locally proven by the Ed25519 spike; commercially
  confirmed four independent times; Wix is the negative control.) Falsifier: a donor
  requiring a long-lived shared secret client-side to function.
- **INV-P10-3 The absorption pattern is selected by reuse shape, not by platform
  preference.** Intact service → token handoff + adapter; absorbed/transplanted code →
  delete donor auth and substitute host session. The HostContract must express both.
  Falsifier: a reuse shape where neither pattern applies (e.g. a donor distributed only
  as a closed binary with its own IdP).
- **INV-P10-4 Navigation is contributed data, not shell source code.** Modules declare
  nav nodes (label, icon, route, order, owner, permission predicate); the host renders.
  Falsifier: Loop-3 finds nav contribution cannot express a donor's real IA without
  per-donor shell edits anyway.
- **INV-P10-5 A nav node's visibility predicate IS its route guard** — one evaluation,
  never two drifting copies. Falsifier: a performance profile where evaluating policy per
  nav node per render is prohibitive (mitigation: batch/decision-cache, not divergence).
- **INV-P10-6 Two-gate visibility.** Entitlement (tenant/plan scope) AND permission
  (role scope) are different gates that never fold into each other; stripped modules take
  their nav entry and any now-empty parent with them (cascading emptiness).
- **INV-P10-7 Every resolved setting carries provenance** — which scope supplied it and
  which rule won. No surveyed vendor exposes this; every one of them has a combination
  rule. Falsifier: provenance tracking costs more than the debugging it saves (measure in
  Loop 3).
- **INV-P10-8 Donor chrome suppression is declared and auditable**, named in the
  absorption manifest, never achieved by CSS. Falsifier: a donor whose chrome cannot be
  suppressed without forking its render tree — which is a finding about that donor's
  reuse shape, not about the invariant.

## The three-tier absorption model (this lane's core P10 proposal)

| Tier | Precedent strength | Default mechanism | Cost class |
|---|---|---|---|
| Identity | Strong (4 independent commercial forms + local spike) | Two-token exchange OR auth deletion, by reuse shape | Bounded, patterned |
| Navigation | Partial (Backstage route-refs; Forge/Shopify/ServiceNow manifests) | Contributed nav nodes + route reconciliation handshake | Bounded per donor, needs host registry built |
| Settings | **None found** | Unprecedented — must be designed, then tested on one mature donor | Unknown; the lane's biggest risk |

The honest consequence: an Actionist promise of "one settings surface across all
capabilities" is currently a research bet, not an engineering estimate. It should either
be scoped down for v1 (host-owned settings for host concerns; donor settings reached via
a host-rendered nav entry but rendered by the donor — the commercial baseline) or be made
the deliberate differentiator with Loop-3 evidence behind it before it is sold.

## Contradictions and tensions

- Absorption deletes the handoff protocol; federation requires it. Both are locally
  correct decisions a day apart. Resolution: not a platform choice, a per-capability one
  (INV-P10-3) — which means the host must maintain two identity lanes indefinitely, and
  the cost of that duality is unmeasured.
- Oversupplied authorization vs greenfield settings/navigation: the concerns that look
  hardest (policy) are solved, and the concerns that look like plumbing (a nav registry,
  a settings tree) are the ones nobody has built. Effort allocation should follow the
  gap map, not intuition.
- Shell frameworks solve mounting but carry no meaning; adopting one still leaves the
  entire semantic layer to build. Adopting none costs the isolation plumbing. The seam
  choice is genuinely open.

## Unknowns carried to experiments

Q17-Q21 (knowledge/04) remain open. This lane adds: (a) what is the real cost of
maintaining two identity lanes; (b) can a settings registry absorb a mature donor's
settings surface at all, or only host-owned settings — the Loop-3 question that decides
whether the P10 thesis survives; (c) whether nav contribution survives a donor with a
genuinely different information architecture (P08 owns the archetype question; P10 owns
only the mounting contract).
