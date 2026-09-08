import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/content/site";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <SiteHeader />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">좋아하는 일을, 오래도록.</p>
              <h1 id="hero-title">좋은 수업이<br />좋은 일상이<br />되도록<span className="period">.</span></h1>
              <p className="hero-description">가르치는 일에 진심인 당신을 위해.<br />내게 맞는 수업부터 꼭 필요한 대타까지,<br />프리너블에서 연결해요.</p>
              <Link className="button button-dark" href="#app">프리너블 알아보기 <span aria-hidden="true">↗</span></Link>
              <p className="hero-footnote">댄스·피트니스 강사를 위한 일의 연결</p>
            </div>
            <div className="hero-photo">
              <Image src="/images/movement.jpg" alt="밝은 스튜디오에서 함께 운동하는 사람들" fill priority unoptimized sizes="(max-width: 760px) 100vw, 55vw" />
              <div className="photo-caption"><span>수업이 있는 곳에, 프리너블</span><span aria-hidden="true">↗</span></div>
            </div>
          </div>
          <div className="field-strip"><p>당신이 가르치는 모든 움직임</p><ul>{SITE.fields.map(field => <li key={field}>{field}</li>)}</ul></div>
        </section>

        <section className="section introduction" id="about" aria-labelledby="about-title">
          <p className="eyebrow">수업을 찾는 일부터, 조금 더 편하게</p>
          <h2 id="about-title">여기저기 찾던 수업 일자리.<br />이제, 한곳에서 만나요.</h2>
          <p>새로운 수업을 찾을 때도, 빈 수업을 맡길 사람이 필요할 때도.<br className="desktop-break" /> 프리너블은 강사와 센터 사이에 필요한 연결을 만듭니다.</p>
        </section>

        <section className="section feature-section" id="jobs" aria-labelledby="jobs-title">
          <div className="feature-visual jobs-visual">
            <div className="visual-heading"><span className="brand-word">freenable</span><span>수업 찾기</span></div>
            <div className="visual-title">어떤 수업을<br />함께하고 싶나요?</div>
            <div className="discipline-grid">{SITE.fields.map((field, index) => <div key={field} className={`discipline discipline-${index}`}><span aria-hidden="true">{["↗", "✳", "∿", "◒", "+"][index]}</span><strong>{field}</strong></div>)}</div>
            <p className="visual-note">나의 분야에서 시작하는 새로운 기회</p>
          </div>
          <div className="feature-copy">
            <p className="eyebrow">수업 찾기</p>
            <h2 id="jobs-title">아무 수업 말고,<br />나에게 맞는 수업.</h2>
            <p>내 분야, 내 지역, 나의 일정.<br />나에게 중요한 조건부터 살펴보세요.</p>
            <ol className="criteria-list">{SITE.jobCriteria.map(item => <li key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></li>)}</ol>
            <Link className="arrow-link" href="#app">앱 이용 안내 <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="substitute-section" id="substitute" aria-labelledby="substitute-title">
          <div className="section feature-section substitute-inner">
            <div className="feature-copy">
              <p className="eyebrow">대타 연결</p>
              <h2 id="substitute-title">갑자기 비는 수업도,<br />새롭게 열린 기회도.</h2>
              <p>수업을 부탁할 강사를 찾는 센터와<br />빈 시간에 수업을 맡고 싶은 강사가 만나요.</p>
              <p className="secondary-copy">언제, 어디서, 어떤 수업인지.<br />필요한 조건을 공고로 나누고 연결을 시작하세요.</p>
              <Link className="arrow-link" href="#app">대타 기능 이용 안내 <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="connection-visual" aria-label="센터의 대타 공고와 강사의 지원을 연결하는 서비스">
              <span className="connection-label">빈 수업을 채우는 연결</span>
              <div className="message message-center"><span>센터</span><p>이번 수업,<br /><strong>함께해 주실 선생님?</strong></p></div>
              <div className="connection-line" aria-hidden="true"><span>↓</span></div>
              <div className="message message-teacher"><span>강사</span><p>제 일정에 맞는 수업이네요.<br /><strong>제가 함께할게요.</strong></p></div>
              <span className="connection-footnote">공고 등록부터 지원까지, 앱에서</span>
            </div>
          </div>
        </section>

        <section className="section audience-section" id="talent" aria-labelledby="talent-title">
          <div className="section-heading"><p className="eyebrow">각자의 자리에서, 함께</p><h2 id="talent-title">가르치는 사람도,<br />공간을 만드는 사람도.</h2></div>
          <div className="audience-grid">
            <div className="audience-photo"><Image src="/images/yoga.jpg" alt="해 질 무렵 야외에서 요가 동작을 하는 사람" fill unoptimized sizes="(max-width: 760px) 100vw, 45vw" /><p>좋아하는 일을<br />계속할 수 있도록.</p></div>
            <div className="audience-details"><article><span className="audience-label">프리랜서 강사라면</span><h3>수업에 쏟는 마음만큼,<br />일을 찾는 과정은 가볍게.</h3><p>새로운 수업과 대타 기회를 살펴보고,<br />프로필에 나의 경력과 전문성을 담아보세요.</p><Link className="arrow-link" href="#app">강사 이용 안내 <span aria-hidden="true">↗</span></Link></article><article><span className="audience-label">학원·스튜디오·센터라면</span><h3>우리 수업을 함께할<br />선생님을 만나세요.</h3><p>채용부터 하루 대타까지.<br />필요한 조건을 담아 앱에서 공고를 등록하세요.</p><a className="arrow-link" href={SITE.businessInquiry}>센터 이용 문의 <span aria-hidden="true">↗</span></a></article></div>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-title"><h2 id="faq-title">궁금한 점이 있나요?</h2><div className="faq-list">{SITE.questions.map(item => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></section>

        <section className="app-section" id="app" aria-labelledby="app-title"><div className="section app-inner"><Image className="app-symbol" src="/images/freenable-icon.png" alt="프리너블 앱 로고" width={96} height={96} unoptimized /><p className="eyebrow">다음 수업의 시작, 프리너블</p><h2 id="app-title">당신의 다음 수업을<br />함께 찾아볼까요?</h2><p>공고 확인과 지원은 현재 앱에서 이용할 수 있어요.<br />앱 이용 방법이 궁금하다면 편하게 문의해 주세요.</p><a className="button button-dark" href={SITE.appInquiry}>앱 이용 문의하기 <span aria-hidden="true">↗</span></a><span className="app-note">웹 채용 서비스도 차근차근 준비하고 있어요.</span></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand"><span className="brand-word">freenable</span><p>예체능 프리랜서의 가능성을<br />좋은 일과 연결합니다.</p></div>
        <div className="footer-links">
          <div><strong>서비스</strong><Link href="#jobs">채용공고</Link><Link href="#substitute">긴급 대타</Link><Link href="#talent">인재찾기</Link></div>
          <div><strong>안내</strong><Link href="#about">서비스 소개</Link><a href="mailto:chamelook@gmail.com">고객문의</a><Link href="/terms">이용약관</Link><Link href="/privacy">개인정보처리방침</Link></div>
        </div>
      </div>
      <div className="footer-business"><p><strong>프리너블 (freenable)</strong> · 대표 권주빈 · 사업자등록번호 779-05-03544 · 통신판매업 신고번호 2026-서울성북-0328</p><p>서울시 성북구 북악산로 844 114-1201 · <a href="mailto:chamelook@gmail.com">chamelook@gmail.com</a> · 010-8979-2047 · 개인정보 보호책임자 권주빈</p><p className="copyright">© 2026 freenable. All rights reserved.</p></div>
    </footer>
  );
}
