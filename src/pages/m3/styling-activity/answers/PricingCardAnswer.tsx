export function PricingCardAnswer() {
  const features = [
    "Unlimited projects",
    "Priority support",
    "Custom integrations",
    "Team analytics",
  ];
  return (
    <div className="rounded-xl border-2 border-indigo-500 bg-white dark:bg-gray-900 p-6 space-y-4 relative">
      <div className="absolute -top-3 left-4 px-3 py-0.5 bg-indigo-600 text-white text-xs font-medium rounded-full">
        Popular
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Pro</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">For growing teams</p>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">$29</span>
        <span className="text-sm text-gray-500">/month</span>
      </div>
      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="text-emerald-500" aria-hidden="true">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-colors">
        Get started
      </button>
    </div>
  );
}
