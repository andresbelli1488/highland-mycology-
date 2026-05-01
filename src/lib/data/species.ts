import type { Species } from "@/types";

// Mock database of highland mushroom species across the Asia-Pacific region.
// TODO: Replace with Supabase query: select * from species where region @> '{highland}'
export const SPECIES: Species[] = [
  {
    id: "sp-ophiocordyceps-sinensis",
    scientificName: "Ophiocordyceps sinensis",
    commonNames: {
      en: "Caterpillar fungus",
      zh: "冬虫夏草",
      bo: "yartsa gunbu",
      ja: "冬虫夏草",
    },
    family: "Ophiocordycipitaceae",
    genus: "Ophiocordyceps",
    habitat: "Alpine meadows above tree line, parasitizing ghost moth larvae.",
    elevationRangeM: [3000, 5000],
    countries: ["CN", "IN"],
    fruitingMonths: [4, 5, 6],
    toxicityLevel: "Edible (cultural record)",
    imageHueHex: "#8a6a3b",
    highlandRecord: true,
    description:
      "Iconic Himalayan medicinal fungus with dramatic population declines documented across the Tibetan Plateau and Indian Himalayas.",
  },
  {
    id: "sp-tricholoma-matsutake",
    scientificName: "Tricholoma matsutake",
    commonNames: {
      en: "Matsutake",
      ja: "松茸",
      ko: "송이",
      zh: "松茸",
    },
    family: "Tricholomataceae",
    genus: "Tricholoma",
    habitat: "Mycorrhizal with Pinus densiflora and Tsuga in cool montane forests.",
    elevationRangeM: [800, 2500],
    countries: ["JP", "KR", "CN"],
    fruitingMonths: [9, 10, 11],
    toxicityLevel: "Edible (cultural record)",
    imageHueHex: "#c4a36d",
    highlandRecord: true,
    description:
      "Culturally significant autumn mushroom with carefully tracked harvest declines in Japanese satoyama and Korean highland pine forests.",
  },
  {
    id: "sp-termitomyces-microcarpus",
    scientificName: "Termitomyces microcarpus",
    commonNames: {
      en: "Small termite mushroom",
      hi: "जींगा छत्ता",
    },
    family: "Lyophyllaceae",
    genus: "Termitomyces",
    habitat:
      "Symbiotic with Macrotermes mounds in mid-elevation forests; rare highland records from Northeast India.",
    elevationRangeM: [600, 2000],
    countries: ["IN"],
    fruitingMonths: [6, 7, 8],
    toxicityLevel: "Edible (cultural record)",
    imageHueHex: "#a08560",
    highlandRecord: true,
    description:
      "Edible saprotroph cultivated in symbiosis with termites; recent records extend its known range into Meghalaya highlands.",
  },
  {
    id: "sp-hericium-erinaceus",
    scientificName: "Hericium erinaceus",
    commonNames: {
      en: "Lion's mane",
      zh: "猴头菇",
      ja: "山伏茸",
      ko: "노루궁뎅이버섯",
    },
    family: "Hericiaceae",
    genus: "Hericium",
    habitat: "Wood decay on hardwoods (Quercus, Fagus) in cool montane forests.",
    elevationRangeM: [700, 2400],
    countries: ["CN", "JP", "KR", "TW"],
    fruitingMonths: [9, 10, 11],
    toxicityLevel: "Edible (cultural record)",
    imageHueHex: "#e6dcc3",
    highlandRecord: true,
    description:
      "Widely studied for putative neurotrophic compounds. Wild highland populations remain poorly documented vs. cultivated stock.",
  },
  {
    id: "sp-amanita-brunnescens",
    scientificName: "Amanita brunnescens",
    commonNames: {
      en: "Cleft-foot amanita",
    },
    family: "Amanitaceae",
    genus: "Amanita",
    habitat: "Mixed deciduous-conifer forests in temperate uplands.",
    elevationRangeM: [400, 1800],
    countries: ["JP", "KR", "TW"],
    fruitingMonths: [7, 8, 9, 10],
    toxicityLevel: "Suspect",
    imageHueHex: "#5e3a25",
    highlandRecord: true,
    description:
      "Reports of gastrointestinal toxicity remain disputed; specimens from Taiwanese mid-montane belt require further chemical study.",
  },
  {
    id: "sp-amanita-pantherina",
    scientificName: "Amanita pantherina",
    commonNames: {
      en: "Panther cap",
      ja: "テングタケ",
      ko: "마귀광대버섯",
    },
    family: "Amanitaceae",
    genus: "Amanita",
    habitat: "Mycorrhizal in mixed conifer forests at temperate latitudes.",
    elevationRangeM: [800, 2500],
    countries: ["JP", "KR", "CN", "TW"],
    fruitingMonths: [7, 8, 9, 10],
    toxicityLevel: "Toxic",
    imageHueHex: "#9b5a32",
    highlandRecord: true,
    description:
      "Contains ibotenic acid and muscimol. Frequent confusion with Amanita rubescens in highland Korean records.",
  },
  {
    id: "sp-galerina-marginata",
    scientificName: "Galerina marginata",
    commonNames: {
      en: "Funeral bell",
    },
    family: "Hymenogastraceae",
    genus: "Galerina",
    habitat: "Decaying conifer wood in temperate montane forests.",
    elevationRangeM: [600, 2800],
    countries: ["JP", "KR", "CN", "IN"],
    fruitingMonths: [6, 7, 8, 9, 10],
    toxicityLevel: "Deadly",
    imageHueHex: "#7c5436",
    highlandRecord: true,
    description:
      "Amatoxin producer. Frequently mistaken for Psilocybe and Pholiota species across multiple Asia-Pacific highland regions.",
  },
  {
    id: "sp-russula-virescens",
    scientificName: "Russula virescens",
    commonNames: {
      en: "Green-cracking russula",
      zh: "绿菇",
      ja: "アイタケ",
    },
    family: "Russulaceae",
    genus: "Russula",
    habitat: "Mycorrhizal under Quercus and Castanopsis in temperate uplands.",
    elevationRangeM: [500, 2200],
    countries: ["CN", "JP", "TW", "KR"],
    fruitingMonths: [6, 7, 8],
    toxicityLevel: "Edible (cultural record)",
    imageHueHex: "#6f8c5b",
    highlandRecord: true,
    description:
      "Common in highland Taiwan oak forests; subject of ongoing chemotaxonomic review across the Sino-Japanese floristic region.",
  },
  {
    id: "sp-ganoderma-tsugae",
    scientificName: "Ganoderma tsugae",
    commonNames: {
      en: "Hemlock varnish shelf",
      zh: "松杉灵芝",
      ja: "ツガサルノコシカケ",
    },
    family: "Ganodermataceae",
    genus: "Ganoderma",
    habitat: "Saprotrophic on hemlock and conifer logs at mid-to-high elevation.",
    elevationRangeM: [1200, 2800],
    countries: ["TW", "JP", "KR", "CN"],
    fruitingMonths: [5, 6, 7, 8, 9],
    toxicityLevel: "Inedible",
    imageHueHex: "#7a2f1a",
    highlandRecord: true,
    description:
      "Studied for traditional medicinal use; molecular work has clarified its delineation from Ganoderma lucidum sensu stricto.",
  },
  {
    id: "sp-cantharellus-cibarius",
    scientificName: "Cantharellus cibarius",
    commonNames: {
      en: "Chanterelle",
      ja: "アンズタケ",
      ko: "꾀꼬리버섯",
    },
    family: "Cantharellaceae",
    genus: "Cantharellus",
    habitat: "Mycorrhizal with conifers and broadleaf trees in cool uplands.",
    elevationRangeM: [600, 2400],
    countries: ["JP", "KR", "CN", "IN"],
    fruitingMonths: [7, 8, 9],
    toxicityLevel: "Edible (cultural record)",
    imageHueHex: "#d49a3d",
    highlandRecord: true,
    description:
      "Cryptic species complex; recent ITS work suggests multiple lineages across the Korean Taebaek and Japanese Hida ranges.",
  },
];

export function getSpeciesById(id: string) {
  return SPECIES.find((s) => s.id === id);
}
