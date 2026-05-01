"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SPECIES } from "@/lib/data";
import { MONTH_LABELS } from "@/lib/utils";
import { cn } from "@/lib/utils";

// Visualizes peak fruiting months per species across the year.
export function SeasonalFruitingMap() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>Seasonal Fruiting Map</CardTitle>
            <CardDescription>
              Peak fruiting windows for highland species under active monitoring.
            </CardDescription>
          </div>
          <span className="rounded-full border border-bone-200 bg-bone-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            2026 cycle
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-xs">
            <thead>
              <tr className="text-muted-foreground">
                <th className="w-56 px-2 py-2 text-left font-medium">Species</th>
                {MONTH_LABELS.map((m) => (
                  <th key={m} className="px-1 py-2 text-center font-medium">
                    {m}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SPECIES.slice(0, 8).map((species) => (
                <tr
                  key={species.id}
                  className="border-t border-bone-200/60 hover:bg-bone-100/60"
                >
                  <td className="px-2 py-2 align-middle">
                    <div className="flex items-center gap-2">
                      <span
                        aria-hidden
                        className="h-3 w-3 shrink-0 rounded-sm ring-1 ring-bone-200"
                        style={{ backgroundColor: species.imageHueHex }}
                      />
                      <span className="italic text-forest-800">
                        {species.scientificName}
                      </span>
                    </div>
                  </td>
                  {MONTH_LABELS.map((_m, idx) => {
                    const isFruiting = species.fruitingMonths.includes(idx + 1);
                    return (
                      <td key={idx} className="px-1 py-2">
                        <div
                          className={cn(
                            "mx-auto h-5 w-full rounded-sm",
                            isFruiting
                              ? species.toxicityLevel === "Toxic" ||
                                species.toxicityLevel === "Deadly"
                                ? "bg-toxic-200"
                                : species.toxicityLevel === "Suspect"
                                ? "bg-mushroom-200"
                                : "bg-forest-300"
                              : "bg-bone-200/70",
                          )}
                          title={
                            isFruiting
                              ? `${species.scientificName} fruits in ${MONTH_LABELS[idx]}`
                              : ""
                          }
                        />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <Legend swatch="bg-forest-300" label="Edible / cultural record" />
          <Legend swatch="bg-mushroom-200" label="Suspect" />
          <Legend swatch="bg-toxic-200" label="Toxic / deadly" />
        </div>
      </CardContent>
    </Card>
  );
}

function Legend({ swatch, label }: { swatch: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={cn("h-2.5 w-4 rounded-sm", swatch)} />
      {label}
    </span>
  );
}
