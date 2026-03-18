interface ExampleCardProps {
  title: string;
  children: React.ReactNode;
  description?: string;
}

export function ExampleCard({ title, description, children }: ExampleCardProps) {
  return (
    <section className="rounded-lg border border-gray-200 p-6 space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
      </div>
      <div>{children}</div>
    </section>
  );
}

ExampleCard.displayname = "ExampleCard";
