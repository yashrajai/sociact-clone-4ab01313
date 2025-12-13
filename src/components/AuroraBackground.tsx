export const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated aurora glow effect */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[350px] animate-aurora-pulse"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 0%, 
              hsl(var(--primary) / 0.5) 0%, 
              hsl(var(--primary) / 0.25) 30%,
              hsl(var(--aurora-glow) / 0.15) 50%,
              transparent 70%
            )
          `,
        }}
      />
      <div 
        className="absolute top-0 left-1/4 w-[80%] h-[280px] animate-aurora-shift"
        style={{
          background: `
            radial-gradient(ellipse 50% 30% at 30% 10%, 
              hsl(var(--aurora-green) / 0.35) 0%, 
              transparent 60%
            )
          `,
        }}
      />
      <div 
        className="absolute top-0 right-1/4 w-[70%] h-[250px] animate-aurora-float"
        style={{
          background: `
            radial-gradient(ellipse 40% 25% at 70% 5%, 
              hsl(var(--primary) / 0.3) 0%, 
              transparent 50%
            )
          `,
        }}
      />
      {/* Additional glow layer */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] animate-aurora-glow"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, 
              hsl(var(--cyan-badge) / 0.2) 0%, 
              transparent 70%
            )
          `,
        }}
      />
    </div>
  );
};
