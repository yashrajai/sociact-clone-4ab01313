export const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora glow effect */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px]"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 0%, 
              rgba(34, 197, 94, 0.4) 0%, 
              rgba(34, 197, 94, 0.2) 30%,
              rgba(16, 185, 129, 0.1) 50%,
              transparent 70%
            )
          `,
        }}
      />
      <div 
        className="absolute top-0 left-1/3 w-[80%] h-[250px]"
        style={{
          background: `
            radial-gradient(ellipse 50% 30% at 30% 10%, 
              rgba(34, 197, 94, 0.3) 0%, 
              transparent 60%
            )
          `,
        }}
      />
      <div 
        className="absolute top-0 right-1/4 w-[60%] h-[200px]"
        style={{
          background: `
            radial-gradient(ellipse 40% 25% at 70% 5%, 
              rgba(16, 185, 129, 0.25) 0%, 
              transparent 50%
            )
          `,
        }}
      />
    </div>
  );
};
