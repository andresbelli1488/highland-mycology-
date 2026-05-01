import type { Reviewer } from "@/types";

// TODO: Replace with Supabase query against `reviewers` table.
export const REVIEWERS: Reviewer[] = [
  {
    id: "rev-li-wen",
    name: "Dr. Li Wen",
    affiliation: "Kunming Institute of Botany, CAS",
    countryCode: "CN",
    reputation: 92,
    specialties: ["Tibetan Plateau", "Ophiocordyceps", "DNA barcoding"],
    reviewsCompleted: 184,
    joinedYear: 2019,
  },
  {
    id: "rev-aiko-tanaka",
    name: "Dr. Aiko Tanaka",
    affiliation: "Kyoto University, Lab of Forest Pathology",
    countryCode: "JP",
    reputation: 89,
    specialties: ["Tricholoma", "Russulales", "Highland satoyama"],
    reviewsCompleted: 142,
    joinedYear: 2020,
  },
  {
    id: "rev-jihoon-park",
    name: "Prof. Ji-Hoon Park",
    affiliation: "Seoul National University, Mycology Lab",
    countryCode: "KR",
    reputation: 85,
    specialties: ["Toxicology", "Amanita", "Korean Taebaek range"],
    reviewsCompleted: 121,
    joinedYear: 2018,
  },
  {
    id: "rev-meera-kalita",
    name: "Dr. Meera Kalita",
    affiliation: "North-Eastern Hill University, Shillong",
    countryCode: "IN",
    reputation: 81,
    specialties: ["Termitomyces", "Meghalaya highlands", "Ethnomycology"],
    reviewsCompleted: 96,
    joinedYear: 2021,
  },
  {
    id: "rev-chen-yu-ling",
    name: "Dr. Chen Yu-Ling",
    affiliation: "National Taiwan University, Forestry",
    countryCode: "TW",
    reputation: 78,
    specialties: ["Ganoderma", "Mid-montane belt", "Wood-decay fungi"],
    reviewsCompleted: 73,
    joinedYear: 2022,
  },
];

export const CURRENT_REVIEWER = REVIEWERS[1]; // Dr. Aiko Tanaka

export function getReviewerById(id: string) {
  return REVIEWERS.find((r) => r.id === id);
}
