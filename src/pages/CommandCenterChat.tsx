import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { PromoBanner } from "@/components/PromoBanner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Message {
  role: "user" | "agent";
  content: string;
}

const ChatBubble = ({ variant, text }: { variant: "user" | "agent"; text: string }) => (
  <div className={`flex ${variant === "user" ? "justify-end" : "justify-start"} mb-4`}>
    <div
      className={`max-w-[70%] px-4 py-3 rounded-2xl ${
        variant === "user"
          ? "bg-primary text-primary-foreground rounded-br-md"
          : "bg-secondary text-foreground rounded-bl-md"
      }`}
    >
      {text}
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
  | "complete";

const CommandCenterChat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [thinkingStage, setThinkingStage] = useState(0);
  const [conversationStep, setConversationStep] = useState<ConversationStep>("initial");
  const [isFirstPrompt, setIsFirstPrompt] = useState(true);
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
  }, [messages, isThinking, thinkingStage]);

  const addAgentMessage = (content: string) => {
    setMessages((prev) => [...prev, { role: "agent", content }]);
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
          addAgentMessage("Step 1 of 4\nWhen should this automation run?\n(For example: when someone sends a DM, comments on a post, or uses a keyword)");
          setConversationStep("wait_trigger");
        }, 1000);
        break;

      case "ask_tone":
        setTimeout(() => {
          addAgentMessage("Step 2 of 4\nWhat tone should the replies have?\n(Professional, friendly, casual, sales-focused, etc.)");
          setConversationStep("wait_tone");
        }, 1000);
        break;

      case "ask_goal":
        setTimeout(() => {
          addAgentMessage("Step 3 of 4\nWhat is the main goal of this automation?\n(Lead capture, customer support, bookings, sales, etc.)");
          setConversationStep("wait_goal");
        }, 1000);
        break;

      case "ask_business":
        setTimeout(() => {
          addAgentMessage("Step 4 of 4\nTell me a bit about your business so I can tailor the replies.");
          setConversationStep("wait_business");
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
                setConversationStep("complete");
              }, 2000);
            }, 6000);
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
        conversationStep === "setting_up") {
      runConversationFlow(conversationStep);
    }
  }, [conversationStep]);

  useEffect(() => {
    const prompt = localStorage.getItem("sociact_prompt");

    if (prompt) {
      setMessages([{ role: "user", content: prompt }]);
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
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    // Handle based on current conversation step
    if (conversationStep === "wait_trigger") {
      setTimeout(() => {
        addAgentMessage("Got it 👍");
        setConversationStep("ask_tone");
      }, 800);
    } else if (conversationStep === "wait_tone") {
      setTimeout(() => {
        addAgentMessage("Perfect, noted.");
        setConversationStep("ask_goal");
      }, 800);
    } else if (conversationStep === "wait_goal") {
      setTimeout(() => {
        addAgentMessage("Understood 👍");
        setConversationStep("ask_business");
      }, 800);
    } else if (conversationStep === "wait_business") {
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
                <div ref={messagesEndRef} />
              </div>
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
