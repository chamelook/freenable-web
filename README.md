# freenable Web

예체능 프리랜서 구인구직 플랫폼 freenable의 Next.js 웹사이트입니다.

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
- 로고는 앱의 `Icon/BRAND_ASSETS.md` 기준을 따릅니다. 워드마크는 앱의 `assets/images/freenable_logo_cropped.png`를 복사한 `public/images/freenable-logo.png`를 사용합니다. 공통 `BrandLogo` 컴포넌트에서 원본 비율을 유지합니다. 배경은 `#FBFAF8`입니다. 앱 안내 아이콘, 파비콘, Apple 터치 아이콘은 앱의 `Icon/web` 원본을 사용합니다.
- [위티즈](https://wittiz.co.kr/ko)의 큰 첫 화면, 짧은 소개, 좌우 교차 기능 소개, 마지막 이용 안내 흐름을 참고했습니다. 캐릭터·성과·후기는 넣지 않습니다.
- 포인트 색상 `#C48A6A`와 본문 색상 `#191F28`은 앱의 `AppColors` 기준입니다. 베이지 배경은 브랜드에 맞춘 보조색입니다.
- `components/AppPreview.tsx`는 기능 설명용 화면입니다. 실제 앱 캡처나 실시간 공고가 아니며 화면에 예시임을 표시합니다. 실제 캡처로 교체할 때 공개 가능한 정보만 사용합니다.
- 추후 실제 사용 화면을 기반으로 한 앱 스크린샷을 추가할 예정입니다.

## 다음 개발 단계

1. Firebase 웹 설정과 환경변수 연결
2. 실제 채용공고 목록 및 상세 라우트 구현
3. 프리랜서·기업 로그인과 권한 분리
4. 앱과 웹이 공유할 데이터 모델 확정
