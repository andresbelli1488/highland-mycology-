"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { OBSERVATIONS, getCountry, getSpeciesById } from "@/lib/data";

// Simplified geographic visualization. Placeholder for full Leaflet/Mapbox tiles.
// TODO: Swap to react-leaflet or react-map-gl with Supabase-backed PostGIS query.
const VIEWBOX = { minLng: 70, maxLng: 150, minLat: 6, maxLat: 50 };
const W = 640;
const H = 360;

function project(lng: number, lat: number) {
  const x = ((lng - VIEWBOX.minLng) / (VIEWBOX.maxLng - VIEWBOX.minLng)) * W;
  const y = H - ((lat - VIEWBOX.minLat) / (VIEWBOX.maxLat - VIEWBOX.minLat)) * H;
  return { x, y };
}

const HIGHLAND_BANDS = [
  // Tibetan Plateau
  { d: "M150,90 C200,80 280,80 360,110 C400,130 380,160 320,170 C260,180 180,170 150,140 Z" },
  // Himalayas
  { d: "M120,180 C180,160 250,170 310,200 C320,220 250,230 200,225 C150,220 120,210 120,180 Z" },
  // Korean & Japanese ranges
  { d: "M470,160 C500,140 550,150 580,180 C600,210 560,230 520,220 C490,215 470,200 470,160 Z" },
];

export function ResearchEvidenceMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Research Evidence Map</CardTitle>
        <CardDescription>
          Geo-located observations across the Asia-Pacific highland network. Provisional
          tile placeholder — replace with Leaflet / Mapbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-hidden rounded-md border border-bone-200 bg-gradient-to-br from-alpine-50 to-bone-100">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            role="img"
            aria-label="Asia-Pacific highland evidence map"
            className="h-full w-full archival-grid"
          >
            {HIGHLAND_BANDS.map((band, idx) => (
              <path
                key={idx}
                d={band.d}
                fill="rgba(122, 79, 49, 0.08)"
                stroke="rgba(122, 79, 49, 0.25)"
                strokeWidth={0.6}
              />
            ))}

            {/* Country labels */}
            <Label x={260} y={120} label="China" />
            <Label x={210} y={250} label="India" />
            <Label x={530} y={155} label="Korea" />
            <Label x={580} y={210} label="Japan" />
            <Label x={460} y={270} label="Taiwan" />

            {OBSERVATIONS.map((obs) => {
              const { x, y } = project(obs.coordinates.lng, obs.coordinates.lat);
              const sp = getSpeciesById(obs.speciesId);
              const country = getCountry(obs.countryCode);
              const fill =
                obs.status === "Disputed"
                  ? "#b8351f"
                  : obs.status === "Verified"
                  ? "#2f5a39"
                  : obs.status === "Needs More Evidence"
                  ? "#bda476"
                  : "#4878a6";
              return (
                <g key={obs.id}>
                  <circle cx={x} cy={y} r={9} fill={fill} fillOpacity={0.18} />
                  <circle cx={x} cy={y} r={4} fill={fill} stroke="#f6f1e7" strokeWidth={1.2} />
                  <title>{`${sp?.scientificName ?? ""} · ${country?.name ?? ""} · ${obs.region} · ${obs.status}`}</title>
                </g>
              );
            })}
          </svg>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <Dot color="#2f5a39" label="Verified" />
          <Dot color="#4878a6" label="Submitted / Under Review" />
          <Dot color="#bda476" label="Needs Evidence" />
          <Dot color="#b8351f" label="Disputed" />
        </div>
      </CardContent>
    </Card>
  );
}

function Label({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <text
      x={x}
      y={y}
      fill="rgba(33, 67, 40, 0.45)"
      fontSize="11"
      fontFamily="ui-serif, Georgia"
      fontStyle="italic"
    >
      {label}
    </text>
  );
}

function Dot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="h-2.5 w-2.5 rounded-full ring-1 ring-bone-200"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
}
