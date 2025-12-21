import { Youtube, Twitter, TrendingUp, TrendingDown, Bot, User } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";
import instagramLogo from "@/assets/instagram-logo.png";

const engagementData = [
  { name: "Mon", views: 4200, likes: 2400 },
  { name: "Tue", views: 3800, likes: 2100 },
  { name: "Wed", views: 5100, likes: 3200 },
  { name: "Thu", views: 4800, likes: 2800 },
  { name: "Fri", views: 6200, likes: 3800 },
  { name: "Sat", views: 7500, likes: 4500 },
  { name: "Sun", views: 6800, likes: 4100 },
];

const platforms = [
  {
    name: "Instagram",
    customIcon: instagramLogo,
    followers: "1.2M",
    growth: "+5.2%",
    trend: "up",
    color: "from-pink-500 to-purple-600",
  },
  {
    name: "YouTube",
    icon: Youtube,
    followers: "856K",
    growth: "+8.7%",
    trend: "up",
    color: "from-red-500 to-red-600",
  },
  {
    name: "Twitter/X",
    icon: Twitter,
    followers: "324K",
    growth: "-1.2%",
    trend: "down",
    color: "from-sky-400 to-blue-500",
  },
];

interface EnhancedSocialMetricsProps {
  compact?: boolean;
}

export const EnhancedSocialMetrics = ({ compact }: EnhancedSocialMetricsProps) => {
  if (compact) {
    return (
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-5">
        <h3 className="text-lg font-semibold font-display text-foreground mb-4">Social Accounts</h3>
        <div className="space-y-3">
          {platforms.map((platform) => (
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
                  <p className="text-xs text-muted-foreground">{platform.followers}</p>
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
    <div className="space-y-4">
      {/* AI vs Manual - Compact Banner */}
      <div className="bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-foreground"><span className="font-bold">AI:</span> 42 posts • 11.2% eng</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground"><span className="font-bold">Manual:</span> 12 posts • 7.8% eng</span>
            </div>
          </div>
          <span className="text-sm font-bold text-emerald-400">AI +44% better</span>
        </div>
      </div>

      {/* Platform Cards + Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Platforms */}
        <div className="bg-secondary/30 border border-border/50 rounded-2xl p-4">
          <h3 className="text-sm font-semibold text-foreground mb-3">Connected Platforms</h3>
          <div className="space-y-2">
            {platforms.map((platform) => (
              <div key={platform.name} className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className={cn("w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center overflow-hidden", platform.customIcon ? "" : platform.color)}>
                    {platform.customIcon ? (
                      <img src={platform.customIcon} alt={platform.name} className="w-full h-full object-cover" />
                    ) : platform.icon ? (
                      <platform.icon className="w-5 h-5 text-white" />
                    ) : null}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{platform.name}</p>
                    <p className="text-lg font-bold text-foreground">{platform.followers}</p>
                  </div>
                </div>
                <span className={cn(
                  "flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full",
                  platform.trend === "up" 
                    ? "text-emerald-400 bg-emerald-400/10" 
                    : "text-rose-400 bg-rose-400/10"
                )}>
                  {platform.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {platform.growth}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Chart */}
        <div className="bg-secondary/30 border border-border/50 rounded-2xl p-4">
          <h3 className="text-sm font-semibold text-foreground mb-3">Weekly Engagement</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={engagementData}>
                <defs>
                  <linearGradient id="colorViewsSimple" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorLikesSimple" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                  </linearGradient>
                </defs>
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
                <Area type="monotone" dataKey="views" stroke="#22c55e" fillOpacity={1} fill="url(#colorViewsSimple)" strokeWidth={2} />
                <Area type="monotone" dataKey="likes" stroke="#ec4899" fillOpacity={1} fill="url(#colorLikesSimple)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 mt-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground">Views</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-pink-500" />
              <span className="text-muted-foreground">Likes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
