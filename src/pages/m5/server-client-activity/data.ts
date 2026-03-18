export interface QuizItem {
  id: number;
  code: string;
  answer: "server" | "client";
  explanation: string;
}

export const QUIZ_ITEMS: QuizItem[] = [
  {
    id: 1,
    code: `export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await fetch(\`/api/products/\${id}\`).then(result => result.json());
  return <h1>{product.name}</h1>;
}`,
    answer: "server",
    explanation:
      "It's async, uses await for data fetching, and has no hooks or event handlers. This is a Server Component.",
  },
  {
    id: 2,
    code: `import { useState } from "react";

export function LikeButton({ initialCount }) {
  const [likes, setLikes] = useState(initialCount);
  return (
    <button onClick={() => setLikes(prev => prev + 1)}>
      ❤️ {likes}
    </button>
  );
}`,
    answer: "client",
    explanation:
      'Uses useState and onClick. This needs "use client" to run in the browser for interactivity.',
  },
  {
    id: 3,
    code: `export default function Footer() {
  return (
    <footer>
      <p>© 2026 My Company</p>
      <nav>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
      </nav>
    </footer>
  );
}`,
    answer: "server",
    explanation:
      "Pure static HTML with no interactivity. No hooks, no events, no browser APIs. Stays on the server, ships zero JavaScript.",
  },
  {
    id: 4,
    code: `import { useEffect, useRef } from "react";

export function AutoScrollChat({ messages }) {
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      {messages.map(m => <p key={m.id}>{m.text}</p>)}
      <div ref={bottomRef} />
    </div>
  );
}`,
    answer: "client",
    explanation:
      'Uses useEffect, useRef, and scrollIntoView (a browser API). All of these require "use client" so the component runs in the browser.',
  },
  {
    id: 5,
    code: `import { db } from "@/lib/database";

export default async function UserList() {
  const users = await db.user.findMany({ take: 10 });

  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>{u.name} — {u.email}</li>
      ))}
    </ul>
  );
}`,
    answer: "server",
    explanation:
      "Directly queries a database. This can only happen on the server. No hooks, no events, async/await for data access.",
  },
  {
    id: 6,
    code: `export default function BlogPost({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <time>{post.date}</time>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}`,
    answer: "server",
    explanation:
      "Renders props as static HTML. No interactivity needed. dangerouslySetInnerHTML doesn't require client-side JavaScript.",
  },
];

export interface ComponentPart {
  id: string;
  label: string;
  code: string;
  needsClient: boolean;
  reason: string;
}

export const HEADER_PARTS: ComponentPart[] = [
  {
    id: "logo",
    label: "Logo & App Name",
    code: `<div className="flex items-center gap-2">
  <img src="/logo.svg" alt="App logo" />
  <span className="font-bold">My App</span>
</div>`,
    needsClient: false,
    reason: "Static markup. No interactivity needed.",
  },
  {
    id: "nav",
    label: "Navigation Links",
    code: `<nav>
  <a href="/dashboard">Dashboard</a>
  <a href="/projects">Projects</a>
  <a href="/settings">Settings</a>
</nav>`,
    needsClient: false,
    reason: "Plain anchor tags. Server-rendered HTML is sufficient.",
  },
  {
    id: "search",
    label: "Search Input",
    code: `const [query, setQuery] = useState("");
<input
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder="Search..."
/>`,
    needsClient: true,
    reason: "Uses useState and onChange. Needs to respond to user typing in real time.",
  },
  {
    id: "notifications",
    label: "Notification Bell",
    code: `const [open, setOpen] = useState(false);
<button onClick={() => setOpen(!open)}>
  🔔 {unreadCount}
</button>
{open && <NotificationDropdown />}`,
    needsClient: true,
    reason:
      "Uses useState and onClick to toggle a dropdown. Interactive behavior requires client-side JavaScript.",
  },
  {
    id: "breadcrumb",
    label: "Breadcrumb Trail",
    code: `<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/projects">Projects</a></li>
    <li aria-current="page">My Project</li>
  </ol>
</nav>`,
    needsClient: false,
    reason: "Static navigation based on the current route. No interactivity.",
  },
  {
    id: "theme",
    label: "Theme Toggle",
    code: `const [theme, setTheme] = useState("light");
<button onClick={() => setTheme(
  theme === "light" ? "dark" : "light"
)}>
  {theme === "light" ? "🌙" : "☀️"}
</button>`,
    needsClient: true,
    reason: "Uses useState and onClick to switch themes. Requires browser-side state.",
  },
];
