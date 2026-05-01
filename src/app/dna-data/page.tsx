import { Dna } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DNA_SEQUENCES, getSpeciesById, getCountry } from "@/lib/data";
import { formatDate, formatNumber } from "@/lib/utils";

export default function DnaDataPage() {
  const totalLength = DNA_SEQUENCES.reduce((s, d) => s + d.length, 0);
  const avgQuality = Math.round(
    DNA_SEQUENCES.reduce((s, d) => s + d.qualityScore, 0) /
      Math.max(DNA_SEQUENCES.length, 1),
  );

  return (
    <>
      <PageHeader
        eyebrow="Molecular Evidence"
        title="DNA Sequence Records"
        description="Highland specimens with deposited DNA evidence. Markers include ITS, LSU, RPB2, TEF1, and SSU."
      />

      <div className="grid gap-3 sm:grid-cols-3">
        <SummaryCard
          label="Sequences"
          value={formatNumber(DNA_SEQUENCES.length)}
        />
        <SummaryCard
          label="Total bases"
          value={`${formatNumber(totalLength)} bp`}
        />
        <SummaryCard label="Mean quality" value={`${avgQuality} / 100`} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Dna className="h-4 w-4 text-alpine-300" />
            Deposited records
          </CardTitle>
          <CardDescription>
            Each accession is linked to a vouchered specimen and reviewer chain
            of custody.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Accession</TableHead>
                <TableHead>Species</TableHead>
                <TableHead>Marker</TableHead>
                <TableHead className="text-right">Length</TableHead>
                <TableHead>Submitter</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Quality</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DNA_SEQUENCES.map((d) => {
                const sp = getSpeciesById(d.speciesId);
                const c = getCountry(d.countryCode);
                return (
                  <TableRow key={d.id}>
                    <TableCell className="font-mono text-xs text-clay-300">
                      {d.accession}
                    </TableCell>
                    <TableCell className="italic">
                      {sp?.scientificName}
                    </TableCell>
                    <TableCell>
                      <Badge variant="info">{d.marker}</Badge>
                    </TableCell>
                    <TableCell className="text-right font-mono text-xs">
                      {formatNumber(d.length)} bp
                    </TableCell>
                    <TableCell className="text-sm">{d.submittedBy}</TableCell>
                    <TableCell className="text-sm">
                      {c?.flagEmoji} {c?.name}
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {formatDate(d.submittedAt)}
                    </TableCell>
                    <TableCell className="text-right font-mono text-xs">
                      {d.qualityScore}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 font-serif text-2xl font-semibold text-forest-800">
          {value}
        </p>
      </CardContent>
    </Card>
  );
}
