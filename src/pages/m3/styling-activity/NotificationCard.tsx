// =============================================================================
// Exercise 1: Notification Card (Pair Programming)
//
// Add Tailwind classes to style this component.
// Refer to the goal rendering on the Activity page for what it should look like.
// =============================================================================

export function NotificationCard() {
  return (
    <div>
      <div>
        <span>✓</span>
      </div>
      <div>
        <div>
          <p>Deployment successful</p>
          <span>2m ago</span>
        </div>
        <p>Production build v2.4.1 deployed to us-west-2.</p>
        <div>
          <button>View logs</button>
          <button>Dismiss</button>
        </div>
      </div>
    </div>
  );
}
