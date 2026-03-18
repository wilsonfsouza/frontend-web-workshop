import { ExampleCard } from "@/components/ExampleCard";
import { CodeBlock } from "@/components/CodeBlock";
import { Table } from "@/components/Table";

export function Scope() {
  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Scope</h2>
        <p className="text-gray-500 mt-1">Where variables live and who can see them.</p>
      </div>

      <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-indigo-800 space-y-2">
        <p>
          Scope determines where a variable can be accessed. Think of it as the variable&apos;s
          &quot;visibility&quot; — some variables can be seen everywhere, others only inside a
          specific block of code.
        </p>
      </div>

      <ExampleCard
        title="Block Scope"
        description="Variables declared with const or let exist only inside the { } where they're created."
      >
        <CodeBlock.Root>
          <CodeBlock.Content variant="light">{`function processOrder(order) {
  const tax = 0.08; // ✅ visible inside this function

  if (order.total > 100) {
    const discount = 0.1; // ✅ visible only inside this if block
    console.log(discount); // works
  }

  console.log(discount); // ❌ Error: discount is not defined
  console.log(tax);      // ✅ works: still inside the function
}

console.log(tax); // ❌ Error: outside the function`}</CodeBlock.Content>
        </CodeBlock.Root>
        <p className="text-xs text-gray-500 mt-2">
          Each pair of curly braces {"{ }"} creates a new scope. Variables declared inside
          can&apos;t be seen outside.
        </p>
      </ExampleCard>

      <ExampleCard
        title="Function Scope"
        description="Every function creates its own scope. Variables inside are invisible outside."
      >
        <CodeBlock.Root>
          <CodeBlock.Content variant="light">{`function calculateTotal(price, quantity) {
  const subtotal = price * quantity;
  const tax = subtotal * 0.08;
  return subtotal + tax;
}

console.log(subtotal); // ❌ Error: subtotal only exists inside calculateTotal`}</CodeBlock.Content>
        </CodeBlock.Root>
      </ExampleCard>

      <ExampleCard
        title="Closures"
        description="Functions that remember their environment — even after the outer function has finished."
      >
        <CodeBlock.Root>
          <CodeBlock.Content variant="light">{`function createCounter() {
  let count = 0; // this variable is "closed over"

  return {
    increment: () => { count += 1; },
    getCount: () => count,
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.getCount(); // 2`}</CodeBlock.Content>
        </CodeBlock.Root>
        <div className="mt-3 p-3 bg-amber-50 rounded text-sm text-amber-700">
          In React, closures are why event handlers can access state variables — the handler
          function &quot;closes over&quot; the state from the render where it was created.
        </div>
      </ExampleCard>

      <ExampleCard
        title="Module Scope"
        description="Each file is its own scope. Use export/import to share between files."
      >
        <div className="space-y-3">
          <div className="rounded overflow-hidden border border-gray-200">
            <div className="px-3 py-1.5 bg-gray-100 text-xs text-gray-500">
              utils.ts
            </div>
            <CodeBlock.Root>
              <CodeBlock.Content variant="light">{`const API_URL = "https://api.example.com"; // private to this file

export function fetchUsers() {
  return fetch(\`\${API_URL}/users\`);
}`}</CodeBlock.Content>
            </CodeBlock.Root>
          </div>
          <div className="rounded overflow-hidden border border-gray-200">
            <div className="px-3 py-1.5 bg-gray-100 text-xs text-gray-500">
              app.ts
            </div>
            <CodeBlock.Root>
              <CodeBlock.Content variant="light">{`import { fetchUsers } from "./utils";

fetchUsers();          // ✅ fetchUsers was exported
console.log(API_URL);  // ❌ API_URL was not exported`}</CodeBlock.Content>
            </CodeBlock.Root>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          This is how React projects are organized: each component lives in its own file and exports
          what other files need.
        </p>
      </ExampleCard>

      <ExampleCard title="Quick Reference" description="The four levels of scope in JavaScript.">
        <Table.Root>
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header>Scope</Table.Header>
              <Table.Header>Created by</Table.Header>
              <Table.Header>Visible to</Table.Header>
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Block</Table.Cell>
              <Table.Cell className="font-mono">{"{ }"}</Table.Cell>
              <Table.Cell>Code inside the block only</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Function</Table.Cell>
              <Table.Cell className="font-mono">function() {"{}"}</Table.Cell>
              <Table.Cell>Code inside the function only</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Closure</Table.Cell>
              <Table.Cell>Inner function</Table.Cell>
              <Table.Cell>Inner function remembers outer variables</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Module</Table.Cell>
              <Table.Cell>File boundary</Table.Cell>
              <Table.Cell>Only exported values are visible outside</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </ExampleCard>
    </div>
  );
}
