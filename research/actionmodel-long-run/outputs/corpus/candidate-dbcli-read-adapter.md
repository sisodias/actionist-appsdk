# Data-plane packet — JustVugg/dbcli

## Disposition

`held` / candidate read-model introspection sidecar. It is not a Block Contract
v0 admission and it is not safe to expose as read-only without an explicit
wrapper or database permission boundary.

## Source and provenance

- Sweep source: `research/github-sweep/lane3-schema-introspection.json#fullName=JustVugg/dbcli`
- Canonical repository: https://github.com/JustVugg/dbcli
- Pinned review commit: `5da7a81b7e7e1e3cea53ffb32d57dbd121837f38`
- Commit: https://github.com/JustVugg/dbcli/commit/5da7a81b7e7e1e3cea53ffb32d57dbd121837f38
- License: MIT at https://github.com/JustVugg/dbcli/blob/5da7a81b7e7e1e3cea53ffb32d57dbd121837f38/LICENSE
- Copyright read at the pinned commit: `Copyright (c) 2026 Vincenzo`.
- README: https://github.com/JustVugg/dbcli/blob/5da7a81b7e7e1e3cea53ffb32d57dbd121837f38/README.md
- Package metadata: https://github.com/JustVugg/dbcli/blob/5da7a81b7e7e1e3cea53ffb32d57dbd121837f38/pyproject.toml
- CLI source: https://github.com/JustVugg/dbcli/blob/5da7a81b7e7e1e3cea53ffb32d57dbd121837f38/dibcli/cli.py

## Why it is useful

The README and source expose a compact `snap` workflow for schema, row counts,
column profiling, and ERD output. It supports PostgreSQL-compatible URLs,
default query limits, JSON/JSONL output, semantic exit codes, and tests. Those
properties match the builder's need to discover an Actionist client's existing
data plane before assembling a dashboard.

## Why it is held

The same CLI exposes `exec` and `exec-file`, and its connection store writes a
`.dbcli/connections.json` file. A read-only dashboard adapter cannot inherit
those capabilities implicitly. The pinned source tree is also named `dibcli/`
while `pyproject.toml` package discovery and imports reference `dbcli*` and
`dbcli.cli`; the package/build gate must verify or correct that mismatch before
any use. The repository is Python, not the v0 Next/React/Drizzle block runtime,
so this is a sidecar/integration candidate rather than a direct UI block.

## Smallest safe gate

1. Verify the package layout and produce a reproducible install/test receipt at
   the pinned commit; do not assume the README install works.
2. Bind a database role that has no write privileges and place a wrapper around
   the CLI that allowlists `tables`, `schema`, `describe`, `indexes`, `fks`,
   `profile`, `audit`, `erd`, and bounded `SELECT` queries. Deny `exec` and
   `exec-file` at both wrapper and database-role layers.
3. Run against a disposable Postgres fixture with a known schema. Assert
   stable JSON/JSONL output, row/column limits, semantic exit codes, and zero
   writes or connection-store leakage.
4. Scan the package and optional PostgreSQL dependency, assign the sidecar
   owner, and record rollback as removing the wrapper/adapter and revoking its
   database role.

Until those receipts exist, `dbcli` remains a held reference/adapter candidate;
it is not a read-only Block Contract.
