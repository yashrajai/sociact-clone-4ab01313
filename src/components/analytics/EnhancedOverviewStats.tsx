import { TrendingUp, TrendingDown, Users, Eye, Heart, MessageCircle, Share2, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { AIImpactBanner } from "./AIImpactBanner";
import { CriticalAlerts } from "./CriticalAlerts";
import { CompetitivePosition } from "./CompetitivePosition";
import { SocialMetrics } from "./SocialMetrics";
import { CompetitorInsights } from "./CompetitorInsights";
import { NicheTrends } from "./NicheTrends";

const stats = [
  {
    label: "Total Followers",
    value: "2.4M",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "from-violet-500 to-purple-600",
  },
  {
    label: "Total Views",
    value: "48.2M",
    change: "+28.3%",
    trend: "up",
    icon: Eye,
    color: "from-cyan-500 to-blue-600",
  },
  {
    label: "Engagement Rate",
    value: "8.7%",
    change: "+2.1%",
    trend: "up",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
  },
  {
    label: "Comments",
    value: "156K",
    change: "-3.2%",
    trend: "down",
    icon: MessageCircle,
    color: "from-amber-500 to-orange-600",
  },
  {
    label: "Shares",
    value: "89.4K",
    change: "+15.7%",
    trend: "up",
    icon: Share2,
    color: "from-emerald-500 to-green-600",
  },
  {
    label: "Viral Score",
    value: "94",
    change: "+8",
    trend: "up",
    icon: Zap,
    color: "from-primary to-emerald-400",
  },
];

export const EnhancedOverviewStats = () => {
  return (
    <div className="space-y-6">
      {/* AI Impact Banner */}
      <AIImpactBanner />

      {/* Critical Alerts */}
      <CriticalAlerts />

      {/* Competitive Position */}
      <CompetitivePosition />

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 group hover:border-primary/30 transition-all duration-300"
          >
            {/* Gradient background on hover */}
            <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br",
              stat.color
            )} />
            
            <div className="relative">
              <div className={cn(
                "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3",
                stat.color
              )}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              
              <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-2xl font-bold font-display text-foreground">{stat.value}</p>
              
              <div className={cn(
                "flex items-center gap-1 mt-2 text-xs font-medium",
                stat.trend === "up" ? "text-emerald-400" : "text-rose-400"
              )}>
                {stat.trend === "up" ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Accounts & Competitor Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SocialMetrics compact />
        <CompetitorInsights compact />
      </div>

      {/* Trending in Your Niche */}
      <NicheTrends compact />
    </div>
  );
};
