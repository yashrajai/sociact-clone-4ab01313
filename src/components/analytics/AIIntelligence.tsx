import { 
  Target, AlertTriangle, Clock, Play, CheckCircle2, FileText,
  Calendar, Sparkles, ArrowRight, Video, Image
} from "lucide-react";
import { cn } from "@/lib/utils";


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
  return (
    <div className="space-y-6">
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
                  <div className="bg-background border border-border rounded-xl p-4 mb-4">
                    <p className="text-xs font-semibold text-foreground/80 mb-3">📊 PREDICTED PERFORMANCE:</p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      {content.prediction.views && (
                        <div className="flex items-center gap-2 px-3 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                          <span className="text-foreground/80">Views:</span>
                          <span className="font-bold text-blue-400">{content.prediction.views}</span>
                        </div>
                      )}
                      {content.prediction.saves && (
                        <div className="flex items-center gap-2 px-3 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                          <span className="text-foreground/80">Saves:</span>
                          <span className="font-bold text-purple-400">{content.prediction.saves}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                        <span className="text-foreground/80">Engagement:</span>
                        <span className="font-bold text-emerald-400">{content.prediction.engagement}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                        <span className="text-foreground/80">Confidence:</span>
                        <span className="font-bold text-amber-400">{content.prediction.confidence}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Applied Learnings */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground/80 mb-3">🎯 APPLIED LEARNINGS:</p>
                    <div className="flex flex-wrap gap-2">
                      {content.learnings.map((learning, i) => (
                        <span key={i} className="flex items-center gap-1 text-xs bg-primary/15 text-primary px-3 py-1.5 rounded-full border border-primary/20">
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
