import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Brand Guidelines — Annoture",
  description:
    "Official Annoture brand assets, colours, typography, and usage guidelines.",
  alternates: { canonical: "https://annoture.com/brand" },
};

// ─── Colour tokens ────────────────────────────────────────────────────────────
const colours = [
  {
    group: "Primary",
    swatches: [
      { name: "Violet 500", hex: "#8B5CF6", usage: "Primary accent, CTAs, highlights" },
      { name: "Blue 500",   hex: "#3B82F6", usage: "Secondary accent, gradients" },
      { name: "Pink 400",   hex: "#F472B6", usage: "Gradient terminus, decorative" },
    ],
  },
  {
    group: "Neutrals",
    swatches: [
      { name: "Background", hex: "#0F0F0F", usage: "Page background" },
      { name: "Surface",    hex: "#1A1A1A", usage: "Cards, panels" },
      { name: "Border",     hex: "#2C2C2C", usage: "Dividers, card borders" },
      { name: "Muted",      hex: "#666666", usage: "Placeholder text, captions" },
      { name: "Body",       hex: "#A3A3A3", usage: "Secondary body text" },
      { name: "Foreground", hex: "#F5F5F5", usage: "Primary text" },
    ],
  },
  {
    group: "Semantic",
    swatches: [
      { name: "Success", hex: "#10B981", usage: "Confirmations, active states" },
      { name: "Warning", hex: "#F59E0B", usage: "Alerts, coming-soon badges" },
      { name: "Error",   hex: "#EF4444", usage: "Errors, destructive actions" },
    ],
  },
];

// ─── Type scale ───────────────────────────────────────────────────────────────
const typeScale = [
  { label: "Display",  size: "text-6xl",  weight: "font-bold",    sample: "Annoture" },
  { label: "H1",       size: "text-5xl",  weight: "font-bold",    sample: "Capture bugs in one click" },
  { label: "H2",       size: "text-4xl",  weight: "font-bold",    sample: "Everything captured automatically" },
  { label: "H3",       size: "text-2xl",  weight: "font-semibold",sample: "Set up in under 2 minutes" },
  { label: "Body lg",  size: "text-lg",   weight: "font-normal",  sample: "The Annoture extension sits in your toolbar." },
  { label: "Body",     size: "text-base", weight: "font-normal",  sample: "Install the extension and start capturing bugs." },
  { label: "Caption",  size: "text-sm",   weight: "font-normal",  sample: "Free to install · No credit card required" },
  { label: "Label",    size: "text-xs",   weight: "font-semibold",sample: "COMING SOON" },
];

// ─── Logo mark SVG (inline so it renders without an image file) ───────────────
function LogoMark({ size = 48 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-lg shadow-violet-500/25 shrink-0"
    >
      <svg viewBox="0 0 24 24" width={size * 0.55} height={size * 0.55}>
        <path d="M12 20h9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
      <div className="h-px bg-gradient-to-r from-violet-500/40 via-blue-500/20 to-transparent mb-8" />
      {children}
    </section>
  );
}

