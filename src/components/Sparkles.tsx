'use client';

import React, { useEffect, useState } from 'react';

export function Sparkles() {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    // Increase count and size for "big and clear" effect
    const sparkleCount = 60; 
    const newSparkles = Array.from({ length: sparkleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 8 + 4, // Larger sparkles (4px to 12px)
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${12 + Math.random() * 18}s`, 
      delay: `${Math.random() * -25}s`,
      moveX: `${(Math.random() - 0.5) * 500}px`,
      moveY: `${(Math.random() - 0.5) * 500}px`,
      glowColor: i % 3 === 0 ? '#E0F7FA' : i % 3 === 1 ? '#00ACC1' : '#FFFFFF',
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full animate-sparkle-float"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: s.glowColor,
            boxShadow: `0 0 20px 4px ${s.glowColor}`, // Stronger, clearer glow
            '--duration': s.duration,
            '--move-x': s.moveX,
            '--move-y': s.moveY,
            animationDelay: s.delay,
          } as any}
        />
      ))}
    </div>
  );
}
