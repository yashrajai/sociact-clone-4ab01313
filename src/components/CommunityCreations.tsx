import { useState } from "react";
import { Flame, Image, Square, Video, Camera, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface TabProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  soon?: boolean;
  onClick: () => void;
}

const Tab = ({ icon, label, active, soon, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
      active ? "tab-active" : "tab-inactive",
      soon && "opacity-60 cursor-not-allowed"
    )}
  >
    {icon}
    {label}
    {soon && <span className="text-xs text-muted-foreground">(Soon)</span>}
  </button>
);

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop", title: "Urban Street" },
  { id: 2, src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop", title: "City Life" },
  { id: 3, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop", title: "Portrait" },
  { id: 4, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", title: "Nature" },
];

export const CommunityCreations = () => {
  const [activeTab, setActiveTab] = useState("images");
  const { toast } = useToast();

  const tabs = [
    { id: "trending", icon: <Flame className="w-4 h-4" />, label: "Trending", soon: true },
    { id: "images", icon: <Image className="w-4 h-4" />, label: "Images", soon: false },
    { id: "thumbnails", icon: <Square className="w-4 h-4" />, label: "Thumbnails", soon: false },
    { id: "videos", icon: <Video className="w-4 h-4" />, label: "Videos", soon: false },
    { id: "photography", icon: <Camera className="w-4 h-4" />, label: "Photography", soon: true },
    { id: "anime", icon: <Star className="w-4 h-4" />, label: "Anime", soon: true },
  ];

  const handleTabClick = (tab: typeof tabs[0]) => {
    if (tab.soon) {
      toast({
        title: "Coming Soon",
        description: `${tab.label} category will be available soon!`,
      });
    } else {
      setActiveTab(tab.id);
      toast({
        title: tab.label,
        description: `Viewing ${tab.label.toLowerCase()} creations`,
      });
    }
  };

  const handleImageClick = (image: typeof galleryImages[0]) => {
    toast({
      title: "Image Selected",
      description: `Opening "${image.title}"...`,
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-primary mb-6">Community Creations</h2>
      
      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            icon={tab.icon}
            label={tab.label}
            active={activeTab === tab.id}
            soon={tab.soon}
            onClick={() => handleTabClick(tab)}
          />
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            onClick={() => handleImageClick(image)}
            className="aspect-[4/3] rounded-lg overflow-hidden bg-secondary hover:scale-105 transition-transform duration-300 cursor-pointer group relative"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-foreground font-medium">{image.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
