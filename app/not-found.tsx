import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404 · PAGE NOT FOUND</p>
      <h1>페이지를 찾을 수 없어요.</h1>
      <p>주소가 바뀌었거나 없는 페이지예요.</p>
      <Link className="button button-dark" href="/">홈으로 가기</Link>
    </main>
  );
}
