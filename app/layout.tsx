import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const spoqa = localFont({
  src: [
    { path: "../public/fonts/SpoqaHanSansNeo-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/SpoqaHanSansNeo-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/SpoqaHanSansNeo-Bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-spoqa",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.freenable.co.kr"),
  title: {
    default: "freenable | 예체능 프리랜서 구인구직 플랫폼",
    template: "%s | freenable",
  },
  description: "댄스·피트니스 강사가 지역·종목·일정에 맞는 채용공고와 긴급 대타를 찾고, 센터가 필요한 강사를 채용하는 플랫폼입니다.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "freenable",
    title: "freenable | 예체능 프리랜서 구인구직 플랫폼",
    description: "지역·종목·일정에 맞는 수업 찾기부터 센터의 강사 채용과 긴급 대타까지 앱에서 연결합니다.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "freenable | 예체능 프리랜서 구인구직 플랫폼",
    description: "지역·종목·일정에 맞는 수업 찾기부터 센터의 강사 채용과 긴급 대타까지 앱에서 연결합니다.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={spoqa.variable}>{children}</body>
    </html>
  );
}
