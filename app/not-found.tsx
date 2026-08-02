import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404 · PAGE NOT FOUND</p>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>주소가 변경되었거나 존재하지 않는 페이지입니다.</p>
      <Link className="button button-dark" href="/">freenable 홈으로 돌아가기</Link>
    </main>
  );
}
