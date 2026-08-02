import Link from "next/link";
import { CategoryTabs, HeroSearch, ReadyButton } from "@/components/InteractiveControls";
import { SiteHeader } from "@/components/SiteHeader";

const JOBS = [
  { initial: "P", markClass: "", company: "필라테스 스튜디오", title: <>저녁 그룹레슨<br />필라테스 강사</>, location: "서울 성북구", experience: "경력 무관", schedule: "시간 협의" },
  { initial: "D", markClass: "mark-dark", company: "댄스 아카데미", title: <>K-POP 취미반<br />전임 강사</>, location: "서울 마포구", experience: "1년 이상", schedule: "주 3일" },
  { initial: "Y", markClass: "mark-warm", company: "웰니스 센터", title: <>평일 오전<br />요가 강사</>, location: "경기 성남시", experience: "2년 이상", schedule: "오전 수업" },
  { initial: "F", markClass: "mark-outline", company: "피트니스 클럽", title: <>퍼스널 트레이너<br />프리랜서 코치</>, location: "인천 연수구", experience: "경력 무관", schedule: "요일 협의" },
];

const SUBSTITUTE_JOBS = [
  { date: "2026-07-17", day: "17", month: "JUL · FRI", tag: "필라테스", title: "오후 7시 기구 필라테스 그룹 수업", meta: "서울 강남구 · 50분 · 1회" },
  { date: "2026-07-18", day: "18", month: "JUL · SAT", tag: "댄스", title: "주말 키즈 K-POP 클래스", meta: "경기 수원시 · 80분 · 1회" },
  { date: "2026-07-20", day: "20", month: "JUL · MON", tag: "요가", title: "모닝 빈야사 요가 클래스", meta: "서울 용산구 · 60분 · 1회" },
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
              <p className="eyebrow"><span className="status-dot" /> 예체능 프리랜서 전문 채용 플랫폼</p>
              <h1 id="hero-title">당신의 무대가,<br /><span>일로 이어지도록.</span></h1>
              <p className="hero-description">댄스·피트니스 강사와 기업을 한곳에서 연결합니다.<br />정규 채용부터 오늘 필요한 긴급 대타까지 더 빠르게 만나보세요.</p>
            </div>
            <HeroSearch />
            <div className="hero-note"><span>WEB</span><p><strong>웹 채용 서비스는 준비 중입니다.</strong> 현재 채용공고 확인과 지원은 freenable 앱에서 이용할 수 있습니다.</p></div>
          </div>
        </section>

        <section className="job-section section" id="jobs" aria-labelledby="jobs-title">
          <div className="section-heading">
            <div><p className="eyebrow">JOBS FOR YOU</p><h2 id="jobs-title">분야별 채용 기회를<br />한눈에 확인하세요</h2></div>
            <Link className="arrow-link" href="#app">앱에서 전체 공고 보기 <span aria-hidden="true">→</span></Link>
          </div>
          <CategoryTabs />
          <div className="job-grid" aria-label="채용공고 화면 예시">
            {JOBS.map((job) => (
              <article className="job-card" key={job.company}>
                <div className="job-card-top"><span className={`company-mark ${job.markClass}`.trim()}>{job.initial}</span><span className="job-badge">채용 예시</span></div>
                <p className="company-name">{job.company}</p>
                <h3>{job.title}</h3>
                <dl className="job-meta"><div><dt>지역</dt><dd>{job.location}</dd></div><div><dt>경력</dt><dd>{job.experience}</dd></div></dl>
                <div className="job-card-footer"><span>{job.schedule}</span><ReadyButton /></div>
              </article>
            ))}
          </div>
          <p className="preview-caption">위 공고는 앞으로 제공될 웹 채용 화면을 보여주기 위한 예시입니다.</p>
        </section>

        <section className="substitute-section" id="substitute" aria-labelledby="substitute-title">
          <div className="section substitute-inner">
            <div className="substitute-intro">
              <p className="eyebrow eyebrow-light">URGENT SUBSTITUTE</p>
              <h2 id="substitute-title">갑자기 빈 수업,<br />빠르게 연결해요.</h2>
              <p>날짜, 지역, 장르만 확인하고 앱에서 바로 지원하세요.</p>
              <Link className="button button-light" href="#app">긴급 대타 알아보기</Link>
            </div>
            <div className="substitute-list" aria-label="긴급 대타 화면 예시">
              {SUBSTITUTE_JOBS.map((job) => (
                <article key={job.date}>
                  <time dateTime={job.date}><strong>{job.day}</strong><span>{job.month}</span></time>
                  <div><span className="list-tag">{job.tag}</span><h3>{job.title}</h3><p>{job.meta}</p></div>
                  <ReadyButton label="→" ariaLabel={`${job.tag} 대타 상세보기`} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="talent-section section" id="talent" aria-labelledby="talent-title">
          <div className="section-heading compact-heading"><div><p className="eyebrow">FOR EVERYONE</p><h2 id="talent-title">구직자와 기업 모두에게<br />필요한 연결만 남겼습니다</h2></div></div>
          <div className="audience-grid">
            <article className="audience-card freelancer-card">
              <p className="audience-index">01 · FREELANCER</p><h3>내 일정에 맞는<br />좋은 수업을 찾으세요.</h3>
              <ul><li>장르와 지역에 맞는 채용공고</li><li>갑자기 생긴 빈 시간의 대타 매칭</li><li>경력과 전문성을 보여주는 프로필</li></ul>
              <Link href="#app">프리랜서로 시작하기 <span aria-hidden="true">→</span></Link>
            </article>
            <article className="audience-card business-card">
              <p className="audience-index">02 · BUSINESS</p><h3>우리 수업에 맞는<br />강사를 빠르게 만나세요.</h3>
              <ul><li>채용·대타 공고를 한곳에서 관리</li><li>장르와 지역별 인재 프로필 탐색</li><li>지원부터 직접 제안까지 간편하게</li></ul>
              <Link href="#app">기업 회원으로 시작하기 <span aria-hidden="true">→</span></Link>
            </article>
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="section about-inner">
            <p className="large-quote">“누구나 자신의 재능으로<br />더 자유롭게 일할 수 있도록.”</p>
            <div className="about-copy"><p className="eyebrow">WHY freenable</p><h2 id="about-title">예체능 프리랜서의<br />일하는 방식을 바꿉니다.</h2><p>기존 채용 사이트에서 찾기 어려웠던 강사 채용과 대타 정보를 한곳에 모았습니다. freenable은 댄스와 피트니스에서 시작해 음악, 연기, 스포츠까지 더 넓은 재능의 시장으로 확장해갑니다.</p></div>
          </div>
        </section>

        <section className="app-section section" id="app" aria-labelledby="app-title">
          <div className="app-card">
            <div className="app-copy">
              <p className="eyebrow eyebrow-light">freenable MOBILE APP</p><h2 id="app-title">좋은 기회를<br />가장 먼저 만나보세요.</h2>
              <p>웹 채용 서비스가 준비되는 동안, freenable 앱에서 채용공고와 긴급 대타 기능을 먼저 이용해보세요.</p>
              <div className="store-actions"><a className="button button-light" href="mailto:chamelook@gmail.com?subject=freenable%20앱%20이용%20문의">앱 이용 문의</a><a className="button button-outline-light" href="mailto:chamelook@gmail.com?subject=freenable%20웹%20서비스%20출시%20알림">웹 출시 소식 받기</a></div>
            </div>
            <div className="app-visual" aria-hidden="true">
              <div className="phone-card phone-card-back"><span>긴급 대타</span><strong>오늘 가능한<br />수업을 확인하세요</strong></div>
              <div className="phone-card phone-card-front"><div className="mini-logo">freenable</div><p>내게 맞는 채용공고</p>{["필라테스 강사", "댄스 전임 강사", "요가 그룹 강사"].map((title, index) => <div className="mini-job" key={title}><i /><span>{title}<br /><small>{index === 0 ? "서울 · 경력 무관" : index === 1 ? "서울 · 주 3일" : "경기 · 오전 수업"}</small></span></div>)}</div>
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
