import type { ComponentPart } from "./data";

interface IsolationCardProps {
  part: ComponentPart;
  revealed: boolean;
  onReveal: () => void;
}

export function IsolationCard({ part, revealed, onReveal }: IsolationCardProps) {
  return (
    <button
      type="button"
      onClick={onReveal}
      className="w-full text-left border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:border-gray-400 dark:hover:border-gray-500 transition-colors space-y-2"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{part.label}</span>
        {revealed && (
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
              part.needsClient
                ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                : "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
            }`}
          >
            {part.needsClient ? "CLIENT" : "SERVER"}
          </span>
        )}
      </div>
      <pre className="text-[11px] font-mono text-gray-500 whitespace-pre overflow-x-auto">
        {part.code}
      </pre>
      {revealed && <p className="text-xs text-gray-500">{part.reason}</p>}
    </button>
  );
}
