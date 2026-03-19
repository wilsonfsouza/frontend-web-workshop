export type NavLinkItem = { label: string; to: string };
export type NavSubGroup = { subheading: string; items: NavLinkItem[] };
export type NavGroup = { heading: string; items: (NavLinkItem | NavSubGroup)[] };
export type NavItem = NavLinkItem | NavGroup;

export const navItems: NavItem[] = [
  {
    heading: "Module 1: What This Code Actually Means?",
    items: [
      {
        subheading: "JavaScript 101",
        items: [
          { label: "Variables & Types", to: "/m1/variables" },
          { label: "Functions", to: "/m1/functions" },
          { label: "Expressions", to: "/m1/expressions" },
          { label: "Scope", to: "/m1/scope" },
        ],
      },
      {
        subheading: "TypeScript 101",
        items: [{ label: "Types & Interfaces", to: "/m1/typescript" }],
      },
      {
        subheading: "Practice",
        items: [{ label: "Activity: Dashboard Helper", to: "/m1/activity" }],
      },
    ],
  },
  {
    heading: "Module 2: Reading and Modifying React Apps",
    items: [
      { label: "Activity: UI Blueprint", to: "/m2/ui-blueprint" },
      { label: "Reading a Component", to: "/m2/reading" },
      {
        subheading: "What are Components?",
        items: [{ label: "Component Anatomy", to: "/m2/components" }],
      },
      {
        subheading: "Common Hooks and Customizations",
        items: [
          { label: "useState", to: "/m2/use-state" },
          { label: "useRef", to: "/m2/use-ref" },
          { label: "useEffect", to: "/m2/use-effect" },
          { label: "useReducer", to: "/m2/use-reducer" },
          { label: "useMemo & useCallback", to: "/m2/use-memo" },
          { label: "Custom Hooks", to: "/m2/custom-hooks" },
        ],
      },
      {
        subheading: "Practice",
        items: [{ label: "Activity: Bug Hunt", to: "/m2/activity" }],
      },
    ],
  },
  {
    heading: "Module 3: Make It Pretty with Tailwind CSS",
    items: [
      { label: "Introduction to Tailwind", to: "/m3/intro" },
      { label: "From Ugly to Pretty", to: "/m3/ugly-to-pretty" },
      { label: "Customizing Tailwind", to: "/m3/customization" },
      {
        subheading: "Practice",
        items: [
          { label: "Activity: Style It Yourself", to: "/m3/activity" },
          { label: "Activity: Animate It", to: "/m3/animation-activity" },
        ],
      },
    ],
  },
  {
    heading: "Module 4: Where does this state belong?",
    items: [
      { label: "Client vs Server", to: "/m4/client-vs-server" },
      { label: "State Management", to: "/m4/state-management" },
      {
        subheading: "Practice",
        items: [{ label: "Activity: State Decisions", to: "/m4/state-activity" }],
      },
    ],
  },
  {
    heading: "Module 5: Reading and modifing Next.js apps",
    items: [
      { label: "Introduction to Next.js", to: "/m5/nextjs-intro" },
      { label: "Server vs Client Components", to: "/m5/server-client" },
      {
        subheading: "Practice",
        items: [{ label: "Activity: Server or Client?", to: "/m5/server-client-activity" }],
      },
    ],
  },
];
