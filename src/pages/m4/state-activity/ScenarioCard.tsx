import type { Scenario } from "./data";
import { OPTION_COLORS } from "./data";

interface ScenarioCardProps {
  scenario: Scenario;
  revealed: boolean;
  onReveal: () => void;
}

export function ScenarioCard({ scenario, revealed, onReveal }: ScenarioCardProps) {
  const isExample = scenario.id === 0;

  return (
    <div className="border border-gray-200 rounded-lg p-4 space-y-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-gray-900">
            {scenario.id}. {scenario.title}
          </p>
          <p className="text-xs text-gray-500 mt-1">{scenario.description}</p>
        </div>
        {isExample && (
          <span className="shrink-0 text-[10px] font-medium px-2 py-0.5 rounded bg-indigo-100 text-indigo-700">
            EXAMPLE
          </span>
        )}
      </div>

      {isExample || revealed ? (
        <div className="space-y-2 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <span
              className={`text-[11px] font-medium px-2 py-0.5 rounded ${OPTION_COLORS[scenario.answer] ?? "bg-gray-100 text-gray-800"}`}
            >
              {scenario.answer}
            </span>
          </div>
          <p className="text-xs text-gray-600">{scenario.reasoning}</p>
          {scenario.note && <p className="text-xs text-gray-400 italic">{scenario.note}</p>}
        </div>
      ) : (
        <button
          type="button"
          onClick={onReveal}
          className="text-xs text-indigo-600 hover:text-indigo-700"
        >
          Reveal answer ▼
        </button>
      )}
    </div>
  );
}
