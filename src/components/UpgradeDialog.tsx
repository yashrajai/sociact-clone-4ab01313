import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Infinity, Zap, Video, Box, Clock, Copy, Users, HardDrive, Download, Image, ChevronDown } from "lucide-react";

interface UpgradeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const plans = [
  {
    name: "Plus",
    tagline: "best for stock video",
    color: "text-blue-400",
    monthlyPrice: 28,
    yearlyPrice: 336,
    creditCost: 2.8,
    addOns: "1x Boost, 10 Credits",
    buttonText: "Get Plus",
    buttonVariant: "secondary" as const,
    features: [
      { icon: Zap, text: "10 Credits" },
      { icon: Video, text: "50 Video mins + 95 iStock" },
      { icon: Box, text: "2 UGC product asset ads" },
      { icon: Clock, text: "30 secs of generative video" },
      { icon: Copy, text: "2 express clones" },
      { icon: Users, text: "3 users, 100 GB storage" },
      { icon: Download, text: "Unlimited exports" },
      { icon: Image, text: "Image generations", badge: "365 UNLIMITED" },
      { icon: Infinity, text: "Nano Banana Pro", badge: "365 UNLIMITED" },
    ],
  },
  {
    name: "Max",
    tagline: "best for stock video",
    color: "text-blue-400",
    monthlyPrice: 50,
    yearlyPrice: 600,
    creditCost: 1.3,
    addOns: "1x Boost, 40 Credits",
    buttonText: "Get Max",
    buttonVariant: "secondary" as const,
    features: [
      { icon: Zap, text: "40 Credits" },
      { icon: Video, text: "200 Video mins + 320 iStock" },
      { icon: Box, text: "8 UGC product asset ads" },
      { icon: Clock, text: "120 secs of generative video" },
      { icon: Copy, text: "5 express clones" },
      { icon: Users, text: "3 users, 400 GB storage" },
      { icon: Download, text: "Unlimited exports" },
      { icon: Image, text: "Image generations", badge: "365 UNLIMITED" },
      { icon: Infinity, text: "Nano Banana Pro", badge: "365 UNLIMITED" },
    ],
  },
  {
    name: "Generative",
    tagline: "best for ads and films",
    color: "text-emerald-400",
    monthlyPrice: 100,
    yearlyPrice: 1200,
    creditCost: 1,
    addOns: "1x Boost, 100 Credits",
    buttonText: "Get Generative",
    buttonVariant: "default" as const,
    highlighted: true,
    features: [
      { icon: Zap, text: "100 Credits" },
      { icon: Video, text: "200 Video mins + 320 iStock" },
      { icon: Box, text: "5 generative UGC ads" },
      { icon: Clock, text: "300 secs of generative video" },
      { icon: Copy, text: "8 express clones" },
      { icon: Users, text: "3 users, 400 GB storage" },
      { icon: Download, text: "Unlimited exports" },
      { icon: Image, text: "Image generations", badge: "365 UNLIMITED" },
      { icon: Infinity, text: "Nano Banana Pro", badge: "365 UNLIMITED" },
    ],
  },
  {
    name: "Team",
    tagline: "best for teams",
    color: "text-blue-400",
    monthlyPrice: 899,
    yearlyPrice: 10788,
    creditCost: 0.9,
    addOns: "1 Seat, 1000 Credits",
    buttonText: "Get Team",
    buttonVariant: "secondary" as const,
    features: [
      { icon: Zap, text: "1000 Credits" },
      { icon: Video, text: "2000 Video mins + 3200 iStock" },
      { icon: Box, text: "50 generative UGC ads" },
      { icon: Clock, text: "50 mins of generative videos" },
      { icon: Copy, text: "40 express clones" },
      { icon: Users, text: "1 seat, 4 TB storage" },
      { icon: Download, text: "Unlimited exports" },
      { icon: Image, text: "Image generations", badge: "365 UNLIMITED" },
      { icon: Infinity, text: "Nano Banana Pro", badge: "365 UNLIMITED" },
    ],
  },
];

export const UpgradeDialog = ({ open, onOpenChange }: UpgradeDialogProps) => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl p-0 bg-background border-border overflow-hidden">
        <div className="p-6">
          {/* Header with toggle */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className={`text-sm ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-blue-500"
              />
              <span className={`text-sm ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Yearly</span>
              <span className="text-xs text-emerald-400 ml-1">Up to 20% OFF</span>
            </div>
            
            <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
              <Infinity className="w-4 h-4 text-foreground" />
              <span className="text-sm text-foreground">UNLIMITED images for 365 days on paid plans.</span>
            </div>
          </div>

          {/* Plans grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg border p-4 flex flex-col ${
                  plan.highlighted 
                    ? 'border-emerald-500/50 bg-emerald-500/5' 
                    : 'border-border bg-background'
                }`}
              >
                {/* Plan header */}
                <div className="mb-4">
                  <h3 className={`text-lg font-semibold ${plan.color}`}>{plan.name}</h3>
                  <p className="text-xs text-muted-foreground">{plan.tagline}</p>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">${plan.monthlyPrice}</span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  <p className="text-xs text-muted-foreground">${plan.creditCost} per credit</p>
                </div>

                {/* Add-ons dropdown */}
                <div className="mb-4">
                  <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg border border-border cursor-pointer hover:bg-secondary/50 transition-colors">
                    <div>
                      <p className="text-xs text-muted-foreground">{plan.name === "Team" ? "Team size" : "Add-ons"}</p>
                      <p className="text-sm text-foreground">{plan.addOns}</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full mb-2 ${
                    plan.highlighted 
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                >
                  {plan.buttonText}
                </Button>

                {/* Yearly billing note */}
                <p className="text-xs text-muted-foreground text-center mb-4">
                  * Billed ${plan.yearlyPrice} yearly
                </p>

                {/* Features list */}
                <div className="space-y-2 flex-1">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <feature.icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-xs text-foreground/80 flex-1">{feature.text}</span>
                      {feature.badge && (
                        <span className="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded">
                          {feature.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">* Generative features require credits</p>
            <button className="text-xs text-blue-400 hover:underline">Apply coupon</button>
            <p className="text-xs text-muted-foreground">
              * For enterprise plan, <a href="#" className="text-blue-400 hover:underline">contact us</a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
