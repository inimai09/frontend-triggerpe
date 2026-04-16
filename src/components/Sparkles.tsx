'use client';

import React, { useEffect, useState } from 'react';

export function Sparkles() {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    // Generate sparkles on mount to avoid hydration mismatch
    const sparkleCount = 60;
    const newSparkles = Array.from({ length: sparkleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2, // Smaller, more delicate sparkles
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${15 + Math.random() * 15}s`, // Slower, more graceful movement
      delay: `${Math.random() * -30}s`,
      moveX: `${(Math.random() - 0.5) * 600}px`,
      moveY: `${(Math.random() - 0.5) * 600}px`,
      // Cyan glow for the magical ocean feel
      glowColor: i % 2 === 0 ? '#00E5FF' : '#B2EBF2',
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
            backgroundColor: '#FFFFFF', // Bright white core
            boxShadow: `0 0 15px 5px ${s.glowColor}, 0 0 30px 10px rgba(0, 229, 255, 0.4)`,
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
