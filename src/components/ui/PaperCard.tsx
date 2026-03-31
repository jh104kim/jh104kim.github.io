"use client";

import { motion } from "framer-motion";
import { Paper } from "@/data/research";
import { ExternalLink } from "lucide-react";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      viewport={{ once: true }}
      className={`bg-white border rounded-xl p-5 ${
        paper.status === "upcoming"
          ? "border-[#1428a0]/30 bg-blue-50/30"
          : "border-gray-100"
      } hover:shadow-md transition-shadow duration-200`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
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
          </div>

          <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1">
            {paper.title}
          </h3>

          <div className="flex items-center gap-2 flex-wrap mt-2">
            <span className="text-xs text-gray-500">{paper.venue}</span>
            <span className="text-xs text-gray-300">·</span>
            <span className="text-xs text-gray-500">{paper.country}</span>
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
    </motion.div>
  );
}
