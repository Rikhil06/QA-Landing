import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Annoture vs BugHerd vs Marker.io — Visual Bug Reporting Compared",
  description:
    "See how Annoture compares to BugHerd and Marker.io on pricing, free tier, and features. Annoture is the only one of the three with a genuinely free plan.",
  alternates: {
    canonical: "https://annoture.com/compare/bugherd-and-marker-io",
  },
  openGraph: {
    title: "Annoture vs BugHerd vs Marker.io — Visual Bug Reporting Compared",
    description:
      "BugHerd and Marker.io both start at $39/month with no free tier. Annoture gives you 100 screenshots a month free, forever.",
    url: "https://annoture.com/compare/bugherd-and-marker-io",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does BugHerd or Marker.io have a free plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. BugHerd offers a 7-day free trial and Marker.io offers a 15-day free trial, but neither has a permanently free tier — both require a paid plan starting at $39/month once the trial ends. Annoture has a genuinely free plan with no time limit: 3 projects, 5 team members, and 100 screenshots a month at no cost.",
      },
    },
    {
      "@type": "Question",
      name: "What's the cheapest paid plan across Annoture, BugHerd, and Marker.io?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BugHerd's Standard plan and Marker.io's Starter plan are both $39/month. Annoture's Starter plan is £15/month (roughly $19), making it the cheapest paid entry point of the three while including 300 screenshots a month and 10 team members.",
      },
    },
    {
      "@type": "Question",
      name: "Do Annoture, BugHerd, and Marker.io all work as a Chrome extension?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all three offer a browser-based capture tool. The difference is what happens after capture: BugHerd and Marker.io are built to forward feedback into your existing project management tool, while Annoture includes its own Kanban board out of the box, so you don't need a separate tool to track and resolve issues.",
      },
    },
    {
      "@type": "Question",
      name: "Is Annoture a replacement for BugHerd or Marker.io?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Annoture covers the same core workflow (click an element, capture a screenshot with full context, file a report) and adds a built-in Kanban board, so most teams don't need a separate project management tool alongside it.",
      },
    },
  ],
};

const pricingRows = [
  { plan: "Free / entry trial", bugherd: "7-day trial only", marker: "15-day trial only", annoture: "Free forever" },
  { plan: "Cheapest paid plan", bugherd: "$39/mo (5 members)", marker: "$39/mo (3 users)", annoture: "£15/mo (10 members)" },
  { plan: "Screenshots / month", bugherd: "Unlimited (paid only)", marker: "Unlimited (paid only)", annoture: "100/mo free, 300/mo on Starter" },
  { plan: "Mid-tier plan", bugherd: "$59/mo · 10 members", marker: "$149/mo · 15 users", annoture: "£39/mo · unlimited" },
  { plan: "Built-in Kanban board", bugherd: "No — exports to your PM tool", marker: "No — exports to your PM tool", annoture: "Yes, included on every plan" },
];

const featureRows = [
  { label: "One-click screenshot capture", bugherd: true, marker: true, annoture: true },
  { label: "Auto-captured URL, browser, OS", bugherd: true, marker: true, annoture: true },
  { label: "DOM element / CSS selector capture", bugherd: true, marker: true, annoture: true },
  { label: "Free tier with no time limit", bugherd: false, marker: false, annoture: true },
  { label: "Built-in Kanban board", bugherd: false, marker: false, annoture: true },
  { label: "Session replay / console logs", bugherd: false, marker: true, annoture: false },
  { label: "Native Jira / Trello export", bugherd: true, marker: true, annoture: true },
];

