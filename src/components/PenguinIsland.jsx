import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Crown } from 'lucide-react';
import PenguinCard from './PenguinCard';
import { PENGUINS, BIRTHDAY_INFO } from '../data/birthdayData';

export default function PenguinIsland({ openedIds, onSelectPenguin }) {
  const totalCount = PENGUINS.length;
  const openedCount = openedIds.size;
  const progressPercent = (openedCount / totalCount) * 100;

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center relative z-10">
      {/* Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full text-center mb-8 relative"
      >
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A050D] border border-[#D4A843]/50 text-[#F5E1AF] text-xs sm:text-sm font-bold shadow-md mb-3 font-cinzel tracking-widest uppercase">
          <Sparkles className="w-4 h-4 text-[#ECC870] animate-spin" />
          <span>Birthday Letters for You 💌</span>
          <Sparkles className="w-4 h-4 text-[#ECC870] animate-spin" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-cinzel tracking-tight text-[#FFF6ED] flex items-center justify-center gap-2">
          <span>Happy Birthday, Harini ✨</span>
        </h2>

        <p className="text-[#DEC8B6] text-xs sm:text-base max-w-lg mx-auto mt-2 font-cormorant italic">
          {openedCount === totalCount
            ? "✦ All 5 letters have been opened! Tap any letter to reread or get ready for your surprise ✦"
            : BIRTHDAY_INFO.introHint}
        </p>

        {/* Progress Tracker Card in Deep Burgundy Velvet & Antique Gold */}
        <div className="mt-5 max-w-md mx-auto bg-[#23040B]/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#D4A843]/40 flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-xs sm:text-sm font-semibold font-cinzel">
            <span className="flex items-center gap-1.5 text-[#F0DFCD]">
              <BookOpen className="w-4 h-4 text-[#ECC870]" />
              Letters Opened:
            </span>
            <span className="text-[#FFF2C6] font-bold bg-[#3E0713] px-3 py-0.5 rounded-lg border border-[#D4A843]/50">
              {openedCount} of {totalCount} Opened 🤍
            </span>
          </div>

          {/* Progress Bar with Gold Foil Gradient */}
          <div className="w-full h-3 bg-[#130206] rounded-full overflow-hidden p-0.5 border border-[#D4A843]/30">
            <motion.div
              className="h-full bg-gradient-to-r from-[#D4A843] via-[#ECC870] to-[#FFE89E] rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>

          {/* 5 Wax Seal Icons along progress bar */}
          <div className="flex justify-between items-center px-1 pt-1">
            {PENGUINS.map((p, idx) => {
              const isDone = openedIds.has(p.id);
              return (
                <div
                  key={p.id}
                  className="flex flex-col items-center gap-1 cursor-pointer transition-transform hover:scale-115"
                  onClick={() => onSelectPenguin(p)}
                  title={p.name}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold border transition-all duration-300 font-cinzel ${
                      isDone
                        ? 'bg-gradient-to-br from-[#8E1C34] to-[#4E0815] text-[#FFE89E] border-[#D4A843] shadow-md shadow-amber-500/20'
                        : 'bg-[#180307] text-[#8C7667] border-[#4E1420]'
                    }`}
                  >
                    {isDone ? '🤍' : idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* 5 Royal Keepsake Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 justify-items-center items-stretch my-4">
        {PENGUINS.map((penguin, index) => (
          <PenguinCard
            key={penguin.id}
            penguin={penguin}
            isOpened={openedIds.has(penguin.id)}
            onClick={onSelectPenguin}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
