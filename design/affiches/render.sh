#!/bin/sh
# Génère les affiches en JPG (résolution ×2) pour le site.
# Chaque fichier HTML indique sa taille dans <meta name="poster-size" content="LARGEURxHAUTEUR">.
# Usage : sh design/affiches/render.sh
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT=../../public/events/halloween

for f in affiche-*.html; do
  name="${f%.html}"
  size=$(sed -n 's/.*name="poster-size" content="\([0-9]*\)x\([0-9]*\)".*/\1,\2/p' "$f")
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
    --force-device-scale-factor=2 --window-size="$size" --virtual-time-budget=8000 \
    --screenshot="$OUT/$name.png" "file://$PWD/$f" 2>/dev/null
  sips -s format jpeg -s formatOptions 90 "$OUT/$name.png" --out "$OUT/$name.jpg" >/dev/null
  rm "$OUT/$name.png"
  echo "$OUT/$name.jpg"
done
