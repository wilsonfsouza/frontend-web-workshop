export interface ComponentZone {
  id: string;
  label: string;
  level: "macro" | "mid" | "micro";
  hint: string;
}

export const ZONES: ComponentZone[] = [
  {
    id: "navbar",
    label: "Top Navigation Bar",
    level: "macro",
    hint: "Logo, breadcrumbs, nav links, user avatar. Shared across every page in the app.",
  },
  {
    id: "toolbar",
    label: "Toolbar / Action Bar",
    level: "macro",
    hint: "Display toggle, standup mode switch, sprint info, group/sort/actions buttons, and Create button.",
  },
  {
    id: "filter",
    label: "Filter Bar",
    level: "mid",
    hint: "Search input plus quick-filter chips (Assignee, Priority, Type). Sits between the toolbar and columns.",
  },
  {
    id: "column",
    label: "Kanban Column",
    level: "mid",
    hint: "A repeating vertical lane with a heading, task count, point count, and a list of cards inside.",
  },
  {
    id: "card",
    label: "Task Card",
    level: "micro",
    hint: "Title, assignee avatar(s), priority icon, comment count. The smallest repeating unit on the board.",
  },
  {
    id: "avatar",
    label: "Avatar / Avatar Group",
    level: "micro",
    hint: "Tiny circular images reused inside cards, the navbar, and anywhere a user is represented.",
  },
  {
    id: "badge",
    label: "Badge / Chip",
    level: "micro",
    hint: "Small labels like task counts, point counts, and comment indicators. Appears in columns and cards.",
  },
];

export const LEVEL_STYLES = {
  macro: "bg-indigo-100 text-indigo-800",
  mid: "bg-amber-100 text-amber-800",
  micro: "bg-emerald-100 text-emerald-800",
};
