# 김정현 포트폴리오

Compressor Engineering + AI Automation을 핵심 컨셉으로 한 개인 포트폴리오 사이트입니다.

압축기 개발 경력, 글로벌 실적, 연구 이력, AI 자동화 방향성을 하나의 웹 경험으로 정리하는 것을 목표로 합니다.

## 기술 스택

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- OpenAI API
- Vercel 배포 예정

사용자가 요청한 기술 스택 방향을 유지하면서 구현을 진행했습니다.

## 현재 구현 범위

- 메인 랜딩 페이지
- Hero 섹션
- About 섹션
- Projects 섹션
- Research 섹션
- AI Lab 섹션
- Contact 섹션
- 포트폴리오 기반 AI Chat UI
- AI Chat API Route
- 개별 라우트 페이지
  - /about
  - /projects
  - /research
  - /ai-lab
  - /contact

## 프로젝트 구조

```text
src/
	app/
		about/
		ai-lab/
		api/chat/
		contact/
		projects/
		research/
		globals.css
		layout.tsx
		page.tsx
	components/
		layout/
		sections/
		ui/
		AiChat.tsx
	data/
		career.ts
		portfolio-context.ts
		profile.ts
		projects.ts
		research.ts
		skills.ts
	lib/
		utils.ts
```

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 아래 주소로 확인합니다.

```text
http://localhost:3000
```

## 검증 명령어

```bash
npm run lint
npm run build
```

현재 기준으로 lint와 production build는 모두 통과했습니다.

## AI Chat 환경 변수

OpenAI API를 실제로 연결하려면 아래 환경 변수를 설정하면 됩니다.

```bash
OPENAI_API_KEY=your_api_key
OPENAI_MODEL=gpt-4.1-mini
```

환경 변수가 없으면 AI Chat은 포트폴리오 데이터 기반 로컬 응답으로 동작합니다.

## 점검 포인트

직접 확인해볼 때는 아래 항목을 우선 보면 됩니다.

- 메인 섹션 순서와 흐름이 자연스러운지
- 프로젝트 카드 내용과 문구가 경력 강조에 충분한지
- About 섹션의 경력, 자격, 언어 정보가 정확한지
- Research 섹션의 논문 정보 표기가 적절한지
- AI Lab 섹션이 차별화 포인트로 잘 보이는지
- Contact 섹션의 문구와 링크가 적절한지
- AI Chat 질문 예시와 응답 톤이 원하는 방향인지
- 모바일 화면에서 레이아웃이 무너지지 않는지

## 다음 단계 후보

점검 후 아래 방향 중 하나로 이어서 진행할 수 있습니다.

1. 콘텐츠 다듬기
2. 디자인 디테일 강화
3. OpenAI 실연결 및 챗 품질 개선
4. shadcn/ui 컴포넌트 레이어 정리
5. Vercel 배포 설정 마무리

점검 결과를 주시면 그 기준으로 다음 단계를 바로 이어가겠습니다.





아래 방향으로 잡으면 좋습니다. 현재 사이트는  **구조는 이미 좋고** , 이제는 **문구 밀도 조절 + 시각적 위계 + AI 실사용 완성도**를 올리는 단계입니다. 현재 구현 범위와 실제 화면 내용 기준으로 보면, Hero/About/Projects/Research/AI Lab/Contact의 기본 축은 잘 잡혀 있습니다.

---

## 1. 콘텐츠 다듬기

### 1-1. Hero 문구 정제

현재 Hero는 강점이 분명하지만, “26년 압축기 전문가”, “AI Crew Leader”, “Compressor Engineering + AI Automation”이 한 번에 보여 정보 밀도가 조금 높습니다.
개선:

* 1줄 메인 메시지
* 1줄 보조 설명
* 3~4개 핵심 숫자 지표
  로 분리

추천 구조:

* 메인: **Compressor Engineering + AI Automation**
* 보조: **26년 압축기 개발 경험을 AI 자동화와 연결하는 엔지니어**
* 지표: `26년 경력 / 7편 발표 / 360억 Sales / AI Crew`

