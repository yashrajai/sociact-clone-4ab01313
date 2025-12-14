import { Message } from "../types";
import { Brain, Check, Edit2, Sparkles } from "lucide-react";
import { IntentBadge } from "../IntentBadge";

interface AgentPreviewProps {
  message: Message;
  onConfirm: () => void;
}

export const AgentPreview = ({ message, onConfirm }: AgentPreviewProps) => {
  return (
    <div className="flex items-start gap-3 animate-fade-in">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 border border-accent/40 flex items-center justify-center flex-shrink-0">
        <Brain className="w-4 h-4 text-accent" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-foreground">Sociact AI</span>
          {message.intent && <IntentBadge intent={message.intent} />}
          <span className="text-xs text-muted-foreground bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full">
            Ready to Execute
          </span>
        </div>
        
        <div className="bg-secondary/40 backdrop-blur-sm border border-border/50 rounded-2xl rounded-tl-sm px-4 py-4 max-w-[90%]">
          <p className="text-foreground mb-4">{message.content}</p>
          
          {message.preview && (
            <div className="bg-background/50 rounded-xl border border-border/50 p-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {message.preview.summary}
                </span>
              </div>
              <ul className="space-y-2">
                {message.preview.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-3 h-3 text-primary" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={onConfirm}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              <Check className="w-4 h-4" />
              Execute
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
