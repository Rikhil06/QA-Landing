import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { posts, type Post } from "@/lib/blog";

const sortedPosts = [...posts].sort((a: Post, b: Post) =>
  new Date(b.date).getTime() - new Date(a.date).getTime()
);

export const metadata: Metadata = {
  title: "Blog",
  description: "QA tips, product updates, and best practices from the Annoture team.",
  robots: { index: true, follow: true },
};

const categoryColors: Record<string, string> = {
  "QA Best Practices": "bg-violet-500/15 text-violet-300 border-violet-500/20",
  "Product": "bg-blue-500/15 text-blue-300 border-blue-500/20",
  "Team & Process": "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
};

function categoryClass(cat: string) {
  return categoryColors[cat] ?? "bg-white/10 text-white/60 border-white/10";
}

export default function BlogPage() {
  const [featured, ...rest] = sortedPosts;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
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

      {/* Featured post */}
      <section className="px-6 pb-12">
        <div className="max-w-5xl mx-auto">
          <Link
            href={`/blog/${featured.slug}`}
            className="group block glass-card rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300"
          >
            <div className="p-8 sm:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryClass(featured.category)}`}>
                  {featured.category}
                </span>
                <span className="text-xs text-white/30">{featured.date}</span>
                <span className="text-xs text-white/30">·</span>
                <span className="text-xs text-white/30">{featured.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors leading-snug">
                {featured.title}
              </h2>
              <p className="text-white/50 leading-relaxed max-w-2xl mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm text-violet-400 font-medium group-hover:gap-3 transition-all">
                Read article
                <span>→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All other posts */}
      {rest.length > 0 && (
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-6">More articles</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block glass-card rounded-xl p-6 hover:border-white/15 transition-all duration-300"
                >
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${categoryClass(post.category)} mb-4 inline-block`}>
                    {post.category}
                  </span>
                  <h3 className="text-white font-semibold leading-snug mb-3 group-hover:text-white/90 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-white/30">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-2xl border border-white/8 bg-white/2 p-10">
            <h2 className="text-2xl font-bold text-white mb-3">See it in action</h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              Everything we write about is built into Annoture. Try it free — no credit card needed.
            </p>
            <a
              href="https://app.annoture.com/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:shadow-xl hover:shadow-white/15 active:scale-95"
            >
              Get started free →
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
