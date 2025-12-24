import { TrendingUp, TrendingDown, Users, Eye, Heart, MessageCircle, Share2, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Total Followers",
    value: "2.4M",
    change: "+12.5%",
    trend: "up",
    icon: Users,
  },
  {
    label: "Total Views",
    value: "48.2M",
    change: "+28.3%",
    trend: "up",
    icon: Eye,
  },
  {
    label: "Engagement Rate",
    value: "8.7%",
    change: "+2.1%",
    trend: "up",
    icon: Heart,
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
  {
    label: "Viral Score",
    value: "94",
    change: "+8",
    trend: "up",
    icon: Zap,
  },
];

export const OverviewStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-secondary border border-border rounded-2xl p-4 hover:border-primary/30 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-3">
            <stat.icon className="w-5 h-5 text-primary" />
          </div>
          
          <p className="text-xs font-medium text-muted-foreground mb-1">{stat.label}</p>
          <p className="text-2xl font-bold font-display text-foreground">{stat.value}</p>
          
          <div className={cn(
            "flex items-center gap-1 mt-2 text-xs font-medium",
            stat.trend === "up" ? "text-emerald-500" : "text-rose-500"
          )}>
            {stat.trend === "up" ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            {stat.change}
          </div>
        </div>
      ))}
    </div>
  );
};
