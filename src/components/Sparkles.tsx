'use client';

import React, { useEffect, useState } from 'react';

export function Sparkles() {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    // Generate sparkles on mount to avoid hydration mismatch
    const sparkleCount = 60; // More sparkles but smaller
    const newSparkles = Array.from({ length: sparkleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1, // Smaller, more elegant (1px to 3px)
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${15 + Math.random() * 20}s`, // Slower, more graceful movement
      delay: `${Math.random() * -30}s`,
      moveX: `${(Math.random() - 0.5) * 600}px`,
      moveY: `${(Math.random() - 0.5) * 600}px`,
      glowColor: i % 3 === 0 ? '#FFFFFF' : '#B2EBF2', // Mix of white and light teal glow
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
            boxShadow: `0 0 8px 1px ${s.glowColor}, 0 0 15px 2px rgba(255, 255, 255, 0.3)`,
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
