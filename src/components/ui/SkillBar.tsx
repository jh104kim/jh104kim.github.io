"use client";

import { motion } from "framer-motion";
import { Skill } from "@/data/skills";

interface SkillBarProps {
  skill: Skill;
  index?: number;
}

const STARS = [1, 2, 3, 4, 5];

export default function SkillBar({ skill, index = 0 }: SkillBarProps) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="flex flex-col gap-2 border-b border-gray-50 py-3 last:border-0 sm:flex-row sm:items-start sm:justify-between"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-extrabold leading-5 text-gray-900">
            {skill.name}
          </span>
        </div>
        <p className="mt-1 text-xs leading-5 text-gray-500">{skill.description}</p>
      </div>
      <div className="flex shrink-0 items-center gap-0.5 sm:ml-4">
        {STARS.map((star) => (
          <span
            key={star}
            className={`text-base ${
              star <= skill.level ? "text-[#1428a0]" : "text-gray-200"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    </motion.div>
  );
}
