"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { leadershipStories } from "@/data/leadership";

export default function Leadership() {
  return (
    <SectionWrapper id="leadership" className="bg-gray-50">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.22em] text-[#1428a0] uppercase">
            Leadership
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            조직 운영과 실행력을 성과로 연결한 리더십
          </h2>
          <p className="section-copy mt-4 text-base text-gray-600 leading-8">
            프로젝트(기술 성과)와 별개로, 일정/품질/조직 운영을 안정화한 리더십
            사례를 요약했습니다.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {leadershipStories.map((story) => (
          <div key={story.id} className="ui-card p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-gray-900">{story.title}</h3>
              <span className="rounded-full bg-[#1428a0]/8 px-3 py-1 text-xs font-semibold text-[#1428a0]">
                {story.period}
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-600 leading-7">
              <span className="font-semibold text-gray-900">범위</span>:{" "}
              {story.scope}
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-gray-400 uppercase">
                  Actions
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-600">
                  {story.actions.map((line) => (
                    <li key={`${story.id}-a-${line}`}>· {line}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-gray-400 uppercase">
                  Outcomes
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-600">
                  {story.outcomes.map((line) => (
                    <li key={`${story.id}-o-${line}`}>· {line}</li>
                  ))}
                </ul>
              </div>
            </div>

            {story.tags?.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {story.tags.map((tag) => (
                  <span
                    key={`${story.id}-${tag}`}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

