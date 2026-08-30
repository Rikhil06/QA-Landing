import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { posts, getPost, type ContentBlock } from "@/lib/blog";
import ShareButtons from "@/components/ShareButtons";
import ReadingProgress from "@/components/ReadingProgress";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `https://annoture.com/blog/${slug}`;
  const ogImage = `https://annoture.com/blog/${slug}/opengraph-image`;
  return {
    title: post.title,
    description: post.excerpt,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },
  };
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="text-xl sm:text-2xl font-bold text-white mt-12 mb-4">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="text-lg font-semibold text-white mt-8 mb-3">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-white/60 leading-relaxed mb-5">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mb-5 space-y-2">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3 text-white/60 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mb-5 space-y-2">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3 text-white/60 leading-relaxed">
              <span className="text-violet-400 font-semibold text-sm shrink-0 mt-0.5 w-5 text-right">
                {j + 1}.
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="my-8 pl-5 border-l-2 border-violet-500/60 text-white/70 italic leading-relaxed"
        >
          {block.text}
        </blockquote>
      );
    case "callout":
      return (
        <div
          key={i}
          className="my-8 px-6 py-5 rounded-xl bg-violet-500/8 border border-violet-500/20 text-white/80 leading-relaxed"
        >
          {block.text}
        </div>
      );
  }
}

const categoryColors: Record<string, string> = {
  "QA Best Practices": "bg-violet-500/15 text-violet-300 border-violet-500/20",
  "Product": "bg-blue-500/15 text-blue-300 border-blue-500/20",
  "Team & Process": "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
};

function categoryClass(cat: string) {
  return categoryColors[cat] ?? "bg-white/10 text-white/60 border-white/10";
}

function InlineCTA() {
  return (
    <div className="my-10 px-6 py-5 rounded-xl bg-white/3 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <p className="text-sm font-semibold text-white mb-1">Capturing bugs manually?</p>
        <p className="text-sm text-white/45">One click captures the screenshot, URL, browser, OS, and DOM element automatically.</p>
      </div>
      <a
        href="https://app.annoture.com/register"
        className="shrink-0 px-4 py-2 rounded-lg bg-violet-500 text-white text-sm font-semibold hover:bg-violet-400 transition-colors whitespace-nowrap"
      >
        Try Annoture →
      </a>
    </div>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const midpoint = Math.floor(post.content.length / 2);

  // Related: same category first, then others, exclude current
  const related = [
    ...posts.filter((p) => p.slug !== slug && p.category === post.category),
    ...posts.filter((p) => p.slug !== slug && p.category !== post.category),
  ].slice(0, 3);

  return (
    <PageLayout>
      <ReadingProgress />

      {/* Hero */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, rgba(139,92,246,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              ← Back to blog
            </Link>
            <ShareButtons title={post.title} slug={post.slug} />
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryClass(post.category)}`}>
              {post.category}
            </span>
            <span className="text-xs text-white/30">{post.date}</span>
            <span className="text-xs text-white/30">·</span>
            <span className="text-xs text-white/30">{post.readTime}</span>
            <span className="text-xs text-white/30">·</span>
            <span className="text-xs text-white/30">{post.author}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article */}
      <article className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-white/55 leading-relaxed mb-10 pb-10 border-b border-white/8">
            {post.excerpt}
          </p>
          {post.content.map((block, i) => (
            <>
              {renderBlock(block, i)}
              {i === midpoint && <InlineCTA key="inline-cta" />}
            </>
          ))}
          <div className="mt-10 pt-8 border-t border-white/8">
            <ShareButtons title={post.title} slug={post.slug} />
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-white/8 bg-white/2 p-8 sm:p-10 text-center">
            <h2 className="text-xl font-bold text-white mb-3">Ready to fix your bug reports?</h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              Annoture captures all seven required fields automatically — screenshot, URL, browser, OS, viewport, and DOM element — in a single click.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.annoture.com/register"
                className="px-6 py-3 rounded-xl bg-white text-[#0F0F0F] font-semibold text-sm hover:bg-white/90 transition-all duration-200 active:scale-95"
              >
                Get started for free →
              </a>
              <a
                href="https://chromewebstore.google.com/detail/annoture/bmamimdeecmfddopfkkcfphkddigpimc"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl glass border border-white/10 text-white/70 text-sm font-medium hover:text-white hover:border-white/20 transition-all"
              >
                Add to Chrome — it&apos;s free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="px-6 pb-24 border-t border-white/6 pt-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-6">
              More from the blog
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block glass-card rounded-xl p-6 hover:border-white/15 transition-all duration-300"
                >
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${categoryClass(p.category)} mb-4 inline-block`}>
                    {p.category}
                  </span>
                  <h3 className="text-white font-semibold leading-snug mb-2 group-hover:text-white/90 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed line-clamp-2 mb-3">{p.excerpt}</p>
                  <span className="text-xs text-white/25">{p.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}
