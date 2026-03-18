import { useState } from "react";
import { ExampleCard } from "@/components/ExampleCard";
import { CodeBlock } from "@/components/CodeBlock";
import { steps } from "./data";
import { ProfileCard } from "./ProfileCard";
import { generateCode } from "./generateCode";

export function UglyToPretty() {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">From Ugly to Pretty</h2>
        <p className="text-gray-500 mt-1">
          Watch a profile card transform step by step. Each step adds one Tailwind concept.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">{step.label}</span>
          <span className="text-xs text-gray-500">
            {currentStep + 1} / {steps.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-indigo-600 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Step buttons */}
        <div className="flex gap-2 flex-wrap">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setCurrentStep(step.id)}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                currentStep === step.id
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200:bg-gray-700"
              }`}
            >
              {step.id}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep((currentStep) => Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>
        <button
          onClick={() =>
            setCurrentStep((currentStep) => Math.min(steps.length - 1, currentStep + 1))
          }
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </div>

      <ExampleCard title={step.label} description={step.description}>
        {step.concepts && (
          <div className="flex flex-wrap gap-2 mb-4">
            {step.concepts.map((concept) => (
              <code
                key={concept}
                className="px-2 py-0.5 rounded text-xs font-mono bg-indigo-100 text-indigo-800"
              >
                {concept}
              </code>
            ))}
          </div>
        )}

        <div className="p-4 bg-gray-100 rounded-lg">
          <ProfileCard step={step} />
        </div>
      </ExampleCard>

      <ExampleCard
        title="Component Code"
        description="The full JSX at this step. New classes are highlighted by their presence."
      >
        <CodeBlock.Root>
          <CodeBlock.Frame>
            <CodeBlock.Title>ProfileCard.tsx</CodeBlock.Title>
            <CodeBlock.Content>{generateCode(step)}</CodeBlock.Content>
          </CodeBlock.Frame>
        </CodeBlock.Root>
      </ExampleCard>
    </div>
  );
}
