export function NotificationCardAnswer() {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-white hover:shadow-sm transition-shadow">
      <div className="shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
        <span className="text-emerald-600 text-lg" aria-hidden="true">
          ✓
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-medium text-gray-900 truncate">
            Deployment successful
          </p>
          <span className="text-xs text-gray-400 shrink-0">2m ago</span>
        </div>
        <p className="text-sm text-gray-500 mt-0.5">
          Production build v2.4.1 deployed to us-west-2.
        </p>
        <div className="flex gap-2 mt-2">
          <button className="px-3 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
            View logs
          </button>
          <button className="px-3 py-1 rounded text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
