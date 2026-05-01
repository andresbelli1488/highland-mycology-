import { ShieldAlert, ArrowLeftRight } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LOOKALIKES, getSpeciesById } from "@/lib/data";

const RISK_VARIANT: Record<
  "moderate" | "high" | "extreme",
  "warning" | "destructive"
> = {
  moderate: "warning",
  high: "destructive",
  extreme: "destructive",
};

export default function ToxicLookalikesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Toxicology"
        title="Toxic Lookalikes"
        description="Pairs of highland species frequently confused in the field. Reference only — never make foraging decisions from this page."
      />

      <Card className="border-toxic-100 bg-gradient-to-br from-toxic-50 to-bone-50 ring-1 ring-toxic-100">
        <CardContent className="flex items-start gap-3 p-4">
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-toxic-400" />
          <div className="text-sm leading-relaxed text-forest-800/90">
            <strong className="text-toxic-400">Important:</strong> This database
            does not provide edibility recommendations. Some look-alike pairs
            below include deadly amatoxin-producing species. Always consult a
            qualified mycologist and your regional poison-control authority.
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        {LOOKALIKES.map((pair) => {
          const edible = getSpeciesById(pair.edibleSpeciesId);
          const toxic = getSpeciesById(pair.toxicSpeciesId);
          return (
            <Card key={pair.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Confusion pair</CardTitle>
                  <Badge variant={RISK_VARIANT[pair.riskLevel]}>
                    {pair.riskLevel} risk
                  </Badge>
                </div>
                <CardDescription>{pair.region}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <SpeciesBlock species={edible} variant="edible" />
                  <ArrowLeftRight className="h-5 w-5 text-clay-300" />
                  <SpeciesBlock species={toxic} variant="toxic" />
                </div>
                <p className="text-sm italic text-forest-800/80">
                  {pair.similarityNotes}
                </p>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Distinguishing features
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-forest-800/85">
                    {pair.distinguishingFeatures.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}

function SpeciesBlock({
  species,
  variant,
}: {
  species: ReturnType<typeof getSpeciesById>;
  variant: "edible" | "toxic";
}) {
  if (!species) return null;
  return (
    <div
      className={
        variant === "toxic"
          ? "rounded-md border border-toxic-100 bg-toxic-50 p-3"
          : "rounded-md border border-forest-200 bg-forest-100/40 p-3"
      }
    >
      <p className="text-[10px] uppercase tracking-[0.18em] text-clay-300">
        {variant === "toxic" ? "Toxic / suspect" : "Cultural edible"}
      </p>
      <p className="font-serif text-sm font-semibold italic text-forest-800">
        {species.scientificName}
      </p>
      <p className="text-xs text-muted-foreground">
        {species.commonNames.en ?? Object.values(species.commonNames)[0]}
      </p>
    </div>
  );
}
