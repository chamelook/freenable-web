import Link from "next/link";

import { BrandLogo } from "@/components/BrandLogo";
import { SITE } from "@/content/site";

// 사이트 공용 푸터. 다른 페이지에서도 동작하도록 홈 섹션 링크는 "/#..."로 둡니다.
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand"><BrandLogo /></div>
        <div className="footer-links">
          <div><strong>서비스</strong><Link href="/#jobs">수업 찾기</Link><Link href="/#substitute">대타 구하기</Link><Link href="/#talent">강사 프로필</Link><Link href="/#center">원장님이라면</Link></div>
          <div><strong>안내</strong><Link href="/#about">서비스 소개</Link><a href={`mailto:${SITE.email}`}>고객문의</a><Link href="/terms">이용약관</Link><Link href="/privacy">개인정보처리방침</Link></div>
        </div>
        <div className="footer-business"><p><strong>프리너블 (freenable)</strong><span>대표 권주빈</span><span>사업자등록번호 779-05-03544</span><span>통신판매업 신고번호 2026-서울성북-0328</span></p><p><span>서울시 성북구 북악산로 844 114-1201</span><a href={`mailto:${SITE.email}`}>{SITE.email}</a><span>010-8979-2047</span><span>개인정보 보호책임자 권주빈</span></p><p className="copyright">© 2026 freenable. All rights reserved.</p></div>
      </div>
    </footer>
  );
}
