import React from 'react';

export function Sparkles() {
  const sparkleCount = 50;
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: sparkleCount }).map((_, i) => {
        const size = Math.random() * 4 + 2;
        const moveX = (Math.random() - 0.5) * 200; // Random drift
        const moveY = (Math.random() - 0.5) * 200; // Random drift
        
        return (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-sparkle-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              '--duration': `${4 + Math.random() * 6}s`,
              '--move-x': `${moveX}px`,
              '--move-y': `${moveY}px`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: `0 0 ${size * 3}px ${size}px rgba(255, 255, 255, 0.9)`,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
}
