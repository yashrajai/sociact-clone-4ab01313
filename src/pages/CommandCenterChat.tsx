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

const ThinkingIndicator = () => (
  <div className="flex justify-start mb-4">
    <div className="bg-secondary text-foreground px-4 py-3 rounded-2xl rounded-bl-md">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground text-sm">Thinking</span>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  </div>
);

const CommandCenterChat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);
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
  }, [messages, isThinking]);

  useEffect(() => {
    const prompt = localStorage.getItem("sociact_prompt");

    if (prompt) {
      setMessages([{ role: "user", content: prompt }]);
      setIsThinking(true);

      setTimeout(() => {
        setIsThinking(false);
        setMessages((prev) => [
          ...prev,
          { role: "agent", content: "Got it 👍 I'm working on this for you." },
        ]);
      }, 800);
    }
  }, []);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsThinking(true);

    setTimeout(() => {
      setIsThinking(false);
      setMessages((prev) => [
        ...prev,
        { role: "agent", content: "I understand! Let me help you with that. 🚀" },
      ]);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

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
                {isThinking && <ThinkingIndicator />}
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
                disabled={isThinking}
              />
              <Button onClick={handleSend} disabled={isThinking || !inputValue.trim()}>
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
