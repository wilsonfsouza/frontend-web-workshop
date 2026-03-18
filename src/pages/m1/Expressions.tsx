import { useState } from "react";
import { ExampleCard } from "@/components/ExampleCard";
import { Table } from "@/components/Table";

export function Expressions() {
  const [age, setAge] = useState(20);
  const [showBadge, setShowBadge] = useState(true);
  const [user, setUser] = useState<{ name: string; address?: { street: string } } | null>({
    name: "Wilson",
    address: { street: "123 Main St" },
  });

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Expressions</h2>
        <p className="text-gray-500 mt-1">
          Ternaries, optional chaining, nullish coalescing, and short-circuit evaluation.
        </p>
      </div>

      <div className="p-4 bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded-lg text-sm text-indigo-800 dark:text-indigo-200 space-y-2">
        <p>
          An expression is anything that produces a value. These small operators show up constantly
          in React for conditional rendering, safe property access, and providing defaults.
        </p>
      </div>

      <ExampleCard
        title="Ternary Operator"
        description="Inline if/else — used constantly in React for conditional rendering."
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <label htmlFor="age-input" className="text-sm text-gray-600 dark:text-gray-400">
              Age:
            </label>
            <input
              id="age-input"
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-900"
            />
          </div>
          <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded font-mono text-sm">
            <p className="text-gray-500">{'// age >= 18 ? "adult" : "minor"'}</p>
            <p className="text-emerald-600">→ "{age >= 18 ? "adult" : "minor"}"</p>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="&& Short-Circuit (Conditional Rendering)"
        description="Show something only if a condition is true."
      >
        <div className="space-y-3">
          <button
            onClick={() => setShowBadge(!showBadge)}
            className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Toggle showBadge ({showBadge ? "true" : "false"})
          </button>
          <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded font-mono text-sm">
            <p className="text-gray-500">{"// {showBadge && <Badge />}"}</p>
            <div className="mt-2">
              {showBadge && (
                <span className="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">
                  New
                </span>
              )}
              {!showBadge && <span className="text-gray-400 italic">nothing rendered</span>}
            </div>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Optional Chaining (?.)"
        description="Safely access nested properties without crashing."
      >
        <div className="space-y-3">
          <div className="flex gap-2">
            <button
              onClick={() => setUser({ name: "Wilson", address: { street: "123 Main St" } })}
              className="px-3 py-1.5 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 transition-colors"
            >
              Set user with address
            </button>
            <button
              onClick={() => setUser({ name: "Wilson" })}
              className="px-3 py-1.5 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 transition-colors"
            >
              Set user without address
            </button>
            <button
              onClick={() => setUser(null)}
              className="px-3 py-1.5 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 transition-colors"
            >
              Set user to null
            </button>
          </div>
          <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded font-mono text-sm">
            <p className="text-gray-500">{"// user?.address?.street"}</p>
            <p className="text-emerald-600">→ {String(user?.address?.street ?? "undefined")}</p>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Nullish Coalescing (??)"
        description="Provide a default only for null/undefined — not for 0 or empty string."
      >
        <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded font-mono text-sm space-y-2">
          <p className="text-gray-500">// ?? vs ||</p>
          <p>
            {"0 ?? 10"} → <span className="text-emerald-600">0</span>{" "}
            <span className="text-gray-400">(keeps 0, it's not null/undefined)</span>
          </p>
          <p>
            {"0 || 10"} → <span className="text-amber-600">10</span>{" "}
            <span className="text-gray-400">(0 is falsy, falls through)</span>
          </p>
          <p className="mt-2">
            {'"" ?? "default"'} → <span className="text-emerald-600">""</span>{" "}
            <span className="text-gray-400">(keeps empty string)</span>
          </p>
          <p>
            {'"" || "default"'} → <span className="text-amber-600">"default"</span>{" "}
            <span className="text-gray-400">(empty string is falsy)</span>
          </p>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Strict Equality (===)"
        description="Always use === instead of ==. Loose equality has surprising behavior."
      >
        <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded font-mono text-sm space-y-2">
          <p>
            {'0 == ""'} → <span className="text-amber-600">true</span>{" "}
            <span className="text-gray-400">(loose equality coerces types)</span>
          </p>
          <p>
            {'0 === ""'} → <span className="text-emerald-600">false</span>{" "}
            <span className="text-gray-400">(strict equality checks type too)</span>
          </p>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Quick Reference"
        description="The operators you'll see most in React code."
      >
        <Table.Root>
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header>Operator</Table.Header>
              <Table.Header>What it does</Table.Header>
              <Table.Header>React use case</Table.Header>
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell className="font-mono">? :</Table.Cell>
              <Table.Cell>Inline if/else</Table.Cell>
              <Table.Cell>Conditional rendering</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-mono">&&</Table.Cell>
              <Table.Cell>Show if true</Table.Cell>
              <Table.Cell>Render only when condition met</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-mono">?.</Table.Cell>
              <Table.Cell>Safe property access</Table.Cell>
              <Table.Cell>Accessing nested data that might be null</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-mono">??</Table.Cell>
              <Table.Cell>Default for null/undefined</Table.Cell>
              <Table.Cell>Fallback values (keeps 0 and "")</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-mono">===</Table.Cell>
              <Table.Cell>Strict equality</Table.Cell>
              <Table.Cell>Always use instead of ==</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </ExampleCard>
    </div>
  );
}
