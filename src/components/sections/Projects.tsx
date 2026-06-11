"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { useLang } from "@/lib/i18n";

const metrics = [
  { label: "대표 프로젝트", value: "6" },
  { label: "최초 개발", value: "2" },
  { label: "최대 기여도", value: "100%" },
  { label: "글로벌 영업", value: "360억" },
];

export default function Projects() {
  const { tr } = useLang();

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

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="ui-card px-4 py-4 text-center"
            >
              <p className="kpi-value font-bold text-[#1428a0]">
                {metric.value}
              </p>
              <p className="mt-1 text-xs whitespace-nowrap text-gray-500">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
