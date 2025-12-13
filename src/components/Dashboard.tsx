import { AuroraBackground } from "./AuroraBackground";
import { RotatingText } from "./RotatingText";
import { TaskInput } from "./TaskInput";
import { CommunityCreations } from "./CommunityCreations";

export const Dashboard = () => {
  return (
    <div className="flex-1 min-h-screen bg-background overflow-auto">
      {/* Hero Section with Aurora */}
      <div className="relative">
        <AuroraBackground />
        
        <div className="relative z-10 pt-20 pb-12 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <RotatingText />
            <TaskInput />
          </div>
        </div>
      </div>

      {/* Community Creations Section */}
      <div className="px-6 py-8">
        <CommunityCreations />
      </div>
    </div>
  );
};
