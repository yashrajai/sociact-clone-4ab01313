import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Crown, Sparkles, Flame, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModelSelectorProps {
  selectedModel: string;
  onSelectModel: (model: string) => void;
  credits: Record<string, number>;
}

const models = [
  {
    id: "nanobanana",
    name: "NanoBanana",
    description: "Fast & efficient",
    icon: Zap,
    speed: "Ultra Fast",
    quality: "Good",
    tag: "Budget Friendly",
    tagColor: "emerald",
  },
  {
    id: "seedreme",
    name: "Seedreme",
    description: "Artistic & creative",
    icon: Sparkles,
    speed: "Fast",
    quality: "Great",
    tag: "Creative",
    tagColor: "purple",
  },
  {
    id: "flux",
    name: "Flux",
    description: "Balanced performance",
    icon: Star,
    speed: "Medium",
    quality: "Excellent",
    tag: "Popular",
    tagColor: "blue",
  },
  {
    id: "ideogram",
    name: "Ideogram",
    description: "Text & design focus",
    icon: Flame,
    speed: "Medium",
    quality: "Excellent",
    tag: "Best for Text",
    tagColor: "orange",
  },
  {
    id: "runway",
    name: "Runway",
    description: "Cinematic quality",
    icon: Crown,
    speed: "Slow",
    quality: "Premium",
    tag: "Pro",
    tagColor: "amber",
  },
];

export const ModelSelector = ({ selectedModel, onSelectModel, credits }: ModelSelectorProps) => {
  return (
    <Card className="p-4 bg-card/50 border-border/50">
      <div className="flex items-center justify-between mb-4">
        <label className="text-sm font-medium">Select Model</label>
        <Badge variant="outline" className="text-xs">
          5 models available
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 gap-2">
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
                  ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-emerald-500/50"
                  : "bg-background/30 border-border/50 hover:border-emerald-500/30 hover:bg-emerald-500/5"
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center",
                isSelected
                  ? "bg-gradient-to-br from-emerald-500 to-cyan-500"
                  : "bg-muted/50"
              )}>
                <Icon className={cn("w-5 h-5", isSelected ? "text-white" : "text-muted-foreground")} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{model.name}</span>
                  <Badge 
                    variant="secondary" 
                    className={cn(
                      "text-[10px] px-1.5 py-0",
                      model.tagColor === "emerald" && "bg-emerald-500/20 text-emerald-400",
                      model.tagColor === "purple" && "bg-purple-500/20 text-purple-400",
                      model.tagColor === "blue" && "bg-blue-500/20 text-blue-400",
                      model.tagColor === "orange" && "bg-orange-500/20 text-orange-400",
                      model.tagColor === "amber" && "bg-amber-500/20 text-amber-400"
                    )}
                  >
                    {model.tag}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{model.description}</div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <div className={cn(
                  "text-lg font-bold",
                  isSelected ? "text-emerald-400" : "text-muted-foreground"
                )}>
                  {credits[model.id]}
                </div>
                <div className="text-[10px] text-muted-foreground">credits</div>
              </div>

              {isSelected && (
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
              )}
            </button>
          );
        })}
      </div>
    </Card>
  );
};
