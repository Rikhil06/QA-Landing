import Link from "next/link";
import React from "react";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

// Renders plain content text, turning [label](/path) into links. Internal paths
// use next/link; absolute URLs open in a new tab.
export default function InlineText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(LINK_PATTERN)) {
    const [whole, label, href] = match;
    const index = match.index ?? 0;
    if (index > lastIndex) parts.push(text.slice(lastIndex, index));

    const className =
      "text-violet-300 underline decoration-violet-400/40 underline-offset-4 hover:text-violet-200 hover:decoration-violet-300 transition-colors";
    parts.push(
      href.startsWith("/") ? (
        <Link key={index} href={href} className={className}>
          {label}
        </Link>
      ) : (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {label}
        </a>
      )
    );
    lastIndex = index + whole.length;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}

// Strips link markup for contexts that need plain text (e.g. JSON-LD).
export function plainText(text: string): string {
  return text.replace(LINK_PATTERN, "$1");
}
