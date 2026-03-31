export type Project = {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  role: string;
  contribution: number;
  startDate: string;
  endDate: string;
  impact: string;
  category: "engineering" | "leadership" | "ai" | "quality";
  highlight: string;
  year: string;
};

export const projects: Project[] = [
  {
    id: "r600a-15cc",
    title: "R600a 15cc 최대 배기량 개발",
    titleEn: "R600a 15cc Max Displacement Development",
    description:
      "AC 모델 Global 최대 배기량 압축기 기구설계 및 개발. 친환경 냉매(R600a) 기반 고효율 압축기 최초 양산화 달성.",
    role: "개발 / 멤버",
    contribution: 100,
    startDate: "2002.08",
    endDate: "2003.12",
    impact: "Global AC 최대 배기량 달성",
    category: "engineering",
    highlight: "✔ AC 모델 Global 최대",
    year: "2002",
  },
  {
    id: "r600a-bldc",
    title: "R600a BLDC 압축기 최초 개발",
    titleEn: "R600a BLDC Compressor First Development",
    description:
      "AC 기반 냉매 압축기를 BLDC 방식으로 전환한 국내 최초 개발. 에너지 효율 고도화 및 차세대 냉매 대응 플랫폼 구축.",
    role: "개발 / 멤버",
    contribution: 100,
    startDate: "2007.08",
    endDate: "2008.11",
    impact: "Pump 하부 AC to BLDC 최초 전환",
    category: "engineering",
    highlight: "✔ BLDC 압축기 최초 개발",
    year: "2007",
  },
  {
    id: "japan-se",
    title: "일본 Sales Engineer 활동",
    titleEn: "Japan Sales Engineer",
    description:
      "도쿄 롯본기/이이다바시 SRJ 근무. 도시바 등 일본 주요 고객사 Sales Engineer로 영업 전략 수립 및 기술 영업 총괄.",
    role: "리더 / 영업",
    contribution: 80,
    startDate: "2015.04",
    endDate: "2018.06",
    impact: "일본 Sales 360억 달성",
    category: "leadership",
    highlight: "✔ 일본 Sales 360억",
    year: "2015",
  },
  {
    id: "cm-quality",
    title: "C&M 품질그룹장",
    titleEn: "C&M Quality Group Leader",
    description:
      "Comp & Motor 품질그룹 총괄. 내외부 품질 이슈 체계적 대응 및 품질 시스템 안정화로 고객 불만 최소화 달성.",
    role: "리더 / 품질",
    contribution: 100,
    startDate: "2019.03",
    endDate: "2021.12",
    impact: "내외부 품질대응 / 안정화",
    category: "quality",
    highlight: "✔ 품질 안정화 완수",
    year: "2019",
  },
  {
    id: "cm-dev",
    title: "C&M 개발그룹장",
    titleEn: "C&M Development Group Leader",
    description:
      "Comp & Motor 개발그룹 총괄. 신모델 개발 로드맵 수립·실행 및 외판 확대를 통한 사업 성과 창출.",
    role: "개발 / 리더",
    contribution: 100,
    startDate: "2021.02",
    endDate: "2023.12",
    impact: "신모델 개발 및 외판 확대",
    category: "leadership",
    highlight: "✔ 외판 확대 달성",
    year: "2021",
  },
  {
    id: "ai-crew",
    title: "사업팀 AI Crew Leader",
    titleEn: "AI Crew Leader",
    description:
      "DA사업팀 AI Crew를 이끌며 업무 자동화 과제 발굴 및 실행. GT-Suite 기반 시뮬레이션 자동화, RAG 시스템 구축 추진 중.",
    role: "리더 / AI",
    contribution: 100,
    startDate: "2024.02",
    endDate: "현재",
    impact: "AI 업무자동화 및 효율화",
    category: "ai",
    highlight: "✔ AI Crew 자동화 추진",
    year: "2024",
  },
];

export const categoryLabels: Record<Project["category"], string> = {
  engineering: "엔지니어링",
  leadership: "리더십",
  ai: "AI",
  quality: "품질",
};

export const categoryColors: Record<
  Project["category"],
  { bg: string; text: string; border: string }
> = {
  engineering: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
  },
  leadership: {
    bg: "bg-purple-50",
    text: "text-purple-700",
    border: "border-purple-200",
  },
  ai: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
  quality: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
  },
};
