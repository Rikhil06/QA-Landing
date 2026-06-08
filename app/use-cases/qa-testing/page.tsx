import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "QA Testing Tool — Visual Bug Capture for QA Engineers",
  description:
    "Stop wasting time writing bug reports. Annoture captures bugs in one click with automatic screenshots, URL, browser, OS, and element data. Built for QA engineers who need to move fast.",
  alternates: {
    canonical: "https://annoture.com/use-cases/qa-testing",
  },
  openGraph: {
    title: "QA Testing Tool — Visual Bug Capture for QA Engineers",
    description:
      "Stop wasting time writing bug reports. Annoture captures everything automatically in one click. Built for QA engineers.",
    url: "https://annoture.com/use-cases/qa-testing",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to capture a bug with Annoture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under 10 seconds. Click the Annoture icon, click the broken element, add a one-line description, set the severity, and hit Submit. Everything else — screenshot, URL, browser, OS, DOM element — is captured automatically.",
      },
    },
    {
      "@type": "Question",
      name: "What information does Annoture capture automatically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annoture automatically captures the page URL, browser name and version, operating system and version, viewport dimensions, the DOM element (including CSS selector and XPath), and a full-page screenshot with the clicked element annotated.",
      },
    },
    {
      "@type": "Question",
      name: "Does Annoture work on any website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Annoture Chrome extension works on any website or web application — including staging environments, localhost, and production sites.",
      },
    },
    {
      "@type": "Question",
      name: "Do developers need to install anything to receive bug reports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Developers access the shared Kanban board through the Annoture web app. Only QA engineers and testers who want to capture bugs need the Chrome extension.",
      },
    },
  ],
};

const painPoints = [
  {
    icon: "⏱",
    title: "Writing reports takes longer than finding bugs",
    body: "A tester finds a bug in 30 seconds, then spends 10 minutes writing it up with the URL, browser version, steps to reproduce, and a screenshot. That ratio is backwards.",
  },
  {
    icon: "🔁",
    title: "Developers can't reproduce it",
    body: "\"Works on my machine.\" The bug gets closed or sits in limbo because the report didn't include enough technical context. Back to square one.",
  },
  {
    icon: "📁",
    title: "Everything is scattered",
    body: "Screenshots in Slack. Bug reports in spreadsheets. Follow-ups buried in email threads. There's no single place where the team can see what's open, what's being worked on, and what's fixed.",
  },
];

const steps = [
  {
    number: "01",
    title: "Install the Chrome extension",
    body: "Add Annoture to Chrome in one click. It sits in your toolbar, ready to go whenever you need it — no login flow mid-session, no friction.",
  },
  {
    number: "02",
    title: "Find a bug on any web page",
    body: "You're testing a staging environment, a production page, or a new feature. You spot something wrong. Click the Annoture icon in your toolbar.",
  },
  {
    number: "03",
    title: "Click the broken element",
    body: "Annoture highlights elements as you hover. Click on the button, the form field, the image — whatever is broken. A full-page screenshot is captured instantly.",
  },
  {
    number: "04",
    title: "Add a description and severity",
    body: "A small popup opens with the screenshot already attached and the URL, browser, and OS already filled in. Add a one-line description, set the severity, and hit Submit.",
  },
  {
    number: "05",
    title: "It lands on your Kanban board",
    body: "Your team sees the new bug immediately in the Backlog column. Everything is there: the screenshot, the annotation, the URL, the full technical context.",
  },
];

const benefits = [
  {
    gradient: "from-violet-500 to-blue-500",
    title: "Under 10 seconds per report",
    body: "From click to submitted bug report. The only thing you type is a one-line description — everything else is captured for you.",
  },
  {
    gradient: "from-blue-500 to-cyan-500",
    title: "Zero guesswork for developers",
    body: "Exact URL, browser version, OS, viewport, DOM element, and XPath are captured automatically. Developers have what they need from the first read.",
  },
  {
    gradient: "from-emerald-500 to-teal-500",
    title: "One board for the whole team",
    body: "QA, developers, designers, and PMs all see the same Kanban board. No chasing people in Slack to find out if a bug has been picked up.",
  },
  {
    gradient: "from-orange-500 to-red-500",
    title: "Prioritise with severity levels",
    body: "Mark bugs as Critical, High, Medium, or Low at capture time. The team always knows what needs to be fixed right now.",
  },
];

