import { Trophy, TrendingUp, ArrowRight, Target, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = [
  { 
    label: "Engagement Rate", 
    you: "8.7%", 
    top3: "12.3%", 
    gap: "-3.6%", 
    status: "warning" 
  },
  { 
    label: "Posting Freq", 
    you: "7/week", 
    top3: "5/week", 
    gap: "Ahead", 
    status: "success" 
  },
  { 
    label: "Growth Rate", 
    you: "+12.5%", 
    top3: "+18.2%", 
    gap: "-5.7%", 
    status: "warning" 
  },
];

export const CompetitivePosition = () => {
  return (
    <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/25">
          <Trophy className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-foreground">YOUR STANDING:</h3>
            <span className="text-lg font-bold text-primary">Rank #7</span>
            <span className="text-sm text-muted-foreground">of 20 competitors</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
            <TrendingUp className="w-3 h-3" />
            Up 3 positions this week
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
            <span className="text-sm text-muted-foreground">{metric.label}:</span>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-foreground font-medium">You {metric.you}</span>
              <span className="text-muted-foreground">vs Top 3: {metric.top3}</span>
              <span className={cn(
                "flex items-center gap-1 font-medium",
                metric.status === "success" ? "text-emerald-400" : "text-amber-400"
              )}>
                {metric.status === "success" ? (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                ) : (
                  <AlertCircle className="w-3.5 h-3.5" />
                )}
                {metric.gap}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between bg-primary/5 rounded-xl p-3 border border-primary/20">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground">
            Close the gap in <span className="font-semibold text-primary">2-3 weeks</span> with AI optimization
          </span>
        </div>
        <button className="flex items-center gap-1 text-sm text-primary font-medium hover:underline group">
          View Detailed Comparison
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
