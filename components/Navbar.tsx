"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const useCaseLinks = [
  { label: "QA Testing", href: "/use-cases/qa-testing", desc: "Built for QA engineers" },
  { label: "Bug Reporting", href: "/use-cases/bug-reporting", desc: "For developer teams" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setUseCasesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F0F0F]/80 backdrop-blur-xl border-b border-white/8 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M12 20h9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          <span className="font-semibold text-white text-[15px] tracking-tight">
            Annoture
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/features" className="px-3.5 py-1.5 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200">
            Features
          </Link>
          <a href="/#how-it-works" className="px-3.5 py-1.5 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200">
            How it works
          </a>

          {/* Use Cases dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setUseCasesOpen(!useCasesOpen)}
              className="px-3.5 py-1.5 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 flex items-center gap-1"
            >
              Use Cases
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${useCasesOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {useCasesOpen && (
              <div className="absolute top-full left-0 mt-1.5 w-52 bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/40 z-50">
                {useCaseLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setUseCasesOpen(false)}
                    className="flex flex-col px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/6 last:border-0"
                  >
                    <span className="text-sm text-white/80 font-medium">{link.label}</span>
                    <span className="text-xs text-white/35 mt-0.5">{link.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href="/#pricing" className="px-3.5 py-1.5 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200">
            Pricing
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/#contact"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-white text-[#0F0F0F] hover:bg-white/90 transition-all hover:shadow-lg hover:shadow-white/10 active:scale-95"
          >
            Notify me
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 border-t border-white/8" : "max-h-0"
        } bg-[#0F0F0F]/95 backdrop-blur-xl`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          <Link href="/features" className="px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all" onClick={() => setMobileOpen(false)}>
            Features
          </Link>
          <a href="/#how-it-works" className="px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all" onClick={() => setMobileOpen(false)}>
            How it works
          </a>

          {/* Mobile use cases */}
          <button
            onClick={() => setMobileUseCasesOpen(!mobileUseCasesOpen)}
            className="px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all text-left flex items-center justify-between"
          >
            Use Cases
            <svg className={`w-3.5 h-3.5 transition-transform ${mobileUseCasesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileUseCasesOpen && (
            <div className="ml-4 border-l border-white/8 pl-3 space-y-1">
              {useCaseLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-sm text-white/60 hover:text-white rounded-lg transition-all"
                  onClick={() => { setMobileOpen(false); setMobileUseCasesOpen(false); }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <a href="/#pricing" className="px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all" onClick={() => setMobileOpen(false)}>
            Pricing
          </a>

          <div className="mt-3 pt-3 border-t border-white/8">
            <a
              href="/#contact"
              className="block text-sm font-medium px-4 py-2.5 rounded-lg bg-white text-[#0F0F0F] text-center"
              onClick={() => setMobileOpen(false)}
            >
              Notify me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
