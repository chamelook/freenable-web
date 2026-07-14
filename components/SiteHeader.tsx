"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="FREE 홈">
          <span className="brand-word">FREE</span>
          <span className="brand-caption">FREENABLE</span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span /><span /><span />
          <span className="sr-only">메뉴 {isOpen ? "닫기" : "열기"}</span>
        </button>

        <nav className={`primary-nav${isOpen ? " is-open" : ""}`} id="primary-navigation" aria-label="주요 메뉴">
          <Link href="/#jobs" onClick={() => setIsOpen(false)}>채용공고</Link>
          <Link href="/#substitute" onClick={() => setIsOpen(false)}>긴급 대타</Link>
          <Link href="/#talent" onClick={() => setIsOpen(false)}>인재찾기</Link>
          <Link href="/#about" onClick={() => setIsOpen(false)}>서비스 소개</Link>
        </nav>

        <div className="header-actions">
          <a className="text-link" href="mailto:chamelook@gmail.com?subject=FREE%20서비스%20문의">문의하기</a>
          <Link className="button button-dark button-small" href="/#app">앱에서 시작하기</Link>
        </div>
      </div>
    </header>
  );
}
