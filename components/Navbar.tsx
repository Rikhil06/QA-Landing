"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type DropdownItem = { label: string; href: string; desc: string };

const productLinks: DropdownItem[] = [
  { label: "Features", href: "/features", desc: "Everything Annoture can do" },
  { label: "Chrome Extension", href: "/chrome-extension", desc: "Install and capture in one click" },
  { label: "How it works", href: "/#how-it-works", desc: "See the workflow" },
];

const resourceLinks: DropdownItem[] = [
  { label: "FAQ", href: "/faq", desc: "Common questions answered" },
  { label: "QA Testing", href: "/use-cases/qa-testing", desc: "Built for QA engineers" },
  { label: "Bug Reporting", href: "/use-cases/bug-reporting", desc: "For developer teams" },
  { label: "Compare", href: "/compare/bugherd-and-marker-io", desc: "Annoture vs BugHerd vs Marker.io" },
];

function NavDropdown({
  label,
  items,
  open,
  onToggle,
  onClose,
}: {
  label: string;
  items: DropdownItem[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="px-3.5 py-1.5 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 flex items-center gap-1"
      >
        {label}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1.5 w-56 bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/40 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex flex-col px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/6 last:border-0"
            >
              <span className="text-sm text-white/80 font-medium">{item.label}</span>
              <span className="text-xs text-white/35 mt-0.5">{item.desc}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggle = (key: string) =>
    setOpenDropdown((prev) => (prev === key ? null : key));

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
              <path d="M12 20h9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-semibold text-white text-[15px] tracking-tight">Annoture</span>
        </Link>

        {/* Desktop Nav */}
        <nav ref={navRef} className="hidden md:flex items-center gap-1">
          <NavDropdown
            label="Product"
            items={productLinks}
            open={openDropdown === "product"}
            onToggle={() => toggle("product")}
            onClose={() => setOpenDropdown(null)}
          />
          <a href="/#pricing" className="px-3.5 py-1.5 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200">
            Pricing
          </a>
          <NavDropdown
            label="Resources"
            items={resourceLinks}
            open={openDropdown === "resources"}
            onToggle={() => toggle("resources")}
            onClose={() => setOpenDropdown(null)}
          />
          <Link href="/about" className="px-3.5 py-1.5 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200">
            About
          </Link>
          <Link href="/contact" className="px-3.5 py-1.5 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200">
            Contact
          </Link>
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
          mobileOpen ? "max-h-[500px] border-t border-white/8" : "max-h-0"
        } bg-[#0F0F0F]/95 backdrop-blur-xl`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {/* Product */}
          <button
            onClick={() => setMobileExpanded((p) => (p === "product" ? null : "product"))}
            className="px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all text-left flex items-center justify-between"
          >
            Product
            <svg className={`w-3.5 h-3.5 transition-transform ${mobileExpanded === "product" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileExpanded === "product" && (
            <div className="ml-4 border-l border-white/8 pl-3 space-y-1 mb-1">
              {productLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block px-3 py-2 text-sm text-white/60 hover:text-white rounded-lg transition-all" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <a href="/#pricing" className="px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all" onClick={() => setMobileOpen(false)}>
            Pricing
          </a>

          {/* Resources */}
          <button
            onClick={() => setMobileExpanded((p) => (p === "resources" ? null : "resources"))}
            className="px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all text-left flex items-center justify-between"
          >
            Resources
            <svg className={`w-3.5 h-3.5 transition-transform ${mobileExpanded === "resources" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileExpanded === "resources" && (
            <div className="ml-4 border-l border-white/8 pl-3 space-y-1 mb-1">
              {resourceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block px-3 py-2 text-sm text-white/60 hover:text-white rounded-lg transition-all" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <Link href="/about" className="px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>

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
