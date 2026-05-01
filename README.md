# Asia-Pacific Highland Mycology Research Database

A peer-review dashboard MVP for highland mushroom research from China, Taiwan,
South Korea, India, and Japan. Built with Next.js App Router, TypeScript,
Tailwind CSS, shadcn/ui-style primitives, and Recharts.

> **Safety:** This application **does not** provide foraging or edibility
> advice. Records here document scientific observations, peer-reviewed
> evidence, and toxicology research only. Never consume a wild-collected
> mushroom based on appearance alone.

---

## Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS 3** with custom mycology palette (deep forest green, bone
  white, mushroom beige, clay brown, alpine blue, toxic red/orange)
- **shadcn/ui-style** primitives (Card, Button, Badge, Input, Tabs, Avatar,
  Progress, Separator, Table) built on Radix UI
- **Recharts** for the Top Research Topics breakdown
- Inline SVG **placeholder map** — designed to be replaced by Leaflet or
  Mapbox without restructuring the page

The data layer is fully mocked but **Supabase-ready**: every dataset is
typed (`src/types/index.ts`) and exposed through a single barrel
(`src/lib/data/index.ts`). Search the codebase for `TODO: Replace with
Supabase` to find the integration points.

---

## Getting started

```bash
cd apps/mycology
npm install
npm run dev
```

Then open <http://localhost:3000>. The root path redirects to `/dashboard`.

### Other scripts

```bash
npm run build     # production build
npm run start     # serve the production build
npm run lint      # next lint
npm run typecheck # tsc --noEmit
```

---

## Pages

| Route                | Purpose                                                  |
| -------------------- | -------------------------------------------------------- |
| `/dashboard`         | KPI cards, seasonal map, recent verified records, review workflow, research library, country hubs, evidence map, top topics, safety reminder. |
| `/mushrooms`         | Highland species catalog with toxicity, elevation, fruiting calendar, common names. |
| `/observations`      | Field record table with status pills, evidence flags.    |
| `/peer-review`       | Editorial workflow + reviewer queue.                     |
| `/research-library`  | Papers with abstract, translated summary, reviewer notes, citations. |
| `/map`               | Geospatial overview (placeholder), country totals, pinpoints. |
| `/countries`         | Country research hubs (CN, TW, KR, IN, JP) with reviewer rosters. |
| `/toxic-lookalikes`  | Confusion pairs with distinguishing features and risk level. |
| `/dna-data`          | Deposited DNA accessions (ITS, LSU, RPB2, TEF1, SSU).    |

---

## Domain models

All in `src/types/index.ts`:

- `Species`
- `Observation`
- `ResearchPaper`
- `Review`
- `Reviewer`
- `CountryResearchHub`
- `DNASequence`
- `ToxicLookalike`
- `LiteratureCitation`

Featured species include _Ophiocordyceps sinensis_, _Tricholoma matsutake_,
_Termitomyces microcarpus_, _Hericium erinaceus_, and _Amanita brunnescens_,
plus regional reference taxa (_Galerina marginata_, _Amanita pantherina_,
_Russula virescens_, _Ganoderma tsugae_, _Cantharellus cibarius_).

## Peer review workflow

`Submitted → Under Review → Needs More Evidence → Disputed → Verified → Archived`

Disputed observations escalate to the toxicology review queue and surface as
**Risk Alerts** on the dashboard.

---

## Reusable components

Layout primitives:

- `components/layout/AppShell` — sidebar + topbar + main + mobile bottom nav
- `components/layout/Sidebar`
- `components/layout/Topbar`
- `components/layout/MobileNav`

UI primitives (shadcn-style, Radix-backed):

- `components/ui/{card,button,badge,input,avatar,separator,progress,tabs,table,page-header,section-heading,status-pill}`

Dashboard widgets (drop-in for any page):

- `KpiCard`, `SeasonalFruitingMap`, `RecentVerifiedRecords`,
  `ReviewWorkflowPanel`, `ResearchLibrarySection`, `CountryResearchCards`,
  `ResearchEvidenceMap`, `TopResearchTopics`, `SafetyReminderCard`,
  `VerifiedHighlandRecordBadge`.

---

## Supabase migration plan

Each mock dataset corresponds 1:1 to a future Supabase table. Search for
`TODO: Replace with Supabase` to find every read-side integration site.
Suggested schema:

- `species`, `observations`, `research_papers`, `reviews`, `reviewers`,
  `country_research_hubs`, `dna_sequences`, `toxic_lookalikes`,
  `literature_citations`
- A view `country_research_hub_v` aggregates per-country counts.
- PostGIS (`geometry(Point, 4326)`) on observations powers the map.

Once tables are migrated, swap the `import` in `src/lib/data/*.ts` from
in-memory arrays to a Supabase client query — page components do not need
to change.

---

## Design direction

Scientific, premium, earthy, archival — iNaturalist × PubMed × natural
history museum. Color tokens live in `tailwind.config.ts` and are also
exposed as HSL CSS variables in `src/app/globals.css`. Toxicity alerts are
the **only** uses of red/orange.
