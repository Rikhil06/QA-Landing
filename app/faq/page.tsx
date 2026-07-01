import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Annoture",
  description:
    "Answers to common questions about Annoture — the Chrome extension for QA bug capture, Kanban boards, plans, billing, and team collaboration.",
  alternates: {
    canonical: "https://annoture.com/faq",
  },
  openGraph: {
    title: "FAQ — Annoture",
    description:
      "Everything you need to know about Annoture — how it works, what's included in each plan, and how to get started.",
    url: "https://annoture.com/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Annoture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annoture is a QA bug reporting tool. You install a Chrome extension, click it on any website to capture a screenshot with full technical context, and the report lands automatically on a shared Kanban board for your team.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sign up at app.annoture.com, install the Chrome extension from the Chrome Web Store, then click the Annoture icon on any website to start capturing bugs.",
      },
    },
    {
      "@type": "Question",
      name: "Which browsers does Annoture support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annoture currently supports Google Chrome. Support for other Chromium-based browsers (Edge, Brave, Arc) is planned.",
      },
    },
    {
      "@type": "Question",
      name: "Does the extension work on localhost and staging environments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The extension works on any URL you can open in Chrome — including localhost, internal staging environments, and production sites.",
      },
    },
    {
      "@type": "Question",
      name: "What information is captured with each bug report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every report includes a screenshot with your click position marked, the page URL, browser name and version, operating system, screen resolution, viewport size, and any console errors at the time of capture.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Kanban board work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each submitted bug report creates a card on your shared Kanban board. You can drag cards between columns, assign them to team members, set priority levels, and leave comments — all in one place.",
      },
    },
    {
      "@type": "Question",
      name: "Can I invite my team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can invite team members by email from the dashboard. Each plan has a different member limit — see the pricing page for details.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The free plan includes 3 projects, up to 100 screenshots per month, and 2 team members. No credit card required.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my subscription at any time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can cancel anytime from your billing settings. You keep access until the end of your current billing period, then move to the free plan automatically.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to my data if I cancel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your data stays in your account and remains accessible on the free plan. We don't delete your reports or board when you downgrade.",
      },
    },
    {
      "@type": "Question",
      name: "Can I manage multiple client websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can add multiple sites to your account, and each one gets its own Kanban board. The number of sites you can manage depends on your plan.",
      },
    },
    {
      "@type": "Question",
      name: "Does Annoture record screen videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, on Team and above plans. Annoture can capture a short screen recording leading up to your bug capture so developers can see exactly what happened before the issue.",
      },
    },
  ],
};

const categories = [
  {
    title: "Getting started",
    items: [
      {
        question: "What is Annoture?",
        answer:
          "Annoture is a QA bug reporting tool. You install a Chrome extension, click it on any website to capture a screenshot with full technical context, and the report lands automatically on a shared Kanban board for your team.",
      },
      {
        question: "How do I get started?",
        answer:
          "Sign up at app.annoture.com, install the Chrome extension from the Chrome Web Store, then click the Annoture icon on any website to start capturing bugs.",
      },
      {
        question: "Which browsers does Annoture support?",
        answer:
          "Annoture currently supports Google Chrome. Support for other Chromium-based browsers (Edge, Brave, Arc) is planned.",
      },
      {
        question: "Does the extension work on localhost and staging environments?",
        answer:
          "Yes. The extension works on any URL you can open in Chrome — including localhost, internal staging environments, and production sites.",
      },
    ],
  },
  {
    title: "Bug capture",
    items: [
      {
        question: "What information is captured with each bug report?",
        answer:
          "Every report includes a screenshot with your click position marked, the page URL, browser name and version, operating system, screen resolution, viewport size, and any console errors at the time of capture.",
      },
      {
        question: "Does Annoture annotate the screenshot automatically?",
        answer:
          "Yes. When you click to capture a bug, Annoture places a marker on the screenshot at the exact point you clicked. No manual annotation needed.",
      },
      {
        question: "Does Annoture record screen videos?",
        answer:
          "Yes, on Team and above plans. Annoture can capture a short screen recording leading up to your bug capture so developers can see exactly what happened before the issue.",
      },
    ],
  },
  {
    title: "Boards & collaboration",
    items: [
      {
        question: "How does the Kanban board work?",
        answer:
          "Each submitted bug report creates a card on your shared Kanban board. You can drag cards between columns, assign them to team members, set priority levels, and leave comments — all in one place.",
      },
      {
        question: "Can I invite my team?",
        answer:
          "Yes. You can invite team members by email from the dashboard. Each plan has a different member limit — see the pricing page for details.",
      },
      {
        question: "Can I manage multiple client websites?",
        answer:
          "Yes. You can add multiple sites to your account, and each one gets its own Kanban board. The number of sites you can manage depends on your plan.",
      },
    ],
  },
  {
    title: "Plans & billing",
    items: [
      {
        question: "Is there a free plan?",
        answer:
          "Yes. The free plan includes 3 projects, up to 100 screenshots per month, and 2 team members. No credit card required.",
      },
      {
        question: "Can I cancel my subscription at any time?",
        answer:
          "Yes. You can cancel anytime from your billing settings. You keep access until the end of your current billing period, then move to the free plan automatically.",
      },
      {
        question: "What happens to my data if I cancel?",
        answer:
          "Your data stays in your account and remains accessible on the free plan. We don't delete your reports or board when you downgrade.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            FAQ
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
            Frequently asked questions
          </h1>
          <p className="text-base sm:text-lg text-white/50 leading-relaxed">
            Everything you need to know about Annoture. Can&apos;t find your answer?{" "}
            <Link href="/contact" className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2">
              Get in touch.
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-14">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="text-xs font-bold tracking-widest text-violet-400 uppercase mb-5 text-center">
                {cat.title}
              </h2>
              <FAQ items={cat.items} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card p-10 md:p-14 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/8 via-transparent to-blue-500/8" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still have questions?
              </h2>
              <p className="text-white/45 mb-8 max-w-md mx-auto">
                We&apos;re happy to help. Reach out and we&apos;ll get back to you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all hover:shadow-2xl hover:shadow-white/15 active:scale-95"
              >
                Contact us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
