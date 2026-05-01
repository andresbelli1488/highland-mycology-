import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatusPill } from "@/components/ui/status-pill";
import { ReviewWorkflowPanel } from "@/components/dashboard/ReviewWorkflowPanel";
import {
  REVIEWS,
  getReviewerById,
  getPaperById,
  OBSERVATIONS,
  getSpeciesById,
} from "@/lib/data";
import { formatDate } from "@/lib/utils";
import type { ReviewStatus } from "@/types";

const FLOW: ReviewStatus[] = [
  "Submitted",
  "Under Review",
  "Needs More Evidence",
  "Disputed",
  "Verified",
  "Archived",
];

export default function PeerReviewPage() {
  return (
    <>
      <PageHeader
        eyebrow="Editorial"
        title="Peer Review"
        description="Track submissions through the editorial workflow. Reviewers are matched to papers and observations by region and taxonomic specialty."
      />

      <Card>
        <CardHeader>
          <CardTitle>Workflow</CardTitle>
          <CardDescription>
            Six stages from submission to archive. Risk alerts escalate disputed
            records into the toxicology review queue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {FLOW.map((stage, i) => (
              <li key={stage} className="inline-flex items-center gap-2">
                <StatusPill status={stage} />
                {i < FLOW.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                )}
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2 space-y-3">
          {REVIEWS.map((review) => {
            const reviewer = getReviewerById(review.reviewerId);
            const paper = review.paperId ? getPaperById(review.paperId) : null;
            const obs = review.observationId
              ? OBSERVATIONS.find((o) => o.id === review.observationId)
              : null;
            const target = paper
              ? { kind: "Paper", title: paper.title }
              : obs
              ? {
                  kind: "Observation",
                  title:
                    getSpeciesById(obs.speciesId)?.scientificName ?? obs.id,
                }
              : { kind: "Item", title: "Unlinked" };

            return (
              <Card key={review.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Badge variant="outline" className="mb-1">
                        {target.kind}
                      </Badge>
                      <CardTitle className="text-base">
                        {target.title}
                      </CardTitle>
                      <CardDescription>
                        {reviewer?.name} · {reviewer?.affiliation}
                      </CardDescription>
                    </div>
                    <StatusPill status={review.status} />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-forest-800/90">{review.comment}</p>
                  {review.evidenceRequested && (
                    <p className="rounded-md border border-mushroom-200 bg-mushroom-50 px-3 py-2 text-xs text-clay-400">
                      <span className="font-semibold">Evidence requested:</span>{" "}
                      {review.evidenceRequested}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Updated {formatDate(review.updatedAt)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <ReviewWorkflowPanel />
      </div>
    </>
  );
}
