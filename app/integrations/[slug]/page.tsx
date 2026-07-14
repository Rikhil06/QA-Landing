import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { integrations, getIntegration } from "@/lib/integrations";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return integrations.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const integration = getIntegration(slug);
  if (!integration) return {};
  return {
    title: `${integration.name} Integration — Annoture`,
    description: integration.description,
    robots: { index: true, follow: true },
    openGraph: {
      title: `${integration.name} Integration — Annoture`,
      description: integration.description,
      type: "website",
    },
  };
}

export default async function IntegrationPage({ params }: Props) {
  const { slug } = await params;
  const integration = getIntegration(slug);
  if (!integration) notFound();

  const { name, tagline, description, category, status, icon, viewBox, color,
          textColor, borderColor, bgColor, features, howItWorks, setupUrl, docsNote } = integration;

  const categoryBadge = `${bgColor} ${textColor} border ${borderColor}`;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% -10%, rgba(139,92,246,0.12) 0%, transparent 60%)" }}
        />
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/30 mb-10">
            <Link href="/integrations" className="hover:text-white/60 transition-colors">Integrations</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white/50">{name}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
            {/* Logo */}
            <div className={`w-16 h-16 rounded-2xl ${color} border border-white/10 flex items-center justify-center shrink-0`}>
              <svg viewBox={viewBox ?? "0 0 24 24"} className="w-8 h-8 fill-current text-white/85" aria-hidden>
                <path d={icon} />
              </svg>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h1 className="text-3xl sm:text-4xl font-bold text-white">{name}</h1>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryBadge}`}>{category}</span>
                {status === 'available' ? (
                  <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Live
                  </span>
                ) : (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/6 border border-white/10 text-white/40">
                    Coming soon
                  </span>
                )}
              </div>
              <p className="text-xl text-white/70 leading-snug font-medium">{tagline}</p>
            </div>
          </div>

          <p className="text-base text-white/50 leading-relaxed mb-10 max-w-2xl">{description}</p>

          {status === 'available' ? (
            <div className="flex flex-wrap gap-3">
              <Link
                href={setupUrl ?? '/contact'}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 text-white font-semibold text-sm hover:bg-violet-500 transition-all active:scale-95"
              >
                Set up {name} integration
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </Link>
              <Link
                href="/integrations"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-white/60 font-medium text-sm hover:border-white/20 hover:text-white/80 transition-all"
              >
                ← All integrations
              </Link>
            </div>
          ) : (
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/8 border border-white/10 text-white/70 font-semibold text-sm hover:bg-white/12 hover:text-white transition-all"
              >
                Request early access
              </Link>
              <Link
                href="/integrations"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-white/50 font-medium text-sm hover:border-white/20 hover:text-white/70 transition-all"
              >
                ← All integrations
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-10">What you get</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={i} className="glass-card rounded-xl p-6">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-10">How it works</h2>
          <div className="space-y-6">
            {howItWorks.map((s, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-white/4 border border-white/8 flex items-center justify-center">
                  <span className="text-xs font-bold text-violet-400">{s.step}</span>
                </div>
                <div className="pb-6 border-b border-white/6 flex-1 last:border-0">
                  <h3 className="text-base font-semibold text-white mb-1.5">{s.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
          {docsNote && (
            <p className="mt-8 text-xs text-white/30 leading-relaxed border-t border-white/6 pt-6">{docsNote}</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-10 text-center">
          {status === 'available' ? (
            <>
              <h2 className="text-2xl font-bold text-white mb-3">Ready to connect {name}?</h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Set up takes less than 2 minutes. Connect your account, pick a repo or project, and every bug captured flows in automatically.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href={setupUrl ?? '/contact'}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 text-white font-semibold text-sm hover:bg-violet-500 transition-all active:scale-95"
                >
                  Connect {name} →
                </Link>
                <Link
                  href="/integrations"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/60 font-medium text-sm hover:border-white/20 hover:text-white/80 transition-all"
                >
                  See all integrations
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-white mb-3">{name} integration is coming</h2>
              <p className="text-white/50 leading-relaxed mb-8">
                We&apos;re building this integration now. Leave your email and we&apos;ll notify you the day it launches.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 text-white font-semibold text-sm hover:bg-violet-500 transition-all active:scale-95"
                >
                  Request early access
                </Link>
                <Link
                  href="/integrations"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/60 font-medium text-sm hover:border-white/20 hover:text-white/80 transition-all"
                >
                  See all integrations
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
