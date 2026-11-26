import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OpeningScreen from './components/OpeningScreen';
import PenguinIsland from './components/PenguinIsland';
import ScrapbookModal from './components/ScrapbookModal';
import VirtualHugScreen from './components/VirtualHugScreen';
import BackgroundEffects from './components/BackgroundEffects';
import AudioToggle from './components/AudioToggle';
import { PENGUINS, BIRTHDAY_INFO } from './data/birthdayData';
import confetti from 'canvas-confetti';
import { soundManager } from './utils/audio';

export default function App() {
  const [screen, setScreen] = useState('opening'); // 'opening' | 'meadow' | 'final'
  const [openedIds, setOpenedIds] = useState(new Set());
  const [activePenguin, setActivePenguin] = useState(null);
  const [showCelebrationBanner, setShowCelebrationBanner] = useState(false);

  // Check completion tracking
  const allOpened = openedIds.size === PENGUINS.length;

  const handleStart = () => {
    soundManager.playBackgroundMusic();
    setScreen('meadow');
  };

  const handleSelectPenguin = (penguin) => {
    setActivePenguin(penguin);
    setOpenedIds((prev) => {
      const next = new Set(prev);
      next.add(penguin.id);
      return next;
    });
  };

  const handleCloseModal = () => {
    setActivePenguin(null);

    // If all 5 penguins have now been opened, automatically transition to Final Screen!
    if (allOpened) {
      setShowCelebrationBanner(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 },
      });
      soundManager.playCelebrationChime();

      setTimeout(() => {
        setShowCelebrationBanner(false);
        setScreen('final');
      }, BIRTHDAY_INFO.finalTransitionDelayMs || 1200);
    }
  };

  const handleNextLetter = () => {
    if (!activePenguin) return;
    const currentIndex = PENGUINS.findIndex((p) => p.id === activePenguin.id);
    const nextIndex = (currentIndex + 1) % PENGUINS.length;
    handleSelectPenguin(PENGUINS[nextIndex]);
  };

  const handlePrevLetter = () => {
    if (!activePenguin) return;
    const currentIndex = PENGUINS.findIndex((p) => p.id === activePenguin.id);
    const prevIndex = (currentIndex - 1 + PENGUINS.length) % PENGUINS.length;
    handleSelectPenguin(PENGUINS[prevIndex]);
  };

  // Replay from scratch
  const handleReplay = () => {
    setOpenedIds(new Set());
    setActivePenguin(null);
    setScreen('opening');
  };

  // Keep progress and browse meadow
  const handleExploreMeadow = () => {
    setScreen('meadow');
  };

  return (
    <div className="relative min-h-screen text-[#F3E8E2] flex flex-col justify-between selection:bg-[#8E1C34] selection:text-[#FFE89E]">
      {/* Floating Audio Controller */}
      <AudioToggle />

      {/* Atmospheric Pastel Background Sparkles & Glows */}
      <BackgroundEffects />

      {/* Main Screen Transition View */}
      <main className="flex-1 w-full relative z-10 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {screen === 'opening' && (
            <motion.div
              key="opening"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <OpeningScreen onStart={handleStart} />
            </motion.div>
          )}

          {screen === 'meadow' && (
            <motion.div
              key="meadow"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
            >
              <PenguinIsland
                openedIds={openedIds}
                onSelectPenguin={handleSelectPenguin}
              />
            </motion.div>
          )}

          {screen === 'final' && (
            <motion.div
              key="final"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <VirtualHugScreen
                onReplay={handleReplay}
                onExploreMeadow={handleExploreMeadow}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Scrapbook Letter Modal */}
      {activePenguin && (
        <ScrapbookModal
          penguin={activePenguin}
          onClose={handleCloseModal}
          onNext={handleNextLetter}
          onPrev={handlePrevLetter}
        />
      )}

      {/* Automatic Transition Toast when 5th penguin is completed */}
      <AnimatePresence>
        {showCelebrationBanner && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -40 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-[#8E1C34] via-[#A82642] to-[#731327] text-[#FFF6E5] px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 font-cinzel text-xs sm:text-sm font-bold border border-[#D4A843]/70 tracking-wider uppercase"
          >
            <span className="text-xl animate-bounce">💌</span>
            <span>All 5 Letters Opened! Unveiling surprise...</span>
            <span className="text-xl animate-bounce">✨</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

