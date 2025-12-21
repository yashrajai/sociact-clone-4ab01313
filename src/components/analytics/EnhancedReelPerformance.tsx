import { 
  Eye, Heart, MessageCircle, Share2, Bookmark, TrendingUp, 
  Filter, Trophy, CheckCircle2, Sparkles, Bot, User, ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const topPerformer = {
  title: "Product Demo - Holiday Special",
  postedAt: "18 hours ago (Yesterday, 2:45 PM)",
  views: "94,234",
  likes: "11,872",
  comments: "1,047",
  shares: "3,421",
  saves: "2,234",
  engagement: "12.6%",
  whyItWorked: [
    "Product shown at 2 seconds (AI recommendation applied)",
    "Question CTA drove 1,047 comments (AI-generated)",
    "Trending audio boosted reach 3.2x (AI-selected)",
    "Posted at optimal time 2:45 PM (AI-optimized)",
  ],
  viralIndicator: "89% likely to go viral (150-200K forecast)",
  aiAction: "Creating 3 similar videos this week",
};

const contentGrid = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=400&fit=crop",
    title: "Product Demo",
    views: "94K",
    engagement: "12.6%",
    isAI: true,
    status: "viral",
    statusLabel: "Viral",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=400&fit=crop",
    title: "Tutorial Video",
    views: "67K",
    engagement: "9.2%",
    isAI: false,
    status: "average",
    statusLabel: "Average",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=400&fit=crop",
    title: "Behind Scenes",
    views: "45K",
    engagement: "6.8%",
    isAI: false,
    status: "below",
    statusLabel: "Below avg",
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=300&h=400&fit=crop",
    title: "Demo Reel",
    views: "89K",
    engagement: "11.4%",
    isAI: true,
    status: "good",
    statusLabel: "Good",
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=400&fit=crop",
    title: "Carousel Post",
    views: "52K",
    engagement: "14.2%",
    isAI: true,
    status: "saves",
    statusLabel: "High saves",
  },
  {
    id: 6,
    thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=400&fit=crop",
    title: "Product Launch",
    views: "78K",
    engagement: "8.1%",
    isAI: false,
    status: "average",
    statusLabel: "Average",
  },
  {
    id: 7,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=400&fit=crop",
    title: "Tips & Tricks",
    views: "61K",
    engagement: "10.7%",
    isAI: true,
    status: "good",
    statusLabel: "Good",
  },
  {
    id: 8,
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=400&fit=crop",
    title: "Story Series",
    views: "34K",
    engagement: "7.3%",
    isAI: false,
    status: "average",
    statusLabel: "Average",
  },
];

const contentTypeBreakdown = [
  { type: "Video Posts", percentage: 67, posts: 28, avgViews: "89K", engagement: "10.2%", isTop: false },
  { type: "Carousel Posts", percentage: 18, posts: 8, avgViews: "52K", engagement: "13.8%", isTop: true },
  { type: "Image Posts", percentage: 15, posts: 6, avgViews: "34K", engagement: "6.4%", isTop: false },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case "viral":
      return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
    case "good":
      return "bg-emerald-500/15 text-emerald-400 border-emerald-500/20";
    case "saves":
      return "bg-emerald-500/15 text-emerald-400 border-emerald-500/20";
    case "average":
      return "bg-amber-500/20 text-amber-400 border-amber-500/30";
    case "below":
      return "bg-rose-500/20 text-rose-400 border-rose-500/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "viral":
    case "good":
    case "saves":
      return "🟢";
    case "average":
      return "🟡";
    case "below":
      return "🔴";
    default:
      return "⚪";
  }
};

