"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-600",
    shadow: "shadow-violet-500/20",
    tag: "Capture",
    title: "One-click bug capture",
    desc: "Click the extension, click the bug. A screenshot is taken instantly with your cursor position marked. Zero friction, zero context switching.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/20",
    tag: "Annotate",
    title: "Smart auto-annotation",
    desc: "Every capture includes the exact element clicked, its CSS path, viewport size, browser, and OS. No manual form-filling required.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/20",
    tag: "Organise",
    title: "Visual Kanban boards",
    desc: "Issues land straight into your board. Drag between Backlog, In Progress, Review, and Done. Keep your whole team aligned in real-time.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradient: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/20",
    tag: "Collaborate",
    title: "Team-first workflow",
    desc: "Invite unlimited members, assign issues, leave comments with screenshots attached. Everyone sees the same source of truth.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-500",
    shadow: "shadow-amber-500/20",
    tag: "Track",
    title: "Reporting & analytics",
    desc: "Monitor issue velocity, resolution time, and team performance. Export to PDF or integrate with Jira and Trello on the Agency plan.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    gradient: "from-indigo-500 to-violet-500",
    shadow: "shadow-indigo-500/20",
    tag: "Secure",
    title: "Enterprise ready",
    desc: "SSO, white-labelling, custom data retention, and granular board permissions. Meets SOC 2 requirements out of the box.",
  },
];

export default function Features() {
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
    <section id="features" ref={sectionRef} className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="section-animate text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium mb-5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Everything you need
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Built for speed.
            <br />
            <span className="gradient-text">Designed for clarity.</span>
          </h2>
          <p className="text-lg text-white/45 max-w-xl mx-auto">
            Every feature is crafted to cut the friction out of QA — from first
            capture to final fix.
          </p>
        </div>

        {/* Feature grid */}
        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="glass-card p-6 group">
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center text-white mb-5 shadow-lg ${f.shadow} group-hover:scale-110 transition-transform duration-300`}
              >
                {f.icon}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-[10px] font-semibold uppercase tracking-widest bg-gradient-to-r ${f.gradient} bg-clip-text text-transparent`}
                >
                  {f.tag}
                </span>
              </div>
              <h3 className="text-[15px] font-semibold text-white mb-2.5">{f.title}</h3>
              <p className="text-[13px] text-white/45 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
