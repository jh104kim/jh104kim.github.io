# 김정현 포트폴리오

Compressor Engineering + AI Automation을 핵심 컨셉으로 한 개인 포트폴리오 사이트입니다.

**Live**: <https://jh104kim.github.io> · <https://jh104kim-github-io.vercel.app>

배포: `main` 푸시 시 GitHub Actions가 정적 export 후 Pages에 자동 배포되며, Vercel도 동시 반영됩니다.

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

## 주요 기능

- 한/영 전환 토글 (Navbar 지구본 버튼, 선택 언어 localStorage 유지)
- Surrogate Demo — AI Lab의 압축기 성능(냉력·소비전력·COP) 실시간 예측 데모
- AI Q&A 챗봇 — 로컬 정적 응답 기본, Workers AI 연결 시 실시간 LLM 응답
- 이력서 PDF 다운로드 (`public/resume.pdf`)
- SEO: OG 이미지(1200×630), JSON-LD 인물 데이터, sitemap/robots

## 환경 변수 (선택)

Cloudflare Workers AI 챗봇 실연결 시에만 필요합니다.

```bash
NEXT_PUBLIC_CHAT_API_URL=https://portfolio-chat.<계정>.workers.dev
```

미설정 시 AI Chat은 로컬 포트폴리오 응답으로 동작합니다.
Worker 배포 방법: `workers/portfolio-chat/README.md` 참고.

## 진행 로그

- 파일: 진행사항.log
- 원칙: 이슈 발생 시 해결/우회 내역을 누적 기록

## 다음 단계 (TODO.md 참고)

1. 전 섹션 EN 번역 완성
2. 대표 프로젝트 상세 페이지 (문제→제약→접근→결과→배운 점)
3. Workers AI 챗봇 실연결 + 답변 출처 표시
