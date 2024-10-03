#!/usr/bin/env sh

set -e

docker compose exec node sh -c "npm run build"

cd dist

echo ibarecisa.renatosoares.dev >CNAME

git init -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:renatosoares/ibarecisa-site.git main:gh-pages

cd -
