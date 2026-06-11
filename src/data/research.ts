export type Paper = {
  id: string;
  title: string;
  url?: string;
  date: string;
  country: string;
  venue: string;
  type: "journal" | "conference" | "thesis";
  status: "published" | "upcoming";
  /** 연구 핵심 기여 — 논문이 실무와 연결되는 지점 */
  contribution?: string;
};

export const papers: Paper[] = [
  {
    id: "p1",
    title: "Acoustic prediction for recipro comp",
    url: "https://www.notion.so/vita-0bc7ea7f5c5a83c882838195c39d45fd",
    date: "2006.02",
    country: "한국",
    venue: "GIST 졸업논문",
    type: "thesis",
    status: "published",
    contribution: "밸브 동역학 기반 압축기 소음 예측 모델 구축 — 이후 제품 소음 최적화 설계 기준으로 활용",
  },
  {
    id: "p2",
    title: "Journal bearing tribology design",
    url: "https://www.notion.so/vita-0bc7ea7f5c5a83c882838195c39d45fd",
    date: "2008.06",
    country: "미국",
    venue: "기계학회",
    type: "journal",
    status: "published",
    contribution: "저널 베어링 마찰·윤활 설계 기준 수립 — 압축기 신뢰성 및 효율 개선에 직접 적용",
  },
  {
    id: "p3",
    title: "FSI for valve dynamics",
    url: "https://www.notion.so/vita-0bc7ea7f5c5a83c882838195c39d45fd",
    date: "2010.07",
    country: "체코",
    venue: "Purdue (IIR)",
    type: "conference",
    status: "published",
    contribution: "압축기 밸브 FSI 해석 방법론 국제 발표 — 구조-유체 연성 해석으로 밸브 파손 예측 정확도 향상",
  },
  {
    id: "p4",
    title: "FSI using ANSYS",
    date: "2011.05",
    country: "한국",
    venue: "ANSYS 학회",
    type: "conference",
    status: "published",
    contribution: "ANSYS Workbench 기반 FSI 파이프라인 적용 사례 — 해석 자동화 워크플로우 기반 구축",
  },
  {
    id: "p5",
    title: "Fatigue design of a line discharge tube",
    date: "2012.08",
    country: "미국",
    venue: "Purdue (IIR)",
    type: "conference",
    status: "published",
    contribution: "토출관 피로 수명 예측 모델 — 구조 신뢰성 설계 기준을 R600a 플랫폼 파생 대응에 확장 적용",
  },
  {
    id: "p6",
    title: "1D Simulation / System Integration",
    date: "2026.07",
    country: "미국",
    venue: "Purdue (IIR)",
    type: "conference",
    status: "upcoming",
    contribution: "GT-Suite 1D 시뮬레이션과 AI 자동화의 연계 방향 발표 예정 — 시뮬레이션 결과를 AI 학습 데이터로 전환하는 파이프라인",
  },
  {
    id: "p7",
    title: "Performance prediction using GT-Suite",
    date: "2026.04",
    country: "한국",
    venue: "ATIS",
    type: "conference",
    status: "upcoming",
    contribution: "GT-Suite 기반 성능 예측 모델 ATIS 발표 예정 — Surrogate Modeling 연계 가능성 제시",
  },
];
