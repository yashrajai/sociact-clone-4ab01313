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

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
}

const NavItem = ({ icon, label, active, badge }: NavItemProps) => (
  <div
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

export const Sidebar = () => {
  return (
    <div className="w-60 min-h-screen bg-sidebar flex flex-col border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-5">
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
          <Zap className="w-5 h-5 text-primary" />
        </div>
        <span className="text-lg font-semibold text-primary">Sociact AI</span>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-2">
        <SectionLabel>Dashboard</SectionLabel>
        <NavItem icon={<LayoutGrid className="w-5 h-5" />} label="Overview" active />
        <NavItem icon={<ChartLine className="w-5 h-5" />} label="Analytics" />

        <SectionLabel>AI Tools</SectionLabel>
        <NavItem icon={<MessageCircle className="w-5 h-5" />} label="Comment Automation" />
        <NavItem icon={<Image className="w-5 h-5" />} label="Image Generation" badge="NEW" />
        <NavItem icon={<Video className="w-5 h-5" />} label="Video Generation" badge="NEW" />
        <NavItem icon={<Square className="w-5 h-5" />} label="Thumbnail Generation" />
        <NavItem icon={<Search className="w-5 h-5" />} label="Seo Analyser" />

        <SectionLabel>Ad Creation</SectionLabel>
        <NavItem icon={<Wand2 className="w-5 h-5" />} label="AI Avatar" />

        <SectionLabel>Account</SectionLabel>
        <NavItem icon={<Settings className="w-5 h-5" />} label="Settings" />
        <NavItem icon={<CreditCard className="w-5 h-5" />} label="Pricing" />

        <SectionLabel>Support</SectionLabel>
        <NavItem icon={<HelpCircle className="w-5 h-5" />} label="Help & Support" />
      </div>

      {/* Sign In Button */}
      <div className="p-4">
        <button className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          <LogIn className="w-4 h-4" />
          Sign In
        </button>
      </div>
    </div>
  );
};
