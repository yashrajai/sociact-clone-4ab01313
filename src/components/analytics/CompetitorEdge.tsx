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
      <div className="flex items-start gap-8 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Eye className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Total Views</span>
          </div>
          <p className="text-2xl font-bold font-display text-foreground">{competitor.analytics.totalViews}</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-emerald-500" />
            <span className="text-xs font-medium text-emerald-500">{competitor.analytics.viewsTrend}</span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Heart className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Engagement</span>
          </div>
          <p className="text-2xl font-bold font-display text-foreground">{competitor.analytics.engagement}</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-emerald-500" />
            <span className="text-xs font-medium text-emerald-500">{competitor.analytics.engagementTrend}</span>
          </div>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-foreground mb-3">Average Performance</p>
        <div className="flex items-center justify-between py-2 border-b border-border/50">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Avg Likes</span>
          </div>
          <span className="text-sm font-semibold text-foreground">{competitor.analytics.avgLikes}</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-border/50">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Avg Comments</span>
          </div>
          <span className="text-sm font-semibold text-foreground">{competitor.analytics.avgComments}</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Avg Shares</span>
          </div>
          <span className="text-sm font-semibold text-foreground">{competitor.analytics.avgShares}</span>
        </div>
      </div>
    </div>
  );
};
