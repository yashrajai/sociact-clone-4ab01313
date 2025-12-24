import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Sparkles, History, Folder, Lightbulb, Minus, Plus } from "lucide-react";
import { GenerationStudio } from "./GenerationStudio";
import { GenerationHistory } from "./GenerationHistory";
import { GenerationGallery } from "./GenerationGallery";
import { PromptInspiration } from "./PromptInspiration";

export const ImageGeneration = () => {
  const [activeTab, setActiveTab] = useState("studio");
  const [zoom, setZoom] = useState(80);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Image Generation
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Create stunning visuals with AI-powered generation
          </p>
        </div>
        <div className="flex items-center gap-4">
          {/* Zoom Controls */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/50 rounded-lg border border-border/30">
            <span className="text-sm text-muted-foreground">{zoom}%</span>
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setZoom(Math.max(50, zoom - 10))}>
              <Minus className="w-3 h-3" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setZoom(Math.min(150, zoom + 10))}>
              <Plus className="w-3 h-3" />
            </Button>
            <Button variant="secondary" size="sm" className="h-6 text-xs px-2" onClick={() => setZoom(80)}>
              Reset
            </Button>
          </div>
          {/* Credits */}
          <div className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/30">
            <span className="text-sm text-muted-foreground">Credits Available</span>
            <span className="ml-2 text-lg font-bold text-primary">2,480</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-5">
        <TabsList className="bg-secondary/30 border border-border/30 p-1 rounded-xl h-auto">
          <TabsTrigger
            value="studio"
            className="data-[state=active]:bg-secondary data-[state=active]:text-foreground rounded-lg px-4 py-2 gap-2 text-sm"
          >
            <Sparkles className="w-4 h-4" />
            Generation Studio
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="data-[state=active]:bg-secondary data-[state=active]:text-foreground rounded-lg px-4 py-2 gap-2 text-sm"
          >
            <History className="w-4 h-4" />
            History
          </TabsTrigger>
          <TabsTrigger
            value="gallery"
            className="data-[state=active]:bg-secondary data-[state=active]:text-foreground rounded-lg px-4 py-2 gap-2 text-sm"
          >
            <Folder className="w-4 h-4" />
            My Gallery
          </TabsTrigger>
          <TabsTrigger
            value="inspiration"
            className="data-[state=active]:bg-secondary data-[state=active]:text-foreground rounded-lg px-4 py-2 gap-2 text-sm"
          >
            <Lightbulb className="w-4 h-4" />
            Inspiration
          </TabsTrigger>
        </TabsList>

        <TabsContent value="studio" className="mt-0">
          <GenerationStudio />
        </TabsContent>
        <TabsContent value="history" className="mt-0">
          <GenerationHistory />
        </TabsContent>
        <TabsContent value="gallery" className="mt-0">
          <GenerationGallery />
        </TabsContent>
        <TabsContent value="inspiration" className="mt-0">
          <PromptInspiration />
        </TabsContent>
      </Tabs>
    </div>
  );
};
