import { useState } from "react";
import { TrendingUp, TrendingDown, Users, Eye, Heart, MessageCircle, BarChart3, Calendar, ArrowUpRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const stats = [
  { label: "Followers", value: "2.4M", change: "+12.5%", trend: "up", icon: Users },
  { label: "Views", value: "48.2M", change: "+28.3%", trend: "up", icon: Eye },
  { label: "Engagement", value: "8.7%", change: "+2.1%", trend: "up", icon: Heart },
  { label: "Comments", value: "156K", change: "-3.2%", trend: "down", icon: MessageCircle },
];

const chartData = [
  { day: "Mon", views: 4200, engagement: 320 },
  { day: "Tue", views: 3800, engagement: 280 },
  { day: "Wed", views: 5100, engagement: 410 },
  { day: "Thu", views: 4700, engagement: 380 },
  { day: "Fri", views: 6200, engagement: 520 },
  { day: "Sat", views: 7100, engagement: 610 },
  { day: "Sun", views: 5900, engagement: 480 },
];

const topContent = [
  { title: "Product Demo - Holiday Special", views: "94K", engagement: "12.6%", status: "trending" },
  { title: "Behind the Scenes", views: "67K", engagement: "9.2%", status: "normal" },
  { title: "Customer Testimonial", views: "52K", engagement: "11.1%", status: "normal" },
];

const upcomingPosts = [
  { day: "Mon", time: "2:45 PM", title: "Product Demo", status: "ready" },
  { day: "Wed", time: "2:45 PM", title: "Educational Carousel", status: "pending" },
  { day: "Fri", time: "2:45 PM", title: "BTS Video", status: "generating" },
];

export const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState("7d");

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Analytics</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Your performance at a glance</p>
        </div>
        <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
          {["7d", "30d", "90d"].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                timeRange === range
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <stat.icon className="w-5 h-5 text-muted-foreground" />
              <span
                className={cn(
                  "text-xs font-medium flex items-center gap-0.5",
                  stat.trend === "up" ? "text-emerald-500" : "text-rose-500"
                )}
              >
                {stat.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Chart - Takes 2 columns */}
        <div className="md:col-span-2 bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium text-foreground">Performance</h2>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Views
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Engagement
              </span>
            </div>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="views"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  fill="url(#viewsGradient)"
                />
                <Area
                  type="monotone"
                  dataKey="engagement"
                  stroke="#10b981"
                  strokeWidth={2}
                  fill="url(#engagementGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Upcoming Posts */}
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium text-foreground">Upcoming</h2>
            <Calendar className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="space-y-3">
            {upcomingPosts.map((post, i) => (
              <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="text-center min-w-[36px]">
                  <p className="text-[10px] font-medium text-muted-foreground uppercase">{post.day}</p>
                  <p className="text-xs text-foreground">{post.time}</p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{post.title}</p>
                </div>
                <span className={cn(
                  "text-[10px] px-2 py-0.5 rounded-full font-medium",
                  post.status === "ready" && "bg-emerald-500/10 text-emerald-500",
                  post.status === "pending" && "bg-amber-500/10 text-amber-500",
                  post.status === "generating" && "bg-primary/10 text-primary"
                )}>
                  {post.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Content */}
      <div className="bg-card border border-border rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-medium text-foreground">Top Performing Content</h2>
          <button className="text-xs text-primary hover:underline flex items-center gap-1">
            View all <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {topContent.map((content, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <Play className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{content.title}</p>
                <p className="text-xs text-muted-foreground">{content.views} views • {content.engagement} eng</p>
              </div>
              {content.status === "trending" && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-500 font-medium">
                  Trending
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
