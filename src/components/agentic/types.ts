export type AgentState = "idle" | "thinking" | "gathering" | "executing" | "complete";

export type MessageType = 
  | "user" 
  | "agent-text" 
  | "agent-thinking" 
  | "agent-followup" 
  | "agent-preview" 
  | "agent-executing" 
  | "agent-complete";

export interface FollowUpOption {
  id: string;
  label: string;
  icon?: string;
  description?: string;
}

export interface FollowUp {
  type: string;
  step: number;
  totalSteps: number;
  options?: FollowUpOption[];
  inputType?: "tags" | "textarea" | "select";
  prompt?: string;
  placeholder?: string;
  aiSuggest?: boolean;
  selectedOption?: string;
}

export interface Preview {
  type: string;
  summary: string;
  details: string[];
  image?: string;
}

export interface Execution {
  steps: string[];
  currentStep: number;
}

export interface Output {
  type: string;
  success: boolean;
  result?: string;
  actions: string[];
}

export interface Message {
  id: string;
  type: MessageType;
  content: string;
  timestamp: Date;
  intent?: string;
  followUp?: FollowUp;
  preview?: Preview;
  execution?: Execution;
  output?: Output;
}
