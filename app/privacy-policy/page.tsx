import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Annoture collects, uses, and protects your personal data.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Who we are",
    content: (
      <>
        <p>
          Annoture is a visual QA bug capture tool. When this policy refers to &quot;Annoture&quot;,
          &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;, it means Annoture.
        </p>
        <p className="mt-3">
          We are the data controller for personal data collected through the Annoture website (annoture.com),
          web application, Chrome extension, and Firefox add-on.
        </p>
        <p className="mt-3">
          For data protection enquiries, contact us at{" "}
          <a href="mailto:privacy@annoture.com" className="text-white/70 underline">
            privacy@annoture.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "What data we collect",
    content: (
      <>
        <p>We collect the following categories of personal data:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <strong className="text-white/70">Account data:</strong> your name and email address when you
            register.
          </li>
          <li>
            <strong className="text-white/70">Usage data:</strong> bug reports you submit, including
            screenshots, screen recordings (video/WebM), page URLs, browser, operating system, and viewport
            metadata captured by the extension.
          </li>
          <li>
            <strong className="text-white/70">Console log data:</strong> browser console errors and warnings
            captured at the time of a bug report. These are filtered to error/warning level only (not
            console.log) and are redacted to remove tokens, emails, and other sensitive patterns before
            transmission.
          </li>
          <li>
            <strong className="text-white/70">Billing data:</strong> payment method details and invoice
            history, processed and stored by Stripe. We do not store full card numbers.
          </li>
          <li>
            <strong className="text-white/70">Technical data:</strong> IP address, browser type, device
            information, and pages visited, collected via cookies and server logs.
          </li>
          <li>
            <strong className="text-white/70">Communications:</strong> messages you send us via the contact
            form.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "How we use your data",
    content: (
      <>
        <p>We use your data to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Create and manage your account and team workspace.</li>
          <li>Provide and improve the Annoture service.</li>
          <li>Process payments and send billing communications.</li>
          <li>Send transactional emails (e.g. account verification, password reset).</li>
          <li>Diagnose bugs and monitor service performance via error tracking.</li>
          <li>Analyse aggregate usage trends to improve the product (via analytics).</li>
          <li>Respond to support requests.</li>
        </ul>
        <p className="mt-3">
          We do not sell your personal data to third parties or use it for advertising.
        </p>
      </>
    ),
  },
  {
    title: "Legal basis for processing (UK/EU users)",
    content: (
      <>
        <p>We process your data under the following lawful bases:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <strong className="text-white/70">Contract:</strong> processing necessary to provide the service
            you signed up for (account management, bug reports, billing).
          </li>
          <li>
            <strong className="text-white/70">Legitimate interests:</strong> service monitoring, fraud
            prevention, and product improvement — where these don&apos;t override your rights.
          </li>
          <li>
            <strong className="text-white/70">Consent:</strong> analytics cookies and non-essential tracking.
            You can withdraw consent at any time via the cookie banner.
          </li>
          <li>
            <strong className="text-white/70">Legal obligation:</strong> where we are required to retain
            records (e.g. financial records for tax purposes).
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Third-party services (sub-processors)",
    content: (
      <>
        <p>We share data with trusted third parties only as needed to operate the service:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <strong className="text-white/70">Stripe</strong> — payment processing. Your card details are
            handled directly by Stripe and governed by{" "}
            <a
              href="https://stripe.com/gb/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline"
            >
              Stripe&apos;s Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong className="text-white/70">Render</strong> — database and backend API hosting. Account,
            team, and bug report data is stored on Render-managed PostgreSQL infrastructure.
          </li>
          <li>
            <strong className="text-white/70">Cloudflare (R2)</strong> — object storage for screenshots and
            screen recordings captured in bug reports.
          </li>
          <li>
            <strong className="text-white/70">Vercel</strong> — hosting for the web application and landing
            page.
          </li>
          <li>
            <strong className="text-white/70">Resend</strong> — transactional email delivery (account
            verification, password reset, and billing notifications). Email addresses are shared with Resend
            solely to deliver these messages.
          </li>
          <li>
            <strong className="text-white/70">Sentry</strong> — error monitoring (collects anonymised error
            context and stack traces).
          </li>
          <li>
            <strong className="text-white/70">Google Analytics</strong> — aggregate usage analytics (only
            loaded with your consent).
          </li>
        </ul>
        <p className="mt-3">
          All sub-processors are required to handle your data in accordance with applicable data protection law.
        </p>
      </>
    ),
  },
  {
    title: "International data transfers",
    content: (
      <p>
        Some of our sub-processors (including Stripe, Cloudflare, Render, Resend, and Sentry) are based in
        the United States. Transfers of personal data from the UK to the US are covered by the UK–US Data
        Bridge (where the recipient is certified) or by Standard Contractual Clauses approved by the UK
        Information Commissioner. By using Annoture you acknowledge that your data may be transferred to and
        processed in the United States under these safeguards.
      </p>
    ),
  },
  {
    title: "Data retention",
    content: (
      <p>
        We retain your account and project data for as long as your account is active. If you delete your
        account, we will delete or anonymise your personal data within 30 days, except where we are required
        to retain it for legal or financial compliance (e.g. invoice records, which we keep for 7 years in
        line with UK tax law).
      </p>
    ),
  },
  {
    title: "Your rights",
    content: (
      <>
        <p>Under UK GDPR and applicable data protection law, you have the right to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Access the personal data we hold about you.</li>
          <li>Correct inaccurate or incomplete data.</li>
          <li>Request deletion of your data (&quot;right to be forgotten&quot;).</li>
          <li>Restrict or object to certain processing.</li>
          <li>Data portability — receive your data in a machine-readable format.</li>
          <li>Withdraw consent for analytics at any time.</li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, email us at{" "}
          <a href="mailto:privacy@annoture.com" className="text-white/70 underline">
            privacy@annoture.com
          </a>
          . We will respond within 30 days. You also have the right to lodge a complaint with the{" "}
          <a
            href="https://ico.org.uk/make-a-complaint"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 underline"
          >
            Information Commissioner&apos;s Office (ICO)
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Cookies",
    content: (
      <p>
        We use cookies for authentication, preferences, and (with your consent) analytics. See our{" "}
        <a href="/cookies" className="text-white/70 underline">
          Cookie Policy
        </a>{" "}
        for full details.
      </p>
    ),
  },
  {
    title: "Security",
    content: (
      <p>
        We use industry-standard measures to protect your data, including encryption in transit (TLS),
        hashed passwords (bcrypt), httpOnly authentication cookies, and access controls. No method of
        transmission over the internet is 100% secure, but we take reasonable precautions to protect your
        information.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    content: (
      <p>
        We may update this policy from time to time. We will notify registered users of material changes by
        email. The &quot;last updated&quot; date at the top of this page always reflects the current version.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="28 June 2025"
      intro="This Privacy Policy explains how Annoture collects, uses, and protects personal data when you use our website, web application, Chrome extension, and Firefox add-on. We take your privacy seriously and are committed to being transparent about our data practices."
      sections={sections}
    />
  );
}
