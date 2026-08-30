export type ChangelogEntry = {
  version: string;
  date: string;
  tag: "feature" | "improvement" | "fix" | "security";
  title: string;
  items: string[];
};

export const changelog: ChangelogEntry[] = [
  {
    version: "1.0.3",
    date: "30 August 2026",
    tag: "feature",
    title: "Environment detection & security hardening",
    items: [
      "Chrome extension now auto-detects environment (Prod / Staging / Dev) from the current URL and pre-fills it in the capture form.",
      "Environment field added to all bug reports — visible in the Kanban report modal.",
      "Added security.txt to comply with RFC 9116 responsible disclosure standards.",
      "Enabled Row Level Security on all Supabase tables.",
      "Cloudflare proxy added to api.annoture.com for DDoS mitigation and bot protection.",
    ],
  },
  {
    version: "1.0.2",
    date: "19 August 2026",
    tag: "improvement",
    title: "Kanban board & site card improvements",
    items: [
      "Pin site now persists correctly across page navigation — fixed cache invalidation bug.",
      "Settings button on site cards now navigates directly to the site settings page.",
      "Removed non-functional View Screenshots button from site card menu.",
      "PostHog analytics added: page views, signup, and login events are now tracked.",
    ],
  },
  {
    version: "1.0.1",
    date: "19 July 2026",
    tag: "feature",
    title: "GitHub & Jira integrations",
    items: [
      "Connect a GitHub repository to automatically create Issues for every bug captured.",
      "Connect a Jira cloud project to automatically create Bug tickets in ADF format.",
      "Screenshots are embedded directly in issue bodies with persistent Cloudflare R2 URLs.",
      "Atlassian access tokens are refreshed automatically — no manual re-authorisation needed.",
      "GitHub and Jira badge links shown on Kanban report cards.",
    ],
  },
  {
    version: "1.0.0",
    date: "9 July 2026",
    tag: "feature",
    title: "Initial launch",
    items: [
      "Chrome extension captures full-page screenshots with a single click.",
      "Auto-captures URL, browser, OS, viewport, and DOM element selector.",
      "Reports land on a shared Kanban board with Backlog, In Progress, and Done columns.",
      "Severity levels: Low, Medium, High, Urgent.",
      "Team collaboration: invite members, assign reports, leave comments.",
      "Console log capture included with every report.",
      "Free plan with unlimited reports on one project.",
    ],
  },
];
