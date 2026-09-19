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

- 연락처, 메뉴, 분야, 질문과 답변은 `content/site.ts`에서 관리합니다.
- 화면 문구와 섹션 구성은 `app/page.tsx`, 색상·여백·반응형 스타일은 `app/globals.css`에서 수정합니다.
- 현재 홈페이지는 서비스 소개용입니다. 공고 검색과 지원은 앱에서 제공하며, 앱 스토어 주소가 확정되기 전까지 이용 문의로 연결합니다.
- 앱과 동일한 Spoqa Han Sans Neo(Regular 400, Medium 500, Bold 700)를 자체 호스팅합니다. 라이선스는 `public/fonts/LICENSE-SpoqaHanSansNeo.txt`에 보관합니다.
- 로고는 앱의 `Icon/BRAND_ASSETS.md` 기준을 따릅니다. 워드마크는 Medium 500, 검정, 기본 자간을 사용하고 배경은 `#FBFAF8`로 맞춥니다. 앱 안내 아이콘, 파비콘, Apple 터치 아이콘은 앱의 `Icon/web` 원본을 사용합니다.
- 소개 사진은 Unsplash의 [운동 수업 사진](https://images.unsplash.com/photo-1518611012118-696072aa579a)과 [요가 사진](https://images.unsplash.com/photo-1544367567-0f2fcb009e0b)을 사용합니다. 실제 서비스 회원의 사진이나 후기를 의미하지 않습니다.

## 다음 개발 단계

1. Firebase 웹 설정과 환경변수 연결
2. 실제 채용공고 목록 및 상세 라우트 구현
3. 프리랜서·기업 로그인과 권한 분리
4. 앱과 웹이 공유할 데이터 모델 확정
