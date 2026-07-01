import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chrome Extension — Annoture",
  description:
    "Install the Annoture Chrome extension and capture QA bugs in one click. Auto-screenshot, console logs, browser info and more — all sent straight to your Kanban board.",
  alternates: {
    canonical: "https://annoture.com/chrome-extension",
  },
  openGraph: {
    title: "Annoture Chrome Extension — QA Bug Capture in One Click",
    description:
      "Install the Annoture Chrome extension to capture bugs with a single click. Screenshot, URL, browser, OS and console errors captured automatically.",
    url: "https://annoture.com/chrome-extension",
  },
};

const steps = [
  {
    number: "01",
    title: "Install the extension",
    body: "Add Annoture to Chrome from the Web Store in one click. No configuration needed — just install and sign in.",
    gradient: "from-violet-500 to-blue-500",
  },
  {
    number: "02",
    title: "Browse to the page with the bug",
    body: "Navigate to any website or web app — production, staging, or localhost. The extension works everywhere.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "03",
    title: "Click the Annoture icon",
    body: "Click the Annoture icon in your Chrome toolbar to activate QA mode. A toolbar appears at the bottom of the page.",
    gradient: "from-cyan-500 to-emerald-500",
  },
  {
    number: "04",
    title: "Click Capture and describe the bug",
    body: "Hit Capture, click anywhere on the page, add a title, set the priority, and submit. Done in under 10 seconds.",
    gradient: "from-emerald-500 to-violet-500",
  },
];

const captured = [
  { label: "Screenshot", desc: "Full-page screenshot with your click position marked", icon: "📸" },
  { label: "Page URL", desc: "The exact URL at the moment of capture", icon: "🔗" },
  { label: "Browser", desc: "Browser name and version (e.g. Chrome 124)", icon: "🌐" },
  { label: "Operating system", desc: "OS name and version", icon: "💻" },
  { label: "Screen resolution", desc: "Display and viewport dimensions", icon: "📐" },
  { label: "Console errors", desc: "Any JS errors or warnings logged at capture time", icon: "⚠️" },
  { label: "Click position", desc: "Exact coordinates of where you clicked the bug", icon: "🎯" },
  { label: "Screen recording", desc: "Short recording of activity before capture (Team plan)", icon: "🎬" },
];

function ComingSoonButton({ className }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 rounded-xl cursor-not-allowed select-none ${className}`}>
      <svg className="w-5 h-5 opacity-50 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="4" fill="currentColor"/>
        <line x1="21.17" y1="8" x2="12" y2="8" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="3.95" y1="6.06" x2="8.54" y2="14" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="10.88" y1="21.94" x2="15.46" y2="14" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
      <span>Add to Chrome</span>
      <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/25 text-amber-400 text-[10px] font-semibold tracking-wide uppercase">
        Coming soon
      </span>
    </div>
  );
}

export default function ChromeExtensionPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-6">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" strokeWidth="2"/>
              <line x1="21.17" y1="8" x2="12" y2="8" strokeWidth="2"/>
              <line x1="3.95" y1="6.06" x2="8.54" y2="14" strokeWidth="2"/>
              <line x1="10.88" y1="21.94" x2="15.46" y2="14" strokeWidth="2"/>
            </svg>
            Chrome Extension
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Capture bugs in
            <span className="gradient-text"> one click</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/50 w-[min(42rem,100vw-3rem)] mx-auto leading-relaxed mb-10">
            The Annoture Chrome extension sits in your toolbar and captures everything a developer needs — screenshot, URL, browser, OS, and console errors — the moment you spot a bug.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ComingSoonButton className="px-7 py-3.5 bg-white/8 border border-white/10 text-white/35 font-semibold text-sm" />
            <Link
              href="/features"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/20 text-sm font-medium transition-all"
            >
              See all features →
            </Link>
          </div>
          <p className="mt-4 text-xs text-white/25">Awaiting Chrome Web Store approval</p>
        </div>
      </section>

      {/* How to install */}
      <section className="relative py-16 md:py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Set up in under 2 minutes
            </h2>
            <p className="text-white/45 max-w-lg mx-auto">
              No configuration, no onboarding calls. Install and start capturing.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="glass-card rounded-2xl p-6 relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${step.gradient}`} />
                <div className={`text-3xl font-black bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent mb-4`}>
                  {step.number}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <ComingSoonButton className="px-8 py-3.5 bg-white/6 border border-white/10 text-white/35 font-semibold text-sm" />
          </div>
        </div>
      </section>

      {/* What gets captured */}
      <section className="relative py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything captured automatically
            </h2>
            <p className="text-white/45 max-w-lg mx-auto">
              No more &ldquo;what browser were you using?&rdquo; — every report includes the full technical context.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {captured.map((item) => (
              <div key={item.label} className="glass-card rounded-2xl p-5">
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                <div className="text-xs text-white/40 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative py-16 px-6 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-10 md:p-14 rounded-3xl border border-white/10 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/8 via-transparent to-blue-500/8" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-violet-500/25">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="1.8"/>
                  <circle cx="12" cy="12" r="4" strokeWidth="1.8"/>
                  <line x1="21.17" y1="8" x2="12" y2="8" strokeWidth="1.8"/>
                  <line x1="3.95" y1="6.06" x2="8.54" y2="14" strokeWidth="1.8"/>
                  <line x1="10.88" y1="21.94" x2="15.46" y2="14" strokeWidth="1.8"/>
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Coming soon to Chrome
              </h2>
              <p className="text-white/45 mb-8 max-w-sm mx-auto">
                The extension is awaiting Google Chrome Web Store approval. Sign up now and we&apos;ll notify you the moment it&apos;s live.
              </p>
              <ComingSoonButton className="mx-auto px-8 py-3.5 bg-white/8 border border-white/10 text-white/35 font-semibold text-sm" />
              <p className="mt-4 text-xs text-white/25">Free plan available · No credit card required</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        heading="Extension questions"
        subheading="Common questions about installing and using the Annoture Chrome extension."
        items={[
          {
            question: "Is the extension free to install?",
            answer:
              "Yes. The extension is free to install and use. Your plan (free or paid) is tied to your Annoture account, not the extension itself.",
          },
          {
            question: "Do I need an account to use the extension?",
            answer:
              "Yes. You need to sign in to your Annoture account from the extension popup before you can capture bugs. You can sign up for free at annoture.com.",
          },
          {
            question: "Does it work on any website?",
            answer:
              "Yes. The extension works on any URL you can open in Chrome — including production sites, staging environments, and localhost.",
          },
          {
            question: "Will the extension slow down my browser?",
            answer:
              "No. The extension is inactive until you click the icon to activate QA mode. It has no background scripts running on pages you're not actively testing.",
          },
          {
            question: "What permissions does the extension need and why?",
            answer:
              "The extension requests access to the active tab (to take a screenshot), scripting (to inject the QA toolbar), storage (to keep you logged in), and tabs (to identify the current page). All data is sent only to the Annoture servers when you explicitly submit a report.",
          },
          {
            question: "Does Annoture support Firefox or Edge?",
            answer:
              "Currently Chrome only. Support for Edge, Brave, and Arc (all Chromium-based) is planned. Firefox support is on the roadmap.",
          },
        ]}
      />
    </PageLayout>
  );
}
