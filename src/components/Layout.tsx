import { Outlet } from "react-router";
import { Navigation } from "@/components/Navigation";
import { useNavModules } from "@/hooks/useNavModules";
import { InstructorCard } from "@/components/InstructorCard";

export function Layout() {
  const navModules = useNavModules();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-gray-950">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Mobile nav */}
      <div className="md:hidden border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 shadow-sm">
        <details className="group">
          <summary className="flex items-center justify-between px-4 py-3 cursor-pointer list-none">
            <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Web Dev Workshop
            </span>
            <svg
              className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <nav
            aria-label="Workshop navigation"
            className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 max-h-[70vh] overflow-y-auto"
          >
            <Navigation {...navModules} />
            <div className="mt-4">
              <InstructorCard />
            </div>
          </nav>
        </details>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 shrink-0 border-r border-gray-200 dark:border-gray-800">
        <div className="flex-1 overflow-y-auto p-4">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Web Dev Workshop
          </h1>
          <nav aria-label="Workshop navigation">
            <Navigation {...navModules} />
          </nav>
        </div>

        <div className="shrink-0 p-4">
          <InstructorCard />
        </div>
      </aside>

      <main id="main-content" className="flex-1 p-4 md:p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
