import { 
  LayoutGrid, 
  ChartLine, 
  MessageCircle, 
  Image, 
  Video, 
  Square, 
  Search, 
  Wand2, 
  Settings, 
  CreditCard, 
  HelpCircle,
  LogIn,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

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
      "flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-all duration-200 rounded-r-md",
      active 
        ? "bg-secondary border-l-2 border-primary text-foreground" 
        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
    )}
  >
    <span className="w-5 h-5">{icon}</span>
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
      { id: "overview", icon: <LayoutGrid className="w-5 h-5" />, label: "Overview" },
      { id: "analytics", icon: <ChartLine className="w-5 h-5" />, label: "Analytics" },
    ]},
    { section: "AI Tools", items: [
      { id: "comment-automation", icon: <MessageCircle className="w-5 h-5" />, label: "Comment Automation" },
      { id: "image-generation", icon: <Image className="w-5 h-5" />, label: "Image Generation", badge: "NEW" },
      { id: "video-generation", icon: <Video className="w-5 h-5" />, label: "Video Generation", badge: "NEW" },
      { id: "thumbnail-generation", icon: <Square className="w-5 h-5" />, label: "Thumbnail Generation" },
      { id: "seo-analyser", icon: <Search className="w-5 h-5" />, label: "Seo Analyser" },
    ]},
    { section: "Ad Creation", items: [
      { id: "ai-avatar", icon: <Wand2 className="w-5 h-5" />, label: "AI Avatar" },
    ]},
    { section: "Account", items: [
      { id: "settings", icon: <Settings className="w-5 h-5" />, label: "Settings" },
      { id: "pricing", icon: <CreditCard className="w-5 h-5" />, label: "Pricing" },
    ]},
    { section: "Support", items: [
      { id: "help-support", icon: <HelpCircle className="w-5 h-5" />, label: "Help & Support" },
    ]},
  ];

  return (
    <div className="w-60 min-h-screen bg-sidebar flex flex-col border-r border-sidebar-border">
      {/* Logo */}
      <div 
        className="flex items-center gap-2 px-4 py-5 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => onItemClick("overview")}
      >
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
          <Zap className="w-5 h-5 text-primary" />
        </div>
        <span className="text-lg font-semibold text-primary">Sociact AI</span>
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
