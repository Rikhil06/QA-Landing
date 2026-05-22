"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add("visible"), 100);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6 overflow-hidden">
      {/* Badge */}
      <div
        ref={heroRef}
        className="section-animate flex flex-col items-center text-center"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-8 hover:bg-violet-500/15 transition-colors cursor-default">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Now with Chrome Extension — capture bugs in one click
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl leading-[1.08] mb-6">
          <span className="text-white">QA that moves as</span>
          <br />
          <span className="gradient-text">fast as you do</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/50 w-[min(42rem,100vw-3rem)] leading-relaxed mb-10">
          Capture bugs instantly with a single click. Annotate screenshots
          automatically, create Kanban tickets, and collaborate with your team —
          all without leaving your browser.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <a
            href="#contact"
            className="group relative px-7 py-3.5 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:shadow-xl hover:shadow-white/15 active:scale-95"
          >
            Notify me
            <span className="ml-2 group-hover:translate-x-0.5 inline-block transition-transform">
              →
            </span>
          </a>
          <a
            href="#how-it-works"
            className="px-7 py-3.5 rounded-xl glass text-white/80 font-medium text-sm hover:text-white hover:bg-white/8 transition-all duration-200"
          >
            See how it works
          </a>
        </div>

        {/* Social proof */}
        <div className="hidden flex items-center gap-6 text-sm text-white/40 mb-16">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["bg-violet-500", "bg-blue-500", "bg-emerald-500", "bg-pink-500"].map(
                (color, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 rounded-full ${color} border-2 border-[#0F0F0F] flex items-center justify-center text-[10px] font-bold text-white`}
                  >
                    {["R", "M", "S", "J"][i]}
                  </div>
                )
              )}
            </div>
            <span>Trusted by 500+ QA teams</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1">4.9/5 rating</span>
          </div>
        </div>

        {/* Hero visual - Kanban board mockup */}
        <div className="relative w-full max-w-5xl">
          {/* Glow behind the card */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.2) 0%, transparent 60%)",
              filter: "blur(30px)",
              transform: "translateY(20px)",
            }}
          />

          <div className="relative glass-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/8 bg-white/2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-amber-500/70" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
              <div className="flex-1 mx-4">
                <div className="w-48 h-5 rounded-md bg-white/5 mx-auto flex items-center justify-center">
                  <span className="text-[10px] text-white/30">app.annoture.com/boards/checkout-flow</span>
                </div>
              </div>
            </div>

            {/* Kanban board */}
            <div className="p-5 overflow-x-auto">
              <div className="flex gap-4 min-w-max pb-2">
                {kanbanColumns.map((col) => (
                  <KanbanColumn key={col.title} {...col} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const kanbanColumns = [
  {
    title: "Backlog",
    color: "text-white/40",
    dot: "bg-white/20",
    cards: [
      { id: "#041", label: "Checkout button misaligned on mobile", severity: "low", img: true },
      { id: "#039", label: "Font weight inconsistency on dashboard", severity: "low", img: false },
    ],
  },
  {
    title: "In Progress",
    color: "text-blue-400",
    dot: "bg-blue-400",
    cards: [
      { id: "#038", label: "Payment form crashes on Safari 16", severity: "critical", img: true },
      { id: "#036", label: "404 on /settings/billing redirect", severity: "high", img: false },
    ],
  },
  {
    title: "In Review",
    color: "text-violet-400",
    dot: "bg-violet-400",
    cards: [
      { id: "#035", label: "Empty state missing for new users", severity: "medium", img: true },
    ],
  },
  {
    title: "Done",
    color: "text-emerald-400",
    dot: "bg-emerald-400",
    cards: [
      { id: "#034", label: "Notification badge count off by one", severity: "low", img: false },
      { id: "#032", label: "Dark mode flicker on page load", severity: "medium", img: true },
    ],
  },
];

function KanbanColumn({ title, color, dot, cards }: {
  title: string;
  color: string;
  dot: string;
  cards: { id: string; label: string; severity: string; img: boolean }[];
}) {
  const severityColors: Record<string, string> = {
    critical: "bg-red-500/15 text-red-400 border-red-500/20",
    high: "bg-orange-500/15 text-orange-400 border-orange-500/20",
    medium: "bg-amber-500/15 text-amber-400 border-amber-500/20",
    low: "bg-white/8 text-white/40 border-white/10",
  };

  return (
    <div className="w-56 flex-shrink-0">
      <div className={`flex items-center gap-2 mb-3 ${color}`}>
        <div className={`w-2 h-2 rounded-full ${dot}`} />
        <span className="text-xs font-semibold uppercase tracking-wider">{title}</span>
        <span className="ml-auto text-[10px] bg-white/8 px-1.5 py-0.5 rounded text-white/40">
          {cards.length}
        </span>
      </div>
      <div className="space-y-2">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-xl border border-white/8 bg-white/4 hover:bg-white/7 hover:border-white/12 transition-all cursor-pointer p-3"
          >
            {card.img && (
              <div className="w-full h-14 rounded-lg bg-gradient-to-br from-white/5 to-white/2 mb-2.5 overflow-hidden relative border border-white/6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded border border-white/15 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                {/* Annotation marker */}
                <div className="absolute top-2 left-3 w-5 h-5 rounded-full bg-red-500 border-2 border-white/80 flex items-center justify-center shadow-lg shadow-red-500/30 animate-pulse">
                  <span className="text-[8px] text-white font-bold">!</span>
                </div>
              </div>
            )}
            <p className="text-[11px] text-white/75 leading-relaxed mb-2">{card.label}</p>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-white/30 font-mono">{card.id}</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded border font-medium ${severityColors[card.severity]}`}>
                {card.severity}
              </span>
            </div>
          </div>
        ))}
        {/* Add card button */}
        <button className="w-full py-2 rounded-xl border border-dashed border-white/10 text-white/25 text-xs hover:border-white/20 hover:text-white/40 transition-all">
          + Add issue
        </button>
      </div>
    </div>
  );
}
