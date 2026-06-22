"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { ExternalLink, GitFork, Lock, ShieldCheck } from "lucide-react";
import {
  PRIVATE_ACCESS_PASSWORD_HASH,
  privateAccessApps,
  type PrivateAccessKey,
} from "@/data/private-access";

const SESSION_KEY = "portfolio-private-access-ok";

async function sha256(value: string) {
  const bytes = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export default function PrivateAccessGate() {
  const [password, setPassword] = useState("");
  const [isAllowed, setIsAllowed] = useState(false);
  const [selectedKey, setSelectedKey] = useState<PrivateAccessKey | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const params = new URLSearchParams(window.location.search);
        const app = params.get("app");
        if (app === "life-os" || app === "pension-analyzer") {
          setSelectedKey(app);
        }
        setIsAllowed(sessionStorage.getItem(SESSION_KEY) === "1");
      } catch {
        /* ignore */
      }
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const apps = useMemo(() => {
    if (!selectedKey) return privateAccessApps;
    return [
      ...privateAccessApps.filter((app) => app.key === selectedKey),
      ...privateAccessApps.filter((app) => app.key !== selectedKey),
    ];
  }, [selectedKey]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const hashed = await sha256(password);
    if (hashed !== PRIVATE_ACCESS_PASSWORD_HASH) {
      setError("비밀번호가 맞지 않습니다.");
      return;
    }

    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    setIsAllowed(true);
    setPassword("");
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-24 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1428a0]/20 bg-[#1428a0]/8 px-3 py-1 text-xs font-bold text-[#1428a0]">
            <Lock size={13} />
            Private Access
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            개인 데이터 앱은 인증 후 접근합니다
          </h1>
          <p className="mt-4 max-w-[54ch] text-base leading-8 text-gray-600">
            연금, 자산, 건강 정보가 포함된 프로젝트는 공개 포트폴리오와 분리했습니다.
          </p>

          {!isAllowed ? (
            <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <label htmlFor="private-password" className="text-sm font-bold text-gray-900">
                비밀번호
              </label>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input
                  id="private-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="min-h-11 flex-1 rounded-xl border border-gray-200 px-4 text-sm outline-none transition focus:border-[#1428a0] focus:ring-2 focus:ring-[#1428a0]/10"
                  autoComplete="current-password"
                />
                <button
                  type="submit"
                  className="min-h-11 rounded-xl bg-[#1428a0] px-5 text-sm font-bold text-white transition hover:bg-[#0f207d]"
                >
                  인증
                </button>
              </div>
              {error ? <p className="mt-3 text-sm font-semibold text-red-600">{error}</p> : null}
            </form>
          ) : (
            <div className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">
              <ShieldCheck size={16} />
              인증 완료
            </div>
          )}
        </div>

        <div className="grid gap-4">
          {apps.map((app) => (
            <div
              key={app.key}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#1428a0]">
                    {app.category}
                  </p>
                  <h2 className="mt-2 text-xl font-extrabold text-gray-900">
                    {app.title}
                  </h2>
                </div>
                <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-bold text-gray-500">
                  Auth Required
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-600">{app.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {app.contains.map((item) => (
                  <span
                    key={`${app.key}-${item}`}
                    className="rounded-full border border-[#1428a0]/15 bg-[#1428a0]/5 px-3 py-1 text-xs font-bold text-[#1428a0]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {isAllowed ? (
                  <>
                    <a
                      href={app.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#1428a0] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#0f207d]"
                    >
                      <ExternalLink size={13} />
                      앱 열기
                    </a>
                    {app.githubUrl ? (
                      <a
                        href={app.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-bold text-gray-700 transition hover:bg-gray-50"
                      >
                        <GitFork size={13} />
                        GitHub
                      </a>
                    ) : null}
                  </>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-bold text-gray-500">
                    <Lock size={13} />
                    인증 필요
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
