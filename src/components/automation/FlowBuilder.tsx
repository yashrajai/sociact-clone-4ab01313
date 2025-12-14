import { useState } from "react";
import { 
  GitBranch, 
  Plus, 
  Play,
  Pause,
  UserPlus,
  MessageCircle,
  Clock,
  Send,
  Filter,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Settings,
  Trash2,
  Copy
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const flows = [
  {
    id: 1,
    name: "New Follower Funnel",
    description: "Convert new followers into engaged community members",
    status: "active",
    steps: 5,
    conversions: "23%",
    triggered: 2156,
    nodes: [
      { type: "trigger", label: "New Follower", icon: UserPlus },
      { type: "action", label: "Welcome DM", icon: Send },
      { type: "delay", label: "Wait 24h", icon: Clock },
      { type: "condition", label: "Replied?", icon: Filter },
      { type: "action", label: "Follow-up", icon: MessageCircle },
    ]
  },
  {
    id: 2,
    name: "Lead Qualification",
    description: "Automatically qualify and nurture leads",
    status: "active",
    steps: 7,
    conversions: "18%",
    triggered: 1432,
    nodes: [
      { type: "trigger", label: "DM Received", icon: MessageCircle },
      { type: "condition", label: "Contains keywords?", icon: Filter },
      { type: "action", label: "Send Info", icon: Send },
      { type: "delay", label: "Wait 2h", icon: Clock },
      { type: "action", label: "Ask Question", icon: MessageCircle },
    ]
  },
  {
    id: 3,
    name: "Engagement Booster",
    description: "Increase engagement on high-performing posts",
    status: "paused",
    steps: 4,
    conversions: "45%",
    triggered: 876,
    nodes: [
      { type: "trigger", label: "Comment", icon: MessageCircle },
      { type: "action", label: "Like Comment", icon: Zap },
      { type: "action", label: "Reply", icon: Send },
      { type: "condition", label: "Has @ mention?", icon: Filter },
    ]
  },
];

const nodeTypes = [
  { type: "trigger", label: "Trigger", icon: Zap, color: "from-amber-500 to-orange-500", description: "Start the flow" },
  { type: "action", label: "Action", icon: Send, color: "from-violet-500 to-purple-500", description: "Send message/action" },
  { type: "delay", label: "Delay", icon: Clock, color: "from-blue-500 to-cyan-500", description: "Wait before next step" },
  { type: "condition", label: "Condition", icon: Filter, color: "from-pink-500 to-rose-500", description: "Branch based on logic" },
];

export const FlowBuilder = () => {
  const { toast } = useToast();
  const [selectedFlow, setSelectedFlow] = useState<number | null>(null);
  const [showNewFlow, setShowNewFlow] = useState(false);

  const handleCreateFlow = () => {
    toast({
      title: "Flow Created",
      description: "Your new automation flow has been created.",
    });
    setShowNewFlow(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold font-display text-foreground">Automation Flows</h3>
          <p className="text-sm text-muted-foreground">Build complex multi-step automation sequences</p>
        </div>
        <button 
          onClick={() => setShowNewFlow(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
        >
          <Plus className="w-4 h-4" />
          Create Flow
        </button>
      </div>

      {/* Node Types */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {nodeTypes.map((node) => (
          <div
            key={node.type}
            className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:border-primary/30 transition-all cursor-pointer"
          >
            <div className={cn(
              "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3",
              node.color
            )}>
              <node.icon className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm font-medium text-foreground">{node.label}</p>
            <p className="text-xs text-muted-foreground">{node.description}</p>
          </div>
        ))}
      </div>

      {/* Create New Flow Modal */}
      {showNewFlow && (
        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold font-display text-foreground">Create New Flow</h3>
            <button 
              onClick={() => setShowNewFlow(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Flow Name</label>
              <input
                type="text"
                placeholder="e.g., Customer Onboarding"
                className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Description</label>
              <input
                type="text"
                placeholder="Brief description of this flow"
                className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          {/* Visual Flow Builder Preview */}
          <div className="bg-secondary/50 border border-border/50 rounded-xl p-6 min-h-[200px]">
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/25">
                  <UserPlus className="w-7 h-7 text-white" />
                </div>
                <p className="text-xs text-foreground mt-2">New Follower</p>
                <p className="text-xs text-muted-foreground">Trigger</p>
              </div>
              
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-lg shadow-violet-500/25">
                  <Send className="w-7 h-7 text-white" />
                </div>
                <p className="text-xs text-foreground mt-2">Welcome DM</p>
                <p className="text-xs text-muted-foreground">Action</p>
              </div>
              
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
              
              <button className="w-16 h-16 rounded-2xl border-2 border-dashed border-border flex items-center justify-center hover:border-primary/50 transition-colors">
                <Plus className="w-6 h-6 text-muted-foreground" />
              </button>
            </div>
            
            <p className="text-center text-xs text-muted-foreground mt-6">
              Drag and drop nodes to build your automation flow
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <button className="flex items-center gap-2 text-sm text-primary hover:underline">
              <Sparkles className="w-4 h-4" />
              Generate with AI
            </button>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowNewFlow(false)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleCreateFlow}
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <GitBranch className="w-4 h-4" />
                Create Flow
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Existing Flows */}
      <div className="space-y-4">
        {flows.map((flow) => (
          <div
            key={flow.id}
            className={cn(
              "bg-secondary/30 backdrop-blur-sm border rounded-2xl p-6 transition-all",
              selectedFlow === flow.id ? "border-primary/50" : "border-border/50 hover:border-primary/30"
            )}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center">
                  <GitBranch className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">{flow.name}</h4>
                  <p className="text-sm text-muted-foreground">{flow.description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className={cn(
                  "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full",
                  flow.status === "active" 
                    ? "bg-emerald-500/10 text-emerald-400" 
                    : "bg-amber-500/10 text-amber-400"
                )}>
                  {flow.status === "active" ? (
                    <Play className="w-3 h-3" />
                  ) : (
                    <Pause className="w-3 h-3" />
                  )}
                  {flow.status === "active" ? "Active" : "Paused"}
                </span>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Settings className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Flow Visualization */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4">
              {flow.nodes.map((node, index) => (
                <div key={index} className="flex items-center gap-2 flex-shrink-0">
                  <div className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl border",
                    node.type === "trigger" && "bg-amber-500/10 border-amber-500/30",
                    node.type === "action" && "bg-violet-500/10 border-violet-500/30",
                    node.type === "delay" && "bg-blue-500/10 border-blue-500/30",
                    node.type === "condition" && "bg-pink-500/10 border-pink-500/30"
                  )}>
                    <node.icon className={cn(
                      "w-4 h-4",
                      node.type === "trigger" && "text-amber-400",
                      node.type === "action" && "text-violet-400",
                      node.type === "delay" && "text-blue-400",
                      node.type === "condition" && "text-pink-400"
                    )} />
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">{node.label}</span>
                  </div>
                  {index < flow.nodes.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="text-muted-foreground">Steps:</span>
                  <span className="ml-2 font-semibold text-foreground">{flow.steps}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Triggered:</span>
                  <span className="ml-2 font-semibold text-foreground">{flow.triggered.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Conversion:</span>
                  <span className="ml-2 font-semibold text-emerald-400">{flow.conversions}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Copy className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4 text-rose-400" />
                </button>
                <button 
                  onClick={() => setSelectedFlow(selectedFlow === flow.id ? null : flow.id)}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  Edit Flow
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
