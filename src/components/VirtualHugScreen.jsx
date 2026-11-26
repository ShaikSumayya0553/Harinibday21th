import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, RotateCcw, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import HugCharacters from './HugCharacters';
import { FINAL_SCREEN_DATA } from '../data/birthdayData';
import { soundManager } from '../utils/audio';

export default function VirtualHugScreen({ onReplay, onExploreMeadow }) {
  useEffect(() => {
    soundManager.playCelebrationChime();

    // Trigger royal gold, ruby red, and champagne confetti burst
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#D4A843', '#ECC870', '#8E1C34', '#5F0F21', '#FFF3C4', '#B88B2F', '#E5C16C'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 max-w-3xl mx-auto flex flex-col items-center justify-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-[#FAF5EE] backdrop-blur-md rounded-3xl p-6 sm:p-10 paper-shadow border-2 border-[#D4A843]/60 text-center relative overflow-hidden"
      >
        {/* Top Silk Ribbon Tape Accents */}
        <div className="washi-tape -top-3 left-1/2 -translate-x-1/2 bg-[#781427] border border-[#D4A843]/50 -rotate-1 rounded-sm" />
        <div className="washi-tape -top-2 left-6 bg-[#5A0C1B] border border-[#D4A843]/40 rotate-2 rounded-sm" />
        <div className="washi-tape -top-2 right-6 bg-[#6B1D2F] border border-[#D4A843]/40 -rotate-3 rounded-sm" />

        {/* Ornate Gold Corner Icons */}
        <div className="absolute top-3 left-3 text-[#D4A843]/60 text-base select-none">✨</div>
        <div className="absolute top-3 right-3 text-[#D4A843]/60 text-base select-none">✨</div>

        {/* Heading: 'A Tight Hug For You 🫂' */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black font-cinzel tracking-tight text-[#3A0713]"
        >
          A Tight Hug For You 🫂
        </motion.h1>

        {/* Required Text: 'I MISS YOU ❤️' */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, type: 'spring', stiffness: 200 }}
          className="my-3 flex items-center justify-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-2xl bg-gradient-to-r from-[#8E1C34] via-[#A82642] to-[#731327] text-[#FFF6E5] font-black text-2xl sm:text-3xl tracking-wider shadow-lg border border-[#D4A843]/60 font-cinzel animate-pulse">
            <span>{FINAL_SCREEN_DATA.missYouText}</span>
          </div>
        </motion.div>

        {/* Animated Virtual Hug Characters (With red & pink burst on click) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="my-4"
        >
          <HugCharacters />
        </motion.div>

        {/* Emotional Closing Message Box in Vintage Royal Parchment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-[#FFFDF9] rounded-2xl p-5 sm:p-7 border border-dashed border-[#D4A843]/60 text-gray-800 text-left relative mt-6 shadow-sm"
        >
          {/* Centered Heading with Aligned Emojis */}
          <div className="flex items-center justify-center gap-2 mb-4 text-[#8E1C34]">
            <span className="text-xl select-none">💌</span>
            <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#7B1A2C] tracking-wide text-center">
              To Harini, With All My Heart
            </h3>
            <span className="text-xl select-none">❤️</span>
          </div>

          {/* Emotional Message in Warm, Aesthetic Letter Font (Normal Casing) */}
          <div className="space-y-3 font-playfair italic text-base sm:text-lg leading-relaxed text-[#36131C] normal-case text-justify sm:text-left">
            {FINAL_SCREEN_DATA.emotionalMessage.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* User Requested Wish Below Divider Line */}
          <div className="mt-5 pt-4 border-t-2 border-dashed border-[#D4A843]/60 text-center font-caveat text-2xl sm:text-3xl text-[#7B1A2C] font-bold tracking-wide">
            {FINAL_SCREEN_DATA.quote}
          </div>
        </motion.div>

        {/* Buttons: Replay Our Memories and Browse Letters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          {/* Replay Our Memories Button */}
          <motion.button
            onClick={onReplay}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#8E1C34] via-[#A82642] to-[#731327] hover:from-[#9E203C] hover:to-[#82172D] text-[#FFF6E5] font-bold text-sm sm:text-base border border-[#D4A843]/70 shadow-lg shadow-amber-950/20 flex items-center justify-center gap-2 font-cinzel tracking-wider transition-all"
          >
            <RotateCcw className="w-4 h-4 text-[#ECC870]" />
            <span>{FINAL_SCREEN_DATA.replayButtonText}</span>
          </motion.button>

          {/* Back Button */}
          <motion.button
            onClick={onExploreMeadow}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#FFFDF9] hover:bg-[#F5ECE1] text-[#7B1A2C] font-bold text-sm sm:text-base border border-[#D4A843]/60 shadow-sm flex items-center justify-center gap-2 font-cinzel tracking-wider transition-all"
          >
            <BookOpen className="w-4 h-4 text-[#8E1C34]" />
            <span>Back</span>
          </motion.button>
        </motion.div>

        {/* Sweet royal footer note */}
        <p className="text-xs text-[#82696F] font-cinzel mt-6 tracking-widest uppercase">
          ✦ Created with Endless Love for Harini's 21st Birthday • 2026 ✦
        </p>
      </motion.div>
    </div>
  );
}
