import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type KpiTone = "neutral" | "forest" | "alpine" | "clay" | "toxic";

const TONE_STYLES: Record<KpiTone, { wash: string; icon: string; ring: string }> = {
  neutral: {
    wash: "from-bone-50 to-bone-100",
    icon: "bg-forest-700/10 text-forest-700",
    ring: "ring-bone-200",
  },
  forest: {
    wash: "from-forest-100/60 to-bone-50",
    icon: "bg-forest-600/15 text-forest-700",
    ring: "ring-forest-100",
  },
  alpine: {
    wash: "from-alpine-50 to-bone-50",
    icon: "bg-alpine-100 text-alpine-400",
    ring: "ring-alpine-100",
  },
  clay: {
    wash: "from-mushroom-50 to-bone-50",
    icon: "bg-mushroom-100 text-clay-300",
    ring: "ring-mushroom-100",
  },
  toxic: {
    wash: "from-toxic-50 to-bone-50",
    icon: "bg-toxic-100 text-toxic-400",
    ring: "ring-toxic-100",
  },
};

export interface KpiCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  helper?: string;
  delta?: { value: string; trend: "up" | "down" | "flat" };
  tone?: KpiTone;
}

export function KpiCard({
  label,
  value,
  icon: Icon,
  helper,
  delta,
  tone = "neutral",
}: KpiCardProps) {
  const t = TONE_STYLES[tone];
  return (
    <Card className={cn("ring-1", t.ring)}>
      <CardContent
        className={cn(
          "flex items-start justify-between gap-3 bg-gradient-to-br p-5",
          t.wash,
        )}
      >
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {label}
          </p>
          <p className="font-serif text-3xl font-semibold text-forest-800">
            {value}
          </p>
          {helper && (
            <p className="text-xs text-muted-foreground">{helper}</p>
          )}
          {delta && (
            <p
              className={cn(
                "mt-1 inline-flex items-center gap-1 text-xs font-medium",
                delta.trend === "up" && "text-forest-600",
                delta.trend === "down" && "text-toxic-300",
                delta.trend === "flat" && "text-muted-foreground",
              )}
            >
              {delta.trend === "up" && <ArrowUpRight className="h-3.5 w-3.5" />}
              {delta.trend === "down" && (
                <ArrowDownRight className="h-3.5 w-3.5" />
              )}
              {delta.value}
            </p>
          )}
        </div>
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-md",
            t.icon,
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </CardContent>
    </Card>
  );
}
