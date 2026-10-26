#!/usr/bin/env bash
# ad.html → scripts/instagram-ad/out/substitute-1080x1920.mp4 (8초, 30fps, H.264, 무음)
# ffmpeg가 PATH에 없으면 FFMPEG=/경로/ffmpeg 로 지정합니다.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="$ROOT/scripts/instagram-ad/out"
FFMPEG="${FFMPEG:-ffmpeg}"
PORT=8768

mkdir -p "$OUT"
FRAMES="$(mktemp -d)"

# 폰트를 상대경로로 읽기 위해 로컬 서버 사용 (127.0.0.1에만 바인딩)
python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$ROOT" >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null; rm -rf "$FRAMES"; true' EXIT
sleep 1

node "$ROOT/scripts/instagram-ad/record.mjs" "http://127.0.0.1:$PORT/scripts/instagram-ad/ad.html" "$FRAMES" 30 8
"$FFMPEG" -y -hide_banner -loglevel error -framerate 30 -i "$FRAMES/%04d.png" \
  -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -movflags +faststart \
  "$OUT/substitute-1080x1920.mp4"
echo "mp4: $(du -k "$OUT/substitute-1080x1920.mp4" | cut -f1)KB"
