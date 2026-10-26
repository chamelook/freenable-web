import Image from "next/image";
import { APP_SCREENS, type AppScreenKind } from "@/content/landing";

export type PreviewKind = AppScreenKind;

interface AppScreenProps {
  kind: PreviewKind;
  className?: string;
  eager?: boolean;
}

// 기기 프레임 없이 앱 화면 캡처만 보여줍니다. 이미지는 scripts/app-screens/render.sh로 생성합니다.
export function AppScreen({ kind, className = "", eager = false }: AppScreenProps) {
  return (
    <div className={`app-shot ${className}`} data-slot={`screen-${kind}`} data-kind="product">
      <Image src={`/images/app-screens/${kind}.png`} alt={APP_SCREENS[kind]} width={780} height={1688} sizes="(max-width: 60rem) 300px, 340px" unoptimized loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} />
    </div>
  );
}
