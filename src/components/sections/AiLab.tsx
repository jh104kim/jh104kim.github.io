"use client";

import { Cpu, GitBranch, Zap } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SurrogateDemo from "@/components/ui/SurrogateDemo";
import { automationCases } from "@/data/ai-lab";
import { useLang } from "@/lib/i18n";

const caseIcons = {
  simulation: Cpu,
  documents: Zap,
  development: GitBranch,
};

export default function AiLab() {
  const { tr } = useLang();

  return (
    <SectionWrapper id="ai-lab" className="relative overflow-hidden bg-gray-950 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
          AI Lab
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          {tr("시뮬레이션·업무 자동화 사례", "Simulation and Workflow Automation")}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
          {tr(
            "GT-Suite 해석 실행과 결과 보고, AI Crew의 반복 문서 업무를 자동화한 사례입니다.",
            "Examples of automating GT-Suite simulations and reporting, and recurring document work for AI Crew.",
          )}
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {automationCases.map(({ id, title, work, outcome, operating }) => {
            const Icon = caseIcons[id];
            return (
              <article key={id} className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/20">
                    <Icon aria-hidden="true" size={16} className="text-blue-300" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold leading-5">{tr(title[0], title[1])}</h3>
                    <p className={operating ? "mt-1 text-xs text-emerald-300" : "mt-1 text-xs text-blue-300"}>
                      {operating ? tr("운영 중", "In use") : tr("구축 중", "In development")}
                    </p>
                  </div>
                </div>
                <dl className="mt-4 grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-2 text-sm leading-6">
                  <dt className="font-semibold">{tr("수행", "Work")}</dt>
                  <dd className="text-white/70">{tr(work[0], work[1])}</dd>
                  <dt className="font-semibold">
                    {operating ? tr("결과", "Result") : tr("목표", "Goal")}
                  </dt>
                  <dd className="text-white/70">{tr(outcome[0], outcome[1])}</dd>
                </dl>
              </article>
            );
          })}
        </div>

        <div className="mt-8">
          <SurrogateDemo />
        </div>
      </div>
    </SectionWrapper>
  );
}
