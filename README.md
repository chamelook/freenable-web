# freenable Web

예체능 프리랜서 강사 구인구직 플랫폼 freenable의 Next.js 웹사이트입니다.

## 기술 구성

- Next.js App Router
- React Server Components
- TypeScript
- 정적 내보내기(`output: "export"`)

현재는 GitHub Pages 같은 정적 호스팅을 유지할 수 있도록 빌드 결과를 `out/`에 생성합니다. Firebase 서버 렌더링이나 서버 액션이 필요해지면 `next.config.ts`의 `output: "export"`를 제거하고 Node.js 또는 Next.js 호환 호스팅으로 전환합니다.

## 실행

```bash
npm install
npm run dev
```

프로덕션 확인:

```bash
npm run lint
npm run build
```

## 주요 경로

- `/` 서비스 홈
- `/terms/` 이용약관
- `/privacy/` 개인정보처리방침

## 랜딩페이지 관리

- 연락처와 메뉴는 `content/site.ts`, 기능 소개와 예시 화면 내용은 `content/landing.ts`에서 관리합니다.
- 화면 문구와 섹션 구성은 `app/page.tsx`, 색상·여백·반응형 스타일은 `app/globals.css`에서 수정합니다.
- 현재 홈페이지는 서비스 소개용입니다. 공고 검색과 지원은 앱에서 제공하며, 첫 화면과 하단의 App Store·Google Play 버튼으로 설치할 수 있습니다. 스토어 주소는 `content/site.ts`, 공통 설치 버튼은 `components/AppDownloadLinks.tsx`에서 관리합니다.
- 앱과 동일한 Spoqa Han Sans Neo(Regular 400, Medium 500, Bold 700)를 자체 호스팅합니다. 라이선스는 `public/fonts/LICENSE-SpoqaHanSansNeo.txt`에 보관합니다.
  - 원본 TTF(웨이트당 약 13MB) 대신 KS X 1001 완성형 한글 2,350자 + 호환 자모 + 라틴·구두점 + 사이트에 쓰인 문자만 남긴 WOFF2 서브셋(웨이트당 약 150KB)을 사용합니다. 서브셋에 없는 글자는 시스템 폰트로 표시됩니다.
  - 재생성: [Spoqa Han Sans Neo 원본](https://github.com/spoqa/spoqa-han-sans)을 받아 `pyftsubset SpoqaHanSansNeo-Regular.ttf --text-file=charset.txt --layout-features='*' --flavor=woff2` (Medium·Bold 동일)
- 로고는 앱의 `Icon/BRAND_ASSETS.md` 기준을 따릅니다. 워드마크는 앱의 `assets/images/freenable_logo_cropped.png`를 복사한 `public/images/freenable-logo.png`를 사용합니다. 공통 `BrandLogo` 컴포넌트에서 원본 비율을 유지합니다. 배경은 `#FBFAF8`입니다. 앱 안내 아이콘, 파비콘, Apple 터치 아이콘은 앱의 `Icon/web` 원본을 사용합니다.
- [위티즈](https://wittiz.co.kr/ko)의 큰 첫 화면, 짧은 소개, 좌우 교차 기능 소개, 마지막 이용 안내 흐름을 참고했습니다. 캐릭터·성과·후기는 넣지 않습니다.
- 포인트 색상 `#C48A6A`와 본문 색상 `#191F28`은 앱의 `AppColors` 기준입니다. 베이지 배경은 브랜드에 맞춘 보조색입니다.
- 기능 소개의 앱 화면(`public/images/app-screens/*.png`)은 앱 저장소의 스토어 스크린샷 코드(`marketing/store_screenshots/slides.html`)에서 화면 재현 부분을 옮긴 `scripts/app-screens/screens.html`을 캡처한 이미지입니다. Flutter 화면의 색·폰트·간격을 따르지만 공고·업체·강사 데이터는 모두 가상이며, 화면 아래에 예시임을 표시합니다.
  - 재생성: `scripts/app-screens/render.sh` (로컬 Chrome 필요, 390×844 화면을 2배로 캡처)
  - 앱 UI나 스토어 스크린샷 데이터가 바뀌면 `screens.html`의 `screen*()` 함수를 맞춰 고친 뒤 다시 생성합니다. 대체 텍스트는 `content/landing.ts`의 `APP_SCREENS`에서 관리합니다.

## 사이트 개편 시 유지할 것

회사소개·채용 기능으로 페이지를 바꾸더라도 아래 항목은 유지합니다. `out/index.html`에서 GA4, 네이버 인증, `og:image`, JSON-LD 중 하나라도 빠지면 배포 워크플로가 실패합니다(`scripts/check-site-essentials.sh`).

- [ ] `app/layout.tsx`의 공통 메타데이터(네이버 사이트 소유 확인, Open Graph·Twitter), JSON-LD(`content/structured-data.ts`), GA4 스크립트를 지우지 않습니다. 페이지별 내용은 각 `page.tsx`의 `metadata`에서 덮어씁니다.
- [ ] 스토어 주소는 `content/site.ts`의 `SITE.appStore`·`SITE.googlePlay`(추적 파라미터 포함)만 참조합니다. 주소를 직접 하드코딩하지 않습니다. 스토어 버튼 클릭은 GA4 향상된 측정의 이탈 클릭(`click` 이벤트)으로 자동 수집됩니다.
- [ ] 새 페이지를 만들면 `app/sitemap.ts`에 등록합니다.
- [ ] 글꼴은 `public/fonts`의 WOFF2 서브셋을 사용합니다. 원본 TTF를 다시 넣지 않습니다.
- [ ] 옛 주소(`/privacy.html`, `/terms.html`)는 스토어·검색엔진에 남아 있을 수 있으므로 `public/`의 이동용 파일을 지우지 않습니다.
- [ ] 수집 항목이 바뀌면(예: 채용 지원서 입력) `content/privacy.html`을 함께 고칩니다.

## 다음 개발 단계

1. Firebase 웹 설정과 환경변수 연결
2. 실제 채용공고 목록 및 상세 라우트 구현
3. 프리랜서·기업 로그인과 권한 분리
4. 앱과 웹이 공유할 데이터 모델 확정
