export type AppScreenKind = "jobs" | "substitute" | "detail" | "talent";

// 화면 이미지는 scripts/app-screens/render.sh로 생성합니다. 값은 각 화면의 대체 텍스트입니다.
export const APP_SCREENS: Record<AppScreenKind, string> = {
  jobs: "프리너블 앱 채용정보 화면. 지역·장르 필터 아래에 스페셜 공고와 일반 공고가 업체명, 근무 시간, 시급과 함께 나열되어 있습니다.",
  substitute: "프리너블 앱 대타구해요 화면. 날짜, 시간, 시급이 표시된 대타 공고 목록과 글쓰기 버튼이 있습니다.",
  detail: "프리너블 앱 공고 상세 화면. 급여, 근무요일, 근무시간, 수강대상, 장르 등 근무조건과 지원하기 버튼이 있습니다.",
  talent: "프리너블 앱 강사찾기 화면. 장르와 활동 지역이 표시된 강사 프로필 카드가 나열되어 있습니다.",
};

export interface Feature {
  id: string;
  title: string;
  description: string;
  detail?: string;
  screen: AppScreenKind;
  note: { title: string; text: string };
}

export const FEATURES: Feature[] = [
  { id: "jobs", title: "장르와 지역으로\n수업 고르기", description: "필라테스인지 발레인지, 어느 지역인지 고르면\n그 조건 공고만 남아요.\n시급·요일·시간·수강 대상 보고 바로 지원.", screen: "detail", note: { title: "지원 전에 조건부터", text: "급여, 근무 요일과 시간, 수강 대상" } },
  { id: "substitute", title: "갑자기 빈 수업,\n대타 선생님 찾을 땐", description: "대타구해요에 날짜·시간·시급만 적어 올리면\n그 시간에 가능한 강사가 보고 지원해요.\n시간 비는 날, 하루짜리 수업도 여기서.", detail: "공고 등록도 지원도 무료, 앱에서 간편하게", screen: "substitute", note: { title: "대타구해요", text: "날짜, 시간, 시급을 보고 지원" } },
  { id: "talent", title: "프로필 올려 두면\n센터가 보고 연락", description: "여기저기 이력서 돌리지 않아도 돼요.\n경력이랑 전문 장르, 한 번만 써 두면\n센터에서 레슨을 제안해요.", detail: "강사 구하는 센터라면 강사찾기부터", screen: "talent", note: { title: "강사찾기", text: "장르와 활동 지역이 보이는 프로필 카드" } },
];

// 장르별 섹션. 해당 장르 강사가 자기 이야기로 읽을 수 있는 수업 상황을 적습니다.
export const GENRES = [
  { name: "댄스", hook: "저녁·주말 타임이 비어 있다면", detail: "키즈 방송댄스, 성인 K-POP, 방과후 수업. 시간대 맞는 공고만 골라 지원." },
  { name: "발레", hook: "한 타임만 비어도 대타가 급할 때", detail: "성인 취미발레 주말반, 유아 발레. 하루 비는 날도 대타구해요에 한 번만." },
  { name: "필라테스", hook: "센터 여러 곳을 오가는 프리랜서라면", detail: "기구·매트 그룹 레슨, 오전·저녁 타임. 동선에 맞는 지역 공고만 모아 보기." },
  { name: "요가", hook: "정규 수업 하나 더 늘리고 싶을 때", detail: "아침 빈야사, 저녁 하타. 요일과 시간이 맞는 정규 수업 찾기." },
  { name: "피트니스", hook: "GX 타임, PT 자리를 찾는다면", detail: "그룹 GX, 퍼스널 트레이닝. 시급과 근무 시간 보고 바로 지원." },
];

// 홈 원장님 섹션(#center). 강사용 기능 소개(FEATURES)와 같은 방식으로 스크롤하며 봅니다. id는 강사용 섹션과 겹치지 않게 center- 로 시작합니다.
export const CENTER_FEATURES: Feature[] = [
  { id: "center-post", title: "채용 공고,\n등록비 없이 무료로", description: "급여·요일·시간·수강 대상만 적어 올리면\n장르와 지역을 고른 강사에게 공고가 보여요.\n지원한 강사는 앱에서 바로 확인해요.", detail: "채용 공고도 대타 공고도 등록 무료", screen: "detail", note: { title: "강사가 보는 원장님 공고", text: "급여, 근무 요일과 시간, 수강 대상" } },
  { id: "center-substitute", title: "갑자기 빈 수업,\n대타도 바로", description: "대타구해요에 날짜·시간·시급만 적어 올리면\n그 시간에 가능한 강사가 보고 지원해요.\n하루짜리 수업도, 급한 당일 대타도 여기서.", screen: "substitute", note: { title: "대타구해요", text: "날짜, 시간, 시급이 보이는 대타 공고" } },
  { id: "center-talent", title: "기다리지 말고\n먼저 제안하기", description: "공고만 올려 두고 기다리지 않아도 돼요.\n강사찾기에서 장르와 활동 지역을 보고\n마음에 드는 강사에게 먼저 레슨을 제안해요.", detail: "강사가 제안을 수락하면 연락처가 공개돼요", screen: "talent", note: { title: "강사찾기", text: "장르와 활동 지역이 보이는 프로필 카드" } },
];