export default function BrandPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-6">
            Brand Guidelines
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Annoture <span className="gradient-text">Brand</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            Assets, colours, typography, and rules for representing Annoture consistently across all surfaces.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-24">

        {/* ── Logo ─────────────────────────────────────────────────────────── */}
        <Section title="Logo">
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Lockup on dark */}
            <div className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest">Primary — dark background</p>
              <div className="flex items-center gap-3">
                <LogoMark size={48} />
                <span className="font-semibold text-white text-2xl tracking-tight">Annoture</span>
              </div>
            </div>

            {/* Icon only */}
            <div className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest">Icon mark</p>
              <div className="flex items-center gap-6">
                <LogoMark size={64} />
                <LogoMark size={48} />
                <LogoMark size={32} />
                <LogoMark size={24} />
              </div>
            </div>

            {/* Light background version */}
            <div className="p-8 rounded-2xl bg-white flex flex-col gap-6 sm:col-span-2">
              <p className="text-xs font-semibold text-black/30 uppercase tracking-widest">On light background</p>
              <div className="flex items-center gap-3">
                <LogoMark size={48} />
                <span className="font-semibold text-[#0F0F0F] text-2xl tracking-tight">Annoture</span>
              </div>
            </div>
          </div>

          {/* Don'ts */}
          <div className="mt-6 p-5 rounded-2xl border border-red-500/20 bg-red-500/5">
            <p className="text-sm font-semibold text-red-400 mb-3">Logo don'ts</p>
            <ul className="space-y-1.5 text-sm text-white/50 list-disc list-inside">
              <li>Do not stretch or distort the logo mark</li>
              <li>Do not change the gradient colours</li>
              <li>Do not use the wordmark without the icon mark</li>
              <li>Do not place the logo on a busy or low-contrast background</li>
              <li>Do not add drop shadows or outlines to the logo mark</li>
            </ul>
          </div>
        </Section>

        {/* ── Colours ──────────────────────────────────────────────────────── */}
        <Section title="Colours">
          <div className="space-y-8">
            {colours.map((group) => (
              <div key={group.group}>
                <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">{group.group}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {group.swatches.map((s) => (
                    <div key={s.hex} className="glass-card rounded-xl overflow-hidden">
                      <div className="h-16" style={{ backgroundColor: s.hex }} />
                      <div className="p-3">
                        <p className="text-sm font-semibold text-white">{s.name}</p>
                        <p className="text-xs font-mono text-white/40 mb-1">{s.hex}</p>
                        <p className="text-xs text-white/35 leading-snug">{s.usage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Gradients */}
          <div className="mt-8">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">Gradients</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="h-16 bg-gradient-to-r from-violet-500 to-blue-500" />
                <div className="p-3">
                  <p className="text-sm font-semibold text-white">Brand gradient</p>
                  <p className="text-xs font-mono text-white/40">#8B5CF6 → #3B82F6</p>
                  <p className="text-xs text-white/35 mt-1">CTAs, icon marks, accent bars</p>
                </div>
              </div>
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="h-16" style={{ background: "linear-gradient(135deg, #a78bfa, #60a5fa, #f472b6)" }} />
                <div className="p-3">
                  <p className="text-sm font-semibold text-white">Gradient text</p>
                  <p className="text-xs font-mono text-white/40">#a78bfa → #60a5fa → #f472b6</p>
                  <p className="text-xs text-white/35 mt-1">Hero headings, display type</p>
                </div>
              </div>
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="h-16 bg-gradient-to-br from-violet-500/8 via-transparent to-blue-500/8" style={{ backgroundColor: "#0F0F0F" }} />
                <div className="p-3">
                  <p className="text-sm font-semibold text-white">Subtle glow</p>
                  <p className="text-xs font-mono text-white/40">violet/8 → blue/8</p>
                  <p className="text-xs text-white/35 mt-1">Card backgrounds, section tints</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Typography ───────────────────────────────────────────────────── */}
        <Section title="Typography">
          <div className="glass-card rounded-2xl p-6 mb-6">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div>
                <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-1">Primary typeface</p>
                <p className="text-3xl font-semibold text-white">Geist Sans</p>
                <p className="text-white/40 text-sm mt-1">by Vercel — used for all UI and marketing copy</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-1">Monospace</p>
                <p className="text-2xl font-semibold text-white font-mono">Geist Mono</p>
                <p className="text-white/40 text-sm mt-1">Code snippets, hex values, technical labels</p>
              </div>
            </div>
            <div className="h-px bg-white/6 mb-6" />
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-1">Weights in use</p>
            <div className="flex flex-wrap gap-6 mt-3">
              {[["Normal", "font-normal", "400"], ["Medium", "font-medium", "500"], ["Semibold", "font-semibold", "600"], ["Bold", "font-bold", "700"], ["Black", "font-black", "900"]].map(([label, cls, w]) => (
                <div key={w}>
                  <p className={`text-white text-lg ${cls}`}>{label}</p>
                  <p className="text-white/30 text-xs font-mono">{w}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {typeScale.map((t) => (
              <div key={t.label} className="glass-card rounded-xl px-5 py-4 flex items-baseline justify-between gap-4 flex-wrap">
                <div className={`text-white ${t.size} ${t.weight} leading-tight`}>{t.sample}</div>
                <div className="shrink-0 text-right">
                  <p className="text-xs font-semibold text-white/40">{t.label}</p>
                  <p className="text-xs font-mono text-white/25">{t.size} · {t.weight}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── UI Components ────────────────────────────────────────────────── */}
        <Section title="UI Components">
          {/* Buttons */}
          <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">Buttons</p>
          <div className="glass-card rounded-2xl p-6 flex flex-wrap gap-4 items-center mb-6">
            <a href="https://app.annoture.com/" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all active:scale-95">
              Primary
            </a>
            <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 text-white font-semibold text-sm hover:opacity-90 transition-all active:scale-95">
              Gradient
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/20 text-sm font-medium transition-all">
              Ghost
            </button>
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/8 border border-white/10 text-white/35 font-semibold text-sm cursor-not-allowed select-none">
              Disabled
            </div>
          </div>

          {/* Badges */}
          <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">Badges</p>
          <div className="glass-card rounded-2xl p-6 flex flex-wrap gap-3 items-center mb-6">
            <span className="px-2.5 py-1 rounded-full bg-violet-500/15 border border-violet-500/20 text-violet-300 text-xs font-semibold">Chrome Extension</span>
            <span className="px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wide">Coming soon</span>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">Active</span>
            <span className="px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/20 text-blue-300 text-xs font-semibold">Most popular</span>
            <span className="px-2.5 py-1 rounded-full bg-white/8 border border-white/10 text-white/50 text-xs font-semibold">Neutral</span>
          </div>

          {/* Cards */}
          <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">Cards</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500" />
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2">Glass card</p>
              <p className="text-white font-semibold mb-1">Feature name</p>
              <p className="text-white/45 text-sm leading-relaxed">Short description of the feature or content in this card goes here.</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2">Subtle card</p>
              <p className="text-white font-semibold mb-1">Alternate style</p>
              <p className="text-white/45 text-sm leading-relaxed">Used when glass cards would feel too heavy, e.g. inside lists.</p>
            </div>
          </div>
        </Section>

        {/* ── Voice & Tone ─────────────────────────────────────────────────── */}
        <Section title="Voice & Tone">
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Direct", desc: "Say exactly what the product does. No marketing fluff.", do: "Capture bugs in one click.", dont: "Revolutionise your QA workflow." },
              { title: "Technical but human", desc: "Speak to developers without being cold.", do: "Screenshot, URL, browser, OS — all captured automatically.", dont: "Automated metadata extraction via extension APIs." },
              { title: "Confident", desc: "Own the product's capabilities.", do: "The extension works on any website.", dont: "The extension may work on most websites." },
              { title: "Concise", desc: "Fewer words, more impact.", do: "Set up in under 2 minutes.", dont: "Getting started with Annoture is a quick and easy process." },
            ].map((v) => (
              <div key={v.title} className="glass-card rounded-2xl p-5">
                <p className="text-sm font-semibold text-white mb-1">{v.title}</p>
                <p className="text-xs text-white/40 mb-4 leading-snug">{v.desc}</p>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="text-emerald-400 text-xs font-bold shrink-0 mt-0.5">DO</span>
                    <p className="text-xs text-white/60">{v.do}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-red-400 text-xs font-bold shrink-0 mt-0.5">DON'T</span>
                    <p className="text-xs text-white/40 line-through">{v.dont}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Spacing & Radius ─────────────────────────────────────────────── */}
        <Section title="Spacing & Radius">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass-card rounded-2xl p-6">
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Border radius</p>
              <div className="space-y-3">
                {[["rounded-lg", "8px", "Buttons, input fields, small chips"],["rounded-xl", "12px", "Cards, badges, dropdowns"],["rounded-2xl", "16px", "Feature cards, modal panels"],["rounded-3xl", "24px", "Hero cards, large CTA blocks"],["rounded-full", "9999px", "Avatars, pill badges"]].map(([cls, px, usage]) => (
                  <div key={cls} className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-violet-500/20 border border-violet-500/30 shrink-0 ${cls}`} />
                    <div>
                      <p className="text-xs font-mono text-white/60">{cls} <span className="text-white/25">({px})</span></p>
                      <p className="text-xs text-white/30">{usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Spacing scale</p>
              <div className="space-y-2">
                {[["4px","p-1","Tight internal padding"],["8px","p-2","Icon padding, compact elements"],["16px","p-4","Card inner padding"],["20px","p-5","Default card padding"],["24px","p-6","Comfortable section padding"],["32px","p-8","Feature card padding"],["48px","py-12","Section vertical rhythm"],["96px","py-24","Major section separation"]].map(([px, cls, usage]) => (
                  <div key={px} className="flex items-center gap-3">
                    <div className="w-16 shrink-0">
                      <p className="text-xs font-mono text-white/50">{cls}</p>
                      <p className="text-xs text-white/25">{px}</p>
                    </div>
                    <p className="text-xs text-white/35">{usage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── Download / Contact ───────────────────────────────────────────── */}
        <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/8 via-transparent to-blue-500/8" />
          <div className="relative">
            <h2 className="text-2xl font-bold text-white mb-3">Need something not covered here?</h2>
            <p className="text-white/45 mb-6 max-w-sm mx-auto text-sm leading-relaxed">
              For press assets, high-res logos, or brand partnership questions, reach out directly.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all active:scale-95"
            >
              Contact us →
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
