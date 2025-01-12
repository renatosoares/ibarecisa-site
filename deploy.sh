#!/usr/bin/env sh

set -e

docker compose exec node sh -c "npm run build"

cd dist

echo ibarecisa.org.br > CNAME

git init -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:renatosoares/ibarecisa-site.git main:gh-pages

cd -

rm -rf dist
