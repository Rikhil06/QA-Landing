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
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
