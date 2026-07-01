import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Annoture uses cookies and how to manage your preferences.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "What are cookies?",
    content: (
      <p>
        Cookies are small text files placed on your device by a website when you visit it. They are widely
        used to make websites work efficiently, remember your preferences, and provide information to site
        owners.
      </p>
    ),
  },
  {
    title: "How we use cookies",
    content: (
      <p>
        Annoture uses cookies on the landing page (annoture.com) and the web application (app.annoture.com).
        We use a mix of first-party cookies (set by us) and third-party cookies (set by our service
        providers). Below is a full list of the cookies we use and why.
      </p>
    ),
  },
  {
    title: "Essential cookies",
    content: (
      <>
        <p>
          These cookies are necessary for the service to function. They cannot be disabled. No consent is
          required for these under UK GDPR.
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-4 text-white/50 font-medium">Name</th>
                <th className="text-left py-2 pr-4 text-white/50 font-medium">Purpose</th>
                <th className="text-left py-2 text-white/50 font-medium">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-2 pr-4 font-mono text-white/60">token</td>
                <td className="py-2 pr-4">
                  Stores your authentication JWT as an httpOnly cookie (not readable by JavaScript) to keep
                  you securely logged in to the web app. Set by the API server.
                </td>
                <td className="py-2">7 days</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-white/60">has_session</td>
                <td className="py-2 pr-4">
                  A non-sensitive flag (value: &quot;1&quot;) that tells the web app a session is active,
                  without exposing the JWT itself. Set alongside the <code>token</code> cookie.
                </td>
                <td className="py-2">7 days</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-white/60">oauth_state</td>
                <td className="py-2 pr-4">
                  A short-lived security token used during Google and GitHub sign-in to prevent
                  cross-site request forgery (CSRF) attacks. Automatically cleared after sign-in completes.
                </td>
                <td className="py-2">10 minutes</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-white/60">cookie_consent</td>
                <td className="py-2 pr-4">Remembers your cookie consent preference.</td>
                <td className="py-2">1 year</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    title: "Analytics cookies",
    content: (
      <>
        <p>
          These cookies help us understand how visitors use our site so we can improve it. They are only
          set with your consent.
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-4 text-white/50 font-medium">Name</th>
                <th className="text-left py-2 pr-4 text-white/50 font-medium">Provider</th>
                <th className="text-left py-2 pr-4 text-white/50 font-medium">Purpose</th>
                <th className="text-left py-2 text-white/50 font-medium">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-2 pr-4 font-mono text-white/60">_ga</td>
                <td className="py-2 pr-4">Google Analytics</td>
                <td className="py-2 pr-4">Distinguishes unique users by assigning a random ID.</td>
                <td className="py-2">2 years</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-white/60">_ga_*</td>
                <td className="py-2 pr-4">Google Analytics</td>
                <td className="py-2 pr-4">Maintains session state.</td>
                <td className="py-2">2 years</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          Google Analytics data is processed by Google LLC. For more information, see{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 underline"
          >
            Google&apos;s Privacy Policy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Managing your preferences",
    content: (
      <>
        <p>
          When you first visit annoture.com, a cookie banner allows you to accept or decline analytics
          cookies. You can change your preference at any time by clicking the &quot;Cookie settings&quot;
          link in the footer.
        </p>
        <p className="mt-3">
          You can also manage or delete cookies through your browser settings. Note that disabling essential
          cookies will prevent you from logging in to the app.
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-3">
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline"
            >
              Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline"
            >
              Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/en-gb/windows/manage-cookies-in-microsoft-edge-168dab11-0753-043d-7c16-ede5947fc64d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline"
            >
              Edge
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Changes to this policy",
    content: (
      <p>
        We may update this Cookie Policy to reflect changes in the cookies we use or applicable law. The
        &quot;last updated&quot; date at the top of this page will be revised accordingly.
      </p>
    ),
  },
];

export default function CookiePolicy() {
  return (
    <LegalLayout
      title="Cookie Policy"
      lastUpdated="28 June 2025"
      intro="This Cookie Policy explains what cookies are, which ones Annoture uses, and how you can control them. We respect your right to privacy and your ability to manage your preferences."
      sections={sections}
    />
  );
}
