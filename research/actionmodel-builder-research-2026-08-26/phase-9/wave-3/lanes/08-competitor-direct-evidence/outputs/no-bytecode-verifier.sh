#!/bin/sh
set -eu
out=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
for f in "$out"/*; do
  case "$f" in *.pyc|*.pyo|*.class|*.so|*.dylib|*.node) echo "FAIL: bytecode/native artifact $f"; exit 1;; esac
done
echo "PASS: no bytecode/native artifacts in owned output directory"
