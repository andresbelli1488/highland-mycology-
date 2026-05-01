import type { ToxicLookalike } from "@/types";

// TODO: Replace with Supabase view that joins species pairs with risk metadata.
export const LOOKALIKES: ToxicLookalike[] = [
  {
    id: "lk-001",
    edibleSpeciesId: "sp-hericium-erinaceus",
    toxicSpeciesId: "sp-galerina-marginata",
    region: "Korean and Japanese highlands",
    similarityNotes:
      "Confusion is rare for trained foragers, but novice records have been retracted after spore microscopy.",
    distinguishingFeatures: [
      "Hericium has hanging spines, not gills",
      "Galerina grows on rotting wood with lamellate cap",
      "Galerina has rusty brown spore print",
    ],
    riskLevel: "high",
  },
  {
    id: "lk-002",
    edibleSpeciesId: "sp-cantharellus-cibarius",
    toxicSpeciesId: "sp-galerina-marginata",
    region: "Mixed conifer highlands",
    similarityNotes:
      "Color overlap in faded specimens leads occasional foragers astray; Galerina has true gills versus chanterelle's false ridges.",
    distinguishingFeatures: [
      "Cantharellus has forked false gills",
      "Galerina has true crowded gills and ring on stipe",
      "Galerina spore print rusty; Cantharellus pale yellow",
    ],
    riskLevel: "extreme",
  },
  {
    id: "lk-003",
    edibleSpeciesId: "sp-russula-virescens",
    toxicSpeciesId: "sp-amanita-pantherina",
    region: "East Asian montane oak forests",
    similarityNotes:
      "Both can present greenish caps, but Amanita pantherina shows characteristic warts and basal volva.",
    distinguishingFeatures: [
      "Amanita has volva and ring; Russula has neither",
      "Russula stipe brittle and chalky; Amanita stipe fibrous",
      "Russula gills crumble; Amanita gills do not",
    ],
    riskLevel: "high",
  },
  {
    id: "lk-004",
    edibleSpeciesId: "sp-tricholoma-matsutake",
    toxicSpeciesId: "sp-amanita-brunnescens",
    region: "Korean Pinus densiflora stands",
    similarityNotes:
      "Mature matsutake and certain Amanita brunnescens forms can be visually similar in dim light.",
    distinguishingFeatures: [
      "Matsutake lacks volva and ring",
      "Matsutake aroma is unmistakable when fresh",
      "Amanita brunnescens stipe stains brown when bruised",
    ],
    riskLevel: "moderate",
  },
];
