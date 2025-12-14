import { useState } from "react";
import { Card } from "@/components/ui/card";
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
  Loader2
} from "lucide-react";
import { ModelSelector } from "./ModelSelector";
import { AspectRatioSelector } from "./AspectRatioSelector";
import { StyleSelector } from "./StyleSelector";
import { AdvancedSettings } from "./AdvancedSettings";
import { toast } from "sonner";

export const GenerationStudio = () => {
  const [prompt, setPrompt] = useState("");
  const [referenceImage, setReferenceImage] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState("flux");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [selectedStyle, setSelectedStyle] = useState("cinematic");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);

  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }
    setIsGenerating(true);
    // Simulate generation
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
    flux: 3,
    runway: 5,
    ideogram: 4,
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* Left Panel - Controls */}
      <div className="lg:col-span-2 space-y-4">
        {/* AI Agent Status */}
        <Card className="p-4 bg-gradient-to-br from-emerald-500/10 via-card to-cyan-500/10 border-emerald-500/20">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-card animate-pulse" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm">AI Agent Active</div>
              <div className="text-xs text-muted-foreground">Ready to generate your vision</div>
            </div>
            <div className="flex items-center gap-1 text-emerald-400">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Online</span>
            </div>
          </div>
        </Card>

        {/* Model Selector */}
        <ModelSelector 
          selectedModel={selectedModel} 
          onSelectModel={setSelectedModel}
          credits={modelCredits}
        />

        {/* Prompt Input */}
        <Card className="p-4 bg-card/50 border-border/50">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Prompt
            </label>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleEnhancePrompt}
              className="text-xs text-emerald-400 hover:text-emerald-300 gap-1"
            >
              <Wand2 className="w-3 h-3" />
              Enhance with AI
            </Button>
          </div>
          <Textarea
            placeholder="Describe your image in detail... The more specific, the better the results."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[120px] bg-background/50 border-border/50 focus:border-emerald-500/50 resize-none"
          />
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-muted-foreground">{prompt.length} characters</span>
            <div className="flex gap-1">
              {["Portrait", "Landscape", "Abstract", "Product"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setPrompt(prompt + ` ${tag.toLowerCase()} style`)}
                  className="px-2 py-1 text-xs rounded-md bg-background/50 hover:bg-emerald-500/20 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Reference Image */}
        <Card className="p-4 bg-card/50 border-border/50">
          <label className="text-sm font-medium flex items-center gap-2 mb-3">
            <Upload className="w-4 h-4 text-emerald-400" />
            Reference Image
            <span className="text-xs text-muted-foreground">(Optional)</span>
          </label>
          
          {referenceImage ? (
            <div className="relative group">
              <img
                src={referenceImage}
                alt="Reference"
                className="w-full h-32 object-cover rounded-lg"
              />
              <button
                onClick={() => setReferenceImage(null)}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-black/60 text-xs">
                Reference loaded
              </div>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-border/50 rounded-lg cursor-pointer hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all">
              <Upload className="w-8 h-8 text-muted-foreground mb-2" />
              <span className="text-sm text-muted-foreground">Drop image or click to upload</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          )}
        </Card>

        {/* Aspect Ratio */}
        <AspectRatioSelector 
          selected={aspectRatio} 
          onSelect={setAspectRatio} 
        />

        {/* Style Selector */}
        <StyleSelector 
          selected={selectedStyle} 
          onSelect={setSelectedStyle} 
        />

        {/* Advanced Settings */}
        <AdvancedSettings />

        {/* Generate Button */}
        <Card className="p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-emerald-500/30">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm font-medium">Generation Cost</div>
              <div className="text-xs text-muted-foreground">Using {selectedModel.charAt(0).toUpperCase() + selectedModel.slice(1)}</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-emerald-400">{modelCredits[selectedModel]} credits</div>
              <div className="text-xs text-muted-foreground">per image</div>
            </div>
          </div>
          <Button
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
            className="w-full h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-medium text-lg gap-2"
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
                <ChevronRight className="w-5 h-5" />
              </>
            )}
          </Button>
        </Card>
      </div>

      {/* Right Panel - Preview */}
      <div className="lg:col-span-3">
        <Card className="h-full min-h-[600px] p-6 bg-card/30 border-border/50">
          {isGenerating ? (
            <div className="h-full flex flex-col items-center justify-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center animate-pulse">
                  <Brain className="w-12 h-12 text-emerald-400" />
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-emerald-500/30 animate-ping" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg font-medium">AI is creating your vision</h3>
                <p className="text-sm text-muted-foreground mt-1">This usually takes 10-30 seconds</p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          ) : generatedImages.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Generated Results</h3>
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
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-border/50 flex items-center justify-center mb-4">
                <Sparkles className="w-10 h-10 text-emerald-400/50" />
              </div>
              <h3 className="text-lg font-medium text-muted-foreground">Your creations will appear here</h3>
              <p className="text-sm text-muted-foreground/60 mt-1 max-w-xs">
                Enter a prompt, select your preferences, and click generate to create stunning images
              </p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};
