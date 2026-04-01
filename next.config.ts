import type { NextConfig } from "next";
import path from "node:path";

/** GitHub Pages 및 로컬 `next build` 모두 동일한 정적 산출물(`out/`)을 사용합니다. */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
