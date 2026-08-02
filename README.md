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

## 다음 개발 단계

1. Firebase 웹 설정과 환경변수 연결
2. 실제 채용공고 목록 및 상세 라우트 구현
3. 프리랜서·기업 로그인과 권한 분리
4. 앱과 웹이 공유할 데이터 모델 확정
