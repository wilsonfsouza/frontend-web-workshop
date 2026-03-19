import { ExampleCard } from "@/components/ExampleCard";
import { CodeBlock } from "@/components/CodeBlock";
import { InlineCode } from "@/components/InlineCode";
import { NotificationCard } from "./NotificationCard";
import { PricingCard } from "./PricingCard";
import { NotificationCardAnswer } from "./answers/NotificationCardAnswer";
import { PricingCardAnswer } from "./answers/PricingCardAnswer";

// =============================================================================
// Tailwind Activity
//
// Two exercises:
// 1. Pair programming — build a notification card together (guided)
// 2. Solo challenge — build a pricing card on your own (stretch)
// =============================================================================

export function TailwindActivity() {
  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Activity: Style It Yourself</h2>
        <p className="text-gray-500 mt-1">
          Two exercises — one guided with a partner, one solo challenge.
        </p>
      </div>

      {/* ============================================================= */}
      {/* PAIR PROGRAMMING */}
      {/* ============================================================= */}

      <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-indigo-800 space-y-2">
        <p className="font-medium">🤝 Exercise 1 — Pair Programming (15 min)</p>
        <p>
          Pair up! One person drives (types), the other navigates (decides which classes to use).
          Swap roles halfway through.
        </p>
      </div>

      <ExampleCard
        title="Build This: Notification Card"
        description="Your goal is to recreate this notification card using Tailwind classes."
      >
        <NotificationCardAnswer />
      </ExampleCard>

      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-800">
          Open{" "}
          <InlineCode variant="warning">
            src/pages/m3/styling-activity/NotificationCard.tsx
          </InlineCode>{" "}
          and add Tailwind classes to match the goal above. Your live preview:
        </p>
      </div>

      <ExampleCard title="Your Progress" description="This updates live as you save the file.">
        <NotificationCard />
      </ExampleCard>

      <ExampleCard title="Step-by-Step Hints" description="Work through these one at a time.">
        <div className="space-y-2">
          <details className="text-sm text-gray-600">
            <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
              Step 1: Outer container
            </summary>
            <p className="mt-2 pl-4 text-xs">
              flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-white
            </p>
          </details>
          <details className="text-sm text-gray-600">
            <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
              Step 2: Icon circle
            </summary>
            <p className="mt-2 pl-4 text-xs">
              shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center
            </p>
          </details>
          <details className="text-sm text-gray-600">
            <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
              Step 3: Title row (title + timestamp)
            </summary>
            <p className="mt-2 pl-4 text-xs">
              Container: flex items-center justify-between gap-2. Title: text-sm font-medium
              text-gray-900 truncate. Time: text-xs text-gray-400 shrink-0.
            </p>
          </details>
          <details className="text-sm text-gray-600">
            <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
              Step 4: Action buttons
            </summary>
            <p className="mt-2 pl-4 text-xs">
              Container: flex gap-2 mt-2. Primary: px-3 py-1 rounded text-xs font-medium bg-gray-50
              text-gray-700 hover:bg-gray-200. Secondary: same but no background, just text color +
              hover.
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
                <CodeBlock.Title>NotificationCard.tsx</CodeBlock.Title>
                <CodeBlock.Content>{`export function NotificationCard() {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg
      border border-gray-200
      bg-white
      hover:shadow-sm transition-shadow">

      <div className="shrink-0 w-10 h-10 rounded-full
        bg-emerald-100
        flex items-center justify-center">
        <span className="text-emerald-600
          text-lg" aria-hidden="true">✓</span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-medium
            text-gray-900 truncate">
            Deployment successful
          </p>
          <span className="text-xs text-gray-400
            shrink-0">
            2m ago
          </span>
        </div>

        <p className="text-sm text-gray-500
          mt-0.5">
          Production build v2.4.1 deployed to us-west-2.
        </p>

        <div className="flex gap-2 mt-2">
          <button className="px-3 py-1 rounded text-xs
            font-medium bg-gray-50
            text-gray-700
            hover:bg-gray-200
            transition-colors">
            View logs
          </button>
          <button className="px-3 py-1 rounded text-xs
            font-medium text-gray-500
            hover:text-gray-700
            transition-colors">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}`}</CodeBlock.Content>
              </CodeBlock.Frame>
            </CodeBlock.Root>
          </div>
        </details>
      </ExampleCard>

      {/* ============================================================= */}
      {/* SOLO CHALLENGE */}
      {/* ============================================================= */}

      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800 space-y-2">
        <p className="font-medium">🏆 Exercise 2 — Solo Challenge (10 min)</p>
        <p>
          On your own this time. Build a pricing card from scratch. No step-by-step hints — just the
          goal and the starter code. Use what you learned.
        </p>
      </div>

      <ExampleCard
        title="Build This: Pricing Card"
        description="Recreate this pricing card. Pay attention to the 'Popular' badge positioning."
      >
        <div className="max-w-xs">
          <PricingCardAnswer />
        </div>
      </ExampleCard>

      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-800">
          Open{" "}
          <InlineCode variant="warning">src/pages/m3/styling-activity/PricingCard.tsx</InlineCode>{" "}
          and add Tailwind classes to match the goal above. Your live preview:
        </p>
      </div>

      <ExampleCard title="Your Progress" description="This updates live as you save the file.">
        <div className="max-w-xs">
          <PricingCard />
        </div>
      </ExampleCard>

      <ExampleCard title="Hints" description="Only if you're stuck.">
        <div className="space-y-2">
          <details className="text-sm text-gray-600">
            <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
              How do I position the "Popular" badge?
            </summary>
            <p className="mt-2 pl-4 text-xs">
              Make the outer card <InlineCode>relative</InlineCode>. Make the badge{" "}
              <InlineCode>absolute -top-3 left-4</InlineCode>.
            </p>
          </details>
          <details className="text-sm text-gray-600">
            <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
              How do I align "$29" and "/month"?
            </summary>
            <p className="mt-2 pl-4 text-xs">
              Use <InlineCode>flex items-baseline gap-1</InlineCode>. The price gets{" "}
              <InlineCode>text-4xl font-bold</InlineCode>, the period gets{" "}
              <InlineCode>text-sm text-gray-500</InlineCode>.
            </p>
          </details>
          <details className="text-sm text-gray-600">
            <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
              How do I make the button full width?
            </summary>
            <p className="mt-2 pl-4 text-xs">
              Add <InlineCode>w-full</InlineCode> to the button.
            </p>
          </details>
        </div>
      </ExampleCard>

      <ExampleCard title="Reference Solution" description="Expand when you're done.">
        <details className="text-sm text-gray-600">
          <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
            Show solution
          </summary>
          <div className="mt-3">
            <CodeBlock.Root>
              <CodeBlock.Frame>
                <CodeBlock.Title>PricingCard.tsx</CodeBlock.Title>
                <CodeBlock.Content>{`export function PricingCard() {
  const features = [
    "Unlimited projects",
    "Priority support",
    "Custom integrations",
    "Team analytics",
  ];

  return (
    <div className="rounded-xl border-2 border-indigo-500
      bg-white p-6 space-y-4 relative">

      <div className="absolute -top-3 left-4 px-3 py-0.5
        bg-indigo-600 text-white text-xs font-medium
        rounded-full">
        Popular
      </div>

      <div>
        <h3 className="text-lg font-semibold
          text-gray-900">Pro</h3>
        <p className="text-sm text-gray-500
         ">For growing teams</p>
      </div>

      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold
          text-gray-900">$29</span>
        <span className="text-sm text-gray-500">/month</span>
      </div>

      <ul className="space-y-2 text-sm
        text-gray-700">
        {features.map((feature) => (
          <li key={feature}
            className="flex items-center gap-2">
            <span className="text-emerald-500"
              aria-hidden="true">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button className="w-full py-2.5 rounded-lg
        bg-indigo-600 text-white text-sm font-medium
        hover:bg-indigo-700
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-indigo-500
        focus-visible:ring-offset-2 transition-colors">
        Get started
      </button>
    </div>
  );
}`}</CodeBlock.Content>
              </CodeBlock.Frame>
            </CodeBlock.Root>
          </div>
        </details>
      </ExampleCard>
    </div>
  );
}
