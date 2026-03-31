"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { ChevronDown } from "lucide-react";

const stats = [
  { value: "26년", label: "경력" },
  { value: "7편", label: "발표" },
  { value: "360억", label: "Sales" },
  { value: "AI Crew", label: "리딩" },
];

const techGrid = [
  "Compressor",
  "BLDC",
  "FSI",
  "GT-Suite",
  "Automation",
  "RAG",
  "Purdue",
  "Quality",
  "Sales",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-20 md:pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(20,40,160,0.08),transparent)]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(20,40,160,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(20,40,160,0.05) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-[#1428a0]/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#2d6fff]/5 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-6xl items-center gap-16 px-4 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1428a0]/20 bg-[#1428a0]/8 px-4 py-1.5 text-sm font-medium text-[#1428a0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1428a0] animate-pulse" />
            Samsung Electronics DA Division · AI Crew Leader
          </span>
        </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xs font-semibold tracking-[0.24em] text-gray-500 uppercase"
          >
            {profile.name} · {profile.nameEn}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl"
          >
            Compressor Engineering + AI Automation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="section-copy mt-5 text-base text-gray-600 md:text-lg"
          >
            26년 압축기 개발 경험을 AI 자동화와 연결해 실무 성과로 전환하는 엔지니어입니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="rounded-xl bg-[#1428a0] px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#1428a0]/90 hover:shadow-lg hover:shadow-[#1428a0]/20"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-gray-200 px-7 py-3 text-sm font-semibold text-gray-700 transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50"
            >
              연락하기
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="mt-12 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="ui-card bg-white/80 px-4 py-4 backdrop-blur-sm">
                <div className="kpi-value font-extrabold text-[#1428a0]">{value}</div>
                <div className="mt-1 text-xs text-gray-500">{label}</div>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 text-sm italic text-gray-400"
          >
            &ldquo;{profile.quote}&rdquo;
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="rounded-[28px] border border-[#1428a0]/20 bg-white/70 p-6 backdrop-blur-sm">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#1428a0] uppercase">
              Engineering Grid
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {techGrid.map((item, idx) => (
                <div
                  key={item}
                  className={`rounded-xl border px-3 py-4 text-center text-xs font-semibold ${
                    idx % 3 === 0
                      ? "border-blue-200 bg-blue-50 text-blue-700"
                      : idx % 3 === 1
                        ? "border-gray-200 bg-gray-50 text-gray-700"
                        : "border-indigo-200 bg-indigo-50 text-indigo-700"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-gray-100 bg-white p-4">
              <p className="text-xs text-gray-500">Current Focus</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                Simulation + AI + Automation Integration
              </p>
            </div>
          </div>
        </motion.div>
      </div>

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
