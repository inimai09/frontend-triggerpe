'use client';

import React, { useEffect, useState } from 'react';

export function Sparkles() {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    const sparkleCount = 30;
    const newSparkles = Array.from({ length: sparkleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 15}s`,
      delay: `${Math.random() * 10}s`,
      moveX20: `${(Math.random() - 0.5) * 50}px`,
      moveY20: `${(Math.random() - 0.5) * 50}px`,
      moveX50: `${(Math.random() - 0.5) * 150}px`,
      moveY50: `${(Math.random() - 0.5) * 150}px`,
      moveX80: `${(Math.random() - 0.5) * 50}px`,
      moveY80: `${(Math.random() - 0.5) * 50}px`,
      moveX100: `${(Math.random() - 0.5) * 20}px`,
      moveY100: `${(Math.random() - 0.5) * 20}px`,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute bg-white rounded-full animate-sparkle-float opacity-0 shadow-[0_0_8px_2px_rgba(255,255,255,0.4)]"
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
            '--move-x-100': s.moveX100,
            '--move-y-100': s.moveY100,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
