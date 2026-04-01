"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { highlights, narrativeSummary } from "@/data/highlights";

export default function Impact() {
  return (
    <SectionWrapper id="impact" className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold tracking-[0.22em] text-[#1428a0] uppercase">
            Highlights
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            도메인 전문성과 AI 자동화를 하나의 강점으로 연결합니다
          </h2>
          <div className="section-copy mt-4 space-y-3 text-base leading-8 text-gray-600">
            {narrativeSummary.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-7 rounded-3xl border border-gray-100 bg-gray-50 p-6">
            <p className="text-sm font-semibold text-gray-900">
              30초 스캔 포인트
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-600">
              <li>· AC→BLDC 전환 및 친환경 냉매 대응 등 엔지니어링 임팩트</li>
              <li>· 글로벌 고객 기술 커뮤니케이션 기반의 사업 성과</li>
              <li>· 업무·시뮬레이션 자동화로 반복 비용 절감(확장 중)</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {highlights.map((item) => (
            <div key={item.id} className="ui-card p-6">
              <h3 className="text-base font-bold text-gray-900 leading-snug">
                {item.title}
              </h3>

              <div className="mt-4 space-y-3 text-sm leading-7 text-gray-600">
                <p>
                  <span className="font-semibold text-gray-900">S</span>:{" "}
                  {item.situation}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">A</span>:{" "}
                  {item.action}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">R</span>:{" "}
                  {item.result}
                </p>
              </div>

              {item.kpis?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.kpis.map((kpi) => (
                    <span
                      key={`${item.id}-${kpi}`}
                      className="rounded-full border border-[#1428a0]/20 bg-[#1428a0]/8 px-3 py-1.5 text-xs font-semibold text-[#1428a0]"
                    >
                      {kpi}
                    </span>
                  ))}
                </div>
              ) : null}

              {item.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={`${item.id}-${tag}`}
                      className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

