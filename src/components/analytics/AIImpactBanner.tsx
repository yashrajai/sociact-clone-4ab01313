import { Bot, Zap, TrendingUp, Target, DollarSign, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export const AIImpactBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-emerald-500/10 to-cyan-500/10 border border-primary/20 rounded-2xl p-6">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center shadow-lg shadow-primary/25">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold font-display text-foreground">AI IMPACT THIS WEEK</h3>
            <p className="text-xs text-muted-foreground">Autonomous optimizations applied by SociAct AI</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="flex items-center gap-3 bg-background/50 backdrop-blur-sm rounded-xl p-3 border border-border/50">
            <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center">
              <Zap className="w-4 h-4 text-violet-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-foreground">47 hrs</p>
              <p className="text-xs text-muted-foreground">Time saved</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-background/50 backdrop-blur-sm rounded-xl p-3 border border-border/50">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-foreground">+34%</p>
              <p className="text-xs text-muted-foreground">Engagement boost</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-background/50 backdrop-blur-sm rounded-xl p-3 border border-border/50">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center">
              <Target className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-foreground">96%</p>
              <p className="text-xs text-muted-foreground">Success rate</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-background/50 backdrop-blur-sm rounded-xl p-3 border border-border/50">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-foreground">$8.4K</p>
              <p className="text-xs text-muted-foreground">Value generated</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between bg-background/30 rounded-xl p-3 border border-border/30">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">
              <span className="font-semibold">Key Win:</span> AI carousel got 2.3x avg engagement
            </span>
          </div>
          <button className="flex items-center gap-1.5 text-sm text-primary font-medium hover:underline group">
            View Full AI Report
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
