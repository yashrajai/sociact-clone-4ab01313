import { Bot, CheckCircle2, Calendar, ChevronRight, Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const systemStatuses = [
  { name: "Auto-Posting", metric: "89 posts", status: "active" },
  { name: "Comments", metric: "1,934 replies", status: "active" },
  { name: "DMs", metric: "467 convos", status: "active" },
  { name: "Content Gen", metric: "45 videos", status: "active" },
  { name: "Trends", metric: "Real-time", status: "active" },
  { name: "Competitors", metric: "340 analyzed", status: "active" },
];

const valueMetrics = [
  { label: "Time Saved", value: "47 hrs" },
  { label: "Cost Saved", value: "$8,400" },
  { label: "Success Rate", value: "96%" },
  { label: "ROI", value: "847%" },
];

const scheduledContent = [
  {
    urgency: "live",
    time: "Today, 5:45 PM",
    title: "Product Teaser",
    platform: "Story",
    expected: "8K views",
  },
  {
    urgency: "pending",
    time: "Tomorrow, 2:45 PM",
    title: "5 Ways to Use [Product]",
    platform: "Carousel",
    expected: "52K views • Needs approval",
  },
];

const queueSummary = { posts: 12, stories: 14, pending: 3, generating: 2 };

export const AutomationAnalytics = () => {
  return (
    <div className="space-y-4">
      {/* Health Status - Compact */}
      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                🤖 All Systems Operational
                <span className="text-xs text-muted-foreground font-normal">• Checked 2 min ago</span>
              </p>
            </div>
          </div>
        </div>

        {/* System Status - Single Row */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
          {systemStatuses.map((system) => (
            <div key={system.name} className="flex items-center gap-2 p-2 bg-background/50 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-foreground truncate">{system.name}</p>
                <p className="text-xs text-muted-foreground truncate">{system.metric}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Value Metrics - Single Row */}
        <div className="grid grid-cols-4 gap-2">
          {valueMetrics.map((metric) => (
            <div key={metric.label} className="p-2 bg-background/50 rounded-lg text-center">
              <p className="text-lg font-bold text-primary">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Queue - Compact */}
      <div className="bg-secondary/30 border border-border/50 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Content Queue</h3>
          </div>
          <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
            View Calendar <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-2 mb-4">
          {scheduledContent.map((content, i) => (
            <div 
              key={i}
              className={cn(
                "flex items-center justify-between p-3 rounded-xl",
                content.urgency === "live" ? "bg-rose-500/10 border border-rose-500/30" : "bg-amber-500/10 border border-amber-500/30"
              )}
            >
              <div className="flex items-center gap-3">
                <span className={cn(
                  "text-xs font-bold px-2 py-1 rounded",
                  content.urgency === "live" ? "bg-rose-500/20 text-rose-400" : "bg-amber-500/20 text-amber-400"
                )}>
                  {content.urgency === "live" ? "🔴 3 HRS" : "🟡 TOMORROW"}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{content.platform}: {content.title}</p>
                  <p className="text-xs text-muted-foreground">{content.expected}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {content.urgency === "pending" && (
                  <button className="px-3 py-1.5 bg-emerald-500 text-white rounded-lg text-xs font-medium">
                    Approve
                  </button>
                )}
                <button className="px-3 py-1.5 bg-secondary text-foreground rounded-lg text-xs font-medium">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Queue Summary */}
        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <div className="flex items-center gap-4 text-xs">
            <span className="text-emerald-400 font-medium">✅ {queueSummary.posts} posts</span>
            <span className="text-emerald-400 font-medium">✅ {queueSummary.stories} stories</span>
            <span className="text-amber-400 font-medium">⚠️ {queueSummary.pending} pending</span>
            <span className="text-blue-400 font-medium">🔄 {queueSummary.generating} generating</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Health:</span>
            <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '87%' }} />
            </div>
            <span className="text-xs text-emerald-400 font-medium">87%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
