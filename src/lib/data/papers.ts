import type { ResearchPaper } from "@/types";

// TODO: Replace with Supabase query against `research_papers` joined with `paper_species`.
export const PAPERS: ResearchPaper[] = [
  {
    id: "pp-001",
    title:
      "Population dynamics of Ophiocordyceps sinensis across the Tibetan Plateau (2008–2024)",
    authors: ["Li Wen", "Dorje Tsering", "Zhang Y."],
    countryCode: "CN",
    region: "Tibetan Plateau",
    speciesIds: ["sp-ophiocordyceps-sinensis"],
    abstractSummary:
      "Long-term plot data show 38% decline in fruiting density above 4,400 m correlated with mean spring temperature anomalies.",
    originalLanguage: "zh",
    translatedSummary:
      "16-year monitoring across 42 alpine plots links climate warming and harvest pressure to a measurable population decline of yartsa gunbu.",
    doi: "10.1234/jmh.2025.041",
    evidenceType: "Field Survey",
    reviewerNotes:
      "Strong methodology, but elevation banding underrepresents east-central plateau. Verified after 2 review rounds.",
    reliabilityScore: 92,
    publishedYear: 2025,
    citationCount: 14,
  },
  {
    id: "pp-002",
    title: "Matsutake decline and pine forest succession in the Korean Taebaek range",
    authors: ["Park Ji-Hoon", "Choi M.", "Lee S."],
    countryCode: "KR",
    region: "Taebaek Range",
    speciesIds: ["sp-tricholoma-matsutake"],
    abstractSummary:
      "Twenty-year harvest data from Bonghwa and Yeongdeok counties indicate a 56% reduction in commercial matsutake yield.",
    originalLanguage: "ko",
    translatedSummary:
      "Korean highland matsutake yields have collapsed alongside encroachment of broadleaf species into pine-dominated stands.",
    doi: "10.1234/koreanmyc.2024.018",
    evidenceType: "Ecological",
    reviewerNotes: "Solid quantitative data; awaiting cross-validation with Japanese partner stations.",
    reliabilityScore: 88,
    publishedYear: 2024,
    citationCount: 22,
  },
  {
    id: "pp-003",
    title: "First confirmed highland record of Termitomyces microcarpus in Meghalaya",
    authors: ["Kalita Meera", "Lyngdoh R.", "Mukhim S."],
    countryCode: "IN",
    region: "Meghalaya, East Khasi Hills",
    speciesIds: ["sp-termitomyces-microcarpus"],
    abstractSummary:
      "ITS and LSU barcoding confirms identity of a fruiting cluster collected at 1,480 m, extending known elevation range.",
    originalLanguage: "en",
    translatedSummary:
      "Phylogenetic analysis confirms Termitomyces microcarpus at unprecedented elevation in northeast India.",
    doi: "10.1234/indianmyc.2025.007",
    evidenceType: "DNA Sequence",
    reviewerNotes: "Reviewer requested deposit of duplicate voucher; satisfied in revision.",
    reliabilityScore: 84,
    publishedYear: 2025,
    citationCount: 5,
  },
  {
    id: "pp-004",
    title: "Toxin profile and case reports of Amanita pantherina in Japanese highlands",
    authors: ["Tanaka Aiko", "Suzuki K.", "Mori H."],
    countryCode: "JP",
    region: "Hida and Akaishi Mountains",
    speciesIds: ["sp-amanita-pantherina"],
    abstractSummary:
      "Quantitative HPLC across 27 vouchered specimens reveals geographic variation in ibotenic-acid:muscimol ratios.",
    originalLanguage: "ja",
    translatedSummary:
      "Highland panther caps from central Honshu show distinct toxin profiles linked to associated host trees.",
    doi: "10.1234/japmyc.2024.061",
    evidenceType: "Toxicological",
    reviewerNotes:
      "Independent reanalysis of one chromatogram requested; supplied. High reliability after second review.",
    reliabilityScore: 95,
    publishedYear: 2024,
    citationCount: 31,
  },
  {
    id: "pp-005",
    title: "Cryptic diversity in Cantharellus cibarius across East Asian uplands",
    authors: ["Chen Yu-Ling", "Park Ji-Hoon", "Tanaka Aiko"],
    countryCode: "TW",
    region: "Yushan & Hehuanshan",
    speciesIds: ["sp-cantharellus-cibarius"],
    abstractSummary:
      "Multi-locus phylogeny identifies four distinct lineages within East Asian C. cibarius sensu lato.",
    originalLanguage: "en",
    translatedSummary:
      "Highland chanterelle populations across Taiwan, Korea, and Japan represent a cryptic species complex.",
    doi: "10.1234/asiamyc.2025.029",
    evidenceType: "DNA Sequence",
    reviewerNotes: "Outstanding sampling. Reviewer recommends formal species description in follow-up paper.",
    reliabilityScore: 90,
    publishedYear: 2025,
    citationCount: 9,
  },
  {
    id: "pp-006",
    title: "Ganoderma tsugae versus G. lucidum in Taiwanese mid-montane belt",
    authors: ["Chen Yu-Ling", "Wu T."],
    countryCode: "TW",
    region: "Central Range",
    speciesIds: ["sp-ganoderma-tsugae"],
    abstractSummary:
      "Morphometric and ITS data resolve longstanding misidentification of cultivated and wild material.",
    originalLanguage: "zh",
    translatedSummary:
      "Wild Taiwanese material previously identified as G. lucidum is, in most cases, G. tsugae.",
    doi: "10.1234/taiwanmyc.2023.012",
    evidenceType: "Morphological",
    reviewerNotes: "Robust analysis; one disputed reference dropped during review.",
    reliabilityScore: 86,
    publishedYear: 2023,
    citationCount: 18,
  },
  {
    id: "pp-007",
    title: "Galerina marginata poisonings in highland Korea: a 10-year case series",
    authors: ["Park Ji-Hoon", "Han J."],
    countryCode: "KR",
    region: "Multiple highland prefectures",
    speciesIds: ["sp-galerina-marginata"],
    abstractSummary:
      "Twenty-three documented cases reveal recurrent confusion with Pholiota and Psilocybe by foragers.",
    originalLanguage: "ko",
    translatedSummary:
      "Forager confusion with edible look-alikes drives recurring amatoxin poisonings in Korean highlands.",
    doi: "10.1234/koreanmyc.2025.003",
    evidenceType: "Toxicological",
    reviewerNotes: "Reviewer flagged need for accessible identification training materials.",
    reliabilityScore: 91,
    publishedYear: 2025,
    citationCount: 11,
  },
  {
    id: "pp-008",
    title: "Ethnomycological knowledge of Hericium erinaceus among Yi communities, Yunnan",
    authors: ["Wang J.", "Li Wen", "He F."],
    countryCode: "CN",
    region: "Diqing & Lijiang",
    speciesIds: ["sp-hericium-erinaceus"],
    abstractSummary:
      "Interviews with 64 elders document harvest seasonality, preparation, and traditional uses.",
    originalLanguage: "zh",
    translatedSummary:
      "Ethnographic record links Yi traditional medicine to wild lion's mane harvest from highland oak forests.",
    doi: "10.1234/chinaethno.2024.045",
    evidenceType: "Ethnomycological",
    reviewerNotes: "Reviewer requested explicit consent statement; revised version meets ethics requirements.",
    reliabilityScore: 82,
    publishedYear: 2024,
    citationCount: 7,
  },
];

export function getPaperById(id: string) {
  return PAPERS.find((p) => p.id === id);
}
