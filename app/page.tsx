import { AppDownloadLinks } from "@/components/AppDownloadLinks";
import { AudienceIntro } from "@/components/AudienceIntro";
import { FreelancerCount } from "@/components/FreelancerCount";
import { CenterSection } from "@/components/CenterSection";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AppScreen } from "@/components/AppPreview";
import { FeatureTour } from "@/components/FeatureTour";
import { GENRES } from "@/content/landing";

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
              <p className="lead hero-lead">예체능 강사 구인구직 플랫폼</p>
              <p className="member-count"><span aria-hidden="true" className="member-count-dot" /><span><strong><FreelancerCount /></strong>의 강사와 함께하고 있어요</span></p>
              <nav className="path-links" aria-label="이용자별 안내">
                <a className="path-link" href="#teacher">
                  <span className="path-who">강사라면</span>
                  <strong>수업 찾기<span aria-hidden="true"> →</span></strong>
                  <span className="path-note">공고·대타 지원</span>
                </a>
                <a className="path-link path-link-center" href="#center">
                  <span className="path-who">원장님이라면</span>
                  <strong>강사 구하기<span aria-hidden="true"> →</span></strong>
                  <span className="path-note">공고 등록 무료</span>
                </a>
              </nav>
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
        <section className="genres" id="teacher" aria-labelledby="genres-title">
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
            <p className="genre-note">다른 장르도 추가할 예정이에요.</p>
          </div>
        </section>
        <FeatureTour intro={<AudienceIntro key="teacher-intro" label="강사님이라면" />} />
        <CenterSection />
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
