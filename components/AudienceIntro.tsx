interface AudienceIntroProps {
  // 예: "강사님이라면", "원장님이라면"
  label: string;
}

// 기능 소개(FeatureTour) 첫 단계 제목 위에 붙여 누구를 위한 내용인지 알려줍니다.
export function AudienceIntro({ label }: AudienceIntroProps) {
  return <p className="audience-label">{label}</p>;
}
