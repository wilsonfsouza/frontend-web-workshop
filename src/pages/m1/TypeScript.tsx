import { ExampleCard } from "@/components/ExampleCard";
import { CodeBlock } from "@/components/CodeBlock";
import { Table } from "@/components/Table";

export function TypeScript() {
  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">TypeScript 101</h2>
        <p className="text-gray-500 mt-1">
          TypeScript is JavaScript with types — a safety net that catches mistakes before your code
          runs.
        </p>
      </div>

      <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-indigo-800 space-y-2">
        <p>
          TypeScript doesn&apos;t change how your code runs. It&apos;s a development tool — all
          types are stripped away before the code reaches the browser. Think of it like spell-check
          for code.
        </p>
      </div>

      <ExampleCard
        title="Why TypeScript?"
        description="JavaScript lets bugs slip through to runtime. TypeScript catches them while you type."
      >
        <div className="space-y-3 text-sm">
          <div className="rounded overflow-hidden border border-red-200">
            <div className="px-3 py-1.5 bg-red-50 text-red-700 text-xs">
              ❌ JavaScript — crashes at runtime
            </div>
            <CodeBlock.Root>
              <CodeBlock.Content variant="light">{`function greet(name) {
  return \`Hello, \${name.toUpperCase()}!\`;
}

greet(42); // 💥 name.toUpperCase is not a function`}</CodeBlock.Content>
            </CodeBlock.Root>
          </div>
          <div className="rounded overflow-hidden border border-emerald-200">
            <div className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs">
              ✅ TypeScript — caught while writing
            </div>
            <CodeBlock.Root>
              <CodeBlock.Content variant="light">{`function greet(name: string) {
  return \`Hello, \${name.toUpperCase()}!\`;
}

greet(42); // ❌ Type 'number' is not assignable to type 'string'`}</CodeBlock.Content>
            </CodeBlock.Root>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Basic Type Annotations"
        description="Add a type after the variable name with a colon."
      >
        <CodeBlock.Root>
          <CodeBlock.Content variant="light">{`// Explicit annotations
const name: string = "Wilson";
const age: number = 30;
const active: boolean = true;
const tags: string[] = ["react", "ts"];

// TypeScript can often infer the type
const name = "Wilson";       // inferred as string
const age = 30;              // inferred as number`}</CodeBlock.Content>
        </CodeBlock.Root>
      </ExampleCard>

      <ExampleCard
        title="Function Annotations"
        description="Parameters need types. Return types are usually inferred."
      >
        <CodeBlock.Root>
          <CodeBlock.Content variant="light">{`function add(a: number, b: number): number {
  return a + b;
}

// Arrow function — same idea
const multiply = (a: number, b: number) => a * b;

// Optional parameter with ?
function greet(name: string, greeting?: string) {
  return \`\${greeting ?? "Hello"}, \${name}!\`;
}`}</CodeBlock.Content>
        </CodeBlock.Root>
      </ExampleCard>

      <ExampleCard
        title="Interfaces"
        description="Describe the shape of an object so TypeScript knows what properties to expect."
      >
        <CodeBlock.Root>
          <CodeBlock.Content variant="light">{`interface User {
  name: string;
  age: number;
  active: boolean;
  email?: string;    // optional
}

function printUser(user: User) {
  console.log(\`\${user.name}, age \${user.age}\`);
}`}</CodeBlock.Content>
        </CodeBlock.Root>
      </ExampleCard>

      <ExampleCard
        title="Union Types"
        description="A value that could be one of several types, written with the | character."
      >
        <CodeBlock.Root>
          <CodeBlock.Content variant="light">{`// A variable that could be string or null
let username: string | null = null;

// Literal types — restrict to specific values
type Status = "active" | "inactive" | "pending";

let status: Status = "active";
status = "deleted"; // ❌ not assignable to type Status`}</CodeBlock.Content>
        </CodeBlock.Root>
      </ExampleCard>

      <ExampleCard
        title="Generics"
        description="Type parameters that get filled in when you use the function or type. You'll read these constantly in React."
      >
        <div className="space-y-3">
          <CodeBlock.Root>
            <CodeBlock.Content variant="light">{`// A function that works with any type
function firstItem<T>(items: T[]): T {
  return items[0];
}

firstItem(["a", "b"]);  // returns string
firstItem([1, 2, 3]);   // returns number`}</CodeBlock.Content>
          </CodeBlock.Root>
          <CodeBlock.Root>
            <CodeBlock.Content variant="light">{`// In React — you'll see generics everywhere
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
const inputRef = useRef<HTMLInputElement>(null);`}</CodeBlock.Content>
          </CodeBlock.Root>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Reading TypeScript in React"
        description="A typical component with type annotations — what each part means."
      >
        <CodeBlock.Root>
          <CodeBlock.Content variant="light">{`interface ProjectCardProps {
  title: string;                      // required string
  status: "active" | "draft";        // union literal
  onSelect?: (id: string) => void;   // optional callback
}

function ProjectCard({ title, status, onSelect }: ProjectCardProps) {
  // component body
}`}</CodeBlock.Content>
        </CodeBlock.Root>
      </ExampleCard>

      <ExampleCard title="Quick Reference" description="The TypeScript syntax you'll see most.">
        <Table.Root>
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header>Concept</Table.Header>
              <Table.Header>Syntax</Table.Header>
              <Table.Header>Example</Table.Header>
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Basic types</Table.Cell>
              <Table.Cell className="font-mono">: type</Table.Cell>
              <Table.Cell className="font-mono">name: string</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Array</Table.Cell>
              <Table.Cell className="font-mono">type[]</Table.Cell>
              <Table.Cell className="font-mono">tags: string[]</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Optional</Table.Cell>
              <Table.Cell className="font-mono">?</Table.Cell>
              <Table.Cell className="font-mono">email?: string</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Union</Table.Cell>
              <Table.Cell className="font-mono">|</Table.Cell>
              <Table.Cell className="font-mono">
                &quot;active&quot; | &quot;inactive&quot;
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Interface</Table.Cell>
              <Table.Cell className="font-mono">{"interface { }"}</Table.Cell>
              <Table.Cell className="font-mono">{"interface User { name: string }"}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Generic</Table.Cell>
              <Table.Cell className="font-mono">{"<T>"}</Table.Cell>
              <Table.Cell className="font-mono">{"useState<User | null>(null)"}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Function type</Table.Cell>
              <Table.Cell className="font-mono">{"(params) => return"}</Table.Cell>
              <Table.Cell className="font-mono">{"onClick: (id: string) => void"}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </ExampleCard>
    </div>
  );
}
