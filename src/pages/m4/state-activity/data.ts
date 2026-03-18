export interface Scenario {
  id: number;
  title: string;
  description: string;
  details: string[];
  answer: string;
  reasoning: string;
  note?: string;
}

export const SCENARIOS: Scenario[] = [
  {
    id: 0,
    title: "E-commerce Product Filters (Example)",
    description:
      "A product listing page with category, price range, sort order, and search filters. Users should be able to bookmark filtered results, share links, and use browser back/forward.",
    details: [],
    answer: "URL state (nuqs / useSearchParams)",
    reasoning:
      "Filters need to be shareable, bookmarkable, and work with browser navigation. URL state makes the filters part of the page's identity.",
    note: undefined,
  },
  {
    id: 1,
    title: "Dashboard Data Table",
    description:
      "An analytics dashboard with a data table. It has filters (date range, role, status), sorting, and pagination. Users should be able to bookmark and share specific views.",
    details: [],
    answer: "URL state (nuqs) + HTTP state (TanStack Query)",
    reasoning:
      "Filters, sorting, and pagination belong in the URL for shareability. The actual table data comes from an API, so TanStack Query fetches it based on the URL params.",
    note: "URL params like ?status=active&sort=date&page=2 trigger a TanStack Query that fetches the filtered data.",
  },
  {
    id: 2,
    title: "Shopping Cart",
    description:
      "A shopping cart that appears in the header (item count), a sidebar drawer (full contents), and the checkout page (items and totals). Updates frequently as users add/remove items.",
    details: [],
    answer: "Global state (Zustand)",
    reasoning:
      "Multiple components need cart data, and it updates frequently. Zustand's selector-based subscriptions prevent unnecessary re-renders. Context would cause all consumers to re-render on every change.",
    note: undefined,
  },
  {
    id: 3,
    title: "Modal Toggle",
    description:
      'A "Delete Account" button that opens a confirmation modal with open/closed state, a checkbox for "I understand this is permanent," and Confirm/Cancel buttons. Only the button and modal need this state.',
    details: [],
    answer: "Local state (useState)",
    reasoning:
      "The modal's open/closed state is only relevant to this specific UI interaction. No other component needs to know if the modal is open. Keep it local.",
    note: undefined,
  },
  {
    id: 4,
    title: "User Dashboard Data",
    description:
      "A dashboard showing recent orders, recommended products, and account balance from three different API endpoints. Multiple widgets need the orders data. Data should be cached and refetched every 30 seconds.",
    details: [],
    answer: "HTTP state (TanStack Query)",
    reasoning:
      "Server data with caching, refetching, and deduplication needs. Multiple widgets can share the cached orders data without duplicate requests.",
    note: undefined,
  },
  {
    id: 5,
    title: "Blog Post Content",
    description:
      "A blog where each post page shows title, author, date, content, related posts, and comments. The post content is static and critical for SEO.",
    details: [],
    answer: "Server state (Server Components)",
    reasoning:
      "Static content critical for SEO should be rendered on the server. No loading states needed, and the HTML arrives ready to display.",
    note: undefined,
  },
  {
    id: 6,
    title: "Accordion Component Library",
    description:
      "A reusable accordion for your design system. Multiple items can be open at once. AccordionItem, AccordionHeader, and AccordionContent are separate components that need to share open/close state, but only within that accordion instance.",
    details: [],
    answer: "Global state (Context API)",
    reasoning:
      "Multiple child components need shared state scoped to just this accordion instance. Context avoids prop drilling and keeps the API clean. Updates are infrequent (only on expand/collapse).",
    note: "This is the compound component pattern: an AccordionProvider wraps the children.",
  },
  {
    id: 7,
    title: "File Upload Manager",
    description:
      "A file upload widget with FileDropzone, FileList, UploadProgress, and UploadButton components. They share file list, per-file progress, and add/remove functions. The widget is used in several places, each with isolated state.",
    details: [],
    answer: "Global state (Context API)",
    reasoning:
      "Multiple child components coordinate around shared upload state, but each widget instance is isolated. Context provides clean composition without prop drilling. Updates during upload aren't frequent enough to need Zustand.",
    note: "Wrap the upload widget in an UploadProvider. Each instance gets its own context.",
  },
];

export const OPTIONS = [
  "Local state (useState / useReducer)",
  "Global state (Context API)",
  "Global state (Zustand)",
  "HTTP state (TanStack Query)",
  "URL state (nuqs / useSearchParams)",
  "Server state (Server Components)",
];

export const OPTION_COLORS: Record<string, string> = {
  "Local state (useState / useReducer)":
    "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
  "Global state (Context API)":
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Global state (Zustand)": "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
  "HTTP state (TanStack Query)":
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
  "URL state (nuqs / useSearchParams)":
    "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  "Server state (Server Components)":
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
};
