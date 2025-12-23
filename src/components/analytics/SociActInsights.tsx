import { Brain, Sparkles, MessageSquare, Target, Video } from "lucide-react";

export const SociActInsights = () => {
  const insights = [
    {
      icon: Video,
      label: "Videos Analyzed",
      value: "47 videos",
      detail: "from your account"
    },
    {
      icon: Sparkles,
      label: "Top Hooks You Use",
      value: "Question openers",
      detail: '"Did you know...", "What if I told you..."'
    },
    {
      icon: Target,
      label: "Your CTA Style",
      value: "Soft CTAs",
      detail: '"Link in bio", "Check it out"'
    },
    {
      icon: MessageSquare,
      label: "Content Themes",
      value: "Product demos, Tips",
      detail: "80% educational, 20% promotional"
    }
  ];

  return (
    <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Brain className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold font-display text-foreground">What SociAct Learned</h3>
          <p className="text-sm text-muted-foreground">AI-powered analysis of your content</p>
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div 
            key={index}
            className="flex items-start gap-3 p-3 bg-background/50 rounded-xl border border-border/30"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
              <insight.icon className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">{insight.label}</span>
                <span className="text-sm font-medium text-foreground">{insight.value}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">{insight.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-primary/5 rounded-xl border border-primary/20">
        <p className="text-sm text-foreground">
          <Sparkles className="w-4 h-4 inline mr-2 text-primary" />
          <span className="font-medium">SociAct Tip:</span> Your question hooks get 2.3x more engagement. Keep using them!
        </p>
      </div>
    </div>
  );
};
