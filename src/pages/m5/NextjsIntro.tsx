import { ExampleCard } from "@/components/ExampleCard";
import { CodeBlock } from "@/components/CodeBlock";
import { InlineCode } from "@/components/InlineCode";
import { Table } from "@/components/Table";

export function NextjsIntro() {
  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Introduction to Next.js
        </h2>
        <p className="text-gray-500 mt-1">
          A React framework that gives you routing, server rendering, and a production-ready setup
          out of the box.
        </p>
      </div>

      <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-indigo-800 space-y-2">
        <p>
          If you know React, you already know most of Next.js. The framework adds structure and
          conventions on top of what React gives you. Instead of wiring together a bundler, a
          router, and a server yourself, Next.js handles all of that.
        </p>
      </div>

      <ExampleCard
        title="Why Next.js?"
        description="What it adds to plain React and why it matters."
      >
        <Table.Root>
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header>Feature</Table.Header>
              <Table.Header>Plain React</Table.Header>
              <Table.Header>Next.js</Table.Header>
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Routing</Table.Cell>
              <Table.Cell>Install and configure yourself</Table.Cell>
              <Table.Cell>File-based, built in</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Server rendering</Table.Cell>
              <Table.Cell>Manual setup</Table.Cell>
              <Table.Cell>Default behavior</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Code splitting</Table.Cell>
              <Table.Cell>Manual configuration</Table.Cell>
              <Table.Cell>Automatic</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Data fetching</Table.Cell>
              <Table.Cell>useEffect + loading states</Table.Cell>
              <Table.Cell>async components on the server</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>SEO / Metadata</Table.Cell>
              <Table.Cell>Manual head management</Table.Cell>
              <Table.Cell>Built-in Metadata API</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>API endpoints</Table.Cell>
              <Table.Cell>Separate server needed</Table.Cell>
              <Table.Cell>API routes in the same project</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </ExampleCard>

      <ExampleCard
        title="File-Based Routing (App Router)"
        description="You don't configure routes. You create files. The folder structure inside app/ becomes your URL structure."
      >
        <div className="space-y-4">
          <CodeBlock.Root>
            <CodeBlock.Frame>
              <CodeBlock.Title>Folder → URL mapping</CodeBlock.Title>
              <CodeBlock.Content>{`app/
├── page.tsx              →  /
├── about/
│   └── page.tsx          →  /about
├── (marketing)/
│   ├── blog/
│   │   ├── page.tsx      →  /blog
│   │   └── [slug]/
│   │       └── page.tsx  →  /blog/my-first-post
│   └── careers/
│       └── page.tsx      →  /careers
└── docs/
    └── [...slug]/
        └── page.tsx      →  /docs/any/number/of/segments`}</CodeBlock.Content>
            </CodeBlock.Frame>
          </CodeBlock.Root>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
            <div className="p-2.5 bg-gray-50 rounded">
              <span className="font-mono font-medium text-gray-900">[slug]</span>{" "}
              creates dynamic segments
            </div>
            <div className="p-2.5 bg-gray-50 rounded">
              <span className="font-mono font-medium text-gray-900">
                (group)
              </span>{" "}
              organizes files without affecting the URL
            </div>
            <div className="p-2.5 bg-gray-50 rounded">
              <span className="font-mono font-medium text-gray-900">
                [...slug]
              </span>{" "}
              catches any number of segments
            </div>
            <div className="p-2.5 bg-gray-50 rounded">
              No{" "}
              <span className="font-mono font-medium text-gray-900">
                page.tsx
              </span>{" "}
              = no route (folder is just for organization)
            </div>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard title="Dynamic Routes" description="Square brackets capture URL parameters.">
        <CodeBlock.Root>
          <CodeBlock.Frame>
            <CodeBlock.Title>app/blog/[slug]/page.tsx</CodeBlock.Title>
            <CodeBlock.Content>{`interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <article>
      <h1>Post: {slug}</h1>
    </article>
  );
}`}</CodeBlock.Content>
          </CodeBlock.Frame>
        </CodeBlock.Root>
        <p className="mt-2 text-xs text-gray-500">
          Visit <InlineCode>/blog/hello-world</InlineCode> and slug will be{" "}
          <InlineCode>&quot;hello-world&quot;</InlineCode>. In Next.js 15, params is a Promise, so
          you must await it.
        </p>
      </ExampleCard>

      <ExampleCard
        title="Special Files"
        description="Next.js reserves a handful of filenames for specific purposes."
      >
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-900 mb-2">
              layout.tsx: Shared UI that wraps pages
            </p>
            <p className="text-xs text-gray-500 mb-2">
              Persists across navigations. Doesn&apos;t re-render when you move between pages that
              share it. Layouts nest automatically.
            </p>
            <CodeBlock.Root>
              <CodeBlock.Frame>
                <CodeBlock.Title>app/layout.tsx</CodeBlock.Title>
                <CodeBlock.Content>{`export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
        <main>{children}</main>
        <footer>© 2026</footer>
      </body>
    </html>
  );
}`}</CodeBlock.Content>
              </CodeBlock.Frame>
            </CodeBlock.Root>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-900 mb-2">
              loading.tsx: Instant loading states
            </p>
            <p className="text-xs text-gray-500 mb-2">
              Drop it next to a page.tsx and Next.js shows it automatically while the page loads.
              Uses React Suspense under the hood.
            </p>
            <CodeBlock.Root>
              <CodeBlock.Frame>
                <CodeBlock.Title>app/blog/loading.tsx</CodeBlock.Title>
                <CodeBlock.Content>{`export default function BlogLoading() {
  return <p>Loading posts...</p>;
}`}</CodeBlock.Content>
              </CodeBlock.Frame>
            </CodeBlock.Root>
          </div>
          <Table.Root size="xs">
            <Table.Head>
              <Table.HeaderRow>
                <Table.Header>File</Table.Header>
                <Table.Header>Purpose</Table.Header>
                <Table.Header>When you need it</Table.Header>
              </Table.HeaderRow>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell className="font-mono">page.tsx</Table.Cell>
                <Table.Cell>Route content</Table.Cell>
                <Table.Cell>Every route</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-mono">layout.tsx</Table.Cell>
                <Table.Cell>Shared wrapping UI</Table.Cell>
                <Table.Cell>Almost every project</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-mono">loading.tsx</Table.Cell>
                <Table.Cell>Loading fallback (Suspense)</Table.Cell>
                <Table.Cell>When pages fetch data</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-mono">error.tsx</Table.Cell>
                <Table.Cell>Error boundary</Table.Cell>
                <Table.Cell>Error handling</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-mono">not-found.tsx</Table.Cell>
                <Table.Cell>Custom 404</Table.Cell>
                <Table.Cell>Branded 404 page</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-mono">route.tsx</Table.Cell>
                <Table.Cell>API endpoint (no UI)</Table.Cell>
                <Table.Cell>Building API routes</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Server vs Client Components"
        description="The one-sentence version: Server Components read data. Client Components handle interactivity."
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <p className="text-xs font-semibold text-gray-900 mb-2">
                Server Component (default)
              </p>
              <CodeBlock.Root>
                <CodeBlock.Frame>
                  <CodeBlock.Content>{`// No directive needed
export default async function UserList() {
  const users = await fetch("/api/users")
    .then((res) => res.json());

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}</CodeBlock.Content>
                </CodeBlock.Frame>
              </CodeBlock.Root>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900 mb-2">
                Client Component (opt in)
              </p>
              <CodeBlock.Root>
                <CodeBlock.Frame>
                  <CodeBlock.Content>{`"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}</CodeBlock.Content>
                </CodeBlock.Frame>
              </CodeBlock.Root>
            </div>
          </div>
          <div className="p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800">
            Keep Client Components small and isolated. Fetch data in Server Components, pass it as
            props to Client Components that handle interaction. This topic has its own dedicated
            workshop that goes deeper into the rules and patterns.
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Putting It Together"
        description="A minimal Next.js app using everything we've covered."
      >
        <div className="space-y-3">
          <CodeBlock.Root>
            <CodeBlock.Frame>
              <CodeBlock.Title>Project structure</CodeBlock.Title>
              <CodeBlock.Content>{`app/
├── layout.tsx          ← Root layout (nav + footer)
├── page.tsx            ← Home page (/)
├── loading.tsx         ← Loading state for home
└── projects/
    ├── layout.tsx      ← Projects layout (sidebar)
    ├── page.tsx        ← Projects list (/projects)
    └── [id]/
        └── page.tsx    ← Single project (/projects/123)`}</CodeBlock.Content>
            </CodeBlock.Frame>
          </CodeBlock.Root>
          <CodeBlock.Root>
            <CodeBlock.Frame>
              <CodeBlock.Title>app/projects/[id]/page.tsx</CodeBlock.Title>
              <CodeBlock.Content>{`interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = await fetch(\`https://api.example.com/projects/\${id}\`)
    .then((res) => res.json());

  return (
    <article>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </article>
  );
}`}</CodeBlock.Content>
            </CodeBlock.Frame>
          </CodeBlock.Root>
          <p className="text-xs text-gray-500">
            No router setup, no loading state management, no build configuration. The file structure
            is the architecture.
          </p>
        </div>
      </ExampleCard>

      <ExampleCard title="Key Takeaways">
        <ul className="space-y-2 text-sm text-gray-600">
          <li>
            <span className="font-medium text-gray-900">
              Next.js is React with structure
            </span>{" "}
            that adds routing, server rendering, and conventions on top.
          </li>
          <li>
            <span className="font-medium text-gray-900">Files are routes.</span>{" "}
            The app/ folder structure maps directly to URLs.
          </li>
          <li>
            <span className="font-medium text-gray-900">
              Special filenames are conventions.
            </span>{" "}
            page.tsx, layout.tsx, and loading.tsx are the ones you&apos;ll use daily.
          </li>
          <li>
            <span className="font-medium text-gray-900">
              Server Components are the default.
            </span>{" "}
            Add &quot;use client&quot; only when you need interactivity.
          </li>
          <li>
            <span className="font-medium text-gray-900">Start simple.</span> You
            can build a full app with just page.tsx and layout.tsx.
          </li>
        </ul>
      </ExampleCard>

      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <p>
          🛠️ The hands-on exercises for this module live in a separate Next.js project. Check the{" "}
          <span className="font-medium">projects/</span> folder for the Next.js starter.
        </p>
      </div>
    </div>
  );
}
