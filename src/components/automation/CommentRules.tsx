import { useState } from "react";
import { 
  MessageSquare, 
  Plus, 
  Search, 
  Filter,
  Trash2,
  Edit3,
  Copy,
  CheckCircle2,
  PauseCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CommentAutomationWizard } from "./CommentAutomationWizard";

const commentRules = [
  {
    id: 1,
    name: "Thank You Response",
    description: "Auto-reply to positive comments with gratitude",
    trigger: "Keywords",
    keywords: ["amazing", "love", "great", "awesome", "beautiful"],
    response: "Thank you so much for your kind words! 💜 We really appreciate your support!",
    status: "active",
    triggers: 4521,
    lastTriggered: "2 min ago"
  },
  {
    id: 2,
    name: "Question Handler",
    description: "Respond to comments containing questions",
    trigger: "Contains ?",
    keywords: ["?"],
    response: "Great question! Check out the link in our bio for more info, or DM us and we'll help you out! 📩",
    status: "active",
    triggers: 2341,
    lastTriggered: "5 min ago"
  },
  {
    id: 3,
    name: "Price Inquiry",
    description: "Auto-reply when someone asks about pricing",
    trigger: "Keywords",
    keywords: ["price", "cost", "how much", "pricing", "$"],
    response: "Thanks for your interest! 💰 Check out our pricing page: [link] or DM us for a personalized quote!",
    status: "active",
    triggers: 1876,
    lastTriggered: "12 min ago"
  },
  {
    id: 4,
    name: "Emoji Reactor",
    description: "Respond to fire and heart emoji comments",
    trigger: "Emojis",
    keywords: ["🔥", "❤️", "😍", "💯"],
    response: "You're amazing! Thanks for the love! 🙌💜",
    status: "active",
    triggers: 3245,
    lastTriggered: "1 min ago"
  },
  {
    id: 5,
    name: "Mention Handler",
    description: "Thank users who mention friends",
    trigger: "Contains @",
    keywords: ["@"],
    response: "Thanks for sharing with your friend! You both are awesome! 🎉",
    status: "paused",
    triggers: 987,
    lastTriggered: "2 hours ago"
  },
];

export const CommentRules = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showWizard, setShowWizard] = useState(false);

  if (showWizard) {
    return <CommentAutomationWizard onClose={() => setShowWizard(false)} />;
  }

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search rules..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-secondary/50 border border-border/50 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-secondary/50 border border-border/50 rounded-xl text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button 
            onClick={() => setShowWizard(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/25"
          >
            <Plus className="w-4 h-4" />
            New Rule
          </button>
        </div>
      </div>

      {/* Rules List */}
      <div className="space-y-4">
        {commentRules.map((rule) => (
          <div
            key={rule.id}
            className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-5 hover:border-primary/30 transition-all group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                  rule.status === "active" 
                    ? "bg-gradient-to-br from-emerald-500/20 to-teal-600/20" 
                    : "bg-secondary"
                )}>
                  <MessageSquare className={cn(
                    "w-6 h-6",
                    rule.status === "active" ? "text-emerald-400" : "text-muted-foreground"
                  )} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-base font-semibold text-foreground">{rule.name}</h4>
                    <span className={cn(
                      "flex items-center gap-1 text-xs px-2 py-0.5 rounded-full",
                      rule.status === "active" 
                        ? "bg-emerald-500/10 text-emerald-400" 
                        : "bg-amber-500/10 text-amber-400"
                    )}>
                      {rule.status === "active" ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : (
                        <PauseCircle className="w-3 h-3" />
                      )}
                      {rule.status === "active" ? "Active" : "Paused"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{rule.description}</p>
                  
                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {rule.keywords.slice(0, 5).map((keyword, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-background border border-border rounded-lg text-muted-foreground">
                        {keyword}
                      </span>
                    ))}
                    {rule.keywords.length > 5 && (
                      <span className="text-xs px-2 py-1 bg-background border border-border rounded-lg text-muted-foreground">
                        +{rule.keywords.length - 5} more
                      </span>
                    )}
                  </div>
                  
                  {/* Response Preview */}
                  <div className="p-3 bg-background border border-border rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Response:</p>
                    <p className="text-sm text-foreground">{rule.response}</p>
                  </div>
                </div>
              </div>

              {/* Stats & Actions */}
              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-secondary rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                    <Edit3 className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button className="p-2 hover:bg-secondary rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button className="p-2 hover:bg-secondary rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                    <Trash2 className="w-4 h-4 text-rose-400" />
                  </button>
                </div>
                
                <div className="text-right">
                  <p className="text-lg font-bold text-foreground">{rule.triggers.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">triggers</p>
                </div>
                
                <p className="text-xs text-muted-foreground">Last: {rule.lastTriggered}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
