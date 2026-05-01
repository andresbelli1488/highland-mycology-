// Core domain types for the Asia-Pacific Highland Mycology Research Database.
// TODO: Replace with generated Supabase types once schema is migrated.

export type CountryCode = "CN" | "TW" | "KR" | "IN" | "JP";

export type ReviewStatus =
  | "Submitted"
  | "Under Review"
  | "Needs More Evidence"
  | "Disputed"
  | "Verified"
  | "Archived";

export type EvidenceType =
  | "Field Survey"
  | "Herbarium Specimen"
  | "DNA Sequence"
  | "Ethnomycological"
  | "Morphological"
  | "Toxicological"
  | "Ecological";

export type ToxicityLevel =
  | "Edible (cultural record)"
  | "Inedible"
  | "Suspect"
  | "Toxic"
  | "Deadly";

export interface Species {
  id: string;
  scientificName: string;
  commonNames: Record<string, string>; // locale -> name
  family: string;
  genus: string;
  habitat: string;
  elevationRangeM: [number, number];
  countries: CountryCode[];
  fruitingMonths: number[]; // 1-12
  toxicityLevel: ToxicityLevel;
  imageHueHex: string; // visual placeholder color
  highlandRecord: boolean;
  description: string;
}

export interface Reviewer {
  id: string;
  name: string;
  affiliation: string;
  countryCode: CountryCode;
  reputation: number; // 0-100
  specialties: string[];
  reviewsCompleted: number;
  joinedYear: number;
}

export interface Observation {
  id: string;
  speciesId: string;
  observerName: string;
  countryCode: CountryCode;
  region: string;
  elevationM: number;
  observedAt: string; // ISO date
  status: ReviewStatus;
  notes: string;
  hasPhoto: boolean;
  hasDnaSample: boolean;
  coordinates: { lat: number; lng: number };
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  countryCode: CountryCode;
  region: string;
  speciesIds: string[];
  abstractSummary: string;
  originalLanguage: string;
  translatedSummary: string;
  doi?: string;
  url?: string;
  evidenceType: EvidenceType;
  reviewerNotes: string;
  reliabilityScore: number; // 0-100
  publishedYear: number;
  citationCount: number;
}

export interface Review {
  id: string;
  paperId?: string;
  observationId?: string;
  reviewerId: string;
  status: ReviewStatus;
  comment: string;
  updatedAt: string;
  evidenceRequested?: string;
}

export interface CountryResearchHub {
  countryCode: CountryCode;
  name: string;
  flagEmoji: string;
  highlandRegions: string[];
  activeReviewers: number;
  papersPublished: number;
  verifiedRecords: number;
  pendingObservations: number;
  emphasis: string;
}

export interface DNASequence {
  id: string;
  speciesId: string;
  marker: "ITS" | "LSU" | "RPB2" | "TEF1" | "SSU";
  accession: string;
  length: number;
  submittedBy: string;
  countryCode: CountryCode;
  submittedAt: string;
  qualityScore: number; // 0-100
}

export interface ToxicLookalike {
  id: string;
  edibleSpeciesId: string;
  toxicSpeciesId: string;
  region: string;
  similarityNotes: string;
  distinguishingFeatures: string[];
  riskLevel: "moderate" | "high" | "extreme";
}

export interface LiteratureCitation {
  id: string;
  paperId: string;
  citingPaperId?: string;
  citingTitle: string;
  citationType: "supports" | "refutes" | "context" | "extends";
  excerpt: string;
}
