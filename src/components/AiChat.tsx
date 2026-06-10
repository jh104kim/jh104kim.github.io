"use client";

import { FormEvent, useMemo, useState } from "react";
import { Bot, MessageSquare, Send, Sparkles, X } from "lucide-react";
import { profile } from "@/data/profile";
import { localPortfolioAnswer } from "@/lib/portfolio-chat-local";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const starterQuestions = [
  "이 포트폴리오의 핵심 강점은?",
  "압축기 개발 프로젝트 중 대표 성과는?",
  "연구 이력은 어떤 방향으로 이어졌나?",
  "AI Lab은 어떤 문제를 풀려고 하나?",
];

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "안녕하세요. 김정현님의 포트폴리오 AI 어시스턴트입니다. BLDC 개발, AI 자동화, 연구 이력 등 무엇이든 물어보세요.",
    },
  ]);

  const canSubmit = input.trim().length > 0 && !loading;
  const visibleMessages = useMemo(() => messages.slice(-8), [messages]);

  async function handleSubmit(
    event?: FormEvent<HTMLFormElement>,
    question?: string,
  ) {
    event?.preventDefault();

    const prompt = (question ?? input).trim();
    if (!prompt || loading) {
      return;
    }

    const nextMessages = [
      ...messages,
      { role: "user" as const, content: prompt },
    ];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      await new Promise((r) => setTimeout(r, 60));
      const answer = localPortfolioAnswer(prompt);
      setMessages([...nextMessages, { role: "assistant", content: answer }]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "현재 AI 응답이 제한되어 포트폴리오 요약 중심으로 안내합니다. 잠시 후 다시 시도해주세요.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white/90 px-4 py-3 text-sm font-semibold text-gray-700 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
        aria-label="포트폴리오 AI 채팅 열기"
      >
        <Bot size={18} />
        AI Q&A (선택)
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-[2px]">
          <div className="absolute bottom-0 right-0 flex h-full w-full items-end justify-end p-4 md:p-6">
            <div className="flex h-[75vh] w-full max-w-md flex-col overflow-hidden rounded-[2rem] border border-white/40 bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1428a0]/10 text-[#1428a0]">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Portfolio AI Chat
                    </p>
                    <p className="text-xs text-gray-500">
                      {profile.name} · 포트폴리오 기반 정적 응답
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100"
                  aria-label="채팅 닫기"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="border-b border-gray-100 px-5 py-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                  <MessageSquare size={14} />
                  Sample Questions
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {starterQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => void handleSubmit(undefined, question)}
                      className="rounded-full border border-gray-200 px-3 py-2 text-left text-xs text-gray-600 transition hover:border-[#1428a0]/30 hover:bg-[#1428a0]/5 hover:text-[#1428a0]"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 px-4 py-5">
                {visibleMessages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}-${message.content.slice(0, 20)}`}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[88%] rounded-3xl px-4 py-3 text-sm leading-7 shadow-sm ${
                        message.role === "user"
                          ? "bg-[#1428a0] text-white"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                {loading ? (
                  <div className="flex justify-start">
                    <div className="rounded-3xl bg-white px-4 py-3 text-sm text-gray-500 shadow-sm">
                      답변 생성 중... 포트폴리오 근거를 확인하고 있습니다.
                    </div>
                  </div>
                ) : null}
              </div>

              <form
                onSubmit={(event) => void handleSubmit(event)}
                className="border-t border-gray-100 p-4"
              >
                <div className="flex items-end gap-3 rounded-[1.5rem] border border-gray-200 bg-white px-4 py-3 focus-within:border-[#1428a0]">
                  <textarea
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    rows={2}
                    placeholder="포트폴리오에 대해 질문해보세요"
                    className="max-h-32 min-h-[48px] flex-1 resize-none bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1428a0] text-white transition disabled:cursor-not-allowed disabled:bg-gray-300"
                    aria-label="메시지 전송"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
