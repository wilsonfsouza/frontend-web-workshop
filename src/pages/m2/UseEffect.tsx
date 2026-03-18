import { useState, useEffect, useReducer } from "react";
import { ExampleCard } from "@/components/ExampleCard";
import { fetchUsers } from "@/data/users";
import type { User } from "@/data/users";

type FetchState = {
  users: User[];
  isLoading: boolean;
  error: string | null;
};

type FetchAction =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; users: User[] }
  | { type: "FETCH_ERROR"; error: string };

function fetchReducer(state: FetchState, action: FetchAction): FetchState {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, isLoading: true, error: null };
    case "FETCH_SUCCESS":
      return { users: action.users, isLoading: false, error: null };
    case "FETCH_ERROR":
      return { ...state, isLoading: false, error: action.error };
  }
}

export function UseEffect() {
  const [state, dispatch] = useReducer(fetchReducer, {
    users: [],
    isLoading: true,
    error: null,
  });
  const [refetchCount, setRefetchCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    dispatch({ type: "FETCH_START" });

    fetchUsers(800)
      .then((data) => {
        if (!cancelled) dispatch({ type: "FETCH_SUCCESS", users: data });
      })
      .catch((err) => {
        if (!cancelled) dispatch({ type: "FETCH_ERROR", error: err.message });
      });

    return () => {
      cancelled = true;
    };
  }, [refetchCount]);

  // Window resize tracker
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">useEffect</h2>
        <p className="text-gray-500 mt-1">
          Sync with something outside React — APIs, subscriptions, the DOM.
        </p>
      </div>

      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-sm text-emerald-800 space-y-2">
        <p>
          useEffect syncs your component with something outside React — APIs, event listeners, the
          DOM. Before reaching for it, ask: "Can I do this during rendering or in an event handler?"
          If yes, you don't need useEffect.
        </p>
      </div>

      <ExampleCard
        title="Data Fetching with Cleanup"
        description="Fetches users on mount. The cleanup function prevents state updates on unmounted components."
      >
        <div className="space-y-3">
          <button
            onClick={() => setRefetchCount((prev) => prev + 1)}
            className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Refetch
          </button>

          {state.isLoading && <p className="text-sm text-gray-500">Loading...</p>}
          {state.error && <p className="text-sm text-red-600">Error: {state.error}</p>}
          {!state.isLoading && !state.error && (
            <ul className="text-sm space-y-1">
              {state.users.slice(0, 5).map((user) => (
                <li key={user.id} className="text-gray-700">
                  {user.name} — {user.role} {user.active ? "✅" : "❌"}
                </li>
              ))}
            </ul>
          )}

          <div className="p-3 bg-amber-50 rounded text-sm text-amber-700">
            Before reaching for useEffect, ask: &quot;Can I do this during rendering or in an event
            handler instead?&quot; If yes, you don&apos;t need useEffect.
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Event Listener (window resize)"
        description="Subscribes to window resize on mount, cleans up on unmount."
      >
        <div className="space-y-2">
          <p className="text-sm font-mono text-emerald-600">Window width: {windowWidth}px</p>
          <p className="text-xs text-gray-500">
            Try resizing your browser window to see this update.
          </p>
        </div>
      </ExampleCard>
    </div>
  );
}
