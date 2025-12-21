import { TrendingUp, TrendingDown, Users, Eye, MessageCircle, Share2, Download, MoreHorizontal, Search, Calendar, BarChart3, ArrowRight, Zap, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const stats = [
  { label: "Followers", value: "1.2M", change: "+5.2%", trend: "up" },
  { label: "Views", value: "48.2M", change: "+28.3%", trend: "up" },
  { label: "Comments", value: "156K", change: "-3.2%", trend: "down" },
  { label: "Shares", value: "89.4K", change: "+15.7%", trend: "up" },
];

const competitorPatterns = [
  { pattern: "Hook-based reels", result: "67% retention" },
  { pattern: "Question CTAs", result: "+89% comments" },
  { pattern: "Trending audio (48hr window)", result: "3.4x reach" },
];

const scheduledContent = [
  {
    day: "MON 23",
    time: "2:45 PM",
    title: "Product Demo",
    basis: "Competitor A hook strategy",
    target: "85-120K views",
    status: "generating",
    progress: 78,
  },
  {
    day: "WED 25",
    time: "2:45 PM",
    title: "Educational Carousel",
    basis: "Market gap",
    target: "180-240 saves",
    status: "pending",
  },
];

const performanceResults = [
  {
    title: "Product Demo - Holiday Special",
    metrics: "94K views (+23%) • 12.6% engagement • 1,047 comments",
    outcome: "Applied to 3 more videos",
    status: "success",
  },
  {
    title: "BTS Video - Making Process",
    metrics: "67K views (-8%) • 9.2% engagement",
    outcome: "25 sec cap, 2-sec hook for next BTS",
    status: "warning",
  },
];

export const EnhancedOverviewStats = () => {
  const [activePlatform, setActivePlatform] = useState<"instagram" | "facebook">("instagram");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-medium text-foreground tracking-tight">Analytics</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Track performance, strategy, and results</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-muted/50 rounded-full p-0.5">
            {["instagram", "facebook"].map((platform) => (
              <button
                key={platform}
                onClick={() => setActivePlatform(platform as "instagram" | "facebook")}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all capitalize",
                  activePlatform === platform
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {platform}
              </button>
            ))}
          </div>
          <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-muted-foreground">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-foreground tracking-tight">{stat.value}</span>
              <span className={cn(
                "text-xs font-medium flex items-center gap-0.5",
                stat.trend === "up" ? "text-emerald-600" : "text-rose-500"
              )}>
                {stat.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="h-px bg-border" />

      {/* Competitor Intelligence */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Search className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-foreground">Competitor Intelligence</h2>
              <p className="text-xs text-muted-foreground">340 posts • 15 competitors • 23 patterns</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="h-7 text-xs text-muted-foreground gap-1">
            View All <ArrowRight className="w-3 h-3" />
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {competitorPatterns.map((item, i) => (
            <div key={i} className="bg-muted/30 rounded-lg px-4 py-3">
              <p className="text-xs text-muted-foreground mb-1">{item.pattern}</p>
              <p className="text-sm font-medium text-foreground">{item.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategy Mapping */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-foreground">Strategy Mapping</h2>
              <p className="text-xs text-muted-foreground">Dec 23-29 • 12 posts scheduled</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="h-7 text-xs text-muted-foreground gap-1">
            View Calendar <ArrowRight className="w-3 h-3" />
          </Button>
        </div>
        <div className="space-y-2">
          {scheduledContent.map((item, i) => (
            <div key={i} className="flex items-center justify-between bg-muted/30 rounded-lg px-4 py-3">
              <div className="flex items-center gap-4">
                <div className="text-center min-w-[48px]">
                  <p className="text-[10px] font-medium text-muted-foreground">{item.day}</p>
                  <p className="text-xs text-foreground">{item.time}</p>
                </div>
                <div className="h-8 w-px bg-border" />
                <div>
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.basis} • {item.target}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {item.status === "generating" ? (
                  <div className="flex items-center gap-1.5 text-amber-600">
                    <Zap className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">{item.progress}%</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-xs">Pending</span>
                  </div>
                )}
                <Button variant="outline" size="sm" className="h-7 text-xs">
                  {item.status === "generating" ? "Preview" : "Approve"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Results */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-medium text-foreground">Performance Results</h2>
              <p className="text-xs text-muted-foreground">Last week • 12 posts • 87% hit targets</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="h-7 text-xs text-muted-foreground gap-1">
            View All <ArrowRight className="w-3 h-3" />
          </Button>
        </div>
        <div className="space-y-2">
          {performanceResults.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-muted/30 rounded-lg px-4 py-3">
              {item.status === "success" ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.metrics}</p>
              </div>
              <div className="text-right shrink-0">
                <span className={cn(
                  "text-xs font-medium",
                  item.status === "success" ? "text-emerald-600" : "text-amber-500"
                )}>
                  {item.status === "success" ? "Success" : "Fixed"}
                </span>
                <p className="text-xs text-muted-foreground mt-0.5 max-w-[180px]">{item.outcome}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
          <span>Week summary: <span className="text-emerald-600 font-medium">+12.5% growth</span></span>
        </div>
      </section>
    </div>
  );
};
