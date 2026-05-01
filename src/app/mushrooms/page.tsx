import { Mountain, Leaf, ShieldAlert } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SPECIES, getCountry } from "@/lib/data";
import { MONTH_LABELS, formatNumber } from "@/lib/utils";
import type { ToxicityLevel } from "@/types";

const TOXICITY_VARIANT: Record<
  ToxicityLevel,
  "success" | "secondary" | "warning" | "destructive"
> = {
  "Edible (cultural record)": "success",
  Inedible: "secondary",
  Suspect: "warning",
  Toxic: "destructive",
  Deadly: "destructive",
};

export default function MushroomsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Species Catalog"
        title="Highland Mushrooms"
        description="Curated reference for all species under highland monitoring across the network. Photographs, voucher specimens, and DNA records are linked from individual species pages."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {SPECIES.map((sp) => (
          <Card key={sp.id} className="overflow-hidden">
            <div
              className="h-32 w-full"
              aria-hidden
              style={{
                background: `linear-gradient(135deg, ${sp.imageHueHex}AA 0%, #11241a 120%)`,
              }}
            />
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="italic">{sp.scientificName}</CardTitle>
                <Badge variant={TOXICITY_VARIANT[sp.toxicityLevel]}>
                  {sp.toxicityLevel}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                {sp.family} · {sp.genus}
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-forest-800/90">{sp.description}</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Row
                  icon={<Mountain className="h-3.5 w-3.5 text-clay-300" />}
                  label="Elevation"
                  value={`${formatNumber(sp.elevationRangeM[0])}–${formatNumber(
                    sp.elevationRangeM[1],
                  )} m`}
                />
                <Row
                  icon={<Leaf className="h-3.5 w-3.5 text-forest-600" />}
                  label="Habitat"
                  value={sp.habitat.split(".")[0]}
                />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Common names
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {Object.entries(sp.commonNames).map(([locale, name]) => (
                    <Badge key={locale} variant="outline">
                      <span className="font-mono text-[10px] text-clay-300">
                        {locale}
                      </span>
                      <span className="ml-1">{name}</span>
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Fruiting months
                </p>
                <div className="flex flex-wrap gap-1">
                  {MONTH_LABELS.map((m, i) => {
                    const active = sp.fruitingMonths.includes(i + 1);
                    return (
                      <span
                        key={m}
                        className={
                          active
                            ? "inline-flex h-6 w-7 items-center justify-center rounded bg-forest-200 text-[11px] font-medium text-forest-800"
                            : "inline-flex h-6 w-7 items-center justify-center rounded bg-bone-200 text-[11px] text-muted-foreground"
                        }
                      >
                        {m[0]}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {sp.countries.map((cc) => {
                  const c = getCountry(cc);
                  return (
                    <Badge key={cc} variant="info">
                      {c?.flagEmoji} {c?.name}
                    </Badge>
                  );
                })}
              </div>
              {(sp.toxicityLevel === "Toxic" ||
                sp.toxicityLevel === "Deadly" ||
                sp.toxicityLevel === "Suspect") && (
                <p className="flex items-center gap-1.5 text-xs text-toxic-400">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Reference only — never consume wild specimens based on this card.
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

function Row({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-1.5">
      <span className="mt-0.5">{icon}</span>
      <div className="leading-tight">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="text-xs text-forest-800">{value}</p>
      </div>
    </div>
  );
}
