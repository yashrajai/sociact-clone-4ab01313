import { Message } from "../types";
import { Brain } from "lucide-react";
import { IntentBadge } from "../IntentBadge";

interface AgentTextProps {
  message: Message;
}

export const AgentText = ({ message }: AgentTextProps) => {
  return (
    <div className="flex items-start gap-3 animate-fade-in">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 border border-accent/40 flex items-center justify-center flex-shrink-0">
        <Brain className="w-4 h-4 text-accent" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-foreground">Sociact AI</span>
          {message.intent && <IntentBadge intent={message.intent} />}
        </div>
        <div className="bg-secondary/40 backdrop-blur-sm border border-border/50 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
          <p className="text-foreground">{message.content}</p>
        </div>
      </div>
    </div>
  );
};
