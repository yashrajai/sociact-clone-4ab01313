import { useState, useEffect } from "react";
import { Users, TrendingUp, Zap, ArrowRight, Play, Pause } from "lucide-react";

const competitors = [
  { 
    handle: "@fitnessguru", 
    followers: "128K", 
    avatar: "FG",
    engagement: "8.2%",
    hooks: ["POV: You finally found the workout that...", "Nobody talks about this fitness hack"],
    ctaStyle: "Direct 'Shop Now' with urgency",
    contentBreakdown: { demos: 45, tutorials: 30, bts: 25 },
    whyWinning: "Strong hook in first 0.5s, uses trending audio, posts at peak hours (7-9 PM)"
  },
  { 
    handle: "@healthylife", 
    followers: "95K", 
    avatar: "HL",
    engagement: "7.8%",
    hooks: ["Wait for it...", "This changed everything for me"],
    ctaStyle: "Soft CTA with 'Link in bio for more'",
    contentBreakdown: { demos: 30, tutorials: 50, bts: 20 },
    whyWinning: "Educational content with clear value prop, consistent posting schedule, engages in comments"
  },
  { 
    handle: "@gymproducts", 
    followers: "82K", 
    avatar: "GP",
    engagement: "6.5%",
    hooks: ["You need this in your gym bag", "Stop doing this exercise wrong"],
    ctaStyle: "Product showcase with 'Tap to shop'",
    contentBreakdown: { demos: 60, tutorials: 20, bts: 20 },
    whyWinning: "High-quality product demos, before/after transformations, user testimonials"
  },
  { 
    handle: "@fitbrand", 
    followers: "67K", 
    avatar: "FB",
    engagement: "9.1%",
    hooks: ["The secret nobody tells you about...", "I tested this for 30 days"],
    ctaStyle: "Story-driven with emotional CTA",
    contentBreakdown: { demos: 25, tutorials: 40, bts: 35 },
    whyWinning: "Personal storytelling, raw behind-the-scenes, builds community through replies"
  },
  { 
    handle: "@workoutking", 
    followers: "54K", 
    avatar: "WK",
    engagement: "7.2%",
    hooks: ["3 exercises you're doing wrong", "This takes 5 minutes but changes everything"],
    ctaStyle: "Numbered lists with clear action",
    contentBreakdown: { demos: 35, tutorials: 55, bts: 10 },
    whyWinning: "Quick tips format, saves-focused content, collaborates with other creators"
  },
];

export const CompetitorEdge = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % competitors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentCompetitor = competitors[activeIndex];

  return (
    <div 
      className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold font-display text-foreground">Competitor Edge</h3>
            <p className="text-sm text-muted-foreground">{competitors.length} competitors analyzed</p>
          </div>
        </div>
        <button 
          onClick={() => setIsPaused(!isPaused)}
          className="p-2 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
        >
          {isPaused ? (
            <Play className="w-4 h-4 text-muted-foreground" />
          ) : (
            <Pause className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Competitor Card - Single View with Animation */}
      <div className="relative overflow-hidden">
        <div 
          className="transition-all duration-500 ease-in-out"
          key={activeIndex}
        >
          {/* Competitor Header */}
          <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border/30 mb-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-lg font-bold text-foreground">
              {currentCompetitor.avatar}
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-foreground">{currentCompetitor.handle}</p>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-sm text-muted-foreground">{currentCompetitor.followers} followers</span>
                <div className="flex items-center gap-1 text-emerald-400">
                  <TrendingUp className="w-3 h-3" />
                  <span className="text-sm font-medium">{currentCompetitor.engagement} eng.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Analysis Sections */}
          <div className="space-y-4">
            {/* Hooks They Use */}
            <div className="p-3 bg-background/30 rounded-xl border border-border/20">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Hooks They Use</p>
              <div className="space-y-1.5">
                {currentCompetitor.hooks.map((hook, i) => (
                  <p key={i} className="text-sm text-foreground">"{hook}"</p>
                ))}
              </div>
            </div>

            {/* CTA Style */}
            <div className="p-3 bg-background/30 rounded-xl border border-border/20">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">CTA Style</p>
              <p className="text-sm text-foreground">{currentCompetitor.ctaStyle}</p>
            </div>

            {/* Content Breakdown */}
            <div className="p-3 bg-background/30 rounded-xl border border-border/20">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Content Type</p>
              <div className="flex gap-2">
                <div className="flex-1 text-center p-2 bg-primary/10 rounded-lg">
                  <p className="text-lg font-bold text-primary">{currentCompetitor.contentBreakdown.demos}%</p>
                  <p className="text-xs text-muted-foreground">Demos</p>
                </div>
                <div className="flex-1 text-center p-2 bg-blue-500/10 rounded-lg">
                  <p className="text-lg font-bold text-blue-400">{currentCompetitor.contentBreakdown.tutorials}%</p>
                  <p className="text-xs text-muted-foreground">Tutorials</p>
                </div>
                <div className="flex-1 text-center p-2 bg-amber-500/10 rounded-lg">
                  <p className="text-lg font-bold text-amber-400">{currentCompetitor.contentBreakdown.bts}%</p>
                  <p className="text-xs text-muted-foreground">BTS</p>
                </div>
              </div>
            </div>

            {/* Why They're Winning */}
            <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
              <p className="text-xs font-medium text-emerald-400 uppercase tracking-wider mb-2">Why They're Winning</p>
              <p className="text-sm text-foreground">{currentCompetitor.whyWinning}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {competitors.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? "w-6 bg-primary" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>

      {/* Dynamic CTA Button */}
      <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors mt-5">
        <Zap className="w-4 h-4" />
        Apply {currentCompetitor.handle}'s Strategy
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
