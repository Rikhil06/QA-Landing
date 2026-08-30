import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { posts } from "@/lib/blog";
import BlogClient from "@/components/BlogClient";

const sortedPosts = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export const metadata: Metadata = {
  title: "Blog",
  description: "QA tips, product updates, and best practices from the Annoture team.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://annoture.com/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = sortedPosts;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-10 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, rgba(139,92,246,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Insights from the Annoture team
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            The Annoture Blog
          </h1>
          <p className="text-lg text-white/50 leading-relaxed">
            QA best practices, product updates, and everything we&apos;re learning about shipping better software.
          </p>
        </div>
      </section>

      <BlogClient featured={featured} rest={rest} />

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-2xl border border-white/8 bg-white/2 p-10">
            <h2 className="text-2xl font-bold text-white mb-3">See it in action</h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              Everything we write about is built into Annoture. Try it free — no credit card needed.
            </p>
            <a
              href="https://app.annoture.com/register"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:shadow-xl hover:shadow-white/15 active:scale-95"
            >
              Get started for free →
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
