import type { ReactNode } from "react";
import { PREVIEW } from "@/content/landing";
import { BrandLogo } from "@/components/BrandLogo";

export type PreviewKind = "jobs" | "substitute" | "profile";

export function AppPreview({ kind, className = "" }: { kind: PreviewKind; className?: string }) {
  return (
    <div className={`phone ${className}`} aria-label={`${PREVIEW.titles[kind]} 기능 설명용 예시`}>
      <div className="phone-status" aria-hidden="true"><span>9:41</span><span className="phone-island" /><span>••• ▰</span></div>
      <div className="phone-header"><BrandLogo /><span className="preview-label">미리보기</span></div>
      <div className="phone-body">
        <h3>{PREVIEW.titles[kind]}</h3>
        {kind === "jobs" && <><p className="phone-intro">나의 다음 수업을 찾아보세요</p><div className="phone-tabs"><span className="selected">전체</span><span>댄스</span><span>피트니스</span></div><div className="phone-filters"><span>지역 전체⌄</span><span>분야 전체⌄</span></div>{PREVIEW.jobs.map(job => <div className="preview-job" key={job.title}><span className="preview-tag">{job.field}</span><h4>{job.title}</h4><p>{job.description}</p><div className="preview-job-bottom"><span>{job.schedule}</span><span aria-hidden="true">↗</span></div></div>)}</>}
        {kind === "substitute" && <><p className="phone-intro">서로의 빈 시간을 연결해요</p><div className="schedule-strip">{PREVIEW.days.map((day, i) => <span className={i === 2 ? "selected" : ""} key={day}><small>{day}</small><b>{i + 12}</b></span>)}</div><div className="preview-job substitute-job"><span className="preview-tag">대타 수업 예시</span><h4>함께할 선생님을<br />찾고 있어요</h4><dl>{PREVIEW.lesson.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl><span className="preview-action">수업 조건 확인하기</span></div><div className="phone-notice"><span aria-hidden="true">✓</span><p>가능한 일정에<br /><strong>새로운 수업을 더해보세요.</strong></p></div></>}
        {kind === "profile" && <><p className="phone-intro">나를 소개하는 가장 쉬운 방법</p><div className="profile-intro"><div className="profile-monogram" aria-hidden="true"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4" /><path d="M4 22v-2a8 8 0 0 1 16 0v2" /></svg></div><h4>나의 강사 프로필</h4><p>가르치는 분야와 경력을 한곳에</p><div className="profile-tags"><span>전문 분야</span><span>활동 지역</span></div></div>{PREVIEW.profile.map(item => <div className="profile-row" key={item.title}><h4>{item.title}</h4><p>{item.description}</p></div>)}</>}
      </div>
      <div className="phone-nav" aria-hidden="true"><span className={kind === "jobs" ? "selected" : ""}>⌂<small>채용공고</small></span><span className={kind === "substitute" ? "selected" : ""}>▦<small>대타 수업</small></span><span className={kind === "profile" ? "selected" : ""}>◯<small>내 프로필</small></span></div>
      <div className="home-indicator" aria-hidden="true" />
    </div>
  );
}

export function PreviewStage({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`preview-stage ${className}`}>{children}<p className="preview-disclaimer">기능 이해를 돕기 위한 예시 화면입니다.</p></div>;
}
