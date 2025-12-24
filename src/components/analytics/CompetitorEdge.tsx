import { TrendingUp, Eye, Heart, MessageCircle, Share2 } from "lucide-react";

const competitor = {
  username: "@fitnessguru",
  displayName: "Fitness Guru",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
  followers: "128K",
  analytics: {
    totalViews: "2.4M",
    viewsTrend: "+12.5%",
    engagement: "8.2%",
    engagementTrend: "+2.1%",
    avgLikes: "15.2K",
    avgComments: "892",
    avgShares: "1.2K",
  }
};

export const CompetitorEdge = () => {
  return (
    <div className="bg-secondary border border-border rounded-2xl p-6">
      {/* Header with Profile */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img 
            src={competitor.avatar} 
            alt={competitor.username}
            className="w-12 h-12 rounded-full object-cover border-2 border-border"
          />
          <div>
            <h3 className="text-lg font-semibold font-display text-foreground">{competitor.username}</h3>
            <p className="text-sm text-muted-foreground">{competitor.displayName}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold font-display text-foreground">{competitor.followers}</p>
          <p className="text-xs text-muted-foreground">Followers</p>
        </div>
      </div>

      {/* Main Analytics - Side by Side */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-background border border-border rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Eye className="w-4 h-4 text-blue-400" />
            </div>
            <span className="text-sm text-foreground/80">Total Views</span>
          </div>
          <p className="text-2xl font-bold font-display text-foreground">{competitor.analytics.totalViews}</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-emerald-500" />
            <span className="text-xs font-medium text-emerald-500">{competitor.analytics.viewsTrend}</span>
          </div>
        </div>
        
        <div className="p-4 bg-background border border-border rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center">
              <Heart className="w-4 h-4 text-rose-400" />
            </div>
            <span className="text-sm text-foreground/80">Engagement</span>
          </div>
          <p className="text-2xl font-bold font-display text-foreground">{competitor.analytics.engagement}</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-emerald-500" />
            <span className="text-xs font-medium text-emerald-500">{competitor.analytics.engagementTrend}</span>
          </div>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground mb-3">Average Performance</p>
        <div className="flex items-start gap-4 p-4 bg-background border border-border rounded-xl">
          <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center shrink-0">
            <Heart className="w-5 h-5 text-rose-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-sm font-medium text-foreground/80">Avg Likes</span>
              <span className="text-base font-bold text-foreground">{competitor.analytics.avgLikes}</span>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-background border border-border rounded-xl">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
            <MessageCircle className="w-5 h-5 text-purple-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-sm font-medium text-foreground/80">Avg Comments</span>
              <span className="text-base font-bold text-foreground">{competitor.analytics.avgComments}</span>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-background border border-border rounded-xl">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
            <Share2 className="w-5 h-5 text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-sm font-medium text-foreground/80">Avg Shares</span>
              <span className="text-base font-bold text-foreground">{competitor.analytics.avgShares}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
