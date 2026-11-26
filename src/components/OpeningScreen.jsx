import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';

export default function OpeningScreen({ onStart }) {
  const handleOpen = () => {
    // Royal confetti burst with gold foil, ruby red, champagne, and velvet burgundy tones
    confetti({
      particleCount: 95,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#D4A843', '#ECC870', '#8E1C34', '#5F0F21', '#FFF3C4', '#B88B2F', '#E5C16C'],
    });

    soundManager.playPenguinChirp();
    soundManager.playBackgroundMusic();
    onStart();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative z-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(14, 1, 3, 0.65), rgba(35, 4, 11, 0.45), rgba(14, 1, 3, 0.72)), url('/royal/opening_damask_bg.jpg')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: -30 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md w-full rounded-3xl p-6 sm:p-8 pt-7 sm:pt-8 pb-7 sm:pb-8 paper-shadow border-2 border-[#D4A843]/60 text-center relative overflow-hidden shadow-2xl backdrop-blur-md"
        style={{
          backgroundImage: "url('/royal/first_page_scroll_bg.jpg')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#EAD7BD',
        }}
      >
        {/* Vintage Top Ribbon Stamp */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#3B0713] border border-[#D4A843]/50 text-[#ECC870] text-[11px] font-semibold tracking-widest uppercase font-cinzel mb-2 shadow-xs">
          <span>For Harini's 21st</span> ✦
        </div>

        {/* Royal Framed Portrait of Harini replacing the 21 icon */}
        <div className="relative my-3 flex justify-center items-center">
          {/* Pulsing Warm Candlelight & Gold Halo */}
          <div className="absolute w-44 h-44 bg-gradient-to-tr from-amber-500/35 via-red-600/25 to-amber-300/30 rounded-full blur-xl animate-pulseGlow" />

          {/* Center Royal Cameo Portrait */}
          <motion.div
            className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-[#9E731B] via-[#E5C16C] to-[#8A5A12] shadow-2xl cursor-pointer group"
            onClick={handleOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            title="Click to open your surprise"
          >
            {/* Top Crown Accent */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xl sm:text-2xl select-none z-20 filter drop-shadow-md">
              👑
            </div>

            {/* Inner Ring with Harini's Photo */}
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#540B18] relative shadow-inner bg-[#3B0713]">
              <img
                src="/royal/harini_portrait.jpg"
                alt="Birthday Queen Harini"
                className="w-full h-full object-cover object-[48%_36%] transition-transform duration-500 group-hover:scale-110"
              />
              {/* Subtle vintage vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#26040C]/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Heading & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-1"
        >
          {/* User Requested Badge */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-[#FFE89E] bg-[#4E0A19] mb-2.5 border border-[#D4A843]/60 font-cinzel shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#ECC870] animate-spin" />
            for our favourite hooman
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#380712] font-cinzel tracking-tight mb-1.5 flex flex-col items-center justify-center">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#7B1A2C] mb-0.5 font-cinzel">
              Celebrating 21 Years ✨
            </span>
            <span className="text-2xl sm:text-3xl font-black text-[#4E0A19] drop-shadow-[0_1px_0px_rgba(255,255,255,0.7)]">
              Happy Birthday, Harini 🎂
            </span>
          </h1>

          <p className="text-[#3A1D23] text-xs sm:text-sm font-cormorant italic leading-relaxed mb-5 px-3 font-semibold">
            5 heartfelt letters carrying memories and love from those who treasure you most.
          </p>
        </motion.div>

        {/* Interactive Open Button */}
        <motion.button
          onClick={handleOpen}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45 }}
          whileHover={{ scale: 1.03, boxShadow: '0 12px 30px -4px rgba(212, 168, 67, 0.45)' }}
          whileTap={{ scale: 0.96 }}
          className="w-full py-3 sm:py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#8E1C34] via-[#A82642] to-[#731327] hover:from-[#9E203C] hover:to-[#82172D] text-[#FFF6E5] font-bold text-sm sm:text-base border border-[#D4A843]/70 shadow-lg flex items-center justify-center gap-2 group transition-all duration-300 font-cinzel tracking-wider"
        >
          <Sparkles className="w-4 h-4 text-[#ECC870] group-hover:rotate-12 transition-transform" />
          <span>Open Birthday Surprise</span>
          <Heart className="w-4 h-4 fill-[#ECC870]/80 text-[#ECC870] group-hover:scale-110 transition-transform" />
        </motion.button>

        {/* Bottom sound prompt */}
        <p className="text-[11px] text-[#5C232D] font-cinzel mt-3 flex items-center justify-center gap-1.5 tracking-wide font-semibold">
          <span>Turn on sound for the music box experience</span> 🎵✦
        </p>
      </motion.div>
    </div>
  );
}
