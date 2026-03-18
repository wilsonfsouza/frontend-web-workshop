import { useState, useMemo, useCallback, memo } from "react";
import { ExampleCard } from "@/components/ExampleCard";
import { useExecutionRenderCount } from "@/hooks/useExecutionRenderCount";

interface ExpensiveListProps {
  items: string[];
  onSelect: (item: string) => void;
  label: string;
}

const ExpensiveListMemoized = memo(function ExpensiveList({
  items,
  onSelect,
  label,
}: ExpensiveListProps) {
  const renderCount = useExecutionRenderCount();

  return (
    <div>
      <p className="text-xs text-gray-500 mb-2">
        {label} renders: <span className="font-mono font-bold">{renderCount}</span>
      </p>
      <ul className="text-sm space-y-1">
        {items.map((item) => (
          <li key={item}>
            <button onClick={() => onSelect(item)} className="text-indigo-600 hover:underline">
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];
const previewItems = items.slice(0, 3);

function sortItems(list: string[]) {
  return [...list].sort((itemA, itemB) => itemA.localeCompare(itemB));
}

export function UseMemo() {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const parentRenderCount = useExecutionRenderCount();

  // Without useMemo: sorts on every render, so sort count tracks parent renders
  const sortedWithoutMemo = sortItems(items);
  const sortWithoutMemoRenderCount = parentRenderCount;

  // With useMemo: only re-sorts when items change (once), sort count stays at 1
  const sortedWithMemo = useMemo(() => sortItems(items), []);
  const sortWithMemoRenderCount = 1;

  // Without useCallback: new function reference every render → child re-renders
  const handleSelectWithout = (item: string) => setSelected(item);

  // With useCallback: stable reference → child skips re-render
  const handleSelectWith = useCallback((item: string) => {
    setSelected(item);
  }, []);

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          useMemo & useCallback
        </h2>
        <p className="text-gray-500 mt-1">
          Memoize expensive computations and stabilize function references.
        </p>
      </div>

      <div className="p-4 bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded-lg text-sm text-emerald-800 dark:text-emerald-200 space-y-2">
        <p>
          <b>useMemo</b> memoizes an expensive computation so it only re-runs when its dependencies
          change.
        </p>
        <p>
          <b>useCallback</b> memoizes a function reference so child components don&apos;t re-render
          unnecessarily.
        </p>
        <p>
          Don&apos;t reach for these by default — they add complexity. Use them when there&apos;s a
          measurable performance benefit.
        </p>
      </div>

      <ExampleCard
        title="useMemo — Skip expensive recalculations"
        description="Click the button and watch how many times each sort function runs."
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
            >
              Increment count ({count})
            </button>
            <span className="text-xs text-gray-500 font-mono">
              Parent renders: {parentRenderCount}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-red-50 dark:bg-red-950 rounded">
              <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">
                Without useMemo
              </p>
              <p className="text-xs text-gray-500 mb-1">Sorts on every render</p>
              <p className="text-xs font-mono text-gray-600 dark:text-gray-400 mb-2">
                Sort called: <span className="font-bold">{sortWithoutMemoRenderCount}x</span>
              </p>
              <p className="text-sm font-mono">{sortedWithoutMemo.join(", ")}</p>
            </div>
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950 rounded">
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-1">
                With useMemo
              </p>
              <p className="text-xs text-gray-500 mb-1">Only sorts when items change</p>
              <p className="text-xs font-mono text-gray-600 dark:text-gray-400 mb-2">
                Sort called: <span className="font-bold">{sortWithMemoRenderCount}x</span>
              </p>
              <p className="text-sm font-mono">{sortedWithMemo.join(", ")}</p>
            </div>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="useCallback — Stable function references"
        description="The child is wrapped in React.memo. Without useCallback, it re-renders anyway because the reference to the function prop changes."
      >
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-red-50 dark:bg-red-950 rounded">
              <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-2">
                Without useCallback
              </p>
              <ExpensiveListMemoized
                items={previewItems}
                onSelect={handleSelectWithout}
                label="Child"
              />
            </div>
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950 rounded">
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                With useCallback
              </p>
              <ExpensiveListMemoized
                items={previewItems}
                onSelect={handleSelectWith}
                label="Child"
              />
            </div>
          </div>
          {selected && <p className="text-sm text-emerald-600">Selected: {selected}</p>}
          <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded text-sm text-amber-700 dark:text-amber-300">
            The &quot;without&quot; child re-renders every time because it receives a new function
            reference. The &quot;with&quot; child skips re-renders because useCallback keeps the
            same reference. This only matters when the child is wrapped in React.memo.
          </div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-500">
            Note: counts start at 2 because React StrictMode double-renders components in
            development to help catch side effects. This doesn&apos;t happen in production builds.
          </div>
        </div>
      </ExampleCard>
    </div>
  );
}
