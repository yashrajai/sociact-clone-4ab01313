import { Wand2, Film, MessageSquare, LayoutTemplate, Sparkles, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface IntentBadgeProps {
  intent: string;
}

const intentConfig: Record<string, { icon: React.ReactNode; label: string; className: string }> = {
  "image-generation": {
    icon: <Wand2 className="w-3 h-3" />,
    label: "Image Generation",
    className: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  },
  "video-generation": {
    icon: <Film className="w-3 h-3" />,
    label: "Video Generation",
    className: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  "automation-setup": {
    icon: <MessageSquare className="w-3 h-3" />,
    label: "Automation Setup",
    className: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
  "thumbnail-design": {
    icon: <LayoutTemplate className="w-3 h-3" />,
    label: "Thumbnail Design",
    className: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
  "avatar-creation": {
    icon: <Sparkles className="w-3 h-3" />,
    label: "Avatar Creation",
    className: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  },
  general: {
    icon: <HelpCircle className="w-3 h-3" />,
    label: "General",
    className: "bg-secondary text-muted-foreground border-border/50",
  },
};

export const IntentBadge = ({ intent }: IntentBadgeProps) => {
  const config = intentConfig[intent] || intentConfig.general;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border animate-scale-in",
        config.className
      )}
    >
      {config.icon}
      {config.label}
    </span>
  );
};
