import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.freenable.co.kr"),
  title: {
    default: "FREE | 예체능 프리랜서 구인구직 플랫폼",
    template: "%s | FREE",
  },
  description: "댄스·피트니스 강사와 기업을 연결하는 예체능 프리랜서 구인구직 플랫폼 FREE입니다.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "FREE",
    title: "FREE | 예체능 프리랜서 구인구직 플랫폼",
    description: "채용부터 긴급 대타까지, 예체능 일을 더 빠르게 연결합니다.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "FREE | 예체능 프리랜서 구인구직 플랫폼",
    description: "채용부터 긴급 대타까지, 예체능 일을 더 빠르게 연결합니다.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
