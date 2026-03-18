import { useState } from "react";
import { ExampleCard } from "@/components/ExampleCard";
import { SCENARIOS, OPTIONS, OPTION_COLORS } from "./data";
import { ScenarioCard } from "./ScenarioCard";

export function StateActivity() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  function toggle(id: number) {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Activity: State Management Decisions
        </h2>
        <p className="text-gray-500 mt-1">
          7 scenarios. For each one, pick the state approach that fits best.
        </p>
      </div>

      <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-indigo-800 space-y-2">
        <p>
          For each scenario, identify which state management approach fits best and think about your
          reasoning (1-2 sentences). Features often need multiple state types working together, so
          don&apos;t feel limited to just one.
        </p>
      </div>

      <ExampleCard title="Available Options">
        <div className="flex flex-wrap gap-2">
          {OPTIONS.map((opt) => (
            <span
              key={opt}
              className={`text-xs font-medium px-2.5 py-1 rounded ${OPTION_COLORS[opt]}`}
            >
              {opt}
            </span>
          ))}
        </div>
      </ExampleCard>
      <div className="space-y-4">
        {SCENARIOS.map((scenario) => (
          <ScenarioCard
            key={scenario.id}
            scenario={scenario}
            revealed={revealed.has(scenario.id)}
            onReveal={() => toggle(scenario.id)}
          />
        ))}
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setRevealed(new Set(SCENARIOS.map((s) => s.id)))}
          className="text-xs px-3 py-1.5 rounded bg-gray-100 text-gray-600 hover:bg-gray-200:bg-gray-700"
        >
          Reveal all answers
        </button>
        <button
          type="button"
          onClick={() => setRevealed(new Set())}
          className="text-xs px-3 py-1.5 rounded bg-gray-100 text-gray-600 hover:bg-gray-200:bg-gray-700"
        >
          Reset
        </button>
      </div>

      <ExampleCard
        title="Discussion Questions"
        description="Talk through these after reviewing the answers."
      >
        <div className="space-y-3 text-sm text-gray-600">
          <details>
            <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700 text-xs">
              Why combine URL state and HTTP state in Scenario 1?
            </summary>
            <p className="mt-1 pl-4 text-xs">
              URL holds UI state (filters/sorting), TanStack Query manages server data. URL params
              drive what data to fetch. This separation keeps concerns clear.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700 text-xs">
              Why Zustand for cart but Context for accordion and upload?
            </summary>
            <p className="mt-1 pl-4 text-xs">
              Scope and frequency. Cart is app-wide and updates often (Zustand). Accordion and
              upload are feature-scoped with infrequent updates (Context). Context is great for
              localized state sharing.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700 text-xs">
              Scenarios 6 and 7 both use Context. What&apos;s the pattern?
            </summary>
            <p className="mt-1 pl-4 text-xs">
              Compound components / feature-scoped providers. Context wraps just the feature&apos;s
              component tree, not the whole app. Each instance gets isolated state.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700 text-xs">
              Could you use TanStack Query for Scenario 5 (blog)?
            </summary>
            <p className="mt-1 pl-4 text-xs">
              Yes, but you&apos;d ship unnecessary JavaScript and show loading states. Server
              Components are more efficient for static content.
            </p>
          </details>
        </div>
      </ExampleCard>

      <ExampleCard title="Key Takeaways">
        <ul className="space-y-2 text-sm text-gray-600">
          <li>
            <span className="font-medium text-gray-900">Start simple.</span>{" "}
            Don&apos;t reach for global state or libraries until you feel the pain.
          </li>
          <li>
            <span className="font-medium text-gray-900">
              URL state is underused.
            </span>{" "}
            If it should be shareable, put it in the URL.
          </li>
          <li>
            <span className="font-medium text-gray-900">
              Context for scoped sharing.
            </span>{" "}
            Perfect for component libraries and feature-scoped state.
          </li>
          <li>
            <span className="font-medium text-gray-900">
              Update frequency matters.
            </span>{" "}
            Frequent updates → Zustand. Rare updates → Context.
          </li>
          <li>
            <span className="font-medium text-gray-900">
              Combine approaches.
            </span>{" "}
            Apps use multiple strategies working together.
          </li>
        </ul>
      </ExampleCard>
    </div>
  );
}
