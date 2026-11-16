import { readFileSync } from "node:fs";
import path from "node:path";
import Link from "next/link";

export function readLegalContent(fileName: string) {
  const source = readFileSync(path.join(process.cwd(), "content", fileName), "utf8");
  return source.match(/<div class="content">([\s\S]*?)<\/div>\s*<footer>/)?.[1] ?? "";
}

export function LegalPage({ title, content }: { title: string; content: string }) {
  return <div className="legal-page"><header><Link href="/">← freenable 홈으로</Link><h1>{title}</h1></header><main className="legal-content" dangerouslySetInnerHTML={{ __html: content }} /><footer>© 2026 프리너블 (freenable). All rights reserved.</footer></div>;
}
