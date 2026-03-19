import { useReducer } from "react";
import { ExampleCard } from "@/components/ExampleCard";

type WizardState = { open: boolean; step: number };
type WizardAction = { type: "OPEN" } | { type: "NEXT" } | { type: "PREV" } | { type: "CLOSE" };

function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case "OPEN":
      return { open: true, step: 0 };
    case "NEXT":
      return { ...state, step: state.step + 1 };
    case "PREV":
      return { ...state, step: Math.max(0, state.step - 1) };
    case "CLOSE":
      return { open: false, step: 0 };
  }
}

const steps = [
  { title: "Welcome", content: "This wizard walks you through a multi-step flow." },
  {
    title: "Details",
    content: "Each step dispatches an action — the reducer decides the next state.",
  },
  { title: "Confirm", content: "All state transitions are centralized in one function." },
];

export function UseReducer() {
  const [state, dispatch] = useReducer(wizardReducer, { open: false, step: 0 });

  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">useReducer</h2>
        <p className="text-gray-500 mt-1">
          Manage coupled state transitions — when multiple values always change together.
        </p>
      </div>

      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-sm text-emerald-800 space-y-2">
        <p>
          useReducer works like useState, but instead of updating the value directly, you describe
          what happened (an "action") and a reducer function decides how the state should change.
          Useful when multiple state values always change together.
        </p>
        <p>
          Rule of thumb: if you're calling two or more setState functions in the same handler,
          consider a reducer.
        </p>
      </div>

      <ExampleCard
        title="Wizard / Stepper"
        description="open + step are coupled. A reducer keeps them in sync."
      >
        <div className="space-y-4">
          {!state.open ? (
            <button
              onClick={() => dispatch({ type: "OPEN" })}
              className="px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
            >
              Start Wizard
            </button>
          ) : (
            <div className="border border-gray-200 rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  Step {state.step + 1} of {steps.length}
                </span>
                <div className="flex gap-1">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i <= state.step ? "bg-indigo-600" : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">{steps[state.step].title}</h4>
                <p className="text-sm text-gray-600 mt-1">{steps[state.step].content}</p>
              </div>

              <div className="flex gap-2">
                {state.step > 0 && (
                  <button
                    onClick={() => dispatch({ type: "PREV" })}
                    className="px-3 py-1.5 text-sm bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                )}
                {state.step < steps.length - 1 ? (
                  <button
                    onClick={() => dispatch({ type: "NEXT" })}
                    className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch({ type: "CLOSE" })}
                    className="px-3 py-1.5 text-sm bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors"
                  >
                    Done
                  </button>
                )}
                <button
                  onClick={() => dispatch({ type: "CLOSE" })}
                  className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="p-3 bg-gray-50 rounded font-mono text-sm overflow-x-auto">
            <p className="text-gray-500">// Current state</p>
            <p>{JSON.stringify(state)}</p>
          </div>
        </div>
      </ExampleCard>
    </div>
  );
}
