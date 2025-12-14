import { Message } from "./types";
import { UserMessage } from "./messages/UserMessage";
import { AgentThinking } from "./messages/AgentThinking";
import { AgentFollowUp } from "./messages/AgentFollowUp";
import { AgentPreview } from "./messages/AgentPreview";
import { AgentExecuting } from "./messages/AgentExecuting";
import { AgentComplete } from "./messages/AgentComplete";
import { AgentText } from "./messages/AgentText";

interface ChatHistoryProps {
  messages: Message[];
  onFollowUpSelect: (messageId: string, optionId: string) => void;
}

export const ChatHistory = ({ messages, onFollowUpSelect }: ChatHistoryProps) => {
  return (
    <div className="space-y-4">
      {messages.map((message) => {
        switch (message.type) {
          case "user":
            return <UserMessage key={message.id} message={message} />;
          case "agent-thinking":
            return <AgentThinking key={message.id} message={message} />;
          case "agent-text":
            return <AgentText key={message.id} message={message} />;
          case "agent-followup":
            return (
              <AgentFollowUp
                key={message.id}
                message={message}
                onSelect={(optionId) => onFollowUpSelect(message.id, optionId)}
              />
            );
          case "agent-preview":
            return (
              <AgentPreview
                key={message.id}
                message={message}
                onConfirm={() => onFollowUpSelect(message.id, "confirm")}
              />
            );
          case "agent-executing":
            return <AgentExecuting key={message.id} message={message} />;
          case "agent-complete":
            return <AgentComplete key={message.id} message={message} />;
          default:
            return null;
        }
      })}
    </div>
  );
};
