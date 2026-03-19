export function ToastActivityAnswer() {
  return (
    <div className="animate-slide-up flex items-center gap-3 p-4 rounded-lg border border-emerald-200 bg-emerald-50">
      <div className="shrink-0 w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center">
        <span className="text-white text-sm font-bold" aria-hidden="true">
          ✓
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-emerald-900">Changes saved</p>
        <p className="text-xs text-emerald-600">
          Your settings have been updated successfully.
        </p>
      </div>
      <button className="shrink-0 px-3 py-1 rounded text-xs font-medium text-emerald-700 hover:bg-emerald-100 transition-colors">
        Dismiss
      </button>
    </div>
  );
}
