import { CheckCircle2, Instagram, Globe, TrendingUp } from "lucide-react";

export const ProfileSnapshot = () => {
  return (
    <div className="bg-secondary border border-border rounded-2xl p-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              YB
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-background">
              <CheckCircle2 className="w-3 h-3 text-white" />
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold font-display text-foreground">@yourbrand</h2>
              <Instagram className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">Your Brand Official</p>
          </div>
        </div>

        {/* Niche Tag */}
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-primary/15 text-primary text-sm font-medium rounded-full">
            E-commerce
          </span>
          <span className="px-3 py-1.5 bg-muted text-foreground text-sm font-medium rounded-full">
            Fitness Products
          </span>
        </div>

        {/* Key Stats */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Globe className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-xl font-bold font-display text-foreground">52.4K</p>
              <p className="text-xs text-foreground/80">Followers</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-xl font-bold font-display text-foreground">2.1M</p>
              <p className="text-xs text-foreground/80">Total Views</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold font-display text-foreground">4.8%</p>
              <p className="text-xs text-foreground/80">Engagement</p>
            </div>
          </div>
        </div>

        {/* Connection Status */}
        <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/15 rounded-lg">
          <Globe className="w-4 h-4 text-emerald-500" />
          <span className="text-sm font-medium text-emerald-500">Connected</span>
        </div>
      </div>
    </div>
  );
};
