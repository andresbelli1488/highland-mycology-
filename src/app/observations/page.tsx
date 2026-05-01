import { Camera, Dna, MapPin } from "lucide-react";
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
import { StatusPill } from "@/components/ui/status-pill";
import { OBSERVATIONS, getSpeciesById, getCountry } from "@/lib/data";
import { formatDate, formatNumber } from "@/lib/utils";

export default function ObservationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Field Records"
        title="Observations"
        description="Submitted highland observations across the network. Each record is reviewed by at least one regional specialist before being marked verified."
      />

      <Card>
        <CardHeader>
          <CardTitle>All observations</CardTitle>
          <CardDescription>
            Click a row to open the observation detail (placeholder).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Record</TableHead>
                <TableHead>Species</TableHead>
                <TableHead>Region</TableHead>
                <TableHead className="text-right">Elevation</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Evidence</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {OBSERVATIONS.map((obs) => {
                const sp = getSpeciesById(obs.speciesId);
                const country = getCountry(obs.countryCode);
                return (
                  <TableRow key={obs.id}>
                    <TableCell className="font-mono text-xs text-clay-300">
                      {obs.id.toUpperCase()}
                    </TableCell>
                    <TableCell className="italic">
                      {sp?.scientificName}
                    </TableCell>
                    <TableCell className="text-sm">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-clay-300" />
                        {country?.flagEmoji} {obs.region}
                      </span>
                    </TableCell>
                    <TableCell className="text-right font-mono text-xs">
                      {formatNumber(obs.elevationM)} m
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {formatDate(obs.observedAt)}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {obs.hasPhoto && (
                          <Badge variant="outline">
                            <Camera className="h-3 w-3" /> Photo
                          </Badge>
                        )}
                        {obs.hasDnaSample && (
                          <Badge variant="info">
                            <Dna className="h-3 w-3" /> DNA
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <StatusPill status={obs.status} />
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
