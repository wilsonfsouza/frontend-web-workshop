import { useState } from "react";
import { ExampleCard } from "@/components/ExampleCard";
import { ZONES, LEVEL_STYLES } from "./data";
import { BoardMockup } from "./BoardMockup";

export function ComponentsActivity() {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Activity: The UI Blueprint
        </h2>
        <p className="text-gray-500 mt-1">
          Train your &quot;component eyes&quot; by breaking a complex UI into its building blocks.
        </p>
      </div>

      <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-indigo-800 space-y-2">
        <p>
          Think of a complex website like a Lego set. The finished model on the box looks like one
          solid object, but to build it you need to understand how individual bricks click together
          to create different sections.
        </p>
        <p>
          Building a frontend is no different. Instead of seeing one big page, we want to see the
          separate building blocks. Below is a simplified version of a project management board.
          Your job: identify the reusable components, going from the biggest sections (macro) down
          to the smallest repeated pieces (micro).
        </p>
      </div>

      <ExampleCard
        title="The Board"
        description="A simplified Taskei sprint board. Study it before moving on."
      >
        <BoardMockup />
      </ExampleCard>
      <ExampleCard
        title="Spot the Components"
        description="Click each item to reveal what it is and where it appears. Start from macro and work down."
      >
        <div className="space-y-2">
          {ZONES.map((zone) => {
            const isRevealed = revealed.has(zone.id);
            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => toggle(zone.id)}
                className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-gray-400:border-gray-500 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded ${LEVEL_STYLES[zone.level]}`}
                  >
                    {zone.level}
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    {isRevealed ? zone.label : `Component ${ZONES.indexOf(zone) + 1}`}
                  </span>
                  <span className="ml-auto text-xs text-gray-400">{isRevealed ? "▲" : "▼"}</span>
                </div>
                {isRevealed && (
                  <p className="mt-1.5 text-xs text-gray-500 pl-[52px]">{zone.hint}</p>
                )}
              </button>
            );
          })}
        </div>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => setRevealed(new Set(ZONES.map((z) => z.id)))}
            className="text-xs px-3 py-1.5 rounded bg-gray-100 text-gray-600 hover:bg-gray-200:bg-gray-700"
          >
            Reveal all
          </button>
          <button
            type="button"
            onClick={() => setRevealed(new Set())}
            className="text-xs px-3 py-1.5 rounded bg-gray-100 text-gray-600 hover:bg-gray-200:bg-gray-700"
          >
            Reset
          </button>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Discussion"
        description="Think about these once you've identified the components."
      >
        <ul className="space-y-3 text-sm text-gray-600">
          <li>
            <span className="font-medium text-gray-900">
              Repetition signals a component.
            </span>{" "}
            If you see the same visual pattern more than once (cards, columns, avatars), that
            pattern is almost certainly its own component.
          </li>
          <li>
            <span className="font-medium text-gray-900">
              Components nest inside each other.
            </span>{" "}
            A Column contains Cards. A Card contains Avatars and Badges. This nesting is exactly how
            you structure your code.
          </li>
          <li>
            <span className="font-medium text-gray-900">
              Props are the differences.
            </span>{" "}
            Every Task Card has the same shape but different content. The content that changes
            between instances becomes props.
          </li>
          <li>
            <span className="font-medium text-gray-900">
              Scope determines location.
            </span>{" "}
            The Navbar is used on every page, so it lives in a shared components/ folder. A card
            specific to this board view might live co-located with the board page.
          </li>
        </ul>
      </ExampleCard>
    </div>
  );
}
