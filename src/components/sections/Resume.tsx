"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";
import { Download, Mail, ExternalLink } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Resume() {
  const hasLinkedIn = profile.linkedin.trim().length > 0;
  const { tr } = useLang();

  return (
    <SectionWrapper id="resume" className="bg-white">
      <div className="rounded-[2rem] border border-gray-100 bg-gradient-to-b from-gray-50 to-white p-8 shadow-sm md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-[#1428a0] uppercase">
              Resume
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              {tr(
                "이력서/요약 자료를 한 번에 확인할 수 있습니다",
                "Resume and summary materials in one place",
              )}
            </h2>
            <p className="section-copy mt-4 text-base text-gray-600 leading-8">
              {tr(
                "채용 담당자 관점에서 빠르게 검토할 수 있도록 PDF 다운로드와 핵심 요약을 제공합니다. 협업 문의는 이메일로 바로 연결됩니다.",
                "A PDF download and key summary for quick recruiter review. Collaboration inquiries go straight to email.",
              )}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.resumePdfPath}
                className="inline-flex items-center gap-2 rounded-xl bg-[#1428a0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f207d]"
                download
              >
                <Download size={18} />
                Resume PDF 다운로드
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                <Mail size={18} />
                이메일로 연락
              </a>
              {hasLinkedIn ? (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  <ExternalLink size={18} />
                  LinkedIn
                </a>
              ) : null}
            </div>
          </div>

          <div className="ui-card bg-white p-7">
            <p className="text-sm font-semibold text-gray-900">
              1페이지 요약(채용/협업)
            </p>
            <div className="mt-4 space-y-4 text-sm leading-7 text-gray-600">
              <p>
                <span className="font-semibold text-gray-900">핵심</span>:{" "}
                압축기/시뮬레이션 도메인 문제를 정의하고, 자동화·AI로 반복 비용을
                줄여 실행 속도를 높입니다.
              </p>
              <p>
                <span className="font-semibold text-gray-900">강점</span>:{" "}
                엔지니어링(설계/해석)·품질·영업·조직 리딩 경험을 바탕으로
                기술/사업 관점을 함께 연결합니다.
              </p>
              <p>
                <span className="font-semibold text-gray-900">현재</span>:{" "}
                AI Crew 리딩으로 보고/정리/시뮬레이션 실행 흐름을 자동화하는
                파이프라인을 확장 중입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

