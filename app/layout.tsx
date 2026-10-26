import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

import { SITE } from "@/content/site";
import { BASE_URL, STRUCTURED_DATA } from "@/content/structured-data";
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
  metadataBase: new URL(BASE_URL),
  title: {
    default: "프리너블(freenable) | 예체능 프리랜서 강사 구인구직 플랫폼",
    template: "%s | freenable",
  },
  description: "예체능 프리랜서 강사 구인구직 플랫폼 프리너블(freenable). 댄스·발레·필라테스·요가·피트니스 강사는 수업을 찾고, 학원·센터는 강사와 대타를 구해요. 공고 등록과 지원은 무료예요.",
  alternates: { canonical: "/" },
  verification: {
    other: { "naver-site-verification": "33c1ed7be14518f3143617830dc991953bbf67eb" },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "프리너블",
    title: "프리너블(freenable) | 예체능 프리랜서 강사 구인구직 플랫폼",
    description: "댄스·발레·필라테스·요가·피트니스 강사 공고와 대타 공고를 한 앱에서. 공고 등록도 지원도 무료.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "프리너블(freenable) | 예체능 프리랜서 강사 구인구직 플랫폼",
    description: "댄스·발레·필라테스·요가·피트니스 강사 공고와 대타 공고를 한 앱에서. 공고 등록도 지원도 무료.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={spoqa.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c") }} />
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaMeasurementId}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","${SITE.gaMeasurementId}");`}
        </Script>
      </body>
    </html>
  );
}
