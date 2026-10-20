#!/usr/bin/env bash
# 사이트 개편 중 홈페이지 필수 태그가 빠지면 배포를 막습니다. (사용법: scripts/check-site-essentials.sh [out 디렉터리])
set -euo pipefail

html="${1:-out}/index.html"
[ -f "$html" ] || { echo "::error::$html 파일이 없습니다."; exit 1; }

missing=0
check() {
  if grep -qF -- "$2" "$html"; then
    echo "OK   $1"
  else
    echo "::error::$1 누락: '$2'를 $html에서 찾을 수 없습니다."
    missing=1
  fi
}

check "GA4 스크립트" "googletagmanager.com/gtag/js?id=G-"
check "네이버 사이트 소유 확인" 'name="naver-site-verification"'
check "공유 이미지(og:image)" 'property="og:image"'
check "구조화 데이터(JSON-LD)" 'type="application/ld+json"'

exit "$missing"
