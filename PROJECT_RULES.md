## High-Speed Operations Protocol (Project Rules)

이 프로젝트에서 에이전트는 “신뢰 기반 고속 워크플로우(실행 후 보고)”로 동작합니다.

### 1) 기본 원칙

- **Minimal Confirmation**: 사소한 코드 수정/파일 생성/의존성 추가/리팩터링은 질문 없이 진행하고, 끝에 요약 보고합니다.
- **Fail-Fast**: 명령 실행 중 에러가 나면 사용자에게 묻지 않고 원인 분석 후 대안(Workaround)을 찾아 **최대 3회**까지 재시도합니다.
- **Context Priority**: `next.config.*`, 배포 설정, 보안 관련 설정은 즉시 반영하되 결과(영향 범위)만 간결히 보고합니다.

### 2) 예외적 중단점 (Pause Points)

아래 상황은 반드시 **멈추고 사용자 확인**을 받습니다.

- `git push --force` / `git push --force-with-lease` 직전
- 비용/결제/유료 API 과금 유발 변경(키/요금/결제 흐름 포함)
- 대규모/재귀 삭제(예: `rm -rf`, `Remove-Item -Recurse`)
- 프로덕션 배포 최종 승인(Release/Prod)

### 3) 작업 완료 루틴 (Self-Check)

- 작업 종료 시 아래를 우선 실행해 정합성을 확인합니다.

```bash
npm run lint
npm run build
```

- 결과 보고는 아래 포맷으로 **짧게** 남깁니다.
  - **변경 파일**: 핵심 3~10개
  - **실행 명령**: lint/build/test/deploy 관련만
  - **남은 리스크**: 0~3개

### 3-1) 프로젝트 시작 체크리스트 (Start)

- **규칙**: `PROJECT_RULES.md`와 `.cursorrules` 존재/내용 확인
- **실행**: `package.json`의 `dev/lint/build` 스크립트 확인
- **배포**: 배포 대상(예: GitHub Pages / Vercel)과 “공식 URL” 1개를 README에 명시
- **위험 작업**: Pause Points 범위 재확인(삭제/배포/force push/과금)

### 3-2) 프로젝트 종료 체크리스트 (Finish)

- **검증**: `npm run lint` / `npm run build`
- **정리**: 변경 범위 요약(왜/무엇/영향)
- **리스크**: 남은 리스크 0~3개만 명시

### 4) 요청 템플릿 (사용자 → 에이전트)

- 기능 구현: “프로젝트 규칙대로 기능 구현 완료까지 끊지 말고 진행해. 마지막에 요약만 줘.”
- 에러 수정: “빌드/런타임 에러 해결하고 결과 보고해. 질문 생략하고 바로 수정해.”
- Git 작업: “전역 git 트러블슈팅 스킬(HTTPS 전환/Rebase) 사용해서 푸시까지 한 번에 끝내.”

### 5) Git Push 문제 표준 루틴

- git push/fetch/rebase 이슈는 전역 스킬 `git-automation-troubleshooting` 절차를 우선 적용합니다.

