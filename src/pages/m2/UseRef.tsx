import { useRef, useState } from "react";
import { ExampleCard } from "@/components/ExampleCard";

export function UseRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [renderCount, setRenderCount] = useState(0);
  const countRef = useRef(0);
  const [displayedRefValue, setDisplayedRefValue] = useState(0);

  const focusInput = () => inputRef.current?.focus();

  const incrementRef = () => {
    countRef.current += 1;
    // Note: this does NOT cause a re-render
  };

  const showRefValue = () => {
    setDisplayedRefValue(countRef.current);
    setRenderCount((prev) => prev + 1);
  };

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">useRef</h2>
        <p className="text-gray-500 mt-1">
          Hold a value without causing re-renders, or access DOM elements directly.
        </p>
      </div>

      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-sm text-emerald-800 space-y-2">
        <p>
          useRef has two common uses: accessing a DOM element directly (like calling .focus() on an
          input) and storing a mutable value that doesn't need to trigger a re-render (like a timer
          ID).
        </p>
      </div>

      <ExampleCard title="DOM Access" description="useRef gives direct access to a DOM element.">
        <div className="flex gap-2">
          <label htmlFor="ref-demo-input" className="sr-only">
            Demo input
          </label>
          <input
            id="ref-demo-input"
            ref={inputRef}
            type="text"
            placeholder="Click the button to focus me"
            className="flex-1 px-3 py-2 border border-gray-300 rounded bg-white text-sm"
          />
          <button
            onClick={focusInput}
            className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Focus Input
          </button>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Mutable value without re-render"
        description="useRef stores a value that persists across renders but doesn't trigger updates."
      >
        <div className="space-y-3">
          <div className="flex gap-2">
            <button
              onClick={incrementRef}
              className="px-3 py-1.5 text-sm bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            >
              Increment ref (no re-render)
            </button>
            <button
              onClick={showRefValue}
              className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
            >
              Force re-render
            </button>
          </div>
          <div className="p-3 bg-gray-50 rounded text-sm font-mono">
            <p>countRef.current: {displayedRefValue}</p>
            <p>renders triggered by setState: {renderCount}</p>
          </div>
          <p className="text-xs text-gray-500">
            Click "Increment ref" a few times, then "Force re-render" to see the accumulated value.
          </p>
        </div>
      </ExampleCard>
    </div>
  );
}
