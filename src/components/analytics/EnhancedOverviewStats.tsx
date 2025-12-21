import { TrendingUp, TrendingDown, Users, Eye, MessageCircle, Share2, Download, MoreHorizontal, Search, Calendar, BarChart3, ChevronRight, Zap, Clock, CheckCircle2, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const stats = [
  {
    label: "Followers",
    value: "1.2M",
    change: "+5.2%",
    trend: "up",
    icon: Users,
  },
  {
    label: "Views",
    value: "48.2M",
    change: "+28.3%",
    trend: "up",
    icon: Eye,
  },
  {
    label: "Comments",
    value: "156K",
    change: "-3.2%",
    trend: "down",
    icon: MessageCircle,
  },
  {
    label: "Shares",
    value: "89.4K",
    change: "+15.7%",
    trend: "up",
    icon: Share2,
  },
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
    views: "94K",
    viewsChange: "+23%",
    engagement: "12.6%",
    comments: "1,047",
    outcome: "Success - Applied to 3 more videos",
    status: "success",
  },
  {
    title: "BTS Video - Making Process",
    views: "67K",
    viewsChange: "-8%",
    engagement: "9.2%",
    comments: null,
    outcome: "Fix Applied: 25 sec cap, 2-sec hook for next BTS",
    status: "warning",
  },
];

export const EnhancedOverviewStats = () => {
  const [activePlatform, setActivePlatform] = useState<"instagram" | "facebook">("instagram");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Analytics</h2>
          <p className="text-sm text-muted-foreground">Track performance, strategy, and results</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Platform Toggle */}
          <div className="flex items-center gap-1 bg-secondary/50 rounded-lg p-1">
            <button
              onClick={() => setActivePlatform("instagram")}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all",
                activePlatform === "instagram"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className={cn(
                "w-2 h-2 rounded-full",
                activePlatform === "instagram" ? "bg-primary" : "bg-muted-foreground/30"
              )} />
              Instagram
            </button>
            <button
              onClick={() => setActivePlatform("facebook")}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all",
                activePlatform === "facebook"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className={cn(
                "w-2 h-2 rounded-full",
                activePlatform === "facebook" ? "bg-primary" : "bg-muted-foreground/30"
              )} />
              Facebook
            </button>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-secondary/30 border border-border/50 rounded-xl p-5 hover:border-border transition-colors"
          >
            <div className="flex items-center gap-2 mb-3">
              <stat.icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
            <p className="text-3xl font-semibold text-foreground mb-1">{stat.value}</p>
            <div className={cn(
              "flex items-center gap-1 text-sm font-medium",
              stat.trend === "up" ? "text-emerald-500" : "text-rose-500"
            )}>
              {stat.trend === "up" ? (
                <TrendingUp className="w-3.5 h-3.5" />
              ) : (
                <TrendingDown className="w-3.5 h-3.5" />
              )}
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Competitor Intelligence */}
      <div className="bg-secondary/30 border border-border/50 rounded-xl p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Search className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">Competitor Intelligence</h3>
              <p className="text-sm text-muted-foreground">340 posts analyzed • 15 competitors • 23 patterns found</p>
            </div>
          </div>
        </div>
        <div className="space-y-3 mb-4">
          {competitorPatterns.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-muted-foreground">{item.pattern}</span>
              <span className="text-foreground font-medium">→ {item.result}</span>
            </div>
          ))}
        </div>
        <Button variant="ghost" size="sm" className="gap-1 text-primary hover:text-primary/80 -ml-2">
          View Full Analysis
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Strategy Mapping */}
      <div className="bg-secondary/30 border border-border/50 rounded-xl p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">Strategy Mapping</h3>
              <p className="text-sm text-muted-foreground">Content planned for Dec 23-29</p>
            </div>
          </div>
        </div>
        <div className="space-y-4 mb-4">
          {scheduledContent.map((item, index) => (
            <div key={index} className="bg-background/50 rounded-lg p-4 border border-border/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-muted-foreground">{item.day}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-sm font-medium text-foreground">{item.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.status === "generating" ? (
                    <div className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-xs text-amber-500 font-medium">Generating {item.progress}%</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground font-medium">Pending Approval</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground">
                  Based on: <span className="text-foreground/80">{item.basis}</span>
                  <span className="mx-2">•</span>
                  Target: <span className="text-foreground/80">{item.target}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="h-7 text-xs">Preview</Button>
                  <Button variant="ghost" size="sm" className="h-7 text-xs">
                    {item.status === "generating" ? "Edit" : "Approve"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">+ 10 more posts</span>
          <Button variant="ghost" size="sm" className="gap-1 text-primary hover:text-primary/80">
            View Full Calendar
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Performance Results */}
      <div className="bg-secondary/30 border border-border/50 rounded-xl p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">Performance Results</h3>
              <p className="text-sm text-muted-foreground">Impact of last week's strategies</p>
            </div>
          </div>
        </div>
        <div className="space-y-4 mb-4">
          {performanceResults.map((item, index) => (
            <div key={index} className="bg-background/50 rounded-lg p-4 border border-border/30">
              <div className="flex items-start gap-3">
                {item.status === "success" ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground mb-1">{item.title}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span>{item.views} views <span className={item.viewsChange.startsWith("+") ? "text-emerald-500" : "text-rose-500"}>({item.viewsChange})</span></span>
                    <span>•</span>
                    <span>{item.engagement} engagement</span>
                    {item.comments && (
                      <>
                        <span>•</span>
                        <span>{item.comments} comments</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className={item.status === "success" ? "text-emerald-500" : "text-amber-500"}>
                      {item.status === "success" ? "Outcome:" : "Fix Applied:"}
                    </span>{" "}
                    {item.outcome.replace("Outcome: ", "").replace("Fix Applied: ", "")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-border/30">
          <div className="text-sm text-muted-foreground">
            Week Total: <span className="text-foreground font-medium">12 posts</span> • <span className="text-emerald-500">87% hit targets</span> • <span className="text-emerald-500">+12.5% growth</span>
          </div>
          <Button variant="ghost" size="sm" className="gap-1 text-primary hover:text-primary/80">
            View All Results
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
