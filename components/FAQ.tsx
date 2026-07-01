type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  heading?: string;
  subheading?: string;
  items: FAQItem[];
};

export default function FAQ({ heading = "Frequently asked questions", subheading, items }: FAQProps) {
  return (
    <section className="relative px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {heading}
          </h2>
          {subheading && (
            <p className="text-white/45 max-w-lg mx-auto">{subheading}</p>
          )}
        </div>

        <div className="space-y-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group glass-card rounded-2xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white/80 hover:text-white transition-colors">
                <span className="text-sm font-medium leading-snug">{item.question}</span>
                <svg
                  className="w-4 h-4 shrink-0 text-white/30 group-open:rotate-180 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 pt-3 border-t border-white/6 text-sm text-white/50 leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
