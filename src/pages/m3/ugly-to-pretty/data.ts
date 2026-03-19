export const profile = {
  name: "Wilson Franca",
  title: "Software Engineer",
  location: "Seattle, WA",
  bio: "Passionate about building tools that make people's lives easier. Loves React, TypeScript, and cat videos.",
  skills: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
};

export interface Step {
  id: number;
  label: string;
  description: string;
  concepts?: string[];
  card: string;
  avatar: string;
  header: string;
  name: string;
  title: string;
  location: string;
  bio: string;
  skillContainer: string;
  skill: string;
  buttonRow: string;
  primaryBtn: string;
  secondaryBtn: string;
}

export const steps: Step[] = [
  {
    id: 0,
    label: "Step 0 — No styling",
    description: "Raw HTML structure. No classes at all. This is what we're starting with.",
    card: "p-0",
    avatar: "",
    header: "",
    name: "",
    title: "",
    location: "",
    bio: "",
    skillContainer: "",
    skill: "",
    buttonRow: "",
    primaryBtn: "",
    secondaryBtn: "",
  },
  {
    id: 1,
    label: "Step 1 — Spacing & background",
    description: "Add padding, background color, and vertical spacing between sections.",
    concepts: ["p-6", "bg-white", "dark:bg-gray-900", "space-y-4"],
    card: "p-6 bg-white space-y-4",
    avatar: "",
    header: "",
    name: "",
    title: "",
    location: "",
    bio: "",
    skillContainer: "",
    skill: "",
    buttonRow: "",
    primaryBtn: "",
    secondaryBtn: "",
  },
  {
    id: 2,
    label: "Step 2 — Border & rounded corners",
    description: "Give it a card shape with a border and rounded corners.",
    concepts: ["border", "border-gray-200", "dark:border-gray-700", "rounded-lg"],
    card: "p-6 bg-white space-y-4 border border-gray-200 rounded-lg",
    avatar: "",
    header: "",
    name: "",
    title: "",
    location: "",
    bio: "",
    skillContainer: "",
    skill: "",
    buttonRow: "",
    primaryBtn: "",
    secondaryBtn: "",
  },
  {
    id: 3,
    label: "Step 3 — Flexbox layout",
    description: "Arrange the avatar and info side by side using flex.",
    concepts: ["flex", "items-center", "gap-4"],
    card: "p-6 bg-white space-y-4 border border-gray-200 rounded-lg",
    avatar: "w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600",
    header: "flex items-center gap-4",
    name: "",
    title: "",
    location: "",
    bio: "",
    skillContainer: "",
    skill: "",
    buttonRow: "",
    primaryBtn: "",
    secondaryBtn: "",
  },
  {
    id: 4,
    label: "Step 4 — Typography",
    description: "Style the text: sizes, weights, and colors.",
    concepts: ["text-xl", "font-semibold", "text-sm", "text-gray-500"],
    card: "p-6 bg-white space-y-4 border border-gray-200 rounded-lg",
    avatar: "w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600",
    header: "flex items-center gap-4",
    name: "text-xl font-semibold text-gray-900",
    title: "text-sm text-gray-500",
    location: "text-sm text-gray-400",
    bio: "text-gray-700 leading-relaxed",
    skillContainer: "",
    skill: "",
    buttonRow: "",
    primaryBtn: "",
    secondaryBtn: "",
  },
  {
    id: 5,
    label: "Step 5 — Skill tags",
    description: "Style the skills as colored pills using flex-wrap and rounded-full.",
    concepts: ["flex-wrap", "rounded-full", "bg-indigo-100", "text-xs"],
    card: "p-6 bg-white space-y-4 border border-gray-200 rounded-lg",
    avatar: "w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600",
    header: "flex items-center gap-4",
    name: "text-xl font-semibold text-gray-900",
    title: "text-sm text-gray-500",
    location: "text-sm text-gray-400",
    bio: "text-gray-700 leading-relaxed",
    skillContainer: "flex flex-wrap gap-2",
    skill: "px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800",
    buttonRow: "",
    primaryBtn: "",
    secondaryBtn: "",
  },
  {
    id: 6,
    label: "Step 6 — Buttons with hover & focus",
    description: "Add styled buttons with hover and focus-visible states.",
    concepts: ["hover:bg-indigo-700", "focus-visible:ring-2", "transition-colors"],
    card: "p-6 bg-white space-y-4 border border-gray-200 rounded-lg",
    avatar: "w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600",
    header: "flex items-center gap-4",
    name: "text-xl font-semibold text-gray-900",
    title: "text-sm text-gray-500",
    location: "text-sm text-gray-400",
    bio: "text-gray-700 leading-relaxed",
    skillContainer: "flex flex-wrap gap-2",
    skill: "px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800",
    buttonRow: "flex gap-3 pt-2",
    primaryBtn:
      "px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-colors",
    secondaryBtn:
      "px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-colors",
  },
  {
    id: 7,
    label: "Step 7 — Responsive + shadow",
    description: "Make it responsive (stack on mobile) and add a hover shadow for polish.",
    concepts: ["md:flex-row", "flex-col", "hover:shadow-md", "transition-shadow"],
    card: "p-6 bg-white space-y-4 border border-gray-200 rounded-lg transition-shadow hover:shadow-md",
    avatar: "w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 shrink-0",
    header: "flex flex-col md:flex-row items-center md:items-start gap-4",
    name: "text-xl font-semibold text-gray-900",
    title: "text-sm text-gray-500",
    location: "text-sm text-gray-400",
    bio: "text-gray-700 leading-relaxed",
    skillContainer: "flex flex-wrap gap-2",
    skill: "px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800",
    buttonRow: "flex gap-3 pt-2",
    primaryBtn:
      "px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-colors",
    secondaryBtn:
      "px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-colors",
  },
];
