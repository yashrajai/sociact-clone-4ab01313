import { useState } from "react";
import { 
  Bot, Brain, TrendingUp, Target, Lightbulb, AlertTriangle,
  CheckCircle2, ChevronDown, ChevronUp, Clock, Play, Eye,
  Calendar, Sparkles, ArrowRight, FileText, Video, Image
} from "lucide-react";
import { cn } from "@/lib/utils";

const discoveries = [
  {
    id: 1,
    title: "Early Product Reveal = 2x Retention",
    finding: "Top competitors show product at 2 sec vs your 8 sec",
    impact: "They get 67% retention vs your 34% (-33% gap)",
    action: "Applied to next 8 video scripts",
    applied: true,
  },
  {
    id: 2,
    title: "Question CTAs Drive 89% More Comments",
    finding: '"Which feature would you use?" gets 234 comments avg',
    finding2: '"Link in bio" gets 43 comments avg',
    action: "All future captions now use question format",
    applied: true,
  },
  {
    id: 3,
    title: "Trending Audio Window = 48 Hours",
    finding: "Audio tracks lose 67% viral boost after 48 hours",
    impact: "Using audio in 24-48hr window = 3.4x more reach",
    action: "Auto-tracking trending audio, applying to next 5 videos",
    applied: true,
  },
  {
    id: 4,
    title: "Carousels = 2.1x Save Rate",
    finding: "Educational carousels get 180 saves avg vs 85 for videos",
    impact: 'Saves signal "valuable content" to algorithm',
    action: "Creating 3 carousels this week (5 Tips, Mistakes, Guide)",
    applied: true,
  },
];


const weeklyPlan = [
  {
    day: "MON DEC 23",
    time: "2:45 PM",
    type: "video",
    title: 'Product Demo: "Transform Your [Problem] in 30 Seconds"',
    format: "Problem-Agitate-Solution (Competitor A's winning pattern)",
    details: [
      "Hook: Product reveal at 2 seconds",
      'Audio: "Motivation Edit" (trending, 18 hrs old)',
      'CTA: "Which benefit surprised you most?"',
    ],
    prediction: {
      views: "85,000-120,000",
      engagement: "11.2%-13.7%",
      confidence: 87,
    },
    learnings: ["Discovery #1: 2-sec product reveal", "Discovery #2: Question CTA", "Discovery #3: Trending audio (48hr window)", "Fix #1: Early hook, testimonials, macro shots"],
    status: { script: true, video: 78 },
  },
  {
    day: "WED DEC 25",
    time: "2:45 PM",
    type: "carousel",
    title: 'Educational Carousel: "5 Mistakes People Make With [Product]"',
    format: "6 slides (Cover + 5 mistakes)",
    details: [
      "Design: Minimalist with product close-ups",
      'CTA: "Which mistake were YOU making?"',
    ],
    prediction: {
      saves: "180-240",
      engagement: "9.8%-12.1%",
      confidence: 82,
    },
    learnings: ["Discovery #4: Carousel 2.1x save rate", "Discovery #2: Question CTA", "Market Gap: Competitors underuse carousels"],
    status: { pending: true },
  },
  {
    day: "FRI DEC 27",
    time: "2:45 PM",
    type: "video",
    title: 'Behind-the-Scenes: "How We Actually Make [Product]"',
    format: "Raw footage, no edits, authentic",
    details: [
      "Style: No music, just talking (Competitor B's formula)",
      "Length: 28 seconds",
      'CTA: "What surprised you about our process?"',
    ],
    prediction: {
      views: "70,000-95,000",
      engagement: "13.2%-15.1%",
      confidence: 79,
    },
    learnings: ["Fix #3: Authentic, no-polish approach", "Discovery #2: Question CTA", "Gap closure: BTS content type"],
    status: { script: true, video: 0 },
  },
];

