import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관",
  description: "FREE 서비스 이용약관",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  const source = readFileSync(path.join(process.cwd(), "content", "terms.html"), "utf8");
  const content = source.match(/<div class="content">([\s\S]*?)<\/div>\s*<footer>/)?.[1] ?? "";
  return <div className="legal-page"><header><Link href="/">← FREE 홈으로</Link><h1>서비스 이용약관</h1></header><main className="legal-content" dangerouslySetInnerHTML={{ __html: content }} /><footer>© 2026 프리너블 (FREENABLE). All rights reserved.</footer></div>;
}
