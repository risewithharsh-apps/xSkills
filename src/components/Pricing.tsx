import React, { useState } from "react";
import { PLANS } from "../data";
import { Check, X } from "lucide-react";

export default function Pricing() {
  const [activePlanIndex, setActivePlanIndex] = useState(1); // Default to middle plan (Intermediate)
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);

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
      // Swipe left -> Next
      setActivePlanIndex((prev) => (prev + 1) % PLANS.length);
    } else if (diffX > threshold) {
      // Swipe right -> Prev
      setActivePlanIndex((prev) => (prev - 1 + PLANS.length) % PLANS.length);
    }

    setTouchStartX(null);
    setTouchCurrentX(null);
  };

  return (
    <div id="coursePlan" className="pt-10 pb-16 md:py-16 px-4 bg-brand-light-purple/40 scroll-mt-[60px] md:scroll-mt-[100px] overflow-hidden">
      <style>{`
        .custom-scrollbar-light::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar-light::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar-light::-webkit-scrollbar-thumb {
          background-color: rgba(148, 163, 184, 0.3);
          border-radius: 9999px;
        }
        .custom-scrollbar-dark::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar-dark::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar-dark::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 9999px;
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight font-display flex flex-wrap justify-center gap-2">
            Course <span className="text-brand-orange">Plans</span>
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
            Choose the membership track that matches your budget and solving aspirations.
          </p>
        </div>

        {/* Pricing Grid (Desktop view) */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, index) => {
            const isPremium = plan.title.includes("Advanced");

            return (
              <div
                key={index}
                className={`relative rounded-3xl overflow-hidden flex flex-col justify-between p-5 pt-10 pb-6 md:p-6 md:pt-14 md:pb-8 transition-all duration-300 min-h-fit md:min-h-[580px] ${
                  plan.isPopular
                    ? "bg-white border-2 border-brand-orange shadow-2xl md:scale-[1.03] z-10"
                    : isPremium
                    ? "bg-brand-purple text-white shadow-xl hover:translate-y-[-4px]"
                    : "bg-white border border-slate-100 shadow-xl hover:translate-y-[-4px]"
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-4 right-4 bg-brand-orange text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider shadow-sm opacity-70">
                    Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <div>
                  <h3
                    className={`text-lg md:text-xl font-extrabold font-display uppercase tracking-wider mb-2 ${
                      isPremium ? "text-brand-orange" : plan.isPopular ? "text-brand-orange" : "text-brand-purple"
                    }`}
                  >
                    {plan.title}
                  </h3>

                  {/* Pricing tag */}
                  <div className="flex items-baseline gap-2 mb-4 md:mb-6">
                    <span className={`text-3xl md:text-4xl font-black ${isPremium ? "text-white" : "text-slate-800"}`}>
                      {plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className={`text-sm line-through ${isPremium ? "text-white/60" : "text-slate-400"}`}>
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>

                  <hr className={`border-t mb-4 md:mb-6 ${isPremium ? "border-white/10" : "border-slate-100"}`} />

                  {/* Features List */}
                  <ul className="space-y-2.5 md:space-y-3.5 mb-6 md:mb-8 text-sm">
                    {plan.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className={`flex items-start gap-2.5 leading-tight ${
                          feat.included
                            ? isPremium
                              ? "text-white/95"
                              : "text-slate-700"
                            : isPremium
                            ? "text-white/40 line-through"
                            : "text-slate-300 line-through"
                        }`}
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          {feat.included ? (
                            <Check className={`w-4 h-4 ${isPremium ? "text-brand-orange" : "text-green-500"}`} />
                          ) : (
                            <X className="w-4 h-4" />
                          )}
                        </div>
                        <span className="font-medium">{feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit Action */}
                <button
                  onClick={() => {
                    if (plan.title.toLowerCase().includes("beginner")) {
                      window.location.href = "https://app.xskills.cubelelo.com/checkout/ProductBundle/57?utm_source=beginner&utm_medium=in&utm_campaign=xskills-enroll";
                    } else if (plan.title.toLowerCase().includes("intermediate")) {
                      window.location.href = "https://app.xskills.cubelelo.com/checkout/ProductBundle/1844?utm_source=intermediate&utm_medium=in&utm_campaign=xskills-enroll";
                    } else if (plan.title.toLowerCase().includes("advanced")) {
                      window.location.href = "https://app.xskills.cubelelo.com/checkout/ProductBundle/1843?utm_source=advanced&utm_medium=in&utm_campaign=xskills-enroll";
                    }
                  }}
                  className={`w-full py-3 md:py-3.5 rounded-2xl font-bold tracking-wide transition-all shadow-md active:scale-[0.98] cursor-pointer ${
                    isPremium
                      ? "bg-brand-orange hover:bg-brand-orange/95 text-white shadow-brand-orange/20"
                      : plan.isPopular
                      ? "bg-brand-purple hover:bg-brand-purple/95 text-white shadow-brand-purple/20"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                  }`}
                >
                  Enroll Now
                </button>
              </div>
            );
          })}
        </div>

        {/* 3D Swipe Carousel (Mobile View Only) */}
        <div className="md:hidden flex flex-col items-center">
          <div
            className="relative w-full h-[470px] overflow-visible touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {PLANS.map((plan, index) => {
              const isPremium = plan.title.includes("Advanced");
              const relativeIndex = (index - activePlanIndex + PLANS.length) % PLANS.length;

              let transformStyle = "";
              let opacityStyle = 1;
              let zIndexStyle = 30;
              let pointerEventsStyle: "auto" | "none" = "none";

              if (relativeIndex === 0) {
                // Active Card in the middle
                zIndexStyle = 30;
                opacityStyle = 1;
                pointerEventsStyle = "auto";
                if (touchStartX !== null && touchCurrentX !== null) {
                  const currentDrag = touchCurrentX - touchStartX;
                  transformStyle = `translate(calc(-50% + ${currentDrag}px), 0) scale(1)`;
                } else {
                  transformStyle = "translate(-50%, 0) scale(1)";
                }
              } else if (relativeIndex === 1) {
                // Right Card zoomed out
                zIndexStyle = 10;
                opacityStyle = 0.55;
                transformStyle = "translate(-10%, 0) scale(0.8) rotate(3deg)";
              } else {
                // Left Card zoomed out
                zIndexStyle = 10;
                opacityStyle = 0.55;
                transformStyle = "translate(-90%, 0) scale(0.8) rotate(-3deg)";
              }

              return (
                <div
                  key={index}
                  style={{
                    transform: transformStyle,
                    opacity: opacityStyle,
                    zIndex: zIndexStyle,
                    pointerEvents: pointerEventsStyle,
                  }}
                  className={`absolute left-1/2 top-0 w-[78%] max-w-[270px] h-[450px] rounded-3xl overflow-hidden flex flex-col justify-between p-5 pt-8 pb-5 transition-all duration-300 ease-out shadow-lg ${
                    plan.isPopular
                      ? "bg-white border-2 border-brand-orange shadow-brand-orange/10"
                      : isPremium
                      ? "bg-brand-purple text-white"
                      : "bg-white border border-slate-100"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.isPopular && (
                    <div className="absolute top-3 right-3 bg-brand-orange text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider opacity-90">
                      Popular
                    </div>
                  )}

                  {/* Plan Header - Frozen */}
                  <div className="select-none flex-shrink-0">
                    <h3
                      className={`text-base font-extrabold font-display uppercase tracking-wider mb-1 ${
                        isPremium ? "text-brand-orange" : plan.isPopular ? "text-brand-orange" : "text-brand-purple"
                      }`}
                    >
                      {plan.title}
                    </h3>

                    {/* Pricing tag */}
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className={`text-2xl font-black ${isPremium ? "text-white" : "text-slate-800"}`}>
                        {plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className={`text-xs line-through ${isPremium ? "text-white/60" : "text-slate-400"}`}>
                          {plan.originalPrice}
                        </span>
                      )}
                    </div>

                    <hr className={`border-t mb-3 ${isPremium ? "border-white/10" : "border-slate-100"}`} />
                  </div>

                  {/* Features List - Scrollable */}
                  <div className={`flex-grow overflow-y-auto pr-1 mb-4 ${isPremium ? "custom-scrollbar-dark" : "custom-scrollbar-light"}`}>
                    <ul className="space-y-2 text-xs">
                      {plan.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className={`flex items-start gap-2 leading-snug ${
                            feat.included
                              ? isPremium
                                ? "text-white/95"
                                : "text-slate-700"
                              : isPremium
                              ? "text-white/40 line-through"
                              : "text-slate-300 line-through"
                          }`}
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            {feat.included ? (
                              <Check className={`w-3.5 h-3.5 ${isPremium ? "text-brand-orange" : "text-green-500"}`} />
                            ) : (
                              <X className="w-3.5 h-3.5" />
                            )}
                          </div>
                          <span className="font-medium">{feat.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Submit Action */}
                  <button
                    onClick={() => {
                      if (plan.title.toLowerCase().includes("beginner")) {
                        window.location.href = "https://app.xskills.cubelelo.com/checkout/ProductBundle/57?utm_source=beginner&utm_medium=in&utm_campaign=xskills-enroll";
                      } else if (plan.title.toLowerCase().includes("intermediate")) {
                        window.location.href = "https://app.xskills.cubelelo.com/checkout/ProductBundle/1844?utm_source=intermediate&utm_medium=in&utm_campaign=xskills-enroll";
                      } else if (plan.title.toLowerCase().includes("advanced")) {
                        window.location.href = "https://app.xskills.cubelelo.com/checkout/ProductBundle/1843?utm_source=advanced&utm_medium=in&utm_campaign=xskills-enroll";
                      }
                    }}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs tracking-wide transition-all shadow-md active:scale-[0.98] cursor-pointer`}
                    style={{
                      backgroundColor: isPremium ? "#ff6b00" : plan.isPopular ? "#4f1787" : "#f1f5f9",
                      color: isPremium || plan.isPopular ? "#ffffff" : "#1e293b",
                    }}
                  >
                    Enroll Now
                  </button>
                </div>
              );
            })}
          </div>

          {/* Dots Indicators */}
          <div className="flex gap-2 justify-center mt-3">
            {PLANS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActivePlanIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === activePlanIndex ? "bg-brand-orange w-6" : "bg-slate-300"
                }`}
                aria-label={`Go to plan ${idx + 1}`}
              />
            ))}
          </div>

          <p className="text-[10px] text-slate-400 mt-2 font-medium tracking-wide animate-pulse">
            Swipe to explore course plans
          </p>
        </div>

      </div>
    </div>
  );
}

