---
description: 스테이징된 변경으로 Conventional Commits 커밋 메시지 생성 (Claude Code 엔진)
argument-hint: "[commit]  (commit 지정 시 생성한 메시지로 바로 커밋)"
allowed-tools: Bash(git diff:*), Bash(git status:*), Bash(git add:*), Bash(git commit:*)
---
스테이징된 변경(`git diff --staged`)을 분석해 Conventional Commits 형식의 커밋 메시지를 한국어로 작성하라.

규칙:
- 형식: `<type>(<scope>): <subject>`
- type: feat | fix | docs | style | refactor | test | chore | perf | build | ci
- scope: 변경의 핵심 영역(생략 가능)
- subject: 한국어, 명령형, 50자 이내, 마침표 없음
- 변경이 복합적이면 제목 아래 한 줄 띄우고 본문에 bullet(-)로 요약
- 코드블록(```)·따옴표 없이 메시지 텍스트만 제시

절차:
1. `git diff --staged`로 변경을 확인한다. 스테이징된 변경이 없으면 그 사실만 알리고 종료.
2. 위 규칙에 맞는 커밋 메시지를 생성한다.
3. `$ARGUMENTS`가 `commit`이면 생성한 메시지로 `git commit`까지 실행한다.
   그 외에는 메시지만 제시하고 커밋하지 않는다.

비고: 이 명령은 Claude Code 자체를 생성 엔진으로 쓰므로, 사내망에서 외부
API 자격증명(ANTHROPIC_API_KEY/OAuth)이 없어도 동작한다.
