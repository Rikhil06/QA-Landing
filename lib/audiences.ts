export type AudiencePage = {
  slug: string;
  name: string;
  navDesc: string;
  headline: string;
  subheadline: string;
  painPoints: { title: string; body: string }[];
  features: { icon: string; title: string; body: string }[];
  workflow: { step: string; title: string; body: string }[];
  quote: { text: string; author: string; role: string };
  ctaHeadline: string;
  ctaBody: string;
};

export const audiences: AudiencePage[] = [
  {
    slug: "agencies",
    name: "Agencies",
    navDesc: "Collect feedback from your clients",
    headline: "Stop chasing clients for bug details.",
    subheadline: "Annoture lets your clients click on any issue and submit a fully-documented report — URL, screenshot, browser, and all. No more vague emails. No more missing context.",
    painPoints: [
      { title: "\"It's broken on my end\"", body: "Clients report issues without any technical context. You spend 20 minutes in emails just to understand what page they were on." },
      { title: "Feedback scattered everywhere", body: "Bugs arrive via email, WhatsApp, Slack, and phone call. Nothing is tracked. Things fall through the cracks." },
      { title: "Revision cycles drag on", body: "One unclear bug report turns into a two-day thread. Your developers can't fix what they can't reproduce." },
    ],
    features: [
      { icon: "🖱️", title: "Client-friendly capture", body: "Clients don't need to be technical. They click the broken element, add a note, and submit. That's it." },
      { icon: "📋", title: "Automatic context", body: "Every report captures the URL, browser, OS, viewport, and a screenshot — without the client doing anything extra." },
      { icon: "📌", title: "Kanban board per project", body: "Each client project gets its own board. Your team sees every report organised by status and priority." },
      { icon: "🔗", title: "GitHub & Jira sync", body: "Reports flow directly into your existing development workflow — no copy-pasting, no manual tickets." },
    ],
    workflow: [
      { step: "01", title: "Share the extension with your client", body: "Send one link. They install the Chrome extension in 30 seconds. No account needed to start capturing." },
      { step: "02", title: "Client clicks on the issue", body: "They enter capture mode, click the broken element, and add a one-line description. Done in under 10 seconds." },
      { step: "03", title: "Your team reviews the board", body: "The report lands on your Kanban board with all technical details pre-filled and ready to assign." },
    ],
    quote: {
      text: "We used to spend half our revision time just figuring out what the client meant. Now every report has the screenshot and the URL and we can just fix it.",
      author: "Agency Project Manager",
      role: "Digital Agency",
    },
    ctaHeadline: "Make client feedback actually useful.",
    ctaBody: "Set up your first project in under 5 minutes. Free plan included.",
  },
  {
    slug: "saas",
    name: "SaaS Teams",
    navDesc: "Ship faster with better QA",
    headline: "QA that keeps up with continuous deployment.",
    subheadline: "When your team ships multiple times a day, bug reports need to be instant, complete, and already on the board. Annoture captures everything in one click so your team never slows down.",
    painPoints: [
      { title: "Incomplete bug reports block deploys", body: "A developer can't fix a bug they can't reproduce. Vague reports create back-and-forth that delays the next release." },
      { title: "QA and dev tools don't talk to each other", body: "Bugs are in one place, tasks are in another, and someone has to manually bridge the gap every time." },
      { title: "Staging environments are hard to test", body: "QA testers need to capture bugs across multiple environments — staging, preview deploys, localhost — and the context needs to be clear." },
    ],
    features: [
      { icon: "⚡", title: "One-click capture", body: "Full-page screenshot, URL, browser, OS, viewport, DOM selector — captured automatically in under 2 seconds." },
      { icon: "🌍", title: "Environment detection", body: "Annoture auto-detects whether a report came from Prod, Staging, or Dev so your team knows exactly what it affects." },
      { icon: "🔄", title: "GitHub & Jira integration", body: "Every bug captured creates an issue in your repository or project management tool automatically." },
      { icon: "🖥️", title: "Console log capture", body: "JavaScript errors at the moment of capture are recorded with every report — no DevTools required." },
    ],
    workflow: [
      { step: "01", title: "Tester captures the bug", body: "Click the broken element in Chrome. A full report is created in under 10 seconds — no context-switching required." },
      { step: "02", title: "Report lands on the board", body: "It appears in your Backlog column, with environment, severity, and all technical details pre-filled." },
      { step: "03", title: "Developer fixes and closes", body: "Move the card to Done. If GitHub or Jira is connected, the issue is already there — nothing to copy across." },
    ],
    quote: {
      text: "We ship three or four times a day. Annoture means our QA cycle doesn't become the bottleneck — the report is complete before the developer even opens it.",
      author: "Head of Engineering",
      role: "B2B SaaS Company",
    },
    ctaHeadline: "QA that keeps pace with your deploys.",
    ctaBody: "Free to start. Connects with GitHub and Jira in under a minute.",
  },
  {
    slug: "startups",
    name: "Startups",
    navDesc: "Move fast without breaking things",
    headline: "Ship fast. Catch bugs faster.",
    subheadline: "You don't have a dedicated QA team — and you don't need one. Annoture gives your whole team a way to capture and track bugs without slowing anyone down.",
    painPoints: [
      { title: "Everyone's testing but nothing's tracked", body: "Your team spots bugs during demos, user calls, and late-night sessions — but half of them never make it into a ticket." },
      { title: "Bug reports are just Slack messages", body: "A screenshot in Slack is not a bug report. Two weeks later no one remembers what it was or whether it got fixed." },
      { title: "No time for a QA process", body: "Setting up a formal QA workflow sounds like a project in itself. You need something that works from day one." },
    ],
    features: [
      { icon: "🚀", title: "Works in 60 seconds", body: "Install the extension, create a project, and start capturing. No configuration, no onboarding call required." },
      { icon: "👥", title: "Whole team can capture", body: "Founders, designers, engineers — anyone can report a bug. The technical context is captured automatically." },
      { icon: "📊", title: "Kanban board included", body: "Reports land directly on a shared board with status and priority. No need to set up a separate task tracker." },
      { icon: "💸", title: "Free plan that's actually useful", body: "Unlimited reports on one project, forever free. Upgrade only when you need multiple projects or team seats." },
    ],
    workflow: [
      { step: "01", title: "Anyone spots a bug", body: "Founder, designer, engineer — doesn't matter. They open the extension and click on the issue." },
      { step: "02", title: "Report is filed instantly", body: "Screenshot, URL, browser, and OS are captured automatically. They add a note and submit in under 10 seconds." },
      { step: "03", title: "Team sees it on the board", body: "It's in the Backlog, prioritised, and ready to assign. Nothing gets lost in Slack again." },
    ],
    quote: {
      text: "We were losing bugs in Slack threads. Annoture gave us a proper place to track everything and it took about five minutes to set up.",
      author: "Co-founder",
      role: "Early-stage SaaS Startup",
    },
    ctaHeadline: "Stop losing bugs in Slack.",
    ctaBody: "Free forever on one project. No credit card required.",
  },
  {
    slug: "freelancers",
    name: "Freelancers",
    navDesc: "Look professional, deliver faster",
    headline: "Look like a studio. Work like a pro.",
    subheadline: "Annoture gives freelancers a structured, professional way to collect and manage feedback from clients — without the overhead of an enterprise tool.",
    painPoints: [
      { title: "Client feedback arrives in chaotic form", body: "Emails, WhatsApp messages, annotated PDFs, phone calls. Every client has a different way of reporting issues and none of them are useful." },
      { title: "You fix the wrong thing", body: "Without a screenshot and a URL, you're guessing. You fix what you thought they meant, they meant something else, and you've wasted a day." },
      { title: "Revision cycles eat your margin", body: "Every unclear bug report turns into a long back-and-forth. The time you spend clarifying is time you're not billing for." },
    ],
    features: [
      { icon: "🎯", title: "Pinpoint feedback", body: "Clients click exactly what's broken. You get a screenshot with the element highlighted, not a description you have to decode." },
      { icon: "📁", title: "One board per project", body: "Keep each client project separate. See all reported issues in one place, prioritised and ready to work through." },
      { icon: "✅", title: "Visible progress", body: "Move reports through Backlog, In Progress, and Done. Your client can see exactly what's been addressed." },
      { icon: "🔒", title: "Professional presentation", body: "Share a structured project board instead of a trail of emails. It signals quality and builds client trust." },
    ],
    workflow: [
      { step: "01", title: "Set up a project for the client", body: "Create a project in Annoture and share the extension link. Takes two minutes at the start of any engagement." },
      { step: "02", title: "Client captures issues directly", body: "They click on what's broken and submit. You get a proper report with screenshot and URL — no interpretation required." },
      { step: "03", title: "Work through the board", body: "Mark items In Progress as you fix them, Done when complete. The client sees the progress without needing a call." },
    ],
    quote: {
      text: "My clients used to send me voice notes about bugs. Now they use Annoture and I actually know what they're talking about.",
      author: "Freelance Web Developer",
      role: "Independent Contractor",
    },
    ctaHeadline: "Make feedback the easy part.",
    ctaBody: "Free to get started. Works for one client or ten.",
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    navDesc: "Protect revenue from broken flows",
    headline: "A broken checkout costs you sales. Catch it first.",
    subheadline: "Every visual bug on your store is a conversion killer. Annoture lets your team capture, track, and fix storefront issues before customers hit them — across every browser and device.",
    painPoints: [
      { title: "Bugs on checkout lose you revenue", body: "A broken payment button or a layout issue on mobile can silently cost you thousands before anyone reports it." },
      { title: "Cross-browser issues are invisible until they aren't", body: "Your store looks perfect in Chrome. In Safari on iPhone it's broken. You only find out when a customer complains." },
      { title: "No one knows which bugs are fixed", body: "Issues get reported via email, handled by a developer, and then forgotten. There's no record of what was fixed or when." },
    ],
    features: [
      { icon: "💳", title: "Protect your conversion flow", body: "Capture and track bugs on your product pages, cart, and checkout so nothing broken reaches a paying customer." },
      { icon: "📱", title: "Test across browsers and devices", body: "Annotate bugs with full browser and OS metadata so your developer knows exactly which environment to debug." },
      { icon: "🎯", title: "Click to report", body: "Your team clicks on the broken element — an image that isn't loading, a button that doesn't respond — and submits in seconds." },
      { icon: "📈", title: "Track all fixes", body: "Every bug has a status. Move through Backlog to Done and maintain a full history of what was reported and resolved." },
    ],
    workflow: [
      { step: "01", title: "QA your store before launch", body: "Walk through your product pages, cart, and checkout with the extension active. Click on anything that looks wrong." },
      { step: "02", title: "Reports go straight to the board", body: "Each bug arrives with a screenshot, URL, browser, viewport, and the exact element — ready for a developer to action." },
      { step: "03", title: "Fix, verify, and close", body: "Your developer fixes the issue, the card moves to Done. Re-test and confirm before the next deploy." },
    ],
    quote: {
      text: "We had a broken add-to-cart button on Safari that we didn't catch for three days. Annoture would have caught it on the first QA pass.",
      author: "Head of E-commerce",
      role: "D2C Brand",
    },
    ctaHeadline: "Don't let bugs cost you customers.",
    ctaBody: "Start catching storefront issues today. Free plan included.",
  },
];

export function getAudience(slug: string): AudiencePage | undefined {
  return audiences.find((a) => a.slug === slug);
}
