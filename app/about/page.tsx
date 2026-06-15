import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "Why we built Annoture — and who we built it for.",
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return <AboutContent />;
}
