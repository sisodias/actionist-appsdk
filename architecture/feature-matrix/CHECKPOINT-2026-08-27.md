# Session checkpoint — 2026-08-27 (pre-compaction)

## In flight (two Opus lanes, both write here)
1. **lane-gaps-deep** -> `GAP-DEEP-DIVE.md` + appends rows to `repo-capability-matrix.jsonl`
   (lanes gap-1-rls / gap-2-domains / gap-3-sandbox-abstraction / gap-4-secrets).
   Re-tests the four pool-relative gap verdicts against ALL of GitHub. Leads seeded:
   ZenStack/Nile/Oso/Cerbos (RLS), Caddy on_demand_tls vs Cloudflare-for-SaaS (domains),
   "is the sandbox abstraction premature?" (allowed to conclude yes), Infisical/OpenBao
   (secrets). Each gap must end CONFIRMED or OVERTURNED.
2. **lane-platforms** -> `PLATFORM-WRAP-MATRIX.md` + `platform-wrap-matrix.jsonl`.
   Shaan's wrap-in idea: platforms as data/UI blocks apps are built ON (not connectors —
   that's Phase-8 Connector Opus's lane, boundary stated in the prompt). SaaS class
   (Notion/Airtable/Sheets/Coda/SmartSuite: API+embed+ToS+economics) and OSS twins
   (NocoDB/Baserow/Grist/AppFlowy/Teable/Outline/Docmost: license at root AND /ee,
   tenancy, block yield). Must quantify which of the 31 must-haves each absorbs.
   Verdict per platform: WRAP / CONNECT / SKIP.

## When they land
Fold both into SYNTHESIS.md; update the report page (index.html — REGENERATE from
JSONL via the python pattern used before, numbers are computed not typed); if a gap
verdict is OVERTURNED, amend the gap card on the page. Report page:
http://localhost:8741/design/feature-matrix/

## Shaan's scope calls this session (already reflected in census)
- repo import: skip (deleted_by_scope confirmed in census)
- generated DB schema: skip — platform/wrapped DBs already exist
- next after these lanes: his ask was "correct next steps + value left on table" —
  answered in main transcript; the four candidates were: platform-wrap matrix (running),
  gap deep-dive (running), eval-harness adaptation (astryx vibe-test -> block contract
  eval field), corpus-side join once Mini reachable (corpus still UNVERIFIED).

## Standing facts (all receipts in VERIFIED-FACTS.md + SYNTHESIS.md)
110 features / 27 deleted / 24 of those hard+. 28-row matrix, 8 lanes, 4 gaps.
Winners: chef (loop+templates), sandboxd (sandbox+versions), astryx (codegen).
Composition: + Doable tenancy + dyad src/version_preview (Apache files only).
TypeScript v1 verdict stands. QUARANTINE file: do not merge (39/65 fake-direct rows).
Sina's repo EMPTY (schema-ownership claim still INFERRED). Census C1 white-space
(image->tokens) SURVIVES; C2/C3 fell. Phase-8 packet complete, 5/38 clones scored.
