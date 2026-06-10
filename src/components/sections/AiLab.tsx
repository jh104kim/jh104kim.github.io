"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Zap, Cpu, GitBranch, ArrowRight, CheckCircle2 } from "lucide-react";

// ── 데이터 ─────────────────────────────────────────────────────────────────

const currentTracks = [
  {
    Icon: Zap,
    title: "AI Crew 자동화",
    input: "반복 보고/정리/공유 업무",
    process: "요약, 분류, 자동 문서화 흐름 설계",
    output: "시간 절감과 반복성 축소",
    tag: "운영 중",
    tagClass: "bg-emerald-400/15 text-emerald-300 border border-emerald-400/25",
  },
  {
    Icon: Cpu,
    title: "GT-Suite 시뮬레이션 자동화",
    input: "해석 조건, 실행 스크립트, 결과 파일",
    process: "자동 실행 및 결과 정리 파이프라인",
    output: "엔지니어링 생산성 향상",
    tag: "운영 중",
    tagClass: "bg-emerald-400/15 text-emerald-300 border border-emerald-400/25",
  },
  {
    Icon: GitBranch,
    title: "개발자 워크플로우 자동화",
    input: "git diff · PR 코드 변경",
    process: "Claude Code 기반 커밋 메시지·코드 리뷰 자동화",
    output: "개발 속도 및 코드 품질 향상",
    tag: "구축 중",
    tagClass: "bg-blue-400/15 text-blue-300 border border-blue-400/25",
  },
];

const roadmap = [
  { step: "01", text: "Surrogate Modeling으로 FEA/CFD 반복 비용 절감" },
  { step: "02", text: "Bayesian Optimization으로 시뮬레이션 최소화 기반 최적화" },
  { step: "03", text: "Reduced Order Modeling으로 디지털 트윈 실시간성 확보" },
  { step: "04", text: "MLOps for Simulation으로 결과물을 운영 가능한 제품으로 전환" },
];

const metrics = [
  { v: "3", l: "자동화 트랙" },
  { v: "4", l: "Forward Plan" },
  { v: "26년", l: "도메인 경험" },
];

// ── 컴포넌트 ───────────────────────────────────────────────────────────────

export default function AiLab() {
  return (
    // ⚠️  내부 카드는 절대로 .ui-card 클래스를 쓰지 않는다.
    //     globals.css 의 .ui-card 가 background: var(--card)(=white)를 강제해
    //     dark 섹션에서 white-on-white 가 되는 버그를 유발하기 때문.
    <SectionWrapper
      id="ai-lab"
      className="relative overflow-hidden bg-gray-950 text-white"
    >
      {/* 배경 ambient glow — 디자인 키 포인트: dark 섹션 깊이감 */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-indigo-600/[0.08] blur-3xl" />
      </div>

      <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        {/* ── 왼쪽 컬럼 ── */}
        <div>
          <p className="text-sm font-semibold tracking-[0.22em] text-blue-300 uppercase">
            AI Lab
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            엔지니어링 시뮬레이션을 AI 플랫폼으로 확장하는 실험실
          </h2>
          <p className="mt-4 max-w-[56ch] text-base leading-8 text-white/65">
            압축기 개발 경험을 바탕으로 Simulation + AI + Automation을
            묶어내는 방향성을 보여주기 위한 공간입니다.
          </p>

          {/* 미니 지표 */}
          <div className="mt-8 flex gap-8">
            {metrics.map(({ v, l }) => (
              <div key={l}>
                <p className="text-2xl font-bold text-white">{v}</p>
                <p className="mt-0.5 text-xs text-white/45">{l}</p>
              </div>
            ))}
          </div>

          {/* 왜 차별화되는가 — 명시적 dark 스타일링 (ui-card 없음) */}
          <div className="mt-8 rounded-2xl border border-white/[0.09] bg-white/[0.04] p-6">
            <p className="text-sm font-semibold text-white">왜 차별화되는가</p>
            <p className="mt-3 text-sm leading-7 text-white/60">
              대부분의 AI 포트폴리오가 모델 중심이라면, 이 포트폴리오는 실제
              제품 개발, 품질, 글로벌 고객 대응, 조직 운영이라는 현실 문제를
              AI 자동화와 직접 연결합니다.
            </p>
          </div>

          {/* Forward Plan — 번호가 있는 step */}
          <div className="mt-5 rounded-2xl border border-blue-500/20 bg-blue-600/[0.07] p-6">
            <div className="mb-4 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-blue-300" />
              <p className="text-sm font-semibold text-blue-200">Forward Plan</p>
            </div>
            <div className="space-y-3">
              {roadmap.map(({ step, text }) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="mt-px shrink-0 rounded bg-blue-500/25 px-1.5 py-0.5 font-mono text-[10px] font-bold text-blue-300">
                    {step}
                  </span>
                  <p className="text-sm leading-6 text-white/65">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 오른쪽 컬럼 — 트랙 카드 ── */}
        <div className="space-y-4">
          {currentTracks.map(
            ({ Icon, title, input, process, output, tag, tagClass }) => (
              <div
                key={title}
                // glassmorphism dark card — ui-card 클래스 미사용
                className="rounded-2xl border border-white/[0.09] bg-white/[0.05] p-5 backdrop-blur-sm"
              >
                {/* 카드 헤더 */}
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/20">
                      <Icon size={15} className="text-blue-300" />
                    </span>
                    <p className="text-sm font-semibold text-white">{title}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${tagClass}`}
                  >
                    {tag}
                  </span>
                </div>

                {/* Input → Process → Output 파이프라인 */}
                <div className="grid grid-cols-[1fr_14px_1fr_14px_1fr] items-start gap-1">
                  {(
                    [
                      { label: "입력", value: input },
                      null,
                      { label: "처리", value: process },
                      null,
                      { label: "결과", value: output },
                    ] as ({ label: string; value: string } | null)[]
                  ).map((col, i) =>
                    col === null ? (
                      <ArrowRight
                        key={i}
                        size={11}
                        className="mx-auto mt-4 shrink-0 text-white/25"
                      />
                    ) : (
                      <div key={i} className="rounded-xl bg-white/[0.06] p-3">
                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-white/35">
                          {col.label}
                        </p>
                        <p className="text-xs leading-5 text-white/80">
                          {col.value}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
