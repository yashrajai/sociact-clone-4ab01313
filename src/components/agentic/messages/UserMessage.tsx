import { Message } from "../types";
import { User } from "lucide-react";

interface UserMessageProps {
  message: Message;
}

export const UserMessage = ({ message }: UserMessageProps) => {
  return (
    <div className="flex items-start gap-3 justify-end animate-fade-in">
      <div className="max-w-[80%] bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-2xl rounded-tr-sm px-4 py-3">
        <p className="text-foreground">{message.content}</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
        <User className="w-4 h-4 text-primary" />
      </div>
    </div>
  );
};
