import { ArrowRight, Wand2, Film, LayoutTemplate, Sparkles, Paperclip } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const quickActions = [
  { id: "image", icon: <Wand2 className="w-4 h-4" />, label: "Create Image", prompt: "Generate a stunning image of " },
  { id: "video", icon: <Film className="w-4 h-4" />, label: "Make Video", prompt: "Create a short video about " },
  { id: "thumbnail", icon: <LayoutTemplate className="w-4 h-4" />, label: "Design Thumbnail", prompt: "Design a YouTube thumbnail for " },
  { id: "avatar", icon: <Sparkles className="w-4 h-4" />, label: "AI Avatar", prompt: "Create an AI avatar that " },
];

export const TaskInput = () => {
  const [task, setTask] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (task.trim()) {
      toast({
        title: "Task Submitted",
        description: `Processing: "${task.slice(0, 50)}${task.length > 50 ? '...' : ''}"`,
      });
      setTask("");
    } else {
      toast({
        title: "Empty Task",
        description: "Please enter a task to work on.",
        variant: "destructive",
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleQuickAction = (action: typeof quickActions[0]) => {
    setTask(action.prompt);
    toast({
      title: action.label,
      description: "Quick action selected! Complete your prompt.",
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {/* Quick Action Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {quickActions.map((action) => (
          <button
            key={action.id}
            onClick={() => handleQuickAction(action)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/50 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
          >
            {action.icon}
            {action.label}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <div 
        className={cn(
          "relative bg-input rounded-xl transition-all duration-300",
          isFocused ? "input-glow ring-2 ring-primary/30" : "ring-1 ring-border/50"
        )}
      >
        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Give Sociact a task to work on..."
          className="w-full min-h-[120px] bg-transparent text-foreground placeholder:text-muted-foreground p-4 pr-24 resize-none focus:outline-none rounded-xl"
        />
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <button 
            className="w-10 h-10 text-muted-foreground hover:text-foreground rounded-full flex items-center justify-center transition-all hover:bg-secondary"
          >
            <Paperclip className="w-5 h-5" />
          </button>
          <button 
            onClick={handleSubmit}
            className="w-10 h-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full flex items-center justify-center transition-all active:scale-90 shadow-lg shadow-primary/25"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
