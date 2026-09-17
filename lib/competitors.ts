// Competitor facts are taken from each vendor's own pricing page. Re-check them
// and update `pricingCheckedOn` whenever this file changes: comparison claims
// about other companies must stay accurate.

export type ComparisonRow = { label: string; competitor: string; annoture: string };
export type FeatureRow = { label: string; competitor: boolean; annoture: boolean; note?: string };

// Text fields may contain inline links written as [label](/path).
export type Competitor = {
  slug: string;              // URL: /compare/<slug>
  name: string;
  pricingUrl: string;
  pricingCheckedOn: string;  // display date, e.g. "17 September 2026"
  seoTitle: string;
  seoDescription: string;
  heading: string;
  subheading: string;
  chooseAnnoture: string[];
  chooseCompetitor: string[];
  pricing: ComparisonRow[];
  features: FeatureRow[];
  switchSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

// Annoture's own plans (see components/Pricing.tsx).
export const annoturePlans = {
  free: "Free forever: 3 projects, 5 members, 100 screenshots/month, 7-day retention",
  starter: "£15/mo (£12/mo billed yearly), 10 members",
  team: "£39/mo (£31/mo billed yearly), unlimited members",
};

const switchSteps = [
  {
    title: "Install the Chrome extension",
    description:
      "Add Annoture from the Chrome Web Store and create a free account. No card needed.",
  },
  {
    title: "Create a project and invite your team",
    description:
      "Add the site you're testing as a project and invite up to 5 teammates on the free plan.",
  },
  {
    title: "Connect GitHub or Jira (optional)",
    description:
      "If your developers work in GitHub or Jira, connect it so every captured bug is filed there automatically.",
  },
  {
    title: "Run both tools side by side for a sprint",
    description:
      "Capture new bugs in Annoture while you finish open items in your current tool, then switch over once the backlog is clear.",
  },
];

export const competitors: Competitor[] = [
  {
    slug: "bugherd-alternative",
    name: "BugHerd",
    pricingUrl: "https://bugherd.com/pricing",
    pricingCheckedOn: "17 September 2026",
    seoTitle: "BugHerd Alternative with a Free Plan",
    seoDescription:
      "Looking for a BugHerd alternative? Annoture is a visual bug capture tool with a free-forever plan, a built-in Kanban board, and paid plans from £15/month. See an honest side-by-side comparison.",
    heading: "The BugHerd alternative with a free plan",
    subheading:
      "BugHerd and Annoture both capture visual bug reports and track them on a Kanban board. The difference is price: BugHerd starts at $50/month, while Annoture has a free plan that never expires and paid plans from £15/month.",
    chooseAnnoture: [
      "You want a free plan to use indefinitely, not a time-limited trial.",
      "Your team is small and $50/month for 5 members is hard to justify.",
      "Your testing is mainly on live websites and web apps in Chrome.",
      "You want Jira or GitHub integration without upgrading: both are on Annoture's free plan, while BugHerd's Jira integration starts on its $150/month Premium plan.",
    ],
    chooseCompetitor: [
      "You collect feedback from lots of clients: BugHerd includes unlimited guest users on every plan.",
      "You need feedback on Figma files, PDFs, or images as well as websites.",
      "You rely on integrations Annoture doesn't offer yet, such as Trello, Slack, or Microsoft Teams.",
      "You want video feedback built in.",
    ],
    pricing: [
      { label: "Free plan", competitor: "No, free trial only", annoture: "Yes, free forever" },
      { label: "Entry paid plan", competitor: "Standard: $50/mo ($42/mo billed yearly)", annoture: "Starter: £15/mo (£12/mo billed yearly)" },
      { label: "Members on entry plan", competitor: "5", annoture: "10" },
      { label: "Next plan up", competitor: "Studio: $80/mo, 10 members", annoture: "Team: £39/mo, unlimited members" },
      { label: "Guest / client users", competitor: "Unlimited on every plan", annoture: "Client-specific boards on the Agency plan" },
      { label: "Jira integration", competitor: "Premium plan ($150/mo) and above", annoture: "Included on the free plan" },
    ],
    features: [
      { label: "One-click visual bug capture", competitor: true, annoture: true },
      { label: "Screenshot with technical details (URL, browser, OS)", competitor: true, annoture: true },
      { label: "Built-in Kanban board", competitor: true, annoture: true },
      { label: "Chrome extension", competitor: true, annoture: true },
      { label: "Free plan with no time limit", competitor: false, annoture: true },
      { label: "GitHub integration", competitor: true, annoture: true },
      { label: "Jira integration on the entry plan", competitor: false, annoture: true, note: "BugHerd includes Jira from its Premium plan. Annoture includes it on the free plan." },
      { label: "Feedback on Figma, PDF, and image files", competitor: true, annoture: false },
      { label: "Video feedback", competitor: true, annoture: false },
      { label: "Slack and Microsoft Teams integrations", competitor: true, annoture: false, note: "Annoture's Slack integration is coming soon." },
    ],
    switchSteps,
    faqs: [
      {
        question: "Is there a free alternative to BugHerd?",
        answer:
          "Yes. Annoture has a free-forever plan with 3 projects, 5 team members, 100 screenshots a month, and 7-day retention. BugHerd offers a free trial, but no permanent free plan.",
      },
      {
        question: "How much does BugHerd cost compared to Annoture?",
        answer:
          "BugHerd's Standard plan is $50/month ($42/month billed yearly) for 5 members, and Studio is $80/month for 10 members. Annoture's Starter plan is £15/month (£12/month billed yearly) for 10 members, and Team is £39/month with unlimited members. BugHerd prices are in US dollars and Annoture's are in pounds.",
      },
      {
        question: "Does Annoture have a Kanban board like BugHerd?",
        answer:
          "Yes. Both tools include a built-in Kanban board, so captured bugs can be tracked and moved through your workflow without a separate project management tool.",
      },
      {
        question: "What does BugHerd do that Annoture doesn't?",
        answer:
          "BugHerd includes unlimited guest users on every plan, feedback on Figma files, PDFs, and images, video feedback, and a wider range of integrations including Trello, Slack, and Microsoft Teams. If those are central to how you work, BugHerd may be the better fit.",
      },
      {
        question: "Can I move from BugHerd to Annoture?",
        answer:
          "Yes. Install the Annoture Chrome extension, create a project for your site, and invite your team. Most teams capture new bugs in Annoture while they close out open items in BugHerd, then switch fully once that backlog is clear.",
      },
    ],
  },
  {
    slug: "marker-io-alternative",
    name: "Marker.io",
    pricingUrl: "https://marker.io/pricing",
    pricingCheckedOn: "17 September 2026",
    seoTitle: "Marker.io Alternative with a Built-in Board",
    seoDescription:
      "Looking for a Marker.io alternative? Annoture captures visual bug reports and tracks them on its own Kanban board, with a free-forever plan and paid plans from £15/month. See an honest comparison.",
    heading: "The Marker.io alternative with its own bug board",
    subheading:
      "Marker.io captures bug reports and sends them into tools like Jira, Trello, or Asana. Annoture captures the same kind of report and tracks it on a built-in Kanban board, with a free plan that never expires.",
    chooseAnnoture: [
      "You want to capture and track bugs in one tool, without setting up a separate project management tool.",
      "You want a free plan to use indefinitely, not a 15-day trial.",
      "You need more than 3 users without jumping to a higher tier.",
      "You want console errors captured with every report.",
      "You want Jira integration without upgrading: it's on Annoture's free plan, while Marker.io lists Jira from its Team plan.",
    ],
    chooseCompetitor: [
      "You need session replay attached to bug reports today (Marker.io Team plan and above). Screen recording is coming soon to Annoture.",
      "Your team already manages all work in a tool like Asana, ClickUp, Linear, or Azure DevOps.",
      "You need a very wide range of integrations, including Zendesk and Intercom on the Business plan.",
    ],
    pricing: [
      { label: "Free plan", competitor: "No, 15-day free trial", annoture: "Yes, free forever" },
      { label: "Entry paid plan", competitor: "Starter: $59/mo ($39/mo billed yearly)", annoture: "Starter: £15/mo (£12/mo billed yearly)" },
      { label: "Users on entry plan", competitor: "3", annoture: "10" },
      { label: "Next plan up", competitor: "Team: $199/mo ($149/mo billed yearly), 15 users", annoture: "Team: £39/mo, unlimited members" },
      { label: "Where bugs are tracked", competitor: "In your external tool (Jira, Trello, Asana…)", annoture: "Built-in Kanban board, plus GitHub or Jira" },
      { label: "Jira integration", competitor: "Team plan and above", annoture: "Included on the free plan" },
      { label: "Console logs", competitor: "Team plan and above", annoture: "Console errors captured automatically" },
      { label: "Session replay / screen recording", competitor: "Team plan and above", annoture: "Screen recording coming soon" },
    ],
    features: [
      { label: "One-click visual bug capture", competitor: true, annoture: true },
      { label: "Screenshot with environment details", competitor: true, annoture: true },
      { label: "Built-in Kanban board", competitor: false, annoture: true },
      { label: "Free plan with no time limit", competitor: false, annoture: true },
      { label: "GitHub integration", competitor: true, annoture: true },
      { label: "Jira integration", competitor: true, annoture: true, note: "Marker.io lists Jira from its Team plan. Annoture includes it on the free plan." },
      { label: "Console error capture", competitor: true, annoture: true, note: "Marker.io Team plan and above." },
      { label: "Session replay", competitor: true, annoture: false, note: "Marker.io Team plan and above. Screen recording is coming soon to Annoture." },
    ],
    switchSteps,
    faqs: [
      {
        question: "Is there a free alternative to Marker.io?",
        answer:
          "Yes. Annoture has a free-forever plan with 3 projects, 5 team members, 100 screenshots a month, and 7-day retention. Marker.io offers a 15-day free trial with no credit card required, but no permanent free plan.",
      },
      {
        question: "How much does Marker.io cost compared to Annoture?",
        answer:
          "Marker.io's Starter plan is $59/month, or $39/month billed yearly, for 3 users. Its Team plan is $199/month, or $149/month billed yearly, for 15 users. Annoture's Starter plan is £15/month (£12/month billed yearly) for 10 members, and Team is £39/month with unlimited members. Marker.io prices are in US dollars and Annoture's are in pounds.",
      },
      {
        question: "Does Marker.io have its own task board?",
        answer:
          "No. Marker.io sends bug reports into the tools your team already uses, such as Jira, Trello, Asana, or GitHub. Annoture includes its own Kanban board and can also file reports to GitHub or Jira, both available on the free plan.",
      },
      {
        question: "What does Marker.io do that Annoture doesn't?",
        answer:
          "Marker.io offers session replay on its Team plan and above, and integrates with many more tools, including Asana, ClickUp, Linear, Azure DevOps, Zendesk, and Intercom. Screen recording is coming soon to Annoture. If your team depends on session replay today or on those integrations, Marker.io may be the better fit.",
      },
      {
        question: "Can I move from Marker.io to Annoture?",
        answer:
          "Yes. Install the Annoture Chrome extension, create a project for your site, and invite your team. If your developers work in GitHub or Jira, connect it so reports keep landing where they already look.",
      },
    ],
  },
];

export function getCompetitor(slug: string): Competitor | undefined {
  return competitors.find((c) => c.slug === slug);
}
