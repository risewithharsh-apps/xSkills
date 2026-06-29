import React, { useState, useEffect } from "react";
import { MENTORS } from "../data";
import { ShopifyImage } from "./ShopifyImage";
import { ExternalLink, GraduationCap, Award } from "lucide-react";

export const Mentors: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);
  const [isSwipedAway, setIsSwipedAway] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null);

  // Auto-swipe disabled to only allow manual swipes and button triggers.

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
    const threshold = 50;

    if (diffX < -threshold) {
      // Swipe left -> Next
      setSwipeDirection("left");
      setIsSwipedAway(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % MENTORS.length);
        setIsSwipedAway(false);
        setSwipeDirection(null);
      }, 300);
    } else if (diffX > threshold) {
      // Swipe right -> Prev
      setSwipeDirection("right");
      setIsSwipedAway(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev - 1 + MENTORS.length) % MENTORS.length);
        setIsSwipedAway(false);
        setSwipeDirection(null);
      }, 300);
    }

    setTouchStartX(null);
    setTouchCurrentX(null);
  };

  return (
    <section className="pt-10 pb-16 md:py-16 px-4 bg-white flex flex-col items-center">
      <style>{`
        @keyframes peek-wiggle {
          0%, 100% { transform: translateX(0) rotate(0) scale(1); }
          12% { transform: translateX(-16px) rotate(-2deg) scale(1); }
          24% { transform: translateX(8px) rotate(1deg) scale(1); }
          36% { transform: translateX(0) rotate(0) scale(1); }
        }
        .animate-peek-wiggle {
          animation: peek-wiggle 4.5s ease-in-out infinite;
        }
      `}</style>

      <div className="w-full max-w-5xl">
        {/* Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight font-display flex flex-wrap justify-center gap-2">
            Meet your <span className="text-brand-orange">Mentors</span>
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
            Learn directly from World Cube Association (WCA) record holders with over 30 years of combined training experience.
          </p>
        </div>

        {/* Profiles Grid (Desktop view) */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-stretch">
          {MENTORS.map((mentor, index) => (
            <div
              key={index}
              className="bg-[#fafbfc] border border-slate-100/70 p-4 md:p-6 rounded-3xl shadow-sm hover:shadow-xl hover:border-brand-purple/10 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Avatar layout */}
                <div className="w-full h-[220px] bg-brand-light-purple/45 rounded-2xl overflow-hidden mb-3 md:mb-6 flex justify-center items-end relative border border-brand-purple/10">
                  <ShopifyImage
                    src={mentor.image}
                    alt={mentor.name}
                    className="max-h-[90%] object-contain group-hover:scale-105 transition-transform duration-300"
                    fallbackType="mentor"
                    fallbackLabel={mentor.name}
                  />

                  {/* Icon details */}
                  <div className="absolute top-3 left-3 bg-brand-purple text-white p-2 rounded-xl shadow-md shadow-brand-purple/10">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>

                {/* Mentor Info */}
                <h3 className="text-lg md:text-xl font-extrabold text-slate-800 font-display">
                  {mentor.name}
                </h3>

                <div className="flex items-start gap-1 pb-1 md:pb-3 text-brand-orange text-xs font-bold leading-normal">
                  <Award className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{mentor.experience}</span>
                </div>

                <p className="hidden md:block text-xs md:text-sm text-slate-500 leading-relaxed pt-2">
                  {mentor.description}
                </p>
              </div>

              {/* Outside WCA profile button */}
              <div className="pt-3 mt-3 md:pt-6 md:mt-6 border-t border-slate-100 flex items-center">
                <a
                  href={mentor.wcaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-purple text-white md:bg-brand-purple/5 md:hover:bg-brand-purple md:text-brand-purple md:hover:text-white py-2.5 rounded-xl text-xs font-bold transition-all border border-transparent md:border-brand-purple/10 select-none cursor-pointer"
                >
                  <span>WCA Official Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stacked loop swipable cards (Mobile view) */}
        <div className="md:hidden flex flex-col items-center">
          <div
            className="relative w-full max-w-[310px] h-[370px] flex items-center justify-center select-none touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {MENTORS.map((mentor, index) => {
              const relativeIndex = (index - activeIndex + MENTORS.length) % MENTORS.length;
              if (relativeIndex > 2) return null;

              let transformStyle = "";
              let opacityStyle = 1;
              let zIndexStyle = 30;
              let pointerEventsStyle: "auto" | "none" = "none";

              if (relativeIndex === 0) {
                zIndexStyle = 30;
                pointerEventsStyle = "auto";
                if (isSwipedAway) {
                  const directionMultiplier = swipeDirection === "left" ? -1 : 1;
                  transformStyle = `translateX(${directionMultiplier * 120}%) rotate(${directionMultiplier * 15}deg) scale(0.9)`;
                  opacityStyle = 0;
                } else if (touchStartX !== null && touchCurrentX !== null) {
                  const currentDrag = touchCurrentX - touchStartX;
                  const rotation = (currentDrag / 150) * 10;
                  transformStyle = `translateX(${currentDrag}px) rotate(${rotation}deg) scale(1)`;
                } else {
                  transformStyle = "translateX(0) rotate(0) scale(1)";
                }
              } else if (relativeIndex === 1) {
                zIndexStyle = 20;
                opacityStyle = 0.95;
                transformStyle = "translateY(12px) scale(0.93) rotate(-4deg)";
              } else {
                zIndexStyle = 10;
                opacityStyle = 0.85;
                transformStyle = "translateY(24px) scale(0.86) rotate(4deg)";
              }

              const isWiggling = relativeIndex === 0 && touchStartX === null && !isSwipedAway;

              const inlineStyle: React.CSSProperties = {
                opacity: opacityStyle,
                zIndex: zIndexStyle,
                pointerEvents: pointerEventsStyle,
              };

              if (!isWiggling || relativeIndex !== 0) {
                inlineStyle.transform = transformStyle;
              }

              return (
                <div
                  key={index}
                  style={inlineStyle}
                  className={`absolute inset-0 bg-[#fafbfc] border border-slate-100/75 p-5 rounded-3xl shadow-md flex flex-col justify-between transition-all duration-300 ease-out ${
                    isWiggling ? "animate-peek-wiggle" : ""
                  }`}
                >
                  <div>
                    {/* Avatar layout */}
                    <div className="w-full h-[180px] bg-brand-light-purple/45 rounded-2xl overflow-hidden mb-5 flex justify-center items-end relative border border-brand-purple/10">
                      <ShopifyImage
                        src={mentor.image}
                        alt={mentor.name}
                        className="max-h-[90%] object-contain"
                        fallbackType="mentor"
                        fallbackLabel={mentor.name}
                      />

                      {/* Icon details */}
                      <div className="absolute top-3 left-3 bg-brand-purple text-white p-2 rounded-xl shadow-md shadow-brand-purple/10">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Mentor Info */}
                    <h3 className="text-lg font-extrabold text-slate-800 font-display">
                      {mentor.name}
                    </h3>

                    <div className="flex items-start gap-1 pb-1 text-brand-orange text-xs font-bold leading-normal">
                      <Award className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{mentor.experience}</span>
                    </div>
                  </div>

                  {/* Profile link */}
                  <div className="pt-3 border-t border-slate-100 flex items-center">
                    <a
                      href={mentor.wcaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand-purple text-white py-2 rounded-xl text-xs font-bold transition-all border border-transparent select-none cursor-pointer"
                    >
                      <span>WCA Official Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>


          {/* Swipe indicator text */}
          <p className="text-[10px] text-slate-400 mt-4 font-medium tracking-wide flex items-center gap-1.5 animate-pulse">
            Swipe left or right to explore
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
