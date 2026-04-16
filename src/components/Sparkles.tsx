'use client';

import React, { useEffect, useState } from 'react';

export function Sparkles() {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    // Generate sparkles on mount to avoid hydration mismatch
    const sparkleCount = 45;
    const newSparkles = Array.from({ length: sparkleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 4,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${12 + Math.random() * 18}s`,
      delay: `${Math.random() * 10}s`,
      moveX20: `${(Math.random() - 0.5) * 150}px`,
      moveY20: `${(Math.random() - 0.5) * 150}px`,
      moveX50: `${(Math.random() - 0.5) * 400}px`,
      moveY50: `${(Math.random() - 0.5) * 400}px`,
      moveX80: `${(Math.random() - 0.5) * 150}px`,
      moveY80: `${(Math.random() - 0.5) * 150}px`,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#E0F7FA]">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute bg-white rounded-full animate-sparkle-float opacity-0 shadow-[0_0_15px_5px_rgba(255,255,255,0.8)]"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            '--duration': s.duration,
            animationDelay: s.delay,
            '--move-x-20': s.moveX20,
            '--move-y-20': s.moveY20,
            '--move-x-50': s.moveX50,
            '--move-y-50': s.moveY50,
            '--move-x-80': s.moveX80,
            '--move-y-80': s.moveY80,
            '--move-x-100': '0px',
            '--move-y-100': '0px',
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
