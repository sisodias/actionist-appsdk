# Actionist AppSDK source preservation

- Scope: additive preservation of source-side overlay differences only.
- Source snapshot: `/Users/shaansisodia/SISO_Workspace/SISO_Agency/clients/actionmodel/Actionist-AppSDK`.
- Excluded: `research/`, generated `site/`, generated knowledge JSON/JSONL projections, `client/`, runtime/cache/state.
- Selected files: 35 (32 block source/prototype files and 3 knowledge source files).
- Source status-list digest before capture: `6869ea4bafe4a7a3e138d954e90e101e8eba1d2878c937b5258ebf016b2aa914`.
- Selected path/content digest before capture: `bcde995181f90d11ffff4b4480e6c436861ef40f8f4ef94e6622e483e4ba0b23`.
- Secret scan: PASS; no high-confidence private-key, GitHub, OpenAI, AWS, Slack, Google API, or npm token pattern matched.
- The Git tree of this commit is the content manifest; verify with `git ls-tree -r --name-only HEAD` and `git fsck --full`.

## Included knowledge source files

- `knowledge/02-ASSUMPTION-LEDGER.md`
- `knowledge/capability-shelf/README.md`
- `knowledge/scripts/build-system-pages.mjs`

## Integrity boundary

This branch preserves an older overlay byte version for comparison and recovery. It does not replace newer canonical parent files and does not imply qualification, admission, deployment, or client publication.
