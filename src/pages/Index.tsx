import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { AnalyticsDashboard } from "@/components/analytics/AnalyticsDashboard";
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
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeItem={activeItem} onItemClick={handleItemClick} />
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
