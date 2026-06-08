const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Annoture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annoture is a visual bug capture tool for QA teams and product teams. A Chrome extension lets you click on any broken element on a web page and instantly creates a bug report — complete with a full-page screenshot, the exact URL, browser version, operating system, viewport size, and the DOM element selector. Reports land on a shared Kanban board for your whole team.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Chrome extension work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once installed, the Annoture icon sits in your Chrome toolbar. When you find a bug, click the icon to enter capture mode — elements highlight as you hover. Click the broken element and Annoture takes a full-page screenshot instantly. A small popup opens with all the technical details pre-filled. Add a one-line description, set the severity, and submit. The whole process takes under 10 seconds.",
      },
    },
    {
      "@type": "Question",
      name: "What information does Annoture capture automatically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every bug report includes: the exact page URL at the moment of capture, browser name and full version number, operating system and version, viewport width and height, the DOM element (tag, ID, class, CSS selector, and XPath), and a full-page screenshot with the clicked element annotated. You don't need to fill any of this in manually.",
      },
    },
    {
      "@type": "Question",
      name: "Does Annoture work on any website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the extension works on any website or web app you can open in Chrome, including staging environments, localhost, and production sites.",
      },
    },
    {
      "@type": "Question",
      name: "Do developers need to install the extension too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Only the people capturing bugs need the Chrome extension. Developers, designers, and project managers access the shared Kanban board through the Annoture web app — no extension required.",
      },
    },
    {
      "@type": "Question",
      name: "Is Annoture free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annoture is currently in early access. Sign up to be notified when it launches — early access members will get priority access and be the first to hear about pricing.",
      },
    },
  ],
};

import OrbBackground from "@/components/OrbBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ChromeExtension from "@/components/ChromeExtension";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const homeFaqs = [
  {
    question: "What is Annoture?",
    answer:
      "Annoture is a visual bug capture tool for QA teams and product teams. A Chrome extension lets you click on any broken element on a web page and instantly creates a bug report — complete with a full-page screenshot, the exact URL, browser version, operating system, viewport size, and the DOM element selector. Reports land on a shared Kanban board for your whole team.",
  },
  {
    question: "How does the Chrome extension work?",
    answer:
      "Once installed, the Annoture icon sits in your Chrome toolbar. When you find a bug, click the icon to enter capture mode — elements highlight as you hover. Click the broken element and Annoture takes a full-page screenshot instantly. A small popup opens with all the technical details pre-filled. Add a one-line description, set the severity, and submit. The whole process takes under 10 seconds.",
  },
  {
    question: "What information does Annoture capture automatically?",
    answer:
      "Every bug report includes: the exact page URL at the moment of capture, browser name and full version number, operating system and version, viewport width and height, the DOM element (tag, ID, class, CSS selector, and XPath), and a full-page screenshot with the clicked element annotated. You don't need to fill any of this in manually.",
  },
  {
    question: "Does Annoture work on any website?",
    answer:
      "Yes — the extension works on any website or web app you can open in Chrome, including staging environments, localhost, and production sites.",
  },
  {
    question: "Do developers need to install the extension too?",
    answer:
      "No. Only the people capturing bugs need the Chrome extension. Developers, designers, and project managers access the shared Kanban board through the Annoture web app — no extension required.",
  },
  {
    question: "Is Annoture free?",
    answer:
      "Annoture is currently in early access. Sign up to be notified when it launches — early access members will get priority access and be the first to hear about pricing.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0F0F0F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <OrbBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <LogoTicker />
          <Features />
          <HowItWorks />
          <ChromeExtension />
          <div className="hidden"><Testimonials /></div>
          <Pricing />
          <FAQ
            heading="Frequently asked questions"
            subheading="Everything you need to know about Annoture."
            items={homeFaqs}
          />
          <ContactForm />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
