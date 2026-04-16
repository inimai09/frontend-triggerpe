'use client';

import React, { useEffect, useState } from 'react';

export function Sparkles() {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    // Generate sparkles on mount to avoid hydration mismatch
    const sparkleCount = 40; 
    const newSparkles = Array.from({ length: sparkleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 1.5 + 0.8, // Smaller, more delicate sparkles
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${15 + Math.random() * 20}s`, // Slow, graceful movement
      delay: `${Math.random() * -30}s`,
      moveX: `${(Math.random() - 0.5) * 300}px`,
      moveY: `${(Math.random() - 0.5) * 300}px`,
      glowColor: i % 2 === 0 ? '#FFFFFF' : '#80DEEA', // White and Cyan glow
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
            backgroundColor: '#FFFFFF',
            boxShadow: `0 0 6px 1px ${s.glowColor}, 0 0 12px 2px rgba(255, 255, 255, 0.4)`,
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
