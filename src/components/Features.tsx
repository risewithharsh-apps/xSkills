import React, { useState } from "react";
import { UNIQUE_FEATURES_2 } from "../data";
import { ShopifyImage } from "./ShopifyImage";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Features: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + UNIQUE_FEATURES_2.length) % UNIQUE_FEATURES_2.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % UNIQUE_FEATURES_2.length);
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
    <section className="pt-10 pb-16 md:py-16 px-4 bg-[#fbfbfe] w-full flex flex-col items-center gap-10 md:gap-16 overflow-hidden">
      
      {/* Why Choose xSkills */}
      <div className="w-full max-w-5xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight font-display flex flex-wrap justify-center gap-2">
            Why <span className="text-brand-orange">Choose xSkills?</span>
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
            Our learning design works because it focuses purely on efficiency and logic-based finger movements.
          </p>
        </div>

        {/* 5-item horizontal list layout - Desktop Only */}
        <div className="hidden md:grid grid-cols-5 gap-6">
          {UNIQUE_FEATURES_2.map((feat, index) => {
            // Setup mobile ordering and spans to visually swap index 2 (Community) and index 4 (Self-Paced)
            let orderClass = "md:order-none";
            let colSpanClass = "";
            
            if (index === 0) {
              orderClass = "order-1 " + orderClass;
            } else if (index === 1) {
              orderClass = "order-2 " + orderClass;
            } else if (index === 2) {
              // Community gets placed last on mobile (visually index 4)
              orderClass = "order-5 " + orderClass;
              colSpanClass = "col-span-2 md:col-span-1 max-w-xs mx-auto";
            } else if (index === 3) {
              orderClass = "order-4 " + orderClass;
            } else if (index === 4) {
              // Self-Paced gets placed third on mobile (visually index 2)
              orderClass = "order-3 " + orderClass;
            }

            return (
              <div
                key={index}
                className={`bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center ${orderClass} ${colSpanClass}`}
              >
                <div className="w-[100px] h-[100px] flex items-center justify-center mb-3">
                  <ShopifyImage
                    src={feat.image}
                    alt={feat.title}
                    className="max-h-full object-contain"
                    fallbackType="icon"
                  />
                </div>
                <h3 className="text-sm font-bold text-slate-800 font-display mb-1.5 min-h-[36px] flex items-center justify-center">
                  {feat.title}
                </h3>
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
                      src={UNIQUE_FEATURES_2[activeIndex].image}
                      alt={UNIQUE_FEATURES_2[activeIndex].title}
                      className="max-h-full object-contain"
                      fallbackType="icon"
                    />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 font-display min-h-[44px] flex items-center justify-center">
                    {UNIQUE_FEATURES_2[activeIndex].title}
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
            {UNIQUE_FEATURES_2.map((_, idx) => (
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
export default Features;
