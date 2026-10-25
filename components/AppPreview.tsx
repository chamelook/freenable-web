import type { ReactNode } from "react";
import Image from "next/image";
import { APP_SCREENS, type AppScreenKind } from "@/content/landing";

export type PreviewKind = AppScreenKind;

export function AppPreview({ kind, className = "", eager = false }: { kind: PreviewKind; className?: string; eager?: boolean }) {
  return (
    <div className={`phone ${className}`}>
      <Image className="phone-screen" src={`/images/app-screens/${kind}.png`} alt={APP_SCREENS[kind]} width={780} height={1688} sizes="270px" unoptimized loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} />
    </div>
  );
}

export function PreviewStage({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`preview-stage ${className}`}>{children}<p className="preview-disclaimer">가상의 예시 데이터로 구성한 앱 화면입니다.</p></div>;
}
