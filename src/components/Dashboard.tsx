import { AuroraBackground } from "./AuroraBackground";
import { RotatingText } from "./RotatingText";
import { AgenticCommandCenter } from "./agentic/AgenticCommandCenter";
import { CommunityCreations } from "./CommunityCreations";

export const Dashboard = () => {
  return (
    <div className="flex-1 min-h-screen bg-background overflow-auto">
      {/* Hero Section with Aurora */}
      <div className="relative min-h-[70vh]">
        <AuroraBackground />
        
        <div className="relative z-10 pt-24 pb-12 px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <RotatingText />
            <AgenticCommandCenter />
          </div>
        </div>
      </div>

      {/* Community Creations Section */}
      <div className="px-6 py-10">
        <CommunityCreations />
      </div>
    </div>
  );
};
