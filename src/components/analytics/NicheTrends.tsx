import { TrendingUp, Hash, Flame, Sparkles, ArrowUpRight, Clock } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

const trendingTopics = [
  { tag: "#AIGenerated", posts: "2.4M", growth: "+234%", heat: 98 },
  { tag: "#ContentCreator", posts: "8.9M", growth: "+45%", heat: 85 },
  { tag: "#ViralTrend", posts: "1.2M", growth: "+189%", heat: 92 },
  { tag: "#SocialMedia2024", posts: "5.6M", growth: "+67%", heat: 78 },
  { tag: "#CreatorEconomy", posts: "3.1M", growth: "+123%", heat: 88 },
  { tag: "#ShortFormContent", posts: "4.7M", growth: "+89%", heat: 82 },
];

const nicheData = [
  { date: "Jan", interest: 45, engagement: 32, competition: 28 },
  { date: "Feb", interest: 52, engagement: 38, competition: 31 },
  { date: "Mar", interest: 61, engagement: 45, competition: 35 },
  { date: "Apr", interest: 58, engagement: 52, competition: 42 },
  { date: "May", interest: 72, engagement: 61, competition: 48 },
  { date: "Jun", interest: 85, engagement: 75, competition: 55 },
];

const contentFormats = [
  { name: "Short-form video", share: 45, trend: "up", change: "+12%" },
  { name: "Carousel posts", share: 25, trend: "up", change: "+8%" },
  { name: "Stories", share: 15, trend: "down", change: "-3%" },
  { name: "Long-form video", share: 10, trend: "up", change: "+5%" },
  { name: "Static images", share: 5, trend: "down", change: "-22%" },
];

const upcomingTrends = [
  { title: "AI-Enhanced Content", description: "Using AI tools for content creation is expected to grow 300% in 2024", timeline: "Next 3 months", confidence: 94 },
  { title: "Micro-Communities", description: "Niche, engaged communities outperform broad audiences", timeline: "Ongoing", confidence: 87 },
  { title: "Interactive Content", description: "Polls, quizzes, and interactive stories drive 2x engagement", timeline: "Next 6 months", confidence: 81 },
];

interface NicheTrendsProps {
  compact?: boolean;
}

export const NicheTrends = ({ compact }: NicheTrendsProps) => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingTopics.map((topic, index) => (
            <div
              key={topic.tag}
              className="relative overflow-hidden bg-secondary/50 rounded-xl p-4 hover:bg-secondary/70 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Hash className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{topic.tag}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Flame className={cn(
                    "w-4 h-4",
                    topic.heat >= 90 ? "text-orange-500" : topic.heat >= 80 ? "text-amber-500" : "text-yellow-500"
                  )} />
                  <span className="text-xs text-muted-foreground">{topic.heat}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{topic.posts} posts</span>
                <span className="text-xs font-medium text-emerald-400">{topic.growth}</span>
              </div>
              
              {/* Heat indicator bar */}
              <div className="mt-3 h-1.5 bg-secondary rounded-full overflow-hidden">
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

      {/* Niche Interest Over Time */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold font-display text-foreground mb-2">Niche Growth</h3>
          <p className="text-sm text-muted-foreground mb-6">Interest, engagement, and competition levels</p>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={nicheData}>
                <defs>
                  <linearGradient id="colorInterest" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
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
                <Area type="monotone" dataKey="interest" stroke="#22c55e" fillOpacity={1} fill="url(#colorInterest)" strokeWidth={2} />
                <Area type="monotone" dataKey="engagement" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorEngagement)" strokeWidth={2} />
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

      {/* Upcoming Trends */}
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold font-display text-foreground">Predicted Trends</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingTrends.map((trend) => (
            <div
              key={trend.title}
              className="bg-secondary/50 rounded-xl p-5 hover:bg-secondary/70 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {trend.timeline}
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-full">
                  <span className="text-xs font-medium text-primary">{trend.confidence}% confidence</span>
                </div>
              </div>
              
              <h4 className="text-base font-semibold text-foreground mb-2">{trend.title}</h4>
              <p className="text-sm text-muted-foreground">{trend.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
