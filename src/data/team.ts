export interface TeamMember {
  name: string;
  role: "engineer" | "designer" | "pm";
  active: boolean;
  projects: number;
}

export const team: TeamMember[] = [
  { name: "Wilson", role: "engineer", active: true, projects: 5 },
  { name: "Alex", role: "designer", active: false, projects: 2 },
  { name: "Sam", role: "engineer", active: true, projects: 3 },
  { name: "Jordan", role: "pm", active: true, projects: 7 },
  { name: "Casey", role: "designer", active: true, projects: 4 },
  { name: "Riley", role: "engineer", active: false, projects: 1 },
];
