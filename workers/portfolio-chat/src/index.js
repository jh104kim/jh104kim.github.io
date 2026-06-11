import { PORTFOLIO_CONTEXT } from "./context.js";

// 허용 도메인 (CORS)
const ALLOWED_ORIGINS = [
  "https://jh104kim.github.io",
  "https://jh104kim-github-io.vercel.app",
  "http://localhost:3000",
];

const MODEL = "@cf/meta/llama-3.1-8b-instruct";
const MAX_HISTORY = 6;

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json; charset=utf-8",
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") ?? "";
    const headers = corsHeaders(origin);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "POST only" }), {
        status: 405,
        headers,
      });
    }

    try {
      const { messages = [] } = await request.json();

      // 최근 대화만 유지해 토큰 절약
      const history = messages
        .filter((m) => m?.role === "user" || m?.role === "assistant")
        .slice(-MAX_HISTORY)
        .map((m) => ({ role: m.role, content: String(m.content).slice(0, 1000) }));

      if (history.length === 0) {
        return new Response(JSON.stringify({ error: "empty messages" }), {
          status: 400,
          headers,
        });
      }

      const result = await env.AI.run(MODEL, {
        messages: [{ role: "system", content: PORTFOLIO_CONTEXT }, ...history],
        max_tokens: 512,
      });

      return new Response(JSON.stringify({ answer: result.response ?? "" }), {
        headers,
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "inference_failed", detail: String(error) }),
        { status: 500, headers },
      );
    }
  },
};
