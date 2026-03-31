import SectionWrapper from "@/components/ui/SectionWrapper";

const currentTracks = [
  {
    title: "AI Crew 자동화",
    input: "반복 보고/정리/공유 업무",
    process: "요약, 분류, 자동 문서화 흐름 설계",
    output: "시간 절감과 반복성 축소",
  },
  {
    title: "GT-Suite 시뮬레이션 자동화",
    input: "해석 조건, 실행 스크립트, 결과 파일",
    process: "자동 실행 및 결과 정리 파이프라인",
    output: "엔지니어링 생산성 향상",
  },
  {
    title: "Portfolio Q&A 운영",
    input: "채용/협업/기술 질의",
    process: "포트폴리오 근거 기반 분류 응답",
    output: "핵심 성과 중심 커뮤니케이션",
  },
];

const roadmap = [
  "Surrogate Modeling으로 FEA/CFD 반복 비용 절감",
  "Bayesian Optimization으로 시뮬레이션 최소화 기반 최적화",
  "Reduced Order Modeling으로 디지털 트윈 실시간성 확보",
  "MLOps for Simulation으로 결과물을 운영 가능한 제품으로 전환",
];

export default function AiLab() {
  return (
    <SectionWrapper id="ai-lab" className="bg-gray-950 text-white">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.22em] text-blue-300 uppercase">
            AI Lab
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            엔지니어링 시뮬레이션을 AI 플랫폼으로 확장하는 실험실
          </h2>
          <p className="section-copy mt-4 text-base leading-8 text-white/70">
            이 섹션은 단순한 도구 사용 이력이 아니라, 압축기 개발 경험을
            바탕으로 Simulation + AI + Automation을 묶어내는 방향성을 보여주기
            위한 공간입니다.
          </p>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold">왜 차별화되는가</p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              대부분의 AI 포트폴리오가 모델 중심이라면, 이 포트폴리오는 실제
              제품 개발, 품질, 글로벌 고객 대응, 조직 운영이라는 현실 문제를 AI
              자동화와 직접 연결합니다.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {currentTracks.map((item) => (
            <div
              key={item.title}
              className="ui-card border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-lg font-semibold">{item.title}</p>
              <div className="mt-3 space-y-2 text-sm leading-7 text-white/75">
                <p>
                  <span className="font-semibold text-white">입력:</span> {item.input}
                </p>
                <p>
                  <span className="font-semibold text-white">처리:</span> {item.process}
                </p>
                <p>
                  <span className="font-semibold text-white">결과:</span> {item.output}
                </p>
              </div>
            </div>
          ))}

          <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-6">
            <p className="text-sm font-semibold text-blue-200">Forward Plan</p>
            <div className="mt-4 space-y-3">
              {roadmap.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                  <p className="text-sm leading-7 text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
