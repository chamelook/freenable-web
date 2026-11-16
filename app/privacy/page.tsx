import type { Metadata } from "next";
import { LegalPage, readLegalContent } from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "freenable 개인정보처리방침",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return <LegalPage title="개인정보처리방침" content={readLegalContent("privacy.html")} />;
}
