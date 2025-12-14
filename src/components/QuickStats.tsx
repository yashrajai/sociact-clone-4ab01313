import { Wand2, Film, CheckCircle2, Zap } from "lucide-react";

const stats = [
  { id: "images", icon: <Wand2 className="w-5 h-5" />, label: "Images Created", value: "12,847", trend: "+24%" },
  { id: "videos", icon: <Film className="w-5 h-5" />, label: "Videos Generated", value: "3,291", trend: "+18%" },
  { id: "tasks", icon: <CheckCircle2 className="w-5 h-5" />, label: "Tasks Completed", value: "28,492", trend: "+32%" },
  { id: "tokens", icon: <Zap className="w-5 h-5" />, label: "AI Tokens Used", value: "1.2M", trend: "+15%" },
];

export const QuickStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-5xl mx-auto">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="group relative bg-card border border-border/60 rounded-2xl p-5 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors">
              {stat.icon}
            </div>
            <span className="text-xs font-semibold text-primary/90 bg-primary/10 px-2.5 py-1 rounded-lg">
              {stat.trend}
            </span>
          </div>
          <p className="text-3xl font-bold text-foreground font-display tracking-tight">{stat.value}</p>
          <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};
