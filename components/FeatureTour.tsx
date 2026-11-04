"use client";

import { useEffect, useRef, useState } from "react";
import { AppScreen } from "@/components/AppPreview";
import { FEATURES, type Feature } from "@/content/landing";

interface FeatureTourProps {
  features?: Feature[];
  // 넓은 화면에서 고정된 앱 화면을 놓을 쪽. 강사용은 왼쪽, 원장님용은 오른쪽입니다.
  screenSide?: "left" | "right";
}

// 넓은 화면에서는 한쪽 앱 화면을 고정하고, 반대쪽 설명을 스크롤하면 화면이 바뀝니다.
// 스크립트가 없거나 좁은 화면에서는 각 설명 아래에 화면이 순서대로 놓입니다.
export function FeatureTour({ features = FEATURES, screenSide = "left" }: FeatureTourProps) {
  const [isPinned, setIsPinned] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panels = panelsRef.current?.querySelectorAll<HTMLElement>("[data-tour-index]");
    if (!panels?.length) return;
    setIsPinned(true);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveIndex(Number(entry.target.getAttribute("data-tour-index")));
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  const classNames = ["tour", isPinned && "is-pinned", screenSide === "right" && "tour-screen-right"].filter(Boolean).join(" ");

  return (
    <div className={classNames}>
      <div className="container tour-grid">
        <div className="tour-visual">
          <div className="tour-well">
            {features.map((feature, index) => (
              <figure className="tour-frame" key={feature.id} data-active={index === activeIndex} aria-hidden={index !== activeIndex}>
                <AppScreen kind={feature.screen} />
                <figcaption><strong>{feature.note.title}</strong><span>{feature.note.text}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="tour-panels" ref={panelsRef}>
          {features.map((feature, index) => (
            <section className="tour-panel" key={feature.id} id={feature.id} aria-labelledby={`${feature.id}-title`} data-tour-index={index}>
              <div className="tour-copy">
                <h2 id={`${feature.id}-title`}>{feature.title}</h2>
                <p>{feature.description}</p>
                {feature.detail && <p className="tour-detail">{feature.detail}</p>}
              </div>
              <figure className="tour-inline">
                <AppScreen kind={feature.screen} />
                <figcaption><strong>{feature.note.title}</strong><span>{feature.note.text}</span></figcaption>
              </figure>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
