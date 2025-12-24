import { useState } from "react";
import { 
  ChevronDown,
  ArrowLeft,
  Sparkles,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { PhonePreview } from "./PhonePreview";

interface CommentAutomationWizardProps {
  onClose: () => void;
}

const templates = [
  { id: "reply", label: "Reply to Comment", description: "Auto-respond to specific comments" },
  { id: "dm", label: "Send DM on Comment", description: "Send a DM when someone comments" },
  { id: "like", label: "Like Comment", description: "Automatically like matching comments" },
];

const mockPosts = [
  { id: "1", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop" },
  { id: "2", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=100&h=100&fit=crop" },
  { id: "3", image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=100&h=100&fit=crop" },
  { id: "4", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=100&h=100&fit=crop" },
  { id: "5", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=100&h=100&fit=crop" },
  { id: "6", image: "https://images.unsplash.com/photo-1611162618479-ee3d24aaef0b?w=100&h=100&fit=crop" },
];

const suggestedKeywords = ["Price", "Link", "Shop", "Buy", "Info", "Details"];

const quickReplies = [
  "Thanks for commenting! Check the link in bio 🔗",
  "We appreciate your support! 💜",
  "DM us for more details! 📩",
];

export const CommentAutomationWizard = ({ onClose }: CommentAutomationWizardProps) => {
  const { toast } = useToast();
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [showTemplateDropdown, setShowTemplateDropdown] = useState(false);
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [keywords, setKeywords] = useState("");
  const [reply, setReply] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const handleKeywordClick = (keyword: string) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter(k => k !== keyword));
    } else {
      setSelectedKeywords([...selectedKeywords, keyword]);
    }
    
    // Update the input field
    const newKeywords = selectedKeywords.includes(keyword)
      ? selectedKeywords.filter(k => k !== keyword)
      : [...selectedKeywords, keyword];
    setKeywords(newKeywords.join(", "));
  };

  const handleQuickReply = (text: string) => {
    setReply(text);
  };

  const handleSave = () => {
    toast({
      title: "Automation Created",
      description: "Your comment automation rule has been saved successfully.",
    });
    onClose();
  };

  return (
    <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-muted-foreground" />
          </button>
          <h2 className="text-lg font-semibold text-foreground">Create Comment Automation</h2>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Panel - Form Controls */}
        <div className="flex-1 p-6 space-y-6 lg:border-r border-border/50">
          {/* Step Indicator */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Step 1 of 1</span>
              <span className="text-emerald-400">100%</span>
            </div>
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
            </div>
          </div>

          {/* Template Selector */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Template</label>
            <div className="relative">
              <button
                onClick={() => setShowTemplateDropdown(!showTemplateDropdown)}
                className="w-full flex items-center justify-between px-4 py-3 bg-background border border-border rounded-xl text-left hover:border-primary/50 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{selectedTemplate.label}</p>
                  <p className="text-xs text-muted-foreground">{selectedTemplate.description}</p>
                </div>
                <ChevronDown className={cn(
                  "w-5 h-5 text-muted-foreground transition-transform",
                  showTemplateDropdown && "rotate-180"
                )} />
              </button>
              
              {showTemplateDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-xl overflow-hidden z-10 shadow-lg">
                  {templates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => {
                        setSelectedTemplate(template);
                        setShowTemplateDropdown(false);
                      }}
                      className={cn(
                        "w-full px-4 py-3 text-left hover:bg-secondary/50 transition-colors",
                        selectedTemplate.id === template.id && "bg-primary/10"
                      )}
                    >
                      <p className="text-sm font-medium text-foreground">{template.label}</p>
                      <p className="text-xs text-muted-foreground">{template.description}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Post Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Select Post</label>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {mockPosts.map((post) => (
                <button
                  key={post.id}
                  onClick={() => setSelectedPost(post.id)}
                  className={cn(
                    "flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all",
                    selectedPost === post.id
                      ? "border-emerald-500 ring-2 ring-emerald-500/30"
                      : "border-transparent hover:border-border"
                  )}
                >
                  <img
                    src={post.image}
                    alt="Post thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Keywords */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Trigger Keywords</label>
            <input
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="Enter keywords separated by commas..."
              className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <div className="flex flex-wrap gap-2">
              {suggestedKeywords.map((keyword) => (
                <button
                  key={keyword}
                  onClick={() => handleKeywordClick(keyword)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium rounded-lg transition-all",
                    selectedKeywords.includes(keyword)
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                  )}
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>

          {/* Reply Textarea */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Auto-Reply Message</label>
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Type your automated reply message..."
              rows={4}
              className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            
            {/* Quick Reply Suggestions */}
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Quick suggestions
              </p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((text, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickReply(text)}
                    className="px-3 py-1.5 text-xs bg-background border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all text-left"
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-border/50">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/25"
            >
              Save Automation
            </button>
          </div>
        </div>

        {/* Right Panel - Phone Preview */}
        <div className="flex-shrink-0 p-6 lg:p-8 bg-secondary/20 flex items-center justify-center">
          <PhonePreview selectedPost={selectedPost} />
        </div>
      </div>
    </div>
  );
};
