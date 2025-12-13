import { ArrowRight } from "lucide-react";
import { useState } from "react";

export const TaskInput = () => {
  const [task, setTask] = useState("");

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative bg-input rounded-xl input-glow">
        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Give Sociact a task to work on..."
          className="w-full min-h-[120px] bg-transparent text-foreground placeholder:text-muted-foreground p-4 pr-16 resize-none focus:outline-none rounded-xl"
        />
        <button className="absolute bottom-4 right-4 w-10 h-10 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors">
          <ArrowRight className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </div>
  );
};
