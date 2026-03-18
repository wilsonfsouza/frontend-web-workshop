import { useState, useEffect } from "react";
import { ExampleCard } from "@/components/ExampleCard";
import { Table } from "@/components/Table";

// --- Custom Hook: useLocalStorage ---
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setStoredValue = (newValue: T | ((prev: T) => T)) => {
    setValue((prev) => {
      const resolved = newValue instanceof Function ? newValue(prev) : newValue;
      localStorage.setItem(key, JSON.stringify(resolved));
      return resolved;
    });
  };

  return [value, setStoredValue] as const;
}

// --- Custom Hook: useDebounce ---
function useDebounce<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(timer);
  }, [value, delayMs]);

  return debounced;
}

export function CustomHooks() {
  // useLocalStorage demo
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("workshop-theme", "light");
  const [notes, setNotes] = useLocalStorage("workshop-notes", "");

  // useDebounce demo
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Custom Hooks</h2>
        <p className="text-gray-500 mt-1">
          Extract reusable logic into functions that start with "use".
        </p>
      </div>

      <div className="p-4 bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded-lg text-sm text-emerald-800 dark:text-emerald-200 space-y-2">
        <p>
          A custom hook is just a function that uses other hooks. Create one when you notice
          repeated logic across components, your component is getting long, or you want to test the
          logic separately. The naming convention: start with "use".
        </p>
      </div>

      <ExampleCard
        title="useLocalStorage"
        description="Works like useState but persists to localStorage. Refresh the page — your values survive."
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 dark:text-gray-400">Theme:</span>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
            >
              {theme === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"}
            </button>
            <span className="text-sm font-mono text-emerald-600">current: "{theme}"</span>
          </div>
          <div>
            <label htmlFor="notes" className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
              Notes (persisted):
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Type something, refresh the page, it's still here..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-sm h-20"
            />
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="useDebounce"
        description="Delays updating a value until the user stops typing. Useful for search inputs."
      >
        <div className="space-y-3">
          <label htmlFor="debounce-search" className="sr-only">
            Search (debounce demo)
          </label>
          <input
            id="debounce-search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type quickly, watch the debounced value lag behind..."
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-sm"
          />
          <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded font-mono text-sm space-y-1">
            <p>
              Raw value: "<span className="text-amber-600">{search}</span>"
            </p>
            <p>
              Debounced (300ms): "<span className="text-emerald-600">{debouncedSearch}</span>"
            </p>
          </div>
          <p className="text-xs text-gray-500">
            In a app, you'd use the debounced value to trigger an API call instead of firing on
            every keystroke.
          </p>
        </div>
      </ExampleCard>

      <ExampleCard
        title="When to create a custom hook"
        description="The checklist from the workshop."
      >
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
          <li>✅ Logic is used in more than one component</li>
          <li>✅ It makes the component easier to read</li>
          <li>✅ It involves hooks (useState, useEffect, etc.)</li>
          <li>✅ You'd benefit from testing the logic separately</li>
          <li className="text-gray-400 mt-2 italic">If you checked two or more, extract it.</li>
        </ul>
      </ExampleCard>
      <ExampleCard
        title="Hooks Quick Reference"
        description="All the hooks from this module at a glance."
      >
        <Table.Root>
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header>Hook</Table.Header>
              <Table.Header>Re-renders?</Table.Header>
              <Table.Header>Use for</Table.Header>
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell className="font-mono">useState</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell>UI state</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-mono">useRef</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>DOM access, mutable values</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-mono">useEffect</Table.Cell>
              <Table.Cell>—</Table.Cell>
              <Table.Cell>Side effects, subscriptions</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-mono">useReducer</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell>Complex/coupled state</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-mono">useMemo</Table.Cell>
              <Table.Cell>—</Table.Cell>
              <Table.Cell>Expensive calculations</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-mono">useCallback</Table.Cell>
              <Table.Cell>—</Table.Cell>
              <Table.Cell>Stable function references</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </ExampleCard>
    </div>
  );
}
