import OpenAI from "openai";
import { NextResponse } from "next/server";
import { portfolioContext } from "@/data/portfolio-context";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function localPortfolioAnswer(question: string) {
  const normalized = question.toLowerCase();

  if (normalized.includes("bldc")) {
    return "김정현님은 2007년부터 2008년까지 R600a BLDC 압축기를 최초 개발했고, AC 기반 시스템을 BLDC 방식으로 전환하는 핵심 프로젝트에 100% 기여했습니다. 이 경험은 고효율 냉매 대응과 차세대 압축기 플랫폼 구축 역량을 직접 보여줍니다.";
  }

  if (
    normalized.includes("ai") ||
    normalized.includes("자동화") ||
    normalized.includes("gt-suite")
  ) {
    return "현재 삼성전자 DA사업부에서 AI Crew Leader로 활동하며 업무 자동화와 GT-Suite 시뮬레이션 자동화를 추진하고 있습니다. 단순한 AI 활용을 넘어서 엔지니어링 실무 프로세스를 효율화하는 방향으로 적용 중인 점이 강점입니다.";
  }

  if (
    normalized.includes("논문") ||
    normalized.includes("연구") ||
    normalized.includes("fsi")
  ) {
    return "연구 측면에서는 GIST 졸업논문을 시작으로 Purdue, ANSYS 학회 등에서 총 7편의 발표 이력을 보유하고 있습니다. FSI, journal bearing, fatigue, GT-Suite 기반 1D simulation 등 해석 중심의 연구 경험이 강점입니다.";
  }

  if (
    normalized.includes("영업") ||
    normalized.includes("sales") ||
    normalized.includes("일본")
  ) {
    return "2015년부터 2018년까지 일본 Sales Engineer로 활동하며 도시바 등 주요 고객 대응을 수행했고, 일본 Sales 360억 달성 성과를 냈습니다. 기술 이해와 고객 대응 역량이 함께 검증된 경력입니다.";
  }

  if (
    normalized.includes("연락") ||
    normalized.includes("메일") ||
    normalized.includes("contact")
  ) {
    return "연락은 jh104.kim@gmail.com으로 가능합니다. 포트폴리오 추가 자료는 Notion 링크를 통해 확인할 수 있습니다.";
  }

  return "김정현님은 26년간 삼성전자 DA사업부에서 압축기 개발, 품질, 영업, 조직 리딩을 경험했고 현재는 AI Crew Leader로 자동화 과제를 추진하고 있습니다. 질문을 조금 더 구체화해 주시면 BLDC 개발, 글로벌 실적, 연구, AI 자동화 중 원하는 주제로 더 정확히 답변드릴 수 있습니다.";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { messages?: ChatMessage[] };
    const messages = body.messages ?? [];
    const latestUserMessage = [...messages]
      .reverse()
      .find((message) => message.role === "user");
    const question = latestUserMessage?.content?.trim();

    if (!question) {
      return NextResponse.json(
        { error: "질문이 비어 있습니다." },
        { status: 400 },
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        answer: localPortfolioAnswer(question),
        source: "local",
      });
    }

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: portfolioContext,
        },
        ...messages.slice(-6).map((message) => ({
          role: message.role,
          content: message.content,
        })),
      ],
    });

    const answer =
      response.choices[0]?.message?.content?.trim() ||
      localPortfolioAnswer(question);

    return NextResponse.json({ answer, source: "openai" });
  } catch {
    return NextResponse.json(
      {
        answer:
          "응답 생성 중 오류가 발생해 로컬 포트폴리오 응답으로 전환했습니다. 질문을 다시 보내시면 계속 도와드릴 수 있습니다.",
      },
      { status: 200 },
    );
  }
}
