export const PREVIEW = {
  titles: { jobs: "채용공고", substitute: "대타 수업", profile: "내 프로필" },
  jobs: [
    { field: "필라테스", title: "함께 수업할 필라테스 강사", description: "스튜디오 · 공고 예시", schedule: "지역과 수업 일정 확인" },
    { field: "댄스", title: "K-POP 수업을 함께할 강사", description: "댄스 학원 · 공고 예시", schedule: "수업 조건 확인" },
    { field: "요가", title: "요가 그룹 수업 강사", description: "요가 센터 · 공고 예시", schedule: "경력 조건 확인" },
  ],
  days: ["월", "화", "수", "목", "금"],
  lesson: [{ label: "수업", value: "그룹 필라테스" }, { label: "지역", value: "서울" }, { label: "시간", value: "오후 수업 · 1회" }],
  profile: [{ title: "소개", description: "나의 수업 방식과 강점을 소개해요." }, { title: "경력", description: "함께해 온 수업 경험을 담아요." }, { title: "자격", description: "전문성을 보여주는 자격을 정리해요." }],
};

export const FEATURES = [
  { id: "jobs", kind: "jobs" as const, label: "채용공고", title: "내게 맞는 수업을,\n한눈에", description: "여기저기 흩어진 수업 일자리.\n분야와 지역, 수업 조건을 살펴보고\n나에게 맞는 기회를 찾아보세요.", detail: "댄스 · 발레 · 필라테스 · 요가 · 피트니스" },
  { id: "substitute", kind: "substitute" as const, label: "대타 연결", title: "빈 수업과 빈 시간의\n반가운 만남", description: "갑자기 수업을 맡길 선생님이 필요할 때,\n새로운 수업을 맡을 여유가 생겼을 때.\n날짜와 지역, 분야를 확인하고 연결해요.", detail: "공고 등록부터 지원까지, 앱에서 간편하게" },
  { id: "talent", kind: "profile" as const, label: "강사 프로필", title: "나의 경험이\n다음 기회가 되도록", description: "어떤 수업을 해왔는지, 무엇을 잘하는지.\n소개와 경력, 전문 분야를 프로필에 담아\n함께할 센터에 나를 알려보세요.", detail: "가르치는 사람과 공간을 만드는 사람을 연결해요" },
];
