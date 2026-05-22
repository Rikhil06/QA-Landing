"use client";

import { useEffect, useRef, useState } from "react";

type Plan = {
  name: string;
  monthlyPrice: number | string | null;
  yearlyPrice: number | string | null;
  gradient: string;
  gradientBg: string;
  highlighted: boolean;
  badge?: string;
  cta: string;
  features: string[];
  limits: {
    projects: string;
    members: string;
    screenshots: string;
    retention: string;
  };
};

const plans: Plan[] = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    gradient: "from-emerald-500 to-teal-500",
    gradientBg: "from-emerald-500/5 to-teal-500/5",
    highlighted: false,
    cta: "Notify me",
    limits: {
      projects: "3 projects",
      members: "5 members",
      screenshots: "25 / month",
      retention: "7 days",
    },
    features: [
      "Chrome extension",
      "Kanban board",
      "Screenshot capture",
      "Basic annotations & comments",
    ],
  },
  {
    name: "Starter",
    monthlyPrice: "TBC",
    yearlyPrice: "TBC",
    gradient: "from-blue-500 to-cyan-500",
    gradientBg: "from-blue-500/5 to-cyan-500/5",
    highlighted: false,
    cta: "Notify me",
    limits: {
      projects: "5 projects",
      members: "10 members",
      screenshots: "300 / month",
      retention: "90 days",
    },
    features: [
      "Everything in Free",
      "Unlimited comments",
      "Priority support",
    ],
  },
  {
    name: "Team",
    monthlyPrice: "TBC",
    yearlyPrice: "TBC",
    gradient: "from-violet-500 to-pink-500",
    gradientBg: "from-violet-500/10 to-pink-500/10",
    highlighted: true,
    // badge: "Most popular",
    cta: "Notify me",
    limits: {
      projects: "Unlimited",
      members: "Unlimited",
      screenshots: "Unlimited",
      retention: "Unlimited",
    },
    features: [
      "Everything in Starter",
      "Board-level permissions",
      "Long-term storage",
      "Priority processing",
    ],
  },
  {
    name: "Agency",
    monthlyPrice: "TBC",
    yearlyPrice: "TBC",
    gradient: "from-orange-500 to-red-500",
    gradientBg: "from-orange-500/5 to-red-500/5",
    highlighted: false,
    cta: "Notify me",
    limits: {
      projects: "Custom",
      members: "Custom",
      screenshots: "Custom",
      retention: "Custom",
    },
    features: [
      "Everything in Team",
      "White labelling",
      "Client-specific boards",
      "Exports (PDF, Jira, Trello)",
      "SSO",
      "Custom retention",
    ],
  },
];

const comparisonRows = [
  { label: "Projects", key: "projects" as const },
  { label: "Team members", key: "members" as const },
  { label: "Screenshots / mo", key: "screenshots" as const },
  { label: "Data retention", key: "retention" as const },
];

