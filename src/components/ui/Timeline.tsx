"use client";

import { motion } from "framer-motion";
import { CareerItem } from "@/data/career";

interface TimelineProps {
  items: CareerItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
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
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
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
              </div>
              <p className="text-sm font-bold text-gray-900">{item.role}</p>
              <p className="text-xs text-gray-500">{item.company}</p>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
