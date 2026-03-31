"use client";

import { motion } from "framer-motion";
import { Project, categoryColors, categoryLabels } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const colors = categoryColors[project.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <span
          className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}
        >
          {categoryLabels[project.category]}
        </span>
        <span className="text-xs text-gray-400 shrink-0">{project.year}</span>
      </div>

      {/* Title & Highlight */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-[#1428a0]">
          {project.highlight}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Footer */}
      <div className="pt-2 border-t border-gray-50 space-y-2">
        {/* Contribution bar */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-400">기여도</span>
            <span className="text-xs font-semibold text-gray-700">
              {project.contribution}%
            </span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#1428a0] rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${project.contribution}%` }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.08 + 0.2,
              }}
              viewport={{ once: true }}
            />
          </div>
        </div>

        {/* Role & period */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{project.role}</span>
          <span className="text-xs text-gray-400">
            {project.startDate} ~ {project.endDate}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
