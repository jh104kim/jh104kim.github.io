"use client";

import { useEffect, useState } from "react";

/**
 * 스크롤 진행률을 페이지 상단 3px 그라디언트 바로 표시하는 디자인 키 포인트.
 * z-[70]으로 Navbar(z-50)보다 위에 렌더링된다.
 */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      setPct(height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[70] h-[3px] w-full"
    >
      <div
        className="h-full bg-gradient-to-r from-[#1428a0] via-[#2d6fff] to-[#60a5fa]"
        style={{ width: `${pct}%`, transition: "width 80ms linear" }}
      />
    </div>
  );
}
