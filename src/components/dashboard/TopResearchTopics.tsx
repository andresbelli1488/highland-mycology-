"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PAPERS } from "@/lib/data";

const TOPIC_COLORS: Record<string, string> = {
  "DNA Sequence": "#4878a6",
  Toxicological: "#b8351f",
  Ecological: "#2f5a39",
  Ethnomycological: "#7a4f31",
  "Field Survey": "#9a8456",
  Morphological: "#bda476",
  "Herbarium Specimen": "#5e3a25",
};

export function TopResearchTopics() {
  const totals = new Map<string, number>();
  PAPERS.forEach((p) => {
    totals.set(p.evidenceType, (totals.get(p.evidenceType) ?? 0) + 1);
  });
  const data = Array.from(totals.entries())
    .map(([topic, count]) => ({ topic, count }))
    .sort((a, b) => b.count - a.count);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Research Topics</CardTitle>
        <CardDescription>
          Evidence-type breakdown across reviewed papers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ left: 8, right: 16, top: 6, bottom: 6 }}
            >
              <XAxis
                type="number"
                stroke="#214328"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                allowDecimals={false}
              />
              <YAxis
                dataKey="topic"
                type="category"
                stroke="#214328"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                width={130}
              />
              <Tooltip
                cursor={{ fill: "rgba(122, 79, 49, 0.08)" }}
                contentStyle={{
                  backgroundColor: "#f6f1e7",
                  border: "1px solid #d8c39a",
                  borderRadius: 6,
                  fontSize: 12,
                }}
              />
              <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                {data.map((d) => (
                  <Cell key={d.topic} fill={TOPIC_COLORS[d.topic] ?? "#2f5a39"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
