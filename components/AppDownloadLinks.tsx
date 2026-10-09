import { SITE } from "@/content/site";

export function AppDownloadLinks() {
  return (
    <div className="app-download-links" role="group" aria-label="프리너블 앱 다운로드">
      <a className="store-link" href={SITE.appStore} aria-label="App Store에서 프리너블 다운로드">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M17.05 12.54c.03 3.23 2.83 4.3 2.86 4.31-.02.08-.45 1.53-1.48 3.03-.9 1.3-1.84 2.6-3.31 2.63-1.45.03-1.92-.85-3.58-.85-1.65 0-2.17.82-3.55.88-1.42.05-2.5-1.42-3.4-2.71-1.85-2.67-3.27-7.55-1.37-10.85a5.28 5.28 0 0 1 4.47-2.71c1.4-.03 2.72.94 3.58.94.85 0 2.46-1.16 4.14-.99.7.03 2.67.28 3.94 2.14-.1.06-2.35 1.37-2.3 4.18ZM14.32 4.48c.75-.91 1.26-2.17 1.12-3.43-1.08.04-2.4.72-3.17 1.62-.69.8-1.29 2.07-1.13 3.3 1.21.1 2.44-.61 3.18-1.49Z" />
        </svg>
        <span>App Store</span>
      </a>
      <a className="store-link" href={SITE.googlePlay} aria-label="Google Play에서 프리너블 다운로드">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M3.5 2.4 13.1 12 3.5 21.6a1.8 1.8 0 0 1-.5-1.3V3.7c0-.5.2-1 .5-1.3ZM4.8 1.9c.4 0 .8.1 1.2.3l11.4 6.5-3.2 3.2L4.8 1.9Zm13.7 7.5 2.6 1.5c.9.5.9 1.7 0 2.2l-2.6 1.5-3.6-2.6 3.6-2.6Zm-1.1 5.9L6 21.8c-.4.2-.8.3-1.2.3l9.4-10 3.2 3.2Z" />
        </svg>
        <span>Google Play</span>
      </a>
    </div>
  );
}