이렇게 하면 첫 화면 이해 속도가 빨라집니다.

### 1-2. About 문단을 “소개문”이 아니라 “가치 제안”으로 변경

현재 About는 경력 요약 중심입니다.
개선:

* “무엇을 해왔는가”보다
* “왜 이 사람이 차별화되는가”를 먼저 보여주기

추천 3문장 구조:

1. 압축기 개발/품질/영업/조직 리딩 경험
2. 시뮬레이션/연구 역량 보유
3. 최근 AI 자동화로 확장 중

### 1-3. Career / Projects 중복 축소

현재 Career Timeline과 Projects가 비슷한 내용을 반복합니다.
개선:

* Timeline = **역할 변화**
* Projects = **성과 중심 사례**
  로 역할 분리

예:

* Timeline: 직책/조직/역할 변화
* Projects: 문제-해결-성과-기여도

### 1-4. Projects 카드 구조 통일

현재 프로젝트 카드에 좋은 정보가 많지만, 카드마다 읽는 포인트가 조금 분산됩니다.
각 카드 구조를 아래처럼 고정:

* 제목
* 한 줄 성과
* 배경/문제
* 내가 한 역할
* 결과/숫자
* 사용 기술

예:

* 제목: R600a BLDC 압축기 최초 개발
* 성과: 국내 최초 AC→BLDC 전환
* 역할: 개발/멤버
* 결과: 효율 고도화, 차세대 플랫폼 기반 확보

### 1-5. Research를 “논문 목록”에서 “연구 축”으로 재구성

현재는 논문 나열 중심입니다.
개선:
상단에 연구 키워드 3개 먼저 노출

* Valve Dynamics
* Tribology
* GT-Suite / System Integration

그 아래에 논문 리스트 배치
이렇게 하면 채용/협업 관점에서 무엇을 연구해온 사람인지 바로 보입니다.

### 1-6. AI Lab를 더 구체화

현재 AI Lab는 방향성은 좋지만, 약간 선언형입니다.
개선:
각 항목에 “입력 → 처리 → 결과” 추가

예:

* AI Crew 자동화
  * 입력: 반복 보고/정리 업무
  * 처리: 요약/분류/자동 문서화
  * 결과: 시간 절감, 반복성 축소
* GT-Suite 자동화
  * 입력: 해석 조건/실행/결과 파일
  * 처리: 자동 실행 및 결과 정리
  * 결과: 엔지니어링 생산성 향상

### 1-7. Contact 문구 개선

현재 Contact는 무난합니다.
개선:
문의 유형을 더 분명히

* 기술 협업
* 발표/세미나
* 채용/자문
* AI 자동화 프로젝트

---

## 2. 디자인 디테일 강화

### 2-1. 섹션 위계 강화

현재 콘텐츠는 좋지만, 시각적 강약이 더 있으면 훨씬 좋아집니다.
개선:

* 섹션 제목 크기 통일
* 섹션 설명은 더 짧게
* 숫자 KPI는 더 크게
* 본문 문장은 줄 길이 축소

### 2-2. Hero 비주얼 추가

현재 텍스트 중심이면 첫인상이 다소 정적일 수 있습니다.
개선:

* 우측에 Compressor/Research/AI를 상징하는 정적 비주얼
* 또는 호스트 기관/논문/기술 키워드 기반 카드 스택
* 또는 라인/그리드 기반 엔지니어링 배경

### 2-3. 카드 컴포넌트의 일관성 강화

Projects / Research / AI Lab 카드 높이, padding, radius, hover를 통일
추천:

* radius 20~24px
* border + very light shadow
* hover 시 translateY -4px 정도
* 카드 상단 태그 배지 통일

### 2-4. 타이포 디테일

현재 콘텐츠는 전문적이므로 폰트 위계가 중요합니다.
추천:

* Hero title: 강하게
* Section title: 중간
* Card title: 확실히
* Body: 너무 작지 않게
* 숫자 KPI: 별도 스타일

