export const automationCases = [
  {
    id: "simulation",
    title: ["GT-Suite 시뮬레이션 자동화", "GT-Suite Simulation Automation"],
    work: [
      "Python으로 운전 조건별 해석 실행과 CSV·Excel 결과 정리를 연결했습니다.",
      "Used Python to run simulations across operating conditions and organize the results in CSV and Excel.",
    ],
    outcome: [
      "반복 해석 수작업을 줄이고 결과 보고서를 자동으로 생성합니다.",
      "Reduced manual work for repeated simulations and automated report generation.",
    ],
    operating: true,
  },
  {
    id: "documents",
    title: ["AI Crew 문서 자동화", "AI Crew Document Automation"],
    work: [
      "AI Crew를 이끌며 Claude·ChatGPT API로 주간 보고와 회의록 요약·분류를 자동화했습니다.",
      "Led AI Crew and used the Claude and ChatGPT APIs to summarize and classify weekly reports and meeting notes.",
    ],
    outcome: [
      "보고서 작성 시간을 줄이고 문서 형식을 표준화했습니다.",
      "Reduced report writing time and standardized document formats.",
    ],
    operating: true,
  },
  {
    id: "development",
    title: ["개발 워크플로우 자동화", "Development Workflow Automation"],
    work: [
      "Claude Code로 코드 변경을 검토하는 흐름을 구축 중입니다.",
      "Building a workflow to review code changes with Claude Code.",
    ],
    outcome: [
      "커밋 메시지 초안 작성과 코드 리뷰 항목 점검을 자동화합니다.",
      "Automate commit message drafts and code review checklist checks.",
    ],
    operating: false,
  },
] as const;
