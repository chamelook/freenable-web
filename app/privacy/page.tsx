import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "FREE 개인정보처리방침",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  const content = readLegalContent("privacy.html");
  return <LegalPage title="개인정보처리방침" content={content} />;
}

function readLegalContent(fileName: string) {
  const source = readFileSync(path.join(process.cwd(), "content", fileName), "utf8");
  return source.match(/<div class="content">([\s\S]*?)<\/div>\s*<footer>/)?.[1] ?? "";
}

function LegalPage({ title, content }: { title: string; content: string }) {
  return <div className="legal-page"><header><Link href="/">← FREE 홈으로</Link><h1>{title}</h1></header><main className="legal-content" dangerouslySetInnerHTML={{ __html: content }} /><footer>© 2026 프리너블 (FREENABLE). All rights reserved.</footer></div>;
}
