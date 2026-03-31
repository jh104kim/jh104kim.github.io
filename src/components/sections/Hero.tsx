"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { ChevronDown } from "lucide-react";

const stats = [
  { value: "26년", label: "엔지니어링 경력" },
  { value: "7편", label: "국제 논문" },
  { value: "360억", label: "일본 Sales 달성" },
  { value: "AI", label: "Crew Leader" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Background - radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(20,40,160,0.08),transparent)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(20,40,160,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(20,40,160,0.05) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Blue accent dots */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#1428a0]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2d6fff]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-medium text-[#1428a0] bg-[#1428a0]/8 rounded-full border border-[#1428a0]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1428a0] animate-pulse" />
            Samsung Electronics DA Division · AI Crew Leader
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-7xl md:text-9xl font-extrabold text-gray-900 mb-4 tracking-tight"
        >
          김정현
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-xl md:text-2xl font-light text-gray-600 mb-2"
        >
          Compressor Engineering + AI Automation
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base text-gray-400 mb-10"
        >
          {profile.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-3 justify-center flex-wrap mb-16"
        >
          <a
            href="#projects"
            className="px-7 py-3 bg-[#1428a0] text-white rounded-xl font-semibold text-sm hover:bg-[#1428a0]/90 transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-lg hover:shadow-[#1428a0]/20"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-gray-200 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 hover:border-gray-300 transition-all hover:-translate-y-0.5"
          >
            연락하기
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl px-4 py-4 shadow-sm"
            >
              <div className="text-2xl font-extrabold text-[#1428a0]">
                {value}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 text-sm text-gray-400 italic"
        >
          &ldquo;{profile.quote}&rdquo;
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="text-gray-300" size={24} />
      </motion.div>
    </section>
  );
}
