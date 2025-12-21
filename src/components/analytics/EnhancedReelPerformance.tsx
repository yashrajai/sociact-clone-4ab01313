import { useState } from "react";
import { 
  Play, Eye, Heart, MessageCircle, Share2, Bookmark, TrendingUp, TrendingDown, 
  Clock, Users, Filter, Trophy, CheckCircle2, Sparkles, ArrowRight
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { cn } from "@/lib/utils";

const topPerformer = {
  title: "Product Demo - Holiday Special",
  postedAt: "18 hours ago (Yesterday, 2:45 PM)",
  views: "94,234",
  likes: "11,872",
  comments: "1,047",
  shares: "3,421",
  saves: "2,234",
  engagement: "12.6%",
  whyItWorked: [
    "Product shown at 2 seconds (AI recommendation applied)",
    "Question CTA drove 1,047 comments (AI-generated)",
    "Trending audio boosted reach 3.2x (AI-selected)",
    "Posted at optimal time 2:45 PM (AI-optimized)",
  ],
  viralIndicator: "89% likely to go viral (150-200K forecast)",
  aiAction: "Creating 3 similar videos this week",
};

const reels = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=400&fit=crop",
    title: "AI-powered content creation tips",
    duration: "0:45",
    views: "2.4M",
    likes: "189K",
    comments: "12.4K",
    shares: "45.2K",
    saves: "78.3K",
    engagement: "12.8%",
    trend: "up",
    postedAt: "2 days ago",
    watchTime: "32s avg",
    completion: 71,
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=400&fit=crop",
    title: "Behind the scenes of viral video",
    duration: "1:12",
    views: "1.8M",
    likes: "145K",
    comments: "8.9K",
    shares: "32.1K",
    saves: "56.7K",
    engagement: "10.2%",
    trend: "up",
    postedAt: "5 days ago",
    watchTime: "48s avg",
    completion: 67,
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=400&fit=crop",
    title: "Tech tutorial walkthrough",
    duration: "2:30",
    views: "892K",
    likes: "67K",
    comments: "4.2K",
    shares: "12.8K",
    saves: "34.5K",
    engagement: "6.5%",
    trend: "down",
    postedAt: "1 week ago",
    watchTime: "1m 12s avg",
    completion: 48,
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=300&h=400&fit=crop",
    title: "Quick tips for engagement",
    duration: "0:28",
    views: "3.1M",
    likes: "256K",
    comments: "18.7K",
    shares: "67.4K",
    saves: "92.1K",
    engagement: "15.4%",
    trend: "up",
    postedAt: "3 days ago",
    watchTime: "24s avg",
    completion: 86,
  },
];

const audienceData = [
  { name: "18-24", value: 35, color: "#22c55e" },
  { name: "25-34", value: 40, color: "#8b5cf6" },
  { name: "35-44", value: 15, color: "#ec4899" },
  { name: "45+", value: 10, color: "#f59e0b" },
];

const peakHoursData = [
  { hour: "6am", views: 1200 },
  { hour: "9am", views: 3400 },
  { hour: "12pm", views: 5600 },
  { hour: "3pm", views: 4200 },
  { hour: "6pm", views: 7800 },
  { hour: "9pm", views: 9200 },
  { hour: "12am", views: 4500 },
];

const geographyData = [
  { country: "United States", percentage: 42, flag: "🇺🇸" },
  { country: "United Kingdom", percentage: 18, flag: "🇬🇧" },
  { country: "Canada", percentage: 12, flag: "🇨🇦" },
  { country: "Australia", percentage: 8, flag: "🇦🇺" },
  { country: "Germany", percentage: 6, flag: "🇩🇪" },
  { country: "Others", percentage: 14, flag: "🌍" },
];

