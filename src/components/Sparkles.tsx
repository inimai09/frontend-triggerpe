'use client';

import React, { useEffect, useState } from 'react';

export function Sparkles() {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    // Generate sparkles on mount to avoid hydration mismatch
    const sparkleCount = 25; 
    const newSparkles = Array.from({ length: sparkleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 3, // Increased size for better impact as requested
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${15 + Math.random() * 20}s`, 
      delay: `${Math.random() * -30}s`,
      moveX: `${(Math.random() - 0.5) * 500}px`,
      moveY: `${(Math.random() - 0.5) * 500}px`,
      glowColor: i % 2 === 0 ? '#FFFFFF' : '#00ACC1',
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
            boxShadow: `0 0 12px 3px ${s.glowColor}, 0 0 25px 6px rgba(255, 255, 255, 0.4)`,
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
