export type Highlight = {
  id: string;
  title: string;
  situation: string;
  action: string;
  result: string;
  kpis?: string[];
  tags?: string[];
};

export const narrativeSummary = [
  "압축기/시뮬레이션 도메인 지식으로 문제를 정의하고, AI/ML(Python)·자동화로 반복 비용을 줄여 실무 성과로 전환합니다.",
  "GT-Suite 기반 해석·데이터 흐름을 구조화해 보고/분석/결정의 리드타임을 단축하는 방향으로 확장 중입니다.",
];

export const highlights: Highlight[] = [
  {
    id: "bldc-first",
    title: "R600a BLDC 최초 개발 (AC → BLDC 전환)",
    situation: "효율·제어 안정성을 동시에 확보하며 플랫폼 전환을 완수해야 했습니다.",
    action: "핵심 이슈를 빠르게 정리하고 설계·검증 루프를 단축해 전환 리스크를 낮췄습니다.",
    result: "차세대 냉매 대응 BLDC 아키텍처 기반을 확보했습니다.",
    kpis: ["국내 최초 전환", "기여도 100%"],
    tags: ["Engineering", "System Integration"],
  },
  {
    id: "sales-japan",
    title: "일본 고객 대응 Sales Engineer",
    situation: "기술 요구가 높은 고객과 영업/기술 기준을 동시에 만족해야 했습니다.",
    action: "요구사항을 기술 언어로 구조화해 의사결정 속도와 신뢰를 높였습니다.",
    result: "장기 거래 기반을 강화하며 성과를 누적했습니다.",
    kpis: ["Sales 360억"],
    tags: ["Global", "Communication"],
  },
  {
    id: "quality-stabilize",
    title: "6 Sigma BB — 압축기 소음 품질 개선",
    situation: "복합 이슈 대응과 재발 방지 체계를 동시에 구축해야 했습니다.",
    action: "6 Sigma 방법론으로 소음 불량 원인을 분석하고 신규 부품 적용 기준을 표준화했습니다.",
    result: "소음 불량률 3.2%→0.4%, 원가 12억 절감, 시장 불량 3000ppm 개선.",
    kpis: ["불량률 3.2%→0.4%", "원가 12억 절감", "3000ppm 개선"],
    tags: ["Quality", "6 Sigma", "BB"],
  },
  {
    id: "ai-automation",
    title: "AI Crew 리딩: 업무·시뮬레이션 자동화",
    situation: "현업 흐름을 해치지 않으면서 체감 성과를 만들어야 했습니다.",
    action: "반복 보고/정리 업무와 GT-Suite 실행·결과 정리를 자동화하는 파이프라인을 설계했습니다.",
    result: "반복 비용을 줄이고, 엔지니어링 생산성을 확장하는 기반을 만들었습니다.",
    tags: ["AI", "Automation", "GT-Suite"],
  },
];

