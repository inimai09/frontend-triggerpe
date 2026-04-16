import React from 'react';

export function Sparkles() {
  const sparkleCount = 40;
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: sparkleCount }).map((_, i) => {
        const size = Math.random() * 3 + 2;
        const moveX = (Math.random() - 0.5) * 400;
        const moveY = (Math.random() - 0.5) * 400;
        
        return (
          <div
            key={i}
            className="absolute bg-primary rounded-full animate-sparkle-float opacity-0"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              '--duration': `${6 + Math.random() * 8}s`,
              '--move-x': `${moveX}px`,
              '--move-y': `${moveY}px`,
              animationDelay: `${Math.random() * 10}s`,
              boxShadow: `0 0 ${size * 4}px ${size}px hsl(var(--primary) / 0.3)`,
              backgroundColor: 'hsl(var(--primary) / 0.5)',
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
}