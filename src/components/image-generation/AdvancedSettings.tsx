import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { ChevronDown, Settings2, Dice5, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const AdvancedSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cfg, setCfg] = useState([7.5]);
  const [steps, setSteps] = useState([30]);
  const [seed, setSeed] = useState("");
  const [hiresFix, setHiresFix] = useState(false);
  const [tiling, setTiling] = useState(false);

  const generateRandomSeed = () => {
    setSeed(Math.floor(Math.random() * 2147483647).toString());
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="bg-card/50 border-border/50 overflow-hidden">
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-muted/20 transition-colors">
          <div className="flex items-center gap-2">
            <Settings2 className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium">Advanced Settings</span>
          </div>
          <ChevronDown className={cn(
            "w-4 h-4 text-muted-foreground transition-transform",
            isOpen && "rotate-180"
          )} />
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <div className="px-4 pb-4 space-y-4 border-t border-border/50 pt-4">
            {/* CFG Scale */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-muted-foreground">CFG Scale</label>
                <span className="text-xs font-mono bg-muted/50 px-2 py-0.5 rounded">{cfg[0]}</span>
              </div>
              <Slider
                value={cfg}
                onValueChange={setCfg}
                min={1}
                max={20}
                step={0.5}
                className="[&_[role=slider]]:bg-emerald-500"
              />
              <p className="text-[10px] text-muted-foreground">
                Higher values = more prompt adherence, lower = more creativity
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-muted-foreground">Sampling Steps</label>
                <span className="text-xs font-mono bg-muted/50 px-2 py-0.5 rounded">{steps[0]}</span>
              </div>
              <Slider
                value={steps}
                onValueChange={setSteps}
                min={10}
                max={50}
                step={1}
                className="[&_[role=slider]]:bg-emerald-500"
              />
              <p className="text-[10px] text-muted-foreground">
                More steps = higher quality but slower generation
              </p>
            </div>

            {/* Seed */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Seed</label>
              <div className="flex gap-2">
                <Input
                  value={seed}
                  onChange={(e) => setSeed(e.target.value)}
                  placeholder="Random"
                  className="h-8 text-xs bg-background/50"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={generateRandomSeed}
                  className="h-8 px-2"
                >
                  <Dice5 className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSeed("")}
                  className="h-8 px-2"
                >
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-[10px] text-muted-foreground">
                Use same seed to reproduce results
              </p>
            </div>

            {/* Toggles */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-xs font-medium">Hi-Res Fix</label>
                  <p className="text-[10px] text-muted-foreground">Improve details at high resolution</p>
                </div>
                <Switch 
                  checked={hiresFix} 
                  onCheckedChange={setHiresFix}
                  className="data-[state=checked]:bg-emerald-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-xs font-medium">Seamless Tiling</label>
                  <p className="text-[10px] text-muted-foreground">Create tileable patterns</p>
                </div>
                <Switch 
                  checked={tiling} 
                  onCheckedChange={setTiling}
                  className="data-[state=checked]:bg-emerald-500"
                />
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};
