import Image from "next/image";
import { APP_SCREENS, type AppScreenKind } from "@/content/landing";

export type PreviewKind = AppScreenKind;

interface AppScreenProps {
  kind: PreviewKind;
  className?: string;
  eager?: boolean;
}

// 앱 화면 캡처를 스마트폰 테두리 안에 보여줍니다. 테두리는 인스타그램 광고(scripts/instagram-ad)와 같은 모양입니다.
// 이미지는 scripts/app-screens/render.sh로 생성합니다.
export function AppScreen({ kind, className = "", eager = false }: AppScreenProps) {
  return (
    <div className={`device ${className}`}>
      <div className="app-shot" data-slot={`screen-${kind}`} data-kind="product">
        <Image src={`/images/app-screens/${kind}.png`} alt={APP_SCREENS[kind]} width={780} height={1688} sizes="(max-width: 60rem) 300px, 340px" unoptimized loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} />
      </div>
    </div>
  );
}
