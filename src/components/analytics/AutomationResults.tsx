import { Zap, Video, Upload, MessageCircle, Send, Clock, TrendingUp, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Video,
    label: "Posts Generated",
    value: "12",
    period: "this week",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Upload,
    label: "Auto-Uploaded",
    value: "8",
    period: "this week",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10"
  },
  {
    icon: MessageCircle,
    label: "Comments Replied",
    value: "156",
    period: "auto-responded",
    color: "text-violet-400",
    bgColor: "bg-violet-500/10"
  },
  {
    icon: Send,
    label: "DMs Sent",
    value: "23",
    period: "auto-responded",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10"
  },
  {
    icon: Clock,
    label: "Time Saved",
    value: "14h",
    period: "this week",
    color: "text-rose-400",
    bgColor: "bg-rose-500/10"
  },
  {
    icon: TrendingUp,
    label: "Engagement Boost",
    value: "+28%",
    period: "since automation",
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

export const AutomationResults = () => {
  return (
    <div className="bg-gradient-to-br from-primary/5 via-secondary/30 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold font-display text-foreground">Automation Results</h3>
            <p className="text-sm text-muted-foreground">What SociAct is doing for you</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-medium text-emerald-500">Active</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-background/50 rounded-xl p-4 border border-border/30 text-center"
          >
            <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center mx-auto mb-3`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className="text-2xl font-bold font-display text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            <p className="text-xs text-muted-foreground/70">{stat.period}</p>
          </div>
        ))}
      </div>

      {/* Summary Banner */}
      <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/20">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-primary shrink-0" />
          <p className="text-sm text-foreground">
            <span className="font-semibold">SociAct saved you 14 hours this week</span> and boosted your engagement by 28% compared to manual posting.
          </p>
        </div>
      </div>
    </div>
  );
};
