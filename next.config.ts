import type { NextConfig } from "next";
import path from "node:path";

/**
 * - Vercel: `VERCEL=1`이면 기본 Next 빌드(`.next`) → 루트 `/`가 정상 서빙됨.
 * - GitHub Pages·로컬 정적 미리보기: export로 `out/` 생성.
 */
const isVercel = Boolean(process.env.VERCEL);

const nextConfig: NextConfig = {
  ...(!isVercel
    ? {
        output: "export" as const,
        images: { unoptimized: true },
      }
    : {}),
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
