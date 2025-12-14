import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Grid3X3, 
  LayoutGrid,
  Download,
  Heart,
  Share2,
  Maximize2,
  FolderPlus,
  Filter
} from "lucide-react";
import { cn } from "@/lib/utils";

const galleryImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop", liked: true, folder: "Favorites" },
  { id: 2, url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=600&fit=crop", liked: false, folder: null },
  { id: 3, url: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=600&h=600&fit=crop", liked: true, folder: "Projects" },
  { id: 4, url: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&h=600&fit=crop", liked: false, folder: null },
  { id: 5, url: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=600&fit=crop", liked: true, folder: "Favorites" },
  { id: 6, url: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=600&h=600&fit=crop", liked: false, folder: "Projects" },
  { id: 7, url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=600&fit=crop", liked: true, folder: null },
  { id: 8, url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&h=600&fit=crop", liked: false, folder: null },
  { id: 9, url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=600&fit=crop", liked: true, folder: "Favorites" },
  { id: 10, url: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&h=600&fit=crop", liked: false, folder: "Projects" },
  { id: 11, url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=600&fit=crop", liked: true, folder: null },
  { id: 12, url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=600&fit=crop", liked: false, folder: null },
];

const folders = [
  { name: "All Images", count: 12 },
  { name: "Favorites", count: 5 },
  { name: "Projects", count: 3 },
];

export const GenerationGallery = () => {
  const [gridSize, setGridSize] = useState<"small" | "large">("large");
  const [selectedFolder, setSelectedFolder] = useState("All Images");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex gap-6">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0 space-y-4">
        <Card className="p-4 bg-card/50 border-border/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-sm">Folders</h3>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <FolderPlus className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-1">
            {folders.map((folder) => (
              <button
                key={folder.name}
                onClick={() => setSelectedFolder(folder.name)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors",
                  selectedFolder === folder.name
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "hover:bg-muted/50 text-muted-foreground"
                )}
              >
                <span>{folder.name}</span>
                <span className="text-xs opacity-60">{folder.count}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-emerald-500/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400">156</div>
            <div className="text-xs text-muted-foreground mt-1">Total Images</div>
            <div className="text-xs text-muted-foreground">2.4 GB used</div>
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-4">
        {/* Toolbar */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search images..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/50 border-border/50"
            />
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <div className="flex items-center border border-border/50 rounded-lg p-1">
            <button
              onClick={() => setGridSize("large")}
              className={cn(
                "p-1.5 rounded",
                gridSize === "large" ? "bg-emerald-500/20 text-emerald-400" : "text-muted-foreground"
              )}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setGridSize("small")}
              className={cn(
                "p-1.5 rounded",
                gridSize === "small" ? "bg-emerald-500/20 text-emerald-400" : "text-muted-foreground"
              )}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={cn(
          "grid gap-4",
          gridSize === "large" ? "grid-cols-3" : "grid-cols-5"
        )}>
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative aspect-square rounded-xl overflow-hidden bg-card/50 border border-border/50"
            >
              <img 
                src={image.url} 
                alt="" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center justify-end gap-2">
                    <button className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                      <Heart className={cn("w-4 h-4", image.liked ? "fill-red-500 text-red-500" : "text-white")} />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                      <Download className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              {image.liked && (
                <div className="absolute top-2 right-2">
                  <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
