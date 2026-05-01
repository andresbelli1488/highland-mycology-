import { ExternalLink, Languages } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PAPERS, getCountry, getSpeciesById, CITATIONS } from "@/lib/data";

export default function ResearchLibraryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Knowledge Base"
        title="Research Library"
        description="Peer-reviewed highland mycology papers across the network. Each paper carries reviewer notes, a translated summary, and a reliability score."
      />
      <div className="grid gap-4">
        {PAPERS.map((paper) => {
          const country = getCountry(paper.countryCode);
          const cites = CITATIONS.filter((c) => c.paperId === paper.id);
          return (
            <Card key={paper.id}>
              <CardHeader className="pb-2">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-clay-300">
                      {country?.flagEmoji} {country?.name} · {paper.region} ·{" "}
                      {paper.publishedYear}
                    </p>
                    <CardTitle className="text-base leading-snug">
                      {paper.title}
                    </CardTitle>
                    <CardDescription>
                      {paper.authors.join(", ")}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-right">
                    <div className="rounded-md border border-bone-200 bg-bone-50 px-2 py-1 font-mono text-xs text-forest-800">
                      Reliability {paper.reliabilityScore}/100
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      Cited {paper.citationCount}×
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5 pb-3">
                  <Badge variant="secondary">{paper.evidenceType}</Badge>
                  <Badge variant="outline">
                    <Languages className="h-3 w-3" />{" "}
                    {paper.originalLanguage.toUpperCase()} → EN
                  </Badge>
                  {paper.speciesIds.map((sid) => {
                    const sp = getSpeciesById(sid);
                    return sp ? (
                      <Badge key={sid} variant="info" className="italic">
                        {sp.scientificName}
                      </Badge>
                    ) : null;
                  })}
                </div>

                <Tabs defaultValue="abstract">
                  <TabsList>
                    <TabsTrigger value="abstract">Abstract</TabsTrigger>
                    <TabsTrigger value="translated">Translated</TabsTrigger>
                    <TabsTrigger value="reviewer">Reviewer Notes</TabsTrigger>
                    <TabsTrigger value="citations">
                      Citations ({cites.length})
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="abstract">
                    <p className="text-sm text-forest-800/90">
                      {paper.abstractSummary}
                    </p>
                  </TabsContent>
                  <TabsContent value="translated">
                    <p className="text-sm text-forest-800/90">
                      {paper.translatedSummary}
                    </p>
                  </TabsContent>
                  <TabsContent value="reviewer">
                    <p className="rounded-md border border-bone-200 bg-bone-50 p-3 text-sm italic text-forest-800/85">
                      “{paper.reviewerNotes}”
                    </p>
                  </TabsContent>
                  <TabsContent value="citations">
                    <ul className="space-y-2">
                      {cites.length === 0 ? (
                        <li className="text-sm text-muted-foreground">
                          No tracked citations yet.
                        </li>
                      ) : (
                        cites.map((c) => (
                          <li
                            key={c.id}
                            className="rounded-md border border-bone-200 bg-bone-50 p-3 text-sm"
                          >
                            <div className="mb-1 flex items-center justify-between">
                              <span className="font-medium text-forest-800">
                                {c.citingTitle}
                              </span>
                              <Badge
                                variant={
                                  c.citationType === "refutes"
                                    ? "destructive"
                                    : c.citationType === "supports"
                                    ? "success"
                                    : "outline"
                                }
                              >
                                {c.citationType}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground italic">
                              “{c.excerpt}”
                            </p>
                          </li>
                        ))
                      )}
                    </ul>
                  </TabsContent>
                </Tabs>

                {paper.doi && (
                  <p className="mt-3 inline-flex items-center gap-1 text-xs text-alpine-300">
                    <ExternalLink className="h-3 w-3" />
                    DOI:{" "}
                    <span className="font-mono text-clay-300">{paper.doi}</span>
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
