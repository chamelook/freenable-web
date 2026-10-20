import { SITE, STORE_PROFILES } from "@/content/site";

export const BASE_URL = "https://www.freenable.co.kr";

export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#org`,
      name: "프리너블",
      alternateName: "freenable",
      url: `${BASE_URL}/`,
      logo: `${BASE_URL}/images/freenable-icon.png`,
      email: SITE.email,
      sameAs: [STORE_PROFILES.appStore, STORE_PROFILES.googlePlay],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: "프리너블",
      alternateName: "freenable",
      url: `${BASE_URL}/`,
      inLanguage: "ko-KR",
      publisher: { "@id": `${BASE_URL}/#org` },
    },
    {
      "@type": "MobileApplication",
      name: "프리너블",
      operatingSystem: "iOS, Android",
      applicationCategory: "BusinessApplication",
      description: "댄스·발레·필라테스·요가·피트니스 강사와 학원·센터를 연결하는 예체능 프리랜서 구인구직·대타 앱",
      installUrl: STORE_PROFILES.googlePlay,
      offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
      publisher: { "@id": `${BASE_URL}/#org` },
    },
  ],
};
