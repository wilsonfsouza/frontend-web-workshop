// =============================================================================
// Exercise 2: Pricing Card (Solo Challenge)
//
// Add Tailwind classes to style this component.
// Refer to the goal rendering on the Activity page for what it should look like.
// =============================================================================

export function PricingCard() {
  const features = [
    "Unlimited projects",
    "Priority support",
    "Custom integrations",
    "Team analytics",
  ];

  return (
    <div>
      <div>Popular</div>
      <div>
        <h3>Pro</h3>
        <p>For growing teams</p>
      </div>
      <div>
        <span>$29</span>
        <span>/month</span>
      </div>
      <ul>
        {features.map((feature) => (
          <li key={feature}>
            <span>✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button>Get started</button>
    </div>
  );
}
