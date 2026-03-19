import { useState } from "react";
import { ExampleCard } from "@/components/ExampleCard";
import { CodeBlock } from "@/components/CodeBlock";
import { InlineCode } from "@/components/InlineCode";
import { ToastActivity } from "./ToastActivity";
import { ToastActivityAnswer } from "./answers/ToastActivityAnswer";

// =============================================================================
// Animation Activity
//
// Students build a toast notification from scratch — markup, styling, and
// animation — then compare against the goal.
// =============================================================================

export function AnimationActivity() {
  const [goalKey, setGoalKey] = useState(0);

  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Activity: Animate It</h2>
        <p className="text-gray-500 mt-1">
          Build a toast notification from scratch — markup, Tailwind styling, and animation.
        </p>
      </div>

      <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-indigo-800 space-y-2">
        <p className="font-medium">🎬 Solo Exercise (10 min)</p>
        <p>
          Build a success toast notification that slides up when it appears. You&apos;ll write the
          JSX, add Tailwind classes for styling, and apply a custom animation — all in one file.
        </p>
      </div>

      <ExampleCard
        title="Build This: Success Toast"
        description="Your goal is to build this toast from scratch. Click replay to see the slide-up animation again."
      >
        <div className="space-y-3">
          <button
            onClick={() => setGoalKey((k) => k + 1)}
            className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Replay animation
          </button>
          <div key={goalKey}>
            <ToastActivityAnswer />
          </div>
        </div>
      </ExampleCard>

      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-800">
          Open{" "}
          <InlineCode variant="warning">
            src/pages/m3/animation-activity/AnimationCard.tsx
          </InlineCode>{" "}
          and build the toast to match the goal above. Your live preview:
        </p>
      </div>

      <ExampleCard title="Your Progress" description="This updates live as you save the file.">
        <ToastActivity />
      </ExampleCard>

      <ExampleCard title="Step-by-Step Hints" description="Work through these one at a time.">
        <div className="space-y-2">
          <details className="text-sm text-gray-600">
            <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
              Step 1: Outer container layout
            </summary>
            <p className="mt-2 pl-4 text-xs">
              Use a flex row with centered items and a gap:{" "}
              <InlineCode>flex items-center gap-3 p-4 rounded-lg</InlineCode>. Add an emerald border
              and background: <InlineCode>border border-emerald-200 bg-emerald-50</InlineCode>.
            </p>
          </details>
          <details className="text-sm text-gray-600">
            <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
              Step 2: Check icon circle
            </summary>
            <p className="mt-2 pl-4 text-xs">
              A fixed-size circle:{" "}
              <InlineCode>
                shrink-0 w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center
              </InlineCode>
              . Put a white ✓ inside with <InlineCode>text-white text-sm font-bold</InlineCode>.
            </p>
          </details>
          <details className="text-sm text-gray-600">
            <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
              Step 3: Text content
            </summary>
            <p className="mt-2 pl-4 text-xs">
              Wrap in a <InlineCode>flex-1 min-w-0</InlineCode> div. Title:{" "}
              <InlineCode>text-sm font-medium text-emerald-900</InlineCode>. Description:{" "}
              <InlineCode>text-xs text-emerald-600</InlineCode>.
            </p>
          </details>
          <details className="text-sm text-gray-600">
            <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
              Step 4: Dismiss button
            </summary>
            <p className="mt-2 pl-4 text-xs">
              <InlineCode>
                shrink-0 px-3 py-1 rounded text-xs font-medium text-emerald-700 hover:bg-emerald-100
                transition-colors
              </InlineCode>
              .
            </p>
          </details>
          <details className="text-sm text-gray-600">
            <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
              Step 5: Add the animation
            </summary>
            <p className="mt-2 pl-4 text-xs">
              Add <InlineCode>animate-slide-up</InlineCode> to the outer container div. This uses
              the custom animation defined in <InlineCode>index.css</InlineCode> via{" "}
              <InlineCode>@theme</InlineCode>.
            </p>
          </details>
        </div>
      </ExampleCard>

      <ExampleCard title="Reference Solution" description="Expand when you're done or stuck.">
        <details className="text-sm text-gray-600">
          <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
            Show solution
          </summary>
          <div className="mt-3">
            <CodeBlock.Root>
              <CodeBlock.Frame>
                <CodeBlock.Title>AnimationCard.tsx</CodeBlock.Title>
                <CodeBlock.Content>{`export function AnimationCard() {
  return (
    <div className="animate-slide-up flex items-center gap-3
      p-4 rounded-lg border border-emerald-200
      bg-emerald-50
     ">

      <div className="shrink-0 w-9 h-9 rounded-full
        bg-emerald-500 flex items-center justify-center">
        <span className="text-white text-sm font-bold"
          aria-hidden="true">✓</span>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium
          text-emerald-900">
          Changes saved
        </p>
        <p className="text-xs text-emerald-600
         ">
          Your settings have been updated successfully.
        </p>
      </div>

      <button className="shrink-0 px-3 py-1 rounded
        text-xs font-medium text-emerald-700
       
        hover:bg-emerald-100
       :bg-emerald-900
        transition-colors">
        Dismiss
      </button>
    </div>
  );
}`}</CodeBlock.Content>
              </CodeBlock.Frame>
            </CodeBlock.Root>
          </div>
        </details>
      </ExampleCard>

      <ExampleCard
        title="Bonus: Reduced Motion"
        description="Always honor the user's motion preferences."
      >
        <div className="space-y-4">
          <p className="text-sm text-gray-700">
            Some users experience motion sickness or have vestibular disorders. The{" "}
            <InlineCode>prefers-reduced-motion</InlineCode> media query lets you disable or simplify
            animations for them.
          </p>
          <CodeBlock.Root>
            <CodeBlock.Frame>
              <CodeBlock.Title>index.css</CodeBlock.Title>
              <CodeBlock.Content>{`@layer base {
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
}`}</CodeBlock.Content>
            </CodeBlock.Frame>
          </CodeBlock.Root>
          <p className="text-xs text-gray-500">
            This is already in our <InlineCode>index.css</InlineCode>. You can test it in your
            browser&apos;s dev tools: Rendering → Emulate CSS media feature →
            prefers-reduced-motion: reduce.
          </p>
        </div>
      </ExampleCard>
    </div>
  );
}
