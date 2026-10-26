export type AppScreenKind = "jobs" | "substitute" | "detail" | "talent";

// 화면 이미지는 scripts/app-screens/render.sh로 생성합니다. 값은 각 화면의 대체 텍스트입니다.
export const APP_SCREENS: Record<AppScreenKind, string> = {
  jobs: "프리너블 앱 채용정보 화면. 지역·장르 필터 아래에 스페셜 공고와 일반 공고가 업체명, 근무 시간, 시급과 함께 나열되어 있습니다.",
  substitute: "프리너블 앱 대타구해요 화면. 날짜, 시간, 시급이 표시된 대타 공고 목록과 글쓰기 버튼이 있습니다.",
  detail: "프리너블 앱 공고 상세 화면. 급여, 근무요일, 근무시간, 수강대상, 장르 등 근무조건과 지원하기 버튼이 있습니다.",
  talent: "프리너블 앱 강사찾기 화면. 장르와 활동 지역이 표시된 강사 프로필 카드가 나열되어 있습니다.",
};

export const FEATURES = [
  { id: "jobs", kind: "jobs" as const, label: "채용공고", title: "내게 맞는 수업을,\n한눈에", description: "여기저기 흩어진 수업 일자리.\n분야와 지역, 수업 조건을 살펴보고\n나에게 맞는 기회를 찾아보세요.", detail: "댄스, 발레, 필라테스, 요가, 피트니스" },
  { id: "substitute", kind: "substitute" as const, label: "대타 연결", title: "빈 수업과 빈 시간의\n반가운 만남", description: "갑자기 수업을 맡길 선생님이 필요할 때,\n새로운 수업을 맡을 여유가 생겼을 때.\n날짜와 지역, 분야를 확인하고 연결해요.", detail: "공고 등록부터 지원까지, 앱에서 간편하게" },
  { id: "talent", kind: "talent" as const, label: "강사 프로필", title: "나의 경험이\n다음 기회가 되도록", description: "어떤 수업을 해왔는지, 무엇을 잘하는지.\n소개와 경력, 전문 분야를 프로필에 담아\n함께할 센터에 나를 알려보세요.", detail: "가르치는 사람과 공간을 만드는 사람을 연결해요" },
];
