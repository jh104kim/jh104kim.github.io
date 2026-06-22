"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/lib/i18n";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import HeroShaderBackground from "@/components/ui/HeroShaderBackground";

type CounterStat = {
  type: "counter";
  ko: { target: number; suffix?: string; prefix?: string };
  en: { target: number; suffix?: string; prefix?: string };
  labelKo: string;
  labelEn: string;
  detailKo?: string;
  detailEn?: string;
};
type TextStat = { type: "text"; ko: string; en: string; labelKo: string; labelEn: string };
type Stat = CounterStat | TextStat;

const stats: Stat[] = [
  {
    type: "counter",
    ko: { target: 26, suffix: "년" },
    en: { target: 26, suffix: " yrs" },
    labelKo: "경력",
    labelEn: "Experience",
    detailKo: "개발/품질그룹장",
    detailEn: "Dev/Quality Lead",
  },
  {
    type: "counter",
    ko: { target: 7, suffix: "편" },
    en: { target: 7 },
    labelKo: "발표",
    labelEn: "Papers",
    detailKo: "[Purdue, ICSV外]",
    detailEn: "[Purdue, ICSV+]",
  },
  { type: "counter", ko: { target: 360, suffix: "억" }, en: { target: 36, prefix: "₩", suffix: "B" }, labelKo: "Sales", labelEn: "Sales" },
  { type: "text",    ko: "AI Crew",                     en: "AI Crew",                       labelKo: "리딩",  labelEn: "Leading" },
];

const loopStages = [
  { label: "Domain", detail: "Compressor", x: "4%", y: "8%" },
  { label: "Simulation", detail: "GT-Suite / FSI", x: "56%", y: "8%" },
  { label: "AI Agent", detail: "RAG / Reasoning", x: "64%", y: "46%" },
  { label: "Automation", detail: "Scripts / Actions", x: "30%", y: "69%" },
  { label: "Quality Loop", detail: "Decision feedback", x: "2%", y: "46%" },
];

export default function Hero() {
  const { lang, tr } = useLang();

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
      <HeroShaderBackground />

      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-[#1428a0]/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#2d6fff]/5 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-6xl items-center gap-16 px-4 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1428a0]/20 bg-[#1428a0]/8 px-4 py-1.5 text-sm font-medium text-[#1428a0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1428a0] animate-pulse" />
            Samsung Electronics DA Division · AI Crew Leader
          </span>
        </motion.div>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xs font-semibold tracking-[0.24em] text-gray-500 uppercase"
          >
            {profile.name} · {profile.nameEn}
          </motion.p>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl"
          >
            Compressor Engineering + AI Automation
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="section-copy mt-5 text-base text-gray-600 md:text-lg"
          >
            {tr(
              "26년 압축기 개발 경험을 AI 자동화와 연결해 실무 성과로 전환하는 엔지니어입니다.",
              "An engineer turning 26 years of compressor development into real-world results through AI automation.",
            )}
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="rounded-xl bg-[#1428a0] px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#1428a0]/90 hover:shadow-lg hover:shadow-[#1428a0]/20"
            >
              {tr("프로젝트 보기", "View Projects")}
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-gray-200 px-7 py-3 text-sm font-semibold text-gray-700 transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50"
            >
              {tr("연락하기", "Contact")}
            </a>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="mt-12 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((stat) => {
              const labelText = lang === "en" ? stat.labelEn : stat.labelKo;
              return (
                <div key={stat.labelKo} className="ui-card min-w-0 bg-white/80 px-4 py-4 backdrop-blur-sm">
                  <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
                    <div
                      className={
                        stat.type === "counter"
                          ? "kpi-value font-extrabold text-[#1428a0]"
                          : "max-w-full text-[1.45rem] font-extrabold leading-tight text-[#1428a0] md:text-[1.35rem] xl:text-[1.55rem]"
                      }
                    >
                      {stat.type === "counter" ? (
                        <AnimatedCounter
                          target={lang === "en" ? stat.en.target : stat.ko.target}
                          suffix={lang === "en" ? stat.en.suffix : stat.ko.suffix}
                          prefix={lang === "en" ? stat.en.prefix : stat.ko.prefix}
                          duration={1800}
                        />
                      ) : (
                        lang === "en" ? stat.en : stat.ko
                      )}
                    </div>
                    {"detailKo" in stat && stat.detailKo ? (
                      <span className="text-[10px] font-bold leading-4 text-gray-500">
                        {lang === "en" ? stat.detailEn : stat.detailKo}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-1 text-xs text-gray-500">{labelText}</div>
                </div>
              );
            })}
          </motion.div>

          <motion.p
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 text-sm italic text-gray-400"
          >
            &ldquo;
            {tr(
              profile.quote,
              "I divide the world to draw its boundaries; AI stitches the solutions between them.",
            )}
            &rdquo;
          </motion.p>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="rounded-[28px] border border-[#1428a0]/20 bg-white/75 p-6 backdrop-blur-sm">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#1428a0] uppercase">
              Loop Engineering
            </p>
            <p className="mt-2 text-sm font-semibold text-gray-900">
              Agentic workflow <span className="text-[#ff5a5f]">(loop engineering)</span>
            </p>
            <div className="relative mt-5 h-[300px] overflow-hidden rounded-3xl border border-gray-100 bg-white/80 p-4">
              <svg
                viewBox="0 0 520 300"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <path
                  d="M95 62 C215 6 392 28 420 86 C456 168 364 240 246 246 C118 250 58 178 72 104 C75 88 82 74 95 62"
                  fill="none"
                  stroke="rgba(20,40,160,0.12)"
                  strokeWidth="2"
                />
                <motion.path
                  d="M95 62 C215 6 392 28 420 86 C456 168 364 240 246 246 C118 250 58 178 72 104 C75 88 82 74 95 62"
                  fill="none"
                  stroke="#ff5a5f"
                  strokeLinecap="round"
                  strokeWidth="3"
                  initial={false}
                  animate={{ pathLength: [0.08, 0.48, 0.92] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>

              {loopStages.map((stage, idx) => (
                <motion.div
                  key={stage.label}
                  className={`absolute z-10 w-[138px] rounded-2xl border px-3 py-3 shadow-sm ${
                    idx === 2
                      ? "border-[#ff5a5f]/40 bg-[#ff5a5f]/8 text-[#b4232b]"
                      : "border-[#1428a0]/15 bg-white text-[#1428a0]"
                  }`}
                  style={{ left: stage.x, top: stage.y }}
                  initial={false}
                  animate={{ y: idx === 2 ? [0, -4, 0] : 0 }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-xs font-extrabold leading-4">{stage.label}</p>
                  <p className="mt-1 text-[10px] font-semibold leading-4 text-gray-500">
                    {stage.detail}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-3 rounded-2xl border border-[#1428a0]/10 bg-[#1428a0]/5 px-4 py-3">
              <p className="text-[11px] font-bold leading-5 text-[#1428a0]">
                Problem → Model → Agent → Action → Learning
              </p>
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