export const EnhancedReelPerformance = () => {
  return (
    <div className="space-y-6">
      {/* Top Performer This Week */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 border border-amber-500/20 rounded-2xl p-6">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/25">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-foreground">TOP PERFORMER THIS WEEK</h3>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-bold text-foreground mb-1">🏆 "{topPerformer.title}"</h4>
            <p className="text-sm text-muted-foreground">Posted {topPerformer.postedAt}</p>
          </div>

          <div className="border-t border-amber-500/20 pt-4 mb-4">
            <div className="flex flex-wrap gap-6 text-sm">
              <span className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-muted-foreground" />
                <span className="font-bold text-foreground">{topPerformer.views}</span>
                <span className="text-muted-foreground">views</span>
              </span>
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-400" />
                <span className="font-bold text-foreground">{topPerformer.likes}</span>
                <span className="text-muted-foreground">likes</span>
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-blue-400" />
                <span className="font-bold text-foreground">{topPerformer.comments}</span>
                <span className="text-muted-foreground">comments</span>
              </span>
              <span className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-foreground">{topPerformer.shares}</span>
                <span className="text-muted-foreground">shares</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-6 mt-3 text-sm">
              <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                📊 Engagement: {topPerformer.engagement} (🟢 Above avg)
              </span>
              <span className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-purple-400" />
                <span className="font-bold text-foreground">{topPerformer.saves}</span>
                <span className="text-muted-foreground">saves</span>
              </span>
            </div>
          </div>

          <div className="bg-background/50 rounded-xl p-4 mb-4">
            <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              WHY IT WORKED:
            </p>
            <ul className="space-y-2">
              {topPerformer.whyItWorked.map((reason, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col gap-2 text-sm">
              <span className="flex items-center gap-2 text-amber-400">
                <Sparkles className="w-4 h-4" />
                🔥 Viral Indicator: {topPerformer.viralIndicator}
              </span>
              <span className="flex items-center gap-2 text-primary">
                <Bot className="w-4 h-4" />
                🤖 AI Action: {topPerformer.aiAction}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
                View Full Analytics
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Generate Similar Content
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Content Grid */}
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold font-display text-foreground">RECENT CONTENT GRID</h3>
            <p className="text-sm text-muted-foreground">Detailed analytics for each piece of content</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors border border-border/50">
            <Filter className="w-4 h-4" />
            Filter ⚙️
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {contentGrid.map((content) => (
            <div
              key={content.id}
              className="bg-secondary/50 rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={content.thumbnail}
                  alt={content.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-sm font-medium truncate">{content.title}</p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="p-3 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{content.views} views</span>
                  <span className="text-foreground font-medium">{content.engagement} engage</span>
                </div>
                
                {/* AI/Manual badge */}
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "text-xs px-2 py-0.5 rounded-full flex items-center gap-1",
                    content.isAI 
                      ? "bg-primary/20 text-primary border border-primary/30" 
                      : "bg-muted text-muted-foreground border border-border"
                  )}>
                    {content.isAI ? (
                      <>
                        <Bot className="w-3 h-3" />
                        AI-made
                      </>
                    ) : (
                      <>
                        <User className="w-3 h-3" />
                        Manual
                      </>
                    )}
                  </span>
                </div>
                
                {/* Status badge */}
                <div className={cn(
                  "text-xs px-2 py-1 rounded-lg border text-center font-medium",
                  getStatusStyles(content.status)
                )}>
                  {getStatusIcon(content.status)} {content.statusLabel}
                </div>
                
                {/* View More button */}
                <button className="w-full text-xs text-primary hover:text-primary/80 flex items-center justify-center gap-1 pt-1">
                  View More <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / View All */}
        <div className="flex items-center justify-center gap-4">
          <button className="px-6 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors border border-border/50">
            Load More Content
          </button>
          <button className="px-6 py-2 text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-2">
            View All Posts <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content Type Breakdown */}
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold font-display text-foreground mb-4">CONTENT TYPE BREAKDOWN</h3>
        
        <div className="space-y-4 mb-6">
          {contentTypeBreakdown.map((item) => (
            <div key={item.type} className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-foreground flex items-center gap-2">
                    {item.type}: {item.percentage}% ({item.posts} posts)
                    {item.isTop && <span className="text-emerald-400">🟢</span>}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Avg {item.avgViews} views, {item.engagement} engagement
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className={cn(
                      "h-full rounded-full transition-all duration-500",
                      item.isTop ? "bg-emerald-500" : "bg-primary"
                    )}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-4 space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Best Performing Time:</span>
            <span className="text-foreground font-medium">2:45 PM EST (12.6% avg engagement)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Worst Performing Time:</span>
            <span className="text-foreground font-medium">8:00 AM EST (5.2% avg engagement)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