export const EnhancedReelPerformance = () => {
  const [selectedReel, setSelectedReel] = useState(reels[0]);

  return (
    <div className="space-y-6">
      {/* Top Performer This Week */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 border border-amber-500/20 rounded-2xl p-6">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/25">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-foreground">TOP PERFORMER THIS WEEK</h3>
              <p className="text-sm text-muted-foreground">"{topPerformer.title}" • Posted {topPerformer.postedAt}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4 text-sm">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4 text-muted-foreground" />
              <span className="font-bold text-foreground">{topPerformer.views}</span> views
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-4 h-4 text-muted-foreground" />
              <span className="font-bold text-foreground">{topPerformer.likes}</span> likes
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4 text-muted-foreground" />
              <span className="font-bold text-foreground">{topPerformer.comments}</span> comments
            </span>
            <span className="flex items-center gap-1">
              <Share2 className="w-4 h-4 text-muted-foreground" />
              <span className="font-bold text-foreground">{topPerformer.shares}</span> shares
            </span>
            <span className="flex items-center gap-1">
              <Bookmark className="w-4 h-4 text-muted-foreground" />
              <span className="font-bold text-foreground">{topPerformer.saves}</span> saves
            </span>
            <span className="text-emerald-400 font-bold">📊 Engagement: {topPerformer.engagement} (🟢 Above avg)</span>
          </div>

          <div className="bg-background/50 rounded-xl p-4 mb-4">
            <p className="text-sm font-semibold text-foreground mb-3">✅ WHY IT WORKED:</p>
            <ul className="space-y-1">
              {topPerformer.whyItWorked.map((reason, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1 text-amber-400">
                <Sparkles className="w-4 h-4" />
                🔥 Viral Indicator: {topPerformer.viralIndicator}
              </span>
              <span className="text-primary">🤖 AI Action: {topPerformer.aiAction}</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
                View Full Analytics
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Generate Similar Content
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold font-display text-foreground">Recent Content Grid</h3>
            <p className="text-sm text-muted-foreground">Detailed analytics for each piece of content</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reels.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setSelectedReel(reel)}
              className={cn(
                "relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 group",
                selectedReel.id === reel.id 
                  ? "ring-2 ring-primary shadow-lg shadow-primary/25" 
                  : "hover:ring-2 hover:ring-border"
              )}
            >
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full aspect-[3/4] object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Duration badge */}
              <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md text-xs text-white font-medium">
                {reel.duration}
              </div>
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-5 h-5 text-white fill-white" />
                </div>
              </div>
              
              {/* Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-sm font-medium truncate mb-2">{reel.title}</p>
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {reel.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" /> {reel.likes}
                  </span>
                </div>
              </div>
              
              {/* Trend indicator */}
              <div className={cn(
                "absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center",
                reel.trend === "up" ? "bg-emerald-500/80" : "bg-rose-500/80"
              )}>
                {reel.trend === "up" ? (
                  <TrendingUp className="w-3 h-3 text-white" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-white" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Reel Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Metrics */}
        <div className="lg:col-span-2 bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold font-display text-foreground mb-4">
            "{selectedReel.title}" Performance
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {[
              { icon: Eye, label: "Views", value: selectedReel.views },
              { icon: Heart, label: "Likes", value: selectedReel.likes },
              { icon: MessageCircle, label: "Comments", value: selectedReel.comments },
              { icon: Share2, label: "Shares", value: selectedReel.shares },
              { icon: Bookmark, label: "Saves", value: selectedReel.saves },
              { icon: Users, label: "Engagement", value: selectedReel.engagement },
            ].map((metric) => (
              <div key={metric.label} className="bg-secondary/50 rounded-xl p-3 text-center">
                <metric.icon className="w-4 h-4 text-muted-foreground mx-auto mb-2" />
                <p className="text-lg font-bold text-foreground">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
          
          {/* Watch time and completion */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary/50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Avg Watch Time</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{selectedReel.watchTime}</p>
              <p className="text-xs text-muted-foreground mt-1">Duration: {selectedReel.duration}</p>
            </div>
            
            <div className="bg-secondary/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Completion Rate</span>
                <span className="text-lg font-bold text-primary">{selectedReel.completion}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${selectedReel.completion}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">Posted {selectedReel.postedAt}</p>
            </div>
          </div>
        </div>

        {/* Audience Demographics */}
        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold font-display text-foreground mb-4">Audience Age</h3>
          
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={audienceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {audienceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #333',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mt-4">
            {audienceData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-muted-foreground">{item.name}</span>
                <span className="text-xs font-medium text-foreground ml-auto">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Peak Hours & Geography */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold font-display text-foreground mb-2">Peak Viewing Hours</h3>
          <p className="text-sm text-muted-foreground mb-6">Best times to post for your audience</p>
          
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={peakHoursData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="hour" stroke="#666" fontSize={10} />
                <YAxis stroke="#666" fontSize={10} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #333',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }} 
                />
                <Bar dataKey="views" fill="#22c55e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold font-display text-foreground mb-2">Audience Geography</h3>
          <p className="text-sm text-muted-foreground mb-6">Where your viewers are located</p>
          
          <div className="space-y-3">
            {geographyData.map((item) => (
              <div key={item.country} className="flex items-center gap-3">
                <span className="text-lg">{item.flag}</span>
                <span className="text-sm text-foreground flex-1">{item.country}</span>
                <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-foreground w-10 text-right">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
