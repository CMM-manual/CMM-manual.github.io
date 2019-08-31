#!/usr/bin/env sh

# abort on errors
set -e

# build & navigate into the build output directory
vuepress build docs && cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git remote add origin https://github.com/CMM-manual/CMM-manual.github.io.git
git push origin master --force
cd -
