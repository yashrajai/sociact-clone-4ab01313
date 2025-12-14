import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const words = ["Videos", "Images", "Thumbnails", "Content", "Avatars"];

export const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 200);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center space-y-5">
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground font-display">
          Ask Sociact for
        </h1>
        <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl border border-primary/40 bg-primary/5 backdrop-blur-sm shadow-lg shadow-primary/5">
          <span 
            className={cn(
              "text-2xl md:text-4xl font-bold text-primary font-display inline-block transition-all duration-300",
              isAnimating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            )}
          >
            {words[currentIndex]}
          </span>
        </div>
      </div>
      <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto leading-relaxed">
        Create stunning AI-powered content in seconds. Just describe what you need.
      </p>
    </div>
  );
};
