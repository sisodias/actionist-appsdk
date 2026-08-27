# Actionist / Action Model

Canonical workspace for the Actionist builder project with Cena/Sina Yamani.

## Start here

1. [Current state](CURRENT_STATE.md)
2. [Knowledge spine](knowledge/README.md)
3. [Master synthesis](knowledge/00-MASTER-SYNTHESIS.md)
4. [Project context](PROJECT.md)

Interactive system map: **https://actionist-system-map.pages.dev/**

Three-sprint research task graph: **https://actionist-system-map.pages.dev/task-graph/**

## Layout

| Path | Responsibility |
|---|---|
| `knowledge/` | Canonical synthesis, domain map, assumptions, evidence map, open questions and experiment roadmap |
| `architecture/` | Builder designs, contracts, schemas, feature matrices and eval architecture |
| `research/` | Original research artifacts, phase outputs, corpora, deep dives and rendered packs |
| `client/` | Private call preparation, communications and verbatim operator prompts |
| `site/` | Static research-pack and project-site entrypoints |
| `runtime/` | Local Playwright, Wrangler and Claude runtime state; not research source material |
| `Actionist-AppSDK/` | Empty upstream client Git clone; do not place SISO work inside it |

## Fast orientation

- The full problem is summarized in `knowledge/00-MASTER-SYNTHESIS.md`.
- The architecture is partitioned into 18 owned domains in `knowledge/01-DOMAIN-MAP.md`.
- Every assumption is tracked in `knowledge/02-ASSUMPTION-LEDGER.md`.
- High-signal original evidence is linked from `knowledge/03-EVIDENCE-MAP.md`.
- The complete configured corpus is represented in `knowledge/source-inventory.jsonl` and `knowledge/knowledge-graph.json`.

## Important boundary

`Actionist-AppSDK` points at Sina's GitHub repository and currently contains an empty initial commit. This workspace must not be committed or pushed to that remote. The former `Actionist-AppSDK/SISO/` path is now a compatibility layer of symlinks so historical receipts continue to resolve.

## Verification

From this directory:

```bash
node knowledge/scripts/build-spine.mjs
node knowledge/scripts/verify-spine.mjs
```

The first rebuilds the source inventory and knowledge graph. The second validates canonical documents, internal links, source identities, graph counts and dangling edges.

## Sensitive material

`client/comms/` contains private WhatsApp exports and a previously shared API credential in plaintext history. Treat the credential as burned and do not publish or copy the client material.
