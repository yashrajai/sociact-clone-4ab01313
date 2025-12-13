import { Wand2, Film, CheckCircle2, Zap } from "lucide-react";

const stats = [
  { id: "images", icon: <Wand2 className="w-5 h-5" />, label: "Images Created", value: "12,847", trend: "+24%" },
  { id: "videos", icon: <Film className="w-5 h-5" />, label: "Videos Generated", value: "3,291", trend: "+18%" },
  { id: "tasks", icon: <CheckCircle2 className="w-5 h-5" />, label: "Tasks Completed", value: "28,492", trend: "+32%" },
  { id: "tokens", icon: <Zap className="w-5 h-5" />, label: "AI Tokens Used", value: "1.2M", trend: "+15%" },
];

export const QuickStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mx-auto">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:border-primary/50 transition-all duration-300 hover:bg-card/80"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
              {stat.icon}
            </div>
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              {stat.trend}
            </span>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};
