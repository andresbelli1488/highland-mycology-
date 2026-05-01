import type { Review } from "@/types";

// TODO: Replace with Supabase query joining `reviews` -> `reviewers` & `papers/observations`.
export const REVIEWS: Review[] = [
  {
    id: "rv-001",
    paperId: "pp-001",
    reviewerId: "rev-li-wen",
    status: "Verified",
    comment:
      "Methodology is rigorous; recommend a follow-up survey covering the eastern plateau gap identified in Fig. 3.",
    updatedAt: "2026-04-22",
  },
  {
    id: "rv-002",
    observationId: "obs-003",
    reviewerId: "rev-aiko-tanaka",
    status: "Under Review",
    comment:
      "Specimen morphology partially overlaps with A. rubescens. Awaiting cap section macros from submitter.",
    updatedAt: "2026-04-25",
    evidenceRequested: "High-resolution gill photograph and stipe staining test.",
  },
  {
    id: "rv-003",
    observationId: "obs-004",
    reviewerId: "rev-meera-kalita",
    status: "Needs More Evidence",
    comment:
      "Termite mound association is unclear. Requesting field photograph showing substrate context.",
    updatedAt: "2026-04-19",
    evidenceRequested: "Field shot showing fruiting body and termite infrastructure.",
  },
  {
    id: "rv-004",
    observationId: "obs-006",
    reviewerId: "rev-jihoon-park",
    status: "Disputed",
    comment:
      "Spore print and microscopy strongly suggest Galerina marginata, not Pholiota. Risk alert raised.",
    updatedAt: "2026-04-26",
  },
  {
    id: "rv-005",
    paperId: "pp-005",
    reviewerId: "rev-chen-yu-ling",
    status: "Verified",
    comment:
      "Phylogenetic analysis is well supported; recommend listing voucher accessions in supplementary materials.",
    updatedAt: "2026-04-15",
  },
  {
    id: "rv-006",
    paperId: "pp-007",
    reviewerId: "rev-jihoon-park",
    status: "Verified",
    comment:
      "Critical public-health contribution; co-reviewers concur with all conclusions.",
    updatedAt: "2026-04-10",
  },
  {
    id: "rv-007",
    observationId: "obs-007",
    reviewerId: "rev-li-wen",
    status: "Submitted",
    comment: "Initial submission received; queued for elevation context cross-check.",
    updatedAt: "2026-04-28",
  },
];

export function reviewsByStatus() {
  const counts: Record<string, number> = {
    Submitted: 0,
    "Under Review": 0,
    "Needs More Evidence": 0,
    Disputed: 0,
    Verified: 0,
    Archived: 0,
  };
  REVIEWS.forEach((r) => {
    counts[r.status] = (counts[r.status] ?? 0) + 1;
  });
  return counts;
}
