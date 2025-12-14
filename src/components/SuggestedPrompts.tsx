import { Lightbulb, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const prompts = [
  "Create a cyberpunk cityscape at sunset with neon lights",
  "Generate a professional LinkedIn headshot avatar",
  "Design a gaming YouTube thumbnail with bold text",
  "Make a 15-second product showcase video",
  "Create an anime-style character portrait",
  "Design a minimalist podcast cover art",
];

interface SuggestedPromptsProps {
  onPromptClick?: (prompt: string) => void;
}

export const SuggestedPrompts = ({ onPromptClick }: SuggestedPromptsProps) => {
  const { toast } = useToast();

  const handleClick = (prompt: string) => {
    if (onPromptClick) {
      onPromptClick(prompt);
    }
    toast({
      title: "Prompt Selected",
      description: "Try this prompt in the input above!",
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Lightbulb className="w-4 h-4 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground font-display">Try These Prompts</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => handleClick(prompt)}
            className="group flex items-center justify-between gap-3 p-4 rounded-xl bg-card hover:bg-secondary border border-border/50 hover:border-primary/30 text-left transition-all duration-200"
          >
            <span className="text-sm text-muted-foreground group-hover:text-foreground/90 line-clamp-2 transition-colors leading-relaxed">
              {prompt}
            </span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
          </button>
        ))}
      </div>
    </div>
  );
};
