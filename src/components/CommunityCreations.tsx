import { useState } from "react";
import { Flame, Image, Square, Video, Camera, Star, Heart, Download } from "lucide-react";
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
      "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
      active ? "tab-active" : "tab-inactive",
      soon && "opacity-60 cursor-not-allowed",
      !soon && "hover:scale-105"
    )}
  >
    {icon}
    {label}
    {soon && <span className="text-xs text-muted-foreground">(Soon)</span>}
  </button>
);

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop", title: "Urban Street", category: "Photography", likes: 234 },
  { id: 2, src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop", title: "Portrait", category: "AI Avatar", likes: 567 },
  { id: 3, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", title: "Mountain Vista", category: "Landscape", likes: 891 },
  { id: 4, src: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=400&h=300&fit=crop", title: "Neon City", category: "Digital Art", likes: 432 },
  { id: 5, src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop", title: "Retro Gaming", category: "Thumbnail", likes: 321 },
  { id: 6, src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop", title: "Tech Abstract", category: "Digital Art", likes: 654 },
  { id: 7, src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop", title: "Robot Friend", category: "AI Avatar", likes: 789 },
  { id: 8, src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop", title: "Earth View", category: "Landscape", likes: 1024 },
];

export const CommunityCreations = () => {
  const [activeTab, setActiveTab] = useState("images");
  const { toast } = useToast();

  const tabs = [
    { id: "trending", icon: <Flame className="w-4 h-4" />, label: "Trending", soon: false },
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

  const handleLike = (e: React.MouseEvent, image: typeof galleryImages[0]) => {
    e.stopPropagation();
    toast({
      title: "Liked!",
      description: `You liked "${image.title}"`,
    });
  };

  const handleDownload = (e: React.MouseEvent, image: typeof galleryImages[0]) => {
    e.stopPropagation();
    toast({
      title: "Download Started",
      description: `Downloading "${image.title}"...`,
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground font-display">Community Creations</h2>
        <span className="text-sm text-muted-foreground">{galleryImages.length} creations</span>
      </div>
      
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

      {/* Gallery Grid - Masonry style */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => handleImageClick(image)}
            className={cn(
              "rounded-xl overflow-hidden bg-secondary cursor-pointer group relative transition-all duration-300 hover:shadow-xl hover:shadow-primary/10",
              index % 3 === 0 ? "row-span-1" : "",
              "hover:-translate-y-1"
            )}
          >
            <div className="aspect-[4/3] relative">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-foreground border border-border/50">
                  {image.category}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={(e) => handleLike(e, image)}
                  className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Heart className="w-4 h-4" />
                </button>
                <button 
                  onClick={(e) => handleDownload(e, image)}
                  className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-foreground font-medium text-sm">{image.title}</p>
                <div className="flex items-center gap-1 text-muted-foreground text-xs mt-1">
                  <Heart className="w-3 h-3" />
                  <span>{image.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
