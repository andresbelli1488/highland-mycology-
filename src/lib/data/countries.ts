import type { CountryResearchHub } from "@/types";

// TODO: Replace with Supabase materialized view `country_research_hub_v`.
export const COUNTRIES: CountryResearchHub[] = [
  {
    countryCode: "CN",
    name: "China",
    flagEmoji: "🇨🇳",
    highlandRegions: ["Tibetan Plateau", "Hengduan Mountains", "Qinling"],
    activeReviewers: 38,
    papersPublished: 412,
    verifiedRecords: 1284,
    pendingObservations: 47,
    emphasis:
      "Long-term Ophiocordyceps monitoring programs and Yunnan ethnomycological partnerships anchor the regional dataset.",
  },
  {
    countryCode: "TW",
    name: "Taiwan",
    flagEmoji: "🇹🇼",
    highlandRegions: ["Central Range", "Yushan", "Hehuanshan"],
    activeReviewers: 14,
    papersPublished: 96,
    verifiedRecords: 318,
    pendingObservations: 12,
    emphasis:
      "Mid-montane Ganoderma and Russula chemotaxonomy work driven by NTU and Academia Sinica collaborations.",
  },
  {
    countryCode: "KR",
    name: "South Korea",
    flagEmoji: "🇰🇷",
    highlandRegions: ["Taebaek Range", "Sobaek Range", "Hallasan"],
    activeReviewers: 21,
    papersPublished: 178,
    verifiedRecords: 524,
    pendingObservations: 18,
    emphasis:
      "Korean highland matsutake decline studies, Amanita toxicology, and forager safety education.",
  },
  {
    countryCode: "IN",
    name: "India",
    flagEmoji: "🇮🇳",
    highlandRegions: ["Himalayas (Sikkim, Arunachal)", "Meghalaya", "Western Ghats Hills"],
    activeReviewers: 17,
    papersPublished: 124,
    verifiedRecords: 286,
    pendingObservations: 31,
    emphasis:
      "Northeast India highland baseline surveys; emerging Termitomyces records and Himalayan Ophiocordyceps reviews.",
  },
  {
    countryCode: "JP",
    name: "Japan",
    flagEmoji: "🇯🇵",
    highlandRegions: ["Hida Mountains", "Akaishi Mountains", "Daisetsuzan"],
    activeReviewers: 29,
    papersPublished: 263,
    verifiedRecords: 742,
    pendingObservations: 22,
    emphasis:
      "Satoyama and montane ecology, with deep historical herbarium reach and chemotaxonomy of Tricholoma.",
  },
];

export function getCountry(code: string) {
  return COUNTRIES.find((c) => c.countryCode === code);
}
