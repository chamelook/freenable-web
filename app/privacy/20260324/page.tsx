import type { Metadata } from "next";
import { LegalPage, readLegalContent } from "../../../components/LegalPage";

export const metadata: Metadata = {
  title: "개인정보처리방침 (2026년 3월 24일 시행)",
  description: "freenable 이전 개인정보처리방침",
  alternates: { canonical: "/privacy/20260324/" },
  robots: { index: false },
};

export default function PrivacyPage20260324() {
  const notice = '<p class="note">이 문서는 이전 버전입니다. <a href="/privacy/">현행 개인정보처리방침 보기</a></p>';
  return <LegalPage title="개인정보처리방침 (이전 버전)" content={notice + readLegalContent("privacy-20260324.html")} />;
}
