import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/content/site";

const SAMPLE_JOBS = [
  { type: "정규 채용", title: "K-POP 취미반 강사", location: "서울 마포구", schedule: "화·목 19:00", tone: "lime" },
  { type: "긴급 대타", title: "기구 필라테스 그룹 수업", location: "서울 성북구", schedule: "오늘 18:30", tone: "dark" },
  { type: "파트타임", title: "유아 발레 주말 클래스", location: "서울 송파구", schedule: "토 11:00", tone: "light" },
];

const PRODUCT_POINTS = [
  ["분야", "내가 가르치는 종목만"],
  ["지역", "꾸준히 이동할 수 있는 곳만"],
  ["일정", "가능한 요일과 시간만"],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <SiteHeader />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow"><span className="signal-dot" />댄스·피트니스 강사 전용</p>
              <h1 id="hero-title">수업 찾는 시간은 줄이고,<br /><span>가르치는 일에 집중하세요.</span></h1>
              <p className="hero-description">지역·종목·일정을 한 번에 확인하고,<br />정규 채용부터 오늘 필요한 대타까지 앱에서 바로 연결하세요.</p>
              <div className="hero-actions">
                <Link className="button button-dark" href="#download">앱 다운로드 <span aria-hidden="true">→</span></Link>
                <Link className="button button-quiet" href="#for-centers">센터에서 채용하기</Link>
              </div>
              <p className="hero-note">현재 공고 확인과 지원은 프리너블 앱에서 제공됩니다.</p>
            </div>

            <div className="product-stage" aria-label="프리너블 앱의 채용공고 화면 예시">
              <div className="product-glow" aria-hidden="true" />
              <div className="app-preview">
                <div className="app-preview-top"><span className="brand-word">freenable</span><span className="preview-label">화면 예시</span></div>
                <div className="app-preview-heading"><p>서울 전체</p><h2>내게 맞는 수업</h2></div>
                <div className="preview-tabs"><span className="is-active">추천 공고</span><span>긴급 대타</span></div>
                <div className="preview-jobs">
                  {SAMPLE_JOBS.map((job) => (
                    <article className={`preview-job preview-job-${job.tone}`} key={job.title}>
                      <div><span>{job.type}</span><strong>{job.title}</strong></div>
                      <p>{job.location}<br />{job.schedule}</p>
                    </article>
                  ))}
                </div>
                <div className="preview-nav" aria-hidden="true"><span className="is-active">홈</span><span>공고</span><span>대타</span><span>프로필</span></div>
              </div>
              <div className="match-toast"><span>새 공고</span><strong>내 조건과 맞는 수업이 등록됐어요.</strong></div>
            </div>
          </div>

          <div className="capability-strip" aria-label="프리너블 주요 기능">
            <p>강사의 일을 한곳에서</p>
            <ul><li>정규 채용</li><li>하루 대타</li><li>강사 프로필</li><li>센터 공고 관리</li></ul>
          </div>
        </section>

        <section className="section value-section" id="about" aria-labelledby="value-title">
          <div className="value-heading">
            <p className="eyebrow">찾는 과정부터 다르게</p>
            <h2 id="value-title">조건이 맞는 수업을<br />빠르게 발견할 수 있도록.</h2>
          </div>
          <div className="value-list">
            {PRODUCT_POINTS.map(([title, description], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </section>

        <section className="product-section" id="jobs" aria-labelledby="jobs-title">
          <div className="section product-grid">
            <div className="product-copy">
              <p className="eyebrow">수업 찾기</p>
              <h2 id="jobs-title">공고를 넘겨보기 전에,<br />중요한 조건부터 확인하세요.</h2>
              <p>종목과 지역은 물론, 수업 시간과 채용 형태까지. 지원 여부를 결정하는 정보를 한눈에 보여드립니다.</p>
              <Link className="text-link" href="#download">앱 다운로드 <span aria-hidden="true">→</span></Link>
            </div>
            <div className="jobs-panel" aria-label="조건별 채용공고 화면 예시">
              <div className="filter-row"><span className="is-selected">필라테스</span><span>서울</span><span>평일 저녁</span><span className="filter-add" aria-hidden="true">+</span></div>
              <div className="result-heading"><strong>조건에 맞는 공고</strong><span>화면 예시</span></div>
              <article className="result-card">
                <div className="result-card-head"><span>기구 필라테스</span><span className="result-status">모집 중</span></div>
                <h3>평일 저녁 그룹레슨 강사</h3>
                <dl><div><dt>지역</dt><dd>서울 성북구</dd></div><div><dt>일정</dt><dd>월·수 19:00</dd></div><div><dt>형태</dt><dd>파트타임</dd></div></dl>
                <div className="result-card-footer"><span>센터 정보와 상세 조건은 앱에서 확인</span><span aria-hidden="true">→</span></div>
              </article>
            </div>
          </div>
        </section>

        <section className="substitute-section" id="substitute" aria-labelledby="substitute-title">
          <div className="section substitute-grid">
            <div className="substitute-copy">
              <p className="eyebrow eyebrow-signal">긴급 대타</p>
              <h2 id="substitute-title">빈 수업이 생긴 오늘,<br />가능한 강사를 바로 찾습니다.</h2>
              <p>센터는 필요한 조건을 공고로 올리고, 강사는 가능한 수업에 지원합니다. 날짜와 시간이 먼저 보여서 판단이 빠릅니다.</p>
              <a className="text-link text-link-light" href={SITE.businessInquiry}>센터 이용 문의 <span aria-hidden="true">→</span></a>
            </div>
            <div className="substitute-card" aria-label="긴급 대타 공고 화면 예시">
              <div className="urgent-header"><div><span>오늘</span><strong>19</strong></div><p>SEP · SAT<br /><b>18:30 시작</b></p><span className="urgent-badge">긴급</span></div>
              <div className="urgent-body"><span>기구 필라테스</span><h3>저녁 그룹 수업을<br />맡아주실 강사를 찾아요.</h3><dl><div><dt>지역</dt><dd>서울 성북구</dd></div><div><dt>수업</dt><dd>50분 · 1회</dd></div></dl></div>
              <div className="urgent-response"><span className="signal-dot" />지원 가능한 강사에게 공고가 노출됩니다.</div>
            </div>
          </div>
        </section>

        <section className="section audience-section" id="talent" aria-labelledby="audience-title">
          <div className="section-heading"><p className="eyebrow">역할에 맞는 시작점</p><h2 id="audience-title">강사와 센터가 필요한 일은<br />처음부터 다르니까.</h2></div>
          <div className="audience-grid">
            <article className="audience-card audience-card-instructor">
              <span className="audience-number">01</span><p className="audience-label">프리랜서 강사</p><h3>내 조건에 맞는 수업을 찾고<br />프로필로 경력을 보여주세요.</h3>
              <ul><li>종목·지역·일정별 공고 확인</li><li>정규 채용과 하루 대타 지원</li><li>경력과 전문 분야 프로필 관리</li></ul>
              <Link className="button button-dark" href="#download">앱 다운로드 <span aria-hidden="true">→</span></Link>
            </article>
            <article className="audience-card audience-card-center" id="for-centers">
              <span className="audience-number">02</span><p className="audience-label">학원·스튜디오·센터</p><h3>필요한 조건을 담아 공고를 올리고<br />지원자를 한곳에서 확인하세요.</h3>
              <ul><li>정규 채용·대타 공고 등록</li><li>지원자 프로필과 경력 확인</li><li>센터 채용 문의 전용 안내</li></ul>
              <a className="button button-outline" href={SITE.businessInquiry}>센터에서 채용하기 <span aria-hidden="true">→</span></a>
            </article>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-title">
          <div><p className="eyebrow">이용 전 확인하세요</p><h2 id="faq-title">자주 묻는 질문</h2></div>
          <div className="faq-list">{SITE.questions.map(item => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
        </section>

        <section className="final-cta" id="download" aria-labelledby="app-title">
          <div className="section final-cta-inner">
            <div><p className="eyebrow eyebrow-signal">freenable app</p><h2 id="app-title">다음 수업을 찾을 준비가 됐다면.</h2><p>사용 중인 기기에 맞는 스토어에서 프리너블을 바로 설치하세요.</p></div>
            <div className="final-actions">
              <div className="store-buttons">
                <a className="button button-signal" href={SITE.appStoreUrl} target="_blank" rel="noreferrer">App Store <span aria-hidden="true">↗</span></a>
                <a className="button button-store" href={SITE.playStoreUrl} target="_blank" rel="noreferrer">Google Play <span aria-hidden="true">↗</span></a>
              </div>
              <a href={SITE.appInquiry}>설치 문의</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand"><span className="brand-word">freenable</span><p>댄스·피트니스 강사와 센터를<br />정규 채용부터 하루 대타까지 연결합니다.</p></div>
        <div className="footer-links">
          <div><strong>서비스</strong><Link href="#jobs">수업 찾기</Link><Link href="#substitute">대타 연결</Link><Link href="#talent">강사·센터 안내</Link></div>
          <div><strong>안내</strong><Link href="#about">서비스 소개</Link><a href={`mailto:${SITE.email}`}>고객문의</a><Link href="/terms">이용약관</Link><Link href="/privacy">개인정보처리방침</Link></div>
        </div>
      </div>
      <div className="footer-business"><p><strong>프리너블 (freenable)</strong> · 대표 권주빈 · 사업자등록번호 779-05-03544 · 통신판매업 신고번호 2026-서울성북-0328</p><p>서울시 성북구 북악산로 844 114-1201 · <a href={`mailto:${SITE.email}`}>{SITE.email}</a> · 010-8979-2047 · 개인정보 보호책임자 권주빈</p><p className="copyright">© 2026 freenable. All rights reserved.</p></div>
    </footer>
  );
}
