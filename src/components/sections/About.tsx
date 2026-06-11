"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillBar from "@/components/ui/SkillBar";
import Timeline from "@/components/ui/Timeline";
import {
  career,
  certifications,
  education,
  languages as languageSkills,
} from "@/data/career";
import { categoryLabels, skills } from "@/data/skills";
import { useLang } from "@/lib/i18n";

export default function About() {
  const { tr } = useLang();
  const groupedSkills = Object.entries(categoryLabels).map(([key, label]) => ({
    label,
    items: skills.filter((skill) => skill.category === key),
  }));

  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-[#1428a0] uppercase">
              About
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              {tr(
                "엔지니어링과 자동화를 하나의 가치로 연결합니다",
                "Linking engineering and automation into a single value",
              )}
            </h2>
            <div className="section-copy mt-5 space-y-3 text-base leading-8 text-gray-600">
              <p>
                압축기 개발, 품질, 영업, 조직 리딩까지 이어지는 실무 경험으로 제품과
                조직의 문제를 함께 해결해 왔습니다.
              </p>
              <p>
                FSI와 GT-Suite 기반의 해석 역량, 국제 발표 경험을 통해 설계 판단의
                근거를 데이터로 구조화해 왔습니다.
              </p>
              <p>
                최근에는 AI Crew 리딩을 통해 반복 업무와 시뮬레이션 흐름을 자동화해
                엔지니어링 생산성을 확장하고 있습니다.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6">
              <p className="text-sm font-semibold text-gray-900">교육</p>
              <div className="mt-4 space-y-4">
                {education.map((item) => (
                  <div key={`${item.school}-${item.period}`}>
                    <p className="text-xs text-gray-400">{item.period}</p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      {item.school}
                    </p>
                    <p className="text-sm text-gray-600">{item.degree}</p>
                    {item.note ? (
                      <p className="mt-1 text-xs text-gray-500">{item.note}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6">
              <p className="text-sm font-semibold text-gray-900">
                자격 및 인증
              </p>
              <div className="mt-4 space-y-3">
                {certifications.map((item) => (
                  <p key={item} className="text-sm text-gray-600 leading-6">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="ui-card p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-gray-900">언어 역량</p>
                <p className="mt-1 text-sm text-gray-500">
                  글로벌 협업과 기술 커뮤니케이션 경험 기반
                </p>
              </div>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {languageSkills.map((language) => (
                <div
                  key={language.name}
                  className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4"
                >
                  <p className="text-sm font-semibold text-gray-900">
                    {language.name}
                  </p>
                  <p className="mt-2 text-[#1428a0]">
                    {"★".repeat(language.level)}
                    <span className="text-gray-200">
                      {"★".repeat(5 - language.level)}
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{language.note}</p>
                  {language.detail && (
                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      {language.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="ui-card p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Career Timeline
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  개발, 영업, 품질, 리더십, AI 자동화까지 이어진 26년 경력
                </p>
              </div>
              <div className="rounded-full bg-[#1428a0]/8 px-3 py-1 text-xs font-semibold text-[#1428a0]">
                1999 - 현재
              </div>
            </div>
            <div className="mt-6">
              <Timeline items={career} />
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-gray-900">
              핵심 기술 스택
            </p>
            <div className="mt-6 space-y-6">
              {groupedSkills.map((group) => (
                <div key={group.label}>
                  <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-gray-400 uppercase">
                    {group.label}
                  </p>
                  <div>
                    {group.items.map((skill, index) => (
                      <SkillBar key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
