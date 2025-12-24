import { AlertTriangle, TrendingUp, Target, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const alerts = [
  {
    id: 1,
    type: "urgent",
    icon: TrendingUp,
    title: "#AIGenerated trending +234% in 18 hours",
    description: "Peak window: Next 24-48 hours | 14/20 competitors using it",
    actions: ["Add to Next 3 Posts", "Dismiss"],
    color: "from-rose-500 to-red-600",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/30",
  },
  {
    id: 2,
    type: "opportunity",
    icon: Target,
    title: "Competitor A's product demos outperform yours by 340%",
    description: "AI has analyzed their strategy and created 3 similar scripts",
    actions: ["Review Scripts", "Auto-Apply"],
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
  },
];

export const CriticalAlerts = () => {
  return (
    <div className="space-y-3">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="relative overflow-hidden bg-background border border-border rounded-2xl p-4 hover:border-border/80 transition-colors"
        >
          <div className="flex items-start gap-4">
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
              alert.type === "urgent" ? "bg-rose-500/20" : "bg-amber-500/20"
            )}>
              <alert.icon className={cn(
                "w-5 h-5",
                alert.type === "urgent" ? "text-rose-400" : "text-amber-400"
              )} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-semibold uppercase border",
                  alert.type === "urgent" 
                    ? "bg-rose-500/15 text-rose-400 border-rose-500/30" 
                    : "bg-amber-500/15 text-amber-400 border-amber-500/30"
                )}>
                  {alert.type}
                </span>
              </div>
              <h4 className="text-base font-bold text-foreground mb-1">{alert.title}</h4>
              <p className="text-sm text-foreground/80">{alert.description}</p>
              
              <div className="flex items-center gap-2 mt-3">
                {alert.actions.map((action, i) => (
                  <button
                    key={action}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all border",
                      i === 0 
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 border-primary" 
                        : "bg-secondary text-foreground hover:bg-secondary/80 border-border"
                    )}
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
            
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors border border-border">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
