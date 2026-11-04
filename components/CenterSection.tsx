import { AppDownloadLinks } from "@/components/AppDownloadLinks";
import { AppScreen } from "@/components/AppPreview";
import { FreelancerCount } from "@/components/FreelancerCount";
import { CENTER_POINTS } from "@/content/landing";
import { CENTER_STORE_LINKS } from "@/content/site";

// 강사 수는 앱 첫 진입 안내와 같은 공개 통계를 읽고, 못 읽으면 이 값을 보여줍니다.
const FREELANCER_COUNT_FALLBACK = "200+명";

// 학원·센터 원장님 섹션. 원장님용 인스타그램 광고는 freenable.co.kr/#center 로 바로 이 섹션에 도착합니다.
export function CenterSection() {
  return (
    <section className="center" id="center" aria-labelledby="center-title">
      <div className="container center-grid">
        <div className="center-copy">
          <p className="center-eyebrow">원장님이라면</p>
          <h2 id="center-title">강사 구하는 원장님,<br />공고 등록은 무료예요</h2>
          <p className="center-count"><span aria-hidden="true" className="center-count-dot" /><span><strong><FreelancerCount fallback={FREELANCER_COUNT_FALLBACK} /></strong>의 강사가 공고를 기다려요</span></p>
          <AppDownloadLinks links={CENTER_STORE_LINKS} />
          <ul className="center-points">
            {CENTER_POINTS.map((point) => (
              <li key={point.name}>
                <span className="center-point-name">{point.name}</span>
                <div><h3>{point.title}</h3><p>{point.detail}</p></div>
              </li>
            ))}
          </ul>
        </div>
        <figure className="center-figure">
          <AppScreen kind="talent" />
          <figcaption><strong>강사찾기</strong><span>장르와 활동 지역을 보고 먼저 제안</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
