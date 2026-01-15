import { ArrowRight, Wand2, Film, LayoutTemplate, Sparkles, Paperclip, MessageSquare, Image, Palette, Camera, Mountain, User, ShoppingBag, Gamepad2, Play, Music, Megaphone, BookOpen, MoreHorizontal, Check, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type FlowStep = "idle" | "style" | "subject" | "generating" | "complete";
type ActiveFlow = "image" | "video" | "thumbnail" | null;

const quickActions = [
  { id: "image", icon: <Wand2 className="w-4 h-4" />, label: "Create Image", prompt: "Generate a stunning image of " },
  { id: "video", icon: <Film className="w-4 h-4" />, label: "Make Video", prompt: "Create a short video about " },
  { id: "thumbnail", icon: <LayoutTemplate className="w-4 h-4" />, label: "Design Thumbnail", prompt: "Design a YouTube thumbnail for " },
  { id: "avatar", icon: <Sparkles className="w-4 h-4" />, label: "AI Avatar", prompt: "Create an AI avatar that " },
  { id: "automation", icon: <MessageSquare className="w-4 h-4" />, label: "Social Automation", prompt: "Set up an automation for my social media" },
];

const imageStyleOptions = [
  { label: "Photorealistic", icon: Camera, color: "from-blue-500 to-cyan-500" },
  { label: "Digital Art", icon: Palette, color: "from-purple-500 to-pink-500" },
  { label: "3D Render", icon: Gamepad2, color: "from-orange-500 to-red-500" },
  { label: "Illustration", icon: BookOpen, color: "from-emerald-500 to-teal-500" },
  { label: "Something else", icon: MoreHorizontal, color: "from-gray-500 to-slate-600", isCustom: true },
];

const imageSubjectOptions = [
  { label: "Nature & Landscapes", icon: Mountain, color: "from-green-500 to-emerald-500" },
  { label: "People & Portraits", icon: User, color: "from-rose-500 to-pink-500" },
  { label: "Products", icon: ShoppingBag, color: "from-amber-500 to-orange-500" },
  { label: "Abstract", icon: Sparkles, color: "from-violet-500 to-purple-500" },
  { label: "Something else", icon: MoreHorizontal, color: "from-gray-500 to-slate-600", isCustom: true },
];

const videoStyleOptions = [
  { label: "Cinematic", icon: Film, color: "from-amber-500 to-orange-500" },
  { label: "Animation", icon: Play, color: "from-pink-500 to-rose-500" },
  { label: "Documentary", icon: Camera, color: "from-slate-600 to-gray-700" },
  { label: "Social Media", icon: Megaphone, color: "from-blue-500 to-indigo-500" },
  { label: "Something else", icon: MoreHorizontal, color: "from-gray-500 to-slate-600", isCustom: true },
];

const videoContentOptions = [
  { label: "Product Demo", icon: ShoppingBag, color: "from-emerald-500 to-teal-500" },
  { label: "Tutorial", icon: BookOpen, color: "from-blue-500 to-cyan-500" },
  { label: "Story/Narrative", icon: Sparkles, color: "from-purple-500 to-pink-500" },
  { label: "Music Video", icon: Music, color: "from-rose-500 to-red-500" },
  { label: "Something else", icon: MoreHorizontal, color: "from-gray-500 to-slate-600", isCustom: true },
];

const thumbnailStyleOptions = [
  { label: "Bold & Vibrant", icon: Palette, color: "from-red-500 to-orange-500" },
  { label: "Clean & Minimal", icon: Image, color: "from-slate-500 to-gray-600" },
  { label: "Gaming Style", icon: Gamepad2, color: "from-purple-500 to-indigo-500" },
  { label: "Professional", icon: BookOpen, color: "from-blue-500 to-cyan-500" },
  { label: "Something else", icon: MoreHorizontal, color: "from-gray-500 to-slate-600", isCustom: true },
];

const thumbnailContentOptions = [
  { label: "Face + Text", icon: User, color: "from-pink-500 to-rose-500" },
  { label: "Product Focus", icon: ShoppingBag, color: "from-emerald-500 to-teal-500" },
  { label: "Before/After", icon: Sparkles, color: "from-amber-500 to-orange-500" },
  { label: "Listicle/Numbers", icon: BookOpen, color: "from-violet-500 to-purple-500" },
  { label: "Something else", icon: MoreHorizontal, color: "from-gray-500 to-slate-600", isCustom: true },
];

interface OptionButtonProps {
  label: string;
  icon: React.ElementType;
  color: string;
  onClick: () => void;
  delay: number;
  selected?: boolean;
}

const OptionButton = ({ label, icon: Icon, color, onClick, delay, selected }: OptionButtonProps) => (
  <button
    onClick={onClick}
    className={`
      group relative overflow-hidden rounded-xl p-3 
      bg-secondary/50 border border-border
      hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10
      transition-all duration-300 ease-out
      animate-fade-in
      ${selected ? 'ring-2 ring-primary border-primary' : ''}
    `}
    style={{ 
      animationDelay: `${delay}ms`,
      animationFillMode: 'backwards'
    }}
  >
    <div className={`
      absolute inset-0 bg-gradient-to-br ${color} opacity-0 
      group-hover:opacity-10 transition-opacity duration-300
    `} />
    
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </div>
    
    <div className="relative flex items-center gap-2">
      <div className={`
        p-1.5 rounded-lg bg-gradient-to-br ${color} 
        transform group-hover:scale-110 group-hover:rotate-3
        transition-transform duration-300 ease-out
      `}>
        <Icon className="h-4 w-4 text-white" />
      </div>
      <span className="font-medium text-xs group-hover:text-primary transition-colors duration-200">
        {label}
      </span>
      {selected && (
        <Check className="h-3 w-3 text-primary ml-auto animate-scale-in" />
      )}
    </div>
    
    <div className={`
      absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${color}
      transform scale-x-0 group-hover:scale-x-100
      transition-transform duration-300 origin-left
    `} />
  </button>
);

interface OptionSelectorProps {
  title: string;
  options: Array<{ label: string; icon: React.ElementType; color: string; isCustom?: boolean }>;
  onSelect: (label: string) => void;
  selectedOption?: string;
}

const OptionSelector = ({ title, options, onSelect, selectedOption }: OptionSelectorProps) => (
  <div className="animate-fade-in space-y-3">
    <p className="text-sm text-muted-foreground font-medium">{title}</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {options.map((option, index) => (
        <OptionButton
          key={option.label}
          label={option.label}
          icon={option.icon}
          color={option.color}
          onClick={() => onSelect(option.label)}
          delay={index * 80}
          selected={selectedOption === option.label}
        />
      ))}
    </div>
  </div>
);

const GeneratingIndicator = ({ type }: { type: string }) => {
  const [stage, setStage] = useState(0);
  const stages = [
    `Analyzing your ${type} preferences...`,
    "Crafting the perfect composition...",
    "Adding finishing touches...",
    "Almost ready..."
  ];

  useState(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % stages.length);
    }, 1500);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl border border-border animate-fade-in">
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-500 animate-pulse" />
        <div className="absolute inset-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-500 animate-ping opacity-20" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">Generating your {type}...</p>
        <p className="text-xs text-muted-foreground animate-fade-in" key={stage}>{stages[stage]}</p>
      </div>
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
};

