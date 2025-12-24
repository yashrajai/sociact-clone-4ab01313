import { useState } from "react";
import { 
  Home, 
  Search, 
  PlusSquare, 
  Heart, 
  User,
  MoreHorizontal,
  MessageCircle,
  Send,
  Bookmark,
  Wifi,
  Battery,
  Signal
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PhonePreviewProps {
  selectedPost?: string | null;
  className?: string;
}

const mockPosts = [
  { id: "1", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=300&fit=crop" },
  { id: "2", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=300&h=300&fit=crop" },
  { id: "3", image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=300&h=300&fit=crop" },
];

export const PhonePreview = ({ selectedPost, className }: PhonePreviewProps) => {
  const [activeTab, setActiveTab] = useState<"posts" | "comments">("posts");

  return (
    <div className={cn("flex flex-col items-center", className)}>
      {/* Phone Frame */}
      <div className="relative w-[280px] h-[560px] bg-black rounded-[40px] p-2 shadow-2xl shadow-black/50">
        {/* Phone Inner Screen */}
        <div className="w-full h-full bg-background rounded-[32px] overflow-hidden flex flex-col">
          {/* Status Bar */}
          <div className="flex items-center justify-between px-6 py-2 bg-background">
            <span className="text-xs font-medium text-foreground">9:41</span>
            <div className="flex items-center gap-1">
              <Signal className="w-3.5 h-3.5 text-foreground" />
              <Wifi className="w-3.5 h-3.5 text-foreground" />
              <Battery className="w-4 h-4 text-foreground" />
            </div>
          </div>

          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />

          {/* Instagram Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-border/30">
            <span className="text-base font-semibold text-foreground" style={{ fontFamily: "'Billabong', cursive" }}>
              Instagram
            </span>
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-foreground" />
              <Send className="w-5 h-5 text-foreground -rotate-12" />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-border/30">
            <button
              onClick={() => setActiveTab("posts")}
              className={cn(
                "flex-1 py-2 text-xs font-medium transition-colors",
                activeTab === "posts" 
                  ? "text-foreground border-b-2 border-foreground" 
                  : "text-muted-foreground"
              )}
            >
              Posts
            </button>
            <button
              onClick={() => setActiveTab("comments")}
              className={cn(
                "flex-1 py-2 text-xs font-medium transition-colors",
                activeTab === "comments" 
                  ? "text-foreground border-b-2 border-foreground" 
                  : "text-muted-foreground"
              )}
            >
              Comments
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex flex-col items-center justify-center p-4">
            {!selectedPost ? (
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-secondary/50 flex items-center justify-center">
                  <PlusSquare className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  You haven't picked a post for automation yet
                </p>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  Select a post from the left panel
                </p>
              </div>
            ) : (
              <div className="w-full space-y-3">
                {/* Selected Post Preview */}
                <div className="w-full">
                  {/* Post Header */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-purple-600" />
                    <span className="text-xs font-medium text-foreground">your_brand</span>
                    <MoreHorizontal className="w-4 h-4 text-muted-foreground ml-auto" />
                  </div>
                  
                  {/* Post Image */}
                  <div className="w-full aspect-square rounded-lg overflow-hidden bg-secondary">
                    <img 
                      src={mockPosts.find(p => p.id === selectedPost)?.image || mockPosts[0].image}
                      alt="Post"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Post Actions */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-foreground" />
                      <MessageCircle className="w-5 h-5 text-foreground" />
                      <Send className="w-5 h-5 text-foreground -rotate-12" />
                    </div>
                    <Bookmark className="w-5 h-5 text-foreground" />
                  </div>
                  
                  {/* Likes */}
                  <p className="text-xs font-semibold text-foreground mt-1">1,234 likes</p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-around py-2 border-t border-border/30 bg-background">
            <Home className="w-5 h-5 text-foreground" />
            <Search className="w-5 h-5 text-muted-foreground" />
            <PlusSquare className="w-5 h-5 text-muted-foreground" />
            <Heart className="w-5 h-5 text-muted-foreground" />
            <User className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};
