import { Calendar, Eye, CheckCircle, Clock, Loader2, Upload, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const pipelineItems = [
  {
    day: "MON",
    title: "Product Demo - New Protein Powder",
    status: "generating",
    progress: 78,
    thumbnail: "🎬"
  },
  {
    day: "WED",
    title: "Carousel - 5 Workout Tips",
    status: "pending",
    progress: 100,
    thumbnail: "📊"
  },
  {
    day: "FRI",
    title: "Behind The Scenes - Gym Tour",
    status: "scheduled",
    progress: 100,
    thumbnail: "🎥"
  },
  {
    day: "SAT",
    title: "Customer Testimonial - Sarah",
    status: "live",
    progress: 100,
    thumbnail: "⭐"
  }
];

const statusConfig = {
  generating: {
    label: "Generating",
    icon: Loader2,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    animate: true
  },
  pending: {
    label: "Pending Approval",
    icon: Clock,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    animate: false
  },
  scheduled: {
    label: "Scheduled",
    icon: Calendar,
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    animate: false
  },
  live: {
    label: "Live",
    icon: CheckCircle,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    animate: false
  }
};

export const ContentPipeline = () => {
  return (
    <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold font-display text-foreground">Content Pipeline</h3>
            <p className="text-sm text-muted-foreground">Your upcoming automated content</p>
          </div>
        </div>
        <button className="text-sm text-primary font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {pipelineItems.map((item, index) => {
          const config = statusConfig[item.status as keyof typeof statusConfig];
          const StatusIcon = config.icon;

          return (
            <div 
              key={index}
              className={cn(
                "flex items-center gap-4 p-4 rounded-xl border transition-all",
                config.bgColor,
                config.borderColor
              )}
            >
              {/* Day Badge */}
              <div className="w-12 h-12 rounded-xl bg-background/80 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-foreground">{item.day}</span>
              </div>

              {/* Thumbnail */}
              <div className="w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center text-2xl shrink-0">
                {item.thumbnail}
              </div>

              {/* Content Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{item.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <StatusIcon className={cn("w-3.5 h-3.5", config.color, config.animate && "animate-spin")} />
                  <span className={cn("text-xs font-medium", config.color)}>{config.label}</span>
                  {item.status === "generating" && (
                    <span className="text-xs text-muted-foreground">{item.progress}%</span>
                  )}
                </div>
                {item.status === "generating" && (
                  <div className="mt-2 h-1.5 bg-background/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-400 rounded-full transition-all"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0">
                {item.status === "pending" && (
                  <>
                    <button className="p-2 hover:bg-background/50 rounded-lg transition-colors">
                      <Eye className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <button className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:bg-primary/90 transition-colors">
                      Approve
                    </button>
                  </>
                )}
                {item.status === "generating" && (
                  <button className="p-2 hover:bg-background/50 rounded-lg transition-colors">
                    <Eye className="w-4 h-4 text-muted-foreground" />
                  </button>
                )}
                {item.status === "scheduled" && (
                  <button className="p-2 hover:bg-background/50 rounded-lg transition-colors">
                    <Upload className="w-4 h-4 text-muted-foreground" />
                  </button>
                )}
                {item.status === "live" && (
                  <button className="p-2 hover:bg-background/50 rounded-lg transition-colors">
                    <Play className="w-4 h-4 text-emerald-400" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
