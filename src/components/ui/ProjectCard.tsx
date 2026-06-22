"use client";

import Image from "next/image";
import { Project, categoryColors, categoryLabels } from "@/data/projects";
import { HoverCardMotion } from "@/components/ui/MotionPrimitives";
import { Lock, ExternalLink, GitFork } from "lucide-react";
import { useLang } from "@/lib/i18n";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { lang } = useLang();
  const colors = categoryColors[project.category];
  const isProtected = Boolean(project.privateAccessKey);
  const hasPublicLinks = !isProtected && (project.githubUrl || project.demoUrl);
  const privateHref = project.privateAccessKey
    ? `/private-access?app=${project.privateAccessKey}`
    : undefined;

  return (
    <HoverCardMotion className="ui-card group flex h-full flex-col gap-4 overflow-hidden p-6">
      <div className="relative -mx-6 -mt-6 overflow-hidden bg-gray-100">
        <Image
          src={`/images/projects/${project.id}.jpg`}
          alt={`${lang === "en" ? project.titleEn : project.title} representative visual`}
          width={1200}
          height={800}
          sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, 100vw"
          priority={index < 3}
          className="h-40 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] sm:h-44"
        />
        <div className="absolute inset-0 bg-[#1428a0]/0 transition-colors duration-500 group-hover:bg-[#1428a0]/8" />
      </div>

      {/* 헤더: 카테고리 배지 + Private 배지 + 연도 */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}
          >
            {categoryLabels[project.category]}
          </span>
          {project.isPrivate && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full border bg-gray-100 text-gray-500 border-gray-200">
              <Lock size={10} />
              Private
            </span>
          )}
        </div>
        <span className="text-xs text-gray-400 shrink-0">{project.year}</span>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1">
          {lang === "en" ? project.titleEn : project.title}
        </h3>
        <p className="rounded-xl border-l-4 border-[#ff5a5f] bg-[#ff5a5f]/5 px-3 py-2 text-sm font-extrabold leading-6 text-[#1428a0] transition-colors duration-300 group-hover:bg-[#ff5a5f]/8">
          {project.achievement}
        </p>
        <p className="text-sm leading-6 text-gray-600">{project.summary}</p>
      </div>

      <div className="space-y-2 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4">
        {project.proofPoints.map((point) => (
          <p
            key={`${project.id}-${point.keyword}`}
            className="text-sm leading-6 text-gray-700 transition-transform duration-200 hover:translate-x-1"
          >
            <span className="mr-2 inline-flex h-1.5 w-1.5 rounded-full bg-[#1428a0]" />
            <span className="font-extrabold text-[#1428a0]">{point.keyword}</span>
            <span className="mx-1 text-gray-300">|</span>
            <span>{point.text}</span>
          </p>
        ))}
      </div>

      {project.domainLink && (
        <div className="rounded-xl border border-[#1428a0]/10 bg-[#1428a0]/5 px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1428a0]/60">
            엔지니어링 연결
          </p>
          <p className="mt-1 text-xs leading-5 text-[#1428a0]">
            {project.domainLink}
          </p>
        </div>
      )}

      <div className="rounded-xl border border-[#1428a0]/10 bg-white px-3 py-3">
        <p className="text-xs text-gray-400">결과 / 숫자</p>
        <p className="mt-1 text-sm font-extrabold text-gray-900">{project.impact}</p>
      </div>

      <div className="pt-2 border-t border-gray-50 space-y-2">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-400">기여도 (담당 파트 기준)</span>
            <span className="text-xs font-semibold text-gray-700">
              {project.contribution}%
            </span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-[#1428a0] transition-[width,background-color] duration-700 ease-out group-hover:bg-[#ff5a5f]"
              style={{ width: `${project.contribution}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{project.role}</span>
          <span className="text-xs text-gray-400">
            {project.startDate} ~ {project.endDate}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={`${project.id}-${tech}`}
              className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-medium text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {isProtected && privateHref && (
          <div className="pt-2">
            <a
              href={privateHref}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#1428a0]/20 bg-[#1428a0] px-3 py-1.5 text-xs font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0f207d]"
            >
              <Lock size={12} />
              인증 후 접근
            </a>
          </div>
        )}

        {/* GitHub / Demo 링크 버튼 */}
        {hasPublicLinks && (
          <div className="flex gap-2 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50"
              >
                <GitFork size={12} />
                GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#1428a0]/20 bg-[#1428a0]/5 px-3 py-1.5 text-xs font-medium text-[#1428a0] transition-all hover:-translate-y-0.5 hover:bg-[#1428a0]/10"
              >
                <ExternalLink size={12} />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>

      <span className="sr-only">index: {index}</span>
    </HoverCardMotion>
  );
}
