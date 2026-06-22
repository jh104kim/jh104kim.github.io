# 김정현 포트폴리오 홈페이지 개발 계획

이 파일은 **저장소 루트의 단일 기획 문서**입니다. README에는 요약만 두고, Phase·UI 설계·향후 로드맵은 여기서 관리합니다.  
워크스페이스 상위 폴더의 `PLAN.md`와 동일한 계열이며, GitHub(`jh104kim.github.io`)에 푸시할 때는 본 프로젝트 폴더 기준으로 동기화합니다.

> 컨셉: "Compressor + AI Engineering Portfolio"  
> 목적: 기술력 + AI 자동화 + 리더십 강조  
> Stack: Next.js + TypeScript + Tailwind + Framer Motion (+ shadcn/ui 일부)  
> 배포: **GitHub Pages(공식, 정적 export)** — OpenAI API Route·프리뷰 배포가 필요하면 Vercel 등을 선택적으로 병행

---

## 📌 포트폴리오 데이터 요약 (인풋 분석)

| 구분      | 내용                                                                 |
| --------- | -------------------------------------------------------------------- |
| 이름      | 김정현                                                               |
| 소속      | Samsung DA사업부 AI Crew Leader                                      |
| 학력      | 전북대 정밀기계(4.35) / Hokkaido 교환 / GIST 기전공학과(4.16)        |
| 경력      | 1999~현재 (약 26년, Samsung)                                         |
| 언어      | 영어 IM High / 일본어 SJPT 2급                                       |
| 핵심 강점 | BLDC 최초개발 / R600a 최대배기량 / 일본 360억 Sales / AI Crew Leader |
| 논문      | 7편 (Purdue 3편, GIST 졸업논문, ANSYS학회 등)                        |
| 향후 방향 | Surrogate Modeling / Bayesian Opt / ROM / MLOps for Simulation       |

---

## 🗂️ Phase별 개발 계획

### 2026-06 UI/UX 개선 실행 계획

| Phase | 범위 | 상태 |
| ----- | ---- | ---- |
| 1 | 프로젝트 카드 이미지, 키워드형 문구, 핵심 성과 강조 | 완료 |
| 2 | 연금/자산/건강 앱 비밀번호 게이트 분리 | 완료 |
| 3 | README/PLAN/TODO/상세 문서 업데이트 | 완료 |
| 4 | lint/build/E2E 검증 후 커밋 | 완료 |
| 5 | 서버급 인증 전환(Vercel/Supabase/Auth0 등) | 다음 단계 |

상세 내용과 이미지 출처는 `docs/ui-ux-improvement-2026-06.md`에서 관리합니다.

### PHASE 0 — 프로젝트 초기화 (Day 1)

```bash
npx create-next-app@latest portfolio-jh --typescript --tailwind --app --src-dir
cd portfolio-jh
npx shadcn@latest init
npm install framer-motion
npm install lucide-react
```

**체크리스트**

- [ ] Next.js 프로젝트 생성 (App Router)
- [ ] Tailwind CSS 설정
- [ ] shadcn/ui 설치 및 테마 설정 (삼성 스타일: 흰색+블루 포인트)
- [ ] Framer Motion 설치
- [ ] 폴더 구조 생성
- [ ] Git 초기화 + GitHub 연결
- [ ] GitHub Pages: 저장소 Settings → Pages → **GitHub Actions** 소스, `main` 푸시로 배포 확인

---

### PHASE 1 — 1주차: 기본 구조 + UI 뼈대

**목표: 정적 구조 완성, 모든 섹션 화면에 표시**

#### 폴더 구조

```
src/
├─ app/
│   ├─ page.tsx              ← 메인 (Hero + 모든 섹션 조합)
│   ├─ about/page.tsx
│   ├─ projects/page.tsx
│   ├─ research/page.tsx
│   ├─ ai-lab/page.tsx
│   └─ contact/page.tsx
├─ components/
│   ├─ layout/
│   │   ├─ Navbar.tsx
│   │   └─ Footer.tsx
│   ├─ sections/
│   │   ├─ Hero.tsx
│   │   ├─ About.tsx
│   │   ├─ Projects.tsx
│   │   ├─ Research.tsx
│   │   ├─ AiLab.tsx
│   │   └─ Contact.tsx
│   └─ ui/
│       ├─ ProjectCard.tsx
│       ├─ SkillBar.tsx
│       ├─ Timeline.tsx
│       └─ PaperCard.tsx
├─ data/
│   ├─ projects.ts
│   ├─ skills.ts
│   ├─ research.ts
│   ├─ career.ts
│   └─ profile.ts
└─ lib/
    └─ utils.ts
```

