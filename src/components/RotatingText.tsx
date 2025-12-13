import { useState, useEffect } from "react";

const words = ["Videos", "Images", "Thumbnails", "Content"];

export const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-3">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">
        Ask Sociact for
      </h1>
      <div className="rotating-text-box min-w-[140px]">
        <span className="text-xl md:text-2xl font-semibold text-primary">
          {words[currentIndex]}
        </span>
      </div>
    </div>
  );
};
