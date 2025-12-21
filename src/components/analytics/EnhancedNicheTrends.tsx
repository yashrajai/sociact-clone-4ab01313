import { TrendingUp, Hash, Flame, ArrowRight, Music } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

const trendingTopics = [
  { tag: "#AIGenerated", growth: "+234%", heat: 98 },
  { tag: "#ContentCreator", growth: "+45%", heat: 85 },
  { tag: "#ViralTrend", growth: "+189%", heat: 92 },
  { tag: "#ShortFormContent", growth: "+89%", heat: 82 },
];

const nicheData = [
  { date: "Jan", interest: 45, engagement: 32 },
  { date: "Feb", interest: 52, engagement: 38 },
  { date: "Mar", interest: 61, engagement: 45 },
  { date: "Apr", interest: 58, engagement: 52 },
  { date: "May", interest: 72, engagement: 61 },
  { date: "Jun", interest: 85, engagement: 75 },
];

const contentFormats = [
  { name: "Short-form video", share: 45, change: "+12%" },
  { name: "Carousel posts", share: 25, change: "+8%" },
  { name: "Stories", share: 15, change: "-3%" },
];

interface EnhancedNicheTrendsProps {
  compact?: boolean;
}

export const EnhancedNicheTrends = ({ compact }: EnhancedNicheTrendsProps) => {
  if (compact) {
    return (
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-5">
        <h3 className="text-lg font-semibold font-display text-foreground mb-4">Trending</h3>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.slice(0, 4).map((topic) => (
            <div key={topic.tag} className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-full">
              <Hash className="w-3 h-3 text-primary" />
              <span className="text-sm text-foreground">{topic.tag.slice(1)}</span>
              <span className="text-xs text-emerald-400">{topic.growth}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Urgent Alert - Single */}
      <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">#AIGenerated exploding +234% in 18 hours</p>
              <p className="text-xs text-muted-foreground">Peak window: Next 24-48 hours</p>
            </div>
          </div>
          <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
            Add to Posts
          </button>
        </div>
      </div>

      {/* Trending Topics + Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Topics */}
        <div className="bg-secondary/30 border border-border/50 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground">Trending Topics</h3>
            <button className="text-primary text-xs font-medium hover:underline">View all</button>
          </div>
          <div className="space-y-2">
            {trendingTopics.map((topic) => (
              <div key={topic.tag} className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                <div className="flex items-center gap-2">
                  <Hash className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{topic.tag}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-emerald-400">{topic.growth}</span>
                  <Flame className={cn(
                    "w-4 h-4",
                    topic.heat >= 90 ? "text-orange-500" : "text-amber-500"
                  )} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Niche Growth Chart */}
        <div className="bg-secondary/30 border border-border/50 rounded-2xl p-4">
          <h3 className="text-sm font-semibold text-foreground mb-3">Niche Growth</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={nicheData}>
                <defs>
                  <linearGradient id="colorInterestTrend" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorEngagementTrend" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="date" stroke="#666" fontSize={11} />
                <YAxis stroke="#666" fontSize={11} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--secondary))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }} 
                />
                <Area type="monotone" dataKey="interest" stroke="#22c55e" fillOpacity={1} fill="url(#colorInterestTrend)" strokeWidth={2} />
                <Area type="monotone" dataKey="engagement" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorEngagementTrend)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Content Formats - Compact */}
      <div className="bg-secondary/30 border border-border/50 rounded-2xl p-4">
        <h3 className="text-sm font-semibold text-foreground mb-3">Top Content Formats</h3>
        <div className="grid grid-cols-3 gap-3">
          {contentFormats.map((format) => (
            <div key={format.name} className="p-3 bg-secondary/50 rounded-xl text-center">
              <p className="text-lg font-bold text-foreground">{format.share}%</p>
              <p className="text-xs text-muted-foreground">{format.name}</p>
              <p className={cn(
                "text-xs font-medium mt-1",
                format.change.startsWith("+") ? "text-emerald-400" : "text-rose-400"
              )}>{format.change}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
