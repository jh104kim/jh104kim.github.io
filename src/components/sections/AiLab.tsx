"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Zap, Cpu, GitBranch, LayoutDashboard, PieChart, ArrowRight, CheckCircle2, GitFork, ExternalLink } from "lucide-react";

// ── 데이터 ─────────────────────────────────────────────────────────────────

type Track = {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  input: string;
  process: string;
  output: string;
  tag: string;
  tagStyle: React.CSSProperties;
  githubUrl?: string;
  demoUrl?: string;
};

const currentTracks: Track[] = [
  {
    Icon: Zap,
    title: "AI Crew 자동화",
    input: "반복 보고/정리/공유 업무",
    process: "요약, 분류, 자동 문서화 흐름 설계",
    output: "시간 절감과 반복성 축소",
    tag: "운영 중",
    tagStyle: {
      background: "rgba(52,211,153,0.15)",
      color: "rgb(110,231,183)",
      border: "1px solid rgba(52,211,153,0.25)",
    },
  },
  {
    Icon: Cpu,
    title: "GT-Suite 시뮬레이션 자동화",
    input: "해석 조건, 실행 스크립트, 결과 파일",
    process: "자동 실행 및 결과 정리 파이프라인",
    output: "엔지니어링 생산성 향상",
    tag: "운영 중",
    tagStyle: {
      background: "rgba(52,211,153,0.15)",
      color: "rgb(110,231,183)",
      border: "1px solid rgba(52,211,153,0.25)",
    },
  },
  {
    Icon: GitBranch,
    title: "개발자 워크플로우 자동화",
    input: "git diff · PR 코드 변경",
    process: "Claude Code 기반 커밋 메시지·코드 리뷰 자동화",
    output: "개발 속도 및 코드 품질 향상",
    tag: "구축 중",
    tagStyle: {
      background: "rgba(96,165,250,0.15)",
      color: "rgb(147,197,253)",
      border: "1px solid rgba(96,165,250,0.25)",
    },
  },
  {
    Icon: LayoutDashboard,
    title: "Personal Life OS Dashboard",
    input: "건강·자산·투자·소비 데이터",
    process: "Next.js 15 + ECharts + Supabase Two-Zone 대시보드",
    output: "5초 내 삶 전체 상태 인지",
    tag: "개발 중",
    tagStyle: {
      background: "rgba(96,165,250,0.15)",
      color: "rgb(147,197,253)",
      border: "1px solid rgba(96,165,250,0.25)",
    },
    githubUrl: "https://github.com/jh104kim/dashboard-junghyoun",
    demoUrl: "https://sapporo-polar.vercel.app/",
  },
  {
    Icon: PieChart,
    title: "은퇴 연금 분석 웹앱",
    input: "9개 연금 상품 수령 데이터",
    process: "4개 절세 시나리오 비교 + 건보료 시뮬레이터",
    output: "세후 실수령액 최적화 전략",
    tag: "MVP 완성",
    tagStyle: {
      background: "rgba(52,211,153,0.15)",
      color: "rgb(110,231,183)",
      border: "1px solid rgba(52,211,153,0.25)",
    },
    githubUrl: "https://github.com/jh104kim/pension-private-after-retirements",
    demoUrl: "https://pension-private-after-retirements.vercel.app/",
  },
];

const roadmap = [
  { step: "01", text: "Surrogate Modeling으로 FEA/CFD 반복 비용 절감" },
  { step: "02", text: "Bayesian Optimization으로 시뮬레이션 최소화 기반 최적화" },
  { step: "03", text: "Reduced Order Modeling으로 디지털 트윈 실시간성 확보" },
  { step: "04", text: "MLOps for Simulation으로 결과물을 운영 가능한 제품으로 전환" },
];

const metrics = [
  { v: "5", l: "자동화 트랙" },
  { v: "4", l: "Forward Plan" },
  { v: "26년", l: "도메인 경험" },
];

// ── 재사용 인라인 스타일 상수 ─────────────────────────────────────────────

const CARD_STYLE: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: "16px",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
};

