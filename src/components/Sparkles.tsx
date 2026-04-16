import React from 'react';

export function Sparkles() {
  const sparkleCount = 40;
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: sparkleCount }).map((_, i) => {
        const size = Math.random() * 3 + 1;
        return (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              '--duration': `${2 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: `0 0 ${size * 2}px ${size/2}px rgba(255, 255, 255, 0.8)`,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
}
