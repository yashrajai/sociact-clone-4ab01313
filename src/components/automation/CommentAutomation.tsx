import { useState } from "react";
import { CommentRules } from "./CommentRules";
import { DMAutomation } from "./DMAutomation";
import { TemplateManager } from "./TemplateManager";
import { cn } from "@/lib/utils";
import { 
  MessageSquare, 
  Send, 
  FileText
} from "lucide-react";
import instagramLogo from "@/assets/instagram-logo.png";

const tabs = [
  { id: "comments", label: "Comment Rules", icon: MessageSquare },
  { id: "dms", label: "DM Automation", icon: Send },
  { id: "templates", label: "Templates", icon: FileText },
];

export const CommentAutomation = () => {
  const [activeTab, setActiveTab] = useState("comments");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src={instagramLogo} alt="Instagram" className="w-12 h-12 rounded-2xl shadow-lg shadow-purple-500/25" />
          <div>
            <h1 className="text-2xl font-bold font-display text-foreground">Comment & DM Automation</h1>
            <p className="text-muted-foreground text-sm">
              Automate your Instagram engagement with AI-powered responses
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <img src={instagramLogo} alt="Instagram" className="w-4 h-4 rounded-sm" />
            <span className="text-xs font-medium text-emerald-400">Connected to Instagram</span>
          </div>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25">
            + New Automation
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 p-1.5 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-2xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
              activeTab === tab.id
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-purple-500/25"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-6">
        {activeTab === "comments" && <CommentRules />}
        {activeTab === "dms" && <DMAutomation />}
        {activeTab === "templates" && <TemplateManager />}
      </div>
    </div>
  );
};
