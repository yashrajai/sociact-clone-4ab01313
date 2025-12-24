import { Zap, Video, Upload, MessageCircle, Send, Clock, TrendingUp } from "lucide-react";

const stats = [
  { icon: Video, label: "Posts Generated", value: "12", color: "text-blue-400" },
  { icon: Upload, label: "Auto-Uploaded", value: "8", color: "text-emerald-400" },
  { icon: MessageCircle, label: "Comments Replied", value: "156", color: "text-violet-400" },
  { icon: Send, label: "DMs Sent", value: "23", color: "text-amber-400" },
  { icon: Clock, label: "Time Saved", value: "14h", color: "text-rose-400" },
  { icon: TrendingUp, label: "Engagement Boost", value: "+28%", color: "text-primary" }
];

export const AutomationResults = () => {
  return (
    <div className="bg-secondary/40 backdrop-blur-sm border border-border/50 rounded-xl px-5 py-3">
      <div className="flex items-center justify-between gap-8">
        {/* Title */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-semibold font-display text-foreground">Automation</h3>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-emerald-500">Active</span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex items-center gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
              <div className="flex items-baseline gap-1.5">
                <p className="text-base font-bold font-display text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
