import { useState, useEffect } from "react";
import { X, Sparkles, Timer, Crown } from "lucide-react";
import { UpgradeDialog } from "./UpgradeDialog";

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [upgradeOpen, setUpgradeOpen] = useState(false);
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

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <>
      <div className="relative w-full bg-gradient-to-r from-lime-400 via-green-400 to-lime-400 py-2 px-4 flex items-center justify-center gap-4 overflow-hidden">
        {/* Christmas decorations */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl hidden sm:block">🎄🧸</div>
        
        {/* Content */}
        {isVisible && (
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
        )}
        
        {/* Right side: Upgrade + Profile + Close */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-3">
          <div className="text-2xl hidden sm:block">🎄🍬</div>
          
          <button
            onClick={() => setUpgradeOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 bg-white/90 hover:bg-white rounded-lg transition-colors shadow-sm"
          >
            <Crown className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-black">Upgrade</span>
          </button>
          
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity shadow-sm">
            <span className="text-sm font-semibold text-white">U</span>
          </div>
          
          {isVisible && (
            <button 
              onClick={() => setIsVisible(false)}
              className="text-black/70 hover:text-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <UpgradeDialog open={upgradeOpen} onOpenChange={setUpgradeOpen} />
    </>
  );
};