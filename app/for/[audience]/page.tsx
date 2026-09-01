import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { audiences, getAudience } from "@/lib/audiences";

type Props = { params: Promise<{ audience: string }> };

export async function generateStaticParams() {
  return audiences.map((a) => ({ audience: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { audience } = await params;
  const page = getAudience(audience);
  if (!page) return {};
  const url = `https://annoture.com/for/${audience}`;
  return {
    title: `Annoture for ${page.name}`,
    description: page.subheadline,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title: `Annoture for ${page.name}`,
      description: page.subheadline,
      url,
      images: [{ url: "https://annoture.com/opengraph-image", width: 1200, height: 630, alt: `Annoture for ${page.name}` }],
    },
  };
}

export default async function AudiencePage({ params }: Props) {
  const { audience } = await params;
  const page = getAudience(audience);
  if (!page) notFound();

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, rgba(139,92,246,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            Annoture for {page.name}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            {page.headline}
          </h1>
          <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto mb-10">
            {page.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.annoture.com/register"
              className="px-6 py-3 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all duration-200 active:scale-95"
            >
              Get started for free →
            </a>
            <a
              href="https://chromewebstore.google.com/detail/annoture/bmamimdeecmfddopfkkcfphkddigpimc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/10 text-white/70 text-sm font-medium hover:text-white hover:border-white/20 transition-all"
            >
              Add to Chrome — it&apos;s free
            </a>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-widest text-center mb-10">Sound familiar?</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {page.painPoints.map((p, i) => (
              <div key={i} className="glass-card rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">How Annoture helps</p>
            <h2 className="text-3xl font-bold text-white">Everything your team needs</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {page.features.map((f, i) => (
              <div key={i} className="glass-card rounded-xl p-6 flex gap-4">
                <span className="text-2xl shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1.5">{f.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">The workflow</p>
            <h2 className="text-3xl font-bold text-white">From bug to board in under 10 seconds</h2>
          </div>
          <div className="space-y-6">
            {page.workflow.map((w, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                  <span className="text-xs font-mono font-bold text-violet-400">{w.step}</span>
                </div>
                <div className="pt-1.5">
                  <h3 className="text-white font-semibold mb-1">{w.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-8 sm:p-10 text-center">
            <svg className="w-8 h-8 text-violet-400/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg text-white/70 italic leading-relaxed mb-6">{page.quote.text}</p>
            <div>
              <p className="text-sm font-semibold text-white">{page.quote.author}</p>
              <p className="text-xs text-white/35 mt-0.5">{page.quote.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-2xl border border-white/8 bg-white/2 p-10">
            <h2 className="text-2xl font-bold text-white mb-3">{page.ctaHeadline}</h2>
            <p className="text-white/50 mb-8 leading-relaxed">{page.ctaBody}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.annoture.com/register"
                className="px-6 py-3 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all duration-200 active:scale-95"
              >
                Get started for free →
              </a>
              <Link href="/features" className="text-sm text-white/45 hover:text-white/70 transition-colors">
                See all features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
