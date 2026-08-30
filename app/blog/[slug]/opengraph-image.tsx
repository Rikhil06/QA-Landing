import { ImageResponse } from "next/og";
import { getPost, posts } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? "Annoture Blog";
  const category = post?.category ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "64px",
          background: "#0F0F0F",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(139,92,246,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 64,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              color: "white",
              fontWeight: 700,
            }}
          >
            A
          </div>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, fontWeight: 600 }}>
            Annoture
          </span>
        </div>

        {/* Category */}
        {category && (
          <div
            style={{
              display: "flex",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#c4b5fd",
                background: "rgba(139,92,246,0.15)",
                border: "1px solid rgba(139,92,246,0.3)",
                borderRadius: 100,
                padding: "4px 14px",
              }}
            >
              {category}
            </span>
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? 42 : 52,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.15,
            maxWidth: 900,
            marginBottom: 32,
          }}
        >
          {title}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "rgba(255,255,255,0.3)",
            fontSize: 16,
          }}
        >
          <span>annoture.com/blog</span>
          <span>·</span>
          <span>{post?.readTime ?? ""}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