export const AIIntelligence = () => {
  const [expandedDiscovery, setExpandedDiscovery] = useState<number | null>(null);
  const [expandedGap, setExpandedGap] = useState<number | null>(1);

  return (
    <div className="space-y-6">
      {/* AI Discoveries */}
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold font-display text-foreground">What AI Discovered</h3>
        </div>

        <div className="space-y-4">
          {discoveries.map((discovery, index) => (
            <div
              key={discovery.id}
              className="bg-secondary/50 rounded-xl overflow-hidden border border-border/30 hover:border-primary/30 transition-all"
            >
              <button
                onClick={() => setExpandedDiscovery(expandedDiscovery === discovery.id ? null : discovery.id)}
                className="w-full flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-foreground">
                      DISCOVERY #{index + 1}: {discovery.title}
                    </p>
                  </div>
                </div>
                {expandedDiscovery === discovery.id ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>

              {expandedDiscovery === discovery.id && (
                <div className="px-4 pb-4 space-y-3 border-t border-border/30 pt-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Finding:</span> {discovery.finding}
                  </p>
                  {discovery.finding2 && (
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Finding:</span> {discovery.finding2}
                    </p>
                  )}
                  {discovery.impact && (
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Impact:</span> {discovery.impact}
                    </p>
                  )}
                  <div className="flex items-center gap-2 pt-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-emerald-400 font-medium">Action: {discovery.action}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Next Week's AI Strategy */}
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold font-display text-foreground">WEEK OF DEC 23-29: AI-OPTIMIZED CONTENT PLAN</h3>
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Target className="w-4 h-4 text-primary" />
                Goal: Close -3.6% engagement gap with top competitors
              </span>
              <span>|</span>
              <span>Strategy: Focus on product demos, carousels, authenticity</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {weeklyPlan.map((content, index) => (
            <div
              key={index}
              className="bg-secondary/50 rounded-xl p-5 border border-border/30 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                  content.type === "video" 
                    ? "bg-gradient-to-br from-red-500 to-pink-600" 
                    : "bg-gradient-to-br from-violet-500 to-purple-600"
                )}>
                  {content.type === "video" ? (
                    <Video className="w-6 h-6 text-white" />
                  ) : (
                    <Image className="w-6 h-6 text-white" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-primary">{content.day}</span>
                    <span className="text-sm text-muted-foreground">• {content.time}</span>
                  </div>
                  
                  <h4 className="text-base font-semibold text-foreground mb-1">{content.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">Format: {content.format}</p>
                  
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                    {content.details.map((detail, i) => (
                      <span key={i}>{detail}</span>
                    ))}
                  </div>

                  {/* Prediction */}
                  <div className="bg-background/50 rounded-lg p-3 mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">📊 PREDICTED PERFORMANCE:</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      {content.prediction.views && (
                        <span className="text-foreground">Views: <span className="font-medium">{content.prediction.views}</span></span>
                      )}
                      {content.prediction.saves && (
                        <span className="text-foreground">Saves: <span className="font-medium">{content.prediction.saves}</span></span>
                      )}
                      <span className="text-foreground">Engagement: <span className="font-medium">{content.prediction.engagement}</span></span>
                      <span className="text-foreground">Confidence: <span className="font-medium text-primary">{content.prediction.confidence}%</span></span>
                    </div>
                  </div>

                  {/* Applied Learnings */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">🎯 APPLIED LEARNINGS:</p>
                    <div className="flex flex-wrap gap-2">
                      {content.learnings.map((learning, i) => (
                        <span key={i} className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          {learning}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      {content.status.script !== undefined && (
                        <span className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          Script: {content.status.script ? (
                            <span className="text-emerald-400">Ready ✓</span>
                          ) : (
                            <span className="text-muted-foreground">Not Started</span>
                          )}
                        </span>
                      )}
                      {content.status.video !== undefined && (
                        <span className="flex items-center gap-1">
                          <Video className="w-4 h-4" />
                          Video: {content.status.video > 0 ? (
                            <span className="text-amber-400">Generating... {content.status.video}%</span>
                          ) : (
                            <span className="text-muted-foreground">Not Started</span>
                          )}
                        </span>
                      )}
                      {content.status.pending && (
                        <span className="flex items-center gap-1 text-amber-400">
                          <AlertTriangle className="w-4 h-4" />
                          Pending Approval
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 bg-secondary rounded-lg text-xs font-medium text-foreground hover:bg-secondary/80 transition-colors">
                        Preview
                      </button>
                      <button className="px-3 py-1.5 bg-secondary rounded-lg text-xs font-medium text-foreground hover:bg-secondary/80 transition-colors">
                        Edit
                      </button>
                      <button className="px-3 py-1.5 bg-primary rounded-lg text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 py-3 bg-secondary/50 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/70 transition-all flex items-center justify-center gap-2">
          + 9 more posts scheduled this week
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
