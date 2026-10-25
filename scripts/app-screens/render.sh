#!/usr/bin/env bash
# screens.html → public/images/app-screens/*.png (390x844 논리 px를 2배로 캡처: 780x1688)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="$ROOT/public/images/app-screens"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT=8766

mkdir -p "$OUT"

# 폰트를 상대경로로 읽기 위해 로컬 서버 사용 (127.0.0.1에만 바인딩)
python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$ROOT" >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null' EXIT
sleep 1

for s in jobs substitute detail talent; do
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
    --window-size=390,844 --virtual-time-budget=10000 \
    --screenshot="$OUT/$s.png" \
    "http://127.0.0.1:$PORT/scripts/app-screens/screens.html?s=$s" >/dev/null 2>&1
  echo "$s: $(sips -g pixelWidth -g pixelHeight "$OUT/$s.png" | awk '/pixel/{printf "%s ", $2}')$(du -k "$OUT/$s.png" | cut -f1)KB"
done
