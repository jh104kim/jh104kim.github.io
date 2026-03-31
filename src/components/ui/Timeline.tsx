"use client";

import { motion } from "framer-motion";
import { CareerItem } from "@/data/career";

interface TimelineProps {
  items: CareerItem[];
}

const roleColorMap: Record<NonNullable<CareerItem["roleType"]>, string> = {
  engineering: "bg-blue-100 text-blue-700",
  quality: "bg-orange-100 text-orange-700",
  sales: "bg-emerald-100 text-emerald-700",
  ai: "bg-indigo-100 text-indigo-700",
  leadership: "bg-purple-100 text-purple-700",
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-100" />

      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            viewport={{ once: true }}
            className="relative pl-12"
          >
            {/* Dot */}
            <div
              className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 -translate-x-1/2 ${
                item.isCurrent
                  ? "bg-[#1428a0] border-[#1428a0]"
                  : "bg-white border-gray-300"
              }`}
            />

            {/* Content */}
            <div className="group">
              <div className="mb-0.5 flex flex-wrap items-center gap-2">
                <span className="text-xs text-gray-400">{item.period}</span>
                {item.highlight && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      item.isCurrent
                        ? "bg-[#1428a0]/10 text-[#1428a0]"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.highlight}
                  </span>
                )}
                {item.roleType ? (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${roleColorMap[item.roleType]}`}
                  >
                    {item.roleType}
                  </span>
                ) : null}
              </div>
              <p className="text-sm font-bold text-gray-900">{item.role}</p>
              <p className="text-xs text-gray-500">{item.company}</p>
              <p className="mt-1 text-sm font-medium text-gray-700">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
