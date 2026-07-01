import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Annoture team — questions, feedback, or partnership enquiries.",
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return <ContactContent />;
}
