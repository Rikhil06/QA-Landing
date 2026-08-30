import Link from "next/link";
import { posts } from "@/lib/blog";

const categoryColors: Record<string, string> = {
  "QA Best Practices": "bg-violet-500/15 text-violet-300 border-violet-500/20",
  "Product": "bg-blue-500/15 text-blue-300 border-blue-500/20",
  "Team & Process": "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
};

function categoryClass(cat: string) {
  return categoryColors[cat] ?? "bg-white/10 text-white/60 border-white/10";
}

export default function LatestPosts() {
  const latest = [...posts].reverse().slice(0, 3);

  return (
    <section className="relative py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2">From the blog</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Latest articles</h2>
          </div>
          <Link
            href="/blog"
            className="text-sm text-white/40 hover:text-white/70 transition-colors hidden sm:block"
          >
            View all →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block glass-card rounded-xl p-6 hover:border-white/15 transition-all duration-300"
            >
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${categoryClass(post.category)} mb-4 inline-block`}>
                {post.category}
              </span>
              <h3 className="text-white font-semibold leading-snug mb-2 group-hover:text-white/90 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed line-clamp-2 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs text-white/25">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden text-center">
          <Link href="/blog" className="text-sm text-white/40 hover:text-white/70 transition-colors">
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
