import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import InlineText, { plainText } from "@/components/InlineText";
import { competitors, getCompetitor } from "@/lib/competitors";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return competitors.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const competitor = getCompetitor(slug);
  if (!competitor) return {};
  const url = `https://annoture.com/compare/${slug}`;
  return {
    title: competitor.seoTitle,
    description: competitor.seoDescription,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title: competitor.seoTitle,
      description: competitor.seoDescription,
      type: "website",
      url,
      images: [{ url: "https://annoture.com/opengraph-image", width: 1200, height: 630, alt: "Annoture — Visual QA Bug Capture Tool" }],
    },
    twitter: {
      card: "summary_large_image",
      images: ["https://annoture.com/opengraph-image"],
    },
  };
}

function Mark({ value }: { value: boolean }) {
  return value ? (
    <svg className="w-5 h-5 text-emerald-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="Yes">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    <svg className="w-5 h-5 text-white/25 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="No">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default async function CompetitorAlternativePage({ params }: Props) {
  const { slug } = await params;
  const competitor = getCompetitor(slug);
  if (!competitor) notFound();

  const { name, heading, subheading, chooseAnnoture, chooseCompetitor, pricing, features,
          switchSteps, faqs, pricingUrl, pricingCheckedOn } = competitor;
  const others = competitors.filter((c) => c.slug !== slug);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: plainText(f.answer) },
    })),
  };

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% -10%, rgba(139,92,246,0.12) 0%, transparent 60%)" }}
        />
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-white/40 mb-8">
            <Link href="/compare/bugherd-and-marker-io" className="hover:text-white/70 transition-colors">Compare</Link>
            <span aria-hidden>/</span>
            <span className="text-white/60">{name} alternative</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            {heading}
          </h1>
          <p className="text-base sm:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
            {subheading}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.annoture.com/register"
              className="px-7 py-3.5 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all active:scale-95"
            >
              Try Annoture free →
            </a>
            <a
              href="https://chromewebstore.google.com/detail/annoture/bmamimdeecmfddopfkkcfphkddigpimc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl glass border border-white/10 text-white/80 font-medium text-sm hover:text-white hover:border-white/20 transition-all"
            >
              Add to Chrome — it&apos;s free
            </a>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          <div className="glass-card rounded-2xl p-7 border border-violet-500/25">
            <h2 className="text-xl font-bold text-white mb-5">Choose Annoture if…</h2>
            <ul className="space-y-3">
              {chooseAnnoture.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/65 leading-relaxed">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><InlineText text={item} /></span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-5">Stick with {name} if…</h2>
            <ul className="space-y-3">
              {chooseCompetitor.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/65 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" aria-hidden />
                  <span><InlineText text={item} /></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 md:py-20 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            {name} vs Annoture pricing
          </h2>
          <p className="text-white/50 text-center max-w-xl mx-auto mb-10">
            Side by side on the things that decide the bill.
          </p>
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b border-white/8">
                    <th scope="col" className="text-left p-4 text-white/50 font-medium">&nbsp;</th>
                    <th scope="col" className="text-left p-4 text-white/70 font-semibold">{name}</th>
                    <th scope="col" className="text-left p-4 font-semibold">
                      <span className="gradient-text">Annoture</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((row) => (
                    <tr key={row.label} className="border-b border-white/5 last:border-0">
                      <th scope="row" className="text-left p-4 text-white/75 font-medium">{row.label}</th>
                      <td className="p-4 text-white/60">{row.competitor}</td>
                      <td className="p-4 text-emerald-300">{row.annoture}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-white/40 mt-4 text-center leading-relaxed">
            {name} prices are in US dollars and Annoture&apos;s are in pounds. {name} pricing taken from{" "}
            <a href={pricingUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white/70">
              its pricing page
            </a>{" "}
            on {pricingCheckedOn}; check there for the latest figures.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Feature comparison
          </h2>
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="border-b border-white/8">
                    <th scope="col" className="text-left p-4 text-white/50 font-medium">Feature</th>
                    <th scope="col" className="p-4 text-center text-white/70 font-semibold w-32">{name}</th>
                    <th scope="col" className="p-4 text-center font-semibold w-32">
                      <span className="gradient-text">Annoture</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((row) => (
                    <tr key={row.label} className="border-b border-white/5 last:border-0">
                      <th scope="row" className="text-left p-4 font-normal">
                        <span className="text-white/75">{row.label}</span>
                        {row.note && <span className="block text-xs text-white/40 mt-1">{row.note}</span>}
                      </th>
                      <td className="p-4"><Mark value={row.competitor} /></td>
                      <td className="p-4"><Mark value={row.annoture} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Switching */}
      <section className="px-6 py-16 md:py-20 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Switching from {name}
          </h2>
          <ol className="space-y-6">
            {switchSteps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="shrink-0 w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center text-sm font-bold text-violet-300">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">
                    <InlineText text={step.description} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            {name} alternative FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.question} className="glass-card rounded-xl p-6">
                <h3 className="text-base font-semibold text-white mb-2">{f.question}</h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  <InlineText text={f.answer} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related comparisons + CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Try Annoture free</h2>
          <p className="text-white/50 leading-relaxed mb-8">
            No card and no trial countdown. Install the extension and capture your first bug in under a minute.
          </p>
          <a
            href="https://app.annoture.com/register"
            className="inline-flex px-7 py-3.5 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all active:scale-95"
          >
            Get started for free →
          </a>
          <div className="mt-8 pt-6 border-t border-white/8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/compare/bugherd-and-marker-io" className="text-white/50 hover:text-white/80 transition-colors">
              Annoture vs BugHerd vs Marker.io
            </Link>
            {others.map((c) => (
              <Link key={c.slug} href={`/compare/${c.slug}`} className="text-white/50 hover:text-white/80 transition-colors">
                {c.name} alternative
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
