import { cn } from "@/lib/utils";
import type { ReviewStatus } from "@/types";

const STATUS_STYLES: Record<ReviewStatus, string> = {
  Submitted: "bg-bone-200 text-forest-800 border-bone-200",
  "Under Review": "bg-alpine-100 text-alpine-400 border-alpine-100",
  "Needs More Evidence": "bg-mushroom-100 text-clay-400 border-mushroom-200",
  Disputed: "bg-toxic-100 text-toxic-400 border-toxic-100",
  Verified: "bg-forest-100 text-forest-700 border-forest-100",
  Archived: "bg-bone-200 text-muted-foreground border-bone-200",
};

const DOT_STYLES: Record<ReviewStatus, string> = {
  Submitted: "bg-forest-400",
  "Under Review": "bg-alpine-300",
  "Needs More Evidence": "bg-clay-200",
  Disputed: "bg-toxic-300",
  Verified: "bg-forest-600",
  Archived: "bg-muted-foreground",
};

export function StatusPill({
  status,
  className,
}: {
  status: ReviewStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        STATUS_STYLES[status],
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", DOT_STYLES[status])} />
      {status}
    </span>
  );
}
