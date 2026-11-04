import type { Metadata } from "next";

import { AppDownloadLinks } from "@/components/AppDownloadLinks";
import { AppScreen } from "@/components/AppPreview";
import { FreelancerCount } from "@/components/FreelancerCount";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CENTER_AD_STORE_LINKS } from "@/content/site";

// 학원·센터 원장님 대상 랜딩. 원장님용 인스타그램 광고가 이 페이지로 연결됩니다.
// 강사 수는 앱과 같은 공개 통계를 읽고, 못 읽으면 이 값을 보여줍니다.
const FREELANCER_COUNT_FALLBACK = "200+명";

const TITLE = "학원·센터 강사 구인, 공고 등록은 무료";
const DESCRIPTION = "댄스·발레·필라테스·요가·피트니스 학원과 센터를 위한 강사 구인 앱 프리너블(freenable). 채용 공고와 대타 공고를 무료로 올리고, 강사 프로필을 보고 먼저 레슨을 제안하세요.";

// openGraph·twitter를 페이지에서 지정하면 루트의 파일 기반 공유 이미지가 빠지므로 직접 연결합니다.
const SHARE_IMAGE = { width: 1200, height: 630, alt: "프리너블 — 예체능 프리랜서 강사 구인구직 플랫폼" };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/center/" },
  openGraph: { type: "website", locale: "ko_KR", siteName: "프리너블", title: TITLE, description: DESCRIPTION, url: "/center/", images: [{ url: "/opengraph-image.png", ...SHARE_IMAGE }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [{ url: "/twitter-image.png", ...SHARE_IMAGE }] },
};

interface CenterPoint {
  name: string;
  title: string;
  detail: string;
}

const POINTS: CenterPoint[] = [
  { name: "공고 등록", title: "등록비 없이 무료로", detail: "채용 공고도 대타 공고도 무료예요. 강사는 장르와 지역을 골라 원장님 공고를 찾아요." },
  { name: "강사찾기", title: "기다리지 말고 먼저 제안", detail: "장르와 활동 지역이 보이는 강사 프로필을 보고 원장님이 먼저 레슨을 제안해요." },
  { name: "대타 구하기", title: "갑자기 빈 수업도", detail: "대타구해요에 날짜·시간·시급만 적어 올리면 그 시간에 가능한 강사가 지원해요." },
];

export default function CenterLanding() {
  return (
    <div className="landing">
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <SiteHeader showNavigation={false} downloadHref="#app" />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container headline-grid">
            <div className="headline-block">
              <h1 id="hero-title">강사 구하는 원장님,<br />공고 등록은 무료예요</h1>
              <p className="lead hero-lead">댄스·발레·필라테스·요가·피트니스<br />예체능 강사 구인 앱 freenable</p>
              <p className="center-count"><span aria-hidden="true" className="center-count-dot" /><span><strong><FreelancerCount fallback={FREELANCER_COUNT_FALLBACK} /></strong>의 강사가 공고를 기다려요</span></p>
              <AppDownloadLinks links={CENTER_AD_STORE_LINKS} />
            </div>
            <figure className="hero-figure">
              <AppScreen kind="talent" className="hero-shot" eager />
              <figcaption>강사찾기 화면 · 앱 화면은 예시입니다.</figcaption>
            </figure>
          </div>
        </section>
        <section className="genres" id="features" aria-labelledby="features-title">
          <div className="container genres-grid">
            <h2 id="features-title">원장님은<br />이렇게 써요</h2>
            <ul className="genre-list">
              {POINTS.map((point) => (
                <li key={point.name}>
                  <span className="genre-name">{point.name}</span>
                  <div><h3>{point.title}</h3><p>{point.detail}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="app-section" id="app" aria-labelledby="app-title">
          <div className="container app-grid">
            <div className="app-copy">
              <h2 id="app-title">첫 채용 공고,<br />오늘 무료로 올려보세요</h2>
              <p className="lead">앱 받고 기업 회원으로 가입한 뒤<br />기업명·사업자번호·주소만 채우면 시작</p>
              <AppDownloadLinks links={CENTER_AD_STORE_LINKS} />
              <p className="app-note">iPhone · Android</p>
            </div>
            <figure className="app-figure">
              <AppScreen kind="substitute" className="app-shot-crop" />
            </figure>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
