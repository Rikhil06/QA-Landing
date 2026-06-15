"use client";

import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { useEffect, useRef } from "react";

const values = [
  {
    gradient: "from-violet-500 to-purple-600",
    shadow: "shadow-violet-500/20",
    title: "Speed over ceremony",
    desc: "A bug that takes 30 seconds to file gets filed. One that takes 5 minutes gets forgotten. Every decision we make starts from that truth.",
  },
  {
    gradient: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/20",
    title: "Context is everything",
    desc: "\"It's broken\" tells a developer nothing. Browser, OS, viewport, DOM element, exact URL — that's what turns a vague complaint into a fix in an hour.",
  },
  {
    gradient: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/20",
    title: "Built for the whole team",
    desc: "QA testers capture. Developers fix. Designers review. Project managers track. Everyone gets exactly the view they need — no one has to translate.",
  },
  {
    gradient: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/20",
    title: "Honest and transparent",
    desc: "No hidden limits, no bait-and-switch pricing, no dark patterns. What you see is what you get — and we'll always tell you what we're building next.",
  },
];

export default function AboutContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Hero fade in
    const t = setTimeout(() => heroRef.current?.classList.add("visible"), 100);

    // Scroll observer for other sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, rgba(139,92,246,0.15) 0%, transparent 60%)",
          }}
        />
        <div
          ref={heroRef}
          className="section-animate max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Built by a team that felt the pain
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-white">QA feedback that </span>
            <span className="gradient-text">actually gets fixed</span>
          </h1>
          <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
            We built Annoture because we got tired of the same cycle — vague bug reports, lost screenshots,
            developers asking &quot;where exactly?&quot;, and issues that fell through the cracks between
            tools that were never designed to work together.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 pb-24">
        <div
          ref={(el) => { sectionRefs.current[0] = el; }}
          className="section-animate max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 sm:p-12">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-6">Our story</p>
            <div className="space-y-5 text-white/60 leading-relaxed">
              <p>
                QA testing is one of the most important parts of shipping software — and one of the most
                underserved. Most teams work across a sprawl of tools: screenshots in Slack, notes in Jira
                tickets, video recordings no one watches, and bug reports that lack the one piece of
                information the developer actually needs.
              </p>
              <p>
                We wanted to fix that. Not by building another project management platform, but by solving
                the specific moment where quality feedback gets lost: the instant between <em className="text-white/80">spotting</em> a bug
                and <em className="text-white/80">reporting</em> it.
              </p>
              <p>
                Annoture is a Chrome extension that captures everything a developer needs in a single click —
                the screenshot, the URL, the browser, the OS, the viewport, the exact DOM element. That report
                lands directly on a shared Kanban board, ready to triage. No forms. No copy-pasting. No
                &quot;can you send me a screenshot?&quot;
              </p>
              <p className="text-white/80 font-medium">
                We&apos;re Annoture, a small product team obsessed with removing friction from
                the workflows that slow great software down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div
            ref={(el) => { sectionRefs.current[1] = el; }}
            className="section-animate text-center mb-12"
          >
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">What we believe</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Principles we build by
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                ref={(el) => { sectionRefs.current[2 + i] = el; }}
                className="section-animate glass-card p-6"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${v.gradient} shadow-lg ${v.shadow} flex items-center justify-center mb-4`}>
                  <span className="text-white text-sm font-bold">{i + 1}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-6 pb-24">
        <div
          ref={(el) => { sectionRefs.current[6] = el; }}
          className="section-animate max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border border-white/8 bg-white/2 p-8 sm:p-12">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-6">Who it&apos;s for</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  role: "QA testers",
                  desc: "Capture bugs in one click, no interruption to your testing flow.",
                  color: "text-violet-400",
                  dot: "bg-violet-400",
                },
                {
                  role: "Developers",
                  desc: "Get bug reports with every technical detail already filled in.",
                  color: "text-blue-400",
                  dot: "bg-blue-400",
                },
                {
                  role: "Product teams",
                  desc: "One board. Full visibility. No chasing people for updates.",
                  color: "text-emerald-400",
                  dot: "bg-emerald-400",
                },
              ].map((item) => (
                <div key={item.role}>
                  <div className={`flex items-center gap-2 ${item.color} mb-2`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                    <span className="text-sm font-semibold">{item.role}</span>
                  </div>
                  <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div
          ref={(el) => { sectionRefs.current[7] = el; }}
          className="section-animate max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to try it?
          </h2>
          <p className="text-white/50 mb-8">
            Free plan included. No credit card required. Set up in under 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.annoture.com/register"
              className="px-7 py-3.5 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:shadow-xl hover:shadow-white/15 active:scale-95"
            >
              Get started free →
            </a>
            <Link
              href="/#contact"
              className="px-7 py-3.5 rounded-xl glass text-white/80 font-medium text-sm hover:text-white hover:bg-white/8 transition-all duration-200"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
