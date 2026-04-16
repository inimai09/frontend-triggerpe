'use client';

import React, { useEffect, useState } from 'react';

export function Sparkles() {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    // Generate sparkles on mount to avoid hydration mismatch
    const sparkleCount = 45;
    const newSparkles = Array.from({ length: sparkleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 10 + 5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${12 + Math.random() * 15}s`,
      delay: `${Math.random() * -25}s`,
      moveX: `${(Math.random() - 0.5) * 800}px`,
      moveY: `${(Math.random() - 0.5) * 800}px`,
      // Add a random glow color variation
      glowColor: i % 2 === 0 ? 'rgba(0, 172, 193, 0.8)' : 'rgba(255, 255, 255, 0.9)',
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-transparent">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full animate-sparkle-float"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: 'white',
            boxShadow: `0 0 15px 5px ${s.glowColor}, 0 0 30px 10px rgba(128, 222, 234, 0.4)`,
            '--duration': s.duration,
            '--move-x': s.moveX,
            '--move-y': s.moveY,
            animationDelay: s.delay,
            opacity: 0,
          } as any}
        />
      ))}
    </div>
  );
}
