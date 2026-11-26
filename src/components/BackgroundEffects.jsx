import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundEffects() {
  // Moving red roses, golden stars, and crescent moons
  const celestialItems = useMemo(() => {
    const emojis = ['🌹', '✨', '⭐', '🌙', '🌹', '✨', '🌹', '🌙', '⭐', '🌹'];
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      emoji: emojis[i % emojis.length],
      left: `${(i * 4.3 + 2) % 95}%`,
      top: `${(i * 7.7 + 3) % 94}%`,
      size: emojis[i % emojis.length] === '🌙' ? 22 + (i % 3) * 4 : 18 + (i % 4) * 4,
      duration: 6 + (i % 4) * 2.5,
      delay: (i % 6) * 0.7,
      sway: 15 + (i % 3) * 12,
      opacity: emojis[i % emojis.length] === '🌹' ? 0.45 + (i % 3) * 0.15 : 0.35 + (i % 3) * 0.12,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Warm ambient velvet candlelight glow */}
      <div className="absolute -top-32 left-1/4 w-[450px] h-[450px] bg-red-950/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-28 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -left-20 w-[450px] h-[450px] bg-rose-950/40 rounded-full blur-3xl pointer-events-none" />

      {/* Floating, gently drifting and swaying red roses, stars, and moons */}
      {celestialItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute select-none pointer-events-none"
          style={{
            left: item.left,
            top: item.top,
            fontSize: `${item.size}px`,
            opacity: item.opacity,
            filter: item.emoji === '🌹'
              ? 'drop-shadow(0 2px 8px rgba(220, 38, 38, 0.4))'
              : 'drop-shadow(0 2px 6px rgba(234, 179, 8, 0.3))',
          }}
          animate={{
            y: [-24, 24, -24],
            x: [-item.sway, item.sway, -item.sway],
            rotate: item.emoji === '🌙' ? [-12, 12, -12] : [-22, 22, -22],
            scale: [0.92, 1.12, 0.92],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </div>
  );
}
