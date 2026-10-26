#!/usr/bin/env bash
# og.html → app/opengraph-image.png, app/twitter-image.png (1200x630 링크 공유 미리보기)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT=8768

# 폰트를 상대경로로 읽기 위해 로컬 서버 사용 (127.0.0.1에만 바인딩)
python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$ROOT" >/dev/null 2>&1 &
SERVER=$!
# 사용 중인 Chrome 프로필과 겹치면 캡처 없이 끝나므로 임시 프로필 사용
PROFILE="$(mktemp -d)"
trap 'kill $SERVER 2>/dev/null; rm -rf "$PROFILE"; true' EXIT
sleep 1

"$CHROME" --headless=new --user-data-dir="$PROFILE" --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=1200,630 --virtual-time-budget=10000 \
  --screenshot="$ROOT/app/opengraph-image.png" \
  "http://127.0.0.1:$PORT/scripts/og-image/og.html" >/dev/null 2>&1
cp "$ROOT/app/opengraph-image.png" "$ROOT/app/twitter-image.png"
echo "opengraph-image: $(sips -g pixelWidth -g pixelHeight "$ROOT/app/opengraph-image.png" | awk '/pixel/{printf "%s ", $2}')$(du -k "$ROOT/app/opengraph-image.png" | cut -f1)KB"
