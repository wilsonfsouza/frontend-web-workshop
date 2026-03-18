import { useState } from "react";
import { ExampleCard } from "@/components/ExampleCard";
import { InlineCode } from "@/components/InlineCode";
import { Table } from "@/components/Table";

const USERS = [
  { name: "Wilson", active: true },
  { name: "Alex", active: false },
  { name: "Sam", active: true },
];

export function Functions() {
  const [filterResult, setFilterResult] = useState<string[]>([]);
  const [mapResult, setMapResult] = useState<string[]>([]);
  const [findResult, setFindResult] = useState<string>("");

  const handleFindUser = () => {
    const foundUser = USERS.find((user) => user.name === "Sam");
    setFindResult(foundUser ? JSON.stringify(foundUser) : "undefined");
  };

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Functions</h2>
        <p className="text-gray-500 mt-1">
          Arrow functions, callbacks, and the array methods you'll see everywhere in React.
        </p>
      </div>

      <div className="p-4 bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded-lg text-sm text-indigo-800 dark:text-indigo-200 space-y-2">
        <p>
          In JavaScript, functions are values. You can store them in variables, pass them to other
          functions, and return them from functions. This is a core concept in React.
        </p>
        <p>
          Arrow functions (<InlineCode variant="accent">() =&gt; ...</InlineCode>) are the most
          common style in React code.
        </p>
      </div>

      <ExampleCard
        title="Parameters vs Arguments"
        description="Parameters are the names you define. Arguments are the values you pass in."
      >
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded font-mono text-sm">
            <p className="text-gray-500 mb-3">// Defining the function</p>
            <p>
              {"function greet("}
              <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-1 rounded">
                name
              </span>
              {") {"}
            </p>
            <p>{"  return `Hello, ${name}!`;"}</p>
            <p>{"}"}</p>
            <p className="mt-1 text-xs">
              <span className="inline-block w-3 h-3 bg-indigo-100 dark:bg-indigo-900 rounded mr-1 align-middle" />
              <span className="text-indigo-600 dark:text-indigo-400">
                parameter — the placeholder name
              </span>
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded font-mono text-sm">
            <p className="text-gray-500 mb-3">// Calling the function</p>
            <p>
              {"greet("}
              <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-1 rounded">
                "Wilson"
              </span>
              {");"}
            </p>
            <p className="mt-1 text-xs">
              <span className="inline-block w-3 h-3 bg-emerald-100 dark:bg-emerald-900 rounded mr-1 align-middle" />
              <span className="text-emerald-600 dark:text-emerald-400">
                argument — the actual value passed in
              </span>
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 px-1">
            <span className="inline-block w-3 h-3 bg-indigo-100 dark:bg-indigo-900 rounded" />
            <span>Parameter = the variable name in the definition</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 px-1">
            <span className="inline-block w-3 h-3 bg-emerald-100 dark:bg-emerald-900 rounded" />
            <span>Argument = the value you pass when calling</span>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Arrow Functions"
        description="The most common function style in React codebases."
      >
        <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded font-mono text-sm space-y-1">
          <p className="text-gray-500">// Full form</p>
          <p>{"const greet = (name) => { return `Hello, ${name}!`; };"}</p>
          <p className="text-gray-500 mt-2">// Short form (single expression)</p>
          <p>{"const greet = (name) => `Hello, ${name}!`;"}</p>
          <p className="text-emerald-600 mt-2">→ greet("Wilson") = "Hello, Wilson!"</p>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Default Parameters"
        description="Provide fallback values when arguments are missing."
      >
        <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded font-mono text-sm space-y-1">
          <p>{'const greet = (name = "stranger") => `Hello, ${name}!`;'}</p>
          <p className="text-emerald-600 mt-2">→ greet() = "Hello, stranger!"</p>
          <p className="text-emerald-600">→ greet("Wilson") = "Hello, Wilson!"</p>
        </div>
      </ExampleCard>

      <ExampleCard
        title="In React"
        description="Arrow functions show up as components, event handlers, and callbacks."
      >
        <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded font-mono text-sm space-y-3">
          <div>
            <p className="text-gray-500">// Component</p>
            <p>{"const Greeting = ({ name }) => <p>Hello, {name}</p>;"}</p>
          </div>
          <div>
            <p className="text-gray-500">// Event handler</p>
            <p>{"<button onClick={() => setCount(count + 1)}>Click</button>"}</p>
          </div>
          <div>
            <p className="text-gray-500">// Callback in array method</p>
            <p>{"const names = users.map(user => user.name);"}</p>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title=".filter() — Keep items that pass a test"
        description="Click to filter the users array for active users only."
      >
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded font-mono text-sm">
            <p className="text-gray-500">// Data</p>
            <p>{JSON.stringify(USERS, null, 0)}</p>
            <p className="text-gray-500 mt-2">// Code</p>
            <p>{"users.filter(user => user.active)"}</p>
          </div>
          <button
            onClick={() =>
              setFilterResult(USERS.filter((user) => user.active).map((user) => user.name))
            }
            className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Run .filter()
          </button>
          {filterResult.length > 0 && (
            <p className="text-sm text-emerald-600 font-mono">→ [{filterResult.join(", ")}]</p>
          )}
        </div>
      </ExampleCard>

      <ExampleCard
        title=".map() — Transform each item"
        description="Click to extract just the names from the users array."
      >
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded font-mono text-sm">
            <p className="text-gray-500">// Data</p>
            <p>{JSON.stringify(USERS, null, 0)}</p>
            <p className="text-gray-500 mt-2">// Code</p>
            <p>{"users.map(user => user.name)"}</p>
          </div>
          <button
            onClick={() => setMapResult(USERS.map((user) => user.name))}
            className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Run .map()
          </button>
          {mapResult.length > 0 && (
            <p className="text-sm text-emerald-600 font-mono">→ ["{mapResult.join('", "')}"]</p>
          )}
        </div>
      </ExampleCard>

      <ExampleCard
        title=".find() — Get the first match"
        description="Click to find the user named 'Sam'."
      >
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded font-mono text-sm">
            <p className="text-gray-500">// Data</p>
            <p>{JSON.stringify(USERS, null, 0)}</p>
            <p className="text-gray-500 mt-2">// Code</p>
            <p>{'users.find(user => user.name === "Sam")'}</p>
          </div>
          <button
            onClick={handleFindUser}
            className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Run .find()
          </button>
          {findResult && <p className="text-sm text-emerald-600 font-mono">→ {findResult}</p>}
        </div>
      </ExampleCard>

      <ExampleCard
        title="Quick Reference"
        description="The array methods you'll use most in React."
      >
        <Table.Root>
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header>Method</Table.Header>
              <Table.Header>Does</Table.Header>
              <Table.Header>Returns</Table.Header>
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell className="font-mono">.map()</Table.Cell>
              <Table.Cell>Transforms each item</Table.Cell>
              <Table.Cell>New array (same length)</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-mono">.filter()</Table.Cell>
              <Table.Cell>Keeps items that pass a test</Table.Cell>
              <Table.Cell>New array (shorter or same)</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-mono">.find()</Table.Cell>
              <Table.Cell>Gets the first match</Table.Cell>
              <Table.Cell>Single item or undefined</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </ExampleCard>
    </div>
  );
}
