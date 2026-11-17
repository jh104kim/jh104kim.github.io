"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard from "@/components/ui/ProjectCard";
import { categoryLabels, projects } from "@/data/projects";
import { useLang } from "@/lib/i18n";

const filters = ["all", "engineering", "quality", "leadership", "ai"] as const;

const metrics = [
  { label: "대표 프로젝트", shortLabel: "대표 PJT", value: String(projects.length) },
  { label: "최초 개발", shortLabel: "최초 개발", value: "2" },
  { label: "최대 기여도", shortLabel: "기여도", value: "100%" },
  { label: "글로벌 영업", shortLabel: "글로벌", value: "360억" },
];

export default function Projects() {
  const { lang, tr } = useLang();
  const [category, setCategory] = useState<(typeof filters)[number]>("all");
  const visibleProjects =
    category === "all" ? projects : projects.filter((project) => project.category === category);

  return (
    <SectionWrapper id="projects" className="bg-gray-50">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.22em] text-[#1428a0] uppercase">
            프로젝트
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            {tr(
              "Compressor engineering 성과를 사업 임팩트로 연결한 프로젝트들",
              "Projects that turned compressor engineering into business impact",
            )}
          </h2>
          <p className="section-copy mt-4 text-base text-gray-600 leading-8">
            {tr(
              "친환경 냉매 대응, BLDC 전환, 일본 고객 대응, 조직 리딩, AI 자동화까지 각 프로젝트를 카드 중심으로 정리했습니다.",
              "From eco-friendly refrigerants and the BLDC transition to Japanese accounts, team leadership, and AI automation — organized as project cards.",
            )}
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 md:max-w-[30rem] md:shrink-0">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="ui-card min-w-0 px-2 py-4 text-center sm:px-3"
            >
              <p className="kpi-value font-bold text-[#1428a0]">
                {metric.value}
              </p>
              <p
                className="mt-1 break-keep text-[clamp(0.62rem,1.2vw,0.75rem)] leading-tight text-gray-500"
                title={metric.label}
                aria-label={metric.label}
              >
                {metric.shortLabel}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        role="group"
        aria-label={tr("프로젝트 분야 필터", "Filter projects by category")}
        className="mt-10 flex flex-wrap gap-2"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={filter === category}
            aria-controls="project-list"
            onClick={() => setCategory(filter)}
            className="min-h-11 cursor-pointer rounded-full border border-border bg-card px-4 text-sm font-semibold text-card-foreground transition-colors hover:border-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 aria-pressed:border-blue-500 aria-pressed:bg-[#1428a0] aria-pressed:text-white"
          >
            {filter === "all" ? tr("전체", "All") : categoryLabels[filter][lang]}
          </button>
        ))}
      </div>
      <p role="status" className="sr-only">
        {tr(`프로젝트 ${visibleProjects.length}개 표시 중`, `Projects shown: ${visibleProjects.length}`)}
      </p>

      <div id="project-list" className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
