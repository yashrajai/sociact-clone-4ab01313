import { AuroraBackground } from "./AuroraBackground";
import { RotatingText } from "./RotatingText";
import { TaskInput } from "./TaskInput";
import { QuickStats } from "./QuickStats";
import { SuggestedPrompts } from "./SuggestedPrompts";
import { CommunityCreations } from "./CommunityCreations";

export const Dashboard = () => {
  return (
    <div className="flex-1 min-h-screen bg-background overflow-auto">
      {/* Hero Section with Aurora */}
      <div className="relative">
        <AuroraBackground />
        
        <div className="relative z-10 pt-32 pb-12 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <RotatingText />
            <TaskInput />
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="px-6 py-6 border-b border-border/30">
        <QuickStats />
      </div>

      {/* Suggested Prompts Section */}
      <div className="px-6 py-8 bg-secondary/20">
        <SuggestedPrompts />
      </div>

      {/* Community Creations Section */}
      <div className="px-6 py-10">
        <CommunityCreations />
      </div>
    </div>
  );
};
