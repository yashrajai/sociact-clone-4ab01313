import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, History, Folder, Lightbulb } from "lucide-react";
import { GenerationStudio } from "./GenerationStudio";
import { GenerationHistory } from "./GenerationHistory";
import { GenerationGallery } from "./GenerationGallery";
import { PromptInspiration } from "./PromptInspiration";

export const ImageGeneration = () => {
  const [activeTab, setActiveTab] = useState("studio");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
            Image Generation
          </h1>
          <p className="text-muted-foreground mt-1">
            Create stunning visuals with AI-powered generation
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30">
            <span className="text-sm text-muted-foreground">Credits Available</span>
            <span className="ml-2 text-lg font-bold text-emerald-400">2,450</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-card/50 border border-border/50 p-1 rounded-xl">
          <TabsTrigger
            value="studio"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500/20 data-[state=active]:to-cyan-500/20 data-[state=active]:border-emerald-500/30 rounded-lg px-4 py-2 gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Generation Studio
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500/20 data-[state=active]:to-cyan-500/20 data-[state=active]:border-emerald-500/30 rounded-lg px-4 py-2 gap-2"
          >
            <History className="w-4 h-4" />
            History
          </TabsTrigger>
          <TabsTrigger
            value="gallery"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500/20 data-[state=active]:to-cyan-500/20 data-[state=active]:border-emerald-500/30 rounded-lg px-4 py-2 gap-2"
          >
            <Folder className="w-4 h-4" />
            My Gallery
          </TabsTrigger>
          <TabsTrigger
            value="inspiration"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500/20 data-[state=active]:to-cyan-500/20 data-[state=active]:border-emerald-500/30 rounded-lg px-4 py-2 gap-2"
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
