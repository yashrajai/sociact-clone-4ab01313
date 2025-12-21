import { TrendingUp, TrendingDown, Trophy, ArrowRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

const competitors = [
  {
    name: "CompetitorA",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    followers: "3.2M",
    growth: "+18.2%",
    trend: "up",
    engagement: "9.4%",
  },
  {
    name: "CompetitorB",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    followers: "2.8M",
    growth: "+12.5%",
    trend: "up",
    engagement: "7.8%",
  },
  {
    name: "CompetitorD",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    followers: "4.1M",
    growth: "+25.8%",
    trend: "up",
    engagement: "11.2%",
  },
];

const comparisonData = [
  { name: "You", followers: 2400, color: "#22c55e" },
  { name: "Comp A", followers: 3200, color: "#8b5cf6" },
  { name: "Comp B", followers: 2800, color: "#ec4899" },
  { name: "Comp D", followers: 4100, color: "#f59e0b" },
];

const contentGaps = [
  { type: "Product Demos", you: "6.8%", best: "15.7%", gap: "-8.9%" },
  { type: "Behind Scenes", you: "6.8%", best: "13.2%", gap: "-6.4%" },
];

interface EnhancedCompetitorInsightsProps {
  compact?: boolean;
}

export const EnhancedCompetitorInsights = ({ compact }: EnhancedCompetitorInsightsProps) => {
  if (compact) {
    return (
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-5">
        <h3 className="text-lg font-semibold font-display text-foreground mb-4">Competitor Activity</h3>
        <div className="space-y-3">
          {[
            { message: "CompetitorD's reel hit 5M views", time: "2h ago" },
            { message: "CompetitorA launched campaign", time: "5h ago" },
          ].map((alert, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
              <span className="text-sm text-foreground">{alert.message}</span>
              <span className="text-xs text-muted-foreground">{alert.time}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Top Performer - Compact */}
      <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Top: CompetitorA • 3.2M • +18.2% growth</p>
              <p className="text-xs text-amber-400">Your gap: -6.5% engagement</p>
            </div>
          </div>
          <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
            Adopt Strategy
          </button>
        </div>
      </div>

      {/* Competitor Cards + Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Competitor Cards */}
        <div className="bg-secondary/30 border border-border/50 rounded-2xl p-4">
          <h3 className="text-sm font-semibold text-foreground mb-3">Top Competitors</h3>
          <div className="space-y-2">
            {competitors.map((comp) => (
              <div key={comp.name} className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <img src={comp.avatar} alt={comp.name} className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{comp.name}</p>
                    <p className="text-xs text-muted-foreground">{comp.followers}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={cn(
                    "text-xs font-medium flex items-center gap-1",
                    comp.trend === "up" ? "text-emerald-400" : "text-rose-400"
                  )}>
                    {comp.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {comp.growth}
                  </span>
                  <p className="text-xs text-muted-foreground">{comp.engagement} eng</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Chart */}
        <div className="bg-secondary/30 border border-border/50 rounded-2xl p-4">
          <h3 className="text-sm font-semibold text-foreground mb-3">Follower Comparison (K)</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#666" fontSize={11} />
                <YAxis stroke="#666" fontSize={11} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--secondary))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }} 
                />
                <Bar dataKey="followers" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Content Gaps - Compact */}
      <div className="bg-secondary/30 border border-border/50 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-foreground">Content Gaps to Close</h3>
          <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
            Generate Content <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {contentGaps.map((gap) => (
            <div key={gap.type} className="flex items-center justify-between p-3 bg-rose-500/10 rounded-xl">
              <span className="text-sm text-foreground">{gap.type}</span>
              <span className="text-sm font-medium text-rose-400">{gap.gap}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
