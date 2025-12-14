import { 
  MessageSquare, 
  Send, 
  Users, 
  TrendingUp, 
  Clock, 
  Zap,
  Heart,
  UserPlus,
  Bot,
  ArrowUpRight
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Comments Replied",
    value: "12,847",
    change: "+23.5%",
    trend: "up",
    icon: MessageSquare,
    color: "from-pink-500 to-rose-600",
    description: "Last 30 days"
  },
  {
    label: "DMs Sent",
    value: "8,432",
    change: "+18.2%",
    trend: "up",
    icon: Send,
    color: "from-violet-500 to-purple-600",
    description: "Automated responses"
  },
  {
    label: "New Followers",
    value: "2,156",
    change: "+45.8%",
    trend: "up",
    icon: UserPlus,
    color: "from-cyan-500 to-blue-600",
    description: "From automation"
  },
  {
    label: "Avg Response Time",
    value: "0.3s",
    change: "-85%",
    trend: "up",
    icon: Clock,
    color: "from-emerald-500 to-green-600",
    description: "vs manual: 4.2h"
  },
];

const activityData = [
  { time: "00:00", comments: 45, dms: 23 },
  { time: "04:00", comments: 32, dms: 18 },
  { time: "08:00", comments: 78, dms: 45 },
  { time: "12:00", comments: 156, dms: 89 },
  { time: "16:00", comments: 234, dms: 134 },
  { time: "20:00", comments: 189, dms: 112 },
  { time: "23:59", comments: 98, dms: 67 },
];

const recentActivity = [
  {
    type: "comment",
    user: "@sarah_designs",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    message: "This is amazing! 🔥",
    reply: "Thank you so much! We're glad you love it 💜",
    time: "2 min ago"
  },
  {
    type: "dm",
    user: "@tech_enthusiast",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    message: "How much does it cost?",
    reply: "Great question! Here's our pricing: [link]. Let me know if you have any questions!",
    time: "5 min ago"
  },
  {
    type: "comment",
    user: "@creative_studio",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    message: "Can you make a tutorial?",
    reply: "Absolutely! We're working on one. Follow us to be notified when it's ready! 🎬",
    time: "12 min ago"
  },
  {
    type: "dm",
    user: "@new_follower_2024",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    message: "Just followed!",
    reply: "Welcome to our community! 🎉 Here's a special welcome gift for you: [link]",
    time: "18 min ago"
  },
];

const activeRules = [
  { name: "Welcome New Followers", type: "DM", triggers: 2156, status: "active" },
  { name: "Comment Thank You", type: "Comment", triggers: 8934, status: "active" },
  { name: "FAQ Auto-Reply", type: "DM", triggers: 3421, status: "active" },
  { name: "Engagement Booster", type: "Comment", triggers: 5678, status: "active" },
  { name: "Lead Capture", type: "DM", triggers: 1234, status: "paused" },
];

export const AutomationOverview = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-5 group hover:border-primary/30 transition-all duration-300"
          >
            <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br",
              stat.color
            )} />
            
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className={cn(
                  "w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center",
                  stat.color
                )}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              
              <p className="text-2xl font-bold font-display text-foreground">{stat.value}</p>
              <p className="text-sm text-foreground mt-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Activity Chart & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold font-display text-foreground">Automation Activity</h3>
              <p className="text-sm text-muted-foreground">Comments and DMs handled today</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-500" />
                <span className="text-muted-foreground">Comments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-violet-500" />
                <span className="text-muted-foreground">DMs</span>
              </div>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData}>
                <defs>
                  <linearGradient id="colorComments" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorDms" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="time" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #333',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }} 
                />
                <Area type="monotone" dataKey="comments" stroke="#ec4899" fillOpacity={1} fill="url(#colorComments)" strokeWidth={2} />
                <Area type="monotone" dataKey="dms" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorDms)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold font-display text-foreground">Live Activity</h3>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-muted-foreground">Real-time</span>
            </div>
          </div>
          
          <div className="space-y-3 max-h-[320px] overflow-y-auto scrollbar-hide">
            {recentActivity.map((activity, i) => (
              <div key={i} className="p-3 bg-secondary/50 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <img
                    src={activity.avatar}
                    alt={activity.user}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{activity.user}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <span className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    activity.type === "comment" 
                      ? "bg-pink-500/10 text-pink-400" 
                      : "bg-violet-500/10 text-violet-400"
                  )}>
                    {activity.type === "comment" ? "Comment" : "DM"}
                  </span>
                </div>
                <div className="pl-10 space-y-1">
                  <p className="text-xs text-muted-foreground">"{activity.message}"</p>
                  <div className="flex items-start gap-2">
                    <Bot className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-foreground">{activity.reply}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Rules */}
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold font-display text-foreground">Active Automation Rules</h3>
            <p className="text-sm text-muted-foreground">Your most active automations</p>
          </div>
          <button className="flex items-center gap-2 text-sm text-primary font-medium hover:underline">
            View all <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs text-muted-foreground border-b border-border/50">
                <th className="pb-3 font-medium">Rule Name</th>
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Triggers</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {activeRules.map((rule, i) => (
                <tr key={i} className="border-b border-border/30 last:border-0">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center",
                        rule.type === "Comment" 
                          ? "bg-pink-500/10" 
                          : "bg-violet-500/10"
                      )}>
                        {rule.type === "Comment" ? (
                          <MessageSquare className="w-4 h-4 text-pink-400" />
                        ) : (
                          <Send className="w-4 h-4 text-violet-400" />
                        )}
                      </div>
                      <span className="font-medium text-foreground">{rule.name}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className={cn(
                      "text-xs px-2 py-1 rounded-full",
                      rule.type === "Comment" 
                        ? "bg-pink-500/10 text-pink-400" 
                        : "bg-violet-500/10 text-violet-400"
                    )}>
                      {rule.type}
                    </span>
                  </td>
                  <td className="py-4 text-muted-foreground">{rule.triggers.toLocaleString()}</td>
                  <td className="py-4">
                    <span className={cn(
                      "flex items-center gap-1.5 text-xs",
                      rule.status === "active" ? "text-emerald-400" : "text-amber-400"
                    )}>
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        rule.status === "active" ? "bg-emerald-400" : "bg-amber-400"
                      )} />
                      {rule.status === "active" ? "Active" : "Paused"}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <button className="text-xs text-primary hover:underline">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
