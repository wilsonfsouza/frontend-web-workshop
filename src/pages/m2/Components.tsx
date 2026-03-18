import { ExampleCard } from "@/components/ExampleCard";
import { CodeBlock } from "@/components/CodeBlock";
import { InlineCode } from "@/components/InlineCode";
import { Table } from "@/components/Table";

interface BadgeProps {
  label: string;
  variant?: "default" | "success" | "warning";
}

function Badge({ label, variant = "default" }: BadgeProps) {
  const colors = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-emerald-100 text-emerald-800",
    warning: "bg-amber-100 text-amber-800",
  };

  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${colors[variant]}`}>
      {label}
    </span>
  );
}

interface CardProps {
  title: string;
  children: React.ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
      {children}
    </div>
  );
}

export function Components() {
  const employees = [
    { id: "1", name: "Wilson", role: "Engineer", active: true },
    { id: "2", name: "Alex", role: "Designer", active: false },
    { id: "3", name: "Sam", role: "Engineer", active: true },
  ];
  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Component Anatomy</h2>
        <p className="text-gray-500 mt-1">
          What a component looks like, how it receives data, and how to organize them.
        </p>
      </div>

      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-sm text-emerald-800 space-y-2">
        <p>
          A component is a function that returns JSX. It receives data through props and can wrap
          content using the children prop. Components are the building blocks of every React app.
        </p>
      </div>

      <ExampleCard
        title="What a Component Looks Like"
        description="A function that takes props and returns JSX."
      >
        <CodeBlock.Root>
          <CodeBlock.Content variant="light">{`interface BadgeProps {
  label: string;
  variant?: "default" | "success" | "warning";
}

function Badge({ label, variant = "default" }: BadgeProps) {
  return (
    <span className={colors[variant]}>
      {label}
    </span>
  );
}`}</CodeBlock.Content>
        </CodeBlock.Root>
        <div className="mt-3 flex gap-2 flex-wrap">
          <Badge label="Default" />
          <Badge label="Active" variant="success" />
          <Badge label="Pending" variant="warning" />
        </div>
      </ExampleCard>

      <ExampleCard
        title="Props — How Components Receive Data"
        description="Props are the inputs to a component. They flow down from parent to child."
      >
        <CodeBlock.Root>
          <CodeBlock.Content variant="light">{`// Parent passes data via props
<Badge label="Active" variant="success" />

// Child receives them as function parameters
function Badge({ label, variant }: BadgeProps) {
  // label = "Active", variant = "success"
}`}</CodeBlock.Content>
        </CodeBlock.Root>
      </ExampleCard>

      <ExampleCard
        title="Children — Wrapping Content"
        description="The children prop lets a component wrap any content passed between its tags."
      >
        <Card title="Example Card">
          <p className="text-sm text-gray-600">
            This paragraph is passed as <InlineCode>children</InlineCode> to the Card component.
          </p>
        </Card>
        <div className="mt-3">
          <CodeBlock.Root>
            <CodeBlock.Content variant="light">{`interface CardProps {
  title: string;
  children: React.ReactNode;  // accepts anything React can render
}

function Card({ title, children }: CardProps) {
  return (
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  );
}

// Usage — content between tags becomes children
<Card title="Example">
  <p>Any content here</p>
</Card>`}</CodeBlock.Content>
          </CodeBlock.Root>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Rendering Lists"
        description="Use .map() to render an array of components. Always provide a unique key."
      >
        <div className="space-y-2 mb-3">
          {employees.map((employee) => (
            <Card key={employee.id} title={employee.name}>
              <div className="flex items-center gap-2">
                <Badge label={employee.role} />
                <Badge
                  label={employee.active ? "Active" : "Inactive"}
                  variant={employee.active ? "success" : "warning"}
                />
              </div>
            </Card>
          ))}
        </div>
        <CodeBlock.Root>
          <CodeBlock.Content variant="light">{`const employees = [
  { id: "1", name: "Wilson", role: "Engineer", active: true },
  { id: "2", name: "Alex", role: "Designer", active: false },
  { id: "3", name: "Sam", role: "Engineer", active: true },
];

