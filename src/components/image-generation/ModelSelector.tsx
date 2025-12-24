import { Badge } from "@/components/ui/badge";
import { Zap, Crown, Sparkles, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModelSelectorProps {
  selectedModel: string;
  onSelectModel: (model: string) => void;
  credits: Record<string, number>;
}

const models = [
  {
    id: "nanobanana",
    name: "NanoBanans",
    description: "Fast & HPCfast",
    icon: Zap,
    tag: "Budget Friendly",
    tagColor: "emerald",
  },
  {
    id: "seedreme",
    name: "Seedrome",
    description: "Artistic & artistic",
    icon: Sparkles,
    tag: "Creative",
    tagColor: "purple",
  },
  {
    id: "ideogram",
    name: "Ideegram",
    description: "Text & Design focus",
    icon: Flame,
    tag: "Best for Text",
    tagColor: "orange",
  },
  {
    id: "runway",
    name: "Runway",
    description: "Cinematic quality",
    icon: Crown,
    tag: "Pro",
    tagColor: "amber",
  },
];

export const ModelSelector = ({ selectedModel, onSelectModel, credits }: ModelSelectorProps) => {
  return (
    <div className="bg-secondary/40 border border-border/50 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <label className="text-sm font-medium text-foreground">Select Model</label>
        <span className="text-xs text-muted-foreground">5 models available</span>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {models.map((model) => {
          const Icon = model.icon;
          const isSelected = selectedModel === model.id;
          
          return (
            <button
              key={model.id}
              onClick={() => onSelectModel(model.id)}
              className={cn(
                "flex items-center gap-3 p-3 rounded-xl border transition-all text-left",
                isSelected
                  ? "bg-primary/10 border-primary/50"
                  : "bg-background/30 border-border/30 hover:border-primary/30"
              )}
            >
              <div className={cn(
                "w-9 h-9 rounded-lg flex items-center justify-center shrink-0",
                isSelected
                  ? "bg-primary/20"
                  : "bg-muted/30"
              )}>
                <Icon className={cn("w-4 h-4", isSelected ? "text-primary" : "text-muted-foreground")} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-sm text-foreground">{model.name}</span>
                  <Badge 
                    variant="secondary" 
                    className={cn(
                      "text-[9px] px-1 py-0 font-normal",
                      model.tagColor === "emerald" && "bg-emerald-500/20 text-emerald-400",
                      model.tagColor === "purple" && "bg-purple-500/20 text-purple-400",
                      model.tagColor === "orange" && "bg-orange-500/20 text-orange-400",
                      model.tagColor === "amber" && "bg-amber-500/20 text-amber-400"
                    )}
                  >
                    {model.tag}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{model.description}</div>
              </div>

              <div className="flex flex-col items-end shrink-0">
                <div className="text-base font-bold text-foreground">
                  {credits[model.id]}
                </div>
                <div className="text-[10px] text-muted-foreground">credits</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
