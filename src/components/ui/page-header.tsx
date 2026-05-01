import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex flex-col gap-3 border-b border-bone-200 pb-6 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="space-y-2">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.22em] text-clay-300">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-forest-800 sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-3xl text-sm text-muted-foreground sm:text-base">
            {description}
          </p>
        )}
      </div>
      {action}
    </header>
  );
}
