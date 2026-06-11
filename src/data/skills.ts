export type Skill = {
  name: string;
  level: number; // 1-5
  category: "ai-tool" | "design" | "engineering" | "office";
  description: string;
};

export const skills: Skill[] = [
  // AI Tools
  {
    name: "Claude Code",
    level: 5,
    category: "ai-tool",
    description: "AI 에이전트 자동화, 슬래시 커맨드, 워크플로우 구성",
  },
  {
    name: "Python",
    level: 4,
    category: "ai-tool",
    description: "자동화 스크립트, 데이터 처리, Anthropic SDK 연동",
  },
  {
    name: "GitHub Actions",
    level: 3,
    category: "ai-tool",
    description: "CI/CD 파이프라인, 자동 배포, PR 자동화",
  },
  {
    name: "ChatGPT",
    level: 5,
    category: "ai-tool",
    description: "AI 활용, 가설검증",
  },
  {
    name: "Grok",
    level: 4,
    category: "ai-tool",
    description: "팩트체크, 이미지 레퍼런스 확인",
  },
  {
    name: "Midjourney",
    level: 4,
    category: "ai-tool",
    description: "AI 이미지/영상 생성, 디자인 레퍼런스 제작",
  },
  // Design
  {
    name: "Canva",
    level: 5,
    category: "design",
    description: "발표자료 디자인, 브랜드 디자인",
  },
  {
    name: "Photoshop",
    level: 5,
    category: "design",
    description: "이미지 편집, 누끼, AI 활용",
  },
  {
    name: "Illustrator",
    level: 4,
    category: "design",
    description: "벡터 디자인, 아이콘 제작",
  },
  {
    name: "Figma",
    level: 4,
    category: "design",
    description: "디자인 협업, 웹페이지 디자인",
  },
  // Engineering
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
    name: "6 Sigma BB",
    level: 5,
    category: "engineering",
    description: "BLDC 신규 부품 적합성 평가 · 원가 12억 절감",
  },
  // Office
  {
    name: "Excel",
    level: 5,
    category: "office",
    description: "데이터 관리, 차트 제작",
  },
  {
    name: "Notion",
    level: 5,
    category: "office",
    description: "템플릿, DB, 프로젝트 운용",
  },
  {
    name: "PowerPoint",
    level: 4,
    category: "office",
    description: "프레젠테이션 제작",
  },
];

export const categoryLabels: Record<Skill["category"], string> = {
  "ai-tool": "AI 도구",
  design: "디자인",
  engineering: "엔지니어링",
  office: "Office / 협업",
};

// languages 데이터는 src/data/career.ts에서 단일 관리 (About 섹션에서 사용)
