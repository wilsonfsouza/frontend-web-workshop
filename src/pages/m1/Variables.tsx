import { useState } from "react";
import { ExampleCard } from "@/components/ExampleCard";
import { InlineCode } from "@/components/InlineCode";
import { Table } from "@/components/Table";

type SpreadDemo = {
  name: string;
  role: string;
  team?: string;
}

export function Variables() {
  const [spreadDemo, setSpreadDemo] = useState<SpreadDemo>({ name: "Wilson", role: "engineer" });
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
            <Table.Row>
              <Table.Cell>null</Table.Cell>
              <Table.Cell>null</Table.Cell>
              <Table.Cell className="font-sans">Empty ("no value")</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>undefined</Table.Cell>
              <Table.Cell>undefined</Table.Cell>
              <Table.Cell className="font-sans">Variable declared but no value given yet</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
        <p className="text-xs text-gray-500 mt-3">
          Now that we know what types exist, let's look at how they behave differently under the
          hood.
        </p>
      </ExampleCard>

      <ExampleCard
        title="Primitives vs Reference Types"
        description="Values in JavaScript fall into two categories — and they behave very differently."
      >
        <div className="space-y-3 text-sm">
          <div className="p-3 bg-gray-50 rounded font-mono overflow-x-auto">
            <p className="text-gray-500">// Primitives — stored by value</p>
            <p>let a = 10;</p>
            <p>let b = a;</p>
            <p>b = 20;</p>
            <p className="text-emerald-600 mt-1">→ a is still 10 (independent copy)</p>
          </div>
          <div className="p-3 bg-gray-50 rounded font-mono overflow-x-auto">
            <p className="text-gray-500">// Reference types — stored by reference</p>
            <p>const obj1 = {"{ score: 100 }"};</p>
            <p>const obj2 = obj1;</p>
            <p>obj2.score = 999;</p>
            <p className="text-red-600 mt-1">→ obj1.score is also 999 (same object!)</p>
          </div>
          <Table.Root>
            <Table.Head>
              <Table.HeaderRow>
                <Table.Header>Primitives (by value)</Table.Header>
                <Table.Header>Reference types (by reference)</Table.Header>
              </Table.HeaderRow>
            </Table.Head>
            <Table.Body className="font-mono">
              <Table.Row>
                <Table.Cell>String, Number, Boolean</Table.Cell>
                <Table.Cell>Object, Array, Function</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-sans">Copied when assigned</Table.Cell>
                <Table.Cell className="font-sans">Shared when assigned</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-sans">Compared by value</Table.Cell>
                <Table.Cell className="font-sans">Compared by reference</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
          <p className="text-xs text-gray-500 mt-3">
            Since reference types share the same object, what happens when you change it? That's
            where mutability comes in.
          </p>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Mutability & Immutability"
        description="Primitives are immutable by nature. Objects and arrays aren't — but in React, we pretend they are."
      >
        <div className="space-y-3 text-sm">
          <div className="p-3 bg-gray-50 rounded font-mono overflow-x-auto">
            <p className="text-gray-500">// Primitives are immutable — you can't change the value itself</p>
            <p>let greeting = "hello";</p>
            <p>greeting.toUpperCase();</p>
            <p className="text-emerald-600 mt-1">→ greeting is still "hello" (strings never change in place)</p>
            <p className="mt-1">greeting = greeting.toUpperCase();</p>
            <p className="text-emerald-600 mt-1">→ now greeting is "HELLO" (reassigned to a new string)</p>
          </div>
          <div className="p-3 bg-gray-50 rounded font-mono overflow-x-auto">
            <p className="text-gray-500">// Objects and arrays are mutable — you CAN change them in place</p>
            <p>const user = {"{ name: \"Wilson\" }"};</p>
            <p>user.name = "Alex";</p>
            <p className="text-amber-600 mt-1">→ works, but React won't detect this change!</p>
          </div>
          <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-800 font-sans">
            <p>
              <span className="font-semibold">Why this matters in React:</span> React compares
              state by reference. If you mutate an object, the reference stays the same, so React
              thinks nothing changed and skips re-rendering. That's why we always create new
              objects/arrays (using spread) instead of modifying existing ones.
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded font-mono overflow-x-auto">
            <p className="text-red-600">{"// ✗ Mutation — React won't re-render"}</p>
            <p>user.name = "Alex";</p>
            <p>setUser(user);</p>
            <p className="mt-3 text-emerald-600">{"// ✓ New object — React sees the change"}</p>
            <p>{"setUser({ ...user, name: \"Alex\" });"}</p>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Destructuring"
        description="A shortcut to pull values out of objects and arrays; so you don't have to repeat yourself."
      >
        <div className="space-y-3 text-sm">
          <div className="p-3 bg-gray-50 rounded font-mono overflow-x-auto">
            <p className="text-gray-500">// Without destructuring — repetitive</p>
            <p>const userName = user.name;</p>
            <p>const userRole = user.role;</p>
            <p className="mt-3 text-gray-500">// With destructuring — same result, one line</p>
            <p>const user = {JSON.stringify(user)};</p>
            <p className="mt-1">
              const {"{"} name, role {"}"} = user;
            </p>
            <p className="text-emerald-600 mt-1">
              → name: "{name}", role: "{role}"
            </p>
            <p className="text-gray-500 mt-1">
              {"// ↑ variable names must match the object keys"}
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded font-mono overflow-x-auto">
            <p className="text-gray-500">// Arrays work too — but here order matters, not names</p>
            <p>const colors = {JSON.stringify(colors)};</p>
            <p className="mt-1">const [first, second] = colors;</p>
            <p className="text-emerald-600 mt-1">
              → first: "{first}", second: "{second}"
            </p>
            <p className="text-gray-500 mt-1">
              {"// ↑ you can name these anything — position decides the value"}
            </p>
          </div>
          <div className="p-3 bg-indigo-50 border border-indigo-200 rounded text-indigo-800 font-sans">
            <p>
              <span className="font-semibold">Why this matters in React:</span>{" "}
              <InlineCode variant="accent">{"const [count, setCount] = useState(0)"}</InlineCode>{" "}
              is array destructuring — useState returns an array, and you pick the names.{" "}
              <InlineCode variant="accent">{"function Greeting({ name })"}</InlineCode>{" "}
              is object destructuring on props — the name must match the prop key.
            </p>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Spread Operator (...)"
        description="Copy and merge objects without mutating the original. React uses this pattern heavily."
      >
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 rounded font-mono text-sm overflow-x-auto">
            <p className="text-gray-500">// Current object</p>
            <p>{JSON.stringify(spreadDemo)}</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSpreadDemo({ ...spreadDemo, role: "lead" })}
              className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
            >
              Spread with role: "lead"
            </button>
            <button
              onClick={() => setSpreadDemo({ ...spreadDemo, team: "frontend" })}
              className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
            >
              Spread with team: "frontend"
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
    </div>
  );
}
