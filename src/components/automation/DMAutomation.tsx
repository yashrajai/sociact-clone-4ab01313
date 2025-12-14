import { useState } from "react";
import { 
  Send, 
  Plus, 
  Search, 
  UserPlus,
  MessageCircle,
  ShoppingBag,
  HelpCircle,
  Star,
  Gift,
  Edit3,
  Trash2,
  Copy,
  CheckCircle2,
  PauseCircle,
  Zap,
  Clock,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const dmRules = [
  {
    id: 1,
    name: "Welcome New Followers",
    description: "Send a personalized welcome message to every new follower",
    trigger: "New Follower",
    icon: UserPlus,
    delay: "Instant",
    message: "Hey {username}! 👋 Thanks for following! We're so excited to have you here. Check out our latest content and feel free to DM us anytime!",
    status: "active",
    sent: 2156,
    openRate: "78%",
    replyRate: "23%"
  },
  {
    id: 2,
    name: "Story Reply Handler",
    description: "Auto-respond when someone replies to your story",
    trigger: "Story Reply",
    icon: MessageCircle,
    delay: "Instant",
    message: "Thanks for watching our story! 💜 We love hearing from you. What did you think?",
    status: "active",
    sent: 3421,
    openRate: "92%",
    replyRate: "45%"
  },
  {
    id: 3,
    name: "Product Inquiry",
    description: "Handle product-related questions automatically",
    trigger: "Keyword: product, buy, purchase",
    icon: ShoppingBag,
    delay: "Instant",
    message: "Thanks for your interest in our products! 🛍️ Here's our catalog: [link]. For personalized recommendations, just tell us what you're looking for!",
    status: "active",
    sent: 1876,
    openRate: "85%",
    replyRate: "34%"
  },
  {
    id: 4,
    name: "FAQ Auto-Response",
    description: "Answer frequently asked questions instantly",
    trigger: "Keyword: help, support, question",
    icon: HelpCircle,
    delay: "Instant",
    message: "Hey! We're here to help! 🙋‍♀️ Check out our FAQ: [link]. If you need more help, a team member will get back to you within 24 hours!",
    status: "active",
    sent: 987,
    openRate: "81%",
    replyRate: "28%"
  },
  {
    id: 5,
    name: "VIP Customer Follow-up",
    description: "Special message for repeat customers",
    trigger: "VIP Tag",
    icon: Star,
    delay: "1 hour",
    message: "Hey {username}! 🌟 As one of our VIP customers, we wanted to give you an exclusive early access to our new collection! Use code VIP20 for 20% off!",
    status: "paused",
    sent: 234,
    openRate: "95%",
    replyRate: "67%"
  },
  {
    id: 6,
    name: "Birthday Wishes",
    description: "Send birthday greetings with special offers",
    trigger: "Birthday",
    icon: Gift,
    delay: "Scheduled",
    message: "Happy Birthday, {username}! 🎂🎉 To celebrate your special day, here's a 25% discount code just for you: BDAY25. Enjoy!",
    status: "active",
    sent: 156,
    openRate: "98%",
    replyRate: "72%"
  },
];

const triggerOptions = [
  { id: "new_follower", label: "New Follower", icon: UserPlus },
  { id: "story_reply", label: "Story Reply", icon: MessageCircle },
  { id: "keyword", label: "Keyword Match", icon: Search },
  { id: "first_dm", label: "First DM", icon: Send },
  { id: "tag", label: "User Tag", icon: Users },
  { id: "scheduled", label: "Scheduled", icon: Clock },
];

export const DMAutomation = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewRule, setShowNewRule] = useState(false);

  const handleCreateRule = () => {
    toast({
      title: "DM Rule Created",
      description: "Your new DM automation rule has been created successfully.",
    });
    setShowNewRule(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search DM rules..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-secondary/50 border border-border/50 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <button 
          onClick={() => setShowNewRule(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
        >
          <Plus className="w-4 h-4" />
          New DM Rule
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Sent", value: "8,830", icon: Send, color: "text-violet-400" },
          { label: "Avg Open Rate", value: "88%", icon: MessageCircle, color: "text-emerald-400" },
          { label: "Reply Rate", value: "42%", icon: Users, color: "text-pink-400" },
          { label: "Active Rules", value: "5", icon: Zap, color: "text-amber-400" },
        ].map((stat) => (
          <div key={stat.label} className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <stat.icon className={cn("w-4 h-4", stat.color)} />
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* New Rule Modal */}
      {showNewRule && (
        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold font-display text-foreground">Create DM Automation</h3>
            <button 
              onClick={() => setShowNewRule(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Rule Name</label>
                <input
                  type="text"
                  placeholder="e.g., Welcome Message"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Trigger</label>
                <div className="grid grid-cols-2 gap-2">
                  {triggerOptions.map((trigger) => (
                    <button
                      key={trigger.id}
                      className="flex items-center gap-2 p-3 bg-secondary/50 border border-border/50 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all text-left"
                    >
                      <trigger.icon className="w-4 h-4" />
                      {trigger.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Delay</label>
                <select className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>Instant</option>
                  <option>5 minutes</option>
                  <option>15 minutes</option>
                  <option>1 hour</option>
                  <option>24 hours</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  placeholder="Type your automated DM..."
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  Variables: {"{username}"}, {"{first_name}"}, {"{follower_count}"}
                </p>
              </div>

              {/* Message Preview */}
              <div className="p-4 bg-gradient-to-br from-violet-500/10 to-purple-600/10 border border-violet-500/20 rounded-xl">
                <p className="text-xs text-violet-400 mb-2">Preview</p>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex-shrink-0" />
                  <div className="bg-secondary/50 rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                    <p className="text-sm text-foreground">Hey @user! 👋 Thanks for following!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/50">
            <button 
              onClick={() => setShowNewRule(false)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleCreateRule}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Zap className="w-4 h-4" />
              Create Rule
            </button>
          </div>
        </div>
      )}

      {/* DM Rules List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {dmRules.map((rule) => (
          <div
            key={rule.id}
            className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-5 hover:border-primary/30 transition-all group"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-11 h-11 rounded-xl flex items-center justify-center",
                  rule.status === "active" 
                    ? "bg-gradient-to-br from-violet-500/20 to-purple-600/20" 
                    : "bg-secondary"
                )}>
                  <rule.icon className={cn(
                    "w-5 h-5",
                    rule.status === "active" ? "text-violet-400" : "text-muted-foreground"
                  )} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">{rule.name}</h4>
                  <p className="text-xs text-muted-foreground">{rule.description}</p>
                </div>
              </div>
              
              <span className={cn(
                "flex items-center gap-1 text-xs px-2 py-0.5 rounded-full flex-shrink-0",
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
            
            {/* Trigger & Delay */}
            <div className="flex items-center gap-4 mb-4 text-xs">
              <span className="px-2 py-1 bg-secondary rounded-lg text-muted-foreground">
                {rule.trigger}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock className="w-3 h-3" />
                {rule.delay}
              </span>
            </div>
            
            {/* Message Preview */}
            <div className="p-3 bg-secondary/50 rounded-lg mb-4">
              <p className="text-sm text-foreground line-clamp-2">{rule.message}</p>
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <div className="flex items-center gap-6 text-xs">
                <div>
                  <p className="text-muted-foreground">Sent</p>
                  <p className="font-semibold text-foreground">{rule.sent.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Open Rate</p>
                  <p className="font-semibold text-emerald-400">{rule.openRate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Reply Rate</p>
                  <p className="font-semibold text-violet-400">{rule.replyRate}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Edit3 className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Copy className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4 text-rose-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
