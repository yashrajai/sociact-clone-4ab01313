import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Download, 
  Heart, 
  MoreHorizontal, 
  Copy,
  Trash2,
  RefreshCw
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const historyItems = [
  {
    id: 1,
    prompt: "A mystical forest with glowing mushrooms and fireflies at twilight, fantasy art style",
    model: "Flux",
    timestamp: "2 hours ago",
    images: [
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=400&h=400&fit=crop",
    ],
    credits: 6,
    liked: true,
  },
  {
    id: 2,
    prompt: "Futuristic cyberpunk cityscape with neon lights and flying cars, rain-soaked streets",
    model: "Runway",
    timestamp: "5 hours ago",
    images: [
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=400&fit=crop",
    ],
    credits: 15,
    liked: false,
  },
  {
    id: 3,
    prompt: "Serene Japanese garden with cherry blossoms and koi pond, morning mist",
    model: "Ideogram",
    timestamp: "Yesterday",
    images: [
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=400&fit=crop",
    ],
    credits: 16,
    liked: true,
  },
];

export const GenerationHistory = () => {
  return (
    <div className="space-y-4">
      {/* Stats Bar */}
      <Card className="p-4 bg-card/50 border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div>
              <div className="text-2xl font-bold">47</div>
              <div className="text-xs text-muted-foreground">Total Generations</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-2xl font-bold">156</div>
              <div className="text-xs text-muted-foreground">Images Created</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-2xl font-bold text-emerald-400">423</div>
              <div className="text-xs text-muted-foreground">Credits Used</div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Clear History
          </Button>
        </div>
      </Card>

      {/* History Items */}
      <div className="space-y-4">
        {historyItems.map((item) => (
          <Card key={item.id} className="p-4 bg-card/50 border-border/50 hover:border-emerald-500/30 transition-colors">
            <div className="flex gap-4">
              {/* Image Preview */}
              <div className="flex-shrink-0">
                <div className="grid grid-cols-2 gap-1 w-24">
                  {item.images.slice(0, 4).map((img, idx) => (
                    <div key={idx} className="aspect-square rounded-lg overflow-hidden">
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm line-clamp-2">{item.prompt}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        {item.model}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {item.timestamp}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.images.length} images • {item.credits} credits
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Heart className={`w-4 h-4 ${item.liked ? "fill-red-500 text-red-500" : ""}`} />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Download className="w-4 h-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="gap-2">
                          <RefreshCw className="w-4 h-4" />
                          Regenerate
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 text-red-400">
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
