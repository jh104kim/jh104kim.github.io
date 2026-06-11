"use client";

// Surrogate Modeling 컨셉 데모 — 브라우저에서 즉시 실행되는 간이 물리 모델.
// (실제 Surrogate는 GT-Suite 해석 데이터 학습 기반으로 확장 예정)
import { useMemo, useState } from "react";
import { Gauge, Zap, TrendingUp } from "lucide-react";
import { useLang } from "@/lib/i18n";

// ── R600a 간이 사이클 모델 ────────────────────────────────────────────────
// 포화압력 근사: psat(T℃) ≈ 101.3 · exp(0.032·(T + 11.7)) [kPa]
const psat = (t: number) => 101.3 * Math.exp(0.032 * (t + 11.7));

function predict(disp: number, rpm: number, tc: number, te: number) {
  const pe = psat(te); // 증발 압력 [kPa]
  const pc = psat(tc); // 응축 압력 [kPa]
  const pr = pc / pe; // 압력비

  const etaV = Math.max(0.45, 0.96 - 0.045 * pr); // 체적 효율
  const flow = (disp * 1e-6 * rpm) / 60; // 행정 체적 유량 [m³/s]

  const rGas = 143; // R600a 기체상수 [J/kg·K]
  const tSuction = te + 273.15 + 30; // 흡입 온도 (과열 30K 가정)
  const rho = (pe * 1000) / (rGas * tSuction); // 흡입 밀도 [kg/m³]
  const mdot = rho * flow * etaV; // 질량 유량 [kg/s]

  const q = (380 - 1.6 * tc) * 1000; // 냉동 효과 [J/kg]
  const cooling = mdot * q; // 냉력 [W]

  const gamma = 1.09;
  const cp = 1650; // [J/kg·K]
  const ws = cp * tSuction * (Math.pow(pr, (gamma - 1) / gamma) - 1); // 등엔트로피 일
  const power = (mdot * ws) / 0.75; // 종합 효율 75% 가정 [W]

  const cop = power > 0 ? cooling / power : 0;
  return { cooling, power, cop, pr, etaV };
}

// ── UI ───────────────────────────────────────────────────────────────────
const PANEL_STYLE: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: "16px",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
};

type SliderDef = {
  key: "disp" | "rpm" | "tc" | "te";
  ko: string;
  en: string;
  min: number;
  max: number;
  step: number;
  unit: string;
};

const sliders: SliderDef[] = [
  { key: "disp", ko: "배기량", en: "Displacement", min: 6, max: 18, step: 0.5, unit: "cc" },
  { key: "rpm", ko: "회전수", en: "Speed", min: 1200, max: 4500, step: 100, unit: "rpm" },
  { key: "tc", ko: "응축 온도", en: "Condensing Temp", min: 35, max: 60, step: 1, unit: "℃" },
  { key: "te", ko: "증발 온도", en: "Evaporating Temp", min: -30, max: -10, step: 1, unit: "℃" },
];

export default function SurrogateDemo() {
  const { tr } = useLang();
  const [values, setValues] = useState({ disp: 12, rpm: 3000, tc: 45, te: -23 });

  const result = useMemo(
    () => predict(values.disp, values.rpm, values.tc, values.te),
    [values],
  );

  const outputs = [
    {
      Icon: Gauge,
      label: tr("냉력", "Cooling Capacity"),
      value: `${Math.round(result.cooling)} W`,
    },
    {
      Icon: Zap,
      label: tr("소비 전력", "Input Power"),
      value: `${Math.round(result.power)} W`,
    },
    {
      Icon: TrendingUp,
      label: "COP",
      value: result.cop.toFixed(2),
    },
  ];

  return (
    <div className="p-6" style={PANEL_STYLE}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-white">
            {tr(
              "Surrogate Demo — 압축기 성능 즉시 예측",
              "Surrogate Demo — Instant Compressor Performance Prediction",
            )}
          </p>
          <p className="mt-1 text-xs leading-5 text-white/50">
            {tr(
              "GT-Suite 해석(수 분~수 시간)을 밀리초 단위 근사로 대체하는 Surrogate 개념 시연",
              "Concept demo replacing GT-Suite runs (minutes–hours) with millisecond approximation",
            )}
          </p>
        </div>
        <span
          className="shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
          style={{
            background: "rgba(96,165,250,0.15)",
            color: "rgb(147,197,253)",
            border: "1px solid rgba(96,165,250,0.25)",
          }}
        >
          {tr("실시간 데모", "Live Demo")}
        </span>
      </div>

      {/* 모델 단계 구분 — 현재 vs 확장 계획 */}
      <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px]">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-semibold"
          style={{
            background: "rgba(52,211,153,0.15)",
            color: "rgb(110,231,183)",
            border: "1px solid rgba(52,211,153,0.25)",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "rgb(52,211,153)" }}
          />
          {tr("현재 — Physics-based Model (간이 물리 모델)", "Now — Physics-based Model (simplified)")}
        </span>
        <span className="text-white/30">→</span>
        <span
          className="inline-flex items-center rounded-full px-2.5 py-1 font-medium"
          style={{
            background: "rgba(255,255,255,0.05)",
            color: "rgba(255,255,255,0.45)",
            border: "1px dashed rgba(255,255,255,0.2)",
          }}
        >
          {tr(
            "다음 — GT-Suite 데이터 학습 Surrogate (확장 예정)",
            "Next — Learned Surrogate from GT-Suite dataset (planned)",
          )}
        </span>
      </div>

      <div className="mt-5 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        {/* 입력 슬라이더 */}
        <div className="space-y-4">
          {sliders.map(({ key, ko, en, min, max, step, unit }) => (
            <div key={key}>
              <div className="mb-1 flex items-center justify-between">
                <label
                  htmlFor={`surrogate-${key}`}
                  className="text-xs text-white/60"
                >
                  {tr(ko, en)}
                </label>
                <span className="font-mono text-xs font-semibold text-blue-200">
                  {values[key]} {unit}
                </span>
              </div>
              <input
                id={`surrogate-${key}`}
                type="range"
                min={min}
                max={max}
                step={step}
                value={values[key]}
                onChange={(event) =>
                  setValues((current) => ({
                    ...current,
                    [key]: Number(event.target.value),
                  }))
                }
                className="w-full accent-blue-400"
              />
            </div>
          ))}
        </div>

        {/* 출력 */}
        <div className="flex flex-col justify-between gap-3">
          <div className="grid grid-cols-3 gap-3">
            {outputs.map(({ Icon, label, value }) => (
              <div
                key={label}
                className="rounded-xl px-3 py-4 text-center"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <Icon size={14} className="mx-auto text-blue-300" />
                <p className="mt-2 font-mono text-base font-bold text-white">
                  {value}
                </p>
                <p className="mt-1 text-[10px] text-white/45">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] leading-5 text-white/40">
            {tr(
              `압력비 ${result.pr.toFixed(1)} · 체적효율 ${(result.etaV * 100).toFixed(0)}% — 입력을 바꾸면 결과가 즉시 갱신됩니다. 이것이 Forward Plan 01(Surrogate Modeling)이 지향하는 사용자 경험입니다.`,
              `Pressure ratio ${result.pr.toFixed(1)} · volumetric efficiency ${(result.etaV * 100).toFixed(0)}% — results update instantly. This is the UX that Forward Plan 01 (Surrogate Modeling) aims for.`,
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
