import { useState } from "react";
import { Message } from "../types";
import { Brain, Camera, Palette, Box, Sparkles, MessageCircle, Send, Image, Zap, Square, RectangleHorizontal, RectangleVertical, Monitor, Check, Wand2 } from "lucide-react";
import { IntentBadge } from "../IntentBadge";
import { cn } from "@/lib/utils";

interface AgentFollowUpProps {
  message: Message;
  onSelect: (optionId: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  camera: <Camera className="w-5 h-5" />,
  palette: <Palette className="w-5 h-5" />,
  box: <Box className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
  "message-circle": <MessageCircle className="w-5 h-5" />,
  send: <Send className="w-5 h-5" />,
  image: <Image className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
  square: <Square className="w-5 h-5" />,
  "rectangle-horizontal": <RectangleHorizontal className="w-5 h-5" />,
  "rectangle-vertical": <RectangleVertical className="w-5 h-5" />,
  monitor: <Monitor className="w-5 h-5" />,
  user: <Camera className="w-5 h-5" />,
  package: <Box className="w-5 h-5" />,
  mic: <MessageCircle className="w-5 h-5" />,
  film: <Image className="w-5 h-5" />,
};

export const AgentFollowUp = ({ message, onSelect }: AgentFollowUpProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(message.followUp?.selectedOption || null);

  const handleOptionClick = (optionId: string) => {
    setSelectedOption(optionId);
    onSelect(optionId);
  };

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleSubmitTags = () => {
    if (tags.length > 0) {
      onSelect(tags.join(","));
    }
  };

  const handleSubmitText = () => {
    if (textInput.trim()) {
      onSelect(textInput);
    }
  };

  return (
    <div className="flex items-start gap-3 animate-fade-in">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 border border-accent/40 flex items-center justify-center flex-shrink-0">
        <Brain className="w-4 h-4 text-accent" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-foreground">Sociact AI</span>
          {message.intent && <IntentBadge intent={message.intent} />}
          {message.followUp && (
            <span className="text-xs text-muted-foreground bg-secondary/60 px-2 py-0.5 rounded-full">
              Step {message.followUp.step} of {message.followUp.totalSteps}
            </span>
          )}
        </div>
        
        <div className="bg-secondary/40 backdrop-blur-sm border border-border/50 rounded-2xl rounded-tl-sm px-4 py-4 max-w-[90%]">
          <p className="text-foreground mb-4">{message.content}</p>
          
          {message.followUp?.prompt && (
            <p className="text-sm text-muted-foreground mb-3">{message.followUp.prompt}</p>
          )}

          {/* Option Cards */}
          {message.followUp?.options && !selectedOption && (
            <div className="grid grid-cols-2 gap-2">
              {message.followUp.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                  className={cn(
                    "group flex items-center gap-3 p-3 rounded-xl",
                    "bg-background/50 border border-border/50",
                    "hover:border-primary/50 hover:bg-primary/5",
                    "transition-all duration-200"
                  )}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    {option.icon && iconMap[option.icon]}
                  </div>
                  <span className="text-sm font-medium text-foreground">{option.label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Selected Option Display */}
          {selectedOption && message.followUp?.options && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-primary/10 border border-primary/30">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {message.followUp.options.find(o => o.id === selectedOption)?.label}
              </span>
            </div>
          )}

          {/* Tag Input */}
          {message.followUp?.inputType === "tags" && !selectedOption && (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium flex items-center gap-1"
                  >
                    {tag}
                    <button
                      onClick={() => setTags(tags.filter((_, idx) => idx !== i))}
                      className="hover:text-destructive"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                placeholder={message.followUp.placeholder}
                className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
              />
              <button
                onClick={handleSubmitTags}
                disabled={tags.length === 0}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
              >
                Continue
              </button>
            </div>
          )}

          {/* Textarea Input */}
          {message.followUp?.inputType === "textarea" && !selectedOption && (
            <div className="space-y-3">
              <textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder={message.followUp.placeholder}
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 resize-none h-24"
              />
              <div className="flex items-center gap-2">
                {message.followUp.aiSuggest && (
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 transition-colors">
                    <Wand2 className="w-4 h-4" />
                    AI Suggest
                  </button>
                )}
                <button
                  onClick={handleSubmitText}
                  disabled={!textInput.trim()}
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
