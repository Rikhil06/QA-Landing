"use client";

import { useState } from "react";
import Link from "next/link";
import type { Post } from "@/lib/blog";

const categoryColors: Record<string, string> = {
  "QA Best Practices": "bg-violet-500/15 text-violet-300 border-violet-500/20",
  "Product": "bg-blue-500/15 text-blue-300 border-blue-500/20",
  "Team & Process": "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
};

function categoryClass(cat: string) {
  return categoryColors[cat] ?? "bg-white/10 text-white/60 border-white/10";
}

const ALL = "All";

export default function BlogClient({ featured, rest }: { featured: Post; rest: Post[] }) {
  const categories = [ALL, ...Array.from(new Set([featured, ...rest].map((p) => p.category)))];
  const [active, setActive] = useState(ALL);

  const filteredRest = active === ALL ? rest : rest.filter((p) => p.category === active);
  const showFeatured = active === ALL || featured.category === active;

  return (
    <>
      {/* Category filter */}
      <section className="px-6 pb-8">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                active === cat
                  ? "bg-white text-[#0F0F0F] border-white"
                  : "bg-white/5 text-white/50 border-white/10 hover:border-white/25 hover:text-white/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured post */}
      {showFeatured && (
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
      )}

      {/* All other posts */}
      {filteredRest.length > 0 && (
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-6">
              {active === ALL ? "More articles" : active}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRest.map((post) => (
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

      {filteredRest.length === 0 && !showFeatured && (
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto text-center py-16 text-white/30 text-sm">
            No posts in this category yet.
          </div>
        </section>
      )}
    </>
  );
}
