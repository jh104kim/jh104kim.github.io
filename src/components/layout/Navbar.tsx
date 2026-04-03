"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { STATIC_EXIT_KEY } from "@/lib/static-hobby-exit";

const navLinks = [
  { href: "#impact", label: "핵심 성과" },
  { href: "#about", label: "소개" },
  { href: "#projects", label: "프로젝트" },
  { href: "#research", label: "연구" },
  { href: "#ai-lab", label: "AI Lab" },
  { href: "#leadership", label: "리더십" },
  { href: "#resume", label: "이력서" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hobbyOpen, setHobbyOpen] = useState(false);
  const [mobileHobbyOpen, setMobileHobbyOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const hobbyRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 2800);
    return () => window.clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    if (!hobbyOpen) return;
    const onDown = (e: MouseEvent) => {
      if (hobbyRef.current && !hobbyRef.current.contains(e.target as Node)) {
        setHobbyOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [hobbyOpen]);

  useEffect(() => {
    if (!hobbyOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setHobbyOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [hobbyOpen]);

  const handleLinkClick = () => setMobileOpen(false);

  const markExitToStaticHobbyPage = () => {
    try {
      sessionStorage.setItem(STATIC_EXIT_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const onGolfClick = () => {
    setToast("골프 페이지는 준비 중입니다.");
    setHobbyOpen(false);
    setMobileHobbyOpen(false);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
            : "bg-transparent",
        )}
      >
        <nav className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={handleLinkClick}
          >
            <div className="w-8 h-8 rounded-lg bg-[#1428a0] flex items-center justify-center text-white text-sm font-bold">
              JH
            </div>
            <span
              className={cn(
                "font-bold text-base transition-colors",
                scrolled ? "text-gray-900" : "text-gray-900",
              )}
            >
              김정현
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#1428a0] hover:bg-[#1428a0]/5 rounded-lg transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="relative" ref={hobbyRef}>
              <button
                type="button"
                className={cn(
                  "inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  hobbyOpen
                    ? "text-[#1428a0] bg-[#1428a0]/5"
                    : "text-gray-600 hover:text-[#1428a0] hover:bg-[#1428a0]/5",
                )}
                aria-expanded={hobbyOpen}
                aria-haspopup="true"
                onClick={() => setHobbyOpen((v) => !v)}
              >
                Hobby
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform",
                    hobbyOpen && "rotate-180",
                  )}
                />
              </button>
              {hobbyOpen && (
                <ul
                  className="absolute right-0 top-full mt-1 min-w-[160px] rounded-lg border border-gray-100 bg-white py-1 shadow-lg z-50"
                  role="menu"
                >
                  <li role="none">
                    <a
                      href="/links/hobby/mountain/dashboard.html"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1428a0]"
                      role="menuitem"
                      onClick={() => {
                        markExitToStaticHobbyPage();
                        setHobbyOpen(false);
                      }}
                    >
                      등산
                    </a>
                  </li>
                  <li role="none">
                    <button
                      type="button"
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1428a0]"
                      role="menuitem"
                      onClick={onGolfClick}
                    >
                      골프
                    </button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="mailto:jh104.kim@gmail.com"
                className="ml-2 px-4 py-2 text-sm font-medium bg-[#1428a0] text-white rounded-lg hover:bg-[#1428a0]/90 transition-colors"
              >
                연락하기
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <ul className="flex flex-col py-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={handleLinkClick}
                    className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-[#1428a0] hover:bg-gray-50 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  aria-expanded={mobileHobbyOpen}
                  onClick={() => setMobileHobbyOpen((v) => !v)}
                >
                  Hobby
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform",
                      mobileHobbyOpen && "rotate-180",
                    )}
                  />
                </button>
                {mobileHobbyOpen && (
                  <ul className="border-t border-gray-50 bg-gray-50/80">
                    <li>
                      <a
                        href="/links/hobby/mountain/dashboard.html"
                        className="block pl-10 pr-6 py-2.5 text-sm text-gray-700 hover:text-[#1428a0]"
                        onClick={() => {
                          markExitToStaticHobbyPage();
                          handleLinkClick();
                        }}
                      >
                        등산
                      </a>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="block w-full pl-10 pr-6 py-2.5 text-left text-sm text-gray-700 hover:text-[#1428a0]"
                        onClick={onGolfClick}
                      >
                        골프
                      </button>
                    </li>
                  </ul>
                )}
              </li>
              <li className="px-4 py-2">
                <a
                  href="mailto:jh104.kim@gmail.com"
                  onClick={handleLinkClick}
                  className="block w-full text-center px-4 py-2.5 text-sm font-medium bg-[#1428a0] text-white rounded-lg"
                >
                  이메일 보내기
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {toast ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-[60] max-w-[90vw] -translate-x-1/2 rounded-lg bg-gray-900 px-4 py-2.5 text-center text-sm text-white shadow-lg"
        >
          {toast}
        </div>
      ) : null}
    </>
  );
}
