import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { integrations, availableIntegrations, comingSoonIntegrations } from "@/lib/integrations";

export const metadata: Metadata = {
  title: "Integrations — Connect Annoture to Your Stack",
  description:
    "Annoture integrates with GitHub, Jira, Slack, Linear, and more. Automatically create issues, notify your team, and keep everyone in sync — without leaving your workflow.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Integrations — Connect Annoture to Your Stack",
    description:
      "Automatically sync bug reports with GitHub, Jira, Slack, Linear, and more.",
    type: "website",
  },
};

const categoryColors: Record<string, string> = {
  "Issue Tracking":     "bg-violet-500/10 text-violet-300 border-violet-500/20",
  "Project Management": "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  "Communication":      "bg-pink-500/10 text-pink-300 border-pink-500/20",
  "Design":             "bg-orange-500/10 text-orange-300 border-orange-500/20",
  "CI/CD":              "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
};

function categoryClass(cat: string) {
  return categoryColors[cat] ?? "bg-white/10 text-white/50 border-white/10";
}

function IntegrationCard({ slug, name, tagline, category, status, icon, viewBox, color }: {
  slug: string; name: string; tagline: string; category: string;
  status: string; icon: string; viewBox?: string; color: string;
}) {
  return (
    <Link
      href={`/integrations/${slug}`}
      className="group glass-card rounded-2xl p-7 flex flex-col gap-5 hover:border-white/15 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className={`w-12 h-12 rounded-xl ${color} border border-white/8 flex items-center justify-center shrink-0`}>
          <svg viewBox={viewBox ?? "0 0 24 24"} className="w-6 h-6 fill-current text-white/80" aria-hidden>
            <path d={icon} />
          </svg>
        </div>
        {status === 'coming-soon' && (
          <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-white/6 border border-white/10 text-white/40 tracking-wide uppercase shrink-0">
            Coming soon
          </span>
        )}
        {status === 'available' && (
          <span className="flex items-center gap-1.5 text-[10px] font-semibold px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 tracking-wide uppercase shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Live
          </span>
        )}
      </div>

      <div>
        <div className="flex items-center gap-2.5 mb-2">
          <h3 className="text-base font-semibold text-white group-hover:text-violet-300 transition-colors">{name}</h3>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${categoryClass(category)}`}>
            {category}
          </span>
        </div>
        <p className="text-sm text-white/50 leading-relaxed">{tagline}</p>
      </div>

      <div className="mt-auto flex items-center gap-1.5 text-xs font-medium text-white/30 group-hover:text-violet-400 transition-colors">
        Learn more
        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

export default function IntegrationsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% -10%, rgba(139,92,246,0.15) 0%, transparent 60%)" }}
        />
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            {integrations.length} integrations and counting
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">
            Connect Annoture to<br className="hidden sm:block" /> your whole stack
          </h1>
          <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
            Bug reports captured through Annoture flow automatically into the tools your team already lives in — no manual copy-pasting, no context switching.
          </p>
        </div>
      </section>

      {/* Available integrations */}
      {availableIntegrations.length > 0 && (
        <section className="px-6 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-lg font-semibold text-white">Available now</h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                {availableIntegrations.length} live
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableIntegrations.map((i) => (
                <IntegrationCard key={i.slug} {...i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coming soon integrations */}
      {comingSoonIntegrations.length > 0 && (
        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-lg font-semibold text-white">Coming soon</h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/6 border border-white/10 text-white/40">
                {comingSoonIntegrations.length} in progress
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {comingSoonIntegrations.map((i) => (
                <IntegrationCard key={i.slug} {...i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Request an integration */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto text-center glass-card rounded-2xl p-10">
          <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Missing an integration?</h2>
          <p className="text-white/50 leading-relaxed mb-8">
            Tell us which tool you need and we&apos;ll prioritise it. Most requests become integrations within a few weeks.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 text-white font-semibold text-sm hover:bg-violet-500 transition-all active:scale-95"
          >
            Request an integration
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
