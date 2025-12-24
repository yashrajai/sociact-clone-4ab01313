import { Zap, Video, Upload, MessageCircle, Send, Clock, TrendingUp } from "lucide-react";

const stats = [
  { icon: Video, label: "Posts Generated", value: "12", color: "text-rose-400", bg: "bg-rose-500/20" },
  { icon: Upload, label: "Auto-Uploaded", value: "8", color: "text-blue-400", bg: "bg-blue-500/20" },
  { icon: MessageCircle, label: "Comments Replied", value: "156", color: "text-purple-400", bg: "bg-purple-500/20" },
  { icon: Send, label: "DMs Sent", value: "23", color: "text-amber-400", bg: "bg-amber-500/20" },
  { icon: Clock, label: "Time Saved", value: "14h", color: "text-emerald-400", bg: "bg-emerald-500/20" },
  { icon: TrendingUp, label: "Engagement Boost", value: "+28%", color: "text-cyan-400", bg: "bg-cyan-500/20" }
];

export const AutomationResults = () => {
  return (
    <div className="bg-secondary border border-border rounded-xl px-5 py-3">
      <div className="flex items-center justify-between gap-8">
        {/* Title */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-semibold font-display text-foreground">Automation</h3>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-emerald-500">Active</span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex items-center gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3 px-3 py-2 bg-background border border-border rounded-lg">
              <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
              <div className="flex flex-col">
                <p className="text-base font-bold font-display text-foreground">{stat.value}</p>
                <p className="text-xs text-foreground/80">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
