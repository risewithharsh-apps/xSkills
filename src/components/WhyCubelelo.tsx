import React, { useState } from "react";
import { CUBELELO_EFFECTS } from "../data";
import { ShopifyImage } from "./ShopifyImage";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const WhyCubelelo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CUBELELO_EFFECTS.length) % CUBELELO_EFFECTS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CUBELELO_EFFECTS.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchCurrentX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    setTouchCurrentX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchCurrentX === null) return;
    const diffX = touchCurrentX - touchStartX;
    const threshold = 40;

    if (diffX < -threshold) {
      handleNext();
    } else if (diffX > threshold) {
      handlePrev();
    }

    setTouchStartX(null);
    setTouchCurrentX(null);
  };

  return (
    <section className="pt-10 pb-16 md:py-16 px-4 bg-[#fbfbfe] w-full flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight font-display flex flex-wrap justify-center gap-2">
            Why <span className="text-brand-orange">xSkills by Cubelelo?</span>
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
            The standard of logic, structure, and quality from India's No. 1 speedcubing store.
          </p>
        </div>

        {/* 5-item horizontal list layout - Desktop Only */}
        <div className="hidden md:grid grid-cols-5 gap-6">
          {CUBELELO_EFFECTS.map((feat, index) => {
            // Swap index 0 (Global speedcubing experts) with index 2 (India's No. 1 Puzzle Store) initially,
            // and now swap Delivering Joy (index 4) with Global speedcubing experts (index 0).
            // This results in:
            // index 2 (No. 1 Puzzle Store) -> order-1 (visually 1st)
            // index 1 (Active Learners) -> order-2 (visually 2nd)
            // index 4 (Delivering Joy) -> order-3 (visually 3rd)
            // index 3 (Trusted by 1M) -> order-4 (visually 4th)
            // index 0 (Global speedcubing experts) -> order-5 (visually 5th - needs col-span-2 on mobile)
            let orderClass = "md:order-none";
            let colSpanClass = "";
            if (index === 0) {
              orderClass = "order-5 " + orderClass;
              colSpanClass = "col-span-2 sm:col-span-1 max-w-xs mx-auto";
            } else if (index === 1) {
              orderClass = "order-2 " + orderClass;
            } else if (index === 2) {
              orderClass = "order-1 " + orderClass;
            } else if (index === 3) {
              orderClass = "order-4 " + orderClass;
            } else if (index === 4) {
              orderClass = "order-3 " + orderClass;
            }

            return (
              <div
                key={index}
                className={`bg-white p-5 sm:p-6 rounded-2xl shadow-sm sm:shadow-md border border-slate-100 sm:border-slate-100/50 hover:shadow-lg sm:hover:shadow-xl hover:border-brand-purple/10 flex flex-col items-center text-center transition-all duration-300 ${orderClass} ${colSpanClass}`}
              >
                <div className="w-[100px] h-[100px] sm:w-[80px] sm:h-[80px] flex items-center justify-center mb-3 sm:mb-4 transition-transform hover:scale-110 duration-300 shrink-0">
                  <ShopifyImage
                    src={feat.image}
                    alt={feat.title}
                    className="max-h-full object-contain pointer-events-none"
                    fallbackType="icon"
                  />
                </div>
                <h3 className="text-sm sm:text-sm font-bold sm:font-extrabold text-slate-800 font-display mb-1.5 sm:mb-2 leading-snug min-h-[36px] sm:min-h-0 flex items-center justify-center sm:block">
                  {feat.title}
                </h3>
                <p className="hidden sm:block text-[11px] text-slate-500 leading-relaxed font-sans mt-auto">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Swipeable Carousel - Mobile Only */}
        <div className="md:hidden flex flex-col items-center w-[calc(100%+2rem)] -mx-4 overflow-hidden">
          <div className="relative w-full flex items-center justify-between px-4 gap-2">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-500 active:bg-slate-50 transition-colors shrink-0"
              aria-label="Previous feature"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Active Card Container */}
            <div
              className="flex-1 max-w-[310px] w-full touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="w-full bg-white p-7 rounded-2xl shadow-md border border-slate-100 text-center flex flex-col items-center h-[260px] justify-center"
                >
                  <div className="w-[150px] h-[150px] flex items-center justify-center mb-5">
                    <ShopifyImage
                      src={CUBELELO_EFFECTS[activeIndex].image}
                      alt={CUBELELO_EFFECTS[activeIndex].title}
                      className="max-h-full object-contain"
                      fallbackType="icon"
                    />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 font-display min-h-[44px] flex items-center justify-center">
                    {CUBELELO_EFFECTS[activeIndex].title}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-500 active:bg-slate-50 transition-colors shrink-0"
              aria-label="Next feature"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2 justify-center mt-5">
            {CUBELELO_EFFECTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "bg-brand-orange w-5" : "bg-slate-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCubelelo;
