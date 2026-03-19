import { useState } from "react";
import { ExampleCard } from "@/components/ExampleCard";
import { QUIZ_ITEMS, HEADER_PARTS } from "./data";
import { QuizCard } from "./QuizCard";
import { IsolationCard } from "./IsolationCard";

export function ServerClientActivity() {
  const [quizGuesses, setQuizGuesses] = useState<Record<number, "server" | "client">>({});
  const [isolationRevealed, setIsolationRevealed] = useState<Set<string>>(new Set());

  function handleGuess(id: number, guess: "server" | "client") {
    setQuizGuesses((prev) => ({ ...prev, [id]: guess }));
  }

  function toggleIsolation(id: string) {
    setIsolationRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const totalAnswered = Object.keys(quizGuesses).length;
  const totalCorrect = QUIZ_ITEMS.filter((quiz) => quizGuesses[quiz.id] === quiz.answer).length;

  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Activity: Server or Client?</h2>
        <p className="text-gray-500 mt-1">
          Two exercises to sharpen your instinct for the server/client boundary.
        </p>
      </div>

      <ExampleCard
        title="Exercise 1: Classify the Component"
        description="For each code snippet, decide if it should be a Server Component or a Client Component."
      >
        <div className="space-y-4">
          {QUIZ_ITEMS.map((item) => (
            <QuizCard
              key={item.id}
              item={item}
              guess={quizGuesses[item.id] ?? null}
              onGuess={(guess) => handleGuess(item.id, guess)}
            />
          ))}
          {totalAnswered === QUIZ_ITEMS.length && (
            <div className="p-3 bg-gray-50 rounded text-sm text-gray-700">
              Score: {totalCorrect}/{QUIZ_ITEMS.length} correct.
              {totalCorrect === QUIZ_ITEMS.length && " Perfect! 🎉"}
            </div>
          )}
          <button
            type="button"
            onClick={() => setQuizGuesses({})}
            className="text-xs px-3 py-1.5 rounded bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            Reset quiz
          </button>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Exercise 2: Isolate the Client Components"
        description="Click each one to reveal whether it needs the client directive or can stay on the server."
      >
        <div className="space-y-2">
          <div className="p-3 bg-gray-50 rounded text-xs text-gray-500 mb-3">
            Imagine a full-width header component. If you put &quot;use client&quot; on the whole
            thing, all 6 parts ship JavaScript to the browser. Your goal: identify which parts
            actually need it.
          </div>
          {HEADER_PARTS.map((part) => (
            <IsolationCard
              key={part.id}
              part={part}
              revealed={isolationRevealed.has(part.id)}
              onReveal={() => toggleIsolation(part.id)}
            />
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => setIsolationRevealed(new Set(HEADER_PARTS.map((p) => p.id)))}
            className="text-xs px-3 py-1.5 rounded bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            Reveal all
          </button>
          <button
            type="button"
            onClick={() => setIsolationRevealed(new Set())}
            className="text-xs px-3 py-1.5 rounded bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            Reset
          </button>
        </div>
        {isolationRevealed.size === HEADER_PARTS.length && (
          <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-800 space-y-1">
            <p className="font-medium">Result:</p>
            <p>
              Only {HEADER_PARTS.filter((part) => part.needsClient).length} out of{" "}
              {HEADER_PARTS.length} parts need &quot;use client.&quot; The other{" "}
              {HEADER_PARTS.filter((part) => !part.needsClient).length} stay on the server and ship
              zero JavaScript. That&apos;s the power of isolation.
            </p>
          </div>
        )}
      </ExampleCard>
    </div>
  );
}
