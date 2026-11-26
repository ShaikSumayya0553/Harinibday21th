import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles, ZoomIn } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function ScrapbookModal({ penguin, onClose, onNext, onPrev }) {
  const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);
  const scrollContainerRef = useRef(null);
  const outerContainerRef = useRef(null);
  const letterTextRef = useRef(null);

  // Reset scroll to the beginning of the letter on mount and every time letter changes
  useEffect(() => {
    soundManager.playLetterOpen();
    document.body.style.overflow = 'hidden';

    // Instantly scroll back to the top of the letter
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    if (outerContainerRef.current) {
      outerContainerRef.current.scrollTop = 0;
    }
    if (letterTextRef.current) {
      letterTextRef.current.scrollTop = 0;
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [penguin.id]);

  const handleNext = () => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
    if (outerContainerRef.current) outerContainerRef.current.scrollTop = 0;
    if (letterTextRef.current) letterTextRef.current.scrollTop = 0;
    onNext();
  };

  const handlePrev = () => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
    if (outerContainerRef.current) outerContainerRef.current.scrollTop = 0;
    if (letterTextRef.current) letterTextRef.current.scrollTop = 0;
    onPrev();
  };

  const getModalAnimationVariants = (animationType) => {
    switch (animationType) {
      case 'slideUp':
        return {
          initial: { opacity: 0, y: 120, scale: 0.9, rotate: -1 },
          animate: { opacity: 1, y: 0, scale: 1, rotate: 0 },
          exit: { opacity: 0, y: 80, scale: 0.95, transition: { duration: 0.25 } },
          transition: { type: 'spring', damping: 22, stiffness: 260 },
        };
      case 'rotateIn':
        return {
          initial: { opacity: 0, rotate: -10, scale: 0.7, y: 50 },
          animate: { opacity: 1, rotate: 0, scale: 1, y: 0 },
          exit: { opacity: 0, rotate: 8, scale: 0.8, transition: { duration: 0.25 } },
          transition: { type: 'spring', damping: 20, stiffness: 220 },
        };
      case 'zoomBounce':
        return {
          initial: { opacity: 0, scale: 0.5 },
          animate: { opacity: 1, scale: [0.5, 1.04, 1] },
          exit: { opacity: 0, scale: 0.85, transition: { duration: 0.2 } },
          transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] },
        };
      case 'flip':
        return {
          initial: { opacity: 0, rotateY: 90, scale: 0.8 },
          animate: { opacity: 1, rotateY: 0, scale: 1 },
          exit: { opacity: 0, rotateY: -90, scale: 0.8, transition: { duration: 0.25 } },
          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
        };
      default:
        return {
          initial: { opacity: 0, scale: 0.8, y: -30 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.25 } },
          transition: { type: 'spring', damping: 24, stiffness: 300 },
        };
    }
  };

  const anim = getModalAnimationVariants(penguin.animationType);

  return (
    <AnimatePresence>
      <div
        ref={outerContainerRef}
        className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 sm:py-8 overflow-y-auto"
      >
        {/* Deep Velvet Backdrop with soft blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer z-0"
        />

        {/* Royal Antique Parchment Container */}
        <motion.div
          initial={anim.initial}
          animate={anim.animate}
          exit={anim.exit}
          transition={anim.transition}
          className="relative z-10 w-full max-w-4xl bg-[#140307]/95 backdrop-blur-xl rounded-3xl paper-shadow border-2 border-[#D4A843]/60 overflow-hidden my-auto"
          style={{
            backgroundImage: "linear-gradient(rgba(18, 2, 6, 0.92), rgba(30, 4, 10, 0.94)), url('/royal/opening_damask_bg.jpg')",
            backgroundSize: 'cover',
          }}
        >
          {/* Top Royal Header Bar with Silk Washi Tape and Wax Seal Monogram */}
          <div className="relative px-4 sm:px-6 pt-5 pb-3.5 flex items-center justify-between border-b border-[#D4A843]/30 bg-[#28050E]/95 backdrop-blur-md text-[#FFF6E5]">
            {/* Top Silk Ribbon Tape */}
            <div
              className="washi-tape -top-2.5 left-1/2 -translate-x-1/2 w-32 h-5 rounded-sm"
              style={{
                backgroundColor: penguin.colorTheme.tapeColor,
                border: '1px solid rgba(212, 168, 67, 0.5)',
                transform: 'translateX(-50%) rotate(-1deg)',
              }}
            />

            {/* Left Wax Seal & Title */}
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#180307] p-1 shadow-md border border-[#D4A843]/60 flex items-center justify-center shrink-0">
                <img
                  src={penguin.avatar}
                  alt={penguin.name}
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-cinzel font-bold text-[#FFE89E] text-xs sm:text-base tracking-wide">
                    {penguin.name}
                  </h3>
                  <span
                    className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest shrink-0 font-cinzel ${penguin.colorTheme.badgeColor}`}
                  >
                    Letter {penguin.id} of 5
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#EAD8CA] font-cormorant italic max-w-xs sm:max-w-md truncate font-medium">
                  "{penguin.description}"
                </p>
              </div>
            </div>

            {/* Close Button in Gold & Wine */}
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full bg-[#3D0814] hover:bg-[#580E1E] text-[#FFE89E] shadow-sm border border-[#D4A843]/50 transition-all duration-200 shrink-0 ml-1"
              aria-label="Close letter"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content: Auto-scrolls and resets to top on every letter change */}
          <div
            ref={scrollContainerRef}
            className="p-3.5 sm:p-6 md:p-8 max-h-[76vh] sm:max-h-[80vh] overflow-y-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
              {/* Left Column: Gilded Antique Portrait Frame - 100% visible faces */}
              <div className="md:col-span-5 flex flex-col items-center md:sticky md:top-2 self-start w-full">
                <motion.div
                  initial={{ rotate: 0, scale: 0.95 }}
                  animate={{
                    rotate: penguin.photo.rotation === '-2deg' ? -1.5 : 1.5,
                    scale: 1,
                  }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-[#FFFDF9] p-3 sm:p-4 pb-4 sm:pb-5 rounded-2xl polaroid-shadow border-2 border-[#D4A843]/50 w-full max-w-sm sm:max-w-md transition-transform hover:rotate-0 group cursor-pointer"
                  onClick={() => setIsPhotoZoomed(true)}
                  title="Tap photo to view full size! 🔍"
                >
                  {/* Unique Antique Stamp Mounted on Polaroid Photo */}
                  <img
                    src={penguin.avatar}
                    alt="Letter Stamp"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter drop-shadow-md absolute -top-3 -right-2 z-20 pointer-events-none"
                  />

                  {/* Flexible Photo Container: Preserves 100% of the image & faces without cutting */}
                  <div className="w-full min-h-[200px] max-h-[340px] sm:max-h-[380px] rounded-xl overflow-hidden bg-[#24050D] border border-[#D4A843]/40 relative flex items-center justify-center group mt-3">
                    {/* Ambient Blurred Backdrop to smoothly frame wide or tall photos */}
                    <img
                      src={penguin.photo.src}
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 scale-110 pointer-events-none select-none"
                    />

                    {/* Main Photograph: object-contain with auto height so all faces and poses are completely visible */}
                    <img
                      src={penguin.photo.src}
                      onError={(e) => {
                        if (penguin.photo.fallbackSrc && e.target.src !== penguin.photo.fallbackSrc) {
                          e.target.src = penguin.photo.fallbackSrc;
                        }
                      }}
                      alt={penguin.letter.title}
                      className="relative z-10 w-full h-auto max-h-[320px] sm:max-h-[360px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                    />

                    {/* Tap to Zoom Badge */}
                    <div className="absolute bottom-2 right-2 z-20 bg-[#28050E]/85 text-[#FFE89E] px-2.5 py-1 rounded-full backdrop-blur-xs text-[10px] font-cinzel flex items-center gap-1 opacity-85 group-hover:opacity-100 transition-opacity border border-[#D4A843]/50 shadow-md">
                      <ZoomIn className="w-3 h-3 text-[#ECC870]" />
                      <span>Tap to expand</span>
                    </div>
                  </div>

                  {/* Polaroid Caption & Memory Tag */}
                  <div className="mt-3.5 text-center px-1">
                    <span className="text-[11px] font-bold text-[#8E1C34] font-cinzel uppercase tracking-widest block mb-1">
                      {penguin.photo.date}
                    </span>
                    <p
                      className={`${penguin.font.className} text-[#2A141A] text-base sm:text-xl leading-snug`}
                    >
                      "{penguin.photo.caption}"
                    </p>
                  </div>
                </motion.div>

                {/* Sticker Badges underneath polaroid */}
                <div className="flex gap-3 mt-3 text-2xl select-none">
                  {penguin.stickers.map((s, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      className="cursor-default filter drop-shadow-sm"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Right Column: Beautiful Personal Letter on Natural Stationery Parchment */}
              <div className="md:col-span-7 flex flex-col items-center justify-center w-full">
                {(() => {
                  const isRoseBg = penguin.letterBg?.includes('vintage_rose_letter_bg') || !penguin.letterBg;
                  const bgAspectRatio = isRoseBg ? '576 / 1024' : '622 / 926';
                  const safeInsets = isRoseBg
                    ? { top: '16%', bottom: '26%', left: '13.5%', right: '13.5%' }
                    : { top: '15%', bottom: '18%', left: '14%', right: '14%' };

                  return (
                    <div
                      className="relative w-full max-w-[460px] sm:max-w-[490px] mx-auto rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-[#D4A843]/30"
                      style={{
                        aspectRatio: bgAspectRatio,
                        backgroundImage: `url('${penguin.letterBg || "/royal/vintage_rose_letter_bg.jpg"}')`,
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: '#F0D8B6',
                      }}
                    >
                      {/* The safe text area: calculated from background dimensions to prevent touching floral borders/roses */}
                      <div
                        ref={letterTextRef}
                        className="absolute inset-x-0 top-0 bottom-0 overflow-y-auto vintage-letter-scroll flex flex-col justify-between"
                        style={safeInsets}
                      >
                        <div>
                          {/* Letter Title in Letter's Unique Font */}
                          <h2
                            className={`font-bold tracking-wide mb-2 text-[#230702] text-left ${penguin.font?.headingClass || 'font-playfair text-base sm:text-lg'}`}
                          >
                            {penguin.letter.title}
                          </h2>

                          {/* Salutation */}
                          <p
                            className={`mb-3 font-semibold text-[#230702] text-left ${penguin.font?.salutationClass || 'font-playfair italic text-sm sm:text-base'}`}
                          >
                            {penguin.letter.salutation}
                          </p>

                          {/* Heartfelt Paragraphs in Bold, Highly Visible Ink */}
                          <div className="space-y-2.5 sm:space-y-3.5 text-[#160502]">
                            {penguin.letter.paragraphs.map((p, idx) => (
                              <p
                                key={idx}
                                className={`${penguin.font?.className || 'font-playfair font-semibold text-sm sm:text-base'} text-[#160502] leading-[1.65] sm:leading-[1.75] tracking-[0.01em] text-left`}
                              >
                                {p}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Sign-off & Signature in Elegant Right-Aligned Sepia Ink */}
                        <div className="mt-4 pt-2 flex flex-col items-end text-right shrink-0">
                          <span
                            className={`text-[#230702] ${penguin.font?.closingClass || penguin.font?.salutationClass || 'font-playfair italic text-xs sm:text-sm'}`}
                          >
                            {penguin.letter.closing}
                          </span>
                          <span
                            className={`font-bold text-[#2A0803] mt-0.5 ${penguin.font?.signatureClass || 'font-playfair text-sm sm:text-base'}`}
                          >
                            {penguin.letter.signature}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>

          {/* Modal Bottom Navigation Bar in Velvet & Gold */}
          <div className="px-4 sm:px-6 py-3.5 bg-[#28050E]/95 border-t border-[#D4A843]/30 flex items-center justify-between gap-2">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1 sm:gap-1.5 px-3 py-2 rounded-xl bg-[#3D0814] hover:bg-[#580E1E] text-[#FFE89E] text-xs sm:text-sm font-semibold font-cinzel tracking-wider transition-colors border border-[#D4A843]/40 shrink-0"
            >
              <ChevronLeft className="w-4 h-4 text-[#ECC870]" />
              <span>Previous</span>
            </button>

            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#8E1C34] via-[#A82642] to-[#731327] hover:from-[#9E203C] hover:to-[#82172D] text-[#FFF6E5] text-xs sm:text-sm font-bold font-cinzel tracking-wider shadow-md border border-[#D4A843]/60 transition-all"
            >
              Back
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-1 sm:gap-1.5 px-3 py-2 rounded-xl bg-[#3D0814] hover:bg-[#580E1E] text-[#FFE89E] text-xs sm:text-sm font-semibold font-cinzel tracking-wider transition-colors border border-[#D4A843]/40 shrink-0"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4 text-[#ECC870]" />
            </button>
          </div>
        </motion.div>

        {/* Full-size Photo Lightbox View */}
        <AnimatePresence>
          {isPhotoZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPhotoZoomed(false)}
              className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer"
            >
              <div className="relative max-w-md w-full bg-[#FAF5EE] p-3 rounded-2xl shadow-2xl border-2 border-[#D4A843]/60">
                <img
                  src={penguin.photo.src}
                  alt={penguin.photo.caption}
                  className="w-full max-h-[75vh] object-contain rounded-xl"
                />
                <p className="mt-3 text-center text-sm font-bold font-cinzel text-[#7B1A2C]">
                  {penguin.photo.caption}
                </p>
                <p className="text-center text-xs text-[#82696F] font-cormorant italic mt-1">
                  (Tap anywhere to close)
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
}
