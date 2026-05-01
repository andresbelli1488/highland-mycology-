import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { reviewsByStatus } from "@/lib/data";
import type { ReviewStatus } from "@/types";
import { cn } from "@/lib/utils";

const STAGE_CONFIG: { status: ReviewStatus; bar: string; tag: string }[] = [
  { status: "Submitted", bar: "bg-bone-300", tag: "text-forest-800" },
  { status: "Under Review", bar: "bg-alpine-200", tag: "text-alpine-400" },
  { status: "Needs More Evidence", bar: "bg-mushroom-200", tag: "text-clay-400" },
  { status: "Disputed", bar: "bg-toxic-200", tag: "text-toxic-400" },
  { status: "Verified", bar: "bg-forest-300", tag: "text-forest-700" },
  { status: "Archived", bar: "bg-bone-300", tag: "text-muted-foreground" },
];

export function ReviewWorkflowPanel() {
  const counts = reviewsByStatus();
  const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Review Workflow</CardTitle>
        <CardDescription>
          Submitted → Under Review → Needs Evidence → Disputed → Verified → Archived
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {STAGE_CONFIG.map(({ status, bar, tag }) => {
          const count = counts[status] ?? 0;
          const pct = Math.round((count / total) * 100);
          return (
            <div key={status} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className={cn("font-medium", tag)}>{status}</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {count} · {pct}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-bone-200">
                <div
                  className={cn("h-full transition-all", bar)}
                  style={{ width: `${Math.max(pct, 4)}%` }}
                />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
