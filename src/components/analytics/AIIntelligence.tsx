import { Brain, Lightbulb, AlertTriangle, CheckCircle2, Calendar, Video, Image, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const discoveries = [
  { title: "Early Product Reveal = 2x Retention", action: "Applied to 8 videos", applied: true },
  { title: "Question CTAs = +89% Comments", action: "All captions updated", applied: true },
];

const gaps = [
  { title: "Product Demos -340%", fix: "New formula applied", severity: "high" },
  { title: "BTS Videos -230%", fix: "Raw style enabled", severity: "medium" },
];

const nextContent = {
  day: "MON DEC 23",
  time: "2:45 PM",
  type: "video",
  title: "Product Demo: Transform Your [Problem]",
  prediction: "85K-120K views • 11-13% engagement",
  confidence: 87,
  progress: 78,
};

export const AIIntelligence = () => {
  return (
    <div className="space-y-4">
      {/* AI Summary - Compact */}
      <div className="relative overflow-hidden bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 border border-violet-500/20 rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span><span className="font-bold text-foreground">340</span> <span className="text-muted-foreground">posts analyzed</span></span>
              <span className="text-border">|</span>
              <span><span className="font-bold text-foreground">15</span> <span className="text-muted-foreground">trends</span></span>
              <span className="text-border">|</span>
              <span><span className="font-bold text-foreground">8</span> <span className="text-muted-foreground">strategies applied</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Discoveries + Gaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Discoveries */}
        <div className="bg-secondary/30 border border-border/50 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">AI Discoveries</h3>
          </div>
          <div className="space-y-2">
            {discoveries.map((d, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                <div>
                  <p className="text-sm font-medium text-foreground">{d.title}</p>
                  <p className="text-xs text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> {d.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gaps */}
        <div className="bg-secondary/30 border border-border/50 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-semibold text-foreground">Performance Gaps</h3>
          </div>
          <div className="space-y-2">
            {gaps.map((g, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex items-center justify-between p-3 rounded-xl",
                  g.severity === "high" ? "bg-rose-500/10" : "bg-amber-500/10"
                )}
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{g.title}</p>
                  <p className="text-xs text-emerald-400">✓ {g.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Scheduled Content - Single Item */}
      <div className="bg-secondary/30 border border-border/50 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Next AI-Optimized Content</h3>
          </div>
          <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
            View Week <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        
        <div className="flex items-center gap-4 p-3 bg-secondary/50 rounded-xl">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
            <Video className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-primary">{nextContent.day}</span>
              <span className="text-xs text-muted-foreground">• {nextContent.time}</span>
            </div>
            <p className="text-sm font-medium text-foreground">{nextContent.title}</p>
            <p className="text-xs text-muted-foreground">{nextContent.prediction}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Confidence</p>
            <p className="text-lg font-bold text-primary">{nextContent.confidence}%</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Video</p>
            <p className="text-lg font-bold text-foreground">{nextContent.progress}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
