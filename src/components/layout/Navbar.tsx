"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#ai-lab", label: "AI Lab" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
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
          <li>
            <a
              href="mailto:jh104.kim@gmail.com"
              className="ml-2 px-4 py-2 text-sm font-medium bg-[#1428a0] text-white rounded-lg hover:bg-[#1428a0]/90 transition-colors"
            >
              Contact
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
  );
}
