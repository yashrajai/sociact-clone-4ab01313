import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { RatioIcon } from "lucide-react";

interface AspectRatioSelectorProps {
  selected: string;
  onSelect: (ratio: string) => void;
}

const ratios = [
  { id: "1:1", label: "Square", width: 40, height: 40, desc: "1024×1024" },
  { id: "16:9", label: "Landscape", width: 48, height: 27, desc: "1920×1080" },
  { id: "9:16", label: "Portrait", width: 27, height: 48, desc: "1080×1920" },
  { id: "4:3", label: "Standard", width: 44, height: 33, desc: "1365×1024" },
  { id: "3:4", label: "Tall", width: 33, height: 44, desc: "1024×1365" },
  { id: "21:9", label: "Cinematic", width: 52, height: 22, desc: "2560×1080" },
];

export const AspectRatioSelector = ({ selected, onSelect }: AspectRatioSelectorProps) => {
  return (
    <Card className="p-4 bg-card/50 border-border/50">
      <div className="flex items-center gap-2 mb-4">
        <RatioIcon className="w-4 h-4 text-emerald-400" />
        <label className="text-sm font-medium">Aspect Ratio</label>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        {ratios.map((ratio) => (
          <button
            key={ratio.id}
            onClick={() => onSelect(ratio.id)}
            className={cn(
              "flex flex-col items-center p-3 rounded-xl border transition-all",
              selected === ratio.id
                ? "bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border-emerald-500/50"
                : "bg-background/30 border-border/50 hover:border-emerald-500/30"
            )}
          >
            <div 
              className={cn(
                "rounded border-2 mb-2 transition-colors",
                selected === ratio.id ? "border-emerald-400" : "border-muted-foreground/30"
              )}
              style={{ 
                width: ratio.width * 0.6, 
                height: ratio.height * 0.6 
              }}
            />
            <span className="text-xs font-medium">{ratio.label}</span>
            <span className="text-[10px] text-muted-foreground">{ratio.id}</span>
          </button>
        ))}
      </div>
    </Card>
  );
};
