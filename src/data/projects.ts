export type Project = {
  id: string;
  title: string;
  titleEn: string;
  achievement: string;
  challenge: string;
  description: string;
  summary: string;
  proofPoints: { keyword: string; text: string }[];
  role: string;
  contribution: number;
  startDate: string;
  endDate: string;
  impact: string;
  technologies: string[];
  category: "engineering" | "leadership" | "ai" | "quality";
  highlight: string;
  year: string;
  demoUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean;
  privateAccessKey?: "life-os" | "pension-analyzer";
  /** 이 프로젝트가 본업(엔지니어링 자동화) 역량을 어떻게 증명하는지 한 줄 */
  domainLink?: string;
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
    summary: "Global 최대 배기량 플랫폼을 만든 압축기 개발 초기 대표 성과",
    proofPoints: [
      { keyword: "최대 배기량", text: "R600a 15cc 기준 확보" },
      { keyword: "기여도", text: "기구설계·성능검증 전담" },
      { keyword: "확장성", text: "파생 모델 대응 기반" },
    ],
    role: "개발 멤버 — 기구설계·성능검증 파트 전담",
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
      "개발 멤버로 전환 핵심 이슈를 해결하며 시스템 안정성과 효율을 함께 고도화했습니다. 이후 6 Sigma BB 과제로 개발 단계별 신규 부품 적합성 평가를 수행해 소음 불량률 3.2%→0.4%, 원가 12억 절감, 시장 불량 3000ppm 개선을 달성했습니다.",
    summary: "AC에서 BLDC로 전환한 국내 최초급 압축기 플랫폼 개발",
    proofPoints: [
      { keyword: "BLDC 전환", text: "효율·제어 안정성 확보" },
      { keyword: "품질 개선", text: "소음 불량률 3.2%→0.4%" },
      { keyword: "비용 효과", text: "원가 12억 절감" },
    ],
    role: "개발 멤버 — 전환 핵심 파트 전담",
    contribution: 100,
    startDate: "2007.08",
    endDate: "2008.11",
    impact: "AC to BLDC 최초 전환 완료",
    technologies: ["BLDC", "System Integration", "6 Sigma"],
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
      "SEJ(도쿄 롯폰기·이이다바시) 근무 기간 동안 도시바·미츠비시·샤프와의 탑미팅을 주도하며 신규 Sales를 개시했습니다. 고객 요구사항을 기술 언어로 정리해 의사결정 속도를 높였고, 영업 성과와 기술 신뢰를 동시에 확보하며 큰 인정을 받았습니다.",
    summary: "기술 커뮤니케이션으로 일본 고객 신뢰와 Sales 성과를 연결",
    proofPoints: [
      { keyword: "Sales", text: "누적 360억" },
      { keyword: "고객", text: "도시바·미츠비시·샤프" },
      { keyword: "역할", text: "기술 요구를 사업 언어로 정리" },
    ],
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
    summary: "품질 이슈 대응을 표준화해 조직 신뢰도를 안정화",
    proofPoints: [
      { keyword: "표준화", text: "내외부 이슈 대응 체계 정리" },
      { keyword: "속도", text: "처리 리드타임 단축" },
      { keyword: "운영", text: "재발 방지 루틴 강화" },
    ],
    role: "리더 / 품질",
    contribution: 100,
    startDate: "2019.03",
    endDate: "2021.12",
    impact: "내외부 품질대응 / 안정화",
    technologies: ["Quality Management", "Root Cause Analysis", "Process Standardization"],
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
    summary: "개발 로드맵과 사업 확장을 동시에 끌고 간 조직 리딩 사례",
    proofPoints: [
      { keyword: "로드맵", text: "신모델 개발 우선순위 재정렬" },
      { keyword: "리딩", text: "개발 리소스·일정 안정화" },
      { keyword: "사업", text: "외판 확대 기반 확보" },
    ],
    role: "개발 / 리더",
    contribution: 100,
    startDate: "2022.01",
    endDate: "2024.08",
    impact: "신모델 개발 및 외판 확대",
    technologies: ["Roadmap Planning", "Team Leadership", "Product Development"],
    category: "leadership",
    highlight: "✔ 외판 확대 달성",
    year: "2022",
  },
  {
    id: "dev-workflow-auto",
    title: "개발자 워크플로우 자동화 파이프라인",
    titleEn: "Developer Workflow Automation Pipeline",
    achievement: "Claude Code 기반 커밋·리뷰 자동화 파이프라인 구축",
    challenge:
      "사내망 제약(API 콘솔 차단) 환경에서 AI 자동화 도구를 실제 개발 워크플로우에 연결해야 했습니다.",
    description:
      "git diff → Claude API → Conventional Commits 메시지 자동 생성, prepare-commit-msg 훅 및 슬래시 커맨드(/commit-msg, /code-review)로 CI/CD 이전 단계를 자동화. fail-safe 설계로 키 없이도 커밋을 막지 않습니다.",
    summary: "AI 에이전트로 커밋·리뷰 흐름을 자동화한 개발 생산성 실험",
    proofPoints: [
      { keyword: "자동화", text: "git diff 기반 커밋 메시지 생성" },
      { keyword: "품질", text: "코드 리뷰 체크리스트 자동화" },
      { keyword: "안정성", text: "fail-safe 훅 설계" },
    ],
    role: "설계 / 구현",
    contribution: 100,
    startDate: "2026.06",
    endDate: "현재",
    impact: "커밋 품질 향상 + 코드 리뷰 자동화",
    technologies: ["Python", "Claude Code", "Git Hooks", "Conventional Commits", "GitHub"],
    category: "ai",
    highlight: "✔ AI 워크플로우 자동화 구축",
    year: "2026",
    domainLink:
      "GT-Suite 자동화에 적용한 파이프라인 설계 원칙(자동 실행·fail-safe·결과 정리)을 개발 워크플로우로 확장한 사례",
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
    summary: "현업 반복 업무와 시뮬레이션 흐름을 AI 자동화로 연결",
    proofPoints: [
      { keyword: "AI Crew", text: "업무자동화 과제 발굴·실행" },
      { keyword: "GT-Suite", text: "시뮬레이션 자동화 확장" },
      { keyword: "RAG", text: "포트폴리오 Q&A 구조화" },
    ],
    role: "리더 / AI",
    contribution: 100,
    startDate: "2024.09",
    endDate: "현재",
    impact: "AI 업무자동화 및 효율화",
    technologies: ["AI Automation", "GT-Suite", "RAG", "Prompt Design"],
    category: "ai",
    highlight: "✔ AI Crew 자동화 추진",
    year: "2024",
  },
  {
    id: "life-os-dashboard",
    title: "Personal Life OS Dashboard",
    titleEn: "Personal Life OS Dashboard",
    achievement: "건강·자산·투자·소비를 하나의 화면에서 5초 내 파악",
    challenge:
      "Samsung Galaxy 기반 개인 데이터를 Supabase RLS로 안전하게 통합 관리하면서, 스크롤 없는 단일 뷰포트에 모든 핵심 지표를 담아야 했습니다.",
    description:
      "Next.js 15 + ECharts + Supabase 기반 개인 운영체계(Life OS). 건강(Samsung Health), 자산, 투자, 소비, 연금, 세금을 Two-Zone 대시보드로 통합. CSV fallback → Supabase 3단계 데이터 추상화 설계.",
    summary: "건강·자산·투자 데이터를 5초 안에 읽는 개인 Life OS",
    proofPoints: [
      { keyword: "5초 인지", text: "핵심 지표 단일 화면" },
      { keyword: "데이터", text: "건강·자산·투자·소비 통합" },
      { keyword: "보호", text: "개인정보 포함, 인증 후 접근" },
    ],
    role: "설계 / 구현",
    contribution: 100,
    startDate: "2026.05",
    endDate: "현재",
    impact: "Life OS 단일 화면 — 5초 상태 인지",
    technologies: ["Next.js 15", "React 19", "ECharts", "Supabase", "TypeScript", "Tailwind"],
    category: "ai",
    highlight: "✔ Personal Life OS 구축",
    year: "2026",
    isPrivate: true,
    privateAccessKey: "life-os",
    domainLink:
      "시뮬레이션 결과 대시보드와 동일한 구조 — 다중 소스 데이터 수집→정규화→단일 화면 시각화 파이프라인을 단독 설계·배포한 증거",
  },
  {
    id: "pension-analyzer",
    title: "은퇴 연금 분석 웹앱",
    titleEn: "Retirement Pension Analyzer",
    achievement: "9개 연금 상품 × 55~90세 절세 시나리오 통합 분석",
    challenge:
      "세금·건보료 계산 로직과 4개 절세 시나리오를 단일 뷰포트에서 실시간 비교하고, AI 챗봇으로 결과를 자연어로 해석할 수 있게 해야 했습니다.",
    description:
      "Vite + React 18 + Recharts 기반 은퇴 후 연금 수령 전략 분석 앱 (MVP 완성). IRP 분산 수령·국민연금 지연 수령 등 4개 시나리오 비교, 건보료 슬라이더 시뮬레이터, Cloudflare Workers AI 챗봇 탑재.",
    summary: "연금 수령·세금·건보료를 한 화면에서 비교하는 절세 시뮬레이터",
    proofPoints: [
      { keyword: "9개 상품", text: "55~90세 수령 전략 비교" },
      { keyword: "4개 시나리오", text: "IRP·국민연금 전략 분석" },
      { keyword: "보호", text: "개인 재무정보, 인증 후 접근" },
    ],
    role: "설계 / 구현",
    contribution: 100,
    startDate: "2026.06",
    endDate: "현재",
    impact: "연금 절세 시나리오 즉시 비교 가능",
    technologies: ["Vite", "React 18", "Recharts", "Cloudflare Pages", "Workers AI", "Tailwind"],
    category: "ai",
    highlight: "✔ 연금 절세 시뮬레이터",
    year: "2026",
    isPrivate: true,
    privateAccessKey: "pension-analyzer",
    domainLink:
      "수치 모델링(세금·건보료 계산)과 시나리오 비교 설계 — GT-Suite 파라미터 스터디와 같은 사고방식의 생활 도메인 응용",
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
