import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HugCharacters() {
  const [extraHearts, setExtraHearts] = useState([]);

  // Burst extra hearts when clicked - ONLY RED AND PINK
  const triggerExtraSqueeze = () => {
    const redPinkHearts = ['❤️', '💖', '💕', '💗', '💓', '💞', '💘', '🌸', '🌹'];
    const newHearts = Array.from({ length: 10 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 110,
      y: -20 - Math.random() * 60,
      icon: redPinkHearts[Math.floor(Math.random() * redPinkHearts.length)],
    }));
    setExtraHearts((prev) => [...prev.slice(-25), ...newHearts]);
  };

  return (
    <div
      className="relative flex items-center justify-center cursor-pointer select-none py-3"
      onClick={triggerExtraSqueeze}
      title="Tap for a tighter warm hug! 💕"
    >
      {/* Background Soft Glow Aura in Rosy Blush & Warm Peach */}
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-pink-200/50 via-rose-100/40 to-red-100/30 rounded-full blur-2xl animate-pulseGlow" />

      {/* Floating Ambient Hearts - ONLY RED & PINK */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none z-20"
          initial={{ opacity: 0, y: 10, scale: 0.6 }}
          animate={{
            opacity: [0, 0.9, 0],
            y: [-10, -90 - i * 15],
            x: [0, (i % 2 === 0 ? 1 : -1) * (20 + i * 10)],
            scale: [0.6, 1.25, 0.9],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeOut',
          }}
          style={{
            fontSize: `${18 + (i % 3) * 6}px`,
          }}
        >
          {['❤️', '💖', '💕', '💗', '💓', '🌸'][i]}
        </motion.div>
      ))}

      {/* Extra Floating Items from Squeeze Click */}
      <AnimatePresence>
        {extraHearts.map((h) => (
          <motion.div
            key={h.id}
            initial={{ opacity: 1, scale: 0.5, x: 0, y: 0 }}
            animate={{ opacity: 0, scale: 1.5, x: h.x, y: h.y - 75 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            className="absolute text-2xl z-30 pointer-events-none"
          >
            {h.icon}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Swaying & Breathing Virtual Hug Characters (Inktober Hugging Illustration) */}
      <motion.div
        animate={{
          rotate: [-2, 2, -2],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileTap={{ scale: 0.94 }}
        className="relative z-10 flex flex-col items-center justify-center p-2"
      >
        <div className="relative group">
          <img
            src="/images/virtual_hug_clean.png"
            onError={(e) => { e.target.src = "/images/virtual_hug_raw.jpg"; }}
            alt="Two Cute Characters Hugging"
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <span className="text-[11px] text-gray-400 font-quicksand mt-1">
          (Tap anywhere on hug to squeeze! 🫂💕)
        </span>
      </motion.div>
    </div>
  );
}
