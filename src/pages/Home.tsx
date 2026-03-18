export function Home() {
  return (
    <div className="max-w-2xl space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        Web Application Development Workshop
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        Welcome! This app is your interactive slide deck for the training series. Each page is a
        self-contained demo you can walk through during the presentation or explore on your own.
      </p>

      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800">
          <h3 className="font-semibold text-indigo-900 dark:text-indigo-200">
            Module 1 — What This Code Actually Means?
          </h3>
          <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-1">
            Variables, functions, expressions, scope, TypeScript basics, and a hands-on Team
            Dashboard Helper activity.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800">
          <h3 className="font-semibold text-emerald-900 dark:text-emerald-200">
            Module 2 — Reading and Modifying React Apps
          </h3>
          <p className="text-sm text-emerald-700 dark:text-emerald-300 mt-1">
            UI Blueprint activity, component anatomy, common hooks (useState, useRef, useEffect,
            useReducer, useMemo/useCallback), custom hooks, and a Bug Hunt activity.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-violet-50 dark:bg-violet-950 border border-violet-200 dark:border-violet-800">
          <h3 className="font-semibold text-violet-900 dark:text-violet-200">
            Module 3 — Make It Pretty with Tailwind CSS
          </h3>
          <p className="text-sm text-violet-700 dark:text-violet-300 mt-1">
            Utility-first CSS, the naming pattern, layout with flexbox, responsive prefixes, dark
            mode, and activities.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
          <h3 className="font-semibold text-amber-900 dark:text-amber-200">
            Module 4 — Where does this state belong?
          </h3>
          <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
            Evolution of the web (traditional, SPA, SSR), state management strategies (local,
            global, HTTP, URL, server), and a State Management Decisions activity.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-rose-50 dark:bg-rose-950 border border-rose-200 dark:border-rose-800">
          <h3 className="font-semibold text-rose-900 dark:text-rose-200">
            Module 5 — Reading and Modifying Next.js Apps
          </h3>
          <p className="text-sm text-rose-700 dark:text-rose-300 mt-1">
            File-based routing, special files, dynamic routes, server vs client components, and an
            interactive Server or Client? activity.
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-500">
        Use the sidebar to navigate between modules. Activities include quizzes, reveal-to-check
        exercises, and TODO starters for participants.
      </p>
    </div>
  );
}
