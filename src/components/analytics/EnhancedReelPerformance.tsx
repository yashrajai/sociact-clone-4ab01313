import { Eye, Heart, MessageCircle, Share2, Trophy, Bot, User, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const topPerformer = {
  title: "Product Demo - Holiday Special",
  views: "94,234",
  likes: "11,872",
  comments: "1,047",
  engagement: "12.6%",
  viralChance: "89%",
};

const contentGrid = [
  { title: "Product Demo", views: "94K", engagement: "12.6%", isAI: true, status: "viral" },
  { title: "Tutorial Video", views: "67K", engagement: "9.2%", isAI: false, status: "average" },
  { title: "Behind Scenes", views: "45K", engagement: "6.8%", isAI: false, status: "below" },
  { title: "Demo Reel", views: "89K", engagement: "11.4%", isAI: true, status: "good" },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case "viral": return "bg-emerald-500/20 text-emerald-400";
    case "good": return "bg-emerald-500/15 text-emerald-400";
    case "average": return "bg-amber-500/20 text-amber-400";
    case "below": return "bg-rose-500/20 text-rose-400";
    default: return "bg-muted text-muted-foreground";
  }
};

export const EnhancedReelPerformance = () => {
  return (
    <div className="space-y-4">
      {/* Top Performer - Compact */}
      <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">🏆 Top: "{topPerformer.title}"</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
              <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {topPerformer.views}</span>
              <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {topPerformer.likes}</span>
              <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> {topPerformer.comments}</span>
              <span className="text-emerald-400 font-medium">{topPerformer.engagement} engagement</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Viral chance</p>
            <p className="text-lg font-bold text-amber-400">{topPerformer.viralChance}</p>
          </div>
          <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
            Generate Similar
          </button>
        </div>
      </div>

      {/* Content Grid - 4 items */}
      <div className="bg-secondary/30 border border-border/50 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-foreground">Recent Content</h3>
          <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {contentGrid.map((content, i) => (
            <div key={i} className="bg-secondary/50 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <span className={cn(
                  "text-xs px-2 py-0.5 rounded-full flex items-center gap-1",
                  content.isAI ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                )}>
                  {content.isAI ? <Bot className="w-3 h-3" /> : <User className="w-3 h-3" />}
                  {content.isAI ? "AI" : "Manual"}
                </span>
                <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", getStatusStyles(content.status))}>
                  {content.status}
                </span>
              </div>
              <p className="text-sm font-medium text-foreground mb-1">{content.title}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{content.views} views</span>
                <span className="text-foreground font-medium">{content.engagement}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-secondary/30 border border-border/50 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-foreground">67%</p>
          <p className="text-xs text-muted-foreground">Videos</p>
          <p className="text-xs text-emerald-400">10.2% avg eng</p>
        </div>
        <div className="bg-secondary/30 border border-border/50 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-foreground">18%</p>
          <p className="text-xs text-muted-foreground">Carousels</p>
          <p className="text-xs text-emerald-400">13.8% avg eng ⭐</p>
        </div>
        <div className="bg-secondary/30 border border-border/50 rounded-2xl p-4 text-center">
          <p className="text-2xl font-bold text-foreground">2:45 PM</p>
          <p className="text-xs text-muted-foreground">Best Time</p>
          <p className="text-xs text-emerald-400">12.6% peak eng</p>
        </div>
      </div>
    </div>
  );
};
