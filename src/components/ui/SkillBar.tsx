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
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-800 truncate">
            {skill.name}
          </span>
        </div>
        <p className="text-xs text-gray-400 mt-0.5">{skill.description}</p>
      </div>
      <div className="flex items-center gap-0.5 ml-4 shrink-0">
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
