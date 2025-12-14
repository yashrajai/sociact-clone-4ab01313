import { useState } from "react";
import { 
  FileText, 
  Plus, 
  Search, 
  Sparkles,
  Copy,
  Edit3,
  Trash2,
  Star,
  MessageSquare,
  Send,
  Folder
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const templates = [
  {
    id: 1,
    name: "Welcome Message",
    category: "DM",
    content: "Hey {username}! 👋 Thanks for following! We're thrilled to have you in our community. Check out our latest posts and feel free to DM us anytime!",
    uses: 2156,
    starred: true,
  },
  {
    id: 2,
    name: "Thank You Reply",
    category: "Comment",
    content: "Thank you so much for your kind words, {username}! 💜 We really appreciate your support. It means the world to us!",
    uses: 4521,
    starred: true,
  },
  {
    id: 3,
    name: "Product Inquiry",
    category: "DM",
    content: "Thanks for your interest! 🛍️ You can find all our products here: {link}. Let me know if you have any questions - happy to help!",
    uses: 1876,
    starred: false,
  },
  {
    id: 4,
    name: "Question Response",
    category: "Comment",
    content: "Great question! 🤔 Check out our FAQ: {link} or DM us for more personalized help!",
    uses: 2341,
    starred: true,
  },
  {
    id: 5,
    name: "Collaboration Request",
    category: "DM",
    content: "Hey {username}! Thanks for reaching out about collaboration! 🤝 We'd love to learn more. Could you tell us about your audience and content style?",
    uses: 567,
    starred: false,
  },
  {
    id: 6,
    name: "Story Reaction",
    category: "DM",
    content: "Thanks for the story reaction! 💕 We love connecting with our community. What did you think of it?",
    uses: 3421,
    starred: true,
  },
  {
    id: 7,
    name: "Contest Entry",
    category: "Comment",
    content: "You're entered! 🎉 Good luck, {username}! Winners will be announced on {date}. Make sure you're following so you don't miss it!",
    uses: 892,
    starred: false,
  },
  {
    id: 8,
    name: "Support Request",
    category: "DM",
    content: "We're sorry to hear you're having trouble! 😔 Our support team will look into this right away. Can you share more details about the issue?",
    uses: 456,
    starred: false,
  },
];

const categories = [
  { id: "all", label: "All Templates", icon: Folder },
  { id: "dm", label: "DM Templates", icon: Send },
  { id: "comment", label: "Comment Templates", icon: MessageSquare },
  { id: "starred", label: "Starred", icon: Star },
];

export const TemplateManager = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showNewTemplate, setShowNewTemplate] = useState(false);
  const [newTemplateName, setNewTemplateName] = useState("");
  const [newTemplateContent, setNewTemplateContent] = useState("");
  const [newTemplateCategory, setNewTemplateCategory] = useState("DM");

  const handleCopyTemplate = (content: string) => {
    navigator.clipboard.writeText(content);
    toast({
      title: "Copied!",
      description: "Template copied to clipboard.",
    });
  };

  const handleCreateTemplate = () => {
    toast({
      title: "Template Created",
      description: "Your new template has been saved.",
    });
    setShowNewTemplate(false);
    setNewTemplateName("");
    setNewTemplateContent("");
  };

  const handleGenerateWithAI = () => {
    setNewTemplateContent("Hey {username}! 🌟 Thanks for being part of our amazing community. We noticed you've been super engaged lately, and we wanted to say thank you! Here's a special 15% discount just for you: CODE15. Keep being awesome! 💜");
    toast({
      title: "AI Generated!",
      description: "Template generated based on your context.",
    });
  };

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" ||
                           (activeCategory === "starred" && template.starred) ||
                           template.category.toLowerCase() === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-secondary/50 border border-border/50 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <button 
          onClick={() => setShowNewTemplate(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
        >
          <Plus className="w-4 h-4" />
          New Template
        </button>
      </div>

      {/* Categories */}
      <div className="flex items-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all",
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/50 text-muted-foreground hover:text-foreground"
            )}
          >
            <cat.icon className="w-4 h-4" />
            {cat.label}
          </button>
        ))}
      </div>

      {/* New Template Form */}
      {showNewTemplate && (
        <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold font-display text-foreground">Create New Template</h3>
            <button 
              onClick={() => setShowNewTemplate(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Template Name</label>
              <input
                type="text"
                placeholder="e.g., Special Offer Response"
                value={newTemplateName}
                onChange={(e) => setNewTemplateName(e.target.value)}
                className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Category</label>
              <select 
                value={newTemplateCategory}
                onChange={(e) => setNewTemplateCategory(e.target.value)}
                className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="DM">DM Template</option>
                <option value="Comment">Comment Template</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">Content</label>
              <button 
                onClick={handleGenerateWithAI}
                className="flex items-center gap-1.5 text-xs text-primary hover:underline"
              >
                <Sparkles className="w-3 h-3" />
                Generate with AI
              </button>
            </div>
            <textarea
              placeholder="Write your template message..."
              rows={4}
              value={newTemplateContent}
              onChange={(e) => setNewTemplateContent(e.target.value)}
              className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground">Variables:</span>
              {["{username}", "{first_name}", "{link}", "{date}", "{code}"].map((v) => (
                <button
                  key={v}
                  onClick={() => setNewTemplateContent(prev => prev + " " + v)}
                  className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/50">
            <button 
              onClick={() => setShowNewTemplate(false)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleCreateTemplate}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <FileText className="w-4 h-4" />
              Save Template
            </button>
          </div>
        </div>
      )}

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-5 hover:border-primary/30 transition-all group"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center",
                  template.category === "DM" ? "bg-violet-500/10" : "bg-pink-500/10"
                )}>
                  {template.category === "DM" ? (
                    <Send className="w-5 h-5 text-violet-400" />
                  ) : (
                    <MessageSquare className="w-5 h-5 text-pink-400" />
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{template.name}</h4>
                  <p className="text-xs text-muted-foreground">{template.uses.toLocaleString()} uses</p>
                </div>
              </div>
              <button className={cn(
                "p-1.5 rounded-lg transition-colors",
                template.starred ? "text-amber-400" : "text-muted-foreground hover:text-amber-400"
              )}>
                <Star className={cn("w-4 h-4", template.starred && "fill-amber-400")} />
              </button>
            </div>

            <div className="p-3 bg-secondary/50 rounded-lg mb-4">
              <p className="text-sm text-foreground line-clamp-3">{template.content}</p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border/50">
              <span className={cn(
                "text-xs px-2 py-1 rounded-full",
                template.category === "DM" 
                  ? "bg-violet-500/10 text-violet-400" 
                  : "bg-pink-500/10 text-pink-400"
              )}>
                {template.category}
              </span>
              
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => handleCopyTemplate(template.content)}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <Copy className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Edit3 className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4 text-rose-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
