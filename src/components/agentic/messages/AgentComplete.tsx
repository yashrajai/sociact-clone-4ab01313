import { Message } from "../types";
import { Brain, CheckCircle2, ExternalLink, RefreshCw, Edit2, Sparkles } from "lucide-react";
import { IntentBadge } from "../IntentBadge";
import { useToast } from "@/hooks/use-toast";

interface AgentCompleteProps {
  message: Message;
}

export const AgentComplete = ({ message }: AgentCompleteProps) => {
  const { toast } = useToast();

  const handleAction = (action: string) => {
    toast({
      title: action,
      description: `Performing: ${action}`,
    });
  };

  return (
    <div className="flex items-start gap-3 animate-fade-in">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 border border-primary/50 flex items-center justify-center flex-shrink-0">
        <Brain className="w-4 h-4 text-primary" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-foreground">Sociact AI</span>
          {message.intent && <IntentBadge intent={message.intent} />}
          <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            Complete
          </span>
        </div>
        
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/30 rounded-2xl rounded-tl-sm px-4 py-4 max-w-[90%]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-foreground font-medium">{message.content}</p>
              <p className="text-sm text-muted-foreground">
                Task completed successfully
              </p>
            </div>
          </div>

          {/* Mock output preview */}
          {message.intent === "image-generation" && (
            <div className="mb-4 p-4 rounded-xl bg-background/50 border border-border/50">
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Generated Image Preview</span>
              </div>
            </div>
          )}

          {message.intent === "automation-setup" && (
            <div className="mb-4 p-4 rounded-xl bg-background/50 border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center">
                  <span className="text-lg">📱</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Instagram Automation Active</p>
                  <p className="text-xs text-muted-foreground">Monitoring 3 trigger words • Auto-reply enabled</p>
                </div>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleAction("View Result")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Result
            </button>
            <button
              onClick={() => handleAction("Edit")}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
            <button
              onClick={() => handleAction("Create Another")}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Create Another
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
