import { useState } from "react";
import { ExampleCard } from "@/components/ExampleCard";

export function UseState() {
  // Counter example
  const [count, setCount] = useState(0);

  // Form input example
  const [name, setName] = useState("");

  // Anti-pattern: derived state stored in useState
  const [items] = useState(["Apple", "Banana", "Cherry", "Date", "Elderberry"]);
  const [filter, setFilter] = useState("");

  // ❌ Anti-pattern — storing derived value
  const [filteredItemsBad, setFilteredItemsBad] = useState(items);
  const handleFilterBad = (value: string) => {
    setFilter(value);
    setFilteredItemsBad(items.filter((item) => item.toLowerCase().includes(value.toLowerCase())));
  };

  // ✅ Correct — derive it
  const filteredItemsGood = items.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">useState</h2>
        <p className="text-gray-500 mt-1">Track values that trigger re-renders when they change.</p>
      </div>

      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-sm text-emerald-800 space-y-2">
        <p>
          useState is the most common hook. Use it when the UI needs to update in response to a
          value changing. Don't use it for values that never change or values you can calculate from
          existing state.
        </p>
      </div>

      <ExampleCard title="Counter" description="The classic useState example.">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCount((prev) => prev - 1)}
            className="px-3 py-1.5 text-sm bg-gray-200 rounded hover:bg-gray-300 transition-colors"
          >
            -
          </button>
          <span className="text-2xl font-mono font-bold text-gray-900 w-12 text-center">
            {count}
          </span>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            +
          </button>
        </div>
      </ExampleCard>

      <ExampleCard title="Controlled Input" description="useState drives the input value.">
        <div className="space-y-2">
          <label htmlFor="name-input" className="sr-only">
            Your name
          </label>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name..."
            className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-sm"
          />
          {name && <p className="text-sm text-emerald-600">Hello, {name}!</p>}
        </div>
      </ExampleCard>

      <ExampleCard
        title="❌ Anti-pattern: Storing derived state"
        description="Filtering a list by storing the filtered result in a separate useState."
      >
        <div className="space-y-2">
          <label htmlFor="filter-bad" className="sr-only">
            Filter fruits
          </label>
          <input
            id="filter-bad"
            type="text"
            value={filter}
            onChange={(e) => handleFilterBad(e.target.value)}
            placeholder="Filter fruits..."
            className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-sm"
          />
          <p className="text-xs text-gray-500">Stored in state: [{filteredItemsBad.join(", ")}]</p>
          <div className="p-3 bg-red-50 rounded text-sm text-red-700">
            Problem: two setState calls per keystroke, risk of stale data, extra state to manage.
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="✅ Correct: Derive it"
        description="Calculate the filtered list from existing state — no extra useState needed."
      >
        <div className="space-y-2">
          <p className="text-xs text-gray-500">Derived: [{filteredItemsGood.join(", ")}]</p>
          <div className="p-3 bg-emerald-50 rounded text-sm text-emerald-700">
            If a value can be calculated from existing state, don't store it. Derive it.
          </div>
        </div>
      </ExampleCard>
    </div>
  );
}
