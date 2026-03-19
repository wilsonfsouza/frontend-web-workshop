import { useState } from "react";
import { ExampleCard } from "@/components/ExampleCard";
import { CodeBlock } from "@/components/CodeBlock";
import { InlineCode } from "@/components/InlineCode";

const BRAND_COLORS = [
  { name: "brand-500", className: "bg-brand-500" },
  { name: "brand-600", className: "bg-brand-600" },
  { name: "brand-700", className: "bg-brand-700" },
  { name: "sunset-400", className: "bg-sunset-400" },
  { name: "sunset-500", className: "bg-sunset-500" },
  { name: "sunset-600", className: "bg-sunset-600" },
];

export function TailwindCustomization() {
  const [animKey, setAnimKey] = useState(0);

  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Customizing Tailwind</h2>
        <p className="text-gray-500 mt-1">
          Extend colors, fonts, and animations using <InlineCode>@theme</InlineCode> and{" "}
          <InlineCode>@layer</InlineCode>.
        </p>
      </div>

      <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-indigo-800 space-y-2">
        <p>
          Tailwind v4 uses CSS-native configuration. Instead of a JS config file, you define custom
          values directly in your CSS using <InlineCode variant="accent">@theme</InlineCode> for
          design tokens and <InlineCode variant="accent">@layer</InlineCode> for base/component
          styles.
        </p>
      </div>

      {/* ---- @theme ---- */}
      <ExampleCard
        title="@theme — Design Tokens"
        description="Define custom colors, fonts, spacing, and animations that become Tailwind utilities."
      >
        <div className="space-y-4">
          <CodeBlock.Root>
            <CodeBlock.Frame>
              <CodeBlock.Title>index.css</CodeBlock.Title>
              <CodeBlock.Content>{`@import "tailwindcss";

@theme {
  /* Custom colors → bg-brand-500, text-sunset-400, etc. */
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-sunset-400: #fb923c;
  --color-sunset-500: #f97316;

  /* Custom font family → font-display */
  --font-display: "Georgia", serif;

  /* Custom animation → animate-fade-in */
  --animate-fade-in: fade-in 0.5s ease-out;

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
}`}</CodeBlock.Content>
            </CodeBlock.Frame>
          </CodeBlock.Root>
          <p className="text-xs text-gray-500">
            Everything in <InlineCode>@theme</InlineCode> becomes a utility class automatically. The
            naming convention maps directly: <InlineCode>--color-brand-500</InlineCode> →{" "}
            <InlineCode>bg-brand-500</InlineCode>, <InlineCode>text-brand-500</InlineCode>, etc.
          </p>
        </div>
      </ExampleCard>

      {/* ---- Custom Colors ---- */}
      <ExampleCard
        title="Custom Colors in Action"
        description="These buttons use our custom brand and sunset color tokens."
      >
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-lg bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors">
              Brand Primary
            </button>
            <button className="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-colors">
              Brand Dark
            </button>
            <button className="px-4 py-2 rounded-lg bg-sunset-500 text-white text-sm font-medium hover:bg-sunset-600 transition-colors">
              Sunset
            </button>
          </div>
          <div className="flex gap-3">
            {BRAND_COLORS.map((card) => (
              <div key={card.name} className="text-center">
                <div className={`w-10 h-10 rounded-lg ${card.className}`} />
                <p className="text-xs text-gray-500 mt-1">{card.name}</p>
              </div>
            ))}
          </div>
          <CodeBlock.Root>
            <CodeBlock.Frame>
              <CodeBlock.Content>{`<button className="bg-brand-500 hover:bg-brand-600">
  Brand Primary
</button>

<button className="bg-sunset-500 hover:bg-sunset-600">
  Sunset
</button>`}</CodeBlock.Content>
            </CodeBlock.Frame>
          </CodeBlock.Root>
        </div>
      </ExampleCard>

      {/* ---- Custom Fonts ---- */}
      <ExampleCard
        title="Custom Fonts"
        description="Register a font family in @theme and use it with the font- utility."
      >
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg space-y-2">
            <p className="font-display text-xl text-gray-900">
              This text uses <InlineCode>font-display</InlineCode> (Georgia, serif)
            </p>
            <p className="text-sm text-gray-600">
              And this is the default sans-serif font for comparison.
            </p>
          </div>
          <CodeBlock.Root>
            <CodeBlock.Frame>
              <CodeBlock.Title>index.css</CodeBlock.Title>
              <CodeBlock.Content>{`@theme {
  --font-display: "Georgia", serif;
}`}</CodeBlock.Content>
            </CodeBlock.Frame>
          </CodeBlock.Root>
          <CodeBlock.Root>
            <CodeBlock.Frame>
              <CodeBlock.Title>component.tsx</CodeBlock.Title>
              <CodeBlock.Content>{`<h1 className="font-display text-2xl">
  Elegant Heading
</h1>`}</CodeBlock.Content>
            </CodeBlock.Frame>
          </CodeBlock.Root>
        </div>
      </ExampleCard>

      {/* ---- Custom Animations ---- */}
      <ExampleCard
        title="Custom Animations"
        description="Define keyframes in @theme and they become animate- utilities. Click replay to see them again."
      >
        <div className="space-y-4">
          <button
            onClick={() => setAnimKey((key) => key + 1)}
            className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Replay animations
          </button>
          <div key={animKey} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg text-center animate-fade-in">
              <p className="text-2xl mb-1">👋</p>
              <p className="text-xs font-mono text-gray-500">animate-fade-in</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center animate-slide-up">
              <p className="text-2xl mb-1">📦</p>
              <p className="text-xs font-mono text-gray-500">animate-slide-up</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center animate-bounce-in">
              <p className="text-2xl mb-1">🎉</p>
              <p className="text-xs font-mono text-gray-500">animate-bounce-in</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-2xl mb-1 animate-pulse-slow">💡</p>
              <p className="text-xs font-mono text-gray-500">animate-pulse-slow</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-2xl mb-1 animate-spin-slow">⚙️</p>
              <p className="text-xs font-mono text-gray-500">animate-spin-slow</p>
            </div>
            <div key={`wiggle-${animKey}`} className="p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-2xl mb-1 animate-wiggle">🔔</p>
              <p className="text-xs font-mono text-gray-500">animate-wiggle</p>
            </div>
          </div>
          <CodeBlock.Root>
            <CodeBlock.Frame>
              <CodeBlock.Title>index.css</CodeBlock.Title>
              <CodeBlock.Content>{`@theme {
  --animate-fade-in: fade-in 0.5s ease-out;
  --animate-slide-up: slide-up 0.4s ease-out;
  --animate-bounce-in: bounce-in 0.6s ease-out;

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slide-up {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes bounce-in {
    0% { opacity: 0; transform: scale(0.3); }
    50% { opacity: 1; transform: scale(1.05); }
    70% { transform: scale(0.9); }
    100% { transform: scale(1); }
  }
}`}</CodeBlock.Content>
            </CodeBlock.Frame>
          </CodeBlock.Root>
        </div>
      </ExampleCard>

      {/* ---- @layer ---- */}
      <ExampleCard
        title="@layer — Base & Component Styles"
        description="Use @layer to add global base styles or reusable component patterns."
      >
        <div className="space-y-4">
          <CodeBlock.Root>
            <CodeBlock.Frame>
              <CodeBlock.Title>index.css</CodeBlock.Title>
              <CodeBlock.Content>{`/* Base styles apply globally */
@layer base {
  button {
    cursor: pointer;
  }

  *:focus-visible {
    outline: 2px solid #6366f1;
    outline-offset: 2px;
  }

  /* Respect reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
}

/* Component styles for reusable patterns */
@layer components {
  .btn-primary {
    @apply px-4 py-2 rounded-lg bg-indigo-600
      text-white text-sm font-medium
      hover:bg-indigo-700 transition-colors;
  }
}`}</CodeBlock.Content>
            </CodeBlock.Frame>
          </CodeBlock.Root>
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800 space-y-2">
            <p>
              <InlineCode variant="warning">@layer base</InlineCode> — global defaults (resets,
              focus styles, typography). Applied to all elements.
            </p>
            <p>
              <InlineCode variant="warning">@layer components</InlineCode> — reusable class patterns
              using <InlineCode variant="warning">@apply</InlineCode>. Use sparingly — only when a
              pattern repeats 3+ times.
            </p>
            <p>
              Prefer utility classes in JSX over <InlineCode variant="warning">@apply</InlineCode>.
              The whole point of Tailwind is co-locating styles with markup.
            </p>
          </div>
        </div>
      </ExampleCard>

      {/* ---- Animation Best Practices ---- */}
      <ExampleCard
        title="Animation Best Practices"
        description="Keep animations smooth and accessible."
      >
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-start gap-3">
            <span className="text-emerald-500 shrink-0" aria-hidden="true">
              ✓
            </span>
            <p>
              Animate only <InlineCode>transform</InlineCode> and <InlineCode>opacity</InlineCode> —
              these are GPU-accelerated and don&apos;t trigger layout recalculation.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-emerald-500 shrink-0" aria-hidden="true">
              ✓
            </span>
            <p>
              Always respect <InlineCode>prefers-reduced-motion</InlineCode>. Wrap animation
              overrides in a <InlineCode>@media (prefers-reduced-motion: reduce)</InlineCode> block.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-500 shrink-0" aria-hidden="true">
              ✗
            </span>
            <p>
              Avoid animating <InlineCode>width</InlineCode>, <InlineCode>height</InlineCode>,{" "}
              <InlineCode>top</InlineCode>, <InlineCode>left</InlineCode>, or{" "}
              <InlineCode>margin</InlineCode> — these trigger expensive layout recalculations.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-500 shrink-0" aria-hidden="true">
              ✗
            </span>
            <p>
              Avoid using <InlineCode>transition: all</InlineCode>. Explicitly list the properties
              being transitioned.
            </p>
          </div>
        </div>
      </ExampleCard>
    </div>
  );
}
