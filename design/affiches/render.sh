#!/bin/sh
# Génère les affiches en PNG (2160 × 2700) puis en JPG pour le site.
# Usage : sh design/affiches/render.sh
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT=../../public/events/halloween

for f in affiche-*.html; do
  name="${f%.html}"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
    --force-device-scale-factor=2 --window-size=1080,1350 --virtual-time-budget=8000 \
    --screenshot="$OUT/$name.png" "file://$PWD/$f" 2>/dev/null
  sips -s format jpeg -s formatOptions 90 "$OUT/$name.png" --out "$OUT/$name.jpg" >/dev/null
  rm "$OUT/$name.png"
  echo "$OUT/$name.jpg"
done
