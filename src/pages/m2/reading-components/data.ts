export interface Task {
  id: string;
  title: string;
  status: "todo" | "in-progress" | "done";
}

export const initialTasks: Task[] = [
  { id: "1", title: "Review pull request", status: "todo" },
  { id: "2", title: "Update API documentation", status: "in-progress" },
  { id: "3", title: "Fix login redirect bug", status: "done" },
];

export const statusColors = {
  todo: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  "in-progress": "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
  done: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
};

export const statusLabels = {
  todo: "To Do",
  "in-progress": "In Progress",
  done: "Done",
};

export const nextStatus: Record<Task["status"], Task["status"]> = {
  todo: "in-progress",
  "in-progress": "done",
  done: "todo",
};
