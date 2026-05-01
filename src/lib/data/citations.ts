import type { LiteratureCitation } from "@/types";

// TODO: Replace with Supabase query of `literature_citations` joined to `research_papers`.
export const CITATIONS: LiteratureCitation[] = [
  {
    id: "cit-001",
    paperId: "pp-001",
    citingTitle: "Climate stress and alpine fungi in High Asia (Mehra et al., 2025)",
    citationType: "supports",
    excerpt:
      "Independent monitoring data align with Li et al. (2025) on plateau-wide Ophiocordyceps decline.",
  },
  {
    id: "cit-002",
    paperId: "pp-002",
    citingTitle: "Pine forest succession in northeast Asia (Saito, 2024)",
    citationType: "extends",
    excerpt:
      "We extend Park et al.'s yield collapse findings to Japanese satoyama using a comparable harvest log.",
  },
  {
    id: "cit-003",
    paperId: "pp-004",
    citingTitle: "Toxic Amanita species in Northeast Asia: a clinical primer (Han, 2025)",
    citationType: "context",
    excerpt:
      "Tanaka's chemotype data provides the toxicological backdrop for our case series review.",
  },
  {
    id: "cit-004",
    paperId: "pp-006",
    citingTitle: "Genome assembly of Ganoderma lucidum (Wu, 2024)",
    citationType: "refutes",
    excerpt:
      "We disagree with Chen and Wu (2023) on isolate origin and propose alternative species delimitation.",
  },
  {
    id: "cit-005",
    paperId: "pp-005",
    citingTitle: "Asian Cantharellus revision (Tanaka & Kim, 2026)",
    citationType: "supports",
    excerpt:
      "Our four-locus phylogeny replicates Chen et al.'s East Asian lineage structure.",
  },
];
