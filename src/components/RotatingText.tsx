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
    <div className="text-center space-y-4">
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
          Ask Sociact for
        </h1>
        <div className="rotating-text-box min-w-[160px] overflow-hidden">
          <span 
            className={cn(
              "text-xl md:text-3xl font-semibold text-primary inline-block transition-all duration-300",
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            )}
          >
            {words[currentIndex]}
          </span>
        </div>
      </div>
      <p className="text-muted-foreground text-lg max-w-xl mx-auto">
        Create stunning AI-powered content in seconds. Just describe what you need.
      </p>
    </div>
  );
};
