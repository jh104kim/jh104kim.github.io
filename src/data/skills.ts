export type Skill = {
  name: string;
  level: number; // 1-5
  category: "ai-tool" | "design" | "engineering" | "office";
  description: string;
};

export const skills: Skill[] = [
  {
    name: "Claude Code / ChatGPT / Grok",
    level: 5,
    category: "ai-tool",
    description: "AI 에이전트 활용, 가설 검증, 팩트체크, 워크플로우 자동화",
  },
  {
    name: "Python / SDK 자동화",
    level: 5,
    category: "ai-tool",
    description: "자동화 스크립트, 데이터 처리, AI API 연동",
  },
  {
    name: "GitHub Actions",
    level: 5,
    category: "ai-tool",
    description: "CI/CD, 자동 배포, PR 자동화",
  },
  {
    name: "Figma / Canva / Claude Design",
    level: 5,
    category: "design",
    description: "웹페이지 디자인, 발표자료, 브랜드 디자인, AI 기반 디자인 시안 제작",
  },
  {
    name: "GT-Suite",
    level: 5,
    category: "engineering",
    description: "1D 시뮬레이션 / 시스템 통합",
  },
  {
    name: "ANSYS / ADINA",
    level: 5,
    category: "engineering",
    description: "FSI, CAE 구조해석",
  },
  {
    name: "6 Sigma BB / Data Science Lv3 / GenPower Lv4",
    level: 5,
    category: "engineering",
    description: "품질 혁신, 데이터 분석, 삼성 사내 AI 역량 인증",
  },
  {
    name: "Excel / PowerPoint / Notion",
    level: 5,
    category: "office",
    description: "데이터 관리, 차트, 프레젠테이션, 프로젝트 운영",
  },
];

export const categoryLabels: Record<Skill["category"], string> = {
  "ai-tool": "AI / 자동화",
  design: "디자인 / 콘텐츠 제작",
  engineering: "엔지니어링",
  office: "Office / 협업",
};

// languages 데이터는 src/data/career.ts에서 단일 관리 (About 섹션에서 사용)
