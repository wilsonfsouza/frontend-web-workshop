import { useState } from "react";
import { ExampleCard } from "@/components/ExampleCard";
import { InlineCode } from "@/components/InlineCode";
import { Table } from "@/components/Table";

export function Variables() {
  const [spreadDemo, setSpreadDemo] = useState({ name: "Wilson", role: "engineer" });
  const [arraySpreadDemo, setArraySpreadDemo] = useState([1, 2, 3]);

  // Destructuring example
  const user = { name: "Wilson", role: "engineer", active: true };
  const { name, role } = user;

  // Array destructuring
  const colors = ["red", "green", "blue"];
  const [first, second] = colors;

  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Variables & Data Types</h2>
        <p className="text-gray-500 mt-1">
          How values are stored, named, and unpacked in JavaScript.
        </p>
      </div>

      <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-indigo-800 space-y-2">
        <p>
          JavaScript has three ways to declare variables:{" "}
          <InlineCode variant="accent">const</InlineCode>,{" "}
          <InlineCode variant="accent">let</InlineCode>, and{" "}
          <InlineCode variant="accent">var</InlineCode>.
        </p>
        <p>
          Rule of thumb: use <InlineCode variant="accent">const</InlineCode> by default. Switch to{" "}
          <InlineCode variant="accent">let</InlineCode> if you need to reassign. Never use{" "}
          <InlineCode variant="accent">var</InlineCode> in new code.
        </p>
      </div>

      <ExampleCard title="const vs let" description="const can't be reassigned, let can.">
        <div className="font-mono text-sm space-y-2">
          <p className="text-gray-600">
            const teamName = "Community Hub" → <span className="text-indigo-600">cannot</span>{" "}
            reassign
          </p>
          <p className="text-gray-600">
            let score = 0 → score = 10 → <span className="text-emerald-600">allowed</span>
          </p>
        </div>
      </ExampleCard>

      <ExampleCard title="Data Types" description="The basic types of values in JavaScript.">
        <Table.Root>
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header>Type</Table.Header>
              <Table.Header>Example</Table.Header>
              <Table.Header>Notes</Table.Header>
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body className="font-mono">
            <Table.Row>
              <Table.Cell>String</Table.Cell>
              <Table.Cell>"Hello"</Table.Cell>
              <Table.Cell className="font-sans">Text, always in quotes</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Number</Table.Cell>
              <Table.Cell>42, 3.14</Table.Cell>
              <Table.Cell className="font-sans">No int vs float distinction</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Boolean</Table.Cell>
              <Table.Cell>true, false</Table.Cell>
              <Table.Cell className="font-sans">Yes or no</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Array</Table.Cell>
              <Table.Cell>["a", "b"]</Table.Cell>
              <Table.Cell className="font-sans">Ordered list, 0-indexed</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Object</Table.Cell>
              <Table.Cell>{`{ name: "Wilson" }`}</Table.Cell>
              <Table.Cell className="font-sans">Key-value pairs</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </ExampleCard>

      <ExampleCard
        title="Destructuring"
        description="Unpack values from objects and arrays in a single line. You'll see this everywhere in React."
      >
        <div className="space-y-3 text-sm">
          <div className="p-3 bg-gray-50 rounded font-mono overflow-x-auto">
            <p className="text-gray-500">// Object destructuring</p>
            <p>const user = {JSON.stringify(user)};</p>
            <p className="mt-1">
              const {"{"} name, role {"}"} = user;
            </p>
            <p className="text-emerald-600 mt-1">
              → name: "{name}", role: "{role}"
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded font-mono">
            <p className="text-gray-500">// Array destructuring</p>
            <p>const colors = {JSON.stringify(colors)};</p>
            <p className="mt-1">const [first, second] = colors;</p>
            <p className="text-emerald-600 mt-1">
              → first: "{first}", second: "{second}"
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded font-mono">
            <p className="text-gray-500">// In React — you'll see both patterns</p>
            <p>const [count, setCount] = useState(0);</p>
            <p className="text-gray-500 mt-1">{"// ↑ array destructuring"}</p>
            <p className="mt-2">{"function Greeting({ name, age }) { ... }"}</p>
            <p className="text-gray-500">{"// ↑ object destructuring (props)"}</p>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Spread Operator (...)"
        description="Copy and merge objects without mutating the original. React uses this pattern heavily."
      >
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 rounded font-mono text-sm overflow-x-auto overflow-x-auto">
            <p className="text-gray-500">// Current object</p>
            <p>{JSON.stringify(spreadDemo)}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSpreadDemo({ ...spreadDemo, role: "lead" })}
              className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
            >
              Spread with role: "lead"
            </button>
            <button
              onClick={() => setSpreadDemo({ name: "Wilson", role: "engineer" })}
              className="px-3 py-1.5 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            >
              Reset
            </button>
          </div>
          <p className="text-xs text-gray-500">
            {'{ ...user, role: "lead" }'} creates a new object — the original is unchanged. React
            prefers creating new objects over modifying existing ones.
          </p>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Spread Operator — Arrays"
        description="Copy arrays and add items without modifying the original."
      >
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 rounded font-mono text-sm overflow-x-auto">
            <p className="text-gray-500">// Current array</p>
            <p>[{arraySpreadDemo.join(", ")}]</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setArraySpreadDemo((prev) => [...prev, prev.length + 1])}
              className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
            >
              [...array, {arraySpreadDemo.length + 1}]
            </button>
            <button
              onClick={() => setArraySpreadDemo((prev) => [0, ...prev])}
              className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
            >
              [0, ...array]
            </button>
            <button
              onClick={() => setArraySpreadDemo([1, 2, 3])}
              className="px-3 py-1.5 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            >
              Reset
            </button>
          </div>
          <p className="text-xs text-gray-500">
            [...array, newItem] creates a new array with the item appended. The original stays
            unchanged — this is how you update arrays in React state.
          </p>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Template Literals"
        description="Embed expressions inside strings using backticks."
      >
        <div className="p-3 bg-gray-50 rounded font-mono text-sm overflow-x-auto">
          <p className="text-gray-500">{"// Using backticks and ${}"}</p>
          <p>const name = "{name}";</p>
          <p className="mt-1">{`\`Hello, \${name}!\``}</p>
          <p className="text-emerald-600 mt-1">→ "Hello, {name}!"</p>
        </div>
      </ExampleCard>
    </div>
  );
}
