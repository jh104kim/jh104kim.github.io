"use client";

import { Paper } from "@/data/research";
import { ExternalLink } from "lucide-react";
import { HoverCardMotion } from "@/components/ui/MotionPrimitives";

interface PaperCardProps {
  paper: Paper;
  index?: number;
}

const typeLabels: Record<Paper["type"], string> = {
  journal: "저널",
  conference: "학회",
  thesis: "논문",
};

export default function PaperCard({ paper, index = 0 }: PaperCardProps) {
  const hostLabel = paper.venue.replace(" (IIR)", "").replace("학회", " Forum");

  return (
    <HoverCardMotion
      className={`ui-card p-5 ${paper.status === "upcoming" ? "border-[#1428a0]/30 bg-blue-50/30" : ""}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <span className="inline-flex rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-gray-500 uppercase">
            {hostLabel}
          </span>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                paper.status === "upcoming"
                  ? "bg-[#1428a0]/10 text-[#1428a0]"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {paper.status === "upcoming" ? "발표 예정" : "발표 완료"}
            </span>
            <span className="text-xs bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full border border-gray-100">
              {typeLabels[paper.type]}
            </span>
            <span className="text-xs text-gray-400">{paper.date}</span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs text-gray-500">
              {paper.country}
            </span>
          </div>

          <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1">
            {paper.title}
          </h3>

          {paper.contribution && (
            <p className="mt-1.5 text-xs leading-5 text-gray-500">
              {paper.contribution}
            </p>
          )}

          <div className="mt-2 flex items-center gap-2 flex-wrap">
            <span className="text-xs text-gray-500">{paper.venue}</span>
          </div>
        </div>

        {paper.url && (
          <a
            href={paper.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-gray-400 hover:text-[#1428a0] transition-colors"
            aria-label="논문 링크 열기"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </HoverCardMotion>
  );
}
