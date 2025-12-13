import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
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

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeItem={activeItem} onItemClick={handleItemClick} />
      <Dashboard />
    </div>
  );
};

export default Index;
