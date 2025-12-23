import { CheckCircle2, Instagram, Globe, TrendingUp } from "lucide-react";

export const ProfileSnapshot = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 via-secondary/50 to-primary/5 backdrop-blur-sm border border-border/50 rounded-2xl p-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-lg">
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
          <span className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
            E-commerce
          </span>
          <span className="px-3 py-1.5 bg-secondary text-foreground text-sm font-medium rounded-full border border-border/50">
            Fitness Products
          </span>
        </div>

        {/* Key Stats */}
        <div className="flex items-center gap-6">
          <div className="text-center">
            <p className="text-xl font-bold font-display text-foreground">52.4K</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
          <div className="w-px h-10 bg-border/50" />
          <div className="text-center">
            <p className="text-xl font-bold font-display text-foreground">2.1M</p>
            <p className="text-xs text-muted-foreground">Total Views</p>
          </div>
          <div className="w-px h-10 bg-border/50" />
          <div className="text-center flex flex-col items-center">
            <div className="flex items-center gap-1">
              <p className="text-xl font-bold font-display text-foreground">4.8%</p>
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
            <p className="text-xs text-muted-foreground">Engagement</p>
          </div>
        </div>

        {/* Connection Status */}
        <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
          <Globe className="w-4 h-4 text-emerald-500" />
          <span className="text-sm font-medium text-emerald-500">Connected</span>
        </div>
      </div>
    </div>
  );
};
