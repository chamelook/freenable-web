"use client";

import { useEffect, useState } from "react";

// 앱 첫 진입 안내와 같은 값(Firestore config/public_stats.freelancer_count_label, 예: "250+명")을 읽습니다.
// 값은 Cloud Function(signup_counter)이 반올림해 저장합니다. 읽기에 실패하거나 형식이 다르면 fallback을 그대로 둡니다.
const PUBLIC_STATS_URL = "https://firestore.googleapis.com/v1/projects/free-119-project/databases/(default)/documents/config/public_stats";
const LABEL_PATTERN = /^[\d,.]+만?\+명$/;

interface PublicStatsDocument {
  fields?: { freelancer_count_label?: { stringValue?: unknown } };
}

let labelRequest: Promise<string | null> | null = null;

async function requestLabel(): Promise<string | null> {
  try {
    const response = await fetch(PUBLIC_STATS_URL, { cache: "no-store" });
    if (!response.ok) return null;
    const data = (await response.json()) as PublicStatsDocument;
    const label = data.fields?.freelancer_count_label?.stringValue;
    return typeof label === "string" && LABEL_PATTERN.test(label) ? label : null;
  } catch {
    // 네트워크 오류는 고정 문구로 대신합니다.
    return null;
  }
}

// 한 페이지에서 여러 번 써도 요청은 한 번만 보냅니다.
function fetchFreelancerCountLabel(): Promise<string | null> {
  labelRequest ??= requestLabel();
  return labelRequest;
}

interface FreelancerCountProps {
  fallback: string;
}

export function FreelancerCount({ fallback }: FreelancerCountProps) {
  const [label, setLabel] = useState(fallback);

  useEffect(() => {
    let active = true;
    fetchFreelancerCountLabel().then((next) => {
      if (active && next) setLabel(next);
    });
    return () => {
      active = false;
    };
  }, []);

  return <>{label}</>;
}
