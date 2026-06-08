import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "QA Bug Capture Features — Chrome Extension, Kanban Board & More",
  description:
    "Annoture captures bugs in one click with automatic screenshots, URL, browser, OS, and DOM element. Organise everything on a shared Kanban board with severity levels and team comments.",
  alternates: {
    canonical: "https://annoture.com/features",
  },
  openGraph: {
    title: "QA Bug Capture Features — Chrome Extension, Kanban Board & More",
    description:
      "One-click bug capture. Auto-screenshots. Shared Kanban board. Everything your QA team needs without the manual reporting overhead.",
    url: "https://annoture.com/features",
  },
};

const features = [
  {
    tag: "CHROME EXTENSION",
    gradient: "from-violet-500 to-blue-500",
    title: "Capture bugs without leaving the page",
    body: "The Annoture extension lives in your Chrome toolbar. When you spot a bug, click the icon, then click the element. That's it. No tab switching, no copy-pasting, no filling in forms from memory.",
    bullets: [
      "Works on any website or web app",
      "One-click install, zero configuration",
      "Lightweight — won't slow your browser",
      "Always available in your toolbar",
    ],
    visual: [
      { label: "INSTALL ONCE", color: "bg-violet-500/20 text-violet-300 border-violet-500/30" },
      { label: "CLICK THE BUG", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
      { label: "SUBMIT", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
    ],
  },
  {
    tag: "SCREENSHOT & ANNOTATIONS",
    gradient: "from-blue-500 to-cyan-500",
    title: "A picture worth a thousand words",
    body: "Every bug report includes a full-page screenshot taken at the moment of capture, with your click position automatically marked. No more attaching blurry phone photos or cropped desktop screenshots.",
    bullets: [
      "Full-page screenshot on every capture",
      "Click position marked automatically",
      "Annotate with circles, arrows, and text",
      "Highlight the exact broken element",
    ],
    visual: [
      { label: "FULL PAGE", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
      { label: "CLICK MARKER", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
      { label: "ANNOTATIONS", color: "bg-violet-500/20 text-violet-300 border-violet-500/30" },
    ],
  },
  {
    tag: "AUTO-CAPTURED METADATA",
    gradient: "from-emerald-500 to-teal-500",
    title: "Everything developers need, captured automatically",
    body: "Stop asking 'what browser were you using?'. Annoture captures the full technical context of every bug the moment it's reported — no extra steps required.",
    bullets: [
      "Exact page URL at time of capture",
      "Browser name and version",
      "Operating system and version",
      "Viewport dimensions",
      "DOM element, XPath, and CSS selector",
    ],
    visual: [
      { label: "URL", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
      { label: "BROWSER", color: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
      { label: "OS + VIEWPORT", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
    ],
  },
  {
    tag: "KANBAN BOARDS",
    gradient: "from-orange-500 to-amber-500",
    title: "Your bug backlog, always organised",
    body: "Every submitted report lands directly on a shared Kanban board. Drag issues between columns, assign them to team members, and track progress from Backlog to Done — all in one place.",
    bullets: [
      "Backlog → In Progress → In Review → Done",
      "Drag and drop between columns",
      "Assign issues to team members",
      "Filter by severity, assignee, or date",
    ],
    visual: [
      { label: "BACKLOG", color: "bg-white/10 text-white/50 border-white/15" },
      { label: "IN PROGRESS", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
      { label: "DONE", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
    ],
  },
  {
    tag: "SEVERITY LEVELS",
    gradient: "from-red-500 to-orange-500",
    title: "Prioritise what matters",
    body: "Not every bug is critical. Annoture lets you set a severity level at submission time, so your team always knows what to fix first. Severity is visible at a glance on every card in the board.",
    bullets: [
      "Critical, High, Medium, Low levels",
      "Set severity directly in the capture popup",
      "Visible on every Kanban card",
      "Filter and sort your board by severity",
    ],
    visual: [
      { label: "CRITICAL", color: "bg-red-500/20 text-red-400 border-red-500/30" },
      { label: "HIGH", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
      { label: "MEDIUM", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
    ],
  },
  {
    tag: "TEAM COLLABORATION",
    gradient: "from-pink-500 to-violet-500",
    title: "Built for the whole team",
    body: "Annoture isn't just for QA engineers. Invite developers, designers, project managers, and stakeholders to the same board. Everyone sees the same bugs, the same status, the same source of truth.",
    bullets: [
      "Invite unlimited team members",
      "Comment directly on bug reports",
      "Assign issues to specific people",
      "Real-time board updates",
    ],
    visual: [
      { label: "QA TEAM", color: "bg-violet-500/20 text-violet-300 border-violet-500/30" },
      { label: "DEVELOPERS", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
      { label: "MANAGERS", color: "bg-pink-500/20 text-pink-300 border-pink-500/30" },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Product features
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            A Chrome extension for QA testing
            <span className="gradient-text"> that does the hard part</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/50 w-[min(42rem,100vw-3rem)] mx-auto leading-relaxed">
            Annoture sits in your toolbar and captures everything — screenshot,
            URL, browser, OS, and element selector — the moment you click a
            bug. From capture to Kanban card in under 10 seconds.
          </p>
        </div>
      </section>

      {/* Features */}
      {features.map((feature, i) => (
        <section
          key={feature.tag}
          className={`relative py-16 md:py-24 px-6 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
              {/* Text */}
              <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <div className={`inline-block text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full bg-gradient-to-r ${feature.gradient} bg-opacity-10 mb-4`}
                  style={{ background: "transparent" }}>
                  <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.tag}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                  {feature.title}
                </h2>
                <p className="text-white/50 leading-relaxed mb-6 text-[15px]">
                  {feature.body}
                </p>
                <ul className="space-y-2.5">
                  {feature.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-white/65">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className={i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="glass-card p-8 rounded-2xl">
                  <div className={`h-1 w-full rounded-full bg-gradient-to-r ${feature.gradient} mb-8 opacity-60`} />
                  <div className="flex flex-wrap gap-3 mb-8">
                    {feature.visual.map((v) => (
                      <span key={v.label} className={`text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full border ${v.color}`}>
                        {v.label}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {feature.bullets.slice(0, 3).map((b) => (
                      <div key={b} className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/6">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} shrink-0`} />
                        <span className="text-xs text-white/50">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <FAQ
        heading="Feature questions"
        subheading="Common questions about how Annoture's features work."
        items={[
          {
            question: "Which browsers does the Annoture extension support?",
            answer:
              "The Annoture extension currently supports Google Chrome. Support for other Chromium-based browsers (Edge, Brave, Arc) is planned for a future release.",
          },
          {
            question: "Does the extension work on localhost and staging environments?",
            answer:
              "Yes. The extension works on any URL you can open in Chrome — including http://localhost, internal staging environments, and production sites.",
          },
          {
            question: "Does Annoture annotate the screenshot automatically?",
            answer:
              "Yes. When you click an element to capture a bug, Annoture automatically places a marker on the screenshot at the exact point you clicked — no manual annotation needed. The marker is part of the screenshot that gets attached to the report.",
          },
          {
            question: "How many columns does the Kanban board have?",
            answer:
              "The board has four columns by default: Backlog, In Progress, In Review, and Done. You can drag cards between columns and filter by severity, assignee, or date.",
          },
          {
            question: "Can I assign bugs to specific team members?",
            answer:
              "Yes. Each bug report can be assigned to a specific person on the board. Team members can also comment directly on reports to discuss the issue without leaving the tool.",
          },
          {
            question: "Is there a limit on how many team members I can invite?",
            answer:
              "Details on team size limits will be confirmed at launch. Early access members will be the first to know about plan limits and pricing.",
          },
        ]}
      />

      {/* CTA */}
      <section className="relative py-16 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card p-10 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/8 via-transparent to-blue-500/8" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to try it?
              </h2>
              <p className="text-white/45 mb-8 max-w-md mx-auto">
                Get early access to every feature listed here — free forever on
                the starter plan.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all hover:shadow-2xl hover:shadow-white/15 active:scale-95"
              >
                Notify me when it launches →
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
