import {
  AlertTriangle,
  ClipboardCheck,
  Mountain,
  ShieldCheck,
  Star,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { SeasonalFruitingMap } from "@/components/dashboard/SeasonalFruitingMap";
import { RecentVerifiedRecords } from "@/components/dashboard/RecentVerifiedRecords";
import { ReviewWorkflowPanel } from "@/components/dashboard/ReviewWorkflowPanel";
import { ResearchLibrarySection } from "@/components/dashboard/ResearchLibrarySection";
import { CountryResearchCards } from "@/components/dashboard/CountryResearchCards";
import { ResearchEvidenceMap } from "@/components/dashboard/ResearchEvidenceMap";
import { TopResearchTopics } from "@/components/dashboard/TopResearchTopics";
import { SafetyReminderCard } from "@/components/dashboard/SafetyReminderCard";
import { VerifiedHighlandRecordBadge } from "@/components/dashboard/VerifiedHighlandRecordBadge";
import {
  CURRENT_REVIEWER,
  OBSERVATIONS,
  REVIEWS,
  SPECIES,
} from "@/lib/data";
import { formatNumber } from "@/lib/utils";

export default function DashboardPage() {
  const pending = REVIEWS.filter(
    (r) => r.status === "Submitted" || r.status === "Under Review",
  ).length;
  const verified = OBSERVATIONS.filter((o) => o.status === "Verified").length;
  const newHighland = SPECIES.filter((s) => s.highlandRecord).length;
  const risk = OBSERVATIONS.filter(
    (o) => o.status === "Disputed" || o.status === "Needs More Evidence",
  ).length;

  return (
    <>
      <PageHeader
        eyebrow="Asia-Pacific Highland Network"
        title="Mycology Research Dashboard"
        description="Peer-reviewed observations, papers, DNA evidence, and toxicology alerts from the highland regions of China, Taiwan, South Korea, India, and Japan."
        action={
          <div className="flex flex-wrap items-center gap-2">
            <VerifiedHighlandRecordBadge
              recordId="HMN-2026-0142"
              verifiedAt="Apr 22 2026"
              verifiedBy="Dr. Li Wen"
              size="sm"
            />
            <Button>Submit observation</Button>
          </div>
        }
      />

      <section
        aria-label="Key performance indicators"
        className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5"
      >
        <KpiCard
          label="Pending Reviews"
          value={formatNumber(pending)}
          icon={ClipboardCheck}
          helper="Awaiting reviewer action"
          delta={{ value: "+3 this week", trend: "up" }}
          tone="alpine"
        />
        <KpiCard
          label="Recently Verified"
          value={formatNumber(verified)}
          icon={ShieldCheck}
          helper="Last 30 days, peer-confirmed"
          delta={{ value: "+12% MoM", trend: "up" }}
          tone="forest"
        />
        <KpiCard
          label="New Highland Records"
          value={formatNumber(newHighland)}
          icon={Mountain}
          helper="Active highland species records"
          delta={{ value: "+2 species", trend: "up" }}
          tone="clay"
        />
        <KpiCard
          label="Risk Alerts"
          value={formatNumber(risk)}
          icon={AlertTriangle}
          helper="Disputed or pending evidence"
          delta={{ value: "-1 vs. last cycle", trend: "down" }}
          tone="toxic"
        />
        <KpiCard
          label="Reviewer Reputation"
          value={`${CURRENT_REVIEWER.reputation}`}
          icon={Star}
          helper={`${CURRENT_REVIEWER.name}`}
          delta={{ value: "+1.2 pts", trend: "up" }}
          tone="neutral"
        />
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <SeasonalFruitingMap />
        </div>
        <ReviewWorkflowPanel />
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentVerifiedRecords />
        </div>
        <ResearchLibrarySection />
      </section>

      <section className="grid gap-4">
        <CountryResearchCards />
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <ResearchEvidenceMap />
        </div>
        <TopResearchTopics />
      </section>

      <SafetyReminderCard />
    </>
  );
}