### 2-5. Timeline 시각 개선

현재 Timeline은 정보는 충분하나 더 읽기 쉽게 만들 수 있습니다.
개선:

* 연도 축 좌측 고정
* 역할 배지 색상 구분
  * 개발
  * 품질
  * 영업
  * AI
* 핵심 성과는 굵게

### 2-6. Research 시각 개선

논문/학회 host 이미지와 country/type 정보가 이미 있으니, 카드형으로 더 깔끔히 가능
구성:

* 좌측: 기관/학회 로고
* 중앙: 제목, 분류, 날짜
* 우측: 국가/상태 배지

### 2-7. Footer 디테일

Footer는 너무 단순하면 사이트 완성도가 떨어집니다.
추가:

* 짧은 한 줄 소개
* Email / Notion / GitHub
* 저작권
* “Built with Next.js + OpenAI”

---

## 3. OpenAI 실연결 및 챗 품질 개선

### 3-1. 응답 원칙 고정

현재 AI Chat은 포트폴리오 기반 로컬 응답과 OpenAI 실연결을 고려한 구조입니다.
먼저 고정할 것:

* 답변 길이
* 톤
* 근거 범위
* 모르는 내용 처리 방식

추천 시스템 규칙:

* 포트폴리오 내용 안에서만 답변
* 과장 금지
* 경력/프로젝트/연구/AI 방향성 중심
* 질문이 모호하면 가장 관련 높은 섹션 기준 답변

### 3-2. 포트폴리오 context 구조 개선

지금 `portfolio-context.ts`가 있다면 단순 문자열보다 구조화 데이터가 좋습니다.
추천 구조:

* profile
* summary
* timeline
* projects
* research
* ai_lab
* contact

이렇게 하면 질문별 라우팅이 쉬워집니다.

### 3-3. 질문 유형별 프롬프트 분기

질문을 4개 정도로 분류

* 자기소개형
* 프로젝트형
* 연구형
* AI 비전형

예:

* “이 사람의 강점은?” → summary 우선
* “BLDC 개발 설명해줘” → projects 우선
* “연구 경험은?” → research 우선
* “AI Lab 방향은?” → ai_lab 우선

### 3-4. 답변에 실제 데이터 연결

좋은 챗은 “두루뭉술한 칭찬”이 아니라 구체 정보가 나와야 합니다.
예:

* 26년 경력
* 7편 발표
* 일본 Sales 360억
* R600a BLDC 최초 개발

이런 수치를 응답 템플릿에 우선 삽입

### 3-5. 예시 질문 UX 개선

현재 “AI에게 물어보기” 기능이 있으니, 예시 질문을 클릭형으로 넣는 것이 좋습니다.
추천:

* 이 포트폴리오의 핵심 강점은?
* 압축기 개발 프로젝트 중 대표 성과는?
* 연구 이력은 어떤 방향으로 이어졌나?
* AI Lab은 어떤 문제를 풀려고 하나?

### 3-6. 스트리밍 + 로딩 UX

실연결 시 필요

* “답변 생성 중…” 스켈레톤
* 답변 스트리밍
* 오류 시 fallback: 로컬 응답

### 3-7. 보안 및 비용

* API key는 서버 route만 사용
* 프론트에 절대 노출 금지
* model은 초기엔 `gpt-4.1-mini` 또는 비용 안정형으로
* max tokens 제한
* rate limit 필요

### 3-8. 2단계 품질 개선

1단계: 현재 포트폴리오 데이터 기반 Q&A
2단계: PDF/Notion/추가 연구 자료 연결
이렇게 가야 챗 품질이 단계적으로 올라갑니다.

---

## 4. shadcn/ui 컴포넌트 레이어 정리

### 4-1. 컴포넌트 책임 분리

현재 구조상 `layout / sections / ui / AiChat`으로 나뉘어 있어 방향은 좋습니다.
개선:

* `ui`: 순수 재사용 컴포넌트
* `sections`: 페이지 의미 단위
* `layout`: navbar/footer/container
* `features/chat`: 챗 전용 묶음

