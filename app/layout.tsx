import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://annoture.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Annoture — Visual QA Bug Capture Tool",
    template: "%s | Annoture",
  },
  description:
    "Annoture is a visual QA tool that captures bugs in one click. The Chrome extension auto-captures screenshots, URL, browser, OS, and DOM element — creating developer-ready bug reports instantly.",
  keywords: [
    // Core product terms
    "QA tool",
    "visual QA tool",
    "QA bug capture",
    "bug reporting tool",
    "QA testing tool",
    // Long-tail
    "visual bug reporting",
    "one click bug capture",
    "Chrome extension bug tracker",
    "automatic bug reports",
    "QA Chrome extension",
    "frontend QA tool",
    "web QA tool",
    "bug tracking for QA teams",
    "screenshot bug report",
    // Feature-specific
    "screenshot annotation tool",
    "Kanban bug board",
    "quality assurance software",
    "QA workflow tool",
    "bug report with screenshot",
    "automated bug metadata capture",
  ],
  authors: [{ name: "Annoture", url: BASE_URL }],
  creator: "Annoture",
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "Annoture",
    title: "Annoture — Visual QA Bug Capture Tool",
    description:
      "Capture bugs in one click. Annoture's Chrome extension auto-captures screenshots, URL, browser, OS, and DOM element — creating developer-ready reports instantly.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Annoture — Visual QA Bug Capture Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Annoture — Visual QA Bug Capture Tool",
    description:
      "Capture bugs in one click. Annoture's Chrome extension auto-captures screenshots, URL, browser, OS, and DOM element — creating developer-ready reports instantly.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/#software`,
      name: "Annoture",
      url: BASE_URL,
      description:
        "Annoture is a visual QA bug capture tool. The Chrome extension captures bugs in one click — auto-capturing screenshots, page URL, browser version, operating system, viewport size, and DOM element selector into a developer-ready bug report on a shared Kanban board.",
      applicationCategory: "DeveloperApplication",
      applicationSubCategory: "QA Testing Tool",
      operatingSystem: "Chrome",
      browserRequirements: "Requires Google Chrome",
      softwareVersion: "1.0",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "GBP",
        availability: "https://schema.org/ComingSoon",
      },
      featureList: [
        "One-click bug capture",
        "Automatic screenshot with annotation",
        "Auto-captured URL, browser, OS, viewport, DOM element",
        "Kanban bug board",
        "Severity levels",
        "Team collaboration",
      ],
      screenshot: `${BASE_URL}/og-image.png`,
      publisher: {
        "@type": "Organization",
        name: "Annoture",
        url: BASE_URL,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Annoture",
      description: "Visual QA bug capture tool for product teams",
      publisher: {
        "@type": "Organization",
        name: "Annoture",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/apple-touch-icon.png`,
        },
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Annoture?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Annoture is a visual bug capture tool for QA teams. A Chrome extension lets you click on any broken element on a web page and instantly creates a bug report — complete with a full-page screenshot, the exact URL, browser version, operating system, viewport size, and the DOM element selector. Reports land on a shared Kanban board for your whole team.",
          },
        },
        {
          "@type": "Question",
          name: "How does the Annoture Chrome extension work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Once installed, the Annoture icon sits in your Chrome toolbar. When you find a bug, click the icon to enter capture mode. Click the broken element and Annoture takes a full-page screenshot instantly. A popup opens with all technical details pre-filled. Add a one-line description, set the severity, and submit — the whole process takes under 10 seconds.",
          },
        },
        {
          "@type": "Question",
          name: "What information does Annoture capture automatically?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every bug report automatically includes the exact page URL, browser name and full version number, operating system and version, viewport dimensions, the DOM element (CSS selector and XPath), and a full-page screenshot with the clicked element annotated.",
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
          name: "Do developers need to install the Annoture extension?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Only the people capturing bugs need the Chrome extension. Developers, designers, and project managers access the shared Kanban board through the Annoture web app — no extension required.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0F0F0F] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-58KJX531NH" />
    </html>
  );
}
