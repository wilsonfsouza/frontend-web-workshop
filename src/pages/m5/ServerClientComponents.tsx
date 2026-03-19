import { ExampleCard } from "@/components/ExampleCard";
import { CodeBlock } from "@/components/CodeBlock";
import { InlineCode } from "@/components/InlineCode";
import { Table } from "@/components/Table";

export function ServerClientComponents() {
  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Server vs Client Components</h2>
        <p className="text-gray-500 mt-1">
          Every component is a Server Component by default. Understanding the boundary between
          server and client is the key to writing fast, lean Next.js apps.
        </p>
      </div>

      <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-indigo-800 space-y-2">
        <p>
          In Next.js 15+ with the App Router, every component runs on the server unless you
          explicitly opt in to the client with{" "}
          <InlineCode variant="accent">&quot;use client&quot;</InlineCode>. This is a fundamental
          shift from the Pages Router, where everything ran on the client.
        </p>
      </div>

      <ExampleCard
        title="Server Components (the default)"
        description="Run on the server at request time. The browser never sees their code, only the rendered HTML."
      >
        <div className="space-y-3">
          <CodeBlock.Root>
            <CodeBlock.Frame>
              <CodeBlock.Title>app/page.tsx (Server Component)</CodeBlock.Title>
              <CodeBlock.Content>{`// No directive needed — it's a Server Component by default

interface BoardPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function BoardPage({ searchParams }: BoardPageProps) {
  const { q } = await searchParams;
  const issues = await listIssues({ search: q });

  return (
    <div>
      <h1>Board</h1>
      <IssueList issues={issues} />
    </div>
  );
}`}</CodeBlock.Content>
            </CodeBlock.Frame>
          </CodeBlock.Root>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded text-emerald-800">
              ✅ Can be async and use await
            </div>
            <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded text-emerald-800">
              ✅ Direct database/API access
            </div>
            <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded text-emerald-800">
              ✅ Zero JavaScript shipped
            </div>
            <div className="p-2.5 bg-red-50 border border-red-200 rounded text-red-800">
              ❌ No hooks, no event handlers
            </div>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Client Components (opt-in)"
        description='Add "use client" at the top when you need hooks, event handlers, or browser APIs.'
      >
        <div className="space-y-3">
          <CodeBlock.Root>
            <CodeBlock.Frame>
              <CodeBlock.Title>search-input.tsx (Client Component)</CodeBlock.Title>
              <CodeBlock.Content>{`"use client";

import { useQueryState, parseAsString } from "nuqs";

export function SearchInput() {
  const [search, setSearch] = useQueryState(
    "q",
    parseAsString.withDefault("")
  );

  return (
    <input
      type="text"
      placeholder="Search issues..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}`}</CodeBlock.Content>
            </CodeBlock.Frame>
          </CodeBlock.Root>
          <div className="p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800 space-y-1">
            <p className="font-medium">Important distinction:</p>
            <p>
              A Client Component in Next.js is not the same as a purely client-rendered component in
              a traditional SPA. Client Components are still server-rendered to HTML on the initial
              request. The difference is that Next.js also ships the JavaScript bundle so the
              browser can hydrate it, attaching event listeners and enabling interactivity.
            </p>
          </div>
          <div className="p-2.5 bg-red-50 border border-red-200 rounded text-xs text-red-800">
            ❌ Client Components cannot be async. Use hooks (like TanStack Query) for data fetching.
          </div>
        </div>
      </ExampleCard>

      <ExampleCard title="The Rules at a Glance">
        <Table.Root size="xs">
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header />
              <Table.Header>Server Component</Table.Header>
              <Table.Header>Client Component</Table.Header>
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell className="font-medium text-gray-900">Directive</Table.Cell>
              <Table.Cell>None (default)</Table.Cell>
              <Table.Cell>&quot;use client&quot; at top</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-medium text-gray-900">async/await</Table.Cell>
              <Table.Cell>✅</Table.Cell>
              <Table.Cell>❌</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-medium text-gray-900">Hooks</Table.Cell>
              <Table.Cell>❌</Table.Cell>
              <Table.Cell>✅</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-medium text-gray-900">Event handlers</Table.Cell>
              <Table.Cell>❌</Table.Cell>
              <Table.Cell>✅</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-medium text-gray-900">Browser APIs</Table.Cell>
              <Table.Cell>❌</Table.Cell>
              <Table.Cell>✅</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-medium text-gray-900">JS shipped</Table.Cell>
              <Table.Cell>None</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
        <p className="mt-3 text-xs text-gray-500">
          Server Components are for reading and rendering data. Client Components are for
          interactivity.
        </p>
      </ExampleCard>

      <ExampleCard
        title="Isolation: Keep Client Components Small"
        description="When part of a component needs interactivity, extract only that piece."
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-red-200 rounded-lg p-3">
              <p className="text-xs font-semibold text-red-700 mb-2">
                ❌ Entire header is a Client Component
              </p>
              <CodeBlock.Root>
                <CodeBlock.Frame>
                  <CodeBlock.Content>{`"use client";
import { useState } from "react";

function Header() {
  const [theme, setTheme] = useState("light");

  return (
    <header>
      <h1>My Application</h1>
      <p>Welcome to the dashboard...</p>
      <nav>
        <a href="/projects">Projects</a>
        <a href="/settings">Settings</a>
      </nav>
      <button onClick={() => setTheme(
        theme === "light" ? "dark" : "light"
      )}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </header>
  );
}`}</CodeBlock.Content>
                </CodeBlock.Frame>
              </CodeBlock.Root>
            </div>
            <div className="border border-emerald-200 rounded-lg p-3">
              <p className="text-xs font-semibold text-emerald-700 mb-2">
                ✅ Only the toggle is a Client Component
              </p>
              <CodeBlock.Root>
                <CodeBlock.Frame>
                  <CodeBlock.Content>{`// ThemeToggle.tsx
"use client";
import { useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  return (
    <button onClick={() => setTheme(
      theme === "light" ? "dark" : "light"
    )}>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}

// Header.tsx (Server Component)
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header>
      <h1>My Application</h1>
      <p>Welcome to the dashboard...</p>
      <nav>...</nav>
      <ThemeToggle />
    </header>
  );
}`}</CodeBlock.Content>
                </CodeBlock.Frame>
              </CodeBlock.Root>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            The title, description, and nav links are static HTML. Only the theme toggle needs
            JavaScript. By isolating it, the rest of the header ships zero JS.
          </p>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Composition: Server Components Inside Client Components"
        description="You cannot import a Server Component directly inside a Client Component. Use the children pattern instead."
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-red-200 rounded-lg p-3">
              <p className="text-xs font-semibold text-red-700 mb-2">
                ❌ Importing Server Component in Client file
              </p>
              <CodeBlock.Root>
                <CodeBlock.Frame>
                  <CodeBlock.Content>{`"use client";
import ServerContent from "./ServerContent";

function ClientWrapper() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        Toggle
      </button>
      {open && <ServerContent />}
    </div>
  );
}`}</CodeBlock.Content>
                </CodeBlock.Frame>
              </CodeBlock.Root>
            </div>
            <div className="border border-emerald-200 rounded-lg p-3">
              <p className="text-xs font-semibold text-emerald-700 mb-2">
                ✅ Pass as children from a Server Component
              </p>
              <CodeBlock.Root>
                <CodeBlock.Frame>
                  <CodeBlock.Content>{`// ClientWrapper.tsx
"use client";

interface ClientWrapperProps {
  children: React.ReactNode;
}
function ClientWrapper({
  children
}: ClientWrapperProps) {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        Toggle
      </button>
      {open && children}
    </div>
  );
}

// Page.tsx (Server Component)
import ClientWrapper from "./ClientWrapper";
import ServerContent from "./ServerContent";

async function Page() {
  return (
    <ClientWrapper>
      <ServerContent />
    </ClientWrapper>
  );
}`}</CodeBlock.Content>
                </CodeBlock.Frame>
              </CodeBlock.Root>
            </div>
          </div>
          <div className="p-3 bg-gray-50 rounded text-xs text-gray-600 font-mono leading-relaxed">
            <p className="text-gray-900 font-sans font-medium text-xs mb-1">How it works:</p>
            Server Component (Page)
            <br />
            &nbsp;&nbsp;├── renders ServerContent → HTML
            <br />
            &nbsp;&nbsp;└── passes HTML as children to ClientWrapper
            <br />
            <br />
            ClientWrapper (Client)
            <br />
            &nbsp;&nbsp;└── receives children (already rendered HTML)
            <br />
            &nbsp;&nbsp;└── shows/hides them based on state
          </div>
        </div>
      </ExampleCard>

      <ExampleCard title="Decision Guide">
        <CodeBlock.Root>
          <CodeBlock.Frame>
            <CodeBlock.Content>{`Does this component need hooks, event handlers, or browser APIs?
  → No  → Server Component (default, do nothing)
  → Yes → Does the ENTIRE component need interactivity?
      → Yes → Client Component ("use client")
      → No  → Split it:
              ├─ Static parts → Server Component
              └─ Interactive parts → Client Component(s)

Need a Server Component inside a Client Component?
  → Pass it as children from a Server Component parent`}</CodeBlock.Content>
          </CodeBlock.Frame>
        </CodeBlock.Root>
      </ExampleCard>

      <ExampleCard title="Key Takeaways">
        <ul className="space-y-2 text-sm text-gray-600">
          <li>
            <span className="font-medium text-gray-900">Server Components are the default</span> in
            Next.js App Router. You don&apos;t need to do anything special.
          </li>
          <li>
            <span className="font-medium text-gray-900">Client Components are opt-in.</span> Add
            &quot;use client&quot; only when you need interactivity.
          </li>
          <li>
            <span className="font-medium text-gray-900">Isolate interactivity.</span> Extract the
            smallest possible Client Component to minimize JavaScript.
          </li>
          <li>
            <span className="font-medium text-gray-900">Use the children pattern.</span> Server
            Components can live inside Client Components when passed as children.
          </li>
          <li>
            <span className="font-medium text-gray-900">Think in boundaries.</span> Every &quot;use
            client&quot; directive creates a boundary. Everything imported below it becomes client
            code.
          </li>
        </ul>
      </ExampleCard>
    </div>
  );
}
