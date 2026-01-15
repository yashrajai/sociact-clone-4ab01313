import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { PromoBanner } from "@/components/PromoBanner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Pencil, Plus, BarChart3, MessageCircle, AtSign, Hash, Sparkles, Briefcase, HeartHandshake, Calendar, ShoppingCart, Check, MoreHorizontal, Wand2, Film, LayoutTemplate, Camera, Palette, Gamepad2, BookOpen, Mountain, User, ShoppingBag, Play, Music, Megaphone, Image, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "agent";
  content: string;
  type?: "text" | "summary" | "cta";
  summaryData?: {
    trigger: string;
    tone: string;
    goal: string;
    business: string;
  };
}

type FlowType = "automation" | "image" | "video" | "thumbnail" | null;

const ChatBubble = ({ variant, text }: { variant: "user" | "agent"; text: string }) => (
  <div className={`flex ${variant === "user" ? "justify-end" : "justify-start"} mb-4`}>
    <div
      className={`max-w-[70%] px-4 py-3 rounded-2xl whitespace-pre-line ${
        variant === "user"
          ? "bg-primary text-primary-foreground rounded-br-md"
          : "bg-secondary text-foreground rounded-bl-md"
      }`}
    >
      {text}
    </div>
  </div>
);

const SummaryCard = ({ data }: { data: { trigger: string; tone: string; goal: string; business: string } }) => (
  <div className="flex justify-start mb-4">
    <div className="max-w-[80%] bg-secondary text-foreground px-5 py-4 rounded-2xl rounded-bl-md">
      <p className="font-semibold mb-3">Here's a quick summary of what I've set up 👇</p>
      <div className="space-y-2 text-sm">
        <div className="flex items-start gap-2">
          <span className="text-muted-foreground">•</span>
          <span><span className="font-medium">Trigger:</span> {data.trigger}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-muted-foreground">•</span>
          <span><span className="font-medium">Tone:</span> {data.tone}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-muted-foreground">•</span>
          <span><span className="font-medium">Goal:</span> {data.goal}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-muted-foreground">•</span>
          <span><span className="font-medium">Business Type:</span> {data.business}</span>
        </div>
      </div>
    </div>
  </div>
);

const GenerationSummaryCard = ({ data }: { data: { style: string; subject: string; type: string } }) => (
  <div className="flex justify-start mb-4">
    <div className="max-w-[80%] bg-secondary text-foreground px-5 py-4 rounded-2xl rounded-bl-md">
      <p className="font-semibold mb-3">Here's what I'm generating for you 👇</p>
      <div className="space-y-2 text-sm">
        <div className="flex items-start gap-2">
          <span className="text-muted-foreground">•</span>
          <span><span className="font-medium">Type:</span> {data.type}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-muted-foreground">•</span>
          <span><span className="font-medium">Style:</span> {data.style}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-muted-foreground">•</span>
          <span><span className="font-medium">Subject:</span> {data.subject}</span>
        </div>
      </div>
    </div>
  </div>
);

const CTASection = ({ onNavigate }: { onNavigate: (path: string) => void }) => (
  <div className="flex justify-start mb-4">
    <div className="max-w-[80%] space-y-4">
      <div className="bg-secondary text-foreground px-5 py-4 rounded-2xl rounded-bl-md">
        <p className="mb-4">You can now manage or edit this automation anytime.</p>
        <Button 
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
          onClick={() => onNavigate("comment-automation")}
        >
          <Eye className="h-4 w-4 mr-2" />
          View in Automation Dashboard
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Button 
          variant="outline" 
          size="sm"
          className="text-xs"
          onClick={() => onNavigate("comment-automation")}
        >
          <Pencil className="h-3 w-3 mr-1" />
          Edit automation
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="text-xs"
          onClick={() => {}}
        >
          <Plus className="h-3 w-3 mr-1" />
          Create another automation
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="text-xs"
          onClick={() => onNavigate("analytics")}
        >
          <BarChart3 className="h-3 w-3 mr-1" />
          View analytics
        </Button>
      </div>
    </div>
  </div>
);

