import React, { useState } from "react";
import { ACHIEVERS, PARENTS } from "../data";
import { ShopifyImage } from "./ShopifyImage";
import { Star, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Testimonials: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<"achievers" | "parents">("achievers");
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);

  const list = activeGroup === "achievers" ? ACHIEVERS : PARENTS;

  const handleGroupChange = (group: "achievers" | "parents") => {
    setActiveGroup(group);
    setActiveIndex(0);
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
      // Swipe left -> Next card
      setActiveIndex((prev) => (prev + 1) % list.length);
    } else if (diffX > threshold) {
      // Swipe right -> Prev card
      setActiveIndex((prev) => (prev - 1 + list.length) % list.length);
    }

    setTouchStartX(null);
    setTouchCurrentX(null);
  };

  return (
    <section className="pt-10 pb-16 md:py-16 px-4 bg-white flex flex-col items-center">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight font-display flex flex-wrap justify-center gap-2">
            Real Solvers, <span className="text-brand-orange">Real Speed</span>
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
            Read high-quality feedback directly from our student achievers and their parents.
          </p>
        </div>

        {/* Group select buttons */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div className="inline-flex w-full max-w-[340px] sm:max-w-[420px] p-1 bg-slate-100/80 rounded-xl border border-slate-200">
            <button
              onClick={() => handleGroupChange("achievers")}
              className={`flex-1 text-center py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeGroup === "achievers"
                  ? "bg-brand-purple text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Real Achievers
            </button>
            <button
              onClick={() => handleGroupChange("parents")}
              className={`flex-1 text-center py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeGroup === "parents"
                  ? "bg-brand-purple text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Proud Parents
            </button>
          </div>
        </div>

        {/* Grid panel - Desktop view only */}
        <div className="hidden md:block relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 gap-8 items-stretch"
            >
              {list.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#fbfbfe] border border-slate-100 p-6 rounded-3xl relative shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Stars & Quote */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1 text-brand-orange">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <MessageSquare className="w-5 h-5 text-brand-purple/20" />
                    </div>

                    <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium italic">
                      "{item.feedback}"
                    </p>
                  </div>

                  {/* Profile info block */}
                  <div className="flex items-center gap-4 pt-5 mt-5 border-t border-slate-100/50">
                    <ShopifyImage
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full overflow-hidden object-cover border border-slate-200/50 shadow-sm"
                      fallbackType="avatar"
                      fallbackLabel={item.name}
                    />
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-slate-800 font-display">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {activeGroup === "achievers" ? "xSkills Graduate" : "Verified Parent"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stack of feedback cards - Mobile view only */}
        <div className="md:hidden flex flex-col items-center">
          <div
            className="relative w-full h-[410px] overflow-visible touch-pan-y mt-2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {list.map((item, index) => {
              const relativeIndex = (index - activeIndex + list.length) % list.length;
              
              // Only display the current and subsequent stacked cards for depth effect
              let scaleValue = 1 - relativeIndex * 0.05;
              let translateYValue = relativeIndex * 14;
              let opacityValue = 1 - relativeIndex * 0.15;
              let zIndexValue = 40 - relativeIndex;
              let pointerEventsStyle: "auto" | "none" = relativeIndex === 0 ? "auto" : "none";

              // If it's swiped away or dragged
              let transformStyle = `translate(-50%, ${translateYValue}px) scale(${scaleValue})`;
              if (relativeIndex === 0 && touchStartX !== null && touchCurrentX !== null) {
                const currentDrag = touchCurrentX - touchStartX;
                transformStyle = `translate(calc(-50% + ${currentDrag}px), ${translateYValue}px) scale(${scaleValue}) rotate(${currentDrag * 0.05}deg)`;
              }

              return (
                <div
                  key={index}
                  style={{
                    transform: transformStyle,
                    opacity: opacityValue,
                    zIndex: zIndexValue,
                    pointerEvents: pointerEventsStyle,
                  }}
                  className="absolute left-1/2 top-0 w-[90%] max-w-[340px] h-[370px] bg-[#fbfbfe] border border-slate-100 p-5 rounded-3xl shadow-md flex flex-col justify-between transition-all duration-300 ease-out select-none"
                  onClick={() => {
                    if (relativeIndex === 0) {
                      setActiveIndex((prev) => (prev + 1) % list.length);
                    }
                  }}
                >
                  <div className="space-y-3 pr-1">
                    {/* Stars & Quote */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5 text-brand-orange">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                      </div>
                      <MessageSquare className="w-4 h-4 text-brand-purple/20" />
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed font-medium italic">
                      "{item.feedback}"
                    </p>
                  </div>

                  {/* Profile info block */}
                  <div className="flex items-center gap-4 pt-4 mt-4 border-t border-slate-100/50 shrink-0">
                    <ShopifyImage
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full overflow-hidden object-cover border border-slate-200/50 shadow-sm"
                      fallbackType="avatar"
                      fallbackLabel={item.name}
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 font-display">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {activeGroup === "achievers" ? "xSkills Graduate" : "Verified Parent"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicators */}
          <div className="flex gap-2 justify-center mt-3">
            {list.map((_, idx) => (
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

          <p className="text-[10px] text-slate-400 mt-2 font-medium tracking-wide animate-pulse">
            Swipe or tap to view next card
          </p>
        </div>

      </div>
    </section>
  );
};
export default Testimonials;

