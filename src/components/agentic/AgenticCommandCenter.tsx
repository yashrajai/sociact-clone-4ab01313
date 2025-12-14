import { useState, useRef, useEffect } from "react";
import { ArrowUp, Paperclip, Sparkles, Mic } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChatHistory } from "./ChatHistory";
import { QuickCommands } from "./QuickCommands";
import { Message, AgentState } from "./types";

export const AgenticCommandCenter = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [agentState, setAgentState] = useState<AgentState>("idle");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const detectIntent = (text: string) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes("image") || lowerText.includes("generate") || lowerText.includes("create")) {
      if (lowerText.includes("video")) return "video-generation";
      if (lowerText.includes("thumbnail")) return "thumbnail-design";
      return "image-generation";
    }
    if (lowerText.includes("automation") || lowerText.includes("comment") || lowerText.includes("dm") || lowerText.includes("reply")) {
      return "automation-setup";
    }
    if (lowerText.includes("avatar") || lowerText.includes("ugc")) return "avatar-creation";
    if (lowerText.includes("video")) return "video-generation";
    return "general";
  };

  const handleSubmit = async () => {
    if (!input.trim() || agentState !== "idle") return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    const detectedIntent = detectIntent(input);
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setAgentState("thinking");

    // Simulate agent thinking
    setTimeout(() => {
      const thinkingMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "agent-thinking",
        content: "Analyzing your request...",
        intent: detectedIntent,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, thinkingMessage]);
    }, 300);

    // Simulate agent response with follow-up
    setTimeout(() => {
      setAgentState("gathering");
      const agentResponse = generateAgentResponse(detectedIntent, input);
      setMessages((prev) => {
        const filtered = prev.filter((m) => m.type !== "agent-thinking");
        return [...filtered, agentResponse];
      });
    }, 1500);
  };

  const generateAgentResponse = (intent: string, userInput: string): Message => {
    switch (intent) {
      case "image-generation":
        return {
          id: Date.now().toString(),
          type: "agent-followup",
          content: "I'll create that image for you. Let me gather a few details to make it perfect.",
          intent: "image-generation",
          timestamp: new Date(),
          followUp: {
            type: "image-config",
            step: 1,
            totalSteps: 3,
            options: [
              { id: "photorealistic", label: "Photorealistic", icon: "camera" },
              { id: "artistic", label: "Artistic", icon: "palette" },
              { id: "3d", label: "3D Render", icon: "box" },
              { id: "anime", label: "Anime", icon: "sparkles" },
            ],
            prompt: "What style would you like for this image?",
          },
        };
      case "automation-setup":
        return {
          id: Date.now().toString(),
          type: "agent-followup",
          content: "Perfect! I'll set up your Instagram automation. Let's configure it step by step.",
          intent: "automation-setup",
          timestamp: new Date(),
          followUp: {
            type: "automation-config",
            step: 1,
            totalSteps: 4,
            options: [
              { id: "comments", label: "Comment Auto-Reply", icon: "message-circle" },
              { id: "dms", label: "DM Automation", icon: "send" },
              { id: "story", label: "Story Replies", icon: "image" },
              { id: "all", label: "Full Automation Suite", icon: "zap" },
            ],
            prompt: "What type of automation would you like to set up?",
          },
        };
      case "video-generation":
        return {
          id: Date.now().toString(),
          type: "agent-followup",
          content: "Exciting! Let me help you create that video. First, let's decide on the format.",
          intent: "video-generation",
          timestamp: new Date(),
          followUp: {
            type: "video-config",
            step: 1,
            totalSteps: 4,
            options: [
              { id: "ugc", label: "UGC Style", icon: "user" },
              { id: "product", label: "Product Showcase", icon: "package" },
              { id: "talking", label: "Talking Head", icon: "mic" },
              { id: "cinematic", label: "Cinematic", icon: "film" },
            ],
            prompt: "What type of video would you like to create?",
          },
        };
      default:
        return {
          id: Date.now().toString(),
          type: "agent-text",
          content: "I understand you want to " + userInput.toLowerCase() + ". I'm ready to help! Could you provide more details about what you'd like to achieve?",
          intent: "general",
          timestamp: new Date(),
        };
    }
  };

  const handleFollowUpSelect = (messageId: string, optionId: string) => {
    const message = messages.find((m) => m.id === messageId);
    if (!message?.followUp) return;

    const selectedOption = message.followUp.options?.find((o) => o.id === optionId);
    
    // Update the message with selection
    setMessages((prev) =>
      prev.map((m) =>
        m.id === messageId
          ? { ...m, followUp: { ...m.followUp!, selectedOption: optionId } }
          : m
      )
    );

    // Simulate next step or execution
    setTimeout(() => {
      if (message.followUp!.step < message.followUp!.totalSteps) {
        const nextMessage = generateNextStep(message.intent!, message.followUp!.step + 1, optionId);
        setMessages((prev) => [...prev, nextMessage]);
      } else {
        setAgentState("executing");
        const executionMessage: Message = {
          id: Date.now().toString(),
          type: "agent-executing",
          content: "Executing your request...",
          intent: message.intent,
          timestamp: new Date(),
          execution: {
            steps: getExecutionSteps(message.intent!),
            currentStep: 0,
          },
        };
        setMessages((prev) => [...prev, executionMessage]);
        simulateExecution(executionMessage.id);
      }
    }, 500);
  };

  const generateNextStep = (intent: string, step: number, previousChoice: string): Message => {
    if (intent === "automation-setup") {
      if (step === 2) {
        return {
          id: Date.now().toString(),
          type: "agent-followup",
          content: "Great choice! Now let's set up the trigger conditions.",
          intent,
          timestamp: new Date(),
          followUp: {
            type: "trigger-config",
            step: 2,
            totalSteps: 4,
            inputType: "tags",
            prompt: "Enter the trigger words or phrases (press Enter after each)",
            placeholder: "e.g., price, info, link, DM...",
          },
        };
      }
      if (step === 3) {
        return {
          id: Date.now().toString(),
          type: "agent-followup",
          content: "Perfect! Now let's craft the response.",
          intent,
          timestamp: new Date(),
          followUp: {
            type: "response-config",
            step: 3,
            totalSteps: 4,
            inputType: "textarea",
            prompt: "What should I reply when triggered?",
            placeholder: "Type your auto-reply message or let AI generate one...",
            aiSuggest: true,
          },
        };
      }
    }
    if (intent === "image-generation") {
      if (step === 2) {
        return {
          id: Date.now().toString(),
          type: "agent-followup",
          content: "Excellent style choice! Now let's pick the aspect ratio.",
          intent,
          timestamp: new Date(),
          followUp: {
            type: "ratio-config",
            step: 2,
            totalSteps: 3,
            options: [
              { id: "1:1", label: "1:1 Square", icon: "square" },
              { id: "16:9", label: "16:9 Landscape", icon: "rectangle-horizontal" },
              { id: "9:16", label: "9:16 Portrait", icon: "rectangle-vertical" },
              { id: "4:3", label: "4:3 Standard", icon: "monitor" },
            ],
            prompt: "Choose the aspect ratio for your image",
          },
        };
      }
    }
    
    // Default final confirmation
    return {
      id: Date.now().toString(),
      type: "agent-preview",
      content: "Here's what I'm about to create for you:",
      intent,
      timestamp: new Date(),
      preview: {
        type: intent,
        summary: `Your ${intent.replace("-", " ")} is ready to be created.`,
        details: ["High quality output", "Optimized for social media", "Ready in seconds"],
      },
    };
  };

  const getExecutionSteps = (intent: string) => {
    switch (intent) {
      case "automation-setup":
        return [
          "Connecting to Instagram API...",
          "Creating automation rule...",
          "Configuring triggers...",
          "Testing automation flow...",
          "Activating rule...",
        ];
      case "image-generation":
        return [
          "Initializing AI model...",
          "Processing prompt...",
          "Generating image...",
          "Applying enhancements...",
          "Finalizing output...",
        ];
      case "video-generation":
        return [
          "Loading video engine...",
          "Processing script...",
          "Generating scenes...",
          "Rendering video...",
          "Adding final touches...",
        ];
      default:
        return ["Processing...", "Almost done...", "Completing..."];
    }
  };

  const simulateExecution = (messageId: string) => {
    const steps = getExecutionSteps(messages.find((m) => m.id === messageId)?.intent || "general");
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === messageId
              ? { ...m, execution: { ...m.execution!, currentStep } }
              : m
          )
        );
      } else {
        clearInterval(interval);
        setAgentState("idle");
        
        // Add completion message
        const completionMessage: Message = {
          id: Date.now().toString(),
          type: "agent-complete",
          content: "Done! Your task has been completed successfully.",
          intent: messages.find((m) => m.id === messageId)?.intent,
          timestamp: new Date(),
          output: {
            type: messages.find((m) => m.id === messageId)?.intent || "general",
            success: true,
            actions: ["View Result", "Edit", "Create Another"],
          },
        };
        setMessages((prev) => [...prev, completionMessage]);
      }
    }, 800);
  };

  const handleQuickCommand = (prompt: string) => {
    setInput(prompt);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col h-full">
      {/* Chat History */}
      {messages.length > 0 && (
        <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-[500px] pr-2 scrollbar-thin">
          <ChatHistory 
            messages={messages} 
            onFollowUpSelect={handleFollowUpSelect}
          />
          <div ref={chatEndRef} />
        </div>
      )}

      {/* Quick Commands - only show when no messages */}
      {messages.length === 0 && (
        <QuickCommands onSelect={handleQuickCommand} />
      )}

      {/* Input Area */}
      <div
        className={cn(
          "relative bg-secondary/30 backdrop-blur-xl rounded-2xl transition-all duration-300 border",
          isFocused 
            ? "border-primary/50 shadow-lg shadow-primary/10" 
            : "border-border/50",
          agentState !== "idle" && "opacity-70 pointer-events-none"
        )}
      >
        {/* Glowing effect when focused */}
        {isFocused && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-xl -z-10" />
        )}
        
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Tell me what you want to create..."
          className="w-full min-h-[100px] bg-transparent text-foreground placeholder:text-muted-foreground p-5 pr-28 resize-none focus:outline-none rounded-2xl text-base"
          disabled={agentState !== "idle"}
        />
        
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <button className="w-10 h-10 text-muted-foreground hover:text-foreground rounded-xl flex items-center justify-center transition-all hover:bg-secondary/80">
            <Paperclip className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 text-muted-foreground hover:text-foreground rounded-xl flex items-center justify-center transition-all hover:bg-secondary/80">
            <Mic className="w-5 h-5" />
          </button>
          <button
            onClick={handleSubmit}
            disabled={!input.trim() || agentState !== "idle"}
            className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
              input.trim() && agentState === "idle"
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            )}
          >
            {agentState === "idle" ? (
              <ArrowUp className="w-5 h-5" />
            ) : (
              <Sparkles className="w-5 h-5 animate-pulse" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
