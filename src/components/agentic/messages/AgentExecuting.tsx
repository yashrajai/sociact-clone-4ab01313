import { Message } from "../types";
import { Brain, CheckCircle2, Circle, Loader2 } from "lucide-react";
import { IntentBadge } from "../IntentBadge";
import { cn } from "@/lib/utils";

interface AgentExecutingProps {
  message: Message;
}

export const AgentExecuting = ({ message }: AgentExecutingProps) => {
  const steps = message.execution?.steps || [];
  const currentStep = message.execution?.currentStep || 0;

  return (
    <div className="flex items-start gap-3 animate-fade-in">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 border border-accent/40 flex items-center justify-center flex-shrink-0">
        <Brain className="w-4 h-4 text-accent animate-pulse" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-foreground">Sociact AI</span>
          {message.intent && <IntentBadge intent={message.intent} />}
          <span className="text-xs text-muted-foreground bg-primary/20 text-primary px-2 py-0.5 rounded-full flex items-center gap-1">
            <Loader2 className="w-3 h-3 animate-spin" />
            Executing
          </span>
        </div>
        
        <div className="bg-secondary/40 backdrop-blur-sm border border-border/50 rounded-2xl rounded-tl-sm px-4 py-4 max-w-[90%]">
          <p className="text-foreground mb-4">{message.content}</p>
          
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg transition-all duration-300",
                  i < currentStep && "bg-primary/10 border border-primary/20",
                  i === currentStep && "bg-primary/20 border border-primary/40",
                  i > currentStep && "bg-background/30 border border-border/30 opacity-50"
                )}
              >
                {i < currentStep ? (
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                ) : i === currentStep ? (
                  <Loader2 className="w-5 h-5 text-primary animate-spin flex-shrink-0" />
                ) : (
                  <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
                <span
                  className={cn(
                    "text-sm",
                    i <= currentStep ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-1 bg-background/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
