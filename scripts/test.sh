#!/usr/bin/env bash

set -eux

if [ $# -eq 0 ]; then
  for file in `find packages -maxdepth 1 -type d | grep packages/`; do
    package_name=$(basename $file)
    ./node_modules/.bin/sassunit "packages/${package_name}/**/*.test.scss" -I node_modules
  done
else
  package_name=$1
  ./node_modules/.bin/sassunit "packages/${package_name}/**/*.test.scss" -I node_modules
fi
