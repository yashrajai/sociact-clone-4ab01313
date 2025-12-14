import { 
  TrendingUp, 
  TrendingDown, 
  MessageSquare, 
  Send, 
  Users, 
  Clock,
  Target,
  Zap,
  Award,
  ArrowUpRight
} from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { cn } from "@/lib/utils";

const overviewStats = [
  { 
    label: "Total Automated", 
    value: "21,279", 
    change: "+28.5%", 
    trend: "up",
    icon: Zap, 
    color: "from-primary to-emerald-500" 
  },
  { 
    label: "Time Saved", 
    value: "892h", 
    change: "+156h", 
    trend: "up",
    icon: Clock, 
    color: "from-violet-500 to-purple-600" 
  },
  { 
    label: "Response Rate", 
    value: "94.2%", 
    change: "+12.3%", 
    trend: "up",
    icon: Target, 
    color: "from-pink-500 to-rose-600" 
  },
  { 
    label: "Engagement Boost", 
    value: "+47%", 
    change: "+8%", 
    trend: "up",
    icon: Award, 
    color: "from-amber-500 to-orange-600" 
  },
];

const weeklyData = [
  { day: "Mon", comments: 1240, dms: 560, engagement: 78 },
  { day: "Tue", comments: 1380, dms: 620, engagement: 82 },
  { day: "Wed", comments: 1520, dms: 710, engagement: 85 },
  { day: "Thu", comments: 1290, dms: 580, engagement: 79 },
  { day: "Fri", comments: 1680, dms: 820, engagement: 91 },
  { day: "Sat", comments: 2100, dms: 1020, engagement: 96 },
  { day: "Sun", comments: 1890, dms: 920, engagement: 94 },
];

const automationTypes = [
  { name: "Comment Replies", value: 45, color: "#ec4899" },
  { name: "Welcome DMs", value: 25, color: "#8b5cf6" },
  { name: "FAQ Responses", value: 18, color: "#22c55e" },
  { name: "Lead Capture", value: 12, color: "#f59e0b" },
];

const topPerformingRules = [
  { name: "Welcome New Followers", type: "DM", triggers: 2156, conversion: "23%", status: "active" },
  { name: "Thank You Response", type: "Comment", triggers: 4521, conversion: "—", status: "active" },
  { name: "Product Inquiry", type: "DM", triggers: 1876, conversion: "34%", status: "active" },
  { name: "Question Handler", type: "Comment", triggers: 2341, conversion: "—", status: "active" },
  { name: "Story Reaction", type: "DM", triggers: 3421, conversion: "45%", status: "active" },
];

const hourlyActivity = [
  { hour: "00", value: 45 },
  { hour: "02", value: 23 },
  { hour: "04", value: 12 },
  { hour: "06", value: 34 },
  { hour: "08", value: 89 },
  { hour: "10", value: 156 },
  { hour: "12", value: 234 },
  { hour: "14", value: 198 },
  { hour: "16", value: 267 },
  { hour: "18", value: 312 },
  { hour: "20", value: 289 },
  { hour: "22", value: 178 },
];

export const AutomationAnalytics = () => {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewStats.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-5 group hover:border-primary/30 transition-all"
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
                <span className={cn(
                  "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                  stat.trend === "up" 
                    ? "text-emerald-400 bg-emerald-400/10" 
                    : "text-rose-400 bg-rose-400/10"
                )}>
                  {stat.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {stat.change}
                </span>
              </div>
              
              <p className="text-2xl font-bold font-display text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Performance */}
        <div className="lg:col-span-2 bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold font-display text-foreground">Weekly Performance</h3>
              <p className="text-sm text-muted-foreground">Automated interactions this week</p>
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
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient id="colorCommentsAnalytics" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorDmsAnalytics" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="day" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #333',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }} 
                />
                <Area type="monotone" dataKey="comments" stroke="#ec4899" fillOpacity={1} fill="url(#colorCommentsAnalytics)" strokeWidth={2} />
                <Area type="monotone" dataKey="dms" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorDmsAnalytics)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Automation Distribution */}
        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold font-display text-foreground mb-2">Automation Types</h3>
          <p className="text-sm text-muted-foreground mb-6">Distribution by category</p>
          
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={automationTypes}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {automationTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #333',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-2 mt-4">
            {automationTypes.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-muted-foreground">{item.name}</span>
                </div>
                <span className="text-xs font-medium text-foreground">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hourly Activity & Top Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hourly Activity */}
        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold font-display text-foreground mb-2">Peak Activity Hours</h3>
          <p className="text-sm text-muted-foreground mb-6">When your automations are most active</p>
          
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourlyActivity}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="hour" stroke="#666" fontSize={10} />
                <YAxis stroke="#666" fontSize={10} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #333',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }} 
                />
                <Bar dataKey="value" fill="#22c55e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-4 text-xs text-muted-foreground">
            <span>Best time: <span className="text-primary font-medium">6PM - 8PM</span></span>
            <span>Lowest: <span className="text-muted-foreground">2AM - 6AM</span></span>
          </div>
        </div>

        {/* Top Performing Rules */}
        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold font-display text-foreground">Top Performing Rules</h3>
              <p className="text-sm text-muted-foreground">Your best automation rules</p>
            </div>
            <button className="flex items-center gap-1 text-xs text-primary hover:underline">
              View all <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
          
          <div className="space-y-3">
            {topPerformingRules.map((rule, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{rule.name}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={cn(
                        "text-xs px-1.5 py-0.5 rounded",
                        rule.type === "DM" ? "bg-violet-500/10 text-violet-400" : "bg-pink-500/10 text-pink-400"
                      )}>
                        {rule.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{rule.triggers.toLocaleString()} triggers</span>
                    </div>
                  </div>
                </div>
                {rule.conversion !== "—" && (
                  <span className="text-sm font-semibold text-emerald-400">{rule.conversion}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-gradient-to-r from-primary/10 via-emerald-500/10 to-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold font-display text-foreground">AI Insights</h3>
            <p className="text-sm text-muted-foreground">Recommendations to improve your automation</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Increase Response Variety",
              description: "Add 3-5 more response variations to your top rules for more natural interactions",
              impact: "+15% engagement"
            },
            {
              title: "Optimize Timing",
              description: "Your audience is most active at 6-8 PM. Schedule important DMs for this window",
              impact: "+23% open rate"
            },
            {
              title: "Enable Lead Capture",
              description: "Your paused 'Lead Capture' flow could generate additional conversions if activated",
              impact: "+$2.4K/mo potential"
            }
          ].map((insight, i) => (
            <div key={i} className="bg-secondary/50 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-foreground mb-2">{insight.title}</h4>
              <p className="text-xs text-muted-foreground mb-3">{insight.description}</p>
              <span className="text-xs font-medium text-primary">{insight.impact}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
