export type IntegrationStatus = 'available' | 'coming-soon';

export type IntegrationFeature = {
  title: string;
  description: string;
};

export type IntegrationStep = {
  step: string;
  title: string;
  description: string;
};

export type Integration = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: 'Project Management' | 'Issue Tracking' | 'Communication' | 'CI/CD' | 'Design';
  status: IntegrationStatus;
  color: string;           // Tailwind bg color for the icon background
  textColor: string;       // Tailwind text color for category badge
  borderColor: string;     // Tailwind border color for category badge
  bgColor: string;         // Tailwind bg for category badge
  icon: string;            // SVG path(s) as a string
  viewBox?: string;
  features: IntegrationFeature[];
  howItWorks: IntegrationStep[];
  setupUrl?: string;       // docs or in-app URL
  docsNote?: string;
};

export const integrations: Integration[] = [
  {
    slug: 'github',
    name: 'GitHub',
    tagline: 'Turn bug reports into GitHub Issues automatically',
    description:
      'Connect your GitHub account and every bug captured through Annoture is instantly filed as a GitHub Issue — complete with the full-page screenshot, page URL, browser, OS, viewport, and the exact DOM element selector. Your team stays in sync without any copy-pasting.',
    category: 'Issue Tracking',
    status: 'available',
    color: 'bg-white/8',
    textColor: 'text-violet-300',
    borderColor: 'border-violet-500/20',
    bgColor: 'bg-violet-500/10',
    viewBox: '0 0 24 24',
    icon: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z',
    features: [
      {
        title: 'Instant issue creation',
        description: 'The moment a bug is captured, a GitHub Issue is created in your chosen repository with zero manual work.',
      },
      {
        title: 'Screenshot embedded',
        description: 'The full-page screenshot is embedded directly in the issue body — reviewers see exactly what was broken without leaving GitHub.',
      },
      {
        title: 'Full context attached',
        description: 'Browser, OS, screen size, viewport, page URL, and the exact CSS selector are all included so developers can reproduce in seconds.',
      },
      {
        title: 'Two-way visibility',
        description: 'The Annoture card links back to the GitHub Issue, and the GitHub Issue links back to the report — nothing gets lost.',
      },
      {
        title: 'Per-site configuration',
        description: 'Map each Annoture site to a different repository. One Annoture account can feed issues into multiple GitHub repos.',
      },
      {
        title: 'Works with any plan',
        description: 'GitHub integration is available on all Annoture plans, including the free tier.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Connect your GitHub account',
        description: 'Go to Site Settings in Annoture and click "Connect GitHub". Authorise with a read/write repo scope. Takes 30 seconds.',
      },
      {
        step: '02',
        title: 'Pick a repository',
        description: 'Search and select which GitHub repository issues should land in. You can set a different repo for each site.',
      },
      {
        step: '03',
        title: 'Capture bugs as normal',
        description: 'Use the Annoture Chrome extension to capture bugs on any page. Nothing changes in your capture workflow.',
      },
      {
        step: '04',
        title: 'Issues appear automatically',
        description: 'Annoture creates the GitHub Issue in the background — the developer finds a fully formed issue waiting for them.',
      },
    ],
    setupUrl: 'https://app.annoture.com',
  },
  {
    slug: 'jira',
    name: 'Jira',
    tagline: 'File Jira issues the moment a bug is captured',
    description:
      'Connect your Atlassian account and Annoture automatically creates a Jira Bug issue in your chosen project whenever a bug is captured. The screenshot, URL, browser metadata, and DOM selector are formatted using the native Atlassian Document Format so everything looks perfect inside Jira.',
    category: 'Issue Tracking',
    status: 'available',
    color: 'bg-[#0052CC]/10',
    textColor: 'text-blue-300',
    borderColor: 'border-blue-500/20',
    bgColor: 'bg-blue-500/10',
    viewBox: '0 0 24 24',
    icon: 'M11.53 2.001a.75.75 0 0 0-.55.22L2.22 10.98a.75.75 0 0 0 0 1.06l3.4 3.4 5.91-5.91 5.91 5.91 3.4-3.4a.75.75 0 0 0 0-1.06L12.08 2.22a.75.75 0 0 0-.55-.22zm.55 9.94-5.91 5.91 3.4 3.4a.75.75 0 0 0 1.06 0l3.36-3.36z',
    features: [
      {
        title: 'Native ADF formatting',
        description: 'Jira issue descriptions are built using Atlassian Document Format — not plain text — so screenshots render properly and metadata is beautifully structured.',
      },
      {
        title: 'Screenshot in the issue',
        description: "The full-page screenshot appears directly inside the Jira issue. No attachments to hunt for — it's the first thing a developer sees.",
      },
      {
        title: 'Bug metadata as a table',
        description: 'Browser, OS, screen size, viewport, page URL, and DOM element are formatted as a structured table inside the description.',
      },
      {
        title: 'Automatic token refresh',
        description: 'Atlassian access tokens expire hourly. Annoture handles the refresh silently so your integration never breaks overnight.',
      },
      {
        title: 'Multi-cloud support',
        description: 'If you have multiple Atlassian Cloud instances, Annoture lets you pick which one to connect and maps each site to a different project.',
      },
      {
        title: 'Kanban + Jira in sync',
        description: 'Every report appears on the Annoture Kanban board and in Jira simultaneously. Teams can work in whichever tool they prefer.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Connect your Atlassian account',
        description: 'In Site Settings, click "Connect Jira". You\'ll be taken through the Atlassian OAuth flow. Annoture requests only the permissions it needs.',
      },
      {
        step: '02',
        title: 'Select a cloud and project',
        description: 'Choose your Atlassian Cloud site, then pick the Jira project where issues should be created.',
      },
      {
        step: '03',
        title: 'Capture bugs as usual',
        description: 'The Chrome extension workflow is identical. Capture a bug and Annoture handles the rest in the background.',
      },
      {
        step: '04',
        title: 'Issues appear in your backlog',
        description: 'A Bug issue lands in your Jira project immediately, complete with screenshot and all bug metadata — ready for triage.',
      },
    ],
    setupUrl: 'https://app.annoture.com',
  },
  {
    slug: 'slack',
    name: 'Slack',
    tagline: 'Get notified in Slack the moment a bug is captured',
    description:
      'Send a Slack notification to any channel whenever a new bug is captured through Annoture. The message includes the title, priority, page URL, and a direct link to the report — so your team can react immediately without checking the Kanban board.',
    category: 'Communication',
    status: 'coming-soon',
    color: 'bg-[#4A154B]/20',
    textColor: 'text-pink-300',
    borderColor: 'border-pink-500/20',
    bgColor: 'bg-pink-500/10',
    viewBox: '0 0 24 24',
    icon: 'M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z',
    features: [
      { title: 'Channel notifications', description: 'Route bug notifications to any Slack channel — a dedicated #bugs channel, your dev channel, or both.' },
      { title: 'Priority filtering', description: 'Only get notified for high and urgent priority bugs, or receive everything. Your call.' },
      { title: 'Direct report links', description: 'Every Slack message includes a one-click link that opens the full report in Annoture.' },
      { title: 'Per-site routing', description: 'Different Annoture sites can notify different Slack channels so the right team always hears first.' },
    ],
    howItWorks: [
      { step: '01', title: 'Connect Slack', description: 'Authorise Annoture to post to your Slack workspace with one click.' },
      { step: '02', title: 'Choose a channel', description: 'Select which channel should receive bug notifications for each site.' },
      { step: '03', title: 'Capture bugs', description: 'Capture bugs with the Chrome extension as usual.' },
      { step: '04', title: 'Team gets notified', description: 'A Slack message appears instantly with the bug title, priority, and a link to the full report.' },
    ],
  },
  {
    slug: 'linear',
    name: 'Linear',
    tagline: 'Create Linear issues from bug reports in one step',
    description:
      'Sync Annoture bug reports into Linear issues automatically. Every capture goes straight into your chosen team and project with the right priority mapping — so your engineering workflow stays entirely in Linear.',
    category: 'Project Management',
    status: 'coming-soon',
    color: 'bg-indigo-500/10',
    textColor: 'text-indigo-300',
    borderColor: 'border-indigo-500/20',
    bgColor: 'bg-indigo-500/10',
    viewBox: '0 0 100 100',
    icon: 'M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L37.9741 96.1782c.6889.6889.0915 1.8189-.857 1.5964C16.0408 93.1714 5.11719 79.2716 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887 .5599.28957.7606L52.3503 99.7085c.2007.2007.4773.3074.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465776 2.2686-.778...M7.50497 32.2893c-.4692-.4692-.4438-1.2291.0804-1.6574C14.9996 24.3733 24.4996 20 35 20c27.6142 0 50 22.3858 50 50 0 10.5004-4.3733 19.0004-10.6319 27.4146-.4283.5242-1.1882.5496-1.6574.0804L7.50497 32.2893Z',
    features: [
      { title: 'Automatic issue creation', description: 'Bugs captured in Annoture appear as Linear issues in your chosen team instantly.' },
      { title: 'Priority mapping', description: 'Annoture priorities (low, medium, high, urgent) map to the equivalent Linear urgency levels.' },
      { title: 'Cycle and project routing', description: 'Assign new issues to an active cycle or project automatically.' },
      { title: 'Screenshot as attachment', description: 'The full-page screenshot is attached to the Linear issue for full visual context.' },
    ],
    howItWorks: [
      { step: '01', title: 'Connect Linear', description: 'Authorise Annoture via the Linear OAuth app in Site Settings.' },
      { step: '02', title: 'Pick a team and project', description: 'Choose which Linear team and project should receive new bug issues.' },
      { step: '03', title: 'Capture bugs', description: 'The Chrome extension workflow is unchanged.' },
      { step: '04', title: 'Issues appear in Linear', description: 'A fully formed Linear issue is created with title, description, priority, and screenshot.' },
    ],
  },
  {
    slug: 'figma',
    name: 'Figma',
    tagline: 'Pin bug reports directly onto Figma frames',
    description:
      'Attach Annoture bug reports to Figma frames so designers can see exactly what broke — right next to the original design. Close the loop between design intent and production reality.',
    category: 'Design',
    status: 'coming-soon',
    color: 'bg-orange-500/10',
    textColor: 'text-orange-300',
    borderColor: 'border-orange-500/20',
    bgColor: 'bg-orange-500/10',
    viewBox: '0 0 38 57',
    icon: 'M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0zm-19 19a9.5 9.5 0 0 1 9.5-9.5H19V47a9.5 9.5 0 0 1-19 0zM0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5zm19-9.5h9.5a9.5 9.5 0 0 1 0 19H19V0zm-19 19h9.5A9.5 9.5 0 0 1 19 28.5V19H9.5A9.5 9.5 0 0 1 0 19z',
    features: [
      { title: 'Frame-level pinning', description: 'Link a bug report to the exact Figma frame that covers the broken component.' },
      { title: 'Side-by-side comparison', description: 'See the Annoture screenshot alongside the design to spot exactly where implementation diverges.' },
      { title: 'Comment export', description: 'Annoture comments sync as Figma comments so designers are looped in automatically.' },
      { title: 'Design to QA flow', description: 'Designers can link frames to Annoture sites, making the design-to-QA handoff seamless.' },
    ],
    howItWorks: [
      { step: '01', title: 'Connect Figma', description: 'Authorise Annoture with your Figma account in Site Settings.' },
      { step: '02', title: 'Link a frame', description: 'Map your Annoture site to the corresponding Figma file and frame.' },
      { step: '03', title: 'Capture bugs', description: 'Capture bugs on the live site as usual.' },
      { step: '04', title: 'Reports pin to Figma', description: 'Bug reports are pinned as comments on the Figma frame for designer review.' },
    ],
  },
];

export function getIntegration(slug: string): Integration | undefined {
  return integrations.find((i) => i.slug === slug);
}

export const availableIntegrations = integrations.filter(i => i.status === 'available');
export const comingSoonIntegrations = integrations.filter(i => i.status === 'coming-soon');
