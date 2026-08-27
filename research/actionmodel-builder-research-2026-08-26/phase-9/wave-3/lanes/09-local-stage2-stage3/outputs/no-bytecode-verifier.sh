#!/bin/sh
set -eu
SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
case "$(find "$SCRIPT_DIR" -type f \( -name '*.pyc' -o -name '*.pyo' -o -name '*.class' -o -name '*.so' -o -name '*.dylib' \) -print -quit)" in
  '') echo 'PASS no-bytecode';;
  *) echo 'FAIL bytecode/native artifact found'; exit 1;;
esac
