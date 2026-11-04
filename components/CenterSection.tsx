import { AudienceIntro } from "@/components/AudienceIntro";
import { FeatureTour } from "@/components/FeatureTour";
import { CENTER_FEATURES } from "@/content/landing";

// 학원·센터 원장님 섹션. 원장님용 인스타그램 광고는 freenable.co.kr/#center 로 바로 이 섹션에 도착합니다.
// 공고 등록·대타 구하기·강사찾기를 강사용 기능 소개처럼 스크롤하며 보고, 앱 화면은 오른쪽에 둡니다.
export function CenterSection() {
  return (
    <section className="center" id="center" aria-label="원장님이라면">
      <FeatureTour
        features={CENTER_FEATURES}
        screenSide="right"
        intro={<AudienceIntro key="center-intro" label="원장님이라면" />}
      />
    </section>
  );
}
