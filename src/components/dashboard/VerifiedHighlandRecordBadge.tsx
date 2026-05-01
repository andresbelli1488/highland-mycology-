import { ShieldCheck, Mountain } from "lucide-react";
import { cn } from "@/lib/utils";

export interface VerifiedHighlandRecordBadgeProps {
  verifiedBy?: string;
  verifiedAt?: string;
  recordId?: string;
  size?: "sm" | "md";
  className?: string;
}

export function VerifiedHighlandRecordBadge({
  verifiedBy,
  verifiedAt,
  recordId,
  size = "md",
  className,
}: VerifiedHighlandRecordBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-md border border-forest-200 bg-forest-100/60 px-3 py-2 text-forest-800 shadow-sm",
        size === "sm" && "px-2 py-1.5",
        className,
      )}
      role="status"
      aria-label="Verified highland record"
    >
      <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-600 text-bone-50 ring-2 ring-forest-300/60">
        <Mountain className="h-4 w-4" />
        <ShieldCheck className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-bone-50 p-0.5 text-forest-700 ring-1 ring-forest-200" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay-300">
          Verified Highland Record
        </span>
        <span className="text-sm font-medium text-forest-800">
          {recordId ?? "Peer-reviewed"} · {verifiedAt ?? "Reviewed"}
        </span>
        {verifiedBy && (
          <span className="text-xs text-muted-foreground">
            by {verifiedBy}
          </span>
        )}
      </div>
    </div>
  );
}