const featureRows = [
  { label: "Chrome extension", plans: [true, true, true, true] },
  { label: "Kanban board", plans: [true, true, true, true] },
  { label: "Screenshot capture", plans: [true, true, true, true] },
  { label: "Basic annotations & comments", plans: [true, true, true, true] },
  { label: "Unlimited comments", plans: [false, true, true, true] },
  { label: "Priority support", plans: [false, true, true, true] },
  { label: "Board permissions", plans: [false, false, true, true] },
  { label: "Long-term storage", plans: [false, false, true, true] },
  { label: "Priority processing", plans: [false, false, true, true] },
  { label: "White labelling", plans: [false, false, false, true] },
  { label: "Client-specific boards", plans: [false, false, false, true] },
  { label: "Exports (PDF, Jira, Trello)", plans: [false, false, false, true] },
  { label: "SSO", plans: [false, false, false, true] },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
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
    <section id="pricing" ref={sectionRef} className="relative py-16 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="section-animate text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Simple pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Start free.
            <br />
            <span className="gradient-text">Scale when you need to.</span>
          </h2>
          <p className="text-lg text-white/45 max-w-lg mx-auto mb-8">
            No credit card required. Cancel anytime. Every plan includes the Chrome extension.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-xl bg-white/5 border border-white/8">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                !yearly ? "bg-white text-[#0F0F0F]" : "text-white/50 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                yearly ? "bg-white text-[#0F0F0F]" : "text-white/50 hover:text-white"
              }`}
            >
              Yearly
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold transition-all ${
                yearly ? "bg-emerald-500/20 text-emerald-600" : "bg-emerald-500/15 text-emerald-400"
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans grid */}
        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} yearly={yearly} />
          ))}
        </div>

        {/* Comparison table toggle */}
        <div className="section-animate text-center mb-6">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            {showComparison ? "Hide" : "Show"} full comparison
            <svg
              className={`w-4 h-4 transition-transform ${showComparison ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Comparison table */}
        {showComparison && (
          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="text-left p-4 text-xs text-white/40 font-medium w-48">Feature</th>
                  {plans.map((p) => (
                    <th key={p.name} className="p-4 text-center">
                      <span className={`text-sm font-semibold bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent`}>
                        {p.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Limits */}
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-white/4 hover:bg-white/2 transition-colors">
                    <td className="p-4 text-xs text-white/50">{row.label}</td>
                    {plans.map((p) => (
                      <td key={p.name} className="p-4 text-center text-xs text-white/60">
                        {p.limits[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Features */}
                {featureRows.map((row) => (
                  <tr key={row.label} className="border-b border-white/4 hover:bg-white/2 transition-colors">
                    <td className="p-4 text-xs text-white/50">{row.label}</td>
                    {row.plans.map((enabled, i) => (
                      <td key={i} className="p-4 text-center">
                        {enabled ? (
                          <svg className="w-4 h-4 text-emerald-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-white/15 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function PricingCard({ plan, yearly }: { plan: Plan; yearly: boolean }) {
  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <div
      className={`relative rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden ${
        plan.highlighted
          ? "border-white/15 bg-[#1C1C1C] scale-[1.02] shadow-2xl shadow-violet-500/10"
          : "border-white/8 bg-[#1A1A1A] hover:border-white/12"
      }`}
    >
      {/* Gradient top bar */}
      <div
        className={`h-0.5 w-full bg-gradient-to-r ${plan.gradient} ${plan.highlighted ? "opacity-100" : "opacity-30"}`}
      />

      {/* Badge */}
      {plan.badge && (
        <div className="absolute top-3 right-3">
          <span className={`text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r ${plan.gradient} text-white font-semibold shadow-lg`}>
            {plan.badge}
          </span>
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        {/* Plan name */}
        <div className="mb-4">
          <div
            className={`text-xs font-bold uppercase tracking-widest mb-1 bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}
          >
            {plan.name}
          </div>
        </div>

        {/* Price */}
        <div className="mb-5">
          {price === null ? (
            <div className="text-3xl font-bold text-white">Custom</div>
          ) : price === 0 ? (
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-white">Free</span>
              <span className="text-sm text-white/30">forever</span>
            </div>
          ) : typeof price === "string" ? (
            <div className="text-3xl font-bold text-white">{price}</div>
          ) : (
            <div className="flex items-baseline gap-1">
              <span className="text-white/40 text-lg">£</span>
              <span className="text-3xl font-bold text-white">{price}</span>
              <span className="text-sm text-white/30">/ mo</span>
            </div>
          )}
          {yearly && typeof price === "number" && price > 0 && (
            <div className="text-[11px] text-emerald-400 mt-1">
              {`Billed £${(price * 12).toFixed(0)} / year`}
            </div>
          )}
        </div>

        {/* Limits */}
        <div className={`rounded-xl p-3 mb-4 bg-gradient-to-br ${plan.gradientBg}`}>
          <div className="grid grid-cols-2 gap-1.5">
            {Object.entries(plan.limits).map(([key, val]) => (
              <div key={key}>
                <div className="text-[9px] text-white/30 uppercase tracking-wide">{key}</div>
                <div className="text-[11px] text-white/80 font-medium">{val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6 flex-1">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 flex-shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[12px] text-white/55">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 text-center ${
            plan.highlighted
              ? "bg-white text-[#0F0F0F] hover:bg-white/90 shadow-lg shadow-white/10"
              : "bg-white/8 text-white/80 border border-white/10 hover:bg-white/12 hover:text-white"
          }`}
        >
          {plan.cta}
        </a>
      </div>
    </div>
  );
}
