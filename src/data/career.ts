export type EducationItem = {
  period: string;
  school: string;
  degree: string;
  note?: string;
};

export const education: EducationItem[] = [
  {
    period: "~1992.02",
    school: "상산고등학교 (9회 졸업)",
    degree: "홍성대 수학경시대회 2등 수상",
  },
  {
    period: "~1999.02",
    school: "전북대학교",
    degree: "정밀기계공학과 (GPA 4.35)",
    note: "1997~98 홋카이도 대학 교환학생",
  },
  {
    period: "2004~2006",
    school: "GIST (광주과학기술원)",
    degree: "기전공학과 석사 (GPA 4.16)",
    note: "학술연수",
  },
];

export type CareerItem = {
  period: string;
  role: string;
  company: string;
  description: string;
  roleType?: "engineering" | "quality" | "sales" | "ai" | "leadership";
  highlight?: string;
  isCurrent?: boolean;
};

export const career: CareerItem[] = [
  {
    period: "2024.09 ~ 현재",
    role: "AI Crew Leader",
    company: "삼성전자 DA사업부",
    description: "AI 업무자동화 및 GT-Suite 시뮬레이션 자동화 추진",
    roleType: "ai",
    highlight: "AI",
    isCurrent: true,
  },
  {
    period: "2022.01 ~ 2024.08",
    role: "C&M 개발그룹장",
    company: "삼성전자 DA사업부",
    description: "신모델 개발 로드맵 수립 및 실행, 외판 확대",
    roleType: "leadership",
    highlight: "그룹장",
  },
  {
    period: "2019.03 ~ 2021.12",
    role: "C&M 품질그룹장",
    company: "삼성전자 DA사업부",
    description: "내외부 품질 이슈 대응 및 시스템 안정화",
    roleType: "quality",
    highlight: "그룹장",
  },
  {
    period: "2015.04 ~ 2018.06",
    role: "Japan Sales Engineer",
    company: "SEJ (도쿄 롯폰기·이이다바시)",
    description: "도시바·미츠비시·샤프 탑미팅 주도, 신규 Sales 개시",
    roleType: "sales",
    highlight: "360억",
  },
  {
    period: "2007.08 ~ 2008.11",
    role: "R600a BLDC 최초개발",
    company: "삼성전자 DA사업부",
    description: "AC to BLDC 압축기 전환 국내 최초 개발",
    roleType: "engineering",
    highlight: "최초",
  },
  {
    period: "2002.08 ~ 2003.12",
    role: "R600a 최대배기량 개발",
    company: "삼성전자 DA사업부",
    description: "Global AC 최대 배기량(15cc) 압축기 개발",
    roleType: "engineering",
    highlight: "Global 최대",
  },
  {
    period: "1999.11 ~ 2002",
    role: "개발 엔지니어",
    company: "삼성전자 DA사업부",
    description: "압축기 기구설계 및 CAE 해석",
    roleType: "engineering",
  },
];

export const certifications = [
  "가스기사 1급 (1997) — 삼성 가스안전책임자 현직",
  "CAE 2급 (2009.11) — ANSYS, ADINA, GT-Suite",
  "6 Sigma BLACK Belt (2014.10)",
  "Generative AI Power Lv.3 (2025.05, 사내)",
  "Data Science Lv.2 (사내)",
];

export type Language = {
  name: string;
  level: number;
  note: string;
  detail?: string;
};

export const languages: Language[] = [
  { name: "한국어", level: 5, note: "Native" },
  {
    name: "영어",
    level: 4,
    note: "IM High · Purdue 3회 발표",
    detail:
      "Purdue Conference 3회 발표를 통해 글로벌 연구 인맥을 쌓고, 실전 영어 역량을 크게 끌어올렸습니다.",
  },
  {
    name: "일본어",
    level: 4,
    note: "JLPT 1급 · 北海道大 교환학생",
    detail:
      "SEJ(도쿄 롯폰기·이이다바시) 근무, 도시바·미츠비시·샤프 탑미팅 주도 — 시모노세키부터 아오모리까지 일본 전역 고객 대응.",
  },
];
