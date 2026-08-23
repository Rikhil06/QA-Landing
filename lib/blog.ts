export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "why-bug-reports-slow-down-development",
    title: "Why Your Bug Reports Are Slowing Down Your Development Team (And How to Fix It)",
    excerpt:
      "Most QA teams are unknowingly wasting hours every week to incomplete reports and back-and-forth clarification. Here's what's missing and how to fix it.",
    category: "QA Best Practices",
    date: "9 July 2026",
    readTime: "6 min read",
    author: "Annoture Team",
    content: [
      {
        type: "p",
        text: "Every QA team has felt it — you file a detailed report, the developer looks at it, and they come back with questions. \"Which browser were you on?\" \"Can you send me the URL?\" \"What exactly did you click?\" Twenty minutes later, you're no clearer on a fix than when you started.",
      },
      {
        type: "p",
        text: "The problem isn't that developers are difficult. It's that most bug reports are missing the exact information they need to act without asking.",
      },
      {
        type: "h2",
        text: "The real cost of a bad bug report",
      },
      {
        type: "p",
        text: "When a developer receives an incomplete bug report, here's what actually happens:",
      },
      {
        type: "ol",
        items: [
          "They read the report and realise they don't have enough to reproduce it",
          "They message the QA tester for more information",
          "The tester has to context-switch back to what they were testing earlier",
          "There's back-and-forth — sometimes across days, if time zones are involved",
          "The developer finally has enough information to reproduce the issue",
          "By then, they've broken their focus at least twice",
        ],
      },
      {
        type: "p",
        text: "Multiply this across a team of five developers handling ten bugs a week each, and you have a significant chunk of your sprint capacity consumed by information gaps — not engineering work.",
      },
      {
        type: "h2",
        text: "The 7 things every bug report needs",
      },
      {
        type: "p",
        text: "A developer-ready bug report should answer seven questions before anyone asks them:",
      },
      {
        type: "ul",
        items: [
          "What did you expect to happen? — The intended behaviour, so there is no ambiguity",
          "What actually happened? — The exact, observed behaviour",
          "Steps to reproduce — Numbered steps that lead reliably to the bug",
          "URL — The exact page where the issue occurred",
          "Browser and version — Chrome 124? Safari 17.4? It matters more than you think",
          "Operating system — macOS, Windows, iOS all render differently",
          "Screenshot or recording — Annotated if possible, pointing to the exact element",
        ],
      },
      {
        type: "p",
        text: "Most bug reports include three or four of these. The rest get chased down in Slack.",
      },
      {
        type: "h2",
        text: "Why annotation matters more than you think",
      },
      {
        type: "p",
        text: "A screenshot of a broken UI is helpful. A screenshot with a marker on the exact broken element is dramatically more helpful — it eliminates the \"wait, which part is wrong?\" step entirely.",
      },
      {
        type: "p",
        text: "But annotation is friction. Most testers skip it because taking a screenshot, opening an editor, drawing an arrow, saving, and attaching takes 2–3 minutes. They're in a testing flow and don't want to break it. It feels disproportionate for a \"small\" bug.",
      },
      {
        type: "quote",
        text: "The result? Developers spend time hunting for the exact issue that the tester had right in front of them — and then had to leave behind.",
      },
      {
        type: "h2",
        text: "The environment problem",
      },
      {
        type: "p",
        text: "Browser differences cause more bugs than most teams realise. A layout that's perfect in Chrome can collapse in Safari. An input that works on desktop can be completely unusable at 360px width on mobile. Without environment metadata automatically captured, your bug report is missing critical context.",
      },
      {
        type: "p",
        text: "\"It's broken\" means something completely different when you know it only breaks in Safari 17 on iOS at 390px viewport width. That single piece of information can save a developer hours of cross-browser debugging.",
      },
      {
        type: "h2",
        text: "DOM element capture: the underrated detail",
      },
      {
        type: "p",
        text: "One of the most overlooked pieces of context is the exact DOM element involved in the bug. If a button doesn't respond to clicks, the developer needs to know which button — in which component, at what depth in the DOM tree.",
      },
      {
        type: "p",
        text: "Most bug reports don't include this. Not because testers don't know it's useful, but because capturing it requires opening DevTools, finding the element, copying the selector — a 3-minute interruption in the middle of a testing session.",
      },
      {
        type: "h2",
        text: "The mental cost of context-switching",
      },
      {
        type: "p",
        text: "Here's the real problem with incomplete bug reports: they don't just cost time, they cost focus. Research on developer productivity consistently shows that deep work takes roughly 23 minutes to re-enter after an interruption. When a developer receives an incomplete report and has to chase information, they're not \"just checking Slack\" — they're triggering a full context switch.",
      },
      {
        type: "callout",
        text: "If your team is spending more than 30 seconds per bug chasing information that the tester had at the time of discovery, that's a process problem worth solving.",
      },
      {
        type: "h2",
        text: "A better workflow",
      },
      {
        type: "p",
        text: "The fix isn't asking testers to write longer, more detailed reports. That's just more friction. The fix is making the complete information automatic.",
      },
      {
        type: "p",
        text: "The best QA workflows capture all seven required fields with zero extra effort from the tester. That means the screenshot is taken at the moment of capture, the URL and browser and OS and viewport are recorded automatically, the DOM element is detected, and the report lands directly on the team's task board — already categorised and ready to triage.",
      },
      {
        type: "p",
        text: "When that happens, the developer opens the report and has everything. No Slack messages. No context switch. No \"can you send me a screenshot?\" Just the information they need to go fix the bug.",
      },
      {
        type: "h2",
        text: "Wrapping up",
      },
      {
        type: "p",
        text: "The gap between \"bug spotted\" and \"bug fixed\" is mostly information. Not technical complexity, not developer capacity — missing context that should have been in the original report but wasn't because capturing it was too much effort.",
      },
      {
        type: "p",
        text: "When you remove the friction from capturing that context — when the right information is automatic — bug reports stop being back-and-forth threads and start being actionable work items. That's the difference between a QA workflow that slows a team down and one that makes it faster.",
      },
    ],
  },
  {
    slug: "how-to-connect-annoture-with-github-and-jira",
    title: "How to Connect Annoture with GitHub and Jira (And Why Your Team Will Thank You)",
    excerpt:
      "Stop copying bug reports into GitHub Issues or Jira tickets by hand. Here's how Annoture's integrations eliminate that step entirely — and what that actually means for your team's speed.",
    category: "Product",
    date: "19 July 2026",
    readTime: "5 min read",
    author: "Annoture Team",
    content: [
      {
        type: "p",
        text: "There's a step that happens after almost every bug is captured that nobody talks about: someone has to copy it somewhere else.",
      },
      {
        type: "p",
        text: "The tester captures the bug in Annoture. Then they open GitHub or Jira, create a new issue, paste in the URL, write a description from memory, attach the screenshot manually, pick a priority, assign it — and only then does the developer see it. The bug has been captured twice.",
      },
      {
        type: "p",
        text: "Annoture's GitHub and Jira integrations remove that second step entirely. Here's how they work and what changes when you turn them on.",
      },
      {
        type: "h2",
        text: "The GitHub integration",
      },
      {
        type: "p",
        text: "Once you connect your GitHub account in Site Settings and select a repository, every bug captured through the Annoture Chrome extension automatically creates a GitHub Issue. Not a stub — a fully formed issue with:",
      },
      {
        type: "ul",
        items: [
          "The bug title and description from the capture",
          "The full-page screenshot embedded directly in the issue body",
          "Page URL, browser, OS, screen size, and viewport",
          "The exact CSS selector of the DOM element that was clicked",
          "Priority set automatically from the capture",
        ],
      },
      {
        type: "p",
        text: "The developer opens GitHub and everything is already there. No message from the tester saying \"I filed a bug, can you take a look?\" — the issue is in the repository the moment capture happens.",
      },
      {
        type: "h3",
        text: "Screenshots that actually persist",
      },
      {
        type: "p",
        text: "One subtle problem with embedding screenshots in GitHub issues is URL expiry. Annoture uses Cloudflare R2 for storage, and signed URLs have a limited lifetime. We handle this by refreshing the signed URL at the moment of issue creation and embedding it directly in the issue body. GitHub's image proxy (Camo) caches the image on first load, so it persists even after the original URL expires. The screenshot in the issue stays visible indefinitely.",
      },
      {
        type: "h2",
        text: "The Jira integration",
      },
      {
        type: "p",
        text: "Jira works the same way — connect your Atlassian account, pick a cloud site and project, and Annoture creates a Bug issue in that project for every capture. The difference is the format.",
      },
      {
        type: "p",
        text: "Jira uses Atlassian Document Format (ADF) for issue descriptions, not Markdown. We build the description natively in ADF so it renders properly inside Jira — the screenshot appears as an inline image, and the browser/OS/viewport metadata is formatted as a structured table rather than a wall of text.",
      },
      {
        type: "quote",
        text: "The result looks like a human wrote a thorough Jira ticket, not like a tool pasted plain text into a description field.",
      },
      {
        type: "h3",
        text: "Token refresh handled automatically",
      },
      {
        type: "p",
        text: "Atlassian access tokens expire after approximately one hour. Most integrations break quietly when this happens — the next capture just silently fails to create a Jira issue. Annoture stores the refresh token securely and refreshes the access token automatically before each issue creation. Your integration keeps working overnight, across weekends, and during long testing sessions without any manual re-authorisation.",
      },
      {
        type: "h2",
        text: "Why both, not just one",
      },
      {
        type: "p",
        text: "The two integrations aren't alternatives — teams often use them together. Developers might live in GitHub while PMs and project managers track work in Jira. With both integrations active, a single capture creates an issue in both places simultaneously. Neither team has to wait for the other to manually forward information.",
      },
      {
        type: "callout",
        text: "You can map different Annoture sites to different repositories and projects. A client-facing site might go to one GitHub repo and one Jira project, while an internal tool goes to a completely different set.",
      },
      {
        type: "h2",
        text: "What stays on the Annoture board",
      },
      {
        type: "p",
        text: "Enabling an integration doesn't remove reports from Annoture. Everything still appears on your Kanban board — the GitHub Issue number and Jira ticket key are shown as badges on each report card. Clicking either badge opens the corresponding issue directly. The Annoture board becomes the central view that links out to wherever the work is actually being done.",
      },
      {
        type: "h2",
        text: "Setting it up",
      },
      {
        type: "p",
        text: "Both integrations are in Site Settings — accessible from the Settings icon next to your site's Kanban board. The GitHub setup takes about 30 seconds: authorise, pick a repo, save. Jira takes slightly longer because you pick a cloud site first, then a project. After that, the integration runs silently in the background. There's nothing to configure per-report.",
      },
      {
        type: "p",
        text: "GitHub integration is available on all plans, including free. Jira integration requires an active plan.",
      },
      {
        type: "h2",
        text: "The integrations coming next",
      },
      {
        type: "p",
        text: "GitHub and Jira are live now. Slack, Linear, and Figma integrations are next — Slack for instant channel notifications when a bug is captured, Linear for teams that use it as their primary issue tracker, and Figma for linking bug reports directly to the design frames they affect. If there's an integration your team needs that isn't on the roadmap, the fastest way to get it prioritised is to request it.",
      },
      {
        type: "p",
        text: "The pattern across all of them is the same: capture once in Annoture, and the right people see it in the tool they already use — without anyone copying anything.",
      },
    ],
  },
  {
    slug: "how-to-prioritize-bugs-a-practical-framework-for-qa-teams",
    title: "How to Prioritize Bugs: A Practical Framework for QA Teams",
    excerpt:
      "Not every bug deserves to block a release. Here's how high-performing QA teams decide what to fix first — and how to get developers to agree.",
    category: "QA Best Practices",
    date: "23 August 2026",
    readTime: "7 min read",
    author: "Annoture Team",
    content: [
      {
        type: "p",
        text: "At some point in every sprint, you hit a moment where there are more bugs than time. Something has to wait. The question is: what?",
      },
      {
        type: "p",
        text: "Most teams answer this question badly — either by gut feel, by whoever shouts loudest, or by the order bugs happened to arrive. The result is a backlog where a cosmetic alignment issue blocks a release while a data loss bug sits unassigned for two weeks.",
      },
      {
        type: "p",
        text: "Good bug prioritization isn't complicated, but it does require a shared framework that everyone — QA, developers, and product — agrees on before the pressure hits.",
      },
      {
        type: "h2",
        text: "Severity vs. priority: the distinction that matters",
      },
      {
        type: "p",
        text: "The first thing to get straight is the difference between severity and priority. They're not the same thing, and confusing them is the root cause of most prioritization arguments.",
      },
      {
        type: "ul",
        items: [
          "Severity describes how bad the bug is technically — does it crash the app, corrupt data, or just misalign a label?",
          "Priority describes how urgently it needs to be fixed — relative to everything else on the board right now.",
        ],
      },
      {
        type: "p",
        text: "A bug can be high severity but low priority. A crash in a feature used by 0.1% of users on a deprecated browser matters technically but may not need to block your next release. Conversely, a low-severity bug — say, a misleading label on your checkout button — might be top priority because it's directly hurting conversion.",
      },
      {
        type: "quote",
        text: "Severity is a property of the bug itself. Priority is a property of the bug relative to your current context.",
      },
      {
        type: "h2",
        text: "A four-level severity scale that actually works",
      },
      {
        type: "p",
        text: "Most teams use four severity levels. The key is having specific, agreed definitions so that testers apply them consistently — not based on how they're feeling that day.",
      },
      {
        type: "ol",
        items: [
          "Critical — The application crashes, data is lost or corrupted, or a core user flow is completely broken. No workaround exists. This stops a release.",
          "High — Major functionality is broken, but the app still runs. A workaround may exist but is not acceptable for production. Needs fixing before release in most cases.",
          "Medium — A feature doesn't work as expected, but the impact is limited in scope or a reasonable workaround exists. Targeted for the current or next sprint.",
          "Low — Cosmetic issues, minor copy errors, small UI inconsistencies. Tracked but not release-blocking. Fixed when bandwidth allows.",
        ],
      },
      {
        type: "p",
        text: "Write these definitions down somewhere your whole team can see them. The moment they exist only in someone's head, they stop being a shared framework and become a source of disagreement.",
      },
      {
        type: "h2",
        text: "The four factors that determine priority",
      },
      {
        type: "p",
        text: "Once severity is established, priority is a judgment call — but a structured one. Four factors should inform it:",
      },
      {
        type: "h3",
        text: "1. User impact",
      },
      {
        type: "p",
        text: "How many users hit this bug, and how often? A bug on your login page affects every user on every visit. A bug in an advanced settings panel affects a small percentage of power users occasionally. The wider and more frequent the impact, the higher the priority.",
      },
      {
        type: "h3",
        text: "2. Business impact",
      },
      {
        type: "p",
        text: "Does the bug affect revenue, legal compliance, or reputation? A broken payment flow is a priority-one issue regardless of its technical severity. A broken admin export that only three people use internally is not. Map bugs to the business outcomes they affect.",
      },
      {
        type: "h3",
        text: "3. Reproducibility",
      },
      {
        type: "p",
        text: "A bug that happens 100% of the time is more urgent than one that appears intermittently. Intermittent bugs are also harder to fix, which affects scheduling decisions even when priority is high.",
      },
      {
        type: "h3",
        text: "4. Fix complexity",
      },
      {
        type: "p",
        text: "A medium-priority bug that takes 15 minutes to fix should often jump the queue ahead of a high-priority bug that requires a multi-day refactor. Getting easy wins resolved keeps the backlog moving and maintains momentum.",
      },
      {
        type: "callout",
        text: "Tip: when you capture a bug, set the priority immediately — while you're still looking at it. Context fades fast. A bug filed with 'not assigned' priority that sits for three days will cost more time to re-evaluate than it would have taken to set it right.",
      },
      {
        type: "h2",
        text: "When to escalate immediately",
      },
      {
        type: "p",
        text: "Not everything goes through the normal triage process. Certain bugs should trigger an immediate escalation regardless of where you are in the sprint:",
      },
      {
        type: "ul",
        items: [
          "Data loss or corruption of any kind — user data, financial records, or any persisted state",
          "Security vulnerabilities — exposed credentials, broken authentication, unprotected endpoints",
          "Crashes on the main user path — login, signup, checkout, core product flow",
          "Bugs that have already reached production and are affecting live users",
        ],
      },
      {
        type: "p",
        text: "Agree on an escalation path before you need it. Who gets notified? On which channel? Within what timeframe? Having that written down means a critical bug at 5pm on a Friday doesn't turn into a four-hour conference call to figure out who's responsible.",
      },
      {
        type: "h2",
        text: "Getting developers to agree with your prioritization",
      },
      {
        type: "p",
        text: "The biggest failure mode in bug prioritization isn't bad judgment — it's a QA team that sets priorities in isolation and then fights with developers about them. The fix is collaborative triage.",
      },
      {
        type: "p",
        text: "A short triage session — 15 minutes at the start of each sprint, or a standing async process using your task board — where QA and at least one developer review new bugs together almost always produces better outcomes than either side deciding alone. QA knows what's broken. Developers know what's expensive to fix. Neither side has the full picture on their own.",
      },
      {
        type: "p",
        text: "When both sides have agreed on a priority, it also stops the common pattern of developers quietly deprioritising bugs they find inconvenient to fix. The shared decision creates shared accountability.",
      },
      {
        type: "h2",
        text: "What a good bug report does for prioritization",
      },
      {
        type: "p",
        text: "One underappreciated factor in prioritization quality is report quality. It's very hard to assign the right priority to a bug that says \"button doesn't work\" with no URL, no environment info, and no screenshot. You can't assess user impact, reproducibility, or fix complexity without that context.",
      },
      {
        type: "p",
        text: "When bug reports arrive with the full context automatically captured — URL, browser, OS, viewport, screenshot, DOM element — prioritization becomes a five-second decision rather than a five-minute investigation. The information needed to assess severity and priority is already in the report.",
      },
      {
        type: "h2",
        text: "The test: would a new team member agree?",
      },
      {
        type: "p",
        text: "A useful sanity check for your prioritization framework: if a new QA engineer joined your team tomorrow and read your definitions and your current backlog, would they agree with how everything is labelled? If the answer is yes, your framework is working. If the answer is \"they'd need a lot of context to understand why things are prioritized this way,\" your framework is living in people's heads rather than in a shared system.",
      },
      {
        type: "p",
        text: "The goal isn't perfect prioritization — that doesn't exist. The goal is a process that's consistent, transparent, and fast enough that bugs get to the right developer at the right time without anyone spending half their day arguing about what matters.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
