import { 
  Bot, CheckCircle2, MessageCircle, Send, Video, TrendingUp, Users, 
  RefreshCw, Settings, Calendar, Eye, Bookmark, Clock, AlertCircle,
  Play, Pause, Edit, X, ChevronRight, Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const systemStatuses = [
  { name: "Auto-Posting", status: "active", metric: "89 posts this month", uptime: "99.8%" },
  { name: "Comment Monitor", status: "active", metric: "1,934 auto-replies", uptime: "100%" },
  { name: "DM Automation", status: "active", metric: "467 conversations", uptime: "98.7%" },
  { name: "Content Gen", status: "active", metric: "45 videos created", uptime: "100%" },
  { name: "Trend Tracking", status: "active", metric: "Real-time monitoring", uptime: "100%" },
  { name: "Competitor Scan", status: "active", metric: "340 posts analyzed", uptime: "100%" },
];

const performanceMetrics = [
  { label: "Comment Response Time", value: "<2 minutes average" },
  { label: "DM Response Time", value: "<5 minutes average" },
  { label: "Video Generation", value: "8 minutes per video" },
  { label: "Post Scheduling Accuracy", value: "99.8%" },
];

const valueMetrics = [
  { label: "Time Saved", value: "47 hours", detail: "(vs manual management)" },
  { label: "Cost Saved", value: "$8,400", detail: "(content creation + management)" },
  { label: "Success Rate", value: "96%", detail: "(posts meeting performance targets)" },
  { label: "ROI", value: "847%", detail: "(cost of SociAct vs value delivered)" },
];

const scheduledContent = [
  {
    id: 1,
    urgency: "live",
    time: "Today, 5:45 PM",
    timeLabel: "LIVE IN 3 HOURS",
    platform: "Instagram Story",
    title: "Product Teaser",
    statuses: [
      { label: "Generated", complete: true },
      { label: "Reviewed", complete: true },
      { label: "Scheduled", complete: true },
    ],
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop",
    expected: "8K views, 67% completion rate",
    confidence: null,
    generating: false,
    progress: null,
  },
  {
    id: 2,
    urgency: "pending",
    time: "Tomorrow, 2:45 PM",
    timeLabel: "TOMORROW AT 2:45 PM",
    platform: "Instagram Post",
    title: "5 Ways to Use [Product] (Carousel)",
    statuses: [
      { label: "Generated", complete: true },
      { label: "Pending Approval", complete: false, warning: true },
      { label: "Scheduled", complete: false, pending: true },
    ],
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop",
    expected: "52K views, 180-240 saves, 12.1% engagement",
    confidence: 82,
    generating: false,
    progress: null,
  },
  {
    id: 3,
    urgency: "scheduled",
    time: "Tomorrow, 7:30 PM",
    timeLabel: "TOMORROW AT 7:30 PM",
    platform: "Instagram Reel",
    title: "Customer Success Story (AI Avatar)",
    statuses: [
      { label: "Script Ready", complete: true },
      { label: "Generating Video...", complete: false, generating: true },
    ],
    thumbnail: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=100&h=100&fit=crop",
    expected: "75K views, 9.8% engagement",
    confidence: null,
    generating: true,
    progress: 67,
    eta: "4 minutes remaining",
  },
];

const queueSummary = [
  { label: "Posts Scheduled", count: 12, status: "complete" },
  { label: "Stories Scheduled", count: 14, status: "complete" },
  { label: "Posts Pending Approval", count: 3, status: "warning" },
  { label: "Videos Currently Generating", count: 2, status: "generating" },
];

export const AutomationAnalytics = () => {
  return (
    <div className="space-y-6">
      {/* Automation Health Dashboard */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-6">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-foreground flex items-center gap-2">
                  🤖 ALL SYSTEMS OPERATIONAL
                </h3>
                <p className="text-sm text-muted-foreground">Last checked: 2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              <button className="px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </div>
          </div>

          {/* System Status Grid */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">System Status:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {systemStatuses.map((system) => (
                <div key={system.name} className="flex items-center gap-3 bg-background/50 rounded-xl p-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">{system.name}</span>
                      <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded-full font-medium">
                        🟢 Active
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                      <span>{system.metric}</span>
                      <span className="text-emerald-400">{system.uptime} uptime</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Performance Metrics:
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {performanceMetrics.map((metric) => (
                <div key={metric.label} className="bg-background/50 rounded-xl p-3">
                  <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                  <p className="text-sm font-semibold text-foreground">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Value Generated */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              💰 Value Generated This Week:
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {valueMetrics.map((metric) => (
                <div key={metric.label} className="bg-background/50 rounded-xl p-3">
                  <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                  <p className="text-lg font-bold text-primary">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Queue & Schedule */}
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-primary" />
            <div>
              <h3 className="text-lg font-semibold font-display text-foreground">CONTENT QUEUE & SCHEDULE</h3>
              <p className="text-sm text-muted-foreground">Upcoming scheduled content</p>
            </div>
          </div>
          <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1">
            View Calendar <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Scheduled Content Items */}
        <div className="space-y-4 mb-6">
          {scheduledContent.map((content) => (
            <div 
              key={content.id} 
              className={cn(
                "rounded-xl p-4 border",
                content.urgency === "live" && "bg-rose-500/10 border-rose-500/30",
                content.urgency === "pending" && "bg-amber-500/10 border-amber-500/30",
                content.urgency === "scheduled" && "bg-emerald-500/10 border-emerald-500/30"
              )}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={cn(
                  "text-xs font-bold px-2 py-1 rounded",
                  content.urgency === "live" && "bg-rose-500/20 text-rose-400",
                  content.urgency === "pending" && "bg-amber-500/20 text-amber-400",
                  content.urgency === "scheduled" && "bg-emerald-500/20 text-emerald-400"
                )}>
                  {content.urgency === "live" && "🔴"} 
                  {content.urgency === "pending" && "🟡"} 
                  {content.urgency === "scheduled" && "🟢"} 
                  {content.timeLabel}
                </span>
              </div>

              <div className="flex gap-4">
                <img 
                  src={content.thumbnail} 
                  alt={content.title}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">{content.platform}:</span>
                    <span className="text-sm font-medium text-foreground">"{content.title}"</span>
                  </div>

                  {/* Status badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs text-muted-foreground">Status:</span>
                    {content.statuses.map((status, i) => (
                      <span 
                        key={i}
                        className={cn(
                          "text-xs px-2 py-0.5 rounded-full flex items-center gap-1",
                          status.complete && "bg-emerald-500/20 text-emerald-400",
                          status.warning && "bg-amber-500/20 text-amber-400",
                          status.pending && "bg-muted text-muted-foreground",
                          status.generating && "bg-blue-500/20 text-blue-400"
                        )}
                      >
                        {status.complete && "✅"}
                        {status.warning && "⚠️"}
                        {status.pending && "⏳"}
                        {status.generating && "🔄"}
                        {status.label}
                        {status.generating && content.progress && ` ${content.progress}%`}
                      </span>
                    ))}
                  </div>

                  {/* ETA for generating content */}
                  {content.generating && content.eta && (
                    <p className="text-xs text-muted-foreground mb-2">ETA: {content.eta}</p>
                  )}

                  {/* Expected performance */}
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-muted-foreground">Expected:</span>
                    <span className="text-foreground">{content.expected}</span>
                    {content.confidence && (
                      <span className="text-primary font-medium">Confidence: {content.confidence}%</span>
                    )}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col gap-2 flex-shrink-0">
                  {content.urgency === "live" && (
                    <>
                      <button className="px-3 py-1.5 bg-secondary text-foreground rounded-lg text-xs font-medium hover:bg-secondary/80">
                        Edit
                      </button>
                      <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90">
                        Post Now
                      </button>
                      <button className="px-3 py-1.5 text-rose-400 hover:text-rose-300 text-xs font-medium">
                        Cancel
                      </button>
                    </>
                  )}
                  {content.urgency === "pending" && (
                    <>
                      <button className="px-3 py-1.5 bg-secondary text-foreground rounded-lg text-xs font-medium hover:bg-secondary/80">
                        Preview Full
                      </button>
                      <button className="px-3 py-1.5 bg-emerald-500 text-white rounded-lg text-xs font-medium hover:bg-emerald-600">
                        Approve
                      </button>
                      <button className="px-3 py-1.5 text-muted-foreground hover:text-foreground text-xs font-medium">
                        Edit
                      </button>
                    </>
                  )}
                  {content.generating && (
                    <>
                      <button className="px-3 py-1.5 bg-secondary text-foreground rounded-lg text-xs font-medium hover:bg-secondary/80">
                        View Script
                      </button>
                      <button className="px-3 py-1.5 bg-amber-500 text-white rounded-lg text-xs font-medium hover:bg-amber-600 flex items-center gap-1">
                        <Pause className="w-3 h-3" />
                        Pause
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Queue Summary */}
        <div className="border-t border-border/50 pt-4">
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            📊 QUEUE SUMMARY (Next 7 Days):
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {queueSummary.map((item) => (
              <div key={item.label} className="flex items-center gap-2 bg-background/50 rounded-lg p-3">
                <span className={cn(
                  "text-lg font-bold",
                  item.status === "complete" && "text-emerald-400",
                  item.status === "warning" && "text-amber-400",
                  item.status === "generating" && "text-blue-400"
                )}>
                  {item.count}
                </span>
                <span className="text-xs text-muted-foreground">
                  {item.label}
                  {item.status === "complete" && " ✅"}
                  {item.status === "warning" && " ⚠️"}
                  {item.status === "generating" && " 🔄"}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-muted-foreground">Queue Health:</span>
            <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden max-w-xs">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '87%' }} />
            </div>
            <span className="text-sm font-medium text-emerald-400">87% filled (Good capacity)</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
              View Full Week Calendar
            </button>
            <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors">
              Bulk Approve All
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              Add Manual Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
