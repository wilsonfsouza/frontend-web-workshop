import { useState } from "react";
import { initialTasks, statusColors, statusLabels, nextStatus } from "./data";
import type { Task } from "./data";

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const handleCycleStatus = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: nextStatus[task.status] } : task,
      ),
    );
  };

  const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
    setConfirmDelete(null);
  };

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleCycleStatus(task.id)}
              className={`px-2 py-0.5 rounded text-xs font-medium ${statusColors[task.status]}`}
              aria-label={`Change status of ${task.title}`}
            >
              {statusLabels[task.status]}
            </button>
            <span
              className={`text-sm ${task.status === "done" ? "line-through text-gray-400" : "text-gray-900"}`}
            >
              {task.title}
            </span>
          </div>
          {confirmDelete === task.id ? (
            <div className="flex gap-1">
              <button
                onClick={() => handleDelete(task.id)}
                className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
              >
                Confirm
              </button>
              <button
                onClick={() => setConfirmDelete(null)}
                className="px-2 py-1 text-xs bg-gray-200 rounded"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmDelete(task.id)}
              className="text-xs text-gray-400 hover:text-red-500"
              aria-label={`Delete ${task.title}`}
            >
              Delete
            </button>
          )}
        </div>
      ))}
      {tasks.length === 0 && (
        <p className="text-sm text-gray-400 text-center py-4">All tasks cleared</p>
      )}
    </div>
  );
}
