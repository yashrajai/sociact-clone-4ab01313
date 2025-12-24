import { useState, useEffect } from "react";
import { X, Sparkles, Timer } from "lucide-react";

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 6,
    minutes: 14,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="relative w-full bg-gradient-to-r from-lime-400 via-green-400 to-lime-400 py-2 px-4 flex items-center justify-center gap-4 overflow-hidden">
      {/* Christmas decorations */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl hidden sm:block">🎄🧸</div>
      <div className="absolute right-12 top-1/2 -translate-y-1/2 text-2xl hidden sm:block">🎄🍬</div>
      
      {/* Content */}
      <div className="flex items-center gap-3 flex-wrap justify-center">
        <span className="flex items-center gap-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
          <Sparkles className="w-3 h-3" />
          LIMITED OFFER
        </span>
        
        <span className="flex items-center gap-1 bg-emerald-600 text-white text-xs font-medium px-2 py-1 rounded-md">
          <Timer className="w-3 h-3" />
          Discount expires in {timeLeft.days}d {formatTime(timeLeft.hours)}h {formatTime(timeLeft.minutes)}m {formatTime(timeLeft.seconds)}s
        </span>
        
        <span className="text-black font-semibold text-sm">
          <span className="font-bold">365 Unlimited Sociact Pro</span> Christmas Sale: <span className="text-red-600 font-bold">80% OFF</span> Ends Dec 25
        </span>
      </div>
      
      {/* Close button */}
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-black/70 hover:text-black transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};