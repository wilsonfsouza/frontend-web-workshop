import { ExampleCard } from "@/components/ExampleCard";
import { CodeBlock } from "@/components/CodeBlock";
import { InlineCode } from "@/components/InlineCode";
import { Table } from "@/components/Table";

export function StateManagement() {
  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          State Management Strategies
        </h2>
        <p className="text-gray-500 mt-1">
          Your app has different kinds of state. The trick is recognizing which kind you&apos;re
          dealing with and picking the simplest approach that works.
        </p>
      </div>

      <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-indigo-800">
        <p>
          Five categories: local, global, HTTP, URL, and server state. Each has a tool that fits.
        </p>
      </div>

      <ExampleCard
        title="1. Local State"
        description="State that only one component cares about. A form input, a toggle, a counter."
      >
        <CodeBlock.Root>
          <CodeBlock.Frame>
            <CodeBlock.Title>SearchBar.tsx</CodeBlock.Title>
            <CodeBlock.Content>{`function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
}`}</CodeBlock.Content>
          </CodeBlock.Frame>
        </CodeBlock.Root>
        <div className="mt-3 p-3 bg-gray-50 rounded text-xs text-gray-500 space-y-1">
          <p>
            <span className="font-medium text-gray-900">When to use:</span> The
            state is only relevant to this component (and maybe its direct children via props).
          </p>
          <p>
            <span className="font-medium text-gray-900">Common mistake:</span>{" "}
            Lifting state up &quot;just in case.&quot; If only one component reads and writes the
            value, keep it local. You can always lift it later.
          </p>
        </div>
      </ExampleCard>

      <ExampleCard
        title="2. Global State"
        description="When multiple components across different parts of your tree need the same data."
      >
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-900 mb-2">
              Context API (built into React)
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Context lets you pass data through the component tree without prop drilling. It&apos;s
              a delivery mechanism, not a state manager. You pair it with useState or useReducer.
            </p>
            <CodeBlock.Root>
              <CodeBlock.Frame>
                <CodeBlock.Title>AuthContext.tsx</CodeBlock.Title>
                <CodeBlock.Content>{`const AuthContext = createContext<AuthContextType | null>(null);
interface AuthProviderProps {
  children: React.ReactNode;
}
function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<string | null>(null);
  const login = useCallback((name: string) => setUser(name), []);
  const logout = useCallback(() => setUser(null), []);
  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook for clean access
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}`}</CodeBlock.Content>
              </CodeBlock.Frame>
            </CodeBlock.Root>
            <div className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800">
              <span className="font-medium">Re-render caveat:</span> Every component that calls
              useContext re-renders when the context value changes, even if it only uses a small
              piece. Fine for theme/auth that changes rarely. For frequently updating state,
              consider Zustand.
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-900 mb-2">
              Zustand (lightweight external store)
            </p>
            <p className="text-sm text-gray-600 mb-2">
              A small (1 KB), unopinionated state library. No providers, no boilerplate. Components
              subscribe to just the slices they need.
            </p>
            <CodeBlock.Root>
              <CodeBlock.Frame>
                <CodeBlock.Title>cartStore.ts</CodeBlock.Title>
                <CodeBlock.Content>{`import { create } from "zustand";

const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => set((s) => ({ items: [...s.items, item] })),
  removeItem: (item) => set((s) => ({ items: s.items.filter((i) => i !== item) })),
  clear: () => set({ items: [] }),
}));

// Component subscribes to only what it needs
function CartCount() {
  const count = useCartStore((s) => s.items.length);
  return <span>{count} items in cart</span>;
}`}</CodeBlock.Content>
              </CodeBlock.Frame>
            </CodeBlock.Root>
          </div>

          <Table.Root size="xs">
            <Table.Head>
              <Table.HeaderRow>
                <Table.Header />
                <Table.Header>Context API</Table.Header>
                <Table.Header>Zustand</Table.Header>
              </Table.HeaderRow>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell className="font-medium text-gray-900">
                  Setup
                </Table.Cell>
                <Table.Cell>Built-in, no install</Table.Cell>
                <Table.Cell>npm install zustand (1 KB)</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-medium text-gray-900">
                  Re-renders
                </Table.Cell>
                <Table.Cell>All consumers on any change</Table.Cell>
                <Table.Cell>Only when selected slice changes</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-medium text-gray-900">
                  Best for
                </Table.Cell>
                <Table.Cell>Low-frequency values (theme, auth)</Table.Cell>
                <Table.Cell>Frequently updated state, many consumers</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </ExampleCard>

      <ExampleCard
        title="3. HTTP State (Server Cache)"
        description="Data that lives on a server and you fetch over HTTP. It has its own lifecycle: loading, fresh, stale, error."
      >
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-900 mb-2">
              The useState + useEffect approach
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Works for simple cases, but you quickly end up re-inventing caching, deduplication,
              and retry logic.
            </p>
            <CodeBlock.Root>
              <CodeBlock.Frame>
                <CodeBlock.Title>UserList.tsx (manual)</CodeBlock.Title>
                <CodeBlock.Content>{`function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <ul>{users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
}`}</CodeBlock.Content>
              </CodeBlock.Frame>
            </CodeBlock.Root>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-900 mb-2">
              The TanStack Query approach
            </p>
            <CodeBlock.Root>
              <CodeBlock.Frame>
                <CodeBlock.Title>UserList.tsx (React Query)</CodeBlock.Title>
                <CodeBlock.Content>{`import { useQuery } from "@tanstack/react-query";

function UserList() {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("/api/users").then((res) => res.json()),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <ul>{users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
}`}</CodeBlock.Content>
              </CodeBlock.Frame>
            </CodeBlock.Root>
            <div className="mt-2 p-3 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-800 space-y-1">
              <p className="font-medium">What you get for free:</p>
              <p>
                Caching, background refetching, request deduplication, automatic retries, and
                garbage collection of unused cache entries.
              </p>
            </div>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="4. URL State"
        description="State that belongs in the address bar. If it should survive a refresh or a shared link, put it in the URL."
      >
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Imagine an e-commerce page where the user picks a size and color. If those selections
            live in useState, sharing the link loses them. The URL should carry the user&apos;s
            choices: <InlineCode>/products/tee?size=L&amp;color=blue</InlineCode>
          </p>
          <div>
            <p className="text-xs font-semibold text-gray-900 mb-2">
              nuqs: URL state that feels like useState
            </p>
            <CodeBlock.Root>
              <CodeBlock.Frame>
                <CodeBlock.Title>ProductFilters.tsx</CodeBlock.Title>
                <CodeBlock.Content>{`"use client";
import { useQueryState, parseAsString } from "nuqs";

function ProductFilters() {
  const [size, setSize] = useQueryState("size", parseAsString.withDefault("S"));
  const [color, setColor] = useQueryState("color", parseAsString.withDefault("black"));

  return (
    <>
      <SizePicker value={size} onChange={setSize} />
      <ColorPicker value={color} onChange={setColor} />
    </>
  );
}`}</CodeBlock.Content>
              </CodeBlock.Frame>
            </CodeBlock.Root>
          </div>
          <div className="p-3 bg-gray-50 rounded text-xs text-gray-500">
            <span className="font-medium text-gray-900">
              Good candidates for URL state:
            </span>{" "}
            filters, search queries, sorting, pagination, product variants.
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="5. Server State (Next.js)"
        description="Data fetched on the server before the page reaches the browser. No loading spinner needed."
      >
        <div className="space-y-4">
          <CodeBlock.Root>
            <CodeBlock.Frame>
              <CodeBlock.Title>app/users/page.tsx</CodeBlock.Title>
              <CodeBlock.Content>{`// This runs on the server — no useState, no useEffect
async function UsersPage() {
  const res = await fetch("https://api.example.com/users");
  const users: User[] = await res.json();

  return (
    <ul>
      {users.map((u) => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}`}</CodeBlock.Content>
            </CodeBlock.Frame>
          </CodeBlock.Root>
          <p className="text-sm text-gray-600">
            The data is already there when the HTML arrives. The component never ships its
            JavaScript to the client. When you need interactivity, mark a component with &quot;use
            client&quot; and pass server data as props.
          </p>
          <Table.Root size="xs">
            <Table.Head>
              <Table.HeaderRow>
                <Table.Header />
                <Table.Header>HTTP State</Table.Header>
                <Table.Header>Server State</Table.Header>
              </Table.HeaderRow>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell className="font-medium text-gray-900">
                  Runs
                </Table.Cell>
                <Table.Cell>Client (browser)</Table.Cell>
                <Table.Cell>Server (at request/build time)</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-medium text-gray-900">
                  Loading
                </Table.Cell>
                <Table.Cell>You manage it</Table.Cell>
                <Table.Cell>Data is ready on arrival</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-medium text-gray-900">
                  Best for
                </Table.Cell>
                <Table.Cell>Dynamic, user-driven data</Table.Cell>
                <Table.Cell>Page content, SEO-critical data</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Decision Guide"
        description="Walk through this when you're unsure where to put state."
      >
        <CodeBlock.Root>
          <CodeBlock.Frame>
            <CodeBlock.Content>{`Is this state used by only one component?
  → Yes → Local state (useState / useReducer)

Is it shared across many components?
  → Changes rarely (theme, auth)? → Context API
  → Changes often (cart, notifications)? → Zustand

Should it be shareable via URL (filters, search, sorting)?
  → Yes → URL state (nuqs or useSearchParams)

Is it data from an API?
  → Can it be fetched on the server before the page loads?
      → Yes → Server Component (Next.js)
      → No (depends on user interaction) → TanStack Query

Not sure yet?
  → Start with the simplest option. Refactor when the pain shows up.`}</CodeBlock.Content>
          </CodeBlock.Frame>
        </CodeBlock.Root>
      </ExampleCard>

      <ExampleCard title="Quick Reference">
        <Table.Root size="xs">
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header>Type</Table.Header>
              <Table.Header>Tool</Table.Header>
              <Table.Header>Best for</Table.Header>
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Local</Table.Cell>
              <Table.Cell className="font-mono">useState / useReducer</Table.Cell>
              <Table.Cell>Single-component UI state</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Global (simple)</Table.Cell>
              <Table.Cell className="font-mono">Context API</Table.Cell>
              <Table.Cell>Theme, auth, locale</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Global (scalable)</Table.Cell>
              <Table.Cell className="font-mono">Zustand</Table.Cell>
              <Table.Cell>Cart, notifications, complex UI</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>HTTP</Table.Cell>
              <Table.Cell className="font-mono">TanStack Query</Table.Cell>
              <Table.Cell>API data with caching</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>URL</Table.Cell>
              <Table.Cell className="font-mono">nuqs</Table.Cell>
              <Table.Cell>Filters, search, sorting</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Server</Table.Cell>
              <Table.Cell className="font-mono">Server Components</Table.Cell>
              <Table.Cell>SEO content, initial page data</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </ExampleCard>
    </div>
  );
}
