import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";

import { PromoBanner } from "@/components/PromoBanner";
import { Dashboard } from "@/components/Dashboard";
import { AnalyticsDashboard } from "@/components/analytics/AnalyticsDashboard";
import { CommentAutomation } from "@/components/automation/CommentAutomation";
import { ImageGeneration } from "@/components/image-generation/ImageGeneration";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeItem, setActiveItem] = useState("overview");
  const { toast } = useToast();

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    const formattedName = item.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    toast({
      title: formattedName,
      description: `Navigating to ${formattedName}...`,
    });
  };

  const renderContent = () => {
    switch (activeItem) {
      case "analytics":
        return <AnalyticsDashboard />;
      case "comment-automation":
        return <CommentAutomation />;
      case "image-generation":
        return <ImageGeneration />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PromoBanner />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeItem={activeItem} onItemClick={handleItemClick} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
