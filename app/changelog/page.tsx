import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { changelog } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Changelog",
  description: "What's new in Annoture — release notes, new features, improvements, and fixes.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://annoture.com/changelog" },
};

const tagConfig = {
  feature:     { label: "Feature",     className: "bg-violet-500/15 text-violet-300 border-violet-500/20" },
  improvement: { label: "Improvement", className: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
  fix:         { label: "Fix",         className: "bg-amber-500/15 text-amber-300 border-amber-500/20" },
  security:    { label: "Security",    className: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20" },
};

export default function ChangelogPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, rgba(139,92,246,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Always improving
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Changelog
          </h1>
          <p className="text-lg text-white/50 leading-relaxed">
            Every update, new feature, and fix — in one place.
          </p>
        </div>
      </section>

      {/* Entries */}
      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-white/15 via-white/8 to-transparent" />

            <div className="space-y-16 pl-8">
              {changelog.map((entry) => {
                const tag = tagConfig[entry.tag];
                return (
                  <div key={entry.version} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-8 top-1 w-2 h-2 rounded-full bg-violet-400 ring-4 ring-[#0F0F0F]" />

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-xs font-mono font-semibold text-white/50">v{entry.version}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${tag.className}`}>
                        {tag.label}
                      </span>
                      <span className="text-xs text-white/30">{entry.date}</span>
                    </div>

                    <h2 className="text-lg font-bold text-white mb-4">{entry.title}</h2>

                    <ul className="space-y-2.5">
                      {entry.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-white/55 leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-white/25 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
