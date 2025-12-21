import { TrendingUp, TrendingDown, Users, Eye, Heart, Zap, Bot, Target, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Followers",
    value: "2.4M",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "from-violet-500 to-purple-600",
  },
  {
    label: "Views",
    value: "48.2M",
    change: "+28.3%",
    trend: "up",
    icon: Eye,
    color: "from-cyan-500 to-blue-600",
  },
  {
    label: "Engagement",
    value: "8.7%",
    change: "+2.1%",
    trend: "up",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
  },
  {
    label: "AI Score",
    value: "94",
    change: "+8",
    trend: "up",
    icon: Zap,
    color: "from-primary to-emerald-400",
  },
];

const actionItems = [
  { label: "#AIGenerated trending +234%", action: "Add to Posts", urgent: true },
  { label: "Product demos gap: -340%", action: "View Scripts", urgent: false },
];

export const EnhancedOverviewStats = () => {
  return (
    <div className="space-y-4">
      {/* AI Impact + Actions Combined */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-emerald-500/10 to-cyan-500/10 border border-primary/20 rounded-2xl p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">AI saved 47 hrs • +34% engagement • $8.4K value</p>
              <p className="text-xs text-muted-foreground">96% success rate this week</p>
            </div>
          </div>
          <button className="flex items-center gap-1 text-sm text-primary font-medium hover:underline">
            View Report <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Action Items */}
      <div className="flex gap-3">
        {actionItems.map((item, i) => (
          <div
            key={i}
            className={cn(
              "flex-1 flex items-center justify-between p-3 rounded-xl border",
              item.urgent ? "bg-rose-500/10 border-rose-500/30" : "bg-amber-500/10 border-amber-500/30"
            )}
          >
            <span className="text-sm text-foreground">{item.label}</span>
            <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-medium">
              {item.action}
            </button>
          </div>
        ))}
      </div>

      {/* Metrics Grid - 4 cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 group hover:border-primary/30 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center",
                stat.color
              )}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-foreground">{stat.value}</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <span className={cn(
                    "flex items-center gap-0.5 text-xs font-medium",
                    stat.trend === "up" ? "text-emerald-400" : "text-rose-400"
                  )}>
                    {stat.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Competitive Position - Compact */}
      <div className="bg-secondary/30 border border-border/50 rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Target className="w-5 h-5 text-primary" />
            <div>
              <span className="text-sm font-semibold text-foreground">Rank #7</span>
              <span className="text-sm text-muted-foreground"> of 20 • </span>
              <span className="text-sm text-emerald-400">↑3 this week</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-muted-foreground">Gap: <span className="text-amber-400 font-medium">-3.6% engagement</span></span>
            <button className="text-primary font-medium hover:underline">Close gap →</button>
          </div>
        </div>
      </div>
    </div>
  );
};
