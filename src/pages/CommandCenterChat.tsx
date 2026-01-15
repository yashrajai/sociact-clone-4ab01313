import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { PromoBanner } from "@/components/PromoBanner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Pencil, Plus, BarChart3, MessageCircle, AtSign, Hash, Sparkles, Briefcase, HeartHandshake, Calendar, ShoppingCart, Check, MoreHorizontal } from "lucide-react";

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

// Option button configurations for each step
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
  | "complete";

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
  const [showOptions, setShowOptions] = useState<"trigger" | "tone" | "goal" | "business" | null>(null);
  const [collectedData, setCollectedData] = useState({
    trigger: "",
    tone: "",
    goal: "",
    business: "",
  });
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
  }, [messages, isThinking, thinkingStage, showSummary, showCTA, showOptions]);

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

  const addAgentMessage = (content: string) => {
    setMessages((prev) => [...prev, { role: "agent", content, type: "text" }]);
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
    }
  };

  useEffect(() => {
    if (conversationStep === "first_response" || 
        conversationStep === "ask_trigger" || 
        conversationStep === "ask_tone" || 
        conversationStep === "ask_goal" || 
        conversationStep === "ask_business" ||
        conversationStep === "setting_up" ||
        conversationStep === "show_summary") {
      runConversationFlow(conversationStep);
    }
  }, [conversationStep]);

  useEffect(() => {
    const prompt = localStorage.getItem("sociact_prompt");

    if (prompt) {
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

    // Handle based on current conversation step
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
    } else if (conversationStep === "complete") {
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
                            conversationStep === "initial" || 
                            conversationStep === "complete";

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PromoBanner />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeItem="command-center" onItemClick={handleNavigation} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto p-6 pb-24">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Command Center</h1>
              <div className="space-y-2">
                {messages.map((msg, index) => (
                  <ChatBubble key={index} variant={msg.role} text={msg.content} />
                ))}
                {isThinking && <ThinkingIndicator stage={thinkingStage} />}
                
                {/* Option Buttons */}
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
                
                {showSummary && <SummaryCard data={collectedData} />}
                {showCTA && <CTASection onNavigate={handleNavigation} />}
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
