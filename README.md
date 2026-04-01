# 김정현 포트폴리오

Compressor Engineering + AI Automation을 핵심 컨셉으로 한 개인 포트폴리오 사이트입니다.

**공식 배포:** GitHub Pages — `https://jh104kim.github.io/`  
(`main` 브랜치 푸시 시 Actions가 정적 빌드 후 배포합니다.)

**Vercel:** GitHub 연동 Import 시 **Root Directory**를 이 프로젝트( `package.json` 이 있는 폴더)로 지정하세요. Vercel 빌드 시 `VERCEL=1`로 동작해 **일반 Next 빌드(`.next`)**가 되며, 루트 `/`가 비어 보이는 문제를 피할 수 있습니다. 저장소 루트에 수동 `index.html`을 두지 않습니다(`app/page.tsx`가 빌드 시 `/`를 생성하며, `public/index.html`은 홈과 충돌할 수 있음).

상세 개발·고도화 계획은 저장소 루트의 [PLAN.md](./PLAN.md)를 참고하세요.

## 기술 스택

- Next.js App Router (Pages용 정적 export / Vercel용 기본 빌드 자동 분기)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- AI Chat: 브라우저에서 포트폴리오 데이터 기반 로컬 응답(정적 호스팅 호환)

## 로컬 실행

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

## AI Chat

배포 방식이 **정적 export**이므로 챗은 `src/lib/portfolio-chat-local.ts`의 규칙 기반 응답만 사용합니다(API 라우트 없음).  
나중에 OpenAI를 쓰려면 Vercel 등에서 API 라우트 또는 별도 백엔드를 두는 방식으로 확장하면 됩니다.

## 적용된 UI·콘텐츠 개선 (요약)

- Hero: 메인 1줄 + 보조 1줄 + KPI 4개, 우측 엔지니어링 그리드 비주얼
- About: 가치 제안 3문장 구조
- Timeline: 역할 변화 중심 + 역할 타입 배지
- Projects: 성과 중심 카드 구조 통일
- Research: 연구축 선노출 + 카드
- AI Lab: 입력 / 처리 / 결과 구조
- Contact: 문의 유형 명확화
- Footer: 연락처·빌드 문구
- Chat: 질문 유형 분기, 로컬 fallback

## 진행 로그

- 파일: `진행사항.log`

## 다음 단계 (권장)

1. `main`에 푸시 후 GitHub 저장소 Settings → Pages에서 **GitHub Actions** 소스 확인
2. (선택) OpenAI 연동은 서버 호스팅 + API 라우트 재도입 또는 외부 API로 분리
3. `PLAN.md` 부록 기준으로 SEO(OG 이미지, sitemap)·챗 품질·shadcn 정리 순 진행
