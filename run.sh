#!/usr/bin/env bash
#
# run the build.ts script
#

set -o errexit
set -o pipefail
set -o nounset

if [ ! -d node_modules ]; then
  npm install
fi

rm -f docs/images/*/*.svg
mkdir -p docs/images/accent
mkdir -p docs/images/applet
mkdir -p docs/images/system

npx ts-node build.ts
