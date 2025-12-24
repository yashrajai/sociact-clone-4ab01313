import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Sparkles, 
  Wand2, 
  Upload, 
  X, 
  Zap, 
  Brain,
  RefreshCw,
  Download,
  Heart,
  Share2,
  Maximize2,
  ChevronRight,
  Loader2,
  RatioIcon
} from "lucide-react";
import { ModelSelector } from "./ModelSelector";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const ratios = [
  { id: "1:1", label: "Square", width: 40, height: 40 },
  { id: "16:9", label: "Wide", width: 48, height: 27 },
  { id: "9:16", label: "Tall", width: 27, height: 48 },
  { id: "4:3", label: "Standard", width: 44, height: 33 },
];

export const GenerationStudio = () => {
  const [prompt, setPrompt] = useState("");
  const [referenceImage, setReferenceImage] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState("runway");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);

  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedImages([
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=800&fit=crop",
      ]);
      setIsGenerating(false);
      toast.success("Generation complete!");
    }, 3000);
  };

  const handleEnhancePrompt = () => {
    const enhanced = `${prompt}, ultra high quality, 8k resolution, professional lighting, cinematic composition, masterpiece`;
    setPrompt(enhanced);
    toast.success("Prompt enhanced with AI");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setReferenceImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const modelCredits: Record<string, number> = {
    seedreme: 2,
    nanobanana: 1,
    runway: 5,
    ideogram: 4,
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* Left Panel - Controls */}
      <div className="lg:col-span-2 space-y-4">
        {/* AI Agent Status */}
        <div className="bg-secondary/40 border border-border/50 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-secondary" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm text-foreground">AI Agent Active</div>
              <div className="text-xs text-muted-foreground">Ready to generate your vision</div>
            </div>
            <div className="flex items-center gap-1.5 text-primary">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Online</span>
            </div>
          </div>
        </div>

        {/* Model Selector */}
        <ModelSelector 
          selectedModel={selectedModel} 
          onSelectModel={setSelectedModel}
          credits={modelCredits}
        />

        {/* Prompt Input */}
        <div className="bg-secondary/40 border border-border/50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium flex items-center gap-2 text-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              Prompt
            </label>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleEnhancePrompt}
              className="text-xs text-primary hover:text-primary/80 gap-1 h-auto py-1 px-2"
            >
              <Wand2 className="w-3 h-3" />
              Enhance with AI
            </Button>
          </div>
          <Textarea
            placeholder="Describe your image in detail. The more specific, the better the results."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[100px] bg-background/50 border-border/30 focus:border-primary/50 resize-none text-sm"
          />
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-muted-foreground">{prompt.length} characters</span>
            <div className="flex gap-1.5">
              {["Portrait", "Landscape", "Abstract", "Product"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setPrompt(prompt + ` ${tag.toLowerCase()} style`)}
                  className="px-2 py-1 text-xs rounded-md text-muted-foreground hover:text-foreground hover:bg-background/50 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reference Image */}
        <div className="bg-secondary/40 border border-border/50 rounded-xl p-4">
          <label className="text-sm font-medium flex items-center gap-2 mb-3 text-foreground">
            <Upload className="w-4 h-4 text-primary" />
            Reference Image
            <span className="text-xs text-muted-foreground font-normal">(Optional)</span>
          </label>
          
          {referenceImage ? (
            <div className="relative group">
              <img
                src={referenceImage}
                alt="Reference"
                className="w-full h-28 object-cover rounded-lg"
              />
              <button
                onClick={() => setReferenceImage(null)}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center h-28 border-2 border-dashed border-border/30 rounded-lg cursor-pointer hover:border-primary/30 hover:bg-primary/5 transition-all">
              <Upload className="w-6 h-6 text-muted-foreground mb-2" />
              <span className="text-sm text-muted-foreground">Drop image or click to upload</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          )}
        </div>

        {/* Aspect Ratio */}
        <div className="bg-secondary/40 border border-border/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <RatioIcon className="w-4 h-4 text-primary" />
            <label className="text-sm font-medium text-foreground">Aspect Ratio</label>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {ratios.map((ratio) => (
              <button
                key={ratio.id}
                onClick={() => setAspectRatio(ratio.id)}
                className={cn(
                  "flex flex-col items-center p-3 rounded-xl border transition-all",
                  aspectRatio === ratio.id
                    ? "bg-primary/10 border-primary/50"
                    : "bg-background/30 border-border/30 hover:border-primary/30"
                )}
              >
                <div 
                  className={cn(
                    "rounded border-2 mb-2 transition-colors",
                    aspectRatio === ratio.id ? "border-primary" : "border-muted-foreground/30"
                  )}
                  style={{ 
                    width: ratio.width * 0.5, 
                    height: ratio.height * 0.5 
                  }}
                />
                <span className="text-xs text-muted-foreground">{ratio.id}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <Button
          onClick={handleGenerate}
          disabled={isGenerating || !prompt.trim()}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base gap-2"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Generate Images
              <span className="ml-2 text-sm opacity-80">({modelCredits[selectedModel]} credits)</span>
            </>
          )}
        </Button>
      </div>

      {/* Right Panel - Preview */}
      <div className="lg:col-span-3">
        <div className="h-full min-h-[600px] bg-secondary/20 border border-border/30 rounded-xl p-6">
          {isGenerating ? (
            <div className="h-full flex flex-col items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center animate-pulse">
                  <Brain className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-ping" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg font-medium text-foreground">AI is creating your vision</h3>
                <p className="text-sm text-muted-foreground mt-1">This usually takes 10-30 seconds</p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          ) : generatedImages.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-foreground">Generated Results</h3>
                <Button variant="outline" size="sm" onClick={() => setGeneratedImages([])} className="gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Clear
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {generatedImages.map((img, idx) => (
                  <div key={idx} className="group relative rounded-xl overflow-hidden aspect-square">
                    <img src={img} alt={`Generated ${idx + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-white">Image {idx + 1}</span>
                          <div className="flex items-center gap-2">
                            <button className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                              <Heart className="w-4 h-4 text-white" />
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-primary/50" />
              </div>
              <h3 className="text-base font-medium text-muted-foreground">Your creations will appear here</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
