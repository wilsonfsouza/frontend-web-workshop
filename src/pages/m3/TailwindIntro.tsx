import { ExampleCard } from "@/components/ExampleCard";
import { CodeBlock } from "@/components/CodeBlock";
import { InlineCode } from "@/components/InlineCode";
import { Table } from "@/components/Table";

export function TailwindIntro() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Introduction to Tailwind CSS
        </h2>
        <p className="text-gray-500 mt-1">
          What utility-first CSS means and how to read Tailwind classes in React code.
        </p>
      </div>

      <div className="p-4 bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded-lg text-sm text-indigo-800 dark:text-indigo-200 space-y-2">
        <p>
          Tailwind CSS replaces custom class names with small, single-purpose utility classes.
          Instead of writing <InlineCode variant="accent">.card</InlineCode> and defining it in a
          CSS file, you describe the styles directly:{" "}
          <InlineCode variant="accent">p-6 rounded-lg border bg-white</InlineCode>.
        </p>
        <p>You style things where you build them. No naming, no separate files, no dead CSS.</p>
      </div>

      <ExampleCard
        title="Traditional CSS vs Tailwind"
        description="Same result, different approach."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-medium text-gray-500 mb-2">Traditional CSS</p>
            <CodeBlock.Root>
              <CodeBlock.Frame>
                <CodeBlock.Title>styles.css</CodeBlock.Title>
                <CodeBlock.Content>{`.card {
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  background: white;
}`}</CodeBlock.Content>
              </CodeBlock.Frame>
            </CodeBlock.Root>
            <div className="mt-2">
              <CodeBlock.Root>
                <CodeBlock.Frame>
                  <CodeBlock.Title>component.tsx</CodeBlock.Title>
                  <CodeBlock.Content>{`<div className="card">...</div>`}</CodeBlock.Content>
                </CodeBlock.Frame>
              </CodeBlock.Root>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-2">Tailwind CSS</p>
            <CodeBlock.Root>
              <CodeBlock.Frame>
                <CodeBlock.Title>component.tsx</CodeBlock.Title>
                <CodeBlock.Content>{`<div className="p-6 rounded-lg border
  border-gray-200 bg-white">
  ...
</div>`}</CodeBlock.Content>
              </CodeBlock.Frame>
            </CodeBlock.Root>
            <p className="text-xs text-gray-500 mt-2">No CSS file needed.</p>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="The Naming Pattern"
        description="Most classes follow {property}-{value}. Learn the abbreviations and you can read anything."
      >
        <Table.Root>
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header>Class</Table.Header>
              <Table.Header>CSS</Table.Header>
              <Table.Header>What it does</Table.Header>
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body className="font-mono">
            <Table.Row>
              <Table.Cell>p-4</Table.Cell>
              <Table.Cell>padding: 1rem</Table.Cell>
              <Table.Cell className="font-sans">Padding on all sides (16px)</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>px-6</Table.Cell>
              <Table.Cell>padding-inline: 1.5rem</Table.Cell>
              <Table.Cell className="font-sans">Horizontal padding (24px)</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>mt-2</Table.Cell>
              <Table.Cell>margin-top: 0.5rem</Table.Cell>
              <Table.Cell className="font-sans">Top margin (8px)</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>text-sm</Table.Cell>
              <Table.Cell>font-size: 0.875rem</Table.Cell>
              <Table.Cell className="font-sans">Small text (14px)</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>font-semibold</Table.Cell>
              <Table.Cell>font-weight: 600</Table.Cell>
              <Table.Cell className="font-sans">Semibold weight</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>rounded-lg</Table.Cell>
              <Table.Cell>border-radius: 0.5rem</Table.Cell>
              <Table.Cell className="font-sans">Large rounded corners</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>bg-white</Table.Cell>
              <Table.Cell>background: white</Table.Cell>
              <Table.Cell className="font-sans">White background</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>text-gray-500</Table.Cell>
              <Table.Cell>color: gray-500</Table.Cell>
              <Table.Cell className="font-sans">Medium gray text</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </ExampleCard>

      <ExampleCard
        title="The Spacing Scale"
        description="Spacing is based on multiples of 0.25rem (4px). The same scale works for padding, margin, gap, and sizing."
      >
        <div className="space-y-2">
          {[1, 2, 3, 4, 6, 8, 12].map((n) => (
            <div key={n} className="flex items-center gap-3">
              <code className="text-xs font-mono text-gray-500 w-8 text-right">{n}</code>
              <div className="bg-indigo-500 rounded h-3" style={{ width: `${n * 16}px` }} />
              <span className="text-xs text-gray-500">
                {n * 4}px ({n * 0.25}rem)
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3">
          p-4 = 16px, m-8 = 32px, gap-2 = 8px — same scale everywhere.
        </p>
      </ExampleCard>

      <ExampleCard
        title="Reading Tailwind in React"
        description="This component from this workshop app. Can you read what each class does?"
      >
        <CodeBlock.Root>
          <CodeBlock.Frame>
            <CodeBlock.Title>ExampleCard.tsx</CodeBlock.Title>
            <CodeBlock.Content>{`<section className="rounded-lg border border-gray-200
  dark:border-gray-700 p-6 space-y-4">
  <div>
    <h3 className="text-lg font-semibold
      text-gray-900 dark:text-gray-100">
      {title}
    </h3>
    {description && (
      <p className="text-sm text-gray-500 mt-1">
        {description}
      </p>
    )}
  </div>
  <div>{children}</div>
</section>`}</CodeBlock.Content>
          </CodeBlock.Frame>
        </CodeBlock.Root>
        <details className="text-sm text-gray-600 dark:text-gray-400 mt-3">
          <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
            Reading it out loud
          </summary>
          <ul className="mt-2 pl-4 space-y-1 list-disc list-inside text-xs">
            <li>
              section: rounded corners, 1px gray border (darker in dark mode), 24px padding, 16px
              vertical spacing between children
            </li>
            <li>h3: 18px text, semibold, near-black (light gray in dark mode)</li>
            <li>p: 14px text, medium gray, 4px top margin</li>
          </ul>
        </details>
      </ExampleCard>

      <ExampleCard
        title="Layout with Flexbox"
        description="The classes you'll use most: flex, items-center, justify-between, gap."
      >
        <div className="space-y-4">
          <div>
            <p className="text-xs font-medium text-gray-500 mb-2">flex items-center gap-4</p>
            <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-900 rounded">
              <div className="w-10 h-10 rounded-full bg-indigo-500" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Wilson</p>
                <p className="text-xs text-gray-500">Engineer</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-2">
              flex items-center justify-between
            </p>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded">
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">Logo</span>
              <span className="text-sm text-gray-500">Navigation →</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-2">flex flex-col gap-2</p>
            <div className="flex flex-col gap-2 p-3 bg-gray-50 dark:bg-gray-900 rounded">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded px-3 flex items-center text-xs text-gray-500">
                Input 1
              </div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded px-3 flex items-center text-xs text-gray-500">
                Input 2
              </div>
              <div className="h-8 bg-indigo-600 rounded px-3 flex items-center text-xs text-white">
                Submit
              </div>
            </div>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Layout with Grid"
        description="CSS Grid is for two-dimensional layouts. Define columns and rows, and items fill the grid."
      >
        <div className="space-y-4">
          <div>
            <p className="text-xs font-medium text-gray-500 mb-2">grid grid-cols-3 gap-3</p>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div
                  key={n}
                  className="p-3 bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded text-center text-sm font-medium text-indigo-700 dark:text-indigo-300"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 mb-2">
              grid grid-cols-4 gap-3 (item 1 spans 2 columns, item 4 spans 2 rows)
            </p>
            <div className="grid grid-cols-4 gap-3">
              <div className="col-span-2 p-3 bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded text-center text-sm font-medium text-emerald-700 dark:text-emerald-300">
                col-span-2
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded text-center text-sm text-gray-600 dark:text-gray-400">
                3
              </div>
              <div className="row-span-2 p-3 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded text-center text-sm font-medium text-amber-700 dark:text-amber-300 flex items-center justify-center">
                row-span-2
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded text-center text-sm text-gray-600 dark:text-gray-400">
                5
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded text-center text-sm text-gray-600 dark:text-gray-400">
                6
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded text-center text-sm text-gray-600 dark:text-gray-400">
                7
              </div>
            </div>
          </div>
          <CodeBlock.Root>
            <CodeBlock.Frame>
              <CodeBlock.Content>{`{/* Equal columns */}
<div className="grid grid-cols-3 gap-3">
  <div>1</div> <div>2</div> <div>3</div>
</div>

{/* Spanning columns and rows */}
<div className="grid grid-cols-4 gap-3">
  <div className="col-span-2">Wide</div>
  <div>3</div>
  <div className="row-span-2">Tall</div>
  <div>5</div> <div>6</div> <div>7</div>
</div>`}</CodeBlock.Content>
            </CodeBlock.Frame>
          </CodeBlock.Root>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Flex vs Grid: When to Use Which"
        description="Both are layout tools, but they solve different problems."
      >
        <div className="space-y-4">
          <Table.Root>
            <Table.Head>
              <Table.HeaderRow>
                <Table.Header />
                <Table.Header>Flexbox</Table.Header>
                <Table.Header>Grid</Table.Header>
              </Table.HeaderRow>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell className="font-medium text-gray-900 dark:text-gray-100">
                  Direction
                </Table.Cell>
                <Table.Cell>One axis (row or column)</Table.Cell>
                <Table.Cell>Two axes (rows and columns)</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-medium text-gray-900 dark:text-gray-100">
                  Sizing
                </Table.Cell>
                <Table.Cell>Items size themselves</Table.Cell>
                <Table.Cell>You define the grid, items fill it</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-medium text-gray-900 dark:text-gray-100">
                  Alignment
                </Table.Cell>
                <Table.Cell>Great for centering and distributing</Table.Cell>
                <Table.Cell>Great for precise placement</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded-lg">
              <p className="font-semibold text-indigo-800 dark:text-indigo-200 mb-1">
                Use Flex for:
              </p>
              <ul className="space-y-0.5 text-indigo-700 dark:text-indigo-300">
                <li>Navbar items in a row</li>
                <li>Centering a single element</li>
                <li>A form with stacked inputs</li>
                <li>Buttons side by side</li>
                <li>Anything that flows in one direction</li>
              </ul>
            </div>
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded-lg">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200 mb-1">
                Use Grid for:
              </p>
              <ul className="space-y-0.5 text-emerald-700 dark:text-emerald-300">
                <li>Card grids (products, team members)</li>
                <li>Dashboard layouts with panels</li>
                <li>Page layouts (sidebar + content)</li>
                <li>Any layout where items need to align in both directions</li>
              </ul>
            </div>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Responsive Prefixes"
        description="Mobile-first: unprefixed = default, md: = 768px+, lg: = 1024px+. Resize your browser to see it."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {["Card A", "Card B", "Card C"].map((label) => (
            <div
              key={label}
              className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-center text-gray-700 dark:text-gray-300"
            >
              {label}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3 — 1 column on mobile, 2 on tablet, 3 on desktop.
        </p>
      </ExampleCard>

      <ExampleCard
        title="Dark Mode & Interactive States"
        description="Prefix modifiers: dark:, hover:, focus-visible:, disabled:."
      >
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-colors">
              hover: & focus-visible:
            </button>
            <button
              disabled
              className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-500 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              disabled:
            </button>
          </div>
          <CodeBlock.Root>
            <CodeBlock.Frame>
              <CodeBlock.Content>{`<button className="
  bg-indigo-600 text-white        // base
  hover:bg-indigo-700              // on hover
  focus-visible:ring-2             // keyboard focus
  dark:bg-indigo-500               // dark mode
  disabled:opacity-50              // disabled state
">
  Save
</button>`}</CodeBlock.Content>
            </CodeBlock.Frame>
          </CodeBlock.Root>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Group Hover"
        description="Style child elements when a parent is hovered. Add group to the parent, then use group-hover: on any descendant."
      >
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Hover over these cards — the title, arrow, and border all react to the parent hover, not
            their own.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="group rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-indigo-500 dark:hover:border-indigo-400 hover:shadow-md transition-all duration-200 cursor-pointer">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Dashboard
                </h4>
                <span className="text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all duration-200">
                  →
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                View your analytics and metrics
              </p>
            </div>
            {/* Card 2 */}
            <div className="group rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-emerald-500 dark:hover:border-emerald-400 hover:shadow-md transition-all duration-200 cursor-pointer">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Settings
                </h4>
                <span className="text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-200">
                  →
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                Manage your preferences
              </p>
            </div>
          </div>

          <CodeBlock.Root>
            <CodeBlock.Frame>
              <CodeBlock.Content>{`{/* 1. Mark the parent with "group" */}
<div className="group rounded-lg border p-4
  hover:border-indigo-500 hover:shadow-md
  transition-all cursor-pointer">

  {/* 2. Children use "group-hover:" to react */}
  <h4 className="font-semibold
    group-hover:text-indigo-600 transition-colors">
    Dashboard
  </h4>

  <span className="text-gray-400
    group-hover:text-indigo-500
    group-hover:translate-x-1 transition-all">
    →
  </span>

  <p className="text-sm text-gray-500
    group-hover:text-gray-700 transition-colors">
    View your analytics and metrics
  </p>
</div>`}</CodeBlock.Content>
            </CodeBlock.Frame>
          </CodeBlock.Root>

          <details className="text-sm text-gray-600 dark:text-gray-400">
            <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
              How it works
            </summary>
            <ul className="mt-2 pl-4 space-y-1 list-disc list-inside text-xs">
              <li>
                <InlineCode variant="accent">group</InlineCode> on the parent tells Tailwind "this
                element defines a hover group"
              </li>
              <li>
                <InlineCode variant="accent">group-hover:</InlineCode> on children means "apply this
                style when the <em>group parent</em> is hovered, not me"
              </li>
              <li>
                Works with other states too: <InlineCode variant="accent">group-focus:</InlineCode>,{" "}
                <InlineCode variant="accent">group-active:</InlineCode>
              </li>
              <li>
                You can name groups for nesting:{" "}
                <InlineCode variant="accent">group/card</InlineCode> and{" "}
                <InlineCode variant="accent">group-hover/card:</InlineCode>
              </li>
            </ul>
          </details>
        </div>
      </ExampleCard>
    </div>
  );
}
