import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { VolumeX, Music } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(soundManager.isPlayingMusic);

  useEffect(() => {
    setIsPlaying(soundManager.isPlayingMusic);
    const unsubscribe = soundManager.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsubscribe;
  }, []);

  const handleToggle = () => {
    const active = soundManager.toggleMusic();
    setIsPlaying(active);
  };

  return (
    <motion.button
      onClick={handleToggle}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-3.5 py-2 rounded-full shadow-lg border backdrop-blur-md transition-all duration-300 font-cinzel ${
        isPlaying
          ? 'bg-[#2E050E]/95 border-[#D4A843]/70 text-[#FFE89E] shadow-amber-950/40'
          : 'bg-[#180307]/85 border-[#4E0E1B]/60 text-[#9E8679] hover:text-[#D4A843]'
      }`}
      aria-label="Toggle background music"
    >
      <motion.div
        animate={isPlaying ? { rotate: [0, -10, 10, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {isPlaying ? <Music className="w-4 h-4 text-[#ECC870]" /> : <VolumeX className="w-4 h-4" />}
      </motion.div>

      <span className="text-[11px] font-bold tracking-wider uppercase">
        {isPlaying ? 'Melody On' : 'Melody Off'}
      </span>

      {isPlaying && (
        <div className="flex items-end gap-0.5 h-3 ml-0.5">
          <motion.span
            className="w-0.5 bg-[#ECC870] rounded-full"
            animate={{ height: ['40%', '100%', '30%'] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.span
            className="w-0.5 bg-[#ECC870] rounded-full"
            animate={{ height: ['80%', '20%', '90%'] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          />
          <motion.span
            className="w-0.5 bg-[#ECC870] rounded-full"
            animate={{ height: ['30%', '90%', '50%'] }}
            transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          />
        </div>
      )}
    </motion.button>
  );
}
