import PageLayout from "@/components/PageLayout";

interface Section {
  title: string;
  content: React.ReactNode;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: Section[];
}

export default function LegalLayout({ title, lastUpdated, intro, sections }: LegalLayoutProps) {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="mb-12">
          <p className="text-xs text-white/30 uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-3xl font-semibold text-white mb-4">{title}</h1>
          <p className="text-sm text-white/40">Last updated: {lastUpdated}</p>
        </div>

        <p className="text-white/60 leading-relaxed mb-10">{intro}</p>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-base font-semibold text-white mb-3">
                {i + 1}. {section.title}
              </h2>
              <div className="text-sm text-white/55 leading-relaxed space-y-3">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/8">
          <p className="text-sm text-white/40">
            Questions about this policy? Contact us at{" "}
            <a href="/#contact" className="text-white/70 hover:text-white underline transition-colors">
              our contact form
            </a>
            .
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
