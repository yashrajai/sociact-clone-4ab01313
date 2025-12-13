import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const TaskInput = () => {
  const [task, setTask] = useState("");
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

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative bg-input rounded-xl input-glow">
        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Give Sociact a task to work on..."
          className="w-full min-h-[120px] bg-transparent text-foreground placeholder:text-muted-foreground p-4 pr-16 resize-none focus:outline-none rounded-xl"
        />
        <button 
          onClick={handleSubmit}
          className="absolute bottom-4 right-4 w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all active:scale-90"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
