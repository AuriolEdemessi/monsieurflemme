#!/bin/sh
# Génère les affiches (résolution ×2) : PNG haute qualité dans design/affiches/png, JPG pour le site.
# Chaque fichier HTML indique sa taille dans <meta name="poster-size" content="LARGEURxHAUTEUR">.
# Usage : sh design/affiches/render.sh
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT=../../public/events/halloween
PNG=png
mkdir -p "$PNG"

for f in affiche-*.html; do
  name="${f%.html}"
  size=$(sed -n 's/.*name="poster-size" content="\([0-9]*\)x\([0-9]*\)".*/\1,\2/p' "$f")
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
    --force-device-scale-factor=2 --window-size="$size" --virtual-time-budget=8000 \
    --screenshot="$PNG/$name.png" "file://$PWD/$f" 2>/dev/null
  sips -s format jpeg -s formatOptions 90 "$PNG/$name.png" --out "$OUT/$name.jpg" >/dev/null
  echo "$PNG/$name.png → $OUT/$name.jpg"
done
