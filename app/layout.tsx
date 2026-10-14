import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const spoqa = localFont({
  src: [
    { path: "../public/fonts/SpoqaHanSansNeo-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/SpoqaHanSansNeo-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/SpoqaHanSansNeo-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-spoqa",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.freenable.co.kr"),
  title: {
    default: "프리너블(freenable) | 예체능 강사 구인구직·대타 앱",
    template: "%s | freenable",
  },
  description: "댄스·발레·필라테스·요가·피트니스 강사와 학원·센터를 연결하는 예체능 프리랜서 구인구직·대타 앱, 프리너블(freenable)입니다.",
  alternates: { canonical: "/" },
  verification: {
    other: { "naver-site-verification": "33c1ed7be14518f3143617830dc991953bbf67eb" },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "프리너블",
    title: "프리너블(freenable) | 예체능 강사 구인구직·대타 앱",
    description: "채용부터 긴급 대타까지, 예체능 일을 더 빠르게 연결합니다.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "프리너블(freenable) | 예체능 강사 구인구직·대타 앱",
    description: "채용부터 긴급 대타까지, 예체능 일을 더 빠르게 연결합니다.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={spoqa.variable}>{children}</body>
    </html>
  );
}
