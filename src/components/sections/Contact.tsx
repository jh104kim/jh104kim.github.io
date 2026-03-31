import SectionWrapper from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    description: "프로젝트, 협업, 채용 관련 문의",
  },
  {
    label: "Notion",
    value: "Portfolio Notes",
    href: profile.notion,
    description: "추가 포트폴리오 자료와 정리 문서",
  },
  {
    label: "Location",
    value: profile.location,
    href: undefined,
    description: "Samsung Electronics DA Division",
  },
];

const inquiryTypes = [
  "기술 협업",
  "발표/세미나",
  "채용/자문",
  "AI 자동화 프로젝트",
];

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      className="bg-gradient-to-b from-white to-gray-50"
    >
      <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-[#1428a0] uppercase">
              Contact
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              기술 대화가 필요한 곳에 바로 연결됩니다
            </h2>
            <p className="section-copy mt-4 text-base text-gray-600 leading-8">
              압축기 엔지니어링, AI 자동화, 시뮬레이션 기반 개발 협업에 대해
              이야기할 수 있습니다. 채용, 발표, 기술 교류 제안 모두 환영합니다.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {inquiryTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-[#1428a0]/20 bg-[#1428a0]/8 px-3 py-1.5 text-xs font-semibold text-[#1428a0]"
                >
                  {type}
                </span>
              ))}
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex rounded-xl bg-[#1428a0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f207d]"
            >
              메일 보내기
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {contactLinks.map((item) => {
              const content = (
                <div className="ui-card h-full bg-gray-50 p-6">
                  <p className="text-xs font-semibold tracking-[0.18em] text-gray-400 uppercase">
                    {item.label}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-gray-900 break-words">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>
              );

              if (!item.href) {
                return <div key={item.label}>{content}</div>;
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block transition hover:-translate-y-1"
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
