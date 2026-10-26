import Link from "next/link";

import { BrandLogo } from "@/components/BrandLogo";
import { AppDownloadLinks } from "@/components/AppDownloadLinks";
import { SiteHeader } from "@/components/SiteHeader";
import { AppScreen } from "@/components/AppPreview";
import { FeatureTour } from "@/components/FeatureTour";
import { SITE } from "@/content/site";

export default function Home() {
  return (
    <div className="landing">
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <SiteHeader />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container headline-grid">
            <div className="headline-block">
              <h1 id="hero-title">좋은 수업을 만나는 곳,<br />프리너블</h1>
              <p className="lead hero-lead">나에게 맞는 채용부터 꼭 필요한 대타까지.<br />댄스·피트니스 강사를 위한 일의 연결.</p>
              <AppDownloadLinks />
              <a href="#about" className="hero-explore">서비스 둘러보기</a>
            </div>
            <figure className="hero-figure">
              <AppScreen kind="jobs" className="hero-shot" eager />
              <figcaption>가상의 예시 데이터로 구성한 앱 화면입니다.</figcaption>
            </figure>
          </div>
        </section>
        <section className="statement" id="about" aria-labelledby="about-title">
          <div className="container statement-grid">
            <h2 id="about-title">일을 찾는 시간은 줄이고,<br />좋아하는 수업에 더 집중하세요.</h2>
            <p className="statement-line">새로운 수업을 찾는 강사와, 함께할 강사를 찾는 센터.<br />프리너블이 서로에게 필요한 연결을 만들어갑니다.</p>
          </div>
        </section>
        <FeatureTour />
        <section className="app-section" id="app" aria-labelledby="app-title">
          <div className="container app-grid">
            <div className="app-copy">
              <h2 id="app-title">당신의 다음 수업,<br />프리너블에서 시작해요.</h2>
              <p className="lead">좋아하는 일을 오래, 나답게.<br />지금 앱을 다운로드하고 나에게 맞는 수업을 찾아보세요.</p>
              <AppDownloadLinks />
              <p className="app-note">iPhone과 Android에서 이용할 수 있어요.<br />공고 확인부터 지원까지, 앱에서 간편하게.</p>
            </div>
            <figure className="app-figure">
              <AppScreen kind="detail" className="app-shot-crop" />
            </figure>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand"><BrandLogo /></div>
        <div className="footer-links">
          <div><strong>서비스</strong><a href="#jobs">채용공고</a><a href="#substitute">긴급 대타</a><a href="#talent">강사 프로필</a></div>
          <div><strong>안내</strong><Link href="#about">서비스 소개</Link><a href={`mailto:${SITE.email}`}>고객문의</a><Link href="/terms">이용약관</Link><Link href="/privacy">개인정보처리방침</Link></div>
        </div>
        <div className="footer-business"><p><strong>프리너블 (freenable)</strong><span>대표 권주빈</span><span>사업자등록번호 779-05-03544</span><span>통신판매업 신고번호 2026-서울성북-0328</span></p><p><span>서울시 성북구 북악산로 844 114-1201</span><a href={`mailto:${SITE.email}`}>{SITE.email}</a><span>010-8979-2047</span><span>개인정보 보호책임자 권주빈</span></p><p className="copyright">© 2026 freenable. All rights reserved.</p></div>
      </div>
    </footer>
  );
}
