export type EducationItem = {
  period: string;
  school: string;
  degree: string;
  note?: string;
};

export const education: EducationItem[] = [
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
  highlight?: string;
  isCurrent?: boolean;
};

export const career: CareerItem[] = [
  {
    period: "2024.02 ~ 현재",
    role: "AI Crew Leader",
    company: "삼성전자 DA사업부",
    description: "AI 업무자동화 및 GT-Suite 시뮬레이션 자동화 추진",
    highlight: "AI",
    isCurrent: true,
  },
  {
    period: "2021.02 ~ 2023.12",
    role: "C&M 개발그룹장",
    company: "삼성전자 DA사업부",
    description: "신모델 개발 로드맵 수립 및 실행, 외판 확대",
    highlight: "그룹장",
  },
  {
    period: "2019.03 ~ 2021.12",
    role: "C&M 품질그룹장",
    company: "삼성전자 DA사업부",
    description: "내외부 품질 이슈 대응 및 시스템 안정화",
    highlight: "그룹장",
  },
  {
    period: "2015.04 ~ 2018.06",
    role: "Japan Sales Engineer",
    company: "SRJ (도쿄 롯본기/이이다바시)",
    description: "도시바 등 일본 주요 고객사 Sales Engineer 활동",
    highlight: "360억",
  },
  {
    period: "2007.08 ~ 2008.11",
    role: "R600a BLDC 최초개발",
    company: "삼성전자 DA사업부",
    description: "AC to BLDC 압축기 전환 국내 최초 개발",
    highlight: "최초",
  },
  {
    period: "2002.08 ~ 2003.12",
    role: "R600a 최대배기량 개발",
    company: "삼성전자 DA사업부",
    description: "Global AC 최대 배기량(15cc) 압축기 개발",
    highlight: "Global 최대",
  },
  {
    period: "1999.11 ~ 2002",
    role: "개발 엔지니어",
    company: "삼성전자 DA사업부",
    description: "압축기 기구설계 및 CAE 해석",
  },
];

export const certifications = [
  "가스기사 1급 (1997) — 삼성 가스안전책임자 현직",
  "CAE 2급 (2009.11) — ANSYS, ADINA, GT-Suite",
  "6 Sigma BLACK Belt (2014.10)",
  "Generative AI Power Lv.3 (2025.05, 사내)",
  "Data Science Lv.2 (사내)",
];

export const languages = [
  { name: "한국어", level: 5, note: "Native" },
  { name: "영어", level: 4, note: "IM High" },
  { name: "일본어", level: 4, note: "SJPT 2급" },
];
