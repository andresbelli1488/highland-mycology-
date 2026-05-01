import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusPill } from "@/components/ui/status-pill";
import { OBSERVATIONS, getSpeciesById, getCountry } from "@/lib/data";
import { formatDate, formatNumber } from "@/lib/utils";

export function RecentVerifiedRecords() {
  const recent = OBSERVATIONS.filter((o) => o.status === "Verified")
    .sort((a, b) => (a.observedAt < b.observedAt ? 1 : -1))
    .slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>Recent Verified Records</CardTitle>
            <CardDescription>
              Latest highland observations confirmed by peer reviewers.
            </CardDescription>
          </div>
          <Link
            href="/observations"
            className="inline-flex items-center gap-1 text-xs font-medium text-alpine-300 hover:underline"
          >
            View all <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Species</TableHead>
              <TableHead>Region</TableHead>
              <TableHead className="text-right">Elevation</TableHead>
              <TableHead>Observed</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recent.map((obs) => {
              const species = getSpeciesById(obs.speciesId);
              const country = getCountry(obs.countryCode);
              return (
                <TableRow key={obs.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span
                        aria-hidden
                        className="h-2.5 w-2.5 shrink-0 rounded-full ring-1 ring-bone-200"
                        style={{ backgroundColor: species?.imageHueHex }}
                      />
                      <div className="leading-tight">
                        <div className="italic text-forest-800">
                          {species?.scientificName}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {species?.commonNames.en}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-forest-800">
                      {country?.flagEmoji} {obs.region}
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-mono text-xs text-clay-300">
                    {formatNumber(obs.elevationM)} m
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {formatDate(obs.observedAt)}
                  </TableCell>
                  <TableCell>
                    <StatusPill status={obs.status} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
