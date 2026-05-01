import Link from "next/link";
import { ArrowUpRight, Mountain, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { COUNTRIES } from "@/lib/data";
import { formatNumber } from "@/lib/utils";

export function CountryResearchCards() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>Country Research Hubs</CardTitle>
            <CardDescription>
              Highland mycology activity across China, Taiwan, South Korea, India, and Japan.
            </CardDescription>
          </div>
          <Link
            href="/countries"
            className="inline-flex items-center gap-1 text-xs font-medium text-alpine-300 hover:underline"
          >
            All hubs <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {COUNTRIES.map((c) => (
          <article
            key={c.countryCode}
            className="flex flex-col gap-2 rounded-md border border-bone-200 bg-gradient-to-br from-bone-50 to-bone-100 p-4 hover:border-forest-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl">{c.flagEmoji}</p>
                <h3 className="mt-1 font-serif text-base font-semibold text-forest-800">
                  {c.name}
                </h3>
              </div>
              <Badge variant="outline" className="font-mono">
                {c.countryCode}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-3">
              {c.emphasis}
            </p>
            <dl className="mt-1 grid grid-cols-2 gap-x-3 gap-y-1 text-[11px]">
              <Stat label="Verified" value={formatNumber(c.verifiedRecords)} />
              <Stat label="Papers" value={formatNumber(c.papersPublished)} />
              <Stat label="Reviewers" value={formatNumber(c.activeReviewers)} />
              <Stat label="Pending" value={formatNumber(c.pendingObservations)} />
            </dl>
            <div className="mt-2 flex items-center gap-2 border-t border-bone-200 pt-2 text-[11px] text-muted-foreground">
              <Mountain className="h-3.5 w-3.5 text-clay-300" />
              {c.highlandRegions.slice(0, 2).join(" · ")}
            </div>
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <Users className="h-3.5 w-3.5 text-clay-300" />
              Active community
            </div>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-mono text-forest-800">{value}</dd>
    </div>
  );
}
