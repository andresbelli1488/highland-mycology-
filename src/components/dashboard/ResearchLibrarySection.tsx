import Link from "next/link";
import { ArrowUpRight, BookText, Languages } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PAPERS, getCountry, getSpeciesById } from "@/lib/data";

export function ResearchLibrarySection() {
  const featured = PAPERS.slice(0, 4);
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <BookText className="h-4 w-4 text-clay-300" />
              Research Library
            </CardTitle>
            <CardDescription>
              Highest-reliability peer-reviewed papers across the network this cycle.
            </CardDescription>
          </div>
          <Link
            href="/research-library"
            className="inline-flex items-center gap-1 text-xs font-medium text-alpine-300 hover:underline"
          >
            Open library <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-2">
        {featured.map((paper) => {
          const country = getCountry(paper.countryCode);
          return (
            <article
              key={paper.id}
              className="group flex flex-col gap-2 rounded-md border border-bone-200 bg-bone-50 p-4 transition-colors hover:border-forest-200"
            >
              <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  {country?.flagEmoji} {country?.name} · {paper.publishedYear}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-clay-300">
                  R {paper.reliabilityScore}
                </span>
              </div>
              <h3 className="font-serif text-sm font-semibold leading-snug text-forest-800">
                {paper.title}
              </h3>
              <p className="line-clamp-2 text-xs text-muted-foreground">
                {paper.translatedSummary}
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-1">
                <Badge variant="secondary">{paper.evidenceType}</Badge>
                <Badge variant="outline" className="font-mono">
                  <Languages className="h-3 w-3" />
                  {paper.originalLanguage.toUpperCase()}
                </Badge>
                {paper.speciesIds.slice(0, 1).map((sid) => (
                  <Badge key={sid} variant="info" className="italic">
                    {getSpeciesById(sid)?.scientificName}
                  </Badge>
                ))}
              </div>
            </article>
          );
        })}
      </CardContent>
    </Card>
  );
}
