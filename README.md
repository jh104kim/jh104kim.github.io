# 김정현 포트폴리오

Compressor Engineering + AI Automation을 핵심 컨셉으로 한 개인 포트폴리오 사이트입니다.

**Live**: <https://jh104kim-github-io.vercel.app> · <https://jh104kim.github.io>

> GitHub Pages가 README를 보여준다면: 레포 **Settings → Pages → Source**를
> **"GitHub Actions"** 로 변경하세요. (현재 "Deploy from a branch" 모드면 Jekyll이 README를 렌더링합니다)

## 기술 스택

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Cloudflare Workers AI 챗봇 (옵션, `workers/portfolio-chat` 참고)

## 실행

```bash
npm install
npm run dev
```

브라우저: http://localhost:3000

## 검증

```bash
npm run lint
npm run build
```

## 이력서 PDF

- `public/resume.pdf`를 추가하면 사이트의 “이력서 PDF” 버튼이 다운로드로 동작합니다.

## 환경 변수 (선택)

OpenAI 실연결 시에만 필요합니다.

```bash
OPENAI_API_KEY=your_api_key
OPENAI_MODEL=gpt-4.1-mini
```

환경 변수가 없으면 AI Chat은 로컬 포트폴리오 응답으로 동작합니다.

## 이번 사이클 적용 범위

- Hero: 메인 1줄 + 보조 1줄 + KPI 4개
- Hero 우측: 엔지니어링 그리드 비주얼
- About: 가치 제안 3문장 구조
- Timeline: 역할 변화 중심 + 역할 타입 배지
- Projects: 성과 중심 카드 구조 통일, 설명 2문장, 기술 태그
- Research: 연구축 3개 선노출 + 텍스트 배지 카드
- AI Lab: 입력/처리/결과 구조
- Contact: 문의 유형 명확화
- Footer: Email/Notion/GitHub + 빌드 문구
- Chat: 질문 유형 분기, 로컬 fallback 응답 품질 개선
- 공통: 카드 토큰/모션 래퍼 추출, 진행사항.log 기록

## 이번 사이클에서 제외한 항목

- OpenAI 실연결
- DB 기반 챗 이력 저장
- shadcn/ui 대규모 리팩터링
- 실제 배포

## 진행 로그

- 파일: 진행사항.log
- 원칙: 이슈 발생 시 해결/우회 내역을 누적 기록

## 다음 단계 권장

1. OpenAI 실연결 + DB 이력 저장
2. shadcn/ui 레이어 정리
3. Vercel 배포(Preview -> Production)
