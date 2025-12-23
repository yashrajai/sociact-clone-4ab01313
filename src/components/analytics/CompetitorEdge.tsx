import { Users, TrendingDown, ArrowRight, Zap } from "lucide-react";

const competitors = [
  { handle: "@fitnessguru", followers: "128K", avatar: "FG" },
  { handle: "@healthylife", followers: "95K", avatar: "HL" },
  { handle: "@gymproducts", followers: "82K", avatar: "GP" },
  { handle: "@fitbrand", followers: "67K", avatar: "FB" },
  { handle: "@workoutking", followers: "54K", avatar: "WK" },
];

const improvements = [
  "Use stronger CTAs - competitors use 'Shop Now' vs your 'Link in bio'",
  "Post 2x more product demos - top performers post 4/week",
  "Add trending audio - boosts reach by 40%",
];

export const CompetitorEdge = () => {
  return (
    <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold font-display text-foreground">Competitor Edge</h3>
            <p className="text-sm text-muted-foreground">5 competitors found in your niche</p>
          </div>
        </div>
      </div>

      {/* Competitors List */}
      <div className="flex items-center gap-2 mb-5 overflow-x-auto pb-2">
        {competitors.map((comp, index) => (
          <div 
            key={index}
            className="flex items-center gap-2 px-3 py-2 bg-background/50 rounded-xl border border-border/30 shrink-0"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center text-xs font-bold text-foreground">
              {comp.avatar}
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{comp.handle}</p>
              <p className="text-xs text-muted-foreground">{comp.followers}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Gap Summary */}
      <div className="p-4 bg-rose-500/10 rounded-xl border border-rose-500/20 mb-5">
        <div className="flex items-center gap-2 mb-2">
          <TrendingDown className="w-4 h-4 text-rose-400" />
          <span className="text-sm font-medium text-rose-400">Engagement Gap</span>
        </div>
        <p className="text-2xl font-bold font-display text-foreground">-3.6%</p>
        <p className="text-sm text-muted-foreground">below top competitor average</p>
      </div>

      {/* What They Do Better */}
      <div className="space-y-2 mb-5">
        <p className="text-sm font-medium text-foreground mb-3">What they do better:</p>
        {improvements.map((item, index) => (
          <div 
            key={index}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <span className="text-primary">•</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
        <Zap className="w-4 h-4" />
        Apply Their Strategies
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
