"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Install the extension",
    desc: "Add Annoture to Chrome in one click. It sits quietly in your toolbar until you need it — no login required to start capturing.",
    gradient: "from-violet-500 to-purple-600",
    detail: "Works on any website, any URL, including localhost.",
  },
  {
    number: "02",
    title: "Click the bug",
    desc: "Open the extension, then click anywhere on the page. Annoture takes an instant full-page screenshot and pins a marker exactly where you clicked.",
    gradient: "from-blue-500 to-cyan-500",
    detail: "Captures viewport, scroll position, and element metadata automatically.",
  },
  {
    number: "03",
    title: "Review & add context",
    desc: "A popup appears with the screenshot, auto-filled technical details, a severity picker, and a description field. Add notes and hit Submit.",
    gradient: "from-emerald-500 to-teal-500",
    detail: "Pre-fills browser, OS, screen size, URL, and element XPath.",
  },
  {
    number: "04",
    title: "Land on the board",
    desc: "The issue appears instantly in the Backlog column of your Kanban board. Assign it, comment on it, and move it through your workflow.",
    gradient: "from-pink-500 to-rose-500",
    detail: "Real-time sync across all team members on the project.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".section-animate, .stagger-children");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-16 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="section-animate text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium mb-5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Simple workflow
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            From bug to board
            <br />
            <span className="gradient-text">in under 10 seconds</span>
          </h2>
          <p className="text-lg text-white/45 max-w-xl mx-auto">
            No Slack screenshots. No copy-pasting URLs. No guessing what
            browser they were using.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="stagger-children space-y-12">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text side */}
                <div className="flex-1 text-center lg:text-left">
                  <div
                    className={`inline-block text-xs font-mono font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent mb-3`}
                  >
                    STEP {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed mb-3 max-w-md mx-auto lg:mx-0">
                    {step.desc}
                  </p>
                  <p className="text-xs text-white/30 font-mono">{step.detail}</p>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/12 items-center justify-center z-10 flex-shrink-0">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-br ${step.gradient} shadow-lg`}
                  />
                </div>

                {/* Visual side */}
                <div className="flex-1 flex justify-center">
                  <StepVisual step={i} gradient={step.gradient} number={step.number} title={step.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepVisual({ step, gradient, number, title }: { step: number; gradient: string; number: string; title: string }) {
  const visuals = [
    // Step 1: Extension in toolbar
    <div key="0" className="glass-card p-5 w-64">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <div className="text-xs font-semibold text-white">Annoture</div>
          <div className="text-[10px] text-white/40">QA Bug Reporter</div>
        </div>
        <div className="ml-auto">
          <div className="w-8 h-4 rounded-full bg-violet-500/30 border border-violet-500/40 flex items-center justify-end pr-0.5">
            <div className="w-3 h-3 rounded-full bg-violet-400" />
          </div>
        </div>
      </div>
      <div className="text-[11px] text-white/50 mb-3">Click any element to capture a bug</div>
      <div className="flex gap-2">
        <div className="flex-1 py-2 rounded-lg bg-violet-500/15 border border-violet-500/25 text-center text-[10px] text-violet-300 font-medium">Capture</div>
        <div className="flex-1 py-2 rounded-lg bg-white/5 border border-white/8 text-center text-[10px] text-white/40">Settings</div>
      </div>
    </div>,

    // Step 2: Clicking on element
    <div key="1" className="glass-card p-4 w-64 relative overflow-hidden">
      <div className="w-full h-32 rounded-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/8 flex items-center justify-center relative mb-3">
        <div className="text-[10px] text-white/20 font-mono">checkout.myapp.com/cart</div>
        {/* Cursor */}
        <div className="absolute top-6 right-8">
          <svg className="w-4 h-4 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 0l16 12-7 2-4 8L4 0z" />
          </svg>
          {/* Click ripple */}
          <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full border border-blue-400/60 animate-ping" />
        </div>
        {/* Red marker */}
        <div className="absolute top-5 right-7 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center shadow-lg shadow-red-500/40 z-10">
          <span className="text-[8px] text-white font-bold">!</span>
        </div>
        {/* Highlight box */}
        <div className="absolute top-3 right-3 w-16 h-10 rounded border-2 border-blue-400/60 bg-blue-400/5" />
      </div>
      <div className="text-[11px] text-white/50 text-center">Screenshot captured with marker</div>
    </div>,

    // Step 3: Popup with details
    <div key="2" className="glass-card p-4 w-64">
      <div className="text-xs font-semibold text-white mb-3">New Issue</div>
      <div className="w-full h-20 rounded-lg bg-white/4 border border-white/8 flex items-center justify-center mb-3 relative overflow-hidden">
        <div className="text-[9px] text-white/25 font-mono">screenshot attached</div>
        <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-red-500 border border-white flex items-center justify-center">
          <span className="text-[7px] text-white font-bold">!</span>
        </div>
      </div>
      <div className="space-y-2 mb-3">
        <div className="flex items-center gap-2">
          <div className="text-[9px] text-white/30 w-16 shrink-0">URL</div>
          <div className="flex-1 h-5 rounded bg-white/5 border border-white/8 text-[9px] text-white/40 flex items-center px-2 font-mono truncate">checkout.myapp.com/cart</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[9px] text-white/30 w-16 shrink-0">Browser</div>
          <div className="flex-1 h-5 rounded bg-white/5 border border-white/8 text-[9px] text-white/40 flex items-center px-2">Chrome 124 · macOS</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[9px] text-white/30 w-16 shrink-0">Severity</div>
          <div className="flex-1 h-5 rounded bg-red-500/15 border border-red-500/25 text-[9px] text-red-400 flex items-center px-2">Critical</div>
        </div>
      </div>
      <div className="w-full py-2 rounded-lg bg-violet-500 text-[10px] text-white font-semibold text-center">Submit to board</div>
    </div>,

    // Step 4: Kanban card
    <div key="3" className="glass-card p-4 w-64">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-violet-400" />
        <span className="text-[10px] font-semibold uppercase tracking-wider text-violet-400">Backlog</span>
        <div className="ml-auto flex items-center gap-1 text-[9px] text-white/30">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          just now
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/4 p-3">
        <div className="w-full h-14 rounded-lg bg-white/4 border border-white/6 mb-2.5 relative overflow-hidden flex items-center justify-center">
          <div className="text-[9px] text-white/20 font-mono">screenshot</div>
          <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-red-500 border border-white/80 flex items-center justify-center">
            <span className="text-[7px] text-white font-bold">!</span>
          </div>
        </div>
        <div className="text-[11px] text-white/75 mb-2">Payment form crashes on Safari 16 — checkout broken</div>
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-white/25 font-mono">#042</span>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-500/15 border border-red-500/20 text-red-400">critical</span>
        </div>
      </div>
    </div>,
  ];

  return visuals[step] || null;
}
