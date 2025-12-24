import { 
  BarChart3, 
  Clapperboard, 
  Frame, 
  SlidersHorizontal, 
  Crown, 
  MessageCircleQuestion,
  LogIn,
  Brain
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import aiAvatarIcon from "@/assets/ai-avatar-icon.png";
import commandCenterIcon from "@/assets/command-center-icon.png";
import commentAutomationIcon from "@/assets/comment-automation-icon.png";
import imageGenerationIcon from "@/assets/image-generation-icon.png";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
  onClick: () => void;
}

const NavItem = ({ icon, label, active, badge, onClick }: NavItemProps) => (
  <div
    onClick={onClick}
    className={cn(
      "group flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-all duration-200 rounded-r-md",
      active 
        ? "bg-secondary border-l-2 border-primary text-foreground shadow-[0_0_12px_rgba(34,197,94,0.25)]" 
        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
    )}
  >
    <span className={cn(
      "w-5 h-5",
      active && "text-primary drop-shadow-[0_0_6px_rgba(34,197,94,0.5)]"
    )}>{icon}</span>
    <span className="text-sm font-medium">{label}</span>
    {badge && (
      <span className="new-badge ml-auto">{badge}</span>
    )}
  </div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="section-label px-4 py-2 mt-4 mb-1">{children}</div>
);

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

export const Sidebar = ({ activeItem, onItemClick }: SidebarProps) => {
  const { toast } = useToast();

  const handleSignIn = () => {
    toast({
      title: "Sign In",
      description: "Opening sign in modal...",
    });
  };

  const navItems = [
    { section: "Dashboard", items: [
      { id: "overview", icon: <img src={commandCenterIcon} alt="Command Center" className="w-5 h-5 invert brightness-0 invert opacity-70" />, label: "Command Center" },
      { id: "analytics", icon: <BarChart3 className="w-5 h-5" />, label: "Analytics" },
    ]},
    { section: "AI Tools", items: [
      { id: "comment-automation", icon: <img src={commentAutomationIcon} alt="Comment Automation" className="w-5 h-5 invert brightness-0 invert opacity-70" />, label: "Comment Automation" },
      { id: "image-generation", icon: <img src={imageGenerationIcon} alt="Image Generation" className="w-5 h-5 invert brightness-0 invert opacity-70" />, label: "Image Generation", badge: "NEW" },
      { id: "video-generation", icon: <Clapperboard className="w-5 h-5" />, label: "Video Generation", badge: "NEW" },
      { id: "thumbnail-generation", icon: <Frame className="w-5 h-5" />, label: "Thumbnail Generation" },
    ]},
    { section: "Ad Creation", items: [
      { id: "ai-avatar", icon: <img src={aiAvatarIcon} alt="AI Avatar" className="w-5 h-5 invert brightness-0 invert opacity-70" />, label: "AI Avatar" },
    ]},
    { section: "Account", items: [
      { id: "settings", icon: <SlidersHorizontal className="w-5 h-5" />, label: "Settings" },
      { id: "pricing", icon: <Crown className="w-5 h-5" />, label: "Pricing" },
    ]},
    { section: "Support", items: [
      { id: "help-support", icon: <MessageCircleQuestion className="w-5 h-5" />, label: "Help & Support" },
    ]},
  ];

  return (
    <div className="w-60 min-h-screen bg-sidebar flex flex-col border-r border-sidebar-border">
      {/* Logo */}
      <div 
        className="flex items-center gap-2.5 px-4 py-5 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => onItemClick("overview")}
      >
        <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
          <Brain className="w-5 h-5 text-primary" />
        </div>
        <span className="text-lg font-bold text-primary font-display tracking-tight">Sociact AI</span>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-2 overflow-y-auto scrollbar-hide">
        {navItems.map((section) => (
          <div key={section.section}>
            <SectionLabel>{section.section}</SectionLabel>
            {section.items.map((item) => (
              <NavItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                badge={item.badge}
                active={activeItem === item.id}
                onClick={() => onItemClick(item.id)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Sign In Button */}
      <div className="p-4">
        <button 
          onClick={handleSignIn}
          className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors active:scale-95"
        >
          <LogIn className="w-4 h-4" />
          Sign In
        </button>
      </div>
    </div>
  );
};
