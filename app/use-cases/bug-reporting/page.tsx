import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Visual Bug Reporting Tool — Auto-capture Screenshots & Context",
  description:
    "Annoture creates developer-ready bug reports automatically. URL, browser, OS, viewport, screenshot, and DOM element selector — all captured in one click, no manual work required.",
  alternates: {
    canonical: "https://annoture.com/use-cases/bug-reporting",
  },
  openGraph: {
    title: "Visual Bug Reporting Tool — Auto-capture Screenshots & Context",
    description:
      "Stop the back-and-forth. Annoture auto-captures everything a developer needs to reproduce a bug — the first time they read the report.",
    url: "https://annoture.com/use-cases/bug-reporting",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes a good bug report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good bug report includes the exact URL where the bug was found, the browser name and version, the operating system, a screenshot showing the issue, the specific element involved, and clear steps to reproduce. Annoture captures all of this automatically in one click.",
      },
    },
    {
      "@type": "Question",
      name: "How does Annoture improve bug reports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annoture eliminates the most common gaps in bug reports by automatically capturing the page URL, browser version, operating system, viewport size, a full-page screenshot, and the exact DOM element (CSS selector and XPath). Developers receive everything they need to reproduce the bug without asking follow-up questions.",
      },
    },
    {
      "@type": "Question",
      name: "Can non-technical users file good bug reports with Annoture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Because Annoture captures all the technical details automatically, non-technical team members — product managers, designers, stakeholders — can file detailed, developer-ready bug reports with just a one-line description. The technical context is captured by the tool, not the person.",
      },
    },
  ],
};

const problems = [
  { icon: "❓", title: "\"What URL was it on?\"", body: "The most common follow-up question in every bug report. The answer is obvious to the person who filed it — but they forgot to write it down." },
  { icon: "🖥", title: "\"What browser were you using?\"", body: "Developers need to reproduce the issue in the same environment. Without browser and OS details, they're guessing." },
  { icon: "🗓", title: "\"Can you show me where exactly?\"", body: "A vague description of \"the button on the checkout page\" forces a back-and-forth that adds days to the resolution time." },
  { icon: "📎", title: "\"Can you send a screenshot?\"", body: "Even when there is a screenshot, it's often a cropped phone photo, a tiny area of the screen, or missing the element entirely." },
];

const captured = [
  {
    label: "Page URL",
    detail: "The exact URL at the moment the bug was captured — including query parameters and fragments.",
    color: "from-blue-500 to-cyan-500",
    icon: "🔗",
  },
  {
    label: "Browser & version",
    detail: "Full browser name and version number. Chrome 124.0, Safari 17.4, Firefox 125 — always accurate.",
    color: "from-violet-500 to-blue-500",
    icon: "🌐",
  },
  {
    label: "Operating system",
    detail: "macOS, Windows, or Linux — with the full version. Reproduce edge cases that only occur on specific OS builds.",
    color: "from-emerald-500 to-teal-500",
    icon: "💻",
  },
  {
    label: "Viewport size",
    detail: "The exact pixel dimensions of the browser window. Identify layout bugs that only appear at certain screen sizes.",
    color: "from-orange-500 to-amber-500",
    icon: "📐",
  },
  {
    label: "DOM element",
    detail: "The specific element that was clicked — including its ID, class, tag name, CSS selector, and XPath.",
    color: "from-pink-500 to-violet-500",
    icon: "🎯",
  },
  {
    label: "Full-page screenshot",
    detail: "A complete screenshot of the page at the time of capture, with the clicked element automatically annotated.",
    color: "from-teal-500 to-emerald-500",
    icon: "📸",
  },
];

const comparison = [
  { aspect: "URL captured", old: "Often missing", annoture: "Always included" },
  { aspect: "Browser & version", old: "Usually missing", annoture: "Auto-captured" },
  { aspect: "Operating system", old: "Rarely included", annoture: "Auto-captured" },
  { aspect: "Screenshot", old: "Sometimes attached", annoture: "Every report" },
  { aspect: "Element location", old: "Vague description", annoture: "CSS selector + XPath" },
  { aspect: "Time to report", old: "5–15 minutes", annoture: "Under 10 seconds" },
  { aspect: "Reproducibility", old: "Hit or miss", annoture: "First time, every time" },
];

