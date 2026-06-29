import React from "react";
import { HelpCircle, ChevronRight } from "lucide-react";
import { ShopifyImage } from "./ShopifyImage";

interface PromoBannerProps {
  onOpenQuiz: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onOpenQuiz }) => {
  return (
    <section className="px-4 py-8 md:px-8 w-full max-w-5xl mx-auto mt-0 mb-12 md:my-12">
      <div className="relative bg-brand-purple rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between shadow-2xl border border-brand-purple/20 gap-8 min-h-[220px]">
        {/* Confined background elements to prevent boundary overflow */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/[0.03] rounded-full pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-brand-orange/[0.08] rounded-full pointer-events-none" />
        </div>

        {/* Text and Button details - stacked vertically */}
        <div className="flex-1 space-y-6 z-10 text-center md:text-left max-w-xl">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3.5xl font-black text-white leading-tight font-display">
              Not sure which level <br className="hidden sm:inline" />
              <span className="text-brand-orange">would fit you?</span>
            </h2>
            <p className="text-xs md:text-sm text-white/80 leading-relaxed font-sans max-w-md">
              Answer 3 quick speedcubing question diagnostics and let our expert engines recommend the best course plan and solver track for you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4">
            <button
              onClick={onOpenQuiz}
              className="w-full sm:w-auto bg-brand-orange text-white hover:bg-brand-orange/95 px-8 py-3.5 rounded-xl font-extrabold text-sm tracking-wide shadow-lg shadow-brand-orange/30 transition-all flex items-center justify-center gap-2 select-none cursor-pointer group shrink-0"
            >
              <span>Take the Quiz</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Overlap boy image popping out of the top and flush at the bottom */}
        <div className="hidden sm:block shrink-0 relative z-20 -mt-12 md:-mt-16 -mb-6 md:-mb-10 -mr-6 md:-mr-10">
          <div className="h-[280px] md:h-[340px] w-auto">
            <ShopifyImage
              src="https://raw.githubusercontent.com/Cubelelo-admin/XSkills/main/not-sure.png"
              alt="Cube Diagnostic Level Onboarding Guide"
              className="h-full w-auto object-contain pointer-events-none"
              fallbackType="icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default PromoBanner;
