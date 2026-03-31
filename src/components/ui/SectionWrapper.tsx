"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FadeInSection } from "@/components/ui/MotionPrimitives";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  className,
}: SectionWrapperProps) {
  return (
    <FadeInSection
      id={id}
      className={cn("py-24 px-4 md:px-8 lg:px-16", className)}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </FadeInSection>
  );
}

export function SectionTitle({
  children,
  sub,
}: {
  children: ReactNode;
  sub?: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
        {children}
      </h2>
      {sub && <p className="mt-2 text-gray-500">{sub}</p>}
      <div className="mt-4 w-12 h-1 rounded-full bg-[#1428a0]" />
    </div>
  );
}
