import { ProfileSnapshot } from "./ProfileSnapshot";
import { SociActInsights } from "./SociActInsights";
import { CompetitorEdge } from "./CompetitorEdge";
import { AutomationResults } from "./AutomationResults";
import { NextMoves } from "./NextMoves";

export const AnalyticsDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold font-display text-foreground">Analytics</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Your account insights and automation performance
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
        </div>
      </div>

      {/* Profile Snapshot - Top Banner */}
      <ProfileSnapshot />

      {/* Two Column Layout: Insights & Competitor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SociActInsights />
        <CompetitorEdge />
      </div>

      {/* Automation Results - Compact Bar */}
      <AutomationResults />

      {/* SociAct's Next Moves */}
      <NextMoves />
    </div>
  );
};
