// ---------------------------------------------------------------------------
// Simplified Taskei board mockup used in the UI Blueprint activity.
// All Mock* components are internal to this file — they exist only to
// compose the board illustration.
// ---------------------------------------------------------------------------

function MockAvatar({ name }: { name: string }) {
  return (
    <span
      className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 text-[10px] font-medium text-gray-700 dark:text-gray-200"
      aria-label={name}
    >
      {name[0]}
    </span>
  );
}
MockAvatar.displayName = "MockAvatar";

function MockBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
      {children}
    </span>
  );
}
MockBadge.displayName = "MockBadge";

function MockCard({ title, assignees }: { title: string; assignees: string[] }) {
  return (
    <div className="p-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-xs space-y-1.5">
      <p className="font-medium text-gray-900 dark:text-gray-100 leading-snug">{title}</p>
      <div className="flex items-center justify-between">
        <div className="flex -space-x-1">
          {assignees.map((a) => (
            <MockAvatar key={a} name={a} />
          ))}
        </div>
        <MockBadge>💬 1</MockBadge>
      </div>
    </div>
  );
}
MockCard.displayName = "MockCard";

type MockColumnCard = { title: string; assignees: string[] };

function MockColumn({
  name,
  count,
  cards,
}: {
  name: string;
  count: number;
  cards: MockColumnCard[];
}) {
  return (
    <div className="flex-1 min-w-[180px] space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-gray-900 dark:text-gray-100">{name}</span>
        <MockBadge>{count} Tasks</MockBadge>
      </div>
      <div className="space-y-2">
        {cards.map((card) => (
          <MockCard key={card.title} title={card.title} assignees={card.assignees} />
        ))}
      </div>
    </div>
  );
}
MockColumn.displayName = "MockColumn";

export function BoardMockup() {
  const columns = [
    {
      name: "Comment",
      count: 28,
      cards: [
        { title: "[SlaQ] Evaluation Framework", assignees: ["W"] },
        { title: "Expand multi-localization to Pulse-Widget", assignees: ["A"] },
        { title: "Enable iframe Embedding for Pulse", assignees: ["S"] },
      ],
    },
    {
      name: "Implementation",
      count: 23,
      cards: [
        { title: "Prototype Lambda Managed Instances", assignees: ["W", "J"] },
        { title: "Searchable Dropdowns for Question Types", assignees: ["M"] },
      ],
    },
    {
      name: "Review",
      count: 9,
      cards: [
        { title: "Implementing BatchGetPublicProfiles", assignees: ["W", "A"] },
        { title: "Builder Profile Events E2E Latency Tests", assignees: ["J"] },
      ],
    },
    {
      name: "Validate/Test",
      count: 2,
      cards: [{ title: "Implement Moderation Lambda Logic", assignees: ["W"] }],
    },
  ];

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      {/* Navbar */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-900 text-white text-xs">
        <div className="flex items-center gap-3">
          <span className="font-semibold">Taskei</span>
          <span className="text-gray-400">Home &gt; 1. Main &gt; Sprints &gt; CIX-30</span>
        </div>
        <MockAvatar name="W" />
      </div>
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400 flex-wrap">
        <span className="font-semibold text-gray-900 dark:text-gray-100">CIX-30 (133)</span>
        <span>2/14/2026 – 3/1/2026</span>
        <span className="ml-auto flex gap-1.5">
          <MockBadge>Group by</MockBadge>
          <MockBadge>Sort by</MockBadge>
          <MockBadge>Actions</MockBadge>
          <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-medium">Create</span>
        </span>
      </div>
      {/* Filter bar */}
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-gray-200 dark:border-gray-700 text-xs">
        <input
          readOnly
          tabIndex={-1}
          aria-label="Filter by attribute or keyword"
          placeholder="Filter by attribute or keyword"
          className="flex-1 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-xs"
        />
        <MockBadge>Assignee</MockBadge>
        <MockBadge>Priority</MockBadge>
        <MockBadge>Type</MockBadge>
      </div>
      {/* Columns */}
      <div className="flex gap-3 p-3 overflow-x-auto bg-white dark:bg-gray-950">
        {columns.map((col) => (
          <MockColumn key={col.name} name={col.name} count={col.count} cards={col.cards} />
        ))}
      </div>
    </div>
  );
}
BoardMockup.displayName = "BoardMockup";
