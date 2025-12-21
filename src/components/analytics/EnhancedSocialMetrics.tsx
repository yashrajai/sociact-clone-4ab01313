import { Youtube, Twitter, Facebook, TrendingUp, TrendingDown, MessageCircle, Heart, Eye, Users, Send, Bot, User } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";
import instagramLogo from "@/assets/instagram-logo.png";

const engagementData = [
  { name: "Mon", views: 4200, likes: 2400, comments: 800, shares: 400 },
  { name: "Tue", views: 3800, likes: 2100, comments: 600, shares: 350 },
  { name: "Wed", views: 5100, likes: 3200, comments: 1100, shares: 520 },
  { name: "Thu", views: 4800, likes: 2800, comments: 950, shares: 480 },
  { name: "Fri", views: 6200, likes: 3800, comments: 1400, shares: 680 },
  { name: "Sat", views: 7500, likes: 4500, comments: 1800, shares: 850 },
  { name: "Sun", views: 6800, likes: 4100, comments: 1500, shares: 720 },
];

const platforms = [
  {
    name: "Instagram",
    icon: null,
    customIcon: instagramLogo,
    followers: "1.2M",
    growth: "+5.2%",
    trend: "up",
    color: "from-pink-500 to-purple-600",
    metrics: { views: "12.4M", likes: "890K", comments: "45K", dms: "2.3K" },
  },
  {
    name: "YouTube",
    icon: Youtube,
    followers: "856K",
    growth: "+8.7%",
    trend: "up",
    color: "from-red-500 to-red-600",
    metrics: { views: "28.1M", likes: "1.2M", comments: "89K", dms: "—" },
  },
  {
    name: "Twitter/X",
    icon: Twitter,
    followers: "324K",
    growth: "-1.2%",
    trend: "down",
    color: "from-sky-400 to-blue-500",
    metrics: { views: "5.6M", likes: "234K", comments: "18K", dms: "856" },
  },
  {
    name: "Facebook",
    icon: Facebook,
    followers: "445K",
    growth: "+2.1%",
    trend: "up",
    color: "from-blue-500 to-blue-700",
    metrics: { views: "8.2M", likes: "445K", comments: "32K", dms: "1.1K" },
  },
];

const aiVsManual = {
  ai: { posts: 42, engagement: "11.2%", views: "94,000", successRate: "96%", viralPosts: "18 (43%)" },
  manual: { posts: 12, engagement: "7.8%", views: "67,000", successRate: "75%", viralPosts: "3 (25%)" },
  improvement: "44%",
};

const dmStats = {
  total: "1,847",
  autoReplied: "1,456 (79%)",
  avgResponseTime: "<2 minutes",
  manualReplies: "391 (21%)",
  sentiment: { positive: 73, neutral: 22, negative: 5 },
};

interface EnhancedSocialMetricsProps {
  compact?: boolean;
}

