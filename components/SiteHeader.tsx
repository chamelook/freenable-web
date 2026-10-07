"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { SITE } from "@/content/site";
import { BrandLogo } from "@/components/BrandLogo";

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
        <Link className="brand" href="/" aria-label="freenable 홈">
          <BrandLogo />
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
          {SITE.navigation.map(item => <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</a>)}
        </nav>

        <div className="header-actions">
          <a className="button button-dark button-small" href="#app">앱 이용 안내 <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </header>
  );
}