const GenerationCTASection = ({ type, onReset }: { type: string; onReset: () => void }) => (
  <div className="flex justify-start mb-4">
    <div className="max-w-[80%] space-y-4">
      <div className="bg-emerald-500/10 border border-emerald-500/30 text-foreground px-5 py-4 rounded-2xl rounded-bl-md">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
            <Check className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold">Your {type} is ready! 🎉</p>
            <p className="text-sm text-muted-foreground">Generation complete</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Button 
          variant="outline" 
          size="sm"
          className="text-xs"
          onClick={onReset}
        >
          <Plus className="h-3 w-3 mr-1" />
          Create another {type}
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="text-xs"
        >
          <Eye className="h-3 w-3 mr-1" />
          View in gallery
        </Button>
      </div>
    </div>
  </div>
);

const AutomationDetailsSection = ({ 
  data, 
  onEdit 
}: { 
  data: { trigger: string; tone: string; goal: string; business: string };
  onEdit: (field: string, value: string) => void;
}) => {
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  const handleEditClick = (field: string, currentValue: string) => {
    setEditingField(field);
    setEditValue(currentValue);
  };

  const handleSave = () => {
    if (editingField) {
      onEdit(editingField, editValue);
      setEditingField(null);
      setEditValue("");
    }
  };

  const handleCancel = () => {
    setEditingField(null);
    setEditValue("");
  };

  const fields = [
    { key: "trigger", label: "Trigger", icon: "🎯" },
    { key: "tone", label: "Tone", icon: "🎨" },
    { key: "goal", label: "Goal", icon: "🎪" },
    { key: "business", label: "Business Type", icon: "🏢" },
  ];

  return (
    <div className="mt-8 border border-border rounded-xl bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <span className="text-xl">⚙️</span>
          Your Automation
        </h2>
        <span className="text-xs bg-emerald-500/20 text-emerald-500 px-2 py-1 rounded-full font-medium">
          Active
        </span>
      </div>
      
      <div className="grid gap-3">
        {fields.map(({ key, label, icon }) => (
          <div 
            key={key}
            className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
          >
            <div className="flex items-center gap-3 flex-1">
              <span className="text-lg">{icon}</span>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                {editingField === key ? (
                  <Input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="h-8 text-sm"
                    autoFocus
                  />
                ) : (
                  <p className="text-sm font-medium">{data[key as keyof typeof data] || "Not set"}</p>
                )}
              </div>
            </div>
            {editingField === key ? (
              <div className="flex gap-1 ml-2">
                <Button size="sm" variant="ghost" className="h-7 px-2 text-xs" onClick={handleSave}>
                  Save
                </Button>
                <Button size="sm" variant="ghost" className="h-7 px-2 text-xs text-muted-foreground" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            ) : (
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-7 w-7 p-0"
                onClick={() => handleEditClick(key, data[key as keyof typeof data])}
              >
                <Pencil className="h-3.5 w-3.5 text-muted-foreground" />
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Option button configurations for automation
const triggerOptions = [
  { label: "Instagram DM", icon: MessageCircle, color: "from-pink-500 to-rose-500" },
  { label: "Post Comments", icon: AtSign, color: "from-purple-500 to-indigo-500" },
  { label: "Keyword Mention", icon: Hash, color: "from-blue-500 to-cyan-500" },
  { label: "Story Reply", icon: Sparkles, color: "from-amber-500 to-orange-500" },
  { label: "Something else", icon: MoreHorizontal, color: "from-gray-500 to-slate-600", isCustom: true },
];

const toneOptions = [
  { label: "Professional", icon: Briefcase, color: "from-slate-600 to-gray-700" },
  { label: "Friendly", icon: HeartHandshake, color: "from-emerald-500 to-teal-500" },
  { label: "Casual", icon: Sparkles, color: "from-violet-500 to-purple-500" },
  { label: "Sales-focused", icon: ShoppingCart, color: "from-orange-500 to-red-500" },
  { label: "Something else", icon: MoreHorizontal, color: "from-gray-500 to-slate-600", isCustom: true },
];

const goalOptions = [
  { label: "Lead Capture", icon: Sparkles, color: "from-blue-500 to-indigo-500" },
  { label: "Customer Support", icon: HeartHandshake, color: "from-green-500 to-emerald-500" },
  { label: "Bookings", icon: Calendar, color: "from-purple-500 to-pink-500" },
  { label: "Sales", icon: ShoppingCart, color: "from-amber-500 to-orange-500" },
  { label: "Something else", icon: MoreHorizontal, color: "from-gray-500 to-slate-600", isCustom: true },
];

const businessOptions = [
  { label: "E-commerce", icon: ShoppingCart, color: "from-blue-500 to-cyan-500" },
  { label: "Real Estate", icon: Briefcase, color: "from-emerald-500 to-teal-500" },
  { label: "Agency", icon: Sparkles, color: "from-purple-500 to-indigo-500" },
  { label: "Service Business", icon: HeartHandshake, color: "from-rose-500 to-pink-500" },
  { label: "Something else", icon: MoreHorizontal, color: "from-gray-500 to-slate-600", isCustom: true },
];

// Option button configurations for image generation
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

// Option button configurations for video generation
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

// Option button configurations for thumbnail generation
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
      group relative overflow-hidden rounded-xl p-4 
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
    {/* Gradient overlay on hover */}
    <div className={`
      absolute inset-0 bg-gradient-to-br ${color} opacity-0 
      group-hover:opacity-10 transition-opacity duration-300
    `} />
    
    {/* Shine effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </div>
    
    <div className="relative flex items-center gap-3">
      <div className={`
        p-2 rounded-lg bg-gradient-to-br ${color} 
        transform group-hover:scale-110 group-hover:rotate-3
        transition-transform duration-300 ease-out
      `}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <span className="font-medium text-sm group-hover:text-primary transition-colors duration-200">
        {label}
      </span>
      {selected && (
        <Check className="h-4 w-4 text-primary ml-auto animate-scale-in" />
      )}
    </div>
    
    {/* Bottom highlight */}
    <div className={`
      absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${color}
      transform scale-x-0 group-hover:scale-x-100
      transition-transform duration-300 origin-left
    `} />
  </button>
);

interface OptionSelectorProps {
  options: Array<{ label: string; icon: React.ElementType; color: string }>;
  onSelect: (label: string) => void;
  selectedOption?: string;
}

const OptionSelector = ({ options, onSelect, selectedOption }: OptionSelectorProps) => (
  <div className="flex justify-start mb-4 animate-fade-in">
    <div className="max-w-[90%] w-full">
      <div className="grid grid-cols-2 gap-3">
        {options.map((option, index) => (
          <OptionButton
            key={option.label}
            label={option.label}
            icon={option.icon}
            color={option.color}
            onClick={() => onSelect(option.label)}
            delay={index * 100}
            selected={selectedOption === option.label}
          />
        ))}
      </div>
    </div>
  </div>
);

const thinkingStages = [
  "Understanding your request...",
  "Analyzing context...",
  "Processing information...",
  "Formulating response...",
  "Almost there...",
];

const ThinkingIndicator = ({ stage }: { stage: number }) => (
  <div className="flex justify-start mb-4">
    <div className="bg-secondary text-foreground px-4 py-3 rounded-2xl rounded-bl-md">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground text-sm font-semibold">{thinkingStages[stage] || thinkingStages[0]}</span>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  </div>
);

type ConversationStep = 
  | "initial"
  | "first_response"
  | "ask_trigger"
  | "wait_trigger"
  | "ask_tone"
  | "wait_tone"
  | "ask_goal"
  | "wait_goal"
  | "ask_business"
  | "wait_business"
  | "setting_up"
  | "show_summary"
  | "complete"
  // Generation flow steps
  | "gen_ask_style"
  | "gen_wait_style"
  | "gen_ask_subject"
  | "gen_wait_subject"
  | "gen_generating"
  | "gen_complete";

const generationThinkingStages = [
  "Analyzing your preferences...",
  "Crafting the perfect composition...",
  "Adding finishing touches...",
  "Almost ready...",
];

const GenerationThinkingIndicator = ({ stage, type }: { stage: number; type: string }) => (
  <div className="flex justify-start mb-4">
    <div className="bg-secondary text-foreground px-4 py-3 rounded-2xl rounded-bl-md">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground text-sm font-semibold">
          {generationThinkingStages[stage] || generationThinkingStages[0]}
        </span>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  </div>
);

// Flow header component for generation flows
const FlowHeader = ({ 
  flowType, 
  step, 
  onClose 
}: { 
  flowType: FlowType; 
  step: ConversationStep;
  onClose: () => void;
}) => {
  const getIcon = () => {
    switch (flowType) {
      case "image": return <Wand2 className="w-4 h-4 text-white" />;
      case "video": return <Film className="w-4 h-4 text-white" />;
      case "thumbnail": return <LayoutTemplate className="w-4 h-4 text-white" />;
      default: return null;
    }
  };

  const getTitle = () => {
    switch (flowType) {
      case "image": return "Create Image";
      case "video": return "Make Video";
      case "thumbnail": return "Design Thumbnail";
      default: return "";
    }
  };

  const getProgress = () => {
    if (step === "gen_ask_style" || step === "gen_wait_style") return 1;
    if (step === "gen_ask_subject" || step === "gen_wait_subject") return 2;
    if (step === "gen_generating" || step === "gen_complete") return 3;
    return 0;
  };

  if (!flowType || flowType === "automation") return null;

  const progress = getProgress();

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-4 mb-4 animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-purple-500">
            {getIcon()}
          </div>
          <span className="font-semibold text-foreground">{getTitle()}</span>
        </div>
        <button 
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-secondary transition-colors"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
      
      {/* Progress indicator */}
      <div className="flex items-center gap-2">
        <div className={cn(
          "h-1 flex-1 rounded-full transition-all duration-500",
          progress >= 1 ? "bg-primary" : "bg-secondary"
        )} />
        <div className={cn(
          "h-1 flex-1 rounded-full transition-all duration-500",
          progress >= 2 ? "bg-primary" : "bg-secondary"
        )} />
        <div className={cn(
          "h-1 flex-1 rounded-full transition-all duration-500",
          progress >= 3 ? "bg-primary" : "bg-secondary"
        )} />
      </div>
    </div>
  );
};

const CommandCenterChat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [thinkingStage, setThinkingStage] = useState(0);
  const [conversationStep, setConversationStep] = useState<ConversationStep>("initial");
  const [isFirstPrompt, setIsFirstPrompt] = useState(true);
  const [showSummary, setShowSummary] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const [showGenerationCTA, setShowGenerationCTA] = useState(false);
  const [showOptions, setShowOptions] = useState<"trigger" | "tone" | "goal" | "business" | "gen_style" | "gen_subject" | null>(null);
  const [collectedData, setCollectedData] = useState({
    trigger: "",
    tone: "",
    goal: "",
    business: "",
  });
  const [generationData, setGenerationData] = useState({
    style: "",
    subject: "",
    type: "",
  });
  const [activeFlowType, setActiveFlowType] = useState<FlowType>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (item: string) => {
    if (item === "overview") {
      navigate("/");
    } else {
      navigate(`/?view=${item}`);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking, thinkingStage, showSummary, showCTA, showOptions, showGenerationCTA]);

  const handleOptionSelect = (field: "trigger" | "tone" | "goal" | "business", value: string) => {
    setCollectedData(prev => ({ ...prev, [field]: value }));
    setMessages((prev) => [...prev, { role: "user", content: value, type: "text" }]);
    setShowOptions(null);
    
    setTimeout(() => {
      if (field === "trigger") {
        addAgentMessage("Got it 👍");
        setConversationStep("ask_tone");
      } else if (field === "tone") {
        addAgentMessage("Perfect, noted.");
        setConversationStep("ask_goal");
      } else if (field === "goal") {
        addAgentMessage("Understood 👍");
        setConversationStep("ask_business");
      } else if (field === "business") {
        setConversationStep("setting_up");
      }
    }, 400);
  };

  const handleGenerationOptionSelect = (field: "style" | "subject", value: string) => {
    setGenerationData(prev => ({ ...prev, [field]: value }));
    setMessages((prev) => [...prev, { role: "user", content: value, type: "text" }]);
    setShowOptions(null);
    
    setTimeout(() => {
      if (field === "style") {
        addAgentMessage("Great choice! 👍");
        setConversationStep("gen_ask_subject");
      } else if (field === "subject") {
        setConversationStep("gen_generating");
      }
    }, 400);
  };

  const addAgentMessage = (content: string) => {
    setMessages((prev) => [...prev, { role: "agent", content, type: "text" }]);
  };

  const getStyleOptions = () => {
    switch (activeFlowType) {
      case "image": return imageStyleOptions;
      case "video": return videoStyleOptions;
      case "thumbnail": return thumbnailStyleOptions;
      default: return [];
    }
  };

  const getSubjectOptions = () => {
    switch (activeFlowType) {
      case "image": return imageSubjectOptions;
      case "video": return videoContentOptions;
      case "thumbnail": return thumbnailContentOptions;
      default: return [];
    }
  };

  const getFlowTypeName = () => {
    switch (activeFlowType) {
      case "image": return "Image";
      case "video": return "Video";
      case "thumbnail": return "Thumbnail";
      default: return "";
    }
  };

  const resetGenerationFlow = () => {
    setActiveFlowType(null);
    setConversationStep("initial");
    setMessages([]);
    setGenerationData({ style: "", subject: "", type: "" });
    setShowGenerationCTA(false);
    setShowOptions(null);
    navigate("/");
  };

  const runConversationFlow = (step: ConversationStep) => {
    switch (step) {
      case "first_response":
        setTimeout(() => {
          addAgentMessage("To set this up correctly, I'll need a few details from you.");
          setTimeout(() => {
            setConversationStep("ask_trigger");
          }, 1500);
        }, 1500);
        break;

      case "ask_trigger":
        setTimeout(() => {
          addAgentMessage("Step 1 of 4\nWhen should this automation run?");
          setTimeout(() => {
            setShowOptions("trigger");
            setConversationStep("wait_trigger");
          }, 500);
        }, 1000);
        break;

      case "ask_tone":
        setTimeout(() => {
          addAgentMessage("Step 2 of 4\nWhat tone should the replies have?");
          setTimeout(() => {
            setShowOptions("tone");
            setConversationStep("wait_tone");
          }, 500);
        }, 1000);
        break;

      case "ask_goal":
        setTimeout(() => {
          addAgentMessage("Step 3 of 4\nWhat is the main goal of this automation?");
          setTimeout(() => {
            setShowOptions("goal");
            setConversationStep("wait_goal");
          }, 500);
        }, 1000);
        break;

      case "ask_business":
        setTimeout(() => {
          addAgentMessage("Step 4 of 4\nWhat type of business are you running?");
          setTimeout(() => {
            setShowOptions("business");
            setConversationStep("wait_business");
          }, 500);
        }, 1000);
        break;

      case "setting_up":
        setTimeout(() => {
          addAgentMessage("Thanks! I have everything I need to prepare this for you.");
          setTimeout(() => {
            setIsThinking(true);
            setThinkingStage(0);
            
            const stageInterval = setInterval(() => {
              setThinkingStage((prev) => {
                if (prev >= 2) {
                  clearInterval(stageInterval);
                  return prev;
                }
                return prev + 1;
              });
            }, 2000);

            setTimeout(() => {
              clearInterval(stageInterval);
              setIsThinking(false);
              setThinkingStage(0);
              addAgentMessage("Setting things up… ⏳");
              
              setTimeout(() => {
                addAgentMessage("✅ Your automation is ready!");
                setConversationStep("show_summary");
              }, 2000);
            }, 6000);
          }, 1500);
        }, 1000);
        break;

      case "show_summary":
        setTimeout(() => {
          setShowSummary(true);
          setTimeout(() => {
            setShowCTA(true);
            setConversationStep("complete");
          }, 1500);
        }, 1000);
        break;

      // Generation flow steps
      case "gen_ask_style":
        setTimeout(() => {
          const typeName = getFlowTypeName().toLowerCase();
          addAgentMessage(`Step 1 of 2\nChoose ${typeName} style`);
          setTimeout(() => {
            setShowOptions("gen_style");
            setConversationStep("gen_wait_style");
          }, 500);
        }, 1000);
        break;

      case "gen_ask_subject":
        setTimeout(() => {
          const questionText = activeFlowType === "video" 
            ? "Step 2 of 2\nWhat type of content?" 
            : activeFlowType === "thumbnail"
            ? "Step 2 of 2\nWhat's the focus?"
            : "Step 2 of 2\nWhat's the subject?";
          addAgentMessage(questionText);
          setTimeout(() => {
            setShowOptions("gen_subject");
            setConversationStep("gen_wait_subject");
          }, 500);
        }, 1000);
        break;

      case "gen_generating":
        setTimeout(() => {
          addAgentMessage("Perfect! I have everything I need. Let me generate this for you...");
          setTimeout(() => {
            setIsThinking(true);
            setThinkingStage(0);
            
            const stageInterval = setInterval(() => {
              setThinkingStage((prev) => {
                if (prev >= 3) {
                  clearInterval(stageInterval);
                  return prev;
                }
                return prev + 1;
              });
            }, 1500);

            setTimeout(() => {
              clearInterval(stageInterval);
              setIsThinking(false);
              setThinkingStage(0);
              addAgentMessage(`✅ Your ${getFlowTypeName().toLowerCase()} is ready!`);
              setConversationStep("gen_complete");
            }, 5000);
          }, 1500);
        }, 1000);
        break;

      case "gen_complete":
        setTimeout(() => {
          setShowGenerationCTA(true);
        }, 500);
        break;
    }
  };

  useEffect(() => {
    if (conversationStep === "first_response" || 
        conversationStep === "ask_trigger" || 
        conversationStep === "ask_tone" || 
        conversationStep === "ask_goal" || 
        conversationStep === "ask_business" ||
        conversationStep === "setting_up" ||
        conversationStep === "show_summary" ||
        conversationStep === "gen_ask_style" ||
        conversationStep === "gen_ask_subject" ||
        conversationStep === "gen_generating" ||
        conversationStep === "gen_complete") {
      runConversationFlow(conversationStep);
    }
  }, [conversationStep]);

  useEffect(() => {
    // Check for generation flow type first
    const flowType = localStorage.getItem("sociact_flow_type") as FlowType;
    
    if (flowType && (flowType === "image" || flowType === "video" || flowType === "thumbnail")) {
      setActiveFlowType(flowType);
      setGenerationData(prev => ({ ...prev, type: flowType }));
      
      // Start the generation flow
      const flowLabels = { image: "Create Image", video: "Make Video", thumbnail: "Design Thumbnail" };
      setMessages([{ role: "agent", content: `Let's ${flowLabels[flowType].toLowerCase()}! 🎨`, type: "text" }]);
      
      setTimeout(() => {
        setConversationStep("gen_ask_style");
      }, 1000);
      
      localStorage.removeItem("sociact_flow_type");
      return;
    }

    // Check for regular prompt
    const prompt = localStorage.getItem("sociact_prompt");

    if (prompt) {
      setActiveFlowType("automation");
      setMessages([{ role: "user", content: prompt, type: "text" }]);
      setIsThinking(true);
      setThinkingStage(0);
      setIsFirstPrompt(true);

      const stageInterval = setInterval(() => {
        setThinkingStage((prev) => {
          if (prev >= 4) {
            clearInterval(stageInterval);
            return prev;
          }
          return prev + 1;
        });
      }, 4000);

      setTimeout(() => {
        clearInterval(stageInterval);
        setIsThinking(false);
        setThinkingStage(0);
        addAgentMessage("Got it 👍 I'm working on this for you.");
        
        setTimeout(() => {
          addAgentMessage("I understand! Let me help you with that. 🚀");
          setConversationStep("first_response");
        }, 1500);
      }, 20000);

      localStorage.removeItem("sociact_prompt");
    }
  }, []);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage, type: "text" }]);

    // Handle generation flow text input
    if (conversationStep === "gen_wait_style") {
      setGenerationData(prev => ({ ...prev, style: userMessage }));
      setTimeout(() => {
        addAgentMessage("Great choice! 👍");
        setConversationStep("gen_ask_subject");
      }, 800);
      return;
    } else if (conversationStep === "gen_wait_subject") {
      setGenerationData(prev => ({ ...prev, subject: userMessage }));
      setConversationStep("gen_generating");
      return;
    }

    // Handle automation flow text input
    if (conversationStep === "wait_trigger") {
      setCollectedData(prev => ({ ...prev, trigger: userMessage }));
      setTimeout(() => {
        addAgentMessage("Got it 👍");
        setConversationStep("ask_tone");
      }, 800);
    } else if (conversationStep === "wait_tone") {
      setCollectedData(prev => ({ ...prev, tone: userMessage }));
      setTimeout(() => {
        addAgentMessage("Perfect, noted.");
        setConversationStep("ask_goal");
      }, 800);
    } else if (conversationStep === "wait_goal") {
      setCollectedData(prev => ({ ...prev, goal: userMessage }));
      setTimeout(() => {
        addAgentMessage("Understood 👍");
        setConversationStep("ask_business");
      }, 800);
    } else if (conversationStep === "wait_business") {
      setCollectedData(prev => ({ ...prev, business: userMessage }));
      setConversationStep("setting_up");
    } else if (isFirstPrompt || conversationStep === "initial") {
      // First message flow with 20 second thinking
      setIsThinking(true);
      setThinkingStage(0);
      setIsFirstPrompt(false);

      const stageInterval = setInterval(() => {
        setThinkingStage((prev) => {
          if (prev >= 4) {
            clearInterval(stageInterval);
            return prev;
          }
          return prev + 1;
        });
      }, 4000);

      setTimeout(() => {
        clearInterval(stageInterval);
        setIsThinking(false);
        setThinkingStage(0);
        addAgentMessage("Got it 👍 I'm working on this for you.");
        
        setTimeout(() => {
          addAgentMessage("I understand! Let me help you with that. 🚀");
          setConversationStep("first_response");
        }, 1500);
      }, 20000);
    } else if (conversationStep === "complete" || conversationStep === "gen_complete") {
      // After completion, simple responses
      setIsThinking(true);
      setThinkingStage(0);

      setTimeout(() => {
        setIsThinking(false);
        setThinkingStage(0);
        addAgentMessage("Is there anything else you'd like me to help you with? 🚀");
      }, 2000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const isWaitingForInput = conversationStep.startsWith("wait_") || 
                            conversationStep.startsWith("gen_wait_") ||
                            conversationStep === "initial" || 
                            conversationStep === "complete" ||
                            conversationStep === "gen_complete";

  const isGenerationFlow = activeFlowType === "image" || activeFlowType === "video" || activeFlowType === "thumbnail";

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PromoBanner />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeItem="command-center" onItemClick={handleNavigation} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto p-6 pb-24">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Command Center</h1>
              
              {/* Flow Header for generation flows */}
              {isGenerationFlow && (
                <FlowHeader 
                  flowType={activeFlowType} 
                  step={conversationStep}
                  onClose={resetGenerationFlow}
                />
              )}
              
              <div className="space-y-2">
                {messages.map((msg, index) => (
                  <ChatBubble key={index} variant={msg.role} text={msg.content} />
                ))}
                {isThinking && (
                  isGenerationFlow 
                    ? <GenerationThinkingIndicator stage={thinkingStage} type={getFlowTypeName().toLowerCase()} />
                    : <ThinkingIndicator stage={thinkingStage} />
                )}
                
                {/* Automation Option Buttons */}
                {showOptions === "trigger" && (
                  <OptionSelector 
                    options={triggerOptions} 
                    onSelect={(value) => handleOptionSelect("trigger", value)}
                    selectedOption={collectedData.trigger}
                  />
                )}
                {showOptions === "tone" && (
                  <OptionSelector 
                    options={toneOptions} 
                    onSelect={(value) => handleOptionSelect("tone", value)}
                    selectedOption={collectedData.tone}
                  />
                )}
                {showOptions === "goal" && (
                  <OptionSelector 
                    options={goalOptions} 
                    onSelect={(value) => handleOptionSelect("goal", value)}
                    selectedOption={collectedData.goal}
                  />
                )}
                {showOptions === "business" && (
                  <OptionSelector 
                    options={businessOptions} 
                    onSelect={(value) => handleOptionSelect("business", value)}
                    selectedOption={collectedData.business}
                  />
                )}
                
                {/* Generation Option Buttons */}
                {showOptions === "gen_style" && (
                  <OptionSelector 
                    options={getStyleOptions()} 
                    onSelect={(value) => handleGenerationOptionSelect("style", value)}
                    selectedOption={generationData.style}
                  />
                )}
                {showOptions === "gen_subject" && (
                  <OptionSelector 
                    options={getSubjectOptions()} 
                    onSelect={(value) => handleGenerationOptionSelect("subject", value)}
                    selectedOption={generationData.subject}
                  />
                )}
                
                {showSummary && <SummaryCard data={collectedData} />}
                {showCTA && <CTASection onNavigate={handleNavigation} />}
                
                {showGenerationCTA && (
                  <>
                    <GenerationSummaryCard data={generationData} />
                    <GenerationCTASection type={getFlowTypeName().toLowerCase()} onReset={resetGenerationFlow} />
                  </>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Automation Details Section - shown after automation is complete */}
              {showCTA && (
                <AutomationDetailsSection 
                  data={collectedData} 
                  onEdit={(field, value) => {
                    setCollectedData(prev => ({ ...prev, [field]: value }));
                  }}
                />
              )}
            </div>
          </main>
          
          {/* Chat Input Section */}
          <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 md:left-64">
            <div className="max-w-3xl mx-auto flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1"
                disabled={isThinking || !isWaitingForInput}
              />
              <Button onClick={handleSend} disabled={isThinking || !inputValue.trim() || !isWaitingForInput}>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandCenterChat;
