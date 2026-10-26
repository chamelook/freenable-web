import Link from "next/link";

import { BrandLogo } from "@/components/BrandLogo";
import { AppDownloadLinks } from "@/components/AppDownloadLinks";
import { SiteHeader } from "@/components/SiteHeader";
import { AppScreen } from "@/components/AppPreview";
import { FeatureTour } from "@/components/FeatureTour";
import { GENRES } from "@/content/landing";
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
              <h1 id="hero-title">수업도 대타도<br />프리너블에서 구해요</h1>
              <p className="lead hero-lead">예체능 프리랜서 강사 구인구직 플랫폼</p>
              <AppDownloadLinks />
              <a href="#about" className="hero-explore">어떻게 쓰는지 보기</a>
            </div>
            <figure className="hero-figure">
              <AppScreen kind="jobs" className="hero-shot" eager />
              <figcaption>앱 화면은 예시입니다.</figcaption>
            </figure>
          </div>
        </section>
        <section className="statement" id="about" aria-labelledby="about-title">
          <div className="container statement-grid">
            <h2 id="about-title">구인 글 여기저기 올리던 일,<br />이제 <em>프리너블</em> 하나로</h2>
            <p className="statement-line">지인 연락, 오픈톡, 커뮤니티, 유료 공고 대신<br />센터는 무료로 올리고, 강사는 골라서 지원.</p>
          </div>
        </section>
        <section className="genres" aria-labelledby="genres-title">
          <div className="container genres-grid">
            <h2 id="genres-title">어떤 수업을<br />가르치세요?</h2>
            <ul className="genre-list">
              {GENRES.map((genre) => (
                <li key={genre.name}>
                  <span className="genre-name">{genre.name}</span>
                  <div><h3>{genre.hook}</h3><p>{genre.detail}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <FeatureTour />
        <section className="app-section" id="app" aria-labelledby="app-title">
          <div className="container app-grid">
            <div className="app-copy">
              <h2 id="app-title">공고 등록도 지원도<br />무료</h2>
              <p className="lead">앱 받고 지역·장르만 고르면<br />바로 공고 확인</p>
              <AppDownloadLinks />
              <p className="app-note">iPhone · Android</p>
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
          <div><strong>서비스</strong><a href="#jobs">수업 찾기</a><a href="#substitute">대타 구하기</a><a href="#talent">강사 프로필</a></div>
          <div><strong>안내</strong><Link href="#about">서비스 소개</Link><a href={`mailto:${SITE.email}`}>고객문의</a><Link href="/terms">이용약관</Link><Link href="/privacy">개인정보처리방침</Link></div>
        </div>
        <div className="footer-business"><p><strong>프리너블 (freenable)</strong><span>대표 권주빈</span><span>사업자등록번호 779-05-03544</span><span>통신판매업 신고번호 2026-서울성북-0328</span></p><p><span>서울시 성북구 북악산로 844 114-1201</span><a href={`mailto:${SITE.email}`}>{SITE.email}</a><span>010-8979-2047</span><span>개인정보 보호책임자 권주빈</span></p><p className="copyright">© 2026 freenable. All rights reserved.</p></div>
      </div>
    </footer>
  );
}