export const TaskInput = () => {
  const [task, setTask] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Flow state
  const [activeFlow, setActiveFlow] = useState<ActiveFlow>(null);
  const [flowStep, setFlowStep] = useState<FlowStep>("idle");
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const handleSubmit = () => {
    if (task.trim()) {
      localStorage.setItem("sociact_prompt", task);
      navigate("/command-center/chat");
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
    if (action.id === "image" || action.id === "video" || action.id === "thumbnail") {
      setActiveFlow(action.id as ActiveFlow);
      setFlowStep("style");
      setSelectedStyle(null);
      setSelectedSubject(null);
    } else {
      setTask(action.prompt);
      toast({
        title: action.label,
        description: "Quick action selected! Complete your prompt.",
      });
    }
  };

  const handleStyleSelect = (style: string) => {
    setSelectedStyle(style);
    setTimeout(() => {
      setFlowStep("subject");
    }, 300);
  };

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    setFlowStep("generating");
    
    // Simulate generation
    setTimeout(() => {
      setFlowStep("complete");
      const flowLabels = { image: "Image", video: "Video", thumbnail: "Thumbnail" };
      toast({
        title: `${flowLabels[activeFlow!]} Generated! 🎉`,
        description: `Your ${selectedStyle} ${subject.toLowerCase()} ${activeFlow} is ready.`,
      });
      
      // Reset after showing completion
      setTimeout(() => {
        resetFlow();
      }, 2000);
    }, 3000);
  };

  const resetFlow = () => {
    setActiveFlow(null);
    setFlowStep("idle");
    setSelectedStyle(null);
    setSelectedSubject(null);
  };

  const getStyleOptions = () => {
    switch (activeFlow) {
      case "image": return imageStyleOptions;
      case "video": return videoStyleOptions;
      case "thumbnail": return thumbnailStyleOptions;
      default: return [];
    }
  };

  const getSubjectOptions = () => {
    switch (activeFlow) {
      case "image": return imageSubjectOptions;
      case "video": return videoContentOptions;
      case "thumbnail": return thumbnailContentOptions;
      default: return [];
    }
  };

  const getFlowTitle = () => {
    const titles = {
      image: { style: "Choose image style", subject: "What's the subject?" },
      video: { style: "Choose video style", subject: "What type of content?" },
      thumbnail: { style: "Choose thumbnail style", subject: "What's the focus?" },
    };
    return titles[activeFlow!]?.[flowStep as "style" | "subject"] || "";
  };

  const isInFlow = activeFlow !== null;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {/* Quick Action Chips */}
      {!isInFlow && (
        <div className="flex flex-wrap items-center justify-center gap-2 animate-fade-in">
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
      )}

      {/* Interactive Flow */}
      {isInFlow && (
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-4 space-y-4 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-purple-500">
                {activeFlow === "image" && <Wand2 className="w-4 h-4 text-white" />}
                {activeFlow === "video" && <Film className="w-4 h-4 text-white" />}
                {activeFlow === "thumbnail" && <LayoutTemplate className="w-4 h-4 text-white" />}
              </div>
              <span className="font-semibold text-foreground">
                {activeFlow === "image" && "Create Image"}
                {activeFlow === "video" && "Make Video"}
                {activeFlow === "thumbnail" && "Design Thumbnail"}
              </span>
            </div>
            <button 
              onClick={resetFlow}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center gap-2">
            <div className={cn(
              "h-1 flex-1 rounded-full transition-all duration-500",
              flowStep !== "idle" ? "bg-primary" : "bg-secondary"
            )} />
            <div className={cn(
              "h-1 flex-1 rounded-full transition-all duration-500",
              flowStep === "subject" || flowStep === "generating" || flowStep === "complete" ? "bg-primary" : "bg-secondary"
            )} />
            <div className={cn(
              "h-1 flex-1 rounded-full transition-all duration-500",
              flowStep === "generating" || flowStep === "complete" ? "bg-primary" : "bg-secondary"
            )} />
          </div>

          {/* Style Selection */}
          {flowStep === "style" && (
            <OptionSelector
              title={getFlowTitle()}
              options={getStyleOptions()}
              onSelect={handleStyleSelect}
              selectedOption={selectedStyle || undefined}
            />
          )}

          {/* Subject Selection */}
          {flowStep === "subject" && (
            <div className="space-y-3 animate-fade-in">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="px-2 py-1 rounded-md bg-primary/10 text-primary font-medium">{selectedStyle}</span>
                <span>selected</span>
              </div>
              <OptionSelector
                title={getFlowTitle()}
                options={getSubjectOptions()}
                onSelect={handleSubjectSelect}
                selectedOption={selectedSubject || undefined}
              />
            </div>
          )}

          {/* Generating State */}
          {flowStep === "generating" && (
            <GeneratingIndicator type={activeFlow!} />
          )}

          {/* Complete State */}
          {flowStep === "complete" && (
            <div className="flex items-center gap-3 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/30 animate-fade-in">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Generation Complete! 🎉</p>
                <p className="text-xs text-muted-foreground">{selectedStyle} • {selectedSubject}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Input Box */}
      {!isInFlow && (
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
      )}
    </div>
  );
};
