#!/usr/bin/env bash
# Assemble the GitHub Pages artifact from the repo without moving any source files.
#
# In the repo, the static site lives in site/ and its shared images live in assets/
# one level up, so pages reference them as ../assets/ (or ../../assets/ from
# site/projects/). On Pages, site/ becomes the web root, so assets/ is copied
# inside it and every reference loses exactly one "../".
#
# Usage: scripts/build-pages.sh [output-dir]   (default: _site)
set -euo pipefail

cd "$(dirname "$0")/.."
OUT="${1:-_site}"

rm -rf "$OUT"
mkdir -p "$OUT"
cp -R site/. "$OUT/"
cp -R assets "$OUT/assets"

# Rewrite ../assets/ -> assets/ in the site's own files only. "../../assets/"
# contains "../assets/", so the same rule gives "../assets/" for site/projects/.
# Files inside assets/ are left untouched.
find "$OUT" -type f \( -name '*.html' -o -name '*.css' -o -name '*.js' \) \
  -not -path "$OUT/assets/*" \
  -exec sed -i 's#\.\./assets/#assets/#g' {} +

# Serve files as-is (no Jekyll processing).
touch "$OUT/.nojekyll"

echo "Built $OUT: $(find "$OUT" -type f | wc -l) files"
