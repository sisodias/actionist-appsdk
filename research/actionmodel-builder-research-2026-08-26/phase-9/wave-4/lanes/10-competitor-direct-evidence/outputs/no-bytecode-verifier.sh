#!/bin/sh
set -eu

OUT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)

if find "$OUT_DIR" -type f \( -name '*.pyc' -o -name '*.pyo' -o -name '*.so' \) -print -quit | grep -q .; then
  echo 'FAIL: bytecode/native artifact found under lane outputs' >&2
  exit 1
fi

echo 'PASS: no bytecode or native artifacts under lane outputs'
