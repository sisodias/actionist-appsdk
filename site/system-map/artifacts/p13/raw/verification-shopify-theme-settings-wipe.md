# Verification — Shopify theme-update settings wipe (P13 production evidence)

Verified by: ACTIONIST-S1-L5-RUNTIME (lane owner, Opus 5[1m]), 2026-08-27.
Reason: wave-1 flagged this as the strongest single P13 production-evidence finding AND as
secondary-sourced only. It is the lane's highest-value verification debt, so the lane owner
re-derived it directly rather than promoting an agent's summary.

## Source actually read

`https://community.shopify.dev/t/theme-updates-not-working/32603` — Shopify Developer Community
forum (a Shopify-operated property), fetched 2026-08-27.

## What the source establishes (observed)

| Field | Observed value |
|---|---|
| Thread opened | 2026-03-24 13:25 by `Andrew_Winter` (merchant/developer) |
| Onset dated by reporter | "around 20th March 2026" |
| Symptom, verbatim | "all previous global customizations are getting wiped (logo file wiped and all settings reset)" |
| Independent corroboration | `BenchmarkThemes` (2026-03-24 15:51) reports the same on the Ignite theme, "causing us lots of support"; workaround is retrying the update, "eventually one update works. It may take 5-10 attempts though" |
| Shopify staff response | Yes — `Liam-Shopify`, 2026-03-24 16:29: "Hi folks - thanks for flagging. I'm digging into this on our side now." |
| Formal bug acknowledgement | **No.** The staff reply commits only to investigating |
| Reported acknowledgement | Second-hand only: the merchant states he was "informed by Shopify Support that this is a known internal Shopify issue affecting several (or all) official Shopify themes." This is a merchant's account of a support conversation, not an on-record Shopify statement |
| Resolution | **None in-thread.** No fix, timeline, or resolution marker. A linked "Corrupted theme updates" topic shows later activity 2026-04-06; outcome not visible |

## Correction to wave-1 framing

Wave-1 recorded this as "acknowledged, unfixed." That is **overstated**. The accurate statement is:
*two independent merchant reports, a Shopify staff member acknowledging receipt and opening an
investigation, no formal bug acknowledgement on record, and no visible resolution.* The
"known internal Shopify issue" phrasing is a merchant's report of a private support conversation
and must not be quoted as a Shopify statement.

Evidence class: `observed_behavior` for the forum thread contents; the underlying platform defect
remains `secondary` — no first-party status page, changelog entry, or postmortem was located.

## Why this matters to P13 (the load-bearing inference)

Shopify Online Store 2.0 separates `settings_data.json` (the settings layer) from theme code, and
that separation is *the* architectural promise that a theme upgrade preserves merchant
customization. This is the same promise Actionist's P13 must make: bounded client edits survive an
upgrade of the underlying capability.

The observed reports are of that separation failing in production, on a mature platform, at scale,
with a multi-attempt retry as the merchant workaround. Whatever the root cause turns out to be, the
transferable lesson does not depend on it:

**A layered settings/code split is necessary but not sufficient for upgrade safety. The layer
boundary must itself be verified per upgrade, with a pre-upgrade snapshot and a diff of the
surviving settings, because the failure mode is silent — the merchant discovers it after publish.**

This becomes falsifier F-P13-UPGRADE and experiment E-P13-2 in the P13 first-principles record:
if an Actionist capability upgrade cannot demonstrate settings-layer survival by diff against a
pre-upgrade snapshot, the bounded-edit guarantee is decorative in exactly the way the AI-builder
"unbounded fallthrough" posture is.

## Limitation

One thread on one platform. It is not a measured failure rate, not a root cause, and not evidence
about any other vendor. It nominates a falsifier; it does not close one.
