import OpenAI from "openai";
import { NextResponse } from "next/server";
import {
  chatResponseRules,
  portfolioContext,
  portfolioKnowledge,
} from "@/data/portfolio-context";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function classifyQuestion(question: string) {
  const normalized = question.toLowerCase();

  if (
    normalized.includes("bldc") ||
    normalized.includes("프로젝트") ||
    normalized.includes("성과") ||
    normalized.includes("개발")
  ) {
    return "project";
  }

  if (
    normalized.includes("연구") ||
    normalized.includes("논문") ||
    normalized.includes("fsi") ||
    normalized.includes("tribology")
  ) {
    return "research";
  }

  if (
    normalized.includes("ai") ||
    normalized.includes("자동화") ||
    normalized.includes("비전") ||
    normalized.includes("lab")
  ) {
    return "ai";
  }

  if (
    normalized.includes("연락") ||
    normalized.includes("메일") ||
    normalized.includes("contact")
  ) {
    return "contact";
  }

  return "summary";
}

function localPortfolioAnswer(question: string) {
  const questionType = classifyQuestion(question);

  if (questionType === "project") {
    return "대표 프로젝트는 R600a BLDC 최초 개발과 일본 Sales 360억 달성입니다. 특히 BLDC 전환 프로젝트는 100% 기여도로 수행해 AC 기반 시스템을 차세대 플랫폼으로 확장한 사례입니다. 엔지니어링 깊이와 사업 성과를 동시에 증명한 점이 핵심 강점입니다.";
  }

  if (questionType === "research") {
    return "연구 축은 Valve Dynamics, Tribology, GT-Suite 기반 System Integration으로 이어집니다. GIST 졸업논문부터 Purdue, ANSYS, ATIS까지 총 7편의 발표 이력을 통해 해석 역량을 지속적으로 확장해 왔습니다. 실무 프로젝트에서 의사결정 근거를 데이터로 연결하는 능력이 강점입니다.";
  }

  if (questionType === "ai") {
    return "AI Lab은 반복 보고·정리 업무와 시뮬레이션 실행 흐름을 자동화하는 문제를 해결합니다. 현재는 입력 데이터 정리, 자동 실행, 결과 문서화 파이프라인을 중심으로 적용 중입니다. 목표는 Simulation + AI + Automation을 통해 엔지니어링 생산성을 높이는 것입니다.";
  }

  if (questionType === "contact") {
    return `연락은 ${portfolioKnowledge.contact.email}로 가능합니다. 세미나, 기술 협업, 채용 자문, AI 자동화 프로젝트 문의를 받고 있습니다. 추가 자료는 Notion에서 확인할 수 있습니다.`;
  }

  return "김정현님은 26년간 압축기 개발, 품질, 영업, 조직 리딩을 경험한 뒤 현재 AI Crew를 리딩하고 있습니다. 핵심 성과는 R600a BLDC 최초 개발, 일본 Sales 360억, 그리고 GT-Suite 기반 자동화 확장입니다. 필요하신 주제를 말씀해 주시면 프로젝트, 연구, AI Lab 중 해당 영역 중심으로 자세히 안내드리겠습니다.";
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
      max_tokens: 420,
      messages: [
        {
          role: "system",
          content: `${portfolioContext}\n\n응답 규칙:\n- 톤: ${chatResponseRules.tone}\n- 문장 수: 최대 ${chatResponseRules.maxSentences}문장\n- 범위: ${chatResponseRules.scope}\n- 예외: ${chatResponseRules.fallback}`,
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
          "현재 AI 응답이 제한되어 포트폴리오 요약으로 안내합니다. 질문을 다시 보내시면 해당 영역 중심으로 답변드리겠습니다.",
      },
      { status: 200 },
    );
  }
}