export default function QATestingPage() {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Use case — QA Testing
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            The Chrome extension for QA testing
            <span className="gradient-text"> that writes the report for you</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/50 w-[min(42rem,100vw-3rem)] mx-auto leading-relaxed mb-10">
            One click to capture a bug. Screenshot, URL, browser, OS, and
            element selector — all captured automatically, straight to your
            team's Kanban board.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all hover:shadow-xl hover:shadow-white/15 active:scale-95"
          >
            Get early access →
          </a>
        </div>
      </section>

      {/* Pain points */}
      <section className="relative py-16 md:py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              QA testing shouldn&apos;t feel like{" "}
              <span className="gradient-text">admin work</span>
            </h2>
            <p className="text-white/45 max-w-lg mx-auto">
              The tools most teams use for bug reporting were not built for QA.
              They slow you down when you should be moving fast.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((p) => (
              <div key={p.title} className="glass-card p-6 rounded-2xl">
                <div className="text-2xl mb-4">{p.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your new QA workflow
            </h2>
            <p className="text-white/45 max-w-lg mx-auto">
              From spotting a bug to a fully-documented report on your team's
              board — in under 10 seconds.
            </p>
          </div>
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.number} className="glass-card p-6 rounded-2xl flex gap-5 items-start">
                <div className="text-2xl font-bold bg-gradient-to-br from-violet-500 to-blue-500 bg-clip-text text-transparent shrink-0 w-10 text-right">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-16 md:py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built around{" "}
              <span className="gradient-text">how QA teams actually work</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="glass-card p-6 rounded-2xl relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${b.gradient}`} />
                <h3 className="text-base font-semibold text-white mb-2">{b.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What gets captured */}
      <section className="relative py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-widest text-emerald-400 mb-4">AUTOMATIC CAPTURE</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Stop asking &ldquo;what browser
                <br />
                <span className="gradient-text">were you using?&rdquo;</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                Every bug report Annoture creates includes the full technical
                context a developer needs to reproduce and fix the issue —
                captured automatically, every time, without any extra steps.
              </p>
              <div className="space-y-2">
                {[
                  "Exact page URL at the moment of capture",
                  "Browser name and full version number",
                  "Operating system and version",
                  "Viewport width and height",
                  "DOM element, CSS selector, and XPath",
                  "Full-page screenshot with click marker",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-white/65">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mock bug report */}
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs text-white/50 font-medium">Bug Report — Auto-captured fields</span>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { label: "URL", value: "app.annoture.com/checkout", color: "text-blue-400" },
                  { label: "Browser", value: "Chrome 124.0.6367.82", color: "text-white/70" },
                  { label: "OS", value: "macOS 14.4 (Sonoma)", color: "text-white/70" },
                  { label: "Viewport", value: "1440 × 900", color: "text-white/70" },
                  { label: "Element", value: "button#pay-now.btn-primary", color: "text-violet-400 font-mono text-[11px]" },
                  { label: "XPath", value: "/html/body/main/form/button", color: "text-white/40 font-mono text-[11px]" },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-3">
                    <span className="text-[10px] text-white/30 uppercase tracking-wide w-16 pt-0.5 shrink-0">{row.label}</span>
                    <span className={`text-xs ${row.color} break-all`}>{row.value}</span>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-white/8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/25 font-medium">Critical</span>
                    <span className="text-xs text-white/30">just now</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Auto-captured
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card p-10 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/8 via-transparent to-blue-500/8" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to transform your QA workflow?
              </h2>
              <p className="text-white/45 mb-8 max-w-md mx-auto">
                Get early access to Annoture — free to start, no credit card
                required.
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
