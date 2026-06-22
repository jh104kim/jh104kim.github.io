"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  /** 카운트업 지속 시간 ms, 기본 1800 */
  duration?: number;
  className?: string;
}

/**
 * 뷰포트 진입 시 0 → target 카운트업.
 * once: true — 한 번 진입 후 재실행 없음.
 * easeOut cubic 보간.
 */
export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 1800,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(target);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOut cubic
      setCount(Math.round(target * eased));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
