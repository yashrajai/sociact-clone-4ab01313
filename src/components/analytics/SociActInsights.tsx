import { Brain, Sparkles, MessageSquare, Target, Video, LucideIcon } from "lucide-react";

interface Insight {
  icon: LucideIcon;
  label: string;
  value: string;
  detail: string;
  iconColor: string;
  iconBg: string;
}

export const SociActInsights = () => {
  const insights: Insight[] = [
    {
      icon: Video,
      label: "Videos Analyzed",
      value: "47 videos",
      detail: "from your account",
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/20"
    },
    {
      icon: Sparkles,
      label: "Top Hooks You Use",
      value: "Question openers",
      detail: '"Did you know...", "What if I told you..."',
      iconColor: "text-amber-400",
      iconBg: "bg-amber-500/20"
    },
    {
      icon: Target,
      label: "Your CTA Style",
      value: "Soft CTAs",
      detail: '"Link in bio", "Check it out"',
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/20"
    },
    {
      icon: MessageSquare,
      label: "Content Themes",
      value: "Product demos, Tips",
      detail: "80% educational, 20% promotional",
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/20"
    }
  ];

  return (
    <div className="bg-secondary border border-border rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
          <Brain className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold font-display text-foreground">What SociAct Learned</h3>
          <p className="text-sm text-muted-foreground">AI-powered analysis of your content</p>
        </div>
      </div>

      <div className="space-y-3">
        {insights.map((insight, index) => (
          <div 
            key={index}
            className="flex items-start gap-4 p-4 bg-background border border-border rounded-xl hover:border-border/80 transition-colors"
          >
            <div className={`w-10 h-10 rounded-lg ${insight.iconBg} flex items-center justify-center shrink-0`}>
              <insight.icon className={`w-5 h-5 ${insight.iconColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-sm font-medium text-foreground/80">{insight.label}</span>
                <span className="text-base font-bold text-foreground">{insight.value}</span>
              </div>
              <p className="text-sm text-muted-foreground truncate">{insight.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
