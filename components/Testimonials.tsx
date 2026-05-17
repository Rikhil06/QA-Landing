"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Annoture cut our bug reporting time by 80%. Our developers now get exactly what they need — screenshot, URL, browser version — without any back-and-forth.",
    author: "Sarah Chen",
    role: "Head of QA",
    company: "Flowbase",
    avatar: "SC",
    gradient: "from-violet-500 to-blue-500",
  },
  {
    quote:
      "The Chrome extension is brilliant. I just click the problem and move on. No more screenshotting, cropping, uploading to Slack, and hoping someone understands.",
    author: "Marcus Webb",
    role: "Lead Developer",
    company: "BuildStack",
    avatar: "MW",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    quote:
      "We run QA for 12 client sites simultaneously. Annoture's board permissions and multi-project support are exactly what we needed. The agency plan pays for itself.",
    author: "Priya Mehta",
    role: "Founder",
    company: "PixelAgency",
    avatar: "PM",
    gradient: "from-pink-500 to-violet-500",
  },
  {
    quote:
      "Setup took 3 minutes. First bug was captured and on the board in under a minute. I don't know how we managed without this before.",
    author: "Tom Fischer",
    role: "Product Manager",
    company: "Launchpad",
    avatar: "TF",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    quote:
      "The automatic metadata collection is a game changer. We stopped playing 'what browser were you using?' with clients entirely.",
    author: "Ana Rivera",
    role: "CTO",
    company: "Softlane",
    avatar: "AR",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    quote:
      "Our remote team across 4 timezones now has a single source of truth for every bug. Annoture's real-time board keeps everyone aligned.",
    author: "James Park",
    role: "Engineering Lead",
    company: "Orbitly",
    avatar: "JP",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function Testimonials() {
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
    <section ref={sectionRef} className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="section-animate text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium mb-5">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            4.9/5 from 500+ reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Loved by QA teams
            <br />
            <span className="gradient-text">everywhere</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="stagger-children columns-1 md:columns-2 lg:columns-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-5 mb-4 break-inside-avoid">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-white/65 leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-[11px] font-bold text-white shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-white">{t.author}</div>
                  <div className="text-[11px] text-white/35">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