// key helps React track which items changed
{employees.map(employee => (
  <Card key={employee.id} title={employee.name}>
    <Badge label={employee.role} />
  </Card>
))}`}</CodeBlock.Content>
        </CodeBlock.Root>
      </ExampleCard>

      <ExampleCard
        title="Organizing Files"
        description="How structure differs between a plain React project and a Next.js project."
      >
        <div className="space-y-5">
          <div className="p-3 bg-gray-100 rounded text-xs text-gray-500">
            React doesn&apos;t enforce any file structure. It&apos;s all convention, so your team
            picks a pattern and sticks with it. Next.js adds opinions through the app/ directory,
            which gives you a natural place to co-locate components alongside routes.
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              React (no framework): Common Approaches
            </h4>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="text-xs font-medium text-gray-900 mb-1">
                  Group by type
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  Separate folders for components, hooks, and utilities. Simple and familiar. Works
                  well for smaller projects but can get noisy as the app grows.
                </p>
                <CodeBlock.Root>
                  <CodeBlock.Content variant="light">{`src/
  components/
    Button.tsx
    Modal.tsx
    Navbar.tsx
  hooks/
    useAuth.ts
    useDebounce.ts
  utils/
    formatDate.ts`}</CodeBlock.Content>
                </CodeBlock.Root>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="text-xs font-medium text-gray-900 mb-1">
                  Group by feature
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  Everything related to a feature lives together. Each folder is self-contained.
                  Shared components still live in a top-level components/ folder.
                </p>
                <CodeBlock.Root>
                  <CodeBlock.Content variant="light">{`src/
  features/
    auth/
      LoginForm.tsx
      useAuth.ts
      authUtils.ts
    dashboard/
      DashboardChart.tsx
      StatCard.tsx
      useDashboardData.ts
  components/
    Button.tsx
    Modal.tsx`}</CodeBlock.Content>
                </CodeBlock.Root>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Next.js: The Framework Adds Structure
            </h4>
            <p className="text-xs text-gray-500 mb-2">
              Next.js introduces the app/ directory as the router. Files like page.tsx, layout.tsx,
              and loading.tsx have special meaning. Components have two natural homes:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="text-xs font-medium text-gray-900 mb-1">
                  components/ folder (shared)
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  Reusable across multiple pages. If two or more unrelated pages need it, it belongs
                  here.
                </p>
                <CodeBlock.Root>
                  <CodeBlock.Content variant="light">{`components/
  Button.tsx
  Modal.tsx
  Navbar.tsx
  SearchInput.tsx`}</CodeBlock.Content>
                </CodeBlock.Root>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="text-xs font-medium text-gray-900 mb-1">
                  Co-located in app/ (route-specific)
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  Only matters for one route, so it lives right next to its page. No need for the
                  global folder.
                </p>
                <CodeBlock.Root>
                  <CodeBlock.Content variant="light">{`app/
  dashboard/
    page.tsx
    DashboardChart.tsx
    StatCard.tsx
  settings/
    page.tsx
    SettingsForm.tsx`}</CodeBlock.Content>
                </CodeBlock.Root>
              </div>
            </div>
            <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800">
              <span className="font-medium">When does a component &quot;graduate&quot;?</span> When
              a second, unrelated page needs it. That&apos;s the signal to move it from co-located
              to the shared components/ folder. Moving it later is straightforward.
            </div>
          </div>

          <Table.Root>
            <Table.Head>
              <Table.HeaderRow>
                <Table.Header>Question</Table.Header>
                <Table.Header>Where it goes</Table.Header>
              </Table.HeaderRow>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Used across many pages?</Table.Cell>
                <Table.Cell className="font-mono text-sm">components/</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Only used by one route or feature?</Table.Cell>
                <Table.Cell>Co-locate it nearby</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Started local, now needed elsewhere?</Table.Cell>
                <Table.Cell className="font-mono text-sm">Move to components/</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>React project (no framework)?</Table.Cell>
                <Table.Cell>Pick group-by-type or group-by-feature, be consistent</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Next.js project?</Table.Cell>
                <Table.Cell>Use app/ co-location + shared components/</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Has sub-components?</Table.Cell>
                <Table.Cell className="font-mono text-sm">Use a subfolder with index.ts</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </ExampleCard>
    </div>
  );
}
