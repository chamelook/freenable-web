"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";

const CATEGORIES = ["전체", "댄스", "필라테스", "요가", "헬스", "기타"];
const KEYWORDS = ["필라테스", "요가", "발레", "댄스", "헬스"];

function useToast() {
  const [message, setMessage] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((nextMessage: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMessage(nextMessage);
    timerRef.current = setTimeout(() => setMessage(""), 3600);
  }, []);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  return { message, showToast };
}

export function HeroSearch() {
  const [keyword, setKeyword] = useState("");
  const { message, showToast } = useToast();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = keyword.trim() ? `'${keyword.trim()}' 검색은 ` : "";
    showToast(`${subject}웹 서비스에서 곧 제공됩니다. 지금은 FREE 앱에서 확인해 주세요.`);
    document.querySelector("#app")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <form className="search-panel" onSubmit={onSubmit}>
        <div className="search-field">
          <label htmlFor="keyword">어떤 일을 찾고 있나요?</label>
          <div className="input-row">
            <span className="search-mark" aria-hidden="true" />
            <input id="keyword" name="keyword" type="search" placeholder="직무, 장르, 기업명 검색" autoComplete="off" value={keyword} onChange={(event) => setKeyword(event.target.value)} />
          </div>
        </div>
        <div className="search-field location-field">
          <label htmlFor="location">지역</label>
          <select id="location" name="location" defaultValue="">
            <option value="">지역 전체</option>
            <option>서울</option><option>경기</option><option>인천</option><option>부산</option>
            <option>대구</option><option>광주</option><option>대전</option><option>기타 지역</option>
          </select>
        </div>
        <button className="button button-accent search-button" type="submit">일자리 찾기</button>
      </form>
      <div className="popular-searches" aria-label="인기 검색어">
        <span>인기 검색</span>
        {KEYWORDS.map((item) => <button key={item} type="button" onClick={() => setKeyword(item)}>{item}</button>)}
      </div>
      <Toast message={message} />
    </>
  );
}

export function CategoryTabs() {
  const [active, setActive] = useState("전체");
  const { message, showToast } = useToast();

  return (
    <>
      <div className="category-tabs" role="group" aria-label="채용 분야 미리보기">
        {CATEGORIES.map((item) => (
          <button
            key={item}
            className={active === item ? "is-active" : undefined}
            type="button"
            aria-pressed={active === item}
            onClick={() => {
              setActive(item);
              showToast(`${item} 분야 웹 공고는 준비 중입니다. 앱에서 먼저 확인해 주세요.`);
            }}
          >{item}</button>
        ))}
      </div>
      <Toast message={message} />
    </>
  );
}

export function ReadyButton({ label = "상세보기", ariaLabel }: { label?: string; ariaLabel?: string }) {
  const { message, showToast } = useToast();
  return (
    <>
      <button type="button" aria-label={ariaLabel} onClick={() => showToast("웹 상세보기는 준비 중입니다. 현재 서비스는 FREE 앱에서 이용할 수 있습니다.")}>{label}</button>
      <Toast message={message} />
    </>
  );
}

function Toast({ message }: { message: string }) {
  return <div className={`toast${message ? " is-visible" : ""}`} role="status" aria-live="polite" aria-atomic="true">{message}</div>;
}
