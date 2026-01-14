import { useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { PromoBanner } from "@/components/PromoBanner";

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

const CommandCenterChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeItem, setActiveItem] = useState("command-center");

  useEffect(() => {
    const prompt = localStorage.getItem("sociact_prompt");

    if (prompt) {
      // Show user message
      setMessages([{ role: "user", content: prompt }]);

      // Show agent response after delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: "agent", content: "Got it 👍 I'm working on this for you." },
        ]);
      }, 800);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PromoBanner />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Command Center</h1>
              <div className="space-y-2">
                {messages.map((msg, index) => (
                  <ChatBubble key={index} variant={msg.role} text={msg.content} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CommandCenterChat;
