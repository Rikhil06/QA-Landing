import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing your use of Annoture.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Acceptance of terms",
    content: (
      <p>
        By creating an Annoture account or using any part of our service, you agree to be bound by these
        Terms of Service. If you do not agree, you must not use Annoture. These terms form a legally binding
        agreement between you (or the organisation you represent) and Annoture, the operator of
        Annoture.
      </p>
    ),
  },
  {
    title: "Description of service",
    content: (
      <p>
        Annoture is a visual QA bug capture and tracking tool. It consists of a Chrome browser extension for
        capturing bug reports and a web application for managing those reports on a shared Kanban board.
        Features and limits vary by plan (Free, Starter, Team, Agency). We reserve the right to modify,
        suspend, or discontinue any part of the service at any time with reasonable notice.
      </p>
    ),
  },
  {
    title: "Accounts and teams",
    content: (
      <>
        <p>You must:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Be at least 16 years old to create an account.</li>
          <li>Provide accurate registration information and keep it up to date.</li>
          <li>Keep your password secure and not share it with others.</li>
          <li>Notify us immediately of any unauthorised access to your account.</li>
        </ul>
        <p className="mt-3">
          You are responsible for all activity that occurs under your account and any team you administer.
        </p>
      </>
    ),
  },
  {
    title: "Acceptable use",
    content: (
      <>
        <p>You agree not to use Annoture to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Violate any applicable law or regulation.</li>
          <li>Infringe the intellectual property rights of others.</li>
          <li>Upload malicious code, malware, or harmful content.</li>
          <li>
            Capture or store screenshots or data from websites you do not have permission to access or test.
          </li>
          <li>Attempt to gain unauthorised access to our systems or other users&apos; accounts.</li>
          <li>Resell or redistribute the service without our prior written consent.</li>
          <li>Use the service in a way that degrades performance for other users.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Plans, billing, and payment",
    content: (
      <>
        <p>
          Paid plans are billed in advance on a monthly or annual basis. All prices are displayed in GBP and
          are exclusive of VAT where applicable. By providing payment details, you authorise us to charge the
          applicable fees via Stripe.
        </p>
        <p className="mt-3">
          Plan limits (reports, team members, sites) are enforced as described on the pricing page. Exceeding
          a limit will require an upgrade before further usage is permitted.
        </p>
        <p className="mt-3">
          We may update pricing with 30 days&apos; notice. Continued use after the notice period constitutes
          acceptance of the new pricing.
        </p>
      </>
    ),
  },
  {
    title: "Cancellation and refunds",
    content: (
      <>
        <p>
          You may cancel your subscription at any time from the billing section of your account. Cancellation
          takes effect at the end of your current billing period — you retain access until then and will not
          be charged again. We do not offer prorated refunds for unused time on a cancelled plan.
        </p>
        <p className="mt-3">
          If you believe you have been charged in error, contact us within 14 days and we will investigate.
        </p>
      </>
    ),
  },
  {
    title: "Right of withdrawal (UK & EU consumers)",
    content: (
      <>
        <p>
          If you are a consumer based in the UK or European Union, you normally have the right to withdraw
          from a contract for digital services within 14 days of purchase without giving a reason (the
          &quot;cooling-off period&quot;).
        </p>
        <p className="mt-3">
          However, by completing registration and accessing the Annoture service, you expressly request that
          we begin providing the service immediately and acknowledge that you lose your right of withdrawal
          once the service has begun. This is permitted under the UK Consumer Rights Act 2015 and the EU
          Consumer Rights Directive.
        </p>
        <p className="mt-3">
          If you have not yet used the service and wish to cancel within 14 days of purchase, contact us and
          we will issue a full refund.
        </p>
      </>
    ),
  },
  {
    title: "Your content",
    content: (
      <>
        <p>
          You retain ownership of all bug reports, screenshots, and data you submit to Annoture
          (&quot;Your Content&quot;). By using the service you grant us a limited licence to store, process,
          and display Your Content solely to provide the service to you and your team.
        </p>
        <p className="mt-3">
          You are responsible for ensuring that screenshots and data you capture do not contain sensitive
          personal data (e.g. customer PII) that should not be stored in a third-party tool. You must have
          the right to capture and share any content submitted.
        </p>
      </>
    ),
  },
  {
    title: "Intellectual property",
    content: (
      <p>
        The Annoture name, logo, software, and all associated intellectual property are owned by Everything
        Creative. Nothing in these terms transfers any intellectual property rights to you. You may not copy,
        modify, distribute, or reverse-engineer any part of the Annoture service without our prior written
        permission.
      </p>
    ),
  },
  {
    title: "Disclaimers and limitation of liability",
    content: (
      <>
        <p>
          Annoture is provided &quot;as is&quot; without warranties of any kind, express or implied. We do
          not warrant that the service will be uninterrupted, error-free, or that data will never be lost.
        </p>
        <p className="mt-3">
          To the fullest extent permitted by law, our total liability to you for any claim arising out of or
          relating to these terms or the service is limited to the amount you paid us in the 3 months
          preceding the claim. We are not liable for indirect, incidental, or consequential damages.
        </p>
        <p className="mt-3">
          Nothing in these terms excludes or limits liability for death or personal injury caused by our
          negligence, fraud, or any other liability that cannot be excluded by law.
        </p>
      </>
    ),
  },
  {
    title: "Termination",
    content: (
      <p>
        We may suspend or terminate your account immediately if you breach these terms, without liability to
        you. Upon termination, your right to access the service ceases. We will retain your data for 30 days
        after termination to allow you to export it, after which it will be deleted in line with our Privacy
        Policy.
      </p>
    ),
  },
  {
    title: "Governing law",
    content: (
      <p>
        These terms are governed by the laws of England and Wales. Any disputes shall be subject to the
        exclusive jurisdiction of the courts of England and Wales.
      </p>
    ),
  },
  {
    title: "Changes to these terms",
    content: (
      <p>
        We may update these terms from time to time. We will notify you by email at least 14 days before
        material changes take effect. Continued use of the service after that date constitutes acceptance of
        the revised terms.
      </p>
    ),
  },
];

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="14 June 2025"
      intro="Please read these Terms of Service carefully before using Annoture. They set out the rules for using our service and your rights and responsibilities as a user."
      sections={sections}
    />
  );
}
