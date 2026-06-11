# Portfolio Agent Coordination

> 작업 시작 전 이 파일과 todo.md를 읽으세요. 완료 후 todo.md 업데이트 필수.

## 프로젝트

| 항목 | 내용 |
|------|------|
| Stack | Next.js 16.2.1 / TypeScript / Tailwind v4 / Framer Motion |
| 배포 | GitHub Pages (정적 export) |
| 로컬 경로 | `C:/ai/ai_coding_pjt/jh104kim.github.io` |
| Dev | `npm run dev` → http://localhost:3000 |
| Push | `git -c http.sslVerify=false push origin main` (사내망 SSL 우회 필수) |

## 핵심 규칙

1. **Tailwind v4 JIT**: `bg-white/[0.05]` 소수점 임의값 → CSS 미생성 → inline style 사용
2. **`.ui-card`**: `globals.css`에서 흰 배경 강제 → dark 섹션 내부 사용 금지
3. **i18n**: `useLang()` + `tr(ko, en)` 패턴 사용 (lib/i18n.tsx)
4. **데이터**: 콘텐츠 변경은 `src/data/*.ts` 에서만
5. **빌드**: 수정 후 반드시 `npm run build` 통과 확인
6. **Git Push**: `git -c http.sslVerify=false push origin main`

## 태스크 현황

| # | 태스크 | 상태 |
|---|--------|------|
| 01 | Impact Counter 애니메이션 | 🔄 IN PROGRESS |
| 02 | Career Timeline | ✅ DONE |
| 03 | LinkedIn URL | ⏳ 사용자 URL 대기 |
| 04 | GT-Suite 자동화 상세 | ⏳ TODO |
| 05 | 6 Sigma BB 성과 | ⏳ 사용자 내용 대기 |
| 06 | Research 섹션 보강 | ⏳ TODO |
| 07 | Skills Progress Bar | ✅ DONE |
| 08 | 일본어/영어 실전 사례 | ⏳ 사용자 내용 대기 |
| 09 | AI Crew 자동화 예시 | ⏳ TODO |
| 10 | OG 이미지 / SEO 메타 | ✅ DONE |
| 11 | 다크/라이트 모드 토글 | ⏳ TODO |
| 12 | Sitemap + robots.txt | ✅ DONE |

## 완료 히스토리

| 날짜 | 작업 | 커밋 |
|------|------|------|
| 2026-06-11 | docs 재구성 | - |
| 2026-06-10 | KO/EN 토글, Surrogate Demo, Life OS, 연금 프로젝트, SEO | `9219b63` |
| 2026-06-10 | AiLab dark mode fix | `ec84743` |
