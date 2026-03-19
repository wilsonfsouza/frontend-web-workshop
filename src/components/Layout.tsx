import { Outlet, NavLink } from "react-router";
import { Navigation } from "@/components/Navigation";
import { useNavModules } from "@/hooks/useNavModules";
import { InstructorCard } from "@/components/InstructorCard";

export function Layout() {
  const navModules = useNavModules();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Mobile nav */}
      <div className="md:hidden bg-white">
        <div className="px-4 py-3 text-center">
          <NavLink to="/" className="text-lg font-semibold text-gray-900 hover:text-indigo-700 transition-colors">
            Web Dev Workshop
          </NavLink>
        </div>
        <details className="group">
          <summary className="flex justify-center px-4 py-2 cursor-pointer list-none">
            <span className="inline-flex items-center justify-between w-full max-w-[400px] gap-1.5 px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors min-h-[44px]">
              Modules
              <svg
                className="w-3 h-3 group-open:rotate-180 transition-transform"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <nav
            aria-label="Workshop navigation"
            className="px-4 py-3 border-t border-gray-200 max-h-[70vh] overflow-y-auto"
          >
            <Navigation {...navModules} />
            <div className="mt-4">
              <InstructorCard />
            </div>
          </nav>
        </details>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 shrink-0 border-r border-gray-200">
        <div className="flex-1 overflow-y-auto p-4">
          <NavLink to="/" className="block text-lg font-semibold text-gray-900 mb-4 hover:text-indigo-700 transition-colors">
            Web Dev Workshop
          </NavLink>
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
