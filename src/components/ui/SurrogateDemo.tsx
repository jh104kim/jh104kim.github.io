"use client";

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
      <h3 className="text-sm font-semibold text-white">
        {tr("압축기 성능 계산 데모", "Compressor Performance Demo")}
      </h3>
      <p className="mt-1 text-sm leading-6 text-white/70">
        {tr(
          "간이 R600a 물리 모델로 운전 조건별 냉력, 소비 전력, COP를 계산합니다.",
          "A simplified R600a physics model calculates cooling capacity, input power, and COP for the selected conditions.",
        )}
      </p>

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
          <p className="text-xs leading-5 text-white/60">
            {tr(
              `압력비 ${result.pr.toFixed(1)} · 체적효율 ${(result.etaV * 100).toFixed(0)}%`,
              `Pressure ratio ${result.pr.toFixed(1)} · volumetric efficiency ${(result.etaV * 100).toFixed(0)}%`,
            )}
          </p>
        </div>
      </div>
      <p className="mt-5 text-xs leading-5 text-white/60">
        {tr(
          "향후 GT-Suite 해석 데이터로 대리 모델을 학습하고 검증할 계획입니다.",
          "Next step: train and validate a surrogate model using GT-Suite simulation data.",
        )}
      </p>
    </div>
  );
}
