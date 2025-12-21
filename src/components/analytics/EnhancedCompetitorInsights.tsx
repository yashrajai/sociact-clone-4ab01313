import { TrendingUp, TrendingDown, Eye, Users, Activity, ExternalLink, AlertCircle, Trophy, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { cn } from "@/lib/utils";

const topPerformer = {
  name: "CompetitorA",
  handle: "@competitor_a",
  rank: 1,
  followers: "3.2M",
  growth: "+18.2%",
  engagement: "15.7%",
  strategy: {
    postingFreq: "5x/week: Mon, Wed, Fri, Sat, Sun at 2:30-4:00 PM",
    contentMix: "60% Reels, 30% Carousels, 10% Images",
    avgVideoLength: "23 seconds (optimal for retention)",
    hashtagStrategy: "15-20 tags, mix trending + niche",
    hookStrategy: "Product shown in first 2 seconds",
    ctaStrategy: '"Tag someone who needs this" (+45% shares)',
  },
  gap: "-6.5%",
};

const contentComparison = [
  { type: "Product Demos", you: 6.8, compA: 15.7, compB: 14.1, best: 15.7, status: "gap", gap: "-8.9%" },
  { type: "Tutorials", you: 12.1, compA: 8.3, compB: 9.7, best: 12.1, status: "winning" },
  { type: "Behind Scenes", you: 6.8, compA: 13.2, compB: 11.9, best: 13.2, status: "gap", gap: "-6.4%" },
  { type: "Testimonials", you: 4.2, compA: 11.8, compB: 10.3, best: 11.8, status: "gap", gap: "-7.6%" },
  { type: "Tips & Tricks", you: 11.4, compA: 9.1, compB: 8.6, best: 11.4, status: "winning" },
];

const competitors = [
  {
    name: "CompetitorA",
    handle: "@competitor_a",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    followers: "3.2M",
    growth: "+18.2%",
    trend: "up",
    engagement: "9.4%",
    avgLikes: "245K",
    topContent: "Product launches",
  },
  {
    name: "CompetitorB",
    handle: "@competitor_b",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    followers: "2.8M",
    growth: "+12.5%",
    trend: "up",
    engagement: "7.8%",
    avgLikes: "189K",
    topContent: "Behind scenes",
  },
  {
    name: "CompetitorC",
    handle: "@competitor_c",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    followers: "1.9M",
    growth: "-2.3%",
    trend: "down",
    engagement: "5.2%",
    avgLikes: "98K",
    topContent: "Tutorials",
  },
  {
    name: "CompetitorD",
    handle: "@competitor_d",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    followers: "4.1M",
    growth: "+25.8%",
    trend: "up",
    engagement: "11.2%",
    avgLikes: "456K",
    topContent: "Collaborations",
  },
];

const comparisonData = [
  { name: "You", followers: 2400, color: "#22c55e" },
  { name: "Comp A", followers: 3200, color: "#8b5cf6" },
  { name: "Comp B", followers: 2800, color: "#ec4899" },
  { name: "Comp C", followers: 1900, color: "#f59e0b" },
  { name: "Comp D", followers: 4100, color: "#06b6d4" },
];

const trendData = [
  { week: "W1", you: 2100, compA: 2800, compB: 2500, compD: 3200 },
  { week: "W2", you: 2200, compA: 2900, compB: 2600, compD: 3400 },
  { week: "W3", you: 2300, compA: 3000, compB: 2700, compD: 3600 },
  { week: "W4", you: 2400, compA: 3200, compB: 2800, compD: 4100 },
];

const marketOpportunities = [
  {
    title: "Long-form Educational Content",
    gap: "None of top 5 competitors create 60+ second tutorials",
    potential: "High saves, authority building, algorithm boost",
    action: "SociAct will create 2 long tutorials per week",
  },
  {
    title: "User-Generated Content Reposts",
    gap: "Only 1 of 20 competitors actively reposts UGC",
    potential: "Authenticity, community building, free content",
    action: "SociAct will identify and schedule UGC reposts",
  },
  {
    title: "Carousel Education Posts",
    gap: "Underutilized by competitors (only 8% of their content)",
    potential: "High engagement, saves, shareability, algorithm loves them",
    action: "SociAct will generate 3 carousel scripts this week",
  },
];

interface EnhancedCompetitorInsightsProps {
  compact?: boolean;
}

export const EnhancedCompetitorInsights = ({ compact }: EnhancedCompetitorInsightsProps) => {
  if (compact) {
    return (
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-5">
        <h3 className="text-lg font-semibold font-display text-foreground mb-4">Competitor Activity</h3>
        <div className="space-y-3">
          {[
            { message: "CompetitorD's latest reel hit 5M views", time: "2h ago" },
            { message: "CompetitorA launched new product campaign", time: "5h ago" },
            { message: "CompetitorB partnered with influencer", time: "1d ago" },
          ].map((alert, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-xl">
              <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-foreground">{alert.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 py-2 text-sm text-primary font-medium hover:underline flex items-center justify-center gap-1">
          View All Activity <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Performer Spotlight */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 border border-amber-500/20 rounded-2xl p-6">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/25">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-foreground">
                {topPerformer.name} ({topPerformer.handle}) - Rank #{topPerformer.rank} in Your Niche
              </h3>
              <p className="text-sm text-muted-foreground">
                {topPerformer.followers} followers | {topPerformer.growth} growth | {topPerformer.engagement} avg engagement
              </p>
            </div>
          </div>

          <div className="bg-background/50 rounded-xl p-4 mb-4">
            <p className="text-sm font-semibold text-foreground mb-3">🎯 WINNING STRATEGY:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <p className="text-muted-foreground">• Posts {topPerformer.strategy.postingFreq}</p>
              <p className="text-muted-foreground">• Content Mix: {topPerformer.strategy.contentMix}</p>
              <p className="text-muted-foreground">• Avg Video Length: {topPerformer.strategy.avgVideoLength}</p>
              <p className="text-muted-foreground">• Hashtag Strategy: {topPerformer.strategy.hashtagStrategy}</p>
              <p className="text-muted-foreground">• Hook Strategy: {topPerformer.strategy.hookStrategy}</p>
              <p className="text-muted-foreground">• CTA Strategy: {topPerformer.strategy.ctaStrategy}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-amber-400 font-medium">💡 YOUR GAP: {topPerformer.gap} engagement</span>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Adopt Their Strategy
              </button>
              <button className="px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
                View Top Posts
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Competitor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {competitors.map((comp) => (
          <div
            key={comp.name}
            className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-5 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={comp.avatar}
                alt={comp.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-foreground truncate">{comp.name}</h4>
                <p className="text-xs text-muted-foreground truncate">{comp.handle}</p>
              </div>
              <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Followers</span>
                <span className="text-sm font-semibold text-foreground">{comp.followers}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Growth</span>
                <span className={cn(
                  "flex items-center gap-1 text-sm font-semibold",
                  comp.trend === "up" ? "text-emerald-400" : "text-rose-400"
                )}>
                  {comp.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {comp.growth}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Engagement</span>
                <span className="text-sm font-semibold text-foreground">{comp.engagement}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Avg Likes</span>
                <span className="text-sm font-semibold text-foreground">{comp.avgLikes}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground">Top content:</p>
              <p className="text-sm text-primary font-medium mt-1">{comp.topContent}</p>
            </div>

            <button className="w-full mt-3 py-2 text-sm text-primary font-medium hover:underline flex items-center justify-center gap-1">
              View Profile <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Comparison Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold font-display text-foreground mb-2">Follower Comparison</h3>
          <p className="text-sm text-muted-foreground mb-6">Your position vs competitors (in thousands)</p>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #333',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }} 
                />
                <Bar dataKey="followers" fill="#22c55e" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 p-3 bg-secondary/50 rounded-xl">
            <p className="text-sm text-foreground">
              <span className="text-primary">🟢 You: 2.4M</span> (Middle of pack) | 
              <span className="text-rose-400 ml-2">🔴 Need to reach: 3.2M (CmpA level)</span>
            </p>
          </div>
        </div>

        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold font-display text-foreground mb-2">Growth Trend</h3>
          <p className="text-sm text-muted-foreground mb-6">Weekly follower growth comparison</p>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="week" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #333',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }} 
                />
                <Line type="monotone" dataKey="you" stroke="#22c55e" strokeWidth={3} dot={{ fill: '#22c55e' }} />
                <Line type="monotone" dataKey="compA" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6' }} />
                <Line type="monotone" dataKey="compB" stroke="#ec4899" strokeWidth={2} dot={{ fill: '#ec4899' }} />
                <Line type="monotone" dataKey="compD" stroke="#f59e0b" strokeWidth={2} dot={{ fill: '#f59e0b' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground">You</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-violet-500" />
              <span className="text-muted-foreground">CmpA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-pink-500" />
              <span className="text-muted-foreground">CmpB</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-muted-foreground">CmpD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Market Opportunities */}
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <Target className="w-5 h-5 text-emerald-400" />
          <h3 className="text-lg font-semibold font-display text-foreground">Market Opportunities</h3>
        </div>

        <div className="space-y-4">
          {marketOpportunities.map((opp, index) => (
            <div
              key={opp.title}
              className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    OPPORTUNITY #{index + 1}: {opp.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    <span className="font-medium text-foreground">Gap:</span> {opp.gap}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Potential:</span> {opp.potential}
                  </p>
                  <p className="text-sm text-emerald-400 mt-2">
                    <span className="font-medium">Action:</span> {opp.action}
                  </p>
                </div>
                <button className="flex items-center gap-1 text-sm text-primary font-medium hover:underline whitespace-nowrap">
                  Exploit Opportunity <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