export default function BugReportingPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Use case — Bug Reporting
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Automatic bug reports with screenshots
            <span className="gradient-text"> developers actually want</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/50 w-[min(42rem,100vw-3rem)] mx-auto leading-relaxed mb-10">
            Stop the back-and-forth. Every report includes an automatic
            screenshot, the exact URL, browser version, OS, and DOM element —
            captured in one click, no manual write-up required.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all hover:shadow-xl hover:shadow-white/15 active:scale-95"
          >
            Get early access →
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="relative py-16 md:py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why most bug reports{" "}
              <span className="gradient-text">waste everyone&apos;s time</span>
            </h2>
            <p className="text-white/45 max-w-lg mx-auto">
              A developer receives a bug report. Before they can even start
              working on it, they have four questions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {problems.map((p) => (
              <div key={p.title} className="glass-card p-5 rounded-2xl">
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="text-sm font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What gets captured */}
      <section className="relative py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              A complete report,{" "}
              <span className="gradient-text">captured automatically</span>
            </h2>
            <p className="text-white/45 max-w-lg mx-auto">
              Every Annoture bug report includes six pieces of information that
              are automatically captured — without the reporter having to do
              anything extra.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {captured.map((item) => (
              <div key={item.label} className="glass-card p-5 rounded-2xl relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color}`} />
                <div className="text-xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{item.label}</h3>
                <p className="text-xs text-white/45 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="relative py-16 md:py-24 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Before and after Annoture
            </h2>
            <p className="text-white/45 max-w-lg mx-auto">
              The difference between a typical bug report and an Annoture bug
              report.
            </p>
          </div>
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px]">
                <thead>
                  <tr className="border-b border-white/8">
                    <th className="text-left p-4 text-xs text-white/40 font-medium">Aspect</th>
                    <th className="p-4 text-center text-xs font-semibold text-white/40">Typical report</th>
                    <th className="p-4 text-center text-xs font-semibold">
                      <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Annoture</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.aspect} className={`border-b border-white/4 ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                      <td className="p-4 text-xs text-white/60">{row.aspect}</td>
                      <td className="p-4 text-center">
                        <span className="text-xs text-red-400/70">{row.old}</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-xs text-emerald-400">{row.annoture}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Developer perspective */}
      <section className="relative py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-widest text-blue-400 mb-4">FOR DEVELOPERS</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Fewer back-and-forths.
                <br />
                <span className="gradient-text">Faster fixes.</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                When a bug report lands in your board with the exact URL, the
                browser version, the OS, a full screenshot, and the CSS
                selector of the broken element — you can start working
                immediately. No questions, no waiting.
              </p>
              <div className="space-y-3">
                {[
                  { title: "Reproduce it first time", body: "All the context you need is there from the start." },
                  { title: "See the exact element", body: "CSS selector and XPath mean no hunting through the DOM." },
                  { title: "Prioritise by severity", body: "Critical bugs are clearly marked so you know where to start." },
                  { title: "Everything in one place", body: "Backlog, In Progress, Done — the full picture on one board." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="text-sm font-medium text-white">{item.title} </span>
                      <span className="text-sm text-white/45">{item.body}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mock kanban card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold tracking-widest text-blue-400">IN PROGRESS</span>
                <span className="text-[10px] text-white/30">assigned to you</span>
              </div>
              {/* Card */}
              <div className="rounded-xl border border-white/10 bg-white/4 p-4 mb-4">
                <div className="w-full h-20 rounded-lg bg-white/5 border border-white/8 mb-3 relative overflow-hidden flex items-center justify-center">
                  <span className="text-[10px] text-white/20">screenshot.png</span>
                  <div className="absolute top-2 left-2 w-5 h-5 rounded-full bg-red-500 border-2 border-white/80 flex items-center justify-center">
                    <span className="text-[8px] text-white font-bold">!</span>
                  </div>
                </div>
                <p className="text-xs text-white/80 mb-3 leading-relaxed">
                  Payment form crashes on Safari 17 — checkout page broken for macOS users
                </p>
                <div className="space-y-1.5 text-[10px] text-white/40 font-mono mb-3">
                  <div>URL: app.annoture.com/checkout</div>
                  <div>Browser: Safari 17.4 · macOS 14.4</div>
                  <div>Element: button#pay-now</div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/25">Critical</span>
                  <span className="text-[9px] text-white/30">#042 · 2 hours ago</span>
                </div>
              </div>
              <p className="text-[11px] text-white/30 text-center">
                Everything a developer needs to fix it — right there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card p-10 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-violet-500/8" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Better bug reports start here
              </h2>
              <p className="text-white/45 mb-8 max-w-md mx-auto">
                Give your team the context they need to ship fixes fast. Get
                early access to Annoture — free to start.
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
