import { ExampleCard } from "@/components/ExampleCard";
import { InlineCode } from "@/components/InlineCode";
import { team } from "@/data/team";
import type { TeamMember } from "@/data/team";

// =============================================================================
// Activity: Team Dashboard Helper
//
// Fill in each function below. The expected output is shown in the UI.
// Concepts practiced: .filter(), .map(), .find(), .reduce(), ??, template literals
// =============================================================================

// Step 1: Return only active members
function getActiveMembers(members: TeamMember[]): TeamMember[] {
  // TODO: Use .filter() to return members where active is true
  void members;
  return [];
}

// Step 2: Return names of members with a given role
function getNamesByRole(members: TeamMember[], role: TeamMember["role"]): string[] {
  // TODO: Chain .filter() and .map() to get names matching the role
  void members;
  void role;
  return [];
}

// Step 3: Return a summary object
interface TeamSummary {
  total: number;
  active: number;
  totalProjects: number;
}

function getTeamSummary(members: TeamMember[]): TeamSummary {
  // TODO: Calculate total, active count, and total projects
  void members;
  return { total: 0, active: 0, totalProjects: 0 };
}

// Step 4: Greet a member with an optional custom greeting
function greetMember(name: string, greeting?: string): string {
  // TODO: Use ?? to default greeting to "Hello", return template literal
  void name;
  void greeting;
  return "";
}

// Step 5: Find a member by name and describe them
function describeMember(members: TeamMember[], name: string): string {
  // TODO: Use .find(), handle not found, use ternary for active/inactive
  void members;
  void name;
  return "";
}

// Bonus: Add a member without mutating the original array
function addMember(members: TeamMember[], newMember: TeamMember): TeamMember[] {
  // TODO: Use spread operator to return a new array
  void members;
  void newMember;
  return [];
}

export function Activity() {
  const activeMembers = getActiveMembers(team);
  const engineers = getNamesByRole(team, "engineer");
  const summary = getTeamSummary(team);
  const greeting1 = greetMember("Wilson");
  const greeting2 = greetMember("Wilson", "Hey");
  const desc1 = describeMember(team, "Wilson");
  const desc2 = describeMember(team, "Taylor");
  const updated = addMember(team, { name: "Morgan", role: "pm", active: true, projects: 0 });

  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Activity: Team Dashboard Helper
        </h2>
        <p className="text-gray-500 mt-1">
          Open <InlineCode>src/pages/m1/Activity.tsx</InlineCode> and fill in the TODO functions.
          The expected results are shown below each step.
        </p>
      </div>

      <ExampleCard
        title="Step 1: Filter active members"
        description="Expected: Wilson, Sam, Jordan, Casey"
      >
        <p className="font-mono text-sm text-emerald-600">
          → [
          {activeMembers.map((member) => member.name).join(", ") ||
            "empty — fill in getActiveMembers()"}
          ]
        </p>
      </ExampleCard>

      <ExampleCard
        title="Step 2: Get names by role"
        description='Expected for "engineer": Wilson, Sam, Riley'
      >
        <p className="font-mono text-sm text-emerald-600">
          → [{engineers.join(", ") || "empty — fill in getNamesByRole()"}]
        </p>
      </ExampleCard>

      <ExampleCard
        title="Step 3: Team summary"
        description="Expected: total 6, active 4, totalProjects 22"
      >
        <p className="font-mono text-sm text-emerald-600">→ {JSON.stringify(summary)}</p>
      </ExampleCard>

      <ExampleCard
        title="Step 4: Greet a member"
        description='Expected: "Hello, Wilson!" and "Hey, Wilson!"'
      >
        <div className="font-mono text-sm text-emerald-600 space-y-1">
          <p>→ "{greeting1 || "empty — fill in greetMember()"}"</p>
          <p>→ "{greeting2 || "empty — fill in greetMember()"}"</p>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Step 5: Describe a member"
        description='Expected: description for Wilson, "Member not found" for Taylor'
      >
        <div className="font-mono text-sm text-emerald-600 space-y-1">
          <p>→ "{desc1 || "empty — fill in describeMember()"}"</p>
          <p>→ "{desc2 || "empty — fill in describeMember()"}"</p>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Bonus: Add a member immutably"
        description="Expected: updated has 7, original has 6"
      >
        <div className="font-mono text-sm text-emerald-600 space-y-1">
          <p>→ updated.length: {updated.length}</p>
          <p>→ team.length: {team.length} (should stay 6)</p>
        </div>
      </ExampleCard>
    </div>
  );
}
