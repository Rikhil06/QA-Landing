"use client";

import { useEffect, useRef } from "react";

export default function CTA() {
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
      { threshold: 0.2 }
    );

    const section = sectionRef.current;
    if (!section) return;
    const elements = section.querySelectorAll(".section-animate");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-animate relative rounded-3xl border border-white/10 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-[#1A1A1A] to-blue-500/10" />
          <div className="absolute inset-0 grid-bg opacity-50" />

          {/* Orbs inside card */}
          <div
            className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
              filter: "blur(40px)",
              transform: "translate(-30%, -30%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
              filter: "blur(40px)",
              transform: "translate(30%, 30%)",
            }}
          />

          <div className="relative px-8 py-16 md:px-16 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/15 border border-violet-500/25 text-violet-300 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Free forever on the starter plan
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
              Your team is shipping bugs.
              <br />
              <span className="gradient-text">Start catching them faster.</span>
            </h2>

            <p className="text-lg text-white/45 max-w-xl mx-auto mb-10">
              Be among the first to streamline your QA workflow. Set up
              in minutes, no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="#contact"
                className="group px-8 py-3.5 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all hover:shadow-2xl hover:shadow-white/15 active:scale-95"
              >
                Notify me
                <span className="ml-2 group-hover:translate-x-0.5 inline-block transition-transform">
                  →
                </span>
              </a>
              <a
                href="#extension"
                className="hidden px-8 py-3.5 rounded-xl glass border border-white/10 text-white/80 font-medium text-sm hover:text-white hover:border-white/20 transition-all"
              >
                Add Chrome extension
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/30">
              {[
                "No credit card required",
                "Free plan forever",
                "Cancel anytime",
                "SOC 2 compliant",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
