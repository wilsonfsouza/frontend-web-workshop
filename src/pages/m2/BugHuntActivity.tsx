import { useState, useEffect, useRef } from "react";
import { ExampleCard } from "@/components/ExampleCard";
import { InlineCode } from "@/components/InlineCode";
import { users } from "@/data/users";

// =============================================================================
// Bug Hunt Activity
//
// This component works, but something about it isn't quite right.
// Look at how the filtering is implemented and think about:
// - How many times does the component render per keystroke?
// - Is all the state here necessary?
// - Could this be simpler?
// =============================================================================

/* eslint-disable react-hooks/refs */

export function BugHuntActivity() {
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const renderCount = useRef(0);
  renderCount.current += 1;

  useEffect(() => {
    setFilteredUsers(
      users.filter(
        (user) =>
          user.name.toLowerCase().includes(query.toLowerCase()) ||
          user.role.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  }, [query]);

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Activity: Bug Hunt</h2>
        <p className="text-gray-500 mt-1">
          This user search filter works, but it has a subtle problem. Can you find it?
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg">
        <p className="text-sm text-amber-800 dark:text-amber-200">
          Open <InlineCode variant="warning">src/pages/m2/BugHuntActivity.tsx</InlineCode> and look
          at how the filtering is implemented. What's wrong with it? How would you fix it?
        </p>
      </div>

      <ExampleCard title="User Search Filter" description="Type to filter the user list.">
        <div className="space-y-3">
          <label htmlFor="bug-hunt-search" className="sr-only">
            Search users
          </label>
          <input
            id="bug-hunt-search"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name or role..."
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-sm"
          />

          <div className="text-xs text-gray-500 flex gap-4">
            <span>Results: {filteredUsers.length}</span>
            <span>Render count: {renderCount.current}</span>
          </div>

          <ul className="space-y-2">
            {filteredUsers.map((user) => (
              <li
                key={user.id}
                className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-900 rounded text-sm"
              >
                <div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{user.name}</span>
                  <span className="text-gray-500 ml-2">— {user.role}</span>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    user.active
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                      : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                  }`}
                >
                  {user.active ? "Active" : "Inactive"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </ExampleCard>

      <ExampleCard title="Hints" description="Expand when you're ready.">
        <details className="text-sm text-gray-600 dark:text-gray-400">
          <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
            Hint 1: What's the anti-pattern?
          </summary>
          <p className="mt-2 pl-4">
            The filtered list is stored in its own useState. But it can be calculated from query +
            users. It's derived state.
          </p>
        </details>
        <details className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
            Hint 2: What's the consequence?
          </summary>
          <p className="mt-2 pl-4">
            Every keystroke triggers setQuery (render 1) then the useEffect fires setFilteredUsers
            (render 2). That's two renders per keystroke instead of one.
          </p>
        </details>
        <details className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          <summary className="cursor-pointer text-indigo-600 hover:text-indigo-700">
            Hint 3: The fix
          </summary>
          <p className="mt-2 pl-4">
            Remove the filteredUsers state and the useEffect. Instead, derive it:{" "}
            <InlineCode>const filteredUsers = users.filter(...)</InlineCode>. One render per
            keystroke, no stale data risk.
          </p>
        </details>
      </ExampleCard>
    </div>
  );
}
