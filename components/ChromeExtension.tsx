"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ChromeExtension() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

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
    const elements = section.querySelectorAll(".section-animate");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const steps = ["Click element", "Screenshot taken", "Popup opens"];

  return (
    <section id="extension" ref={sectionRef} className="relative py-16 md:py-28 px-6 overflow-hidden">
      {/* Accent glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Extension demo */}
          <div className="section-animate order-2 lg:order-1">
            <div className="relative flex items-center justify-center">
              {/* Browser frame */}
              <div className="w-full max-w-md">
                <div className="glass-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl glow-blue">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <div className="flex-1 mx-3">
                      <div className="w-full h-5 rounded bg-white/5 flex items-center px-2 gap-1.5">
                        <svg className="w-2.5 h-2.5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-[10px] text-white/30 font-mono">app.mystore.com/checkout</span>
                        {/* Extension icon in toolbar */}
                        <div className="ml-auto flex items-center gap-1">
                          <div className="w-4 h-4 rounded bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center cursor-pointer hover:opacity-90">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Page content */}
                  <div className="p-5 relative" style={{ minHeight: "320px" }}>
                    {/* Fake page UI */}
                    <div className="space-y-3">
                      {/* Breadcrumb */}
                      <div className="flex items-center gap-1.5">
                        <div className="w-8 h-2 rounded bg-white/10" />
                        <div className="w-1 h-2 rounded bg-white/5" />
                        <div className="w-12 h-2 rounded bg-white/10" />
                        <div className="w-1 h-2 rounded bg-white/5" />
                        <div className="w-10 h-2 rounded bg-violet-500/30" />
                      </div>

                      <div className="w-32 h-5 rounded bg-white/15" />

                      {/* Form fields */}
                      <div className="space-y-2.5 mt-4">
                        <div className="w-full h-8 rounded-lg border border-white/10 bg-white/4 flex items-center px-3">
                          <div className="w-20 h-2 rounded bg-white/20" />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-8 rounded-lg border border-white/10 bg-white/4" />
                          <div className="h-8 rounded-lg border border-white/10 bg-white/4" />
                        </div>
                        {/* Broken payment button */}
                        <div
                          className={`relative w-full h-10 rounded-lg transition-all duration-500 ${
                            activeStep >= 0
                              ? "border-2 border-red-500/60 bg-red-500/8"
                              : "border border-white/10 bg-white/4"
                          } flex items-center justify-center`}
                        >
                          <div className="w-24 h-2.5 rounded bg-white/20" />
                          {/* Cursor on step 0 */}
                          {activeStep === 0 && (
                            <div className="absolute -top-1 -right-1 transition-all">
                              <svg className="w-5 h-5 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 0l16 12-7 2-4 8L4 0z" />
                              </svg>
                              <div className="absolute top-0 left-0 w-5 h-5 rounded-full border border-blue-400/60 animate-ping" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Step 1: Flash effect on click */}
                    {activeStep === 1 && (
                      <div className="absolute inset-0 bg-white/5 flex items-center justify-center rounded">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20">
                          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                          <span className="text-[11px] text-white/80 font-medium">Capturing screenshot…</span>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Popup */}
                    {activeStep === 2 && (
                      <div className="absolute inset-4 flex items-center justify-center">
                        <div className="w-full max-w-[220px] rounded-2xl border border-white/15 bg-[#1A1A1A] shadow-2xl p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-1.5">
                              <div className="w-5 h-5 rounded bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                              </div>
                              <span className="text-[11px] font-semibold text-white">New Bug</span>
                            </div>
                            <span className="text-[9px] text-white/30">×</span>
                          </div>

                          {/* Screenshot preview */}
                          <div className="w-full h-16 rounded-lg bg-white/5 border border-white/8 mb-3 relative overflow-hidden flex items-center justify-center">
                            <span className="text-[9px] text-white/20">screenshot.png</span>
                            <div className="absolute top-1 left-2 w-4 h-4 rounded-full bg-red-500 border border-white/80 flex items-center justify-center shadow-lg">
                              <span className="text-[7px] text-white font-bold">!</span>
                            </div>
                          </div>

                          <div className="space-y-1.5 mb-3">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[8px] text-white/30 w-12 shrink-0">URL</span>
                              <span className="text-[8px] text-white/50 font-mono truncate">app.mystore.com/checkout</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[8px] text-white/30 w-12 shrink-0">Browser</span>
                              <span className="text-[8px] text-white/50">Chrome 124</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[8px] text-white/30 w-12 shrink-0">Element</span>
                              <span className="text-[8px] text-white/50 font-mono truncate">button#pay-now</span>
                            </div>
                          </div>

                          <div className="flex gap-1.5">
                            <div className="flex-1 py-1.5 rounded-lg bg-red-500/20 border border-red-500/30 text-center text-[9px] text-red-400 font-medium">Critical</div>
                            <div className="flex-1 py-1.5 rounded-lg bg-violet-500 text-center text-[9px] text-white font-semibold">Submit</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Step indicators */}
                <div className="flex items-center justify-center gap-2 mt-5">
                  {steps.map((s, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] transition-all duration-500 ${
                          activeStep === i
                            ? "bg-violet-500/20 border border-violet-500/30 text-violet-300"
                            : activeStep > i
                            ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                            : "bg-white/5 border border-white/8 text-white/30"
                        }`}
                      >
                        {activeStep > i ? (
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <div className={`w-1.5 h-1.5 rounded-full ${activeStep === i ? "bg-violet-400 animate-pulse" : "bg-white/20"}`} />
                        )}
                        {s}
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-3 h-px bg-white/10" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="section-animate order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium mb-6">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
              </svg>
              Chrome Extension
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Capture bugs
              <br />
              <span className="gradient-text">without leaving</span>
              <br />
              the page
            </h2>

            <p className="text-white/50 leading-relaxed mb-8 text-lg">
              The Annoture Chrome extension sits in your toolbar. When you spot
              a bug, open it, click the offending element, and you're done.
              Everything else is automatic.
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  icon: "📸",
                  title: "Instant full-page screenshot",
                  desc: "Captures the entire viewport with your click position marked automatically",
                },
                {
                  icon: "🎯",
                  title: "Precise element targeting",
                  desc: "Records the exact DOM element, XPath, CSS selector, and surrounding context",
                },
                {
                  icon: "⚡",
                  title: "Zero-friction popup",
                  desc: "Add a description and severity, then submit — the rest is pre-filled for you",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-base shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-0.5">
                      {item.title}
                    </div>
                    <div className="text-sm text-white/40">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="#"
              className="hidden items-center gap-2.5 px-6 py-3 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all hover:shadow-xl hover:shadow-white/10 active:scale-95"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              Add to Chrome — it's free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
