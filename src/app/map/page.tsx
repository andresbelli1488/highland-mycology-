import { PageHeader } from "@/components/ui/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResearchEvidenceMap } from "@/components/dashboard/ResearchEvidenceMap";
import { Badge } from "@/components/ui/badge";
import { OBSERVATIONS, getCountry, getSpeciesById } from "@/lib/data";
import { formatNumber } from "@/lib/utils";

export default function MapPage() {
  const byCountry = OBSERVATIONS.reduce<Record<string, number>>((acc, obs) => {
    acc[obs.countryCode] = (acc[obs.countryCode] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <PageHeader
        eyebrow="Geospatial"
        title="Highland Evidence Map"
        description="An overview of where peer-reviewed evidence is concentrated. The interactive layer ships in a future iteration with full Leaflet / Mapbox tiling."
      />

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <ResearchEvidenceMap />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>By country</CardTitle>
            <CardDescription>Tracked observations on file.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {Object.entries(byCountry)
                .sort((a, b) => b[1] - a[1])
                .map(([cc, count]) => {
                  const c = getCountry(cc);
                  return (
                    <li
                      key={cc}
                      className="flex items-center justify-between rounded-md border border-bone-200 bg-bone-50 px-3 py-2"
                    >
                      <span className="inline-flex items-center gap-2 text-forest-800">
                        <span>{c?.flagEmoji}</span>
                        {c?.name}
                      </span>
                      <Badge variant="outline" className="font-mono">
                        {formatNumber(count)} obs
                      </Badge>
                    </li>
                  );
                })}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pinpoint summary</CardTitle>
          <CardDescription>
            Each highland observation with coordinates and species attribution.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {OBSERVATIONS.map((obs) => {
              const sp = getSpeciesById(obs.speciesId);
              const c = getCountry(obs.countryCode);
              return (
                <li
                  key={obs.id}
                  className="rounded-md border border-bone-200 bg-bone-50 p-3 text-xs"
                >
                  <p className="italic text-forest-800">{sp?.scientificName}</p>
                  <p className="text-muted-foreground">
                    {c?.flagEmoji} {obs.region}
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-clay-300">
                    {obs.coordinates.lat.toFixed(3)}°,{" "}
                    {obs.coordinates.lng.toFixed(3)}° ·{" "}
                    {formatNumber(obs.elevationM)} m
                  </p>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
