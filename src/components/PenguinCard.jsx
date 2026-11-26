import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function PenguinCard({ penguin, isOpened, onClick, index }) {
  const handleClick = () => {
    soundManager.playPenguinChirp();
    onClick(penguin);
  };

  const numerals = ['I', 'II', 'III', 'IV', 'V'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center group cursor-pointer w-full max-w-[230px]"
      onClick={handleClick}
    >
      {/* Speech bubble / Royal Hover Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.85 }}
        whileHover={{ opacity: 1, y: 0, scale: 1 }}
        className="absolute -top-12 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <div className="bg-[#2D060F]/95 backdrop-blur-md px-3 py-1 rounded-xl shadow-xl border border-[#D4A843]/60 text-xs font-bold text-[#FFE89E] whitespace-nowrap flex items-center gap-1 font-cinzel">
          <span>{penguin.name}:</span>
          <span className="text-[#F5E1AF] font-normal font-cormorant italic">
            {isOpened ? "Read again ✨" : "Tap to open 💌"}
          </span>
        </div>
        <div className="w-2.5 h-2.5 bg-[#2D060F] border-r border-b border-[#D4A843]/60 rotate-45 mx-auto -mt-1.5" />
      </motion.div>

      {/* Main Card Container in Velvet Burgundy & Antique Gold */}
      <motion.div
        whileHover={{ scale: 1.04, translateY: -6 }}
        whileTap={{ scale: 0.96 }}
        className={`relative w-full min-h-[290px] h-full rounded-3xl p-4 flex flex-col items-center justify-between transition-all duration-300 select-none ${
          isOpened
            ? 'bg-gradient-to-b from-[#2B050E]/95 to-[#1E0308]/95 border-2 border-[#D4A843]/80 shadow-xl shadow-amber-950/30'
            : 'bg-gradient-to-b from-[#22040B]/90 to-[#170206]/90 border border-[#D4A843]/40 shadow-lg hover:border-[#ECC870] hover:shadow-amber-500/20'
        }`}
      >
        {/* Top Silk Ribbon Tape Accent */}
        <div
          className="washi-tape -top-2.5 left-1/2 -translate-x-1/2 h-3.5 w-16 opacity-90 rounded-sm"
          style={{
            backgroundColor: penguin.colorTheme.tapeColor,
            border: '1px solid rgba(212, 168, 67, 0.4)',
            transform: `translateX(-50%) rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`,
          }}
        />

        {/* Card Header: Letter Number & Status Indicator */}
        <div className="w-full flex items-center justify-between px-1 mt-1 z-10">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider font-cinzel bg-[#3D0814] text-[#FFE89E] border border-[#D4A843]/50">
            Letter {index + 1}
          </span>
          <span
            className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider font-cinzel border ${
              isOpened
                ? 'bg-emerald-950/70 text-emerald-300 border-emerald-500/50'
                : 'bg-amber-950/60 text-[#ECC870] border-amber-600/40'
            }`}
          >
            {isOpened ? 'Opened 🤍' : 'Unopened ✉️'}
          </span>
        </div>

        {/* Center: The Wax Seal Stamp with Warm Halo */}
        <div className="relative my-3 flex items-center justify-center">
          <div
            className="absolute w-28 h-28 rounded-full blur-xl transition-all duration-500 group-hover:scale-125"
            style={{
              backgroundColor: isOpened ? 'rgba(212, 168, 67, 0.25)' : 'rgba(168, 32, 60, 0.3)',
            }}
          />
          <motion.img
            src={penguin.avatar}
            alt={penguin.name}
            className="w-24 h-24 object-contain relative z-10 filter drop-shadow-lg"
            animate={{
              y: [0, -4, 0],
              rotate: index % 2 === 0 ? [-1, 1, -1] : [1, -1, 1],
            }}
            transition={{
              duration: 2.8 + index * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Bottom: The User's Exact Description Underneath Item */}
        <div className="w-full text-center px-1 z-10 mt-auto">
          <p className="text-[11px] leading-tight text-[#E8D7C8] font-cormorant italic font-medium line-clamp-3 mb-2">
            "{penguin.description}"
          </p>

          <div className="w-full py-1.5 rounded-xl bg-[#340712] border border-[#D4A843]/40 text-[#FFE89E] text-[10px] font-bold font-cinzel tracking-wider flex items-center justify-center gap-1 group-hover:bg-[#4E0A1B] transition-colors">
            <Sparkles className="w-2.5 h-2.5 text-[#ECC870]" />
            <span>{isOpened ? 'Read Letter' : 'Open Letter'}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
