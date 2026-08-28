#!/usr/bin/env node

import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cli = path.join(root, "tools", "teable-block.mjs");
const result = spawnSync(process.execPath, [cli, "smoke"], {
  cwd: root,
  encoding: "utf8",
});

assert.equal(result.status, 0, result.stderr || result.stdout);
const receipt = JSON.parse(result.stdout);
assert.equal(receipt.status, "PASS");
assert.equal(receipt.admissionClaimed, false);
assert.equal(receipt.deployment, false);
for (const check of receipt.checks) assert.equal(check.status, "PASS", check.name);
assert.ok(receipt.checks.some((check) => check.name === "missing_or_unverified_identity"));
assert.ok(receipt.checks.some((check) => check.name === "missing_tenant"));
assert.ok(receipt.checks.some((check) => check.name === "missing_migration_owner"));
console.log(JSON.stringify({ status: "PASS", test: "tests/smoke.mjs", checks: receipt.checks.length }, null, 2));
