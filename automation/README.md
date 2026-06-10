# automation/ — 개발자 워크플로우 자동화

포트폴리오 저장소(`jh104kim.github.io`)에 내장된 AI 자동화 스크립트.
포트폴리오 소스(Next.js)와 분리된 `automation/` 폴더에 보관한다.

> 전체 로드맵: **① 커밋 메시지** → ② 코드 리뷰 → ③ 테스트 생성 → ④ 자율 버그 수정

---

## 1단계: 커밋 메시지 자동 생성

### 파일
| 파일 | 역할 |
|------|------|
| `commit_msg.py` | staged diff → Conventional Commits 메시지(stdout) |
| `requirements.txt` | `anthropic` 의존성 |
| `.git/hooks/prepare-commit-msg` | `git commit` 시 메시지 자동 채움 (git 추적 대상 아님) |
| `.claude/commands/commit-msg.md` | Claude Code 슬래시 커맨드 `/commit-msg` |
| `.claude/commands/code-review.md` | Claude Code 슬래시 커맨드 `/code-review` |

### 운영 방식 (사내망 제약에 따른 이중 구조)

| 환경 | 방식 | 상태 |
|------|------|------|
| 사내망 (현재) | Claude Code 슬래시 커맨드 `/commit-msg` | ✅ 즉시 동작 |
| 외부망 / API 키 확보 후 | `commit_msg.py` + `prepare-commit-msg` 훅 | 코드 준비 완료, 키만 필요 |

> 사내망 정책: `console.anthropic.com` 차단 → API 키 발급 불가.
> `api.anthropic.com` 자체는 도달 가능(401). 키 확보 즉시 훅이 자동 활성화됨.

### 슬래시 커맨드 사용법

Claude Code 입력창:
```
/commit-msg          → staged 변경으로 커밋 메시지 제안
/commit-msg commit   → 메시지 생성 후 바로 커밋까지

/code-review         → staged 변경 코드 리뷰 (버그/보안/개선 심각도별)
/code-review src/app/page.tsx  → 특정 파일 리뷰
```

### SDK 직접 실행 (API 키 있는 환경)

```powershell
cd automation
pip install -r requirements.txt
$env:ANTHROPIC_API_KEY = "sk-ant-..."
git add .
python commit_msg.py    # Conventional Commits 메시지 출력
```

모델 기본값: `claude-opus-4-8` (상단 `MODEL` 상수에서 변경 가능)  
더 빠른 옵션: `claude-haiku-4-5` (비용↓ 속도↑, 커밋 메시지엔 충분)

---

## 다음 단계 (예정)

- **3단계**: 테스트 코드 자동 생성 (`automation/gen_tests.py`)
- **4단계**: Agent 자율 버그 수정 (GitHub Actions + Claude API)
- **GitHub Actions 연동**: API 키 확보 후 PR 자동 리뷰 워크플로우 추가 예정