export const EnhancedSocialMetrics = ({ compact }: EnhancedSocialMetricsProps) => {
  if (compact) {
    return (
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-5">
        <h3 className="text-lg font-semibold font-display text-foreground mb-4">Social Accounts</h3>
        <div className="space-y-3">
          {platforms.slice(0, 3).map((platform) => (
            <div key={platform.name} className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className={cn("w-9 h-9 rounded-lg bg-gradient-to-br flex items-center justify-center overflow-hidden", platform.customIcon ? "" : platform.color)}>
                  {platform.customIcon ? (
                    <img src={platform.customIcon} alt={platform.name} className="w-full h-full object-cover" />
                  ) : platform.icon ? (
                    <platform.icon className="w-4 h-4 text-white" />
                  ) : null}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{platform.name}</p>
                  <p className="text-xs text-muted-foreground">{platform.followers} followers</p>
                </div>
              </div>
              <span className={cn(
                "text-xs font-medium",
                platform.trend === "up" ? "text-emerald-400" : "text-rose-400"
              )}>
                {platform.growth}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* AI vs Manual Performance */}
      <div className="relative overflow-hidden bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-cyan-500/10 border border-violet-500/20 rounded-2xl p-6">
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative">
          <h3 className="text-lg font-bold font-display text-foreground mb-4">AI vs Manual Performance</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/50 backdrop-blur-sm rounded-xl p-4 border border-violet-500/20">
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-5 h-5 text-violet-400" />
                <span className="text-sm font-semibold text-foreground">AI-GENERATED CONTENT ({aiVsManual.ai.posts} posts)</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg Engagement:</span>
                  <span className="text-foreground font-medium">{aiVsManual.ai.engagement}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg Views:</span>
                  <span className="text-foreground font-medium">{aiVsManual.ai.views}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Success Rate:</span>
                  <span className="text-foreground font-medium">{aiVsManual.ai.successRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Viral Posts:</span>
                  <span className="text-foreground font-medium">{aiVsManual.ai.viralPosts}</span>
                </div>
              </div>
            </div>

            <div className="bg-background/50 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-semibold text-foreground">MANUAL CONTENT ({aiVsManual.manual.posts} posts)</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg Engagement:</span>
                  <span className="text-foreground font-medium">{aiVsManual.manual.engagement}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg Views:</span>
                  <span className="text-foreground font-medium">{aiVsManual.manual.views}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Success Rate:</span>
                  <span className="text-foreground font-medium">{aiVsManual.manual.successRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Viral Posts:</span>
                  <span className="text-foreground font-medium">{aiVsManual.manual.viralPosts}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-center">
            <span className="text-sm font-bold text-emerald-400">
              📊 AI CONTENT PERFORMS {aiVsManual.improvement}% BETTER ON AVERAGE
            </span>
          </div>
        </div>
      </div>

      {/* Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="relative overflow-hidden bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-5 group hover:border-primary/30 transition-all duration-300"
          >
            <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br",
              platform.color
            )} />
            
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className={cn("w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center overflow-hidden", platform.customIcon ? "" : platform.color)}>
                  {platform.customIcon ? (
                    <img src={platform.customIcon} alt={platform.name} className="w-full h-full object-cover" />
                  ) : platform.icon ? (
                    <platform.icon className="w-5 h-5 text-white" />
                  ) : null}
                </div>
                <span className={cn(
                  "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                  platform.trend === "up" 
                    ? "text-emerald-400 bg-emerald-400/10" 
                    : "text-rose-400 bg-rose-400/10"
                )}>
                  {platform.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {platform.growth}
                </span>
              </div>
              
              <h4 className="text-sm font-medium text-foreground">{platform.name}</h4>
              <p className="text-2xl font-bold font-display text-foreground mt-1">{platform.followers}</p>
              <p className="text-xs text-muted-foreground">followers</p>
              
              <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <Eye className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{platform.metrics.views}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{platform.metrics.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{platform.metrics.comments}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Send className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{platform.metrics.dms}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Engagement Chart */}
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold font-display text-foreground">Engagement Overview</h3>
            <p className="text-sm text-muted-foreground">Views, likes, comments, and shares across all platforms</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground">Views</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-pink-500" />
              <span className="text-muted-foreground">Likes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-muted-foreground">Comments</span>
            </div>
          </div>
        </div>
        
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={engagementData}>
              <defs>
                <linearGradient id="colorViewsEnhanced" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLikesEnhanced" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorCommentsEnhanced" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                </linearGradient>
              </defs>
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
              <Area type="monotone" dataKey="views" stroke="#22c55e" fillOpacity={1} fill="url(#colorViewsEnhanced)" strokeWidth={2} />
              <Area type="monotone" dataKey="likes" stroke="#ec4899" fillOpacity={1} fill="url(#colorLikesEnhanced)" strokeWidth={2} />
              <Area type="monotone" dataKey="comments" stroke="#f59e0b" fillOpacity={1} fill="url(#colorCommentsEnhanced)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* DM Stats */}
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold font-display text-foreground mb-4">Direct Messages</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-secondary/50 rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Total DMs Received</p>
            <p className="text-xl font-bold font-display text-foreground">{dmStats.total}</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Auto-Replied</p>
            <p className="text-xl font-bold font-display text-foreground">{dmStats.autoReplied}</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Avg Response Time</p>
            <p className="text-xl font-bold font-display text-foreground">{dmStats.avgResponseTime}</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Manual Replies</p>
            <p className="text-xl font-bold font-display text-foreground">{dmStats.manualReplies}</p>
          </div>
        </div>

        <div className="bg-secondary/50 rounded-xl p-4">
          <p className="text-sm font-medium text-foreground mb-3">DM Sentiment</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg">😊</span>
              <span className="text-sm text-foreground">{dmStats.sentiment.positive}% Positive</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">😐</span>
              <span className="text-sm text-foreground">{dmStats.sentiment.neutral}% Neutral</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">😞</span>
              <span className="text-sm text-foreground">{dmStats.sentiment.negative}% Negative</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