즉 `AiChat.tsx`는 feature 레이어로 빼는 게 더 깔끔합니다.

### 4-2. 카드 계층 공통화

Projects, Research, AI Lab에 카드가 반복될 가능성이 큽니다.
추천 공통 컴포넌트:

* `SectionHeader`
* `MetricBadge`
* `InfoCard`
* `TimelineItem`
* `TagBadge`

### 4-3. shadcn/ui 적용 범위 정리

무조건 많이 쓰기보다 “기반 UI”에만 쓰는 게 좋습니다.
추천 적용:

* Card
* Button
* Badge
* Tabs
* Sheet / Dialog
* Input / Textarea
* Separator

### 4-4. 디자인 토큰 정리

`globals.css` 또는 theme 변수에

* radius
* spacing
* muted color
* accent color
* border color
  고정

이걸 안 하면 페이지가 늘수록 스타일이 흔들립니다.

### 4-5. 섹션별 props 표준화

예:

* ProjectCard props
* ResearchCard props
* SkillCard props

각 컴포넌트가 받는 데이터 형태를 통일하면 data 파일 관리가 쉬워집니다.

### 4-6. motion wrapper 공통화

Framer Motion이 섹션마다 반복될 가능성이 큽니다.
공통:

* FadeInSection
* StaggerContainer
* HoverCardMotion

이렇게 추출하면 코드가 많이 정리됩니다.

### 4-7. 모바일 대응용 컴포넌트 분리

Navbar / Timeline / Metrics는 모바일에서 구조가 달라질 수 있습니다.
모바일 전용 처리:

* nav는 sheet
* timeline은 card stack
* metrics는 2x2 grid

---

## 5. Vercel 배포 설정 마무리

### 5-1. 환경 변수 정리

현재 README 기준 `OPENAI_API_KEY`, `OPENAI_MODEL` 사용 예정입니다.
정리:

* Local `.env.local`
* Vercel Project Settings > Environment Variables
* Preview / Production 분리 가능하면 분리

### 5-2. 배포 전 체크리스트

배포 전에 꼭 확인:

* `npm run build`
* `npm run lint`
* 이미지 경로
* metadata
* favicon
* og image
* robots / sitemap 여부

### 5-3. 메타데이터 강화

포트폴리오는 공유 시 썸네일이 중요합니다.
필수:

* title
* description
* open graph image
* twitter card
* keywords

### 5-4. 도메인/브랜드 정리

배포 후 더 좋아지는 포인트:

* 커스텀 도메인 연결
* `jhkim`, `kimjh`, `compressor-ai` 같은 브랜드명 통일
* 이메일/Notion/GitHub 링크 최종 점검

### 5-5. 에러 fallback 준비

OpenAI route 실패 시:

* 로컬 응답
* “현재 AI 응답이 제한되어 포트폴리오 요약으로 안내합니다”
  같은 fallback 문구 제공

### 5-6. 성능 최적화

배포 후 확인:

* 이미지 `next/image`
* lazy loading
* 너무 무거운 animation 제거
* lighthouse 점검

### 5-7. Preview 배포 활용

Vercel 장점은 preview입니다.
운영 방식:

* main = production
* feature branch = preview
  이렇게 두고 디자인/챗 품질 조정

---

## 추천 진행 순서

### 1차

* Hero / About / Projects 문구 정리
* Career / Projects 역할 분리
* AI Lab 구체화

### 2차

* 카드 스타일 통일
* Timeline / Research 시각 개선
* Footer / Hero 비주얼 강화

### 3차

* OpenAI 실연결
* 예시 질문 / fallback / 스트리밍 적용
* 포트폴리오 context 구조화

### 4차

* shadcn/ui 공통 컴포넌트 정리
* motion wrapper 추출
* feature 레이어 분리

### 5차

* Vercel 환경변수
* metadata / og / 도메인
* preview → production 마감

원하면 다음 답변에서 이 5단계를 바로 **실행용 체크리스트 형식**으로 바꿔드리겠습니다.
