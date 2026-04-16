'use client';

import React, { useEffect, useState } from 'react';

export function Sparkles() {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    // Generate sparkles on mount to avoid hydration mismatch
    const sparkleCount = 60;
    const newSparkles = Array.from({ length: sparkleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 15 + 8, // Slightly larger
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 10}s`, // Slightly faster
      delay: `${Math.random() * -20}s`,
      moveX: `${(Math.random() - 0.5) * 1000}px`,
      moveY: `${(Math.random() - 0.5) * 1000}px`,
      // Intense cyan glow for visibility
      glowColor: i % 2 === 0 ? 'rgba(0, 255, 255, 0.9)' : 'rgba(128, 222, 234, 0.9)',
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
            boxShadow: `0 0 20px 8px ${s.glowColor}, 0 0 40px 15px rgba(0, 172, 193, 0.5)`,
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
