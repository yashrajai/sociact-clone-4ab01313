import { Lightbulb, ArrowRight, TrendingUp, Zap, Clock, Target, Sparkles } from "lucide-react";

const nextMoves = [
  {
    change: "Adding hook in first 1.5 seconds",
    reason: "Top 3 competitors retain 47% more viewers with faster hooks",
    icon: Zap,
    impact: "+23% retention"
  },
  {
    change: "Switching to trending audio tracks",
    reason: "Viral sounds in your niche are getting 3x more shares right now",
    icon: TrendingUp,
    impact: "+180% reach"
  },
  {
    change: "Stronger CTA at the end",
    reason: "Competitor @fitnessguru uses direct CTAs and gets 2x more profile visits",
    icon: Target,
    impact: "+45% clicks"
  },
  {
    change: "Posting at 7PM instead of 2PM",
    reason: "Your audience is most active between 6-8PM based on engagement patterns",
    icon: Clock,
    impact: "+32% engagement"
  }
];

export const NextMoves = () => {
  return (
    <div className="bg-secondary border border-border rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold font-display text-foreground">SociAct's Next Moves</h3>
            <p className="text-sm text-muted-foreground">Changes in your next content cycle</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/15 rounded-full">
          <span className="text-xs font-medium text-primary">5 optimizations queued</span>
        </div>
      </div>

      <div className="space-y-3">
        {nextMoves.map((move, index) => {
          const Icon = move.icon;
          const iconColors = [
            { color: "text-amber-400", bg: "bg-amber-500/20" },
            { color: "text-emerald-400", bg: "bg-emerald-500/20" },
            { color: "text-purple-400", bg: "bg-purple-500/20" },
            { color: "text-blue-400", bg: "bg-blue-500/20" },
          ];
          const iconStyle = iconColors[index % iconColors.length];
          
          return (
            <div 
              key={index}
              className="flex items-start gap-4 p-4 bg-background border border-border rounded-xl hover:border-border/80 transition-colors"
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-lg ${iconStyle.bg} flex items-center justify-center shrink-0`}>
                <Icon className={`w-5 h-5 ${iconStyle.color}`} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-base font-bold text-foreground">{move.change}</p>
                  <span className="px-2 py-0.5 text-xs font-medium bg-emerald-500/15 text-emerald-500 rounded-full">
                    {move.impact}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ArrowRight className="w-3 h-3 shrink-0" />
                  <p className="text-sm text-foreground/80">{move.reason}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
