// src/data/portfolio-context.ts → workers/portfolio-chat/src/context.js 동기화
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const ts = fs.readFileSync(path.join(root, "src/data/portfolio-context.ts"), "utf8");
const m = ts.match(/export const portfolioContext = `([\s\S]*?)`;/);
if (!m) throw new Error("portfolioContext not found");
const out =
  "// 자동 생성: src/data/portfolio-context.ts 의 portfolioContext 복사본\n" +
  "// 원본 수정 후 scripts/sync-worker-context.js 실행으로 재생성\n" +
  "export const PORTFOLIO_CONTEXT = `" + m[1] + "`;\n";
fs.writeFileSync(path.join(root, "workers/portfolio-chat/src/context.js"), out);
console.log("synced workers/portfolio-chat/src/context.js");
