import { CodeBlock } from "@/components/CodeBlock";
import type { QuizItem } from "./data";

type QuizGuess = "server" | "client" | null;

interface QuizCardProps {
  item: QuizItem;
  guess: QuizGuess;
  onGuess: (guess: "server" | "client") => void;
}

export function QuizCard({ item, guess, onGuess }: QuizCardProps) {
  const answered = guess !== null;
  const correct = guess === item.answer;

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-3">
      <p className="text-xs font-medium text-gray-500">Snippet {item.id}</p>
      <CodeBlock.Root>
        <CodeBlock.Frame>
          <CodeBlock.Content>{item.code}</CodeBlock.Content>
        </CodeBlock.Frame>
      </CodeBlock.Root>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onGuess("server")}
          disabled={answered}
          className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
            answered && item.answer === "server"
              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500"
              : answered && guess === "server" && item.answer !== "server"
                ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 ring-2 ring-red-500"
                : "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900"
          } disabled:cursor-default`}
        >
          🖥️ Server
        </button>
        <button
          type="button"
          onClick={() => onGuess("client")}
          disabled={answered}
          className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
            answered && item.answer === "client"
              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500"
              : answered && guess === "client" && item.answer !== "client"
                ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 ring-2 ring-red-500"
                : "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900"
          } disabled:cursor-default`}
        >
          💻 Client
        </button>
      </div>
      {answered && (
        <div
          className={`p-2.5 rounded text-xs ${
            correct
              ? "bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800"
              : "bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800"
          }`}
        >
          {correct ? "✅ Correct! " : "❌ Not quite. "}
          {item.explanation}
        </div>
      )}
    </div>
  );
}
