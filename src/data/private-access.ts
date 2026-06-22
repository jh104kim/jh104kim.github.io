export type PrivateAccessKey = "life-os" | "pension-analyzer";

export type PrivateAccessApp = {
  key: PrivateAccessKey;
  title: string;
  category: string;
  summary: string;
  contains: string[];
  demoUrl: string;
  githubUrl?: string;
};

export const PRIVATE_ACCESS_PASSWORD_HASH =
  "0a81889e8fdd8ddfff7fa2d5d6f788a7262f02c6c5acfc700528e7c1c309a4d1";

export const privateAccessApps: PrivateAccessApp[] = [
  {
    key: "life-os",
    title: "Personal Life OS Dashboard",
    category: "자산 / 건강 / 소비",
    summary: "건강, 자산, 투자, 소비 데이터를 통합한 개인 대시보드",
    contains: ["Samsung Health", "자산", "투자", "소비", "세금"],
    demoUrl: "https://sapporo-polar.vercel.app/",
    githubUrl: "https://github.com/jh104kim/dashboard-junghyoun",
  },
  {
    key: "pension-analyzer",
    title: "은퇴 연금 분석 웹앱",
    category: "연금 / 세금 / 건보료",
    summary: "연금 수령 전략과 절세 시나리오를 비교하는 개인 재무 앱",
    contains: ["연금 상품", "절세 시나리오", "건보료", "수령 전략"],
    demoUrl: "https://pension-private-after-retirements.vercel.app/",
    githubUrl: "https://github.com/jh104kim/pension-private-after-retirements",
  },
];
