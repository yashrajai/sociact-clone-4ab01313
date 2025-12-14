import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Palette } from "lucide-react";

interface StyleSelectorProps {
  selected: string;
  onSelect: (style: string) => void;
}

const styles = [
  { 
    id: "cinematic", 
    name: "Cinematic", 
    preview: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=100&h=100&fit=crop",
    gradient: "from-amber-500 to-orange-500"
  },
  { 
    id: "anime", 
    name: "Anime", 
    preview: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=100&h=100&fit=crop",
    gradient: "from-pink-500 to-purple-500"
  },
  { 
    id: "photorealistic", 
    name: "Photorealistic", 
    preview: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop",
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    id: "digital-art", 
    name: "Digital Art", 
    preview: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop",
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    id: "oil-painting", 
    name: "Oil Painting", 
    preview: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=100&h=100&fit=crop",
    gradient: "from-amber-600 to-red-500"
  },
  { 
    id: "watercolor", 
    name: "Watercolor", 
    preview: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=100&h=100&fit=crop",
    gradient: "from-teal-500 to-emerald-500"
  },
  { 
    id: "3d-render", 
    name: "3D Render", 
    preview: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop",
    gradient: "from-violet-500 to-indigo-500"
  },
  { 
    id: "minimalist", 
    name: "Minimalist", 
    preview: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=100&h=100&fit=crop",
    gradient: "from-gray-500 to-slate-500"
  },
];

export const StyleSelector = ({ selected, onSelect }: StyleSelectorProps) => {
  return (
    <Card className="p-4 bg-card/50 border-border/50">
      <div className="flex items-center gap-2 mb-4">
        <Palette className="w-4 h-4 text-emerald-400" />
        <label className="text-sm font-medium">Style</label>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => onSelect(style.id)}
            className={cn(
              "group relative flex flex-col items-center p-2 rounded-xl border transition-all overflow-hidden",
              selected === style.id
                ? "border-emerald-500/50 ring-2 ring-emerald-500/20"
                : "border-border/50 hover:border-emerald-500/30"
            )}
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2">
              <img 
                src={style.preview} 
                alt={style.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity bg-gradient-to-br",
                style.gradient
              )} />
              {selected === style.id && (
                <div className="absolute inset-0 bg-emerald-500/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <span className="text-[10px] font-medium truncate w-full text-center">{style.name}</span>
          </button>
        ))}
      </div>
    </Card>
  );
};
