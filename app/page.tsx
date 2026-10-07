import Image from "next/image";

import { BrandLogo } from "@/components/BrandLogo";
import { SiteHeader } from "@/components/SiteHeader";
import { AppPreview, PreviewStage } from "@/components/AppPreview";
import { SITE } from "@/content/site";
import { FEATURES } from "@/content/landing";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <SiteHeader />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="hero-kicker">가르치는 일이, 더 자유로워지도록</p>
              <h1 id="hero-title">좋은 수업을 만나는 곳,<br /><span>프리너블</span></h1>
              <p className="hero-description">나에게 맞는 채용부터 꼭 필요한 대타까지.<br />댄스·피트니스 강사를 위한 일의 연결.</p>
              <div className="hero-actions"><a href="#app" className="button button-dark">앱 이용 안내 <span aria-hidden="true">↗</span></a><a href="#about" className="button button-outline">서비스 둘러보기 <span aria-hidden="true">↓</span></a></div>
            </div>
            <PreviewStage className="hero-stage"><AppPreview kind="substitute" className="hero-phone-back" /><AppPreview kind="jobs" className="hero-phone-front" /></PreviewStage>
          </div>
        </section>
        <section className="introduction section" id="about" aria-labelledby="about-title"><p className="eyebrow">수업을 찾는 일부터, 조금 더 편하게</p><h2 id="about-title">일을 찾는 시간은 줄이고,<br /><span>좋아하는 수업에 더 집중하세요.</span></h2><p>새로운 수업을 찾는 강사와, 함께할 강사를 찾는 센터.<br />프리너블이 서로에게 필요한 연결을 만들어갑니다.</p></section>
        <div className="features">{FEATURES.map((feature, index) => <section className={`feature-band feature-band-${feature.kind}`} key={feature.id} id={feature.id} aria-labelledby={`${feature.id}-title`}><div className={`feature-inner section ${index % 2 ? "feature-reverse" : ""}`}><div className="feature-copy"><p className="eyebrow">{feature.label}</p><h2 id={`${feature.id}-title`}>{feature.title}</h2><p>{feature.description}</p><span className="feature-detail">{feature.detail}</span></div><PreviewStage><AppPreview kind={feature.kind} />{feature.kind === "jobs" && <div className="floating-note"><span className="note-icon" aria-hidden="true">⌕</span><div><strong>나에게 맞는 조건으로</strong><p>분야 · 지역 · 수업 일정</p></div></div>}{feature.kind === "substitute" && <div className="floating-note"><span className="note-icon" aria-hidden="true">▦</span><div><strong>가능한 시간에, 새로운 수업</strong><p>일정을 확인하고 지원해요</p></div></div>}{feature.kind === "profile" && <div className="floating-note"><span className="note-icon" aria-hidden="true">✓</span><div><strong>나의 전문성을 한곳에</strong><p>소개 · 경력 · 자격</p></div></div>}</PreviewStage></div></section>)}</div>
        <section className="app-section" id="app" aria-labelledby="app-title"><div className="section app-inner"><Image className="app-symbol" src="/images/freenable-icon.png" alt="프리너블 앱 로고" width={88} height={88} unoptimized /><h2 id="app-title">당신의 다음 수업,<br />프리너블에서 시작해요.</h2><p>좋아하는 일을 오래, 나답게.<br />채용공고와 대타 연결을 프리너블 앱에서 만나보세요.</p><a className="button button-dark" href={SITE.appInquiry}>앱 이용 문의하기 <span aria-hidden="true">↗</span></a><p className="app-note">공고 확인과 지원은 현재 앱에서 제공해요.<br />앱 이용 방법은 문의를 통해 안내해 드립니다.</p></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand"><BrandLogo /><p>예체능 프리랜서의 가능성을<br />좋은 일과 연결합니다.</p></div>
        <div className="footer-links">
          <div><strong>서비스</strong><a href="#jobs">채용공고</a><a href="#substitute">긴급 대타</a><a href="#talent">강사 프로필</a></div>
          <div><strong>안내</strong><a href="#about">서비스 소개</a><a href="mailto:chamelook@gmail.com">고객문의</a><a href="/terms">이용약관</a><a href="/privacy">개인정보처리방침</a></div>
        </div>
      </div>
      <div className="footer-business"><p><strong>프리너블 (freenable)</strong> · 대표 권주빈 · 사업자등록번호 779-05-03544 · 통신판매업 신고번호 2026-서울성북-0328</p><p>서울시 성북구 북악산로 844 114-1201 · <a href="mailto:chamelook@gmail.com">chamelook@gmail.com</a> · 010-8979-2047 · 개인정보 보호책임자 권주빈</p><p className="copyright">© 2026 freenable. All rights reserved.</p></div>
    </footer>
  );
}
