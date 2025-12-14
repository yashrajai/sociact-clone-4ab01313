import { Wand2, Film, LayoutTemplate, Sparkles, MessageSquare, Zap } from "lucide-react";

const commands = [
  {
    id: "image",
    icon: <Wand2 className="w-4 h-4" />,
    label: "Create Image",
    prompt: "Generate a stunning image of ",
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/30",
  },
  {
    id: "video",
    icon: <Film className="w-4 h-4" />,
    label: "Make Video",
    prompt: "Create a short video about ",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
  },
  {
    id: "thumbnail",
    icon: <LayoutTemplate className="w-4 h-4" />,
    label: "Design Thumbnail",
    prompt: "Design a YouTube thumbnail for ",
    gradient: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/30",
  },
  {
    id: "avatar",
    icon: <Sparkles className="w-4 h-4" />,
    label: "AI Avatar",
    prompt: "Create an AI avatar that ",
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/30",
  },
  {
    id: "automation",
    icon: <MessageSquare className="w-4 h-4" />,
    label: "Setup Automation",
    prompt: "Set up comment automation on my Instagram that ",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
  },
  {
    id: "quick",
    icon: <Zap className="w-4 h-4" />,
    label: "Quick Task",
    prompt: "Help me quickly ",
    gradient: "from-yellow-500/20 to-orange-500/20",
    border: "border-yellow-500/30",
  },
];

interface QuickCommandsProps {
  onSelect: (prompt: string) => void;
}

export const QuickCommands = ({ onSelect }: QuickCommandsProps) => {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {commands.map((command) => (
          <button
            key={command.id}
            onClick={() => onSelect(command.prompt)}
            className={`
              group flex items-center gap-2 px-4 py-2.5 rounded-xl 
              bg-gradient-to-r ${command.gradient}
              border ${command.border}
              text-sm font-medium text-foreground/80 
              hover:text-foreground hover:scale-105
              transition-all duration-200
              backdrop-blur-sm
            `}
          >
            <span className="transition-transform group-hover:scale-110">
              {command.icon}
            </span>
            {command.label}
          </button>
        ))}
      </div>
    </div>
  );
};
