import { useState } from "react";
import { EnhancedOverviewStats } from "./EnhancedOverviewStats";
import { AIIntelligence } from "./AIIntelligence";
import { EnhancedCompetitorInsights } from "./EnhancedCompetitorInsights";
import { EnhancedSocialMetrics } from "./EnhancedSocialMetrics";
import { EnhancedNicheTrends } from "./EnhancedNicheTrends";
import { EnhancedReelPerformance } from "./EnhancedReelPerformance";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "ai-intelligence", label: "AI Intelligence", highlight: true },
  { id: "competitors", label: "Competitors" },
  { id: "social", label: "Social" },
  { id: "trends", label: "Trends" },
  { id: "content", label: "Content" },
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
      <div className="flex items-center gap-1 p-1 bg-secondary/50 rounded-xl w-fit overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5",
              activeTab === tab.id
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.highlight && <Zap className="w-3.5 h-3.5" />}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-6">
        {activeTab === "overview" && <EnhancedOverviewStats />}
        {activeTab === "ai-intelligence" && <AIIntelligence />}
        {activeTab === "competitors" && <EnhancedCompetitorInsights />}
        {activeTab === "social" && <EnhancedSocialMetrics />}
        {activeTab === "trends" && <EnhancedNicheTrends />}
        {activeTab === "content" && <EnhancedReelPerformance />}
      </div>
    </div>
  );
};