function Check({ value }: { value: boolean }) {
  return value ? (
    <svg className="w-4 h-4 text-emerald-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    <svg className="w-4 h-4 text-white/15 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function ComparePage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Comparison
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Annoture vs BugHerd
            <br />
            <span className="gradient-text">vs Marker.io</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/50 w-[min(42rem,100vw-3rem)] mx-auto leading-relaxed mb-10">
            BugHerd and Marker.io both start at $39/month with nothing but a
            time-limited trial before that. Annoture has a free plan that
            never expires — 100 screenshots a month, on the house.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all hover:shadow-xl hover:shadow-white/15 active:scale-95"
          >
            Try Annoture free →
          </a>
          <p className="text-xs text-white/30 mt-4">
            Pricing shown in source currency for each tool — BugHerd and
            Marker.io in USD, Annoture in GBP. Figures current as of this
            page&apos;s last update; check each provider&apos;s site for the
            latest pricing.
          </p>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="relative py-16 md:py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The free tier difference
            </h2>
            <p className="text-white/45 max-w-lg mx-auto">
              Both competitors make you commit to a card before you can
              properly try the product. Annoture doesn&apos;t.
            </p>
          </div>
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/8">
                    <th className="text-left p-4 text-xs text-white/40 font-medium">Aspect</th>
                    <th className="p-4 text-center text-xs font-semibold text-white/40">BugHerd</th>
                    <th className="p-4 text-center text-xs font-semibold text-white/40">Marker.io</th>
                    <th className="p-4 text-center text-xs font-semibold">
                      <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Annoture</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, i) => (
                    <tr key={row.plan} className={`border-b border-white/4 ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                      <td className="p-4 text-xs text-white/60">{row.plan}</td>
                      <td className="p-4 text-center text-xs text-white/50">{row.bugherd}</td>
                      <td className="p-4 text-center text-xs text-white/50">{row.marker}</td>
                      <td className="p-4 text-center text-xs text-emerald-400">{row.annoture}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison */}
      <section className="relative py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Feature by feature
            </h2>
            <p className="text-white/45 max-w-lg mx-auto">
              All three tools capture a good screenshot. Here&apos;s where they
              actually differ.
            </p>
          </div>
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px]">
                <thead>
                  <tr className="border-b border-white/8">
                    <th className="text-left p-4 text-xs text-white/40 font-medium">Feature</th>
                    <th className="p-4 text-center text-xs font-semibold text-white/40">BugHerd</th>
                    <th className="p-4 text-center text-xs font-semibold text-white/40">Marker.io</th>
                    <th className="p-4 text-center text-xs font-semibold">
                      <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Annoture</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featureRows.map((row, i) => (
                    <tr key={row.label} className={`border-b border-white/4 ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                      <td className="p-4 text-xs text-white/60">{row.label}</td>
                      <td className="p-4"><Check value={row.bugherd} /></td>
                      <td className="p-4"><Check value={row.marker} /></td>
                      <td className="p-4"><Check value={row.annoture} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-white/30 mt-4 text-center">
            Marker.io&apos;s session replay and console log recording are only
            available on its Team plan ($149/mo) and above.
          </p>
        </div>
      </section>

      {/* Why teams switch */}
      <section className="relative py-16 md:py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why teams choose <span className="gradient-text">Annoture</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "🆓",
                title: "No card required to start",
                body: "BugHerd and Marker.io both require a trial sign-up that ends in a paywall. Annoture's free plan has no expiry date.",
              },
              {
                icon: "📋",
                title: "One tool, not two",
                body: "BugHerd and Marker.io forward reports into a separate project management tool. Annoture's Kanban board is built in — there's nothing else to set up.",
              },
              {
                icon: "💷",
                title: "Lower entry price",
                body: "Annoture's Starter plan is roughly half the price of BugHerd's or Marker.io's cheapest paid tier, with more screenshots included.",
              },
              {
                icon: "👥",
                title: "More members per plan",
                body: "Marker.io's Starter plan caps out at 3 users for $39/month. Annoture's Starter plan includes 10 team members for less.",
              },
              {
                icon: "⚡",
                title: "Same capture quality",
                body: "Full-page screenshots, URL, browser, OS, viewport, and the exact CSS selector — captured automatically, just like the competition.",
              },
              {
                icon: "🔄",
                title: "Still exports where you need it",
                body: "Connect Annoture to Jira, Trello, or export to PDF when you need to hand work off to a tool your client already uses.",
              },
            ].map((item) => (
              <div key={item.title} className="glass-card p-5 rounded-2xl">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        heading="Comparison questions"
        subheading="Common questions when weighing up Annoture against BugHerd and Marker.io."
        items={[
          {
            question: "Does BugHerd or Marker.io have a free plan?",
            answer:
              "No. BugHerd offers a 7-day free trial and Marker.io offers a 15-day free trial, but neither has a permanently free tier — both require a paid plan starting at $39/month once the trial ends. Annoture has a genuinely free plan with no time limit: 3 projects, 5 team members, and 100 screenshots a month at no cost.",
          },
          {
            question: "What's the cheapest paid plan across Annoture, BugHerd, and Marker.io?",
            answer:
              "BugHerd's Standard plan and Marker.io's Starter plan are both $39/month. Annoture's Starter plan is £15/month (roughly $19), making it the cheapest paid entry point of the three while including 300 screenshots a month and 10 team members.",
          },
          {
            question: "Do Annoture, BugHerd, and Marker.io all work as a Chrome extension?",
            answer:
              "Yes, all three offer a browser-based capture tool. The difference is what happens after capture: BugHerd and Marker.io are built to forward feedback into your existing project management tool, while Annoture includes its own Kanban board out of the box, so you don't need a separate tool to track and resolve issues.",
          },
          {
            question: "Is Annoture a replacement for BugHerd or Marker.io?",
            answer:
              "Yes — Annoture covers the same core workflow (click an element, capture a screenshot with full context, file a report) and adds a built-in Kanban board, so most teams don't need a separate project management tool alongside it.",
          },
        ]}
      />

      {/* CTA */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card p-10 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-violet-500/8" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                See the difference yourself
              </h2>
              <p className="text-white/45 mb-8 max-w-md mx-auto">
                No card, no trial countdown. Just sign up and start capturing
                bugs in under a minute.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all hover:shadow-2xl hover:shadow-white/15 active:scale-95"
              >
                Get early access →
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
