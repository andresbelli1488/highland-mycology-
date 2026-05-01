import { ShieldAlert } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function SafetyReminderCard() {
  return (
    <Card className="border-toxic-100 bg-gradient-to-br from-toxic-50 to-bone-50 ring-1 ring-toxic-100">
      <CardContent className="flex gap-4 p-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-toxic-100 text-toxic-400">
          <ShieldAlert className="h-5 w-5" />
        </div>
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-toxic-400">
            Safety Reminder
          </p>
          <h3 className="font-serif text-base font-semibold text-forest-800">
            This database does not provide foraging or edibility advice.
          </h3>
          <p className="text-sm leading-relaxed text-forest-800/85">
            Records here document scientific observations, peer-reviewed
            evidence, and toxicology research only. Do not consume any
            wild-collected mushroom based on appearance alone. Confusion
            between edible species and deadly look-alikes (e.g.{" "}
            <em>Galerina marginata</em>) is well documented across our
            highland network. Always consult a qualified mycologist and
            local poison-control resources.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
