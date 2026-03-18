import { ExampleCard } from "@/components/ExampleCard";
import { CodeBlock } from "@/components/CodeBlock";
import { InlineCode } from "@/components/InlineCode";
import { Table } from "@/components/Table";
import { TaskList } from "./TaskList";

export function ReadingComponents() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Reading a React Component
        </h2>
        <p className="text-gray-500 mt-1">
          Before learning individual concepts, let&apos;s look at a component and answer four
          questions:
        </p>
        <ul className="mt-2 text-gray-500 list-disc list-inside space-y-1">
          <li>What is this file doing?</li>
          <li>What&apos;s the structure?</li>
          <li>Where&apos;s the state?</li>
          <li>What happens when the user clicks?</li>
        </ul>
      </div>

      <ExampleCard
        title="The Component — Try It"
        description="A task list with status toggling and delete confirmation. Play with it first."
      >
        <TaskList />
      </ExampleCard>

      <ExampleCard
        title="1. What is this file doing?"
        description="Start from the top — imports, types, and the export tell you the big picture."
      >
        <CodeBlock.Root>
          <CodeBlock.Content variant="light">{`// Imports tell you what tools this component uses
import { useState } from "react";

// Types describe the shape of the data
interface Task {
  id: string;
  title: string;
  status: "todo" | "in-progress" | "done";
}

// The component itself — a function that returns JSX
function TaskList() {
  // ... state and logic here
  return (
    // ... UI here
  );
}`}</CodeBlock.Content>
        </CodeBlock.Root>
        <div className="mt-3 p-3 bg-indigo-50 dark:bg-indigo-950 rounded text-sm text-indigo-700 dark:text-indigo-300">
          Reading tip: start with the imports and the interface. They tell you what the component
          depends on and what data it works with — before you read a single line of logic.
        </div>
      </ExampleCard>

      <ExampleCard
        title="2. What's the structure?"
        description="The return statement is the UI. Read it like an outline."
      >
        <CodeBlock.Root>
          <CodeBlock.Content variant="light">{`return (
  <div>                              // ← wrapper
    {tasks.map(task => (             // ← loop: one row per task
      <div key={task.id}>            // ← a single task row
        <div>                        // ← left side
          <button>status badge</button>  // ← clickable status
          <span>task title</span>        // ← the text
        </div>
        {confirmDelete === task.id   // ← right side: conditional
          ? <div>Confirm / Cancel</div>  // ← delete confirmation
          : <button>Delete</button>      // ← delete trigger
        }
      </div>
    ))}
  </div>
);`}</CodeBlock.Content>
        </CodeBlock.Root>
        <div className="mt-3 p-3 bg-indigo-50 dark:bg-indigo-950 rounded text-sm text-indigo-700 dark:text-indigo-300">
          Reading tip: the JSX is a tree. Indent levels show nesting. Look for{" "}
          <InlineCode variant="accent">.map()</InlineCode> (lists),{" "}
          <InlineCode variant="accent">{"? :"}</InlineCode> (conditionals), and{" "}
          <InlineCode variant="accent">{"&&"}</InlineCode> (show/hide).
        </div>
      </ExampleCard>

      <ExampleCard
        title="3. Where's the state?"
        description="useState calls tell you what data the component tracks and what can change."
      >
        <CodeBlock.Root>
          <CodeBlock.Content variant="light">{`// The list of tasks — drives what's rendered
const [tasks, setTasks] = useState<Task[]>(initialTasks);

// Which task is showing the delete confirmation (or null)
const [confirmDelete, setConfirmDelete] = useState<string | null>(null);`}</CodeBlock.Content>
        </CodeBlock.Root>
        <div className="mt-3 space-y-2">
          <div className="flex items-start gap-3 text-sm">
            <span className="inline-block w-3 h-3 mt-1 bg-indigo-200 dark:bg-indigo-800 rounded shrink-0" />
            <span className="text-gray-600 dark:text-gray-400">
              <InlineCode>tasks</InlineCode> — the array of task objects. When it changes, the list
              re-renders.
            </span>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <span className="inline-block w-3 h-3 mt-1 bg-amber-200 dark:bg-amber-800 rounded shrink-0" />
            <span className="text-gray-600 dark:text-gray-400">
              <InlineCode>confirmDelete</InlineCode> — tracks which task (if any) is showing the
              delete confirmation. It&apos;s a task ID or null.
            </span>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="4. What happens when the user clicks?"
        description="Trace a click through the code: event → handler → setState → re-render."
      >
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Clicking the status badge
            </p>
            <CodeBlock.Root>
              <CodeBlock.Content variant="light">{`// 1. User clicks the status badge
<button onClick={() => handleCycleStatus(task.id)}>

// 2. Handler runs — creates a new array with the updated task
const handleCycleStatus = (taskId: string) => {
  setTasks(prev =>
    prev.map(task =>
      task.id === taskId
        ? { ...task, status: nextStatus[task.status] }  // spread + override
        : task                                           // unchanged
    )
  );
};

// 3. React sees new state → re-renders → UI updates`}</CodeBlock.Content>
            </CodeBlock.Root>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Clicking Delete → Confirm
            </p>
            <CodeBlock.Root>
              <CodeBlock.Content variant="light">{`// 1. User clicks "Delete"
<button onClick={() => setConfirmDelete(task.id)}>

// 2. confirmDelete is now set → ternary switches to show Confirm/Cancel
{confirmDelete === task.id
  ? <div>Confirm / Cancel</div>   // ← now visible
  : <button>Delete</button>
}

// 3. User clicks "Confirm"
<button onClick={() => handleDelete(task.id)}>

// 4. Handler filters out the task and resets confirmDelete
const handleDelete = (taskId: string) => {
  setTasks(prev => prev.filter(task => task.id !== taskId));
  setConfirmDelete(null);
};`}</CodeBlock.Content>
            </CodeBlock.Root>
          </div>
          <div className="p-3 bg-indigo-50 dark:bg-indigo-950 rounded text-sm text-indigo-700 dark:text-indigo-300">
            The pattern is always the same: user action → event handler → setState → React
            re-renders with new data → UI updates. Every interactive React component follows this
            cycle.
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Key Patterns to Recognize"
        description="What to look for when reading any React component."
      >
        <Table.Root>
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header>You see...</Table.Header>
              <Table.Header>It means...</Table.Header>
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell className="font-mono">useState(...)</Table.Cell>
              <Table.Cell>This component tracks a value that can change</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-mono">.map()</Table.Cell>
              <Table.Cell>A list is being rendered</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-mono">{"condition ? A : B"}</Table.Cell>
              <Table.Cell>Different UI based on a condition</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-mono">{"condition && <X />"}</Table.Cell>
              <Table.Cell>Show something only when true</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-mono">{"onClick={() => ...}"}</Table.Cell>
              <Table.Cell>Something happens when the user clicks</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-mono">{"{ ...obj, key: val }"}</Table.Cell>
              <Table.Cell>Creating a new object with one field changed</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </ExampleCard>
    </div>
  );
}
