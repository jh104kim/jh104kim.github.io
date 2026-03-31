export type Project = {
  id: string;
  title: string;
  titleEn: string;
  achievement: string;
  challenge: string;
  description: string;
  role: string;
  contribution: number;
  startDate: string;
  endDate: string;
  impact: string;
  technologies: string[];
  category: "engineering" | "leadership" | "ai" | "quality";
  highlight: string;
  year: string;
};

export const projects: Project[] = [
  {
    id: "r600a-15cc",
    title: "R600a 15cc 최대 배기량 개발",
    titleEn: "R600a 15cc Max Displacement Development",
    achievement: "국내 AC 분야 Global 최대 배기량 플랫폼 확보",
    challenge:
      "친환경 냉매 전환 시점에서 고효율과 대용량 성능을 동시에 확보해야 하는 과제가 있었습니다.",
    description:
      "기구 설계와 성능 검증을 직접 리딩해 R600a 15cc 플랫폼의 양산 기반을 만들었습니다. 이후 파생 제품 대응이 가능한 대배기량 기준점을 확보했습니다.",
    role: "개발 / 멤버",
    contribution: 100,
    startDate: "2002.08",
    endDate: "2003.12",
    impact: "Global AC 최대 배기량 기준 달성",
    technologies: ["Compressor Design", "R600a", "CAE"],
    category: "engineering",
    highlight: "✔ AC 모델 Global 최대",
    year: "2002",
  },
  {
    id: "r600a-bldc",
    title: "R600a BLDC 압축기 최초 개발",
    titleEn: "R600a BLDC Compressor First Development",
    achievement: "국내 최초 AC에서 BLDC 전환 아키텍처 구축",
    challenge:
      "기존 AC 플랫폼에서 효율과 제어 안정성을 동시에 확보하며 BLDC 전환을 완수해야 했습니다.",
    description:
      "개발 멤버로 전환 핵심 이슈를 해결하며 시스템 안정성과 효율을 함께 고도화했습니다. 차세대 냉매 대응 플랫폼의 기술적 기반을 마련했습니다.",
    role: "개발 / 멤버",
    contribution: 100,
    startDate: "2007.08",
    endDate: "2008.11",
    impact: "AC to BLDC 최초 전환 완료",
    technologies: ["BLDC", "System Integration", "Performance Tuning"],
    category: "engineering",
    highlight: "✔ BLDC 압축기 최초 개발",
    year: "2007",
  },
  {
    id: "japan-se",
    title: "일본 Sales Engineer 활동",
    titleEn: "Japan Sales Engineer",
    achievement: "일본 주요 고객 대상 누적 Sales 360억 달성",
    challenge:
      "기술 요구가 높은 일본 고객사와의 커뮤니케이션에서 영업과 기술 기준을 동시에 충족해야 했습니다.",
    description:
      "도쿄 SRJ 근무 기간 동안 고객별 요구사항을 기술 언어로 정리해 의사결정 속도를 높였습니다. 영업 성과와 기술 신뢰를 동시에 확보하며 장기 거래 기반을 강화했습니다.",
    role: "리더 / 영업",
    contribution: 80,
    startDate: "2015.04",
    endDate: "2018.06",
    impact: "일본 Sales 360억 달성",
    technologies: ["Technical Sales", "Global Communication", "Account Strategy"],
    category: "leadership",
    highlight: "✔ 일본 Sales 360억",
    year: "2015",
  },
  {
    id: "cm-quality",
    title: "C&M 품질그룹장",
    titleEn: "C&M Quality Group Leader",
    achievement: "내외부 품질 대응 프로세스 안정화",
    challenge:
      "복합 이슈 대응과 재발 방지 체계를 동시에 구축해 조직 전체의 품질 신뢰도를 끌어올려야 했습니다.",
    description:
      "품질 대응 체계를 표준화해 이슈 처리 리드타임을 단축하고 대응 일관성을 높였습니다. 조직 운영 관점에서 품질 안정화 문화를 정착시켰습니다.",
    role: "리더 / 품질",
    contribution: 100,
    startDate: "2019.03",
    endDate: "2021.12",
    impact: "내외부 품질대응 / 안정화",
    technologies: ["Quality Management", "Root Cause Analysis", "6 Sigma"],
    category: "quality",
    highlight: "✔ 품질 안정화 완수",
    year: "2019",
  },
  {
    id: "cm-dev",
    title: "C&M 개발그룹장",
    titleEn: "C&M Development Group Leader",
    achievement: "신모델 개발 로드맵 실행 및 외판 확대",
    challenge:
      "개발 일정, 성능 목표, 사업 확장 요구를 동시에 맞추는 조직 리딩이 필요했습니다.",
    description:
      "개발 리소스를 재정렬해 신모델 출시 일정을 안정화하고 대외 사업 기회를 확장했습니다. 기술팀 운영과 사업 성과를 함께 만든 리더십 사례입니다.",
    role: "개발 / 리더",
    contribution: 100,
    startDate: "2021.02",
    endDate: "2023.12",
    impact: "신모델 개발 및 외판 확대",
    technologies: ["Roadmap Planning", "Team Leadership", "Product Development"],
    category: "leadership",
    highlight: "✔ 외판 확대 달성",
    year: "2021",
  },
  {
    id: "ai-crew",
    title: "사업팀 AI Crew Leader",
    titleEn: "AI Crew Leader",
    achievement: "업무자동화 과제 발굴 및 실행 체계 구축",
    challenge:
      "현업 흐름을 해치지 않으면서 실무팀이 바로 체감하는 자동화 성과를 만들어야 했습니다.",
    description:
      "보고·정리·분석 업무를 자동화해 반복 업무 부담을 줄이는 과제를 지속적으로 수행했습니다. GT-Suite 자동화와 포트폴리오 기반 Q&A 구조까지 확장해 AI 활용 기준을 정립했습니다.",
    role: "리더 / AI",
    contribution: 100,
    startDate: "2024.02",
    endDate: "현재",
    impact: "AI 업무자동화 및 효율화",
    technologies: ["AI Automation", "GT-Suite", "RAG", "Prompt Design"],
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
