import { TrendingUp, TrendingDown, Eye, Users, Activity, ExternalLink, AlertCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { cn } from "@/lib/utils";

const competitors = [
  {
    name: "CompetitorA",
    handle: "@competitor_a",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    followers: "3.2M",
    growth: "+18.2%",
    trend: "up",
    engagement: "9.4%",
    posts: 156,
    avgLikes: "245K",
    topContent: "Product launches",
  },
  {
    name: "CompetitorB",
    handle: "@competitor_b",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    followers: "2.8M",
    growth: "+12.5%",
    trend: "up",
    engagement: "7.8%",
    posts: 203,
    avgLikes: "189K",
    topContent: "Behind the scenes",
  },
  {
    name: "CompetitorC",
    handle: "@competitor_c",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    followers: "1.9M",
    growth: "-2.3%",
    trend: "down",
    engagement: "5.2%",
    posts: 89,
    avgLikes: "98K",
    topContent: "Tutorials",
  },
  {
    name: "CompetitorD",
    handle: "@competitor_d",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    followers: "4.1M",
    growth: "+25.8%",
    trend: "up",
    engagement: "11.2%",
    posts: 312,
    avgLikes: "456K",
    topContent: "Collaborations",
  },
];

const comparisonData = [
  { name: "You", followers: 2400, engagement: 8.7, growth: 12.5 },
  { name: "Comp A", followers: 3200, engagement: 9.4, growth: 18.2 },
  { name: "Comp B", followers: 2800, engagement: 7.8, growth: 12.5 },
  { name: "Comp C", followers: 1900, engagement: 5.2, growth: -2.3 },
  { name: "Comp D", followers: 4100, engagement: 11.2, growth: 25.8 },
];

const trendData = [
  { week: "W1", you: 2100, compA: 2800, compB: 2500, compD: 3200 },
  { week: "W2", you: 2200, compA: 2900, compB: 2600, compD: 3400 },
  { week: "W3", you: 2300, compA: 3000, compB: 2700, compD: 3600 },
  { week: "W4", you: 2400, compA: 3200, compB: 2800, compD: 4100 },
];

const alerts = [
  { type: "viral", message: "CompetitorD's latest reel hit 5M views in 24h", time: "2h ago" },
  { type: "campaign", message: "CompetitorA launched a new product campaign", time: "5h ago" },
  { type: "collab", message: "CompetitorB partnered with influencer @bigname", time: "1d ago" },
];

interface CompetitorInsightsProps {
  compact?: boolean;
}

export const CompetitorInsights = ({ compact }: CompetitorInsightsProps) => {
  if (compact) {
    return (
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-5">
        <h3 className="text-lg font-semibold font-display text-foreground mb-4">Competitor Activity</h3>
        <div className="space-y-3">
          {alerts.map((alert, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-xl">
              <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-foreground">{alert.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Competitor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {competitors.map((comp) => (
          <div
            key={comp.name}
            className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-5 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={comp.avatar}
                alt={comp.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-foreground truncate">{comp.name}</h4>
                <p className="text-xs text-muted-foreground truncate">{comp.handle}</p>
              </div>
              <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Followers</span>
                <span className="text-sm font-semibold text-foreground">{comp.followers}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Growth</span>
                <span className={cn(
                  "flex items-center gap-1 text-sm font-semibold",
                  comp.trend === "up" ? "text-emerald-400" : "text-rose-400"
                )}>
                  {comp.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {comp.growth}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Engagement</span>
                <span className="text-sm font-semibold text-foreground">{comp.engagement}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Avg Likes</span>
                <span className="text-sm font-semibold text-foreground">{comp.avgLikes}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground">Top performing content:</p>
              <p className="text-sm text-primary font-medium mt-1">{comp.topContent}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold font-display text-foreground mb-2">Follower Comparison</h3>
          <p className="text-sm text-muted-foreground mb-6">Your position vs competitors (in thousands)</p>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #333',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }} 
                />
                <Bar dataKey="followers" fill="#22c55e" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold font-display text-foreground mb-2">Growth Trend</h3>
          <p className="text-sm text-muted-foreground mb-6">Weekly follower growth comparison</p>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="week" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #333',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }} 
                />
                <Line type="monotone" dataKey="you" stroke="#22c55e" strokeWidth={3} dot={{ fill: '#22c55e' }} />
                <Line type="monotone" dataKey="compA" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6' }} />
                <Line type="monotone" dataKey="compB" stroke="#ec4899" strokeWidth={2} dot={{ fill: '#ec4899' }} />
                <Line type="monotone" dataKey="compD" stroke="#f59e0b" strokeWidth={2} dot={{ fill: '#f59e0b' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground">You</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-violet-500" />
              <span className="text-muted-foreground">Comp A</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-pink-500" />
              <span className="text-muted-foreground">Comp B</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-muted-foreground">Comp D</span>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Alerts */}
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold font-display text-foreground mb-4">Competitor Activity Feed</h3>
        <div className="space-y-3">
          {alerts.map((alert, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary/70 transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                <Activity className="w-5 h-5 text-amber-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground">{alert.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
              </div>
              <button className="text-xs text-primary font-medium hover:underline">View</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
