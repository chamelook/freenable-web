#!/usr/bin/env bash
# ad.html → scripts/instagram-ad/out/*.png (1080x1920 릴스·스토리 광고, 안전 영역 표시본 포함)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="$ROOT/scripts/instagram-ad/out"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT=8767

mkdir -p "$OUT"

# 폰트를 상대경로로 읽기 위해 로컬 서버 사용 (127.0.0.1에만 바인딩)
python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$ROOT" >/dev/null 2>&1 &
SERVER=$!
# 사용 중인 Chrome 프로필과 겹치면 캡처 없이 끝나므로 임시 프로필 사용
PROFILE="$(mktemp -d)"
trap 'kill $SERVER 2>/dev/null; rm -rf "$PROFILE"; true' EXIT
sleep 1

render() {
  "$CHROME" --headless=new --user-data-dir="$PROFILE" --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --window-size=1080,1920 --virtual-time-budget=10000 \
    --screenshot="$OUT/$1.png" \
    "http://127.0.0.1:$PORT/scripts/instagram-ad/ad.html$2" >/dev/null 2>&1
  echo "$1: $(sips -g pixelWidth -g pixelHeight "$OUT/$1.png" | awk '/pixel/{printf "%s ", $2}')$(du -k "$OUT/$1.png" | cut -f1)KB"
}

render substitute-1080x1920 ""
render substitute-1080x1920-guide "?guide=1"
