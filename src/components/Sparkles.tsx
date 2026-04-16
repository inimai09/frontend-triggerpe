'use client';

import React, { useEffect, useState } from 'react';

export function Sparkles() {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    const sparkleCount = 40; 
    const newSparkles = Array.from({ length: sparkleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 5 + 2,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 15}s`, 
      delay: `${Math.random() * -20}s`,
      moveX: `${(Math.random() - 0.5) * 400}px`,
      moveY: `${(Math.random() - 0.5) * 400}px`,
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
            boxShadow: `0 0 15px 2px ${s.glowColor}`,
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
