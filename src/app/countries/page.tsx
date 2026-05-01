import { PageHeader } from "@/components/ui/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { COUNTRIES, REVIEWERS } from "@/lib/data";
import { formatNumber } from "@/lib/utils";

export default function CountriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Regional Hubs"
        title="Country Research Hubs"
        description="Each highland country in the network maintains its own reviewer pool, regional emphasis, and verified-record count."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {COUNTRIES.map((c) => {
          const reviewers = REVIEWERS.filter(
            (r) => r.countryCode === c.countryCode,
          );
          return (
            <Card key={c.countryCode}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-3xl">{c.flagEmoji}</p>
                    <CardTitle className="mt-1">{c.name}</CardTitle>
                    <CardDescription>{c.emphasis}</CardDescription>
                  </div>
                  <Badge variant="outline" className="font-mono">
                    {c.countryCode}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-4 gap-3 text-center">
                  <Stat label="Reviewers" value={c.activeReviewers} />
                  <Stat label="Papers" value={c.papersPublished} />
                  <Stat label="Verified" value={c.verifiedRecords} />
                  <Stat label="Pending" value={c.pendingObservations} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Highland regions
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {c.highlandRegions.map((r) => (
                      <Badge key={r} variant="secondary">
                        {r}
                      </Badge>
                    ))}
                  </div>
                </div>

                {reviewers.length > 0 && (
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Featured reviewers
                    </p>
                    <ul className="mt-1.5 space-y-1.5">
                      {reviewers.map((r) => (
                        <li
                          key={r.id}
                          className="flex items-center justify-between rounded-md border border-bone-200 bg-bone-50 px-3 py-2 text-xs"
                        >
                          <div>
                            <p className="font-medium text-forest-800">
                              {r.name}
                            </p>
                            <p className="text-muted-foreground">
                              {r.affiliation}
                            </p>
                          </div>
                          <Badge variant="success" className="font-mono">
                            {r.reputation}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md border border-bone-200 bg-bone-50 px-2 py-2">
      <p className="font-serif text-lg font-semibold text-forest-800">
        {formatNumber(value)}
      </p>
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