#### 핵심 작업 목록

| 우선순위 | 컴포넌트 | 내용                                                                |
| -------- | -------- | ------------------------------------------------------------------- |
| 1        | Navbar   | 로고 + 메뉴(About/Projects/Research/AI Lab/Contact) + 스크롤 활성화 |
| 2        | Hero     | 이름 + 한줄 소개 + CTA 버튼 + 배경 애니메이션                       |
| 3        | About    | 경력 요약 타임라인 + 스킬 바 + 언어 레벨                            |
| 4        | Projects | 6개 프로젝트 카드 (기여도 게이지 포함)                              |
| 5        | Research | 논문 7편 테이블/카드                                                |
| 6        | AI Lab   | 현재/진행중/예정 AI 프로젝트                                        |
| 7        | Contact  | 이메일 + GitHub + Notion 링크                                       |
| 8        | Footer   | 저작권 표시                                                         |

---

### PHASE 2 — 2주차: 데이터 연결 + 인터랙션

**목표: hardcode → JSON 데이터 분리, 애니메이션 추가**

#### 데이터 타입 정의

```typescript
// data/projects.ts
type Project = {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  role: string; // "개발,멤버" | "리더,영업" 등
  contribution: number; // 0-100
  startDate: string;
  endDate: string;
  impact: string;
  category: "engineering" | "leadership" | "ai" | "quality";
  highlight: string; // ✔ 핵심 성과
};

// data/skills.ts
type Skill = {
  name: string;
  level: number; // 1-5 (★ 개수)
  category: "ai-tool" | "design" | "engineering" | "office";
  description: string;
};

// data/research.ts
type Paper = {
  title: string;
  url?: string;
  date: string;
  country: string;
  venue: string;
  type: "journal" | "conference" | "thesis";
};

// data/career.ts
type CareerItem = {
  period: string;
  role: string;
  company: string;
  description: string;
};
```

#### 애니메이션 규칙 (Framer Motion)

```typescript
// 스크롤 기반 Fade-in (모든 섹션에 적용)
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

// 카드 Hover
const cardHover = {
  whileHover: { y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" },
  transition: { duration: 0.2 },
};
```

---

### PHASE 3 — 3주차: AI Chat 기능 (핵심 차별화)

**목표: 포트폴리오 기반 Q&A 챗봇 추가**

#### 구현 방식 (RAG-lite)

```
방식: OpenAI API + 포트폴리오 데이터 context injection
비용: 트래픽 적으므로 pay-as-you-go 충분
```

#### 파일 구조

```
src/
├─ lib/
│   └─ portfolio-chat-local.ts  ← 정적 배포용 규칙 기반 챗 응답
├─ components/
│   └─ AiChat.tsx                 ← 플로팅 챗 UI
└─ data/
    └─ portfolio-context.ts     ← 챗 규칙·요약 데이터
```

#### 시스템 프롬프트 설계

```
당신은 김정현의 포트폴리오를 소개하는 AI 어시스턴트입니다.
[포트폴리오 데이터 삽입]
- 한국어/영어로 답변 가능
- 기술적 질문에는 구체적 수치와 성과로 답변
- 채용 담당자 관점의 질문에 최적화
```

#### UI

```
- 우하단 플로팅 버튼 (🤖 아이콘)
- 클릭 시 슬라이드업 채팅창
- "이 분의 BLDC 경험은?" 같은 예시 질문 버튼 3개
```

---

### PHASE 4 — 4주차: 디자인 완성 + SEO + 배포

**목표: 퀄리티 마감, 배포 안정화**

#### 디자인 시스템

```css
/* 삼성 스타일 컬러 팔레트 */
--color-primary: #1428a0; /* 삼성 블루 */
--color-accent: #2d6fff; /* 밝은 블루 포인트 */
--color-bg: #ffffff; /* 흰 배경 */
--color-text: #1a1a1a; /* 거의 검정 */
--color-muted: #6b7280; /* 회색 텍스트 */
--color-border: #e5e7eb; /* 연한 보더 */
```

#### 타이포그래피

```
Heading: Pretendard (한글) / Inter (영문)
Body: 16px / line-height 1.7
Code: JetBrains Mono
```

