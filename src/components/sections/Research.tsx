import SectionWrapper from "@/components/ui/SectionWrapper";
import PaperCard from "@/components/ui/PaperCard";
import { papers } from "@/data/research";

export default function Research() {
  const published = papers.filter(
    (paper) => paper.status === "published",
  ).length;
  const upcoming = papers.length - published;

  return (
    <SectionWrapper id="research" className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold tracking-[0.22em] text-[#1428a0] uppercase">
            Research
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            FSI, GT-Suite, 시스템 해석을 바탕으로 축적한 연구 자산
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-8">
            GIST 연구부터 Purdue, ANSYS, ATIS까지 이어지는 발표 이력은
            시뮬레이션 역량이 현업 프로젝트와 직접 연결돼 있다는 점을
            보여줍니다.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6">
              <p className="text-xs tracking-[0.18em] text-gray-400 uppercase">
                Published
              </p>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                {published}
              </p>
              <p className="mt-1 text-sm text-gray-500">완료된 발표 및 논문</p>
            </div>
            <div className="rounded-3xl border border-[#1428a0]/15 bg-[#1428a0]/5 p-6">
              <p className="text-xs tracking-[0.18em] text-[#1428a0] uppercase">
                2026 Pipeline
              </p>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                {upcoming}
              </p>
              <p className="mt-1 text-sm text-gray-500">예정된 학회 발표</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {papers.map((paper, index) => (
            <PaperCard key={paper.id} paper={paper} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