const INFO_BOX_STYLE: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: "16px",
};

const FORWARD_PLAN_STYLE: React.CSSProperties = {
  background: "rgba(59,130,246,0.07)",
  border: "1px solid rgba(99,102,241,0.2)",
  borderRadius: "16px",
};

const ICON_WRAP_STYLE: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  flexShrink: 0,
  borderRadius: "8px",
  background: "rgba(59,130,246,0.2)",
};

const PIPELINE_CELL_STYLE: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  borderRadius: "12px",
  padding: "12px",
};

const STEP_BADGE_STYLE: React.CSSProperties = {
  flexShrink: 0,
  borderRadius: "4px",
  background: "rgba(59,130,246,0.25)",
  color: "rgb(147,197,253)",
  fontFamily: "monospace",
  fontSize: "10px",
  fontWeight: 700,
  padding: "1px 6px",
  marginTop: "1px",
};

const LINK_BTN_STYLE: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  padding: "3px 10px",
  borderRadius: "6px",
  fontSize: "11px",
  fontWeight: 500,
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "rgba(255,255,255,0.65)",
  textDecoration: "none",
  transition: "background 0.15s",
};

// ── 컴포넌트 ───────────────────────────────────────────────────────────────

export default function AiLab() {
  return (
    <SectionWrapper
      id="ai-lab"
      className="relative overflow-hidden bg-gray-950 text-white"
    >
      {/* 배경 ambient glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
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

          {/* 왜 차별화되는가 */}
          <div className="mt-8 p-6" style={INFO_BOX_STYLE}>
            <p className="text-sm font-semibold text-white">왜 차별화되는가</p>
            <p className="mt-3 text-sm leading-7 text-white/60">
              대부분의 AI 포트폴리오가 모델 중심이라면, 이 포트폴리오는 실제
              제품 개발, 품질, 글로벌 고객 대응, 조직 운영이라는 현실 문제를
              AI 자동화와 직접 연결합니다.
            </p>
          </div>

          {/* Forward Plan */}
          <div className="mt-5 p-6" style={FORWARD_PLAN_STYLE}>
            <div className="mb-4 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-blue-300" />
              <p className="text-sm font-semibold text-blue-200">Forward Plan</p>
            </div>
            <div className="space-y-3">
              {roadmap.map(({ step, text }) => (
                <div key={step} className="flex items-start gap-3">
                  <span style={STEP_BADGE_STYLE}>{step}</span>
                  <p className="text-sm leading-6 text-white/65">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 오른쪽 컬럼 — 트랙 카드 ── */}
        <div className="space-y-4">
          {currentTracks.map(
            ({ Icon, title, input, process, output, tag, tagStyle, githubUrl, demoUrl }) => (
              <div key={title} className="p-5" style={CARD_STYLE}>
                {/* 카드 헤더 */}
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span style={ICON_WRAP_STYLE}>
                      <Icon size={15} className="text-blue-300" />
                    </span>
                    <p className="text-sm font-semibold text-white">{title}</p>
                  </div>
                  <span
                    className="shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                    style={tagStyle}
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
                      <div key={i} style={PIPELINE_CELL_STYLE}>
                        <p
                          className="mb-1 text-[10px] font-semibold uppercase tracking-wider"
                          style={{ color: "rgba(255,255,255,0.35)" }}
                        >
                          {col.label}
                        </p>
                        <p className="text-xs leading-5 text-white/80">
                          {col.value}
                        </p>
                      </div>
                    ),
                  )}
                </div>

                {/* 링크 버튼 (있을 때만) */}
                {(githubUrl || demoUrl) && (
                  <div className="mt-3 flex gap-2">
                    {githubUrl && (
                      <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={LINK_BTN_STYLE}>
                        <GitFork size={11} />
                        GitHub
                      </a>
                    )}
                    {demoUrl && (
                      <a href={demoUrl} target="_blank" rel="noopener noreferrer" style={LINK_BTN_STYLE}>
                        <ExternalLink size={11} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            ),
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
