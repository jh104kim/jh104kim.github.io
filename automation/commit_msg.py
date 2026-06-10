"""commit_msg.py — git에 staged된 변경을 분석해 Conventional Commits 형식의
커밋 메시지를 생성한다.

사용:
    git add <files>
    python automation/commit_msg.py     # 저장소 루트에서 실행
    # 또는
    cd automation && python commit_msg.py

prepare-commit-msg 훅(.git/hooks/)에서 호출되어 `git commit` 시 자동으로 메시지를 채운다.
실패 시(키 없음/네트워크 오류 등)에는 아무것도 출력하지 않고 0으로 종료해
커밋 자체를 막지 않는다(fail-safe).
"""

import subprocess
import sys

import anthropic

# ── 설정 ────────────────────────────────────────────────────────────────
# 커밋 메시지는 매 커밋마다 호출되는 단순·속도 중요 작업입니다.
#   - 기본값: claude-opus-4-8 (가장 강력)
#   - 비용/속도 우선이면 아래를 "claude-haiku-4-5" 또는 "claude-sonnet-4-6"으로 변경
MODEL = "claude-opus-4-8"

# 분석에 사용할 diff 최대 문자 수(너무 큰 diff는 잘라서 보냄)
MAX_DIFF_CHARS = 12000

SYSTEM_PROMPT = """\
너는 git diff를 분석해 Conventional Commits 형식의 커밋 메시지를 작성하는 도구다.

규칙:
- 형식: <type>(<scope>): <subject>
- type: feat | fix | docs | style | refactor | test | chore | perf | build | ci
- scope는 변경의 핵심 영역(생략 가능)
- subject: 한국어, 명령형, 50자 이내, 마침표 없음
- 변경이 복합적이면 제목 아래 한 줄 띄우고 본문에 bullet(-)로 요약
- 출력은 커밋 메시지 텍스트만. 설명·머리말·코드블록(```)·따옴표를 절대 붙이지 마라.
"""


def get_staged_diff() -> str:
    """staged된 변경의 diff를 반환. 없으면 빈 문자열."""
    result = subprocess.run(
        ["git", "diff", "--staged"],
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
    )
    return result.stdout


def get_staged_files() -> str:
    """staged된 파일 목록(상태 포함)을 반환."""
    result = subprocess.run(
        ["git", "diff", "--staged", "--name-status"],
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
    )
    return result.stdout


def generate_commit_message(diff: str, files: str) -> str:
    client = anthropic.Anthropic()  # ANTHROPIC_API_KEY 환경변수 자동 사용

    truncated = ""
    if len(diff) > MAX_DIFF_CHARS:
        truncated = "\n\n[알림: diff가 길어 일부만 전달됨]"
        # 큰 diff일 때 길이를 stderr로 알림(stdout은 메시지 전용이라 깨끗하게 유지)
        print(
            f"[commit_msg] diff가 {len(diff)}자라 {MAX_DIFF_CHARS}자로 잘라 전송합니다.",
            file=sys.stderr,
        )
        diff = diff[:MAX_DIFF_CHARS]

    user_content = (
        f"변경된 파일 목록:\n{files}\n\n"
        f"git diff (staged):\n{diff}{truncated}"
    )

    response = client.messages.create(
        model=MODEL,
        max_tokens=512,
        # 단순·지연에 민감한 작업이라 사고(thinking) 비활성 + 낮은 effort
        thinking={"type": "disabled"},
        output_config={"effort": "low"},
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": user_content}],
    )

    parts = [block.text for block in response.content if block.type == "text"]
    return "".join(parts).strip()


def main() -> int:
    diff = get_staged_diff()
    if not diff.strip():
        # staged 변경 없음 — 조용히 종료(훅이 깨지지 않도록)
        return 0

    try:
        message = generate_commit_message(diff, get_staged_files())
    except anthropic.AuthenticationError:
        print("[commit_msg] ANTHROPIC_API_KEY가 없거나 잘못되었습니다.", file=sys.stderr)
        return 0
    except anthropic.APIError as e:
        print(f"[commit_msg] Claude API 오류: {e}", file=sys.stderr)
        return 0
    except Exception as e:  # 어떤 오류든 커밋을 막지 않는다
        print(f"[commit_msg] 예기치 못한 오류: {e}", file=sys.stderr)
        return 0

    if message:
        print(message)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
