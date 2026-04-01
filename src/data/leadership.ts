export type LeadershipStory = {
  id: string;
  title: string;
  period: string;
  scope: string;
  actions: string[];
  outcomes: string[];
  tags?: string[];
};

export const leadershipStories: LeadershipStory[] = [
  {
    id: "cm-dev-lead",
    title: "C&M 개발그룹장 — 로드맵 실행과 외판 확대",
    period: "2021.02 ~ 2023.12",
    scope: "개발 일정/성능 목표/사업 확장 요구를 동시에 만족하는 조직 운영",
    actions: [
      "신모델 개발 우선순위를 재정렬하고 리소스를 재배치",
      "리스크를 조기 노출시키는 리뷰 루틴으로 일정 안정화",
      "대외 사업 요구를 기술 기준으로 정리해 의사결정 속도 개선",
    ],
    outcomes: ["신모델 개발 일정 안정화", "외판 확대 기반 확보"],
    tags: ["Leadership", "Roadmap"],
  },
  {
    id: "cm-quality-lead",
    title: "C&M 품질그룹장 — 이슈 대응 표준화와 재발 방지",
    period: "2019.03 ~ 2021.12",
    scope: "내외부 품질 이슈 대응 체계를 표준화해 처리 품질·속도 동시 개선",
    actions: [
      "RCA(근본원인) 중심으로 대응/재발방지 프로세스 정리",
      "이슈 분류/우선순위 기준을 통일해 커뮤니케이션 비용 감소",
    ],
    outcomes: ["대응 리드타임 단축", "대응 일관성 강화"],
    tags: ["Quality", "Operations"],
  },
];

