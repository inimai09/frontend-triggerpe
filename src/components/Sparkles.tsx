'use client';

import React, { useEffect, useState } from 'react';

export function Sparkles() {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    // Generate sparkles on mount to avoid hydration mismatch
    const sparkleCount = 30; // Slightly fewer but bigger/bolder
    const newSparkles = Array.from({ length: sparkleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 2, // Increased size for better visibility
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${12 + Math.random() * 15}s`, 
      delay: `${Math.random() * -30}s`,
      moveX: `${(Math.random() - 0.5) * 400}px`,
      moveY: `${(Math.random() - 0.5) * 400}px`,
      glowColor: i % 2 === 0 ? '#FFFFFF' : '#00ACC1', // Use teal for Maldives theme
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
            boxShadow: `0 0 10px 2px ${s.glowColor}, 0 0 20px 4px rgba(255, 255, 255, 0.3)`,
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
