import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Copy, 
  TrendingUp,
  Flame,
  Star,
  ArrowRight
} from "lucide-react";
import { toast } from "sonner";

const trendingPrompts = [
  {
    prompt: "Ethereal goddess emerging from cosmic nebula, flowing stardust hair, bioluminescent skin patterns, ultra-detailed 8K",
    category: "Fantasy",
    uses: "12.4K",
    trending: true,
  },
  {
    prompt: "Abandoned cyberpunk arcade, neon signs flickering in fog, rain-soaked streets reflecting pink and blue lights",
    category: "Cyberpunk",
    uses: "8.7K",
    trending: true,
  },
  {
    prompt: "Miniature world inside a crystal ball, tiny village with glowing windows, magical forest, tilt-shift photography",
    category: "Macro",
    uses: "6.2K",
    trending: false,
  },
  {
    prompt: "Ancient library floating in clouds, golden hour lighting, massive bookshelves reaching infinity, magical atmosphere",
    category: "Fantasy",
    uses: "5.8K",
    trending: false,
  },
];

const styleCategories = [
  { name: "Photorealistic", icon: "📷", count: 234 },
  { name: "Anime", icon: "🎨", count: 189 },
  { name: "Fantasy", icon: "✨", count: 156 },
  { name: "Cyberpunk", icon: "🌆", count: 143 },
  { name: "Abstract", icon: "🔮", count: 98 },
  { name: "Vintage", icon: "📜", count: 87 },
];

const promptModifiers = [
  "ultra high quality",
  "8k resolution",
  "cinematic lighting",
  "professional photography",
  "masterpiece",
  "award winning",
  "hyperdetailed",
  "trending on artstation",
];

export const PromptInspiration = () => {
  const copyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    toast.success("Prompt copied to clipboard");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Trending Prompts */}
      <div className="lg:col-span-2 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-400" />
            Trending Prompts
          </h3>
          <Button variant="ghost" size="sm" className="gap-2 text-emerald-400">
            View All
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-3">
          {trendingPrompts.map((item, idx) => (
            <Card 
              key={idx} 
              className="p-4 bg-card/50 border-border/50 hover:border-emerald-500/30 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                    {item.trending && (
                      <Badge className="text-xs bg-orange-500/20 text-orange-400 gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {item.uses} uses
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.prompt}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyPrompt(item.prompt)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* AI Prompt Generator */}
        <Card className="p-6 bg-gradient-to-br from-emerald-500/10 via-card to-cyan-500/10 border-emerald-500/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-medium">AI Prompt Generator</h3>
              <p className="text-xs text-muted-foreground">Let AI create the perfect prompt for you</p>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white">
            Generate Prompt with AI
          </Button>
        </Card>
      </div>

      {/* Sidebar */}
      <div className="space-y-4">
        {/* Categories */}
        <Card className="p-4 bg-card/50 border-border/50">
          <h3 className="text-sm font-medium mb-4">Browse by Style</h3>
          <div className="space-y-2">
            {styleCategories.map((category) => (
              <button
                key={category.name}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-emerald-500/10 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span>{category.icon}</span>
                  <span className="text-sm">{category.name}</span>
                </span>
                <span className="text-xs text-muted-foreground">{category.count}</span>
              </button>
            ))}
          </div>
        </Card>

        {/* Quick Modifiers */}
        <Card className="p-4 bg-card/50 border-border/50">
          <h3 className="text-sm font-medium mb-4">Quick Modifiers</h3>
          <p className="text-xs text-muted-foreground mb-3">Click to copy and add to your prompt</p>
          <div className="flex flex-wrap gap-2">
            {promptModifiers.map((modifier) => (
              <button
                key={modifier}
                onClick={() => {
                  navigator.clipboard.writeText(modifier);
                  toast.success(`"${modifier}" copied`);
                }}
                className="px-2 py-1 text-xs rounded-md bg-background/50 hover:bg-emerald-500/20 text-muted-foreground hover:text-foreground transition-colors border border-border/50"
              >
                {modifier}
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