#### SEO + 메타

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: "김정현 | Compressor & AI Engineering Portfolio",
  description: "삼성전자 AI Crew Leader. 압축기 엔지니어링 + AI 자동화 전문가",
  openGraph: { ... }
}
```

#### 배포 체크리스트

- [ ] GitHub Actions 빌드 성공 및 `https://jh104kim.github.io/` 접속 확인
- [ ] (OpenAI 실연결 시) API 키는 서버 호스팅(Vercel 등) 환경변수에만 설정 — Pages 정적 배포에는 API 라우트 미포함
- [ ] robots.txt + sitemap.xml 생성
- [ ] 이미지 최적화 (정적 export 시 `next/image` 제약 확인)
- [ ] Lighthouse 점수 확인 (목표: 90+)
- [ ] 커스텀 도메인 연결 (선택)

---

## 🎨 UI/UX 상세 설계

### Hero 섹션

```
배경: 미세한 그리드 패턴 + 블루 그라디언트 포인트
레이아웃: 좌측 텍스트 / 우측 프로필 이미지 공간
텍스트:
  - "김정현" (대형, 굵게)
  - "Compressor Engineering + AI Automation"
  - "삼성전자 DA사업부 | AI Crew Leader | 26년 압축기 전문가"
CTA: "프로젝트 보기" + "AI에게 물어보기"
```

### Projects 섹션 카드 구성

```
┌─────────────────────────────┐
│  [카테고리 배지]  [연도]      │
│                              │
│  프로젝트 제목                │
│  핵심 성과 ✔                 │
│                              │
│  기여도 ████████░░ 80%       │
│  역할: 리더 / 개발            │
└─────────────────────────────┘
```

### AI Lab 섹션 구성

```
현재 진행: AI Crew 업무자동화 / GT-Suite 자동화
학습 중: Surrogate Modeling / Bayesian Optimization
예정: ROM / MLOps for Simulation
```

---

## ⚡ 즉시 실행 명령어

```bash
# 1단계: 프로젝트 생성
cd c:\ai\ai_coding_pjt\260331_개인홈페이지만들기
npx create-next-app@latest portfolio-jh --typescript --tailwind --app --src-dir --no-git

# 2단계: 의존성 설치
cd portfolio-jh
npx shadcn@latest init -d
npm install framer-motion lucide-react

# 3단계: 개발 서버 실행
npm run dev
```

---

## 📅 주차별 마일스톤

| 주차  | 목표                     | 완료 기준                               |
| ----- | ------------------------ | --------------------------------------- |
| 1주차 | 기본 구조 + 모든 섹션 UI | localhost에서 전체 페이지 렌더링        |
| 2주차 | 데이터 분리 + 애니메이션 | 스크롤 Fade-in, 카드 Hover 동작         |
| 3주차 | AI Chat 기능             | "BLDC 경험 알려줘" 질문에 정확하게 답변 |
| 4주차 | 디자인 완성 + 배포       | GitHub Pages 배포, Lighthouse 90+       |

---

## 🚀 지금 바로 시작하려면

**첫 번째 명령어:**

```bash
cd c:\ai\ai_coding_pjt\260331_개인홈페이지만들기
npx create-next-app@latest portfolio-jh --typescript --tailwind --app --src-dir --no-git
```

이후 "PHASE 1부터 시작해줘" 라고 말씀하시면 각 컴포넌트를 순서대로 구현합니다.

---

## 부록 — 향후 고도화 로드맵 (요약)

과거 GitHub README에 포함되었던 장문 개선안을 README에서 분리하여 요약만 둡니다. 세부는 필요 시 이 목록을 체크리스트로 확장하면 됩니다.

### 콘텐츠 (1차)

- Hero·About·Projects 문구 밀도, Career(역할 변화) vs Projects(성과 사례) 분리, AI Lab 구체화 — **대부분 코드에 반영됨** (`진행사항.log` 참고)

### 디자인 (2차)

- 섹션 타이포 위계·KPI 강조, 카드 radius·hover·패딩 통일, Timeline·Research 시각 개선, Footer 한 줄 소개

### AI Chat (3차)

- OpenAI 실연결, 스트리밍·로딩 UX, `portfolio-context` 구조화, 질문 유형별 라우팅 강화, rate limit·max tokens

### 구조 (4차)

- shadcn/ui 범위 정리, `features/chat` 등 레이어 분리, motion 래퍼 공통화, 카드 props 표준화

### 운영 (5차)

- metadata·OG·Twitter 카드, sitemap·robots, Preview/Production 환경변수 분리, Lighthouse·이미지 최적화
