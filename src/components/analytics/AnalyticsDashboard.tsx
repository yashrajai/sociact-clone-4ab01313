import { useState } from "react";
import { CompetitorInsights } from "./CompetitorInsights";
import { NicheTrends } from "./NicheTrends";
import { SocialMetrics } from "./SocialMetrics";
import { ReelPerformance } from "./ReelPerformance";
import { OverviewStats } from "./OverviewStats";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "social", label: "Social Metrics" },
  { id: "competitors", label: "Competitors" },
  { id: "niche", label: "Niche Trends" },
  { id: "content", label: "Content Performance" },
];

export const AnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold font-display text-foreground">Analytics</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Track your performance, competitors, and industry trends
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 p-1 bg-secondary/50 rounded-xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              activeTab === tab.id
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-6">
        {activeTab === "overview" && (
          <>
            <OverviewStats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SocialMetrics compact />
              <CompetitorInsights compact />
            </div>
            <NicheTrends compact />
          </>
        )}
        {activeTab === "social" && <SocialMetrics />}
        {activeTab === "competitors" && <CompetitorInsights />}
        {activeTab === "niche" && <NicheTrends />}
        {activeTab === "content" && <ReelPerformance />}
      </div>
    </div>
  );
};
