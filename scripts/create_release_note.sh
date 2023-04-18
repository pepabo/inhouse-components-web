#!/usr/bin/env bash

set -eu -o pipefail

previous_tag=$(git tag | grep 'src' | tail -n 2 | head -n 1)

npx lerna-changelog --from=$previous_tag | tee >(pbcopy)
