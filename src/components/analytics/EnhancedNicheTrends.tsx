import { TrendingUp, Hash, Flame, Sparkles, ArrowUpRight, Clock, AlertTriangle, Music } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

const urgentAlerts = [
  {
    type: "trending",
    icon: TrendingUp,
    title: "#AIGenerated exploding +234% in last 18 hours",
    description: "Peak Window: Next 24-48 hours | 14/20 competitors already using it",
    actions: ["Add to Next 3 Posts", "Dismiss"],
    color: "from-rose-500 to-red-600",
  },
  {
    type: "audio",
    icon: Music,
    title: '"Aesthetic Vibes Mix" expires in 4 hours',
    description: "Currently 3.4x average reach. Use immediately or lose opportunity.",
    actions: ["Apply to Scheduled Video", "Dismiss"],
    color: "from-amber-500 to-orange-600",
  },
];

const trendingTopics = [
  { tag: "#AIGenerated", posts: "2.4M", growth: "+234%", heat: 98 },
  { tag: "#ContentCreator", posts: "8.9M", growth: "+45%", heat: 85 },
  { tag: "#ViralTrend", posts: "1.2M", growth: "+189%", heat: 92 },
  { tag: "#SocialMedia2024", posts: "5.6M", growth: "+67%", heat: 78 },
  { tag: "#CreatorEconomy", posts: "3.1M", growth: "+123%", heat: 88 },
  { tag: "#ShortFormContent", posts: "4.7M", growth: "+89%", heat: 82 },
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
  { name: "Short-form video", share: 45, trend: "up", change: "+12%" },
  { name: "Carousel posts", share: 25, trend: "up", change: "+8%" },
  { name: "Stories", share: 15, trend: "down", change: "-3%" },
  { name: "Long-form video", share: 10, trend: "up", change: "+5%" },
  { name: "Static images", share: 5, trend: "down", change: "-22%" },
];

interface EnhancedNicheTrendsProps {
  compact?: boolean;
}

export const EnhancedNicheTrends = ({ compact }: EnhancedNicheTrendsProps) => {
  if (compact) {
    return (
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-5">
        <h3 className="text-lg font-semibold font-display text-foreground mb-4">Trending in Your Niche</h3>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.slice(0, 6).map((topic) => (
            <div
              key={topic.tag}
              className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-full hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all cursor-pointer"
            >
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
    <div className="space-y-6">
      {/* Urgent Alerts */}
      <div className="space-y-3">
        {urgentAlerts.map((alert, index) => (
          <div
            key={index}
            className={cn(
              "relative overflow-hidden rounded-2xl p-4 border",
              alert.type === "trending" ? "bg-rose-500/10 border-rose-500/30" : "bg-amber-500/10 border-amber-500/30"
            )}
          >
            <div className="flex items-start gap-4">
              <div className={cn(
                "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0",
                alert.color
              )}>
                <alert.icon className="w-5 h-5 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-xs font-semibold uppercase",
                    alert.type === "trending" ? "bg-rose-500/20 text-rose-400" : "bg-amber-500/20 text-amber-400"
                  )}>
                    {alert.type === "trending" ? "🔥 BREAKING" : "⚡ TRENDING AUDIO"}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1">{alert.title}</h4>
                <p className="text-xs text-muted-foreground">{alert.description}</p>
                
                <div className="flex items-center gap-2 mt-3">
                  {alert.actions.map((action, i) => (
                    <button
                      key={action}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                        i === 0 
                          ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                          : "bg-secondary text-foreground hover:bg-secondary/80"
                      )}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trending Topics */}
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold font-display text-foreground">Trending Topics</h3>
            <p className="text-sm text-muted-foreground">What's hot in your niche right now</p>
          </div>
          <button className="flex items-center gap-2 text-sm text-primary font-medium hover:underline">
            View all <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-4">
          {trendingTopics.map((topic) => (
            <div
              key={topic.tag}
              className="relative overflow-hidden bg-secondary/50 rounded-xl p-4 hover:bg-secondary/70 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Hash className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{topic.tag}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">{topic.posts} posts</span>
                  <span className="text-xs font-medium text-emerald-400">{topic.growth}</span>
                  <div className="flex items-center gap-1">
                    <Flame className={cn(
                      "w-4 h-4",
                      topic.heat >= 90 ? "text-orange-500" : topic.heat >= 80 ? "text-amber-500" : "text-yellow-500"
                    )} />
                    <span className="text-xs text-muted-foreground">{topic.heat}</span>
                  </div>
                </div>
              </div>
              
              {/* Heat indicator bar */}
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className={cn(
                    "h-full rounded-full transition-all duration-500",
                    topic.heat >= 90 ? "bg-gradient-to-r from-orange-500 to-red-500" : 
                    topic.heat >= 80 ? "bg-gradient-to-r from-amber-500 to-orange-500" : 
                    "bg-gradient-to-r from-yellow-500 to-amber-500"
                  )}
                  style={{ width: `${topic.heat}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Niche Interest Over Time & Content Format Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold font-display text-foreground mb-2">Niche Growth</h3>
          <p className="text-sm text-muted-foreground mb-6">Interest and engagement levels over time</p>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={nicheData}>
                <defs>
                  <linearGradient id="colorInterestEnhanced" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorEngagementEnhanced" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="date" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #333',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }} 
                />
                <Area type="monotone" dataKey="interest" stroke="#22c55e" fillOpacity={1} fill="url(#colorInterestEnhanced)" strokeWidth={2} />
                <Area type="monotone" dataKey="engagement" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorEngagementEnhanced)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground">Interest</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-violet-500" />
              <span className="text-muted-foreground">Engagement</span>
            </div>
          </div>
        </div>

        {/* Content Format Trends */}
        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold font-display text-foreground mb-2">Content Format Trends</h3>
          <p className="text-sm text-muted-foreground mb-6">What formats are performing best</p>
          
          <div className="space-y-4">
            {contentFormats.map((format) => (
              <div key={format.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{format.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">{format.share}%</span>
                    <span className={cn(
                      "text-xs font-medium",
                      format.trend === "up" ? "text-emerald-400" : "text-rose-400"
                    )}>
                      {format.change}
                    </span>
                  </div>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${format.share}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
