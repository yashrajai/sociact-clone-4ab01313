import { Crown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const TopBar = () => {
  const { toast } = useToast();

  const handleUpgrade = () => {
    toast({
      title: "Upgrade",
      description: "Opening upgrade options...",
    });
  };

  return (
    <div className="flex items-center justify-end gap-3 px-6 py-3 bg-transparent">
      <button
        onClick={handleUpgrade}
        className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
      >
        <Crown className="w-4 h-4 text-blue-400" />
        <span className="text-sm font-medium text-foreground">Upgrade</span>
      </button>
      
      <div className="w-px h-6 bg-border" />
      
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
        <span className="text-sm font-semibold text-white">U</span>
      </div>
    </div>
  );
};
