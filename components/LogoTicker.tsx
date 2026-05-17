"use client";

const companies = [
  "Vercel",
  "Linear",
  "Notion",
  "Figma",
  "GitHub",
  "Stripe",
  "Loom",
  "Intercom",
  "Sentry",
  "Datadog",
];

export default function LogoTicker() {
  return (
    <section className="relative py-12 border-y border-white/6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-transparent to-[#0F0F0F] z-10 pointer-events-none" />
      <p className="text-center text-xs uppercase tracking-widest text-white/25 mb-8 font-medium">
        Trusted by teams at
      </p>
      <div className="flex overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...companies, ...companies].map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-white/20 hover:text-white/40 transition-colors shrink-0"
            >
              <div className="w-4 h-4 rounded bg-white/10" />
              <span className="text-sm font-semibold tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
